/*
 * Copyright (c) 2017 NEM
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
import {Transaction} from "../models";
import {Address} from "../models/account/Address";
import {AccountHttp, QueryParams} from "./AccountHttp";
import {Pageable} from "./Pageable";

/**
 * @internal
 */
export class AllTransactionsPageable extends Pageable<Transaction[]> {
  private readonly resource: AccountHttp;
  private readonly address: Address;
  private readonly params: QueryParams;

  /**
   * @param source
   * @param address
   * @param params
   */
  constructor(source: AccountHttp, address: Address, params: QueryParams) {
    super();
    this.resource = source;
    this.address = address;
    this.params = params;
  }

  public nextPage() {
    this.resource.allTransactions(this.address, this.params)
      .subscribe((next) => {
        if (next.length != 0) {
          this.params.id = next[next.length - 1].getTransactionInfo().id;
          this.next(next);
        } else {
          this.complete();
        }
      }, (err) => {
        this.error(err);
      });
  }
}

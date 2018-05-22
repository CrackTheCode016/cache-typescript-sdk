/*
 * The MIT License (MIT)
 *
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

import {MosaicProperties} from "./MosaicDefinition";
import {MosaicId} from "./MosaicId";
import {MosaicTransferable} from "./MosaicTransferable";

export class DimCoin extends MosaicTransferable {

  constructor(amount: number) {
    super(new MosaicId("dim", "coin"), new MosaicProperties(6, 9000000000, true, false), amount);
  }
}

export class DimToken extends MosaicTransferable {

  constructor(amount: number) {
    super(new MosaicId("dim", "token"), new MosaicProperties(6, 10000000, true, false), amount);
  }
}

export class EcobitEco extends MosaicTransferable {
  constructor(amount: number) {
    super(new MosaicId("ecobit", "eco"), new MosaicProperties(0, 8888888888, true, false), amount);
  }
}

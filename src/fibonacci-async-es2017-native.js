// Copyright 2018 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     <https://www.apache.org/licenses/LICENSE-2.0>
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

"use strict";

const fibonacci = require("../lib/fibonacci-async.js");
const measure = require("../lib/measure-async.js");

(async () => {
  try {
    const time = await measure(fibonacci, 42);
    console.log(`Time(fibonacci-async-es2017-native): ${time} ms.`);
  } catch (err) {
    console.error(err);
  }
})();
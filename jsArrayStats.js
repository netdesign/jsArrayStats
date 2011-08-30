/*
 * jsArrayStats
 * A javascript library to gets statistics from an Array or Object (Associative Array)
 * Copyright 2011, Netdesign di Fabio Buda (http://www.netd.it)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *

 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.

 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

var ArrayStats = (function () {
	function ArrayStats(array, precision) {
		if (array) {
			if (array instanceof Array) {
				this.array = array;
			} else if (array instanceof Object) {
				this.array = hashToArray(array);
			}

			this.type = null;
			this.precision = precision || 2;
		} else {
			return null;
		}
	}

	function hashToArray(obj) {
		return Object.keys(obj).map(function (key) {
			return obj[key];
		});
	}

	var proto = ArrayStats.prototype;

	proto.mean = function mean() {
		var total = this.array.reduce(function (prev, val) {
			return prev + val;
		}, 0);
		return (total / this.array.length).toFixed(this.precision);
	};

	proto.geometricMean = function geometricMean() {
		var total = this.array.reduce(function (prev, val) {
			return prev * val;
		}, 1);
		return Math.pow(total, 1 / this.length).toFixed(this.precision);
	};
	
	proto.harmonicMean = function harmonicMean() {
		var total = this.array.reduce(function (prev, val) {
			return prev + (1 / val);
		}, 0);
		return (this.array.length / total).toFixed(this.precision);
	};

	proto.maxValue = function maxValue() {
		var out = {};
		out.value = Math.max.apply(Math, this.array);
		out.index = this.array.indexOf(out.value);
		return out;
	};

	return ArrayStats;
}());
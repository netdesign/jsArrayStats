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

function arrayStats(array){
				this.array = array;
				if(typeof(array) == undefined){
					this.array = undefined;
					this.length = undefined;
				} else {
					this.array = array;
					this.length = array.length;
					}
				this.length = array.length;
				this.mean = mean;
				this.geometricMean = geometricMean;
				this.harmonicMean = harmonicMean;
				this.precision = 2;
				this.type = null;

				
				if (this.array instanceof Array) {
					this.type = "Array";				
				} else {
					this.type = "Object";
					this.mean = objMean;
					this.geometricMean = objGeometricMean;
					this.harmonicMean = objHarmonicMean;
				}

				function mean(){
					var thisTotal = 0;
					for(i = this.length-1; i >= 0; i--){
						thisTotal += this.array[i];
					}
					return((thisTotal/this.length).toFixed(this.precision));
				};

				function geometricMean(){
					var thisTotal = 1;
					for(i = this.length-1; i >= 0; i--){
						thisTotal *= this.array[i];
					}
					return((Math.pow(thisTotal, 1/this.length)).toFixed(this.precision));
				};
				
				function harmonicMean(){
					var thisTotal = 0;
					for(i = this.length-1; i >= 0; i--){
						thisTotal += 1/this.array[i];
					}
					return((this.length/thisTotal).toFixed(this.precision));
				};


				function objMean(){
					var thisTotal = 0;
					this.length = 0;
					for(key in this.array){
                                                this.length += 1;
						thisTotal += this.array[key];
					}
					return((thisTotal/this.length).toFixed(this.precision));
				};


				function objGeometricMean(){
					var thisTotal = 1;
					this.length = 0;
					for(key in this.array){
                                                this.length += 1;
						thisTotal *= this.array[key];
					}
					return((Math.pow(thisTotal, 1/this.length)).toFixed(this.precision));
				};


				function objHarmonicMean(){
					var thisTotal = 0;
					this.length = 0;
					for(key in this.array){
                                                this.length += 1;
						thisTotal += 1/this.array[key];
					}
					return((this.length/thisTotal).toFixed(this.precision));
				};


			}

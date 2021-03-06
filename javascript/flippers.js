(
	function ($) {
		{
				Flippers = function(place, config) {
					// Initialize this.
					this.initialize(place, config); // Detaches initialization from the object reference.
				}
				
				/* Initialize the object with a proper place and config.
				* 
				* Should maintain reference to the original config object.
				*/
				Flippers.prototype.initialize = function(place, config) {
					var self = this;
					var defaultConfig = {
						itemStyle: {
							__translateX__: function(i) {
								//return 0.3 * self.config.itemSpacing * ((i + (2 * self.config.extraCount + 1)) % 5) - 50 - 100; // Grid
								return i * ((i == -self.config.extraCount) || (i == self.config.extraCount) ? self.config.itemSpacing * self.config.exitSpeed : self.config.itemSpacing) - 50; // Horizontal bar, large items.
								//return 0.3 * i * ((i == -self.config.extraCount) || (i == self.config.extraCount) ? self.config.itemSpacing * self.config.exitSpeed : self.config.itemSpacing) - 50; // Horizontal bar, small items.
								//return -50 + 75 * Math.cos(i); // Wavy movement.
								//return -50 + 400 * Math.cos((i / (2 * self.config.extraCount + 1) * 2 + 0.5) * Math.PI); // Circle.
								//return i <= 0 ? 2 * i - 50 : 100 * i - 50; // Vista tab list -like menu.
								//return i == 0 ? -218 : -220; // Selected a bit out.
								return -170; // On the left.
								return -50; // No effect.
							},
							__translateY__: function(i) {
								//return i * ((i == -self.config.extraCount) || (i == self.config.extraCount) ? self.config.itemSpacing * self.config.exitSpeed : self.config.itemSpacing) - 50; // 
								//return 0.3 * self.config.itemSpacing * Math.floor((i + (2 * self.config.extraCount + 1)) / 5) - 50 - 100; // Grid
								//return i * ((i == -self.config.extraCount) || (i == self.config.extraCount) ? self.config.itemSpacing * self.config.exitSpeed : self.config.itemSpacing) - 50; // Vertical bar.
								//return -50 + 75 * Math.sin(i); // Wavy movement.
								//return -450 + 300 * Math.sin((i / (2 * self.config.extraCount + 1) * 2 + 0.5) * Math.PI); // Circle.
								//return i <= 0 ? 2 * i - 50 : 100 * i - 50; // Vista tab list -like menu.
								
								return -50; // No effect.
							},
							__translateZ__: function(i) {
								//return -50 - i*i * self.config.itemSpacing / 10;
								return 0;
							},
							__rotateX__: function(i) {
								return 0; // No effect.
							},
							__rotateY__: function(i) {
								//if (i === 0) return 0;
								//return i < 0 ? 36 : -36; // Bend extra items towards the center.
								return 0; // No effect.
							},
							__rotateZ__: function(i) {
								//return i / (2 * self.config.extraCount + 1) * 360;
								return 0; // No effect.
							},
							__scaleX__: function(i) {
								//return 0.3 / (0.05 * i * i + 0.4); // Big in the middle, small on the edges.
								return 0.6 / (0.05 * i * i + 0.4); // Big in the middle, small on the edges.
								//return 0.3; // Small.
								//return i == 0 ? 1.05 : 1; // Selected a bit out.
								return 1; // No effect.
							},
							__scaleY__: function(i) {
								//return 0.3 / (0.05 * i * i + 0.4); // Big in the middle, small on the edges.
								return 0.6 / (0.05 * i * i + 0.4); // Big in the middle, small on the edges.
								//return 0.3; // Small.
								return 1; // No effect.
							},
							__scaleZ__: function(i) {
								return 1;
							},
							opacity: function(i) {
								return (i == -self.config.extraCount) || (i == self.config.extraCount) ? 0 : 1; // Hide first and last one.
								
								//return i === 0 ? 1 : (i == -self.config.extraCount) || (i == self.config.extraCount) ? 0 : 0.5; // Emphasize the current one, fade others.
								
								//return i === 0 ? 1 : 0; // Only show the current one.
								//return 1 - Math.abs(i) / self.config.extraCount; // Linear fade.
								//return i > 0 ? 0 : 1 - Math.abs(i) / self.config.extraCount; // One-way linear fade.
								return 1;
							},
							"z-index": function(i) {
								return i > 0 ? -i : i; // Current one at the top.
								//return i; // Linear sort.
							},
							transform: function(i) {
								return "translateX(" + self.config.itemStyle.__translateX__(i) + "%) " +
									"translateY(" + self.config.itemStyle.__translateY__(i) + "%) " +
									"perspective(1000px) " +
									"translateZ(" + self.config.itemStyle.__translateZ__(i) + "px) " +
									"rotateX(" + self.config.itemStyle.__rotateX__(i) + "deg) " +
									"rotateY(" + self.config.itemStyle.__rotateY__(i) + "deg) " +
									"rotateZ(" + self.config.itemStyle.__rotateZ__(i) + "deg) " +
									"scaleX(" + self.config.itemStyle.__scaleX__(i) + ") " +
									"scaleY(" + self.config.itemStyle.__scaleY__(i) + ") " +
									"scaleZ(" + self.config.itemStyle.__scaleZ__(i) + ") " +
									";";
							},
							
							"-webkit-transform": function(i) {
								return "translateX(" + self.config.itemStyle.__translateX__(i) + "%) " +
									"translateY(" + self.config.itemStyle.__translateY__(i) + "%) " +
									"perspective(1000px) " +
									"translateZ(" + self.config.itemStyle.__translateZ__(i) + "px) " +
									"rotateX(" + self.config.itemStyle.__rotateX__(i) + "deg) " +
									"rotateY(" + self.config.itemStyle.__rotateY__(i) + "deg) " +
									"rotateZ(" + self.config.itemStyle.__rotateZ__(i) + "deg) " +
									"scaleX(" + self.config.itemStyle.__scaleX__(i) + ") " +
									"scaleY(" + self.config.itemStyle.__scaleY__(i) + ") " +
									"scaleZ(" + self.config.itemStyle.__scaleZ__(i) + ") " +
									";";
							}
							
						},
						containerStyle: {
							transformStrf: function(i) {
								return "";
							}
						}
					};
					
					if (typeof(config) !== 'object') config = {}; // We only take objects.
					
					// Add what was missing with defaults.
					for (var item in defaultConfig) {
						if (typeof(config[item]) === 'undefined') config[item] = defaultConfig[item];
					}
					
					// Keep references for these for future use.
					this.place = place;
					this.config = config;
					
					// Identify your container.
					this.place.addClass('flippers');
					
					var styles = "";
					for (var i = -self.config.extraCount; i <= self.config.extraCount; ++i) {
						var transformStr = self.config.itemStyle.transform(i);
						
						styles += ".flippers .onSide" + i + " {";
						
						for (var property in self.config.itemStyle) {
							if (property.search(/__\w+__/) === -1) {
								styles += property + ": " + self.config.itemStyle[property](i) + ";";
							}
						}
						
						styles += "}\n";
					}
					
					this.place.append('<style id="" scoped>' + styles + '</style>');
					
					var item = 0;
					for (var i = -self.config.extraCount; i <= self.config.extraCount; ++i) {
						this.place.append(
							'<div class="inline page ' + ( 'onSide' + i ) + '" data-item="' + item + '">' +
							'<div class="cover"></div>' +
							'</div>'
						);
						this.place.find('.page[data-item=' + item + '] .cover').append(self.config.items[item]);
						
						++item;
						if (item >= self.config.items.length) item = 0;
					}
					
					this.place.on('DOMMouseScroll mousewheel', function(e) {
						//debugger;
						var diff  = e.originalEvent.detail ? -e.originalEvent.detail : e.originalEvent.wheelDelta;
						if (diff > 0) self.moveUp();
						else self.moveDown();
					});
					
					$('body').keyup(function (e) {
						if (e.which == 37) self.moveLeft();
						else if (e.which == 38) self.moveUp();
						else if (e.which == 39) self.moveRight();
						else if (e.which == 40) self.moveDown();
						if (e.which == 13) self.select();
					});
				}
				
				Flippers.prototype.moveLeft = function() {
					var self = this;
					var pages = this.place.find('.page');
					pages.removeClass('notransition');
					
					var firstClass = pages.eq(0).attr('class');
					var leftSeam = this.place.find('.onSide' + (-self.config.extraCount));
					var rightSeam = this.place.find('.onSide' + (self.config.extraCount));
					
					for (var i = 0; i < pages.length - 1; ++i) {
						pages.eq(i).attr('class', pages.eq(i + 1).attr('class'));
					}
					
					pages.eq(pages.length - 1).attr('class', firstClass);
					
					var leftSeamItem = leftSeam.attr('data-item') | 0;
					var rightSeamItem = rightSeam.attr('data-item') | 0;
					var newItem = (self.config.items.length + leftSeamItem - 1) % self.config.items.length;
					
					rightSeam.attr('data-item', newItem);
					if (self.config.noTransition) rightSeam.addClass('notransition')
					
					rightSeam.find('.cover').empty().append(self.config.items[newItem]);
				}
				
				Flippers.prototype.moveRight = function() {
					var self = this;
					var pages = this.place.find('.page');
					pages.removeClass('notransition');
					
					var lastClass = pages.eq(pages.length - 1).attr('class');
					var leftSeam = this.place.find('.onSide' + (-self.config.extraCount));
					var rightSeam = this.place.find('.onSide' + (self.config.extraCount));
					
					
					for (var i = pages.length - 1; i > 0; --i) {
						pages.eq(i).attr('class', pages.eq(i - 1).attr('class'));
					}
					
					pages.eq(0).attr('class', lastClass);
					
					var leftSeamItem = leftSeam.attr('data-item') | 0;
					var rightSeamItem = rightSeam.attr('data-item') | 0;
					var newItem = (self.config.items.length + rightSeamItem + 1) % self.config.items.length;
					
					leftSeam.attr('data-item', newItem);
					if (self.config.noTransition) leftSeam.addClass('notransition')
					
					leftSeam.find('.cover').empty().append(self.config.items[newItem]);
				}
				
				Flippers.prototype.moveUp = function() {
					// TODO
					console.log('up arrow');
					this.moveRight();
				}
				
				Flippers.prototype.moveDown = function() {
					// TODO
					console.log('down arrow');
					this.moveLeft();
				}
				
				Flippers.prototype.select = function() {
					// TODO
					var self = this;
					var selected = this.place.find('.page.onSide0').attr('data-item');
					
					console.log('Selected item ' + selected + '.');
				}
			}
		{ // jQuery Plugin
			var methods = {
				'initialize' : function(config) {
					return this.each(
						function() {
							var place = $(this);
							var flippers = new Flippers(place, config);
							place.data('flippers', flippers);
						}
					);
				}
			}
			
			$.fn.flippers = function( method ) {
				
				if ( methods[method] ) return methods[method].apply(this, Array.prototype.slice.call( arguments, 1 ));
				else if ( typeof method === 'object' || ! method ) return methods.initialize.apply( this, arguments );
				else {
					$.error( 'Method ' +  method + ' does not exist on jQuery.flippers' );
					return false;
				}
			}
		}
	}
)(jQuery)
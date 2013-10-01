// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps){
  this.$node = $('<span class="dancer"></span>');
  this.timeBetweenSteps = timeBetweenSteps;
  this.step();   //referencing BlinkyDancer's step
  this.setPosition(top, left);
};

Dancer.prototype.step = function (){
    // the basic dancer doesn't do anything interesting at all on each step,
    // it just schedules the next step
    var dancer = this;
    setTimeout(function(){dancer.step();}, this.timeBetweenSteps);
};

Dancer.prototype.setPosition = function(top, left){
    /* Use css top and left properties to position our <span> tag
     * where it belongs on the page. See http://api.jquery.com/css/
     */
   this.$node.css(this.styleSettings(top, left));
};
Dancer.prototype.styleSettings = function (top,left){
  return {
    top: top,
    left: left
   };
};

Dancer.prototype.lineup = function(){
  this.$node.toggleClass('lineup');
};
  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body

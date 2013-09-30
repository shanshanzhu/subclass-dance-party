// Creates and returns a new dancer object that can step
var MakeDancer = function(top, left, timeBetweenSteps){
  this.$node = $('<span class="dancer"></span>');
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  this.step();
  this.setPosition(top, left);
  this.timeBetweenSteps = timeBetweenSteps;
};

MakeDancer.prototype.step = function (){
    // the basic dancer doesn't do anything interesting at all on each step,
    // it just schedules the next step
    setTimeout(this.step, this.timeBetweenSteps);
};

MakeDancer.prototype.setPosition = function(){
    /* Use css top and left properties to position our <span> tag
     * where it belongs on the page. See http://api.jquery.com/css/
     */
   this.$node.css(this.styleSettings(this.top,this.left));
};

MakeDancer.prototype.styleSettings = function (top,left){
  return {
    top: top,
    left: left
  };
};
    
  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body

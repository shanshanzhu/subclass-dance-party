var BlinkyDancer = function(top, left, timeBetweenSteps){
  /* this = Object.create(MakeBlinkyDancer.prototype);*/
  Dancer.call(this, top, left, timeBetweenSteps);  //this is the blinkyDancer object
  // this.timeBetweenSteps = timeBetweenSteps;
//without new keywork, the constructor is acting like a function. So here 'this' refers to an instance of MakeBlinkDancer (new keywork in play) here;
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
   // this.step();
};
BlinkyDancer.prototype = Object.create(Dancer.prototype);  //Resetting object.prototype to be a Dancer
BlinkyDancer.prototype.constructor = BlinkyDancer;    //relinking the constructor

BlinkyDancer.prototype.step = function(){
    // call the old version of step at the beginning of any call to this new version of step

    Dancer.prototype.step.call(this);  //scheduling the next blink
                                       //this is 

    /* toggle() is a jQuery method to show/hide the <span> tag.
     * See http://api.jquery.com/category/effects/ for this and
     * other effects you can use on a jQuery-wrapped html tag. */
    this.$node.toggle();  //blinking
};

// new BlinkyDancer();
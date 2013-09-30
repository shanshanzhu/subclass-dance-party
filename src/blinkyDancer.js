var MakeBlinkyDancer = function(top, left, timeBetweenSteps){
  MakeDancer.call(this, top, left, timeBetweenSteps);
//without new keywork, the constructor is acting like a function. So here 'this' refers to an instance of MakeBlinkDancer (new keywork in play) here;

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  this.oldStep = Makedancer.prototype.step;
  this.step();
};

MakeBlinkyDancer.prototype = new MakeDancer();
//with no arguments passed in, new MakeDancer() creates an object{step:,setPosition,styleSettings,};

MakeBlinkyDancer.prototype.step = function(){
    // call the old version of step at the beginning of any call to this new version of step//
////The prototype is first
    this.oldStep();

    /* toggle() is a jQuery method to show/hide the <span> tag.
     * See http://api.jquery.com/category/effects/ for this and
     * other effects you can use on a jQuery-wrapped html tag. */
    this.$node.toggle();
};

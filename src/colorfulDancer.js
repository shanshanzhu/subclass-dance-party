var ColorfulDancer = function(top, left, timeBetweenSteps){
  /* this = Object.create(MakeColorfulDancer.prototype);*/
  Dancer.call(this, top, left, timeBetweenSteps);
  this.count = 0;
};
ColorfulDancer.prototype = Object.create(Dancer.prototype);
ColorfulDancer.prototype.constructor = ColorfulDancer;
ColorfulDancer.prototype.returnColor = function(){
  var colors = ['red', 'yellow', 'blue', 'green'];
  this.count++;
  if (this.count < colors.length) {
    return colors[this.count];
  }
  this.count = 0;
  return colors[this.count];
};

ColorfulDancer.prototype.step = function(){

    Dancer.prototype.step.call(this);
    // this.$node.css("border", "20px solid " + this.returnColor());
    this.$node.css("transform", "rotate(" + 360*Math.random() + "deg)");
    this.$node.css("border", Math.floor(Math.random()*100) + "px solid " + this.returnColor());
};



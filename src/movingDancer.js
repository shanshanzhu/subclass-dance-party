var MovingDancer = function(top, left, timeBetweenSteps){
  /* this = Object.create(MakeMovingDancer.prototype);*/
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.css('border', '10px solid ' + ['red', 'yellow', 'blue', 'green'][Math.floor(Math.random() * 4)]);
};
MovingDancer.prototype = Object.create(Dancer.prototype);
MovingDancer.prototype.constructor = MovingDancer;
ColorfulDancer.prototype.returnColor = function(){
  var colors = ['red', 'yellow', 'blue', 'green'];
  this.count++;
  if (this.count < colors.length) {
    return colors[this.count];
  }
  this.count = 0;
  return colors[this.count];
};

MovingDancer.prototype.step = function(){

    Dancer.prototype.step.call(this);
    this.$node.animate(this.styleSettings(this.top, this.left));
};


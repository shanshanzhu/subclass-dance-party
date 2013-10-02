var Dancer = function(top, left, timeBetweenSteps){
  this.$node = $('<span class="dancer"></span>');
  this.timeBetweenSteps = timeBetweenSteps;
  this.top = top;
  this.left = left;
  this.step();
  this.setPosition(top, left);
};

Dancer.prototype.step = function (){
    var dancer = this;
    setTimeout(function(){dancer.step();}, this.timeBetweenSteps);
    //setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

Dancer.prototype.setPosition = function(top, left){
   this.$node.css({
    'top': top,
    'left': left
   });
};

Dancer.prototype.lineup = function(){
  this.$node.toggleClass('lineup');
};
Dancer.prototype.random = function(range){
  return Math.floor(Math.random() * range);
};

Dancer.prototype.circleMouse = function(mouseTop, mouseLeft,radius){
  for (var i = 0; i < 200; i += 10){
    var degree = i * 0.01 * Math.PI;
    var top = (Math.sin(degree)) * radius + mouseTop;
    var left = (Math.cos(degree)) * radius + mouseLeft;
    var dancer = this;
    // alert('i ' + top);
    (function(top,left, I){
      setTimeout (function(){
        // alert (I + 'setTO' + top);
        dancer.setPosition(top, left);
      }, 10 * I);
    } (top,left, i));
  }
};
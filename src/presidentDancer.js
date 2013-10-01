var PresidentDancer = function(top, left, timeBetweenSteps){
  /* this = Object.create(MakePresidentDancer.prototype);*/
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img src = "images/' + presidents[this.random(presidents.length)] + '.jpg" class = "dancer"></img>');
  this.count = 0;
  this.$node.addClass('president');
  this.$node.css(this.styleSettings(top, left));
  this.$node.css('border', '0px');
};
PresidentDancer.prototype = Object.create(Dancer.prototype);
PresidentDancer.prototype.constructor = PresidentDancer;
var presidents = ['Bush', "ChairmanMao", "DengXiaoPing", "Obama", "BillClinton"];

PresidentDancer.prototype.step = function(){

    Dancer.prototype.step.call(this);
    this.$node.animate(this.styleSettings($("body").height() * Math.random(),
            $("body").width() * Math.random()));
    this.$node.css("transform", "rotate(" + 360*Math.random() + "deg)");
};

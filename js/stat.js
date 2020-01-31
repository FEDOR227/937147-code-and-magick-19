'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 110;
var CLOUD_Y = 10;
var GAP = 10;
var BAR_HEIGHT = 150;
var BAR_WIDTH = 40;
var BLACK = '#000';

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};
window.renderStatistics = function (ctx, names, times) {

  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7 )');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = BLACK;
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', 120, 20);
  ctx.fillText('Список результатов:', 120, 40);

  var maxTime = getMaxElement(times);
  for (var i = 0; i < names.length; i++) {
    var STAT_POSITION_X = (CLOUD_X + GAP) + ((i + 1) * 70);
    var STAT_HEIGHT = -times[i] / maxTime * BAR_HEIGHT;

    ctx.fillStyle = BLACK;
    ctx.fillText(names[i], (CLOUD_X + GAP) + ((i + 1) * 70), CLOUD_HEIGHT - GAP * 2);
    ctx.fillStyle = names[i] === 'Вы' ? 'rgba(255, 0, 0, 1)' : 'rgba(0, 0, 255, ' + Math.random() + ')';
    ctx.fillRect(STAT_POSITION_X, CLOUD_HEIGHT - GAP * 3, BAR_WIDTH, STAT_HEIGHT);


    ctx.fillStyle = BLACK;
    ctx.fillText(Math.round(times[i]), STAT_POSITION_X, CLOUD_HEIGHT - GAP * 5 + STAT_HEIGHT);
  }
};

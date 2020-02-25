"use strict";

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;

var CLOUD_X = 140;
var CLOUD_Y = 250;
var GAP = 10;
var TEXT_HEIGHT = 15;
var BAR_HEIGHT = 240;
var BAR_WIDTH = 40;
var BAR_GAP = 50;
var MAX_BAR = 150;


var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function(arr) {

  if (arr.length > 0) {
    var maxElement = arr[0];

    for (var i = 1; i < arr.length; i++) {
      if (arr[i] > maxElement) {
        maxElement = arr[i];
      }
    }
    return maxElement;
  } else {
    alert('Пустой массив');
  }

};

var randomNumb = function(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
};

window.renderStatistics = function(ctx, players, times) {
  renderCloud(ctx, 110, 20, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, 100, 10, 'white');

  ctx.fillStyle = 'black';
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', 120, 30);
  ctx.fillText('Список результатов:', 120, 50);

  var maxTime = getMaxElement(times);

  players.forEach(function(item, i) {
    ctx.fillStyle = 'black';

    ctx.fillText(Math.ceil(times[i]), CLOUD_X + (BAR_WIDTH + BAR_GAP) * i, CLOUD_HEIGHT - (GAP * 3 + TEXT_HEIGHT + (MAX_BAR * times[i]) / maxTime));
    ctx.fillText(players[i], CLOUD_X + (BAR_WIDTH + BAR_GAP) * i, CLOUD_Y);

    if (players[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'hsl(240,' + (randomNumb(1, 255) / i) + '%' + ', 50%)';
    }

    ctx.fillRect(CLOUD_X + (BAR_WIDTH + BAR_GAP) * i, BAR_HEIGHT, BAR_WIDTH, -(MAX_BAR * times[i]) / maxTime);
  });
};
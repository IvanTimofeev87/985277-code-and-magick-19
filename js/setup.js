'use strict';
/*Константы*/

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
var SAME_WIZARD_ARRAY = mockData();
var USER_DIALOG = document.querySelector('.setup');
var SIMILAR_WIZARD_TEMPLATE = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

/*Функции*/

function getRandomNumb(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
};

function getRandomItem(array) {
  return array[getRandomNumb(0, array.length)];
};

function mockWizard() {
  return {
    wizard: {
      name: getRandomItem(WIZARD_NAMES) + ' ' + getRandomItem(WIZARD_SURNAMES),
      coatColor: getRandomItem(WIZARD_COAT_COLOR),
      eyesColor: getRandomItem(WIZARD_EYES_COLOR)
    }
  }
};

function mockData() {
  var array = [];
  for (var i = 0; i < 4; i++) {
    array.push(mockWizard(i));
  }
  return array;
};


function renderWizards() {
  var similarListElement = USER_DIALOG.querySelector('.setup-similar-list');

  /*for (var i = 0; i < SAME_WIZARD_ARRAY.length; i++) {
    var wizardElement = SIMILAR_WIZARD_TEMPLATE.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = SAME_WIZARD_ARRAY[i].wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = SAME_WIZARD_ARRAY[i].wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = SAME_WIZARD_ARRAY[i].wizard.eyesColor;
    similarListElement.appendChild(wizardElement);
  }*/

  SAME_WIZARD_ARRAY.forEach(function (i) {
    var wizardElement = SIMILAR_WIZARD_TEMPLATE.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = i.wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = i.wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = i.wizard.eyesColor;
    similarListElement.appendChild(wizardElement);
  })

};

//Вызовы

renderWizards();

USER_DIALOG.querySelector('.setup-similar').classList.remove('hidden');

USER_DIALOG.classList.remove('hidden');

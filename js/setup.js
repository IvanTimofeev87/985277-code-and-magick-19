'use strict';
/*Константы*/

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COAT_COLOR = ['rgb (101, 137, 164)', 'rgb (241, 43, 107)', 'rgb (146, 100, 161)', 'rgb (56, 159, 117)', 'rgb (215, 210, 55)', 'rgb (0, 0, 0)'];
var WIZARD_EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
var SAME_WIZARD_ARRAY = makeSameWizardArray();

/*Функции*/

function getRandomNumb(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
};

function getRandomItem(array) {
  return array[getRandomNumb(0, array.length)];
};

function getSameWizard(idx) {
  return {
    wizard: {
      name: WIZARD_NAMES[idx] + ' ' + WIZARD_SURNAMES[idx],
      coatColor: getRandomItem(WIZARD_COAT_COLOR),
      eyesColor: getRandomItem(WIZARD_EYES_COLOR)
    }
  }
};

function makeSameWizardArray() {
  var array = [];
  for (var i = 0; i < 4; i++) {
    array.push(getSameWizard(i));
  }
  return array;
};

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = userDialog.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

for (var i = 0; i < SAME_WIZARD_ARRAY.length; i++) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = SAME_WIZARD_ARRAY[i].wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = SAME_WIZARD_ARRAY[i].wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = SAME_WIZARD_ARRAY[i].wizard.eyesColor;
  similarListElement.appendChild(wizardElement);
}


userDialog.querySelector('.setup-similar').classList.remove('hidden');
function InputField(id, dom) {
  this.id = id;
  this.dom = dom;
  this.input = document.createElement('input');
  dom.appendChild(this.input);
  this.input.id = id;
}

InputField.prototype.isEmpty = function () {
  if (this.input.value <= 0) {
    return true;
  } else {
    return false;
  }
};

InputField.prototype.value = function () {
  return this.input.value;
};

InputField.prototype.setValue = function (value) {
  this.input.value = value;
};

InputField.prototype.isPhone = function () {
  const regex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  return regex.test(this.input.value);
};

const example = new InputField(
  'example-id',
  document.querySelector('.container')
);

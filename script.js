function InputField (id, dom){    
    this.id = id;
    this.dom = dom;
    const input = document.createElement('input');
    dom.appendChild(input);
    input.id = id;
    this.isEmpty = function(){
        if(input.value <= 0){
            return true
        } else {
            return false
        }
    }
    this.value = function(){
        return input.value;
    }
    this.setValue = function(value){
        input.value = value;
    }
    this.isPhone = function (){        
        const regex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        return regex.test(input.value);
    }
}

const example = new InputField('example-id', document.querySelector('.container'));

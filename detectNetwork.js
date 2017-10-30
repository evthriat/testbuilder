// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)
var detectNetwork = function(cardNumber) {
	var prefixLengthOne = cardNumber.slice(0,1);
	var prefixLengthTwo = cardNumber.slice(0,2);
	var prefixLengthThree = cardNumber.slice(0,3);
	var prefixLengthFour = cardNumber.slice(0,4);
	var prefixLengthSix = cardNumber.slice(0,6);
	var sixDigitNum = parseInt(prefixLengthSix);
	var twoDigitNum = parseInt(prefixLengthTwo);
	var threeDigitNum = parseInt(prefixLengthThree);
	var fourDigitNum = parseInt(prefixLengthFour);
	if(prefixLengthTwo === '38' || prefixLengthTwo === '39'){
		if(cardNumber.length === 14){
			return `Diner's Club`;
		}
	}else if(prefixLengthFour === '4903' || prefixLengthFour === '4905' || prefixLengthFour === '4911' || prefixLengthFour === '4936' || prefixLengthFour === '6333' || prefixLengthFour === '6759' || prefixLengthSix === '564182' || prefixLengthSix === '633110'){
      	if(cardNumber.length === 16 || cardNumber.length === 18 || cardNumber.length === 19){
        	return 'Switch';
      }
  }else if(prefixLengthTwo === '34' || prefixLengthTwo === '37'){
		if(cardNumber.length === 15){
			return 'American Express';
		}
	}else if(prefixLengthOne === '4'){
		if(cardNumber.length ===  13 || cardNumber.length ===  16|| cardNumber.length ===  19){
			return 'Visa';
		}
	}else if(twoDigitNum > 50 && twoDigitNum <= 55){
		if(cardNumber.length === 16){
			return 'MasterCard';
		}
	}else if(prefixLengthFour === '6011' || prefixLengthTwo === '65' || threeDigitNum >= 644 && threeDigitNum <= 649){
		if(cardNumber.length === 16 || cardNumber.length === 19){
			return 'Discover';
		}
			//Maestro always has a prefix of 5018, 5020, 5038, or 6304, and a length of 12-19.
	}else if(prefixLengthFour === '5018' || prefixLengthFour === '5020' || prefixLengthFour === '5038' || prefixLengthFour === '6304'){
      if(cardNumber.length > 11 && cardNumber.length <= 19){
        return 'Maestro';
      }
	}else if((sixDigitNum >= 622126 && sixDigitNum <= 622925) || (threeDigitNum >= 624 && threeDigitNum <= 626) || (fourDigitNum >= 6282 && fourDigitNum <= 6288)){
      if(cardNumber.length === 16 || cardNumber.length === 17 || cardNumber.length === 18 || cardNumber.length ===19){
        return 'China UnionPay';
      }
   }
};



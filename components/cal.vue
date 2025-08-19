<template>
<div class="calculator">
<div class="display">{{ display }}</div>
<button
    v-for="btn in buttons"
    :key="btn"
    @click="press(btn)"
>
  {{ btn }}
</button>
</div>
</template>

<script>
export default {
  name: 'BasicCalculator',
  data() {
    return {
      display: '0',
      buttons: ['1','2','3','+','4','5','6','-','7','8','9','*','0','=','/'],
      firstNumber: null,
      operator: null,
      waitingForSecond: false
    };
  },
  methods: {
    press(value) {
      if (!isNaN(value)) {
        // нажата цифра
        if (this.waitingForSecond) {
          this.display = this.display + value; // добавляем число после знака
          this.waitingForSecond = false;
        } else {
          this.display = this.display === '0' ? value : this.display + value;
        }
      }
      else if (['+','-','*','/'].includes(value)) {
        // оператор
        if (this.firstNumber !== null && !this.waitingForSecond) {
          this.calculate(parseFloat(this.getSecondNumber()));
        } else {
          this.firstNumber = parseFloat(this.display);
        }
        this.operator = value;
        this.display = this.firstNumber.toString() + ' ' + this.operator + ' ';
        this.waitingForSecond = true;
      }
      else if (value === '=') {
        // равно
        if (this.operator && this.firstNumber !== null) {
          const secondNumber = parseFloat(this.getSecondNumber());
          this.calculate(secondNumber, true);
          this.operator = null;
        }
      }
    },
    calculate(secondNumber, isEqual = false) {
      let result = 0;
      switch (this.operator) {
        case '+': result = this.firstNumber + secondNumber; break;
        case '-': result = this.firstNumber - secondNumber; break;
        case '*': result = this.firstNumber * secondNumber; break;
        case '/': result = secondNumber !== 0 ? this.firstNumber / secondNumber : 0; break;
      }
      this.display = isEqual ? result.toString() : result.toString() + ' ' + this.operator + ' ';
      this.firstNumber = result;
      this.waitingForSecond = true;
    },
    getSecondNumber() {
      const parts = this.display.split(' ');
      return parts[2] || '0';
    }
  }
}
</script>

<style scoped>
.calculator {
  width: 220px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 5px;
}
.display {
  grid-column: span 4;
  height: 40px;
  text-align: right;
  padding: 5px;
  font-size: 20px;
  background: #f0f0f0;
  border: 1px solid #ccc;
  overflow: hidden;
}
button {
  padding: 15px;
  font-size: 18px;
  cursor: pointer;
}
</style>


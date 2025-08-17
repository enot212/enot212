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
  name: 'Calculator',
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
        // Нажата цифра
        if (this.waitingForSecond) {
          this.display = value;
          this.waitingForSecond = false;
        } else {
          this.display = this.display === '0' ? value : this.display + value;
        }
      }
      else if (['+','-','*','/'].includes(value)) {
        // Нажат оператор
        this.firstNumber = parseFloat(this.display);
        this.operator = value;
        this.waitingForSecond = true;
      }
      else if (value === '=') {
        // Вычисление вручную
        if (this.operator && this.firstNumber !== null) {
          const secondNumber = parseFloat(this.display);
          let result = 0;
          switch (this.operator) {
            case '+': result = this.firstNumber + secondNumber; break;
            case '-': result = this.firstNumber - secondNumber; break;
            case '*': result = this.firstNumber * secondNumber; break;
            case '/': result = secondNumber !== 0 ? this.firstNumber / secondNumber : 'Ошибка'; break;
          }
          this.display = result.toString();
          this.firstNumber = null;
          this.operator = null;
          this.waitingForSecond = false;
        }
      }
    }
  }
}
</script>

<style scoped>
.calculator {
  width: 200px;
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
}
button {
  padding: 15px;
  font-size: 18px;
  cursor: pointer;
}
</style>
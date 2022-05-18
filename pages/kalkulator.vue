<template>
  <div class="flex justify-center">
    <div class="container">
      <nav class="shadow bg-gray-200 border-gray-200 px-2 sm:px-4 py-2.5 rounded mt-0 md:mt-6">
        <div class="container flex flex-wrap justify-between items-center mx-auto">
          <NuxtLink to="/" class="flex items-center">
            <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Aplikasi Kalkulator</span>
          </NuxtLink>
          <div class="w-auto">
            <ul class="flex flex-col lg:mt-4 mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium">
              <li>
                <NuxtLink to="/" class="block py-2 px-3 text-lg text-blue-700 rounded text-center" aria-current="page">
                  Back to home
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div class="rounded-lg my-10 shadow-xl bg-gray-200 p-3">
        <label for="calc" class="block mb-2 text-sm font-medium text-gray-900">Kalkulator Sederhana</label>
        <input
          id="calc"
          v-model="input"
          type="text"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder=""
          required
          @change="kalkulator(input)"
        >

        <div class="p-2">
          Jawaban: {{ output }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-useless-escape */
export default {
  data () {
    return {
      input: '',
      output: ''
    }
  },
  methods: {
    kalkulator (input) {
      const validation = input.match(/^\s*([-+]?)(\d+ )(?:\s*([-+*\/])\s*((?:\s[-+])? \d+)\s*)+$/g)
      if (!validation) {
        this.output = 'Input tidak valid.'
      } else {
        const operand = validation[0].match((/\d+(\.\d+)?/g))
        const operator = validation[0].match(/[\+\-\/\*\^\%]/g)

        if (operand[0] > 1000000 || operand[1] > 1000000 || operand[0] < -1000000 || operand[1] < -1000000) {
          this.output = 'Input lebih dari 1000000'
        } else {
          switch (operator[0]) {
            case '+':
              this.output = operand[0] * 1 + operand[1] * 1
              break
            case '-':
              this.output = operand[0] - operand[1]
              break
            case '*':
              this.output = operand[0] * operand[1]
              break
            case '/':
              this.output = operand[0] / operand[1]
              break
            default:
              this.output = ''
          }
        }
      }
    }
  }
}
</script>

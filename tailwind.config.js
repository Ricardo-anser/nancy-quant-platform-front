/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'el-primary': '#42b883' // 与Element Plus主色保持一致
      }
    }
  },
  plugins: []
}

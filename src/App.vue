<template>
  <div>
    <h1>국내 대기업 주식정보</h1>
    <canvas ref="chartCanvas"></canvas>
    <!-- ref:반응형 데이터 구조 생성함수 -->
  </div>
</template>

<script>
/* ref, onMounted ---> setup() 문법시 import필요 */
import { Chart } from 'chart.js/auto';
/* const count = ref(0);  count.value++; */
export default {
  name: 'App',
  data(){
    return{
      stockData:{
        '삼성전자':[60800,68300,72000,62200,68900],
        'SK하이닉스':[109000,130500,151000,110000,92000],
        'LG화학':[721000,795000,930000,628000,735000],
        '현대차':[18500,226500,16400,187000,258500],
        '네이버':[184000,216000,295500,368000,207000]
      },
    };
  },  
  mounted(){
    this.createChart();
  },
  methods:{
    createChart(){
      const ctx = this.$refs.chartCanvas.getContext('2d');
      new Chart(ctx, {
        type:'line',
        data:{
          labels:['1일전','2일전','3일전','4일전','5일전'],
          //Object.entries() 객체의 속성과 값을 배열형태로 변환
          datasets:Object.entries(this.stockData).map(([company,prices])=>({
            label:company,
            data:[...prices].reverse(),
            //borderColor:this.getRandomColor(),
            borderColor:[
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)'
            ],
            fill:false
          })),          
        },
        options:{
          responsive:true,
          plugins:{
            title:{
              display:true,
              text:'최근 5일간 주가 변동'
            }
          },
          scales:{
            y:{
              beginAtZero:false,
              title:{
                display:true,
                text:'주가 (월)'
              }
            }
          }
        }
      })
    },
    getRandomColor(){
      return '#'+Math.floor(Math.random()*16777215).toString(16);
      //toString(16) : 16진수 문자열 변환 , 16777215(16진수 FFF에 해당하는 숫자)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

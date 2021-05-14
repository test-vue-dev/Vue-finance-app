<template>
  <div class="home_bill">
    <div class="left_column col s12 m6 l4">
      <div class="card light-blue">
        <div class="card-content white-text">
          <span class="card-header"> {{ 'home_score' | localize }} </span>
          <table class="bill-table">
          <thead>
            <tr>
              <th>{{info.bill}}</th>
              <th>BYN</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(el, i) of currency" :key="i + currency">
              <td>{{get_rate_currency(el)}}</td>
              <td>{{ el.ccy }}</td>
            </tr>
          </tbody>
        </table>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.home_bill {
  .currency_wrap {
    display: flex;
    justify-content: space-between;
    padding: 1rem 0;
    font-size: 1.2rem;
  }
  .card-header {
    display: block;
    margin-bottom: 1rem;
  }
  .bill-table{
    font-size: 22px;
    font-family: Arial, Helvetica, sans-serif;
    font-stretch: expanded;
  }
}
</style>

<script>
import { mapGetters } from "vuex";
export default {
  props: ["currency"],
  data() {
    return {
      USD: 0,
      EUR: 0,
      RUB: 0
    };
  },
  computed: {
    ...mapGetters(["info"])
  },
  methods: {
    get_rate_currency(currency) {
      return (this.info.bill*10.75 / currency.sale) > 0 ? (this.info.bill*10.75 / currency.sale).toFixed(2) : 0
    }
  }
};
</script>
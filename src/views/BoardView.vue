<template>
    <div>
        <!-- purchaseCar start -->
        <div class="purchaseCar">
            <table id="allCar" class="table table-striped table-hover" align="center">
                <tr>
                    <th>ID</th>
                    <th>Model</th>
                    <th>Maker</th>
                    <th>Price</th>
                    <th>Owner</th>
                    <th>Buy</th>
                </tr>
                <tr v-for="(car, index) in apiResponse" :key="index">
                    <td>{{car.Key}}</td>
                    <td>{{car.model}}</td>
                    <td>{{car.maker}}</td>
                    <td>{{car.price}}</td>
                    <td>{{car.owner}}</td>
                    <td><input id="purchaseCar" type="submit" value="구매" @click="purchaseCar()"></td>
                </tr>
                <!-- <h5 style="color:green;margin-bottom:2%" id="success_getallcar">{{purchase_car}}</h5> -->
            </table>
        </div>
        <!-- purchaseCar end -->
    </div>
</template>

<script>
import cardata from "@/data/cardata.json";

export default {
    data() {
        return {
            apiResponse: [],
            random_num: 0,
        };
    },
    async created () {
        this.apiResponse = cardata.products;
        console.log(cardata.products);
        console.log(this.apiResponse);
    },
    methods: {
        purchaseCar() {
            this.random_num = Math.random();

            // console.log(this.random_num);

            this.$store.dispatch('changeUserName');

            // console.log(this.random_num);
        },
    },
}
</script>
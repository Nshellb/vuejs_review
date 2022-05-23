<template>
    <div class="header-wrap">
        <router-link to="/">Home</router-link> | 
        <router-link to="/about">About</router-link> | 
        <router-link to="/board">Board</router-link>

        <div>username : {{ username }}</div>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    computed: {
        ...mapState([
            'username'
        ])
    }
}
</script>

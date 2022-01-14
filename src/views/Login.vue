<template>
  <div class="about">
    <h1 @click="api">This is an login page</h1>
  </div>
</template>
<script>
export default{
    methods: {
        api(){
            this.axios.get('/users').then(res => {
                console.log(res.data.data);
            })
        }
    }
}  
</script>
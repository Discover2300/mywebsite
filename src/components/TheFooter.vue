<template>
  <footer  id="the-footer">
    <div class="row footer">
      <div class="col-12 mx-auto text-center">
        <div class="container-fluid">
          <div class="row justify-content-around">
            <div class="col-8 col-md-5">
              <h5 class="title">All right reserved Schimkovits Ádám &copy; 2019</h5>
              <p class="description"></p>
            </div>
            </div>
          </div>
        </div>
      </div>
  </footer>
</template>

<script>
  export default {
    name: "TheFooter"
  };
</script>


<style lang="scss" scoped>
  
  #the-footer{
  .footer {
    background-color: #220052;
    padding-top: 2rem;
    padding-bottom: 6rem;
  }
  .title {
    color: white;
    font-size:16px;
  }
  }
</style>
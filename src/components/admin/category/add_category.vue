<template>
   <div class="container">
        <section class="content">
            <div class="container-fluid">
                <div class="row justify-content-around">
                    <!-- left column -->
                    <div class="col-md-8">
                        <div class="card card-dark">
                            <div class="card-header">

                                <h3 class="card-title">Add Post</h3>
                                <div class="card-tools">
                                    <router-link class="btn btn-success" to="all-category"> Manage Category</router-link>
                                </div>
                            </div>
                            <form role="form" enctype="multipart/form-data" @submit.prevent="addNewPost()">
                                <div class="card-body">
                                    <div class="form-group">
                                        <label for="">Post Title</label>
                                        <input id="" class="form-control" name="title" v-model="form.title" type="text" :class="{ 'is-invalid': form.errors.has('title') }">
                                        <has-error :form="form" field="title"></has-error>
                                    </div>
                                    <div class="form-group">
                                        <label for="">Post Title</label>
                                        <input id="name" class="form-control" name="name" v-model="form.name" type="text" :class="{ 'is-invalid': form.errors.has('name') }">
                                        <has-error :form="form" field="name"></has-error>
                                    </div>
                                    <div class="form-group">
                                        <label for="">Post Price</label>
                                        <input id="price" class="form-control" name="price" v-model="form.price" type="text" :class="{ 'is-invalid': form.errors.has('price') }">
                                        <has-error :form="form" field="price"></has-error>
                                    </div>
                                    <div class="form-group">
                                        <label for="">Post Description</label><br>
                                        <textarea cols="70" name="description" id="exampleInputFile" v-model="form.description" ></textarea>
                                        <has-error :form="form" field="description"></has-error>
                                    </div>
                                </div>
                                <!-- /.card-body -->
                                <div class="card-footer">
                                    <button class="btn btn-primary" type="submit">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
export default {
    name:"Create",
    data(){
        return{
            form:new Form({
                title:'',
                name:'',
                price:'',
                description: '',
            })
        }
    },
    mounted(){


    },
    computed:{

    },
    methods:{
        addNewPost(){
            this.form.post('http://127.0.0.1:8000/api/create').then((response)=>{
               // alert(response);
                this.$router.push('/all-category');
                Toast.fire({
                    icon: 'success',
                    title: 'Product Added successfully'
                });

            })
        }

    }

}
</script>
<style>

</style>

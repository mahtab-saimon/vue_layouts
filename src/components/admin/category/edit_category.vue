<template>
    <div class="">
        <section class="content">
            <div class="container-fluid">
                <div class="row justify-content-around">
                    <!-- left column -->
                    <div class="col-md-8">
                        <div class="card card-dark">
                            <div class="card-header">
                                <h3 class="card-title">Edit Category</h3>
                                <div class="card-tools">
                                    <router-link class="btn btn-success " to="/category-list"> Manage Category</router-link>
                                </div>
                            </div>
                            <form role="form" @submit.prevent="updatePost()" enctype="multipart/form-data" method="post">
                                <div class="card-body">

                                    <div class="form-group">
                                        <label for="">Product Title </label>
                                        <input id="" class="form-control" name="title" v-model="form.title" type="text" :class="{ 'is-invalid': form.errors.has('title') }">
                                        <has-error :form="form" field="title"></has-error>
                                    </div>
                                    <div class="form-group">
                                        <label for="">Product Name</label>
                                        <input id="name" class="form-control" name="name" v-model="form.name" type="text" :class="{ 'is-invalid': form.errors.has('name') }">
                                        <has-error :form="form" field="name"></has-error>
                                    </div>
                                    <div class="form-group">
                                        <label for="">Product Price</label>
                                        <input id="price" class="form-control" name="price" v-model="form.price" type="text" :class="{ 'is-invalid': form.errors.has('price') }">
                                        <has-error :form="form" field="price"></has-error>
                                    </div>

                                    <div class="form-group">
                                        <label for="">Product Description</label>
                                        <textarea cols="70" name="description" id="exampleInputFile" v-model="form.description" ></textarea>
                                        <has-error :form="form" field="description"></has-error>
                                    </div>
                                </div>
                                <!-- /.card-body -->
                                <div class="card-footer">
                                    <button class="btn btn-primary" type="submit">Update</button>
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
        name: "Edit",
        data() {
            return {
                form: new Form({
                    title:'',
                    name:'',
                    price:'',
                    description: '',
                })
            }
        },
        mounted(){
          //  this.$store.dispatch('allCategory')
            const po_id =this.$route.params.id;
            //console.log(post_id);
            this.$http.get('http://127.0.0.1:8000/api/editPost/'+po_id).then((response)=>{
               // console.log(response.data);
                this.form.fill(response.data.post)
            })
        },
        computed: {
            
        },
        methods: {
            updatePost() {
                const po_id =this.$route.params.id;
                this.form.post('http://127.0.0.1:8000/api/update-post/'+po_id).then((response) => {
                      console.log(response.data)
                   this.$router.push('/all-category')
                    Toast.fire({
                        icon: 'success',
                        title: 'Updated successfully'
                    });

                })
            },
            /*updateImage(){
                let img = this.form.image ;
                if (img.length>100){
                    return this.form.image

                } else {
                    return "backend/image/post/"+this.form.image;
                }
            }*/
        }
    }
</script>

<style scoped>

</style>

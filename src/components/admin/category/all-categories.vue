<template>
      <div class="container">
        <!-- Main content -->
        <section class="content">
            <div class="container-fluid">
                <div class="row justify-content-around">
                    <div class="col-md-12">
                        <div class="card">
                            <div class="card-header">
                                <h3 class="card-title">All Product</h3>
                                <div class="card-tools">
                                    <router-link class="btn btn-success " to="add-category"> Add Product</router-link>
                                </div>
                            </div>

                            <div class="card-body">
                                <table id="example1" class="table table-hover table-striped">
                                    <thead>
                                    <tr>
                                        <th>SL</th>
                                        <th>Name</th>
                                        <th>Title</th>
                                        <th>Price</th>
                                        <th>Description</th>
                                        <th>Actions</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(post, index) in post" :key="post.id">
                                            <td>{{index+1}}</td>
                                            <!--<td v-if="post.category">{{ post.category.cat_name }}</td>-->
                                            <td width="15%">{{ post.name }}</td>
                                            <td width="15%">{{ post.title }}</td>
                                            <td width="15%">{{ post.price }}</td>
                                            <!--| sortlength(40,"....")-->
                                             <td width="20%">{{ post.description }}</td>
                                           <td>
                                               <router-link :to="`edit-category/${post.id}`" class="btn btn-primary btn-sm">Edit</router-link>
                                                <a @click.prevent="deletePost(post.id)" class="btn btn-danger btn-sm">Delete</a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <!-- /.card-body -->
                        </div>
                        <!-- /.card -->
                    </div>
                    <!-- /.col -->
                </div>
                <!-- /.row -->
            </div>
            <!-- /.container-fluid -->
        </section>
    </div>
</template>
<script>
export default {
    data(){
        return{
             post:[]
        }
    },
    methods:{
        allpost(){
            this.$http.get('http://127.0.0.1:8000/api/product_list')
            .then(response =>{
              this.post = response.data.posts;
                // console.log(response.data.posts);
            })
        },
        deletePost(id){
             this.$http.get('http://127.0.0.1:8000/api/deletePost/'+id)
            .then(res=>{
                this.allpost();
                  Toast.fire({
                    icon: 'success',
                    title: 'Product deleted successfully'
                });
                // console.log(res);
            })
           
        }
    },
   mounted() {
       this.allpost();
   },
}
</script>
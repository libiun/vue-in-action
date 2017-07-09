<template>
    <section>
        <div class="row" v-for="posts in processedPosts">
            <div class="col-md-3" v-for="post in posts">
                <div class="card">
                    <div class="card-divider">
                        {{ post.title }}
                    </div>
                    <a :href="post.url" target="_blank"><img class="img-responsive" :src="post.image_url"></a>
                    <div class="card-section">
                        <p>{{ post.abstract }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        props: ['results'],
        computed: {
            processedPosts() {
                let posts = this.results;
                // Add image_url attribute
                posts.map(post => {
                    let imgObj = post.multimedia.find(media => media.format === "superJumbo");
                    post.image_url = imgObj ? imgObj.url : "http://placehold.it/300x200?text=N/A";
                });
                // Put Array into Chunks
                let i, j, chunkedArray = [],
                    chunk = 4;
                for (i = 0, j = 0; i < posts.length; i += chunk, j++) {
                    chunkedArray[j] = posts.slice(i, i + chunk);
                }
                return chunkedArray;
            }
        }
    }
</script>

<style scoped lang="scss">
    .card{
        margin-bottom: 1rem;
    border: 1px solid #e6e6e6;
    border-radius: 0;
    background: #fefefe;
    box-shadow: none;
    overflow: hidden;
    color: #0a0a0a;
        .card-divider{
                padding: 4px;
    background: #e6e6e6;
        }
        .card-section{
            padding: 4px;
            &:last-child{
                margin-bottom: 0px;
            }
        }
    }
</style>

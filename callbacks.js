const posts = [
    { title: 'Post one', body: 'This is post one' },
    { title: 'Post two', body: 'This is post two' }
];

function getPosts() {
    setInterval(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${index}--${post.title}--${post.body}</li>`
        });
        document.body.innerHTML = output;
    }, 1000);
}

function createPost(post, callback) {
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000);
}

getPosts();

createPost({ title: 'Post three', body: 'This is post three' }, getPosts);
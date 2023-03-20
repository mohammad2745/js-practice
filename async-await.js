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

function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);

            const error = false;

            if (!error) {
                resolve();
            } else {
                reject('Error!! Something went wrong');
            }
        }, 2000);
    });

}

async function init() {
    await createPost({ title: 'Post three', body: 'This is post three' });

    getPosts();
}

init();
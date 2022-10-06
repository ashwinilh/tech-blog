const { Post } = require('../models');

const postData = [{
        title: 'Travel Europe',
        content: 'This is a travel blog about all the cool places to vist in Europe and in what order to visit',
        user_id: 1,

    },
    {
        title: 'Cookie Recipe',
        content: 'This is the post about how to be make the best cookies in the world',
        user_id: 2
    },
    {
        title: 'Learn minfulness',
        content: 'In this blog you will learn how to stay calm in time of a storm',
        user_id: 3
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
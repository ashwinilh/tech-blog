const { Comment } = require('../models');

const commentData = [{
        comment_text: "I love your blog editor",
        user_id: 1,
        post_id: 1
    },
    {
        comment_text: "Wonder to see such amazing app, helps me just comment on blogs",
        user_id: 2,
        post_id: 1
    },
    {
        comment_text: "I will post all my travel blogs here!!!",
        user_id: 3,
        post_id: 1
    },
    {
        comment_text: "Let blog on kids meal ideas",
        user_id: 1,
        post_id: 2
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
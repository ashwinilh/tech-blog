const { User } = require('../models');

const userData = [
    {
        username: "ashwinilh",
        twitter: "ashwinilh",
        github: "ashwinilh",
        email: "ashwinilh@gmail.com",
        password: "new2pass"
    },
    {
        username: "fernado",
        twitter: "fernado",
        github: "fernado",
        email: "fernado@gmail.com",
        password: "new2pass"
    },
    {
        username: "hamilton",
        twitter: "hamilton",
        github: "hamilton",
        email: "hamilton@gmail.com",
        password: "new2pass"
    },
    {
        username: "prabas",
        twitter: "prabas",
        github: "prabas",
        email: "prabas@gmail.com",
        password: "new2pass"
    },
    {
        username: "theresa",
        twitter: "theresa",
        github: "theresa",
        email: "theresa@gmail.com",
        password: "new2pass"
    },
    {
        username: "pooja_hegade",
        twitter: "pooja_hegade",
        github: "pooja_hegade",
        email: "pooja_hegade@gmail.com",
        password: "new2pass"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
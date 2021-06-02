
let users=[
    { id: 0, login: 'admin', password: 'admin' },
    { id: 1, login: 'admin@example.com', password: 'miaumiau' }
];

export const createUser=(req, res) => {
    const user=req.body;
    res.send(`User with the name ${user.name} added to the database`);
};

export const getUser=(req, res) => {
    res.send(users);
};

export const getUserById=(req, res) => {
    const {id}=req.params;
    const foundUser=users.find(user=>user.id===id);
    res.send(foundUser);
};
export const getUserBylogin=(req, res) => {
    const {login,password}=req.params;
    console.log(login);
    console.log(password);
    const foundUser=users.find(user=>user.login===login&&user.password===password);
    console.log(foundUser);
    if(foundUser==undefined){
        res.send('Nie znaleziono użytkownika');
    }
    else{
        res.send('OK');
    }
};

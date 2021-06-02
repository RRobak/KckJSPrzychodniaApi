import express from 'express';
import bodyParser from 'body-parser';

import usersRoutes from './routes/users.js';
import visitsRoutes from './routes/visits.js';

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use('/users',usersRoutes);
app.use('/visits',visitsRoutes);

app.get('/',(req,res)=>{
    res.send('Hello from Homepage.')
})

app.listen(PORT, ()=>console.log(`Server running on port: http://localhost:${PORT}`));
import express from 'express';

import {createUser,getUser,getUserById,getUserBylogin} from'../controllers/users.js';

const router = express.Router();



router.get('/', getUser);

router.post('/', createUser);

router.get('/:id',getUserById);

router.post('/:login/:password',getUserBylogin);

export default router;
import { Router } from 'express';

import { getUsers } from '../controllers';
import { deleteUser, getUser, postUser, putUser } from '../controllers/user';

const router = Router();

router.get('/', getUsers);

router.get('/', getUser);

router.post('/', postUser);

router.put('/:id', putUser);

router.delete('/:id', deleteUser);

export default router;

import { Router } from 'express'
import {
    create_medicine,
    read_medicines,
    read_medicine,
    update_medicine,
    delete_medicine,
} from '../controllers/medicines'


const router = Router()

router.route('/')
    .post(create_medicine)
    .get(read_medicines)

router.route('/:_id')
    .get(read_medicine)
    .patch(update_medicine)
    .delete(delete_medicine)
    
export default router
import { Router } from 'express'
import {
    create_medicine_intake,
    delete_medicine_intake
} from '../controllers/intakes'


const router = Router({mergeParams: true})

router.route('/')
    .post(create_medicine_intake)

router.route('/:intake_id')
    .delete(delete_medicine_intake)



export default router
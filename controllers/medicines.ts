import Medicine from '../models/medicine'
import { Request, Response, NextFunction} from 'express'


export const create_medicine = async (req: Request, res: Response, next: NextFunction) => {
    const properties = req.body
    const newMedicine = await Medicine.create(properties)
    console.log(`Medicine ${newMedicine._id} created`)
    res.send(newMedicine)
}

export const read_medicines = async (req: Request, res: Response, next: NextFunction) => {
    const medicines = await Medicine.find({})
    console.log(`Medicines queried`)
    res.send(medicines)
}

export const read_medicine = async (req: Request, res: Response, next: NextFunction) => {
    const { _id } = req.params
    const medicine = await Medicine.findById(_id)
    console.log(`Medicine ${_id} queried`)
    res.send(medicine)
}

export const update_medicine = async (req: Request, res: Response, next: NextFunction) => {
    res.status(501).send('not implemented')
}

export const delete_medicine = async (req: Request, res: Response, next: NextFunction) => {
    const {_id} = req.params
    const medicine = await Medicine.findByIdAndDelete(_id)
    // Todo: check if actually found
    console.log(`Medicine ${_id} deleted`)
    res.send(medicine)
}


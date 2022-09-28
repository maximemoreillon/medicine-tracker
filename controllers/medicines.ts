import Medicine from '../models/medicine'
import CreateHttpError from 'http-errors'
import { Request, Response, NextFunction} from 'express'


export const create_medicine = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { user } = res.locals
        const properties = { ...req.body, user_id: user._id }
        const newMedicine = await Medicine.create(properties)
        console.log(`Medicine ${newMedicine._id} created`)
        res.send(newMedicine)
    } catch (error) {
        next(error)
    }
    
}

export const read_medicines = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { user } = res.locals
        const medicines = await Medicine.find({ user_id: user._id })
        console.log(`Medicines queried`)
        res.send(medicines)
    } catch (error) {
        next(error)
    }
    
}

export const read_medicine = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { _id } = req.params
        const medicine = await Medicine.findById(_id)
        if (!medicine) throw CreateHttpError(404, 'Medicine not found') 
        console.log(`Medicine ${_id} queried`)
        res.send(medicine)
    } catch (error) {
        next(error)
    }
    
}

export const update_medicine = async (req: Request, res: Response, next: NextFunction) => {
    
    res.status(501).send('not implemented')
}

export const delete_medicine = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { _id } = req.params
        const medicine = await Medicine.findByIdAndDelete(_id)
        // Todo: check if actually found
        console.log(`Medicine ${_id} deleted`)
        res.send(medicine)
    } catch (error) {
        next(error)
    }
    
}


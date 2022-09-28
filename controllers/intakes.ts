import Medicine from '../models/medicine'
import CreateHttpError from 'http-errors'
import { Request, Response, NextFunction } from 'express'

export const create_medicine_intake = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { _id } = req.params
        const medicine = await Medicine.findById(_id)
        if (!medicine) throw CreateHttpError(404, 'Medicine not found') 
        medicine.intake.push({ date: new Date() })
        await medicine.save()
        console.log(`Medicine ${_id} intake added`)
        res.send(medicine)
    } catch (error) {
        next(error)
    }
    
}

export const delete_medicine_intake = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { _id, intake_id} = req.params
        const medicine = await Medicine.findById(_id)
        if (!medicine) throw CreateHttpError(404, 'Medicine not found')
        const foundIndex = medicine.intake.findIndex(i => i._id?.toString() === intake_id)
        if (!medicine) throw CreateHttpError(404, 'Intake not found')
        medicine.intake.splice(foundIndex, 1)
        await medicine.save()
        console.log(`Medicine ${_id} intake deleted`)
        res.send(medicine)
    } catch (error) {
        next(error)
    }
}
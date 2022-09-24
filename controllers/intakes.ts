import Medicine from '../models/medicine'
import { Request, Response, NextFunction } from 'express'

export const create_medicine_intake = async (req: Request, res: Response, next: NextFunction) => {
    const { _id } = req.params
    const medicine = await Medicine.findById(_id)
    // TODO: use HTTP-errors
    if (!medicine) return res.status(404).send('Medicine not found')
    medicine.intake.push({ date: new Date() })
    await medicine.save()
    console.log(`Medicine ${_id} intake added`)
    res.send(medicine)
}

export const delete_medicine_intake = async (req: Request, res: Response, next: NextFunction) => {
    res.status(501).send('Not implemented')
}
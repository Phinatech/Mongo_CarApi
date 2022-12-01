import carModel from "../model/carModel";
import { Request,Response } from "express";


const postCar = async (req:Request,res:Response):Promise<Response> => {
    try {
       const {
         manfacturer,
         model,
         color,
         selfDriving,
         transmission,
       } = req.body;
       const newCar = await carModel.create({
         manfacturer,
         model,
         color,
         chasisNo:Math.floor(Math.random() *100000000),
         selfDriving,
         transmission,
       });

       return  res.status(201).json({
        message:"Data  Created sucessfully",
        data:newCar
       })
    } catch (error) {
       return res.status(404).json({
        message:"An error occured",
        data:error
       }) 
    }
};

const getCar =async (req:Request,res:Response):Promise<Response> => {
    try {
const getData = await carModel.find()
        return res.status(200).json({
            message:"Data Gotten ",
            data:getData
        })
    } catch (error) {
        return res.status(404).json({
            message:"An error occured",
            data:error
        })
    }
};

const getOneCar =async (req:Request,res:Response):Promise<Response> => {
    try {
        const getOne = await carModel.findById(req.params.id)
        return res.status(200).json({
            message:"Data Gotten",
            data:getOne
        })
    } catch (error) {
      return res.status(404).json({
        message:"An error Ocurred",
        data:error
    })  
    }
}

const updateCar =async (req:Request, res:Response) => {
    try {
        const { manfacturer, model, color, selfDriving, transmission } = req.body
        const updating = await carModel.findByIdAndUpdate(req.params.id, {
          manfacturer,
          model,
          color,
          chasisNo: Math.floor(Math.random() * 100000000),
          selfDriving,
          transmission,
        });

        return res.status(200).json({
            message:"Data has been updated",
            data:updating
        })
    } catch (error) {
    return res.status(404).json({
        message:"An error occured ",
        data:error
    })    
    }
}

const deleteCar =async (req:Request,res:Response):Promise<Response> => {
    try {
        const removeCar= await carModel.findByIdAndDelete(req.params.id)
        return res.status(200).json({
            message:"Data has been successfully deleted",
            data:removeCar
        })
    } catch (error) {
        return res.status(404).json({
            message:"An occurred while deleting the data",
            data:error
        })
    }
}




export {postCar, getCar ,getOneCar,updateCar,deleteCar}
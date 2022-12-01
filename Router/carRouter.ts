import {  Router } from "express";
import {
  getCar,
  getOneCar,
  postCar,
  updateCar,
  deleteCar,

} from "../controller/carController";
const router = Router()

router.route("/car").get(getCar);
router.route("/car/:id").get(getOneCar)
router.route("/newCar").post(postCar)
router.route("/updatecar/:id").patch(updateCar);
router.route("/deletingcar/:id").delete(deleteCar);


export default router
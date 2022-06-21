import { Request, Response } from "express";
import { UploadedFile } from "express-fileupload";
import MobilenetClassification from "../mobilenet/classification";

class Controller {
  async classifyImage(req: Request, res: Response) {
    console.log(req.baseUrl);
    const uploadedImage = req.files?.image as UploadedFile;
    try {
      const predictions = await MobilenetClassification.classify(
        uploadedImage.data
      );
      res.json(predictions);
    } catch (error) {
      res.json({ message: error });
    }
  }
}
export default new Controller();

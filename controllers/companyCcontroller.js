import companyModel from "../models/Company.js";


export const createCompany = async (req, res) => {
    console.log(req.body);
    try {
      const { name, location, industry, email } = req.body;
  
      const companyObj = new companyModel({
        name,
        location,
        industry,
        email
        
      });
  
      const savedCompanyObj = await companyObj.save();
  
      res.json({
        savedCompanyObj,
        message: "Admin created successfully",
      });
    } catch (error) {
      res.json({
        error: "Error occurred",
      });
      console.log(error);
    }
  };

  export const getCompanies=async(req,res)=>{
    try {
      const getcompanies=await companyModel.find()
      res.json({
        getcompanies
      })
    } catch (error) {
      res.json({
        error:"Cannot fetch data"
      })
      console.log(error)
    }
  }
  
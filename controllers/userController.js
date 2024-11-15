
import User from "../models/User.js"


// Function to create an Admin
export const createAdmin = async (req, res) => {
  console.log(req.body);
  try {
    const { name, email, password } = req.body;

    const user = new User({
      name,
      email,
      password,
      role: "Admin", 
    });

    const savedUser = await user.save();

    res.json({
      savedUser,
      message: "Admin created successfully",
    });
  } catch (error) {
    res.json({
      error: "Error occurred",
    });
    console.log(error);
  }
};

// Function to create an Alumni
export const createAlumni = async (req, res) => {
  console.log(req.body);
  try {
    const { name, email, password } = req.body;

    const user = new User({
      name,
      email,
      password,
      role: "Alumni", 
    });

    const savedUser = await user.save();

    res.json({
      savedUser,
      message: "Alumni created successfully",
    });
  } catch (error) {
    res.json({
      error: "Error occurred",
    });
    console.log(error);
  }
};

// Function to create a Student
export const createStudent = async (req, res) => {
  console.log(req.body);
  try {
    const { name, email, password } = req.body;

    const user = new User({
      name,
      email,
      password,
      role: "Student", 
    });

    const savedUser = await user.save();

    res.json({
      savedUser,
      message: "Student created successfully",
    });
  } catch (error) {
    res.json({
      error: "Error occurred",
    });
    console.log(error);
  }
};

export const getAllUsers=async(req,res)=>{
  try {
    const getusers=await User.find()
    res.json({
      getusers
    })
  } catch (error) {
    res.json({
      error:"Cannot fetch data"
    })
    console.log(error)
  }
}

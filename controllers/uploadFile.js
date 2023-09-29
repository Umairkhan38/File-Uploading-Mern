const File=require('../models/file')

exports.localFileUpload = async(req,res)=>{

    try {
          
        //fetch
        const file = req.files.file;

        let path = __dirname +"/files/"+ Date.now() +'.'+ `${file.name.split('.')[1]}`;

        file.mv(path,(err)=>{
            console.log(err);
        });

        res.json({
            success:true,
            message:"Local File Uploaded Successfully!!"
        })



    } catch (error) {
        console.log(err)
    }

}
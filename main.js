Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
   
   });
    camera=document.getElementById("camera");
    Webcam.attach('#camera')
    
    function takeSnapshot()
    {
       Webcam.snap(function(data_uri){
           document.getElementById("result").innerHTML= '<img id="captured_image" src="'+data_uri+'"/>';
       });
    }
    console.log('ml5 version=',ml5.version);
    classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/cLQ8zVMYa/',modelLoaded);

    function modelLoaded()
    {
      console.log('Model Loaded!');
    }
  
    function identify()
    {
      img= document.getElementById("captured_image");
      classifier.classify(img,gotResult);
    }
  
    function gotResult(error,results)
    {
      if (error){
          console.log(error);
      }
      else {
          console.log(results);
          object_name=results[0].label;
          accuracy=results[0].confidence.toFixed(3)*100;
          document.getElementById("objectName").innerHTML=object_name;
          document.getElementById("accuracy").innerHTML=accuracy;
      }
    }
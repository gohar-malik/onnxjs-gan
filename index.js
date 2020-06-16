async function runExample() {
  // Create an ONNX inference session with WebGL backend.
  const session = new onnx.InferenceSession();
  // Load an ONNX model. This model is Vanilla GAN trained on Mnist.
  // It takes a 100 element noise vector and outputs an Mnist image
  await session.loadModel("./VanillaGAN_Mnist.onnx");
  const predictions = document.getElementById('predictions');
  var c=document.getElementById("myCanvas");
  var ctx=c.getContext("2d");


  const numImages =10;
  
  ctx.scale(1.5, 1.5)
  for (var l=0; l<numImages; l++){
      
      for (var k=0; k<numImages; k++){
        input1 = new Float32Array(100).fill(1);
        input1= input1.map(x => x*randn_bm())
        inputTensor = new onnx.Tensor(input1, 'float32', [1,100]);
        outputMap = await session.run([inputTensor]);
        outputData = outputMap.values().next().value.data;
        max= Math.max(...outputData)
        min= Math.min(...outputData)
        var a = outputData.map(x => x -min/ (max-min + 0.00001));
        a= a.map(x => (x< 0)*0 + (x>0)*255);
        predictions.innerHTML = 'Generated Images';

        for (var i = 0; i < 28; i++) {
         for (var j = 0; j < 28; j++) {
          ctx.fillStyle = 'rgb(' + a[28*i+j]+ ', ' +
                          a[28*i+j] + ','+ a[28*i+j] +')';

          ctx.fillRect(k*28+j , i+28*l, 28, 28);
         }
        } 
      }
    }
  ctx.scale(1/1.5, 1/1.5)
  
}

function randn_bm() {
    var u = 0, v = 0;
    while(u === 0) u = Math.random(); //Converting [0,1) to (0,1)
    while(v === 0) v = Math.random();
    return Math.sqrt( -2.0 * Math.log( u ) ) * Math.cos( 2.0 * Math.PI * v );
}


# Vanilla GAN on Mnist ONNX.js Example
This is an attempt to run a Pytorch trained Vanilla GAN model in browser using HTTP server.
It uses ONNX.js for the purpose.
Details can be found at: https://github.com/microsoft/onnxjs

This example shows:
- How to create an InferenceSession
- Load VanillaGAN_Mnist model
- Use a 100 element random numbers vector from normal distribution as input Tensor
- Run the inference using the input
- Get output Tensor back
- Transform it to the suitable format for printing on the web page

## How to run
1. Start an http server in this folder. You can install [`http-server`](https://github.com/indexzero/http-server) via
    ```
    npm install http-server -g
    ```
    Then start an http server by running
    ```
    http-server .. -c-1 -p 3000
    ```

    This will start the local http server with disabled cache and listens on port 3000

2. Open up the browser and access this URL:
http://localhost:3000/onnxjs_gan/

3. Click on Run button to see results of the inference run.

## If it does not work after following the above mentioned steps follow the steps below and then to go the step no1 mentioned above
1. Clone the "onnxjs" repository from Github using the following command:
    ```
    git clone https://github.com/microsoft/onnxjs.git
    ```    

2. Copy the folder "onnxjs_gan" containing this and other files to the following path in the "onnxjs" repo folder:
    onnxjs/exampples/browser/


## Files in folder
- **index.html**

    The HTML file to render the UI in browser

- **index.js**

    The main .js file that holds all `ONNX.js` logic to load and execute the model.

- **VanillaGAN_Mnist.onnx**

    The ONNX model file that contains the Vanilla GAN model.

- **Sample.png**

    A sample screenshot of the running model on a browser.


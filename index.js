const NodeWebCam = require( "node-webcam" );

const options = {
  width: 1280,
  height: 720,
  quality: 100,
  callbackReturn: 'base64',
  device: false,
  verbose: false,
  delay: 1000,
}
NodeWebCam

const Webcam = NodeWebcam.create(options);

var opts = {
    callbackReturn: "base64"
};

Webcam.capture("test_picture", function(err, data) {
    var image = "<img src='" + data + "'>";
});

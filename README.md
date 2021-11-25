# globos-002
Repositorio del segundo ejercicio de Electrónica Creativa, hecho en javascript con [p5.js](https://p5js.org/es)

Utiliza la librería [p5-serial](https://github.com/p5-serial/p5.serialport). Necesita, por tanto, un agente intermedio que se comunique con Arduino y con el sketch que se ejecuta en el navegador, como [p5.serialport](https://github.com/p5-serial/p5.serialcontrol/releases).  

El programa sketch.js espera que Arduino le envíe por el puerto serie la cadena "Knock!", como en el ejemplo de Arduino [Knock](https://www.arduino.cc/en/Tutorial/BuiltInExamples/Knock). 
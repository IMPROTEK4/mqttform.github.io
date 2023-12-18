// function action()
// {
//     dataIn = document.getElementById("box_host").value;
//     document.getElementById("txt_sub").value += dataIn + '\n';
// }
function ConnectBroker()
{
    const ClientId = document.getElementById("box_clientID").value;

    Broker = 'ws://' + document.getElementById("box_host").value;
    Port = document.getElementById("box_port").value;
    username = document.getElementById("box_user").value;
    password = document.getElementById("box_password").value;
    timeout = document.getElementById("box_timeOut").value;   
    
    // Create a client instance
    const client = new Paho.MQTT.Client(Broker, Number(Port), ClientId);

    const options = {
        keepalive: 60,
        // clientId: ClientId,
        // protocolId: "MQTT",
        protocolVersion: 4,
        clean: true,
        reconnectPeriod: 1000,
        connectTimeout: Number(timeout),
      };
    
      mqttClient = client.connect(Broker, options);
    
    //   mqttClient.on("error", (err) => {
    //     console.log("Error: ", err);
    //     mqttClient.end();
    //   });
    
    //   mqttClient.on("reconnect", () => {
    //     console.log("Reconnecting...");
    //   });
    
    //   mqttClient.on("connect", () => {
    //     console.log("Client connected:" + ClientId);
    //   });
    
      // Received Message
    //   mqttClient.on("message", (topic, message, packet) => {
    //     console.log("Received Message: " + message.toString() + "\nOn topic: " + topic);
    //   });
}

function DisconnectBroker()
{
 
}
function sub_topic()
{

}
function pub_topic()
{

}
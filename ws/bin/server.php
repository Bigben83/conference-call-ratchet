<?php

/**
 * Description of server
 *
 * @author Amir <amirsanni@gmail.com>
 * @date 23-Dec-2016
 */

require './vendor/autoload.php';

use Amir\Comm;
use Ratchet\App;

//set an array of origins allowed to connect to this server
$allowed_origins = ['localhost', '127.0.0.1', 'vc.bisonconstructions.com.au'];

// Run the server application through the WebSocket protocol on port 8080
$app = new App('vc.bisonconstructions.com.au', 8555, '0.0.0.0');//App(hostname, port, 'whoCanConnectIP', '')

//create socket routes
//route(uri, classInstance, arrOfAllowedOrigins)
$app->route('/comm', new Comm, $allowed_origins);

//run websocket
$app->run();

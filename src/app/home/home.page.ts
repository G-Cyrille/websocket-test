import { Component } from '@angular/core';
import {
  CordovaWebsocketOptions
} from 'cordova-plugin-advanced-websocket-types';

// eslint-disable-next-line @typescript-eslint/naming-convention
declare let CordovaWebsocketPlugin: any;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {

const wsOptions: CordovaWebsocketOptions = {
  url: 'wss://echo.websocket.org'
};

CordovaWebsocketPlugin.wsConnect(
  wsOptions,
  event => { // CordovaWebsocketEvent
    console.log(`Received callback from WebSocket: ${event?.callbackMethod}`);
  },
  success => { // CordovaWebsocketSuccess
    console.log(`Connected to WebSocket with id: ${success.webSocketId}`);
  },
  error => { // CordovaWebsocketError
    console.log(`Failed to connect to WebSocket: code: ${error?.code}, reason: ${error?.reason}`, error?.exception);
  }
);
  }

}

import React from "react";
import { io } from "socket.io-client";

export const socket = io("http://localhost:5000", { transports: ['websocket'], upgrade: false, "forceNew": true, 'reconnection': true, 'reconnectionDelay': 5000 });
export const SocketContext = React.createContext(socket);
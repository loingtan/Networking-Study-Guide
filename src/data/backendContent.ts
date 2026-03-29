// Network Application Concepts for Backend Engineers
// Focused on application-layer networking concepts

export interface BackendTopic {
  id: string;
  title: string;
  category: 'protocols' | 'architecture' | 'security';
  content: string;
  subtopics: BackendSubtopic[];
  diagrams?: BackendDiagram[];
  codeExamples?: CodeExample[];
}

export interface BackendSubtopic {
  title: string;
  content?: string;
  bullets: string[];
  important?: string;
  codeExample?: CodeExample;
}

export interface BackendDiagram {
  id: string;
  title: string;
  description: string;
  mermaidCode: string;
}

export interface CodeExample {
  language: string;
  title: string;
  code: string;
}

export const backendTopics: BackendTopic[] = [
  {
    id: "be-1",
    title: "HTTP and REST API Design",
    category: "protocols",
    content: "Understanding HTTP protocols and designing RESTful APIs is fundamental for backend network applications.",
    subtopics: [
      {
        title: "HTTP Methods and Semantics",
        bullets: [
          "GET: Retrieve resource (idempotent, safe)",
          "POST: Create new resource (not idempotent)",
          "PUT: Update/replace entire resource (idempotent)",
          "PATCH: Partial update to resource",
          "DELETE: Remove resource (idempotent)",
          "HEAD: Get headers without body",
          "OPTIONS: Get supported methods"
        ],
        important: "Idempotent methods produce the same result when called multiple times."
      },
      {
        title: "HTTP Status Codes",
        bullets: [
          "2xx Success: 200 OK, 201 Created, 204 No Content",
          "3xx Redirect: 301 Moved, 304 Not Modified",
          "4xx Client Error: 400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found, 409 Conflict, 422 Unprocessable",
          "5xx Server Error: 500 Internal Error, 502 Bad Gateway, 503 Service Unavailable, 504 Gateway Timeout"
        ]
      },
      {
        title: "REST API Design Principles",
        bullets: [
          "Use nouns for resources: /users, /orders, not /getUser",
          "Use plural nouns: /users instead of /user",
          "Use nested paths for relationships: /users/123/orders",
          "Version your API: /v1/users or api-v1.example.com",
          "Use query params for filtering: /users?role=admin&active=true",
          "Use pagination: /users?page=2&limit=50"
        ]
      },
      {
        title: "Request and Response Headers",
        bullets: [
          "Content-Type: application/json, text/html",
          "Accept: What format client wants",
          "Authorization: Bearer token, Basic auth",
          "Cache-Control: no-cache, max-age=3600",
          "ETag: Entity tag for caching",
          "X-Request-ID: For request tracing"
        ]
      }
    ],
    diagrams: [
      {
        id: "rest-resource",
        title: "REST Resource Hierarchy",
        description: "Example of REST API resource structure",
        mermaidCode: `graph TD
    API[API Root /api/v1]
    
    API --> Users[/users]
    API --> Orders[/orders]
    API --> Products[/products]
    
    Users --> User1[/users/123]
    Users --> User2[/users/456]
    
    User1 --> UserOrders[/users/123/orders]
    User1 --> UserProfile[/users/123/profile]
    
    Orders --> Order1[/orders/789]
    Order1 --> OrderItems[/orders/789/items]
    
    Products --> Product1[/products/abc]
    Product1 --> Reviews[/products/abc/reviews]
    
    style API fill:#e6f3ff`
      },
      {
        id: "http-request-response",
        title: "HTTP Request-Response Flow",
        description: "Complete HTTP request-response cycle",
        mermaidCode: `sequenceDiagram
    participant Client as Client
    participant Server as Server
    participant DB as Database
    
    Client->>Server: GET /api/users/123 HTTP/1.1
    Note right of Client: Headers:<br/>Host: api.example.com<br/>Accept: application/json<br/>Authorization: Bearer token
    
    Server->>Server: Validate token
    Server->>DB: SELECT * FROM users WHERE id=123
    DB-->>Server: User data
    
    Server-->>Client: HTTP/1.1 200 OK
    Note left of Server: Headers:<br/>Content-Type: application/json<br/>Cache-Control: max-age=3600
    Note left of Server: Body:<br/>{id: 123, name: "John"}`
      }
    ],
    codeExamples: [
      {
        language: "python",
        title: "Flask REST API Example",
        code: `from flask import Flask, jsonify, request

app = Flask(__name__)

# GET all users
@app.route('/api/v1/users', methods=['GET'])
def get_users():
    page = request.args.get('page', 1, type=int)
    limit = request.args.get('limit', 10, type=int)
    users = User.query.paginate(page=page, per_page=limit)
    return jsonify({
        'data': [u.to_dict() for u in users.items],
        'total': users.total,
        'page': page,
        'pages': users.pages
    })

# GET single user
@app.route('/api/v1/users/<int:user_id>', methods=['GET'])
def get_user(user_id):
    user = User.query.get_or_404(user_id)
    return jsonify(user.to_dict())

# POST create user
@app.route('/api/v1/users', methods=['POST'])
def create_user():
    data = request.get_json()
    user = User(name=data['name'], email=data['email'])
    db.session.add(user)
    db.session.commit()
    return jsonify(user.to_dict()), 201

# PUT update user
@app.route('/api/v1/users/<int:user_id>', methods=['PUT'])
def update_user(user_id):
    user = User.query.get_or_404(user_id)
    data = request.get_json()
    user.name = data.get('name', user.name)
    user.email = data.get('email', user.email)
    db.session.commit()
    return jsonify(user.to_dict())

# DELETE user
@app.route('/api/v1/users/<int:user_id>', methods=['DELETE'])
def delete_user(user_id):
    user = User.query.get_or_404(user_id)
    db.session.delete(user)
    db.session.commit()
    return '', 204`
      },
      {
        language: "javascript",
        title: "Express.js REST API",
        code: `const express = require('express');
const app = express();

app.use(express.json());

// GET all users with pagination
app.get('/api/v1/users', async (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const offset = (page - 1) * limit;
    
    const users = await User.findAll({ limit, offset });
    const total = await User.count();
    
    res.json({
        data: users,
        meta: {
            total,
            page,
            pages: Math.ceil(total / limit)
        }
    });
});

// GET single user
app.get('/api/v1/users/:id', async (req, res) => {
    const user = await User.findByPk(req.params.id);
    if (!user) {
        return res.status(404).json({ error: 'User not found' });
    }
    res.json(user);
});

// POST create user
app.post('/api/v1/users', async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Internal server error' });
});

app.listen(3000);`
      }
    ]
  },
  {
    id: "be-2",
    title: "Socket Programming",
    category: "protocols",
    content: "Socket programming allows direct network communication at the transport layer. Understanding TCP and UDP sockets is essential for building network applications.",
    subtopics: [
      {
        title: "TCP vs UDP Sockets",
        bullets: [
          "TCP: Connection-oriented, reliable, ordered delivery",
          "TCP: Three-way handshake (SYN, SYN-ACK, ACK)",
          "TCP: Flow control and congestion control built-in",
          "UDP: Connectionless, unreliable, no ordering guarantees",
          "UDP: No handshake, lower latency",
          "UDP: Good for streaming, gaming, DNS"
        ],
        important: "Choose TCP for reliability, UDP for speed and low latency."
      },
      {
        title: "TCP Socket Lifecycle",
        bullets: [
          "Server: socket() -> bind() -> listen() -> accept() -> recv/send -> close()",
          "Client: socket() -> connect() -> send/recv -> close()",
          "bind(): Assign address and port to socket",
          "listen(): Mark socket as passive (server)",
          "accept(): Block until client connects",
          "connect(): Initiate connection to server"
        ]
      },
      {
        title: "Socket Options",
        bullets: [
          "SO_REUSEADDR: Allow reuse of local address",
          "SO_KEEPALIVE: Keep connections alive",
          "TCP_NODELAY: Disable Nagle's algorithm",
          "SO_RCVBUF/SO_SNDBUF: Buffer sizes",
          "SO_TIMEOUT: Set timeout for blocking operations"
        ]
      }
    ],
    diagrams: [
      {
        id: "tcp-socket-flow",
        title: "TCP Socket Communication Flow",
        description: "Server and client socket interaction",
        mermaidCode: `sequenceDiagram
    participant Server as Server
    participant Client as Client
    
    Note over Server: socket()
    Server->>Server: bind(port 8080)
    Server->>Server: listen(backlog=5)
    
    Note over Client: socket()
    
    Server->>Server: accept() - blocks
    
    Client->>Server: connect() - SYN
    Server->>Client: SYN-ACK
    Client->>Server: ACK
    
    Note over Server,Client: Connection Established
    
    Client->>Server: send(data)
    Server->>Server: recv() - receives data
    
    Server->>Client: send(response)
    Client->>Client: recv() - receives response
    
    Client->>Server: close() - FIN
    Server->>Client: ACK + FIN
    Client->>Server: ACK
    
    Note over Server,Client: Connection Closed`
      },
      {
        id: "socket-states",
        title: "TCP Socket States",
        description: "State transitions in TCP socket",
        mermaidCode: `stateDiagram-v2
    [*] --> CLOSED
    
    CLOSED --> SYN_SENT: connect()
    CLOSED --> LISTEN: bind() + listen()
    
    LISTEN --> SYN_RECEIVED: recv SYN
    SYN_SENT --> ESTABLISHED: recv SYN-ACK
    SYN_RECEIVED --> ESTABLISHED: recv ACK
    
    ESTABLISHED --> FIN_WAIT_1: close()
    ESTABLISHED --> CLOSE_WAIT: recv FIN
    
    FIN_WAIT_1 --> FIN_WAIT_2: recv ACK
    FIN_WAIT_2 --> TIME_WAIT: recv FIN
    CLOSE_WAIT --> LAST_ACK: close()
    LAST_ACK --> CLOSED: recv ACK
    
    TIME_WAIT --> CLOSED: timeout(2MSL)`
      }
    ],
    codeExamples: [
      {
        language: "python",
        title: "Python TCP Server and Client",
        code: `# TCP Server
import socket

server_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
server_socket.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
server_socket.bind(('0.0.0.0', 8080))
server_socket.listen(5)

print("Server listening on port 8080...")

while True:
    client_socket, address = server_socket.accept()
    print(f"Connection from {address}")
    
    # Receive data
    data = client_socket.recv(1024)
    print(f"Received: {data.decode()}")
    
    # Send response
    response = b"Hello from server!"
    client_socket.send(response)
    
    client_socket.close()

# TCP Client
import socket

client_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
client_socket.connect(('localhost', 8080))

# Send data
client_socket.send(b"Hello from client!")

# Receive response
response = client_socket.recv(1024)
print(f"Received: {response.decode()}")

client_socket.close()`
      },
      {
        language: "python",
        title: "Python UDP Server and Client",
        code: `# UDP Server
import socket

server_socket = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
server_socket.bind(('0.0.0.0', 8080))

print("UDP Server listening on port 8080...")

while True:
    data, address = server_socket.recvfrom(1024)
    print(f"Received from {address}: {data.decode()}")
    
    # Send response
    server_socket.sendto(b"Hello from UDP server!", address)

# UDP Client
import socket

client_socket = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)

# Send to server
server_address = ('localhost', 8080)
client_socket.sendto(b"Hello from UDP client!", server_address)

# Receive response
data, server = client_socket.recvfrom(1024)
print(f"Received: {data.decode()}")

client_socket.close()`
      },
      {
        language: "java",
        title: "Java Socket Programming",
        code: `// TCP Server
import java.io.*;
import java.net.*;

public class TCPServer {
    public static void main(String[] args) throws IOException {
        ServerSocket serverSocket = new ServerSocket(8080);
        System.out.println("Server listening on port 8080...");
        
        while (true) {
            Socket clientSocket = serverSocket.accept();
            System.out.println("Client connected: " + clientSocket.getInetAddress());
            
            // Read from client
            BufferedReader in = new BufferedReader(
                new InputStreamReader(clientSocket.getInputStream())
            );
            String message = in.readLine();
            System.out.println("Received: " + message);
            
            // Write to client
            PrintWriter out = new PrintWriter(clientSocket.getOutputStream(), true);
            out.println("Hello from Java server!");
            
            clientSocket.close();
        }
    }
}

// TCP Client
public class TCPClient {
    public static void main(String[] args) throws IOException {
        Socket socket = new Socket("localhost", 8080);
        
        // Send message
        PrintWriter out = new PrintWriter(socket.getOutputStream(), true);
        out.println("Hello from Java client!");
        
        // Read response
        BufferedReader in = new BufferedReader(
            new InputStreamReader(socket.getInputStream())
        );
        String response = in.readLine();
        System.out.println("Server: " + response);
        
        socket.close();
    }
}`
      }
    ]
  },
  {
    id: "be-3",
    title: "WebSocket and Real-time Communication",
    category: "protocols",
    content: "WebSocket provides full-duplex communication over a single TCP connection, enabling real-time bidirectional communication between client and server.",
    subtopics: [
      {
        title: "WebSocket vs HTTP Polling",
        bullets: [
          "HTTP Polling: Client repeatedly requests updates (inefficient)",
          "HTTP Long Polling: Server holds request until data available",
          "Server-Sent Events (SSE): Server pushes to client over HTTP",
          "WebSocket: Full-duplex, persistent connection",
          "WebSocket: Lower latency than HTTP alternatives",
          "WebSocket: Uses ws:// (unencrypted) or wss:// (TLS)"
        ],
        important: "WebSocket is ideal for chat, live updates, gaming - any scenario requiring low-latency bidirectional communication."
      },
      {
        title: "WebSocket Handshake",
        bullets: [
          "Client sends HTTP upgrade request with Connection: Upgrade",
          "Client sends Upgrade: websocket header",
          "Server responds with 101 Switching Protocols",
          "Connection upgraded from HTTP to WebSocket",
          "After handshake, data frames exchanged",
          "No more HTTP headers after upgrade"
        ]
      },
      {
        title: "WebSocket Frame Types",
        bullets: [
          "Text frame: UTF-8 text data",
          "Binary frame: Binary data",
          "Ping/Pong: Keepalive mechanism",
          "Close: Connection termination",
          "Continuation: Fragmented message continuation"
        ]
      }
    ],
    diagrams: [
      {
        id: "websocket-handshake",
        title: "WebSocket Handshake Process",
        description: "HTTP upgrade to WebSocket protocol",
        mermaidCode: `sequenceDiagram
    participant Client as Client
    participant Server as Server
    
    Note over Client: HTTP Request
    Client->>Server: GET /chat HTTP/1.1
    Note right of Client: Host: example.com<br/>Upgrade: websocket<br/>Connection: Upgrade<br/>Sec-WebSocket-Key: dGhlIHNhbXBsZSBub25jZQ==<br/>Sec-WebSocket-Version: 13
    
    Server->>Server: Validate upgrade request
    Server->>Server: Generate accept key
    
    Note over Server: HTTP Response
    Server-->>Client: HTTP/1.1 101 Switching Protocols
    Note left of Server: Upgrade: websocket<br/>Connection: Upgrade<br/>Sec-WebSocket-Accept: s3pPLMBiTxaQ9kYGzzhZRbK+xOo=
    
    Note over Client,Server: WebSocket Connection Established
    
    Client->>Server: WebSocket Text Frame: "Hello"
    Server->>Client: WebSocket Text Frame: "Hi there!"
    
    Client->>Server: WebSocket Binary Frame: [data]
    Server->>Client: WebSocket Text Frame: "Message received"`
      },
      {
        id: "websocket-vs-polling",
        title: "WebSocket vs HTTP Polling Comparison",
        description: "Different approaches for real-time updates",
        mermaidCode: `graph TB
    subgraph Polling["HTTP Polling"]
        C1[Client] -->|Request| S1[Server]
        S1 -->|No data| C1
        C1 -->|Request| S1
        S1 -->|No data| C1
        C1 -->|Request| S1
        S1 -->|Data!| C1
        Note1["Many requests<br/>High latency<br/>Wasted resources"] --> C1
    end
    
    subgraph WebSocket["WebSocket"]
        C2[Client] -->|Upgrade| S2[Server]
        S2 -->|101 Switching| C2
        C2 <-->|Persistent connection| S2
        S2 -->|Push data| C2
        S2 -->|Push data| C2
        Note2["Single connection<br/>Low latency<br/>Server can push"] --> C2
    end
    
    style Polling fill:#ffe6e6
    style WebSocket fill:#e6ffe6`
      }
    ],
    codeExamples: [
      {
        language: "javascript",
        title: "Node.js WebSocket Server (ws library)",
        code: `const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

// Store connected clients
const clients = new Map();

wss.on('connection', (ws, req) => {
    const clientId = generateId();
    clients.set(clientId, ws);
    
    console.log('Client connected:', clientId);
    
    // Send welcome message
    ws.send(JSON.stringify({
        type: 'welcome',
        clientId: clientId
    }));
    
    // Handle incoming messages
    ws.on('message', (data) => {
        try {
            const message = JSON.parse(data);
            
            // Broadcast to all clients
            if (message.type === 'broadcast') {
                broadcast(message, clientId);
            }
            // Send to specific client
            else if (message.type === 'direct') {
                sendToClient(message.to, message);
            }
        } catch (error) {
            ws.send(JSON.stringify({
                type: 'error',
                message: 'Invalid message format'
            }));
        }
    });
    
    // Handle client disconnect
    ws.on('close', () => {
        console.log('Client disconnected:', clientId);
        clients.delete(clientId);
    });
    
    // Handle errors
    ws.on('error', (error) => {
        console.error('WebSocket error:', error);
    });
});

function broadcast(message, senderId) {
    const data = JSON.stringify({
        type: 'message',
        from: senderId,
        content: message.content,
        timestamp: Date.now()
    });
    
    clients.forEach((ws, id) => {
        if (ws.readyState === WebSocket.OPEN) {
            ws.send(data);
        }
    });
}

function sendToClient(clientId, message) {
    const ws = clients.get(clientId);
    if (ws && ws.readyState === WebSocket.OPEN) {
        ws.send(JSON.stringify(message));
    }
}

console.log('WebSocket server running on port 8080');`
      },
      {
        language: "javascript",
        title: "Browser WebSocket Client",
        code: `// Connect to WebSocket server
const ws = new WebSocket('ws://localhost:8080');

// Connection opened
ws.onopen = () => {
    console.log('Connected to server');
    
    // Send a message
    ws.send(JSON.stringify({
        type: 'broadcast',
        content: 'Hello everyone!'
    }));
};

// Receive message
ws.onmessage = (event) => {
    const message = JSON.parse(event.data);
    
    switch (message.type) {
        case 'welcome':
            console.log('My client ID:', message.clientId);
            break;
        case 'message':
            console.log('Message from', message.from, ':', message.content);
            break;
        case 'error':
            console.error('Error:', message.message);
            break;
    }
};

// Connection closed
ws.onclose = () => {
    console.log('Disconnected from server');
};

// Error handling
ws.onerror = (error) => {
    console.error('WebSocket error:', error);
};

// Send message function
function sendMessage(content) {
    if (ws.readyState === WebSocket.OPEN) {
        ws.send(JSON.stringify({
            type: 'broadcast',
            content: content
        }));
    }
}

// Close connection
function disconnect() {
    ws.close();
}`
      },
      {
        language: "python",
        title: "Python WebSocket Server (websockets library)",
        code: `import asyncio
import websockets
import json

connected = set()

async def handler(websocket, path):
    # Register client
    connected.add(websocket)
    print(f"Client connected. Total: {len(connected)}")
    
    try:
        async for message in websocket:
            data = json.loads(message)
            
            if data['type'] == 'broadcast':
                # Broadcast to all connected clients
                await broadcast({
                    'type': 'message',
                    'content': data['content'],
                    'sender': id(websocket)
                })
            
            elif data['type'] == 'echo':
                # Echo back to sender
                await websocket.send(json.dumps({
                    'type': 'echo',
                    'content': data['content']
                }))
                
    except websockets.exceptions.ConnectionClosed:
        print("Client disconnected")
    finally:
        connected.remove(websocket)

async def broadcast(message):
    if connected:
        message_json = json.dumps(message)
        await asyncio.gather(
            *[ws.send(message_json) for ws in connected]
        )

# Start server
start_server = websockets.serve(handler, 'localhost', 8080)
print("WebSocket server started on ws://localhost:8080")

asyncio.get_event_loop().run_until_complete(start_server)
asyncio.get_event_loop().run_forever()`
      }
    ]
  },
  {
    id: "be-4",
    title: "Session Management and State",
    category: "architecture",
    content: "HTTP is stateless. Session management techniques allow servers to maintain state across multiple requests from the same client.",
    subtopics: [
      {
        title: "Session Management Techniques",
        bullets: [
          "Cookies: Small text files stored by browser, sent with every request",
          "Session ID: Server stores session data, cookie only contains ID",
          "JWT (JSON Web Tokens): Self-contained token with claims",
          "Local Storage: Client-side storage (not sent automatically)",
          "Session Storage: Client-side, cleared when tab closes"
        ]
      },
      {
        title: "Cookies",
        bullets: [
          "HttpOnly: Prevents JavaScript access (XSS protection)",
          "Secure: Only sent over HTTPS",
          "SameSite: CSRF protection (Strict, Lax, None)",
          "Max-Age/Expires: Cookie lifetime",
          "Domain/Path: Cookie scope"
        ],
        important: "Always use HttpOnly and Secure flags for session cookies. Use SameSite=Strict for sensitive operations."
      },
      {
        title: "JWT Structure",
        bullets: [
          "Header: Algorithm and token type (Base64Url encoded)",
          "Payload: Claims (user ID, expiration, etc.)",
          "Signature: HMAC or RSA signature for verification",
          "Format: header.payload.signature",
          "Stateless: Server doesn't store session data"
        ]
      },
      {
        title: "Session Storage Options",
        bullets: [
          "In-Memory: Fast but lost on server restart",
          "Redis: Fast, persistent, shared across servers",
          "Database: Persistent but slower",
          "Client-side (JWT): Scalable but larger requests"
        ]
      }
    ],
    diagrams: [
      {
        id: "session-cookie",
        title: "Session Cookie Flow",
        description: "How session cookies maintain state",
        mermaidCode: `sequenceDiagram
    participant Browser as Browser
    participant Server as Server
    participant DB as Session Store
    
    Note over Browser: First Request
    Browser->>Server: GET /login
    Server->>Server: Authenticate user
    Server->>DB: Create session
    DB-->>Server: session_id: abc123
    Server-->>Browser: 200 OK + Set-Cookie: session=abc123
    
    Note over Browser: Subsequent Requests
    Browser->>Server: GET /profile
    Note right of Browser: Cookie: session=abc123
    Server->>DB: Get session abc123
    DB-->>Server: {user_id: 123, ...}
    Server-->>Browser: User profile
    
    Note over Browser: Logout
    Browser->>Server: POST /logout
    Note right of Browser: Cookie: session=abc123
    Server->>DB: Delete session abc123
    Server-->>Browser: 200 OK + Clear Cookie`
      },
      {
        id: "jwt-flow",
        title: "JWT Authentication Flow",
        description: "Stateless authentication with JWT",
        mermaidCode: `sequenceDiagram
    participant Client as Client
    participant Server as Server
    
    Note over Client: Login
    Client->>Server: POST /login {username, password}
    Server->>Server: Verify credentials
    Server->>Server: Generate JWT
    Server-->>Client: {token: eyJhbGciOiJ...}
    
    Note over Client: Authenticated Requests
    Client->>Server: GET /api/data
    Note right of Client: Authorization: Bearer eyJhbGciOiJ...
    Server->>Server: Verify JWT signature
    Server->>Server: Extract claims from JWT
    Server-->>Client: Protected data
    
    Note over Client: No server session storage needed!`
      }
    ],
    codeExamples: [
      {
        language: "python",
        title: "Flask Session Management",
        code: `from flask import Flask, session, request, jsonify
from flask_session import Session
import redis

app = Flask(__name__)
app.secret_key = 'your-secret-key'

# Configure server-side sessions with Redis
app.config['SESSION_TYPE'] = 'redis'
app.config['SESSION_REDIS'] = redis.from_url('redis://localhost:6379')
Session(app)

@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    user = authenticate(data['username'], data['password'])
    
    if user:
        session['user_id'] = user.id
        session['username'] = user.username
        return jsonify({'message': 'Logged in'})
    
    return jsonify({'error': 'Invalid credentials'}), 401

@app.route('/profile')
def profile():
    if 'user_id' not in session:
        return jsonify({'error': 'Not logged in'}), 401
    
    user = get_user(session['user_id'])
    return jsonify({
        'id': user.id,
        'username': user.username
    })

@app.route('/logout')
def logout():
    session.clear()
    return jsonify({'message': 'Logged out'})`
      },
      {
        language: "python",
        title: "JWT Authentication with PyJWT",
        code: `import jwt
import datetime
from functools import wraps
from flask import request, jsonify

SECRET_KEY = 'your-secret-key'

def generate_token(user_id):
    payload = {
        'user_id': user_id,
        'exp': datetime.datetime.utcnow() + datetime.timedelta(hours=24),
        'iat': datetime.datetime.utcnow()
    }
    return jwt.encode(payload, SECRET_KEY, algorithm='HS256')

def verify_token(token):
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=['HS256'])
        return payload
    except jwt.ExpiredSignatureError:
        return None
    except jwt.InvalidTokenError:
        return None

def token_required(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        token = None
        
        if 'Authorization' in request.headers:
            auth_header = request.headers['Authorization']
            try:
                token = auth_header.split(" ")[1]
            except IndexError:
                return jsonify({'error': 'Invalid token format'}), 401
        
        if not token:
            return jsonify({'error': 'Token missing'}), 401
        
        payload = verify_token(token)
        if not payload:
            return jsonify({'error': 'Invalid or expired token'}), 401
        
        return f(payload['user_id'], *args, **kwargs)
    
    return decorated

# Usage
@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    user = authenticate(data['username'], data['password'])
    
    if user:
        token = generate_token(user.id)
        return jsonify({'token': token})
    
    return jsonify({'error': 'Invalid credentials'}), 401

@app.route('/protected')
@token_required
def protected(user_id):
    return jsonify({'message': f'Hello user {user_id}'})`
      },
      {
        language: "javascript",
        title: "Express.js Session with JWT",
        code: `const express = require('express');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

const app = express();
app.use(express.json());
app.use(cookieParser());

const SECRET_KEY = 'your-secret-key';

// Middleware to verify JWT
const authenticateToken = (req, res, next) => {
    const token = req.cookies.token || 
                  req.headers['authorization']?.split(' ')[1];
    
    if (!token) {
        return res.status(401).json({ error: 'Access denied' });
    }
    
    jwt.verify(token, SECRET_KEY, (err, user) => {
        if (err) {
            return res.status(403).json({ error: 'Invalid token' });
        }
        req.user = user;
        next();
    });
};

// Login - set cookie
app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    
    // Verify credentials
    const user = await authenticateUser(username, password);
    
    if (!user) {
        return res.status(401).json({ error: 'Invalid credentials' });
    }
    
    // Generate JWT
    const token = jwt.sign(
        { userId: user.id, username: user.username },
        SECRET_KEY,
        { expiresIn: '24h' }
    );
    
    // Set HTTP-only cookie
    res.cookie('token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 24 * 60 * 60 * 1000 // 24 hours
    });
    
    res.json({ message: 'Logged in successfully' });
});

// Protected route
app.get('/profile', authenticateToken, (req, res) => {
    res.json({ 
        userId: req.user.userId,
        username: req.user.username 
    });
});

// Logout - clear cookie
app.post('/logout', (req, res) => {
    res.clearCookie('token');
    res.json({ message: 'Logged out' });
});

app.listen(3000);`
      }
    ]
  },
  {
    id: "be-5",
    title: "API Authentication and Security",
    category: "security",
    content: "Securing network applications requires proper authentication and authorization mechanisms.",
    subtopics: [
      {
        title: "Authentication Methods",
        bullets: [
          "Basic Auth: Username:password in Base64 (use only with HTTPS)",
          "Bearer Token: Token in Authorization header",
          "API Key: Key in header or query param",
          "OAuth 2.0: Third-party authorization framework",
          "OpenID Connect: Authentication layer on top of OAuth 2.0"
        ]
      },
      {
        title: "OAuth 2.0 Flows",
        bullets: [
          "Authorization Code: Web apps, most secure",
          "Implicit: Single-page apps (deprecated)",
          "Password: Trusted first-party apps",
          "Client Credentials: Server-to-server",
          "PKCE: Extension for mobile/SPA apps"
        ]
      },
      {
        title: "API Security Best Practices",
        bullets: [
          "Always use HTTPS in production",
          "Validate and sanitize all inputs",
          "Use parameterized queries (prevent SQL injection)",
          "Implement rate limiting",
          "Set security headers (HSTS, CSP, X-Frame-Options)",
          "Log security events",
          "Use least privilege principle"
        ],
        important: "Never trust client input. Always validate on the server side."
      },
      {
        title: "CORS (Cross-Origin Resource Sharing)",
        bullets: [
          "Same-origin policy restricts cross-origin requests",
          "CORS headers allow controlled cross-origin access",
          "Access-Control-Allow-Origin: Allowed origins",
          "Access-Control-Allow-Methods: Allowed HTTP methods",
          "Access-Control-Allow-Headers: Allowed headers",
          "Preflight OPTIONS request for complex requests"
        ]
      }
    ],
    diagrams: [
      {
        id: "oauth-flow",
        title: "OAuth 2.0 Authorization Code Flow",
        description: "Secure OAuth flow for web applications",
        mermaidCode: `sequenceDiagram
    participant User as User
    participant Client as Client App
    participant Auth as Auth Server
    participant Resource as Resource Server
    
    User->>Client: Click "Login with Google"
    Client->>Auth: GET /authorize?client_id=xxx&redirect_uri=xxx&scope=profile
    Note right of Client: Response type: code
    
    Auth->>User: Show login/consent page
    User->>Auth: Enter credentials & consent
    
    Auth-->>Client: Redirect to callback with ?code=abc123
    
    Client->>Auth: POST /token
    Note right of Client: grant_type: authorization_code<br/>code: abc123<br/>client_secret: xxx
    
    Auth-->>Client: {access_token: xyz, refresh_token: abc}
    
    Client->>Resource: GET /api/user
    Note right of Client: Authorization: Bearer xyz
    
    Resource-->>Client: User profile data`
      },
      {
        id: "cors-flow",
        title: "CORS Preflight Request",
        description: "How CORS preflight works",
        mermaidCode: `sequenceDiagram
    participant Browser as Browser
    participant Server as API Server
    
    Note over Browser: Simple Request (GET, POST with standard headers)
    Browser->>Server: GET /api/data
    Note right of Browser: Origin: https://example.com
    
    Server-->>Browser: 200 OK
    Note left of Server: Access-Control-Allow-Origin: https://example.com<br/>OR Access-Control-Allow-Origin: *
    
    Note over Browser: Complex Request (PUT, DELETE, custom headers)
    Browser->>Server: OPTIONS /api/data
    Note right of Browser: Origin: https://example.com<br/>Access-Control-Request-Method: PUT<br/>Access-Control-Request-Headers: X-Custom-Header
    
    Server-->>Browser: 200 OK (Preflight Response)
    Note left of Server: Access-Control-Allow-Origin: https://example.com<br/>Access-Control-Allow-Methods: GET, POST, PUT<br/>Access-Control-Allow-Headers: X-Custom-Header<br/>Access-Control-Max-Age: 86400
    
    Browser->>Server: PUT /api/data
    Browser-->>Server: Actual request proceeds`
      }
    ],
    codeExamples: [
      {
        language: "python",
        title: "Flask CORS Configuration",
        code: `from flask import Flask
from flask_cors import CORS

app = Flask(__name__)

# Enable CORS for all domains (development only)
CORS(app)

# Or configure specific origins
CORS(app, resources={
    r"/api/*": {
        "origins": ["https://example.com", "https://app.example.com"],
        "methods": ["GET", "POST", "PUT", "DELETE"],
        "allow_headers": ["Content-Type", "Authorization"],
        "supports_credentials": True
    }
})

# Manual CORS headers
@app.after_request
def after_request(response):
    response.headers.add('Access-Control-Allow-Origin', 'https://example.com')
    response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
    response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    response.headers.add('Access-Control-Allow-Credentials', 'true')
    return response`
      },
      {
        language: "javascript",
        title: "Express.js Security Middleware",
        code: `const express = require('express');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const cors = require('cors');

const app = express();

// Security headers
app.use(helmet());

// CORS
app.use(cors({
    origin: ['https://example.com', 'https://app.example.com'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
}));

// Rate limiting
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
    message: 'Too many requests from this IP'
});
app.use('/api/', limiter);

// Stricter rate limit for auth endpoints
const authLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 5, // 5 login attempts per 15 minutes
    skipSuccessfulRequests: true
});
app.use('/api/login', authLimiter);

// Input validation middleware
const validateInput = (req, res, next) => {
    // Sanitize inputs
    req.body = sanitize(req.body);
    next();
};

app.use('/api/', validateInput);

// Security headers middleware
app.use((req, res, next) => {
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('X-Frame-Options', 'DENY');
    res.setHeader('X-XSS-Protection', '1; mode=block');
    next();
});

app.listen(3000);`
      }
    ]
  },
  {
    id: "be-6",
    title: "Client-Server Architecture Patterns",
    category: "architecture",
    content: "Common architectural patterns for building network applications.",
    subtopics: [
      {
        title: "Monolithic vs Microservices",
        bullets: [
          "Monolithic: Single codebase, simpler deployment",
          "Monolithic: Shared database, tight coupling",
          "Microservices: Independent services, separate deployments",
          "Microservices: Service-specific databases, loose coupling",
          "Microservices: Network communication overhead",
          "Choose based on team size and complexity"
        ]
      },
      {
        title: "Request-Response Pattern",
        bullets: [
          "Synchronous: Client waits for response",
          "Asynchronous: Client continues without waiting",
          "Callback: Client provides callback URL",
          "Polling: Client repeatedly checks for result",
          "Webhook: Server calls client when done"
        ]
      },
      {
        title: "API Gateway Pattern",
        bullets: [
          "Single entry point for all clients",
          "Handles routing, authentication, rate limiting",
          "Protocol translation (REST to gRPC)",
          "Request/response transformation",
          "Caching at the edge"
        ]
      },
      {
        title: "Backend for Frontend (BFF)",
        bullets: [
          "Separate backend for each frontend (web, mobile, desktop)",
          "Optimizes API for specific client needs",
          "Reduces over-fetching and under-fetching",
          "Different auth requirements per client"
        ]
      }
    ],
    diagrams: [
      {
        id: "api-gateway",
        title: "API Gateway Pattern",
        description: "Centralized API management",
        mermaidCode: `graph TB
    subgraph Clients["Clients"]
        Web[Web App]
        Mobile[Mobile App]
        Third[Third-party]
    end
    
    subgraph Gateway["API Gateway"]
        Auth[Authentication]
        Rate[Rate Limiting]
        Route[Routing]
        Cache[Cache]
    end
    
    subgraph Services["Microservices"]
        User[User Service]
        Order[Order Service]
        Product[Product Service]
        Payment[Payment Service]
    end
    
    Web -->|/api/users| Gateway
    Mobile -->|/api/orders| Gateway
    Third -->|/api/products| Gateway
    
    Gateway --> Auth --> Rate --> Route --> Cache
    
    Cache --> User
    Cache --> Order
    Cache --> Product
    Cache --> Payment
    
    style Gateway fill:#e6f3ff`
      },
      {
        id: "bff-pattern",
        title: "Backend for Frontend Pattern",
        description: "Optimized backends for different clients",
        mermaidCode: `graph TB
    subgraph Clients["Clients"]
        Web[Web App
    React/Vue]
        Mobile[Mobile App
    iOS/Android]
    end
    
    subgraph BFF["Backend for Frontend"]
        WebBFF[Web BFF
    Aggregates data
    for web]
        MobileBFF[Mobile BFF
    Optimized payload
    for mobile]
    end
    
    subgraph Services["Core Services"]
        User[User Service]
        Order[Order Service]
        Product[Product Service]
    end
    
    Web --> WebBFF
    Mobile --> MobileBFF
    
    WebBFF --> User
    WebBFF --> Order
    WebBFF --> Product
    
    MobileBFF --> User
    MobileBFF --> Order
    MobileBFF --> Product
    
    style BFF fill:#e6f3ff`
      },
      {
        id: "async-request",
        title: "Asynchronous Request Pattern",
        description: "Handling long-running operations",
        mermaidCode: `sequenceDiagram
    participant Client as Client
    participant API as API Server
    participant Queue as Task Queue
    participant Worker as Worker
    participant DB as Database
    
    Client->>API: POST /reports (async)
    API->>DB: Create job record
    API->>Queue: Enqueue job
    API-->>Client: 202 Accepted
    Note right of Client: {job_id: 123, status: pending}
    
    Queue->>Worker: Process job
    Worker->>DB: Update status: processing
    Worker->>Worker: Generate report
    Worker->>DB: Update status: completed
    Worker->>DB: Store report URL
    
    loop Polling
        Client->>API: GET /jobs/123
        API-->>Client: {status: completed, url: ...}
    end
    
    Client->>API: GET /reports/123/download
    API-->>Client: Report file`
      }
    ],
    codeExamples: [
      {
        language: "python",
        title: "Async Job Processing with Flask",
        code: `from flask import Flask, jsonify, request
from celery import Celery
import uuid

app = Flask(__name__)

# Configure Celery
celery = Celery(app.name, broker='redis://localhost:6379/0')

# Job storage (use database in production)
jobs = {}

@celery.task
def generate_report_task(job_id, params):
    """Background task to generate report"""
    jobs[job_id]['status'] = 'processing'
    
    # Simulate long-running task
    import time
    time.sleep(10)
    
    # Generate report
    report_url = f"/reports/{job_id}.pdf"
    
    jobs[job_id]['status'] = 'completed'
    jobs[job_id]['report_url'] = report_url
    
    return report_url

@app.route('/reports', methods=['POST'])
def create_report():
    """Start async report generation"""
    job_id = str(uuid.uuid4())
    params = request.get_json()
    
    # Create job record
    jobs[job_id] = {
        'id': job_id,
        'status': 'pending',
        'params': params,
        'report_url': None
    }
    
    # Queue background task
    generate_report_task.delay(job_id, params)
    
    return jsonify({
        'job_id': job_id,
        'status': 'pending',
        'check_url': f'/jobs/{job_id}'
    }), 202

@app.route('/jobs/<job_id>')
def get_job_status(job_id):
    """Check job status"""
    job = jobs.get(job_id)
    if not job:
        return jsonify({'error': 'Job not found'}), 404
    
    return jsonify(job)

@app.route('/reports/<job_id>/download')
def download_report(job_id):
    """Download completed report"""
    job = jobs.get(job_id)
    
    if not job:
        return jsonify({'error': 'Job not found'}), 404
    
    if job['status'] != 'completed':
        return jsonify({
            'error': 'Report not ready',
            'status': job['status']
        }), 400
    
    return jsonify({
        'download_url': job['report_url']
    })`
      }
    ]
  }
];

export const getBackendTopicsByCategory = (category: string) => {
  return backendTopics.filter(t => t.category === category);
};

export const getAllBackendTopics = () => backendTopics;

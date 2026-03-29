export interface DetailedChapter {
  id: number;
  title: string;
  subtitle: string;
  overview: string;
  sections: Section[];
  diagrams: Diagram[];
  keyConcepts: KeyConcept[];
  formulas: Formula[];
  practiceProblems: PracticeProblem[];
  images?: ChapterImage[];
  codeExamples?: CodeExample[];
  comparisons?: Comparison[];
  realWorldApplications?: RealWorldApplication[];
  comparisonDiagrams?: ComparisonDiagram[];
}

export interface RealWorldApplication {
  title: string;
  role: 'Backend Engineer' | 'SRE' | 'DevOps' | 'Network Engineer';
  scenario: string;
  application: string;
  bestPractices: string[];
  tools: string[];
}

export interface ComparisonDiagram {
  id: string;
  title: string;
  mermaidCode: string;
}

export interface ChapterImage {
  src: string;
  alt: string;
  caption: string;
}

export interface CodeExample {
  title: string;
  description: string;
  language: string;
  code: string;
}

export interface Comparison {
  title: string;
  itemA: string;
  itemB: string;
  points: ComparisonPoint[];
}

export interface ComparisonPoint {
  aspect: string;
  itemAValue: string;
  itemBValue: string;
}

export interface Section {
  id: string;
  title: string;
  content: string;
  subsections: Subsection[];
}

export interface Subsection {
  title: string;
  content?: string;
  bullets: string[];
  important?: string;
}

export interface Diagram {
  id: string;
  title: string;
  description: string;
  mermaidCode: string;
}

export interface KeyConcept {
  term: string;
  definition: string;
  details?: string;
}

export interface Formula {
  name: string;
  formula: string;
  explanation: string;
  example?: string;
}

export interface PracticeProblem {
  question: string;
  solution: string;
  hint?: string;
}

export const detailedChapters: DetailedChapter[] = [
  {
    id: 1,
    title: "Computer Networks and the Internet",
    subtitle: "Foundations of Networking",
    overview: "This chapter provides a broad overview of computer networking and the Internet. We examine the basic hardware and software components, starting from the network's edge with end systems and applications, then moving to the network core with links and switches. We'll learn about delay, loss, throughput, protocol layering, and network security.",
    sections: [
      {
        id: "1.1",
        title: "What Is the Internet?",
        content: "The Internet is a computer network that interconnects hundreds of millions of computing devices throughout the world. These devices, called end systems or hosts, include desktops, laptops, smartphones, tablets, TVs, gaming consoles, and an increasing array of Internet-connected 'things'.",
        subsections: [
          {
            title: "Nuts-and-Bolts Description",
            bullets: [
              "End systems are connected by a network of communication links and packet switches",
              "Communication links include coaxial cable, copper wire, optical fiber, and radio spectrum",
              "Transmission rate measured in bits/second (bandwidth)",
              "Data is segmented into packets with header bytes added",
              "Packet switches include routers (network core) and link-layer switches (access networks)",
              "The sequence of links and switches is called a route or path",
              "End systems, packet switches, and other devices run protocols (TCP, IP)",
              "Internet standards developed by IETF as RFCs (Requests for Comments)"
            ],
            important: "TCP/IP is the principal protocol suite of the Internet. IP specifies packet format; TCP provides reliable transport."
          },
          {
            title: "Services Description",
            bullets: [
              "Internet as infrastructure providing services to distributed applications",
              "Applications include Web, email, streaming video, P2P file sharing, online games",
              "Applications run on end systems, not in network core",
              "Socket interface specifies how programs ask Internet to deliver data",
              "Internet provides connection-oriented (TCP) and connectionless (UDP) services"
            ],
            important: "The socket interface is a set of rules that sending programs must follow for the Internet to deliver data to destination programs."
          },
          {
            title: "What Is a Protocol?",
            bullets: [
              "A protocol defines the format and order of messages exchanged",
              "Protocols specify actions taken on transmission/receipt of messages",
              "Human analogy: greetings, question-answer protocols",
              "Network protocols: TCP connection request/reply, HTTP GET/response",
              "Different protocols for different communication tasks"
            ],
            important: "A protocol defines the format and order of messages exchanged between two or more communicating entities, as well as the actions taken on the transmission and/or receipt of a message or other event."
          }
        ]
      },
      {
        id: "1.2",
        title: "The Network Edge",
        content: "The network edge consists of end systems where applications run. End systems are also called hosts because they host application programs. Hosts can be clients (desktops, smartphones) or servers (powerful machines in data centers).",
        subsections: [
          {
            title: "Access Networks",
            bullets: [
              "DSL (Digital Subscriber Line): Uses telephone lines, asymmetric (different up/down rates)",
              "DSL frequency bands: 0-4kHz phone, 4-50kHz upstream, 50kHz-1MHz downstream",
              "Cable: Uses HFC (Hybrid Fiber Coax), shared broadcast medium",
              "FTTH (Fiber to the Home): PON or AON architecture, highest speeds",
              "Ethernet: Twisted-pair copper, 100 Mbps to 10 Gbps",
              "WiFi (802.11): Wireless LAN, up to 100+ Mbps",
              "4G/5G: Wide-area wireless, tens of kilometers range"
            ],
            important: "Cable Internet is a shared broadcast medium - all packets travel to all homes on the downstream channel."
          },
          {
            title: "Physical Media",
            bullets: [
              "Twisted Pair: Two insulated copper wires twisted together, Category 6a up to 10 Gbps",
              "Coaxial Cable: Two concentric copper conductors, high data rates, shared medium",
              "Fiber Optics: Thin, flexible medium conducting light pulses, immune to EMI",
              "Fiber supports tens to hundreds of Gbps, very low attenuation",
              "Terrestrial Radio: No physical wire, penetrates walls, mobile access",
              "Satellite: Geostationary (36,000 km, 280ms delay) and LEO satellites"
            ],
            important: "Fiber optics is the preferred long-haul transmission medium due to high bandwidth and immunity to electromagnetic interference."
          }
        ]
      },
      {
        id: "1.3",
        title: "The Network Core",
        content: "The network core is the mesh of interconnected routers that transport data. Two fundamental approaches: packet switching and circuit switching.",
        subsections: [
          {
            title: "Packet Switching",
            bullets: [
              "Messages broken into smaller chunks called packets",
              "Store-and-forward: entire packet received before forwarding begins",
              "End-to-end delay for one packet over N links: d = N * (L/R)",
              "Queuing delays occur when arrival rate exceeds transmission rate",
              "Packet loss occurs when buffers overflow",
              "Forwarding tables determine output link based on destination address",
              "Routing protocols automatically set forwarding tables"
            ],
            important: "Store-and-forward means the router must receive the entire packet before it can begin transmitting the first bit onto the outbound link."
          },
          {
            title: "Circuit Switching",
            bullets: [
              "Resources reserved for duration of communication session",
              "Traditional telephone networks use circuit switching",
              "FDM (Frequency Division Multiplexing): frequency spectrum divided",
              "TDM (Time Division Multiplexing): time divided into frames and slots",
              "Circuit is silent during silent periods (wasteful)",
              "Guaranteed constant transmission rate"
            ],
            important: "Circuit switching is wasteful because dedicated circuits are idle during silent periods."
          },
          {
            title: "Network of Networks",
            bullets: [
              "Tier-1 ISPs: Global coverage, directly interconnected",
              "Regional ISPs: Connect to tier-1 ISPs",
              "IXPs (Internet Exchange Points): Where ISPs peer",
              "Content provider networks: Google, Microsoft bypass upper-tier ISPs",
              "Approximately 60,000 networks make up the Internet"
            ]
          }
        ]
      },
      {
        id: "1.4",
        title: "Delay, Loss, and Throughput",
        content: "Understanding network performance is crucial for network design and troubleshooting.",
        subsections: [
          {
            title: "Types of Delay",
            bullets: [
              "Processing Delay: Examine header, check bit errors, determine output link",
              "Queuing Delay: Wait in buffer for transmission, depends on congestion",
              "Transmission Delay: Push all packet bits onto link = L/R",
              "Propagation Delay: Bit travels from one router to next = d/s",
              "Total Nodal Delay: d_proc + d_queue + d_trans + d_prop"
            ],
            important: "Transmission delay is the time to push all bits onto the link. Propagation delay is the time for bits to travel through the medium."
          },
          {
            title: "Throughput",
            bullets: [
              "Instantaneous throughput: rate at a given moment",
              "Average throughput: rate over longer period",
              "Bottleneck link limits end-to-end throughput",
              "For file transfer: throughput = file size / transfer time"
            ]
          }
        ]
      },
      {
        id: "1.5",
        title: "Protocol Layers and Service Models",
        content: "Layered architecture organizes networking functionality into distinct layers, each providing services to the layer above.",
        subsections: [
          {
            title: "Internet Protocol Stack (5 Layers)",
            bullets: [
              "Application (Layer 5): HTTP, SMTP, FTP, DNS - message",
              "Transport (Layer 4): TCP, UDP - segment",
              "Network (Layer 3): IP, routing protocols - datagram",
              "Link (Layer 2): Ethernet, WiFi, PPP - frame",
              "Physical (Layer 1): Bits on the wire - bit"
            ],
            important: "Each layer adds its own header information through encapsulation: Message -> Segment -> Datagram -> Frame -> Bits"
          },
          {
            title: "OSI 7-Layer Model",
            bullets: [
              "Application, Presentation, Session, Transport, Network, Data Link, Physical",
              "Presentation: Data compression, encryption, ASCII to EBCDIC",
              "Session: Session management, synchronization points"
            ]
          }
        ]
      }
    ],
    diagrams: [
      {
        id: "fig1-1",
        title: "The Internet - A Network of Networks",
        description: "Shows how end systems connect through ISPs to form the Internet",
        mermaidCode: `graph TB
    subgraph Home_Network
        PC[PC/Laptop]
        Phone[Smartphone]
        Router[Home Router]
    end
    
    subgraph Enterprise_Network
        Work[Workstation]
        Server[Server]
        Eth[Ethernet Switch]
    end
    
    subgraph ISP_Networks
        Local[Local/Regional ISP]
        National[National/Global ISP]
        IXP[Internet Exchange Point]
    end
    
    subgraph Content_Provider
        DC1[Data Center 1]
        DC2[Data Center 2]
        Web[Web Server]
    end
    
    PC --> Router
    Phone --> Router
    Router --> Local
    Work --> Eth
    Server --> Eth
    Eth --> Local
    Local --> National
    National --> IXP
    IXP --> DC1
    IXP --> DC2
    DC1 --> Web
    DC2 --> Web`
      },
      {
        id: "fig1-2",
        title: "Protocol in Action: HTTP Request",
        description: "Illustrates the HTTP request-response protocol",
        mermaidCode: `sequenceDiagram
    participant Client as Web Browser
    participant Server as Web Server
    
    Note over Client,Server: Non-Persistent HTTP/1.0
    
    Client->>Server: TCP SYN
    Server->>Client: TCP SYN-ACK
    Client->>Server: TCP ACK
    Note right of Client: RTT for TCP setup
    
    Client->>Server: GET /page.html HTTP/1.0
    Note right of Client: RTT for request
    Server->>Client: HTTP/1.0 200 OK Content-Length: 1024
    
    Note over Client,Server: Connection closed
    Note over Client,Server: Total: 2 RTT + file transmission time`
      },
      {
        id: "fig1-3",
        title: "Packet Switching - Store and Forward",
        description: "Shows how packets are stored and forwarded through routers",
        mermaidCode: `graph LR
    S[Source] -->|Packet 1| R1[Router]
    R1 -->|Packet 1| R2[Router]
    R2 -->|Packet 1| D[Destination]
    
    S -->|Packet 2| R1
    R1 -->|Packet 2| R2
    R2 -->|Packet 2| D
    
    Note["Router must receive entire packet before forwarding"]`
      },
      {
        id: "fig1-4",
        title: "Protocol Layering and Encapsulation",
        description: "Shows how data is encapsulated as it moves down the protocol stack",
        mermaidCode: `graph TB
    subgraph Source
        A1[Application Data]
        T1[Transport: Add TCP Header - Segment]
        N1[Network: Add IP Header - Datagram]
        L1[Link: Add Ethernet Header/Trailer - Frame]
        P1[Physical: Bits on wire]
    end
    
    subgraph Destination
        P2[Physical: Bits received]
        L2[Link: Remove Ethernet Header/Trailer]
        N2[Network: Remove IP Header]
        T2[Transport: Remove TCP Header]
        A2[Application: Data delivered]
    end
    
    A1 --> T1 --> N1 --> L1 --> P1
    P1 -.-> P2
    P2 --> L2 --> N2 --> T2 --> A2`
      },
      {
        id: "fig1-5",
        title: "Data Format at Each Layer - Encapsulation",
        description: "Shows how data is wrapped with headers at each layer",
        mermaidCode: `graph TB
    subgraph Application_Layer["📱 Application Layer (Message)"]
        AL["HTTP Request / SMTP Message / DNS Query"]
    end
    
    subgraph Transport_Layer["🚚 Transport Layer (Segment)"]
        TL["TCP/UDP Header + Application Data"]
    end
    
    subgraph Network_Layer["🌐 Network Layer (Datagram)"]
        NL["IP Header + TCP/UDP Header + Application Data"]
    end
    
    subgraph Link_Layer["🔗 Link Layer (Frame)"]
        LL["Ethernet Header + IP Header + TCP/UDP Header + Application Data + Ethernet Trailer"]
    end
    
    subgraph Physical_Layer["⚡ Physical Layer (Bits)"]
        PL["0 1 0 1 0 1 1 0 1 0 0 1 ..."]
    end
    
    AL -->|Add TCP/UDP Header| TL
    TL -->|Add IP Header| NL
    NL -->|Add Ethernet Header/Trailer| LL
    LL -->|Convert to bits| PL
    
    style AL fill:#e3f2fd
    style TL fill:#e8f5e9
    style NL fill:#fff3e0
    style LL fill:#fce4ec
    style PL fill:#f3e5f5`
      },
      {
        id: "fig1-6",
        title: "Data Format at Each Layer - Decapsulation",
        description: "Shows how headers are removed as data moves up the stack",
        mermaidCode: `graph TB
    subgraph Physical_Receive["⚡ Physical Layer (Receive)"]
        PR[0 1 0 1 0 1 1 0 1 0 0 1 ...]
    end
    
    subgraph Link_Receive["🔗 Link Layer (Frame)"]
        LR["Remove Ethernet Header/Trailer"]
        LR_Data["IP Header + TCP/UDP Header + Application Data"]
    end
    
    subgraph Network_Receive["🌐 Network Layer (Datagram)"]
        NR["Remove IP Header"]
        NR_Data["TCP/UDP Header + Application Data"]
    end
    
    subgraph Transport_Receive["🚚 Transport Layer (Segment)"]
        TR["Remove TCP/UDP Header"]
        TR_Data[Application Data]
    end
    
    subgraph Application_Receive["📱 Application Layer (Message)"]
        AR[HTTP Response / SMTP Message / DNS Answer]
    end
    
    PR -->|Parse frame| LR
    LR --> LR_Data
    LR_Data -->|Check IP, route| NR
    NR --> NR_Data
    NR_Data -->|Check port, deliver| TR
    TR --> TR_Data
    TR_Data -->|Deliver to socket| AR
    
    style PR fill:#f3e5f5
    style LR fill:#fce4ec
    style NR fill:#fff3e0
    style TR fill:#e8f5e9
    style AR fill:#e3f2fd`
      },
      {
        id: "fig1-7",
        title: "Complete Data Flow - Send and Receive",
        description: "End-to-end data encapsulation and decapsulation process",
        mermaidCode: `graph LR
    subgraph Sender["📤 Sender Host"]
        SA[App Data]
        ST[Segment<br/>+TCP Header]
        SN[Datagram<br/>+IP Header]
        SL[Frame<br/>+Eth Header/Trailer]
        SP[Bits]
    end
    
    subgraph Router["🔄 Router"]
        RL[Frame In]
        RN[Datagram<br/>Check/Update IP]
        RL2[Frame Out<br/>New Link Header]
    end
    
    subgraph Receiver["📥 Receiver Host"]
        RP[Bits]
        RL3[Frame<br/>-Eth Header/Trailer]
        RN3[Datagram<br/>-IP Header]
        RT[Segment<br/>-TCP Header]
        RA[App Data]
    end
    
    SA -->|Encapsulate| ST
    ST -->|Encapsulate| SN
    SN -->|Encapsulate| SL
    SL -->|Transmit| SP
    
    SP -.->|Physical Link| RL
    RL -->|Decapsulate| RN
    RN -->|Re-encapsulate| RL2
    
    RL2 -.->|Physical Link| RP
    RP -->|Parse| RL3
    RL3 -->|Decapsulate| RN3
    RN3 -->|Decapsulate| RT
    RT -->|Decapsulate| RA
    
    style SA fill:#e3f2fd
    style ST fill:#e8f5e9
    style SN fill:#fff3e0
    style SL fill:#fce4ec
    style RA fill:#e3f2fd`
      }
    ],
    keyConcepts: [
      { term: "End System/Host", definition: "Devices connected to the Internet that run applications (PCs, smartphones, servers, IoT devices)" },
      { term: "Protocol", definition: "Rules governing the format and order of messages exchanged between entities, and actions taken on transmission/receipt" },
      { term: "Packet Switching", definition: "Breaking messages into packets that travel independently through the network using store-and-forward" },
      { term: "Circuit Switching", definition: "Dedicated end-to-end resources reserved for the duration of communication (FDM or TDM)" },
      { term: "ISP", definition: "Internet Service Provider - provides Internet access and interconnects with other networks" },
      { term: "Store-and-Forward", definition: "Packet switch must receive entire packet before forwarding first bit" },
      { term: "Forwarding Table", definition: "Maps destination addresses to outbound links in routers" },
      { term: "Encapsulation", definition: "Adding headers as data moves down the protocol stack" },
      { term: "Bandwidth", definition: "Maximum transmission rate of a link (bits/second)" },
      { term: "Throughput", definition: "Actual rate of successful data transfer, limited by bottleneck link" }
    ],
    formulas: [
      {
        name: "Transmission Delay",
        formula: "d_trans = L / R",
        explanation: "L = packet length (bits), R = transmission rate (bps)",
        example: "For L=1000 bits, R=1 Mbps: d_trans = 1000/10^6 = 1 ms"
      },
      {
        name: "Propagation Delay",
        formula: "d_prop = d / s",
        explanation: "d = distance (m), s = propagation speed (~2*10^8 m/s for fiber)",
        example: "For d=1000 km, s=2*10^8 m/s: d_prop = 10^6/2*10^8 = 5 ms"
      },
      {
        name: "End-to-End Delay (One Packet)",
        formula: "d_end-to-end = N * (L/R)",
        explanation: "N = number of links, L/R = transmission delay per link",
        example: "For N=3 links, L/R=1ms: delay = 3 ms (store-and-forward)"
      },
      {
        name: "Total Nodal Delay",
        formula: "d_total = d_proc + d_queue + d_trans + d_prop",
        explanation: "Sum of processing, queuing, transmission, and propagation delays"
      }
    ],
    practiceProblems: [
      {
        question: "Suppose a 10 Mbps link is used by packet switching. How long does it take to send a 1000-byte packet from source to destination if there are 3 routers and we ignore propagation, processing, and queuing delays?",
        solution: "Packet size = 1000 bytes = 8000 bits. Transmission delay per hop = 8000/10^7 = 0.8 ms. With store-and-forward through 3 routers (4 links total), total delay = 4 * 0.8 ms = 3.2 ms.",
        hint: "Remember store-and-forward: each router must receive the entire packet before forwarding."
      },
      {
        question: "Compare packet switching and circuit switching. Why is packet switching more efficient for bursty traffic?",
        solution: "Packet switching is more efficient for bursty traffic because resources are shared on demand. During silent periods, bandwidth is available to other users. Circuit switching reserves dedicated resources that remain idle during silence.",
        hint: "Think about what happens during periods of no transmission."
      },
      {
        question: "Explain the difference between transmission delay and propagation delay.",
        solution: "Transmission delay is the time to push all bits onto the link (L/R). Propagation delay is the time for bits to travel through the medium (d/s). Transmission depends on packet size and bandwidth; propagation depends on distance and medium.",
        hint: "One is about 'pushing bits out'; the other is about 'bits traveling'."
      }
    ],
    images: [
      {
        src: "/images/chapter1-protocol-stack.jpg",
        alt: "Internet Protocol Stack",
        caption: "The 5-layer Internet protocol stack showing encapsulation flow between layers"
      }
    ],
    codeExamples: [
      {
        title: "Calculate Network Delay in Go",
        description: "Go program to calculate transmission and propagation delays",
        language: "go",
        code: `package main

import (
	"fmt"
	"time"
)

// Calculate transmission delay: d_trans = L / R
func transmissionDelay(packetLengthBits float64, transmissionRateBps float64) time.Duration {
	seconds := packetLengthBits / transmissionRateBps
	return time.Duration(seconds * float64(time.Second))
}

// Calculate propagation delay: d_prop = d / s
func propagationDelay(distanceMeters float64, propagationSpeed float64) time.Duration {
	seconds := distanceMeters / propagationSpeed
	return time.Duration(seconds * float64(time.Second))
}

func main() {
	// Example: 1000 byte packet on 1 Mbps link
	packetLength := 1000.0 * 8 // bits
	transmissionRate := 1e6     // 1 Mbps
	
	dTrans := transmissionDelay(packetLength, transmissionRate)
	fmt.Printf("Transmission delay: %v\\n", dTrans)
	
	// Example: 1000 km over fiber (speed of light ~2e8 m/s)
	distance := 1000.0 * 1000 // meters
	speed := 2e8              // m/s in fiber
	
	dProp := propagationDelay(distance, speed)
	fmt.Printf("Propagation delay: %v\\n", dProp)
	
	// Total delay for 3 hops
	totalDelay := 3 * (dTrans + dProp)
	fmt.Printf("Total delay (3 hops): %v\\n", totalDelay)
}`
      },
      {
        title: "Simple TCP Client in Go",
        description: "Basic TCP client connection example",
        language: "go",
        code: `package main

import (
	"bufio"
	"fmt"
	"net"
	"os"
)

func main() {
	// Connect to server
	conn, err := net.Dial("tcp", "localhost:8080")
	if err != nil {
		fmt.Println("Error connecting:", err)
		os.Exit(1)
	}
	defer conn.Close()
	
	fmt.Println("Connected to server")
	
	// Send message
	fmt.Fprintf(conn, "Hello Server\\n")
	
	// Read response
	message, _ := bufio.NewReader(conn).ReadString('\\n')
	fmt.Print("Server response:", message)
}`
      }
    ],
    comparisons: [
      {
        title: "Packet Switching vs Circuit Switching",
        itemA: "Packet Switching",
        itemB: "Circuit Switching",
        points: [
          { aspect: "Resource Allocation", itemAValue: "On-demand, shared", itemBValue: "Dedicated, reserved" },
          { aspect: "Efficiency for Bursty Traffic", itemAValue: "High - resources shared", itemBValue: "Low - idle during silence" },
          { aspect: "Setup Time", itemAValue: "None - send immediately", itemBValue: "Required - call setup" },
          { aspect: "Guaranteed Bandwidth", itemAValue: "No", itemBValue: "Yes" },
          { aspect: "Congestion Handling", itemAValue: "Packets may queue/drop", itemBValue: "Call blocked if no capacity" },
          { aspect: "Examples", itemAValue: "Internet, Ethernet", itemBValue: "Traditional telephone" }
        ]
      }
    ],
    realWorldApplications: [
      {
        title: "Latency Budgeting for Microservices",
        role: "Backend Engineer",
        scenario: "Designing a distributed e-commerce system with 50+ microservices",
        application: "Understanding propagation vs transmission delay helps set realistic SLOs. A request traversing 5 services across 3 availability zones must account for ~2-5ms propagation per hop plus serialization delays.",
        bestPractices: [
          "Keep services within same region for <10ms RTT",
          "Use connection pooling to eliminate TCP handshake overhead",
          "Batch requests to amortize transmission delay",
          "Place cache layers close to consumers"
        ],
        tools: ["Jaeger", "Datadog APM", "AWS X-Ray", "Prometheus"]
      },
      {
        title: "Network Topology Design",
        role: "SRE",
        scenario: "Planning multi-region deployment for global SaaS application",
        application: "The 'Network of Networks' concept applies directly to cloud VPC peering, transit gateways, and CDN edge locations. Understanding ISP hierarchies helps optimize cross-region routing.",
        bestPractices: [
          "Deploy in regions closest to users (edge computing)",
          "Use dedicated interconnects (Direct Connect, ExpressRoute) to bypass public internet",
          "Implement anycast DNS for nearest-edge routing",
          "Monitor with synthetic probes from multiple vantage points"
        ],
        tools: ["Terraform", "Cloudflare", "AWS Global Accelerator", "Pingdom"]
      },
      {
        title: "Protocol Stack Debugging",
        role: "DevOps",
        scenario: "Investigating intermittent connection failures in Kubernetes cluster",
        application: "Understanding the 5-layer stack helps isolate issues: Physical (NIC/driver), Link (CNI plugin), Network (iptables/routing), Transport (TCP tuning), Application (HTTP/health checks).",
        bestPractices: [
          "Use tcpdump at each layer to isolate the problem",
          "Check MTU settings for fragmentation issues",
          "Verify DNS resolution (application layer) before TCP debugging",
          "Monitor conntrack table exhaustion (network layer)"
        ],
        tools: ["tcpdump", "Wireshark", "netstat", "ss", "iptables", "conntrack"]
      }
    ],
    comparisonDiagrams: [
      {
        id: "comp1-1",
        title: "Packet Switching vs Circuit Switching - Visual",
        mermaidCode: `graph TB
    subgraph Packet_Switching["📦 Packet Switching (Internet)"]
        PS1[User A] -->|Packet 1| R1[Router]
        PS2[User B] -->|Packet 2| R1
        R1 -->|Packet 1| R2[Router]
        R1 -->|Packet 2| R2
        R2 -->|Packet 1| D1[Destination]
        R2 -->|Packet 2| D2[Destination]
        
        style PS1 fill:#e1f5ff
        style PS2 fill:#e1f5ff
        style R1 fill:#fff4e1
        style R2 fill:#fff4e1
    end
    
    subgraph Circuit_Switching["🔌 Circuit Switching (Traditional Phone)"]
        CS1[User A] -.->|Dedicated Path| CS2[User B]
        CS1 -.->|Reserved Bandwidth| CS2
        
        style CS1 fill:#ffe1e1
        style CS2 fill:#ffe1e1
    end
    
    Note["Packet: Shared, efficient for bursts<br/>Circuit: Dedicated, guaranteed bandwidth"]`
      }
    ]
  },
  {
    id: 2,
    title: "Application Layer",
    subtitle: "Network Applications and Protocols",
    overview: "This chapter examines network applications and the protocols they use. We study the Web and HTTP, electronic mail, DNS, P2P file distribution, video streaming with CDNs, and learn how to build network applications through socket programming.",
    sections: [
      {
        id: "2.1",
        title: "Principles of Network Applications",
        content: "Network applications run on end systems, not in the network core. They communicate by exchanging messages and use the Internet's transport services.",
        subsections: [
          {
            title: "Application Architectures",
            bullets: [
              "Client-Server: Always-on server handles requests from many clients",
              "P2P: End systems communicate directly, no always-on server needed",
              "Hybrid: Combination approach (e.g., instant messaging with central server for presence)",
              "P2P is self-scaling but faces challenges with ISP-friendliness and security"
            ]
          },
          {
            title: "Processes Communicating",
            bullets: [
              "Process: Program running within an end system",
              "Processes communicate by sending messages through sockets",
              "Socket: Software interface between application and transport layer",
              "Addressing: IP address + port number identifies a process",
              "Well-known ports: HTTP=80, HTTPS=443, SMTP=25, DNS=53"
            ]
          },
          {
            title: "Transport Services Available",
            bullets: [
              "Reliable Data Transfer: TCP provides, UDP does not",
              "Throughput: Minimum guaranteed rate (neither TCP nor UDP guarantees)",
              "Timing: Delay guarantees for interactive apps (not guaranteed by Internet)",
              "Security: Encryption, data integrity, authentication (TLS provides)"
            ]
          }
        ]
      },
      {
        id: "2.2",
        title: "The Web and HTTP",
        content: "HTTP (HyperText Transfer Protocol) is the Web's application-layer protocol. It uses TCP and is stateless.",
        subsections: [
          {
            title: "HTTP Overview",
            bullets: [
              "Uses TCP on port 80 (HTTP) or 443 (HTTPS)",
              "HTTP is stateless - server doesn't retain client information",
              "Non-persistent HTTP (HTTP/1.0): New TCP connection per object",
              "Persistent HTTP (HTTP/1.1): Multiple objects over single connection",
              "Persistent with pipelining: Send multiple requests without waiting"
            ],
            important: "Non-persistent HTTP requires 2 RTTs per object plus TCP setup. Persistent HTTP amortizes setup cost over multiple objects."
          },
          {
            title: "HTTP Message Format",
            bullets: [
              "Request line: METHOD URL HTTP-VERSION",
              "Methods: GET, POST, PUT, DELETE, HEAD, OPTIONS",
              "GET: Request resource, POST: Submit form data",
              "Status codes: 1xx (informational), 2xx (success), 3xx (redirect)",
              "Status codes: 4xx (client error), 5xx (server error)",
              "Common: 200 OK, 301 Moved Permanently, 400 Bad Request, 404 Not Found, 500 Server Error"
            ]
          },
          {
            title: "Cookies",
            bullets: [
              "Used to maintain user state across HTTP requests",
              "Cookie header in HTTP response (Set-Cookie)",
              "Cookie header in subsequent HTTP requests (Cookie)",
              "Cookie file on client host, managed by browser",
              "Backend database at server stores cookie information"
            ]
          },
          {
            title: "Web Caching",
            bullets: [
              "Proxy server satisfies requests without involving origin server",
              "Reduces response time and network traffic",
              "Conditional GET: If-Modified-Since header for validation",
              "304 Not Modified: Cache can use cached copy",
              "Cache is both client (to server) and server (to client)"
            ]
          },
          {
            title: "HTTP/2",
            bullets: [
              "Multiplexing: Multiple requests/responses on single TCP connection",
              "Header compression using HPACK algorithm",
              "Server push: Server can proactively send resources",
              "Binary framing instead of text",
              "Prioritization of requests"
            ]
          }
        ]
      },
      {
        id: "2.3",
        title: "Electronic Mail",
        content: "Email uses three major components: user agents, mail servers, and protocols (SMTP, POP3, IMAP, HTTP).",
        subsections: [
          {
            title: "SMTP",
            bullets: [
              "Simple Mail Transfer Protocol - uses TCP port 25",
              "Direct transfer from sending to receiving server",
              "Three phases: Handshake, Message transfer, Closure",
              "SMTP uses persistent connections",
              "7-bit ASCII, requires binary data to be encoded (MIME)",
              "Push protocol: SMTP pushes to receiving server"
            ]
          },
          {
            title: "Mail Message Format",
            bullets: [
              "RFC 5322 defines text message format",
              "Header lines: To, From, Subject, Date, etc.",
              "Body: ASCII text",
              "MIME: Multipurpose Internet Mail Extensions for multimedia",
              "MIME headers: Content-Type, Content-Transfer-Encoding"
            ]
          },
          {
            title: "Mail Access Protocols",
            bullets: [
              "POP3 (Post Office Protocol): Download and delete, port 110",
              "POP3: Simple, no folder synchronization",
              "IMAP (Internet Message Access Protocol): Keep on server, port 143",
              "IMAP: Folder management, search on server",
              "HTTP: Webmail (Gmail, Yahoo Mail)"
            ]
          }
        ]
      },
      {
        id: "2.4",
        title: "DNS - The Internet's Directory Service",
        content: "DNS (Domain Name System) translates human-readable hostnames to IP addresses. It is a distributed, hierarchical database.",
        subsections: [
          {
            title: "DNS Services",
            bullets: [
              "Hostname to IP address translation",
              "Host aliasing: Canonical and alias names (CNAME)",
              "Mail server aliasing: MX records",
              "Load distribution: Multiple IP addresses for one hostname",
              "DNS is critical infrastructure - often uses UDP port 53"
            ]
          },
          {
            title: "DNS Hierarchy",
            bullets: [
              "Root DNS Servers: 13 logical root servers worldwide",
              "TLD (Top-Level Domain) Servers: .com, .org, .edu, country codes",
              "Authoritative DNS Servers: Organization's own DNS servers",
              "Local DNS Server: ISP-provided, acts as proxy"
            ]
          },
          {
            title: "DNS Query Types",
            bullets: [
              "Recursive Query: DNS server obtains mapping on behalf of client",
              "Iterative Query: Contacted server replies with name server to contact",
              "Typically: Host to local DNS is recursive, rest are iterative"
            ]
          },
          {
            title: "DNS Records",
            bullets: [
              "A Record: Hostname to IP address (IPv4)",
              "AAAA Record: Hostname to IP address (IPv6)",
              "NS Record: Domain to authoritative name server",
              "CNAME Record: Alias to canonical name",
              "MX Record: Mail server for domain",
              "DNS response includes all relevant records"
            ]
          }
        ]
      },
      {
        id: "2.5",
        title: "Peer-to-Peer File Distribution",
        content: "P2P architecture is self-scaling - each peer adds capacity. BitTorrent is a popular P2P protocol.",
        subsections: [
          {
            title: "BitTorrent",
            bullets: [
              "File divided into chunks (typically 256KB)",
              "Peers download chunks while uploading chunks they have",
              "Tracker tracks which peers have which chunks",
              "Torrent: Group of peers exchanging chunks of a file",
              "Seed: Peer with entire file",
              "Leecher: Peer downloading but doesn't have complete file"
            ]
          },
          {
            title: "BitTorrent Algorithms",
            bullets: [
              "Requesting chunks: Rarest first - request rarest chunks first",
              "Tit-for-tat: Upload to peers who upload to you",
              "Optimistic unchoking: Randomly try new peers",
              "Top 4 peers (by upload rate) are unchoked"
            ]
          }
        ]
      },
      {
        id: "2.6",
        title: "Video Streaming and CDNs",
        content: "Video is the dominant type of Internet traffic. Streaming requires different approaches than file download.",
        subsections: [
          {
            title: "DASH",
            bullets: [
              "Dynamic Adaptive Streaming over HTTP",
              "Video encoded at multiple bit rates",
              "Client dynamically requests chunks based on available bandwidth",
              "Manifest file describes available chunks and bit rates",
              "Client can switch quality mid-stream"
            ]
          },
          {
            title: "Content Distribution Networks",
            bullets: [
              "CDN servers store copies of content at distributed locations",
              "Redirect users to nearby CDN server",
              "Netflix, YouTube operate their own CDNs",
              "Third-party CDNs: Akamai, Cloudflare, Amazon CloudFront"
            ]
          }
        ]
      },
      {
        id: "2.7",
        title: "Socket Programming",
        content: "Socket programming allows creating custom network applications using UDP or TCP.",
        subsections: [
          {
            title: "UDP Sockets",
            bullets: [
              "Connectionless - no handshaking",
              "No reliability guarantees",
              "Good for streaming, DNS, online games",
              "Client: socket(), sendto(), recvfrom(), close()",
              "Server: socket(), bind(), recvfrom(), sendto()"
            ]
          },
          {
            title: "TCP Sockets",
            bullets: [
              "Connection-oriented - three-way handshake",
              "Reliable, in-order byte stream",
              "Client: socket(), connect(), write(), read(), close()",
              "Server: socket(), bind(), listen(), accept(), read(), write()",
              "accept() blocks until client connects"
            ]
          }
        ]
      }
    ],
    diagrams: [
      {
        id: "fig2-1",
        title: "HTTP Request-Response",
        description: "Shows the HTTP request and response message flow",
        mermaidCode: `sequenceDiagram
    participant Client as Web Browser
    participant Server as Web Server
    
    Note over Client,Server: Non-Persistent HTTP/1.0
    
    Client->>Server: TCP SYN
    Server->>Client: TCP SYN-ACK
    Client->>Server: TCP ACK
    Note right of Client: RTT for TCP setup
    
    Client->>Server: GET /page.html HTTP/1.0
    Note right of Client: RTT for request
    Server->>Client: HTTP/1.0 200 OK Content-Length: 1024
    
    Note over Client,Server: Connection closed
    Note over Client,Server: Total: 2 RTT + file transmission time`
      },
      {
        id: "fig2-2",
        title: "DNS Query Resolution",
        description: "Shows iterative DNS query process",
        mermaidCode: `sequenceDiagram
    participant Host as Host
    participant Local as Local DNS
    participant Root as Root DNS
    participant TLD as TLD DNS .com
    participant Auth as Authoritative DNS
    
    Host->>Local: Query: www.example.com
    
    Local->>Root: Query: www.example.com
    Root->>Local: Referral: .com TLD server
    
    Local->>TLD: Query: www.example.com
    TLD->>Local: Referral: example.com auth server
    
    Local->>Auth: Query: www.example.com
    Auth->>Local: Answer: 93.184.216.34
    
    Local->>Host: Answer: 93.184.216.34
    
    Note right of Local: Local DNS caches result`
      },
      {
        id: "fig2-3",
        title: "Email Architecture",
        description: "Shows email components and protocols",
        mermaidCode: `graph LR
    subgraph Sender_Side
        UA1[User Agent]
        MS1[Mail Server Outgoing Queue]
    end
    
    subgraph Internet
        SMTP1[SMTP]
    end
    
    subgraph Receiver_Side
        MS2[Mail Server Mailbox]
        UA2[User Agent]
    end
    
    UA1 -->|Compose| UA1
    UA1 -->|SMTP| MS1
    MS1 -->|SMTP Port 25| SMTP1
    SMTP1 -->|SMTP| MS2
    MS2 -->|POP3/IMAP/HTTP| UA2
    
    style SMTP1 fill:#ffe6e6
    style MS1 fill:#e6f3ff
    style MS2 fill:#e6f3ff`
      },
      {
        id: "fig2-4",
        title: "P2P vs Client-Server",
        description: "Compares file distribution architectures",
        mermaidCode: `graph TB
    subgraph Client-Server
        S1[Server File Size: F]
        C1A[Client A]
        C1B[Client B]
        C1C[Client C]
        C1D[Client D]
        
        S1 -->|F| C1A
        S1 -->|F| C1B
        S1 -->|F| C1C
        S1 -->|F| C1D
    end
    
    subgraph P2P
        S2[Server File Size: F]
        C2A[Client A]
        C2B[Client B]
        C2C[Client C]
        C2D[Client D]
        
        S2 -->|F/4| C2A
        S2 -->|F/4| C2B
        S2 -->|F/4| C2C
        S2 -->|F/4| C2D
        C2A <-->|F/4| C2B
        C2C <-->|F/4| C2D
    end
    
    Note["P2P is self-scaling - each peer adds upload capacity"]`
      }
    ],
    keyConcepts: [
      { term: "HTTP", definition: "HyperText Transfer Protocol - Web's application protocol, uses TCP port 80/443" },
      { term: "URL", definition: "Uniform Resource Locator - address of web resource (protocol://host:port/path)" },
      { term: "Cookie", definition: "Small text file stored by browser to maintain state across HTTP requests" },
      { term: "Web Cache/Proxy", definition: "Server that stores copies of web objects to reduce latency and bandwidth" },
      { term: "Conditional GET", definition: "HTTP request with If-Modified-Since header for cache validation" },
      { term: "DNS", definition: "Domain Name System - distributed hierarchical database for hostname-to-IP translation" },
      { term: "SMTP", definition: "Simple Mail Transfer Protocol - for sending email, uses TCP port 25" },
      { term: "POP3", definition: "Post Office Protocol v3 - download and delete email, port 110" },
      { term: "IMAP", definition: "Internet Message Access Protocol - access email on server, port 143" },
      { term: "P2P", definition: "Peer-to-Peer architecture where end systems communicate directly without always-on server" },
      { term: "BitTorrent", definition: "Popular P2P file distribution protocol using tit-for-tat" },
      { term: "DASH", definition: "Dynamic Adaptive Streaming over HTTP - adjusts quality based on bandwidth" },
      { term: "CDN", definition: "Content Distribution Network - geographically distributed servers for content delivery" },
      { term: "Socket", definition: "Interface between application and transport layer" }
    ],
    formulas: [
      {
        name: "Client-Server Distribution Time",
        formula: "D_cs = max{NF/u_s, F/d_min}",
        explanation: "N=peers, F=file size, u_s=server upload, d_min=min download rate",
        example: "Limited by server upload or slowest peer download"
      },
      {
        name: "P2P Distribution Time",
        formula: "D_p2p = max{F/u_s, F/d_min, NF/(u_s + sum(u_i))}",
        explanation: "Third term: total upload capacity of all peers",
        example: "Self-scaling: more peers add upload capacity"
      }
    ],
    practiceProblems: [
      {
        question: "Compare non-persistent and persistent HTTP. How many RTTs are needed to fetch a web page with 1 HTML file and 5 embedded images using each?",
        solution: "Non-persistent HTTP/1.0: 2 RTT per object (TCP setup + request/response). Total = 6 * 2 = 12 RTTs. Persistent HTTP/1.1: 2 RTT for TCP setup + first object, then 1 RTT per subsequent object. Total = 2 + 5 = 7 RTTs.",
        hint: "Remember non-persistent closes connection after each object."
      },
      {
        question: "Explain why DNS uses UDP instead of TCP.",
        solution: "DNS uses UDP because: (1) Queries fit in single packet, (2) Lower latency (no TCP handshake), (3) DNS queries are idempotent, (4) Reduces load on DNS servers. TCP is used for zone transfers and large responses.",
        hint: "Think about the overhead of TCP connection establishment."
      },
      {
        question: "How does BitTorrent's tit-for-tat strategy encourage cooperation?",
        solution: "Tit-for-tat encourages peers to upload to others by rewarding good uploaders with faster downloads. Peers prioritize uploading to the top 4 peers who have provided the best download rates, creating incentive to share.",
        hint: "Consider game theory - what happens if everyone tries to download without uploading?"
      }
    ],
    images: [
      {
        src: "/images/chapter2-http-comparison.jpg",
        alt: "HTTP/1.1 vs HTTP/2 Comparison",
        caption: "Comparison of HTTP/1.1 sequential requests vs HTTP/2 multiplexing"
      }
    ],
    codeExamples: [
      {
        title: "HTTP Server in Go",
        description: "Simple HTTP server with multiple endpoints",
        language: "go",
        code: `package main

import (
	"encoding/json"
	"fmt"
	"net/http"
	"time"
)

type Response struct {
	Message string    \`json:"message"\`
	Time    time.Time \`json:"time"\`
}

func main() {
	// Handler for root path
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		response := Response{
			Message: "Hello from Go HTTP Server",
			Time:    time.Now(),
		}
		w.Header().Set("Content-Type", "application/json")
		json.NewEncoder(w).Encode(response)
	})
	
	// Handler with query parameters
	http.HandleFunc("/search", func(w http.ResponseWriter, r *http.Request) {
		query := r.URL.Query().Get("q")
		fmt.Fprintf(w, "Search query: %s\\n", query)
	})
	
	// Start server
	fmt.Println("Server starting on :8080")
	http.ListenAndServe(":8080", nil)
}`
      },
      {
        title: "HTTP Client in Go",
        description: "Making HTTP requests with timeout and error handling",
        language: "go",
        code: `package main

import (
	"fmt"
	"io"
	"net/http"
	"time"
)

func main() {
	// Create client with timeout
	client := &http.Client{
		Timeout: 10 * time.Second,
	}
	
	// Make GET request
	resp, err := client.Get("https://api.github.com/users/golang")
	if err != nil {
		fmt.Println("Error:", err)
		return
	}
	defer resp.Body.Close()
	
	// Check status code
	if resp.StatusCode != http.StatusOK {
		fmt.Printf("Error: status %s\\n", resp.Status)
		return
	}
	
	// Read response body
	body, _ := io.ReadAll(resp.Body)
	fmt.Printf("Response (%d bytes):\\n%s\\n", len(body), body[:200])
	
	// Print headers
	fmt.Println("\\nResponse Headers:")
	for key, values := range resp.Header {
		fmt.Printf("%s: %v\\n", key, values)
	}
}`
      },
      {
        title: "TCP Socket Server in Go",
        description: "Concurrent TCP server handling multiple clients",
        language: "go",
        code: `package main

import (
	"bufio"
	"fmt"
	"net"
	"strings"
)

func handleConnection(conn net.Conn) {
	defer conn.Close()
	fmt.Printf("Client connected: %s\\n", conn.RemoteAddr())
	
	reader := bufio.NewReader(conn)
	for {
		// Read message
		message, err := reader.ReadString('\\n')
		if err != nil {
			fmt.Printf("Client disconnected: %s\\n", conn.RemoteAddr())
			return
		}
		
		message = strings.TrimSpace(message)
		fmt.Printf("Received from %s: %s\\n", conn.RemoteAddr(), message)
		
		// Echo back
		response := fmt.Sprintf("Echo: %s\\n", message)
		conn.Write([]byte(response))
	}
}

func main() {
	listener, err := net.Listen("tcp", ":8080")
	if err != nil {
		fmt.Println("Error:", err)
		return
	}
	defer listener.Close()
	
	fmt.Println("TCP Server listening on :8080")
	
	for {
		conn, err := listener.Accept()
		if err != nil {
			fmt.Println("Accept error:", err)
			continue
		}
		
		// Handle each connection in a goroutine
		go handleConnection(conn)
	}
}`
      },
      {
        title: "DNS Resolution in Go",
        description: "DNS lookup and custom resolver implementation",
        language: "go",
        code: `package main

import (
	"context"
	"fmt"
	"net"
	"time"
)

func main() {
	// Basic DNS lookup
	ips, err := net.LookupIP("google.com")
	if err != nil {
		fmt.Println("DNS lookup error:", err)
		return
	}
	fmt.Println("IP addresses for google.com:")
	for _, ip := range ips {
		fmt.Printf("  %s\\n", ip)
	}
	
	// Lookup CNAME
	cname, err := net.LookupCNAME("www.google.com")
	if err == nil {
		fmt.Printf("\\nCNAME: %s\\n", cname)
	}
	
	// Lookup MX records
	mxRecords, err := net.LookupMX("gmail.com")
	if err == nil {
		fmt.Println("\\nMX records for gmail.com:")
		for _, mx := range mxRecords {
			fmt.Printf("  %s (priority: %d)\\n", mx.Host, mx.Pref)
		}
	}
	
	// Lookup NS records
	nsRecords, err := net.LookupNS("google.com")
	if err == nil {
		fmt.Println("\\nNS records for google.com:")
		for _, ns := range nsRecords {
			fmt.Printf("  %s\\n", ns.Host)
		}
	}
	
	// Lookup TXT records
	txtRecords, err := net.LookupTXT("google.com")
	if err == nil {
		fmt.Println("\\nTXT records for google.com:")
		for _, txt := range txtRecords {
			fmt.Printf("  %s\\n", txt)
		}
	}
	
	// Custom resolver with timeout
	resolver := &net.Resolver{
		PreferGo: true,
		Dial: func(ctx context.Context, network, address string) (net.Conn, error) {
			d := net.Dialer{
				Timeout: time.Second * 3,
			}
			return d.DialContext(ctx, network, address)
		},
	}
	
	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()
	
	ips, err = resolver.LookupIPAddr(ctx, "cloudflare.com")
	if err != nil {
		fmt.Println("Custom resolver error:", err)
		return
	}
	fmt.Println("\\nIPs from custom resolver for cloudflare.com:")
	for _, ip := range ips {
		fmt.Printf("  %s\\n", ip.IP)
	}
	
	// Reverse DNS lookup
	names, err := net.LookupAddr("8.8.8.8")
	if err == nil {
		fmt.Println("\\nReverse DNS for 8.8.8.8:")
		for _, name := range names {
			fmt.Printf("  %s\\n", name)
		}
	}
}`
      },
      {
        title: "SMTP Email Client in Go",
        description: "Sending emails using SMTP protocol",
        language: "go",
        code: `package main

import (
	"crypto/tls"
	"fmt"
	"net/smtp"
	"strings"
)

func main() {
	// SMTP server configuration
	smtpHost := "smtp.gmail.com"
	smtpPort := "587"
	smtpServer := smtpHost + ":" + smtpPort
	
	// Authentication
	auth := smtp.PlainAuth("", "your-email@gmail.com", "your-password", smtpHost)
	
	// Email content
	from := "sender@example.com"
	to := []string{"recipient@example.com"}
	subject := "Test Email from Go"
	body := "This is a test email sent using Go's SMTP client."
	
	// Build email message with headers
	msg := []byte("To: " + strings.Join(to, ", ") + "\\r\\n" +
		"From: " + from + "\\r\\n" +
		"Subject: " + subject + "\\r\\n" +
		"MIME-Version: 1.0\\r\\n" +
		"Content-Type: text/plain; charset=\\"UTF-8\\"\\r\\n" +
		"\\r\\n" +
		body + "\\r\\n")
	
	// Send email
	err := smtp.SendMail(smtpServer, auth, from, to, msg)
	if err != nil {
		fmt.Println("Error sending email:", err)
		return
	}
	fmt.Println("Email sent successfully!")
	
	// Example with TLS (port 465)
	tlsConfig := &tls.Config{
		ServerName: smtpHost,
	}
	
	conn, err := tls.Dial("tcp", smtpHost+":465", tlsConfig)
	if err != nil {
		fmt.Println("TLS connection error:", err)
		return
	}
	defer conn.Close()
	
	client, err := smtp.NewClient(conn, smtpHost)
	if err != nil {
		fmt.Println("SMTP client error:", err)
		return
	}
	defer client.Close()
	
	// Authenticate
	if err = client.Auth(auth); err != nil {
		fmt.Println("Auth error:", err)
		return
	}
	
	// Set sender and recipient
	if err = client.Mail(from); err != nil {
		fmt.Println("Mail error:", err)
		return
	}
	for _, addr := range to {
		if err = client.Rcpt(addr); err != nil {
			fmt.Println("Rcpt error:", err)
			return
		}
	}
	
	// Send data
	w, err := client.Data()
	if err != nil {
		fmt.Println("Data error:", err)
		return
	}
	_, err = w.Write(msg)
	if err != nil {
		fmt.Println("Write error:", err)
		return
	}
	err = w.Close()
	if err != nil {
		fmt.Println("Close error:", err)
		return
	}
	
	client.Quit()
	fmt.Println("Email sent via TLS successfully!")
}`
      },
      {
        title: "WebSocket Server and Client in Go",
        description: "Real-time bidirectional communication using WebSocket",
        language: "go",
        code: `package main

import (
	"fmt"
	"log"
	"net/http"
	"time"

	"github.com/gorilla/websocket"
)

var upgrader = websocket.Upgrader{
	ReadBufferSize:  1024,
	WriteBufferSize: 1024,
	CheckOrigin: func(r *http.Request) bool {
		return true // Allow all origins for demo
	},
}

// WebSocket server handler
func wsHandler(w http.ResponseWriter, r *http.Request) {
	conn, err := upgrader.Upgrade(w, r, nil)
	if err != nil {
		log.Println("Upgrade error:", err)
		return
	}
	defer conn.Close()
	
	fmt.Printf("Client connected: %s\\n", r.RemoteAddr)
	
	// Send welcome message
	conn.WriteMessage(websocket.TextMessage, []byte("Welcome to WebSocket server!"))
	
	// Handle messages
	for {
		messageType, message, err := conn.ReadMessage()
		if err != nil {
			log.Println("Read error:", err)
			break
		}
		
		fmt.Printf("Received: %s\\n", message)
		
		// Echo back with timestamp
		response := fmt.Sprintf("[%s] Echo: %s", time.Now().Format("15:04:05"), message)
		err = conn.WriteMessage(messageType, []byte(response))
		if err != nil {
			log.Println("Write error:", err)
			break
		}
	}
	
	fmt.Printf("Client disconnected: %s\\n", r.RemoteAddr)
}

func main() {
	// WebSocket endpoint
	http.HandleFunc("/ws", wsHandler)
	
	// Simple HTML client
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		html := \`<!DOCTYPE html>
<html>
<head>
    <title>WebSocket Client</title>
</head>
<body>
    <h1>WebSocket Test Client</h1>
    <div id="messages"></div>
    <input type="text" id="input" placeholder="Type a message...">
    <button onclick="send()">Send</button>
    <script>
        const ws = new WebSocket("ws://localhost:8080/ws");
        ws.onmessage = function(event) {
            const div = document.createElement("div");
            div.textContent = event.data;
            document.getElementById("messages").appendChild(div);
        };
        function send() {
            const input = document.getElementById("input");
            ws.send(input.value);
            input.value = "";
        }
    </script>
</body>
</html>\`
		w.Header().Set("Content-Type", "text/html")
		w.Write([]byte(html))
	})
	
	fmt.Println("WebSocket server starting on :8080")
	fmt.Println("Open http://localhost:8080 in browser")
	log.Fatal(http.ListenAndServe(":8080", nil))
}`
      },
      {
        title: "HTTP Proxy Server in Go",
        description: "Simple caching HTTP proxy implementation",
        language: "go",
        code: `package main

import (
	"bytes"
	"crypto/sha256"
	"encoding/hex"
	"fmt"
	"io"
	"net/http"
	"net/http/httputil"
	"net/url"
	"sync"
	"time"
)

// Cache entry
type CacheEntry struct {
	Response     []byte
	StatusCode   int
	Headers      http.Header
	Expires      time.Time
}

// Simple in-memory cache
type ProxyCache struct {
	mu      sync.RWMutex
	entries map[string]*CacheEntry
}

func NewProxyCache() *ProxyCache {
	return &ProxyCache{
		entries: make(map[string]*CacheEntry),
	}
}

func (c *ProxyCache) Get(key string) (*CacheEntry, bool) {
	c.mu.RLock()
	defer c.mu.RUnlock()
	
	entry, exists := c.entries[key]
	if !exists || time.Now().After(entry.Expires) {
		return nil, false
	}
	return entry, true
}

func (c *ProxyCache) Set(key string, entry *CacheEntry) {
	c.mu.Lock()
	defer c.mu.Unlock()
	c.entries[key] = entry
}

func generateCacheKey(r *http.Request) string {
	h := sha256.New()
	h.Write([]byte(r.Method + r.URL.String()))
	return hex.EncodeToString(h.Sum(nil))
}

func main() {
	cache := NewProxyCache()
	
	// Target server (for demo, proxy to httpbin.org)
	targetURL, _ := url.Parse("https://httpbin.org")
	proxy := httputil.NewSingleHostReverseProxy(targetURL)
	
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		// Generate cache key
		cacheKey := generateCacheKey(r)
		
		// Check cache for GET requests
		if r.Method == "GET" {
			if entry, hit := cache.Get(cacheKey); hit {
				fmt.Printf("[CACHE HIT] %s %s\\n", r.Method, r.URL)
				for k, v := range entry.Headers {
					w.Header()[k] = v
				}
				w.Header().Set("X-Cache", "HIT")
				w.WriteHeader(entry.StatusCode)
				w.Write(entry.Response)
				return
			}
		}
		
		fmt.Printf("[CACHE MISS] %s %s\\n", r.Method, r.URL)
		
		// Capture response for caching
		recorder := httptest.NewRecorder()
		proxy.ServeHTTP(recorder, r)
		
		// Cache the response for GET requests
		if r.Method == "GET" && recorder.Code == http.StatusOK {
			entry := &CacheEntry{
				Response:   recorder.Body.Bytes(),
				StatusCode: recorder.Code,
				Headers:    recorder.Header(),
				Expires:    time.Now().Add(5 * time.Minute),
			}
			cache.Set(cacheKey, entry)
		}
		
		// Write response to client
		for k, v := range recorder.Header() {
			w.Header()[k] = v
		}
		w.Header().Set("X-Cache", "MISS")
		w.WriteHeader(recorder.Code)
		w.Write(recorder.Body.Bytes())
	})
	
	fmt.Println("HTTP Proxy server starting on :8080")
	fmt.Println("Usage: curl http://localhost:8080/get")
	http.ListenAndServe(":8080", nil)
}`
      },
      {
        title: "REST API with Middleware in Go",
        description: "Complete REST API with authentication, logging, and rate limiting",
        language: "go",
        code: `package main

import (
	"context"
	"encoding/json"
	"fmt"
	"net/http"
	"strings"
	"sync"
	"time"
)

// User represents a user in the system
type User struct {
	ID        string    \`json:"id"\`
	Username  string    \`json:"username"\`
	Email     string    \`json:"email"\`
	CreatedAt time.Time \`json:"created_at"\`
}

// In-memory user store
type UserStore struct {
	mu    sync.RWMutex
	users map[string]*User
}

func NewUserStore() *UserStore {
	return &UserStore{
		users: make(map[string]*User),
	}
}

func (s *UserStore) Get(id string) (*User, bool) {
	s.mu.RLock()
	defer s.mu.RUnlock()
	user, exists := s.users[id]
	return user, exists
}

func (s *UserStore) Create(user *User) {
	s.mu.Lock()
	defer s.mu.Unlock()
	s.users[user.ID] = user
}

func (s *UserStore) Delete(id string) {
	s.mu.Lock()
	defer s.mu.Unlock()
	delete(s.users, id)
}

func (s *UserStore) List() []*User {
	s.mu.RLock()
	defer s.mu.RUnlock()
	users := make([]*User, 0, len(s.users))
	for _, u := range s.users {
		users = append(users, u)
	}
	return users
}

// Middleware types
type Middleware func(http.HandlerFunc) http.HandlerFunc

// Logging middleware
func LoggingMiddleware(next http.HandlerFunc) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		start := time.Now()
		next(w, r)
		fmt.Printf("[%s] %s %s - %v\\n", time.Now().Format("2006-01-02 15:04:05"), r.Method, r.URL.Path, time.Since(start))
	}
}

// Authentication middleware
func AuthMiddleware(next http.HandlerFunc) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		authHeader := r.Header.Get("Authorization")
		if authHeader == "" {
			http.Error(w, "Unauthorized", http.StatusUnauthorized)
			return
		}
		
		// Simple Bearer token validation
		parts := strings.SplitN(authHeader, " ", 2)
		if len(parts) != 2 || parts[0] != "Bearer" {
			http.Error(w, "Invalid authorization header", http.StatusUnauthorized)
			return
		}
		
		// In production, validate JWT here
		ctx := context.WithValue(r.Context(), "user_id", parts[1])
		next(w, r.WithContext(ctx))
	}
}

// Rate limiting middleware
func RateLimitMiddleware(requests int, window time.Duration) Middleware {
	type client struct {
		count  int
		window time.Time
	}
	
	var mu sync.Mutex
	clients := make(map[string]*client)
	
	return func(next http.HandlerFunc) http.HandlerFunc {
		return func(w http.ResponseWriter, r *http.Request) {
			mu.Lock()
			defer mu.Unlock()
			
			ip := r.RemoteAddr
			now := time.Now()
			
			c, exists := clients[ip]
			if !exists || now.After(c.window) {
				clients[ip] = &client{count: 1, window: now.Add(window)}
			} else {
				if c.count >= requests {
					http.Error(w, "Rate limit exceeded", http.StatusTooManyRequests)
					return
				}
				c.count++
			}
			
			next(w, r)
		}
	}
}

// Chain middlewares
func Chain(handler http.HandlerFunc, middlewares ...Middleware) http.HandlerFunc {
	for i := len(middlewares) - 1; i >= 0; i-- {
		handler = middlewares[i](handler)
	}
	return handler
}

func main() {
	store := NewUserStore()
	
	// Create sample user
	store.Create(&User{
		ID:        "1",
		Username:  "admin",
		Email:     "admin@example.com",
		CreatedAt: time.Now(),
	})
	
	// GET /users - List all users
	http.HandleFunc("/users", Chain(func(w http.ResponseWriter, r *http.Request) {
		switch r.Method {
		case "GET":
			users := store.List()
			w.Header().Set("Content-Type", "application/json")
			json.NewEncoder(w).Encode(users)
		case "POST":
			var user User
			if err := json.NewDecoder(r.Body).Decode(&user); err != nil {
				http.Error(w, err.Error(), http.StatusBadRequest)
				return
			}
			user.ID = fmt.Sprintf("%d", time.Now().Unix())
			user.CreatedAt = time.Now()
			store.Create(&user)
			w.Header().Set("Content-Type", "application/json")
			w.WriteHeader(http.StatusCreated)
			json.NewEncoder(w).Encode(user)
		default:
			http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
		}
	}, LoggingMiddleware, RateLimitMiddleware(10, time.Minute)))
	
	// GET /users/{id} - Get user by ID
	http.HandleFunc("/users/", Chain(func(w http.ResponseWriter, r *http.Request) {
		id := strings.TrimPrefix(r.URL.Path, "/users/")
		
		switch r.Method {
		case "GET":
			user, exists := store.Get(id)
			if !exists {
				http.Error(w, "User not found", http.StatusNotFound)
				return
			}
			w.Header().Set("Content-Type", "application/json")
			json.NewEncoder(w).Encode(user)
		case "DELETE":
			store.Delete(id)
			w.WriteHeader(http.StatusNoContent)
		default:
			http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
		}
	}, LoggingMiddleware, AuthMiddleware))
	
	fmt.Println("REST API server starting on :8080")
	fmt.Println("Endpoints:")
	fmt.Println("  GET    /users       - List users")
	fmt.Println("  POST   /users       - Create user")
	fmt.Println("  GET    /users/{id}  - Get user (requires auth)")
	fmt.Println("  DELETE /users/{id}  - Delete user (requires auth)")
	http.ListenAndServe(":8080", nil)
}`
      },
      {
        title: "HTTP Cookie Handling in Go",
        description: "Session management with cookies",
        language: "go",
        code: `package main

import (
	"crypto/rand"
	"encoding/base64"
	"fmt"
	"net/http"
	"sync"
	"time"
)

// Session store
type Session struct {
	ID         string
	Username   string
	Data       map[string]interface{}
	CreatedAt  time.Time
	ExpiresAt  time.Time
}

type SessionStore struct {
	mu       sync.RWMutex
	sessions map[string]*Session
}

func NewSessionStore() *SessionStore {
	return &SessionStore{
		sessions: make(map[string]*Session),
	}
}

func (s *SessionStore) Create(username string) *Session {
	session := &Session{
		ID:        generateSessionID(),
		Username:  username,
		Data:      make(map[string]interface{}),
		CreatedAt: time.Now(),
		ExpiresAt: time.Now().Add(24 * time.Hour),
	}
	
	s.mu.Lock()
	s.sessions[session.ID] = session
	s.mu.Unlock()
	
	return session
}

func (s *SessionStore) Get(id string) (*Session, bool) {
	s.mu.RLock()
	defer s.mu.RUnlock()
	
	session, exists := s.sessions[id]
	if !exists || time.Now().After(session.ExpiresAt) {
		return nil, false
	}
	return session, true
}

func (s *SessionStore) Delete(id string) {
	s.mu.Lock()
	defer s.mu.Unlock()
	delete(s.sessions, id)
}

func generateSessionID() string {
	b := make([]byte, 32)
	rand.Read(b)
	return base64.URLEncoding.EncodeToString(b)
}

func main() {
	store := NewSessionStore()
	
	// Login handler
	http.HandleFunc("/login", func(w http.ResponseWriter, r *http.Request) {
		if r.Method != "POST" {
			http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
			return
		}
		
		username := r.FormValue("username")
		password := r.FormValue("password")
		
		// Simple authentication (in production, check against database)
		if username == "admin" && password == "password" {
			session := store.Create(username)
			
			// Set session cookie
			http.SetCookie(w, &http.Cookie{
				Name:     "session_id",
				Value:    session.ID,
				Path:     "/",
				HttpOnly: true,
				Secure:   false, // Set to true in production with HTTPS
				SameSite: http.SameSiteStrictMode,
				Expires:  session.ExpiresAt,
			})
			
			fmt.Fprintf(w, "Login successful! Welcome, %s\\n", username)
		} else {
			http.Error(w, "Invalid credentials", http.StatusUnauthorized)
		}
	})
	
	// Profile handler (requires session)
	http.HandleFunc("/profile", func(w http.ResponseWriter, r *http.Request) {
		cookie, err := r.Cookie("session_id")
		if err != nil {
			http.Error(w, "Not authenticated", http.StatusUnauthorized)
			return
		}
		
		session, exists := store.Get(cookie.Value)
		if !exists {
			http.Error(w, "Session expired", http.StatusUnauthorized)
			return
		}
		
		fmt.Fprintf(w, "Profile: %s\\n", session.Username)
		fmt.Fprintf(w, "Session created: %s\\n", session.CreatedAt.Format(time.RFC3339))
		fmt.Fprintf(w, "Session expires: %s\\n", session.ExpiresAt.Format(time.RFC3339))
	})
	
	// Logout handler
	http.HandleFunc("/logout", func(w http.ResponseWriter, r *http.Request) {
		cookie, err := r.Cookie("session_id")
		if err == nil {
			store.Delete(cookie.Value)
		}
		
		// Clear cookie
		http.SetCookie(w, &http.Cookie{
			Name:     "session_id",
			Value:    "",
			Path:     "/",
			MaxAge:   -1,
			HttpOnly: true,
		})
		
		fmt.Fprintln(w, "Logout successful!")
	})
	
	// Login form
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		html := \`<!DOCTYPE html>
<html>
<body>
    <h1>Session Cookie Demo</h1>
    <form action="/login" method="POST">
        <input type="text" name="username" placeholder="Username" value="admin"><br>
        <input type="password" name="password" placeholder="Password" value="password"><br>
        <button type="submit">Login</button>
    </form>
    <p><a href="/profile">View Profile</a></p>
    <p><a href="/logout">Logout</a></p>
</body>
</html>\`
		w.Header().Set("Content-Type", "text/html")
		w.Write([]byte(html))
	})
	
	fmt.Println("Server starting on :8080")
	fmt.Println("Login: http://localhost:8080/")
	fmt.Println("Username: admin, Password: password")
	http.ListenAndServe(":8080", nil)
}`
      },
      {
        title: "File Upload and Download Server in Go",
        description: "HTTP file server with multipart upload support",
        language: "go",
        code: `package main

import (
	"fmt"
	"io"
	"net/http"
	"os"
	"path/filepath"
)

const uploadDir = "./uploads"

func init() {
	os.MkdirAll(uploadDir, 0755)
}

func main() {
	// File upload handler
	http.HandleFunc("/upload", func(w http.ResponseWriter, r *http.Request) {
		if r.Method != "POST" {
			http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
			return
		}
		
		// Parse multipart form (32 MB max memory)
		err := r.ParseMultipartForm(32 << 20)
		if err != nil {
			http.Error(w, err.Error(), http.StatusBadRequest)
			return
		}
		
		// Get file from form
		file, handler, err := r.FormFile("file")
		if err != nil {
			http.Error(w, err.Error(), http.StatusBadRequest)
			return
		}
		defer file.Close()
		
		// Create destination file
		dstPath := filepath.Join(uploadDir, handler.Filename)
		dst, err := os.Create(dstPath)
		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}
		defer dst.Close()
		
		// Copy file content
		written, err := io.Copy(dst, file)
		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}
		
		fmt.Fprintf(w, "File uploaded successfully: %s (%d bytes)\\n", handler.Filename, written)
	})
	
	// File download handler
	http.HandleFunc("/download/", func(w http.ResponseWriter, r *http.Request) {
		filename := r.URL.Path[len("/download/"):]
		if filename == "" {
			http.Error(w, "Filename required", http.StatusBadRequest)
			return
		}
		
		filepath := filepath.Join(uploadDir, filename)
		
		// Security: prevent directory traversal
		if !filepath.HasPrefix(filepath, uploadDir) {
			http.Error(w, "Invalid filename", http.StatusBadRequest)
			return
		}
		
		// Check if file exists
		info, err := os.Stat(filepath)
		if os.IsNotExist(err) {
			http.Error(w, "File not found", http.StatusNotFound)
			return
		}
		
		// Set headers for download
		w.Header().Set("Content-Disposition", fmt.Sprintf("attachment; filename=\\"%s\\"", filename))
		w.Header().Set("Content-Type", "application/octet-stream")
		w.Header().Set("Content-Length", fmt.Sprintf("%d", info.Size()))
		
		// Serve file
		http.ServeFile(w, r, filepath)
	})
	
	// List files handler
	http.HandleFunc("/files", func(w http.ResponseWriter, r *http.Request) {
		entries, err := os.ReadDir(uploadDir)
		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}
		
		w.Header().Set("Content-Type", "text/html")
		fmt.Fprintln(w, "<h1>Uploaded Files</h1>")
		fmt.Fprintln(w, "<ul>")
		for _, entry := range entries {
			if !entry.IsDir() {
				info, _ := entry.Info()
				fmt.Fprintf(w, "<li><a href=\\"/download/%s\\">%s</a> (%d bytes)</li>\\n", entry.Name(), entry.Name(), info.Size())
			}
		}
		fmt.Fprintln(w, "</ul>")
		fmt.Fprintln(w, \`<form action="/upload" method="POST" enctype="multipart/form-data">
			<input type="file" name="file">
			<button type="submit">Upload</button>
		</form>\`)
	})
	
	fmt.Println("File server starting on :8080")
	fmt.Println("Upload: POST /upload")
	fmt.Println("Download: GET /download/{filename}")
	fmt.Println("List: GET /files")
	http.ListenAndServe(":8080", nil)
}`
      },
      {
        title: "P2P File Sharing Simulation in Go",
        description: "Simple BitTorrent-like peer with tit-for-tat",
        language: "go",
        code: `package main

import (
	"crypto/sha1"
	"encoding/hex"
	"fmt"
	"io"
	"math/rand"
	"net"
	"os"
	"sync"
	"time"
)

const (
	ChunkSize = 1024 * 256 // 256 KB chunks
	Port      = ":6881"
)

// Chunk represents a file piece
type Chunk struct {
	Index int
	Hash  string
	Data  []byte
}

// Peer represents a P2P peer
type Peer struct {
	ID       string
	Address  string
	Chunks   map[int]*Chunk
	Peers    map[string]*PeerConn
	mu       sync.RWMutex
}

type PeerConn struct {
	ID       string
	Conn     net.Conn
	Choked   bool
	Interested bool
	UploadRate   int
	DownloadRate int
}

func NewPeer(id string) *Peer {
	return &Peer{
		ID:     id,
		Chunks: make(map[int]*Chunk),
		Peers:  make(map[string]*PeerConn),
	}
}

func (p *Peer) AddChunk(index int, data []byte) {
	hash := sha1.Sum(data)
	p.mu.Lock()
	p.Chunks[index] = &Chunk{
		Index: index,
		Hash:  hex.EncodeToString(hash[:]),
		Data:  data,
	}
	p.mu.Unlock()
}

func (p *Peer) HasChunk(index int) bool {
	p.mu.RLock()
	defer p.mu.RUnlock()
	_, has := p.Chunks[index]
	return has
}

func (p *Peer) GetChunk(index int) *Chunk {
	p.mu.RLock()
	defer p.mu.RUnlock()
	return p.Chunks[index]
}

func (p *Peer) StartListener() {
	listener, err := net.Listen("tcp", Port)
	if err != nil {
		fmt.Println("Listen error:", err)
		return
	}
	defer listener.Close()
	
	fmt.Printf("Peer %s listening on %s\\n", p.ID, Port)
	
	for {
		conn, err := listener.Accept()
		if err != nil {
			continue
		}
		go p.handleConnection(conn)
	}
}

func (p *Peer) handleConnection(conn net.Conn) {
	defer conn.Close()
	
	// Simple protocol: REQUEST <chunk_index> or HAVE <chunk_index>
	buf := make([]byte, 1024)
	for {
		n, err := conn.Read(buf)
		if err != nil {
			return
		}
		
		msg := string(buf[:n])
		var cmd string
		var index int
		fmt.Sscanf(msg, "%s %d", &cmd, &index)
		
		switch cmd {
		case "REQUEST":
			// Tit-for-tat: check if peer has contributed
			chunk := p.GetChunk(index)
			if chunk != nil {
				conn.Write(chunk.Data)
				fmt.Printf("[%s] Sent chunk %d\\n", p.ID, index)
			}
		case "HAVE":
			fmt.Printf("[%s] Peer has chunk %d\\n", p.ID, index)
		}
	}
}

func (p *Peer) ConnectToPeer(address string) {
	conn, err := net.Dial("tcp", address)
	if err != nil {
		fmt.Println("Connect error:", err)
		return
	}
	
	p.mu.Lock()
	p.Peers[address] = &PeerConn{
		ID:   address,
		Conn: conn,
	}
	p.mu.Unlock()
	
	fmt.Printf("[%s] Connected to %s\\n", p.ID, address)
}

func (p *Peer) DownloadChunk(peerAddr string, index int) []byte {
	p.mu.RLock()
	peer, exists := p.Peers[peerAddr]
	p.mu.RUnlock()
	
	if !exists {
		return nil
	}
	
	// Send request
	fmt.Fprintf(peer.Conn, "REQUEST %d\\n", index)
	
	// Receive data
	data := make([]byte, ChunkSize)
	n, _ := peer.Conn.Read(data)
	
	fmt.Printf("[%s] Downloaded chunk %d from %s\\n", p.ID, index, peerAddr)
	return data[:n]
}

func main() {
	rand.Seed(time.Now().UnixNano())
	
	// Create two peers
	peer1 := NewPeer("Peer1")
	peer2 := NewPeer("Peer2")
	
	// Simulate: peer1 has the file, peer2 wants it
	fileData := []byte("This is a test file for P2P sharing simulation. " +
		"It demonstrates the tit-for-tat mechanism used in BitTorrent.")
	
	// Split into chunks and add to peer1
	numChunks := (len(fileData) + ChunkSize - 1) / ChunkSize
	for i := 0; i < numChunks; i++ {
		start := i * ChunkSize
		end := start + ChunkSize
		if end > len(fileData) {
			end = len(fileData)
		}
		peer1.AddChunk(i, fileData[start:end])
	}
	
	fmt.Printf("File split into %d chunks\\n", numChunks)
	fmt.Printf("Peer1 has all %d chunks\\n", len(peer1.Chunks))
	fmt.Printf("Peer2 has %d chunks\\n", len(peer2.Chunks))
	
	// Start peer1 listener
	go peer1.StartListener()
	time.Sleep(100 * time.Millisecond)
	
	// Peer2 connects to peer1
	peer2.ConnectToPeer("localhost" + Port)
	
	// Peer2 downloads all chunks
	for i := 0; i < numChunks; i++ {
		data := peer2.DownloadChunk("localhost"+Port, i)
		if data != nil {
			peer2.AddChunk(i, data)
		}
	}
	
	// Verify download
	fmt.Printf("\\nPeer2 now has %d chunks\\n", len(peer2.Chunks))
	
	// Reconstruct file
	var reconstructed []byte
	for i := 0; i < numChunks; i++ {
		chunk := peer2.GetChunk(i)
		if chunk != nil {
			reconstructed = append(reconstructed, chunk.Data...)
		}
	}
	
	fmt.Printf("Reconstructed file (%d bytes): %s\\n", len(reconstructed), string(reconstructed))
	
	// Verify integrity
	originalHash := sha1.Sum(fileData)
	reconstructedHash := sha1.Sum(reconstructed)
	
	if hex.EncodeToString(originalHash[:]) == hex.EncodeToString(reconstructedHash[:]) {
		fmt.Println("\\nFile integrity verified!")
	} else {
		fmt.Println("\\nFile integrity check failed!")
	}
}`
      }
    ],
    comparisons: [
      {
        title: "HTTP/1.0 vs HTTP/1.1 vs HTTP/2",
        itemA: "HTTP/1.0",
        itemB: "HTTP/2",
        points: [
          { aspect: "Connections", itemAValue: "Non-persistent (new per object)", itemBValue: "Single, multiplexed" },
          { aspect: "RTTs for 6 Objects", itemAValue: "12 RTTs", itemBValue: "1-2 RTTs" },
          { aspect: "Head-of-Line Blocking", itemAValue: "Yes", itemBValue: "No (streams)" },
          { aspect: "Header Compression", itemAValue: "None", itemBValue: "HPACK" },
          { aspect: "Server Push", itemAValue: "No", itemBValue: "Yes" },
          { aspect: "Binary Protocol", itemAValue: "Text", itemBValue: "Binary framing" }
        ]
      },
      {
        title: "Client-Server vs P2P Architecture",
        itemA: "Client-Server",
        itemB: "P2P",
        points: [
          { aspect: "Server Requirement", itemAValue: "Always-on server", itemBValue: "No always-on server" },
          { aspect: "Scalability", itemAValue: "Limited by server bandwidth", itemBValue: "Self-scaling" },
          { aspect: "Cost", itemAValue: "High server infrastructure cost", itemBValue: "Distributed cost" },
          { aspect: "Reliability", itemAValue: "Single point of failure", itemBValue: "Distributed, resilient" },
          { aspect: "Examples", itemAValue: "Web servers, FTP", itemBValue: "BitTorrent, Blockchain" }
        ]
      }
    ],
    realWorldApplications: [
      {
        title: "REST API Design and Performance",
        role: "Backend Engineer",
        scenario: "Building high-throughput payment processing API handling 10K+ TPS",
        application: "HTTP/2 multiplexing reduces connection overhead. Proper cache headers (ETag, Last-Modified) with conditional GETs reduce server load. Understanding persistent connections helps tune keep-alive timeouts.",
        bestPractices: [
          "Enable HTTP/2 on load balancers (NGINX, Envoy)",
          "Implement proper caching with Cache-Control headers",
          "Use connection pooling between services",
          "Compress responses with gzip/brotli",
          "Implement circuit breakers for downstream calls"
        ],
        tools: ["NGINX", "Envoy", "HAProxy", "Varnish", "Redis"]
      },
      {
        title: "DNS Management at Scale",
        role: "SRE",
        scenario: "Managing DNS for multi-region application with blue-green deployments",
        application: "DNS is the first point of failure. Low TTLs enable rapid failover, but increase query load. GeoDNS routes users to nearest healthy region. Understanding iterative vs recursive queries helps debug resolution issues.",
        bestPractices: [
          "Use health-checked DNS records for failover",
          "Implement split-horizon DNS for internal services",
          "Monitor DNS resolution time from multiple locations",
          "Use DNSSEC to prevent cache poisoning",
          "Keep TTLs low (30-60s) for dynamic environments"
        ],
        tools: ["Route53", "Cloudflare DNS", "CoreDNS", "BIND", "dig", "nslookup"]
      },
      {
        title: "CDN and Content Optimization",
        role: "DevOps",
        scenario: "Reducing latency for global users accessing video streaming platform",
        application: "DASH adaptive streaming adjusts quality based on bandwidth. CDN edge servers cache content close to users. Understanding HTTP caching (If-Modified-Since, 304 responses) minimizes origin load.",
        bestPractices: [
          "Use signed URLs for secure content delivery",
          "Implement origin shield to reduce origin load",
          "Enable Brotli compression for text assets",
          "Use stale-while-revalidate for non-critical updates",
          "Monitor cache hit ratios (target >90%)"
        ],
        tools: ["CloudFront", "Fastly", "Akamai", "Cloudflare", "AWS MediaConvert"]
      }
    ],
    comparisonDiagrams: [
      {
        id: "comp2-1",
        title: "HTTP Evolution - Visual Timeline",
        mermaidCode: `timeline
    title HTTP Protocol Evolution
    
    section HTTP/1.0 : 1996
        One connection per request : High latency
        No persistence : Connection overhead
        
    section HTTP/1.1 : 1997
        Persistent connections : Keep-alive
        Pipelining : Limited parallelism
        Chunked encoding : Streaming
        
    section HTTP/2 : 2015
        Binary framing : Multiplexing
        Header compression : HPACK
        Server push : Proactive sending
        
    section HTTP/3 : 2022
        QUIC transport : UDP-based
        0-RTT connection : Faster setup
        Built-in security : TLS 1.3` 
      },
      {
        id: "comp2-2",
        title: "Client-Server vs P2P Architecture",
        mermaidCode: `graph TB
    subgraph Client_Server["🏢 Client-Server"]
        CS[Central Server] -->|High bandwidth| C1[Client 1]
        CS -->|High bandwidth| C2[Client 2]
        CS -->|High bandwidth| C3[Client 3]
        CS -->|High bandwidth| C4[Client 4]
        
        style CS fill:#ff9999
        style C1 fill:#99ccff
        style C2 fill:#99ccff
        style C3 fill:#99ccff
        style C4 fill:#99ccff
    end
    
    subgraph P2P_Network["🌐 P2P Network"]
        P1[Peer 1] <-->|Share| P2[Peer 2]
        P2 <-->|Share| P3[Peer 3]
        P3 <-->|Share| P4[Peer 4]
        P4 <-->|Share| P1
        
        style P1 fill:#99ff99
        style P2 fill:#99ff99
        style P3 fill:#99ff99
        style P4 fill:#99ff99
    end
    
    Note["Client-Server: Centralized, easier to manage<br/>P2P: Distributed, self-scaling, harder to control"]`
      }
    ]
  },
  {
    id: 3,
    title: "Transport Layer",
    subtitle: "TCP and UDP",
    overview: "The transport layer provides logical communication between application processes running on different hosts. We examine UDP and TCP in detail, including reliable data transfer principles and congestion control.",
    sections: [
      {
        id: "3.1",
        title: "Introduction to Transport Layer",
        content: "Transport protocols run in end systems and provide logical communication between processes.",
        subsections: [
          {
            title: "Transport vs Network Layer",
            bullets: [
              "Network layer: logical communication between HOSTS",
              "Transport layer: logical communication between PROCESSES",
              "Transport layer enhances network layer services",
              "IP provides unreliable, best-effort delivery"
            ]
          },
          {
            title: "Internet Transport Protocols",
            bullets: [
              "TCP: Transmission Control Protocol - reliable, connection-oriented, congestion control",
              "UDP: User Datagram Protocol - unreliable, connectionless, no congestion control",
              "Both provide multiplexing/demultiplexing",
              "Neither provides timing or throughput guarantees"
            ]
          }
        ]
      },
      {
        id: "3.2",
        title: "Multiplexing and Demultiplexing",
        content: "Multiplexing gathers data from multiple sockets and adds transport headers. Demultiplexing delivers received segments to correct sockets.",
        subsections: [
          {
            title: "UDP Demultiplexing",
            bullets: [
              "UDP socket identified by two-tuple: (dest IP, dest port)",
              "All segments with same dest port go to same socket",
              "Source IP/port used for reply but not for identifying socket"
            ]
          },
          {
            title: "TCP Demultiplexing",
            bullets: [
              "TCP socket identified by four-tuple: (src IP, src port, dest IP, dest port)",
              "Different connections to same dest port have different sockets",
              "Web servers have special welcoming socket for new connections"
            ]
          }
        ]
      },
      {
        id: "3.3",
        title: "Connectionless Transport: UDP",
        content: "UDP is a no-frills, lightweight transport protocol with minimal functionality.",
        subsections: [
          {
            title: "UDP Characteristics",
            bullets: [
              "No connection establishment (no delay)",
              "No connection state at sender or receiver",
              "Small segment header (8 bytes vs 20 for TCP)",
              "No congestion control - can blast away at any rate",
              "Used by DNS, streaming media, SNMP, online games",
              "Provides checksum for error detection"
            ]
          },
          {
            title: "UDP Segment Structure",
            bullets: [
              "Source port (16 bits)",
              "Destination port (16 bits)",
              "Length (16 bits) - including header",
              "Checksum (16 bits) - optional in IPv4, required in IPv6"
            ]
          },
          {
            title: "UDP Checksum",
            bullets: [
              "Detects errors in transmitted segment",
              "Sender: Add all 16-bit words, wrap around carry, take 1's complement",
              "Receiver: Check if sum including checksum equals all 1s",
              "Can detect single-bit errors but not all two-bit errors"
            ]
          }
        ]
      },
      {
        id: "3.4",
        title: "Principles of Reliable Data Transfer",
        content: "Building reliable protocols over unreliable channels that may lose, corrupt, or reorder packets.",
        subsections: [
          {
            title: "Building a Reliable Protocol",
            bullets: [
              "rdt1.0: Perfectly reliable channel (unrealistic)",
              "rdt2.0: Bit errors - checksum, ACKs, NAKs, retransmission",
              "rdt2.1: ACK/NAK corruption - sequence numbers (0 and 1)",
              "rdt2.2: NAK-free protocol - duplicate ACK has same effect",
              "rdt3.0: Lossy channel - timeouts trigger retransmission"
            ],
            important: "Stop-and-wait (rdt3.0) is functionally correct but inefficient - only one unacknowledged packet at a time."
          },
          {
            title: "Pipelined Protocols",
            bullets: [
              "Allow multiple unacknowledged packets in flight",
              "Requires larger sequence number range",
              "Requires buffering at sender and/or receiver",
              "Two approaches: Go-Back-N and Selective Repeat"
            ]
          },
          {
            title: "Go-Back-N (GBN)",
            bullets: [
              "Sender can have up to N unacknowledged packets",
              "Cumulative ACK: ACK n means all packets up to n received",
              "Single timer for oldest unacknowledged packet",
              "Timeout: retransmit all unacknowledged packets",
              "Receiver only accepts packets in order (drops out-of-order)",
              "Window slides forward on ACK"
            ]
          },
          {
            title: "Selective Repeat (SR)",
            bullets: [
              "Sender maintains timer for each unacknowledged packet",
              "Receiver acknowledges all correctly received packets",
              "Receiver buffers out-of-order packets",
              "Sender only retransmits lost packets",
              "Window size must be <= half of sequence number space",
              "More complex but more efficient than GBN"
            ]
          }
        ]
      },
      {
        id: "3.5",
        title: "Connection-Oriented Transport: TCP",
        content: "TCP provides full-duplex, reliable, ordered byte stream service with flow control and congestion control.",
        subsections: [
          {
            title: "TCP Connection",
            bullets: [
              "Connection-oriented: three-way handshake before data",
              "Full-duplex: data flows both directions simultaneously",
              "Point-to-point: one sender, one receiver",
              "Three-way handshake: SYN, SYN-ACK, ACK",
              "Connection teardown: FIN, ACK, FIN, ACK (four-way)"
            ]
          },
          {
            title: "TCP Segment Structure",
            bullets: [
              "Source and destination port numbers",
              "Sequence number: byte stream number of first byte",
              "Acknowledgment number: next expected byte from other side",
              "Receive window: for flow control (rwnd)",
              "Header length, flags (SYN, ACK, FIN, RST, PSH, URG)",
              "Checksum, urgent data pointer",
              "Options (e.g., MSS, timestamp, SACK)"
            ]
          },
          {
            title: "TCP Reliable Data Transfer",
            bullets: [
              "Pipelined segments",
              "Cumulative acknowledgments",
              "Single retransmission timer for oldest unACKed segment",
              "Fast retransmit: 3 duplicate ACKs trigger retransmission",
              "Selective acknowledgment (SACK) option"
            ]
          },
          {
            title: "TCP Flow Control",
            bullets: [
              "Receiver controls sender to prevent buffer overflow",
              "Receive window (rwnd) in TCP header",
              "Receiver advertises spare room in connection buffer",
              "Sender limits unACKed data to rwnd",
              "rwnd = 0 means sender must stop (but can send 1-byte probes)"
            ]
          },
          {
            title: "TCP Connection Management",
            bullets: [
              "Three-way handshake: SYN -> SYN-ACK -> ACK",
              "SYN flood attack: Attacker sends many SYNs without completing",
              "SYN cookie defense: Don't allocate resources until ACK",
              "Connection termination: Four-way handshake with FINs",
              "TIME_WAIT state: Wait 2*MSL after sending final ACK"
            ]
          }
        ]
      },
      {
        id: "3.6",
        title: "Principles of Congestion Control",
        content: "Congestion occurs when demand exceeds capacity, leading to packet loss and delays.",
        subsections: [
          {
            title: "Causes and Costs of Congestion",
            bullets: [
              "Scenario 1: Two senders, infinite buffers - throughput limited",
              "Scenario 2: Finite buffers - retransmissions needed",
              "Scenario 3: Multiple routers - unneeded retransmissions",
              "Cost: Delay, lost throughput, wasted resources"
            ]
          },
          {
            title: "Approaches to Congestion Control",
            bullets: [
              "End-to-end: Network provides no explicit feedback (TCP)",
              "Network-assisted: Routers provide feedback to end systems",
              "Explicit Congestion Notification (ECN) in IP and TCP"
            ]
          }
        ]
      },
      {
        id: "3.7",
        title: "TCP Congestion Control",
        content: "TCP uses end-to-end congestion control with additive increase, multiplicative decrease (AIMD).",
        subsections: [
          {
            title: "Classic TCP Congestion Control",
            bullets: [
              "Congestion window (cwnd) limits in-flight data",
              "Sender rate ~ cwnd/RTT bytes/sec",
              "Slow start: cwnd starts at 1 MSS, doubles every RTT",
              "Congestion avoidance: cwnd increases by 1 MSS per RTT",
              "Timeout: cwnd = 1 MSS, restart slow start",
              "Fast recovery: After 3 dup ACKs, cwnd = cwnd/2"
            ],
            important: "Slow start threshold (ssthresh) determines when to switch from slow start to congestion avoidance."
          },
          {
            title: "TCP Tahoe vs Reno",
            bullets: [
              "Tahoe: Timeout or 3 dup ACKs -> cwnd = 1, slow start",
              "Reno: Timeout -> cwnd = 1, slow start; 3 dup ACKs -> cwnd = cwnd/2, fast recovery",
              "Reno adds fast recovery to avoid slow start on mild congestion"
            ]
          },
          {
            title: "TCP Fairness",
            bullets: [
              "AIMD converges to fair allocation",
              "UDP doesn't do congestion control - can starve TCP",
              "Parallel TCP connections can get more bandwidth",
              "RTT unfairness: Shorter RTT gets more throughput"
            ]
          }
        ]
      }
    ],
    diagrams: [
      {
        id: "fig3-1",
        title: "TCP Three-Way Handshake",
        description: "Connection establishment in TCP",
        mermaidCode: `sequenceDiagram
    participant Client
    participant Server
    
    Note over Client,Server: CLOSED LISTEN
    
    Client->>Server: SYN, seq=x
    Note right of Server: SYN_RCVD
    
    Server->>Client: SYN-ACK, seq=y, ack=x+1
    Note left of Client: ESTABLISHED
    
    Client->>Server: ACK, seq=x+1, ack=y+1
    Note right of Server: ESTABLISHED
    
    Note over Client,Server: Connection Ready for Data`
      },
      {
        id: "fig3-2",
        title: "TCP Congestion Control FSM",
        description: "State transitions in TCP congestion control",
        mermaidCode: `stateDiagram-v2
    [*] --> SlowStart: Connection Start
    
    SlowStart --> SlowStart: ACK received cwnd *= 2
    SlowStart --> CongestionAvoidance: cwnd >= ssthresh
    SlowStart --> SlowStart: Timeout ssthresh=cwnd/2 cwnd=1
    
    CongestionAvoidance --> CongestionAvoidance: ACK received cwnd += 1
    CongestionAvoidance --> FastRecovery: 3 dup ACKs ssthresh=cwnd/2 cwnd=ssthresh+3
    CongestionAvoidance --> SlowStart: Timeout ssthresh=cwnd/2 cwnd=1
    
    FastRecovery --> CongestionAvoidance: New ACK cwnd=ssthresh
    FastRecovery --> SlowStart: Timeout ssthresh=cwnd/2 cwnd=1`
      },
      {
        id: "fig3-3",
        title: "Go-Back-N vs Selective Repeat",
        description: "Comparison of pipelined reliable transfer protocols",
        mermaidCode: `graph LR
    subgraph Go-Back-N
        S1[Sender Window Size N]
        R1[Receiver Accept only in-order]
        
        S1 -->|pkt0| R1
        S1 -->|pkt1| R1
        S1 -->|pkt2 LOST| R1
        S1 -->|pkt3| R1
        
        Note["Receiver drops pkt3 - Sender retransmits 2,3,4"]
    end
    
    subgraph Selective_Repeat
        S2[Sender Window Size N]
        R2[Receiver Buffer out-of-order]
        
        S2 -->|pkt0| R2
        S2 -->|pkt1| R2
        S2 -->|pkt2 LOST| R2
        S2 -->|pkt3| R2
        
        Note["Receiver buffers pkt3 - Sender retransmits only pkt2"]
    end`
      },
      {
        id: "fig3-4",
        title: "TCP ACK Generation",
        description: "RFC 1122, RFC 5681 recommended TCP receiver actions",
        mermaidCode: `graph TD
    A[Segment arrives] --> B{In-order segment?}
    B -->|Yes| C{All previous ACKed?}
    B -->|No| D[Send duplicate ACK of highest in-order seq]
    
    C -->|Yes| E[Delay ACK 500ms Wait for next segment]
    C -->|No| F[Send immediate ACK]
    
    E --> G{Next segment arrives?}
    G -->|Yes| F
    G -->|No| H[Send ACK]
    
    style F fill:#e6ffe6
    style D fill:#ffe6e6`
      },
      {
        id: "fig3-5",
        title: "TCP Segment Format",
        description: "Structure of a TCP segment with header fields",
        mermaidCode: `graph LR
    subgraph TCP_Segment["📦 TCP Segment"]
        direction TB
        
        subgraph Header["TCP Header (20-60 bytes)"]
            H1[Source Port: 16 bits]
            H2[Dest Port: 16 bits]
            H3[Sequence Number: 32 bits]
            H4[ACK Number: 32 bits]
            H5[Data Offset: 4 bits | Reserved: 6 bits | Flags: 6 bits]
            H6[Receive Window: 16 bits]
            H7[Checksum: 16 bits]
            H8[Urgent Pointer: 16 bits]
            H9[Options: 0-40 bytes]
        end
        
        subgraph Payload["Payload (0-1460 bytes)"]
            P1[Application Data]
        end
        
        H1 --> H2 --> H3 --> H4 --> H5 --> H6 --> H7 --> H8 --> H9 --> P1
    end
    
    subgraph Key_Fields["🔑 Key Fields"]
        K1[Seq: Byte stream position]
        K2[ACK: Next expected byte]
        K3[Window: Flow control]
        K4[Flags: SYN, ACK, FIN, RST]
    end
    
    H3 -.-> K1
    H4 -.-> K2
    H6 -.-> K3
    H5 -.-> K4
    
    style H3 fill:#e1f5ff
    style H4 fill:#e8f5e9
    style H6 fill:#fff3e0`
      },
      {
        id: "fig3-6",
        title: "TCP Data Flow - Send and Receive",
        description: "Complete TCP data transmission process with flow and congestion control",
        mermaidCode: `graph TB
    subgraph Sender_Application["📱 Sender Application"]
        SA[Write Data]
    end
    
    subgraph TCP_Sender["🚚 TCP Sender"]
        TS1[Create Segment<br/>Add Seq Number]
        TS2["Check cwnd & rwnd<br/>Effective Window = min(cwnd, rwnd)"]
        TS3[Send to IP<br/>Start Timer]
        TS4[Wait for ACK<br/>Retransmit if timeout]
    end
    
    subgraph Network["🌐 Network"]
        N1[IP Routing]
        N2[Possible Loss/Delay]
    end
    
    subgraph TCP_Receiver["📥 TCP Receiver"]
        TR1[Receive Segment<br/>Verify Checksum]
        TR2[Check Seq Number<br/>Buffer if in-order]
        TR3[Send ACK<br/>Advertise rwnd]
        TR4[Deliver to App]
    end
    
    subgraph Receiver_Application["📱 Receiver Application"]
        RA[Read Data]
    end
    
    SA --> TS1
    TS1 --> TS2
    TS2 --> TS3
    TS3 --> N1
    N1 --> N2
    N2 --> TR1
    TR1 --> TR2
    TR2 --> TR3
    TR3 -.->|ACK| TS4
    TR2 --> TR4
    TR4 --> RA
    
    style TS2 fill:#fff3cd
    style TR3 fill:#d4edda`
      },
      {
        id: "fig3-7",
        title: "Flow Control in Action",
        description: "How TCP rwnd prevents receiver buffer overflow",
        mermaidCode: `sequenceDiagram
    participant S as Sender
    participant R as Receiver
    participant B as Receiver Buffer
    
    Note over S,R: Initial: rwnd = 1000 bytes
    
    S->>R: Segment 1 (500 bytes)
    R->>B: Store 500 bytes
    R-->>S: ACK 501, rwnd=500
    
    S->>R: Segment 2 (500 bytes)
    R->>B: Store 500 bytes (buffer full)
    R-->>S: ACK 1001, rwnd=0
    
    Note over S: Stop sending!<br/>rwnd = 0
    
    Note over R: Application reads 800 bytes
    R->>B: Free 800 bytes
    R-->>S: ACK 1001, rwnd=800
    
    S->>R: Segment 3 (800 bytes)
    R->>B: Store 800 bytes
    R-->>S: ACK 1801, rwnd=200`
      },
      {
        id: "fig3-8",
        title: "Congestion Control - cwnd Evolution",
        description: "How TCP cwnd changes over time with AIMD",
        mermaidCode: `xychart-beta
    title "TCP Congestion Window (cwnd) Over Time"
    x-axis [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
    y-axis "cwnd (MSS)" 0 --> 10
    
    line "Slow Start" [1, 2, 4, 8, 8, 9, 10, 10, 10, 10, 10, 10, 5, 6, 7, 8, 8, 9, 10, 10]
    
    annotation "Exponential Growth" {"x": 3, "y": 4}
    annotation "Congestion Avoidance" {"x": 8, "y": 10}
    annotation "Loss Detected<br/>cwnd/2" {"x": 13, "y": 5}`
      }
    ],
    keyConcepts: [
      { term: "Multiplexing", definition: "Combining data from multiple sockets into segments" },
      { term: "Demultiplexing", definition: "Delivering received segments to correct sockets based on port numbers" },
      { term: "UDP", definition: "User Datagram Protocol - connectionless, unreliable, minimal overhead" },
      { term: "TCP", definition: "Transmission Control Protocol - connection-oriented, reliable, flow and congestion controlled" },
      { term: "Three-way Handshake", definition: "SYN, SYN-ACK, ACK sequence to establish TCP connection" },
      { term: "Sequence Number", definition: "Byte stream number of first byte in segment" },
      { term: "ACK Number", definition: "Next expected byte from other side (cumulative)" },
      { term: "Flow Control", definition: "Preventing sender from overwhelming receiver's buffer (rwnd)" },
      { term: "Congestion Control", definition: "Preventing sender from overwhelming network (cwnd)" },
      { term: "cwnd", definition: "Congestion window - limits in-flight data based on network capacity" },
      { term: "rwnd", definition: "Receive window - limits in-flight data based on receiver buffer" },
      { term: "RTT", definition: "Round-Trip Time - time for packet to go to destination and back" },
      { term: "MSS", definition: "Maximum Segment Size - largest amount of data in TCP segment" },
      { term: "AIMD", definition: "Additive Increase Multiplicative Decrease - TCP congestion control algorithm" },
      { term: "Fast Retransmit", definition: "Retransmission triggered by 3 duplicate ACKs" },
      { term: "Go-Back-N", definition: "Pipelined protocol that retransmits all unacknowledged packets on timeout" },
      { term: "Selective Repeat", definition: "Pipelined protocol that retransmits only lost packets" }
    ],
    formulas: [
      {
        name: "TCP Throughput",
        formula: "Throughput = cwnd / RTT",
        explanation: "Approximate sending rate based on congestion window",
        example: "cwnd = 10 KB, RTT = 100 ms -> Throughput = 100 KB/s = 800 Kbps"
      },
      {
        name: "Timeout Interval",
        formula: "TimeoutInterval = EstimatedRTT + 4 * DevRTT",
        explanation: "Based on estimated RTT and its variation",
        example: "EstimatedRTT = 100ms, DevRTT = 10ms -> Timeout = 140ms"
      },
      {
        name: "Estimated RTT (EWMA)",
        formula: "EstimatedRTT = (1-alpha) * EstimatedRTT + alpha * SampleRTT",
        explanation: "Exponentially weighted moving average, typically alpha = 0.125",
        example: "Smooths out RTT variations"
      }
    ],
    practiceProblems: [
      {
        question: "Explain the difference between flow control and congestion control in TCP.",
        solution: "Flow control prevents the sender from overwhelming the receiver's buffer by using the receive window (rwnd). Congestion control prevents the sender from overwhelming the network by using the congestion window (cwnd). The actual window used is min(cwnd, rwnd).",
        hint: "One is about the receiver's capacity, the other about network capacity."
      },
      {
        question: "In TCP, why is fast retransmit triggered by 3 duplicate ACKs instead of just 1?",
        solution: "A single duplicate ACK could be caused by out-of-order delivery rather than loss. Three duplicate ACKs strongly suggest packet loss because the receiver is sending multiple ACKs for the same sequence number, indicating subsequent packets arrived but the expected one didn't.",
        hint: "Think about what causes duplicate ACKs besides loss."
      },
      {
        question: "Compare Go-Back-N and Selective Repeat. When is Selective Repeat more efficient?",
        solution: "Selective Repeat is more efficient when error rate is high and bandwidth-delay product is large. GBN wastes bandwidth retransmitting correctly received packets after a loss. SR only retransmits lost packets but requires more buffer space at receiver.",
        hint: "Consider what happens after a single packet loss in each protocol."
      }
    ],
    images: [
      {
        src: "/images/chapter3-tcp-vs-udp.jpg",
        alt: "TCP vs UDP Comparison",
        caption: "Comprehensive comparison of TCP and UDP protocols"
      }
    ],
    codeExamples: [
      {
        title: "TCP Server with Congestion Control in Go",
        description: "TCP server demonstrating connection handling",
        language: "go",
        code: `package main

import (
	"bufio"
	"fmt"
	"net"
	"time"
)

// TCPConn wraps net.TCPConn with additional info
type TCPConn struct {
	net.Conn
	startTime time.Time
	bytesSent int64
}

func (c *TCPConn) throughput() float64 {
	duration := time.Since(c.startTime).Seconds()
	if duration == 0 {
		return 0
	}
	return float64(c.bytesSent) * 8 / duration / 1000 // Kbps
}

func handleTCPClient(conn net.Conn) {
	defer conn.Close()
	
	tcpConn := &TCPConn{
		Conn:      conn,
		startTime: time.Now(),
	}
	
	fmt.Printf("TCP Client connected from %s\\n", conn.RemoteAddr())
	fmt.Printf("Local address: %s\\n", conn.LocalAddr())
	
	reader := bufio.NewReader(conn)
	for {
		// Set read timeout
		conn.SetReadDeadline(time.Now().Add(30 * time.Second))
		
		line, err := reader.ReadString('\\n')
		if err != nil {
			if netErr, ok := err.(net.Error); ok && netErr.Timeout() {
				fmt.Println("Connection timeout")
			} else {
				fmt.Printf("Client disconnected: %v\\n", err)
			}
			fmt.Printf("Final throughput: %.2f Kbps\\n", tcpConn.throughput())
			return
		}
		
		// Echo back with timestamp
		response := fmt.Sprintf("[%s] Echo: %s", 
			time.Now().Format("15:04:05"), line)
		n, _ := conn.Write([]byte(response))
		tcpConn.bytesSent += int64(n)
	}
}

func main() {
	listener, err := net.Listen("tcp", ":8080")
	if err != nil {
		fmt.Println("Error:", err)
		return
	}
	defer listener.Close()
	
	fmt.Println("TCP Server listening on :8080")
	fmt.Println("Features: Connection-oriented, reliable, flow-controlled")
	
	for {
		conn, err := listener.Accept()
		if err != nil {
			fmt.Println("Accept error:", err)
			continue
		}
		go handleTCPClient(conn)
	}
}`
      },
      {
        title: "UDP Server in Go",
        description: "UDP server showing connectionless communication",
        language: "go",
        code: `package main

import (
	"fmt"
	"net"
	"time"
)

func main() {
	// Create UDP address
	addr, _ := net.ResolveUDPAddr("udp", ":8080")
	
	// Create UDP connection
	conn, err := net.ListenUDP("udp", addr)
	if err != nil {
		fmt.Println("Error:", err)
		return
	}
	defer conn.Close()
	
	fmt.Println("UDP Server listening on :8080")
	fmt.Println("Features: Connectionless, fast, no guarantees")
	
	buffer := make([]byte, 1024)
	
	for {
		// Read from UDP - no connection needed
		n, clientAddr, err := conn.ReadFromUDP(buffer)
		if err != nil {
			fmt.Println("Read error:", err)
			continue
		}
		
		message := string(buffer[:n])
		fmt.Printf("Received from %s: %s\\n", clientAddr, message)
		
		// Send response
		response := fmt.Sprintf("UDP Echo [%s]: %s", 
			time.Now().Format("15:04:05"), message)
		conn.WriteToUDP([]byte(response), clientAddr)
	}
}`
      },
      {
        title: "UDP Client in Go",
        description: "Simple UDP client for testing",
        language: "go",
        code: `package main

import (
	"bufio"
	"fmt"
	"net"
	"os"
	"time"
)

func main() {
	// Resolve server address
	serverAddr, _ := net.ResolveUDPAddr("udp", "localhost:8080")
	
	// Create local address
	localAddr, _ := net.ResolveUDPAddr("udp", ":0")
	
	// Dial UDP (doesn't actually connect)
	conn, err := net.DialUDP("udp", localAddr, serverAddr)
	if err != nil {
		fmt.Println("Error:", err)
		return
	}
	defer conn.Close()
	
	fmt.Println("UDP Client - type messages (quit to exit)")
	
	// Set timeout
	conn.SetReadDeadline(time.Now().Add(5 * time.Second))
	
	reader := bufio.NewReader(os.Stdin)
	for {
		fmt.Print("> ")
		message, _ := reader.ReadString('\\n')
		
		if message == "quit\\n" {
			break
		}
		
		// Send without establishing connection
		start := time.Now()
		conn.Write([]byte(message))
		
		// Receive response
		buffer := make([]byte, 1024)
		n, _, err := conn.ReadFromUDP(buffer)
		if err != nil {
			fmt.Println("Timeout or error:", err)
			continue
		}
		
		rtt := time.Since(start)
		fmt.Printf("[%v] %s\\n", rtt, string(buffer[:n]))
	}
}`
      },
      {
        title: "TCP Connection Pool in Go",
        description: "Managing multiple TCP connections with pooling",
        language: "go",
        code: `package main

import (
	"context"
	"fmt"
	"net"
	"sync"
	"sync/atomic"
	"time"
)

// Pool manages a pool of reusable TCP connections
type Pool struct {
	address     string
	maxSize     int
	connections chan net.Conn
	activeCount int32
	mu          sync.Mutex
}

func NewPool(address string, maxSize int) *Pool {
	return &Pool{
		address:     address,
		maxSize:     maxSize,
		connections: make(chan net.Conn, maxSize),
	}
}

// Get retrieves a connection from the pool or creates a new one
func (p *Pool) Get() (net.Conn, error) {
	select {
	case conn := <-p.connections:
		// Check if connection is still alive
		if tcpConn, ok := conn.(*net.TCPConn); ok {
			tcpConn.SetDeadline(time.Time{})
		}
		return conn, nil
	default:
		// Create new connection
		atomic.AddInt32(&p.activeCount, 1)
		return net.Dial("tcp", p.address)
	}
}

// Put returns a connection to the pool
func (p *Pool) Put(conn net.Conn) {
	if conn == nil {
		return
	}
	
	select {
	case p.connections <- conn:
		// Successfully returned to pool
	default:
		// Pool is full, close connection
		conn.Close()
		atomic.AddInt32(&p.activeCount, -1)
	}
}

// Close closes all connections in the pool
func (p *Pool) Close() {
	close(p.connections)
	for conn := range p.connections {
		conn.Close()
	}
}

// Stats returns pool statistics
func (p *Pool) Stats() (available, active int) {
	return len(p.connections), int(atomic.LoadInt32(&p.activeCount))
}

func main() {
	// Start a test server
	go func() {
		listener, _ := net.Listen("tcp", ":9999")
		for {
			conn, _ := listener.Accept()
			go func(c net.Conn) {
				defer c.Close()
				buf := make([]byte, 1024)
				for {
					n, _ := c.Read(buf)
					if n > 0 {
						c.Write(buf[:n])
					}
				}
			}(conn)
		}
	}()
	
	time.Sleep(100 * time.Millisecond)
	
	// Create connection pool
	pool := NewPool("localhost:9999", 10)
	
	// Simulate concurrent requests
	var wg sync.WaitGroup
	for i := 0; i < 20; i++ {
		wg.Add(1)
		go func(id int) {
			defer wg.Done()
			
			// Get connection from pool
			conn, err := pool.Get()
			if err != nil {
				fmt.Printf("[%d] Error: %v\\n", id, err)
				return
			}
			
			// Use connection
			msg := fmt.Sprintf("Hello from %d", id)
			conn.Write([]byte(msg))
			
			buf := make([]byte, 1024)
			n, _ := conn.Read(buf)
			fmt.Printf("[%d] Sent: %s, Received: %s\\n", id, msg, string(buf[:n]))
			
			// Return to pool
			pool.Put(conn)
		}(i)
	}
	
	wg.Wait()
	
	available, active := pool.Stats()
	fmt.Printf("\\nPool Stats - Available: %d, Active: %d\\n", available, active)
	
	pool.Close()
}`
      },
      {
        title: "TCP RTT Measurement in Go",
        description: "Measuring Round-Trip Time for TCP connections",
        language: "go",
        code: `package main

import (
	"fmt"
	"net"
	"sync"
	"time"
)

// RTTStats tracks round-trip time statistics
type RTTStats struct {
	mu         sync.RWMutex
	samples    []time.Duration
	estimated  time.Duration
	deviation  time.Duration
	alpha      float64 // EWMA factor for estimated RTT
	beta       float64 // EWMA factor for deviation
}

func NewRTTStats() *RTTStats {
	return &RTTStats{
		samples:   make([]time.Duration, 0, 100),
		alpha:     0.125, // Standard TCP alpha
		beta:      0.25,  // Standard TCP beta
		estimated: 0,
		deviation: 0,
	}
}

func (r *RTTStats) AddSample(sample time.Duration) {
	r.mu.Lock()
	defer r.mu.Unlock()
	
	r.samples = append(r.samples, sample)
	
	if r.estimated == 0 {
		// First sample
		r.estimated = sample
		r.deviation = sample / 2
	} else {
		// EWMA update (like TCP)
		r.deviation = time.Duration((1-r.beta)*float64(r.deviation) + 
			r.beta*float64(abs(sample-r.estimated)))
		r.estimated = time.Duration((1-r.alpha)*float64(r.estimated) + 
			r.alpha*float64(sample))
	}
}

func (r *RTTStats) GetTimeout() time.Duration {
	r.mu.RLock()
	defer r.mu.RUnlock()
	// TCP timeout formula: EstimatedRTT + 4 * DevRTT
	return r.estimated + 4*r.deviation
}

func (r *RTTStats) Stats() (estimated, deviation, timeout time.Duration) {
	r.mu.RLock()
	defer r.mu.Unlock()
	return r.estimated, r.deviation, r.estimated + 4*r.deviation
}

func abs(d time.Duration) time.Duration {
	if d < 0 {
		return -d
	}
	return d
}

func measureRTT(conn net.Conn, iterations int) *RTTStats {
	stats := NewRTTStats()
	
	for i := 0; i < iterations; i++ {
		start := time.Now()
		
		// Send ping
		conn.Write([]byte("PING"))
		
		// Wait for pong
		buf := make([]byte, 4)
		conn.Read(buf)
		
		rtt := time.Since(start)
		stats.AddSample(rtt)
		
		est, dev, timeout := stats.Stats()
		fmt.Printf("Sample %d: RTT=%v, Estimated=%v, Deviation=%v, Timeout=%v\\n",
			i+1, rtt, est, dev, timeout)
		
		time.Sleep(100 * time.Millisecond)
	}
	
	return stats
}

func main() {
	// Start echo server
	go func() {
		listener, _ := net.Listen("tcp", ":8888")
		for {
			conn, _ := listener.Accept()
			go func(c net.Conn) {
				defer c.Close()
				buf := make([]byte, 1024)
				for {
					n, _ := c.Read(buf)
					if n > 0 {
						c.Write(buf[:n])
					}
				}
			}(conn)
		}
	}()
	
	time.Sleep(100 * time.Millisecond)
	
	// Connect and measure RTT
	conn, err := net.Dial("tcp", "localhost:8888")
	if err != nil {
		fmt.Println("Error:", err)
		return
	}
	defer conn.Close()
	
	fmt.Println("Measuring RTT...")
	stats := measureRTT(conn, 10)
	
	fmt.Printf("\\nFinal Stats:\n")
	est, dev, timeout := stats.Stats()
	fmt.Printf("Estimated RTT: %v\\n", est)
	fmt.Printf("RTT Deviation: %v\\n", dev)
	fmt.Printf("Timeout: %v (Estimated + 4*Deviation)\\n", timeout)
}`
      },
      {
        title: "Custom Reliable Protocol over UDP in Go",
        description: "Implementing reliability (ACKs, sequence numbers, retransmission) over UDP",
        language: "go",
        code: `package main

import (
	"encoding/binary"
	"fmt"
	"net"
	"sync"
	"time"
)

// Packet structure for reliable UDP
// [SeqNum:4][ACKNum:4][Flags:2][DataLen:2][Data:variable]
type Packet struct {
	SeqNum  uint32
	ACKNum  uint32
	Flags   uint16 // 0x01=SYN, 0x02=ACK, 0x04=FIN
	Data    []byte
}

func (p *Packet) Encode() []byte {
	buf := make([]byte, 12+len(p.Data))
	binary.BigEndian.PutUint32(buf[0:4], p.SeqNum)
	binary.BigEndian.PutUint32(buf[4:8], p.ACKNum)
	binary.BigEndian.PutUint16(buf[8:10], p.Flags)
	binary.BigEndian.PutUint16(buf[10:12], uint16(len(p.Data)))
	copy(buf[12:], p.Data)
	return buf
}

func DecodePacket(data []byte) *Packet {
	if len(data) < 12 {
		return nil
	}
	p := &Packet{
		SeqNum: binary.BigEndian.Uint32(data[0:4]),
		ACKNum: binary.BigEndian.Uint32(data[4:8]),
		Flags:  binary.BigEndian.Uint16(data[8:10]),
	}
	dataLen := binary.BigEndian.Uint16(data[10:12])
	if len(data) >= 12+int(dataLen) {
		p.Data = make([]byte, dataLen)
		copy(p.Data, data[12:12+dataLen])
	}
	return p
}

// ReliableConn implements reliable communication over UDP
type ReliableConn struct {
	conn       *net.UDPConn
	remoteAddr *net.UDPAddr
	
	// Sender state
	nextSeqNum uint32
	unacked    map[uint32]*Packet
	mu         sync.Mutex
	
	// Receiver state
	expectedSeqNum uint32
	
	// Config
	timeout time.Duration
}

func NewReliableConn(conn *net.UDPConn, remoteAddr *net.UDPAddr) *ReliableConn {
	return &ReliableConn{
		conn:       conn,
		remoteAddr: remoteAddr,
		unacked:    make(map[uint32]*Packet),
		timeout:    500 * time.Millisecond,
	}
}

func (rc *ReliableConn) Send(data []byte) error {
	packet := &Packet{
		SeqNum: rc.nextSeqNum,
		Data:   data,
	}
	
	rc.mu.Lock()
	rc.unacked[packet.SeqNum] = packet
	rc.nextSeqNum += uint32(len(data)) + 1
	rc.mu.Unlock()
	
	// Send packet
	_, err := rc.conn.WriteToUDP(packet.Encode(), rc.remoteAddr)
	
	// Start retransmission timer
	go rc.retransmitTimer(packet.SeqNum)
	
	return err
}

func (rc *ReliableConn) retransmitTimer(seqNum uint32) {
	time.Sleep(rc.timeout)
	
	rc.mu.Lock()
	packet, exists := rc.unacked[seqNum]
	rc.mu.Unlock()
	
	if exists {
		fmt.Printf("Retransmitting seq=%d\\n", seqNum)
		rc.conn.WriteToUDP(packet.Encode(), rc.remoteAddr)
		go rc.retransmitTimer(seqNum) // Retry again
	}
}

func (rc *ReliableConn) Receive() (*Packet, error) {
	buf := make([]byte, 65535)
	n, addr, err := rc.conn.ReadFromUDP(buf)
	if err != nil {
		return nil, err
	}
	
	packet := DecodePacket(buf[:n])
	
	// Send ACK
	ack := &Packet{
		ACKNum: packet.SeqNum + uint32(len(packet.Data)),
		Flags:  0x02, // ACK flag
	}
	rc.conn.WriteToUDP(ack.Encode(), addr)
	
	// Process ACK if this is an ACK packet
	if packet.Flags&0x02 != 0 {
		rc.mu.Lock()
		for seq := range rc.unacked {
			if seq < packet.ACKNum {
				delete(rc.unacked, seq)
				fmt.Printf("ACKed seq=%d\\n", seq)
			}
		}
		rc.mu.Unlock()
	}
	
	return packet, nil
}

func main() {
	// Server
	go func() {
		addr, _ := net.ResolveUDPAddr("udp", ":7777")
		conn, _ := net.ListenUDP("udp", addr)
		defer conn.Close()
		
		var clientAddr *net.UDPAddr
		
		for {
			buf := make([]byte, 65535)
			n, addr, _ := conn.ReadFromUDP(buf)
			packet := DecodePacket(buf[:n])
			
			if clientAddr == nil {
				clientAddr = addr
			}
			
			if packet.Flags&0x02 == 0 { // Not an ACK
				fmt.Printf("[Server] Received: seq=%d, data=%s\\n", 
					packet.SeqNum, string(packet.Data))
				
				// Echo back
				response := &Packet{
					SeqNum: 100,
					ACKNum: packet.SeqNum + uint32(len(packet.Data)),
					Flags:  0x02,
					Data:   []byte("Echo: " + string(packet.Data)),
				}
				conn.WriteToUDP(response.Encode(), addr)
			} else {
				fmt.Printf("[Server] Received ACK for seq=%d\\n", packet.ACKNum)
			}
		}
	}()
	
	time.Sleep(100 * time.Millisecond)
	
	// Client
	localAddr, _ := net.ResolveUDPAddr("udp", ":0")
	serverAddr, _ := net.ResolveUDPAddr("udp", "localhost:7777")
	conn, _ := net.DialUDP("udp", localAddr, serverAddr)
	
	rc := NewReliableConn(conn, serverAddr)
	
	// Send messages
	messages := []string{"Hello", "World", "Reliable UDP!"}
	for _, msg := range messages {
		fmt.Printf("[Client] Sending: %s\\n", msg)
		rc.Send([]byte(msg))
		time.Sleep(100 * time.Millisecond)
	}
	
	// Receive responses
	for i := 0; i < len(messages); i++ {
		packet, _ := rc.Receive()
		if packet != nil && len(packet.Data) > 0 {
			fmt.Printf("[Client] Received: %s\\n", string(packet.Data))
		}
	}
	
	time.Sleep(1 * time.Second)
}`
      },
      {
        title: "TCP Socket Options and Tuning in Go",
        description: "Configuring TCP socket options for performance",
        language: "go",
        code: `package main

import (
	"fmt"
	"net"
	"syscall"
	"time"
)

func setSocketOptions(conn net.Conn) error {
	tcpConn, ok := conn.(*net.TCPConn)
	if !ok {
		return fmt.Errorf("not a TCP connection")
	}
	
	// Get underlying file descriptor
	file, err := tcpConn.File()
	if err != nil {
		return err
	}
	defer file.Close()
	
	fd := int(file.Fd())
	
	// TCP_NODELAY - Disable Nagle's algorithm for low latency
	// Useful for interactive applications
	syscall.SetsockoptInt(fd, syscall.IPPROTO_TCP, syscall.TCP_NODELAY, 1)
	
	// TCP_QUICKACK - Disable delayed ACKs
	// Reduces latency for request-response patterns
	syscall.SetsockoptInt(fd, syscall.IPPROTO_TCP, syscall.TCP_QUICKACK, 1)
	
	// SO_KEEPALIVE - Enable keepalive probes
	// Detects dead connections
	syscall.SetsockoptInt(fd, syscall.SOL_SOCKET, syscall.SO_KEEPALIVE, 1)
	
	// TCP_KEEPIDLE - Start keepalive probes after idle time (seconds)
	syscall.SetsockoptInt(fd, syscall.IPPROTO_TCP, syscall.TCP_KEEPIDLE, 60)
	
	// TCP_KEEPINTVL - Interval between keepalive probes (seconds)
	syscall.SetsockoptInt(fd, syscall.IPPROTO_TCP, syscall.TCP_KEEPINTVL, 10)
	
	// TCP_KEEPCNT - Number of keepalive probes before declaring dead
	syscall.SetsockoptInt(fd, syscall.IPPROTO_TCP, syscall.TCP_KEEPCNT, 3)
	
	return nil
}

func printTCPInfo(conn net.Conn) {
	tcpConn, ok := conn.(*net.TCPConn)
	if !ok {
		return
	}
	
	// Get local and remote addresses
	localAddr := tcpConn.LocalAddr()
	remoteAddr := tcpConn.RemoteAddr()
	
	fmt.Printf("TCP Connection Info:\\n")
	fmt.Printf("  Local:  %s\\n", localAddr)
	fmt.Printf("  Remote: %s\\n", remoteAddr)
	
	// Check if connection is alive
	file, err := tcpConn.File()
	if err == nil {
		defer file.Close()
		
		// Get socket options
		fd := int(file.Fd())
		
		var nodelay int
		syscall.GetsockoptInt(fd, syscall.IPPROTO_TCP, syscall.TCP_NODELAY, &nodelay)
		fmt.Printf("  TCP_NODELAY: %d\\n", nodelay)
	}
}

func main() {
	// Start server
	go func() {
		listener, _ := net.Listen("tcp", ":6666")
		for {
			conn, _ := listener.Accept()
			go func(c net.Conn) {
				defer c.Close()
				
				// Set socket options
				setSocketOptions(c)
				printTCPInfo(c)
				
				buf := make([]byte, 1024)
				for {
					n, _ := c.Read(buf)
					if n > 0 {
						c.Write(buf[:n])
					}
				}
			}(conn)
		}
	}()
	
	time.Sleep(100 * time.Millisecond)
	
	// Client
	conn, err := net.Dial("tcp", "localhost:6666")
	if err != nil {
		fmt.Println("Error:", err)
		return
	}
	defer conn.Close()
	
	// Set client socket options
	setSocketOptions(conn)
	printTCPInfo(conn)
	
	// Test connection
	conn.Write([]byte("Hello with tuned TCP!"))
	buf := make([]byte, 1024)
	n, _ := conn.Read(buf)
	fmt.Printf("Response: %s\\n", string(buf[:n]))
}`
      }
    ],
    comparisons: [
      {
        title: "TCP vs UDP - Comprehensive Comparison",
        itemA: "TCP",
        itemB: "UDP",
        points: [
          { aspect: "Connection", itemAValue: "Connection-oriented (3-way handshake)", itemBValue: "Connectionless (no setup)" },
          { aspect: "Reliability", itemAValue: "Guaranteed delivery with ACKs", itemBValue: "Best-effort, no guarantees" },
          { aspect: "Ordering", itemAValue: "In-order delivery guaranteed", itemBValue: "No ordering guarantee" },
          { aspect: "Header Size", itemAValue: "20 bytes (minimum)", itemBValue: "8 bytes" },
          { aspect: "Flow Control", itemAValue: "Yes (rwnd)", itemBValue: "No" },
          { aspect: "Congestion Control", itemAValue: "Yes (cwnd, AIMD)", itemBValue: "No" },
          { aspect: "Retransmission", itemAValue: "Automatic on loss", itemBValue: "Application must handle" },
          { aspect: "Latency", itemAValue: "Higher (connection setup)", itemBValue: "Lower (immediate send)" },
          { aspect: "Overhead", itemAValue: "Higher (ACKs, state)", itemBValue: "Minimal" },
          { aspect: "Use Cases", itemAValue: "HTTP, FTP, Email", itemBValue: "DNS, Streaming, Gaming" },
          { aspect: "API Complexity", itemAValue: "Higher (connection management)", itemBValue: "Simple (send/receive)" },
          { aspect: "State Management", itemAValue: "Maintains connection state", itemBValue: "Stateless" }
        ]
      },
      {
        title: "TCP Flow Control vs Congestion Control",
        itemA: "Flow Control",
        itemB: "Congestion Control",
        points: [
          { aspect: "Purpose", itemAValue: "Prevent sender from overwhelming receiver", itemBValue: "Prevent sender from overwhelming network" },
          { aspect: "Controlled By", itemAValue: "Receiver (advertises rwnd)", itemBValue: "Sender (maintains cwnd)" },
          { aspect: "Window Name", itemAValue: "rwnd (receive window)", itemBValue: "cwnd (congestion window)" },
          { aspect: "Feedback Source", itemAValue: "Receiver's buffer availability", itemBValue: "Network conditions (loss, delay)" },
          { aspect: "Mechanism", itemAValue: "Receiver advertises window in ACKs", itemBValue: "AIMD, slow start, fast recovery" },
          { aspect: "Trigger for Reduction", itemAValue: "Receiver buffer fills up", itemBValue: "Packet loss (timeout or dup ACKs)" },
          { aspect: "Effective Window", itemAValue: "min(rwnd, cwnd)", itemBValue: "min(rwnd, cwnd)" },
          { aspect: "End-to-End", itemAValue: "Yes (only involves two hosts)", itemBValue: "Yes (inferred from network)" },
          { aspect: "OSI Layer Concern", itemAValue: "Transport (receiver buffer)", itemBValue: "Network (router congestion)" }
        ]
      },
      {
        title: "Go-Back-N vs Selective Repeat",
        itemA: "Go-Back-N",
        itemB: "Selective Repeat",
        points: [
          { aspect: "Retransmission", itemAValue: "All unacknowledged packets", itemBValue: "Only lost packets" },
          { aspect: "Receiver Buffer", itemAValue: "1 packet (in-order only)", itemBValue: "N packets (out-of-order OK)" },
          { aspect: "ACK Type", itemAValue: "Cumulative", itemBValue: "Individual" },
          { aspect: "Timers", itemAValue: "One timer (oldest unACKed)", itemBValue: "One timer per packet" },
          { aspect: "Efficiency (high loss)", itemAValue: "Low (wastes bandwidth)", itemBValue: "High" },
          { aspect: "Complexity", itemAValue: "Simpler", itemBValue: "More complex" },
          { aspect: "Window Size Limit", itemAValue: "N (any size)", itemBValue: "<= 1/2 sequence space" }
        ]
      },
      {
        title: "TCP Tahoe vs TCP Reno",
        itemA: "TCP Tahoe",
        itemB: "TCP Reno",
        points: [
          { aspect: "Timeout Response", itemAValue: "cwnd=1, slow start", itemBValue: "cwnd=1, slow start" },
          { aspect: "3 Dup ACKs Response", itemAValue: "cwnd=1, slow start", itemBValue: "cwnd=cwnd/2, fast recovery" },
          { aspect: "Fast Recovery", itemAValue: "Not implemented", itemBValue: "Implemented" },
          { aspect: "Performance (mild loss)", itemAValue: "Slower recovery", itemBValue: "Faster recovery" },
          { aspect: "Complexity", itemAValue: "Simpler", itemBValue: "More complex" }
        ]
      }
    ],
    realWorldApplications: [
      {
        title: "TCP Tuning for High-Throughput Services",
        role: "SRE",
        scenario: "Optimizing data pipeline transferring 100GB+ files between data centers",
        application: "Understanding cwnd, ssthresh, and AIMD helps tune TCP for high BDP (Bandwidth-Delay Product) networks. Increasing initial cwnd and buffer sizes improves throughput on long-fat networks.",
        bestPractices: [
          "Increase net.core.rmem_max and net.core.wmem_max for high BDP",
          "Enable TCP BBR congestion control for better throughput",
          "Tune tcp_slow_start_after_idle to maintain cwnd",
          "Use TCP_NODELAY for latency-sensitive applications",
          "Monitor retransmission rates (should be <0.1%)"
        ],
        tools: ["ss", "tc", "sysctl", "iperf3", "tcpping", "Wireshark"]
      },
      {
        title: "UDP for Real-Time Gaming and Streaming",
        role: "Backend Engineer",
        scenario: "Building low-latency game server requiring <50ms response time",
        application: "UDP eliminates TCP handshake and head-of-line blocking. Custom reliability layer retransmits only critical packets. Understanding trade-offs helps design optimal protocol.",
        bestPractices: [
          "Implement custom sequence numbers and ACKs for critical data",
          "Use forward error correction (FEC) for packet loss recovery",
          "Implement rate limiting to prevent congestion collapse",
          "Monitor packet loss and jitter continuously",
          "Consider QUIC for HTTP/3 benefits with UDP"
        ],
        tools: ["gnet", "kcp-go", "quic-go", "WebRTC", "FFmpeg"]
      },
      {
        title: "Connection Pool Management",
        role: "Backend Engineer",
        scenario: "Microservice architecture with 100+ services each handling 10K RPS",
        application: "Understanding TCP connection lifecycle (3-way handshake, TIME_WAIT) helps size connection pools. Too many connections cause port exhaustion; too few cause latency.",
        bestPractices: [
          "Size pools based on (max_concurrency * avg_request_time)",
          "Set appropriate idle timeout (30-60s typically)",
          "Enable TCP keepalive to detect dead connections",
          "Reuse connections with HTTP keep-alive",
          "Monitor pool utilization and queue depth"
        ],
        tools: ["HikariCP", "pgbouncer", "Envoy", "HAProxy", "Prometheus"]
      },
      {
        title: "Network Congestion Detection",
        role: "SRE",
        scenario: "Diagnosing intermittent latency spikes in production",
        application: "TCP congestion control behavior (slow start, congestion avoidance) manifests as latency under load. Retransmissions and duplicate ACKs indicate network issues.",
        bestPractices: [
          "Monitor TCP retransmission rate by connection",
          "Track cwnd size changes during incidents",
          "Use eBPF to analyze TCP state transitions",
          "Set up alerts for high RTT variance",
          "Correlate cwnd drops with application latency"
        ],
        tools: ["tcpdump", "tcprstat", "eBPF/bcc", "Grafana", "Datadog"]
      }
    ],
    comparisonDiagrams: [
      {
        id: "comp3-1",
        title: "TCP vs UDP - Protocol Behavior",
        mermaidCode: `graph LR
    subgraph TCP["🔒 TCP - Reliable"]
        TC1[App Data] -->|Segment| TC2[Seq=100]
        TC2 --> TC3[ACK=150]
        TC3 --> TC4[In-Order Delivery]
        
        TC5[Loss Detected] -->|Fast Retransmit| TC6[Resend]
        TC7[Congestion] -->|cwnd/2| TC8[Slow Start]
        
        style TC1 fill:#e1f5ff
        style TC4 fill:#d4edda
        style TC8 fill:#fff3cd
    end
    
    subgraph UDP["⚡ UDP - Fast"]
        UD1[App Data] -->|Datagram| UD2[Send Immediately]
        UD2 --> UD3[No ACK Needed]
        UD3 --> UD4[Best-Effort]
        
        UD5[Packet Loss] -->|Ignored| UD6[Continue]
        
        style UD1 fill:#ffe1e1
        style UD4 fill:#f8d7da
        style UD6 fill:#d1ecf1
    end
    
    Note["TCP: Reliable, ordered, congestion-controlled<br/>UDP: Fast, unordered, no guarantees"]`
      },
      {
        id: "comp3-2",
        title: "TCP Congestion Control States",
        mermaidCode: `stateDiagram-v2
    [*] --> SlowStart: Connection Start
    
    SlowStart: Slow Start
    SlowStart: cwnd doubles each RTT
    SlowStart --> CongestionAvoidance: cwnd >= ssthresh
    SlowStart --> SlowStart: Timeout<br/>ssthresh=cwnd/2<br/>cwnd=1
    
    CongestionAvoidance: Congestion Avoidance
    CongestionAvoidance: cwnd += 1 per RTT
    CongestionAvoidance --> FastRecovery: 3 Dup ACKs
    CongestionAvoidance --> SlowStart: Timeout
    
    FastRecovery: Fast Recovery
    FastRecovery: ssthresh=cwnd/2<br/>cwnd=ssthresh+3
    FastRecovery --> CongestionAvoidance: New ACK
    FastRecovery --> SlowStart: Timeout
    
    note right of SlowStart
        Exponential growth
        Initial: cwnd=1 MSS
    end note
    
    note right of CongestionAvoidance
        Linear growth
        Additive Increase
    end note` 
      },
      {
        id: "comp3-3",
        title: "TCP Flow Control vs Congestion Control - Visual",
        mermaidCode: `graph TB
    subgraph Flow_Control["🎯 Flow Control (Receiver-Side)"]
        FC_S[Sender] -->|Send Data| FC_R[Receiver]
        FC_R -->|ACK + rwnd=1000| FC_S
        
        subgraph FC_Buffer["Receiver Buffer"]
            FB1[Free: 1000 bytes]
            FB2[Occupied: 0 bytes]
        end
        
        FC_R -.->|Check buffer| FC_Buffer
        
        note1["rwnd = Available buffer space<br/>Prevents receiver overflow"]
        
        style FC_S fill:#e1f5ff
        style FC_R fill:#d4edda
        style FC_Buffer fill:#fff3cd
    end
    
    subgraph Congestion_Control["🌐 Congestion Control (Network-Side)"]
        CC_S[Sender] -->|Send Data| CC_N[Network]
        CC_N -->|ACKs| CC_S
        
        subgraph CC_State["Sender State"]
            CS1[cwnd: Current window]
            CS2[ssthresh: Threshold]
            CS3[State: Slow Start/CA/FR]
        end
        
        CC_S -.->|Adjust based on| CC_State
        CC_N -.->|Loss/Delay signals| CC_S
        
        note2["cwnd = Estimated capacity<br/>Prevents network overload"]
        
        style CC_S fill:#ffe1e1
        style CC_N fill:#fff3e0
        style CC_State fill:#e8f5e9
    end
    
    subgraph Effective_Window["📊 Effective Send Window"]
        EW["Send Window = min(rwnd, cwnd)"]
    end
    
    Flow_Control -.-> Effective_Window
    Congestion_Control -.-> Effective_Window`
      },
      {
        id: "comp3-4",
        title: "Go-Back-N vs Selective Repeat",
        mermaidCode: `sequenceDiagram
    participant S as Sender
    participant R as Receiver
    participant L as Lost Packet
    
    rect rgb(255, 235, 238)
        Note over S,R: Go-Back-N (Retransmit ALL)
        S->>R: pkt0
        S->>R: pkt1
        S->>L: pkt2 LOST
        S->>R: pkt3
        R-->>S: ACK0
        R-->>S: ACK1
        R-->>S: ACK1 (dup)
        Note over S: Timeout!
        S->>R: pkt2
        S->>R: pkt3
        S->>R: pkt4
    end
    
    rect rgb(232, 245, 233)
        Note over S,R: Selective Repeat (Retransmit ONE)
        S->>R: pkt0
        S->>R: pkt1
        S->>L: pkt2 LOST
        S->>R: pkt3
        R-->>S: ACK0
        R-->>S: ACK1
        R-->>S: ACK3 (buffered)
        Note over S: pkt2 Timeout!
        S->>R: pkt2 ONLY
    end` 
      }
    ]
  },
  {
    id: 4,
    title: "Network Layer: Data Plane",
    subtitle: "Forwarding and Routing",
    overview: "The network layer's data plane is responsible for forwarding packets from router input to appropriate output. We examine how routers forward packets, the IPv4 and IPv6 protocols, and generalized forwarding with SDN.",
    sections: [
      {
        id: "4.1",
        title: "Overview of Network Layer",
        content: "The network layer has two key functions: forwarding (data plane) and routing (control plane).",
        subsections: [
          {
            title: "Data Plane vs Control Plane",
            bullets: [
              "Data Plane: Local, per-router forwarding decisions",
              "Control Plane: Network-wide, determines end-to-end paths",
              "Forwarding: Move packets from input to output link",
              "Routing: Determine route from source to destination",
              "Forwarding table: Lookup destination to determine output link"
            ],
            important: "Forwarding is the local action of moving packets. Routing is the global process of determining paths."
          },
          {
            title: "Router Architecture",
            bullets: [
              "Input ports: Physical/link layer processing, lookup",
              "Switching fabric: Connects input to output ports",
              "Output ports: Buffering, link layer processing",
              "Routing processor: Control plane functions",
              "Line cards: Combine input/output with forwarding decision"
            ]
          }
        ]
      },
      {
        id: "4.2",
        title: "What's Inside a Router",
        content: "Routers have input ports, switching fabric, output ports, and routing processors.",
        subsections: [
          {
            title: "Input Port Processing",
            bullets: [
              "Physical layer: Bit-level reception",
              "Link layer: Protocol processing, error checking",
              "Lookup: Determine output port using forwarding table",
              "Destination-based forwarding: Longest prefix matching",
              "Goal: Complete lookup at line speed (wire speed)"
            ]
          },
          {
            title: "Switching Fabric",
            bullets: [
              "Memory-based: Traditional, packet copied to memory",
              "Bus-based: Shared bus, only one packet at a time",
              "Crossbar: Parallel connections, non-blocking",
              "Switching capacity: Rate at which packets moved",
              "Goal: Switching capacity >= sum of input line rates"
            ]
          },
          {
            title: "Output Port Processing",
            bullets: [
              "Buffering: Store packets waiting for transmission",
              "Scheduling: Choose which packet to send next",
              "Drop policy: Which packets to drop when buffer full",
              "Active Queue Management (AQM): Early drop signals",
              "Random Early Detection (RED): Drop before full"
            ]
          },
          {
            title: "Buffer Sizing",
            bullets: [
              "Rule of thumb: RTT * C / sqrt(N)",
              "RTT = average round-trip time",
              "C = link capacity",
              "N = number of flows",
              "Modern practice: Smaller buffers acceptable"
            ]
          }
        ]
      },
      {
        id: "4.3",
        title: "The Internet Protocol (IP): IPv4",
        content: "IPv4 is the most widely deployed network layer protocol, providing best-effort delivery.",
        subsections: [
          {
            title: "IPv4 Datagram Format",
            bullets: [
              "Version (4 bits): IP protocol version (4 for IPv4)",
              "Header length (4 bits): Typically 5 (20 bytes)",
              "Type of Service (8 bits): QoS indication",
              "Datagram length (16 bits): Total bytes (max 65535)",
              "Identifier, flags, fragment offset: For fragmentation",
              "TTL (8 bits): Hop limit, decremented at each router",
              "Protocol (8 bits): Transport protocol (TCP=6, UDP=17)",
              "Header checksum (16 bits): Error detection",
              "Source/Destination IP addresses (32 bits each)"
            ],
            important: "IPv4 header is typically 20 bytes. Total datagram size limited to 65,535 bytes."
          },
          {
            title: "IP Fragmentation",
            bullets: [
              "Different links have different MTU (Max Transfer Unit)",
              "Large IP datagrams fragmented to fit MTU",
              "Identification: Same for all fragments of original",
              "Fragment offset: Position in original datagram",
              "More fragments flag: Set on all but last fragment",
              "Reassembly at destination, not intermediate routers"
            ]
          },
          {
            title: "IPv4 Addressing",
            bullets: [
              "32-bit address, written in dotted decimal",
              "Interface: Boundary between host/router and link",
              "Each interface has unique IP address",
              "Subnet: Network portion same, host portion varies",
              "CIDR: a.b.c.d/x where x = prefix length",
              "Subnet mask: /24 = 255.255.255.0"
            ]
          },
          {
            title: "DHCP",
            bullets: [
              "Dynamic Host Configuration Protocol",
              "Automatically assigns IP addresses",
              "DHCP discover, offer, request, acknowledge",
              "Provides: IP address, subnet mask, default gateway, DNS",
              "Lease time: How long address is valid"
            ]
          },
          {
            title: "NAT",
            bullets: [
              "Network Address Translation",
              "Private addresses inside, single public address outside",
              "Private ranges: 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16",
              "NAT translation table: Maps internal to external",
              "Port numbers distinguish different connections",
              "Controversial: Routers should only process layer 3"
            ]
          }
        ]
      },
      {
        id: "4.4",
        title: "IPv6",
        content: "IPv6 was created to address IPv4 address exhaustion and improve the protocol.",
        subsections: [
          {
            title: "IPv6 Datagram Format",
            bullets: [
              "Fixed 40-byte header (simpler than IPv4)",
              "128-bit addresses (340 undecillion addresses)",
              "Version (4 bits): Value 6",
              "Traffic class (8 bits): QoS similar to TOS",
              "Flow label (20 bits): Identify packet flows",
              "Payload length (16 bits): Data after header",
              "Next header (8 bits): Protocol or extension header",
              "Hop limit (8 bits): Same as TTL",
              "No fragmentation at routers (only at source)",
              "No header checksum (faster processing)"
            ],
            important: "IPv6 addresses are 4x longer than IPv4, providing approximately 3.4 x 10^38 addresses."
          },
          {
            title: "IPv6 Addressing",
            bullets: [
              "Written as 8 groups of 4 hex digits",
              "Can omit leading zeros in each group",
              "Can replace consecutive all-zero groups with ::",
              "Can only use :: once per address",
              "Example: 2001:0db8:85a3::8a2e:0370:7334"
            ]
          },
          {
            title: "Transition from IPv4 to IPv6",
            bullets: [
              "Not all routers can be upgraded simultaneously",
              "Tunneling: IPv6 datagram carried as payload in IPv4",
              "Dual-stack: Routers run both IPv4 and IPv6"
            ]
          }
        ]
      },
      {
        id: "4.5",
        title: "Generalized Forwarding and SDN",
        content: "Software-Defined Networking separates the control plane from the data plane.",
        subsections: [
          {
            title: "Match-Action Forwarding",
            bullets: [
              "Match: Pattern in packet header fields",
              "Action: Forward, drop, modify, send to controller",
              "Flow table: Set of match-action rules",
              "OpenFlow: Standard for SDN communication",
              "Matches on: IP/MAC addresses, ports, VLAN, etc."
            ]
          },
          {
            title: "SDN Architecture",
            bullets: [
              "Data plane: Simple forwarding switches",
              "Control plane: Centralized SDN controller",
              "Application plane: Network management apps",
              "Southbound API: Controller to switch (OpenFlow)",
              "Northbound API: Apps to controller"
            ]
          }
        ]
      }
    ],
    diagrams: [
      {
        id: "fig4-1",
        title: "Router Architecture",
        description: "Components of a router",
        mermaidCode: `graph TB
    subgraph Input_Ports
        IP1[Input Port 1]
        IP2[Input Port 2]
        IP3[Input Port N]
    end
    
    subgraph Switching_Fabric
        SF[Crossbar Switch]
    end
    
    subgraph Output_Ports
        OP1[Output Port 1]
        OP2[Output Port 2]
        OP3[Output Port N]
    end
    
    subgraph Routing_Processor
        RP[Routing Processor]
        FT[Forwarding Table]
    end
    
    IP1 --> SF
    IP2 --> SF
    IP3 --> SF
    SF --> OP1
    SF --> OP2
    SF --> OP3
    RP --> FT
    FT -.-> IP1
    FT -.-> IP2
    FT -.-> IP3`
      },
      {
        id: "fig4-2",
        title: "IPv4 Datagram Format",
        description: "IPv4 header fields",
        mermaidCode: `graph LR
    subgraph IPv4_Header
        V[Version 4 bits]
        HL[Header Length 4 bits]
        TOS[Type of Service 8 bits]
        TL[Total Length 16 bits]
        ID[Identifier 16 bits]
        F[Flags 3 bits]
        FO[Fragment Offset 13 bits]
        TTL[TTL 8 bits]
        P[Protocol 8 bits]
        HC[Header Checksum 16 bits]
        SA[Source IP 32 bits]
        DA[Dest IP 32 bits]
        OPT[Options variable]
        DATA[Data variable]
    end
    
    V --> HL --> TOS --> TL --> ID --> F --> FO --> TTL --> P --> HC --> SA --> DA --> OPT --> DATA`
      },
      {
        id: "fig4-3",
        title: "IP Fragmentation",
        description: "Fragmenting a large datagram",
        mermaidCode: `graph TB
    subgraph Original
        O[Datagram 4000 bytes MTU=1500]
    end
    
    subgraph Fragments
        F1[Fragment 1 1480 bytes Offset=0 MF=1]
        F2[Fragment 2 1480 bytes Offset=185 MF=1]
        F3[Fragment 3 1040 bytes Offset=370 MF=0]
    end
    
    O --> F1
    O --> F2
    O --> F3
    
    Note["Each fragment has same ID - MF=More Fragments flag"]`
      },
      {
        id: "fig4-4",
        title: "NAT Operation",
        description: "Network Address Translation",
        mermaidCode: `graph LR
    subgraph Private_Network
        H1[Host 10.0.0.2:3345]
        H2[Host 10.0.0.3:5123]
    end
    
    subgraph NAT_Router
        NAT[NAT Table]
    end
    
    subgraph Internet
        S1[Server 128.119.40.186:80]
    end
    
    H1 -->|10.0.0.2:3345 to 128.119.40.186:80| NAT
    NAT -->|138.76.29.7:5001 to 128.119.40.186:80| S1
    S1 -->|to 138.76.29.7:5001| NAT
    NAT -->|to 10.0.0.2:3345| H1
    
    Note["NAT Table maps 10.0.0.2:3345 to 138.76.29.7:5001"]`
      },
      {
        id: "fig4-5",
        title: "SDN Architecture",
        description: "Software-Defined Networking layers",
        mermaidCode: `graph TB
    subgraph Application_Layer
        APP1[Load Balancer]
        APP2[Firewall]
        APP3[Traffic Engineering]
    end
    
    subgraph Control_Layer
        CTRL[SDN Controller]
    end
    
    subgraph Infrastructure_Layer
        SW1[OpenFlow Switch 1]
        SW2[OpenFlow Switch 2]
        SW3[OpenFlow Switch 3]
    end
    
    APP1 -.Northbound API.-> CTRL
    APP2 -.Northbound API.-> CTRL
    APP3 -.Northbound API.-> CTRL
    CTRL -.Southbound API.-> SW1
    CTRL -.Southbound API.-> SW2
    CTRL -.Southbound API.-> SW3`
      },
      {
        id: "fig4-6",
        title: "IPv6 Datagram Format",
        description: "Structure of an IPv6 datagram",
        mermaidCode: `graph LR
    subgraph IPv6_Header["IPv6 Header (40 bytes fixed)"]
        V6[Version 4 bits]
        TC[Traffic Class 8 bits]
        FL[Flow Label 20 bits]
        PL[Payload Length 16 bits]
        NH[Next Header 8 bits]
        HL[Hop Limit 8 bits]
        SA6[Source Address 128 bits]
        DA6[Dest Address 128 bits]
    end
    
    subgraph IPv6_Payload["Payload (up to 65535 bytes)"]
        EXT[Extension Headers optional]
        DATA6[Upper Layer Data]
    end
    
    V6 --> TC --> FL --> PL --> NH --> HL --> SA6 --> DA6 --> EXT --> DATA6
    
    style V6 fill:#d4edda
    style SA6 fill:#e1f5ff
    style DA6 fill:#e1f5ff`
      },
      {
        id: "fig4-7",
        title: "Packet Forwarding in Router",
        description: "How a packet moves through router components",
        mermaidCode: `graph LR
    subgraph Input["📥 Input Port"]
        I1[Receive Frame]
        I2[Extract Datagram]
        I3[Lookup Destination in FIB]
    end
    
    subgraph Switch["🔄 Switching Fabric"]
        S1[Transfer to Output Port]
    end
    
    subgraph Output["📤 Output Port"]
        O1[Queue Packet]
        O2[Schedule Transmission]
        O3[Create Frame]
        O4[Transmit]
    end
    
    I1 --> I2 --> I3 --> S1 --> O1 --> O2 --> O3 --> O4
    
    style I3 fill:#fff3cd
    style O2 fill:#e8f5e9`
      },
      {
        id: "fig4-8",
        title: "Datagram Encapsulation Journey",
        description: "How a datagram is encapsulated at each hop",
        mermaidCode: `graph TB
    subgraph Host_A["🖥️ Host A"]
        HA1[Transport Segment]
        HA2[Add IP Header<br/>Datagram]
        HA3[Add Ethernet Header<br/>Frame]
    end
    
    subgraph Router["🔄 Router"]
        R1[Receive Frame]
        R2[Extract Datagram]
        R3[Lookup & Forward]
        R4[New Frame<br/>Different Link]
    end
    
    subgraph Host_B["🖥️ Host B"]
        HB1[Receive Frame]
        HB2[Extract Datagram]
        HB3[Deliver to Transport]
    end
    
    HA1 --> HA2 --> HA3
    HA3 -.->|Link 1| R1
    R1 --> R2 --> R3 --> R4
    R4 -.->|Link 2| HB1
    HB1 --> HB2 --> HB3
    
    style HA2 fill:#fff3e0
    style R2 fill:#fff3e0
    style HB2 fill:#fff3e0`
      }
    ],
    keyConcepts: [
      { term: "Forwarding", definition: "Local action of moving packet from input to output link based on forwarding table" },
      { term: "Routing", definition: "Network-wide process of determining end-to-end paths" },
      { term: "Forwarding Table", definition: "Table that maps destination addresses to output ports" },
      { term: "Longest Prefix Matching", definition: "Finding the forwarding table entry with longest matching prefix" },
      { term: "MTU", definition: "Maximum Transmission Unit - largest frame size a link can carry" },
      { term: "Fragmentation", definition: "Breaking large IP datagrams into smaller pieces to fit MTU" },
      { term: "TTL", definition: "Time To Live - hop limit decremented at each router" },
      { term: "DHCP", definition: "Dynamic Host Configuration Protocol - automatic IP address assignment" },
      { term: "NAT", definition: "Network Address Translation - maps private to public addresses" },
      { term: "CIDR", definition: "Classless Inter-Domain Routing - a.b.c.d/x notation" },
      { term: "IPv6", definition: "Internet Protocol version 6 with 128-bit addresses" },
      { term: "SDN", definition: "Software-Defined Networking - separates control and data planes" },
      { term: "OpenFlow", definition: "Protocol for SDN controller to communicate with switches" },
      { term: "Match-Action", definition: "Generalized forwarding based on matching header fields and taking actions" }
    ],
    formulas: [
      {
        name: "Buffer Sizing",
        formula: "B = RTT * C / sqrt(N)",
        explanation: "RTT = round-trip time, C = link capacity, N = number of flows",
        example: "For RTT=100ms, C=1Gbps, N=100: B = 0.1 * 10^9 / 10 = 10 MB"
      },
      {
        name: "IPv4 Header Checksum",
        formula: "Sum of all 16-bit words in header, wrap around carry, 1's complement",
        explanation: "Error detection for IP header only"
      }
    ],
    practiceProblems: [
      {
        question: "A router has forwarding table: 128.119.40.0/26 -> Interface 0, 128.119.40.64/26 -> Interface 1, 128.119.40.128/25 -> Interface 2, default -> Interface 3. Where does a packet destined to 128.119.40.130 go?",
        solution: "128.119.40.130 in binary: 10000000.01110111.00101000.10000010. Longest matching prefix is 128.119.40.128/25 (first 25 bits match). Answer: Interface 2.",
        hint: "Convert to binary and find the longest matching prefix."
      },
      {
        question: "Explain why IPv6 eliminated the header checksum.",
        solution: "IPv6 eliminated header checksum because: (1) Link layers already have error detection, (2) Transport layers (TCP/UDP) have checksums, (3) Eliminating it speeds up router processing, (4) IP was designed for speed, reliability is handled by higher layers.",
        hint: "Think about redundancy with other layers and router performance."
      },
      {
        question: "How does NAT allow multiple hosts to share a single public IP address?",
        solution: "NAT uses port numbers to distinguish connections. The NAT table maps (private IP, private port) to (public IP, unique public port). When responses arrive, NAT looks up the destination port to find the corresponding private address and forwards the packet.",
        hint: "Consider how port numbers can multiplex connections."
      }
    ],
    images: [
      {
        src: "/images/chapter4-router.jpg",
        alt: "Router Architecture",
        caption: "Router components and packet forwarding process"
      }
    ],
    codeExamples: [
      {
        title: "IP Address Manipulation in Go",
        description: "Working with IP addresses and CIDR notation",
        language: "go",
        code: `package main

import (
	"fmt"
	"net"
)

func main() {
	// Parse IP address
	ip := net.ParseIP("192.168.1.1")
	fmt.Printf("IP: %v\\n", ip)
	
	// Parse CIDR
	ipNet, _ := net.ParseCIDR("192.168.1.0/24")
	fmt.Printf("Network: %s\\n", ipNet.IP)
	fmt.Printf("Mask: %s\\n", net.IP(ipNet.Mask))
	
	// Check if IP is in network
	testIP := net.ParseIP("192.168.1.100")
	contains := ipNet.Contains(testIP)
	fmt.Printf("%s in %s: %v\\n", testIP, ipNet, contains)
	
	// Longest prefix match simulation
	routes := []struct {
		prefix *net.IPNet
		iface  string
	}{
		{mustParseCIDR("10.0.0.0/8"), "eth0"},
		{mustParseCIDR("10.0.1.0/24"), "eth1"},
		{mustParseCIDR("0.0.0.0/0"), "default"},
	}
	
	dest := net.ParseIP("10.0.1.50")
	matchedIface := longestPrefixMatch(dest, routes)
	fmt.Printf("Destination %s -> Interface: %s\\n", dest, matchedIface)
}

func mustParseCIDR(s string) *net.IPNet {
	_, ipNet, _ := net.ParseCIDR(s)
	return ipNet
}

func longestPrefixMatch(dest net.IP, routes []struct {
	prefix *net.IPNet
	iface  string
}) string {
	var bestMatch string
	maxOnes := -1
	
	for _, route := range routes {
		if route.prefix.Contains(dest) {
			ones, _ := route.prefix.Mask.Size()
			if ones > maxOnes {
				maxOnes = ones
				bestMatch = route.iface
			}
		}
	}
	return bestMatch
}`
      },
      {
        title: "IPv4 vs IPv6 Address Handling in Go",
        description: "Comparing IPv4 and IPv6 address operations",
        language: "go",
        code: `package main

import (
	"fmt"
	"net"
)

func main() {
	// IPv4
	ipv4 := net.ParseIP("192.168.1.1")
	fmt.Println("=== IPv4 ===")
	fmt.Printf("Address: %s\\n", ipv4)
	fmt.Printf("Length: %d bits\\n", len(ipv4)*8)
	fmt.Printf("Is IPv4: %v\\n", ipv4.To4() != nil)
	
	// IPv6
	ipv6 := net.ParseIP("2001:0db8:85a3::8a2e:0370:7334")
	fmt.Println("\\n=== IPv6 ===")
	fmt.Printf("Address: %s\\n", ipv6)
	fmt.Printf("Length: %d bits\\n", len(ipv6)*8)
	fmt.Printf("Is IPv6: %v\\n", ipv6.To16() != nil && ipv4.To4() == nil)
	
	// IPv6 shortened form
	shortIPv6 := net.ParseIP("2001:db8::1")
	fmt.Printf("Shortened: %s\\n", shortIPv6)
	
	// Check if addresses are equal
	ip1 := net.ParseIP("192.168.1.1")
	ip2 := net.ParseIP("192.168.1.1")
	fmt.Printf("\\nIPs equal: %v\\n", ip1.Equal(ip2))
	
	// Mask operations
	_, ipNet, _ := net.ParseCIDR("192.168.1.0/24")
	mask := ipNet.Mask
	ones, bits := mask.Size()
	fmt.Printf("\\nMask: /%d (total bits: %d)\\n", ones, bits)
}`
      },
      {
        title: "IP Packet Crafting in Go",
        description: "Building custom IP packets using raw sockets",
        language: "go",
        code: `package main

import (
	"encoding/binary"
	"fmt"
	"net"
)

// IPv4Header represents an IPv4 header
type IPv4Header struct {
	Version        uint8
	IHL            uint8
	TOS            uint8
	TotalLength    uint16
	ID             uint16
	Flags          uint8
	FragmentOffset uint16
	TTL            uint8
	Protocol       uint8
	Checksum       uint16
	SrcIP          net.IP
	DstIP          net.IP
}

func (h *IPv4Header) Marshal() []byte {
	headerLen := int(h.IHL) * 4
	buf := make([]byte, headerLen)
	
	// Version and IHL
	buf[0] = (h.Version << 4) | h.IHL
	buf[1] = h.TOS
	
	// Total length
	binary.BigEndian.PutUint16(buf[2:4], h.TotalLength)
	
	// ID
	binary.BigEndian.PutUint16(buf[4:6], h.ID)
	
	// Flags and fragment offset
	binary.BigEndian.PutUint16(buf[6:8], (uint16(h.Flags)<<13)|h.FragmentOffset)
	
	// TTL and Protocol
	buf[8] = h.TTL
	buf[9] = h.Protocol
	
	// Checksum (initially 0, calculated later)
	binary.BigEndian.PutUint16(buf[10:12], 0)
	
	// Source and Destination IP
	copy(buf[12:16], h.SrcIP.To4())
	copy(buf[16:20], h.DstIP.To4())
	
	// Calculate checksum
	checksum := calculateChecksum(buf)
	binary.BigEndian.PutUint16(buf[10:12], checksum)
	
	return buf
}

func calculateChecksum(data []byte) uint16 {
	var sum uint32
	for i := 0; i < len(data)-1; i += 2 {
		sum += uint32(data[i])<<8 + uint32(data[i+1])
	}
	if len(data)%2 == 1 {
		sum += uint32(data[len(data)-1]) << 8
	}
	for (sum >> 16) > 0 {
		sum = (sum & 0xFFFF) + (sum >> 16)
	}
	return uint16(^sum)
}

func main() {
	// Create an IPv4 header
	header := &IPv4Header{
		Version:        4,
		IHL:            5, // 20 bytes header
		TOS:            0,
		TotalLength:    40, // 20 header + 20 payload
		ID:             12345,
		Flags:          0x2, // Don't fragment
		FragmentOffset: 0,
		TTL:            64,
		Protocol:       6, // TCP
		SrcIP:          net.ParseIP("192.168.1.100"),
		DstIP:          net.ParseIP("8.8.8.8"),
	}
	
	// Marshal header
	headerBytes := header.Marshal()
	
	fmt.Println("IPv4 Header (20 bytes):")
	fmt.Printf("  Version: %d\\n", header.Version)
	fmt.Printf("  IHL: %d (header length: %d bytes)\\n", header.IHL, header.IHL*4)
	fmt.Printf("  TOS: %d\\n", header.TOS)
	fmt.Printf("  Total Length: %d\\n", header.TotalLength)
	fmt.Printf("  ID: %d\\n", header.ID)
	fmt.Printf("  Flags: 0x%x\\n", header.Flags)
	fmt.Printf("  Fragment Offset: %d\\n", header.FragmentOffset)
	fmt.Printf("  TTL: %d\\n", header.TTL)
	fmt.Printf("  Protocol: %d (TCP)\\n", header.Protocol)
	fmt.Printf("  Checksum: 0x%04x\\n", binary.BigEndian.Uint16(headerBytes[10:12]))
	fmt.Printf("  Source IP: %s\\n", header.SrcIP)
	fmt.Printf("  Dest IP: %s\\n", header.DstIP)
	
	fmt.Println("\\nRaw Header (hex):")
	for i, b := range headerBytes {
		if i%4 == 0 {
			fmt.Printf("\\n  %02d: ", i)
		}
		fmt.Printf("%02x ", b)
	}
	fmt.Println()
	
	// Verify checksum
	calculatedChecksum := calculateChecksum(headerBytes)
	fmt.Printf("\\nChecksum verification: 0x%04x (should be 0x0000 if valid)\\n", calculatedChecksum)
}`
      },
      {
        title: "NAT Table Simulation in Go",
        description: "Simulating Network Address Translation",
        language: "go",
        code: `package main

import (
	"fmt"
	"net"
	"sync"
	"time"
)

// NATEntry represents a NAT table entry
type NATEntry struct {
	PrivateIP   net.IP
	PrivatePort uint16
	PublicIP    net.IP
	PublicPort  uint16
	Protocol    string
	CreatedAt   time.Time
	LastUsed    time.Time
}

// NAT simulates a Network Address Translation table
type NAT struct {
	publicIP net.IP
	nextPort uint16
	table    map[string]*NATEntry // key: "publicIP:publicPort"
	reverse  map[string]*NATEntry // key: "privateIP:privatePort"
	mu       sync.RWMutex
}

func NewNAT(publicIP string) *NAT {
	return &NAT{
		publicIP: net.ParseIP(publicIP),
		nextPort: 10000,
		table:    make(map[string]*NATEntry),
		reverse:  make(map[string]*NATEntry),
	}
}

func (n *NAT) AllocateMapping(privateIP net.IP, privatePort uint16, protocol string) *NATEntry {
	n.mu.Lock()
	defer n.mu.Unlock()
	
	// Check if mapping already exists
	reverseKey := fmt.Sprintf("%s:%d", privateIP, privatePort)
	if entry, exists := n.reverse[reverseKey]; exists {
		entry.LastUsed = time.Now()
		return entry
	}
	
	// Allocate new public port
	publicPort := n.nextPort
	n.nextPort++
	
	entry := &NATEntry{
		PrivateIP:   privateIP,
		PrivatePort: privatePort,
		PublicIP:    n.publicIP,
		PublicPort:  publicPort,
		Protocol:    protocol,
		CreatedAt:   time.Now(),
		LastUsed:    time.Now(),
	}
	
	// Store in both directions
	publicKey := fmt.Sprintf("%s:%d", n.publicIP, publicPort)
	n.table[publicKey] = entry
	n.reverse[reverseKey] = entry
	
	return entry
}

func (n *NAT) LookupByPublic(publicIP net.IP, publicPort uint16) *NATEntry {
	n.mu.RLock()
	defer n.mu.RUnlock()
	
	key := fmt.Sprintf("%s:%d", publicIP, publicPort)
	entry, exists := n.table[key]
	if exists {
		entry.LastUsed = time.Now()
	}
	return entry
}

func (n *NAT) LookupByPrivate(privateIP net.IP, privatePort uint16) *NATEntry {
	n.mu.RLock()
	defer n.mu.RUnlock()
	
	key := fmt.Sprintf("%s:%d", privateIP, privatePort)
	return n.reverse[key]
}

func (n *NAT) PrintTable() {
	n.mu.RLock()
	defer n.mu.RUnlock()
	
	fmt.Println("\\n=== NAT Translation Table ===")
	fmt.Printf("%-20s %-10s %-20s %-10s\\n", "Private Address", "Protocol", "Public Address", "Age")
	fmt.Println(string(make([]byte, 70)))
	
	for _, entry := range n.table {
		private := fmt.Sprintf("%s:%d", entry.PrivateIP, entry.PrivatePort)
		public := fmt.Sprintf("%s:%d", entry.PublicIP, entry.PublicPort)
		age := time.Since(entry.CreatedAt).Round(time.Second)
		fmt.Printf("%-20s %-10s %-20s %-10s\\n", private, entry.Protocol, public, age)
	}
}

func main() {
	// Create NAT with public IP
	nat := NewNAT("203.0.113.1")
	
	// Simulate private network hosts making connections
	privateHosts := []struct {
		ip   string
		port uint16
	}{
		{"192.168.1.10", 54321},
		{"192.168.1.11", 54322},
		{"192.168.1.12", 54323},
		{"192.168.1.10", 54324}, // Same host, different port
	}
	
	fmt.Println("=== Outgoing Connections ===")
	for _, host := range privateHosts {
		privateIP := net.ParseIP(host.ip)
		entry := nat.AllocateMapping(privateIP, host.port, "TCP")
		
		fmt.Printf("Host %s:%d -> NAT %s:%d\\n",
			host.ip, host.port,
			entry.PublicIP, entry.PublicPort)
	}
	
	nat.PrintTable()
	
	// Simulate incoming response
	fmt.Println("\\n=== Incoming Response ===")
	entry := nat.LookupByPublic(nat.publicIP, 10000)
	if entry != nil {
		fmt.Printf("Response to %s:%d -> Forward to %s:%d\\n",
			nat.publicIP, entry.PublicPort,
			entry.PrivateIP, entry.PrivatePort)
	}
	
	// Simulate another outgoing connection from same host
	fmt.Println("\\n=== New Connection from Existing Host ===")
	privateIP := net.ParseIP("192.168.1.10")
	entry2 := nat.AllocateMapping(privateIP, 60000, "UDP")
	fmt.Printf("Host 192.168.1.10:60000 -> NAT %s:%d\\n",
		entry2.PublicIP, entry2.PublicPort)
	
	nat.PrintTable()
}`
      },
      {
        title: "DHCP Client Simulation in Go",
        description: "Simulating DHCP lease acquisition process",
        language: "go",
        code: `package main

import (
	"fmt"
	"math/rand"
	"net"
	"time"
)

// DHCPMessage represents a DHCP message
type DHCPMessage struct {
	Op          byte      // 1=request, 2=reply
	HType       byte      // Hardware type (1=Ethernet)
	HLen        byte      // Hardware address length
	Hops        byte
	XID         uint32    // Transaction ID
	Secs        uint16
	Flags       uint16
	CIAddr      net.IP    // Client IP (if already has one)
	YIAddr      net.IP    // Your IP (assigned by server)
	SIAddr      net.IP    // Server IP
	GIAddr      net.IP    // Gateway IP
	CHAddr      net.HardwareAddr // Client hardware address
	SName       [64]byte  // Server name
	File        [128]byte // Boot file
	Options     []DHCPOption
}

type DHCPOption struct {
	Code  byte
	Len   byte
	Value []byte
}

// DHCP constants
const (
	DHCPDiscover = 1
	DHCPOffer    = 2
	DHCPRequest  = 3
	DHCPAck      = 5
	
	OptionMessageType   = 53
	OptionSubnetMask    = 1
	OptionRouter        = 3
	OptionDNSServers    = 6
	OptionLeaseTime     = 51
	OptionServerID      = 54
)

// DHCPClient simulates a DHCP client
type DHCPClient struct {
	MAC        net.HardwareAddr
	XID        uint32
	State      string
	IP         net.IP
	SubnetMask net.IPMask
	Router     net.IP
	DNS        []net.IP
	LeaseTime  time.Duration
	ServerIP   net.IP
}

func NewDHCPClient(mac string) *DHCPClient {
	hw, _ := net.ParseMAC(mac)
	return &DHCPClient{
		MAC:   hw,
		XID:   rand.Uint32(),
		State: "INIT",
	}
}

func (c *DHCPClient) Discover() *DHCPMessage {
	c.State = "SELECTING"
	
	return &DHCPMessage{
		Op:     1, // Request
		HType:  1, // Ethernet
		HLen:   6,
		XID:    c.XID,
		CHAddr: c.MAC,
		Options: []DHCPOption{
			{Code: OptionMessageType, Len: 1, Value: []byte{DHCPDiscover}},
		},
	}
}

func (c *DHCPClient) ProcessOffer(offer *DHCPMessage) *DHCPMessage {
	c.State = "REQUESTING"
	c.YIAddr = offer.YIAddr
	c.ServerIP = offer.SIAddr
	
	// Parse options
	for _, opt := range offer.Options {
		switch opt.Code {
		case OptionSubnetMask:
			c.SubnetMask = net.IPMask(opt.Value)
		case OptionRouter:
			c.Router = net.IP(opt.Value)
		case OptionLeaseTime:
			seconds := uint32(opt.Value[0])<<24 | uint32(opt.Value[1])<<16 |
				uint32(opt.Value[2])<<8 | uint32(opt.Value[3])
			c.LeaseTime = time.Duration(seconds) * time.Second
		}
	}
	
	return &DHCPMessage{
		Op:     1,
		HType:  1,
		HLen:   6,
		XID:    c.XID,
		CHAddr: c.MAC,
		Options: []DHCPOption{
			{Code: OptionMessageType, Len: 1, Value: []byte{DHCPRequest}},
			{Code: OptionServerID, Len: 4, Value: c.ServerIP},
		},
	}
}

func (c *DHCPClient) ProcessAck(ack *DHCPMessage) {
	c.State = "BOUND"
	c.IP = ack.YIAddr
}

// DHCPServer simulates a DHCP server
type DHCPServer struct {
	IP         net.IP
	Subnet     *net.IPNet
	LeasePool  []net.IP
	Allocated  map[string]net.IP // MAC -> IP
	LeaseTime  time.Duration
}

func NewDHCPServer(serverIP, subnet string, leaseTime time.Duration) *DHCPServer {
	_, ipNet, _ := net.ParseCIDR(subnet)
	
	// Generate lease pool (skip .1 for router, .2 for server)
	pool := make([]net.IP, 0)
	ip := ipNet.IP.Mask(ipNet.Mask)
	for i := 3; i < 254; i++ {
		ip[3] = byte(i)
		pool = append(pool, append(net.IP{}, ip...))
	}
	
	return &DHCPServer{
		IP:        net.ParseIP(serverIP),
		Subnet:    ipNet,
		LeasePool: pool,
		Allocated: make(map[string]net.IP),
		LeaseTime: leaseTime,
	}
}

func (s *DHCPServer) HandleDiscover(discover *DHCPMessage) *DHCPMessage {
	// Allocate IP from pool
	macStr := discover.CHAddr.String()
	
	var assignedIP net.IP
	if ip, exists := s.Allocated[macStr]; exists {
		assignedIP = ip // Reuse previous allocation
	} else if len(s.LeasePool) > 0 {
		assignedIP = s.LeasePool[0]
		s.LeasePool = s.LeasePool[1:]
		s.Allocated[macStr] = assignedIP
	}
	
	// Calculate lease time bytes
	leaseBytes := make([]byte, 4)
	leaseSeconds := uint32(s.LeaseTime.Seconds())
	leaseBytes[0] = byte(leaseSeconds >> 24)
	leaseBytes[1] = byte(leaseSeconds >> 16)
	leaseBytes[2] = byte(leaseSeconds >> 8)
	leaseBytes[3] = byte(leaseSeconds)
	
	return &DHCPMessage{
		Op:     2, // Reply
		HType:  1,
		HLen:   6,
		XID:    discover.XID,
		YIAddr: assignedIP,
		SIAddr: s.IP,
		CHAddr: discover.CHAddr,
		Options: []DHCPOption{
			{Code: OptionMessageType, Len: 1, Value: []byte{DHCPOffer}},
			{Code: OptionSubnetMask, Len: 4, Value: net.IP(s.Subnet.Mask)},
			{Code: OptionRouter, Len: 4, Value: s.Subnet.IP},
			{Code: OptionDNSServers, Len: 4, Value: s.IP},
			{Code: OptionLeaseTime, Len: 4, Value: leaseBytes},
			{Code: OptionServerID, Len: 4, Value: s.IP},
		},
	}
}

func (s *DHCPServer) HandleRequest(request *DHCPMessage) *DHCPMessage {
	return &DHCPMessage{
		Op:     2,
		HType:  1,
		HLen:   6,
		XID:    request.XID,
		YIAddr: s.Allocated[request.CHAddr.String()],
		SIAddr: s.IP,
		CHAddr: request.CHAddr,
		Options: []DHCPOption{
			{Code: OptionMessageType, Len: 1, Value: []byte{DHCPAck}},
			{Code: OptionSubnetMask, Len: 4, Value: net.IP(s.Subnet.Mask)},
			{Code: OptionRouter, Len: 4, Value: s.Subnet.IP},
			{Code: OptionDNSServers, Len: 4, Value: s.IP},
		},
	}
}

func main() {
	rand.Seed(time.Now().UnixNano())
	
	// Create DHCP server
	server := NewDHCPServer("192.168.1.2", "192.168.1.0/24", 24*time.Hour)
	
	// Create DHCP client
	client := NewDHCPClient("aa:bb:cc:dd:ee:ff")
	
	fmt.Println("=== DHCP Lease Acquisition ===\\n")
	
	// Step 1: DHCP Discover
	fmt.Println("1. Client sends DHCPDISCOVER (broadcast)")
	discover := client.Discover()
	fmt.Printf("   XID: 0x%08x, MAC: %s\\n", discover.XID, discover.CHAddr)
	
	// Step 2: DHCP Offer
	fmt.Println("\\n2. Server responds with DHCPOFFER")
	offer := server.HandleDiscover(discover)
	fmt.Printf("   Offered IP: %s\\n", offer.YIAddr)
	fmt.Printf("   Subnet Mask: %s\\n", net.IPMask(offer.Options[1].Value))
	fmt.Printf("   Router: %s\\n", net.IP(offer.Options[2].Value))
	fmt.Printf("   Lease Time: %s\\n", server.LeaseTime)
	
	// Step 3: DHCP Request
	fmt.Println("\\n3. Client sends DHCPREQUEST")
	request := client.ProcessOffer(offer)
	fmt.Printf("   Requesting IP: %s\\n", client.YIAddr)
	fmt.Printf("   Server ID: %s\\n", client.ServerIP)
	
	// Step 4: DHCP Ack
	fmt.Println("\\n4. Server responds with DHCPACK")
	ack := server.HandleRequest(request)
	client.ProcessAck(ack)
	
	fmt.Println("\\n=== Lease Acquired ===")
	fmt.Printf("Client MAC: %s\\n", client.MAC)
	fmt.Printf("Assigned IP: %s\\n", client.IP)
	fmt.Printf("Subnet Mask: %s\\n", client.SubnetMask)
	fmt.Printf("Default Gateway: %s\\n", client.Router)
	fmt.Printf("Lease Duration: %s\\n", client.LeaseTime)
	fmt.Printf("State: %s\\n", client.State)
}`
      },
      {
        title: "Routing Table Implementation in Go",
        description: "Implementing a simple routing table with longest prefix match",
        language: "go",
        code: `package main

import (
	"fmt"
	"net"
	"sort"
)

// Route represents a routing table entry
type Route struct {
	Destination *net.IPNet
	Gateway     net.IP
	Interface   string
	Metric      int
}

// RoutingTable manages network routes
type RoutingTable struct {
	routes []Route
}

func NewRoutingTable() *RoutingTable {
	return &RoutingTable{
		routes: make([]Route, 0),
	}
}

func (rt *RoutingTable) AddRoute(dest string, gateway string, iface string, metric int) error {
	_, ipNet, err := net.ParseCIDR(dest)
	if err != nil {
		return err
	}
	
	route := Route{
		Destination: ipNet,
		Gateway:     net.ParseIP(gateway),
		Interface:   iface,
		Metric:      metric,
	}
	
	rt.routes = append(rt.routes, route)
	return nil
}

func (rt *RoutingTable) Lookup(destIP net.IP) *Route {
	var bestRoute *Route
	maxPrefixLen := -1
	
	for i := range rt.routes {
		route := &rt.routes[i]
		
		// Check if destination is in this network
		if route.Destination.Contains(destIP) {
			ones, _ := route.Destination.Mask.Size()
			
			// Longest prefix match wins
			if ones > maxPrefixLen {
				maxPrefixLen = ones
				bestRoute = route
			} else if ones == maxPrefixLen {
				// Same prefix length, choose lower metric
				if route.Metric < bestRoute.Metric {
					bestRoute = route
				}
			}
		}
	}
	
	return bestRoute
}

func (rt *RoutingTable) Print() {
	fmt.Println("=== Routing Table ===")
	fmt.Printf("%-20s %-15s %-10s %-8s\\n", "Destination", "Gateway", "Interface", "Metric")
	fmt.Println(string(make([]byte, 60)))
	
	// Sort by prefix length (longest first) then by metric
	sort.Slice(rt.routes, func(i, j int) bool {
		onesI, _ := rt.routes[i].Destination.Mask.Size()
		onesJ, _ := rt.routes[j].Destination.Mask.Size()
		if onesI != onesJ {
			return onesI > onesJ
		}
		return rt.routes[i].Metric < rt.routes[j].Metric
	})
	
	for _, route := range rt.routes {
		fmt.Printf("%-20s %-15s %-10s %-8d\\n",
			route.Destination,
			route.Gateway,
			route.Interface,
			route.Metric)
	}
}

func main() {
	rt := NewRoutingTable()
	
	// Add routes (simulating a router configuration)
	rt.AddRoute("10.0.1.0/24", "10.0.0.1", "eth1", 1)    // Directly connected
	rt.AddRoute("10.0.2.0/24", "10.0.0.2", "eth2", 1)    // Directly connected
	rt.AddRoute("10.0.0.0/16", "10.0.0.254", "eth0", 10) // Aggregate route
	rt.AddRoute("192.168.1.0/24", "10.0.0.1", "eth1", 5) // Remote network
	rt.AddRoute("0.0.0.0/0", "203.0.113.1", "eth3", 100) // Default route
	
	rt.Print()
	
	// Test lookups
	testIPs := []string{
		"10.0.1.50",    // Should match 10.0.1.0/24
		"10.0.2.100",   // Should match 10.0.2.0/24
		"10.0.3.1",     // Should match 10.0.0.0/16 (aggregate)
		"192.168.1.10", // Should match 192.168.1.0/24
		"8.8.8.8",      // Should match default route
	}
	
	fmt.Println("\\n=== Route Lookups ===")
	for _, ipStr := range testIPs {
		ip := net.ParseIP(ipStr)
		route := rt.Lookup(ip)
		
		if route != nil {
			fmt.Printf("Destination: %-15s -> Gateway: %-15s via %s\\n",
				ipStr, route.Gateway, route.Interface)
		} else {
			fmt.Printf("Destination: %-15s -> No route found\\n", ipStr)
		}
	}
	
	// Demonstrate longest prefix match
	fmt.Println("\\n=== Longest Prefix Match Demo ===")
	rt2 := NewRoutingTable()
	rt2.AddRoute("10.0.0.0/8", "192.168.1.1", "eth0", 1)
	rt2.AddRoute("10.0.1.0/24", "192.168.2.1", "eth1", 1)
	rt2.AddRoute("10.0.1.128/25", "192.168.3.1", "eth2", 1)
	
	rt2.Print()
	
	testIP := net.ParseIP("10.0.1.200")
	route := rt2.Lookup(testIP)
	fmt.Printf("\\nLookup for %s:\\n", testIP)
	fmt.Printf("  Matches 10.0.0.0/8 (prefix /8)\\n")
	fmt.Printf("  Matches 10.0.1.0/24 (prefix /24)\\n")
	fmt.Printf("  Matches 10.0.1.128/25 (prefix /25) <- Longest match!\\n")
	fmt.Printf("  Selected route: %s via %s\\n", route.Destination, route.Interface)
}`
      }
    ],
    comparisons: [
      {
        title: "IPv4 vs IPv6",
        itemA: "IPv4",
        itemB: "IPv6",
        points: [
          { aspect: "Address Size", itemAValue: "32 bits", itemBValue: "128 bits" },
          { aspect: "Address Space", itemAValue: "~4.3 billion", itemBValue: "~340 undecillion" },
          { aspect: "Header Size", itemAValue: "20 bytes (variable)", itemBValue: "40 bytes (fixed)" },
          { aspect: "Header Checksum", itemAValue: "Yes", itemBValue: "No" },
          { aspect: "Fragmentation", itemAValue: "Routers and hosts", itemBValue: "Only source hosts" },
          { aspect: "Options", itemAValue: "In header", itemBValue: "Extension headers" },
          { aspect: "NAT Required", itemAValue: "Often", itemBValue: "Not needed" },
          { aspect: "Configuration", itemAValue: "Manual or DHCP", itemBValue: "Auto-configuration" },
          { aspect: "Security (IPsec)", itemAValue: "Optional", itemBValue: "Built-in" }
        ]
      }
    ],
    realWorldApplications: [
      {
        title: "VPC and Subnet Design",
        role: "DevOps",
        scenario: "Designing network architecture for multi-tier application in AWS",
        application: "Understanding CIDR notation and longest prefix matching helps design proper subnetting. Public subnets for load balancers, private subnets for applications, database subnets with restricted access.",
        bestPractices: [
          "Use /16 VPC with /24 subnets for flexibility",
          "Reserve IPs for AWS services (first 4 + last 1 in each subnet)",
          "Plan for multi-AZ with non-overlapping CIDRs",
          "Use NAT Gateways for outbound-only internet access",
          "Implement VPC Flow Logs for traffic analysis"
        ],
        tools: ["Terraform", "AWS VPC", "CloudFormation", "CDK", "ipcalc"]
      },
      {
        title: "NAT and Load Balancer Configuration",
        role: "SRE",
        scenario: "Configuring egress traffic control for Kubernetes cluster",
        application: "NAT translates private IPs to public for outbound traffic. Understanding NAT tables helps debug connection issues. Load balancers use similar port-mapping concepts.",
        bestPractices: [
          "Use separate NAT GW per AZ for HA",
          "Monitor NAT Gateway connection count limits",
          "Implement connection tracking for stateful filtering",
          "Use ALB/NLB for different traffic patterns",
          "Enable cross-zone load balancing"
        ],
        tools: ["iptables", "conntrack", "AWS NAT Gateway", "NGINX", "HAProxy"]
      },
      {
        title: "SDN and Service Mesh",
        role: "Backend Engineer",
        scenario: "Implementing zero-trust networking in microservices",
        application: "SDN principles apply to service meshes like Istio. Match-action forwarding translates to routing rules, traffic policies, and access control in Kubernetes.",
        bestPractices: [
          "Use mTLS for service-to-service authentication",
          "Implement circuit breakers at the mesh level",
          "Deploy canary releases with traffic splitting",
          "Monitor service mesh control plane health",
          "Use sidecar proxies for consistent policy"
        ],
        tools: ["Istio", "Linkerd", "Cilium", "Calico", "Envoy"]
      }
    ],
    comparisonDiagrams: [
      {
        id: "comp4-1",
        title: "IPv4 vs IPv6 Header Comparison",
        mermaidCode: `graph TB
    subgraph IPv4_Header["📦 IPv4 Header (20+ bytes)"]
        V4[Version 4] --> IHL[IHL 4]
        IHL --> TOS[Type of Service 8]
        TOS --> TL[Total Length 16]
        TL --> ID[Identification 16]
        ID --> F[Flags 3]
        F --> FO[Fragment Offset 13]
        FO --> TTL[TTL 8]
        TTL --> P[Protocol 8]
        P --> HC[Header Checksum 16]
        HC --> SA[Source IP 32]
        SA --> DA[Dest IP 32]
        DA --> OPT[Options Variable]
        
        style V4 fill:#ffe1e1
        style HC fill:#fff3cd
        style OPT fill:#f8d7da
    end
    
    subgraph IPv6_Header["🚀 IPv6 Header (40 bytes fixed)"]
        V6[Version 6] --> TC[Traffic Class 8]
        TC --> FL[Flow Label 20]
        FL --> PL[Payload Length 16]
        PL --> NH[Next Header 8]
        NH --> HL[Hop Limit 8]
        HL --> SA6[Source IP 128]
        SA6 --> DA6[Dest IP 128]
        
        style V6 fill:#d4edda
        style NH fill:#d1ecf1
        style SA6 fill:#e1f5ff
        style DA6 fill:#e1f5ff
    end
    
    Note["IPv4: Variable length, checksum, fragmentation<br/>IPv6: Fixed length, no checksum, extension headers"]`
      },
      {
        id: "comp4-2",
        title: "Traditional vs SDN Architecture",
        mermaidCode: `graph TB
    subgraph Traditional["🏛️ Traditional Networking"]
        TR1[Router 1] <-->|Routing Protocol| TR2[Router 2]
        TR2 <-->|Routing Protocol| TR3[Router 3]
        TR1 <-->|Routing Protocol| TR3
        
        note1["Control + Data plane<br/>on each device"]
        
        style TR1 fill:#fff3cd
        style TR2 fill:#fff3cd
        style TR3 fill:#fff3cd
    end
    
    subgraph SDN["⚡ Software-Defined Networking"]
        SC[SDN Controller] -->|Southbound API| SW1[Switch 1]
        SC -->|Southbound API| SW2[Switch 2]
        SC -->|Southbound API| SW3[Switch 3]
        
        APP[Applications] -->|Northbound API| SC
        
        note2["Centralized control<br/>Simple data plane"]
        
        style SC fill:#d4edda
        style APP fill:#e1f5ff
        style SW1 fill:#f8f9fa
        style SW2 fill:#f8f9fa
        style SW3 fill:#f8f9fa
    end` 
      }
    ]
  },
  {
    id: 5,
    title: "Network Layer: Control Plane",
    subtitle: "Routing Algorithms",
    overview: "The control plane determines how packets are routed from source to destination. We examine routing algorithms, intra-AS and inter-AS routing, and the SDN control plane.",
    sections: [
      {
        id: "5.1",
        title: "Introduction",
        content: "The control plane computes the forwarding tables used by the data plane.",
        subsections: [
          {
            title: "Per-Router Control",
            bullets: [
              "Each router runs routing algorithm",
              "Routers communicate to compute forwarding tables",
              "Traditional approach used in Internet"
            ]
          },
          {
            title: "Logically Centralized Control",
            bullets: [
              "Central controller computes and distributes forwarding tables",
              "Used in SDN (Software-Defined Networks)",
              "Controller interacts with control agents on routers"
            ]
          }
        ]
      },
      {
        id: "5.2",
        title: "Routing Protocols",
        content: "Routing protocols determine the best paths through the network.",
        subsections: [
          {
            title: "Link State (LS) Algorithms",
            bullets: [
              "Each node knows complete network topology",
              "Each node runs Dijkstra's algorithm",
              "Link state broadcast: All nodes learn all link costs",
              "Complexity: O(n^2) or O(n log n) with heap",
              "Can oscillate with congestion-based costs"
            ],
            important: "OSPF uses link state routing. Each router has complete map of the network."
          },
          {
            title: "Distance Vector (DV) Algorithms",
            bullets: [
              "Iterative, asynchronous, distributed",
              "Each node knows only neighbors and link costs",
              "Bellman-Ford equation: d_x(y) = min_v{c(x,v) + d_v(y)}",
              "Nodes share distance vectors with neighbors",
              "Converges to correct values",
              "Count-to-infinity problem with bad news"
            ],
            important: "RIP uses distance vector routing. Each router knows only its immediate neighbors."
          },
          {
            title: "LS vs DV Comparison",
            bullets: [
              "Message complexity: LS O(n*e), DV varies",
              "Convergence speed: LS faster than DV",
              "Robustness: LS better (errors don't propagate)",
              "DV: Wrong node calculation affects network"
            ]
          }
        ]
      },
      {
        id: "5.3",
        title: "Intra-AS Routing: OSPF",
        content: "Autonomous Systems (AS) are networks under single administrative control.",
        subsections: [
          {
            title: "Autonomous Systems",
            bullets: [
              "AS: Group of routers under same administrative control",
              "Same routing protocol within AS (intra-AS)",
              "Different routing between ASes (inter-AS)",
              "AS Number (ASN): Unique identifier"
            ]
          },
          {
            title: "OSPF (Open Shortest Path First)",
            bullets: [
              "Link state protocol",
              "Uses Dijkstra's algorithm",
              "OSPF messages carried directly in IP (protocol 89)",
              "Hierarchical: Areas within AS",
              "Area border routers connect areas",
              "Backbone area (area 0) connects all areas"
            ]
          },
          {
            title: "OSPF Areas",
            bullets: [
              "Link state broadcast limited to area",
              "Reduces routing message overhead",
              "Area border routers summarize distances",
              "Backbone routers run OSPF for backbone",
              "Boundary routers connect to other ASes"
            ]
          }
        ]
      },
      {
        id: "5.4",
        title: "Routing Among ISPs: BGP",
        content: "BGP (Border Gateway Protocol) is the de facto inter-AS routing protocol.",
        subsections: [
          {
            title: "BGP Basics",
            bullets: [
              "BGP: Border Gateway Protocol",
              "De facto standard for inter-AS routing",
              "Provides each AS a way to:",
              "1. Obtain subnet reachability from neighboring ASes",
              "2. Propagate reachability to all internal routers",
              "3. Determine good routes to subnets"
            ]
          },
          {
            title: "BGP Sessions",
            bullets: [
              "eBGP: External BGP between AS border routers",
              "iBGP: Internal BGP within AS",
              "BGP runs over TCP (port 179)",
              "BGP messages: OPEN, UPDATE, KEEPALIVE, NOTIFICATION"
            ]
          },
          {
            title: "BGP Attributes",
            bullets: [
              "AS-PATH: List of ASes in route advertisement",
              "NEXT-HOP: Router to send packets to",
              "LOCAL-PREF: Preference value within AS",
              "Routes are prefix + attributes"
            ]
          },
          {
            title: "BGP Route Selection",
            bullets: [
              "1. Highest local preference",
              "2. Shortest AS-PATH",
              "3. Closest NEXT-HOP router (hot potato)",
              "4. Additional criteria (BGP identifiers)"
            ]
          },
          {
            title: "BGP Policy",
            bullets: [
              "ISPs only advertise routes they want to carry traffic for",
              "ISPs can filter routes from certain ASes",
              "Commercial relationships affect routing",
              "Provider-customer, peer-peer relationships"
            ]
          }
        ]
      },
      {
        id: "5.5",
        title: "The SDN Control Plane",
        content: "SDN separates the control plane from the data plane, enabling centralized control.",
        subsections: [
          {
            title: "SDN Components",
            bullets: [
              "Data-plane switches: Fast, simple, flow-table based",
              "SDN controller: Maintains network state",
              "Network control applications: Implement control logic",
              "OpenFlow protocol: Controller-switch communication"
            ]
          },
          {
            title: "SDN Controller",
            bullets: [
              "Interface layer: Communicates with switches",
              "Network-wide state management: Link/node status",
              "Communication layer: Between controller instances",
              "Interface to control applications: Northbound API"
            ]
          }
        ]
      },
      {
        id: "5.6",
        title: "ICMP",
        content: "ICMP (Internet Control Message Protocol) is used by hosts and routers to communicate network-level information.",
        subsections: [
          {
            title: "ICMP Functionality",
            bullets: [
              "Error reporting: Unreachable host, network, port",
              "Echo request/reply (ping)",
              "Time exceeded (TTL=0 in traceroute)",
              "Carried in IP datagrams (protocol 1)",
              "ICMP message: Type, Code, plus IP header and first 8 bytes"
            ]
          },
          {
            title: "Traceroute",
            bullets: [
              "Sends UDP segments with increasing TTL",
              "TTL=1: First router returns ICMP time exceeded",
              "TTL=2: Second router returns ICMP time exceeded",
              "Continues until destination reached",
              "Destination returns ICMP port unreachable"
            ]
          }
        ]
      }
    ],
    diagrams: [
      {
        id: "fig5-1",
        title: "Link State Algorithm",
        description: "Dijkstra's algorithm execution",
        mermaidCode: `graph TB
    subgraph Network_Topology
        A[A]
        B[B]
        C[C]
        D[D]
        E[E]
        F[F]
    end
    
    A ---|2| B
    A ---|1| C
    B ---|3| D
    C ---|1| D
    C ---|4| E
    D ---|2| F
    E ---|1| F
    
    Note["Dijkstra computes shortest path from source to all nodes"]`
      },
      {
        id: "fig5-2",
        title: "Distance Vector Algorithm",
        description: "Bellman-Ford distributed computation",
        mermaidCode: `graph LR
    subgraph Node_X
        XV[My DV]
        XV -->|Send DV| Y
        XV -->|Send DV| Z
    end
    
    subgraph Node_Y
        YV[My DV]
        YV -->|Send DV| X
        YV -->|Send DV| Z
    end
    
    subgraph Node_Z
        ZV[My DV]
        ZV -->|Send DV| X
        ZV -->|Send DV| Y
    end
    
    X[Node X]
    Y[Node Y]
    Z[Node Z]
    
    Note["Each node only knows neighbors - iteratively converges"]`
      },
      {
        id: "fig5-3",
        title: "AS Hierarchy",
        description: "Autonomous Systems and their relationships",
        mermaidCode: `graph TB
    subgraph Tier1_ISPs
        T1A[Tier-1 ISP A]
        T1B[Tier-1 ISP B]
        T1C[Tier-1 ISP C]
    end
    
    subgraph Regional_ISPs
        R1[Regional ISP 1]
        R2[Regional ISP 2]
    end
    
    subgraph Stub_ASes
        S1[Stub AS 1]
        S2[Stub AS 2]
        S3[Stub AS 3]
    end
    
    T1A <-->|Peer| T1B
    T1B <-->|Peer| T1C
    T1A <-->|Peer| T1C
    
    T1A -->|Provider| R1
    T1B -->|Provider| R2
    
    R1 -->|Provider| S1
    R1 -->|Provider| S2
    R2 -->|Provider| S3
    
    Note["Provider-customer and peer-peer relationships"]`
      },
      {
        id: "fig5-4",
        title: "OSPF Areas",
        description: "Hierarchical OSPF routing",
        mermaidCode: `graph TB
    subgraph Area_0_Backbone
        BR1[Backbone Router]
        BR2[Backbone Router]
        ABR1[Area Border Router]
        ABR2[Area Border Router]
    end
    
    subgraph Area_1
        R1A[Internal Router]
        R1B[Internal Router]
        ABR1
    end
    
    subgraph Area_2
        R2A[Internal Router]
        R2B[Internal Router]
        ABR2
    end
    
    BR1 --- BR2
    BR1 --- ABR1
    BR2 --- ABR2
    ABR1 --- R1A
    ABR1 --- R1B
    ABR2 --- R2A
    ABR2 --- R2B
    
    Note["Link state updates contained within areas"]`
      },
      {
        id: "fig5-5",
        title: "BGP Path Advertisement",
        description: "BGP route propagation",
        mermaidCode: `graph LR
    subgraph AS1
        R1[Router 1]
    end
    
    subgraph AS2
        R2[Router 2]
    end
    
    subgraph AS3
        R3[Router 3]
    end
    
    R1 -->|eBGP: Prefix X AS-PATH=1| R2
    R2 -->|eBGP: Prefix X AS-PATH=2,1| R3
    
    Note["AS-PATH grows as route traverses ASes"]`
      }
    ],
    keyConcepts: [
      { term: "Link State Routing", definition: "Each node knows complete topology and runs Dijkstra's algorithm" },
      { term: "Distance Vector Routing", definition: "Iterative distributed algorithm using Bellman-Ford equation" },
      { term: "AS (Autonomous System)", definition: "Network under single administrative control with common routing policy" },
      { term: "Intra-AS Routing", definition: "Routing within an autonomous system" },
      { term: "Inter-AS Routing", definition: "Routing between autonomous systems" },
      { term: "OSPF", definition: "Open Shortest Path First - link state intra-AS protocol" },
      { term: "BGP", definition: "Border Gateway Protocol - inter-AS routing protocol" },
      { term: "eBGP", definition: "External BGP - BGP between AS border routers" },
      { term: "iBGP", definition: "Internal BGP - BGP within an AS" },
      { term: "AS-PATH", definition: "BGP attribute listing ASes in the route" },
      { term: "Count-to-Infinity", definition: "DV problem where bad news travels slowly" },
      { term: "Poisoned Reverse", definition: "DV technique: advertise infinity to neighbor you route through" },
      { term: "Hot Potato Routing", definition: "Getting traffic out of your AS as quickly as possible" }
    ],
    formulas: [
      {
        name: "Bellman-Ford Equation",
        formula: "d_x(y) = min_v{c(x,v) + d_v(y)}",
        explanation: "Minimum cost from x to y is minimum over all neighbors v of cost to v plus cost from v to y"
      },
      {
        name: "Dijkstra Complexity",
        formula: "O(n^2) or O(n log n) with heap",
        explanation: "n = number of nodes"
      }
    ],
    practiceProblems: [
      {
        question: "Compare link state and distance vector routing. When might you prefer one over the other?",
        solution: "Link state: Faster convergence, more robust to errors, but higher message overhead. Distance vector: Simpler, less state, but slower convergence and count-to-infinity problem. LS preferred for large networks; DV for simple/small networks.",
        hint: "Consider convergence speed, message complexity, and robustness."
      },
      {
        question: "Why does BGP use policy-based routing rather than just shortest path?",
        solution: "BGP must consider business relationships. ISPs don't want to carry transit traffic for free. Policy allows: (1) Not advertising routes to certain ASes, (2) Preferring certain paths for commercial reasons, (3) Avoiding routing through competitors.",
        hint: "Think about the business aspects of inter-AS routing."
      },
      {
        question: "Explain the count-to-infinity problem in distance vector routing.",
        solution: "When a link fails, nodes may gradually increase their distance estimates through each other. If X routes through Y to Z, and X-Y link fails, Y might still think it can reach Z through X (not knowing X-Y is down). They increment costs until reaching infinity.",
        hint: "Consider what happens when bad news (link failure) needs to propagate."
      }
    ],
    images: [
      {
        src: "/images/chapter5-routing.jpg",
        alt: "Routing Algorithms Comparison",
        caption: "Link State vs Distance Vector routing algorithms"
      }
    ],
    codeExamples: [
      {
        title: "Dijkstra's Algorithm in Go",
        description: "Implementation of shortest path algorithm",
        language: "go",
        code: `package main

import (
	"container/heap"
	"fmt"
	"math"
)

// Edge represents a graph edge
type Edge struct {
	to     string
	weight int
}

// Graph represents a weighted graph
type Graph struct {
	nodes map[string][]Edge
}

func NewGraph() *Graph {
	return &Graph{nodes: make(map[string][]Edge)}
}

func (g *Graph) AddEdge(from, to string, weight int) {
	g.nodes[from] = append(g.nodes[from], Edge{to, weight})
}

// Item for priority queue
type Item struct {
	node     string
	distance int
	index    int
}

type PriorityQueue []*Item

func (pq PriorityQueue) Len() int { return len(pq) }
func (pq PriorityQueue) Less(i, j int) bool { return pq[i].distance < pq[j].distance }
func (pq PriorityQueue) Swap(i, j int) {
	pq[i], pq[j] = pq[j], pq[i]
	pq[i].index = i
	pq[j].index = j
}

func (pq *PriorityQueue) Push(x interface{}) {
	n := len(*pq)
	item := x.(*Item)
	item.index = n
	*pq = append(*pq, item)
}

func (pq *PriorityQueue) Pop() interface{} {
	old := *pq
	n := len(old)
	item := old[n-1]
	*pq = old[:n-1]
	return item
}

// Dijkstra finds shortest paths from source
func Dijkstra(g *Graph, source string) map[string]int {
	dist := make(map[string]int)
	for node := range g.nodes {
		dist[node] = math.MaxInt32
	}
	dist[source] = 0
	
	pq := &PriorityQueue{&Item{node: source, distance: 0}}
	heap.Init(pq)
	
	for pq.Len() > 0 {
		item := heap.Pop(pq).(*Item)
		u := item.node
		
		if item.distance > dist[u] {
			continue
		}
		
		for _, edge := range g.nodes[u] {
			v := edge.to
			weight := edge.weight
			
			if dist[u]+weight < dist[v] {
				dist[v] = dist[u] + weight
				heap.Push(pq, &Item{node: v, distance: dist[v]})
			}
		}
	}
	
	return dist
}

func main() {
	g := NewGraph()
	
	// Build network topology
	g.AddEdge("A", "B", 4)
	g.AddEdge("A", "C", 2)
	g.AddEdge("B", "C", 1)
	g.AddEdge("B", "D", 5)
	g.AddEdge("C", "D", 8)
	g.AddEdge("C", "E", 10)
	g.AddEdge("D", "E", 2)
	
	distances := Dijkstra(g, "A")
	
	fmt.Println("Shortest paths from A:")
	for node, dist := range distances {
		fmt.Printf("  To %s: %d\\n", node, dist)
	}
}`
      }
    ],
    comparisons: [
      {
        title: "Link State vs Distance Vector Routing",
        itemA: "Link State (OSPF)",
        itemB: "Distance Vector (RIP)",
        points: [
          { aspect: "Topology Knowledge", itemAValue: "Complete network map", itemBValue: "Only neighbors" },
          { aspect: "Algorithm", itemAValue: "Dijkstra", itemBValue: "Bellman-Ford" },
          { aspect: "Message Complexity", itemAValue: "O(n*e)", itemBValue: "Varies" },
          { aspect: "Convergence Speed", itemAValue: "Fast", itemBValue: "Slow" },
          { aspect: "Robustness", itemAValue: "High (errors isolated)", itemBValue: "Low (errors propagate)" },
          { aspect: "Count-to-Infinity", itemAValue: "No", itemBValue: "Yes" },
          { aspect: "Memory Usage", itemAValue: "Higher (full topology)", itemBValue: "Lower (distance vectors)" },
          { aspect: "Typical Use", itemAValue: "Enterprise/ISP", itemBValue: "Small networks" }
        ]
      },
      {
        title: "OSPF vs BGP",
        itemA: "OSPF",
        itemB: "BGP",
        points: [
          { aspect: "Type", itemAValue: "Intra-AS (IGP)", itemBValue: "Inter-AS (EGP)" },
          { aspect: "Algorithm", itemAValue: "Link State", itemBValue: "Path Vector" },
          { aspect: "Metric", itemAValue: "Link cost", itemBValue: "Policy-based" },
          { aspect: "Scalability", itemAValue: "Areas/hierarchy", itemBValue: "AS-PATH" },
          { aspect: "Convergence", itemAValue: "Fast", itemBValue: "Slow" },
          { aspect: "Configuration", itemAValue: "Automatic", itemBValue: "Policy-driven" }
        ]
      }
    ],
    realWorldApplications: [
      {
        title: "Anycast and Geo-Routing",
        role: "SRE",
        scenario: "Implementing global load balancing for API endpoints",
        application: "BGP anycast advertises same IP from multiple locations. Users reach nearest edge. Understanding routing protocols helps troubleshoot asymmetric routing and optimize path selection.",
        bestPractices: [
          "Use BGP communities to influence route propagation",
          "Monitor AS-PATH length from multiple vantage points",
          "Implement health checks to withdraw failed routes",
          "Use RPKI to prevent route hijacking",
          "Monitor route flapping and convergence time"
        ],
        tools: ["BGPStream", "RIPE Atlas", "rtirl", "BIRD", "GoBGP"]
      },
      {
        title: "Multi-Region Failover",
        role: "DevOps",
        scenario: "Designing disaster recovery with automatic failover between regions",
        application: "OSPF/BGP route preferences control traffic flow. Link state awareness enables rapid reconvergence. Understanding distance vector helps avoid routing loops during failover.",
        bestPractices: [
          "Use route metrics for active-passive failover",
          "Implement graceful shutdown for maintenance",
          "Test failover scenarios regularly",
          "Monitor routing table convergence time",
          "Use BFD for sub-second failure detection"
        ],
        tools: ["Terraform", "Ansible", "Consul", "Keepalived", "FRRouting"]
      },
      {
        title: "Network Troubleshooting with Traceroute",
        role: "SRE",
        scenario: "Debugging high latency between application tiers",
        application: "ICMP and TTL manipulation (traceroute) reveals routing path. Understanding how routers decrement TTL and generate ICMP errors helps interpret traceroute output.",
        bestPractices: [
          "Use TCP traceroute for firewall-friendly probing",
          "Compare traceroutes from multiple sources",
          "Correlate with BGP looking glasses",
          "Monitor for asymmetric routing",
          "Use Paris traceroute for load-balanced paths"
        ],
        tools: ["traceroute", "mtr", "paris-traceroute", "PingPlotter", "ThousandEyes"]
      }
    ],
    comparisonDiagrams: [
      {
        id: "comp5-1",
        title: "Link State vs Distance Vector - Information Flow",
        mermaidCode: `graph TB
    subgraph Link_State["🗺️ Link State (OSPF)"]
        LS1[Router A] -->|LSA| LS_ALL[All Routers]
        LS2[Router B] -->|LSA| LS_ALL
        LS3[Router C] -->|LSA| LS_ALL
        LS_ALL -->|Full Topology| LS_Dijk[Dijkstra Calc]
        
        style LS_ALL fill:#e1f5ff
        style LS_Dijk fill:#d4edda
    end
    
    subgraph Distance_Vector["📏 Distance Vector (RIP)"]
        DV1[Router A] <-->|Distance Vector| DV2[Router B]
        DV2 <-->|Distance Vector| DV3[Router C]
        DV3 <-->|Distance Vector| DV1
        
        noteDV["Only neighbors exchange info<br/>Iterative convergence"]
        
        style DV1 fill:#fff3cd
        style DV2 fill:#fff3cd
        style DV3 fill:#fff3cd
    end` 
      },
      {
        id: "comp5-2",
        title: "Intra-AS vs Inter-AS Routing",
        mermaidCode: `graph TB
    subgraph AS1["🌐 AS 1 (Your Network)"]
        direction TB
        R1[Router] <-->|OSPF/IS-IS| R2[Router]
        R2 <-->|iBGP| R3[Router]
        
        note1["Intra-AS: Fast convergence<br/>Link state protocol"]
        
        style R1 fill:#d4edda
        style R2 fill:#d4edda
        style R3 fill:#d4edda
    end
    
    subgraph Internet["🌍 Internet"]
        direction TB
        AS2[AS 2] <-->|eBGP| AS3[AS 3]
        AS3 <-->|eBGP| AS4[AS 4]
        
        note2["Inter-AS: Policy-based<br/>BGP with AS-PATH"]
        
        style AS2 fill:#ffe1e1
        style AS3 fill:#ffe1e1
        style AS4 fill:#ffe1e1
    end
    
    AS1 -.->|eBGP| Internet` 
      }
    ]
  },
  {
    id: 6,
    title: "The Link Layer and LANs",
    subtitle: "Ethernet and Switches",
    overview: "The link layer handles node-to-node delivery over a single link. We examine link layer services, error detection, multiple access protocols, Ethernet, switches, and VLANs.",
    sections: [
      {
        id: "6.1",
        title: "Introduction to the Link Layer",
        content: "The link layer is responsible for transferring datagrams from one node to physically adjacent nodes.",
        subsections: [
          {
            title: "Link Layer Services",
            bullets: [
              "Framing: Encapsulate datagram into frame",
              "Link access: Coordinate access when shared medium",
              "Reliable delivery: Between adjacent nodes (rarely used)",
              "Error detection: Detect bit errors",
              "Error correction: Correct bit errors",
              "Implemented in network adapter (NIC)"
            ]
          },
          {
            title: "Where is the Link Layer Implemented",
            bullets: [
              "Network interface card (NIC)",
              "Ethernet card, WiFi adapter",
              "Implements link and physical layer",
              "Combination of hardware (controller) and software (driver)"
            ]
          }
        ]
      },
      {
        id: "6.2",
        title: "Error Detection and Correction",
        content: "Techniques to detect and correct bit errors introduced during transmission.",
        subsections: [
          {
            title: "Parity Checks",
            bullets: [
              "Single bit parity: Detect single bit errors",
              "Two-dimensional parity: Detect and correct single bit errors",
              "Even parity: Parity bit makes total 1s even",
              "Odd parity: Parity bit makes total 1s odd"
            ]
          },
          {
            title: "Checksum",
            bullets: [
              "Internet checksum: Sum of 16-bit words",
              "Used in TCP, UDP, IP",
              "Stronger than parity but weaker than CRC"
            ]
          },
          {
            title: "Cyclic Redundancy Check (CRC)",
            bullets: [
              "Powerful error detection",
              "View data bits as polynomial D",
              "Choose generator polynomial G of degree r",
              "Append r CRC bits: D*2^r / G remainder",
              "Can detect burst errors up to r bits"
            ],
            important: "CRC is used in Ethernet (CRC-32), WiFi, and many link layer protocols."
          }
        ]
      },
      {
        id: "6.3",
        title: "Multiple Access Links and Protocols",
        content: "When multiple nodes share a broadcast channel, protocols coordinate access.",
        subsections: [
          {
            title: "Types of Links",
            bullets: [
              "Point-to-point: Single sender, single receiver",
              "Broadcast: Multiple senders share channel",
              "Examples: Ethernet (shared), WiFi, satellite"
            ]
          },
          {
            title: "Multiple Access Problem",
            bullets: [
              "Single shared broadcast channel",
              "Two or more simultaneous transmissions interfere",
              "Collision: Frame lost",
              "Goal: Coordinate access efficiently"
            ]
          },
          {
            title: "Channel Partitioning",
            bullets: [
              "TDMA: Time Division Multiple Access",
              "Each node gets fixed time slot",
              "FDMA: Frequency Division Multiple Access",
              "Each node gets fixed frequency band",
              "CDMA: Code Division Multiple Access",
              "Each node gets unique code, share frequency/time"
            ]
          },
          {
            title: "Random Access Protocols",
            bullets: [
              "Slotted ALOHA: Transmit in slot, retransmit with probability p",
              "Pure ALOHA: Transmit immediately, retransmit on collision",
              "CSMA: Listen before transmit",
              "CSMA/CD: Collision detection (Ethernet)",
              "CSMA/CA: Collision avoidance (WiFi)"
            ]
          },
          {
            title: "Taking-Turns Protocols",
            bullets: [
              "Polling: Master node invites slaves to transmit",
              "Token passing: Control token passed between nodes",
              "Bluetooth uses polling"
            ]
          }
        ]
      },
      {
        id: "6.4",
        title: "Switched Local Area Networks",
        content: "Modern LANs use link-layer switches instead of shared media.",
        subsections: [
          {
            title: "Link-Layer Addressing",
            bullets: [
              "MAC address: 48-bit flat address burned into NIC",
              "Written in hexadecimal (e.g., 00:1A:2B:3C:4D:5E)",
              "Unique worldwide (theoretically)",
              "Used for local delivery within subnet",
              "IP address is hierarchical, MAC is flat"
            ]
          },
          {
            title: "ARP (Address Resolution Protocol)",
            bullets: [
              "Resolves IP address to MAC address",
              "ARP table: IP-to-MAC mappings",
              "ARP query: Broadcast 'Who has this IP?'",
              "ARP response: Unicast 'I have this IP'",
              "Entries time out after 20 minutes"
            ]
          },
          {
            title: "Sending to Another Subnet",
            bullets: [
              "Source creates datagram with destination IP",
              "Source uses ARP to get router MAC",
              "Source sends frame to router",
              "Router forwards to next hop",
              "Final router uses ARP to get destination MAC"
            ]
          }
        ]
      },
      {
        id: "6.5",
        title: "Ethernet",
        content: "Ethernet is the dominant wired LAN technology.",
        subsections: [
          {
            title: "Ethernet Characteristics",
            bullets: [
              "Connectionless: No handshaking",
              "Unreliable: No ACKs",
              "Uses CSMA/CD with exponential backoff",
              "Bus topology (historical) or star topology (modern)",
              "Switched Ethernet: Full duplex, no collisions"
            ]
          },
          {
            title: "Ethernet Frame Structure",
            bullets: [
              "Preamble (8 bytes): Synchronization",
              "Destination MAC address (6 bytes)",
              "Source MAC address (6 bytes)",
              "Type (2 bytes): Upper layer protocol",
              "Data (46-1500 bytes)",
              "CRC (4 bytes): Error detection"
            ]
          },
          {
            title: "Ethernet Standards",
            bullets: [
              "10BASE-T: 10 Mbps over twisted pair",
              "100BASE-TX: Fast Ethernet, 100 Mbps",
              "1000BASE-T: Gigabit Ethernet, 1 Gbps",
              "10GBASE-T: 10 Gigabit Ethernet",
              "All use same frame format"
            ]
          }
        ]
      },
      {
        id: "6.6",
        title: "Link-Layer Switches",
        content: "Switches operate at the link layer, forwarding frames based on MAC addresses.",
        subsections: [
          {
            title: "Switch Operation",
            bullets: [
              "Store-and-forward frames",
              "Examine incoming frame's MAC destination",
              "Forward to appropriate interface(s)",
              "Use switch table (MAC-to-interface mapping)",
              "Self-learning: Build table from source MACs"
            ]
          },
          {
            title: "Self-Learning Switch",
            bullets: [
              "Switch table initially empty",
              "Record source MAC and incoming interface",
              "If destination in table: forward to that interface",
              "If destination not in table: flood to all except incoming",
              "Entries aged and removed after inactivity"
            ]
          },
          {
            title: "Switches vs Routers",
            bullets: [
              "Switches: Link layer, MAC addresses, flooding",
              "Routers: Network layer, IP addresses, routing protocols",
              "Switches: Plug-and-play, no configuration",
              "Routers: Require addressing and configuration",
              "Switches: Single broadcast domain",
              "Routers: Separate broadcast domains"
            ]
          }
        ]
      },
      {
        id: "6.7",
        title: "VLANs",
        content: "Virtual LANs allow logical segmentation of a physical LAN.",
        subsections: [
          {
            title: "VLAN Basics",
            bullets: [
              "Single physical switch -> multiple virtual LANs",
              "Port-based VLAN: Ports assigned to VLANs",
              "Traffic isolated between VLANs",
              "Router needed for inter-VLAN communication",
              "Simplifies management and improves security"
            ]
          },
          {
            title: "VLAN Trunking",
            bullets: [
              "Multiple VLANs over single physical link",
              "802.1Q tag added to Ethernet frame",
              "Tag contains VLAN identifier (12 bits)",
              "Native VLAN: Untagged frames on trunk"
            ]
          }
        ]
      }
    ],
    diagrams: [
      {
        id: "fig6-1",
        title: "Ethernet Frame Format",
        description: "Structure of an Ethernet frame",
        mermaidCode: `graph LR
    subgraph Ethernet_Frame
        P[Preamble 8 bytes]
        DM[Dest MAC 6 bytes]
        SM[Source MAC 6 bytes]
        T[Type 2 bytes]
        D[Data 46-1500 bytes]
        CRC[CRC 4 bytes]
    end
    
    P --> DM --> SM --> T --> D --> CRC
    
    Note["Type indicates upper layer protocol e.g. 0x0800 for IP"]`
      },
      {
        id: "fig6-2",
        title: "ARP Operation",
        description: "Address Resolution Protocol",
        mermaidCode: `sequenceDiagram
    participant A as Host A
    participant B as Host B
    participant All as All Hosts
    
    Note over A: Wants to send to 10.0.0.2
    
    A->>All: ARP Request: Who has 10.0.0.2?
    Note right of All: Broadcast to all
    
    B->>A: ARP Reply: 10.0.0.2 is at 00:1A:2B:3C:4D:5E
    Note right of B: Unicast to A
    
    Note over A: Caches IP-to-MAC mapping`
      },
      {
        id: "fig6-3",
        title: "Self-Learning Switch",
        description: "How switches build forwarding tables",
        mermaidCode: `graph TB
    subgraph Switch
        T[Switch Table]
    end
    
    subgraph Hosts
        A[Host A MAC-A]
        B[Host B MAC-B]
        C[Host C MAC-C]
    end
    
    A -->|Frame from MAC-A on Port 1| T
    T -->|Learn: MAC-A on Port 1| T
    
    B -->|Frame to MAC-A on Port 2| T
    T -->|Forward to Port 1| A
    T -->|Learn: MAC-B on Port 2| T
    
    C -->|Frame to unknown on Port 3| T
    T -->|Flood to Port 1 and 2| A
    T -->|Flood to Port 1 and 2| B
    T -->|Learn: MAC-C on Port 3| T`
      },
      {
        id: "fig6-4",
        title: "VLAN Configuration",
        description: "Port-based VLANs on a switch",
        mermaidCode: `graph TB
    subgraph Switch
        subgraph VLAN_10
            P1[Port 1]
            P2[Port 2]
        end
        
        subgraph VLAN_20
            P3[Port 3]
            P4[Port 4]
        end
        
        subgraph Trunk
            P5[Port 5 Trunk]
        end
    end
    
    subgraph VLAN10_Hosts
        H1[Host A]
        H2[Host B]
    end
    
    subgraph VLAN20_Hosts
        H3[Host C]
        H4[Host D]
    end
    
    H1 --> P1
    H2 --> P2
    H3 --> P3
    H4 --> P4
    
    Note["VLANs isolated - Router needed for inter-VLAN"]`
      },
      {
        id: "fig6-5",
        title: "CSMA/CD",
        description: "Carrier Sense Multiple Access with Collision Detection",
        mermaidCode: `sequenceDiagram
    participant A as Host A
    participant B as Host B
    participant Medium as Shared Medium
    
    Note over A,B: Both sense medium idle
    
    A->>Medium: Start transmitting
    B->>Medium: Start transmitting
    
    Note over Medium: Collision detected
    
    A->>A: Jam signal
    B->>B: Jam signal
    
    Note over A: Wait random time exponential backoff
    Note over B: Wait random time exponential backoff`
      },
      {
        id: "fig6-6",
        title: "Ethernet Frame Format - Detailed",
        description: "Complete Ethernet frame structure with field sizes",
        mermaidCode: `graph LR
    subgraph Ethernet_Frame["Ethernet Frame (64-1518 bytes)"]
        direction TB
        
        subgraph Preamble["Preamble (8 bytes)"]
            PR[7 bytes: 10101010<br/>1 byte: 10101011 SFD]
        end
        
        subgraph Ethernet_Header["Ethernet Header (14 bytes)"]
            EH1[Dest MAC: 6 bytes]
            EH2[Source MAC: 6 bytes]
            EH3[Type: 2 bytes<br/>0x0800=IPv4 0x86DD=IPv6]
        end
        
        subgraph Payload["Payload (46-1500 bytes)"]
            PL[IP Datagram or<br/>Other Network Layer Data]
        end
        
        subgraph Trailer["Trailer (4 bytes)"]
            TR[CRC-32: 4 bytes]
        end
        
        PR --> EH1 --> EH2 --> EH3 --> PL --> TR
    end
    
    style PR fill:#f3e5f5
    style EH1 fill:#e1f5ff
    style EH2 fill:#e8f5e9
    style EH3 fill:#fff3e0
    style PL fill:#ffe1e1
    style TR fill:#fce4ec`
      },
      {
        id: "fig6-7",
        title: "802.1Q VLAN Tagged Frame",
        description: "Ethernet frame with VLAN tag inserted",
        mermaidCode: `graph LR
    subgraph Standard_Frame["Standard Ethernet Frame"]
        SF1[Dest MAC 6B]
        SF2[Source MAC 6B]
        SF3[Type 2B]
        SF4[Data 46-1500B]
        SF5[CRC 4B]
    end
    
    subgraph VLAN_Frame["802.1Q VLAN Frame"]
        VF1[Dest MAC 6B]
        VF2[Source MAC 6B]
        VF3[VLAN Tag 4B]
        VF4[Type 2B]
        VF5[Data 46-1500B]
        VF6[CRC 4B]
    end
    
    subgraph VLAN_Tag_Detail["VLAN Tag Detail (4 bytes)"]
        VT1[TPID: 0x8100 16 bits]
        VT2[PCP: 3 bits]
        VT3[DEI: 1 bit]
        VT4[VID: 12 bits]
    end
    
    SF1 --> SF2 --> SF3 --> SF4 --> SF5
    VF1 --> VF2 --> VF3 --> VF4 --> VF5 --> VF6
    VF3 -.-> VLAN_Tag_Detail
    
    style VF3 fill:#fff3cd`
      },
      {
        id: "fig6-8",
        title: "Frame Processing - Send and Receive",
        description: "How frames are processed at link layer",
        mermaidCode: `graph TB
    subgraph Sender["📤 Sender Link Layer"]
        S1[Receive Datagram from Network Layer]
        S2[Create Frame<br/>Add MAC Headers]
        S3[Calculate CRC]
        S4[Transmit Bits to Physical Layer]
    end
    
    subgraph Receiver["📥 Receiver Link Layer"]
        R1[Receive Bits from Physical Layer]
        R2[Parse Frame<br/>Extract Headers]
        R3[Verify CRC]
        R4{CRC Valid?}
        R5[Deliver Datagram to Network Layer]
        R6[Drop Frame<br/>Error!]
    end
    
    S1 --> S2 --> S3 --> S4
    S4 -.->|Physical Medium| R1
    R1 --> R2 --> R3 --> R4
    R4 -->|Yes| R5
    R4 -->|No| R6
    
    style S2 fill:#e1f5ff
    style R2 fill:#e8f5e9
    style R5 fill:#d4edda
    style R6 fill:#f8d7da`
      }
    ],
    keyConcepts: [
      { term: "MAC Address", definition: "48-bit flat link-layer address burned into NIC" },
      { term: "ARP", definition: "Address Resolution Protocol - maps IP to MAC address" },
      { term: "Frame", definition: "Link-layer PDU encapsulating network-layer datagram" },
      { term: "CRC", definition: "Cyclic Redundancy Check - error detection code" },
      { term: "CSMA/CD", definition: "Carrier Sense Multiple Access with Collision Detection" },
      { term: "CSMA/CA", definition: "Carrier Sense Multiple Access with Collision Avoidance" },
      { term: "Switch", definition: "Link-layer device forwarding frames based on MAC address" },
      { term: "VLAN", definition: "Virtual LAN - logical segmentation of physical LAN" },
      { term: "Broadcast Domain", definition: "Network segment where broadcast frames are received by all nodes" },
      { term: "Collision Domain", definition: "Network segment where collisions can occur" },
      { term: "Switch Table", definition: "MAC-to-interface mapping used by switches" },
      { term: "Self-Learning", definition: "Switches learn MAC addresses from incoming frames" },
      { term: "Trunk Port", definition: "Switch port carrying traffic for multiple VLANs" },
      { term: "802.1Q", definition: "VLAN tagging standard" }
    ],
    formulas: [
      {
        name: "Slotted ALOHA Efficiency",
        formula: "Efficiency = N * p * (1-p)^(N-1)",
        explanation: "Maximum efficiency = 1/e = 37% when N large, p=1/N"
      },
      {
        name: "Pure ALOHA Efficiency",
        formula: "Efficiency = N * p * (1-p)^(2(N-1))",
        explanation: "Maximum efficiency = 1/(2e) = 18%"
      },
      {
        name: "CRC",
        formula: "D * 2^r XOR R = nG",
        explanation: "D=data bits, R=CRC bits, G=generator polynomial, n=integer"
      }
    ],
    practiceProblems: [
      {
        question: "Why does Ethernet use CSMA/CD instead of CSMA/CA?",
        solution: "Ethernet uses CSMA/CD because wired Ethernet can detect collisions in real-time by monitoring signal voltage. When collision detected, transmission stops immediately, saving bandwidth. CSMA/CA is used in wireless where collision detection is difficult due to signal fading.",
        hint: "Consider the physical characteristics of wired vs wireless media."
      },
      {
        question: "How does a switch know which port to forward a frame to?",
        solution: "Switches maintain a switch table mapping MAC addresses to ports. When a frame arrives, the switch: (1) Records source MAC and incoming port, (2) Looks up destination MAC in table, (3) If found, forwards to that port; if not, floods to all ports except incoming.",
        hint: "Think about the self-learning mechanism."
      },
      {
        question: "Compare switches and routers. When would you use each?",
        solution: "Switches: Link layer, MAC addresses, plug-and-play, single broadcast domain, good for LANs. Routers: Network layer, IP addresses, require configuration, separate broadcast domains, connect networks. Use switches within LANs; routers between networks or to separate broadcast domains.",
        hint: "Consider layer of operation and broadcast domain handling."
      }
    ],
    images: [
      {
        src: "/images/chapter6-ethernet.jpg",
        alt: "Ethernet Frame and MAC Addressing",
        caption: "Ethernet frame structure and MAC address format"
      }
    ],
    codeExamples: [
      {
        title: "CRC Calculation in Go",
        description: "Implementing cyclic redundancy check",
        language: "go",
        code: `package main

import (
	"encoding/binary"
	"fmt"
	"hash/crc32"
)

// CalculateCRC32 computes IEEE CRC-32
func CalculateCRC32(data []byte) uint32 {
	table := crc32.MakeTable(crc32.IEEE)
	return crc32.Checksum(data, table)
}

// VerifyCRC checks if data matches CRC
func VerifyCRC(data []byte, expectedCRC uint32) bool {
	computed := CalculateCRC32(data)
	return computed == expectedCRC
}

func main() {
	// Example Ethernet frame data
	frame := []byte("Hello, Ethernet Frame!")
	
	// Calculate CRC
	crc := CalculateCRC32(frame)
	fmt.Printf("Data: %s\\n", frame)
	fmt.Printf("CRC-32: 0x%08X\\n", crc)
	
	// Verify
	valid := VerifyCRC(frame, crc)
	fmt.Printf("CRC valid: %v\\n", valid)
	
	// Simulate corruption
	corrupted := append([]byte{}, frame...)
	corrupted[0] = 'X'
	validCorrupted := VerifyCRC(corrupted, crc)
	fmt.Printf("CRC valid after corruption: %v\\n", validCorrupted)
	
	// Ethernet FCS (Frame Check Sequence) example
	fmt.Println("\\nEthernet FCS calculation:")
	destMAC := []byte{0x00, 0x1A, 0x2B, 0x3C, 0x4D, 0x5E}
	srcMAC := []byte{0x00, 0x11, 0x22, 0x33, 0x44, 0x55}
	ethType := []byte{0x08, 0x00} // IPv4
	payload := []byte("IP packet data...")
	
	// Build frame (without FCS)
	ethFrame := append(destMAC, srcMAC...)
	ethFrame = append(ethFrame, ethType...)
	ethFrame = append(ethFrame, payload...)
	
	fcs := CalculateCRC32(ethFrame)
	fmt.Printf("Frame length: %d bytes\\n", len(ethFrame))
	fmt.Printf("FCS: 0x%08X\\n", binary.BigEndian.Uint32([]byte{
		byte(fcs >> 24), byte(fcs >> 16),
		byte(fcs >> 8), byte(fcs),
	}))
}`
      },
      {
        title: "Self-Learning Switch Simulation in Go",
        description: "Simulating switch MAC table learning",
        language: "go",
        code: `package main

import (
	"fmt"
	"net"
	"time"
)

// MACEntry represents a MAC table entry
type MACEntry struct {
	MAC       net.HardwareAddr
	Port      int
	Timestamp time.Time
}

// Switch simulates a self-learning switch
type Switch struct {
	macTable map[string]MACEntry
	ports    int
}

func NewSwitch(numPorts int) *Switch {
	return &Switch{
		macTable: make(map[string]MACEntry),
		ports:    numPorts,
	}
}

// LearnMAC learns a MAC address from incoming port
func (s *Switch) LearnMAC(mac net.HardwareAddr, port int) {
	key := mac.String()
	s.macTable[key] = MACEntry{
		MAC:       mac,
		Port:      port,
		Timestamp: time.Now(),
	}
	fmt.Printf("Learned: %s on port %d\\n", mac, port)
}

// LookupPort finds the port for a MAC address
func (s *Switch) LookupPort(mac net.HardwareAddr) (int, bool) {
	entry, exists := s.macTable[mac.String()]
	if !exists {
		return 0, false
	}
	return entry.Port, true
}

// ForwardFrame determines where to forward a frame
func (s *Switch) ForwardFrame(srcMAC, dstMAC net.HardwareAddr, incomingPort int) []int {
	// Learn source MAC
	s.LearnMAC(srcMAC, incomingPort)
	
	// Lookup destination
	port, found := s.LookupPort(dstMAC)
	if found {
		fmt.Printf("Forward to port %d\\n", port)
		return []int{port}
	}
	
	// Flood to all ports except incoming
	fmt.Println("Unknown destination - flooding")
	var floodPorts []int
	for i := 1; i <= s.ports; i++ {
		if i != incomingPort {
			floodPorts = append(floodPorts, i)
		}
	}
	return floodPorts
}

func main() {
	switch1 := NewSwitch(4)
	
	// Simulate frames arriving
	mac1, _ := net.ParseMAC("00:11:22:33:44:55")
	mac2, _ := net.ParseMAC("00:AA:BB:CC:DD:EE")
	mac3, _ := net.ParseMAC("00:FF:EE:DD:CC:BB")
	
	fmt.Println("=== Frame 1: A -> B on port 1 ===")
	switch1.ForwardFrame(mac1, mac2, 1)
	
	fmt.Println("\\n=== Frame 2: B -> A on port 2 ===")
	switch1.ForwardFrame(mac2, mac1, 2)
	
	fmt.Println("\\n=== Frame 3: A -> C (unknown) on port 1 ===")
	ports := switch1.ForwardFrame(mac1, mac3, 1)
	fmt.Printf("Flood to ports: %v\\n", ports)
	
	fmt.Println("\\n=== MAC Table ===")
	for mac, entry := range switch1.macTable {
		fmt.Printf("%s -> Port %d (learned at %s)\\n",
			mac, entry.Port, entry.Timestamp.Format("15:04:05"))
	}
}`
      }
    ],
    comparisons: [
      {
        title: "CSMA/CD vs CSMA/CA",
        itemA: "CSMA/CD (Ethernet)",
        itemB: "CSMA/CA (WiFi)",
        points: [
          { aspect: "Medium", itemAValue: "Wired", itemBValue: "Wireless" },
          { aspect: "Collision Detection", itemAValue: "Yes (voltage sensing)", itemBValue: "No (cannot detect)" },
          { aspect: "Collision Handling", itemAValue: "Abort and retry", itemBValue: "Avoid with RTS/CTS" },
          { aspect: "ACK Required", itemAValue: "No", itemBValue: "Yes" },
          { aspect: "RTS/CTS", itemAValue: "Not used", itemBValue: "Optional" },
          { aspect: "Efficiency", itemAValue: "Higher", itemBValue: "Lower (overhead)" }
        ]
      },
      {
        title: "Switch vs Router",
        itemA: "Switch",
        itemB: "Router",
        points: [
          { aspect: "OSI Layer", itemAValue: "Layer 2 (Link)", itemBValue: "Layer 3 (Network)" },
          { aspect: "Address Type", itemAValue: "MAC Address", itemBValue: "IP Address" },
          { aspect: "Forwarding", itemAValue: "MAC table lookup", itemBValue: "Routing table lookup" },
          { aspect: "Configuration", itemAValue: "Plug-and-play", itemBValue: "Requires configuration" },
          { aspect: "Broadcast Domain", itemAValue: "Single domain", itemBValue: "Separates domains" },
          { aspect: "Use Case", itemAValue: "LAN connectivity", itemBValue: "Inter-network routing" }
        ]
      }
    ],
    realWorldApplications: [
      {
        title: "Container Network Interface (CNI)",
        role: "DevOps",
        scenario: "Configuring networking for Kubernetes cluster with 1000+ pods",
        application: "Container networking uses virtual Ethernet pairs (veth) - similar to physical link layer. Understanding MAC addresses, ARP, and bridging helps debug pod connectivity issues.",
        bestPractices: [
          "Use CNI plugins with proper IPAM (host-local, calico-ipam)",
          "Enable hairpin mode for pod-to-service-to-pod communication",
          "Monitor ARP table size on nodes",
          "Use eBPF-based CNIs (Cilium) for performance",
          "Implement network policies for segmentation"
        ],
        tools: ["Calico", "Cilium", "Flannel", "Weave", "Multus"]
      },
      {
        title: "VLAN Segmentation",
        role: "Network Engineer",
        scenario: "Isolating production, staging, and management traffic on shared infrastructure",
        application: "VLANs provide logical separation at Layer 2. Understanding 802.1Q tagging helps configure trunk ports between switches. Proper segmentation improves security and reduces broadcast traffic.",
        bestPractices: [
          "Use VLANs to separate security zones",
          "Document VLAN assignments and purposes",
          "Use native VLAN only for management",
          "Implement PVLAN for host isolation",
          "Monitor for VLAN hopping attacks"
        ],
        tools: ["vlan", "bridge-utils", "tcpdump", "Wireshark", "Nmap"]
      },
      {
        title: "Network Interface Troubleshooting",
        role: "SRE",
        scenario: "Investigating packet loss on database servers",
        application: "Understanding Ethernet frame structure helps identify issues: FCS errors indicate physical layer problems, giant frames suggest MTU misconfiguration, CRC errors point to cable/NIC issues.",
        bestPractices: [
          "Check interface counters for errors (ifconfig -a)",
          "Verify MTU settings end-to-end",
          "Monitor for RX/TX drops and overruns",
          "Use ethtool to check NIC offload settings",
          "Enable NIC multiqueue for high throughput"
        ],
        tools: ["ethtool", "ip", "ss", "netstat", "nicstat", "ethtool -S"]
      }
    ],
    comparisonDiagrams: [
      {
        id: "comp6-1",
        title: "Hub vs Switch vs Router",
        mermaidCode: `graph TB
    subgraph Hub["🔌 Hub (Layer 1)"]
        H1[Device A] -->|All traffic| HU[Hub]
        H2[Device B] -->|All traffic| HU
        H3[Device C] -->|All traffic| HU
        HU -->|Broadcasts to ALL| H1
        HU -->|Broadcasts to ALL| H2
        HU -->|Broadcasts to ALL| H3
        
        style HU fill:#ffcccc
    end
    
    subgraph Switch["🔄 Switch (Layer 2)"]
        S1[Device A] -->|MAC-A| SW[Switch]
        S2[Device B] -->|MAC-B| SW
        S3[Device C] -->|MAC-C| SW
        SW -->|Learns MACs| SW_Table[MAC Table]
        SW -->|Forwards to Port| S2
        
        style SW fill:#ccffcc
        style SW_Table fill:#e6ffe6
    end
    
    subgraph Router["🌐 Router (Layer 3)"]
        R1[Network A] -->|IP routing| RO[Router]
        R2[Network B] -->|IP routing| RO
        R3[Network C] -->|IP routing| RO
        RO -->|Uses routing table| RO_Table[Routing Table]
        
        style RO fill:#ccccff
        style RO_Table fill:#e6e6ff
    end` 
      },
      {
        id: "comp6-2",
        title: "CSMA/CD vs CSMA/CA Process",
        mermaidCode: `sequenceDiagram
    rect rgb(255, 235, 238)
        Note over A,B: CSMA/CD (Wired Ethernet)
        participant A as Host A
        participant M as Medium
        participant B as Host B
        
        A->>M: Sense channel (idle)
        A->>M: Start transmitting
        B->>M: Also transmits (collision!)
        M->>A: Detect collision
        M->>B: Detect collision
        A->>A: Send jam signal
        A->>A: Backoff and retry
    end
    
    rect rgb(232, 245, 233)
        Note over C,D: CSMA/CA (Wireless)
        participant C as Host C
        participant CH as Channel
        participant D as Host D
        
        C->>CH: Sense channel (idle)
        C->>CH: DIFS wait
        C->>CH: RTS (Request to Send)
        CH->>D: CTS (Clear to Send)
        C->>CH: Data transmission
        CH->>C: ACK
    end` 
      }
    ]
  },
  {
    id: 7,
    title: "Wireless and Mobile Networks",
    subtitle: "WiFi and Cellular",
    overview: "Wireless networks present unique challenges due to signal attenuation, interference, and mobility. We examine wireless links, WiFi (802.11), and cellular networks.",
    sections: [
      {
        id: "7.1",
        title: "Wireless Links and Network Characteristics",
        content: "Wireless links have different characteristics than wired links.",
        subsections: [
          {
            title: "Wireless Link Characteristics",
            bullets: [
              "Decreased signal strength with distance (path loss)",
              "Interference from other sources",
              "Multipath propagation: Signal reflects off objects",
              "Signal strength varies with movement",
              "SNR (Signal-to-Noise Ratio) determines BER"
            ]
          },
          {
            title: "Wireless Network Elements",
            bullets: [
              "Wireless hosts: Laptops, smartphones, IoT devices",
              "Wireless links: Connect hosts to base station or each other",
              "Base station: Relay between wireless and wired network",
              "Infrastructure mode: Hosts connect through base station",
              "Ad hoc mode: Hosts communicate directly"
            ]
          },
          {
            title: "Wireless Network Taxonomy",
            bullets: [
              "Single hop with infrastructure: WiFi, 4G/5G",
              "Single hop without infrastructure: Bluetooth, ad hoc",
              "Multi-hop with infrastructure: Wireless mesh",
              "Multi-hop without infrastructure: MANET, VANET"
            ]
          }
        ]
      },
      {
        id: "7.2",
        title: "WiFi: 802.11 Wireless LANs",
        content: "IEEE 802.11 (WiFi) is the dominant wireless LAN technology.",
        subsections: [
          {
            title: "802.11 Architecture",
            bullets: [
              "Basic Service Set (BSS): AP + associated stations",
              "Infrastructure BSS: AP connected to wired network",
              "Independent BSS: Ad hoc network, no AP",
              "Extended Service Set (ESS): Multiple BSSs",
              "AP broadcasts beacons with SSID"
            ]
          },
          {
            title: "802.11 Channels",
            bullets: [
              "Spectrum divided into channels",
              "2.4 GHz: 11 channels in US (only 1, 6, 11 non-overlapping)",
              "5 GHz: More channels, less interference",
              "AP administrator chooses channel",
              "Auto-channel selection available"
            ]
          },
          {
            title: "802.11 Association",
            bullets: [
              "Station must associate with AP before sending",
              "Scanning: Passive (listen for beacons) or active (probe)",
              "Authentication: Open or with password (WPA2/WPA3)",
              "Association request/response exchange",
              "DHCP to obtain IP address"
            ]
          },
          {
            title: "802.11 MAC Protocol",
            bullets: [
              "CSMA/CA: Collision avoidance, not detection",
              "Cannot detect collision while transmitting",
              "RTS/CTS: Reserve channel before transmission",
              "ACKs: Positive acknowledgment of received frames",
              "Backoff: Random wait after busy medium"
            ],
            important: "Wireless uses CSMA/CA because collision detection is difficult - the transmitter's signal overwhelms any received signal."
          },
          {
            title: "802.11 Frame Structure",
            bullets: [
              "Frame control: Type, subtype, flags",
              "Duration: Time channel will be reserved",
              "Address 1-4: MAC addresses (complex addressing)",
              "Sequence control: Fragmentation/reassembly",
              "Payload: Data (up to 2312 bytes)",
              "CRC: Error detection"
            ]
          },
          {
            title: "802.11 Standards",
            bullets: [
              "802.11b: 2.4 GHz, up to 11 Mbps",
              "802.11a: 5 GHz, up to 54 Mbps",
              "802.11g: 2.4 GHz, up to 54 Mbps",
              "802.11n (WiFi 4): 2.4/5 GHz, up to 600 Mbps",
              "802.11ac (WiFi 5): 5 GHz, up to 3.5 Gbps",
              "802.11ax (WiFi 6): 2.4/5 GHz, up to 9.6 Gbps"
            ]
          }
        ]
      },
      {
        id: "7.3",
        title: "Cellular Internet Access",
        content: "Cellular networks provide wide-area wireless Internet access.",
        subsections: [
          {
            title: "Cellular Network Architecture",
            bullets: [
              "Cells: Geographic area covered by base station",
              "Base station (cell tower): Provides wireless coverage",
              "Mobile Switching Center (MSC): Connects cells",
              "Home network: Where user has subscription",
              "Visited network: Where user currently roams"
            ]
          },
          {
            title: "4G LTE Architecture",
            bullets: [
              "UE: User Equipment (phone, modem)",
              "eNodeB: Base station (evolved Node B)",
              "EPC: Evolved Packet Core",
              "MME: Mobility Management Entity",
              "S-GW: Serving Gateway (data plane)",
              "P-GW: PDN Gateway (connects to Internet)"
            ]
          },
          {
            title: "5G Architecture",
            bullets: [
              "gNB: 5G base station",
              "5G Core: Cloud-native architecture",
              "Network slicing: Virtual networks for different services",
              "Edge computing: Processing closer to users",
              "mmWave: Very high frequencies (24-100 GHz)"
            ]
          },
          {
            title: "Mobility Management",
            bullets: [
              "Handoff: Moving between base stations",
              "Home Location Register (HLR): User home info",
              "Visitor Location Register (VLR): Current location",
              "Routing to mobile: Triangle routing problem"
            ]
          }
        ]
      },
      {
        id: "7.4",
        title: "Mobility Management: Principles",
        content: "Managing mobile devices as they move between networks.",
        subsections: [
          {
            title: "Mobility Approaches",
            bullets: [
              "Let routing handle it: Advertise mobile's location",
              "Indirect routing: Home agent forwards packets",
              "Direct routing: Correspondent sends directly to mobile"
            ]
          },
          {
            title: "Mobile IP",
            bullets: [
              "Permanent address: Home network address",
              "Care-of address: Current foreign network address",
              "Home agent: Entity in home network",
              "Foreign agent: Entity in foreign network (optional)",
              "Registration: Mobile registers care-of address"
            ]
          }
        ]
      }
    ],
    diagrams: [
      {
        id: "fig7-1",
        title: "802.11 Architecture",
        description: "Basic Service Set and Extended Service Set",
        mermaidCode: `graph TB
    subgraph ESS
        subgraph BSS1
            AP1[Access Point 1]
            S1A[Station 1A]
            S1B[Station 1B]
        end
        
        subgraph BSS2
            AP2[Access Point 2]
            S2A[Station 2A]
            S2B[Station 2B]
        end
        
        DS[Distribution System]
    end
    
    AP1 --> DS
    AP2 --> DS
    S1A -.->|Associate| AP1
    S1B -.->|Associate| AP1
    S2A -.->|Associate| AP2
    S2B -.->|Associate| AP2
    
    Note["DS connects APs - ESS allows roaming"]`
      },
      {
        id: "fig7-2",
        title: "CSMA/CA with RTS/CTS",
        description: "Collision avoidance in WiFi",
        mermaidCode: `sequenceDiagram
    participant A as Station A
    participant AP as Access Point
    participant B as Station B
    
    Note over A,B: A wants to send to AP
    
    A->>AP: RTS Request to Send
    Note right of AP: Reserves channel
    AP->>A: CTS Clear to Send
    AP->>B: CTS heard by all
    
    Note over B: B sets NAV defers
    
    A->>AP: Data
    AP->>A: ACK
    
    Note over B: B can now contend`
      },
      {
        id: "fig7-3",
        title: "4G LTE Architecture",
        description: "LTE network components",
        mermaidCode: `graph TB
    subgraph UE
        PHONE[User Equipment]
    end
    
    subgraph Radio_Network
        ENB[eNodeB Base Station]
    end
    
    subgraph EPC_Core
        MME[Mobility Management Entity]
        SGW[Serving Gateway]
        PGW[PDN Gateway]
        HSS[Home Subscriber Server]
    end
    
    subgraph Internet
        NET[Internet]
    end
    
    PHONE -->|LTE-Uu| ENB
    ENB -->|S1-MME| MME
    ENB -->|S1-U| SGW
    MME -->|S11| SGW
    SGW -->|S5/S8| PGW
    MME -->|S6a| HSS
    PGW -->|SGi| NET`
      },
      {
        id: "fig7-4",
        title: "Mobile IP",
        description: "Indirect routing to mobile host",
        mermaidCode: `graph TB
    subgraph Home_Network
        HA[Home Agent]
        MN_H[Mobile Node Home Address]
    end
    
    subgraph Foreign_Network
        FA[Foreign Agent]
        MN[Mobile Node Care-of Address]
    end
    
    CN[Correspondent Node]
    
    CN -->|1. Send to MN home| HA
    HA -->|2. Encapsulate forward| FA
    FA -->|3. Deliver| MN
    MN -->|Direct| CN
    
    Note["Triangle routing via home agent"]`
      },
      {
        id: "fig7-5",
        title: "Cellular Handoff",
        description: "Moving between base stations",
        mermaidCode: `sequenceDiagram
    participant UE as User Equipment
    participant BS1 as Base Station 1
    participant BS2 as Base Station 2
    participant MSC as Mobile Switching Center
    
    Note over UE,BS1: Connected to BS1
    
    UE->>BS1: Signal strength decreasing
    UE->>BS2: Signal strength increasing
    
    UE->>BS1: Measurement report
    BS1->>MSC: Handoff request
    MSC->>BS2: Allocate resources
    BS2->>MSC: Resources allocated
    
    MSC->>UE: Handoff command
    UE->>BS2: Handoff complete
    BS2->>MSC: Handoff complete
    
    Note over UE,BS2: Now connected to BS2`
      }
    ],
    keyConcepts: [
      { term: "BSS", definition: "Basic Service Set - AP and associated stations" },
      { term: "ESS", definition: "Extended Service Set - multiple BSSs connected" },
      { term: "SSID", definition: "Service Set Identifier - network name" },
      { term: "CSMA/CA", definition: "Carrier Sense Multiple Access with Collision Avoidance" },
      { term: "RTS/CTS", definition: "Request to Send / Clear to Send - channel reservation" },
      { term: "NAV", definition: "Network Allocation Vector - virtual carrier sensing" },
      { term: "AP", definition: "Access Point - base station in WiFi" },
      { term: "eNodeB", definition: "Evolved Node B - 4G LTE base station" },
      { term: "gNB", definition: "Next Generation Node B - 5G base station" },
      { term: "EPC", definition: "Evolved Packet Core - 4G core network" },
      { term: "Handoff", definition: "Moving mobile from one base station to another" },
      { term: "Home Agent", definition: "Entity in home network that forwards packets to mobile" },
      { term: "Care-of Address", definition: "Mobile's temporary address in foreign network" },
      { term: "Path Loss", definition: "Signal attenuation with distance" },
      { term: "Multipath", definition: "Signal arriving via multiple paths due to reflection" }
    ],
    formulas: [
      {
        name: "Free Space Path Loss",
        formula: "PL(d) = (4*pi*d*f/c)^2",
        explanation: "d=distance, f=frequency, c=speed of light"
      },
      {
        name: "SNR",
        formula: "SNR = Signal Power / Noise Power",
        explanation: "Higher SNR means better signal quality"
      }
    ],
    practiceProblems: [
      {
        question: "Why does WiFi use CSMA/CA instead of CSMA/CD?",
        solution: "WiFi uses CSMA/CA because: (1) Wireless transceivers cannot transmit and receive simultaneously on same frequency, (2) Transmitter's own signal would overwhelm any collision signal, (3) Hidden terminal problem - collisions at receiver not detectable by sender, (4) Fading makes signal strength unreliable for collision detection.",
        hint: "Consider the physical limitations of wireless communication."
      },
      {
        question: "Explain the hidden terminal problem in wireless networks.",
        solution: "Hidden terminal problem: A and C can both reach B but cannot hear each other. When A transmits to B, C doesn't know and may also transmit to B, causing collision at B. RTS/CTS helps by having B announce channel reservation that both A and C can hear.",
        hint: "Think about nodes that are out of range of each other but both in range of a common node."
      },
      {
        question: "What is the purpose of the home agent in Mobile IP?",
        solution: "The home agent maintains the mobile node's location information and forwards packets to the mobile's current care-of address. When a correspondent sends to the mobile's permanent (home) address, the home agent intercepts the packet and tunnels it to the mobile's current location.",
        hint: "Consider how to reach a mobile that has moved away from its home network."
      }
    ],
    images: [
      {
        src: "/images/chapter7-wireless.jpg",
        alt: "WiFi Architecture",
        caption: "802.11 WiFi components and CSMA/CA process"
      }
    ],
    codeExamples: [
      {
        title: "WiFi Signal Strength Calculator in Go",
        description: "Calculate path loss and signal strength",
        language: "go",
        code: `package main

import (
	"fmt"
	"math"
)

// Constants
const (
	SpeedOfLight = 3e8 // m/s
	Pi           = math.Pi
)

// FreeSpacePathLoss calculates FSPL in dB
func FreeSpacePathLoss(distance float64, frequency float64) float64 {
	// FSPL(dB) = 20*log10(d) + 20*log10(f) + 20*log10(4*pi/c)
	// Simplified: FSPL(dB) = 20*log10(d) + 20*log10(f) - 147.55
	return 20*math.Log10(distance) + 20*math.Log10(frequency) - 147.55
}

// ReceivedSignalPower calculates received power in dBm
func ReceivedSignalPower(txPowerDBm, pathLossDB, txGainDB, rxGainDB float64) float64 {
	return txPowerDBm - pathLossDB + txGainDB + rxGainDB
}

// SNR calculates signal-to-noise ratio
func SNR(signalPowerDBm, noisePowerDBm float64) float64 {
	return signalPowerDBm - noisePowerDBm
}

func main() {
	// Example: 2.4 GHz WiFi
	frequency := 2.4e9 // Hz
	txPower := 20.0    // dBm (100 mW)
	txGain := 2.0      // dBi
	rxGain := 2.0      // dBi
	noiseFloor := -90.0 // dBm
	
	fmt.Println("WiFi Signal Strength Calculator")
	fmt.Println("================================")
	fmt.Printf("Frequency: %.1f GHz\\n", frequency/1e9)
	fmt.Printf("TX Power: %.0f dBm\\n", txPower)
	fmt.Println()
	
	distances := []float64{1, 5, 10, 25, 50, 100} // meters
	
	fmt.Printf("%-10s %-15s %-15s %-10s\\n", "Distance", "Path Loss", "RX Power", "SNR")
	fmt.Println(string(make([]byte, 55)))
	
	for _, d := range distances {
		pathLoss := FreeSpacePathLoss(d, frequency)
		rxPower := ReceivedSignalPower(txPower, pathLoss, txGain, rxGain)
		snr := SNR(rxPower, noiseFloor)
		
		quality := "Poor"
		if snr > 25 {
			quality = "Excellent"
		} else if snr > 15 {
			quality = "Good"
		} else if snr > 10 {
			quality = "Fair"
		}
		
		fmt.Printf("%-10.0fm %-15.1f %-15.1f %-10.1f (%s)\\n",
			d, pathLoss, rxPower, snr, quality)
	}
	
	// 5 GHz comparison
	fmt.Println("\\n=== 5 GHz vs 2.4 GHz at 10m ===")
	freq5GHz := 5.0e9
	loss24 := FreeSpacePathLoss(10, 2.4e9)
	loss5 := FreeSpacePathPathLoss(10, freq5GHz)
	fmt.Printf("2.4 GHz path loss: %.1f dB\\n", loss24)
	fmt.Printf("5.0 GHz path loss: %.1f dB\\n", loss5)
	fmt.Printf("Difference: %.1f dB (5 GHz has more loss)\\n", loss5-loss24)
}`
      }
    ],
    comparisons: [
      {
        title: "WiFi (802.11) vs Ethernet",
        itemA: "WiFi (802.11)",
        itemB: "Ethernet (802.3)",
        points: [
          { aspect: "Medium", itemAValue: "Wireless radio", itemBValue: "Wired (copper/fiber)" },
          { aspect: "MAC Protocol", itemAValue: "CSMA/CA", itemBValue: "CSMA/CD (half-duplex)" },
          { aspect: "Collision Detection", itemAValue: "Not possible", itemBValue: "Possible" },
          { aspect: "Range", itemAValue: "~100m (indoor)", itemBValue: "~100m (twisted pair)" },
          { aspect: "Interference", itemAValue: "Susceptible", itemBValue: "Immune (fiber)" },
          { aspect: "Mobility", itemAValue: "High", itemBValue: "None" },
          { aspect: "Security", itemAValue: "WPA2/WPA3 required", itemBValue: "Physical security" },
          { aspect: "Max Speed", itemAValue: "9.6 Gbps (WiFi 6)", itemBValue: "100 Gbps+" }
        ]
      },
      {
        title: "4G LTE vs 5G",
        itemA: "4G LTE",
        itemB: "5G",
        points: [
          { aspect: "Peak Speed", itemAValue: "1 Gbps", itemBValue: "20 Gbps" },
          { aspect: "Latency", itemAValue: "50 ms", itemBValue: "1 ms" },
          { aspect: "Frequency Bands", itemAValue: "Sub-6 GHz", itemBValue: "Sub-6 + mmWave" },
          { aspect: "Base Station", itemAValue: "eNodeB", itemBValue: "gNB" },
          { aspect: "Core Network", itemAValue: "EPC", itemBValue: "5G Core (cloud-native)" },
          { aspect: "Network Slicing", itemAValue: "Limited", itemBValue: "Native support" }
        ]
      }
    ],
    realWorldApplications: [
      {
        title: "WiFi Network Design for Offices",
        role: "Network Engineer",
        scenario: "Designing WiFi coverage for 10-floor office building with 2000+ employees",
        application: "Understanding CSMA/CA, channel allocation, and interference helps design optimal AP placement. 2.4GHz for range, 5GHz for speed. Channel 1, 6, 11 non-overlapping on 2.4GHz.",
        bestPractices: [
          "Use 5GHz for high-density deployments",
          "Plan for -65 dBm signal strength minimum",
          "Enable band steering to push clients to 5GHz",
          "Use 20MHz channels on 2.4GHz, 40/80MHz on 5GHz",
          "Implement 802.11k/v/r for seamless roaming"
        ],
        tools: ["Ekahau", "AirMagnet", "WiFi Analyzer", "inSSIDer", "Wireshark"]
      },
      {
        title: "Mobile App Offline-First Design",
        role: "Backend Engineer",
        scenario: "Building ride-sharing app for emerging markets with intermittent connectivity",
        application: "Understanding cellular handoffs and mobile IP helps design resilient apps. Queue requests locally, sync when connected. Handle IP changes gracefully during handoffs.",
        bestPractices: [
          "Implement request queueing with exponential backoff",
          "Use connection pooling with short timeouts",
          "Design idempotent APIs for retry safety",
          "Implement local caching with TTL",
          "Monitor connection state changes"
        ],
        tools: ["Firebase", "Realm", "RxJava", " Alamofire", "Reachability"]
      },
      {
        title: "IoT Device Connectivity",
        role: "DevOps",
        scenario: "Deploying 10000+ sensors across manufacturing facility",
        application: "WiFi may not be suitable for battery-powered IoT. Understanding wireless protocols helps choose between WiFi, BLE, Zigbee, LoRa based on range, power, bandwidth needs.",
        bestPractices: [
          "Use BLE for short-range, low-power devices",
          "Implement Zigbee mesh for industrial sensors",
          "Use LoRa for long-range, low-bandwidth applications",
          "Plan for 2.4GHz interference from WiFi",
          "Implement OTA firmware updates"
        ],
        tools: ["MQTT", "CoAP", "Zigbee2MQTT", "The Things Network", "AWS IoT Core"]
      }
    ],
    comparisonDiagrams: [
      {
        id: "comp7-1",
        title: "WiFi Channel Allocation",
        mermaidCode: `graph LR
    subgraph GHz24["📡 2.4 GHz Band"]
        CH1[Channel 1] --> CH2[Channel 2]
        CH2 --> CH3[Channel 3]
        CH3 --> CH4[Channel 4]
        CH4 --> CH5[Channel 5]
        CH5 --> CH6[Channel 6]
        CH6 --> CH7[Channel 7]
        CH8[Channel 8] --> CH9[Channel 9]
        CH9 --> CH10[Channel 10]
        CH10 --> CH11[Channel 11]
        
        style CH1 fill:#90EE90
        style CH6 fill:#90EE90
        style CH11 fill:#90EE90
        style CH2 fill:#FFB6C1
        style CH3 fill:#FFB6C1
        style CH4 fill:#FFB6C1
        style CH5 fill:#FFB6C1
        style CH7 fill:#FFB6C1
        style CH8 fill:#FFB6C1
        style CH9 fill:#FFB6C1
        style CH10 fill:#FFB6C1
    end
    
    subgraph Note["💡 Best Practice"]
        N1[Use only channels 1, 6, 11<br/>for non-overlapping coverage]
    end` 
      },
      {
        id: "comp7-2",
        title: "CSMA/CA with RTS/CTS Flow",
        mermaidCode: `sequenceDiagram
    participant A as Station A
    participant AP as Access Point
    participant B as Station B
    participant NAV as Others (NAV)
    
    Note over A,B: Hidden Terminal Problem
    
    A->>AP: RTS (Request to Send)
    AP->>A: CTS (Clear to Send)
    AP->>B: CTS (heard by B)
    
    Note over NAV: B sets NAV<br/>defers transmission
    
    A->>AP: Data Frame
    AP->>A: ACK
    
    Note over NAV: NAV expires<br/>B can now contend` 
      }
    ]
  },
  {
    id: 8,
    title: "Security in Computer Networks",
    subtitle: "Cryptography and Protocols",
    overview: "Network security involves protecting data confidentiality, integrity, and availability. We examine cryptography, authentication, secure email, SSL/TLS, IPsec, and wireless security.",
    sections: [
      {
        id: "8.1",
        title: "What is Network Security",
        content: "Security involves protecting against various threats to communication.",
        subsections: [
          {
            title: "Security Goals",
            bullets: [
              "Confidentiality: Only sender and receiver understand contents",
              "Message integrity: Content not altered in transit",
              "End-point authentication: Confirm identity of sender/receiver",
              "Operational security: Protect against attacks"
            ]
          },
          {
            title: "Common Threats",
            bullets: [
              "Eavesdropping: Intercept and read messages",
              "Insertion: Inject messages into connection",
              "Impersonation: Spoof source address",
              "Hijacking: Take over ongoing connection",
              "Denial of Service: Prevent service use"
            ]
          },
          {
            title: "Who are Bob and Alice",
            bullets: [
              "Alice: Sender who wants to communicate securely",
              "Bob: Intended receiver",
              "Trudy: Intruder who may intercept, delete, add messages",
              "Standard notation in cryptography literature"
            ]
          }
        ]
      },
      {
        id: "8.2",
        title: "Principles of Cryptography",
        content: "Cryptography provides tools for secure communication.",
        subsections: [
          {
            title: "Symmetric Key Cryptography",
            bullets: [
              "Same key for encryption and decryption",
              "AES: Advanced Encryption Standard, 128-bit blocks",
              "DES: Data Encryption Standard (obsolete)",
              "Stream ciphers: Encrypt one bit/byte at a time",
              "Block ciphers: Encrypt fixed-size blocks"
            ]
          },
          {
            title: "Public Key Cryptography",
            bullets: [
              "Two keys: Public key (known to all) and private key (secret)",
              "RSA: Rivest, Shamir, Adelson algorithm",
              "Encrypt with public, decrypt with private",
              "Sign with private, verify with public",
              "Much slower than symmetric encryption"
            ],
            important: "Public key solves the key distribution problem of symmetric encryption."
          },
          {
            title: "RSA Algorithm",
            bullets: [
              "Choose two large prime numbers p and q",
              "Compute n = p*q and z = (p-1)*(q-1)",
              "Choose e such that e and z are relatively prime",
              "Choose d such that e*d mod z = 1",
              "Public key: (n,e), Private key: (n,d)",
              "Encrypt: c = m^e mod n, Decrypt: m = c^d mod n"
            ]
          }
        ]
      },
      {
        id: "8.3",
        title: "Message Integrity and Digital Signatures",
        content: "Ensuring messages are not tampered with and authenticating the sender.",
        subsections: [
          {
            title: "Cryptographic Hash Functions",
            bullets: [
              "Takes input of any size, produces fixed-size output",
              "One-way: Cannot reverse to find input",
              "Collision resistant: Hard to find two inputs with same hash",
              "MD5: 128-bit output (now considered weak)",
              "SHA-256: 256-bit output, widely used"
            ]
          },
          {
            title: "Message Authentication Code (MAC)",
            bullets: [
              "Hash plus secret key: H(m + s)",
              "Provides message integrity and authentication",
              "Sender and receiver share secret key",
              "HMAC: Hash-based MAC, standard construction"
            ]
          },
          {
            title: "Digital Signatures",
            bullets: [
              "Sign with private key, verify with public key",
              "Provides integrity, authentication, non-repudiation",
              "Often sign hash of message for efficiency",
              "Certificate authorities bind public keys to identities"
            ]
          }
        ]
      },
      {
        id: "8.4",
        title: "End-Point Authentication",
        content: "Proving identity in network communication.",
        subsections: [
          {
            title: "Authentication Protocols",
            bullets: [
              "ap1.0: Send password in clear (insecure)",
              "ap2.0: Encrypt password (replay attack possible)",
              "ap3.0: Nonce to prevent replay (reflection attack)",
              "ap3.1: Different keys for each direction",
              "ap4.0: Use public key cryptography"
            ]
          },
          {
            title: "Nonce",
            bullets: [
              "Number used once",
              "Prevents replay attacks",
              "Receiver sends nonce, sender must encrypt it",
              "Proves sender is live (not replayed)"
            ]
          }
        ]
      },
      {
        id: "8.5",
        title: "Securing Email",
        content: "Email security uses a combination of encryption and signatures.",
        subsections: [
          {
            title: "PGP",
            bullets: [
              "Pretty Good Privacy",
              "Encrypts and/or signs email",
              "Uses symmetric key for message, public key for symmetric key",
              "Web of trust for key distribution"
            ]
          },
          {
            title: "S/MIME",
            bullets: [
              "Secure/Multipurpose Internet Mail Extensions",
              "Standard for public-key encrypted email",
              "Uses X.509 certificates",
              "Widely supported in email clients"
            ]
          }
        ]
      },
      {
        id: "8.6",
        title: "Securing TCP: SSL/TLS",
        content: "SSL/TLS provides security at the transport layer.",
        subsections: [
          {
            title: "SSL/TLS Overview",
            bullets: [
              "HTTPS = HTTP over TLS",
              "Provides confidentiality, integrity, authentication",
              "Runs above TCP, below application layer",
              "TLS 1.3 is current version (2023)",
              "Handshake protocol and record protocol"
            ]
          },
          {
            title: "TLS Handshake",
            bullets: [
              "1. Client hello: Supported cipher suites, nonce",
              "2. Server hello: Chosen cipher suite, nonce, certificate",
              "3. Client key exchange: Pre-master secret encrypted",
              "4. Change cipher spec: Switch to encrypted",
              "Derive session keys from pre-master secret"
            ]
          },
          {
            title: "TLS Record Protocol",
            bullets: [
              "Fragment data into records",
              "Compress (rarely used now)",
              "Add MAC for integrity",
              "Encrypt with symmetric key",
              "Add TLS header"
            ]
          },
          {
            title: "Cipher Suites",
            bullets: [
              "Specifies: Key exchange, authentication, encryption, MAC",
              "Example: TLS_AES_256_GCM_SHA384",
              "AES-256-GCM: Encryption",
              "SHA384: Hash for key derivation"
            ]
          }
        ]
      },
      {
        id: "8.7",
        title: "Network Layer Security: IPsec",
        content: "IPsec provides security at the network layer.",
        subsections: [
          {
            title: "IPsec Overview",
            bullets: [
              "Encrypts and/or authenticates IP datagrams",
              "Two modes: Transport and Tunnel",
              "AH: Authentication Header (integrity)",
              "ESP: Encapsulating Security Payload (encryption + integrity)",
              "SA: Security Association -单向安全通道"
            ]
          },
          {
            title: "IPsec Modes",
            bullets: [
              "Transport mode: Encrypts payload only",
              "Tunnel mode: Encrypts entire original datagram",
              "VPN typically uses tunnel mode",
              "New IP header added in tunnel mode"
            ]
          },
          {
            title: "IKE",
            bullets: [
              "Internet Key Exchange",
              "Establishes shared secret keys",
              "Two phases: IKE SA then IPsec SA"
            ]
          }
        ]
      },
      {
        id: "8.8",
        title: "Securing Wireless LANs",
        content: "Wireless networks require special security considerations.",
        subsections: [
          {
            title: "WEP",
            bullets: [
              "Wired Equivalent Privacy (obsolete)",
              "Shared 40 or 104-bit key",
              "RC4 stream cipher",
              "Multiple vulnerabilities, easily cracked",
              "Do not use WEP"
            ]
          },
          {
            title: "WPA2",
            bullets: [
              "WiFi Protected Access 2",
              "Uses AES encryption",
              "Personal (PSK) and Enterprise (802.1X) modes",
              "CCMP: Counter Mode with Cipher Block Chaining MAC Protocol",
              "Current standard for WiFi security"
            ]
          },
          {
            title: "WPA3",
            bullets: [
              "Latest WiFi security standard",
              "SAE: Simultaneous Authentication of Equals",
              "Forward secrecy: Past sessions safe even if key compromised",
              "Protected Management Frames",
              "Enhanced Open for public networks"
            ]
          }
        ]
      },
      {
        id: "8.9",
        title: "Firewalls",
        content: "Firewalls filter traffic between trusted and untrusted networks.",
        subsections: [
          {
            title: "Firewall Types",
            bullets: [
              "Packet filter: Filter based on header fields",
              "Stateful filter: Track connection state",
              "Application gateway: Application-level filtering",
              "Rules: Allow or deny based on criteria"
            ]
          },
          {
            title: "Packet Filtering",
            bullets: [
              "Filter on: Source/dest IP, port numbers, protocol",
              "TCP flags (SYN, ACK, etc.)",
              "Example: Block incoming SYN except to port 80",
              "Example: Allow established connections"
            ]
          }
        ]
      }
    ],
    diagrams: [
      {
        id: "fig8-1",
        title: "Symmetric vs Public Key Encryption",
        description: "Comparison of encryption approaches",
        mermaidCode: `graph TB
    subgraph Symmetric_Key
        A1[Alice]
        K[Shared Key K]
        B1[Bob]
        
        A1 -->|Encrypt with K| C1[Ciphertext]
        C1 -->|Decrypt with K| B1
        K -.-> A1
        K -.-> B1
    end
    
    subgraph Public_Key
        A2[Alice]
        PB[Bob's Public Key]
        PV[Bob's Private Key]
        B2[Bob]
        
        A2 -->|Encrypt with PB| C2[Ciphertext]
        C2 -->|Decrypt with PV| B2
        PB -.-> A2
        PV -.-> B2
    end
    
    Note["Public key solves key distribution problem"]`
      },
      {
        id: "fig8-2",
        title: "Digital Signature",
        description: "Signing with private key",
        mermaidCode: `graph LR
    subgraph Signing
        A[Alice]
        M[Message m]
        H["Hash H(m)"]
        SK["Alice's Private Key"]
        SIG[Signature]
        
        A --> M
        M --> H
        H -->|Encrypt with SK| SIG
    end
    
    subgraph Verification
        B[Bob]
        M2[Message m]
        H2["Hash H(m)"]
        PK["Alice's Public Key"]
        SIG2[Signature]
        V{Verify}
        
        M2 --> H2
        SIG2 -->|Decrypt with PK| D[Decrypted Hash]
        H2 --> V
        D --> V
        V -->|Match| OK[Valid]
        V -->|No Match| FAIL[Invalid]
    end
    
    SIG -.-> SIG2
    M -.-> M2`
      },
      {
        id: "fig8-3",
        title: "TLS Handshake",
        description: "TLS 1.2 handshake process",
        mermaidCode: `sequenceDiagram
    participant C as Client
    participant S as Server
    
    C->>S: Client Hello<br/>Version Random Cipher Suites
    S->>C: Server Hello<br/>Version Random Certificate
    S->>C: Server Hello Done
    
    C->>C: Verify Certificate
    C->>C: Generate Pre-Master Secret
    C->>S: Client Key Exchange<br/>Encrypted Pre-Master Secret
    
    Note over C,S: Both derive session keys
    
    C->>S: Change Cipher Spec
    C->>S: Finished (encrypted)
    S->>C: Change Cipher Spec
    S->>C: Finished (encrypted)
    
    Note over C,S: Secure channel established`
      },
      {
        id: "fig8-4",
        title: "IPsec Tunnel Mode",
        description: "VPN using IPsec tunnel mode",
        mermaidCode: `graph TB
    subgraph Original_Packet
        OH[Original IP Header]
        OD[Original Data]
    end
    
    subgraph IPsec_Packet
        NH[New IP Header]
        ESP[ESP Header]
        ENC[Encrypted Original Header + Data]
        T[Trailer]
        AUTH[Authentication]
    end
    
    OH -->|Encrypted| ENC
    OD -->|Encrypted| ENC
    
    NH --> ESP --> ENC --> T --> AUTH
    
    Note["Entire original packet encrypted"]`
      },
      {
        id: "fig8-5",
        title: "Firewall Rules",
        description: "Example packet filtering rules",
        mermaidCode: `graph LR
    subgraph Firewall_Rules
        R1[Allow TCP src:any dst:80]
        R2[Allow TCP established]
        R3[Block TCP src:any dst:23]
        R4[Block ICMP]
        R5[Allow any]
    end
    
    subgraph Action
        A1[Allow]
        A2[Allow]
        A3[Block]
        A4[Block]
        A5[Allow]
    end
    
    R1 --> A1
    R2 --> A2
    R3 --> A3
    R4 --> A4
    R5 --> A5
    
    Note["Rules processed in order - first match wins"]`
      }
    ],
    keyConcepts: [
      { term: "Confidentiality", definition: "Ensuring only authorized parties can read information" },
      { term: "Integrity", definition: "Ensuring information is not altered in transit" },
      { term: "Authentication", definition: "Verifying identity of communicating parties" },
      { term: "Symmetric Encryption", definition: "Same key used for encryption and decryption" },
      { term: "Public Key Encryption", definition: "Different keys for encryption (public) and decryption (private)" },
      { term: "RSA", definition: "Rivest-Shamir-Adleman public key algorithm" },
      { term: "Hash Function", definition: "One-way function producing fixed-size output from any input" },
      { term: "MAC", definition: "Message Authentication Code - provides integrity and authentication" },
      { term: "Digital Signature", definition: "Encrypted hash providing integrity, authentication, non-repudiation" },
      { term: "Certificate", definition: "Binds public key to identity, signed by Certificate Authority" },
      { term: "TLS", definition: "Transport Layer Security - provides secure transport" },
      { term: "SSL", definition: "Secure Sockets Layer - predecessor to TLS" },
      { term: "IPsec", definition: "IP Security - network layer security protocol" },
      { term: "VPN", definition: "Virtual Private Network - secure tunnel over public network" },
      { term: "WPA2", definition: "WiFi Protected Access 2 - wireless security standard" },
      { term: "Firewall", definition: "Device that filters traffic based on rules" },
      { term: "Nonce", definition: "Number used once - prevents replay attacks" }
    ],
    formulas: [
      {
        name: "RSA Encryption",
        formula: "c = m^e mod n",
        explanation: "Encrypt message m with public key (e,n)"
      },
      {
        name: "RSA Decryption",
        formula: "m = c^d mod n",
        explanation: "Decrypt ciphertext c with private key (d,n)"
      },
      {
        name: "RSA Key Generation",
        formula: "n = p*q, z = (p-1)(q-1), choose e,d where e*d mod z = 1",
        explanation: "p,q = large primes, e = public exponent, d = private exponent"
      }
    ],
    practiceProblems: [
      {
        question: "Why is public key encryption slower than symmetric encryption?",
        solution: "Public key encryption (like RSA) is slower because it uses large numbers (1024+ bits) and modular exponentiation. Symmetric encryption (like AES) uses simpler operations on smaller blocks and can be highly optimized in hardware. Public key also requires much larger key sizes for equivalent security.",
        hint: "Consider the mathematical operations and key sizes involved."
      },
      {
        question: "Explain how TLS provides both confidentiality and integrity.",
        solution: "TLS provides confidentiality through symmetric encryption (AES, etc.) of all application data. Integrity is provided by a Message Authentication Code (MAC) computed over the encrypted data. The MAC is verified before decryption, ensuring the data has not been tampered with.",
        hint: "Think about the combination of encryption and authentication."
      },
      {
        question: "What is the difference between a MAC and a digital signature?",
        solution: "MAC uses a shared secret key - both sender and receiver can create/verify, so no non-repudiation. Digital signature uses public key cryptography - only sender can sign with private key, anyone can verify with public key, providing non-repudiation. MAC is faster; signatures provide stronger authentication.",
        hint: "Consider the keys used and who can create/verify each."
      }
    ],
    images: [
      {
        src: "/images/chapter8-security.jpg",
        alt: "Network Security Concepts",
        caption: "Encryption, digital signatures, and TLS handshake"
      }
    ],
    codeExamples: [
      {
        title: "AES Encryption in Go",
        description: "Symmetric encryption using AES-GCM",
        language: "go",
        code: `package main

import (
	"crypto/aes"
	"crypto/cipher"
	"crypto/rand"
	"encoding/base64"
	"fmt"
	"io"
)

// Encrypt encrypts plaintext using AES-GCM
func Encrypt(key []byte, plaintext string) (string, error) {
	block, err := aes.NewCipher(key)
	if err != nil {
		return "", err
	}
	
	gcm, err := cipher.NewGCM(block)
	if err != nil {
		return "", err
	}
	
	nonce := make([]byte, gcm.NonceSize())
	if _, err = io.ReadFull(rand.Reader, nonce); err != nil {
		return "", err
	}
	
	ciphertext := gcm.Seal(nonce, nonce, []byte(plaintext), nil)
	return base64.StdEncoding.EncodeToString(ciphertext), nil
}

// Decrypt decrypts ciphertext using AES-GCM
func Decrypt(key []byte, ciphertext string) (string, error) {
	data, err := base64.StdEncoding.DecodeString(ciphertext)
	if err != nil {
		return "", err
	}
	
	block, err := aes.NewCipher(key)
	if err != nil {
		return "", err
	}
	
	gcm, err := cipher.NewGCM(block)
	if err != nil {
		return "", err
	}
	
	nonceSize := gcm.NonceSize()
	nonce, ciphertextBytes := data[:nonceSize], data[nonceSize:]
	
	plaintext, err := gcm.Open(nil, nonce, ciphertextBytes, nil)
	if err != nil {
		return "", err
	}
	
	return string(plaintext), nil
}

func main() {
	// 32-byte key for AES-256
	key := []byte("this-is-a-32-byte-key-for-aes-256!")
	
	plaintext := "Hello, Secure World!"
	fmt.Printf("Original: %s\\n\\n", plaintext)
	
	// Encrypt
	encrypted, err := Encrypt(key, plaintext)
	if err != nil {
		fmt.Println("Encryption error:", err)
		return
	}
	fmt.Printf("Encrypted (Base64): %s\\n\\n", encrypted)
	
	// Decrypt
	decrypted, err := Decrypt(key, encrypted)
	if err != nil {
		fmt.Println("Decryption error:", err)
		return
	}
	fmt.Printf("Decrypted: %s\\n", decrypted)
}`
      },
      {
        title: "SHA-256 Hashing in Go",
        description: "Cryptographic hash function implementation",
        language: "go",
        code: `package main

import (
	"crypto/sha256"
	"encoding/hex"
	"fmt"
)

func main() {
	// Example data
	data := []byte("Hello, World!")
	
	// Calculate SHA-256 hash
	hash := sha256.Sum256(data)
	
	// Convert to hex string
	hashHex := hex.EncodeToString(hash[:])
	
	fmt.Printf("Data: %s\\n", data)
	fmt.Printf("SHA-256: %s\\n", hashHex)
	fmt.Printf("Hash length: %d bits\\n", len(hash)*8)
	
	// Verify integrity
	dataModified := []byte("Hello, World?")
	hashModified := sha256.Sum256(dataModified)
	hashModifiedHex := hex.EncodeToString(hashModified[:])
	
	fmt.Printf("\\nModified data: %s\\n", dataModified)
	fmt.Printf("SHA-256: %s\\n", hashModifiedHex)
	fmt.Printf("Hashes match: %v\\n", hashHex == hashModifiedHex)
	
	// HMAC example
	fmt.Println("\\nHMAC provides authentication + integrity")
}`
      },
      {
        title: "TLS HTTPS Client in Go",
        description: "Making secure HTTPS requests",
        language: "go",
        code: `package main

import (
	"crypto/tls"
	"fmt"
	"io"
	"net/http"
	"time"
)

func main() {
	// Create custom TLS config
	tlsConfig := &tls.Config{
		MinVersion: tls.VersionTLS12,
		CipherSuites: []uint16{
			tls.TLS_AES_256_GCM_SHA384,
			tls.TLS_CHACHA20_POLY1305_SHA256,
		},
	}
	
	// Create HTTP client with TLS config
	client := &http.Client{
		Timeout: 10 * time.Second,
		Transport: &http.Transport{
			TLSClientConfig: tlsConfig,
		},
	}
	
	// Make HTTPS request
	resp, err := client.Get("https://api.github.com/users/golang")
	if err != nil {
		fmt.Println("Request error:", err)
		return
	}
	defer resp.Body.Close()
	
	// Print TLS info
	if resp.TLS != nil {
		fmt.Println("TLS Connection Info:")
		fmt.Printf("  Version: %s\\n", tlsVersionName(resp.TLS.Version))
		fmt.Printf("  Cipher Suite: %s\\n", tls.CipherSuiteName(resp.TLS.CipherSuite))
		fmt.Printf("  Server Name: %s\\n", resp.TLS.ServerName)
	}
	
	// Read response
	body, _ := io.ReadAll(resp.Body)
	fmt.Printf("\\nResponse (%d bytes)\\n", len(body))
}

func tlsVersionName(version uint16) string {
	switch version {
	case tls.VersionTLS10:
		return "TLS 1.0"
	case tls.VersionTLS11:
		return "TLS 1.1"
	case tls.VersionTLS12:
		return "TLS 1.2"
	case tls.VersionTLS13:
		return "TLS 1.3"
	default:
		return "Unknown"
	}
}`
      }
    ],
    comparisons: [
      {
        title: "Symmetric vs Public Key Encryption",
        itemA: "Symmetric (AES)",
        itemB: "Public Key (RSA)",
        points: [
          { aspect: "Keys", itemAValue: "Single shared key", itemBValue: "Key pair (public/private)" },
          { aspect: "Speed", itemAValue: "Fast", itemBValue: "Slow" },
          { aspect: "Key Size", itemAValue: "128-256 bits", itemBValue: "2048-4096 bits" },
          { aspect: "Key Distribution", itemAValue: "Secure channel needed", itemBValue: "Public key can be shared" },
          { aspect: "Use Case", itemAValue: "Bulk data encryption", itemBValue: "Key exchange, signatures" },
          { aspect: "Non-repudiation", itemAValue: "No", itemBValue: "Yes (with signatures)" }
        ]
      },
      {
        title: "WEP vs WPA2 vs WPA3",
        itemA: "WPA2",
        itemB: "WPA3",
        points: [
          { aspect: "Encryption", itemAValue: "AES-CCMP", itemBValue: "AES-GCMP-256" },
          { aspect: "Authentication", itemAValue: "PSK or 802.1X", itemBValue: "SAE (Simultaneous Auth)" },
          { aspect: "Forward Secrecy", itemAValue: "No", itemBValue: "Yes" },
          { aspect: "Brute Force Protection", itemAValue: "Limited", itemBValue: "Strong (rate limiting)" },
          { aspect: "Open Networks", itemAValue: "Unencrypted", itemBValue: "Enhanced Open (OWE)" },
          { aspect: "Security Level", itemAValue: "Good", itemBValue: "Excellent" }
        ]
      }
    ],
    realWorldApplications: [
      {
        title: "TLS Certificate Management",
        role: "DevOps",
        scenario: "Managing certificates for 500+ microservices in Kubernetes",
        application: "Understanding TLS handshake helps debug connection issues. Certificate rotation, chain validation, and cipher suite selection directly impact security and performance.",
        bestPractices: [
          "Use cert-manager for automatic certificate provisioning",
          "Enable TLS 1.3 with secure cipher suites only",
          "Implement certificate rotation before expiry",
          "Use mutual TLS (mTLS) for service-to-service auth",
          "Monitor certificate expiry with alerts"
        ],
        tools: ["cert-manager", "Let's Encrypt", "Vault", "cfssl", "OpenSSL"]
      },
      {
        title: "API Authentication and JWT",
        role: "Backend Engineer",
        scenario: "Securing REST API with stateless authentication",
        application: "Understanding digital signatures helps implement JWT securely. HMAC for symmetric signing, RSA/ECDSA for asymmetric. Proper key rotation and algorithm selection prevent vulnerabilities.",
        bestPractices: [
          "Use RS256 or ES256 for production (asymmetric)",
          "Keep JWT expiry short (15-60 minutes)",
          "Implement refresh token rotation",
          "Validate algorithm header to prevent 'none' attacks",
          "Store keys in HSM or secure vault"
        ],
        tools: ["JWT.io", "jose", "Auth0", "Keycloak", "HashiCorp Vault"]
      },
      {
        title: "Secrets Management",
        role: "SRE",
        scenario: "Securely managing database credentials and API keys across environments",
        application: "Symmetric encryption (AES-GCM) for data at rest. Key derivation (PBKDF2, Argon2) for password hashing. Understanding these primitives helps choose appropriate solutions.",
        bestPractices: [
          "Never commit secrets to version control",
          "Use dedicated secrets manager (Vault, AWS Secrets Manager)",
          "Implement automatic secret rotation",
          "Use envelope encryption for large data",
          "Audit all secret access with logging"
        ],
        tools: ["HashiCorp Vault", "AWS Secrets Manager", "Sealed Secrets", "SOPS", "CyberArk"]
      },
      {
        title: "Network Security Monitoring",
        role: "SRE",
        scenario: "Detecting and responding to security incidents in production",
        application: "Firewalls filter based on packet headers (Layer 3/4). Understanding IPsec helps implement VPNs. IDS/IPS use signature and anomaly detection based on traffic patterns.",
        bestPractices: [
          "Implement defense in depth (multiple layers)",
          "Use VPC flow logs for traffic analysis",
          "Deploy WAF for application layer protection",
          "Monitor for unusual traffic patterns",
          "Implement zero-trust network architecture"
        ],
        tools: ["Suricata", "Zeek", "AWS WAF", "Fail2ban", "Falco"]
      }
    ],
    comparisonDiagrams: [
      {
        id: "comp8-1",
        title: "Symmetric vs Public Key Encryption Flow",
        mermaidCode: `graph TB
    subgraph Symmetric["🔐 Symmetric Encryption (AES)"]
        S1[Plaintext] -->|Encrypt with<br/>shared key| S2[Ciphertext]
        S2 -->|Decrypt with<br/>same key| S3[Plaintext]
        
        SK[Shared Secret Key]
        SK -.-> S1
        SK -.-> S3
        
        style S1 fill:#e1f5ff
        style S2 fill:#fff3cd
        style S3 fill:#d4edda
        style SK fill:#ffcccc
    end
    
    subgraph Asymmetric["🔑 Public Key Encryption (RSA)"]
        A1[Plaintext] -->|Encrypt with<br/>public key| A2[Ciphertext]
        A2 -->|Decrypt with<br/>private key| A3[Plaintext]
        
        PK[Public Key] -.-> A1
        PV[Private Key] -.-> A3
        
        style A1 fill:#e1f5ff
        style A2 fill:#fff3cd
        style A3 fill:#d4edda
        style PK fill:#ccffcc
        style PV fill:#ff9999
    end` 
      },
      {
        id: "comp8-2",
        title: "TLS 1.3 Handshake (Simplified)",
        mermaidCode: `sequenceDiagram
    participant C as Client
    participant S as Server
    
    Note over C,S: TLS 1.3 - Faster, More Secure
    
    C->>S: Client Hello<br/>+ Key Share<br/>+ Supported Groups
    
    Note right of S: Server selects<br/>cipher suite & key
    
    S->>C: Server Hello<br/>+ Key Share<br/>+ {Encrypted Extensions}<br/>+ {Certificate}<br/>+ {Certificate Verify}<br/>+ {Finished}
    
    Note left of C: Client verifies<br/>server certificate
    
    C->>S: {Finished}<br/>+ {Application Data}
    
    Note over C,S: 1-RTT Handshake Complete!<br/>All messages after SH are encrypted` 
      }
    ]
  }
];

export const getDetailedChapterById = (id: number): DetailedChapter | undefined => {
  return detailedChapters.find(chapter => chapter.id === id);
};

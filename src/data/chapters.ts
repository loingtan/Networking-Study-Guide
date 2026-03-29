export interface Chapter {
  id: number;
  title: string;
  subtitle: string;
  topics: Topic[];
  keyTerms: KeyTerm[];
  practiceQuestions: PracticeQuestion[];
}

export interface Topic {
  id: string;
  title: string;
  content: string[];
  subtopics?: Subtopic[];
}

export interface Subtopic {
  title: string;
  content: string[];
}

export interface KeyTerm {
  term: string;
  definition: string;
}

export interface PracticeQuestion {
  question: string;
  options?: string[];
  answer: string;
  explanation: string;
  type: 'multiple-choice' | 'short-answer' | 'true-false';
}

export const chapters: Chapter[] = [
  {
    id: 1,
    title: "Computer Networks and the Internet",
    subtitle: "Foundations of Networking",
    topics: [
      {
        id: "1.1",
        title: "What Is the Internet?",
        content: [
          "The Internet is a computer network that interconnects hundreds of millions of computing devices throughout the world.",
          "End systems (hosts) include desktops, laptops, smartphones, tablets, TVs, gaming consoles, etc.",
          "End systems are connected together by a network of communication links and packet switches."
        ],
        subtopics: [
          {
            title: "Nuts-and-Bolts Description",
            content: [
              "Communication links: fiber, copper, radio, satellite with different transmission rates (bandwidth)",
              "Packet switches: routers and link-layer switches that forward packets",
              "ISPs (Internet Service Providers) provide access to end systems",
              "Protocols control the sending and receiving of information (TCP, IP, HTTP, etc.)"
            ]
          },
          {
            title: "Services Description",
            content: [
              "The Internet provides services to distributed applications (Web, email, games, etc.)",
              "Applications run on end systems, not in packet switches",
              "The Internet provides a programming interface to distributed applications"
            ]
          },
          {
            title: "What Is a Protocol?",
            content: [
              "A protocol defines the format and order of messages exchanged between entities",
              "Protocols also define the actions taken on transmission/receipt of messages",
              "Example: Human protocol (greetings) vs. Computer protocol (TCP connection establishment)"
            ]
          }
        ]
      },
      {
        id: "1.2",
        title: "The Network Edge",
        content: [
          "The network edge consists of end systems (hosts) where applications run",
          "Hosts can be clients (request services) or servers (provide services)"
        ],
        subtopics: [
          {
            title: "Access Networks",
            content: [
              "Home Access: DSL (Digital Subscriber Line), Cable, FTTH (Fiber to the Home), WiFi",
              "DSL: Uses existing telephone lines, separate frequency bands for data and voice",
              "Cable: Uses cable TV infrastructure, shared broadcast medium",
              "FTTH: Direct fiber connection to home, highest speeds",
              "Enterprise Access: Ethernet and WiFi (WLAN)"
            ]
          },
          {
            title: "Physical Media",
            content: [
              "Guided media: twisted-pair copper wire, coaxial cable, fiber optics",
              "Unguided media: terrestrial radio, satellite, WiFi",
              "Fiber optics: immune to electromagnetic interference, low signal attenuation"
            ]
          }
        ]
      },
      {
        id: "1.3",
        title: "The Network Core",
        content: [
          "The network core is a mesh of interconnected routers",
          "Two fundamental approaches to moving data: packet switching and circuit switching"
        ],
        subtopics: [
          {
            title: "Packet Switching",
            content: [
              "Messages are broken into smaller chunks called packets",
              "Each packet travels independently through the network",
              "Store-and-forward: entire packet must be received before forwarding",
              "Queuing delays occur when arrival rate exceeds transmission rate",
              "Packet loss occurs when buffers are full"
            ]
          },
          {
            title: "Circuit Switching",
            content: [
              "Dedicated end-to-end resources reserved for the duration of communication",
              "Resources remain idle if not used (wasteful)",
              "Traditional telephone networks use circuit switching",
              "FDM (Frequency Division Multiplexing) and TDM (Time Division Multiplexing)"
            ]
          },
          {
            title: "A Network of Networks",
            content: [
              "The Internet is a network of networks",
              "Tier-1 ISPs connect to each other at IXPs (Internet Exchange Points)",
              "Regional ISPs connect to tier-1 ISPs",
              "Content provider networks (Google, Microsoft) bypass upper-tier ISPs"
            ]
          }
        ]
      },
      {
        id: "1.4",
        title: "Delay, Loss, and Throughput",
        content: [
          "Understanding network performance metrics is crucial for network design and troubleshooting"
        ],
        subtopics: [
          {
            title: "Types of Delay",
            content: [
              "Processing delay: time to examine packet header and determine output link",
              "Queuing delay: time waiting in buffer before transmission",
              "Transmission delay: time to push all packet bits onto link (L/R)",
              "Propagation delay: time for bit to travel from one router to next (d/s)",
              "Total nodal delay = processing + queuing + transmission + propagation"
            ]
          },
          {
            title: "Packet Loss",
            content: [
              "Packets are dropped when router buffers overflow",
              "Lost packets may be retransmitted by previous node or source",
              "Packet loss rate increases with traffic intensity"
            ]
          },
          {
            title: "Throughput",
            content: [
              "Instantaneous throughput: rate at a given point in time",
              "Average throughput: rate over a longer period",
              "Bottleneck link limits end-to-end throughput",
              "Throughput depends on transmission rate of bottleneck link"
            ]
          }
        ]
      },
      {
        id: "1.5",
        title: "Protocol Layers and Service Models",
        content: [
          "Layered architecture organizes networking functionality into distinct layers"
        ],
        subtopics: [
          {
            title: "Internet Protocol Stack (5 Layers)",
            content: [
              "Application Layer: HTTP, SMTP, FTP, DNS - message",
              "Transport Layer: TCP, UDP - segment",
              "Network Layer: IP, routing protocols - datagram",
              "Link Layer: Ethernet, WiFi, PPP - frame",
              "Physical Layer: bits on the wire - bit"
            ]
          },
          {
            title: "OSI 7-Layer Model",
            content: [
              "Application, Presentation, Session, Transport, Network, Data Link, Physical",
              "Presentation: data compression, encryption",
              "Session: session management, synchronization"
            ]
          },
          {
            title: "Encapsulation",
            content: [
              "Each layer adds its own header information",
              "Message → Segment → Datagram → Frame → Bits",
              "Headers contain control information for that layer"
            ]
          }
        ]
      }
    ],
    keyTerms: [
      { term: "Host/End System", definition: "A device connected to the Internet that runs applications" },
      { term: "Protocol", definition: "A set of rules governing the format and timing of messages" },
      { term: "Packet Switching", definition: "Breaking messages into packets that travel independently" },
      { term: "Circuit Switching", definition: "Dedicated end-to-end resources for communication" },
      { term: "ISP", definition: "Internet Service Provider - provides Internet access" },
      { term: "Latency/Delay", definition: "Time for packet to travel from source to destination" },
      { term: "Bandwidth", definition: "Maximum transmission rate of a link" },
      { term: "Throughput", definition: "Actual rate of successful data transfer" },
      { term: "Encapsulation", definition: "Adding headers as data moves down the protocol stack" }
    ],
    practiceQuestions: [
      {
        question: "What are the four types of delay in packet-switched networks?",
        answer: "Processing delay, queuing delay, transmission delay, and propagation delay",
        explanation: "Processing delay is the time to examine the packet header. Queuing delay is the time waiting in buffers. Transmission delay is the time to push all bits onto the link. Propagation delay is the time for bits to travel through the medium.",
        type: "short-answer"
      },
      {
        question: "Which switching method reserves dedicated resources for the entire communication session?",
        options: ["Packet switching", "Circuit switching", "Message switching", "Virtual circuit switching"],
        answer: "Circuit switching",
        explanation: "Circuit switching establishes a dedicated end-to-end connection before communication begins, reserving resources for the duration of the session.",
        type: "multiple-choice"
      },
      {
        question: "In the Internet protocol stack, which layer is responsible for routing?",
        options: ["Application layer", "Transport layer", "Network layer", "Link layer"],
        answer: "Network layer",
        explanation: "The Network layer (IP layer) is responsible for routing datagrams from source to destination.",
        type: "multiple-choice"
      },
      {
        question: "The end-to-end throughput of a network connection is limited by the slowest link in the path.",
        options: ["True", "False"],
        answer: "True",
        explanation: "The bottleneck link with the lowest transmission rate determines the maximum achievable throughput.",
        type: "true-false"
      }
    ]
  },
  {
    id: 2,
    title: "Application Layer",
    subtitle: "Network Applications and Protocols",
    topics: [
      {
        id: "2.1",
        title: "Principles of Network Applications",
        content: [
          "Network applications run on end systems, not in the network core",
          "Applications communicate by exchanging messages over sockets"
        ],
        subtopics: [
          {
            title: "Application Architectures",
            content: [
              "Client-Server: Clients request services from always-on servers",
              "P2P (Peer-to-Peer): End systems communicate directly, no always-on server",
              "Hybrid: Combination of client-server and P2P (e.g., instant messaging)"
            ]
          },
          {
            title: "Processes Communicating",
            content: [
              "A process is a program running within an end system",
              "Processes communicate by sending messages into sockets",
              "Addressing: IP address + port number identifies a process"
            ]
          },
          {
            title: "Transport Services",
            content: [
              "Reliable data transfer: guarantees delivery without errors",
              "Throughput: guaranteed rate or best-effort",
              "Timing: delivery within specified time",
              "Security: encryption, data integrity"
            ]
          }
        ]
      },
      {
        id: "2.2",
        title: "The Web and HTTP",
        content: [
          "HTTP (HyperText Transfer Protocol) is the Web's application-layer protocol",
          "Web pages consist of objects (HTML file, images, videos, etc.)"
        ],
        subtopics: [
          {
            title: "HTTP Overview",
            content: [
              "Uses TCP as transport protocol (port 80 or 443 for HTTPS)",
              "HTTP is stateless - server doesn't retain client information",
              "HTTP/1.0 uses non-persistent connections",
              "HTTP/1.1 uses persistent connections by default"
            ]
          },
          {
            title: "HTTP Message Format",
            content: [
              "Request line: method, URL, HTTP version",
              "Methods: GET, POST, PUT, DELETE, HEAD",
              "Status codes: 200 OK, 301 Moved Permanently, 404 Not Found, 500 Server Error",
              "Headers: Host, Connection, User-Agent, Accept, etc."
            ]
          },
          {
            title: "Cookies",
            content: [
              "Used to maintain user state",
              "Cookie header line in HTTP response message",
              "Cookie header line in next HTTP request message",
              "Cookie file stored on user's host, managed by browser"
            ]
          },
          {
            title: "Web Caching",
            content: [
              "Proxy server satisfies client requests without involving origin server",
              "Reduces response time and traffic on institution's access link",
              "Conditional GET: cache validates freshness with If-Modified-Since"
            ]
          },
          {
            title: "HTTP/2",
            content: [
              "Multiplexing: multiple requests/responses on single TCP connection",
              "Header compression using HPACK",
              "Server push: server can push resources before client requests",
              "Binary framing instead of text"
            ]
          }
        ]
      },
      {
        id: "2.3",
        title: "Electronic Mail",
        content: [
          "Email uses three major components: user agents, mail servers, and protocols",
          "SMTP for sending, POP3/IMAP/HTTP for retrieving"
        ],
        subtopics: [
          {
            title: "SMTP",
            content: [
              "Simple Mail Transfer Protocol - uses TCP port 25",
              "Direct transfer from sending to receiving server",
              "Three phases: handshake, message transfer, closure",
              "SMTP uses persistent connections"
            ]
          },
          {
            title: "Mail Message Format",
            content: [
              "Header lines: To, From, Subject",
              "Body: ASCII text (or MIME for multimedia)",
              "MIME: Multipurpose Internet Mail Extensions"
            ]
          },
          {
            title: "Mail Access Protocols",
            content: [
              "POP3: Post Office Protocol - download and delete from server",
              "IMAP: Internet Message Access Protocol - keep messages on server",
              "HTTP: Web-based email (Gmail, Yahoo Mail)"
            ]
          }
        ]
      },
      {
        id: "2.4",
        title: "DNS - The Internet's Directory Service",
        content: [
          "DNS (Domain Name System) translates hostnames to IP addresses",
          "Distributed, hierarchical database with many name servers"
        ],
        subtopics: [
          {
            title: "DNS Services",
            content: [
              "Hostname to IP address translation",
              "Host aliasing (canonical and alias names)",
              "Mail server aliasing",
              "Load distribution (multiple IP addresses for one hostname)"
            ]
          },
          {
            title: "How DNS Works",
            content: [
              "Recursive queries: DNS server obtains mapping on behalf of client",
              "Iterative queries: contacted server replies with name server to contact",
              "DNS caching improves performance and reduces traffic"
            ]
          },
          {
            title: "DNS Records and Messages",
            content: [
              "A record: hostname to IP address",
              "NS record: hostname to authoritative name server",
              "CNAME record: alias to canonical name",
              "MX record: mail server for domain"
            ]
          }
        ]
      },
      {
        id: "2.5",
        title: "Peer-to-Peer File Distribution",
        content: [
          "P2P architecture is self-scaling - each peer adds capacity",
          "BitTorrent is a popular P2P file distribution protocol"
        ],
        subtopics: [
          {
            title: "BitTorrent",
            content: [
              "File divided into chunks (typically 256KB)",
              "Peers download chunks while uploading chunks they have",
              "Tracker tracks which peers have which chunks",
              "Tit-for-tat: peers prioritize uploading to peers who upload to them"
            ]
          }
        ]
      },
      {
        id: "2.6",
        title: "Video Streaming and CDNs",
        content: [
          "Video is the dominant type of Internet traffic",
          "Streaming video requires different approaches than file download"
        ],
        subtopics: [
          {
            title: "DASH",
            content: [
              "Dynamic Adaptive Streaming over HTTP",
              "Video encoded at multiple bit rates",
              "Client dynamically requests chunks based on available bandwidth",
              "Manifest file describes available chunks and bit rates"
            ]
          },
          {
            title: "Content Distribution Networks",
            content: [
              "CDN servers store copies of content at geographically distributed locations",
              "Redirect users to nearby CDN servers",
              "Netflix and YouTube operate their own CDNs"
            ]
          }
        ]
      },
      {
        id: "2.7",
        title: "Socket Programming",
        content: [
          "Socket programming allows creating custom network applications",
          "Two main transport protocols: UDP and TCP"
        ],
        subtopics: [
          {
            title: "UDP Sockets",
            content: [
              "Connectionless - no handshaking",
              "No reliability guarantees",
              "Good for streaming, DNS, SNMP",
              "Client: create socket, sendto(), recvfrom(), close()",
              "Server: create socket, bind(), recvfrom(), sendto()"
            ]
          },
          {
            title: "TCP Sockets",
            content: [
              "Connection-oriented - three-way handshake",
              "Reliable, in-order byte stream",
              "Client: create socket, connect(), write(), read(), close()",
              "Server: create socket, bind(), listen(), accept(), read(), write()"
            ]
          }
        ]
      }
    ],
    keyTerms: [
      { term: "HTTP", definition: "HyperText Transfer Protocol - Web's application protocol" },
      { term: "URL", definition: "Uniform Resource Locator - address of web resource" },
      { term: "Cookie", definition: "Small text file stored by browser to maintain state" },
      { term: "Web Cache/Proxy", definition: "Server that stores copies of web objects to reduce latency" },
      { term: "DNS", definition: "Domain Name System - translates hostnames to IP addresses" },
      { term: "SMTP", definition: "Simple Mail Transfer Protocol - for sending email" },
      { term: "POP3/IMAP", definition: "Protocols for retrieving email from server" },
      { term: "P2P", definition: "Peer-to-Peer architecture where end systems communicate directly" },
      { term: "CDN", definition: "Content Distribution Network - geographically distributed servers" },
      { term: "Socket", definition: "Interface between application and transport layer" }
    ],
    practiceQuestions: [
      {
        question: "What is the main difference between persistent and non-persistent HTTP?",
        answer: "Persistent HTTP uses a single TCP connection for multiple requests/responses, while non-persistent HTTP creates a new TCP connection for each request/response pair.",
        explanation: "Non-persistent HTTP (HTTP/1.0) requires establishing a new TCP connection for each object, adding RTT overhead. Persistent HTTP (HTTP/1.1) keeps the connection open for multiple requests.",
        type: "short-answer"
      },
      {
        question: "Which HTTP status code indicates that the requested resource was not found?",
        options: ["200", "301", "404", "500"],
        answer: "404",
        explanation: "404 Not Found indicates the server cannot find the requested resource. 200 is OK, 301 is Moved Permanently, 500 is Internal Server Error.",
        type: "multiple-choice"
      },
      {
        question: "DNS uses a centralized database with a single name server.",
        options: ["True", "False"],
        answer: "False",
        explanation: "DNS uses a distributed, hierarchical database with many name servers organized in a hierarchy: root servers, TLD servers, and authoritative servers.",
        type: "true-false"
      },
      {
        question: "What is the purpose of a CDN?",
        options: ["To encrypt web traffic", "To distribute content closer to users", "To block malicious websites", "To assign IP addresses"],
        answer: "To distribute content closer to users",
        explanation: "CDNs store copies of content at geographically distributed locations to reduce latency and improve performance by serving content from servers closer to users.",
        type: "multiple-choice"
      }
    ]
  },
  {
    id: 3,
    title: "Transport Layer",
    subtitle: "TCP and UDP",
    topics: [
      {
        id: "3.1",
        title: "Introduction to Transport Layer",
        content: [
          "Transport layer provides logical communication between application processes",
          "Transport protocols run in end systems, not in network routers"
        ],
        subtopics: [
          {
            title: "Transport vs Network Layer",
            content: [
              "Network layer: logical communication between hosts",
              "Transport layer: logical communication between processes",
              "Transport layer enhances network layer services"
            ]
          },
          {
            title: "Internet Transport Protocols",
            content: [
              "TCP: Transmission Control Protocol - reliable, connection-oriented",
              "UDP: User Datagram Protocol - unreliable, connectionless",
              "TCP provides congestion control, flow control, connection setup"
            ]
          }
        ]
      },
      {
        id: "3.2",
        title: "Multiplexing and Demultiplexing",
        content: [
          "Multiplexing: gathering data from multiple sockets and adding transport header",
          "Demultiplexing: delivering received segments to correct socket"
        ],
        subtopics: [
          {
            title: "How Demultiplexing Works",
            content: [
              "Host receives IP datagrams with source/destination IP addresses",
              "Each datagram carries one transport-layer segment",
              "Segment has source and destination port numbers",
              "Host uses IP addresses and port numbers to direct segment to appropriate socket"
            ]
          },
          {
            title: "Connectionless (UDP) Demultiplexing",
            content: [
              "UDP socket identified by two-tuple: (dest IP, dest port)",
              "All segments with same dest port go to same socket",
              "Source IP/port used for reply but not for identifying socket"
            ]
          },
          {
            title: "Connection-oriented (TCP) Demultiplexing",
            content: [
              "TCP socket identified by four-tuple: (source IP, source port, dest IP, dest port)",
              "Different connections to same dest port have different sockets",
              "Web servers have special socket for welcoming new connections"
            ]
          }
        ]
      },
      {
        id: "3.3",
        title: "Connectionless Transport: UDP",
        content: [
          "UDP is a no-frills, lightweight transport protocol",
          "Minimal functionality: multiplexing/demultiplexing and light error checking"
        ],
        subtopics: [
          {
            title: "UDP Characteristics",
            content: [
              "No connection establishment (no delay)",
              "No connection state at sender or receiver",
              "Small segment header (8 bytes vs 20 for TCP)",
              "No congestion control - can blast away",
              "Used by DNS, streaming media, SNMP, online games"
            ]
          },
          {
            title: "UDP Segment Structure",
            content: [
              "Source port (16 bits)",
              "Destination port (16 bits)",
              "Length (16 bits) - including header",
              "Checksum (16 bits) - optional in IPv4, required in IPv6"
            ]
          },
          {
            title: "UDP Checksum",
            content: [
              "Detects errors in transmitted segment",
              "Sender adds all 16-bit words, wraps around carry, takes 1's complement",
              "Receiver checks if sum including checksum equals all 1s",
              "Can detect single-bit errors but not all two-bit errors"
            ]
          }
        ]
      },
      {
        id: "3.4",
        title: "Principles of Reliable Data Transfer",
        content: [
          "Reliable data transfer is a key service provided by TCP",
          "Building reliable protocols over unreliable channels"
        ],
        subtopics: [
          {
            title: "Building a Reliable Protocol",
            content: [
              "rdt1.0: Perfectly reliable channel",
              "rdt2.0: Bit errors - checksum, ACKs, NAKs, retransmission",
              "rdt2.1: ACK/NAK corruption - sequence numbers",
              "rdt2.2: NAK-free protocol - duplicate ACK",
              "rdt3.0: Lossy channel - timeouts"
            ]
          },
          {
            title: "Pipelined Protocols",
            content: [
              "Stop-and-wait is inefficient - only one unacknowledged packet",
              "Pipelining: multiple unacknowledged packets in flight",
              "Requires larger sequence number range",
              "Requires buffering at sender and/or receiver"
            ]
          },
          {
            title: "Go-Back-N (GBN)",
            content: [
              "Sender can have up to N unacknowledged packets",
              "Cumulative ACK: ACK n means all packets up to n received",
              "Single timer for oldest unacknowledged packet",
              "Timeout: retransmit all unacknowledged packets",
              "Receiver only accepts packets in order"
            ]
          },
          {
            title: "Selective Repeat (SR)",
            content: [
              "Sender maintains timer for each unacknowledged packet",
              "Receiver acknowledges all correctly received packets",
              "Receiver buffers out-of-order packets",
              "Sender only retransmits lost packets",
              "Window size must be ≤ half of sequence number space"
            ]
          }
        ]
      },
      {
        id: "3.5",
        title: "Connection-Oriented Transport: TCP",
        content: [
          "TCP provides full-duplex, reliable, ordered byte stream service"
        ],
        subtopics: [
          {
            title: "TCP Connection",
            content: [
              "Connection-oriented: handshaking before data exchange",
              "Full-duplex data flow in both directions simultaneously",
              "Point-to-point: one sender, one receiver",
              "Three-way handshake: SYN, SYN-ACK, ACK"
            ]
          },
          {
            title: "TCP Segment Structure",
            content: [
              "Source and destination port numbers",
              "Sequence number (byte stream number of first byte)",
              "Acknowledgment number (next expected byte)",
              "Receive window (for flow control)",
              "Header length, flags (SYN, ACK, FIN, RST), checksum",
              "Options and data"
            ]
          },
          {
            title: "TCP Reliable Data Transfer",
            content: [
              "Pipelined segments",
              "Cumulative acknowledgments",
              "Single retransmission timer for oldest unacknowledged segment",
              "Fast retransmit on duplicate ACKs (3 dup ACKs)",
              "Selective acknowledgment option (SACK)"
            ]
          },
          {
            title: "Flow Control",
            content: [
              "Receiver controls sender to prevent buffer overflow",
              "Receive window (rwnd) in TCP header",
              "Receiver advertises spare room in connection buffer",
              "Sender limits unACKed data to rwnd"
            ]
          },
          {
            title: "TCP Connection Management",
            content: [
              "Three-way handshake to establish connection",
              "SYN flood attack: attacker sends many SYNs without completing",
              "Connection termination: FIN, ACK, FIN, ACK (four-way)",
              "TIME_WAIT state after closing"
            ]
          }
        ]
      },
      {
        id: "3.6",
        title: "Principles of Congestion Control",
        content: [
          "Congestion occurs when demand exceeds capacity",
          "Congestion can lead to packet loss and delays"
        ],
        subtopics: [
          {
            title: "Causes and Costs of Congestion",
            content: [
              "Scenario 1: Two senders, one router with infinite buffers - throughput limited",
              "Scenario 2: Two senders, one router with finite buffers - retransmissions needed",
              "Scenario 3: Four senders, multiple routers - can have unneeded retransmissions"
            ]
          },
          {
            title: "Approaches to Congestion Control",
            content: [
              "End-to-end congestion control: network layer provides no explicit support",
              "Network-assisted congestion control: routers provide feedback to end systems",
              "Explicit Congestion Notification (ECN) in IP and TCP"
            ]
          }
        ]
      },
      {
        id: "3.7",
        title: "TCP Congestion Control",
        content: [
          "TCP uses end-to-end congestion control",
          "Sender limits transmission based on congestion window (cwnd)"
        ],
        subtopics: [
          {
            title: "Classic TCP Congestion Control",
            content: [
              "Slow start: cwnd starts at 1 MSS, doubles every RTT",
              "Congestion avoidance: linear increase of cwnd (1 MSS per RTT)",
              "Fast recovery: after fast retransmit, set cwnd to half",
              "Timeout: set cwnd to 1 MSS, start slow start again"
            ]
          },
          {
            title: "TCP Tahoe vs Reno",
            content: [
              "Tahoe: timeout or 3 dup ACKs → cwnd = 1, slow start",
              "Reno: timeout → cwnd = 1, slow start; 3 dup ACKs → cwnd = cwnd/2, fast recovery"
            ]
          },
          {
            title: "Fairness",
            content: [
              "Additive Increase Multiplicative Decrease (AIMD) converges to fairness",
              "UDP doesn't do congestion control - can starve TCP",
              "Parallel TCP connections can get more bandwidth"
            ]
          }
        ]
      }
    ],
    keyTerms: [
      { term: "Multiplexing", definition: "Combining data from multiple sockets into segments" },
      { term: "Demultiplexing", definition: "Delivering received segments to correct sockets" },
      { term: "UDP", definition: "User Datagram Protocol - connectionless, unreliable transport" },
      { term: "TCP", definition: "Transmission Control Protocol - connection-oriented, reliable transport" },
      { term: "Three-way Handshake", definition: "SYN, SYN-ACK, ACK sequence to establish TCP connection" },
      { term: "Sequence Number", definition: "Byte stream number of first byte in segment" },
      { term: "ACK Number", definition: "Next expected byte from other side" },
      { term: "Flow Control", definition: "Preventing sender from overwhelming receiver" },
      { term: "Congestion Control", definition: "Preventing sender from overwhelming network" },
      { term: "cwnd", definition: "Congestion window - limits in-flight data based on network capacity" },
      { term: "rwnd", definition: "Receive window - limits in-flight data based on receiver buffer" },
      { term: "RTT", definition: "Round-Trip Time - time for packet to go to destination and back" },
      { term: "MSS", definition: "Maximum Segment Size - largest amount of data in TCP segment" }
    ],
    practiceQuestions: [
      {
        question: "What is the difference between flow control and congestion control?",
        answer: "Flow control prevents the sender from overwhelming the receiver's buffer, while congestion control prevents the sender from overwhelming the network.",
        explanation: "Flow control uses the receive window (rwnd) based on receiver buffer space. Congestion control uses the congestion window (cwnd) based on network conditions.",
        type: "short-answer"
      },
      {
        question: "In TCP, what does receiving three duplicate ACKs trigger?",
        options: ["Slow start", "Fast retransmit", "Connection termination", "Window reset"],
        answer: "Fast retransmit",
        explanation: "Three duplicate ACKs indicate that a segment was lost. TCP performs fast retransmit by retransmitting the missing segment without waiting for timeout.",
        type: "multiple-choice"
      },
      {
        question: "UDP provides reliable, in-order delivery of data.",
        options: ["True", "False"],
        answer: "False",
        explanation: "UDP is connectionless and unreliable. It provides no guarantees about delivery, ordering, or duplicate protection. TCP provides reliable, in-order delivery.",
        type: "true-false"
      },
      {
        question: "What is the purpose of the sequence number in TCP?",
        options: ["To identify the destination port", "To track the byte stream position", "To encrypt the data", "To compress the header"],
        answer: "To track the byte stream position",
        explanation: "The sequence number identifies the byte stream number of the first byte in the segment, enabling ordered delivery and detection of missing segments.",
        type: "multiple-choice"
      }
    ]
  },
  {
    id: 4,
    title: "Network Layer: Data Plane",
    subtitle: "Forwarding and IP",
    topics: [
      {
        id: "4.1",
        title: "Overview of Network Layer",
        content: [
          "Network layer moves packets from sending to receiving host",
          "Two important functions: forwarding and routing"
        ],
        subtopics: [
          {
            title: "Data Plane vs Control Plane",
            content: [
              "Data plane: local, per-router action - forwarding packets from input to output",
              "Control plane: network-wide logic - determining end-to-end paths",
              "Forwarding table determines how packets are forwarded"
            ]
          },
          {
            title: "Network Service Models",
            content: [
              "Best-effort service: no guarantees (Internet model)",
              "Guaranteed delivery, bounded delay, in-order delivery, minimum bandwidth",
              "Internet provides best-effort; other services built on top"
            ]
          }
        ]
      },
      {
        id: "4.2",
        title: "What's Inside a Router?",
        content: [
          "Routers have four main components: input ports, switching fabric, output ports, routing processor"
        ],
        subtopics: [
          {
            title: "Input Port Processing",
            content: [
              "Line termination and link-layer processing",
              "Lookup: determine output port using forwarding table",
              "Forwarding table computed by routing processor",
              "Destination-based forwarding or generalized forwarding"
            ]
          },
          {
            title: "Switching",
            content: [
              "Switching fabric transfers packets from input to output buffers",
              "Three types: memory, bus, crossbar (interconnection network)",
              "Crossbar: simultaneous forwarding of multiple packets (non-blocking)"
            ]
          },
          {
            title: "Output Port Processing",
            content: [
              "Buffering required when arrival rate exceeds transmission rate",
              "Buffer sizing: RTT × C / √N (rule of thumb)",
              "Packet scheduling: FIFO, priority queuing, weighted fair queuing"
            ]
          },
          {
            title: "Packet Scheduling",
            content: [
              "FIFO (First In First Out): simple queue, tail drop on overflow",
              "Priority Queuing: multiple classes with different priorities",
              "Weighted Fair Queuing (WFQ): guaranteed share of bandwidth per class"
            ]
          }
        ]
      },
      {
        id: "4.3",
        title: "The Internet Protocol (IP)",
        content: [
          "IP is the network layer protocol of the Internet",
          "Two versions in use: IPv4 and IPv6"
        ],
        subtopics: [
          {
            title: "IPv4 Datagram Format",
            content: [
              "Version (4 bits): IP protocol version",
              "Header length (4 bits): header length in 32-bit words",
              "Total length (16 bits): total datagram length in bytes",
              "Identification, flags, fragmentation offset",
              "TTL (Time To Live): decremented at each hop, discard at 0",
              "Protocol: transport layer protocol (TCP=6, UDP=17)",
              "Header checksum, source/destination IP addresses",
              "Options and data (payload)"
            ]
          },
          {
            title: "IPv4 Addressing",
            content: [
              "32-bit address, written in dotted-decimal notation",
              "Interface: connection between host/router and physical link",
              "Subnet: network segment with same high-order bits",
              "CIDR (Classless InterDomain Routing): a.b.c.d/x where x is prefix length",
              "Subnet mask: /x means first x bits are network portion"
            ]
          },
          {
            title: "DHCP",
            content: [
              "Dynamic Host Configuration Protocol - assigns IP addresses dynamically",
              "DHCP discover, offer, request, acknowledge (4-step process)",
              "Provides IP address, subnet mask, default gateway, DNS server"
            ]
          },
          {
            title: "NAT",
            content: [
              "Network Address Translation - maps private to public addresses",
              "NAT translation table maps (private IP, port) to (public IP, port)",
              "Allows multiple devices to share one public IP",
              "Controversial: violates layering, breaks end-to-end argument"
            ]
          },
          {
            title: "IPv6",
            content: [
              "128-bit addresses (vs 32-bit in IPv4)",
              "Fixed-length 40-byte header (vs variable in IPv4)",
              "No fragmentation, no checksum, no options (separate extension headers)",
              "Transition: dual-stack, tunneling, translation"
            ]
          }
        ]
      },
      {
        id: "4.4",
        title: "Generalized Forwarding and SDN",
        content: [
          "Software-Defined Networking (SDN) separates control and data planes"
        ],
        subtopics: [
          {
            title: "Match-Plus-Action",
            content: [
              "Match: match fields in packet header (IP src/dst, port, etc.)",
              "Action: forward, drop, modify, send to controller",
              "Flow table entries define match-action rules"
            ]
          },
          {
            title: "OpenFlow",
            content: [
              "OpenFlow protocol for SDN controller to communicate with switches",
              "Match fields: link, network, transport layer headers",
              "Actions: forward to port(s), drop, modify fields, send to controller"
            ]
          }
        ]
      },
      {
        id: "4.5",
        title: "Middleboxes",
        content: [
          "Middleboxes perform functions beyond standard IP forwarding",
          "Examples: NATs, firewalls, load balancers, intrusion detection systems"
        ]
      }
    ],
    keyTerms: [
      { term: "Forwarding", definition: "Local action of moving packet from input to output link" },
      { term: "Routing", definition: "Network-wide process of determining end-to-end paths" },
      { term: "IPv4", definition: "Internet Protocol version 4 - 32-bit addresses" },
      { term: "IPv6", definition: "Internet Protocol version 6 - 128-bit addresses" },
      { term: "CIDR", definition: "Classless InterDomain Routing - flexible address allocation" },
      { term: "NAT", definition: "Network Address Translation - private to public IP mapping" },
      { term: "DHCP", definition: "Dynamic Host Configuration Protocol - automatic IP assignment" },
      { term: "TTL", definition: "Time To Live - limits datagram lifetime, prevents infinite loops" },
      { term: "SDN", definition: "Software-Defined Networking - separates control and data planes" },
      { term: "OpenFlow", definition: "Protocol for SDN controller-switch communication" }
    ],
    practiceQuestions: [
      {
        question: "What is the difference between forwarding and routing?",
        answer: "Forwarding is the local action of moving a packet from an input link to the appropriate output link. Routing is the network-wide process of determining the complete path from source to destination.",
        explanation: "Forwarding uses the forwarding table and happens at each router. Routing algorithms compute the paths and populate the forwarding tables.",
        type: "short-answer"
      },
      {
        question: "How many bits are in an IPv6 address?",
        options: ["32", "64", "128", "256"],
        answer: "128",
        explanation: "IPv6 uses 128-bit addresses, providing approximately 3.4 × 10^38 unique addresses. IPv4 uses 32-bit addresses.",
        type: "multiple-choice"
      },
      {
        question: "NAT allows multiple devices to share a single public IP address.",
        options: ["True", "False"],
        answer: "True",
        explanation: "NAT (Network Address Translation) maps multiple private IP addresses to a single public IP address using different port numbers.",
        type: "true-false"
      },
      {
        question: "What does CIDR notation /24 mean?",
        options: ["24 hosts in the network", "First 24 bits are the network prefix", "Subnet mask is 24.0.0.0", "Network has 24 subnets"],
        answer: "First 24 bits are the network prefix",
        explanation: "In CIDR notation (e.g., 192.168.1.0/24), the /24 indicates that the first 24 bits represent the network portion of the address.",
        type: "multiple-choice"
      }
    ]
  },
  {
    id: 5,
    title: "Network Layer: Control Plane",
    subtitle: "Routing Algorithms",
    topics: [
      {
        id: "5.1",
        title: "Introduction",
        content: [
          "The control plane determines how packets are routed through the network",
          "Two approaches: per-router control (traditional) and logically centralized control (SDN)"
        ]
      },
      {
        id: "5.2",
        title: "Routing Algorithms",
        content: [
          "Routing algorithms determine good paths from senders to receivers",
          "Graph abstraction: routers as nodes, links as edges with costs"
        ],
        subtopics: [
          {
            title: "Link-State (LS) Algorithm",
            content: [
              "Each node knows complete network topology and all link costs",
              "Dijkstra's algorithm computes least-cost paths",
              "Iterative: after k iterations, know k destinations with shortest path",
              "Complexity: O(n²) with naive implementation, O(n log n) with heap",
              "Oscillations possible with congestion-based costs"
            ]
          },
          {
            title: "Distance-Vector (DV) Algorithm",
            content: [
              "Iterative, asynchronous, distributed",
              "Each node knows only neighbors and link costs to neighbors",
              "Bellman-Ford equation: dx(y) = min_v{c(x,v) + dv(y)}",
              "Nodes exchange distance vectors with neighbors",
              "Converges to correct values, but can have routing loops",
              "Count-to-infinity problem"
            ]
          },
          {
            title: "LS vs DV Comparison",
            content: [
              "Message complexity: LS O(n²), DV depends on convergence",
              "Speed of convergence: LS O(n²), DV variable (can have loops)",
              "Robustness: LS node advertises incorrect cost, DV can propagate errors"
            ]
          }
        ]
      },
      {
        id: "5.3",
        title: "Intra-AS Routing: OSPF",
        content: [
          "AS (Autonomous System): collection of routers under same administrative control",
          "Intra-AS routing protocols (IGPs) route within an AS"
        ],
        subtopics: [
          {
            title: "OSPF",
            content: [
              "Open Shortest Path First - link-state protocol",
              "Uses Dijkstra's algorithm",
              "OSPF advertisement carries one entry per neighbor",
              "Advertisements flooded to entire AS",
              "IS-IS is another popular link-state IGP"
            ]
          },
          {
            title: "OSPF Advanced Features",
            content: [
              "Security: authenticated OSPF messages",
              "Multiple same-cost paths allowed",
              "Integrated unicast and multicast support",
              "Hierarchical OSPF in large domains"
            ]
          }
        ]
      },
      {
        id: "5.4",
        title: "Routing Among ISPs: BGP",
        content: [
          "BGP (Border Gateway Protocol) is the de facto inter-domain routing protocol",
          "BGP routes between autonomous systems"
        ],
        subtopics: [
          {
            title: "BGP Basics",
            content: [
              "eBGP: BGP between different ASes",
              "iBGP: BGP within same AS",
              "BGP session: two routers exchange BGP messages",
              "BGP routes advertised with attributes"
            ]
          },
          {
            title: "BGP Route Attributes",
            content: [
              "AS-PATH: list of ASes through which prefix advertisement has passed",
              "NEXT-HOP: router interface to begin AS-PATH",
              "LOCAL-PREF: preference value for internal AS routing"
            ]
          },
          {
            title: "BGP Route Selection",
            content: [
              "1. Highest local preference value",
              "2. Shortest AS-PATH",
              "3. Closest NEXT-HOP router (hot potato routing)",
              "4. Additional criteria (BGP identifiers)"
            ]
          },
          {
            title: "BGP Routing Policy",
            content: [
              "ISPs only advertise routes they want to carry traffic for",
              "Customer-provider and peer-peer relationships",
              "No transit across peering links",
              "Import/export filters enforce policies"
            ]
          }
        ]
      },
      {
        id: "5.5",
        title: "The SDN Control Plane",
        content: [
          "SDN separates the control plane from the data plane"
        ],
        subtopics: [
          {
            title: "SDN Architecture",
            content: [
              "Data plane switches: fast, simple, commodity",
              "SDN controller: maintains network state, interacts with switches",
              "Network control applications: implement control functions"
            ]
          },
          {
            title: "OpenFlow Protocol",
            content: [
              "Operates between controller and switches",
              "TCP used for reliable message exchange",
              "Messages: controller-to-switch, asynchronous (switch-to-controller), symmetric"
            ]
          }
        ]
      },
      {
        id: "5.6",
        title: "ICMP",
        content: [
          "ICMP (Internet Control Message Protocol) is used by hosts and routers",
          "ICMP messages carried in IP datagrams",
          "Types: echo request/reply (ping), destination unreachable, time exceeded"
        ]
      },
      {
        id: "5.7",
        title: "Network Management",
        content: [
          "SNMP: Simple Network Management Protocol",
          "NETCONF/YANG: modern network management framework"
        ],
        subtopics: [
          {
            title: "SNMP",
            content: [
              "Manager-agent paradigm",
              "MIB (Management Information Base): managed objects",
              "Get, Set, Trap operations",
              "SNMPv3 adds security"
            ]
          },
          {
            title: "NETCONF/YANG",
            content: [
              "NETCONF: protocol for managing network devices",
              "YANG: data modeling language for network configuration",
              "Uses SSH for transport, XML for encoding"
            ]
          }
        ]
      }
    ],
    keyTerms: [
      { term: "AS", definition: "Autonomous System - routers under same administrative control" },
      { term: "IGP", definition: "Interior Gateway Protocol - routing within an AS" },
      { term: "EGP", definition: "Exterior Gateway Protocol - routing between ASes" },
      { term: "OSPF", definition: "Open Shortest Path First - link-state intra-AS protocol" },
      { term: "BGP", definition: "Border Gateway Protocol - inter-AS routing protocol" },
      { term: "Link-State", definition: "Algorithm where each node knows complete network topology" },
      { term: "Distance-Vector", definition: "Algorithm where nodes only know neighbors and their costs" },
      { term: "Dijkstra's Algorithm", definition: "Computes shortest paths in link-state routing" },
      { term: "AS-PATH", definition: "BGP attribute listing ASes in route advertisement" },
      { term: "Hot Potato Routing", definition: "Getting traffic out of AS as quickly as possible" },
      { term: "SNMP", definition: "Simple Network Management Protocol" }
    ],
    practiceQuestions: [
      {
        question: "What is the main difference between link-state and distance-vector routing algorithms?",
        answer: "Link-state algorithms require each node to know the complete network topology and all link costs, while distance-vector algorithms only require nodes to know their direct neighbors and the costs to reach them.",
        explanation: "Link-state uses Dijkstra's algorithm and has O(n²) complexity. Distance-vector uses distributed Bellman-Ford and can suffer from count-to-infinity problems.",
        type: "short-answer"
      },
      {
        question: "Which routing protocol is used for inter-AS routing on the Internet?",
        options: ["OSPF", "RIP", "BGP", "EIGRP"],
        answer: "BGP",
        explanation: "BGP (Border Gateway Protocol) is the de facto standard for routing between autonomous systems on the Internet.",
        type: "multiple-choice"
      },
      {
        question: "In distance-vector routing, the count-to-infinity problem occurs when a link fails.",
        options: ["True", "False"],
        answer: "True",
        explanation: "When a link fails, distance-vector algorithms can take a long time to converge as bad news (increased costs) travels slowly, causing routers to incrementally increase path costs.",
        type: "true-false"
      },
      {
        question: "What does the AS-PATH attribute in BGP represent?",
        options: ["The path cost", "The list of ASes a route has traversed", "The next hop router", "The local preference value"],
        answer: "The list of ASes a route has traversed",
        explanation: "AS-PATH is a BGP path attribute that contains the list of autonomous systems through which the route advertisement has passed, used for loop prevention and path selection.",
        type: "multiple-choice"
      }
    ]
  },
  {
    id: 6,
    title: "The Link Layer and LANs",
    subtitle: "Ethernet and Switches",
    topics: [
      {
        id: "6.1",
        title: "Introduction to the Link Layer",
        content: [
          "Link layer moves datagrams from node to adjacent node over a single link",
          "Different link protocols may be used on different links"
        ],
        subtopics: [
          {
            title: "Link Layer Services",
            content: [
              "Framing: encapsulate datagram into frame",
              "Link access: medium access control (MAC) protocol",
              "Reliable delivery: between adjacent nodes (rarely used)",
              "Error detection and correction",
              "Flow control (rarely used)"
            ]
          },
          {
            title: "Where Is Link Layer Implemented?",
            content: [
              "Implemented in network adapter (NIC - Network Interface Card)",
              "Combination of hardware (controller chip) and software (driver)",
              "CPU handles IP and above, NIC handles link layer and physical"
            ]
          }
        ]
      },
      {
        id: "6.2",
        title: "Error Detection and Correction",
        content: [
          "Errors occur due to signal attenuation and electromagnetic noise",
          "Receiver detects presence of errors and may correct them"
        ],
        subtopics: [
          {
            title: "Parity Checks",
            content: [
              "Single bit parity: detect single bit errors",
              "Two-dimensional parity: detect and correct single bit errors",
              "Parity bit added to make total number of 1s even (or odd)"
            ]
          },
          {
            title: "Checksum",
            content: [
              "Internet checksum used in transport and network layers",
              "Sum all 16-bit words, take 1's complement",
              "Stronger methods needed at link layer"
            ]
          },
          {
            title: "Cyclic Redundancy Check (CRC)",
            content: [
              "Powerful error-detection code",
              "View data bits as binary number D",
              "Choose r+1 bit pattern (generator) G",
              "Compute r CRC bits R such that <D,R> exactly divisible by G",
              "Can detect burst errors less than r+1 bits"
            ]
          }
        ]
      },
      {
        id: "6.3",
        title: "Multiple Access Links and Protocols",
        content: [
          "Two types of links: point-to-point and broadcast",
          "Multiple access problem: coordinating access to shared medium"
        ],
        subtopics: [
          {
            title: "Channel Partitioning",
            content: [
              "TDMA (Time Division Multiple Access): each node gets fixed time slot",
              "FDMA (Frequency Division Multiple Access): each node gets frequency band",
              "CDMA (Code Division Multiple Access): each node gets unique code",
              "Efficient at high load, inefficient at low load"
            ]
          },
          {
            title: "Random Access",
            content: [
              "Slotted ALOHA: transmit in slot, retransmit with probability p if collision",
              "Pure ALOHA: no slots, transmit immediately",
              "CSMA (Carrier Sense Multiple Access): listen before transmit",
              "CSMA/CD (Collision Detection): abort transmission on collision (Ethernet)",
              "CSMA/CA (Collision Avoidance): avoid collisions (WiFi)"
            ]
          },
          {
            title: "Taking-Turns Protocols",
            content: [
              "Polling: master node invites slave nodes to transmit",
              "Token passing: control token passed from node to node"
            ]
          }
        ]
      },
      {
        id: "6.4",
        title: "Switched Local Area Networks",
        content: [
          "LANs connect hosts in a local area using switches"
        ],
        subtopics: [
          {
            title: "Link-Layer Addressing and ARP",
            content: [
              "MAC address (LAN address): 48 bits, burned into NIC",
              "Flat structure (not hierarchical like IP)",
              "ARP (Address Resolution Protocol): IP to MAC address translation",
              "ARP table: IP-MAC mappings cached",
              "ARP query broadcast, reply unicast"
            ]
          },
          {
            title: "Ethernet",
            content: [
              "Dominant wired LAN technology",
              "Connectionless: no handshaking",
              "Unreliable: no ACKs",
              "CSMA/CD with binary exponential backoff",
              "Frame structure: preamble, dest/src MAC, type, data, CRC"
            ]
          },
          {
            title: "Link-Layer Switches",
            content: [
              "Store-and-forward frames",
              "Transparent: hosts unaware of switches",
              "Self-learning: build switch table automatically",
              "Plug-and-play: no configuration needed",
              "Eliminate collisions (each link is its own collision domain)"
            ]
          },
          {
            title: "VLANs",
            content: [
              "Virtual Local Area Network - logical grouping of hosts",
              "Port-based VLAN: switch ports assigned to VLANs",
              "VLAN trunking: carry multiple VLANs over single link",
              "802.1Q tag added to frames on trunk ports"
            ]
          }
        ]
      },
      {
        id: "6.5",
        title: "Link Virtualization: MPLS",
        content: [
          "MPLS (Multiprotocol Label Switching) uses fixed-length labels",
          "Labels used for forwarding instead of IP addresses",
          "Faster lookup, traffic engineering, VPN support"
        ]
      },
      {
        id: "6.6",
        title: "Data Center Networking",
        content: [
          "Data centers house thousands of servers",
          "High bandwidth, low latency, redundancy requirements"
        ],
        subtopics: [
          {
            title: "Data Center Architecture",
            content: [
              "Racks of servers with Top-of-Rack (TOR) switches",
              "Tiered topology: TOR → aggregation → core routers",
              "Full bisection bandwidth desirable"
            ]
          },
          {
            title: "Trends",
            content: [
              "Software-defined networking (SDN) in data centers",
              "Virtualization and containerization",
              "East-west traffic (server-to-server) dominates"
            ]
          }
        ]
      },
      {
        id: "6.7",
        title: "A Day in the Life of a Web Page Request",
        content: [
          "Complete walkthrough from DHCP to HTTP"
        ],
        subtopics: [
          {
            title: "Getting Started",
            content: [
              "DHCP: obtain IP address, subnet mask, gateway, DNS server",
              "DHCP request encapsulated in UDP, IP, Ethernet",
              "Broadcast on local network, DHCP server responds"
            ]
          },
          {
            title: "DNS and ARP",
            content: [
              "DNS query to resolve www.google.com",
              "ARP to get MAC address of gateway router",
              "DNS query forwarded through hierarchy"
            ]
          },
          {
            title: "Web Client-Server Interaction",
            content: [
              "TCP connection setup (three-way handshake)",
              "HTTP request sent over TCP",
              "HTTP response with web page content"
            ]
          }
        ]
      }
    ],
    keyTerms: [
      { term: "MAC Address", definition: "Media Access Control address - 48-bit link-layer address" },
      { term: "ARP", definition: "Address Resolution Protocol - maps IP to MAC addresses" },
      { term: "Ethernet", definition: "Dominant wired LAN technology using CSMA/CD" },
      { term: "Switch", definition: "Link-layer device that forwards frames based on MAC addresses" },
      { term: "VLAN", definition: "Virtual LAN - logical grouping of hosts regardless of physical location" },
      { term: "CSMA/CD", definition: "Carrier Sense Multiple Access with Collision Detection" },
      { term: "CRC", definition: "Cyclic Redundancy Check - powerful error detection" },
      { term: "MPLS", definition: "Multiprotocol Label Switching - uses labels for forwarding" },
      { term: "Frame", definition: "Link-layer packet that encapsulates datagram" },
      { term: "Broadcast", definition: "Transmission to all nodes on LAN" },
      { term: "Collision Domain", definition: "Network segment where frames can collide" }
    ],
    practiceQuestions: [
      {
        question: "What is the purpose of ARP?",
        answer: "ARP (Address Resolution Protocol) translates IP addresses to MAC addresses on a local network.",
        explanation: "When a host knows the IP address of another host on the same LAN but not its MAC address, it sends an ARP query broadcast to discover the MAC address.",
        type: "short-answer"
      },
      {
        question: "How does a switch learn which MAC addresses are on which ports?",
        options: ["ARP requests", "DHCP responses", "Self-learning from incoming frames", "Manual configuration"],
        answer: "Self-learning from incoming frames",
        explanation: "Switches build their forwarding tables by examining the source MAC address of incoming frames and recording which port they arrived on.",
        type: "multiple-choice"
      },
      {
        question: "Ethernet uses CSMA/CA (Collision Avoidance).",
        options: ["True", "False"],
        answer: "False",
        explanation: "Ethernet uses CSMA/CD (Collision Detection), not CSMA/CA. WiFi (802.11) uses CSMA/CA because collision detection is difficult in wireless.",
        type: "true-false"
      },
      {
        question: "What is the size of a MAC address?",
        options: ["32 bits", "48 bits", "64 bits", "128 bits"],
        answer: "48 bits",
        explanation: "MAC addresses are 48 bits (6 bytes) long, typically written as six groups of two hexadecimal digits (e.g., 00:1A:2B:3C:4D:5E).",
        type: "multiple-choice"
      }
    ]
  },
  {
    id: 7,
    title: "Wireless and Mobile Networks",
    subtitle: "WiFi and Cellular",
    topics: [
      {
        id: "7.1",
        title: "Introduction",
        content: [
          "Wireless and mobile networks are increasingly important",
          "Different challenges than wired networks"
        ]
      },
      {
        id: "7.2",
        title: "Wireless Links and Network Characteristics",
        content: [
          "Wireless links have unique characteristics that affect protocol design"
        ],
        subtopics: [
          {
            title: "Wireless Link Characteristics",
            content: [
              "Decreased signal strength (path loss) with distance",
              "Interference from other sources",
              "Multipath propagation: signals reflect off objects",
              "SNR (Signal-to-Noise Ratio) determines BER (Bit Error Rate)"
            ]
          },
          {
            title: "CDMA",
            content: [
              "Code Division Multiple Access - channel partitioning protocol",
              "Each node assigned unique code",
              "Multiple nodes can transmit simultaneously",
              "Receiver uses sender's code to extract signal"
            ]
          }
        ]
      },
      {
        id: "7.3",
        title: "Wireless LANs (WiFi)",
        content: [
          "IEEE 802.11 wireless LAN standard (WiFi)"
        ],
        subtopics: [
          {
            title: "802.11 Architecture",
            content: [
              "BSS (Basic Service Set): wireless hosts and AP (Access Point)",
              "Infrastructure mode: hosts communicate through AP",
              "Ad hoc mode: hosts communicate directly",
              "Channel association: host must associate with AP"
            ]
          },
          {
            title: "802.11 MAC Protocol",
            content: [
              "CSMA/CA (Collision Avoidance) - not CD",
              "Why CA? Can't detect all collisions in wireless",
              "RTS/CTS for hidden terminal problem",
              "ACKs for reliable data transfer",
              "Random backoff after collision"
            ]
          },
          {
            title: "802.11 Frame",
            content: [
              "Address fields: up to 4 addresses (source, dest, AP, etc.)",
              "Sequence number for reliability",
              "CRC for error detection"
            ]
          },
          {
            title: "Mobility in Same Subnet",
            content: [
              "Self-learning switch learns new AP port",
              "No IP address change needed",
              "May lose some in-transit frames"
            ]
          },
          {
            title: "Advanced 802.11",
            content: [
              "802.11n, 802.11ac, 802.11ax (WiFi 6)",
              "MIMO (Multiple Input Multiple Output)",
              "Higher data rates, better range"
            ]
          }
        ]
      },
      {
        id: "7.4",
        title: "Cellular Networks: 4G and 5G",
        content: [
          "Cellular networks provide wide-area wireless access"
        ],
        subtopics: [
          {
            title: "4G LTE Architecture",
            content: [
              "UE (User Equipment): mobile device",
              "eNodeB: base station (evolved Node B)",
              "EPC (Evolved Packet Core): core network",
              "MME (Mobility Management Entity): control plane",
              "SGW/PGW: data plane gateways"
            ]
          },
          {
            title: "LTE Protocol Stacks",
            content: [
              "Control plane: NAS, RRC, PDCP, RLC, MAC, PHY",
              "Data plane: IP, PDCP, RLC, MAC, PHY",
              "PHY: Orthogonal Frequency Division Multiplexing (OFDM)"
            ]
          },
          {
            title: "5G Networks",
            content: [
              "Enhanced Mobile Broadband (eMBB)",
              "Ultra-Reliable Low Latency Communications (URLLC)",
              "Massive Machine Type Communications (mMTC)",
              "Network slicing for different services"
            ]
          }
        ]
      },
      {
        id: "7.5",
        title: "Mobility Management: Principles",
        content: [
          "Handling mobile users who change point of attachment"
        ],
        subtopics: [
          {
            title: "Network Layer Mobility",
            content: [
              "Home network: permanent home of mobile",
              "Permanent address: address in home network",
              "Visited network: network where mobile currently resides",
              "Care-of address: address in visited network"
            ]
          },
          {
            title: "Routing to Mobile",
            content: [
              "Indirect routing: home agent forwards to mobile",
              "Direct routing: correspondent directly to mobile",
              "Indirect is simpler but has triangle routing problem"
            ]
          }
        ]
      },
      {
        id: "7.6",
        title: "Mobile IP",
        content: [
          "Mobile IP standard for IP mobility",
          "Home agent, foreign agent, care-of address",
          "Registration with home agent",
          "Encapsulation for packet forwarding"
        ]
      },
      {
        id: "7.7",
        title: "Impact on Higher-Layer Protocols",
        content: [
          "Mobility affects TCP performance",
          "Packet loss due to handoffs interpreted as congestion",
          "Solutions: split TCP, explicit notification",
          "Real-time applications sensitive to delay variation"
        ]
      }
    ],
    keyTerms: [
      { term: "AP", definition: "Access Point - base station in wireless LAN" },
      { term: "BSS", definition: "Basic Service Set - wireless hosts and AP" },
      { term: "CSMA/CA", definition: "Carrier Sense Multiple Access with Collision Avoidance" },
      { term: "Hidden Terminal", definition: "Node that can reach AP but not other nodes" },
      { term: "RTS/CTS", definition: "Request to Send / Clear to Send - solves hidden terminal" },
      { term: "SNR", definition: "Signal-to-Noise Ratio" },
      { term: "BER", definition: "Bit Error Rate" },
      { term: "eNodeB", definition: "LTE base station" },
      { term: "EPC", definition: "Evolved Packet Core - LTE core network" },
      { term: "Handoff", definition: "Moving from one base station to another" },
      { term: "Home Agent", definition: "Entity in home network that forwards to mobile" },
      { term: "Care-of Address", definition: "Mobile's temporary address in visited network" }
    ],
    practiceQuestions: [
      {
        question: "Why does WiFi use CSMA/CA instead of CSMA/CD?",
        answer: "WiFi uses CSMA/CA because collision detection is difficult in wireless networks. The transmitting node's signal is much stronger than received signals, making it hard to detect collisions while transmitting.",
        explanation: "In wireless, the transmitting node's own signal drowns out other signals at its receiver, so it cannot detect collisions. Instead, WiFi tries to avoid collisions using RTS/CTS and ACKs.",
        type: "short-answer"
      },
      {
        question: "What problem does RTS/CTS solve in WiFi?",
        options: ["Low signal strength", "Hidden terminal problem", "High bit error rate", "Frequency interference"],
        answer: "Hidden terminal problem",
        explanation: "RTS/CTS (Request to Send/Clear to Send) helps solve the hidden terminal problem where two nodes can't hear each other but both can reach the AP, potentially causing collisions.",
        type: "multiple-choice"
      },
      {
        question: "In 4G LTE, the eNodeB is the base station.",
        options: ["True", "False"],
        answer: "True",
        explanation: "eNodeB (evolved Node B) is the LTE base station that communicates directly with user equipment (mobile devices).",
        type: "true-false"
      },
      {
        question: "What is the main function of the Home Agent in Mobile IP?",
        options: ["Assign IP addresses", "Forward packets to mobile node", "Encrypt wireless traffic", "Manage base stations"],
        answer: "Forward packets to mobile node",
        explanation: "The Home Agent in the mobile's home network intercepts packets destined for the mobile's permanent address and forwards them to the mobile's current care-of address.",
        type: "multiple-choice"
      }
    ]
  },
  {
    id: 8,
    title: "Security in Computer Networks",
    subtitle: "Cryptography and Protocols",
    topics: [
      {
        id: "8.1",
        title: "What Is Network Security?",
        content: [
          "Confidentiality: only sender and receiver should understand message contents",
          "Message integrity: ensure message not altered in transit",
          "End-point authentication: confirm identity of communicating parties",
          "Operational security: protect against attacks"
        ]
      },
      {
        id: "8.2",
        title: "Principles of Cryptography",
        content: [
          "Cryptography is the foundation of network security"
        ],
        subtopics: [
          {
            title: "Symmetric Key Cryptography",
            content: [
              "Same key for encryption and decryption",
              "Block ciphers: DES (56-bit), 3DES, AES (128/192/256-bit)",
              "Cipher-block chaining (CBC) for security",
              "Stream ciphers: encrypt one bit at a time"
            ]
          },
          {
            title: "Public Key Encryption",
            content: [
              "Different keys for encryption (public) and decryption (private)",
              "RSA: based on difficulty of factoring large numbers",
              "Public key can be distributed openly",
              "Much slower than symmetric encryption"
            ]
          }
        ]
      },
      {
        id: "8.3",
        title: "Message Integrity and Digital Signatures",
        content: [
          "Ensure message not tampered with during transmission"
        ],
        subtopics: [
          {
            title: "Cryptographic Hash Functions",
            content: [
              "Takes input of any size, produces fixed-size output",
              "Properties: one-way, collision-resistant",
              "MD5 (insecure), SHA-1 (insecure), SHA-256, SHA-3"
            ]
          },
          {
            title: "Message Authentication Code (MAC)",
            content: [
              "Hash function plus secret key",
              "Provides message integrity and authentication",
              "HMAC: Hash-based MAC"
            ]
          },
          {
            title: "Digital Signatures",
            content: [
              "Encrypt hash with private key",
              "Anyone can verify with public key",
              "Provides integrity, authentication, and non-repudiation",
              "Certificate authorities bind public keys to identities"
            ]
          }
        ]
      },
      {
        id: "8.4",
        title: "End-Point Authentication",
        content: [
          "Proving identity in network communication",
          "Nonce: number used only once to prevent replay attacks",
          "Authentication protocols use nonces and encryption"
        ]
      },
      {
        id: "8.5",
        title: "Securing E-Mail",
        content: [
          "Email security requires confidentiality and integrity"
        ],
        subtopics: [
          {
            title: "Secure E-Mail",
            content: [
              "Encrypt message with symmetric key",
              "Encrypt symmetric key with recipient's public key",
              "Sign hash with sender's private key",
              "Provides confidentiality, integrity, and authentication"
            ]
          },
          {
            title: "PGP",
            content: [
              "Pretty Good Privacy - widely used email encryption",
              "Uses symmetric and public key cryptography",
              "Web of trust model for certificates"
            ]
          }
        ]
      },
      {
        id: "8.6",
        title: "Securing TCP: TLS",
        content: [
          "TLS (Transport Layer Security) provides security at transport layer",
          "HTTPS = HTTP over TLS"
        ],
        subtopics: [
          {
            title: "TLS Handshake",
            content: [
              "1. Client sends supported cipher suites",
              "2. Server selects cipher, sends certificate",
              "3. Client verifies certificate, sends premaster secret",
              "4. Both derive session keys",
              "5. Encrypted communication begins"
            ]
          },
          {
            title: "TLS Record",
            content: [
              "Data fragmented into records",
              "Each record: MAC for integrity, encryption for confidentiality",
              "Sequence numbers prevent replay attacks"
            ]
          }
        ]
      },
      {
        id: "8.7",
        title: "Network-Layer Security: IPsec",
        content: [
          "IPsec provides security at network layer"
        ],
        subtopics: [
          {
            title: "IPsec and VPNs",
            content: [
              "VPN: Virtual Private Network over public Internet",
              "IPsec encrypts all traffic between edge routers",
              "Transparent to applications"
            ]
          },
          {
            title: "AH and ESP",
            content: [
              "AH (Authentication Header): integrity and authentication",
              "ESP (Encapsulating Security Payload): confidentiality plus AH",
              "ESP more widely used"
            ]
          },
          {
            title: "Security Associations",
            content: [
              "SA: simplex logical connection with security parameters",
              "SPI (Security Parameter Index) identifies SA",
              "SAD (Security Association Database) stores SAs",
              "SPD (Security Policy Database) defines policies"
            ]
          },
          {
            title: "IKE",
            content: [
              "Internet Key Exchange - establishes SAs",
              "Two phases: establish IKE SA, then IPsec SA",
              "Uses Diffie-Hellman for key agreement"
            ]
          }
        ]
      },
      {
        id: "8.8",
        title: "Securing Wireless",
        content: [
          "Wireless networks have unique security challenges"
        ],
        subtopics: [
          {
            title: "WPA2 and WPA3",
            content: [
              "WEP (Wired Equivalent Privacy) is insecure",
              "WPA2 uses AES-CCMP encryption",
              "WPA3 provides stronger security and forward secrecy"
            ]
          },
          {
            title: "Cellular Security",
            content: [
              "Authentication and key agreement (AKA)",
              "Mutual authentication between UE and network",
              "Encryption of radio interface"
            ]
          }
        ]
      },
      {
        id: "8.9",
        title: "Operational Security",
        content: [
          "Firewalls and IDS protect networks from attacks"
        ],
        subtopics: [
          {
            title: "Firewalls",
            content: [
              "Isolate internal network from Internet",
              "Packet filtering: filter based on headers",
              "Stateful inspection: track connection state",
              "Application gateway: inspect application data"
            ]
          },
          {
            title: "Intrusion Detection Systems",
            content: [
              "IDS: alerts administrator of suspicious activity",
              "IPS: actively blocks suspicious traffic",
              "Signature-based: match known attack patterns",
              "Anomaly-based: detect deviations from normal"
            ]
          }
        ]
      }
    ],
    keyTerms: [
      { term: "Confidentiality", definition: "Ensuring only authorized parties can read data" },
      { term: "Integrity", definition: "Ensuring data not altered in transit" },
      { term: "Authentication", definition: "Verifying identity of communicating parties" },
      { term: "Symmetric Encryption", definition: "Same key for encryption and decryption" },
      { term: "Public Key Encryption", definition: "Different keys for encryption and decryption" },
      { term: "Hash Function", definition: "One-way function producing fixed-size output" },
      { term: "Digital Signature", definition: "Encrypted hash providing integrity and non-repudiation" },
      { term: "MAC", definition: "Message Authentication Code - hash with secret key" },
      { term: "TLS", definition: "Transport Layer Security - secures TCP connections" },
      { term: "IPsec", definition: "Network layer security protocol" },
      { term: "VPN", definition: "Virtual Private Network - secure tunnel over public network" },
      { term: "Firewall", definition: "Device that filters traffic between networks" },
      { term: "IDS", definition: "Intrusion Detection System - monitors for attacks" }
    ],
    practiceQuestions: [
      {
        question: "What is the main difference between symmetric and public key encryption?",
        answer: "Symmetric encryption uses the same key for both encryption and decryption, while public key encryption uses different keys - a public key for encryption and a private key for decryption.",
        explanation: "Symmetric encryption is faster but requires secure key distribution. Public key encryption solves the key distribution problem but is computationally more expensive.",
        type: "short-answer"
      },
      {
        question: "What does a digital signature provide?",
        options: ["Only confidentiality", "Only integrity", "Integrity and authentication", "Only authentication"],
        answer: "Integrity and authentication",
        explanation: "A digital signature (encrypted hash) provides message integrity (proof message wasn't altered) and authentication (proof of sender's identity) plus non-repudiation.",
        type: "multiple-choice"
      },
      {
        question: "TLS provides security at the network layer.",
        options: ["True", "False"],
        answer: "False",
        explanation: "TLS (Transport Layer Security) operates at the transport layer, not the network layer. IPsec provides security at the network layer.",
        type: "true-false"
      },
      {
        question: "What is the purpose of a nonce in authentication protocols?",
        options: ["To encrypt the message", "To prevent replay attacks", "To compress data", "To establish a session key"],
        answer: "To prevent replay attacks",
        explanation: "A nonce (number used once) ensures freshness of authentication messages, preventing attackers from replaying old authentication messages.",
        type: "multiple-choice"
      }
    ]
  }
];

export const getChapterById = (id: number): Chapter | undefined => {
  return chapters.find(chapter => chapter.id === id);
};

export const getTotalChapters = (): number => chapters.length;

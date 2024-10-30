document.addEventListener("DOMContentLoaded", () => {
    const data = {
        "Education": [
            {
                "title": "University of Warwick",
                "description": "BSc, Cybersecurity (2023 - 2026) \n Studying Cybersecurity with a focus on secure development, cryptography, network security, and ethical hacking."
            },
            {
                "title": "Merchant Taylors’ School",
                "description": "Studied from (2017-2022) \n Completed A-Levels in: Mathematics, Physics, Computer Science"
            }
        ],
        "Academic Projects": [
            {
                "title": "Development of Secure Banking Application",
                "description": "Developed a full-stack cryptographically secure banking application. Utlised industry standard encryption and PII handling standards.\n Project stack: PostgreSQL for the database, Python (Flask) for the back-end and JavaScript (React) for the front-end. \n Source code is unable to be published."
            },
            {
                "title": "Medical Management System (MMS)",
                "description": "Akin to the banking application mentioned earlier, this project focused on the development of a secure MMS system. \n However this project prioritsed the secure implementation of RBAC systems and secure portal logons. \n Source code is unable to be published."
            },
            {
                "title": "Penetration Test in Simulated Business Environment",
                "description": "Conducted a security assessment of office networks and connected devices. \n Used this information to exploit user devices, creating a report showing impact and remediation steps for both ley and technical users. \n Published report:   <a href='certificates/cf2.pdf' target='_blank'>Click Here</a>"
            },
            {
                "title": "Remote Industrial Network Assessment",
                "description": "Analyzed a large packet capture (+2,000,000 packets) of a industrial manufacturing facility. \n Tabulated data and produced a model of the network showing vulnerabilities and solutions to increase network security. \n Published report:   <a href='certificates/nccd3.pdf' target='_blank'>Click Here</a>"
            }
        ],
        "Personal Projects": [
            {
                "title": "Raspberry Pi Wardriving Rig",
                "description": "Developed a headless wardriving rig to scan for insecure wiresless connections."
            },
            {
                "title": "WORM_WCRY Reverse Engineering",
                "description": "Reverse-engineered the WannaCry worm, utilising knowldege of low level programming and GHIDRA. \n Analysed encryption routines and virus execution in runtime."
            },
            {
                "title": "Linux System Log Analyser",
                "description": "Currently developing a Linux based logging system. \n This capstone project merges both performant code, database managment and machine learning. "
            },

        ],
        "Employment": [

            {
                "title": "Mulberry Marketing: Digital Market Researcher",
                "description": "(Mar - Jun 2021) \nConducted research on PPE standards in the EU, focusing on data analysis, extrapolation and presentation, preparing a professional report for client review."
            },
            {
                "title": "Data Annotation: Dataset Labeller",
                "description": "(Jun 2024 - Present) \n Labelled datasets for Computer-Science (Python, C#), Mathematics, and written English. \n This work enforces the importances of accuratley labelled datasets for training LLMs and MLs"
            },
            {
                "title": "CyberStart: Beta Testing",
                "description": "(Mar - Jun 2021) \n Invited to participate in CyberStart's closed-beta, having had great success whilst it was operated by the UK governement. \n Identified numerous logic errors and sanitation issues."
            }
        ],
        "Skills": [
            {
                "title": "Programming Languages",
                "description": "Python, C#, JavaScript, SQL, HTML&CSS, C, ASM, Java"
            },
            {
                "title": "Tools and Technologies",
                "description": "Git, MySQL, PostgreSQL, Unity, Flask, Tkinter, Wireshark, NetworkMiner \n Ghidra, Metasploit, Cisco Packet Tracer, GDB, SQLAlchemy"
            }
        ],
        "Certifications": [
            {
                "title": "SANS Foundations",
                "description": "Highly recommended as an introduction to Cybersecurity, taking you from the raw computer hardware to assembly,  C programming and binary manipulation. \n Certification:  <a href='certificates/SANS.pdf' target='_blank'>Click Here</a>"
            },
            {
                "title": "Immersive Labs",
                "description": "Hands-on experience in incident response, forensics, and attack simulations; Tracked in modules according to MITRE's ATT&CK knowldege base."
            },
            {
                "title": "Google Cybersecurity Professional",
                "description": "Gave practical training in cybersecurity and common industry tooling, gave critical experience in both SOC roles and cloud IAC security. \n Certification:  <a href='certificates/Google.pdf' target='_blank'>Click Here</a>"
            },
            {
                "title": "Palo Alto Networking Professional",
                "description": "Focused on NGFW, IPS, and threat detection in enterprise networks. \n Certification:  <a href='certificates/PaloAlto.pdf' target='_blank'>Click Here</a>"
            },
            {
                "title": "Meta Frontend Professional",
                "description": "Currently Completing this certfication, focusing on, UI design and web development using JavaScript (Bootstrap)."
            },
            {
                "title": "Meta Backend Professional",
                "description": "Currently Completing this certfication, focusing on, data handling and database managment using JavaScript (Django), Python and MySQL."
            },
            {
                "title": "Security+",
                "description": "Currently working towards my Security+, I hope to earn this certication by end of 2024."
            }
        ]
    };

    const contentDiv = document.getElementById('content');

    for (const [section, items] of Object.entries(data)) {
        const sectionTitle = document.createElement('h2');
        sectionTitle.textContent = section;
        contentDiv.appendChild(sectionTitle);

        const sectionList = document.createElement('ul');
        contentDiv.appendChild(sectionList);

        sectionTitle.addEventListener('click', () => {
            sectionList.classList.toggle('hidden');
        });

        items.forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = item.title;
            sectionList.appendChild(listItem);

            const description = document.createElement('p');
            description.innerHTML = item.description.replace(/\n/g, "<br>");
            description.classList.add('hidden');
            listItem.appendChild(description);

            listItem.addEventListener('click', (event) => {
                event.stopPropagation();
                description.classList.toggle('hidden');
            });
        });
    }
});
// Background animation
const canvas = document.createElement('canvas');
document.body.appendChild(canvas);
const ctx = canvas.getContext('2d');

let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;
let points = [];

function initPoints() {
    points = Array.from({length: 100}, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1
    }));
}

function animate() {
    ctx.clearRect(0, 0, width, height);
    points.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = '#888888';
        ctx.fill();
    });
    requestAnimationFrame(animate);
}

window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    initPoints();
});

const possibleWords = [
    "Hacker", "Developer", "Analyst", "Communicator", "Engineer", 
    "Strategist", "Consultant", "Researcher", "Ethical Hacker", 
    "Penetration Tester", "Cybersecurity Specialist", "Data Scientist",
    "Software Engineer", "Security Analyst", "Cryptographer"
];
const shufflingText = document.getElementById("shuffling-text");
let shuffling = true;
let pause = false;

function randomLetter() {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return letters.charAt(Math.floor(Math.random() * letters.length));
}

function shuffleText() {
    if (pause) return; // Skip shuffling while paused

    if (shuffling) {
        // Generate a random sequence of letters
        shufflingText.textContent = Array.from({ length: 8 }, randomLetter).join("");
    } else {
        // Occasionally show a word from the list
        const word = possibleWords[Math.floor(Math.random() * possibleWords.length)];
        shufflingText.textContent = word;
        pause = true; // Pause on the word
        setTimeout(() => {
            shuffling = true; // Resume shuffling after the delay
            pause = false;
        }, 1000); // Adjust pause duration (1500 ms)
    }

    // Toggle between shuffling letters and showing a word occasionally
    if (Math.random() < 0.05 && !pause) { // 10% chance to show a word, only if not paused
        shuffling = false;
    }
}

// Set the shuffle interval
setInterval(shuffleText, 100); // Adjust speed by changing 100 (milliseconds)


initPoints();
animate();

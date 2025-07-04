// Book data organized by subject
const bookData = {
    physics: [
        {
            title: "HCV Questions and Solutions",
            description: "Comprehensive problems and solutions from H.C. Verma's Concepts of Physics",
            cover: "https://m.media-amazon.com/images/I/71QZ6ajVYBL._AC_UF1000,1000_QL80_.jpg",
            link: "https://drive.google.com/drive/folders/1zi5sSNh2v0wF2O6Nx4JG6H84BsF1kgNP"
        },
        {
            title: "Lakshya JEE Physics Modules",
            description: "Complete physics modules for JEE preparation from Lakshya institute",
            cover: "https://rukminim2.flixcart.com/image/850/1000/xif0q/book/3/3/0/physics-lakshya-jee-module-original-imagg9j4zzgyhghz.jpeg",
            link: "https://drive.google.com/drive/folders/1nGQxpBzgKn9OrtTP6Hhp-qaG9x1xR_-O"
        },
        {
            title: "Arjuna JEE Physics Modules",
            description: "Physics study material from Arjuna JEE modules",
            cover: "https://m.media-amazon.com/images/I/71QZ6ajVYBL._AC_UF1000,1000_QL80_.jpg",
            link: "https://drive.google.com/drive/folders/1mZaT9E-zrbiAWqTTUH8dUudSGsQSAvt5"
        },
        {
            title: "PW Physics Mindmaps",
            description: "Visual mindmaps for quick revision of physics concepts",
            cover: "https://i.ytimg.com/vi/6xWsD4wX4dQ/maxresdefault.jpg",
            link: "https://drive.google.com/drive/folders/1yBNmYoPAeBBe3zJkAq20FnCJXWStm-f6"
        }
    ],
    chemistry: [
        {
            title: "All Chemistry Resources",
            description: "Comprehensive collection of chemistry study materials",
            cover: "https://m.media-amazon.com/images/I/71Kilyv-5rL._AC_UF1000,1000_QL80_.jpg",
            link: "https://drive.google.com/drive/folders/1z2jTRdsdriWMYCVLmT0e4pS2qI1PbkeC"
        },
        {
            title: "Lakshya JEE Chemistry Modules",
            description: "Complete chemistry modules for JEE preparation from Lakshya institute",
            cover: "https://rukminim2.flixcart.com/image/850/1000/xif0q/book/3/3/0/chemistry-lakshya-jee-module-original-imagg9j4zzgyhghz.jpeg",
            link: "https://drive.google.com/drive/folders/1nGQxpBzgKn9OrtTP6Hhp-qaG9x1xR_-O"
        },
        {
            title: "Arjuna JEE Chemistry Modules",
            description: "Chemistry study material from Arjuna JEE modules",
            cover: "https://m.media-amazon.com/images/I/71Kilyv-5rL._AC_UF1000,1000_QL80_.jpg",
            link: "https://drive.google.com/drive/folders/1mZaT9E-zrbiAWqTTUH8dUudSGsQSAvt5"
        },
        {
            title: "Prayas JEE Chemistry Modules",
            description: "Chemistry modules from Prayas JEE",
            cover: "https://m.media-amazon.com/images/I/71Kilyv-5rL._AC_UF1000,1000_QL80_.jpg",
            link: "https://drive.google.com/drive/folders/1yPIRL9I_0zlaZjQTPS48Q_jEpJECEzl"
        }
    ],
    maths: [
        {
            title: "Lakshya JEE Maths Modules",
            description: "Complete mathematics modules for JEE preparation from Lakshya institute",
            cover: "https://rukminim2.flixcart.com/image/850/1000/xif0q/book/3/3/0/mathematics-lakshya-jee-module-original-imagg9j4zzgyhghz.jpeg",
            link: "https://drive.google.com/drive/folders/1nGQxpBzgKn9OrtTP6Hhp-qaG9x1xR_-O"
        },
        {
            title: "Arjuna JEE Maths Modules",
            description: "Mathematics study material from Arjuna JEE modules",
            cover: "https://m.media-amazon.com/images/I/71QZ6ajVYBL._AC_UF1000,1000_QL80_.jpg",
            link: "https://drive.google.com/drive/folders/1mZaT9E-zrbiAWqTTUH8dUudSGsQSAvt5"
        },
        {
            title: "Prayas JEE Maths Modules",
            description: "Mathematics modules from Prayas JEE",
            cover: "https://m.media-amazon.com/images/I/71QZ6ajVYBL._AC_UF1000,1000_QL80_.jpg",
            link: "https://drive.google.com/drive/folders/1yPIRL9I_0zlaZjQTPS48Q_jEpJECEzl"
        }
    ]
};

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    // Load books for each subject
    loadBooks('physics', bookData.physics);
    loadBooks('chemistry', bookData.chemistry);
    loadBooks('maths', bookData.maths);

    // Set up search functionality
    document.getElementById('searchButton').addEventListener('click', searchBooks);
    document.getElementById('searchInput').addEventListener('keyup', function(event) {
        if (event.key === 'Enter') {
            searchBooks();
        }
    });

    // Set up AI chat
    document.getElementById('sendButton').addEventListener('click', sendMessage);
    document.getElementById('userInput').addEventListener('keyup', function(event) {
        if (event.key === 'Enter') {
            sendMessage();
        }
    });
});

// Function to load books into a subject tab
function loadBooks(subject, books) {
    const container = document.getElementById(subject + 'Books');
    container.innerHTML = '';

    books.forEach(book => {
        const bookCard = document.createElement('div');
        bookCard.className = 'col-md-6 col-lg-4';
        bookCard.innerHTML = `
            <div class="card book-card">
                <img src="${book.cover}" class="card-img-top" alt="${book.title}">
                <div class="card-body">
                    <h5 class="card-title">${book.title}</h5>
                    <p class="card-text">${book.description}</p>
                    <a href="${book.link}" target="_blank" class="btn btn-primary">View PDFs</a>
                </div>
            </div>
        `;
        container.appendChild(bookCard);
    });
}

// Search functionality
function searchBooks() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    
    // Search in all subjects
    ['physics', 'chemistry', 'maths'].forEach(subject => {
        const filteredBooks = bookData[subject].filter(book => 
            book.title.toLowerCase().includes(searchTerm) || 
            book.description.toLowerCase().includes(searchTerm)
        );
        loadBooks(subject, filteredBooks);
    });
}

// AI Chat functionality
async function sendMessage() {
    const userInput = document.getElementById('userInput');
    const message = userInput.value.trim();
    
    if (message === '') return;
    
    // Add user message to chat
    addMessage(message, 'user');
    userInput.value = '';
    
    // Show loading indicator
    const loadingId = addMessage('Thinking...', 'ai', true);
    
    try {
        // Simulate AI response (in a real app, you would call an API)
        const aiResponse = await getAIResponse(message);
        
        // Replace loading message with actual response
        updateMessage(loadingId, aiResponse, 'ai');
    } catch (error) {
        updateMessage(loadingId, "Sorry, I'm having trouble connecting. Please try again later.", 'ai');
    }
}

function addMessage(text, sender, isLoading = false) {
    const chatMessages = document.getElementById('chatMessages');
    const messageId = 'msg-' + Date.now();
    
    const messageDiv = document.createElement('div');
    messageDiv.id = messageId;
    messageDiv.className = `message ${sender}-message`;
    
    if (isLoading) {
        messageDiv.classList.add('loading-dots');
    } else {
        messageDiv.innerHTML = marked.parse(text);
    }
    
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
    
    return messageId;
}

function updateMessage(id, text, sender) {
    const messageDiv = document.getElementById(id);
    if (messageDiv) {
        messageDiv.classList.remove('loading-dots');
        messageDiv.innerHTML = marked.parse(text);
    }
}

// Simulated AI response function
async function getAIResponse(message) {
    // In a real implementation, you would call an AI API here
    // This is a simulation with some predefined responses
    
    const responses = {
        "hello": "Hello! How can I help you with your JEE preparation today?",
        "hi": "Hi there! What concepts are you struggling with?",
        "physics": "For physics, I recommend focusing on HC Verma concepts first. Which specific topic are you working on?",
        "chemistry": "Chemistry has three main parts for JEE: Physical, Organic, and Inorganic. Which one do you need help with?",
        "maths": "Mathematics requires regular practice. Are you having trouble with Calculus, Algebra, or Coordinate Geometry?",
        "default": "I'm here to help with your JEE preparation. Could you please be more specific about the concept or problem you're struggling with?"
    };
    
    // Simple keyword matching
    const lowerMessage = message.toLowerCase();
    let response = responses.default;
    
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
        response = responses.hello;
    } else if (lowerMessage.includes('physic')) {
        response = responses.physics;
    } else if (lowerMessage.includes('chem')) {
        response = responses.chemistry;
    } else if (lowerMessage.includes('math')) {
        response = responses.maths;
    }
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    return response;
}
document.addEventListener('DOMContentLoaded', () => {
    // Select all "Learn more" buttons
    const learnMoreButtons = document.querySelectorAll('.learn-more-btn');

    // Loop through each button and add a click event listener
    learnMoreButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Get the parent service container
            const serviceContainer = button.parentElement;

            // Get the service title
            const serviceTitle = serviceContainer.querySelector('h3').textContent;

            // Shows additional infor for the given service
            const serviceInfo = {
                "Wellness programs": "Our wellness programs include personalized plans and group sessions to help you achieve your health goals.",
                "Meditation": "Our meditation guides will help you find peace and calmness through various techniques and practices.",
                "Consultation": "We provide consultations to help you adopt lifestyle changes that promote better health and well-being.",
                "Disconnect to connect": "Take a break from technology and immerse yourself in nature to rejuvenate your mind and body.",
                "Educational Resources": "Access a variety of resources, including worksheets and guides to support your wellness journey.",
                "Support Groups": "Join our support groups to connect with others who share similar experiences and challenges."
            };

            // Show the additional information in an alert
            alert(serviceInfo[serviceTitle] || "More information coming soon!");
        });
    });
});
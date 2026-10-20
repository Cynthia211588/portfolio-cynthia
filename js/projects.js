/*
 * Each object below is one project. Empty optional fields are not displayed.
 * Add as many screenshot paths and technology tags as the project needs.
 */
window.portfolioProjects = [
    {
        title: "Badminton Smash Analysis and Feedback System",
        type: "Final Year Project",
        summary: "An accessible web-based computer vision system that analyses uploaded badminton smash videos and provides phase-specific posture feedback.",
        tags: ["Python", "FastAPI", "MediaPipe Pose", "OpenCV", "NumPy", "Pytest"],
        images: [
            "images/FYP/Fronted_Page.png",
            "images/FYP/Feedback.png",
            "images/FYP/Final_summary.png"
        ],
        overview: "Designed for everyday badminton players, this individual final-year project provides a no-cost way to review smash technique from an ordinary recorded video. It supports Standing Smash, Jumping Smash and Stick Smash, then presents phase-based visual and textual feedback to help users identify posture issues and areas for improvement.",
        contribution: [
            "Built and integrated the complete system as an individual project, covering the web interface, FastAPI backend and computer vision analysis pipeline.",
            "Built the MediaPipe Pose workflow, joint-angle calculations, smash-specific phase detection, reference-range comparison and feedback generation.",
            "Created the automated test suite, conducted functional and user acceptance testing, and prepared the technical report and poster presentation."
        ],
        keyFeatures: [
            "Accepts MP4 or MOV videos and supports Standing, Jumping and Stick Smash analysis.",
            "Uses MediaPipe Pose to extract 2D body landmarks and generates a skeletal-overlay analysis video.",
            "Detects movement phases and measures phase-specific joint angles and body positions.",
            "Compares measurements with project-specific reference ranges and produces colour-coded feedback, scores and a final summary."
        ],
        technicalChallenge: "Fast badminton movements do not contain explicit labels telling the computer where each phase begins or which frame represents a critical event. Motion blur, occlusion, camera conditions and a limited dataset also affect the consistency of 2D pose landmarks and measurements.",
        solution: "I used separate rule-based detectors for each smash type. The pipeline smooths and interprets landmark signals, identifies ordered movement events, divides the action into phases and evaluates only the relevant metrics at each critical event. I then compared detected event frames with manual annotations and retained clear scope limitations instead of presenting the measurements as universal biomechanical accuracy.",
        results: [
            "All 92 automated regression tests passed, covering pose processing, event detection, metrics, scoring, feedback, API responses and frontend behaviour.",
            "Across 11 selected evaluation videos, the system detected all 63 expected movement events with a mean absolute error of 3.20 to 4.50 frames, depending on smash type.",
            "Generated all 104 expected scored metric outputs in the evaluated videos.",
            "Five UAT participants completed all six tasks, with an overall usability questionnaire mean of 4.40 out of 5.",
            "Selected as one of the Top 20 Software Engineering final-year project posters. Results remain limited to the tested dataset, single-view 2D analysis and the mainly right-handed, right-facing recording scope."
        ],
        github: "",
        report: "",
        documentation: "",
        demo: ""
    },
    {
        title: "Hotel Booking Management System",
        type: "Web Application",
        summary: "A Laravel hotel booking platform with customer booking workflows and administrative management tools.",
        tags: ["Laravel", "PHP", "MySQL", "Blade", "Eloquent ORM"],
        images: [
            "images/HotelManagement/Homepage1.png",
            "images/HotelManagement/HomePage2.png",
            "images/HotelManagement/detail.png",
            "images/HotelManagement/Payment.png",
            "images/HotelManagement/History.png",
            "images/HotelManagement/BookingDetail.png",
            "images/HotelManagement/admindashboard.png",
            "images/HotelManagement/adminHotel.png",
            "images/HotelManagement/AdminViewhOTEL.png",
            "images/HotelManagement/AdminAddHotel.png",
            "images/HotelManagement/login.png"
        ],
        overview: "The Hotel Booking Management System is a four-member university project built with Laravel and MySQL. It supports the complete journey from browsing hotels and rooms to making, reviewing and managing bookings, alongside an administration panel for maintaining the system's records.",
        contribution: [
            "Set up the Laravel project and contributed to the core User, Hotel, Room and Booking models, migrations and database seeders.",
            "Developed the user-facing hotel detail, room selection, booking, payment and booking-history workflows.",
            "Implemented the administration panel's room-management CRUD interfaces and integrated them with the shared routing and layout structure.",
            "Contributed interface styling, integration fixes and booking-related refinements across the group project."
        ],
        keyFeatures: [
            "Hotel browsing with state filters, search and recently viewed hotels.",
            "Room selection with date-based availability, booking creation and payment-status tracking.",
            "User authentication, profile management, booking history and cancellation flows.",
            "Administrative CRUD, search and filtering for hotels, rooms, customers and bookings."
        ],
        technicalChallenge: "Preventing overbooking was more complex than checking a room's status because availability depends on overlapping date ranges, requested room quantity and bookings that are still pending or already confirmed.",
        solution: "I implemented server-side availability logic that detects overlapping stays using check-in and check-out comparisons, totals the quantities already reserved and compares the remaining rooms with the requested quantity. The booking flow also validates the dates, hotel-room relationship and guest capacity before calculating the stay total and creating a unique booking code.",
        results: [
            "Completed an integrated Laravel application with connected user and administrator workflows.",
            "Used relational models, validation, authorization and seeded data to support realistic booking scenarios."
        ],
        github: "",
        report: "",
        documentation: "",
        demo: ""
    },
    {
        title: "Nutrition Tracker",
        type: "AI Innovation Hackathon",
        summary: "An AI-assisted nutrition tracker that turns a meal photo into editable food data, nutrition estimates and personalised feedback, with dashboards for users and administrators.",
        tags: ["JavaScript", "Tailwind CSS", "Vite", "Supabase", "Google Gemini", "FlexToken AI", "USDA API", "Chart.js"],
        images: [
            "images/Nutrition Tracker/homepage.png",
            "images/Nutrition Tracker/UserDashboard.png",
            "images/Nutrition Tracker/OutputAnalysis.png",
            "images/Nutrition Tracker/adminDsahboard.png",
            "images/Nutrition Tracker/AdminViewDetail.png",
            "images/Nutrition Tracker/UploadPage.png",
            "images/Nutrition Tracker/history.png",
            "images/Nutrition Tracker/UserProfile.png"
        ],
        overview: "Nutrition Tracker was developed by a five-member team during the AI Innovation Hackathon. A user uploads a meal photo, reviews and corrects the food items detected by Google Gemini, and confirms the serving sizes. The application then uses USDA reference data and the FlexToken Qwen model to prepare nutrition values and dietary feedback. Meal records are stored in Supabase for history and trend dashboards, while administrators can review patient status and individual nutrition data.",
        contribution: [
            "Contributed to the multi-page frontend for both user and administrator workflows, including upload, confirmation, results, history and dashboard screens.",
            "Refined responsive layouts for navigation, forms, cards, tables and charts across desktop, tablet and mobile screen sizes.",
            "Carried out manual functional and responsive testing of the complete upload-to-analysis flow and fixed interface issues before the live presentation."
        ],
        keyFeatures: [
            "Meal-photo upload with Google Gemini food recognition and an editable confirmation step before the data is saved.",
            "USDA nutrition lookup, serving-size calculation and AI-assisted meal assessment.",
            "Supabase authentication, meal-image storage and persistent nutrition records.",
            "User profile, meal history, weekly and monthly charts, nutrient targets and trend insights.",
            "Administrator search, filtering and patient dashboards for reviewing nutrition and risk status."
        ],
        technicalChallenge: "The FlexToken model provided by the organiser accepted text but could not read an uploaded food image. The team needed to convert the photo into reliable structured input before it could generate a useful nutrition assessment.",
        solution: "The team used Google Gemini to identify food from the image and return a structured list. The user could correct the detected items and serving sizes before the application searched USDA reference data and passed the final text data to FlexToken Qwen 2.5. I focused on making this multi-step frontend flow clear, responsive and testable from upload through to the final result.",
        results: [
            "Successfully deployed a working prototype and provided QR-code access for judges to test during the live presentation.",
            "Completed the full user and administrator demonstration flow, including meal upload, nutrition analysis, dashboards and patient monitoring.",
            "Won Grand Champion among 10 teams from UTAR Sungai Long and Kampar campuses."
        ],
        github: "",
        report: "",
        documentation: "",
        demo: ""
    },
    {
        title: "Sawadika Restaurant Ordering App",
        type: "Mobile Application",
        summary: "A full-stack React Native restaurant application that connects customer ordering journeys with an administrator portal through shared data and supporting services.",
        tags: ["React Native", "TypeScript", "SQLite", "AsyncStorage", "React Navigation"],
        images: [
            "images/Restaurant/menu.png",
            "images/Restaurant/FrontPage.png",
            "images/Restaurant/Cart.png",
            "images/Restaurant/Checkout.png",
            "images/Restaurant/Payment.png",
            "images/Restaurant/TrackOrder.png",
            "images/Restaurant/OrderHistory.png",
            "images/Restaurant/OrderDetail.png",
            "images/Restaurant/AdminPortal.png",
            "images/Restaurant/AdminManageOrder.png",
            "images/Restaurant/AdminManageMenu.png",
            "images/Restaurant/AdminManageCustomization.png",
            "images/Restaurant/AdminSaleReport.png"
        ],
        overview: "Sawadika is a four-member full-stack mobile application developed for a Thai restaurant. The React Native customer experience covers account or guest ordering, menu customisation, cart, checkout, order history, tracking and reservations, while the administrator portal supports menu maintenance, active-order management and daily sales reporting. SQLite provides the main on-device data layer, supported by local services for selected real-time and JSON-based features.",
        contribution: [
            "Led the four-member team by planning the work, assigning responsibilities and coordinating integration across the application.",
            "Designed and implemented the SQLite data layer for users, menu items, customisation options and orders, including database initialisation and CRUD operations.",
            "Developed customer-facing menu and frontend flows, including category-based menu presentation and the connection between stored menu data and the interface.",
            "Supported navigation integration and functional testing across the customer ordering journey; the administrator interfaces were handled by other team members."
        ],
        keyFeatures: [
            "Account and guest ordering flows for dine-in and takeaway customers.",
            "Categorised Thai food menu with item customisation, remarks and quantity controls.",
            "Cart, checkout, payment selection, order history and order-status tracking.",
            "SQLite-backed user, menu and order data with AsyncStorage for selected local application state.",
            "Administrator tools for menu maintenance, order-status updates and daily sales reporting.",
            "Supporting service APIs for selected reservation, promotion and review workflows."
        ],
        technicalChallenge: "The application needed to keep structured menu, user and order data consistent across many mobile screens while remaining available locally after navigation or an application restart.",
        solution: "I structured the SQLite access behind reusable asynchronous functions for schema creation and CRUD operations, then connected the customer menu screens to that shared data layer. The wider group solution used AsyncStorage for smaller pieces of local state and supporting Express, Socket.IO and JSON services for selected reservation, promotion and review features.",
        results: [
            "Completed an integrated customer-and-admin mobile prototype covering the ordering journey and restaurant administration workflows.",
            "Demonstrated local data persistence, menu and order CRUD operations, input validation and multi-screen navigation in the submitted application."
        ],
        github: "",
        report: "",
        documentation: "",
        demo: ""
    },
    {
        title: "X's Adventure",
        type: "2D Puzzle Platformer",
        summary: "A four-level Godot puzzle platformer combining physics-based interaction, environmental hazards and time-limited challenges.",
        tags: ["Godot 4", "GDScript", "2D Physics", "Git", "GitHub"],
        images: [
            "images/Godot/StartMenu.png",
            "images/Godot/Level3.png",
            "images/Godot/Level1.png",
            "images/Godot/Level2.png",
            "images/Godot/Level4.png",
            "images/Godot/Setting.png"
        ],
        overview: "X's Adventure is a four-level 2D puzzle-platformer developed in Godot for Windows. Players explore connected levels, collect resources and solve time-limited environmental puzzles while managing lives and avoiding hazards.",
        contribution: [
            "Led a four-member team by coordinating task allocation, integration and project communication.",
            "Built the shared player controller, including movement, jumping, climbing, animation states, Camera2D tracking, box-pushing physics and respawn behaviour.",
            "Designed and implemented Level 3, including its puzzle flow, balance beam, cargo lift, pressure plates, gates, rope, swamp hazards and enemy respawning.",
            "Integrated and tested Level 3 audio, visual feedback and gameplay systems, then refined collision and movement issues before submission."
        ],
        keyFeatures: [
            "Four connected puzzle-platforming levels with shared lives, resources and countdown systems.",
            "Physics-based box pushing, pressure plates, levers, gates, climbing and a tilting balance beam.",
            "Swamp hazards with life loss, player respawning and creatures that spawn at random intervals.",
            "A diamond-powered Time Freezer that temporarily stops a rotating hazard while the main timer continues."
        ],
        technicalChallenge: "The original inclined wooden-plank puzzle in Level 3 was unreliable: the player and physics-based box could become stuck or fail to travel up the slope consistently.",
        solution: "I redesigned the obstacle as a horizontal AnimatableBody2D cargo lift. It detects when both the player and box are present, then moves them upward with controlled acceleration and deceleration, creating a more predictable puzzle while preserving the intended teamwork between movement and physics.",
        results: [
            "Completed and integrated a playable four-level Windows desktop game.",
            "Delivered a stable Level 3 flow with a 180-second timer, working puzzle sequence, hazards, resource tools and scene transition.",
            "Improved playability through collision, floor-snap, sprite layering, climbing and respawn testing."
        ],
        github: "",
        report: "",
        documentation: "",
        demo: ""
    }
];

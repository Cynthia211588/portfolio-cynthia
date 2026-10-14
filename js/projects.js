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
        title: "Hotel Management System and AWS Cloud Deployment",
        type: "Web Application",
        summary: "A database-driven hotel management application developed with Laravel and deployed across multiple AWS services.",
        tags: ["Laravel", "PHP", "MySQL", "AWS EC2", "RDS", "S3", "Elastic Beanstalk"],
        images: ["images/portfolio/portfolio-1.jpg"],
        overview: "This project combines a Laravel hotel management application with a cloud deployment architecture on AWS.",
        contribution: [
            "Developed the database-driven web application using Laravel, PHP and MySQL.",
            "Configured and deployed the application using AWS cloud services."
        ],
        keyFeatures: [
            "Hotel management workflows backed by a relational MySQL database.",
            "Cloud deployment using EC2, RDS, S3 and Elastic Beanstalk.",
            "VPC, subnet and security group configuration."
        ],
        technicalChallenge: "",
        solution: "",
        results: [
            "Completed the application deployment using the documented AWS architecture."
        ],
        github: "",
        report: "",
        documentation: "",
        demo: ""
    },
    {
        title: "Nutrition Tracker",
        type: "AI Innovation Hackathon",
        summary: "An AI-assisted meal tracking platform that turns food photos into nutrition insights for users and patient-monitoring data for administrators.",
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
        overview: "Nutrition Tracker was developed by a five-member team during the AI Innovation Hackathon. The prototype allows users to upload a meal photo, review detected food items and receive estimated nutrition information and AI-assisted dietary insights. It also provides administrators with patient status monitoring and individual nutrition dashboards.",
        contribution: [
            "Developed and refined the frontend interfaces for the user and administrator workflows.",
            "Implemented responsive behaviour so the application remained usable across desktop, tablet and mobile screen sizes.",
            "Conducted functional and responsive testing and verified the complete upload-to-analysis workflow before presentation."
        ],
        keyFeatures: [
            "Meal-image upload followed by AI-assisted food identification and editable portion confirmation.",
            "Estimated calories, macronutrients, micronutrients and meal-level dietary feedback.",
            "User dashboard with daily and weekly nutrition summaries, charts and AI-generated recommendations.",
            "Meal history, user health profile and detailed nutrition-analysis views.",
            "Administrator dashboard for monitoring patient risk status and reviewing individual patient trends."
        ],
        technicalChallenge: "The organiser-provided FlexToken model accepted text but could not interpret uploaded food images directly. The team therefore needed a reliable bridge between the image-upload experience and the text-based nutrition assessment pipeline.",
        solution: "The team integrated Google Gemini as the multimodal vision layer to interpret the uploaded meal image and return structured food information. The structured output could then be combined with USDA nutrition data and passed as text into the organiser-provided FlexToken Qwen 2.5 model for assessment and recommendations. On the frontend, I implemented and tested the multi-step upload, confirmation and result experience across responsive layouts.",
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
        title: "Restaurant Ordering Mobile Application",
        type: "Mobile Application",
        summary: "A cross-platform mobile application for browsing restaurant menu items and placing orders.",
        tags: ["React Native", "JavaScript", "Mobile Development"],
        images: ["images/portfolio/portfolio-1.jpg"],
        overview: "The application provides a mobile ordering flow that allows users to browse menu items and place restaurant orders.",
        contribution: [
            "Developed the cross-platform application using React Native and JavaScript.",
            "Implemented and tested mobile interfaces and user interactions."
        ],
        keyFeatures: [
            "Restaurant menu browsing.",
            "Mobile order placement workflow.",
            "Cross-platform user interface and interactions."
        ],
        technicalChallenge: "",
        solution: "",
        results: [],
        github: "",
        report: "",
        documentation: "",
        demo: ""
    },
    {
        title: "X's Adventure",
        type: "2D Puzzle Platformer",
        summary: "A Godot puzzle platformer featuring movement mechanics, interactive puzzles and environmental obstacles.",
        tags: ["Godot Engine", "GDScript", "Git", "GitHub", "Game Development"],
        images: ["images/portfolio/portfolio-1.jpg"],
        overview: "X's Adventure is a 2D puzzle platformer built around player movement, object interaction and environmental challenges.",
        contribution: [
            "Developed movement, jumping, hazard respawning, Camera2D tracking and box-pushing physics.",
            "Designed and implemented a puzzle-based level with interactive mechanics and obstacles."
        ],
        keyFeatures: [
            "Player movement, jumping and hazard respawning.",
            "Camera2D tracking and box-pushing physics.",
            "Lever interactions, balance-beam mechanics and environmental obstacles."
        ],
        technicalChallenge: "",
        solution: "",
        results: [],
        github: "",
        report: "",
        documentation: "",
        demo: ""
    }
];

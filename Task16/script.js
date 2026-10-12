const students = [
    {
        name: "Rahul Sharma",
        marks: 85,
        class: "10th",
        address: "Noida, Uttar Pradesh"
    },
    {
        name: "Priya Singh",
        marks: 92,
        class: "10th",
        address: "Delhi"
    },
    {
        name: "Amit Kumar",
        marks: 78,
        class: "9th",
        address: "Ghaziabad, Uttar Pradesh"
    },
    {
        name: "Sneha Verma",
        marks: 95,
        class: "10th",
        address: "Lucknow, Uttar Pradesh"
    },
    {
        name: "Rohit Gupta",
        marks: 72,
        class: "9th",
        address: "Agra, Uttar Pradesh"
    },
    {
        name: "Ananya Sharma",
        marks: 88,
        class: "10th",
        address: "Jaipur, Rajasthan"
    },
    {
        name: "Arjun Mehta",
        marks: 81,
        class: "9th",
        address: "Delhi"
    },
    {
        name: "Neha Kapoor",
        marks: 94,
        class: "10th",
        address: "Chandigarh"
    },
    {
        name: "Vikas Yadav",
        marks: 69,
        class: "8th",
        address: "Gurugram, Haryana"
    },
    {
        name: "Kavya Mishra",
        marks: 91,
        class: "10th",
        address: "Kanpur, Uttar Pradesh"
    },
    {
        name: "Aditya Verma",
        marks: 76,
        class: "9th",
        address: "Meerut, Uttar Pradesh"
    },
    {
        name: "Pooja Agarwal",
        marks: 89,
        class: "10th",
        address: "Delhi"
    },
    {
        name: "Karan Malhotra",
        marks: 73,
        class: "8th",
        address: "Amritsar, Punjab"
    },
    {
        name: "Riya Jain",
        marks: 97,
        class: "10th",
        address: "Jaipur, Rajasthan"
    },
    {
        name: "Manish Tiwari",
        marks: 82,
        class: "9th",
        address: "Varanasi, Uttar Pradesh"
    },
    {
        name: "Simran Kaur",
        marks: 90,
        class: "10th",
        address: "Ludhiana, Punjab"
    },
    {
        name: "Nitin Sharma",
        marks: 67,
        class: "8th",
        address: "Noida, Uttar Pradesh"
    },
    {
        name: "Ishita Gupta",
        marks: 93,
        class: "10th",
        address: "Faridabad, Haryana"
    },
    {
        name: "Varun Singh",
        marks: 79,
        class: "9th",
        address: "Patna, Bihar"
    },
    {
        name: "Mehak Saini",
        marks: 86,
        class: "9th",
        address: "Rohtak, Haryana"
    },
    {
        name: "Akash Pandey",
        marks: 74,
        class: "8th",
        address: "Prayagraj, Uttar Pradesh"
    },
    {
        name: "Shreya Gupta",
        marks: 96,
        class: "10th",
        address: "Delhi"
    },
    {
        name: "Mohit Kumar",
        marks: 71,
        class: "9th",
        address: "Gurugram, Haryana"
    },
    {
        name: "Ayesha Khan",
        marks: 88,
        class: "10th",
        address: "New Delhi"
    },
    {
        name: "Sahil Verma",
        marks: 83,
        class: "9th",
        address: "Ghaziabad, Uttar Pradesh"
    },
    {
        name: "Nisha Rawat",
        marks: 92,
        class: "10th",
        address: "Dehradun, Uttarakhand"
    },
    {
        name: "Deepak Joshi",
        marks: 68,
        class: "8th",
        address: "Haridwar, Uttarakhand"
    },
    {
        name: "Tanvi Sharma",
        marks: 94,
        class: "10th",
        address: "Noida, Uttar Pradesh"
    },
    {
        name: "Ravi Kumar",
        marks: 77,
        class: "9th",
        address: "Delhi"
    },
    {
        name: "Muskan Ali",
        marks: 85,
        class: "9th",
        address: "Aligarh, Uttar Pradesh"
    },
    {
        name: "Harsh Raj",
        marks: 80,
        class: "8th",
        address: "Patna, Bihar"
    },
    {
        name: "Divya Singh",
        marks: 91,
        class: "10th",
        address: "Lucknow, Uttar Pradesh"
    },
    {
        name: "Abhishek Mishra",
        marks: 75,
        class: "9th",
        address: "Kanpur, Uttar Pradesh"
    },
    {
        name: "Komal Yadav",
        marks: 89,
        class: "10th",
        address: "Gurugram, Haryana"
    },
    {
        name: "Saurabh Gupta",
        marks: 70,
        class: "8th",
        address: "Meerut, Uttar Pradesh"
    },
    {
        name: "Pallavi Sharma",
        marks: 98,
        class: "10th",
        address: "Delhi"
    },
    {
        name: "Yash Thakur",
        marks: 84,
        class: "9th",
        address: "Shimla, Himachal Pradesh"
    },
    {
        name: "Mansi Verma",
        marks: 87,
        class: "10th",
        address: "Agra, Uttar Pradesh"
    },
    {
        name: "Rakesh Singh",
        marks: 66,
        class: "8th",
        address: "Varanasi, Uttar Pradesh"
    },
    {
        name: "Sakshi Jain",
        marks: 93,
        class: "10th",
        address: "Jaipur, Rajasthan"
    },
    {
        name: "Aman Gupta",
        marks: 79,
        class: "9th",
        address: "Noida, Uttar Pradesh"
    },
    {
        name: "Preeti Kumari",
        marks: 90,
        class: "10th",
        address: "Patna, Bihar"
    },
    {
        name: "Rajiv Sharma",
        marks: 73,
        class: "8th",
        address: "Chandigarh"
    },
    {
        name: "Nandini Singh",
        marks: 95,
        class: "10th",
        address: "Lucknow, Uttar Pradesh"
    },
    {
        name: "Varsha Gupta",
        marks: 82,
        class: "9th",
        address: "Faridabad, Haryana"
    },
    {
        name: "Tarun Kumar",
        marks: 68,
        class: "8th",
        address: "Delhi"
    },
    {
        name: "Ritika Sharma",
        marks: 96,
        class: "10th",
        address: "Dehradun, Uttarakhand"
    },
    {
        name: "Gaurav Mehta",
        marks: 81,
        class: "9th",
        address: "Gurugram, Haryana"
    },
    {
        name: "Aditi Kapoor",
        marks: 89,
        class: "10th",
        address: "Chandigarh"
    },
    {
        name: "Rohan Saini",
        marks: 76,
        class: "9th",
        address: "Rohtak, Haryana"
    },
    {
        name: "Shivani Gupta",
        marks: 92,
        class: "10th",
        address: "Delhi"
    },
    {
        name: "Vivek Pandey",
        marks: 74,
        class: "8th",
        address: "Prayagraj, Uttar Pradesh"
    },
    {
        name: "Kriti Sharma",
        marks: 97,
        class: "10th",
        address: "Noida, Uttar Pradesh"
    },
    {
        name: "Sanjay Verma",
        marks: 83,
        class: "9th",
        address: "Ghaziabad, Uttar Pradesh"
    },
    {
        name: "Poonam Singh",
        marks: 88,
        class: "10th",
        address: "Agra, Uttar Pradesh"
    },
    {
        name: "Rajat Kumar",
        marks: 72,
        class: "8th",
        address: "Patna, Bihar"
    },
    {
        name: "Sonia Agarwal",
        marks: 94,
        class: "10th",
        address: "Delhi"
    },
    {
        name: "Naveen Yadav",
        marks: 78,
        class: "9th",
        address: "Gurugram, Haryana"
    },
    {
        name: "Isha Malhotra",
        marks: 91,
        class: "10th",
        address: "Amritsar, Punjab"
    },
    {
        name: "Dev Sharma",
        marks: 85,
        class: "9th",
        address: "Jaipur, Rajasthan"
    },
    {
        name: "Radhika Mishra",
        marks: 96,
        class: "10th",
        address: "Kanpur, Uttar Pradesh"
    },
    {
        name: "Vishal Gupta",
        marks: 69,
        class: "8th",
        address: "Meerut, Uttar Pradesh"
    },
    {
        name: "Shalini Verma",
        marks: 87,
        class: "9th",
        address: "Lucknow, Uttar Pradesh"
    },
    {
        name: "Ankit Singh",
        marks: 80,
        class: "9th",
        address: "Varanasi, Uttar Pradesh"
    },
    {
        name: "Garima Sharma",
        marks: 93,
        class: "10th",
        address: "Noida, Uttar Pradesh"
    },
    {
        name: "Lokesh Kumar",
        marks: 71,
        class: "8th",
        address: "Delhi"
    },
    {
        name: "Payal Gupta",
        marks: 89,
        class: "10th",
        address: "Faridabad, Haryana"
    },
    {
        name: "Rishabh Jain",
        marks: 84,
        class: "9th",
        address: "Jaipur, Rajasthan"
    },
    {
        name: "Monika Yadav",
        marks: 90,
        class: "10th",
        address: "Rohtak, Haryana"
    },
    {
        name: "Ashish Tiwari",
        marks: 77,
        class: "9th",
        address: "Prayagraj, Uttar Pradesh"
    },
    {
        name: "Sakshi Verma",
        marks: 95,
        class: "10th",
        address: "Dehradun, Uttarakhand"
    },
    {
        name: "Pankaj Sharma",
        marks: 73,
        class: "8th",
        address: "Delhi"
    },
    {
        name: "Bhavna Singh",
        marks: 92,
        class: "10th",
        address: "Lucknow, Uttar Pradesh"
    },
    {
        name: "Kunal Mehta",
        marks: 81,
        class: "9th",
        address: "Chandigarh"
    },
    {
        name: "Jyoti Kumari",
        marks: 88,
        class: "10th",
        address: "Patna, Bihar"
    },
    {
        name: "Nikhil Sharma",
        marks: 86,
        class: "9th",
        address: "Noida, Uttar Pradesh"
    },
    {
        name: "Renu Gupta",
        marks: 94,
        class: "10th",
        address: "Ghaziabad, Uttar Pradesh"
    },
    {
        name: "Sameer Khan",
        marks: 79,
        class: "9th",
        address: "Aligarh, Uttar Pradesh"
    },
    {
        name: "Priti Sharma",
        marks: 91,
        class: "10th",
        address: "Delhi"
    },
    {
        name: "Yogesh Verma",
        marks: 67,
        class: "8th",
        address: "Meerut, Uttar Pradesh"
    },
    {
        name: "Neelam Singh",
        marks: 96,
        class: "10th",
        address: "Varanasi, Uttar Pradesh"
    },
    {
        name: "Manav Gupta",
        marks: 83,
        class: "9th",
        address: "Gurugram, Haryana"
    },
    {
        name: "Kiran Sharma",
        marks: 90,
        class: "10th",
        address: "Jaipur, Rajasthan"
    },
    {
        name: "Suresh Kumar",
        marks: 75,
        class: "8th",
        address: "Agra, Uttar Pradesh"
    },
    {
        name: "Naina Kapoor",
        marks: 98,
        class: "10th",
        address: "Chandigarh"
    },
    {
        name: "Arnav Singh",
        marks: 82,
        class: "9th",
        address: "Noida, Uttar Pradesh"
    },
    {
        name: "Shweta Gupta",
        marks: 87,
        class: "10th",
        address: "Delhi"
    },
    {
        name: "Rajat Sharma",
        marks: 70,
        class: "8th",
        address: "Ghaziabad, Uttar Pradesh"
    },
    {
        name: "Kirti Yadav",
        marks: 93,
        class: "10th",
        address: "Gurugram, Haryana"
    },
    {
        name: "Harshit Verma",
        marks: 78,
        class: "9th",
        address: "Lucknow, Uttar Pradesh"
    },
    {
        name: "Anjali Mishra",
        marks: 95,
        class: "10th",
        address: "Kanpur, Uttar Pradesh"
    },
    {
        name: "Deepak Singh",
        marks: 69,
        class: "8th",
        address: "Patna, Bihar"
    },
    {
        name: "Pihu Sharma",
        marks: 92,
        class: "10th",
        address: "Delhi"
    },
    {
        name: "Mayank Gupta",
        marks: 85,
        class: "9th",
        address: "Faridabad, Haryana"
    },
    {
        name: "Riya Verma",
        marks: 89,
        class: "10th",
        address: "Noida, Uttar Pradesh"
    },
    {
        name: "Siddharth Kumar",
        marks: 76,
        class: "9th",
        address: "Varanasi, Uttar Pradesh"
    },
    {
        name: "Tanya Singh",
        marks: 97,
        class: "10th",
        address: "Jaipur, Rajasthan"
    },
    {
        name: "Abhinav Sharma",
        marks: 80,
        class: "9th",
        address: "Dehradun, Uttarakhand"
    },
    {
        name: "Aarushi Gupta",
        marks: 94,
        class: "10th",
        address: "Delhi"
    },
    {
        name: "Pranav Verma",
        marks: 72,
        class: "8th",
        address: "Meerut, Uttar Pradesh"
    },
    {
        name: "Ishaan Singh",
        marks: 88,
        class: "9th",
        address: "Chandigarh"
    },
    {
        name: "Lavanya Sharma",
        marks: 96,
        class: "10th",
        address: "Lucknow, Uttar Pradesh"
    },
    {
        name: "Ayush Kumar",
        marks: 79,
        class: "9th",
        address: "Noida, Uttar Pradesh"
    },
    {
        name: "Roshni Gupta",
        marks: 91,
        class: "10th",
        address: "Gurugram, Haryana"
    },
    {
        name: "Varun Sharma",
        marks: 74,
        class: "8th",
        address: "Agra, Uttar Pradesh"
    },
    {
        name: "Diya Singh",
        marks: 93,
        class: "10th",
        address: "Delhi"
    },
    {
        name: "Samar Verma",
        marks: 86,
        class: "9th",
        address: "Ghaziabad, Uttar Pradesh"
    },
    {
        name: "Aarav Gupta",
        marks: 90,
        class: "10th",
        address: "Jaipur, Rajasthan"
    }
];
const studentsContainer = document.querySelector(".studentsContainer"); 
const searchInput = document.querySelector(".search-input"); 
const searchForm = document.querySelector(".search-form"); 
// Display students
function displayStudents(studentList) {
    studentsContainer.innerHTML = "";

    const grid = document.createElement("div");
    grid.className = "cards";

    if (studentList.length === 0) {
        grid.innerHTML = "<p>No students found.</p>";
    }

    studentList.forEach(function (student) {
        const card = document.createElement("div");
        card.className = "student-card";

        card.innerHTML = `
            <h3>${student.name}</h3>
            <p>Marks: ${student.marks}</p>
            <p>Class: ${student.class}</p>
            <p>Address: ${student.address}</p>
        `;

        grid.appendChild(card);
    });

    studentsContainer.appendChild(grid);
}

// Search students
function searchStudents() {
    const searchValue = searchInput.value.toLowerCase().trim();

    // Empty input -> show everyone
    if (searchValue === "") {
        displayStudents(students);
        return;
    }

    const studentList = students.filter(function (student) {
        const name = student.name.toLowerCase();

        return name.startsWith(searchValue) ||
            name.split(" ").some(function (word) {
                return word.startsWith(searchValue);
            });
    });

    displayStudents(studentList);
}

// Search button / Enter key
searchForm.addEventListener("submit", function (event) {
    event.preventDefault();
    searchStudents();
});

// Initial render
displayStudents(students);

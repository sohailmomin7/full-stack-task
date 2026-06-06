let jobs = [
    {
        id: 1,
        company: "Mobile First Corp",
        title: "React Native Developer",
        location: "Remote",
        type: "Full-time",
        salary: "$130,000-$175,000",
        description: "Build cross-platform mobile applications...",
        status: "not applied"  // This will change to "interview" or "rejected"
    },
    {
        id: 2,
        company: "Ardi Sols",
        title: "Frontend Developer",
        location: "Remote",
        type: "Flexible",
        salary: "$112,000-$145,000",
        description: "Build cross-platform mobile applications...",
        status: "not applied"  // This will change to "interview" or "rejected"
    },
    {
        id: 3,
        company: "Coldtech Solutions",
        title: "Web-App Developer",
        location: "Remote",
        type: "Full-time",
        salary: "$100,000-$190,000",
        description: "Build cross-platform mobile applications...",
        status: "not applied"  // This will change to "interview" or "rejected"
    },
    {
        id: 4,
        company: "RainScope Solutions",
        title: "Full Stack Developer",
        location: "Remote",
        type: "Full-time",
        salary: "$150,000-$175,000",
        description: "Build cross-platform mobile applications...",
        status: "not applied"  // This will change to "interview" or "rejected"
    },
    {
        id: 5,
        company: "InfyMe Tech",
        title: "Tester",
        location: "Remote",
        type: "Part-time",
        salary: "$70,000-$175,000",
        description: "Build cross-platform mobile applications...",
        status: "not applied"  // This will change to "interview" or "rejected"
    },
    {
        id: 6,
        company: "Tonect Com",
        title: "Vu Developer",
        location: "Remote",
        type: "Full-time",
        salary: "$190,000-$290,000",
        description: "Build cross-platform mobile applications...",
        status: "not applied"  // This will change to "interview" or "rejected"
    },
    {
        id: 7,
        company: "Slovia Technologies",
        title: "Backend Developer",
        location: "Remote",
        type: "Flexible",
        salary: "$100,000-$115,000",
        description: "Build cross-platform mobile applications...",
        status: "not applied"  // This will change to "interview" or "rejected"
    },
    {
        id: 8,
        company: "Gen Ai Spark",
        title: "Next Native Developer",
        location: "WFH",
        type: "Full-time",
        salary: "$125,000-$160,000",
        description: "Build cross-platform mobile applications...",
        status: "not applied"  // This will change to "interview" or "rejected"
    },
];

let totalJobs = document.getElementById("total-jobs")
let interviewed = document.getElementById("interviewed")
let rejected = document.getElementById("rejected")

function countJobswithStats(status) {
    let count = 0
    jobs.forEach(job => {
        if (job.status === status) {
            count++
        }
    });
    return count

}
function updateCounts() {
    let interviewCount = countJobswithStats("interview")
    let rejectCount = countJobswithStats("rejected")
    totalJobs.innerHTML = jobs.length
    interviewed.innerHTML = interviewCount
    rejected.innerHTML = rejectCount
}
updateCounts()

function interviewClickHandler(jobId) {
    let job = jobs.find(j => j.id === jobId)
    job.status = "interview"
    updateCounts()
    let appliedStatus = document.getElementById("status-" + jobId)
    appliedStatus.innerHTML = "INTERVIEWED"
}
document.getElementById("interview-btn-1").addEventListener("click", function () {
    interviewClickHandler(1)
})
document.getElementById("interview-btn-2").addEventListener("click", function () {
    interviewClickHandler(2)
})
document.getElementById("interview-btn-3").addEventListener("click", function () {
    interviewClickHandler(3)
})
document.getElementById("interview-btn-4").addEventListener("click", function () {
    interviewClickHandler(4)
})
document.getElementById("interview-btn-5").addEventListener("click", function () {
    interviewClickHandler(5)
})
document.getElementById("interview-btn-6").addEventListener("click", function () {
    interviewClickHandler(6)
})
document.getElementById("interview-btn-7").addEventListener("click", function () {
    interviewClickHandler(7)
})
document.getElementById("interview-btn-8").addEventListener("click", function () {
    interviewClickHandler(8)
})
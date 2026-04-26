// Exam Timetable Database - PROVISIONAL ONLY FOR 2025/2026 FIRST SEMESTER
const examTimetables = {
    "2025/2026": {
        "1": {
            "provisional": [
                {
                    date: "2026-05-09",
                    time: "7:30AM",
                    courseCode: "DCIT301",
                    courseName: "OPERATING SYSTEMS",
                    mode: "ONLINE ON-SITE"
                },
                {
                    date: "2026-05-10",
                    time: "4:30PM",
                    courseCode: "DCIT321",
                    courseName: "SOFTWARE EVOLUTION",
                    mode: "ONLINE ON-SITE"
                },
                {
                    date: "2026-05-16",
                    time: "4:30PM",
                    courseCode: "DCIT313",
                    courseName: "INTRO TO ARTIFICIAL INTELLIGENCE",
                    mode: "ONLINE ON-SITE"
                },
                {
                    date: "2026-05-23",
                    time: "3:00PM",
                    courseCode: "DCIT317",
                    courseName: "IT PROJECT MANAGEMENT",
                    mode: "ONLINE ON-SITE"
                },
                {
                    date: "2026-05-24",
                    time: "10:30AM",
                    courseCode: "DCIT307",
                    courseName: "MINI-PROJECT",
                    mode: "ONLINE ON-SITE"
                },
                {
                    date: "2026-05-30",
                    time: "10:30AM",
                    courseCode: "DCIT303",
                    courseName: "COMPUTER NETWORKS",
                    mode: "ONLINE ON-SITE"
                },
                {
                    date: "2026-05-31",
                    time: "7:30AM",
                    courseCode: "DCIT323",
                    courseName: "MULTIMEDIA AND WEB DESIGN",
                    mode: "ONLINE ON-SITE"
                }
            ],
            "final": []
        },
        "2": {
            "provisional": [],
            "final": []
        }
    }
};

// Function to get timetable for a course
function getCourseTimetable(courseCode, academicYear, semester) {
    if (!examTimetables[academicYear] || !examTimetables[academicYear][semester]) {
        return null;
    }

    const timetableData = examTimetables[academicYear][semester];

    // Check provisional first
    const provisionalEntry = timetableData.provisional.find(entry => entry.courseCode === courseCode);
    if (provisionalEntry) {
        return {
            ...provisionalEntry,
            type: 'provisional'
        };
    }

    // Check final
    const finalEntry = timetableData.final.find(entry => entry.courseCode === courseCode);
    if (finalEntry) {
        return {
            ...finalEntry,
            type: 'final'
        };
    }

    return null;
}

// Function to get available academic years and semesters
function getAvailableTimetables() {
    const available = [];

    Object.keys(examTimetables).forEach(year => {
        Object.keys(examTimetables[year]).forEach(semester => {
            const provisional = examTimetables[year][semester].provisional.length > 0;
            const final = examTimetables[year][semester].final.length > 0;

            if (provisional || final) {
                available.push({
                    year,
                    semester,
                    hasProvisional: provisional,
                    hasFinal: final
                });
            }
        });
    });

    return available;
}
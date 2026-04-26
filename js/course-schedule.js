// Course Schedule Database - with online meeting links
const courseScheduleData = {
    "100": {
        "1": [
            { code: "DCIT101", name: "INTRODUCTION TO COMPUTER SCIENCE", link: "https://meet.google.com/placeholder101" },
            { code: "DCIT103", name: "OFFICE PRODUCTIVITY TOOLS", link: "https://meet.google.com/placeholder103" },
            { code: "DCIT105", name: "MATHEMATICS FOR IT PROFESSIONALS", link: "https://meet.google.com/placeholder105" },
            { code: "ECON101", name: "INTRODUCTION TO ECONOMICS I", link: "https://meet.google.com/placeholder-econ101" },
            { code: "STAT111", name: "INTRODUCTION TO STATISTICS AND PROBABILITY I", link: "https://meet.google.com/placeholder-stat111" },
            { code: "UGRC150", name: "CRITICAL THINKING AND PRACTICAL REASONING", link: "https://meet.google.com/placeholder-ugrc150" }
        ],
        "2": [
            { code: "DCIT102", name: "COMPUTER HARDWARE FUNDAMENTALS AND CIRCUITS", link: "https://meet.google.com/placeholder102" },
            { code: "DCIT104", name: "PROGRAMMING FUNDAMENTALS", link: "https://meet.google.com/placeholder104" },
            { code: "ECON102", name: "INTRODUCTION TO ECONOMICS II", link: "https://meet.google.com/placeholder-econ102" },
            { code: "MATH122", name: "CALCULUS I", link: "https://meet.google.com/placeholder-math122" },
            { code: "STAT112", name: "INTRODUCTION TO STATISTICS AND PROBABILITY II", link: "https://meet.google.com/placeholder-stat112" },
            { code: "UGBS104", name: "PRINCIPLES OF MANAGEMENT", link: "https://meet.google.com/placeholder-ugbs104" },
            { code: "UGRC110", name: "ACADEMIC WRITING I", link: "https://meet.google.com/placeholder-ugrc110" }
        ]
    },
    "200": {
        "1": [
            { code: "DCIT201", name: "PROGRAMMING I", link: "https://meet.google.com/placeholder201" },
            { code: "DCIT203", name: "DIGITAL AND LOGIC SYSTEMS DESIGN", link: "https://meet.google.com/placeholder203" },
            { code: "DCIT205", name: "DATABASE FUNDAMENTALS", link: "https://meet.google.com/placeholder205" },
            { code: "DCIT207", name: "COMPUTER ORGANIZATION & ARCHITECTURE", link: "https://meet.google.com/placeholder207" },
            { code: "DCIT209", name: "E-BUSINESS ARCHITECTURES", link: "https://meet.google.com/placeholder209" },
            { code: "UGRC210", name: "ACADEMIC WRITING II", link: "https://meet.google.com/placeholder-ugrc210" }
        ],
        "2": [
            { code: "DCIT200", name: "INTERNSHIP", link: "https://meet.google.com/placeholder200" },
            { code: "DCIT204", name: "DATA STRUCTURES & ALGORITHM I", link: "https://meet.google.com/placeholder204" },
            { code: "DCIT208", name: "SOFTWARE ENGINEERING", link: "https://meet.google.com/placeholder208" },
            { code: "DCIT214", name: "INFORMATION MODELING AND SPECIFICATION", link: "https://meet.google.com/placeholder214" },
            { code: "DCIT216", name: "HUMAN-COMPUTER INTERACTION", link: "https://meet.google.com/placeholder216" },
            { code: "UGRC229", name: "INTRO. TO AFRICAN STUD: CULTURE & DEVELOPMENT", link: "https://meet.google.com/placeholder-ugrc229" }
        ]
    },
    "300": {
        "1": [
            { code: "DCIT301", name: "OPERATING SYSTEMS", link: "https://meet.google.com/placeholder301" },
            { code: "DCIT303", name: "COMPUTER NETWORKS", link: "https://meet.google.com/placeholder303" },
            { code: "DCIT307", name: "MINI-PROJECT", link: "https://meet.google.com/placeholder307" },
            { code: "DCIT313", name: "INTRODUCTION TO ARTIFICIAL INTELLIGENCE", link: "https://meet.google.com/placeholder313" },
            { code: "DCIT317", name: "IT PROJECT MANAGEMENT", link: "https://meet.google.com/placeholder317" },
            { code: "DCIT321", name: "SOFTWARE EVOLUTION", link: "https://meet.google.com/placeholder321" },
            { code: "DCIT323", name: "MULTIMEDIA AND WEB DESIGN", link: "https://meet.google.com/placeholder323" }
        ],
        "2": [
            { code: "DCIT300", name: "ELECTIVE COURSE", link: "https://meet.google.com/placeholder300" }
        ]
    },
    "400": {
        "1": [
            { code: "DCIT401", name: "FINAL YEAR PROJECT I", link: "https://meet.google.com/placeholder401" },
            { code: "DCIT403", name: "CYBERSECURITY", link: "https://meet.google.com/placeholder403" },
            { code: "DCIT405", name: "ADVANCED NETWORKS", link: "https://meet.google.com/placeholder405" }
        ],
        "2": [
            { code: "DCIT402", name: "FINAL YEAR PROJECT II", link: "https://meet.google.com/placeholder402" },
            { code: "DCIT404", name: "PROFESSIONAL PRACTICE IN IT", link: "https://meet.google.com/placeholder404" },
            { code: "DCIT406", name: "ADVANCED SYSTEMS DESIGN", link: "https://meet.google.com/placeholder406" }
        ]
    }
};

// Class Timetable Database for each level
const classTimeTableData = {
    "100": {
        "2024/2025": {
            "1": {
                academicYear: "2024/2025",
                semester: "First Semester",
                teachingPeriod: "07th Feb. - 29th Mar. 2026",
                mopupPeriod: "28th Mar. - 03rd May. 2026",
                revisionPeriod: "09nd May. - 10ch May. 2026",
                examPeriod: "16th May. - 31st May. 2026",
                rows: [
                    {
                        week: "1-8",
                        days: "SATURDAYS",
                        slots: ["UGRC150 [G1]", "UGRC150 [G2]", "STAT111 [ESY]", "UGRC150 [G3]", ""]
                    },
                    {
                        week: "1-8",
                        days: "SUNDAYS",
                        slots: ["DCIT103 [MKK]", "DCIT101 [SAA]", "ECON101 [?]", "", "DCIT105 [SM]"]
                    }
                ]
            },
            "2": {
                academicYear: "2024/2025",
                semester: "Second Semester",
                teachingPeriod: "10th Jun. - 25th Jul. 2026",
                mopupPeriod: "26th Jul. - 14th Aug. 2026",
                revisionPeriod: "15th Aug. - 18th Aug. 2026",
                examPeriod: "19th Aug. - 02nd Sep. 2026",
                rows: [
                    {
                        week: "1-8",
                        days: "SATURDAYS",
                        slots: ["UGRC110 [G1]", "DCIT104 [SAA]", "DCIT102 [PNTA]", "MATH122 [PBS]", "DCIT104 [MKK]"]
                    },
                    {
                        week: "1-8",
                        days: "SUNDAYS",
                        slots: ["DCIT104 [MKK]", "MATH122 [SAA]", "STAT112 [EDA]", "UGBS104 [EO]", "STAT112 [KSAM]"]
                    }
                ]
            }
        },
        "2025/2026": {
            "1": {
                academicYear: "2025/2026",
                semester: "First Semester",
                teachingPeriod: "17th Jan. - 22nd Mar. 2026",
                mopupPeriod: "28th Mar. - 26th Apr. 2026",
                revisionPeriod: "02nd May. - 3rd May. 2026",
                examPeriod: "09th May. - 31st May. 2026",
                rows: [
                    {
                        week: "1-10",
                        days: "SATURDAYS",
                        slots: ["UGRC150 [G1]", "UGRC150 [G2]", "STAT111 [ESY]", "UGRC150 [G3]", ""]
                    },
                    {
                        week: "1-10",
                        days: "SUNDAYS",
                        slots: ["DCIT103 [MKK]", "DCIT101 [SAA]", "ECON101 [?]", "", "DCIT105 [SM]"]
                    }
                ]
            },
            "2": {
                academicYear: "2025/2026",
                semester: "Second Semester",
                teachingPeriod: "10th Jun. - 25th Jul. 2026",
                mopupPeriod: "26th Jul. - 14th Aug. 2026",
                revisionPeriod: "15th Aug. - 18th Aug. 2026",
                examPeriod: "19th Aug. - 02nd Sep. 2026",
                rows: [
                    {
                        week: "1-8",
                        days: "SATURDAYS",
                        slots: ["UGRC110 [G1]", "DCIT104 [SAA]", "DCIT102 [PNTA]", "MATH122 [PBS]", "DCIT104 [MKK]"]
                    },
                    {
                        week: "1-8",
                        days: "SUNDAYS",
                        slots: ["DCIT104 [MKK]", "MATH122 [SAA]", "STAT112 [EDA]", "UGBS104 [EO]", "STAT112 [KSAM]"]
                    }
                ]
            }
        }
    },
    "200": {
        "2024/2025": {
            "1": {
                academicYear: "2024/2025",
                semester: "First Semester",
                teachingPeriod: "07th Feb. - 29th Mar. 2026",
                mopupPeriod: "28th Mar. - 03rd May. 2026",
                revisionPeriod: "09nd May. - 10ch May. 2026",
                examPeriod: "16th May. - 31st May. 2026",
                rows: [
                    {
                        week: "1-8",
                        days: "SATURDAYS",
                        slots: ["DCIT201 [G1]", "DCIT203 [G2]", "DCIT205 [ESY]", "UGRC210 [G3]", ""]
                    },
                    {
                        week: "1-8",
                        days: "SUNDAYS",
                        slots: ["DCIT207 [MKK]", "DCIT209 [SAA]", "DCIT209 [G2]", "", "DCIT209 [SM]"]
                    }
                ]
            },
            "2": {
                academicYear: "2024/2025",
                semester: "Second Semester",
                teachingPeriod: "10th Jun. - 25th Jul. 2026",
                mopupPeriod: "26th Jul. - 14th Aug. 2026",
                revisionPeriod: "15th Aug. - 18th Aug. 2026",
                examPeriod: "19th Aug. - 02nd Sep. 2026",
                rows: [
                    {
                        week: "1-8",
                        days: "SATURDAYS",
                        slots: ["DCIT200 [G1]", "DCIT204 [SAA]", "DCIT208 [PNTA]", "DCIT214 [PBS]", "DCIT216 [MKK]"]
                    },
                    {
                        week: "1-8",
                        days: "SUNDAYS",
                        slots: ["DCIT204 [MKK]", "DCIT208 [SAA]", "DCIT214 [EDA]", "UGRC229 [EO]", "DCIT216 [KSAM]"]
                    }
                ]
            }
        },
        "2025/2026": {
            "1": {
                academicYear: "2025/2026",
                semester: "First Semester",
                teachingPeriod: "17th Jan. - 22nd Mar. 2026",
                mopupPeriod: "28th Mar. - 26th Apr. 2026",
                revisionPeriod: "02nd May. - 3rd May. 2026",
                examPeriod: "09th May. - 31st May. 2026",
                rows: [
                    {
                        week: "1-10",
                        days: "SATURDAYS",
                        slots: ["DCIT201 [G1]", "DCIT203 [G2]", "DCIT205 [ESY]", "UGRC210 [G3]", ""]
                    },
                    {
                        week: "1-10",
                        days: "SUNDAYS",
                        slots: ["DCIT207 [MKK]", "DCIT209 [SAA]", "DCIT209 [G2]", "", "DCIT209 [SM]"]
                    }
                ]
            },
            "2": {
                academicYear: "2025/2026",
                semester: "Second Semester",
                teachingPeriod: "10th Jun. - 25th Jul. 2026",
                mopupPeriod: "26th Jul. - 14th Aug. 2026",
                revisionPeriod: "15th Aug. - 18th Aug. 2026",
                examPeriod: "19th Aug. - 02nd Sep. 2026",
                rows: [
                    {
                        week: "1-8",
                        days: "SATURDAYS",
                        slots: ["DCIT200 [G1]", "DCIT204 [SAA]", "DCIT208 [PNTA]", "DCIT214 [PBS]", "DCIT216 [MKK]"]
                    },
                    {
                        week: "1-8",
                        days: "SUNDAYS",
                        slots: ["DCIT204 [MKK]", "DCIT208 [SAA]", "DCIT214 [EDA]", "UGRC229 [EO]", "DCIT216 [KSAM]"]
                    }
                ]
            }
        }
    },
    "300": {
        "2024/2025": {
            "1": {
                academicYear: "2024/2025",
                semester: "First Semester",
                teachingPeriod: "07th Feb. - 29th Mar. 2026",
                mopupPeriod: "28th Mar. - 03rd May. 2026",
                revisionPeriod: "09nd May. - 10ch May. 2026",
                examPeriod: "16th May. - 31st May. 2026",
                rows: [
                    {
                        week: "1-8",
                        days: "SATURDAYS",
                        slots: ["DCIT301 [AD]", "DCIT303 [JYL]", "DCIT307 [MAN]", "DCIT313 [PBS]", ""]
                    },
                    {
                        week: "1-8",
                        days: "SUNDAYS",
                        slots: ["DCIT321 [SM]", "DCIT323 [MMK]", "DCIT317 [EDA]", "DCIT321 [MKK]", "DCIT323 [KSAM]"]
                    }
                ]
            },
            "2": {
                academicYear: "2024/2025",
                semester: "Second Semester",
                teachingPeriod: "10th Jun. - 25th Jul. 2026",
                mopupPeriod: "26th Jul. - 14th Aug. 2026",
                revisionPeriod: "15th Aug. - 18th Aug. 2026",
                examPeriod: "19th Aug. - 02nd Sep. 2026",
                rows: [
                    {
                        week: "1-8",
                        days: "SATURDAYS",
                        slots: ["", "", "", "", ""]
                    },
                    {
                        week: "1-8",
                        days: "SUNDAYS",
                        slots: ["", "", "", "", ""]
                    }
                ]
            }
        },
        "2025/2026": {
            "1": {
                academicYear: "2025/2026",
                semester: "First Semester",
                teachingPeriod: "17th Jan. - 22nd Mar. 2026",
                mopupPeriod: "28th Mar. - 26th Apr. 2026",
                revisionPeriod: "02nd May. - 3rd May. 2026",
                examPeriod: "09th May. - 31st May. 2026",
                rows: [
                    {
                        week: "1-10",
                        days: "SATURDAYS",
                        slots: ["DCIT301 [AD]", "DCIT303 [JYL]", "DCIT307 [MAN]", "DCIT313 [PBS]", ""]
                    },
                    {
                        week: "1-10",
                        days: "SUNDAYS",
                        slots: ["DCIT321 [SM]", "DCIT323 [MMK]", "DCIT317 [EDA]", "DCIT321 [MKK]", "DCIT323 [KSAM]"]
                    }
                ]
            },
            "2": {
                academicYear: "2025/2026",
                semester: "Second Semester",
                teachingPeriod: "10th Jun. - 25th Jul. 2026",
                mopupPeriod: "26th Jul. - 14th Aug. 2026",
                revisionPeriod: "15th Aug. - 18th Aug. 2026",
                examPeriod: "19th Aug. - 02nd Sep. 2026",
                rows: [
                    {
                        week: "1-8",
                        days: "SATURDAYS",
                        slots: ["", "", "", "", ""]
                    },
                    {
                        week: "1-8",
                        days: "SUNDAYS",
                        slots: ["", "", "", "", ""]
                    }
                ]
            }
        }
    },
    "400": {
        "2024/2025": {
            "1": {
                academicYear: "2024/2025",
                semester: "First Semester",
                teachingPeriod: "07th Feb. - 29th Mar. 2026",
                mopupPeriod: "28th Mar. - 03rd May. 2026",
                revisionPeriod: "09nd May. - 10ch May. 2026",
                examPeriod: "16th May. - 31st May. 2026",
                rows: [
                    {
                        week: "1-8",
                        days: "SATURDAYS",
                        slots: ["DCIT401 [G1]", "DCIT403 [G2]", "DCIT405 [PBS]", "", ""]
                    },
                    {
                        week: "1-8",
                        days: "SUNDAYS",
                        slots: ["DCIT401 [MKK]", "DCIT403 [SAA]", "DCIT405 [EDA]", "", "DCIT405 [KSAM]"]
                    }
                ]
            },
            "2": {
                academicYear: "2024/2025",
                semester: "Second Semester",
                teachingPeriod: "10th Jun. - 25th Jul. 2026",
                mopupPeriod: "26th Jul. - 14th Aug. 2026",
                revisionPeriod: "15th Aug. - 18th Aug. 2026",
                examPeriod: "19th Aug. - 02nd Sep. 2026",
                rows: [
                    {
                        week: "1-8",
                        days: "SATURDAYS",
                        slots: ["DCIT402 [G1]", "DCIT404 [SAA]", "DCIT406 [PNTA]", "", "DCIT406 [MKK]"]
                    },
                    {
                        week: "1-8",
                        days: "SUNDAYS",
                        slots: ["DCIT402 [MKK]", "DCIT404 [SAA]", "DCIT406 [EDA]", "", "DCIT406 [KSAM]"]
                    }
                ]
            }
        },
        "2025/2026": {
            "1": {
                academicYear: "2025/2026",
                semester: "First Semester",
                teachingPeriod: "17th Jan. - 22nd Mar. 2026",
                mopupPeriod: "28th Mar. - 26th Apr. 2026",
                revisionPeriod: "02nd May. - 3rd May. 2026",
                examPeriod: "09th May. - 31st May. 2026",
                rows: [
                    {
                        week: "1-10",
                        days: "SATURDAYS",
                        slots: ["DCIT401 [G1]", "DCIT403 [G2]", "DCIT405 [PBS]", "", ""]
                    },
                    {
                        week: "1-10",
                        days: "SUNDAYS",
                        slots: ["DCIT401 [MKK]", "DCIT403 [SAA]", "DCIT405 [EDA]", "", "DCIT405 [KSAM]"]
                    }
                ]
            },
            "2": {
                academicYear: "2025/2026",
                semester: "Second Semester",
                teachingPeriod: "10th Jun. - 25th Jul. 2026",
                mopupPeriod: "26th Jul. - 14th Aug. 2026",
                revisionPeriod: "15th Aug. - 18th Aug. 2026",
                examPeriod: "19th Aug. - 02nd Sep. 2026",
                rows: [
                    {
                        week: "1-8",
                        days: "SATURDAYS",
                        slots: ["DCIT402 [G1]", "DCIT404 [SAA]", "DCIT406 [PNTA]", "", "DCIT406 [MKK]"]
                    },
                    {
                        week: "1-8",
                        days: "SUNDAYS",
                        slots: ["DCIT402 [MKK]", "DCIT404 [SAA]", "DCIT406 [EDA]", "", "DCIT406 [KSAM]"]
                    }
                ]
            }
        }
    }
};

// Helper function to get schedule courses
function getScheduleCourses(level, semester) {
    if (courseScheduleData[level] && courseScheduleData[level][semester]) {
        return courseScheduleData[level][semester];
    }
    return [];
}

// Helper function to get timetable data
function getClassTimeTable(level, academicYear, semester) {
    if (classTimeTableData[level] && classTimeTableData[level][academicYear] && classTimeTableData[level][academicYear][semester]) {
        return classTimeTableData[level][academicYear][semester];
    }
    return null;
}
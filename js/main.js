const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
const menuOverlay = document.getElementById('menuOverlay');
const dropdownOverlay = document.getElementById('dropdownOverlay');
const topLinks = document.getElementById('topLinks');

// ============ ERROR MODAL FUNCTIONS ============
const modalOverlay = document.getElementById('modalOverlay');
const errorModal = document.getElementById('errorModal');
const modalCloseBtn = document.getElementById('modalCloseBtn');
const modalOkBtn = document.getElementById('modalOkBtn');
const modalTitle = document.getElementById('modalTitle');
const modalMessage = document.getElementById('modalMessage');

function showErrorModal(title, message) {
    modalTitle.textContent = title;
    modalMessage.textContent = message;
    modalOverlay.classList.add('active');
    errorModal.classList.add('active');
}

function closeErrorModal() {
    modalOverlay.classList.remove('active');
    errorModal.classList.remove('active');
}

modalCloseBtn.addEventListener('click', closeErrorModal);
modalOkBtn.addEventListener('click', closeErrorModal);
modalOverlay.addEventListener('click', function(e) {
    if (e.target === modalOverlay && !document.getElementById('successModal').classList.contains('active')) {
        closeErrorModal();
    }
});

// ============ SUCCESS MODAL FUNCTIONS ============
const successModal = document.getElementById('successModal');
const successModalOverlay = document.getElementById('successModalOverlay');
const successCloseBtn = document.getElementById('successCloseBtn');

function getExamStatus(examDate, examTime) {
    const now = new Date();
    const timeParts = examTime.split('-');
    const startTime = timeParts[0].trim();

    const [startHour, startMin] = startTime.split(':').map(Number);

    const [year, month, day] = examDate.split('-').map(Number);
    const examDateTime = new Date(year, month - 1, day, startHour, startMin);

    const endTimeParts = timeParts[1].trim().split(':');
    const endHour = parseInt(endTimeParts[0]);
    const endMin = parseInt(endTimeParts[1]);
    const endDateTime = new Date(year, month - 1, day, endHour, endMin);

    if (now < examDateTime) {
        return {
            status: 'Yet To Be Taken',
            color: '#1b3a5c',
            className: 'status-upcoming'
        };
    } else if (now >= examDateTime && now <= endDateTime) {
        return {
            status: 'In Progress',
            color: '#28a745',
            className: 'status-in-progress'
        };
    } else {
        return {
            status: 'Already Taken',
            color: '#ffc107',
            className: 'status-completed'
        };
    }
}

function formatDate(dateStr) {
    const [year, month, day] = dateStr.split('-').map(Number);
    const date = new Date(year, month - 1, day);
    const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
    const dayName = days[date.getDay()];
    const monthName = months[month - 1];
    return `${dayName}, ${monthName} ${day}${getOrdinalSuffix(day)}`;
}

function formatDateMobileOnly(dateStr) {
    const [year, month, day] = dateStr.split('-').map(Number);
    const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
    const monthName = months[month - 1];
    return `${monthName} ${day}${getOrdinalSuffix(day)}`;
}

function getOrdinalSuffix(num) {
    const j = num % 10,
        k = num % 100;
    if (j === 1 && k !== 11) {
        return "ST";
    }
    if (j === 2 && k !== 12) {
        return "ND";
    }
    if (j === 3 && k !== 13) {
        return "RD";
    }
    return "TH";
}

function formatTime(timeStr) {
    // Handle both "07:30-09:00" and "7:30AM" formats
    if (timeStr.includes(':') && !timeStr.includes('AM') && !timeStr.includes('PM')) {
        // It's in 24-hour format like "07:30-09:00", extract start time
        timeStr = timeStr.split('-')[0].trim();
    }

    const [hour, min] = timeStr.split(':').map(Number);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const displayHour = hour % 12 || 12;
    return `${displayHour}:${min.toString().padStart(2, '0')}${ampm}`;
}

function formatTimeMobileOnly(timeStr) {
    // Handle both "07:30-09:00" and "7:30AM" formats
    if (timeStr.includes(':') && !timeStr.includes('AM') && !timeStr.includes('PM')) {
        // It's in 24-hour format like "07:30-09:00", extract start time
        timeStr = timeStr.split('-')[0].trim();
    }

    // For mobile, return the time with AM/PM in simple format like 7:30AM
    const parts = timeStr.split(':');
    let hour = parseInt(parts[0]);
    const min = parseInt(parts[1]);

    // Convert to 12-hour format with AM/PM
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const displayHour = hour % 12 || 12;
    return `${displayHour}:${min.toString().padStart(2, '0')}${ampm}`;
}

function showSuccessModal(studentName, studentId, courseCode, courseName, examMode, examDate, examTime, venue) {
    const examStatus = getExamStatus(examDate, examTime);
    const headerBar = document.getElementById('successHeaderBar');

    headerBar.className = `success-header ${examStatus.className}`;
    headerBar.style.backgroundColor = examStatus.color;

    document.getElementById('successStudentName').textContent = studentName;
    document.getElementById('successStudentId').textContent = `Student ID: ${studentId}`;

    const statusBadge = document.getElementById('statusBadge');
    statusBadge.className = `status-badge ${examStatus.className}`;
    statusBadge.style.borderColor = examStatus.color;
    statusBadge.style.backgroundColor = `${examStatus.color}10`;
    statusBadge.innerHTML = `<span class="status-dot" style="background-color: ${examStatus.color}"></span>${examStatus.status}`;

    document.getElementById('successCourseCode').textContent = courseCode;
    document.getElementById('successCourseName').textContent = courseName;
    document.getElementById('successExamMode').textContent = examMode;

    const formattedDate = formatDate(examDate);
    document.getElementById('successExamDate').textContent = formattedDate;

    const formattedTime = formatTime(examTime);
    document.getElementById('successExamTime').textContent = formattedTime;

    document.getElementById('successVenue').textContent = venue;

    // Create Google Maps link for the venue
    const googleMapsUrl = `https://www.google.com/maps/search/${encodeURIComponent(venue)}+Ghana`;
    const venueLink = document.getElementById('successVenueLink');
    venueLink.href = googleMapsUrl;

    successModalOverlay.classList.add('active');
    successModal.classList.add('active');
}

function closeSuccessModal() {
    successModalOverlay.classList.remove('active');
    successModal.classList.remove('active');
}

successCloseBtn.addEventListener('click', closeSuccessModal);
successModalOverlay.addEventListener('click', function(e) {
    if (e.target === successModalOverlay) {
        closeSuccessModal();
    }
});

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        if (successModal.classList.contains('active')) {
            closeSuccessModal();
        } else if (errorModal.classList.contains('active')) {
            closeErrorModal();
        }
    }
});

// ============ HAMBURGER MENU TOGGLE ============
hamburger.addEventListener('click', function(e) {
    e.stopPropagation();
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
    menuOverlay.classList.toggle('active');
});

menuOverlay.addEventListener('click', function() {
    hamburger.classList.remove('active');
    navLinks.classList.remove('active');
    menuOverlay.classList.remove('active');
});

// ============ CLOSE NAV ON NAV ITEM CLICK ============
const navItems = document.querySelectorAll('.nav-links a, .nav-dropdown-trigger');
navItems.forEach(item => {
    item.addEventListener('click', function(e) {
        // Close the menu after clicking a nav item (but not on dropdowns)
        const isDropdownTrigger = item.classList.contains('nav-dropdown-trigger');

        if (!isDropdownTrigger || window.innerWidth <= 768) {
            // Delay closing to allow navigation
            setTimeout(() => {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
                menuOverlay.classList.remove('active');
            }, 100);
        }
    });
});

// Top Nav Dropdowns
const topDropdowns = document.querySelectorAll('.top-links .dropdown');
topDropdowns.forEach(dropdown => {
    const trigger = dropdown.querySelector('.dropdown-trigger');
    trigger.addEventListener('click', function(e) {
        if (window.innerWidth <= 768) {
            e.preventDefault();
            topDropdowns.forEach(otherDropdown => {
                if (otherDropdown !== dropdown) {
                    otherDropdown.classList.remove('active');
                }
            });
            dropdown.classList.toggle('active');
            if (dropdown.classList.contains('active')) {
                dropdownOverlay.classList.add('active');
            } else {
                dropdownOverlay.classList.remove('active');
            }
        }
    });
});

dropdownOverlay.addEventListener('click', function(e) {
    if (window.innerWidth <= 768) {
        topDropdowns.forEach(dropdown => {
            dropdown.classList.remove('active');
        });
        dropdownOverlay.classList.remove('active');
    }
});

// Main Nav Dropdowns
const navDropdowns = document.querySelectorAll('.nav-dropdown');
navDropdowns.forEach(dropdown => {
    const trigger = dropdown.querySelector('.nav-dropdown-trigger');
    trigger.addEventListener('click', function(e) {
        if (window.innerWidth <= 768) {
            e.preventDefault();
            dropdown.classList.toggle('active');
        }
    });
});

const submenuItems = document.querySelectorAll('.nav-dropdown-menu a');
submenuItems.forEach(item => {
    item.addEventListener('click', function(e) {
        if (window.innerWidth <= 768) {
            e.stopPropagation();
        }
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
        menuOverlay.classList.remove('active');
        navDropdowns.forEach(dropdown => {
            dropdown.classList.remove('active');
        });
    });
});

const nonDropdownLinks = document.querySelectorAll('.nav-links > a');
nonDropdownLinks.forEach(link => {
    link.addEventListener('click', function() {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
        menuOverlay.classList.remove('active');
    });
});

const topSubmenuItems = document.querySelectorAll('.top-links .dropdown-menu a');
topSubmenuItems.forEach(item => {
    item.addEventListener('click', function(e) {
        if (window.innerWidth <= 768) {
            e.stopPropagation();
            const dropdown = item.closest('.dropdown');
            dropdown.classList.remove('active');
            dropdownOverlay.classList.remove('active');
        }
    });
});

document.addEventListener('click', function(e) {
    if (window.innerWidth <= 768) {
        const isClickInDropdown = e.target.closest('.dropdown');
        if (!isClickInDropdown) {
            topDropdowns.forEach(dropdown => {
                dropdown.classList.remove('active');
            });
            dropdownOverlay.classList.remove('active');
        }
    }
});

// ============ NAVIGATION SCROLLING TO SECTIONS ============
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// Exam Venues Navigation Link
const examVenuesNavLink = document.querySelector('.nav-links .nav-dropdown:first-child .nav-dropdown-trigger');
if (examVenuesNavLink) {
    examVenuesNavLink.addEventListener('click', function(e) {
        e.preventDefault();
        scrollToSection('examVenueSection');
        // Close menu on mobile
        if (window.innerWidth <= 768) {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
            menuOverlay.classList.remove('active');
        }
    });
}

// Study Materials Navigation Link
const studyMaterialsNavLink = document.querySelector('.nav-links .nav-dropdown:nth-child(2) .nav-dropdown-trigger');
if (studyMaterialsNavLink) {
    studyMaterialsNavLink.addEventListener('click', function(e) {
        e.preventDefault();
        scrollToSection('studyMaterialsSection');
        // Close menu on mobile
        if (window.innerWidth <= 768) {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
            menuOverlay.classList.remove('active');
        }
    });
}

// Exam TimeTable Navigation Links
const timetableNavLinks = document.querySelectorAll('.nav-dropdown-menu a[data-timetable]');
timetableNavLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        scrollToSection('examTimetableSection');
        const timetableType = this.getAttribute('data-timetable');
        // Close menu on mobile
        if (window.innerWidth <= 768) {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
            menuOverlay.classList.remove('active');
        }
        setTimeout(() => {
            const tabBtn = document.querySelector(`.timetable-tab-btn[data-type="${timetableType}"]`);
            if (tabBtn) {
                tabBtn.click();
            }
        }, 500);
    });
});

// ============ COLLAPSIBLE SECTIONS ============
const examVenueHeader = document.getElementById('examVenueHeader');
const examVenueContent = document.getElementById('examVenueContent');
const studyMaterialsHeader = document.getElementById('studyMaterialsHeader');
const studyMaterialsContent = document.getElementById('studyMaterialsContent');
const examTimetableHeader = document.getElementById('examTimetableHeader');
const examTimetableContent = document.getElementById('examTimetableContent');
const expandAllBtn = document.getElementById('expandAllBtn');
const allSections = document.querySelectorAll('.collapsible-section');
let allExpanded = true;

examVenueHeader.addEventListener('click', function() {
    examVenueContent.classList.toggle('collapsed');
    examVenueHeader.classList.toggle('collapsed');
});

studyMaterialsHeader.addEventListener('click', function() {
    studyMaterialsContent.classList.toggle('collapsed');
    studyMaterialsHeader.classList.toggle('collapsed');
});

examTimetableHeader.addEventListener('click', function() {
    examTimetableContent.classList.toggle('collapsed');
    examTimetableHeader.classList.toggle('collapsed');
});

expandAllBtn.addEventListener('click', function() {
    allExpanded = !allExpanded;

    allSections.forEach(section => {
        const header = section.querySelector('.section-header');
        const content = section.querySelector('.section-content');

        if (allExpanded) {
            content.classList.remove('collapsed');
            header.classList.remove('collapsed');
        } else {
            content.classList.add('collapsed');
            header.classList.add('collapsed');
        }
    });

    expandAllBtn.textContent = allExpanded ? '▼ Expand All' : '▶ Collapse All';
});

// ============ EXAM TIMETABLE TAB SWITCHING ============
const timetableTabBtns = document.querySelectorAll('.timetable-tab-btn');
timetableTabBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        const timetableType = this.getAttribute('data-type');

        timetableTabBtns.forEach(b => b.classList.remove('active'));
        this.classList.add('active');

        document.getElementById('provisionalContent').style.display = 'none';
        document.getElementById('finalContent').style.display = 'none';

        if (timetableType === 'provisional') {
            document.getElementById('provisionalContent').style.display = 'block';
        } else {
            document.getElementById('finalContent').style.display = 'block';
        }
    });
});

// ============ TIMETABLE SELECTOR ============
const academicYearSelect = document.getElementById('academicYearSelect');
const semesterSelect = document.getElementById('semesterSelect');
const loadTimetableBtn = document.getElementById('loadTimetableBtn');

function updateTimetableDisplay(academicYear, semester) {
    const semesterText = semester === '1' ? 'First Semester' : 'Second Semester';
    document.getElementById('timetableTitle').textContent = `${academicYear} - ${semesterText}`;

    const timetableData = examTimetables[academicYear][semester];

    const provisionalBody = document.getElementById('provisionalTableBody');
    provisionalBody.innerHTML = '';

    if (timetableData.provisional.length > 0) {
        timetableData.provisional.forEach(entry => {
            const row = document.createElement('tr');
            row.className = 'timetable-row';

            // Format date and time based on screen size
            const isMobile = window.innerWidth <= 480;
            const dateDisplay = isMobile ? formatDateMobileOnly(entry.date) : formatDate(entry.date);
            const timeDisplay = isMobile ? formatTimeMobileOnly(entry.time) : entry.time;

            row.innerHTML = `
                <td class="timetable-cell date-cell">${dateDisplay}</td>
                <td class="timetable-cell time-cell">${timeDisplay}</td>
                <td class="timetable-cell code-cell desktop-only">${entry.courseCode}</td>
                <td class="timetable-cell name-cell" data-course-code="${entry.courseCode}">${entry.courseName}</td>
                <td class="timetable-cell mode-cell">${entry.mode}</td>
            `;
            provisionalBody.appendChild(row);
        });
        document.querySelector('#provisionalContent .timetable-notice').style.display = 'flex';
        document.querySelector('#provisionalContent .timetable-table-wrapper').style.display = 'block';
    } else {
        const noDataRow = document.createElement('tr');
        noDataRow.innerHTML = '<td colspan="5" style="text-align: center; padding: 30px; color: #999;">No provisional timetable available for this semester</td>';
        provisionalBody.appendChild(noDataRow);
        document.querySelector('#provisionalContent .timetable-notice').style.display = 'none';
        document.querySelector('#provisionalContent .timetable-table-wrapper').style.display = 'none';
    }

    const finalBody = document.getElementById('finalTableBody');
    finalBody.innerHTML = '';
    const finalNotAvailableMsg = document.getElementById('finalNotAvailableMsg');
    const finalTableWrapper = document.getElementById('finalTableWrapper');

    if (timetableData.final.length > 0) {
        timetableData.final.forEach(entry => {
            const row = document.createElement('tr');
            row.className = 'timetable-row';

            // Format date and time based on screen size
            const isMobile = window.innerWidth <= 480;
            const dateDisplay = isMobile ? formatDateMobileOnly(entry.date) : formatDate(entry.date);
            const timeDisplay = isMobile ? formatTimeMobileOnly(entry.time) : entry.time;

            row.innerHTML = `
                <td class="timetable-cell date-cell">${dateDisplay}</td>
                <td class="timetable-cell time-cell">${timeDisplay}</td>
                <td class="timetable-cell code-cell desktop-only">${entry.courseCode}</td>
                <td class="timetable-cell name-cell" data-course-code="${entry.courseCode}">${entry.courseName}</td>
                <td class="timetable-cell mode-cell">${entry.mode}</td>
            `;
            finalBody.appendChild(row);
        });
        finalNotAvailableMsg.style.display = 'none';
        finalTableWrapper.style.display = 'block';
    } else {
        finalNotAvailableMsg.style.display = 'block';
        finalTableWrapper.style.display = 'none';
        finalNotAvailableMsg.innerHTML = `
            <div class="not-available-icon">📅</div>
            <div class="not-available-text">
                <p class="not-available-title">Final TimeTable Not Available</p>
                <p class="not-available-message">The final examination timetable for the ${academicYear} ${semesterText} has not been released yet. Please check back soon for updates.</p>
            </div>
        `;
    }

    timetableTabBtns.forEach(b => b.classList.remove('active'));
    document.querySelector('.timetable-tab-btn[data-type="provisional"]').classList.add('active');
    document.getElementById('provisionalContent').style.display = 'block';
    document.getElementById('finalContent').style.display = 'none';
}

loadTimetableBtn.addEventListener('click', function() {
    const academicYear = academicYearSelect.value;
    const semester = semesterSelect.value;

    if (examTimetables[academicYear] && examTimetables[academicYear][semester]) {
        updateTimetableDisplay(academicYear, semester);
    } else {
        showErrorModal('❌ TimeTable Not Found', 'The timetable for the selected academic year and semester is not available yet.');
    }
});

// ============ STUDY MATERIALS INITIALIZATION ============
function initializeStudyMaterials() {
    const container = document.getElementById('studyMaterialsContainer');
    container.innerHTML = '';

    const levels = ['100', '200', '300', '400'];
    let currentOpenSemester = null;

    levels.forEach(level => {
        if (studyMaterials[level]) {
            const levelDiv = document.createElement('div');
            levelDiv.className = 'level-container';

            const levelHeader = document.createElement('div');
            levelHeader.className = 'level-header';
            levelHeader.innerHTML = `
                <span class="level-collapse-icon">▼</span>
                <h3>Level ${level}</h3>
            `;

            const levelContent = document.createElement('div');
            levelContent.className = 'level-content';

            const semesters = studyMaterials[level];

            Object.keys(semesters).forEach(semesterNum => {
                const semesterDiv = document.createElement('div');
                semesterDiv.className = 'semester-container';

                const semesterHeader = document.createElement('div');
                semesterHeader.className = 'semester-header';
                semesterHeader.innerHTML = `
                    <span class="semester-collapse-icon">▼</span>
                    <h4>Semester ${semesterNum}</h4>
                    <span class="course-count">${semesters[semesterNum].length} courses</span>
                `;

                const semesterContent = document.createElement('div');
                semesterContent.className = 'semester-content collapsed';

                const coursesList = document.createElement('div');
                coursesList.className = 'courses-list';

                semesters[semesterNum].forEach(course => {
                    const courseItem = document.createElement('a');
                    courseItem.href = course.link;
                    courseItem.target = '_blank';
                    courseItem.className = 'course-item';
                    courseItem.innerHTML = `
                        <div class="course-code">${course.code}</div>
                        <div class="course-name">${course.name}</div>
                        <div class="course-link-icon">📂</div>
                    `;

                    coursesList.appendChild(courseItem);
                });

                semesterContent.appendChild(coursesList);
                semesterDiv.appendChild(semesterHeader);
                semesterDiv.appendChild(semesterContent);

                semesterHeader.addEventListener('click', function() {
                    if (currentOpenSemester && currentOpenSemester !== semesterDiv) {
                        const currentContent = currentOpenSemester.querySelector('.semester-content');
                        const currentHeader = currentOpenSemester.querySelector('.semester-header');
                        currentContent.classList.add('collapsed');
                        currentHeader.classList.remove('collapsed');
                    }

                    const isCurrentlyClosed = semesterContent.classList.contains('collapsed');

                    if (isCurrentlyClosed) {
                        semesterContent.classList.remove('collapsed');
                        semesterHeader.classList.add('collapsed');
                        currentOpenSemester = semesterDiv;
                    } else {
                        semesterContent.classList.add('collapsed');
                        semesterHeader.classList.remove('collapsed');
                        currentOpenSemester = null;
                    }
                });

                levelContent.appendChild(semesterDiv);
            });

            levelDiv.appendChild(levelHeader);
            levelDiv.appendChild(levelContent);

            levelHeader.addEventListener('click', function() {
                levelContent.classList.toggle('collapsed');
                levelHeader.classList.toggle('collapsed');
            });

            container.appendChild(levelDiv);
        }
    });

    studyMaterialsContent.classList.remove('collapsed');
    studyMaterialsHeader.classList.add('collapsed');
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    initializeStudyMaterials();
    updateTimetableDisplay('2025/2026', '1');
});

// ============ EXAM VENUE SEARCH ============
const searchBtn = document.getElementById('searchBtn');
const studentIdInput = document.getElementById('studentId');
const courseCodeInput = document.getElementById('courseCode');

studentIdInput.addEventListener('input', function() {
    this.value = this.value.replace(/[^0-9]/g, '').slice(0, 8);
});

// Remove spaces from course code input
courseCodeInput.addEventListener('input', function() {
    this.value = this.value.replace(/\s+/g, '').toUpperCase();
});

searchBtn.addEventListener('click', function() {
    const studentId = studentIdInput.value.trim();
    const courseCode = courseCodeInput.value.trim().toUpperCase().replace(/\s+/g, '');

    if (!studentId || studentId.length !== 8) {
        showErrorModal('❌ Invalid Student ID', 'Student ID must be exactly 8 digits. Please check and try again.');
        return;
    }

    if (!courseCode) {
        showErrorModal('❌ Missing Course Code', 'Please enter a course code to search.');
        return;
    }

    const studentInfo = getCombinedData(studentId, courseCode);

    if (studentInfo) {
        showSuccessModal(
            studentInfo.name,
            studentId,
            studentInfo.courseCode,
            studentInfo.courseName,
            studentInfo.examMode,
            studentInfo.examDate,
            studentInfo.examTime,
            studentInfo.venue
        );
    } else {
        const student = studentData[studentId];
        if (student && !courseData[courseCode]) {
            showErrorModal(
                '⚠️ Course Not Available',
                `Student found: ${student.name}\n\nHowever, the course code "${courseCode}" is not yet available in the system. Please check the course code or contact the administration.`
            );
        } else if (!student && courseData[courseCode]) {
            showErrorModal(
                '❌ Student Not Found',
                `The student ID "${studentId}" is not found in the system. Please verify your student ID and try again.`
            );
        } else {
            showErrorModal(
                '❌ No Results Found',
                `No exam venue information found for Student ID: ${studentId} and Course Code: ${courseCode}.\n\nPlease verify both details and try again.`
            );
        }
    }
});

courseCodeInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        searchBtn.click();
    }
});

studentIdInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        searchBtn.click();
    }
});
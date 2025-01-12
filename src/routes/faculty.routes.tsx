import FacultyDashboard from "../pages/faculty/FacultyDashboard";
import OfferedCourse from "../pages/faculty/OfferedCourse";

export const facultyPaths = [
  {
    name: 'Dashboard',
    path: 'dashboard',
    element: <FacultyDashboard />
  },
  {
    name: 'Offred Course',
    path: 'offred-course',
    element: <OfferedCourse />
  }
]
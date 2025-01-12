// const adminPaths2 = [
//   {
//     name: "Dashboard",
//     path: "dashboard",
//     element: "Admin_Dashboard",
//   },
//   {
//     name: "User Management",
//     children: [
//       {
//         name: "Create Admin",
//         path: "create-admin",
//         element: "Create_Admin",
//       },
//       {
//         name: "Create Faculty",
//         path: "create-faculty",
//         element: "Create_Faculty",
//       },
//       {
//         name: "Create Student",
//         path: "create-student",
//         element: "Create_Student",
//       },
//     ],
//   },
// ];

// const newArray = adminPaths2.reduce((acc, item) => {
//   if (item.path && item.name) {
//     acc.push({
//       key: item.path,
//       label: 'NAVLINK',
//     });
//   }

//  if(item.children){
//   acc.push({
//     key: item.name,
//     label: item.name,
//     children: item.children.map(child => ({
//       key: child.path,
//       label: 'NAVLINK',
//     })),
//   })
//  }

// return acc;
 
// }, []);



const obj = {
  name: "mominul",
  role: 'mentor',
  age: 39,
  greet: () => {
    return 'Hello world'
  }
}

console.log(JSON.stringify(obj))


import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-zinc-900">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold bg-black text-white p-4 rounded-2xl ">My Portfolio</h1>
        <p className="text-lg text-white">Welcome to my personal portfolio My Name Is Mahar Ahmed Sarfraz</p>
      </header>

      {/* About Section */}
      <section id="about" className="mb-12">
        <h2 className="text-3xl font-semibold mb-4 bg-black text-white p-4 rounded-2xl ">About Me</h2>
        <p className="text-white">
          I am a passionate developer with experience in building web applications using Next.js and Tailwind CSS and typescript and html,css.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="mb-12 bg-black text-white p-4 rounded-xl">
        <h2 className="text-3xl font-semibold mb-4  bg-black text-white p-4 rounded-2xl">Projects</h2>
        <ul className="space-y-4">
          <li className="p-4 bg-white rounded shadow">
            <h3 className="text-xl font-bold bg-black text-white p-4 rounded-xl">Islamic Project</h3>
            <p className='bg-black text-white p-4 rounded-xl'> i have created our prophets as gussing and chossing islamic project and cli based and i make this project with the help of typescript fully working.</p>
          </li>
          <li className="p-4 bg-white rounded shadow">
            <h3 className="text-xl font-bold bg-black text-white p-4 rounded-xl">Cli Calculator </h3>
            <p className='bg-black text-white p-4 rounded-xl'>i have created my Cli based typescript Calculator with fully working and its perform all the function correctly .</p>
          </li>
          {/* Add more projects as needed */}
        </ul>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <h2 className="text-3xl font-semibold mb-4  bg-black text-white p-4 rounded-2xl">Contact Me</h2>
        <form className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="p-2 border rounded"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-2 border rounded"
            required
          />
          <textarea
            placeholder="Your Message"
            className="p-2 border rounded"
            rows={3}
            required
          />
          <button type="submit" className="bg-black text-white -400 p-4 rounded-xl">
            Send Message
          </button>
        </form>
      </section>

      <footer className="mt-12">
        <p className="text-gray-600">© {new Date().getFullYear()} My Portfolio All Copy Right Reserved</p>
      </footer>
    </div>
  );
};

export default Home;


// import React from 'react';

// const Home: React.FC = () => {
//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-zinc-900">
//       <header className="text-center mb-12">
//         <h1 className="text-4xl font-bold bg-black text-white p-4 rounded-2xl ">My Portfolio</h1>
//         <p className="text-lg text-white">Welcome to my personal portfolio My Name Is Saad Qureshi</p>
//       </header>

//       {/* About Section */}
//       <section id="about" className="mb-12">
//         <h2 className="text-3xl font-semibold mb-4 bg-black text-white p-4 rounded-2xl ">About Me</h2>
//         <p className="text-white">
//           I am a passionate developer with experience in building web applications using Next.js and Tailwind CSS and typescript and html,css.
//         </p>
//       </section>

//       {/* Projects Section */}
//       <section id="projects" className="mb-12 bg-black text-white p-4 rounded-xl">
//         <h2 className="text-3xl font-semibold mb-4  bg-black text-white p-4 rounded-2xl">Projects</h2>
//         <ul className="space-y-4">
//           <li className="p-4 bg-white rounded shadow">
//             <h3 className="text-xl font-bold bg-black text-white p-4 rounded-xl">Islamic Project</h3>
//             <p className='bg-black text-white p-4 rounded-xl'> i have created our prophets as gussing and chossing islamic project and cli based and i make this project with the help of typescript fully working.</p>
//           </li>
//           <li className="p-4 bg-white rounded shadow">
//             <h3 className="text-xl font-bold bg-black text-white p-4 rounded-xl">Cli Calculator </h3>
//             <p className='bg-black text-white p-4 rounded-xl'>i have created my Cli based typescript Calculator with fully working and its perform all the function correctly .</p>
//           </li>
//           {/* Add more projects as needed */}
//         </ul>
//       </section>

//       {/* Contact Section */}
//       <section id="contact">
//         <h2 className="text-3xl font-semibold mb-4  bg-black text-white p-4 rounded-2xl">Contact Me</h2>
//         <form className="flex flex-col space-y-4">
//           <input
//             type="text"
//             placeholder="Your Name"
//             className="p-2 border rounded"
//             required
//           />
//           <input
//             type="email"
//             placeholder="Your Email"
//             className="p-2 border rounded"
//             required
//           />
//           <textarea
//             placeholder="Your Message"
//             className="p-2 border rounded"
//             rows={3}
//             required
//           />
//           <button type="submit" className="bg-black text-white -400 p-4 rounded-xl">
//             Send Message
//           </button>
//         </form>
//       </section>

//       <footer className="mt-12">
//         <p className="text-gray-600">© {new Date().getFullYear()} My Portfolio All Copy Right Reserved</p>
//       </footer>
//     </div>
//   );
// };

// export default Home;


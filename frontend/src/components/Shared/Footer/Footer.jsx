const Footer = () => {
  return (
    <footer className='px-4 divide-y  text-gray-800 relative bottom-0 left-0'>
      <div className='py-6 text-sm text-center text-gray-400'>
        © 2025-2026 PlantNet Inc. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer

// import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

// export default function Footer() {
//   return (
//     <footer className="bg-base-200 text-base-content px-6 py-12">
//       <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-4">

//         {/* LOGO + DESCRIPTION */}
//         <div>
//           {/* Replace with your logo */}
//           <div className="flex items-center gap-2 mb-3">
//             {/* <Image src="/logo.png" width={40} height={40} alt="Logo" /> */}
//             <span className="text-xl font-semibold">Plant-Net</span>
//           </div>
//           <p className="text-sm opacity-80">
//             Building modern solutions with simplicity and elegance.
//           </p>
//         </div>

//         {/* QUICK LINKS */}
//         <div>
//           <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
//           <ul className="space-y-2">
//             <li><a href="/" className="hover:text-primary">Home</a></li>
//             <li><a href="/about" className="hover:text-primary">About</a></li>
//             <li><a href="/services" className="hover:text-primary">Services</a></li>
//             <li><a href="/contact" className="hover:text-primary">Contact</a></li>
//           </ul>
//         </div>

//         {/* SUPPORT LINKS */}
//         <div>
//           <h3 className="text-lg font-semibold mb-3">Support</h3>
//           <ul className="space-y-2">
//             <li><a href="/help" className="hover:text-primary">Help Center</a></li>
//             <li><a href="/privacy" className="hover:text-primary">Privacy Policy</a></li>
//             <li><a href="/terms" className="hover:text-primary">Terms & Conditions</a></li>
//             <li><a href="/faq" className="hover:text-primary">FAQ</a></li>
//           </ul>
//         </div>

//         {/* SOCIAL ICONS */}
//         <div>
//           <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
//           <div className="flex gap-4 text-xl">
//             <a href="#" className="hover:text-primary"><FaFacebook /></a>
//             <a href="#" className="hover:text-primary"><FaInstagram /></a>
//             <a href="#" className="hover:text-primary"><FaTwitter /></a>
//             <a href="#" className="hover:text-primary"><FaLinkedin /></a>
//           </div>
//         </div>

//       </div>

//       {/* Copyright */}
//       <div className="text-center text-sm mt-10 opacity-70">
//         © {new Date().getFullYear()} Plant-Net — All rights reserved.
//       </div>
//     </footer>
//   );
// }

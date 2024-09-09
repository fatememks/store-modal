import { useState } from "react";

import Modal from "./components/modals/Modal.jsx"
function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    
    <div className="relative flex justify-center h-screen p-5">
      <button onClick={()=> {setIsOpen(true)}} className="flex items-center justify-center p-5 rounded-lg bg-red-600 w-36 h-14 text-gray-50 font-bold hover:shaddwo">
        Delete
      </button>
      {isOpen && <Modal setIsOpen={setIsOpen} />}
      
    </div>
  )
}

export default App

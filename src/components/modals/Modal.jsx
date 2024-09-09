import React from "react"
import { GoTrash } from "react-icons/go";
import { ImCancelCircle } from "react-icons/im";
function Modal({ setIsOpen }){
    return(
        <div className="z-50 top-0 left-0 right-0 absolute flex items-center justify-center">
            <div onClick={()=>{setIsOpen(false)}} className="z-10 bg-stone-900/40 w-full h-screen fixed inset-0"/>
            <div className="z-50 fixed top-1/3">
                <div className="w-[340px] h-[240px] rounded-xl flex flex-col items-center justify-center gap-8 bg-gray-50 p-4">
                    <ImCancelCircle className="self-end" size={20} onClick={()=>{setIsOpen(false)}}/>
                    <div className="flex flex-col gap-3 items-center justify-center -mt-5">
                        <p className="text-center flex  flex-col font-bold"><span>Are you sure </span><span>you want to delete this item?</span></p>
                        <p className="text-sm text-gray-600">You can't restore this item.</p>
                    </div>
                    <div className="w-full flex items-center justify-between px-6">
                        <button onClick={()=>{setIsOpen(false)}} className="w-28 h-12 bg-gray-100 border rounded-lg flex items-center justify-center">Cancel</button>
                        <button onClick={()=>{setIsOpen(false)}} className="w-28 h-12 bg-red-600 rounded-lg text-gray-50 font-semibold flex justify-center items-center gap-2">
                            <GoTrash size={20}/>
                            <p>Delete</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal
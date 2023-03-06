import { PlusIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
import CreateTodo from "./create-todo";

function MainHeader() {
  const [isOpen, setisOpen] = useState(false);

  return (
    <div className="h-16 w-full  ">
      <div className="w-full h-full flex items-center justify-between px-4">
        <h2 className="text-gray-600 font-semibold text-2xl text-center">
          Todo App
        </h2>

        <div>
          <button
            onClick={() => setisOpen(true)}
            className="border border-gray-500 p-2 rounded-lg"
          >
            <PlusIcon className="w-8 h-8" />
          </button>
        </div>
      </div>
      <CreateTodo setIsOpen={setisOpen} isOpen={isOpen} />
    </div>
  );
}

export default MainHeader;

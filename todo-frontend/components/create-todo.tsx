import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { useCreateTodoMutation } from "@/services/todo";

export default function CreateTodo({ setIsOpen, isOpen }: any) {
  function closeModal() {
    setIsOpen(false);
  }
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
  const [category, setcategory] = useState("");
  const [addTodo] = useCreateTodoMutation();

  const data = { title, description, category };

  console.log(data);

  const onSubmit = (e: any) => {
    e.preventDefault();
    addTodo({
      parameter: {
        title,
        description,
        category,
        completed: "false",
      },
    }).then(() => {
      settitle("");
      setdescription("");
      setcategory("");
      setIsOpen(false);
    });
  };

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    New Task
                  </Dialog.Title>
                  <div className="mt-2 space-y-4">
                    <div className="w-full h-12 border border-gray-400 rounded-lg px-4">
                      <input
                        className="bg-transparent w-full h-full outline-none"
                        placeholder="Title"
                        value={title}
                        onChange={(e) => settitle(e.target.value)}
                        required
                      />
                    </div>
                    <div className="w-full min-h-44 h-auto border border-gray-400 rounded-lg p-4">
                      <textarea
                        className="bg-transparent w-full h-full outline-none"
                        placeholder="Description"
                        value={description}
                        onChange={(e) => setdescription(e.target.value)}
                        required
                      />
                    </div>

                    <div className="flex items-center space-x-10 w-full">
                      <div className="space-x-2">
                        <label>Category</label>
                        <select
                          value={category}
                          onChange={(e) => setcategory(e.target.value)}
                          className="w-auto border border-gray-600 outline-none rounded"
                          required
                        >
                          <option value="" disabled>
                            Select one
                          </option>
                          <option value="important">Important</option>
                          <option value="personal">Personal</option>
                          <option value="meeting">Meeting</option>
                          <option value="office">Office</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 space-x-3 flex justify-end">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={onSubmit}
                    >
                      Create New Todo
                    </button>
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-blue-100  px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={() => setIsOpen(false)}
                    >
                      Cancel
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

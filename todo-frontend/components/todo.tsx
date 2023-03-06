import {
  useDeleteTodoMutation,
  useGetTodoByIdMutation,
  useMarkCompleteMutation,
} from "@/services/todo";
import {
  CheckCircleIcon,
  CheckIcon,
  EyeIcon,
  PencilIcon,
  TrashIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";
import React, { useState } from "react";
import UpdateTodo from "./update-todo";

function Todo({ r }: any) {
  const [todo, result] = useGetTodoByIdMutation();
  const [isOpen, setisOpen] = useState(false);
  const [deltodo] = useDeleteTodoMutation();
  const [markTodo] = useMarkCompleteMutation();
  return (
    <>
      <li
        onClick={() => {
          todo({
            id: r.id,
          });
        }}
        key={r.id}
        className={`text-lg w-full p-3 min-h-[200px]  h-auto bg-[#FFF9DE] rounded-lg shadow "}
`}
      >
        <div className="flex justify-between ">
          <h4
            className={`font-medium text-lg tracking-wider ${
              r.completed && "line-through"
            }`}
          >
            {r.title}
          </h4>
          <div className="flex space-x-2">
            <Link href={`todo/${r.id}`} className="">
              <EyeIcon className="w-4 h-4 cursor-pointer" />
            </Link>

            <PencilIcon
              className="w-4 h-4 cursor-pointer"
              onClick={() => setisOpen(true)}
            />
            <TrashIcon
              className="w-4 h-4 cursor-pointer"
              onClick={() =>
                deltodo({
                  id: r?.id,
                })
              }
            />
            <CheckCircleIcon
              className={`w-4 h-4 cursor-pointer ${
                r.completed && "text-green-600"
              }`}
              onClick={() => {
                markTodo({
                  parameter: {
                    id: r?.id,
                  },
                });
              }}
            />
          </div>
        </div>
        <p
          className={`text-gray-400 font-normal text-sm ${
            r.completed && "line-through"
          }`}
        >
          {r.description}
        </p>
      </li>
      <UpdateTodo data={r} isOpen={isOpen} setisOpen={setisOpen} />
    </>
  );
}

export default Todo;

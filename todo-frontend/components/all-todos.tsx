import React from "react";
import { useGetAllTodosQuery, useGetTodoByIdMutation } from "@/services/todo";
import Todo from "./todo";

function AllTodos() {
  const { data, error, isLoading } = useGetAllTodosQuery("");

  return (
    <>
      {isLoading && <div>Loading</div>}
      {data && (
        <div className="bg-white w-full h-screen p-4">
          <div className="">
            <div className="">
              <>
                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                  {data?.result.map((r: any) => (
                    <Todo r={r} />
                  ))}
                </ul>
              </>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default AllTodos;

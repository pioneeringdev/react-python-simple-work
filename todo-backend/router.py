from fastapi import APIRouter, HTTPException, Path, Depends
from config import SessionLocal
from sqlalchemy.orm import Session
from schemas import TodoScehema, RequestTodo, Response
import crud

router = APIRouter()


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@router.put('/')
async def create(request:RequestTodo, db: Session = Depends(get_db)):
   _todo = crud.create_todo(db, request.parameter)
   return Response(code=200, status='ok', message='"Todo created successfully', result=_todo).dict(exclude_none=True)


@router.get("/")
async def get(db: Session = Depends(get_db)):
    _todo = crud.get_all_todos(db, 0, 100)
    return Response(code=200, status='ok', message='successfull fetch all Todos data', result=_todo).dict(exclude_none=True)


@router.get("/{id}")
async def get_by_id(id: int, db: Session = Depends(get_db)):
    _todo = crud.get_todo_by_id(db, id)
    return Response(code=200, status='ok', message='successfully fetch Todo data', result=_todo).dict(exclude_none=True)


@router.patch('/')
async def update_todo(request: RequestTodo, db: Session = Depends(get_db)):
    _todo = crud.update_todo(db, todo_id=request.parameter.id, title=request.parameter.title,
                             description=request.parameter.description, category=request.parameter.category, completed=request.parameter.completed)
    return Response(code=200, status='ok', message='"Todo Updated successfully', result=_todo).dict(exclude_none=True)

@router.patch('/mark-complete')
async def mark_complete(request: RequestTodo, db: Session = Depends(get_db)):
    _todo = crud.mark_complete(db, todo_id=request.parameter.id)
    return Response(code=200, status='ok', message='"Todo completed successfully', result=_todo).dict(exclude_none=True)


@router.delete("/{id}")
async def delete_todo(id: int, db: Session = Depends(get_db)):
    crud.remove_todo(db, todo_id=id)
    return Response(code=200, status='ok', message='"Todo Deleted successfully').dict(exclude_none=True)

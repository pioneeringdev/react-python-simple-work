from sqlalchemy.orm import Session
from models import Todo
from schemas import TodoScehema


def get_all_todos(db: Session, skip: int = 0, limit: int = 100):
    return db.query(Todo).offset(skip).limit(limit).all()


def get_todo_by_id(db: Session, todo_id: int):
    return db.query(Todo).filter(Todo.id == todo_id).first()


def create_todo(db: Session, todo: TodoScehema):
    _todo = Todo(title=todo.title, description=todo.description,
                 category=todo.category, completed=todo.completed)
    db.add(_todo)
    db.commit()
    db.refresh(_todo)
    return _todo


def remove_todo(db: Session, todo_id: int):
    _todo = get_todo_by_id(db=db, todo_id=todo_id)
    db.delete(_todo)
    db.commit()


def update_todo(db: Session, todo_id: int, title: str, description: str, category: str, completed: bool):
    _todo = get_todo_by_id(db=db, todo_id=todo_id)
    _todo.title = title
    _todo.category = category
    _todo.description = description
    _todo.completed = completed
    db.commit()
    db.refresh(_todo)
    return _todo

def mark_complete(db: Session, todo_id: int, ):
    _todo = get_todo_by_id(db=db, todo_id=todo_id)
    _todo.completed = True
    db.commit()
    db.refresh(_todo)
    return _todo
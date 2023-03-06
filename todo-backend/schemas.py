from typing import List, Optional, Generic, TypeVar
from pydantic import BaseModel, Field
from pydantic.generics import GenericModel

T = TypeVar('T')


class TodoScehema(BaseModel):
    id: Optional[int] = None
    title: Optional[str] = None
    description: Optional[str] = None
    category: Optional[str] = None
    completed: Optional[bool] = None


class RequestTodo(BaseModel):
    parameter: TodoScehema = Field(...)


class Response (GenericModel, Generic[T]):
    code: str
    status: str
    message: str
    result: Optional[T]

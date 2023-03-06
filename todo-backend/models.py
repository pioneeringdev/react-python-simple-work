from sqlalchemy import Column, Integer, String, Boolean

from config import Base


class Todo(Base):
    __tablename__ = "todo"
    id = Column(Integer, primary_key=True)
    title = Column(String)
    description = Column(String)
    category = Column(String)
    completed = Column(Boolean)

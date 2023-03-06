from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from config import engine
import models
import router

models.Base.metadata.create_all(bind=engine)

app = FastAPI()

origins = [
    "http://localhost:3000",
    "https://localhost:*",
    "http://localhost",
    "http://localhost:8080",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
async def greetings():
    return {"Meesage": "Hello world"}

app.include_router(router.router, prefix="/todo", tags=['todo'])
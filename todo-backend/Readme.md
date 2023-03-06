# TodoApp

Todo app for test completion

## Getting Started

1. Install Required Softwares
   - Python3 from (https://www.python.org/)
   - Postgressql from (https://www.postgresql.org/download/)
2. Update PIP

```zsh
python -m pip install --upgrade pip
```

3. Create Virtual ENV

```zsh
python3 -m venv .venv
```

4. Activate ENV

```zsh
source ./venv/bin/activate
```

5. Install dependencies

```zsh
pip install fastapi uvicorn sqlalchemy
```

6. Start Uvicorn server

```zsh
uvicorn main:app --reload
```

7. Open local API [http://localhost:8000/todo](http://localhost:8000/todo)

8. Files Structure
   - main.py (Entry point of app)
   - config.py (Configuration of database)
   - models.py (Contain Model of todo )
   - schemas.py (it uses model and create schema for todo data)
   - crud.py (All CRUD functions for todo app)
   - router.py (Use crud function and create different routes and endpoint)

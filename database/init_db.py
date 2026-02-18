from database import (
    create_users_table,
    create_todo_tasks_table,
    create_goals_table,
    create_goal_tasks_table
)

create_users_table()
create_todo_tasks_table()
create_goals_table()
create_goal_tasks_table()

print("Database initialized successfully")

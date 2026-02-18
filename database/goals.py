from database import get_connection

def create_goal(userID, title, description, startDate, endDate):
    conn = get_connection()
    cursor = conn.cursor()
    cursor.execute(
        "INSERT INTO goals (userID, goalTitle, description, startDate, endDate, status) VALUES (?, ?, ?, ?, ?, ?)",
        (userID, title, description, startDate, endDate, "In Progress")
    )
    conn.commit()
    conn.close()


def add_goal_task(goalID, taskName):
    conn = get_connection()
    cursor = conn.cursor()
    cursor.execute(
        "INSERT INTO goal_tasks (goalID, taskName, status) VALUES (?, ?, ?)",
        (goalID, taskName, "Pending")
    )
    conn.commit()
    conn.close()


def complete_goal_task(goalTaskID):
    conn = get_connection()
    cursor = conn.cursor()
    cursor.execute(
        "UPDATE goal_tasks SET status='Completed', completionDate=datetime('now') WHERE goalTaskID=?",
        (goalTaskID,)
    )
    conn.commit()
    conn.close()


def calculate_goal_progress(goalID):
    conn = get_connection()
    cursor = conn.cursor()

    cursor.execute(
        "SELECT COUNT(*) FROM goal_tasks WHERE goalID=?",
        (goalID,)
    )
    total = cursor.fetchone()[0]

    cursor.execute(
        "SELECT COUNT(*) FROM goal_tasks WHERE goalID=? AND status='Completed'",
        (goalID,)
    )
    completed = cursor.fetchone()[0]

    conn.close()

    if total == 0:
        return 0

    return (completed / total) * 100



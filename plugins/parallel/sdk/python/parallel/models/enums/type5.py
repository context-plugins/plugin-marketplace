from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Type5(str, Enum):
    """Event type; always starts with 'task_run.progress_msg'."""

    TASK_RUN_PROGRESS_MSG_PLAN = "task_run.progress_msg.plan"
    TASK_RUN_PROGRESS_MSG_SEARCH = "task_run.progress_msg.search"
    TASK_RUN_PROGRESS_MSG_RESULT = "task_run.progress_msg.result"
    TASK_RUN_PROGRESS_MSG_TOOL_CALL = "task_run.progress_msg.tool_call"
    TASK_RUN_PROGRESS_MSG_EXEC_STATUS = "task_run.progress_msg.exec_status"

    __str__ = str.__str__


Type5OrStr: TypeAlias = Annotated[Type5 | str, open_enum_validator(Type5)]

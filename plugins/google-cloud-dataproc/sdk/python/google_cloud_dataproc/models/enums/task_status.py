from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class TaskStatus(str, Enum):
    TASK_STATUS_UNSPECIFIED = "TASK_STATUS_UNSPECIFIED"
    TASK_STATUS_RUNNING = "TASK_STATUS_RUNNING"
    TASK_STATUS_SUCCESS = "TASK_STATUS_SUCCESS"
    TASK_STATUS_FAILED = "TASK_STATUS_FAILED"
    TASK_STATUS_KILLED = "TASK_STATUS_KILLED"
    TASK_STATUS_PENDING = "TASK_STATUS_PENDING"

    __str__ = str.__str__


TaskStatusOrStr: TypeAlias = Annotated[TaskStatus | str, open_enum_validator(TaskStatus)]

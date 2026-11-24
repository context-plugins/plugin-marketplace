from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Status1ParallelAiTasksApi(str, Enum):
    QUEUED = "queued"
    ACTION_REQUIRED = "action_required"
    RUNNING = "running"
    COMPLETED = "completed"
    FAILED = "failed"
    CANCELLING = "cancelling"
    CANCELLED = "cancelled"

    __str__ = str.__str__


Status1ParallelAiTasksApiOrStr: TypeAlias = Annotated[
    Status1ParallelAiTasksApi | str, open_enum_validator(Status1ParallelAiTasksApi)
]

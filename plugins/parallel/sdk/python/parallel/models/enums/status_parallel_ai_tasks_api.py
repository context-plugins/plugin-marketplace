from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class StatusParallelAiTasksApi(str, Enum):
    """Status of the run."""

    QUEUED = "queued"
    ACTION_REQUIRED = "action_required"
    RUNNING = "running"
    COMPLETED = "completed"
    FAILED = "failed"
    CANCELLING = "cancelling"
    CANCELLED = "cancelled"

    __str__ = str.__str__


StatusParallelAiTasksApiOrStr: TypeAlias = Annotated[
    StatusParallelAiTasksApi | str, open_enum_validator(StatusParallelAiTasksApi)
]

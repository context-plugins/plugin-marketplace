from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class TaskTaskStatus(str, Enum):
    PENDING = "PENDING"
    PROCESSING = "PROCESSING"
    COMPLETED = "COMPLETED"
    FAILED = "FAILED"

    __str__ = str.__str__


TaskTaskStatusOrStr: TypeAlias = Annotated[TaskTaskStatus | str, open_enum_validator(TaskTaskStatus)]

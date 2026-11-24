from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Status1ParallelAiResponsesApi(str, Enum):
    COMPLETED = "completed"
    FAILED = "failed"
    IN_PROGRESS = "in_progress"
    CANCELLED = "cancelled"
    QUEUED = "queued"
    INCOMPLETE = "incomplete"

    __str__ = str.__str__


Status1ParallelAiResponsesApiOrStr: TypeAlias = Annotated[
    Status1ParallelAiResponsesApi | str, open_enum_validator(Status1ParallelAiResponsesApi)
]

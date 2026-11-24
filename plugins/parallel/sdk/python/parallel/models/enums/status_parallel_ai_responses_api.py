from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class StatusParallelAiResponsesApi(str, Enum):
    IN_PROGRESS = "in_progress"
    COMPLETED = "completed"
    INCOMPLETE = "incomplete"

    __str__ = str.__str__


StatusParallelAiResponsesApiOrStr: TypeAlias = Annotated[
    StatusParallelAiResponsesApi | str, open_enum_validator(StatusParallelAiResponsesApi)
]

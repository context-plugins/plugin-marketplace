from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class StatusParallelAiMemoryApi(str, Enum):
    """Current status of the monitor."""

    ACTIVE = "active"
    CANCELLED = "cancelled"

    __str__ = str.__str__


StatusParallelAiMemoryApiOrStr: TypeAlias = Annotated[
    StatusParallelAiMemoryApi | str, open_enum_validator(StatusParallelAiMemoryApi)
]

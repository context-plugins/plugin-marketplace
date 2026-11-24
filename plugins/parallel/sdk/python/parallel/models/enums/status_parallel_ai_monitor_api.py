from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class StatusParallelAiMonitorApi(str, Enum):
    """Status of the monitor."""

    ACTIVE = "active"
    CANCELLED = "cancelled"

    __str__ = str.__str__


StatusParallelAiMonitorApiOrStr: TypeAlias = Annotated[
    StatusParallelAiMonitorApi | str, open_enum_validator(StatusParallelAiMonitorApi)
]

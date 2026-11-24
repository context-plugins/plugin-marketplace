from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class TraceStatus(str, Enum):
    PENDING = "pending"
    INITIALIZING = "initializing"
    RUNNING = "running"
    COMPLETED = "completed"
    ERROR = "error"
    CANCELLING = "cancelling"
    CANCELLED = "cancelled"

    __str__ = str.__str__


TraceStatusOrStr: TypeAlias = Annotated[TraceStatus | str, open_enum_validator(TraceStatus)]

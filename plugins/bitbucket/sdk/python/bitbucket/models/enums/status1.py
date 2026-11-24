from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Status1(str, Enum):
    PARSING = "PARSING"
    PENDING = "PENDING"
    PAUSED = "PAUSED"
    HALTED = "HALTED"
    BUILDING = "BUILDING"
    ERROR = "ERROR"
    PASSED = "PASSED"
    FAILED = "FAILED"
    STOPPED = "STOPPED"
    UNKNOWN = "UNKNOWN"

    __str__ = str.__str__


Status1OrStr: TypeAlias = Annotated[Status1 | str, open_enum_validator(Status1)]

from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Status1AgentReadyScansApi(str, Enum):
    """Outcome of a single check."""

    PASS = "pass"
    FAIL = "fail"
    WARN = "warn"
    ERROR = "error"

    __str__ = str.__str__


Status1AgentReadyScansApiOrStr: TypeAlias = Annotated[
    Status1AgentReadyScansApi | str, open_enum_validator(Status1AgentReadyScansApi)
]

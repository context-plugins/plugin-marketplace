from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Status4(str, Enum):
    """The current status of the execution."""

    SUCCEEDED = "SUCCEEDED"
    FAILED = "FAILED"
    TIMED_OUT = "TIMED_OUT"

    __str__ = str.__str__


Status4OrStr: TypeAlias = Annotated[Status4 | str, open_enum_validator(Status4)]

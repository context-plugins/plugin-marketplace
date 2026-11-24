from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Status1(str, Enum):
    """The close status that must match the close status of an execution for it to meet the criteria of this filter."""

    COMPLETED = "COMPLETED"
    FAILED = "FAILED"
    CANCELED = "CANCELED"
    TERMINATED = "TERMINATED"
    CONTINUED_AS_NEW = "CONTINUED_AS_NEW"
    TIMED_OUT = "TIMED_OUT"

    __str__ = str.__str__


Status1OrStr: TypeAlias = Annotated[Status1 | str, open_enum_validator(Status1)]

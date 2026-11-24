from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ExecutionStatus(str, Enum):
    """The current status of the execution."""

    OPEN = "OPEN"
    CLOSED = "CLOSED"

    __str__ = str.__str__


ExecutionStatusOrStr: TypeAlias = Annotated[ExecutionStatus | str, open_enum_validator(ExecutionStatus)]

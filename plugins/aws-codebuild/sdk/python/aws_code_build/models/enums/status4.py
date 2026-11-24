from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Status4(str, Enum):
    """The status of this report."""

    GENERATING = "GENERATING"
    SUCCEEDED = "SUCCEEDED"
    FAILED = "FAILED"
    INCOMPLETE = "INCOMPLETE"
    DELETING = "DELETING"

    __str__ = str.__str__


Status4OrStr: TypeAlias = Annotated[Status4 | str, open_enum_validator(Status4)]

from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Status5(str, Enum):
    """The status of the batch builds to retrieve. Only batch builds that have this status will be retrieved."""

    SUCCEEDED = "SUCCEEDED"
    FAILED = "FAILED"
    FAULT = "FAULT"
    TIMED_OUT = "TIMED_OUT"
    IN_PROGRESS = "IN_PROGRESS"
    STOPPED = "STOPPED"

    __str__ = str.__str__


Status5OrStr: TypeAlias = Annotated[Status5 | str, open_enum_validator(Status5)]

from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class JobStatus3(str, Enum):
    """The current status of the events detection job."""

    SUBMITTED = "SUBMITTED"
    IN_PROGRESS = "IN_PROGRESS"
    COMPLETED = "COMPLETED"
    FAILED = "FAILED"
    STOP_REQUESTED = "STOP_REQUESTED"
    STOPPED = "STOPPED"

    __str__ = str.__str__


JobStatus3OrStr: TypeAlias = Annotated[JobStatus3 | str, open_enum_validator(JobStatus3)]

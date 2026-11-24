from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class JobStatus1(str, Enum):
    """The current status of the dominant language detection job. If the status is FAILED, the Message field shows the
    reason for the failure."""

    SUBMITTED = "SUBMITTED"
    IN_PROGRESS = "IN_PROGRESS"
    COMPLETED = "COMPLETED"
    FAILED = "FAILED"
    STOP_REQUESTED = "STOP_REQUESTED"
    STOPPED = "STOPPED"

    __str__ = str.__str__


JobStatus1OrStr: TypeAlias = Annotated[JobStatus1 | str, open_enum_validator(JobStatus1)]

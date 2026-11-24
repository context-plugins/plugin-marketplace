from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class JobStatus(str, Enum):
    """The current status of the document classification job. If the status is FAILED, the Message field shows the
    reason for the failure."""

    SUBMITTED = "SUBMITTED"
    IN_PROGRESS = "IN_PROGRESS"
    COMPLETED = "COMPLETED"
    FAILED = "FAILED"
    STOP_REQUESTED = "STOP_REQUESTED"
    STOPPED = "STOPPED"

    __str__ = str.__str__


JobStatusOrStr: TypeAlias = Annotated[JobStatus | str, open_enum_validator(JobStatus)]

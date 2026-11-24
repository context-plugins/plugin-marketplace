from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class JobStatus32(str, Enum):
    """Either STOP_REQUESTED if the job is currently running, or STOPPED if the job was previously stopped with the
    StopSentimentDetectionJob operation."""

    SUBMITTED = "SUBMITTED"
    IN_PROGRESS = "IN_PROGRESS"
    COMPLETED = "COMPLETED"
    FAILED = "FAILED"
    STOP_REQUESTED = "STOP_REQUESTED"
    STOPPED = "STOPPED"

    __str__ = str.__str__


JobStatus32OrStr: TypeAlias = Annotated[JobStatus32 | str, open_enum_validator(JobStatus32)]

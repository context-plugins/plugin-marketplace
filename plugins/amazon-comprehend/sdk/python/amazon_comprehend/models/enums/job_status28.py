from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class JobStatus28(str, Enum):
    """Either STOP_REQUESTED if the job is currently running, or STOPPED if the job was previously stopped with the
    StopEntitiesDetectionJob operation."""

    SUBMITTED = "SUBMITTED"
    IN_PROGRESS = "IN_PROGRESS"
    COMPLETED = "COMPLETED"
    FAILED = "FAILED"
    STOP_REQUESTED = "STOP_REQUESTED"
    STOPPED = "STOPPED"

    __str__ = str.__str__


JobStatus28OrStr: TypeAlias = Annotated[JobStatus28 | str, open_enum_validator(JobStatus28)]

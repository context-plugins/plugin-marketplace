from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class JobStatus8(str, Enum):
    """The current status of the topic detection job. If the status is Failed, the reason for the failure is shown in
    the Message field."""

    SUBMITTED = "SUBMITTED"
    IN_PROGRESS = "IN_PROGRESS"
    COMPLETED = "COMPLETED"
    FAILED = "FAILED"
    STOP_REQUESTED = "STOP_REQUESTED"
    STOPPED = "STOPPED"

    __str__ = str.__str__


JobStatus8OrStr: TypeAlias = Annotated[JobStatus8 | str, open_enum_validator(JobStatus8)]

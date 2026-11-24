from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class JobStatus2(str, Enum):
    """The current status of the entities detection job. If the status is FAILED, the Message field shows the reason for
    the failure."""

    SUBMITTED = "SUBMITTED"
    IN_PROGRESS = "IN_PROGRESS"
    COMPLETED = "COMPLETED"
    FAILED = "FAILED"
    STOP_REQUESTED = "STOP_REQUESTED"
    STOPPED = "STOPPED"

    __str__ = str.__str__


JobStatus2OrStr: TypeAlias = Annotated[JobStatus2 | str, open_enum_validator(JobStatus2)]

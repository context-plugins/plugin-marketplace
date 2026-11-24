from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class JobStatus17(str, Enum):
    """Filters the list of topic detection jobs based on job status. Returns only jobs with the specified status."""

    SUBMITTED = "SUBMITTED"
    IN_PROGRESS = "IN_PROGRESS"
    COMPLETED = "COMPLETED"
    FAILED = "FAILED"
    STOP_REQUESTED = "STOP_REQUESTED"
    STOPPED = "STOPPED"

    __str__ = str.__str__


JobStatus17OrStr: TypeAlias = Annotated[JobStatus17 | str, open_enum_validator(JobStatus17)]

from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class JobStatus9(str, Enum):
    """Filters the list based on job status. Returns only jobs with the specified status."""

    SUBMITTED = "SUBMITTED"
    IN_PROGRESS = "IN_PROGRESS"
    COMPLETED = "COMPLETED"
    FAILED = "FAILED"
    STOP_REQUESTED = "STOP_REQUESTED"
    STOPPED = "STOPPED"

    __str__ = str.__str__


JobStatus9OrStr: TypeAlias = Annotated[JobStatus9 | str, open_enum_validator(JobStatus9)]

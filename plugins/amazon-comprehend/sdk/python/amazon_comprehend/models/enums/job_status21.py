from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class JobStatus21(str, Enum):
    """The status of the events detection job."""

    SUBMITTED = "SUBMITTED"
    IN_PROGRESS = "IN_PROGRESS"
    COMPLETED = "COMPLETED"
    FAILED = "FAILED"
    STOP_REQUESTED = "STOP_REQUESTED"
    STOPPED = "STOPPED"

    __str__ = str.__str__


JobStatus21OrStr: TypeAlias = Annotated[JobStatus21 | str, open_enum_validator(JobStatus21)]

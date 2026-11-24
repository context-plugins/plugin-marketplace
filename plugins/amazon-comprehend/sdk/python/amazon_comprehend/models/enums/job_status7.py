from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class JobStatus7(str, Enum):
    """The current status of the targeted sentiment detection job. If the status is FAILED, the Messages field shows the
    reason for the failure."""

    SUBMITTED = "SUBMITTED"
    IN_PROGRESS = "IN_PROGRESS"
    COMPLETED = "COMPLETED"
    FAILED = "FAILED"
    STOP_REQUESTED = "STOP_REQUESTED"
    STOPPED = "STOPPED"

    __str__ = str.__str__


JobStatus7OrStr: TypeAlias = Annotated[JobStatus7 | str, open_enum_validator(JobStatus7)]

from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class JobStatus6(str, Enum):
    """The current status of the sentiment detection job. If the status is FAILED, the Messages field shows the reason
    for the failure."""

    SUBMITTED = "SUBMITTED"
    IN_PROGRESS = "IN_PROGRESS"
    COMPLETED = "COMPLETED"
    FAILED = "FAILED"
    STOP_REQUESTED = "STOP_REQUESTED"
    STOPPED = "STOPPED"

    __str__ = str.__str__


JobStatus6OrStr: TypeAlias = Annotated[JobStatus6 | str, open_enum_validator(JobStatus6)]

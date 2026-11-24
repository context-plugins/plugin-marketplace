from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class JobStatus1(str, Enum):
    """The current status of the person tracking job."""

    IN_PROGRESS = "IN_PROGRESS"
    SUCCEEDED = "SUCCEEDED"
    FAILED = "FAILED"

    __str__ = str.__str__


JobStatus1OrStr: TypeAlias = Annotated[JobStatus1 | str, open_enum_validator(JobStatus1)]

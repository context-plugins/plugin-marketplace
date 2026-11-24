from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class JobStatus2(str, Enum):
    """Current status of the segment detection job."""

    IN_PROGRESS = "IN_PROGRESS"
    SUCCEEDED = "SUCCEEDED"
    FAILED = "FAILED"

    __str__ = str.__str__


JobStatus2OrStr: TypeAlias = Annotated[JobStatus2 | str, open_enum_validator(JobStatus2)]

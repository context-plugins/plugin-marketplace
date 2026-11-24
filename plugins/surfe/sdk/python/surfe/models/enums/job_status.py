from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class JobStatus(str, Enum):
    PENDING = "PENDING"
    IN_PROGRESS = "IN_PROGRESS"
    COMPLETED = "COMPLETED"
    FAILED = "FAILED"

    __str__ = str.__str__


JobStatusOrStr: TypeAlias = Annotated[JobStatus | str, open_enum_validator(JobStatus)]

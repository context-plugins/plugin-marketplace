from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class JobStatus(str, Enum):
    PENDING = "pending"
    RUNNING = "running"
    COMPLETED = "completed"
    ERROR = "error"
    CANCELLING = "cancelling"
    CANCELLED = "cancelled"

    __str__ = str.__str__


JobStatusOrStr: TypeAlias = Annotated[JobStatus | str, open_enum_validator(JobStatus)]

from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class JobJobStatus(str, Enum):
    PENDING = "PENDING"
    PROCESSING = "PROCESSING"
    COMPLETED = "COMPLETED"
    FAILED = "FAILED"

    __str__ = str.__str__


JobJobStatusOrStr: TypeAlias = Annotated[JobJobStatus | str, open_enum_validator(JobJobStatus)]

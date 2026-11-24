from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Status1StayingJobsApi(str, Enum):
    PENDING = "pending"
    RUNNING = "running"

    __str__ = str.__str__


Status1StayingJobsApiOrStr: TypeAlias = Annotated[
    Status1StayingJobsApi | str, open_enum_validator(Status1StayingJobsApi)
]

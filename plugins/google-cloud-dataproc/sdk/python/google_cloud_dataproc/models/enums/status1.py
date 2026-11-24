from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Status1(str, Enum):
    JOB_EXECUTION_STATUS_UNSPECIFIED = "JOB_EXECUTION_STATUS_UNSPECIFIED"
    JOB_EXECUTION_STATUS_RUNNING = "JOB_EXECUTION_STATUS_RUNNING"
    JOB_EXECUTION_STATUS_SUCCEEDED = "JOB_EXECUTION_STATUS_SUCCEEDED"
    JOB_EXECUTION_STATUS_FAILED = "JOB_EXECUTION_STATUS_FAILED"
    JOB_EXECUTION_STATUS_UNKNOWN = "JOB_EXECUTION_STATUS_UNKNOWN"

    __str__ = str.__str__


Status1OrStr: TypeAlias = Annotated[Status1 | str, open_enum_validator(Status1)]

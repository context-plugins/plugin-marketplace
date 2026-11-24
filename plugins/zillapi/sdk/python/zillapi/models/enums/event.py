from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Event(str, Enum):
    JOB_SUCCEEDED = "job.succeeded"
    JOB_FAILED = "job.failed"
    JOB_TIMED_OUT = "job.timed_out"
    JOB_ABORTED = "job.aborted"

    __str__ = str.__str__


EventOrStr: TypeAlias = Annotated[Event | str, open_enum_validator(Event)]

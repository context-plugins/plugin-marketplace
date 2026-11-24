from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class StatusZillapiZillowPropertyDataJobsApi(str, Enum):
    QUEUED = "queued"
    RUNNING = "running"
    SUCCEEDED = "succeeded"
    FAILED = "failed"
    TIMED_OUT = "timed_out"
    ABORTED = "aborted"

    __str__ = str.__str__


StatusZillapiZillowPropertyDataJobsApiOrStr: TypeAlias = Annotated[
    StatusZillapiZillowPropertyDataJobsApi | str, open_enum_validator(StatusZillapiZillowPropertyDataJobsApi)
]

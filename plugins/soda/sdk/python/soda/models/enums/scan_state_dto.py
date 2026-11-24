from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ScanStateDto(str, Enum):
    QUEUING = "queuing"
    EXECUTING = "executing"
    STARTED = "started"
    CANCELATION_REQUESTED = "cancelationRequested"
    TIME_OUT_REQUESTED = "timeOutRequested"
    CANCELED = "canceled"
    TIMED_OUT = "timedOut"
    FAILED = "failed"
    COMPLETED_WITH_ERRORS = "completedWithErrors"
    COMPLETED_WITH_FAILURES = "completedWithFailures"
    COMPLETED_WITH_WARNINGS = "completedWithWarnings"
    COMPLETED = "completed"

    __str__ = str.__str__


ScanStateDtoOrStr: TypeAlias = Annotated[ScanStateDto | str, open_enum_validator(ScanStateDto)]

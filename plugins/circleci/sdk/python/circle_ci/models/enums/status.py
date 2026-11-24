from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Status(str, Enum):
    """The build status"""

    RETRIED = "retried"
    CANCELED = "canceled"
    INFRASTRUCTURE_FAIL = "infrastructure_fail"
    TIMEDOUT = "timedout"
    NOT_RUN = "not_run"
    RUNNING = "running"
    FAILED = "failed"
    QUEUED = "queued"
    SCHEDULED = "scheduled"
    NOT_RUNNING = "not_running"
    NO_TESTS = "no_tests"
    FIXED = "fixed"
    SUCCESS = "success"

    __str__ = str.__str__


StatusOrStr: TypeAlias = Annotated[Status | str, open_enum_validator(Status)]

from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class StatusFilter(str, Enum):
    """If specified, only list the executions whose current execution status matches the given filter. If you provide a
    PENDING_REDRIVE statusFilter, you must specify mapRunArn. For more information, see Child workflow execution redrive
    behaviour in the Step Functions Developer Guide. If you provide a stateMachineArn and a PENDING_REDRIVE
    statusFilter, the API returns a validation exception."""

    RUNNING = "RUNNING"
    SUCCEEDED = "SUCCEEDED"
    FAILED = "FAILED"
    TIMED_OUT = "TIMED_OUT"
    ABORTED = "ABORTED"
    PENDING_REDRIVE = "PENDING_REDRIVE"

    __str__ = str.__str__


StatusFilterOrStr: TypeAlias = Annotated[StatusFilter | str, open_enum_validator(StatusFilter)]

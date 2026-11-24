from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Status1DoiTCloudFlowApi(str, Enum):
    """Current node status."""

    PENDING = "pending"
    IN_PROGRESS = "in-progress"
    COMPLETE = "complete"
    COMPLETED_WITH_ERRORS = "completed-with-errors"
    FAILED = "failed"
    REJECTED = "rejected"
    APPROVAL_TIMED_OUT = "approval-timed-out"
    PENDING_APPROVAL = "pending-approval"
    SLEEPING = "sleeping"
    SKIPPED = "skipped"
    STOPPED = "stopped"

    __str__ = str.__str__


Status1DoiTCloudFlowApiOrStr: TypeAlias = Annotated[
    Status1DoiTCloudFlowApi | str, open_enum_validator(Status1DoiTCloudFlowApi)
]

from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class StatusDoiTCloudFlowApi(str, Enum):
    PENDING = "pending"
    RUNNING = "running"
    COMPLETE = "complete"
    COMPLETED_WITH_ERRORS = "completed-with-errors"
    PENDING_APPROVAL = "pending-approval"
    FAILED = "failed"
    SLEEPING = "sleeping"
    STOPPED = "stopped"

    __str__ = str.__str__


StatusDoiTCloudFlowApiOrStr: TypeAlias = Annotated[
    StatusDoiTCloudFlowApi | str, open_enum_validator(StatusDoiTCloudFlowApi)
]

from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class LastExecutionStatus(str, Enum):
    PENDING = "pending"
    RUNNING = "running"
    COMPLETE = "complete"
    PENDING_APPROVAL = "pending-approval"
    FAILED = "failed"
    SLEEPING = "sleeping"
    STOPPED = "stopped"

    __str__ = str.__str__


LastExecutionStatusOrStr: TypeAlias = Annotated[LastExecutionStatus | str, open_enum_validator(LastExecutionStatus)]

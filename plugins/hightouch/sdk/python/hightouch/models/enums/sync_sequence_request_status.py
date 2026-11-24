from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class SyncSequenceRequestStatus(str, Enum):
    PENDING = "pending"
    RUNNING = "running"
    DONE = "done"
    FAILED = "failed"
    CANCELLED = "cancelled"

    __str__ = str.__str__


SyncSequenceRequestStatusOrStr: TypeAlias = Annotated[
    SyncSequenceRequestStatus | str, open_enum_validator(SyncSequenceRequestStatus)
]

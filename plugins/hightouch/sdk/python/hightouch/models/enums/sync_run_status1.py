from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class SyncRunStatus1(str, Enum):
    """The status of sync run"""

    CANCELLED = "cancelled"
    FAILED = "failed"
    QUEUED = "queued"
    SUCCESS = "success"
    WARNING = "warning"
    QUERYING = "querying"
    PROCESSING = "processing"
    REPORTING = "reporting"
    INTERRUPTED = "interrupted"

    __str__ = str.__str__


SyncRunStatus1OrStr: TypeAlias = Annotated[SyncRunStatus1 | str, open_enum_validator(SyncRunStatus1)]

from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class SyncRunStatus(str, Enum):
    """The status of sync runs"""

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


SyncRunStatusOrStr: TypeAlias = Annotated[SyncRunStatus | str, open_enum_validator(SyncRunStatus)]

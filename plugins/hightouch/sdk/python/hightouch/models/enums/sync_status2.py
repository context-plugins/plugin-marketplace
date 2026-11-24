from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class SyncStatus2(str, Enum):
    """The overall status of the sync"""

    DISABLED = "disabled"
    PENDING = "pending"
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


SyncStatus2OrStr: TypeAlias = Annotated[SyncStatus2 | str, open_enum_validator(SyncStatus2)]

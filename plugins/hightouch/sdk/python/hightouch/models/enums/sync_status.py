from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class SyncStatus(str, Enum):
    """SyncStatus"""

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


SyncStatusOrStr: TypeAlias = Annotated[SyncStatus | str, open_enum_validator(SyncStatus)]

from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class CacheReportStatus(str, Enum):
    """The status of the specified cache report."""

    IN_PROGRESS = "IN_PROGRESS"
    COMPLETED = "COMPLETED"
    CANCELED = "CANCELED"
    FAILED = "FAILED"
    ERROR = "ERROR"

    __str__ = str.__str__


CacheReportStatusOrStr: TypeAlias = Annotated[CacheReportStatus | str, open_enum_validator(CacheReportStatus)]

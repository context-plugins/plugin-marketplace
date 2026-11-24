from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class SegmentStatus(str, Enum):
    """The status of the segment's most recent calculation.<br>``pending`` - The segment has not been calculated
    yet.<br>``processing`` - The calculation is in progress, and has not completed.<br>``completed`` - The calculation
    was successful.<br>``failed`` - Something went wrong during the calculation."""

    PENDING = "pending"
    PROCESSING = "processing"
    COMPLETED = "completed"
    FAILED = "failed"

    __str__ = str.__str__


SegmentStatusOrStr: TypeAlias = Annotated[SegmentStatus | str, open_enum_validator(SegmentStatus)]

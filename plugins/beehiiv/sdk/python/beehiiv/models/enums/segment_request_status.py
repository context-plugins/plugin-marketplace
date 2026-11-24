from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class SegmentRequestStatus(str, Enum):
    PENDING = "pending"
    PROCESSING = "processing"
    COMPLETED = "completed"
    FAILED = "failed"
    ALL = "all"

    __str__ = str.__str__


SegmentRequestStatusOrStr: TypeAlias = Annotated[SegmentRequestStatus | str, open_enum_validator(SegmentRequestStatus)]

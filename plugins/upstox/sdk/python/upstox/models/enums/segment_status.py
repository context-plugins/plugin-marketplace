from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class SegmentStatus(str, Enum):
    ACTIVE = "ACTIVE"
    INACTIVE = "INACTIVE"

    __str__ = str.__str__


SegmentStatusOrStr: TypeAlias = Annotated[SegmentStatus | str, open_enum_validator(SegmentStatus)]

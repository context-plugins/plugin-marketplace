from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class SegmentType(str, Enum):
    """The type of segment.<br>``dynamic`` - The segment is recalculated at set intervals.<br>``static`` - The segment
    is calculated once at creation.<br>``manual`` - The segment is not calculated at all. The results are created via
    CSV."""

    DYNAMIC = "dynamic"
    STATIC = "static"
    MANUAL = "manual"
    ALL = "all"

    __str__ = str.__str__


SegmentTypeOrStr: TypeAlias = Annotated[SegmentType | str, open_enum_validator(SegmentType)]

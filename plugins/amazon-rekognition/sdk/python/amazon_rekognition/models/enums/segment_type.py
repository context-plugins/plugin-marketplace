from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class SegmentType(str, Enum):
    TECHNICAL_CUE = "TECHNICAL_CUE"
    SHOT = "SHOT"

    __str__ = str.__str__


SegmentTypeOrStr: TypeAlias = Annotated[SegmentType | str, open_enum_validator(SegmentType)]

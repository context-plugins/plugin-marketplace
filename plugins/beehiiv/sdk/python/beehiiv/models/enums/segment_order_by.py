from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class SegmentOrderBy(str, Enum):
    CREATED = "created"
    LAST_CALCULATED = "last_calculated"

    __str__ = str.__str__


SegmentOrderByOrStr: TypeAlias = Annotated[SegmentOrderBy | str, open_enum_validator(SegmentOrderBy)]

from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class SegmentsExpandItems(str, Enum):
    STATS = "stats"

    __str__ = str.__str__


SegmentsExpandItemsOrStr: TypeAlias = Annotated[SegmentsExpandItems | str, open_enum_validator(SegmentsExpandItems)]

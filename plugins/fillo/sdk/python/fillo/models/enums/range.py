from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Range(str, Enum):
    _7D = "7d"
    _30D = "30d"
    _90D = "90d"
    ALL = "all"

    __str__ = str.__str__


RangeOrStr: TypeAlias = Annotated[Range | str, open_enum_validator(Range)]

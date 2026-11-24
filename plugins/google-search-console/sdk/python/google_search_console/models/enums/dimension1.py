from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Dimension1(str, Enum):
    DATE = "DATE"
    QUERY = "QUERY"
    PAGE = "PAGE"
    COUNTRY = "COUNTRY"
    DEVICE = "DEVICE"
    SEARCH_APPEARANCE = "SEARCH_APPEARANCE"
    HOUR = "HOUR"

    __str__ = str.__str__


Dimension1OrStr: TypeAlias = Annotated[Dimension1 | str, open_enum_validator(Dimension1)]

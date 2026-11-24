from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Dimension(str, Enum):
    QUERY = "QUERY"
    PAGE = "PAGE"
    COUNTRY = "COUNTRY"
    DEVICE = "DEVICE"
    SEARCH_APPEARANCE = "SEARCH_APPEARANCE"

    __str__ = str.__str__


DimensionOrStr: TypeAlias = Annotated[Dimension | str, open_enum_validator(Dimension)]

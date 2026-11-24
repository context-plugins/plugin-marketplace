from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Type(str, Enum):
    SEARCH = "search"
    BATCH_DETAIL = "batch_detail"
    CHAINED_SEARCH_DETAIL = "chained_search_detail"
    BUILDING_UNITS = "building_units"

    __str__ = str.__str__


TypeOrStr: TypeAlias = Annotated[Type | str, open_enum_validator(Type)]

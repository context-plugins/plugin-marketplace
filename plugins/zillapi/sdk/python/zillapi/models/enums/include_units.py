from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class IncludeUnits(str, Enum):
    ALL = "all"
    FOR_SALE = "for_sale"
    FOR_RENT = "for_rent"
    RECENTLY_SOLD = "recently_sold"
    OFF_MARKET = "off_market"

    __str__ = str.__str__


IncludeUnitsOrStr: TypeAlias = Annotated[IncludeUnits | str, open_enum_validator(IncludeUnits)]

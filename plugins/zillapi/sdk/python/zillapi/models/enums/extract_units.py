from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ExtractUnits(str, Enum):
    DISABLED = "disabled"
    ALL = "all"
    FOR_SALE = "for_sale"
    RECENTLY_SOLD = "recently_sold"
    FOR_RENT = "for_rent"
    OFF_MARKET = "off_market"

    __str__ = str.__str__


ExtractUnitsOrStr: TypeAlias = Annotated[ExtractUnits | str, open_enum_validator(ExtractUnits)]

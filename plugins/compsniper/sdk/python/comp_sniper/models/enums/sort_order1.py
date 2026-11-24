from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class SortOrder1(str, Enum):
    ENDED_RECENTLY = "endedRecently"
    TIME_NEWLY_LISTED = "timeNewlyListed"
    PRICE_PLUS_POSTAGE_LOWEST = "pricePlusPostageLowest"
    PRICE_PLUS_POSTAGE_HIGHEST = "pricePlusPostageHighest"

    __str__ = str.__str__


SortOrder1OrStr: TypeAlias = Annotated[SortOrder1 | str, open_enum_validator(SortOrder1)]

from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class HolidayType(str, Enum):
    ALL = "ALL"
    SETTLEMENT_HOLIDAY = "SETTLEMENT_HOLIDAY"
    TRADING_HOLIDAY = "TRADING_HOLIDAY"
    SPECIAL_TIMING = "SPECIAL_TIMING"

    __str__ = str.__str__


HolidayTypeOrStr: TypeAlias = Annotated[HolidayType | str, open_enum_validator(HolidayType)]

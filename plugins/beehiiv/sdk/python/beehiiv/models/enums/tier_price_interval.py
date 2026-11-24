from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class TierPriceInterval(str, Enum):
    MONTH = "month"
    QUARTER = "quarter"
    YEAR = "year"
    ONE_TIME = "one_time"
    DONATION = "donation"

    __str__ = str.__str__


TierPriceIntervalOrStr: TypeAlias = Annotated[TierPriceInterval | str, open_enum_validator(TierPriceInterval)]

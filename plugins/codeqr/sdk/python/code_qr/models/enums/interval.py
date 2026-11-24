from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Interval(str, Enum):
    """The interval to retrieve analytics for. Takes precedence over start and end."""

    _1H = "1h"
    _24H = "24h"
    _7D = "7d"
    _30D = "30d"
    _90D = "90d"
    YTD = "ytd"
    _1Y = "1y"
    ALL = "all"
    ALL_UNFILTERED = "all_unfiltered"

    __str__ = str.__str__


IntervalOrStr: TypeAlias = Annotated[Interval | str, open_enum_validator(Interval)]

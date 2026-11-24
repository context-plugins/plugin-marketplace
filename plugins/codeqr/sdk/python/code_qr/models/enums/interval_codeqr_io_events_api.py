from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class IntervalCodeqrIoEventsApi(str, Enum):
    """The interval to retrieve events for. Takes precedence over start and end. If undefined, defaults to 24h."""

    _24H = "24h"
    _7D = "7d"
    _30D = "30d"
    _90D = "90d"
    YTD = "ytd"
    _1Y = "1y"
    ALL = "all"

    __str__ = str.__str__


IntervalCodeqrIoEventsApiOrStr: TypeAlias = Annotated[
    IntervalCodeqrIoEventsApi | str, open_enum_validator(IntervalCodeqrIoEventsApi)
]

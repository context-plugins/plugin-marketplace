from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class RoadTraffic(str, Enum):
    """Specifies the traffic density to use when calculating commute time."""

    ROAD_TRAFFIC_UNSPECIFIED = "ROAD_TRAFFIC_UNSPECIFIED"
    TRAFFIC_FREE = "TRAFFIC_FREE"
    BUSY_HOUR = "BUSY_HOUR"

    __str__ = str.__str__


RoadTrafficOrStr: TypeAlias = Annotated[RoadTraffic | str, open_enum_validator(RoadTraffic)]

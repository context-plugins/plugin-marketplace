from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class CommuteMethod(str, Enum):
    """Required. The method of transportation to calculate the commute time for."""

    COMMUTE_METHOD_UNSPECIFIED = "COMMUTE_METHOD_UNSPECIFIED"
    DRIVING = "DRIVING"
    TRANSIT = "TRANSIT"
    WALKING = "WALKING"
    CYCLING = "CYCLING"
    TRANSIT_ACCESSIBLE = "TRANSIT_ACCESSIBLE"

    __str__ = str.__str__


CommuteMethodOrStr: TypeAlias = Annotated[CommuteMethod | str, open_enum_validator(CommuteMethod)]

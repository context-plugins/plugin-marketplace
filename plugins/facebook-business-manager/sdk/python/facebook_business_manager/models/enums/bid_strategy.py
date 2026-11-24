from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class BidStrategy(str, Enum):
    """Bidding strategy for the ad set"""

    LOWEST_COST_WITHOUT_CAP = "LOWEST_COST_WITHOUT_CAP"
    LOWEST_COST_WITH_BID_CAP = "LOWEST_COST_WITH_BID_CAP"
    COST_CAP = "COST_CAP"

    __str__ = str.__str__


BidStrategyOrStr: TypeAlias = Annotated[BidStrategy | str, open_enum_validator(BidStrategy)]

from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class BidStrategy1(str, Enum):
    LOWEST_COST_WITHOUT_CAP = "LOWEST_COST_WITHOUT_CAP"
    LOWEST_COST_WITH_BID_CAP = "LOWEST_COST_WITH_BID_CAP"
    COST_CAP = "COST_CAP"

    __str__ = str.__str__


BidStrategy1OrStr: TypeAlias = Annotated[BidStrategy1 | str, open_enum_validator(BidStrategy1)]

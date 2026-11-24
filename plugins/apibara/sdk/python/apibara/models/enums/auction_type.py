from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class AuctionType(int, Enum):
    VALUE_0 = 0
    VALUE_1 = 1
    VALUE_2 = 2

    __str__ = str.__str__


AuctionTypeOrInt: TypeAlias = Annotated[AuctionType | int, open_enum_validator(AuctionType)]

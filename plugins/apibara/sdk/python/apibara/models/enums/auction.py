from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Auction(str, Enum):
    COPART = "copart"
    IAAI = "iaai"

    __str__ = str.__str__


AuctionOrStr: TypeAlias = Annotated[Auction | str, open_enum_validator(Auction)]

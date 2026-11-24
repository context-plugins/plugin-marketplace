from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class BuyingFormat(str, Enum):
    ALL = "all"
    AUCTION = "auction"
    BUY_IT_NOW = "buyItNow"
    ACCEPTS_OFFERS = "acceptsOffers"

    __str__ = str.__str__


BuyingFormatOrStr: TypeAlias = Annotated[BuyingFormat | str, open_enum_validator(BuyingFormat)]

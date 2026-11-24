from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class BuyingFormatCompSniperMarketplaceAndShippingScrapeApi(str, Enum):
    AUCTION = "auction"
    BUY_IT_NOW = "buyItNow"
    AUCTION_WITH_BIN = "auctionWithBIN"

    __str__ = str.__str__


BuyingFormatCompSniperMarketplaceAndShippingScrapeApiOrStr: TypeAlias = Annotated[
    BuyingFormatCompSniperMarketplaceAndShippingScrapeApi | str,
    open_enum_validator(BuyingFormatCompSniperMarketplaceAndShippingScrapeApi),
]

from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .item1_comp_sniper_marketplace_and_shipping_tc_gplayer_api import (
    Item1CompSniperMarketplaceAndShippingTcGplayerApi,
    Item1CompSniperMarketplaceAndShippingTcGplayerApiDict,
)
from .other_match import OtherMatch, OtherMatchDict
from .product import Product, ProductDict


class V1TcgplayerListingsResponse(SdkBaseModel):
    keyword: Optional[str] = UNSET
    page: Optional[int] = UNSET
    count: Optional[int] = UNSET
    marketplace: Optional[str] = UNSET
    product: OptionalNullable[Product] = UNSET
    other_matches: Optional[list[OtherMatch | None]] = Field(default=UNSET, alias="otherMatches")
    total_listings: OptionalNullable[int] = Field(default=UNSET, alias="totalListings")
    total_items: Optional[int] = Field(default=UNSET, alias="totalItems")
    has_next_page: Optional[bool] = Field(default=UNSET, alias="hasNextPage")
    items: Optional[list[Item1CompSniperMarketplaceAndShippingTcGplayerApi]] = UNSET
    scraped_at: Optional[str] = Field(default=UNSET, alias="scrapedAt")


class V1TcgplayerListingsResponseDict(TypedDict):
    keyword: NotRequired[str]
    page: NotRequired[int]
    count: NotRequired[int]
    marketplace: NotRequired[str]
    product: NotRequired[ProductDict | None]
    other_matches: NotRequired[list[OtherMatchDict | None]]
    total_listings: NotRequired[int | None]
    total_items: NotRequired[int]
    has_next_page: NotRequired[bool]
    items: NotRequired[list[Item1CompSniperMarketplaceAndShippingTcGplayerApiDict]]
    scraped_at: NotRequired[str]

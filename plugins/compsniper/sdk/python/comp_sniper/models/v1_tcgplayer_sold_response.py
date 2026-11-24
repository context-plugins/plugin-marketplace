from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .enums.sales_history import SalesHistoryOrStr
from .item_comp_sniper_marketplace_and_shipping_tc_gplayer_api import (
    ItemCompSniperMarketplaceAndShippingTcGplayerApi,
    ItemCompSniperMarketplaceAndShippingTcGplayerApiDict,
)
from .other_match import OtherMatch, OtherMatchDict
from .price_history import PriceHistory, PriceHistoryDict
from .product import Product, ProductDict


class V1TcgplayerSoldResponse(SdkBaseModel):
    keyword: Optional[str] = UNSET
    marketplace: Optional[str] = UNSET
    product: OptionalNullable[Product] = UNSET
    other_matches: Optional[list[OtherMatch | None]] = Field(default=UNSET, alias="otherMatches")
    sales_history: Optional[SalesHistoryOrStr] = Field(default=UNSET, alias="salesHistory")
    total_sales: OptionalNullable[int] = Field(default=UNSET, alias="totalSales")
    total_items: Optional[int] = Field(default=UNSET, alias="totalItems")
    items: Optional[list[ItemCompSniperMarketplaceAndShippingTcGplayerApi]] = UNSET
    price_history: OptionalNullable[list[PriceHistory]] = Field(default=UNSET, alias="priceHistory")
    summary: OptionalNullable[Any] = UNSET
    scraped_at: Optional[str] = Field(default=UNSET, alias="scrapedAt")


class V1TcgplayerSoldResponseDict(TypedDict):
    keyword: NotRequired[str]
    marketplace: NotRequired[str]
    product: NotRequired[ProductDict | None]
    other_matches: NotRequired[list[OtherMatchDict | None]]
    sales_history: NotRequired[SalesHistoryOrStr]
    total_sales: NotRequired[int | None]
    total_items: NotRequired[int]
    items: NotRequired[list[ItemCompSniperMarketplaceAndShippingTcGplayerApiDict]]
    price_history: NotRequired[list[PriceHistoryDict] | None]
    summary: NotRequired[Any | None]
    scraped_at: NotRequired[str]

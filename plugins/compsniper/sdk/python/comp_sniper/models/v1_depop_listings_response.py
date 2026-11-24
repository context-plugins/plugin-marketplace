from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .item_comp_sniper_marketplace_and_shipping_depop_api import (
    ItemCompSniperMarketplaceAndShippingDepopApi,
    ItemCompSniperMarketplaceAndShippingDepopApiDict,
)


class V1DepopListingsResponse(SdkBaseModel):
    keyword: Optional[str] = UNSET
    page: Optional[int] = UNSET
    count: Optional[int] = UNSET
    marketplace: Optional[str] = UNSET
    total_listings: OptionalNullable[int] = Field(default=UNSET, alias="totalListings")
    total_items: Optional[int] = Field(default=UNSET, alias="totalItems")
    has_next_page: Optional[bool] = Field(default=UNSET, alias="hasNextPage")
    scraped_at: Optional[str] = Field(default=UNSET, alias="scrapedAt")
    summary: OptionalNullable[Any] = UNSET
    country: Optional[str] = UNSET
    next_cursor: OptionalNullable[str] = Field(default=UNSET, alias="nextCursor")
    items: Optional[list[ItemCompSniperMarketplaceAndShippingDepopApi]] = UNSET


class V1DepopListingsResponseDict(TypedDict):
    keyword: NotRequired[str]
    page: NotRequired[int]
    count: NotRequired[int]
    marketplace: NotRequired[str]
    total_listings: NotRequired[int | None]
    total_items: NotRequired[int]
    has_next_page: NotRequired[bool]
    scraped_at: NotRequired[str]
    summary: NotRequired[Any | None]
    country: NotRequired[str]
    next_cursor: NotRequired[str | None]
    items: NotRequired[list[ItemCompSniperMarketplaceAndShippingDepopApiDict]]

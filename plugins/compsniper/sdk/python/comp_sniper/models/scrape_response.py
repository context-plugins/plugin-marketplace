from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .price_summary2 import PriceSummary2, PriceSummary2Dict
from .unions.item_comp_sniper_marketplace_and_shipping_scrape_api import (
    ItemCompSniperMarketplaceAndShippingScrapeApi,
    ItemCompSniperMarketplaceAndShippingScrapeApiDict,
)


class ScrapeResponse(SdkBaseModel):
    keyword: Optional[str] = UNSET
    page: Optional[int] = UNSET
    total_items: Optional[int] = Field(default=UNSET, alias="totalItems")
    """Valid items on this page after baseline validation and filtering."""

    total_results: OptionalNullable[str] = Field(default=UNSET, alias="totalResults")
    """eBay's own reported total, e.g. '7,900'."""

    has_next_page: Optional[bool] = Field(default=UNSET, alias="hasNextPage")
    summary: OptionalNullable[PriceSummary2] = UNSET
    """Sold-price intelligence. null for active searches."""

    items: Optional[list[ItemCompSniperMarketplaceAndShippingScrapeApi]] = UNSET


class ScrapeResponseDict(TypedDict):
    keyword: NotRequired[str]
    page: NotRequired[int]
    total_items: NotRequired[int]
    total_results: NotRequired[str | None]
    has_next_page: NotRequired[bool]
    summary: NotRequired[PriceSummary2Dict | None]
    items: NotRequired[list[ItemCompSniperMarketplaceAndShippingScrapeApiDict]]

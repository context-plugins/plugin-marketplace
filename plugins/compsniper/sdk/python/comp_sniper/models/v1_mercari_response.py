from __future__ import annotations

from typing import Literal

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .item_comp_sniper_marketplace_and_shipping_mercari_api import (
    ItemCompSniperMarketplaceAndShippingMercariApi,
    ItemCompSniperMarketplaceAndShippingMercariApiDict,
)
from .price_summary import PriceSummary, PriceSummaryDict


class V1MercariResponse(SdkBaseModel):
    keyword: str
    page: float
    count: float
    total_results: float = Field(alias="totalResults")
    total_items: float = Field(alias="totalItems")
    has_next_page: bool = Field(alias="hasNextPage")
    items: list[ItemCompSniperMarketplaceAndShippingMercariApi]
    marketplace: Literal["mercari"] = "mercari"
    scraped_at: str = Field(alias="scrapedAt")
    summary: PriceSummary | None


class V1MercariResponseDict(TypedDict):
    keyword: str
    page: float
    count: float
    total_results: float
    total_items: float
    has_next_page: bool
    items: list[ItemCompSniperMarketplaceAndShippingMercariApiDict]
    marketplace: Literal["mercari"]
    scraped_at: str
    summary: PriceSummaryDict | None

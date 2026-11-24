from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .item_comp_sniper_marketplace_and_shipping_poshmark_api import (
    ItemCompSniperMarketplaceAndShippingPoshmarkApi,
    ItemCompSniperMarketplaceAndShippingPoshmarkApiDict,
)
from .price_summary import PriceSummary, PriceSummaryDict


class V1PoshmarkSoldResponse(SdkBaseModel):
    keyword: str
    page: float
    """Current page number"""

    total_items: float = Field(alias="totalItems")
    """Number of items returned in this response (up to 48)"""

    has_next_page: bool = Field(alias="hasNextPage")
    """Whether more pages of results are available."""

    items: list[ItemCompSniperMarketplaceAndShippingPoshmarkApi]
    summary: PriceSummary | None


class V1PoshmarkSoldResponseDict(TypedDict):
    keyword: str
    page: float
    total_items: float
    has_next_page: bool
    items: list[ItemCompSniperMarketplaceAndShippingPoshmarkApiDict]
    summary: PriceSummaryDict | None

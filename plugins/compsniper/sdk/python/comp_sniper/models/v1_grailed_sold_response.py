from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .item_comp_sniper_marketplace_and_shipping_grailed_api import (
    ItemCompSniperMarketplaceAndShippingGrailedApi,
    ItemCompSniperMarketplaceAndShippingGrailedApiDict,
)


class V1GrailedSoldResponse(SdkBaseModel):
    keyword: Optional[str] = UNSET
    page: Optional[int] = UNSET
    count: Optional[int] = UNSET
    marketplace: Optional[str] = UNSET
    total_results: OptionalNullable[int] = Field(default=UNSET, alias="totalResults")
    total_items: Optional[int] = Field(default=UNSET, alias="totalItems")
    has_next_page: Optional[bool] = Field(default=UNSET, alias="hasNextPage")
    scraped_at: Optional[str] = Field(default=UNSET, alias="scrapedAt")
    summary: OptionalNullable[Any] = UNSET
    items: Optional[list[ItemCompSniperMarketplaceAndShippingGrailedApi]] = UNSET


class V1GrailedSoldResponseDict(TypedDict):
    keyword: NotRequired[str]
    page: NotRequired[int]
    count: NotRequired[int]
    marketplace: NotRequired[str]
    total_results: NotRequired[int | None]
    total_items: NotRequired[int]
    has_next_page: NotRequired[bool]
    scraped_at: NotRequired[str]
    summary: NotRequired[Any | None]
    items: NotRequired[list[ItemCompSniperMarketplaceAndShippingGrailedApiDict]]

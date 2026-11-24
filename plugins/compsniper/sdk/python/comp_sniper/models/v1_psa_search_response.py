from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .item_comp_sniper_marketplace_and_shipping_psa_api import (
    ItemCompSniperMarketplaceAndShippingPsaApi,
    ItemCompSniperMarketplaceAndShippingPsaApiDict,
)


class V1PsaSearchResponse(SdkBaseModel):
    keyword: Optional[str] = UNSET
    marketplace: Optional[str] = UNSET
    total_results: Optional[int] = Field(default=UNSET, alias="totalResults")
    total_items: Optional[int] = Field(default=UNSET, alias="totalItems")
    items: Optional[list[ItemCompSniperMarketplaceAndShippingPsaApi]] = UNSET


class V1PsaSearchResponseDict(TypedDict):
    keyword: NotRequired[str]
    marketplace: NotRequired[str]
    total_results: NotRequired[int]
    total_items: NotRequired[int]
    items: NotRequired[list[ItemCompSniperMarketplaceAndShippingPsaApiDict]]

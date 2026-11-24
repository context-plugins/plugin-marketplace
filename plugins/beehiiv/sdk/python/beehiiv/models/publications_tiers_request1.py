from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .update_tier_price_request import UpdateTierPriceRequest, UpdateTierPriceRequestDict


class PublicationsTiersRequest1(SdkBaseModel):
    name: Optional[str] = UNSET
    description: Optional[str] = UNSET
    prices_attributes: Optional[list[UpdateTierPriceRequest]] = UNSET


class PublicationsTiersRequest1Dict(TypedDict):
    name: NotRequired[str]
    description: NotRequired[str]
    prices_attributes: NotRequired[list[UpdateTierPriceRequestDict]]

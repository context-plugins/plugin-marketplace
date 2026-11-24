from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .tier_prices_attributes_item import TierPricesAttributesItem, TierPricesAttributesItemDict


class PublicationsTiersRequest(SdkBaseModel):
    name: str
    description: Optional[str] = UNSET
    prices_attributes: Optional[list[TierPricesAttributesItem]] = UNSET


class PublicationsTiersRequestDict(TypedDict):
    name: str
    description: NotRequired[str]
    prices_attributes: NotRequired[list[TierPricesAttributesItemDict]]

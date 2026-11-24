from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .tier import Tier, TierDict


class PricePoint(SdkBaseModel):
    currency: Optional[str] = UNSET
    unit_price: Optional[float] = Field(default=UNSET, alias="unitPrice")
    min_quantity: Optional[float] = Field(default=UNSET, alias="minQuantity")
    tiers: Optional[list[Tier]] = UNSET


class PricePointDict(TypedDict):
    currency: NotRequired[str]
    unit_price: NotRequired[float]
    min_quantity: NotRequired[float]
    tiers: NotRequired[list[TierDict]]

from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .tiered_price_point_tiers_items import TieredPricePointTiersItems, TieredPricePointTiersItemsDict


class TieredPricePoint(SdkBaseModel):
    currency: str
    unit_price: float = Field(alias="unitPrice")
    tiers: list[TieredPricePointTiersItems]
    min_quantity: Optional[float] = Field(default=UNSET, alias="minQuantity")
    max_quantity: Optional[float] = Field(default=UNSET, alias="maxQuantity")
    included_quantity: Optional[float] = Field(default=UNSET, alias="includedQuantity")


class TieredPricePointDict(TypedDict):
    currency: str
    unit_price: float
    tiers: list[TieredPricePointTiersItemsDict]
    min_quantity: NotRequired[float]
    max_quantity: NotRequired[float]
    included_quantity: NotRequired[float]

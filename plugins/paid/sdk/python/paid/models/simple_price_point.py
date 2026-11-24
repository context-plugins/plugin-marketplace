from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .simple_price_point_tiers_items import SimplePricePointTiersItems, SimplePricePointTiersItemsDict


class SimplePricePoint(SdkBaseModel):
    currency: str
    unit_price: float = Field(alias="unitPrice")
    tiers: Optional[list[SimplePricePointTiersItems]] = UNSET
    min_quantity: Optional[float] = Field(default=UNSET, alias="minQuantity")
    max_quantity: Optional[float] = Field(default=UNSET, alias="maxQuantity")
    included_quantity: Optional[float] = Field(default=UNSET, alias="includedQuantity")


class SimplePricePointDict(TypedDict):
    currency: str
    unit_price: float
    tiers: NotRequired[list[SimplePricePointTiersItemsDict]]
    min_quantity: NotRequired[float]
    max_quantity: NotRequired[float]
    included_quantity: NotRequired[float]

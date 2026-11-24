from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .product_simple_price_point_tiers_items import (
    ProductSimplePricePointTiersItems,
    ProductSimplePricePointTiersItemsDict,
)


class ProductSimplePricePoint(SdkBaseModel):
    currency: str
    unit_price: float = Field(alias="unitPrice")
    tiers: Optional[list[ProductSimplePricePointTiersItems]] = UNSET
    min_quantity: Optional[float] = Field(default=UNSET, alias="minQuantity")
    max_quantity: Optional[float] = Field(default=UNSET, alias="maxQuantity")
    included_quantity: Optional[float] = Field(default=UNSET, alias="includedQuantity")


class ProductSimplePricePointDict(TypedDict):
    currency: str
    unit_price: float
    tiers: NotRequired[list[ProductSimplePricePointTiersItemsDict]]
    min_quantity: NotRequired[float]
    max_quantity: NotRequired[float]
    included_quantity: NotRequired[float]

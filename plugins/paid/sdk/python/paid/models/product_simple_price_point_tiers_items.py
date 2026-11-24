from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.product_simple_price_point_tiers_items_tier_billing_type import (
    ProductSimplePricePointTiersItemsTierBillingTypeOrStr,
)


class ProductSimplePricePointTiersItems(SdkBaseModel):
    flat_amount: Optional[float] = Field(default=UNSET, alias="flatAmount")
    index: Optional[float] = UNSET
    lower_bound: float = Field(alias="lowerBound")
    number: Optional[float] = UNSET
    tier_billing_type: Optional[ProductSimplePricePointTiersItemsTierBillingTypeOrStr] = Field(
        default=UNSET, alias="tierBillingType"
    )
    unit_amount: Optional[float] = Field(default=UNSET, alias="unitAmount")
    upper_bound: Optional[float] = Field(default=UNSET, alias="upperBound")


class ProductSimplePricePointTiersItemsDict(TypedDict):
    flat_amount: NotRequired[float]
    index: NotRequired[float]
    lower_bound: float
    number: NotRequired[float]
    tier_billing_type: NotRequired[ProductSimplePricePointTiersItemsTierBillingTypeOrStr]
    unit_amount: NotRequired[float]
    upper_bound: NotRequired[float]

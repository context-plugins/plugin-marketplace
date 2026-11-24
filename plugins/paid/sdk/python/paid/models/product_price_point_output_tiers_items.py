from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.product_price_point_output_tiers_items_tier_billing_type import (
    ProductPricePointOutputTiersItemsTierBillingTypeOrStr,
)


class ProductPricePointOutputTiersItems(SdkBaseModel):
    flat_amount: Optional[float] = Field(default=UNSET, alias="flatAmount")
    index: Optional[float] = UNSET
    lower_bound: float = Field(alias="lowerBound")
    number: Optional[float] = UNSET
    tier_billing_type: Optional[ProductPricePointOutputTiersItemsTierBillingTypeOrStr] = Field(
        default=UNSET, alias="tierBillingType"
    )
    unit_amount: Optional[float] = Field(default=UNSET, alias="unitAmount")
    upper_bound: Optional[float] = Field(default=UNSET, alias="upperBound")


class ProductPricePointOutputTiersItemsDict(TypedDict):
    flat_amount: NotRequired[float]
    index: NotRequired[float]
    lower_bound: float
    number: NotRequired[float]
    tier_billing_type: NotRequired[ProductPricePointOutputTiersItemsTierBillingTypeOrStr]
    unit_amount: NotRequired[float]
    upper_bound: NotRequired[float]

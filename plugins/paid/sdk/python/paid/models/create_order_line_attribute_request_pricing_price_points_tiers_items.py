from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.create_order_line_attribute_request_pricing_price_points_tiers_items_tier_billing_type import (
    CreateOrderLineAttributeRequestPricingPricePointsTiersItemsTierBillingTypeOrStr,
)


class CreateOrderLineAttributeRequestPricingPricePointsTiersItems(SdkBaseModel):
    flat_amount: Optional[float] = Field(default=UNSET, alias="flatAmount")
    index: Optional[float] = UNSET
    lower_bound: Optional[float] = Field(default=UNSET, alias="lowerBound")
    number: Optional[float] = UNSET
    tier_billing_type: Optional[
        CreateOrderLineAttributeRequestPricingPricePointsTiersItemsTierBillingTypeOrStr
    ] = Field(default=UNSET, alias="tierBillingType")
    unit_amount: Optional[float] = Field(default=UNSET, alias="unitAmount")
    upper_bound: Optional[float] = Field(default=UNSET, alias="upperBound")


class CreateOrderLineAttributeRequestPricingPricePointsTiersItemsDict(TypedDict):
    flat_amount: NotRequired[float]
    index: NotRequired[float]
    lower_bound: NotRequired[float]
    number: NotRequired[float]
    tier_billing_type: NotRequired[CreateOrderLineAttributeRequestPricingPricePointsTiersItemsTierBillingTypeOrStr]
    unit_amount: NotRequired[float]
    upper_bound: NotRequired[float]

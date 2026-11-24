from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .create_order_line_attribute_request_pricing_price_points_tiers_items import (
    CreateOrderLineAttributeRequestPricingPricePointsTiersItems,
    CreateOrderLineAttributeRequestPricingPricePointsTiersItemsDict,
)


class CreateOrderLineAttributeRequestPricingPricePoints(SdkBaseModel):
    """Single flat price point for this order attribute override. Do not send a currency-keyed map here."""

    currency: Optional[str] = UNSET
    unit_price: float = Field(alias="unitPrice")
    min_quantity: Optional[float] = Field(default=UNSET, alias="minQuantity")
    included_quantity: Optional[float] = Field(default=UNSET, alias="includedQuantity")
    tiers: Optional[list[CreateOrderLineAttributeRequestPricingPricePointsTiersItems]] = UNSET


class CreateOrderLineAttributeRequestPricingPricePointsDict(TypedDict):
    currency: NotRequired[str]
    unit_price: float
    min_quantity: NotRequired[float]
    included_quantity: NotRequired[float]
    tiers: NotRequired[list[CreateOrderLineAttributeRequestPricingPricePointsTiersItemsDict]]

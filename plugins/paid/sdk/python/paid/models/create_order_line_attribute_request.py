from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .create_order_line_attribute_request_pricing import (
    CreateOrderLineAttributeRequestPricing,
    CreateOrderLineAttributeRequestPricingDict,
)


class CreateOrderLineAttributeRequest(SdkBaseModel):
    name: str
    quantity: Optional[int] = UNSET
    pricing: CreateOrderLineAttributeRequestPricing


class CreateOrderLineAttributeRequestDict(TypedDict):
    name: str
    quantity: NotRequired[int]
    pricing: CreateOrderLineAttributeRequestPricingDict

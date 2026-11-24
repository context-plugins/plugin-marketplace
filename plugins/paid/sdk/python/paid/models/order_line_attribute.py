from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .order_line_attribute_pricing import OrderLineAttributePricing, OrderLineAttributePricingDict


class OrderLineAttribute(SdkBaseModel):
    agent_attribute_id: Optional[str] = Field(default=UNSET, alias="agentAttributeId")
    quantity: Optional[float] = UNSET
    currency: Optional[str] = UNSET
    pricing: Optional[OrderLineAttributePricing] = UNSET


class OrderLineAttributeDict(TypedDict):
    agent_attribute_id: NotRequired[str]
    quantity: NotRequired[float]
    currency: NotRequired[str]
    pricing: NotRequired[OrderLineAttributePricingDict]

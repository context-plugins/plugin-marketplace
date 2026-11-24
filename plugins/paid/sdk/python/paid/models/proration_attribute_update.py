from __future__ import annotations

from typing import Any
from uuid import UUID

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ProrationAttributeUpdate(SdkBaseModel):
    """An attribute update for a proration upgrade"""

    order_line_attribute_id: UUID = Field(alias="orderLineAttributeId")
    """The ID of the order line attribute to update"""

    new_pricing: dict[str, Any] = Field(alias="newPricing")
    """The new pricing configuration"""

    new_quantity: Optional[float] = Field(default=UNSET, alias="newQuantity")
    """Optional new quantity for the attribute"""


class ProrationAttributeUpdateDict(TypedDict):
    order_line_attribute_id: UUID
    new_pricing: dict[str, Any]
    new_quantity: NotRequired[float]

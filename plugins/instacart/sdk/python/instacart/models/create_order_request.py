from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .cart1 import Cart1, Cart1Dict
from .delivery_address import DeliveryAddress, DeliveryAddressDict


class CreateOrderRequest(SdkBaseModel):
    hold_id: str
    """The identifier of the time slot hold from the reserve step."""

    cart: Optional[Cart1] = UNSET
    """The finalized cart for the order."""

    delivery_address: Optional[DeliveryAddress] = UNSET
    """The delivery address for the order."""

    delivery_instructions: Optional[str] = UNSET
    """Special instructions for the delivery driver."""


class CreateOrderRequestDict(TypedDict):
    hold_id: str
    cart: NotRequired[Cart1Dict]
    delivery_address: NotRequired[DeliveryAddressDict]
    delivery_instructions: NotRequired[str]

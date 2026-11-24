from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .cart import Cart, CartDict


class ReserveTimeSlotRequest(SdkBaseModel):
    service_option_id: str
    """The identifier of the service option time slot to reserve."""

    cart: Optional[Cart] = UNSET
    """The customer's cart details to associate with the reservation."""


class ReserveTimeSlotRequestDict(TypedDict):
    service_option_id: str
    cart: NotRequired[CartDict]

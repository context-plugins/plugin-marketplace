from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .cart_item import CartItem, CartItemDict


class Cart(SdkBaseModel):
    """The customer's cart details to associate with the reservation."""

    items: Optional[list[CartItem]] = UNSET
    """The items in the customer's cart."""


class CartDict(TypedDict):
    items: NotRequired[list[CartItemDict]]

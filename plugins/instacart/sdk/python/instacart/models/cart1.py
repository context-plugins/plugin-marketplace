from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .cart_item import CartItem, CartItemDict


class Cart1(SdkBaseModel):
    """The finalized cart for the order."""

    items: Optional[list[CartItem]] = UNSET
    """The items to include in the order."""


class Cart1Dict(TypedDict):
    items: NotRequired[list[CartItemDict]]

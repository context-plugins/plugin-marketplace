from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CartItem(SdkBaseModel):
    upc: Optional[str] = UNSET
    """The Universal Product Code of the item."""

    quantity: Optional[int] = UNSET
    """The quantity of the item."""

    product_id: Optional[str] = UNSET
    """The Instacart product identifier."""


class CartItemDict(TypedDict):
    upc: NotRequired[str]
    quantity: NotRequired[int]
    product_id: NotRequired[str]

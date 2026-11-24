from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.status1 import Status1OrStr


class OrderItem(SdkBaseModel):
    product_id: Optional[str] = UNSET
    """The Instacart product identifier."""

    upc: Optional[str] = UNSET
    """The Universal Product Code of the item."""

    name: Optional[str] = UNSET
    """The name of the product."""

    quantity: Optional[int] = UNSET
    """The ordered quantity."""

    status: Optional[Status1OrStr] = UNSET
    """The current status of the item in the order."""


class OrderItemDict(TypedDict):
    product_id: NotRequired[str]
    upc: NotRequired[str]
    name: NotRequired[str]
    quantity: NotRequired[int]
    status: NotRequired[Status1OrStr]

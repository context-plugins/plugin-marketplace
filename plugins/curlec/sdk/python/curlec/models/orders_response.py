from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.entity2_razorpay_orders_api import Entity2RazorpayOrdersApiOrStr
from .order import Order, OrderDict


class OrdersResponse(SdkBaseModel):
    entity: Optional[Entity2RazorpayOrdersApiOrStr] = UNSET
    count: Optional[int] = UNSET
    """Number of items in the current page."""

    items: Optional[list[Order]] = UNSET


class OrdersResponseDict(TypedDict):
    entity: NotRequired[Entity2RazorpayOrdersApiOrStr]
    count: NotRequired[int]
    items: NotRequired[list[OrderDict]]

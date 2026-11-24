from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .post_checkout_order_item import PostCheckoutOrderItem, PostCheckoutOrderItemDict


class OrderItemsResponse(SdkBaseModel):
    items: Optional[list[PostCheckoutOrderItem]] = UNSET
    """The list of items in the order with their current statuses."""


class OrderItemsResponseDict(TypedDict):
    items: NotRequired[list[PostCheckoutOrderItemDict]]

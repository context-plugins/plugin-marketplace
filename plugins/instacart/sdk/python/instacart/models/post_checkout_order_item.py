from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.replacement_status import ReplacementStatusOrStr
from .enums.status1_instacart_connect_post_checkout_orders_api import Status1InstacartConnectPostCheckoutOrdersApiOrStr
from .replacement import Replacement, ReplacementDict


class PostCheckoutOrderItem(SdkBaseModel):
    id: Optional[str] = UNSET
    """The unique identifier for the order item."""

    product_name: Optional[str] = UNSET
    """The name of the ordered product."""

    quantity: Optional[int] = UNSET
    """The ordered quantity."""

    status: Optional[Status1InstacartConnectPostCheckoutOrdersApiOrStr] = UNSET
    """The current status of the item during shopping."""

    replacement: Optional[Replacement] = UNSET
    """Details about the replacement product suggested by the shopper."""

    replacement_status: Optional[ReplacementStatusOrStr] = UNSET
    """The customer's decision on the replacement, if one was suggested."""


class PostCheckoutOrderItemDict(TypedDict):
    id: NotRequired[str]
    product_name: NotRequired[str]
    quantity: NotRequired[int]
    status: NotRequired[Status1InstacartConnectPostCheckoutOrdersApiOrStr]
    replacement: NotRequired[ReplacementDict]
    replacement_status: NotRequired[ReplacementStatusOrStr]

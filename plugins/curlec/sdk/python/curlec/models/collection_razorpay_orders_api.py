from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.entity2_razorpay_orders_api import Entity2RazorpayOrdersApiOrStr


class CollectionRazorpayOrdersApi(SdkBaseModel):
    entity: Optional[Entity2RazorpayOrdersApiOrStr] = UNSET
    count: Optional[int] = UNSET
    """Number of items in the current page."""

    items: Optional[list[Any]] = UNSET


class CollectionRazorpayOrdersApiDict(TypedDict):
    entity: NotRequired[Entity2RazorpayOrdersApiOrStr]
    count: NotRequired[int]
    items: NotRequired[list[Any]]

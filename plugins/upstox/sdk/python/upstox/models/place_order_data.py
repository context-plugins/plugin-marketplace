from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class PlaceOrderData(SdkBaseModel):
    order_id: Optional[str] = UNSET
    """An order ID for the order request placed"""


class PlaceOrderDataDict(TypedDict):
    order_id: NotRequired[str]

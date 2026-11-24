from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class PlaceOrderData1(SdkBaseModel):
    """Response data for place order request"""

    order_id: Optional[str] = UNSET
    """An order ID for the order request placed"""


class PlaceOrderData1Dict(TypedDict):
    order_id: NotRequired[str]

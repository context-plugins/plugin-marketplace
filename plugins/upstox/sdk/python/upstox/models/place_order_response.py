from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.status import StatusOrStr
from .place_order_data1 import PlaceOrderData1, PlaceOrderData1Dict


class PlaceOrderResponse(SdkBaseModel):
    status: Optional[StatusOrStr] = UNSET
    data: Optional[PlaceOrderData1] = UNSET
    """Response data for place order request"""


class PlaceOrderResponseDict(TypedDict):
    status: NotRequired[StatusOrStr]
    data: NotRequired[PlaceOrderData1Dict]

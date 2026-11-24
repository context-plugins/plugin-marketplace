from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.status import StatusOrStr
from .order_data import OrderData, OrderDataDict


class GetOrderResponse(SdkBaseModel):
    status: Optional[StatusOrStr] = UNSET
    data: Optional[list[OrderData]] = UNSET
    """Response data for order details"""


class GetOrderResponseDict(TypedDict):
    status: NotRequired[StatusOrStr]
    data: NotRequired[list[OrderDataDict]]

from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .cancel_order_data1 import CancelOrderData1, CancelOrderData1Dict
from .enums.status import StatusOrStr


class CancelOrderResponse(SdkBaseModel):
    status: Optional[StatusOrStr] = UNSET
    data: Optional[CancelOrderData1] = UNSET
    """Response data for Cancel order request"""


class CancelOrderResponseDict(TypedDict):
    status: NotRequired[StatusOrStr]
    data: NotRequired[CancelOrderData1Dict]

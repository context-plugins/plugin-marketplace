from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.status import StatusOrStr
from .multi_order_data import MultiOrderData, MultiOrderDataDict
from .multi_order_error import MultiOrderError, MultiOrderErrorDict
from .multi_order_summary1 import MultiOrderSummary1, MultiOrderSummary1Dict


class MultiOrderResponse(SdkBaseModel):
    status: Optional[StatusOrStr] = UNSET
    data: Optional[list[MultiOrderData]] = UNSET
    """Response data for multi order request"""

    errors: Optional[list[MultiOrderError]] = UNSET
    """Error details for multi order request"""

    summary: Optional[MultiOrderSummary1] = UNSET
    """Execution summary for multi order request"""


class MultiOrderResponseDict(TypedDict):
    status: NotRequired[StatusOrStr]
    data: NotRequired[list[MultiOrderDataDict]]
    errors: NotRequired[list[MultiOrderErrorDict]]
    summary: NotRequired[MultiOrderSummary1Dict]

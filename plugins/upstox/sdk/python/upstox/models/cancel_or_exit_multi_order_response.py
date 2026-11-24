from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .batch_execution_summary1 import BatchExecutionSummary1, BatchExecutionSummary1Dict
from .cancel_or_exit_multi_order_data2 import CancelOrExitMultiOrderData2, CancelOrExitMultiOrderData2Dict
from .cancel_or_exit_order_error_data import CancelOrExitOrderErrorData, CancelOrExitOrderErrorDataDict
from .enums.status import StatusOrStr


class CancelOrExitMultiOrderResponse(SdkBaseModel):
    status: Optional[StatusOrStr] = UNSET
    data: Optional[CancelOrExitMultiOrderData2] = UNSET
    """Response data for cancel or exit order request"""

    errors: Optional[list[CancelOrExitOrderErrorData]] = UNSET
    """Error data for cancel or exit order request"""

    summary: Optional[BatchExecutionSummary1] = UNSET
    """Execution summary for cancel or exit order request"""


class CancelOrExitMultiOrderResponseDict(TypedDict):
    status: NotRequired[StatusOrStr]
    data: NotRequired[CancelOrExitMultiOrderData2Dict]
    errors: NotRequired[list[CancelOrExitOrderErrorDataDict]]
    summary: NotRequired[BatchExecutionSummary1Dict]

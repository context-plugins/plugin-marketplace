from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.status import StatusOrStr
from .payment_history_data import PaymentHistoryData, PaymentHistoryDataDict


class PaymentHistoryResponse(SdkBaseModel):
    status: Optional[StatusOrStr] = UNSET
    data: Optional[list[PaymentHistoryData]] = UNSET
    """List of payment history records"""


class PaymentHistoryResponseDict(TypedDict):
    status: NotRequired[StatusOrStr]
    data: NotRequired[list[PaymentHistoryDataDict]]

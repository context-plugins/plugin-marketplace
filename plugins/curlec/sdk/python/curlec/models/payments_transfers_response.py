from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .transfer_razorpay_transfers_api import TransferRazorpayTransfersApi, TransferRazorpayTransfersApiDict


class PaymentsTransfersResponse(SdkBaseModel):
    entity: Optional[str] = UNSET
    count: Optional[int] = UNSET
    items: Optional[list[TransferRazorpayTransfersApi]] = UNSET


class PaymentsTransfersResponseDict(TypedDict):
    entity: NotRequired[str]
    count: NotRequired[int]
    items: NotRequired[list[TransferRazorpayTransfersApiDict]]

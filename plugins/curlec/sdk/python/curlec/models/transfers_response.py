from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .transfer_razorpay_transfers_api import TransferRazorpayTransfersApi, TransferRazorpayTransfersApiDict


class TransfersResponse(SdkBaseModel):
    entity: Optional[str] = UNSET
    count: Optional[int] = UNSET
    items: Optional[list[TransferRazorpayTransfersApi]] = UNSET


class TransfersResponseDict(TypedDict):
    entity: NotRequired[str]
    count: NotRequired[int]
    items: NotRequired[list[TransferRazorpayTransfersApiDict]]

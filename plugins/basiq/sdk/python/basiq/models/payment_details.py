from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .bpay import Bpay, BpayDict


class PaymentDetails(SdkBaseModel):
    bpay: Optional[Bpay] = UNSET
    apca_number: Optional[str] = Field(default=UNSET, alias="apcaNumber")
    """6 Digit APCA number for the initiating institution. The field is fixed-width and padded with leading zeros if
    applicable."""


class PaymentDetailsDict(TypedDict):
    bpay: NotRequired[BpayDict]
    apca_number: NotRequired[str]

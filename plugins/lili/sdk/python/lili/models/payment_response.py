from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.status1 import Status1OrStr


class PaymentResponse(SdkBaseModel):
    payment_id: Optional[str] = Field(default=UNSET, alias="paymentId")
    """The payment ID"""

    details: Optional[str] = UNSET
    """The payment details"""

    status: Optional[Status1OrStr] = UNSET
    """The payment status"""


class PaymentResponseDict(TypedDict):
    payment_id: NotRequired[str]
    details: NotRequired[str]
    status: NotRequired[Status1OrStr]

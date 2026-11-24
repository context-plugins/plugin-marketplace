from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Notify1(SdkBaseModel):
    """Notification handlers. Set true for Razorpay to send, false to handle yourself."""

    sms: Optional[bool] = UNSET
    email: Optional[bool] = UNSET


class Notify1Dict(TypedDict):
    sms: NotRequired[bool]
    email: NotRequired[bool]

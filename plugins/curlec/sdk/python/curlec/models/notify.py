from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Notify(SdkBaseModel):
    sms: Optional[bool] = UNSET
    """true: Razorpay sends SMS notification. false: merchant handles."""

    email: Optional[bool] = UNSET
    """true: Razorpay sends email notification. false: merchant handles."""


class NotifyDict(TypedDict):
    sms: NotRequired[bool]
    email: NotRequired[bool]

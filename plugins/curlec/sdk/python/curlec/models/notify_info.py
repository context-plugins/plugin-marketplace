from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class NotifyInfo(SdkBaseModel):
    """If provided, Razorpay sends the mandate auth link directly to the customer."""

    notify_phone: Optional[str] = UNSET
    """Customer phone number to send SMS."""

    notify_email: Optional[str] = UNSET
    """Customer email address to send the link."""


class NotifyInfoDict(TypedDict):
    notify_phone: NotRequired[str]
    notify_email: NotRequired[str]

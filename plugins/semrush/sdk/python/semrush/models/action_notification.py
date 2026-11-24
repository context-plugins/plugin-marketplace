from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ActionNotification(SdkBaseModel):
    """Action notification details"""

    channel: Optional[str] = UNSET
    """Sending channel"""

    subscription_id: Optional[int] = UNSET
    """ID of subscription"""

    recipient_id: Optional[int] = UNSET
    """ID of subscriber"""


class ActionNotificationDict(TypedDict):
    channel: NotRequired[str]
    subscription_id: NotRequired[int]
    recipient_id: NotRequired[int]

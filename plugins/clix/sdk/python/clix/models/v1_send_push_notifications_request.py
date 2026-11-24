from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .clixexternalv1_push_notification import Clixexternalv1PushNotification, Clixexternalv1PushNotificationDict


class V1SendPushNotificationsRequest(SdkBaseModel):
    """Request schema for sending push notifications."""

    push_notifications: Optional[list[Clixexternalv1PushNotification]] = UNSET
    """List of push notifications to send. (We recommend sending up to 500 push notifications.)"""


class V1SendPushNotificationsRequestDict(TypedDict):
    push_notifications: NotRequired[list[Clixexternalv1PushNotificationDict]]

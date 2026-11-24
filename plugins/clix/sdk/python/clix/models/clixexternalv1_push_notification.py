from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .unions.clixexternalv1_push_notification_target3 import (
    Clixexternalv1PushNotificationTarget3,
    Clixexternalv1PushNotificationTarget3Dict,
)


class Clixexternalv1PushNotification(SdkBaseModel):
    """A push notification to be sent to a user device."""

    target: Optional[Clixexternalv1PushNotificationTarget3] = UNSET
    """Target device and/or user for the push notification."""

    title: Optional[str] = UNSET
    """Title of the push notification."""

    body: Optional[str] = UNSET
    """Body content of the push notification."""

    image_url: Optional[str] = UNSET
    """URL of the image to display in the push notification (optional)."""

    landing_url: Optional[str] = UNSET
    """URL to open when the notification is clicked (optional)."""


class Clixexternalv1PushNotificationDict(TypedDict):
    target: NotRequired[Clixexternalv1PushNotificationTarget3Dict]
    title: NotRequired[str]
    body: NotRequired[str]
    image_url: NotRequired[str]
    landing_url: NotRequired[str]

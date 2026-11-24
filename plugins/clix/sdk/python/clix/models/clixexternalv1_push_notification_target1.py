from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class Clixexternalv1PushNotificationTarget1(SdkBaseModel):
    device_id: str
    """ID of the target device."""


class Clixexternalv1PushNotificationTarget1Dict(TypedDict):
    device_id: str

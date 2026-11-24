from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .clixexternalv1_live_activity_alert1 import Clixexternalv1LiveActivityAlert1, Clixexternalv1LiveActivityAlert1Dict
from .unions.clixexternalv1_live_activity_target3 import (
    Clixexternalv1LiveActivityTarget3,
    Clixexternalv1LiveActivityTarget3Dict,
)


class Clixexternalv1LiveActivity(SdkBaseModel):
    """A live activity to be started on a user device."""

    target: Clixexternalv1LiveActivityTarget3
    """Target device and/or user for the live activity."""

    attributes_type: str
    """The name of the ActivityAttributes type defined in your iOS app (e.g., 'DeliveryAttributes')."""

    attributes: Any
    """Initial values for ActivityAttributes (static data that doesn't change)."""

    content_state: Any
    """Initial values for ContentState (dynamic data that updates in real-time)."""

    alert: Optional[Clixexternalv1LiveActivityAlert1] = UNSET
    """Push notification alert displayed when the Live Activity starts. If not provided, defaults to title: 'Live
    Activity', body: 'Started'."""


class Clixexternalv1LiveActivityDict(TypedDict):
    target: Clixexternalv1LiveActivityTarget3Dict
    attributes_type: str
    attributes: Any
    content_state: Any
    alert: NotRequired[Clixexternalv1LiveActivityAlert1Dict]

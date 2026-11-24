from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class InsightsConfiguration(SdkBaseModel):
    insights_enabled: Optional[bool] = Field(default=UNSET, alias="InsightsEnabled")
    """Set the InsightsEnabled value to true to enable insights or false to disable insights."""

    notifications_enabled: Optional[bool] = Field(default=UNSET, alias="NotificationsEnabled")
    """Set the NotificationsEnabled value to true to enable insights notifications. Notifications can only be enabled on
    a group with InsightsEnabled set to true."""


class InsightsConfigurationDict(TypedDict):
    insights_enabled: NotRequired[bool]
    notifications_enabled: NotRequired[bool]

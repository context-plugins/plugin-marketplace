from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .notification_channel_config import NotificationChannelConfig, NotificationChannelConfigDict


class NotificationChannel(SdkBaseModel):
    id: Optional[str] = Field(default=UNSET, alias="Id")
    """The ID of a notification channel."""

    config: Optional[NotificationChannelConfig] = Field(default=UNSET, alias="Config")


class NotificationChannelDict(TypedDict):
    id: NotRequired[str]
    config: NotRequired[NotificationChannelConfigDict]

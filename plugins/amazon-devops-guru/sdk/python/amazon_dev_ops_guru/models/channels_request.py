from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .notification_channel_config import NotificationChannelConfig, NotificationChannelConfigDict


class ChannelsRequest(SdkBaseModel):
    config: NotificationChannelConfig = Field(alias="Config")


class ChannelsRequestDict(TypedDict):
    config: NotificationChannelConfigDict

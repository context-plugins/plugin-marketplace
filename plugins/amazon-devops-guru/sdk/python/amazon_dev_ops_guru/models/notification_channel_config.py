from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .notification_filter_config import NotificationFilterConfig, NotificationFilterConfigDict
from .sns_channel_config import SnsChannelConfig, SnsChannelConfigDict


class NotificationChannelConfig(SdkBaseModel):
    sns: SnsChannelConfig = Field(alias="Sns")
    filters: Optional[NotificationFilterConfig] = Field(default=UNSET, alias="Filters")


class NotificationChannelConfigDict(TypedDict):
    sns: SnsChannelConfigDict
    filters: NotRequired[NotificationFilterConfigDict]

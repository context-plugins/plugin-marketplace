from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.message_type import MessageTypeOrStr
from .enums.severity_amazon_dev_ops_guru_channels_api import SeverityAmazonDevOpsGuruChannelsApiOrStr


class NotificationFilterConfig(SdkBaseModel):
    severities: Optional[list[SeverityAmazonDevOpsGuruChannelsApiOrStr]] = Field(default=UNSET, alias="Severities")
    """The severity levels that you want to receive notifications for. For example, you can choose to receive
    notifications only for insights with HIGH and MEDIUM severity levels. For more information, see Understanding
    insight severities."""

    message_types: Optional[list[MessageTypeOrStr]] = Field(default=UNSET, alias="MessageTypes")
    """The events that you want to receive notifications for. For example, you can choose to receive notifications only
    when the severity level is upgraded or a new insight is created."""


class NotificationFilterConfigDict(TypedDict):
    severities: NotRequired[list[SeverityAmazonDevOpsGuruChannelsApiOrStr]]
    message_types: NotRequired[list[MessageTypeOrStr]]

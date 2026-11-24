from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .alert_config import AlertConfig, AlertConfigDict
from .alert_slack_channel_request import AlertSlackChannelRequest, AlertSlackChannelRequestDict


class AlertRequest(SdkBaseModel):
    """Request body for creating a new alert."""

    name: str
    """Name of the alert."""

    config: AlertConfig
    """Parameters that define when and how an alert is evaluated."""

    recipients_slack_channels: Optional[list[AlertSlackChannelRequest]] = Field(
        default=UNSET, alias="recipientsSlackChannels"
    )
    """Slack destinations. Omitted on create means none; omitted on PATCH preserves saved channels; an array replaces
    them and [] clears them. Null is rejected. Order is preserved as submitted and repeated destinations are collapsed.
    At least one email or Slack destination must remain. Discover eligible destinations with listAlertSlackChannels."""

    recipients: Optional[list[str]] = UNSET
    """Email destinations matching allowed customer domains. Omitted on create defaults to the resolved owner email only
    when no Slack destinations are supplied. An explicit [] means no email and requires a Slack destination. Null is
    rejected."""


class AlertRequestDict(TypedDict):
    name: str
    config: AlertConfigDict
    recipients_slack_channels: NotRequired[list[AlertSlackChannelRequestDict]]
    recipients: NotRequired[list[str]]

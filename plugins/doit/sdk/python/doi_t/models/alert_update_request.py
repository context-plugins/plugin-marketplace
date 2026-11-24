from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .alert_config_update import AlertConfigUpdate, AlertConfigUpdateDict
from .alert_slack_channel_request import AlertSlackChannelRequest, AlertSlackChannelRequestDict


class AlertUpdateRequest(SdkBaseModel):
    """Partial update. Only supplied fields change. Recipient-only and config-field-only requests are supported.
    Identical effective updates preserve updateTime and the notification revision. Empty recipient arrays now clear
    destinations instead of being ignored; direct API clients relying on the previous behavior must omit those fields
    instead."""

    name: Optional[str] = UNSET
    """Alert name"""

    config: Optional[AlertConfigUpdate] = UNSET
    """Only supplied configuration fields change. A zero value is a valid threshold. Fields cannot be null except
    ignoreValuesRange."""

    recipients_slack_channels: Optional[list[AlertSlackChannelRequest]] = Field(
        default=UNSET, alias="recipientsSlackChannels"
    )
    """Slack destinations. Omitted on create means none; omitted on PATCH preserves saved channels; an array replaces
    them and [] clears them. Null is rejected. Order is preserved as submitted and repeated destinations are collapsed.
    At least one email or Slack destination must remain. Discover eligible destinations with listAlertSlackChannels."""

    recipients: Optional[list[str]] = UNSET
    """Email destinations. Omission preserves saved emails; an array replaces them; [] clears them and requires a Slack
    destination in the resulting alert. Null is rejected."""


class AlertUpdateRequestDict(TypedDict):
    name: NotRequired[str]
    config: NotRequired[AlertConfigUpdateDict]
    recipients_slack_channels: NotRequired[list[AlertSlackChannelRequestDict]]
    recipients: NotRequired[list[str]]

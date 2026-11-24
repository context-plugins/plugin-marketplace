from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .alert_config import AlertConfig, AlertConfigDict
from .alert_slack_channel import AlertSlackChannel, AlertSlackChannelDict


class AlertListItem(SdkBaseModel):
    """Alert as returned by the list endpoint. Identical to ``Alert`` but also includes ``owner``. The ``owner`` field
    is only populated in list results; it is not returned by the get, create, or update endpoints."""

    id: Optional[str] = UNSET
    """Alert ID."""

    name: str = ""
    """Alert Name."""

    create_time: Optional[int] = Field(default=UNSET, alias="createTime")
    """The time when the alert was created (in Unix milliseconds)."""

    update_time: Optional[int] = Field(default=UNSET, alias="updateTime")
    """Last time the alert was modified (in Unix milliseconds)."""

    last_alerted: OptionalNullable[int] = Field(default=UNSET, alias="lastAlerted")
    """Last notification activity in Unix milliseconds. Slack advances this on the first provider acceptance for a
    detection, which does not confirm final delivery."""

    recipients_slack_channels: Optional[list[AlertSlackChannel]] = Field(default=UNSET, alias="recipientsSlackChannels")
    """Slack destinations. Omitted on create means none; omitted on PATCH preserves saved channels; an array replaces
    them and [] clears them. Null is rejected. Order is preserved as submitted and repeated destinations are collapsed.
    At least one email or Slack destination must remain. Discover eligible destinations with listAlertSlackChannels."""

    recipients: Optional[list[str]] = UNSET
    """List of emails that will be notified when the alert is triggered."""

    config: Optional[AlertConfig] = UNSET
    """Parameters that define when and how an alert is evaluated."""

    owner: Optional[str] = UNSET
    """Email of the alert owner (the collaborator with the owner role)."""


class AlertListItemDict(TypedDict):
    id: NotRequired[str]
    name: str
    create_time: NotRequired[int]
    update_time: NotRequired[int]
    last_alerted: NotRequired[int | None]
    recipients_slack_channels: NotRequired[list[AlertSlackChannelDict]]
    recipients: NotRequired[list[str]]
    config: NotRequired[AlertConfigDict]
    owner: NotRequired[str]

from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .alert_slack_channel import AlertSlackChannel, AlertSlackChannelDict
from .enums.workspace_status import WorkspaceStatusOrStr


class AlertSlackChannelList(SdkBaseModel):
    items: list[AlertSlackChannel]
    row_count: int = Field(alias="rowCount")
    """Total eligible channels after filtering and before pagination."""

    page_token: Optional[str] = Field(default=UNSET, alias="pageToken")
    """Opaque continuation token. Omitted on the final page."""

    workspace_status: WorkspaceStatusOrStr = Field(alias="workspaceStatus")
    """Integration status. Reconnect for inactive; grant private-channel scopes for missing_private_scope. None means no
    usable workspace was found; a shared channel may still be available."""

    is_workspace_connected: bool = Field(alias="isWorkspaceConnected")
    has_shared_channel: bool = Field(alias="hasSharedChannel")
    channels_complete: bool = Field(alias="channelsComplete")
    """Whether the channel list is complete. False when a transient Slack failure prevented a full listing; callers that
    validate channel availability should not treat a partial list as authoritative."""


class AlertSlackChannelListDict(TypedDict):
    items: list[AlertSlackChannelDict]
    row_count: int
    page_token: NotRequired[str]
    workspace_status: WorkspaceStatusOrStr
    is_workspace_connected: bool
    has_shared_channel: bool
    channels_complete: bool

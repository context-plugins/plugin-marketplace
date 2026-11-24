from __future__ import annotations

from uuid import UUID

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .browser_extension_view import BrowserExtensionView, BrowserExtensionViewDict
from .enums.browser_session_status2 import BrowserSessionStatus2OrStr


class BrowserSessionView(SdkBaseModel):
    """View model for representing a browser session."""

    id: UUID
    """Unique identifier for the session"""

    status: BrowserSessionStatus2OrStr
    """Current status of the session (active/stopped)"""

    live_url: Optional[str] = Field(default=UNSET, alias="liveUrl")
    """URL where the browser can be viewed live in real-time"""

    cdp_url: Optional[str] = Field(default=UNSET, alias="cdpUrl")
    """Chrome DevTools Protocol URL for browser automation"""

    timeout_at: RFC3339DateTime = Field(alias="timeoutAt")
    """Timestamp when the session will timeout"""

    started_at: RFC3339DateTime = Field(alias="startedAt")
    """Timestamp when the session was created and started"""

    finished_at: Optional[RFC3339DateTime] = Field(default=UNSET, alias="finishedAt")
    """Timestamp when the session was stopped (None if still active)"""

    proxy_used_mb: str = Field(default="0", alias="proxyUsedMb")
    """Amount of proxy data used in MB"""

    proxy_cost: str = Field(default="0", alias="proxyCost")
    """Cost of proxy usage in USD"""

    browser_cost: str = Field(default="0", alias="browserCost")
    """Cost of browser session hosting in USD"""

    agent_session_id: Optional[UUID] = Field(default=UNSET, alias="agentSessionId")
    """ID of the agent session that created this browser (None for standalone BaaS sessions)"""

    recording_url: Optional[str] = Field(default=UNSET, alias="recordingUrl")
    """Presigned URL to download the session recording, if recording was enabled. Only populated on GET
    /api/v2/browsers/{session_id}: the upload starts when the browser stops, so it is never ready in the stop
    response."""

    recording_available: bool = Field(default=True, alias="recordingAvailable")
    """False when a recording can never appear for this session: recording was disabled, or the browser stopped long
    enough ago that the upload is not coming. Only ever false from proof, so a failed recording lookup leaves it true.
    Clients polling for ``recordingUrl`` must stop when this is false."""

    metadata: Optional[dict[str, str]] = UNSET
    """Caller-supplied labels set when the browser was created."""

    extensions: Optional[list[BrowserExtensionView]] = UNSET
    """Extensions installed in the browser, in the order of ``extensionIds``."""


class BrowserSessionViewDict(TypedDict):
    id: UUID
    status: BrowserSessionStatus2OrStr
    live_url: NotRequired[str]
    cdp_url: NotRequired[str]
    timeout_at: RFC3339DateTime
    started_at: RFC3339DateTime
    finished_at: NotRequired[RFC3339DateTime]
    proxy_used_mb: NotRequired[str]
    proxy_cost: NotRequired[str]
    browser_cost: NotRequired[str]
    agent_session_id: NotRequired[UUID]
    recording_url: NotRequired[str]
    recording_available: NotRequired[bool]
    metadata: NotRequired[dict[str, str]]
    extensions: NotRequired[list[BrowserExtensionViewDict]]

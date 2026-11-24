from __future__ import annotations

from typing import Any
from uuid import UUID

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .enums.diff_mode import DiffModeOrStr
from .enums.status1_rendex_rendering_watch_api import Status1RendexRenderingWatchApiOrStr
from .last_change import LastChange, LastChangeDict


class Watch(SdkBaseModel):
    """A monitoring configuration. webhookUrl is redacted to its host on read."""

    id: Optional[UUID] = UNSET
    url: Optional[str] = UNSET
    name: Optional[str] = UNSET
    """Null when unset"""

    interval_minutes: Optional[int] = Field(default=UNSET, alias="intervalMinutes")
    diff_mode: Optional[DiffModeOrStr] = Field(default=UNSET, alias="diffMode")
    threshold: Optional[float] = UNSET
    """0..1 fraction"""

    render_params: Optional[Any] = Field(default=UNSET, alias="renderParams")
    ai_summary: Optional[bool] = Field(default=UNSET, alias="aiSummary")
    webhook_url: Optional[str] = Field(default=UNSET, alias="webhookUrl")
    """Redacted to host; null when no webhook channel"""

    notify_email: Optional[str] = Field(default=UNSET, alias="notifyEmail")
    """Null when unset"""

    status: Optional[Status1RendexRenderingWatchApiOrStr] = UNSET
    baseline_image_url: Optional[str] = Field(default=UNSET, alias="baselineImageUrl")
    """Short-lived signed URL of the watch's current baseline — the "before" image used in the next change comparison;
    null until a baseline exists"""

    baseline_captured_at: Optional[RFC3339DateTime] = Field(default=UNSET, alias="baselineCapturedAt")
    last_run_at: Optional[RFC3339DateTime] = Field(default=UNSET, alias="lastRunAt")
    next_run_at: Optional[RFC3339DateTime] = Field(default=UNSET, alias="nextRunAt")
    """Null while paused"""

    last_changed_at: Optional[RFC3339DateTime] = Field(default=UNSET, alias="lastChangedAt")
    last_status: Optional[str] = Field(default=UNSET, alias="lastStatus")
    """completed | failed | null"""

    consecutive_failures: Optional[int] = Field(default=UNSET, alias="consecutiveFailures")
    ua_blocked_at: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="uaBlockedAt")
    """When the target last blocked the RendexWatch identity; null if never"""

    created_at: Optional[RFC3339DateTime] = Field(default=UNSET, alias="createdAt")
    updated_at: Optional[RFC3339DateTime] = Field(default=UNSET, alias="updatedAt")
    last_change: OptionalNullable[LastChange] = Field(default=UNSET, alias="lastChange")
    """The "what changed" enrichment from this watch's most recent CHANGED run — returned on GET /v1/watches and GET
    /v1/watches/{id} so a polling "changed" trigger gets the detail inline (no follow-up call to /:id/runs). Null when
    the watch has never changed."""


class WatchDict(TypedDict):
    id: NotRequired[UUID]
    url: NotRequired[str]
    name: NotRequired[str]
    interval_minutes: NotRequired[int]
    diff_mode: NotRequired[DiffModeOrStr]
    threshold: NotRequired[float]
    render_params: NotRequired[Any]
    ai_summary: NotRequired[bool]
    webhook_url: NotRequired[str]
    notify_email: NotRequired[str]
    status: NotRequired[Status1RendexRenderingWatchApiOrStr]
    baseline_image_url: NotRequired[str]
    baseline_captured_at: NotRequired[RFC3339DateTime]
    last_run_at: NotRequired[RFC3339DateTime]
    next_run_at: NotRequired[RFC3339DateTime]
    last_changed_at: NotRequired[RFC3339DateTime]
    last_status: NotRequired[str]
    consecutive_failures: NotRequired[int]
    ua_blocked_at: NotRequired[RFC3339DateTime | None]
    created_at: NotRequired[RFC3339DateTime]
    updated_at: NotRequired[RFC3339DateTime]
    last_change: NotRequired[LastChangeDict | None]

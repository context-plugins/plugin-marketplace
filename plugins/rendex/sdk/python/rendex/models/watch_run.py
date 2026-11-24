from __future__ import annotations

from uuid import UUID

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .enums.error_code import ErrorCodeOrStr
from .enums.status_rendex_rendering_watch_api import StatusRendexRenderingWatchApiOrStr
from .text_diff import TextDiff, TextDiffDict
from .watch_changed_region import WatchChangedRegion, WatchChangedRegionDict


class WatchRun(SdkBaseModel):
    """One execution of a watch. Image URLs are short-lived signed links and may 404 for runs older than the bucket
    lifecycle."""

    id: Optional[UUID] = UNSET
    watch_id: Optional[UUID] = Field(default=UNSET, alias="watchId")
    status: Optional[StatusRendexRenderingWatchApiOrStr] = UNSET
    changed: Optional[bool] = UNSET
    """Null until the run completes"""

    diff_score: Optional[float] = Field(default=UNSET, alias="diffScore")
    """0..1 fraction of the page that changed; null for text-only or failed runs"""

    diff_pixels: Optional[int] = Field(default=UNSET, alias="diffPixels")
    before_url: Optional[str] = Field(default=UNSET, alias="beforeUrl")
    """Signed "before" baseline capture"""

    after_url: Optional[str] = Field(default=UNSET, alias="afterUrl")
    """Signed "after" capture"""

    diff_overlay_url: Optional[str] = Field(default=UNSET, alias="diffOverlayUrl")
    """Signed highlighted overlay"""

    crop_url: OptionalNullable[str] = Field(default=UNSET, alias="cropUrl")
    """Signed image cropped tight to the change ("what changed") — post straight into Slack/a ticket. Null when the run
    had no discrete visual region (dimensions-only or text-only change)."""

    changed_region: OptionalNullable[WatchChangedRegion] = Field(default=UNSET, alias="changedRegion")
    """Normalized (0..1) union box of the changed regions. Null when there is no discrete region."""

    ai_summary: OptionalNullable[str] = Field(default=UNSET, alias="aiSummary")
    """One-line plain-English "what changed" summary (Pro+; AI from the text diff, or a templated line from the changed
    region for visual-only changes). Same value the watch.changed webhook ``summary`` field carries. Null when
    unavailable."""

    text_diff: Optional[TextDiff] = Field(default=UNSET, alias="textDiff")
    """Present for text/both runs; null otherwise"""

    credits_charged: Optional[int] = Field(default=UNSET, alias="creditsCharged")
    """Net credits charged for this run (0 after a refund or for the demo account)"""

    error: Optional[str] = UNSET
    """Free-text failure reason when status is failed"""

    error_code: Optional[ErrorCodeOrStr] = Field(default=UNSET, alias="errorCode")
    """Structured failure reason; null until/unless the run fails. Branch on this instead of parsing error."""

    created_at: Optional[RFC3339DateTime] = Field(default=UNSET, alias="createdAt")
    completed_at: Optional[RFC3339DateTime] = Field(default=UNSET, alias="completedAt")


class WatchRunDict(TypedDict):
    id: NotRequired[UUID]
    watch_id: NotRequired[UUID]
    status: NotRequired[StatusRendexRenderingWatchApiOrStr]
    changed: NotRequired[bool]
    diff_score: NotRequired[float]
    diff_pixels: NotRequired[int]
    before_url: NotRequired[str]
    after_url: NotRequired[str]
    diff_overlay_url: NotRequired[str]
    crop_url: NotRequired[str | None]
    changed_region: NotRequired[WatchChangedRegionDict | None]
    ai_summary: NotRequired[str | None]
    text_diff: NotRequired[TextDiffDict]
    credits_charged: NotRequired[int]
    error: NotRequired[str]
    error_code: NotRequired[ErrorCodeOrStr]
    created_at: NotRequired[RFC3339DateTime]
    completed_at: NotRequired[RFC3339DateTime]

from __future__ import annotations

from pydantic import ConfigDict, EmailStr, Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.diff_mode1 import DiffMode1, DiffMode1OrStr
from .watch_render_params import WatchRenderParams, WatchRenderParamsDict


class CreateWatchRequest(SdkBaseModel):
    """Validated with a STRICT schema — any field outside the list below is REJECTED with a 400 VALIDATION_ERROR, not
    silently ignored. Render knobs go under ``renderParams`` (also strict)."""

    model_config = ConfigDict(extra="forbid")

    url: str
    """The page to monitor"""

    name: Optional[str] = UNSET
    """Optional label"""

    interval_minutes: int = Field(default=1440, alias="intervalMinutes")
    """Check frequency in minutes. The accepted minimum is your plan's floor — Free 1440 (daily), Starter 180 (3h), Pro
    30, Enterprise 5. A faster value returns 403 WATCH_INTERVAL_TOO_FAST."""

    diff_mode: DiffMode1OrStr = Field(default=DiffMode1.BOTH, alias="diffMode")
    """How changes are detected. Default ``both`` = a pixel diff (with a highlighted overlay) AND a full-page text diff,
    alerting on either — catches any change, visual or text. ``visual`` or ``text`` narrow to a single signal.
    (``text``/``both`` extract the full visible page text, not just the article body.)"""

    threshold: float = 0.01
    """Visual sensitivity (0..1). Low (default 0.01) alerts on ANY change, including a small one on a long page (a
    changed-region test, not a whole-page pixel ratio). ``0.06``+ = only MAJOR visual changes (whole-page ratio). Does
    not affect text detection."""

    render_params: Optional[WatchRenderParams] = Field(default=UNSET, alias="renderParams")
    """Render knobs applied on every check — a subset of the screenshot capture params, stored on the watch and fed to
    the renderer each run. Inline source params (``url``/``html``/``markdown``/ ``data``) and credential knobs
    (``cookies``/``headers``/``css``/``js``) are NOT accepted here; the watch's target is the top-level ``url``.
    Validated with a STRICT schema: any capture param outside the list below (e.g. ``quality``, ``css``, ``js``,
    ``resize*``, ``pdf*``, ``userAgent``, ``cookies``, ``headers``) is REJECTED with a 400 VALIDATION_ERROR — extras are
    NOT silently ignored."""

    ai_summary: bool = Field(default=False, alias="aiSummary")
    """Pro+ — opt in to an AI-written one-sentence "what changed" summary on each detected change. Off by default. Every
    change already gets a free templated summary regardless of this flag; enabling it upgrades a text change's summary
    to a Workers-AI sentence."""

    webhook_url: Optional[str] = Field(default=UNSET, alias="webhookUrl")
    """Starter+ — HMAC-signed change-webhook target. Delivered payload: the WatchWebhookEvent schema."""

    notify_email: Optional[EmailStr] = Field(default=UNSET, alias="notifyEmail")
    """Any plan — send change alerts here (defaults to your account email if omitted). Anti-abuse: must be your OWN
    account email; any other address is rejected with 400 VALIDATION_ERROR."""

    paused: bool = False
    """Create the watch paused (no baseline capture or charge until resumed). Paused watches still count toward your
    plan's watch limit."""


class CreateWatchRequestDict(TypedDict):
    url: str
    name: NotRequired[str]
    interval_minutes: NotRequired[int]
    diff_mode: NotRequired[DiffMode1OrStr]
    threshold: NotRequired[float]
    render_params: NotRequired[WatchRenderParamsDict]
    ai_summary: NotRequired[bool]
    webhook_url: NotRequired[str]
    notify_email: NotRequired[EmailStr]
    paused: NotRequired[bool]

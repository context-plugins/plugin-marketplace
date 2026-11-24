from __future__ import annotations

from pydantic import ConfigDict, EmailStr, Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.diff_mode import DiffModeOrStr
from .watch_render_params import WatchRenderParams, WatchRenderParamsDict


class UpdateWatchRequest(SdkBaseModel):
    """All fields optional. ``webhookUrl`` and ``notifyEmail`` additionally accept ``null`` to clear a channel. Set
    ``paused`` true to pause, false to resume. Validated with a STRICT schema — any unknown field is REJECTED with a 400
    VALIDATION_ERROR, not silently ignored.

    ``renderParams`` is MERGED over the watch's existing render config: send only the knobs you want to change. A
    scope-changing renderParams edit (e.g. ``selector``, ``fullPage``, ``width``/``height``, ``device``) re-baselines on
    the next run, the same way a ``url`` change does."""

    model_config = ConfigDict(extra="forbid")

    url: Optional[str] = UNSET
    name: Optional[str] = UNSET
    interval_minutes: Optional[int] = Field(default=UNSET, alias="intervalMinutes")
    diff_mode: Optional[DiffModeOrStr] = Field(default=UNSET, alias="diffMode")
    threshold: Optional[float] = UNSET
    render_params: Optional[WatchRenderParams] = Field(default=UNSET, alias="renderParams")
    """Render knobs applied on every check — a subset of the screenshot capture params, stored on the watch and fed to
    the renderer each run. Inline source params (``url``/``html``/``markdown``/ ``data``) and credential knobs
    (``cookies``/``headers``/``css``/``js``) are NOT accepted here; the watch's target is the top-level ``url``.
    Validated with a STRICT schema: any capture param outside the list below (e.g. ``quality``, ``css``, ``js``,
    ``resize*``, ``pdf*``, ``userAgent``, ``cookies``, ``headers``) is REJECTED with a 400 VALIDATION_ERROR — extras are
    NOT silently ignored."""

    ai_summary: Optional[bool] = Field(default=UNSET, alias="aiSummary")
    webhook_url: Optional[str] = Field(default=UNSET, alias="webhookUrl")
    notify_email: Optional[EmailStr] = Field(default=UNSET, alias="notifyEmail")
    paused: Optional[bool] = UNSET


class UpdateWatchRequestDict(TypedDict):
    url: NotRequired[str]
    name: NotRequired[str]
    interval_minutes: NotRequired[int]
    diff_mode: NotRequired[DiffModeOrStr]
    threshold: NotRequired[float]
    render_params: NotRequired[WatchRenderParamsDict]
    ai_summary: NotRequired[bool]
    webhook_url: NotRequired[str]
    notify_email: NotRequired[EmailStr]
    paused: NotRequired[bool]

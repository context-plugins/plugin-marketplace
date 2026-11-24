from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class JobTraceSummary(SdkBaseModel):
    """Trace counts over the whole job.

    Invalidated traces count only toward ``invalidated``. ``running`` includes traces that are still cancelling, and
    ``queued`` is pending or initializing. ``scored`` and ``unscored`` split every terminal non-error trace by whether
    it has a reward."""

    total: int = 0
    running: int = 0
    queued: int = 0
    error: int = 0
    scored: int = 0
    unscored: int = 0
    invalidated: int = 0
    reward_histogram: Optional[list[int]] = UNSET
    """Scored rewards, clamped to [0, 1], counted in equal-width buckets."""


class JobTraceSummaryDict(TypedDict):
    total: NotRequired[int]
    running: NotRequired[int]
    queued: NotRequired[int]
    error: NotRequired[int]
    scored: NotRequired[int]
    unscored: NotRequired[int]
    invalidated: NotRequired[int]
    reward_histogram: NotRequired[list[int]]

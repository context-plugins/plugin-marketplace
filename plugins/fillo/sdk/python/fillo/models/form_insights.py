from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .enums.range import RangeOrStr
from .insight_breakdown_row import InsightBreakdownRow, InsightBreakdownRowDict
from .timeline import Timeline, TimelineDict


class FormInsights(SdkBaseModel):
    """The same computation the dashboard's Insights page renders. Epoch-millisecond timestamps."""

    range_: RangeOrStr = Field(alias="range")
    total: int
    first_at: OptionalNullable[int] = Field(default=UNSET, alias="firstAt")
    last_at: OptionalNullable[int] = Field(default=UNSET, alias="lastAt")
    median_duration_ms: OptionalNullable[int] = Field(default=UNSET, alias="medianDurationMs")
    duration_count: Optional[int] = Field(default=UNSET, alias="durationCount")
    last_seven_days: Optional[int] = Field(default=UNSET, alias="lastSevenDays")
    previous_seven_days: Optional[int] = Field(default=UNSET, alias="previousSevenDays")
    seven_day_change: OptionalNullable[float] = Field(default=UNSET, alias="sevenDayChange")
    sampled: Optional[bool] = UNSET
    version_count: Optional[int] = Field(default=UNSET, alias="versionCount")
    legacy_history_incomplete: Optional[bool] = Field(default=UNSET, alias="legacyHistoryIncomplete")
    timeline: list[Timeline]
    sources: list[InsightBreakdownRow]
    surfaces: list[InsightBreakdownRow]
    funnel: OptionalNullable[Any] = UNSET
    """started, completed, excluded, completionRate, multiPage, and a per-page reached/pct list."""

    drafts: OptionalNullable[Any] = UNSET
    """open, identified, and byPage — the same counts the drafts endpoint returns."""

    fields: list[Any]
    """One entry per field ever answered: id, label, kind, inCurrentSchema, answered, skipped, fillRate, and a
    ``summary`` discriminated on ``type`` (choice, multi, ranking, scale, number, boolean, matrix, text, date, file,
    generic)."""

    segment: OptionalNullable[Any] = UNSET
    """Present when ``by`` is supplied: the cohort's size, share, its own ``fields``, and the ``differences`` that
    separate it from the baseline."""

    segment_ignored: Optional[bool] = Field(default=UNSET, alias="segmentIgnored")
    """True when ``by`` named a field the current data cannot segment on."""


class FormInsightsDict(TypedDict):
    range_: RangeOrStr
    total: int
    first_at: NotRequired[int | None]
    last_at: NotRequired[int | None]
    median_duration_ms: NotRequired[int | None]
    duration_count: NotRequired[int]
    last_seven_days: NotRequired[int]
    previous_seven_days: NotRequired[int]
    seven_day_change: NotRequired[float | None]
    sampled: NotRequired[bool]
    version_count: NotRequired[int]
    legacy_history_incomplete: NotRequired[bool]
    timeline: list[TimelineDict]
    sources: list[InsightBreakdownRowDict]
    surfaces: list[InsightBreakdownRowDict]
    funnel: NotRequired[Any | None]
    drafts: NotRequired[Any | None]
    fields: list[Any]
    segment: NotRequired[Any | None]
    segment_ignored: NotRequired[bool]

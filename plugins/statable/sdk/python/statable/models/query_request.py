from __future__ import annotations

from pydantic import ConfigDict
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.dimension import DimensionOrStr
from .enums.metric import MetricOrStr
from .filter import Filter, FilterDict
from .unions.compare11 import Compare11, Compare11Dict
from .unions.date_range import DateRange, DateRangeDict


class QueryRequest(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    site_id: Optional[int] = UNSET
    """Required for an all-sites key; optional for a single-site key (defaults to the key's site). Omitting it on an
    all-sites key → ``site_id_required``."""

    metrics: list[MetricOrStr]
    date_range: DateRange
    """A scalar string — a preset (``7d``/``30d`` = last N full days; ``month`` = current calendar month to date;
    ``realtime`` = last ~30 min) or a bare ``Nd`` for the last N days, N in 1–90 (e.g. ``14d``) — OR a custom inclusive
    ``[from, to]`` pair of ``YYYY-MM-DD`` dates with ``from <= to`` and a span of at most 366 days. The scalar forms are
    exactly what ``GET /sites`` accepts; for a window over 90 days use a custom pair."""

    dimensions: Optional[list[DimensionOrStr]] = UNSET
    """Zero or one element. Omit / empty = aggregate."""

    filters: Optional[list[Filter]] = UNSET
    limit: int = 100
    """Breakdown queries only. Clamped to 1–1000. Sending it on an aggregate or time-series query →
    ``limit_offset_misuse``."""

    offset: int = 0
    """Breakdown queries only. Sending it on an aggregate or time-series query → ``limit_offset_misuse``."""

    compare: Optional[Compare11] = UNSET
    """``"previous_period"`` (equal-length window before date_range) or a custom ``["YYYY-MM-DD","YYYY-MM-DD"]`` pair.
    Adds a ``compare`` {value, change%} block — per metric (aggregate), per row (breakdown, each row's true previous
    value; not on event:status_code/event:goal), or per bucket (time-series) — plus ``compare_date_range`` to the query
    echo. The compare range must be the same length as date_range (``previous_period`` always is) → an unequal custom
    pair yields ``compare_length_mismatch``."""


class QueryRequestDict(TypedDict):
    site_id: NotRequired[int]
    metrics: list[MetricOrStr]
    date_range: DateRangeDict
    dimensions: NotRequired[list[DimensionOrStr]]
    filters: NotRequired[list[FilterDict]]
    limit: NotRequired[int]
    offset: NotRequired[int]
    compare: NotRequired[Compare11Dict]

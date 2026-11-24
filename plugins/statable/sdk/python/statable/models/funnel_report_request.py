from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .filter import Filter, FilterDict
from .unions.date_range import DateRange, DateRangeDict


class FunnelReportRequest(SdkBaseModel):
    site_id: Optional[int] = UNSET
    """Optional for a single-site key; required for an all-sites key."""

    date_range: DateRange
    """A scalar string — a preset (``7d``/``30d`` = last N full days; ``month`` = current calendar month to date;
    ``realtime`` = last ~30 min) or a bare ``Nd`` for the last N days, N in 1–90 (e.g. ``14d``) — OR a custom inclusive
    ``[from, to]`` pair of ``YYYY-MM-DD`` dates with ``from <= to`` and a span of at most 366 days. The scalar forms are
    exactly what ``GET /sites`` accepts; for a window over 90 days use a custom pair."""

    filters: Optional[list[Filter]] = UNSET
    """Segment/session filters only (country, browser, os, device, source, channel, referrer, utm_*, entry_page,
    exit_page, hostname). Event-level fields (event, page, code) return ``invalid_filter``."""


class FunnelReportRequestDict(TypedDict):
    site_id: NotRequired[int]
    date_range: DateRangeDict
    filters: NotRequired[list[FilterDict]]

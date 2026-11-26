from __future__ import annotations

from typing_extensions import TypedDict

from ..core import RFC3339DateTime, SdkBaseModel
from .coverage_source import CoverageSource, CoverageSourceDict


class Coverage(SdkBaseModel):
    generated_at: RFC3339DateTime
    """When the cached payload was assembled (UTC)."""

    as_of: RFC3339DateTime
    """The instant the counts were taken (UTC). Up to a day older than the response — the passport is recomputed daily,
    not per request."""

    research_only: bool
    """Always ``true``. Research information, not investment advice."""

    sources: list[CoverageSource]
    """Fixed order: publisher_news, sec_form4, sec_form8k, sec_form6k, earnings_reads, earnings_schedule,
    economic_calendar. A source with no rows is still present, with null dates and ``rows_total: 0``."""


class CoverageDict(TypedDict):
    generated_at: RFC3339DateTime
    as_of: RFC3339DateTime
    research_only: bool
    sources: list[CoverageSourceDict]

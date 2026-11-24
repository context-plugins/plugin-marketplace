from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .stats30_d_summary import Stats30DSummary, Stats30DSummaryDict


class Stats30D1(SdkBaseModel):
    """Trailing 30-day aggregate metrics (``esr``, ``savings``), broken down by SP type."""

    compute: Optional[Stats30DSummary] = UNSET
    """Minimal 30-day aggregate. Only ``esr`` and ``savings`` are persisted at this granularity. Responses are
    denominated in USD."""

    database: Optional[Stats30DSummary] = UNSET
    """Minimal 30-day aggregate. Only ``esr`` and ``savings`` are persisted at this granularity. Responses are
    denominated in USD."""


class Stats30D1Dict(TypedDict):
    compute: NotRequired[Stats30DSummaryDict]
    database: NotRequired[Stats30DSummaryDict]

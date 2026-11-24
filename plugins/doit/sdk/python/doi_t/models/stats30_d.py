from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .stats30_d_summary import Stats30DSummary, Stats30DSummaryDict


class Stats30D(SdkBaseModel):
    """Trailing 30-day aggregate metrics per SP type (``compute``, ``database``)."""

    compute: Optional[Stats30DSummary] = UNSET
    """Minimal 30-day aggregate. Only ``esr`` and ``savings`` are persisted at this granularity. Responses are
    denominated in USD."""

    database: Optional[Stats30DSummary] = UNSET
    """Minimal 30-day aggregate. Only ``esr`` and ``savings`` are persisted at this granularity. Responses are
    denominated in USD."""


class Stats30DDict(TypedDict):
    compute: NotRequired[Stats30DSummaryDict]
    database: NotRequired[Stats30DSummaryDict]

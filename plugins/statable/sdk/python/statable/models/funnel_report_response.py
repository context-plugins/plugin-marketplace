from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .funnel import Funnel, FunnelDict
from .funnel_report_step import FunnelReportStep, FunnelReportStepDict


class FunnelReportResponse(SdkBaseModel):
    funnel: Optional[Funnel] = UNSET
    entering: Optional[int] = UNSET
    """Visitors that reached step 0 — the funnel's denominator."""

    all_visitors: Optional[int] = UNSET
    """Total visitors/visits in the period (funnel-independent)."""

    steps: Optional[list[FunnelReportStep]] = UNSET
    query: Optional[Any] = UNSET
    """The resolved request (site_id, funnel_id, normalized date_range, filters)."""


class FunnelReportResponseDict(TypedDict):
    funnel: NotRequired[FunnelDict]
    entering: NotRequired[int]
    all_visitors: NotRequired[int]
    steps: NotRequired[list[FunnelReportStepDict]]
    query: NotRequired[Any]

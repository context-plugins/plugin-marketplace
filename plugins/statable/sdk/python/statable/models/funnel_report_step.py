from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.kind import KindOrStr


class FunnelReportStep(SdkBaseModel):
    """One step's outcome. Steps are ordered — do not sort them."""

    index: Optional[int] = UNSET
    """0-based position in the funnel."""

    name: Optional[str] = UNSET
    kind: Optional[KindOrStr] = UNSET
    visitors: Optional[int] = UNSET
    """Visitors/visits that reached this step."""

    conversion_rate: Optional[float] = UNSET
    """visitors / entering * 100 — cumulative vs the first step, NOT step-to-step."""

    dropoff: Optional[int] = UNSET
    """Visitors lost versus the previous step."""


class FunnelReportStepDict(TypedDict):
    index: NotRequired[int]
    name: NotRequired[str]
    kind: NotRequired[KindOrStr]
    visitors: NotRequired[int]
    conversion_rate: NotRequired[float]
    dropoff: NotRequired[int]

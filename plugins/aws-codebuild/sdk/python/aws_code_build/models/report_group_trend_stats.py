from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ReportGroupTrendStats(SdkBaseModel):
    average: Optional[str] = UNSET
    """Contains the average of all values analyzed."""

    max: Optional[str] = UNSET
    """Contains the maximum value analyzed."""

    min: Optional[str] = UNSET
    """Contains the minimum value analyzed."""


class ReportGroupTrendStatsDict(TypedDict):
    average: NotRequired[str]
    max: NotRequired[str]
    min: NotRequired[str]

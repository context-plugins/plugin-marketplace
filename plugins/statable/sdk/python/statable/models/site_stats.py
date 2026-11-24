from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class SiteStats(SdkBaseModel):
    date_range: Optional[str] = UNSET
    metrics: Optional[dict[str, float]] = UNSET


class SiteStatsDict(TypedDict):
    date_range: NotRequired[str]
    metrics: NotRequired[dict[str, float]]

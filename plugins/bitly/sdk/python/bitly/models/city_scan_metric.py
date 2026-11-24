from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CityScanMetric(SdkBaseModel):
    scans: Optional[int] = UNSET
    city: Optional[str] = UNSET
    subregion: Optional[str] = UNSET
    region: Optional[str] = UNSET
    country: Optional[str] = UNSET


class CityScanMetricDict(TypedDict):
    scans: NotRequired[int]
    city: NotRequired[str]
    subregion: NotRequired[str]
    region: NotRequired[str]
    country: NotRequired[str]

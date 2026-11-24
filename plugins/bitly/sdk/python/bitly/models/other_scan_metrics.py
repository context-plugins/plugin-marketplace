from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class OtherScanMetrics(SdkBaseModel):
    other_city_scans: Optional[int] = UNSET
    no_city_scans: Optional[int] = UNSET


class OtherScanMetricsDict(TypedDict):
    other_city_scans: NotRequired[int]
    no_city_scans: NotRequired[int]

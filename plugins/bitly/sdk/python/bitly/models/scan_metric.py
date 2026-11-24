from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ScanMetric(SdkBaseModel):
    scans: Optional[int] = UNSET
    value: Optional[str] = UNSET


class ScanMetricDict(TypedDict):
    scans: NotRequired[int]
    value: NotRequired[str]

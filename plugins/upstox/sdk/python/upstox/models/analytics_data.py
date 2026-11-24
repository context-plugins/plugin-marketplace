from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class AnalyticsData(SdkBaseModel):
    vega: Optional[float] = UNSET
    theta: Optional[float] = UNSET
    gamma: Optional[float] = UNSET
    delta: Optional[float] = UNSET
    iv: Optional[float] = UNSET
    pop: Optional[float] = UNSET


class AnalyticsDataDict(TypedDict):
    vega: NotRequired[float]
    theta: NotRequired[float]
    gamma: NotRequired[float]
    delta: NotRequired[float]
    iv: NotRequired[float]
    pop: NotRequired[float]

from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.name17 import Name17OrStr
from .enums.statistic5 import Statistic5OrStr


class AnalyticsSessionMetricResult(SdkBaseModel):
    name: Optional[Name17OrStr] = UNSET
    """The metric that you requested. Count – The number of sessions. Success – The number of sessions that succeeded.
    Failure – The number of sessions that failed. Dropped – The number of sessions that the user dropped. Duration – The
    duration of sessions. TurnPersession – The number of turns in the sessions. Concurrency – The number of sessions
    occurring in the same period of time."""

    statistic: Optional[Statistic5OrStr] = UNSET
    """The summary statistic that you requested to calculate. Sum – The total count for the category you provide in
    name. Average – The total count divided by the number of sessions in the category you provide in name. Max – The
    highest count in the category you provide in name."""

    value: Optional[float] = UNSET
    """The value of the summary statistic for the metric that you requested."""


class AnalyticsSessionMetricResultDict(TypedDict):
    name: NotRequired[Name17OrStr]
    statistic: NotRequired[Statistic5OrStr]
    value: NotRequired[float]

from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.name16 import Name16OrStr
from .enums.order2 import Order2OrStr
from .enums.statistic4 import Statistic4OrStr


class AnalyticsSessionMetric(SdkBaseModel):
    name: Name16OrStr
    """The metric for which you want to get session summary statistics. Count – The number of sessions. Success – The
    number of sessions that succeeded. Failure – The number of sessions that failed. Dropped – The number of sessions
    that the user dropped. Duration – The duration of sessions. TurnsPerSession – The number of turns in the sessions.
    Concurrency – The number of sessions occurring in the same period of time."""

    statistic: Statistic4OrStr
    """The summary statistic to calculate. Sum – The total count for the category you provide in name. Average – The
    total count divided by the number of sessions in the category you provide in name. Max – The highest count in the
    category you provide in name."""

    order: Optional[Order2OrStr] = UNSET
    """Specifies whether to sort the results in ascending or descending order."""


class AnalyticsSessionMetricDict(TypedDict):
    name: Name16OrStr
    statistic: Statistic4OrStr
    order: NotRequired[Order2OrStr]

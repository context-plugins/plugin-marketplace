from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.name5 import Name5OrStr
from .enums.order2 import Order2OrStr
from .enums.statistic import StatisticOrStr


class AnalyticsIntentMetric(SdkBaseModel):
    name: Name5OrStr
    """The metric for which you want to get intent summary statistics. Count – The number of times the intent was
    invoked. Success – The number of times the intent succeeded. Failure – The number of times the intent failed.
    Switched – The number of times there was a switch to a different intent. Dropped – The number of times the user
    dropped the intent."""

    statistic: StatisticOrStr
    """The summary statistic to calculate. Sum – The total count for the category you provide in name. Average – The
    total count divided by the number of intents in the category you provide in name. Max – The highest count in the
    category you provide in name."""

    order: Optional[Order2OrStr] = UNSET
    """Specifies whether to sort the results in ascending or descending order."""


class AnalyticsIntentMetricDict(TypedDict):
    name: Name5OrStr
    statistic: StatisticOrStr
    order: NotRequired[Order2OrStr]

from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.name6 import Name6OrStr
from .enums.statistic1 import Statistic1OrStr


class AnalyticsIntentMetricResult(SdkBaseModel):
    name: Optional[Name6OrStr] = UNSET
    """The metric that you requested. See Key definitions for more details about these metrics. Count – The number of
    times the intent was invoked. Success – The number of times the intent succeeded. Failure – The number of times the
    intent failed. Switched – The number of times there was a switch to a different intent. Dropped – The number of
    times the user dropped the intent."""

    statistic: Optional[Statistic1OrStr] = UNSET
    """The statistic that you requested to calculate. Sum – The total count for the category you provide in name.
    Average – The total count divided by the number of intents in the category you provide in name. Max – The highest
    count in the category you provide in name."""

    value: Optional[float] = UNSET
    """The value of the summary statistic for the metric that you requested."""


class AnalyticsIntentMetricResultDict(TypedDict):
    name: NotRequired[Name6OrStr]
    statistic: NotRequired[Statistic1OrStr]
    value: NotRequired[float]

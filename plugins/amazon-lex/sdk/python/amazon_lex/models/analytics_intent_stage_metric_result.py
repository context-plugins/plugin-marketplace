from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.name11 import Name11OrStr
from .enums.statistic3 import Statistic3OrStr


class AnalyticsIntentStageMetricResult(SdkBaseModel):
    name: Optional[Name11OrStr] = UNSET
    """The metric that you requested. Count – The number of times the intent stage occurred. Success – The number of
    times the intent stage succeeded. Failure – The number of times the intent stage failed. Dropped – The number of
    times the user dropped the intent stage. Retry – The number of times the bot tried to elicit a response from the
    user at this stage."""

    statistic: Optional[Statistic3OrStr] = UNSET
    """The summary statistic that you requested to calculate. Sum – The total count for the category you provide in
    name. Average – The total count divided by the number of intent stages in the category you provide in name. Max –
    The highest count in the category you provide in name."""

    value: Optional[float] = UNSET
    """The value of the summary statistic for the metric that you requested."""


class AnalyticsIntentStageMetricResultDict(TypedDict):
    name: NotRequired[Name11OrStr]
    statistic: NotRequired[Statistic3OrStr]
    value: NotRequired[float]

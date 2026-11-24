from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.name10 import Name10OrStr
from .enums.order3 import Order3OrStr
from .enums.statistic2 import Statistic2OrStr


class AnalyticsIntentStageMetric(SdkBaseModel):
    name: Name10OrStr
    """The metric for which you want to get intent stage summary statistics. See Key definitions for more details about
    these metrics. Count – The number of times the intent stage occurred. Success – The number of times the intent stage
    succeeded. Failure – The number of times the intent stage failed. Dropped – The number of times the user dropped the
    intent stage. Retry – The number of times the bot tried to elicit a response from the user at this stage."""

    statistic: Statistic2OrStr
    """The summary statistic to calculate. Sum – The total count for the category you provide in name. Average – The
    total count divided by the number of intent stages in the category you provide in name. Max – The highest count in
    the category you provide in name."""

    order: Optional[Order3OrStr] = UNSET
    """Specifies whether to sort the results in ascending or descending order of the summary statistic (value in the
    response)."""


class AnalyticsIntentStageMetricDict(TypedDict):
    name: Name10OrStr
    statistic: Statistic2OrStr
    order: NotRequired[Order3OrStr]

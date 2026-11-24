from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.name21 import Name21OrStr
from .enums.order2 import Order2OrStr
from .enums.statistic6 import Statistic6OrStr


class AnalyticsUtteranceMetric(SdkBaseModel):
    name: Name21OrStr
    """The metric for which you want to get utterance summary statistics. Count – The number of utterances. Missed – The
    number of utterances that Amazon Lex failed to recognize. Detected – The number of utterances that Amazon Lex
    managed to detect. UtteranceTimestamp – The date and time of the utterance."""

    statistic: Statistic6OrStr
    """The summary statistic to calculate. Sum – The total count for the category you provide in name. Average – The
    total count divided by the number of utterances in the category you provide in name. Max – The highest count in the
    category you provide in name."""

    order: Optional[Order2OrStr] = UNSET
    """Specifies whether to sort the results in ascending or descending order."""


class AnalyticsUtteranceMetricDict(TypedDict):
    name: Name21OrStr
    statistic: Statistic6OrStr
    order: NotRequired[Order2OrStr]

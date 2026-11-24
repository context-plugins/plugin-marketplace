from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.name22 import Name22OrStr
from .enums.statistic7 import Statistic7OrStr


class AnalyticsUtteranceMetricResult(SdkBaseModel):
    name: Optional[Name22OrStr] = UNSET
    """The metric that you requested. Count – The number of utterances. Missed – The number of utterances that Amazon
    Lex failed to recognize. Detected – The number of utterances that Amazon Lex managed to detect. UtteranceTimestamp –
    The date and time of the utterance."""

    statistic: Optional[Statistic7OrStr] = UNSET
    """The summary statistic that you requested to calculate. Sum – The total count for the category you provide in
    name. Average – The total count divided by the number of utterances in the category you provide in name. Max – The
    highest count in the category you provide in name."""

    value: Optional[float] = UNSET
    """The value of the summary statistic for the metric that you requested."""


class AnalyticsUtteranceMetricResultDict(TypedDict):
    name: NotRequired[Name22OrStr]
    statistic: NotRequired[Statistic7OrStr]
    value: NotRequired[float]

from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class SentimentScore(SdkBaseModel):
    positive: Optional[float] = UNSET
    """The level of confidence that Amazon Comprehend has in the accuracy of its detection of the POSITIVE sentiment."""

    negative: Optional[float] = UNSET
    """The level of confidence that Amazon Comprehend has in the accuracy of its detection of the NEGATIVE sentiment."""

    neutral: Optional[float] = UNSET
    """The level of confidence that Amazon Comprehend has in the accuracy of its detection of the NEUTRAL sentiment."""

    mixed: Optional[float] = UNSET
    """The level of confidence that Amazon Comprehend has in the accuracy of its detection of the MIXED sentiment."""


class SentimentScoreDict(TypedDict):
    positive: NotRequired[float]
    negative: NotRequired[float]
    neutral: NotRequired[float]
    mixed: NotRequired[float]

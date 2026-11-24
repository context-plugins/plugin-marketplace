from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class SentimentScore(SdkBaseModel):
    positive: Optional[float] = Field(default=UNSET, alias="Positive")
    """The level of confidence that Amazon Comprehend has in the accuracy of its detection of the POSITIVE sentiment."""

    negative: Optional[float] = Field(default=UNSET, alias="Negative")
    """The level of confidence that Amazon Comprehend has in the accuracy of its detection of the NEGATIVE sentiment."""

    neutral: Optional[float] = Field(default=UNSET, alias="Neutral")
    """The level of confidence that Amazon Comprehend has in the accuracy of its detection of the NEUTRAL sentiment."""

    mixed: Optional[float] = Field(default=UNSET, alias="Mixed")
    """The level of confidence that Amazon Comprehend has in the accuracy of its detection of the MIXED sentiment."""


class SentimentScoreDict(TypedDict):
    positive: NotRequired[float]
    negative: NotRequired[float]
    neutral: NotRequired[float]
    mixed: NotRequired[float]

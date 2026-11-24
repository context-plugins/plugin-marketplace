from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.sentiment2 import Sentiment2OrStr
from .sentiment_score import SentimentScore, SentimentScoreDict


class DetectSentimentResponse(SdkBaseModel):
    sentiment: Optional[Sentiment2OrStr] = Field(default=UNSET, alias="Sentiment")
    """The inferred sentiment that Amazon Comprehend has the highest level of confidence in."""

    sentiment_score: Optional[SentimentScore] = Field(default=UNSET, alias="SentimentScore")


class DetectSentimentResponseDict(TypedDict):
    sentiment: NotRequired[Sentiment2OrStr]
    sentiment_score: NotRequired[SentimentScoreDict]

from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.sentiment1 import Sentiment1OrStr
from .sentiment_score import SentimentScore, SentimentScoreDict


class MentionSentiment(SdkBaseModel):
    sentiment: Optional[Sentiment1OrStr] = Field(default=UNSET, alias="Sentiment")
    """The sentiment of the mention."""

    sentiment_score: Optional[SentimentScore] = Field(default=UNSET, alias="SentimentScore")


class MentionSentimentDict(TypedDict):
    sentiment: NotRequired[Sentiment1OrStr]
    sentiment_score: NotRequired[SentimentScoreDict]

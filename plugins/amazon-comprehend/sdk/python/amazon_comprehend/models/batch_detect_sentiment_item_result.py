from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.sentiment import SentimentOrStr
from .sentiment_score import SentimentScore, SentimentScoreDict


class BatchDetectSentimentItemResult(SdkBaseModel):
    index: Optional[int] = Field(default=UNSET, alias="Index")
    """The zero-based index of the document in the input list."""

    sentiment: Optional[SentimentOrStr] = Field(default=UNSET, alias="Sentiment")
    """The sentiment detected in the document."""

    sentiment_score: Optional[SentimentScore] = Field(default=UNSET, alias="SentimentScore")


class BatchDetectSentimentItemResultDict(TypedDict):
    index: NotRequired[int]
    sentiment: NotRequired[SentimentOrStr]
    sentiment_score: NotRequired[SentimentScoreDict]

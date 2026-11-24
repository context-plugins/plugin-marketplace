from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.sentiment import SentimentOrStr
from .sentiment_score import SentimentScore, SentimentScoreDict


class SentimentResponse(SdkBaseModel):
    sentiment: Optional[SentimentOrStr] = UNSET
    """The overall sentiment expressed in the user's response. This is the sentiment most likely expressed by the user
    based on the analysis by Amazon Comprehend."""

    sentiment_score: Optional[SentimentScore] = Field(default=UNSET, alias="sentimentScore")


class SentimentResponseDict(TypedDict):
    sentiment: NotRequired[SentimentOrStr]
    sentiment_score: NotRequired[SentimentScoreDict]

from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.sentiment_amazon_comprehend_operations_api import SentimentAmazonComprehendOperationsApiOrStr
from .sentiment_score import SentimentScore, SentimentScoreDict


class DetectSentimentResponseAmazonComprehendOperationsApi(SdkBaseModel):
    sentiment: Optional[SentimentAmazonComprehendOperationsApiOrStr] = Field(default=UNSET, alias="Sentiment")
    """The inferred sentiment that Amazon Comprehend has the highest level of confidence in."""

    sentiment_score: Optional[SentimentScore] = Field(default=UNSET, alias="SentimentScore")


class DetectSentimentResponseAmazonComprehendOperationsApiDict(TypedDict):
    sentiment: NotRequired[SentimentAmazonComprehendOperationsApiOrStr]
    sentiment_score: NotRequired[SentimentScoreDict]

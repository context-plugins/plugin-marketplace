from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class SentimentAnalysisSettings(SdkBaseModel):
    detect_sentiment: bool = Field(alias="detectSentiment")
    """Sets whether Amazon Lex uses Amazon Comprehend to detect the sentiment of user utterances."""


class SentimentAnalysisSettingsDict(TypedDict):
    detect_sentiment: bool

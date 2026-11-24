from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class V1SentimentanalysisRequest(SdkBaseModel):
    text: str
    """The text to analyze the sentiment of"""


class V1SentimentanalysisRequestDict(TypedDict):
    text: str

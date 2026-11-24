from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class RuntimeLexSentimentResponse(SdkBaseModel):
    sentiment_label: Optional[str] = Field(default=UNSET, alias="sentimentLabel")
    """The inferred sentiment that Amazon Comprehend has the highest confidence in."""

    sentiment_score: Optional[str] = Field(default=UNSET, alias="sentimentScore")
    """The likelihood that the sentiment was correctly inferred."""


class RuntimeLexSentimentResponseDict(TypedDict):
    sentiment_label: NotRequired[str]
    sentiment_score: NotRequired[str]

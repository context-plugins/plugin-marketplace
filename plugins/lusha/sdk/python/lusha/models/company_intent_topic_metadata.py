from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class CompanyIntentTopicMetadata(SdkBaseModel):
    topic_score: float = Field(alias="topicScore")
    topic_trend: str = Field(alias="topicTrend")


class CompanyIntentTopicMetadataDict(TypedDict):
    topic_score: float
    topic_trend: str

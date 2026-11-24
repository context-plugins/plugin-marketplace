from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .company_intent_topic import CompanyIntentTopic, CompanyIntentTopicDict


class BuyerIntent(SdkBaseModel):
    topic_count: int = Field(alias="topicCount")
    detected_topics: list[CompanyIntentTopic] = Field(alias="detectedTopics")


class BuyerIntentDict(TypedDict):
    topic_count: int
    detected_topics: list[CompanyIntentTopicDict]

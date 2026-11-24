from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .company_intent_topic import CompanyIntentTopic, CompanyIntentTopicDict


class CompanyIntent(SdkBaseModel):
    detected_topics: list[CompanyIntentTopic] = Field(alias="detectedTopics")
    topic_count: float = Field(alias="topicCount")


class CompanyIntentDict(TypedDict):
    detected_topics: list[CompanyIntentTopicDict]
    topic_count: float

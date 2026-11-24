from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .company_intent_topic import CompanyIntentTopic, CompanyIntentTopicDict


class CompanyIntent1(SdkBaseModel):
    """A list of detected intent topics related to the company based on your account's mapped topics."""

    detected_topics: list[CompanyIntentTopic] = Field(alias="detectedTopics")
    topic_count: float = Field(alias="topicCount")


class CompanyIntent1Dict(TypedDict):
    detected_topics: list[CompanyIntentTopicDict]
    topic_count: float

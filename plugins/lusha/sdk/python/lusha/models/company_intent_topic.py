from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .company_intent_topic_metadata import CompanyIntentTopicMetadata, CompanyIntentTopicMetadataDict


class CompanyIntentTopic(SdkBaseModel):
    topic_name: str = Field(alias="topicName")
    metadata: CompanyIntentTopicMetadata


class CompanyIntentTopicDict(TypedDict):
    topic_name: str
    metadata: CompanyIntentTopicMetadataDict

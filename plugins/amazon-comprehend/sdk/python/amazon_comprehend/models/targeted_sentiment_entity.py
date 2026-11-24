from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .targeted_sentiment_mention import TargetedSentimentMention, TargetedSentimentMentionDict


class TargetedSentimentEntity(SdkBaseModel):
    descriptive_mention_index: Optional[list[int]] = Field(default=UNSET, alias="DescriptiveMentionIndex")
    """One or more index into the Mentions array that provides the best name for the entity group."""

    mentions: Optional[list[TargetedSentimentMention]] = Field(default=UNSET, alias="Mentions")
    """An array of mentions of the entity in the document. The array represents a co-reference group. See Co-reference
    group for an example."""


class TargetedSentimentEntityDict(TypedDict):
    descriptive_mention_index: NotRequired[list[int]]
    mentions: NotRequired[list[TargetedSentimentMentionDict]]

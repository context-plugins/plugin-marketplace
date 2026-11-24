from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.type1 import Type1OrStr
from .mention_sentiment import MentionSentiment, MentionSentimentDict


class TargetedSentimentMention(SdkBaseModel):
    score: Optional[float] = Field(default=UNSET, alias="Score")
    """Model confidence that the entity is relevant. Value range is zero to one, where one is highest confidence."""

    group_score: Optional[float] = Field(default=UNSET, alias="GroupScore")
    """The confidence that all the entities mentioned in the group relate to the same entity."""

    text: Optional[str] = Field(default=UNSET, alias="Text")
    """The text in the document that identifies the entity."""

    type_: Optional[Type1OrStr] = Field(default=UNSET, alias="Type")
    """The type of the entity. Amazon Comprehend supports a variety of entity types."""

    mention_sentiment: Optional[MentionSentiment] = Field(default=UNSET, alias="MentionSentiment")
    begin_offset: Optional[int] = Field(default=UNSET, alias="BeginOffset")
    """The offset into the document text where the mention begins."""

    end_offset: Optional[int] = Field(default=UNSET, alias="EndOffset")
    """The offset into the document text where the mention ends."""


class TargetedSentimentMentionDict(TypedDict):
    score: NotRequired[float]
    group_score: NotRequired[float]
    text: NotRequired[str]
    type_: NotRequired[Type1OrStr]
    mention_sentiment: NotRequired[MentionSentimentDict]
    begin_offset: NotRequired[int]
    end_offset: NotRequired[int]

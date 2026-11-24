from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .interruption_filter import InterruptionFilter, InterruptionFilterDict
from .non_talk_time_filter import NonTalkTimeFilter, NonTalkTimeFilterDict
from .sentiment_filter import SentimentFilter, SentimentFilterDict
from .transcript_filter import TranscriptFilter, TranscriptFilterDict


class Rule(SdkBaseModel):
    """Exactly one member is set."""

    non_talk_time_filter: Optional[NonTalkTimeFilter] = Field(default=UNSET, alias="NonTalkTimeFilter")
    interruption_filter: Optional[InterruptionFilter] = Field(default=UNSET, alias="InterruptionFilter")
    transcript_filter: Optional[TranscriptFilter] = Field(default=UNSET, alias="TranscriptFilter")
    sentiment_filter: Optional[SentimentFilter] = Field(default=UNSET, alias="SentimentFilter")


class RuleDict(TypedDict):
    non_talk_time_filter: NotRequired[NonTalkTimeFilterDict]
    interruption_filter: NotRequired[InterruptionFilterDict]
    transcript_filter: NotRequired[TranscriptFilterDict]
    sentiment_filter: NotRequired[SentimentFilterDict]

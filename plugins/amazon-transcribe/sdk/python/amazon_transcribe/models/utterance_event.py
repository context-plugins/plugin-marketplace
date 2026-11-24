from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .call_analytics_entity import CallAnalyticsEntity, CallAnalyticsEntityDict
from .call_analytics_item import CallAnalyticsItem, CallAnalyticsItemDict
from .call_analytics_language_with_score import CallAnalyticsLanguageWithScore, CallAnalyticsLanguageWithScoreDict
from .enums.language_code1_amazon_transcribe_service_operations_api import (
    LanguageCode1AmazonTranscribeServiceOperationsApiOrStr,
)
from .enums.participant_role1_amazon_transcribe_service_operations_api import (
    ParticipantRole1AmazonTranscribeServiceOperationsApiOrStr,
)
from .enums.sentiment_amazon_transcribe_service_operations_api import SentimentAmazonTranscribeServiceOperationsApiOrStr
from .issue_detected import IssueDetected, IssueDetectedDict


class UtteranceEvent(SdkBaseModel):
    utterance_id: Optional[str] = Field(default=UNSET, alias="UtteranceId")
    """The unique identifier that is associated with the specified UtteranceEvent."""

    is_partial: Optional[bool] = Field(default=UNSET, alias="IsPartial")
    """Indicates whether the segment in the UtteranceEvent is complete (FALSE) or partial (TRUE)."""

    participant_role: Optional[ParticipantRole1AmazonTranscribeServiceOperationsApiOrStr] = Field(
        default=UNSET, alias="ParticipantRole"
    )
    """Provides the role of the speaker for each audio channel, either CUSTOMER or AGENT."""

    begin_offset_millis: Optional[int] = Field(default=UNSET, alias="BeginOffsetMillis")
    """The time, in milliseconds, from the beginning of the audio stream to the start of the UtteranceEvent."""

    end_offset_millis: Optional[int] = Field(default=UNSET, alias="EndOffsetMillis")
    """The time, in milliseconds, from the beginning of the audio stream to the start of the UtteranceEvent."""

    transcript: Optional[str] = Field(default=UNSET, alias="Transcript")
    """Contains transcribed text."""

    items: Optional[list[CallAnalyticsItem]] = Field(default=UNSET, alias="Items")
    """Contains words, phrases, or punctuation marks that are associated with the specified UtteranceEvent."""

    entities: Optional[list[CallAnalyticsEntity]] = Field(default=UNSET, alias="Entities")
    """Contains entities identified as personally identifiable information (PII) in your transcription output."""

    sentiment: Optional[SentimentAmazonTranscribeServiceOperationsApiOrStr] = Field(default=UNSET, alias="Sentiment")
    """Provides the sentiment that was detected in the specified segment."""

    issues_detected: Optional[list[IssueDetected]] = Field(default=UNSET, alias="IssuesDetected")
    """Provides the issue that was detected in the specified segment."""

    language_code: Optional[LanguageCode1AmazonTranscribeServiceOperationsApiOrStr] = Field(
        default=UNSET, alias="LanguageCode"
    )
    """The language code that represents the language spoken in your audio stream."""

    language_identification: Optional[list[CallAnalyticsLanguageWithScore]] = Field(
        default=UNSET, alias="LanguageIdentification"
    )
    """The language code of the dominant language identified in your stream."""


class UtteranceEventDict(TypedDict):
    utterance_id: NotRequired[str]
    is_partial: NotRequired[bool]
    participant_role: NotRequired[ParticipantRole1AmazonTranscribeServiceOperationsApiOrStr]
    begin_offset_millis: NotRequired[int]
    end_offset_millis: NotRequired[int]
    transcript: NotRequired[str]
    items: NotRequired[list[CallAnalyticsItemDict]]
    entities: NotRequired[list[CallAnalyticsEntityDict]]
    sentiment: NotRequired[SentimentAmazonTranscribeServiceOperationsApiOrStr]
    issues_detected: NotRequired[list[IssueDetectedDict]]
    language_code: NotRequired[LanguageCode1AmazonTranscribeServiceOperationsApiOrStr]
    language_identification: NotRequired[list[CallAnalyticsLanguageWithScoreDict]]

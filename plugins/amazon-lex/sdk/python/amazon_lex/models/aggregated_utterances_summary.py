from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class AggregatedUtterancesSummary(SdkBaseModel):
    utterance: Optional[str] = UNSET
    """The text of the utterance. If the utterance was used with the RecognizeUtterance operation, the text is the
    transcription of the audio utterance."""

    hit_count: Optional[int] = Field(default=UNSET, alias="hitCount")
    """The number of times that the utterance was detected by Amazon Lex during the time period. When an utterance is
    detected, it activates an intent or a slot."""

    missed_count: Optional[int] = Field(default=UNSET, alias="missedCount")
    """The number of times that the utterance was missed by Amazon Lex An utterance is missed when it doesn't activate
    an intent or slot."""

    utterance_first_recorded_in_aggregation_duration: Optional[RFC3339DateTime] = Field(
        default=UNSET, alias="utteranceFirstRecordedInAggregationDuration"
    )
    """The date and time that the utterance was first recorded in the time window for aggregation. An utterance may have
    been sent to Amazon Lex before that time, but only utterances within the time window are counted."""

    utterance_last_recorded_in_aggregation_duration: Optional[RFC3339DateTime] = Field(
        default=UNSET, alias="utteranceLastRecordedInAggregationDuration"
    )
    """The last date and time that an utterance was recorded in the time window for aggregation. An utterance may be
    sent to Amazon Lex after that time, but only utterances within the time window are counted."""

    contains_data_from_deleted_resources: Optional[bool] = Field(
        default=UNSET, alias="containsDataFromDeletedResources"
    )
    """Aggregated utterance data may contain utterances from versions of your bot that have since been deleted. When the
    aggregated contains this kind of data, this field is set to true."""


class AggregatedUtterancesSummaryDict(TypedDict):
    utterance: NotRequired[str]
    hit_count: NotRequired[int]
    missed_count: NotRequired[int]
    utterance_first_recorded_in_aggregation_duration: NotRequired[RFC3339DateTime]
    utterance_last_recorded_in_aggregation_duration: NotRequired[RFC3339DateTime]
    contains_data_from_deleted_resources: NotRequired[bool]

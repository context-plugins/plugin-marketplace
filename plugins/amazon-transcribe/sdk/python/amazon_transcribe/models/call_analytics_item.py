from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.type_amazon_transcribe_service_operations_api import TypeAmazonTranscribeServiceOperationsApiOrStr


class CallAnalyticsItem(SdkBaseModel):
    begin_offset_millis: Optional[int] = Field(default=UNSET, alias="BeginOffsetMillis")
    """The time, in milliseconds, from the beginning of the audio stream to the start of the identified item."""

    end_offset_millis: Optional[int] = Field(default=UNSET, alias="EndOffsetMillis")
    """The time, in milliseconds, from the beginning of the audio stream to the end of the identified item."""

    type_: Optional[TypeAmazonTranscribeServiceOperationsApiOrStr] = Field(default=UNSET, alias="Type")
    """The type of item identified. Options are: PRONUNCIATION (spoken words) and PUNCTUATION."""

    content: Optional[str] = Field(default=UNSET, alias="Content")
    """The word or punctuation that was transcribed."""

    confidence: Optional[float] = Field(default=UNSET, alias="Confidence")
    """The confidence score associated with a word or phrase in your transcript. Confidence scores are values between 0
    and 1. A larger value indicates a higher probability that the identified item correctly matches the item spoken in
    your media."""

    vocabulary_filter_match: Optional[bool] = Field(default=UNSET, alias="VocabularyFilterMatch")
    """Indicates whether the specified item matches a word in the vocabulary filter included in your Call Analytics
    request. If true, there is a vocabulary filter match."""

    stable: Optional[bool] = Field(default=UNSET, alias="Stable")
    """If partial result stabilization is enabled, Stable indicates whether the specified item is stable (true) or if it
    may change when the segment is complete (false)."""


class CallAnalyticsItemDict(TypedDict):
    begin_offset_millis: NotRequired[int]
    end_offset_millis: NotRequired[int]
    type_: NotRequired[TypeAmazonTranscribeServiceOperationsApiOrStr]
    content: NotRequired[str]
    confidence: NotRequired[float]
    vocabulary_filter_match: NotRequired[bool]
    stable: NotRequired[bool]

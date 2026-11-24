from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.type_amazon_transcribe_service_operations_api import TypeAmazonTranscribeServiceOperationsApiOrStr


class Item(SdkBaseModel):
    start_time: Optional[float] = Field(default=UNSET, alias="StartTime")
    """The start time of the transcribed item in seconds, with millisecond precision (e.g., 1.056)"""

    end_time: Optional[float] = Field(default=UNSET, alias="EndTime")
    """The end time of the transcribed item in seconds, with millisecond precision (e.g., 1.056)"""

    type_: Optional[TypeAmazonTranscribeServiceOperationsApiOrStr] = Field(default=UNSET, alias="Type")
    """The type of item identified. Options are: PRONUNCIATION (spoken words) and PUNCTUATION."""

    content: Optional[str] = Field(default=UNSET, alias="Content")
    """The word or punctuation that was transcribed."""

    vocabulary_filter_match: Optional[bool] = Field(default=UNSET, alias="VocabularyFilterMatch")
    """Indicates whether the specified item matches a word in the vocabulary filter included in your request. If true,
    there is a vocabulary filter match."""

    speaker: Optional[str] = Field(default=UNSET, alias="Speaker")
    """If speaker partitioning is enabled, Speaker labels the speaker of the specified item."""

    confidence: Optional[float] = Field(default=UNSET, alias="Confidence")
    """The confidence score associated with a word or phrase in your transcript. Confidence scores are values between 0
    and 1. A larger value indicates a higher probability that the identified item correctly matches the item spoken in
    your media."""

    stable: Optional[bool] = Field(default=UNSET, alias="Stable")
    """If partial result stabilization is enabled, Stable indicates whether the specified item is stable (true) or if it
    may change when the segment is complete (false)."""


class ItemDict(TypedDict):
    start_time: NotRequired[float]
    end_time: NotRequired[float]
    type_: NotRequired[TypeAmazonTranscribeServiceOperationsApiOrStr]
    content: NotRequired[str]
    vocabulary_filter_match: NotRequired[bool]
    speaker: NotRequired[str]
    confidence: NotRequired[float]
    stable: NotRequired[bool]

from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.type_amazon_transcribe_service_operations_api import TypeAmazonTranscribeServiceOperationsApiOrStr


class MedicalScribeTranscriptItem(SdkBaseModel):
    begin_audio_time: Optional[float] = Field(default=UNSET, alias="BeginAudioTime")
    """The start time, in milliseconds, of the transcribed item."""

    end_audio_time: Optional[float] = Field(default=UNSET, alias="EndAudioTime")
    """The end time, in milliseconds, of the transcribed item."""

    type_: Optional[TypeAmazonTranscribeServiceOperationsApiOrStr] = Field(default=UNSET, alias="Type")
    """The type of item identified. Options are: PRONUNCIATION (spoken words) and PUNCTUATION."""

    confidence: Optional[float] = Field(default=UNSET, alias="Confidence")
    """The confidence score associated with a word or phrase in your transcript. Confidence scores are values between 0
    and 1. A larger value indicates a higher probability that the identified item correctly matches the item spoken in
    your media."""

    content: Optional[str] = Field(default=UNSET, alias="Content")
    """The word, phrase or punctuation mark that was transcribed."""

    vocabulary_filter_match: Optional[bool] = Field(default=UNSET, alias="VocabularyFilterMatch")
    """Indicates whether the specified item matches a word in the vocabulary filter included in your configuration
    event. If true, there is a vocabulary filter match."""


class MedicalScribeTranscriptItemDict(TypedDict):
    begin_audio_time: NotRequired[float]
    end_audio_time: NotRequired[float]
    type_: NotRequired[TypeAmazonTranscribeServiceOperationsApiOrStr]
    confidence: NotRequired[float]
    content: NotRequired[str]
    vocabulary_filter_match: NotRequired[bool]

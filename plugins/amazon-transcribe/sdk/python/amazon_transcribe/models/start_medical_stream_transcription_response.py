from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.content_identification_type1_amazon_transcribe_service_operations_api import (
    ContentIdentificationType1AmazonTranscribeServiceOperationsApiOrStr,
)
from .enums.language_code7 import LanguageCode7OrStr
from .enums.media_encoding3 import MediaEncoding3OrStr
from .enums.specialty_amazon_transcribe_service_operations_api import SpecialtyAmazonTranscribeServiceOperationsApiOrStr
from .enums.type4 import Type4OrStr
from .medical_transcript_result_stream import MedicalTranscriptResultStream, MedicalTranscriptResultStreamDict


class StartMedicalStreamTranscriptionResponse(SdkBaseModel):
    request_id: Optional[str] = Field(default=UNSET, alias="RequestId")
    """Provides the identifier for your streaming request."""

    language_code: Optional[LanguageCode7OrStr] = Field(default=UNSET, alias="LanguageCode")
    """Provides the language code that you specified in your request. This must be en-US."""

    media_sample_rate_hertz: Optional[int] = Field(default=UNSET, alias="MediaSampleRateHertz")
    """Provides the sample rate that you specified in your request."""

    media_encoding: Optional[MediaEncoding3OrStr] = Field(default=UNSET, alias="MediaEncoding")
    """Provides the media encoding you specified in your request."""

    vocabulary_name: Optional[str] = Field(default=UNSET, alias="VocabularyName")
    """Provides the name of the custom vocabulary that you specified in your request."""

    specialty: Optional[SpecialtyAmazonTranscribeServiceOperationsApiOrStr] = Field(default=UNSET, alias="Specialty")
    """Provides the medical specialty that you specified in your request."""

    type_: Optional[Type4OrStr] = Field(default=UNSET, alias="Type")
    """Provides the type of audio you specified in your request."""

    show_speaker_label: Optional[bool] = Field(default=UNSET, alias="ShowSpeakerLabel")
    """Shows whether speaker partitioning was enabled for your transcription."""

    session_id: Optional[str] = Field(default=UNSET, alias="SessionId")
    """Provides the identifier for your transcription session."""

    transcript_result_stream: Optional[MedicalTranscriptResultStream] = Field(
        default=UNSET, alias="TranscriptResultStream"
    )
    """Exactly one member is set."""

    enable_channel_identification: Optional[bool] = Field(default=UNSET, alias="EnableChannelIdentification")
    """Shows whether channel identification was enabled for your transcription."""

    number_of_channels: Optional[int] = Field(default=UNSET, alias="NumberOfChannels")
    """Provides the number of channels that you specified in your request."""

    content_identification_type: Optional[ContentIdentificationType1AmazonTranscribeServiceOperationsApiOrStr] = Field(
        default=UNSET, alias="ContentIdentificationType"
    )
    """Shows whether content identification was enabled for your transcription."""


class StartMedicalStreamTranscriptionResponseDict(TypedDict):
    request_id: NotRequired[str]
    language_code: NotRequired[LanguageCode7OrStr]
    media_sample_rate_hertz: NotRequired[int]
    media_encoding: NotRequired[MediaEncoding3OrStr]
    vocabulary_name: NotRequired[str]
    specialty: NotRequired[SpecialtyAmazonTranscribeServiceOperationsApiOrStr]
    type_: NotRequired[Type4OrStr]
    show_speaker_label: NotRequired[bool]
    session_id: NotRequired[str]
    transcript_result_stream: NotRequired[MedicalTranscriptResultStreamDict]
    enable_channel_identification: NotRequired[bool]
    number_of_channels: NotRequired[int]
    content_identification_type: NotRequired[ContentIdentificationType1AmazonTranscribeServiceOperationsApiOrStr]

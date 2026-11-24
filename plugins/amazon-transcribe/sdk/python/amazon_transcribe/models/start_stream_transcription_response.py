from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.content_identification_type2 import ContentIdentificationType2OrStr
from .enums.content_redaction_type1 import ContentRedactionType1OrStr
from .enums.language_code8 import LanguageCode8OrStr
from .enums.media_encoding3 import MediaEncoding3OrStr
from .enums.partial_results_stability import PartialResultsStabilityOrStr
from .enums.preferred_language1 import PreferredLanguage1OrStr
from .enums.transcript_format import TranscriptFormatOrStr
from .enums.vocabulary_filter_method3 import VocabularyFilterMethod3OrStr
from .transcript_result_stream import TranscriptResultStream, TranscriptResultStreamDict


class StartStreamTranscriptionResponse(SdkBaseModel):
    request_id: Optional[str] = Field(default=UNSET, alias="RequestId")
    """Provides the identifier for your streaming request."""

    language_code: Optional[LanguageCode8OrStr] = Field(default=UNSET, alias="LanguageCode")
    """Provides the language code that you specified in your request."""

    media_sample_rate_hertz: Optional[int] = Field(default=UNSET, alias="MediaSampleRateHertz")
    """Provides the sample rate that you specified in your request."""

    media_encoding: Optional[MediaEncoding3OrStr] = Field(default=UNSET, alias="MediaEncoding")
    """Provides the media encoding you specified in your request."""

    vocabulary_name: Optional[str] = Field(default=UNSET, alias="VocabularyName")
    """Provides the name of the custom vocabulary that you specified in your request."""

    session_id: Optional[str] = Field(default=UNSET, alias="SessionId")
    """Provides the identifier for your transcription session."""

    transcript_result_stream: Optional[TranscriptResultStream] = Field(default=UNSET, alias="TranscriptResultStream")
    """Exactly one member is set."""

    vocabulary_filter_name: Optional[str] = Field(default=UNSET, alias="VocabularyFilterName")
    """Provides the name of the custom vocabulary filter that you specified in your request."""

    vocabulary_filter_method: Optional[VocabularyFilterMethod3OrStr] = Field(
        default=UNSET, alias="VocabularyFilterMethod"
    )
    """Provides the vocabulary filtering method used in your transcription."""

    show_speaker_label: Optional[bool] = Field(default=UNSET, alias="ShowSpeakerLabel")
    """Shows whether speaker partitioning was enabled for your transcription."""

    enable_channel_identification: Optional[bool] = Field(default=UNSET, alias="EnableChannelIdentification")
    """Shows whether channel identification was enabled for your transcription."""

    number_of_channels: Optional[int] = Field(default=UNSET, alias="NumberOfChannels")
    """Provides the number of channels that you specified in your request."""

    enable_partial_results_stabilization: Optional[bool] = Field(
        default=UNSET, alias="EnablePartialResultsStabilization"
    )
    """Shows whether partial results stabilization was enabled for your transcription."""

    partial_results_stability: Optional[PartialResultsStabilityOrStr] = Field(
        default=UNSET, alias="PartialResultsStability"
    )
    """Provides the stabilization level used for your transcription."""

    content_identification_type: Optional[ContentIdentificationType2OrStr] = Field(
        default=UNSET, alias="ContentIdentificationType"
    )
    """Shows whether content identification was enabled for your transcription."""

    content_redaction_type: Optional[ContentRedactionType1OrStr] = Field(default=UNSET, alias="ContentRedactionType")
    """Shows whether content redaction was enabled for your transcription."""

    pii_entity_types: Optional[str] = Field(default=UNSET, alias="PiiEntityTypes")
    """Lists the PII entity types you specified in your request."""

    language_model_name: Optional[str] = Field(default=UNSET, alias="LanguageModelName")
    """Provides the name of the custom language model that you specified in your request."""

    identify_language: Optional[bool] = Field(default=UNSET, alias="IdentifyLanguage")
    """Shows whether automatic language identification was enabled for your transcription."""

    language_options: Optional[str] = Field(default=UNSET, alias="LanguageOptions")
    """Provides the language codes that you specified in your request."""

    preferred_language: Optional[PreferredLanguage1OrStr] = Field(default=UNSET, alias="PreferredLanguage")
    """Provides the preferred language that you specified in your request."""

    identify_multiple_languages: Optional[bool] = Field(default=UNSET, alias="IdentifyMultipleLanguages")
    """Shows whether automatic multi-language identification was enabled for your transcription."""

    vocabulary_names: Optional[str] = Field(default=UNSET, alias="VocabularyNames")
    """Provides the names of the custom vocabularies that you specified in your request."""

    vocabulary_filter_names: Optional[str] = Field(default=UNSET, alias="VocabularyFilterNames")
    """Provides the names of the custom vocabulary filters that you specified in your request."""

    session_resume_window: Optional[int] = Field(default=UNSET, alias="SessionResumeWindow")
    """Provides the session resume window, in minutes, that you specified in your request."""

    transcript_format: Optional[TranscriptFormatOrStr] = Field(default=UNSET, alias="TranscriptFormat")
    """Provides the transcript format that you specified in your request."""


class StartStreamTranscriptionResponseDict(TypedDict):
    request_id: NotRequired[str]
    language_code: NotRequired[LanguageCode8OrStr]
    media_sample_rate_hertz: NotRequired[int]
    media_encoding: NotRequired[MediaEncoding3OrStr]
    vocabulary_name: NotRequired[str]
    session_id: NotRequired[str]
    transcript_result_stream: NotRequired[TranscriptResultStreamDict]
    vocabulary_filter_name: NotRequired[str]
    vocabulary_filter_method: NotRequired[VocabularyFilterMethod3OrStr]
    show_speaker_label: NotRequired[bool]
    enable_channel_identification: NotRequired[bool]
    number_of_channels: NotRequired[int]
    enable_partial_results_stabilization: NotRequired[bool]
    partial_results_stability: NotRequired[PartialResultsStabilityOrStr]
    content_identification_type: NotRequired[ContentIdentificationType2OrStr]
    content_redaction_type: NotRequired[ContentRedactionType1OrStr]
    pii_entity_types: NotRequired[str]
    language_model_name: NotRequired[str]
    identify_language: NotRequired[bool]
    language_options: NotRequired[str]
    preferred_language: NotRequired[PreferredLanguage1OrStr]
    identify_multiple_languages: NotRequired[bool]
    vocabulary_names: NotRequired[str]
    vocabulary_filter_names: NotRequired[str]
    session_resume_window: NotRequired[int]
    transcript_format: NotRequired[TranscriptFormatOrStr]

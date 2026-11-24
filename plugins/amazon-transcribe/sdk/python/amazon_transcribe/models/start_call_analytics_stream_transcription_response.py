from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .call_analytics_transcript_result_stream import (
    CallAnalyticsTranscriptResultStream,
    CallAnalyticsTranscriptResultStreamDict,
)
from .enums.content_identification_type_amazon_transcribe_service_operations_api import (
    ContentIdentificationTypeAmazonTranscribeServiceOperationsApiOrStr,
)
from .enums.content_redaction_type import ContentRedactionTypeOrStr
from .enums.language_code5 import LanguageCode5OrStr
from .enums.media_encoding1 import MediaEncoding1OrStr
from .enums.partial_results_stability import PartialResultsStabilityOrStr
from .enums.preferred_language import PreferredLanguageOrStr
from .enums.vocabulary_filter_method2 import VocabularyFilterMethod2OrStr


class StartCallAnalyticsStreamTranscriptionResponse(SdkBaseModel):
    request_id: Optional[str] = Field(default=UNSET, alias="RequestId")
    """Provides the identifier for your real-time Call Analytics request."""

    language_code: Optional[LanguageCode5OrStr] = Field(default=UNSET, alias="LanguageCode")
    """Provides the language code that you specified in your Call Analytics request."""

    media_sample_rate_hertz: Optional[int] = Field(default=UNSET, alias="MediaSampleRateHertz")
    """Provides the sample rate that you specified in your Call Analytics request."""

    media_encoding: Optional[MediaEncoding1OrStr] = Field(default=UNSET, alias="MediaEncoding")
    """Provides the media encoding you specified in your Call Analytics request."""

    vocabulary_name: Optional[str] = Field(default=UNSET, alias="VocabularyName")
    """Provides the name of the custom vocabulary that you specified in your Call Analytics request."""

    session_id: Optional[str] = Field(default=UNSET, alias="SessionId")
    """Provides the identifier for your Call Analytics transcription session."""

    call_analytics_transcript_result_stream: Optional[CallAnalyticsTranscriptResultStream] = Field(
        default=UNSET, alias="CallAnalyticsTranscriptResultStream"
    )
    """Exactly one member is set."""

    vocabulary_filter_name: Optional[str] = Field(default=UNSET, alias="VocabularyFilterName")
    """Provides the name of the custom vocabulary filter that you specified in your Call Analytics request."""

    vocabulary_filter_method: Optional[VocabularyFilterMethod2OrStr] = Field(
        default=UNSET, alias="VocabularyFilterMethod"
    )
    """Provides the vocabulary filtering method used in your Call Analytics transcription."""

    language_model_name: Optional[str] = Field(default=UNSET, alias="LanguageModelName")
    """Provides the name of the custom language model that you specified in your Call Analytics request."""

    identify_language: Optional[bool] = Field(default=UNSET, alias="IdentifyLanguage")
    """Shows whether automatic language identification was enabled for your Call Analytics transcription."""

    language_options: Optional[str] = Field(default=UNSET, alias="LanguageOptions")
    """Provides the language codes that you specified in your Call Analytics request."""

    preferred_language: Optional[PreferredLanguageOrStr] = Field(default=UNSET, alias="PreferredLanguage")
    """Provides the preferred language that you specified in your Call Analytics request."""

    vocabulary_names: Optional[str] = Field(default=UNSET, alias="VocabularyNames")
    """Provides the names of the custom vocabularies that you specified in your Call Analytics request."""

    vocabulary_filter_names: Optional[str] = Field(default=UNSET, alias="VocabularyFilterNames")
    """Provides the names of the custom vocabulary filters that you specified in your Call Analytics request."""

    enable_partial_results_stabilization: Optional[bool] = Field(
        default=UNSET, alias="EnablePartialResultsStabilization"
    )
    """Shows whether partial results stabilization was enabled for your Call Analytics transcription."""

    partial_results_stability: Optional[PartialResultsStabilityOrStr] = Field(
        default=UNSET, alias="PartialResultsStability"
    )
    """Provides the stabilization level used for your transcription."""

    content_identification_type: Optional[ContentIdentificationTypeAmazonTranscribeServiceOperationsApiOrStr] = Field(
        default=UNSET, alias="ContentIdentificationType"
    )
    """Shows whether content identification was enabled for your Call Analytics transcription."""

    content_redaction_type: Optional[ContentRedactionTypeOrStr] = Field(default=UNSET, alias="ContentRedactionType")
    """Shows whether content redaction was enabled for your Call Analytics transcription."""

    pii_entity_types: Optional[str] = Field(default=UNSET, alias="PiiEntityTypes")
    """Lists the PII entity types you specified in your Call Analytics request."""


class StartCallAnalyticsStreamTranscriptionResponseDict(TypedDict):
    request_id: NotRequired[str]
    language_code: NotRequired[LanguageCode5OrStr]
    media_sample_rate_hertz: NotRequired[int]
    media_encoding: NotRequired[MediaEncoding1OrStr]
    vocabulary_name: NotRequired[str]
    session_id: NotRequired[str]
    call_analytics_transcript_result_stream: NotRequired[CallAnalyticsTranscriptResultStreamDict]
    vocabulary_filter_name: NotRequired[str]
    vocabulary_filter_method: NotRequired[VocabularyFilterMethod2OrStr]
    language_model_name: NotRequired[str]
    identify_language: NotRequired[bool]
    language_options: NotRequired[str]
    preferred_language: NotRequired[PreferredLanguageOrStr]
    vocabulary_names: NotRequired[str]
    vocabulary_filter_names: NotRequired[str]
    enable_partial_results_stabilization: NotRequired[bool]
    partial_results_stability: NotRequired[PartialResultsStabilityOrStr]
    content_identification_type: NotRequired[ContentIdentificationTypeAmazonTranscribeServiceOperationsApiOrStr]
    content_redaction_type: NotRequired[ContentRedactionTypeOrStr]
    pii_entity_types: NotRequired[str]

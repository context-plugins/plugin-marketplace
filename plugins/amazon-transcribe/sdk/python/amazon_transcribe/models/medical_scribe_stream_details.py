from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.language_code2_amazon_transcribe_service_operations_api import (
    LanguageCode2AmazonTranscribeServiceOperationsApiOrStr,
)
from .enums.media_encoding import MediaEncodingOrStr
from .enums.stream_status import StreamStatusOrStr
from .enums.vocabulary_filter_method_amazon_transcribe_service_operations_api import (
    VocabularyFilterMethodAmazonTranscribeServiceOperationsApiOrStr,
)
from .medical_scribe_encryption_settings import MedicalScribeEncryptionSettings, MedicalScribeEncryptionSettingsDict
from .medical_scribe_post_stream_analytics_result import (
    MedicalScribePostStreamAnalyticsResult,
    MedicalScribePostStreamAnalyticsResultDict,
)
from .medical_scribe_post_stream_analytics_settings import (
    MedicalScribePostStreamAnalyticsSettings,
    MedicalScribePostStreamAnalyticsSettingsDict,
)
from .transcribestreaming_medical_scribe_channel_definition import (
    TranscribestreamingMedicalScribeChannelDefinition,
    TranscribestreamingMedicalScribeChannelDefinitionDict,
)


class MedicalScribeStreamDetails(SdkBaseModel):
    session_id: Optional[str] = Field(default=UNSET, alias="SessionId")
    """The identifier of the HealthScribe streaming session."""

    stream_created_at: Optional[RFC3339DateTime] = Field(default=UNSET, alias="StreamCreatedAt")
    """The date and time when the HealthScribe streaming session was created."""

    stream_ended_at: Optional[RFC3339DateTime] = Field(default=UNSET, alias="StreamEndedAt")
    """The date and time when the HealthScribe streaming session was ended."""

    language_code: Optional[LanguageCode2AmazonTranscribeServiceOperationsApiOrStr] = Field(
        default=UNSET, alias="LanguageCode"
    )
    """The Language Code of the HealthScribe streaming session."""

    media_sample_rate_hertz: Optional[int] = Field(default=UNSET, alias="MediaSampleRateHertz")
    """The sample rate (in hertz) of the HealthScribe streaming session."""

    media_encoding: Optional[MediaEncodingOrStr] = Field(default=UNSET, alias="MediaEncoding")
    """The Media Encoding of the HealthScribe streaming session."""

    vocabulary_name: Optional[str] = Field(default=UNSET, alias="VocabularyName")
    """The vocabulary name of the HealthScribe streaming session."""

    vocabulary_filter_name: Optional[str] = Field(default=UNSET, alias="VocabularyFilterName")
    """The name of the vocabulary filter used for the HealthScribe streaming session ."""

    vocabulary_filter_method: Optional[VocabularyFilterMethodAmazonTranscribeServiceOperationsApiOrStr] = Field(
        default=UNSET, alias="VocabularyFilterMethod"
    )
    """The method of the vocabulary filter for the HealthScribe streaming session."""

    resource_access_role_arn: Optional[str] = Field(default=UNSET, alias="ResourceAccessRoleArn")
    """The Amazon Resource Name (ARN) of the role used in the HealthScribe streaming session."""

    channel_definitions: Optional[list[TranscribestreamingMedicalScribeChannelDefinition]] = Field(
        default=UNSET, alias="ChannelDefinitions"
    )
    """The Channel Definitions of the HealthScribe streaming session."""

    encryption_settings: Optional[MedicalScribeEncryptionSettings] = Field(default=UNSET, alias="EncryptionSettings")
    stream_status: Optional[StreamStatusOrStr] = Field(default=UNSET, alias="StreamStatus")
    """The streaming status of the HealthScribe streaming session. Possible Values: IN_PROGRESS PAUSED FAILED COMPLETED
    This status is specific to real-time streaming. A COMPLETED status doesn't mean that the post-stream analytics is
    complete. To get status of an analytics result, check the Status field for the analytics result within the
    MedicalScribePostStreamAnalyticsResult. For example, you can view the status of the ClinicalNoteGenerationResult."""

    post_stream_analytics_settings: Optional[MedicalScribePostStreamAnalyticsSettings] = Field(
        default=UNSET, alias="PostStreamAnalyticsSettings"
    )
    post_stream_analytics_result: Optional[MedicalScribePostStreamAnalyticsResult] = Field(
        default=UNSET, alias="PostStreamAnalyticsResult"
    )
    medical_scribe_context_provided: Optional[bool] = Field(default=UNSET, alias="MedicalScribeContextProvided")
    """Indicates whether the MedicalScribeContext object was provided when the stream was started."""


class MedicalScribeStreamDetailsDict(TypedDict):
    session_id: NotRequired[str]
    stream_created_at: NotRequired[RFC3339DateTime]
    stream_ended_at: NotRequired[RFC3339DateTime]
    language_code: NotRequired[LanguageCode2AmazonTranscribeServiceOperationsApiOrStr]
    media_sample_rate_hertz: NotRequired[int]
    media_encoding: NotRequired[MediaEncodingOrStr]
    vocabulary_name: NotRequired[str]
    vocabulary_filter_name: NotRequired[str]
    vocabulary_filter_method: NotRequired[VocabularyFilterMethodAmazonTranscribeServiceOperationsApiOrStr]
    resource_access_role_arn: NotRequired[str]
    channel_definitions: NotRequired[list[TranscribestreamingMedicalScribeChannelDefinitionDict]]
    encryption_settings: NotRequired[MedicalScribeEncryptionSettingsDict]
    stream_status: NotRequired[StreamStatusOrStr]
    post_stream_analytics_settings: NotRequired[MedicalScribePostStreamAnalyticsSettingsDict]
    post_stream_analytics_result: NotRequired[MedicalScribePostStreamAnalyticsResultDict]
    medical_scribe_context_provided: NotRequired[bool]

from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .content_redaction import ContentRedaction, ContentRedactionDict
from .enums.language_code2_amazon_transcribe_service_transcription_jobs_api import (
    LanguageCode2AmazonTranscribeServiceTranscriptionJobsApiOrStr,
)
from .enums.output_location_type_amazon_transcribe_service_transcription_jobs_api import (
    OutputLocationTypeAmazonTranscribeServiceTranscriptionJobsApiOrStr,
)
from .enums.transcription_job_status1_amazon_transcribe_service_transcription_jobs_api import (
    TranscriptionJobStatus1AmazonTranscribeServiceTranscriptionJobsApiOrStr,
)
from .language_code_item import LanguageCodeItem, LanguageCodeItemDict
from .model_settings import ModelSettings, ModelSettingsDict
from .toxicity_detection_settings import ToxicityDetectionSettings, ToxicityDetectionSettingsDict


class TranscriptionJobSummary(SdkBaseModel):
    transcription_job_name: Optional[str] = Field(default=UNSET, alias="TranscriptionJobName")
    """The name of the transcription job. Job names are case sensitive and must be unique within an Amazon Web Services
    account."""

    creation_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="CreationTime")
    """The date and time the specified transcription job request was made. Timestamps are in the format
    YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC. For example, 2022-05-04T12:32:58.761000-07:00 represents a transcription job that
    started processing at 12:32 PM UTC-7 on May 4, 2022."""

    start_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="StartTime")
    """The date and time your transcription job began processing. Timestamps are in the format
    YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC. For example, 2022-05-04T12:32:58.789000-07:00 represents a transcription job that
    started processing at 12:32 PM UTC-7 on May 4, 2022."""

    completion_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="CompletionTime")
    """The date and time the specified transcription job finished processing. Timestamps are in the format
    YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC. For example, 2022-05-04T12:33:13.922000-07:00 represents a transcription job that
    started processing at 12:33 PM UTC-7 on May 4, 2022."""

    language_code: Optional[LanguageCode2AmazonTranscribeServiceTranscriptionJobsApiOrStr] = Field(
        default=UNSET, alias="LanguageCode"
    )
    """The language code used to create your transcription."""

    transcription_job_status: Optional[TranscriptionJobStatus1AmazonTranscribeServiceTranscriptionJobsApiOrStr] = Field(
        default=UNSET, alias="TranscriptionJobStatus"
    )
    """Provides the status of your transcription job. If the status is COMPLETED, the job is finished and you can find
    the results at the location specified in TranscriptFileUri (or RedactedTranscriptFileUri, if you requested
    transcript redaction). If the status is FAILED, FailureReason provides details on why your transcription job
    failed."""

    failure_reason: Optional[str] = Field(default=UNSET, alias="FailureReason")
    """If TranscriptionJobStatus is FAILED, FailureReason contains information about why the transcription job failed.
    See also: Common Errors."""

    output_location_type: Optional[OutputLocationTypeAmazonTranscribeServiceTranscriptionJobsApiOrStr] = Field(
        default=UNSET, alias="OutputLocationType"
    )
    """Indicates where the specified transcription output is stored. If the value is CUSTOMER_BUCKET, the location is
    the Amazon S3 bucket you specified using the OutputBucketName parameter in your request. If you also included
    OutputKey in your request, your output is located in the path you specified in your request. If the value is
    SERVICE_BUCKET, the location is a service-managed Amazon S3 bucket. To access a transcript stored in a
    service-managed bucket, use the URI shown in the TranscriptFileUri or RedactedTranscriptFileUri field."""

    content_redaction: Optional[ContentRedaction] = Field(default=UNSET, alias="ContentRedaction")
    model_settings: Optional[ModelSettings] = Field(default=UNSET, alias="ModelSettings")
    identify_language: Optional[bool] = Field(default=UNSET, alias="IdentifyLanguage")
    """Indicates whether automatic language identification was enabled (TRUE) for the specified transcription job."""

    identify_multiple_languages: Optional[bool] = Field(default=UNSET, alias="IdentifyMultipleLanguages")
    """Indicates whether automatic multi-language identification was enabled (TRUE) for the specified transcription
    job."""

    identified_language_score: Optional[float] = Field(default=UNSET, alias="IdentifiedLanguageScore")
    """The confidence score associated with the language identified in your media file. Confidence scores are values
    between 0 and 1; a larger value indicates a higher probability that the identified language correctly matches the
    language spoken in your media."""

    language_codes: Optional[list[LanguageCodeItem]] = Field(default=UNSET, alias="LanguageCodes")
    """The language codes used to create your transcription job. This parameter is used with multi-language
    identification. For single-language identification, the singular version of this parameter, LanguageCode, is
    present."""

    toxicity_detection: Optional[list[ToxicityDetectionSettings]] = Field(default=UNSET, alias="ToxicityDetection")
    """Indicates whether toxicity detection was enabled for the specified transcription job."""


class TranscriptionJobSummaryDict(TypedDict):
    transcription_job_name: NotRequired[str]
    creation_time: NotRequired[RFC3339DateTime]
    start_time: NotRequired[RFC3339DateTime]
    completion_time: NotRequired[RFC3339DateTime]
    language_code: NotRequired[LanguageCode2AmazonTranscribeServiceTranscriptionJobsApiOrStr]
    transcription_job_status: NotRequired[TranscriptionJobStatus1AmazonTranscribeServiceTranscriptionJobsApiOrStr]
    failure_reason: NotRequired[str]
    output_location_type: NotRequired[OutputLocationTypeAmazonTranscribeServiceTranscriptionJobsApiOrStr]
    content_redaction: NotRequired[ContentRedactionDict]
    model_settings: NotRequired[ModelSettingsDict]
    identify_language: NotRequired[bool]
    identify_multiple_languages: NotRequired[bool]
    identified_language_score: NotRequired[float]
    language_codes: NotRequired[list[LanguageCodeItemDict]]
    toxicity_detection: NotRequired[list[ToxicityDetectionSettingsDict]]

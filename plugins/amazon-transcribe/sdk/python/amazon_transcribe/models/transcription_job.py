from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .content_redaction import ContentRedaction, ContentRedactionDict
from .enums.language_code_amazon_transcribe_service_transcription_jobs_api import (
    LanguageCodeAmazonTranscribeServiceTranscriptionJobsApiOrStr,
)
from .enums.language_option import LanguageOptionOrStr
from .enums.media_format import MediaFormatOrStr
from .enums.transcription_job_status_amazon_transcribe_service_transcription_jobs_api import (
    TranscriptionJobStatusAmazonTranscribeServiceTranscriptionJobsApiOrStr,
)
from .job_execution_settings import JobExecutionSettings, JobExecutionSettingsDict
from .language_code_item import LanguageCodeItem, LanguageCodeItemDict
from .language_id_settings import LanguageIdSettings, LanguageIdSettingsDict
from .media import Media, MediaDict
from .model_settings import ModelSettings, ModelSettingsDict
from .settings import Settings, SettingsDict
from .subtitles_output import SubtitlesOutput, SubtitlesOutputDict
from .tag_model import TagModel, TagModelDict
from .toxicity_detection_settings import ToxicityDetectionSettings, ToxicityDetectionSettingsDict
from .transcript import Transcript, TranscriptDict


class TranscriptionJob(SdkBaseModel):
    transcription_job_name: Optional[str] = Field(default=UNSET, alias="TranscriptionJobName")
    """The name of the transcription job. Job names are case sensitive and must be unique within an Amazon Web Services
    account."""

    transcription_job_status: Optional[TranscriptionJobStatusAmazonTranscribeServiceTranscriptionJobsApiOrStr] = Field(
        default=UNSET, alias="TranscriptionJobStatus"
    )
    """Provides the status of the specified transcription job. If the status is COMPLETED, the job is finished and you
    can find the results at the location specified in TranscriptFileUri (or RedactedTranscriptFileUri, if you requested
    transcript redaction). If the status is FAILED, FailureReason provides details on why your transcription job
    failed."""

    language_code: Optional[LanguageCodeAmazonTranscribeServiceTranscriptionJobsApiOrStr] = Field(
        default=UNSET, alias="LanguageCode"
    )
    """The language code used to create your transcription job. This parameter is used with single-language
    identification. For multi-language identification requests, refer to the plural version of this parameter,
    LanguageCodes."""

    media_sample_rate_hertz: Optional[int] = Field(default=UNSET, alias="MediaSampleRateHertz")
    """The sample rate, in hertz, of the audio track in your input media file."""

    media_format: Optional[MediaFormatOrStr] = Field(default=UNSET, alias="MediaFormat")
    """The format of the input media file."""

    media: Optional[Media] = Field(default=UNSET, alias="Media")
    transcript: Optional[Transcript] = Field(default=UNSET, alias="Transcript")
    start_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="StartTime")
    """The date and time the specified transcription job began processing. Timestamps are in the format
    YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC. For example, 2022-05-04T12:32:58.789000-07:00 represents a transcription job that
    started processing at 12:32 PM UTC-7 on May 4, 2022."""

    creation_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="CreationTime")
    """The date and time the specified transcription job request was made. Timestamps are in the format
    YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC. For example, 2022-05-04T12:32:58.761000-07:00 represents a transcription job that
    started processing at 12:32 PM UTC-7 on May 4, 2022."""

    completion_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="CompletionTime")
    """The date and time the specified transcription job finished processing. Timestamps are in the format
    YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC. For example, 2022-05-04T12:33:13.922000-07:00 represents a transcription job that
    started processing at 12:33 PM UTC-7 on May 4, 2022."""

    failure_reason: Optional[str] = Field(default=UNSET, alias="FailureReason")
    """If TranscriptionJobStatus is FAILED, FailureReason contains information about why the transcription job request
    failed. The FailureReason field contains one of the following values: Unsupported media format. The media format
    specified in MediaFormat isn't valid. Refer to refer to the MediaFormat parameter for a list of supported formats.
    The media format provided does not match the detected media format. The media format specified in MediaFormat
    doesn't match the format of the input file. Check the media format of your media file and correct the specified
    value. Invalid sample rate for audio f"""

    settings: Optional[Settings] = Field(default=UNSET, alias="Settings")
    model_settings: Optional[ModelSettings] = Field(default=UNSET, alias="ModelSettings")
    job_execution_settings: Optional[JobExecutionSettings] = Field(default=UNSET, alias="JobExecutionSettings")
    content_redaction: Optional[ContentRedaction] = Field(default=UNSET, alias="ContentRedaction")
    identify_language: Optional[bool] = Field(default=UNSET, alias="IdentifyLanguage")
    """Indicates whether automatic language identification was enabled (TRUE) for the specified transcription job."""

    identify_multiple_languages: Optional[bool] = Field(default=UNSET, alias="IdentifyMultipleLanguages")
    """Indicates whether automatic multi-language identification was enabled (TRUE) for the specified transcription
    job."""

    language_options: Optional[list[LanguageOptionOrStr]] = Field(default=UNSET, alias="LanguageOptions")
    """Provides the language codes you specified in your request."""

    identified_language_score: Optional[float] = Field(default=UNSET, alias="IdentifiedLanguageScore")
    """The confidence score associated with the language identified in your media file. Confidence scores are values
    between 0 and 1; a larger value indicates a higher probability that the identified language correctly matches the
    language spoken in your media."""

    language_codes: Optional[list[LanguageCodeItem]] = Field(default=UNSET, alias="LanguageCodes")
    """The language codes used to create your transcription job. This parameter is used with multi-language
    identification. For single-language identification requests, refer to the singular version of this parameter,
    LanguageCode."""

    tags: Optional[list[TagModel]] = Field(default=UNSET, alias="Tags")
    """The tags, each in the form of a key:value pair, assigned to the specified transcription job."""

    subtitles: Optional[SubtitlesOutput] = Field(default=UNSET, alias="Subtitles")
    language_id_settings: Optional[dict[str, LanguageIdSettings]] = Field(default=UNSET, alias="LanguageIdSettings")
    """Provides the name and language of all custom language models, custom vocabularies, and custom vocabulary filters
    that you included in your request."""

    toxicity_detection: Optional[list[ToxicityDetectionSettings]] = Field(default=UNSET, alias="ToxicityDetection")
    """Provides information about the toxicity detection settings applied to your transcription."""


class TranscriptionJobDict(TypedDict):
    transcription_job_name: NotRequired[str]
    transcription_job_status: NotRequired[TranscriptionJobStatusAmazonTranscribeServiceTranscriptionJobsApiOrStr]
    language_code: NotRequired[LanguageCodeAmazonTranscribeServiceTranscriptionJobsApiOrStr]
    media_sample_rate_hertz: NotRequired[int]
    media_format: NotRequired[MediaFormatOrStr]
    media: NotRequired[MediaDict]
    transcript: NotRequired[TranscriptDict]
    start_time: NotRequired[RFC3339DateTime]
    creation_time: NotRequired[RFC3339DateTime]
    completion_time: NotRequired[RFC3339DateTime]
    failure_reason: NotRequired[str]
    settings: NotRequired[SettingsDict]
    model_settings: NotRequired[ModelSettingsDict]
    job_execution_settings: NotRequired[JobExecutionSettingsDict]
    content_redaction: NotRequired[ContentRedactionDict]
    identify_language: NotRequired[bool]
    identify_multiple_languages: NotRequired[bool]
    language_options: NotRequired[list[LanguageOptionOrStr]]
    identified_language_score: NotRequired[float]
    language_codes: NotRequired[list[LanguageCodeItemDict]]
    tags: NotRequired[list[TagModelDict]]
    subtitles: NotRequired[SubtitlesOutputDict]
    language_id_settings: NotRequired[dict[str, LanguageIdSettingsDict]]
    toxicity_detection: NotRequired[list[ToxicityDetectionSettingsDict]]

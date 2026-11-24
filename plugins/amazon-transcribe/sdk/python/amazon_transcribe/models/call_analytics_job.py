from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .call_analytics_job_details import CallAnalyticsJobDetails, CallAnalyticsJobDetailsDict
from .call_analytics_job_settings import CallAnalyticsJobSettings, CallAnalyticsJobSettingsDict
from .channel_definition import ChannelDefinition, ChannelDefinitionDict
from .enums.call_analytics_job_status import CallAnalyticsJobStatusOrStr
from .enums.language_code import LanguageCodeOrStr
from .enums.media_format import MediaFormatOrStr
from .media import Media, MediaDict
from .tag_model import TagModel, TagModelDict
from .transcript import Transcript, TranscriptDict


class CallAnalyticsJob(SdkBaseModel):
    call_analytics_job_name: Optional[str] = Field(default=UNSET, alias="CallAnalyticsJobName")
    """The name of the Call Analytics job. Job names are case sensitive and must be unique within an Amazon Web Services
    account."""

    call_analytics_job_status: Optional[CallAnalyticsJobStatusOrStr] = Field(
        default=UNSET, alias="CallAnalyticsJobStatus"
    )
    """Provides the status of the specified Call Analytics job. If the status is COMPLETED, the job is finished and you
    can find the results at the location specified in TranscriptFileUri (or RedactedTranscriptFileUri, if you requested
    transcript redaction). If the status is FAILED, FailureReason provides details on why your transcription job
    failed."""

    call_analytics_job_details: Optional[CallAnalyticsJobDetails] = Field(
        default=UNSET, alias="CallAnalyticsJobDetails"
    )
    language_code: Optional[LanguageCodeOrStr] = Field(default=UNSET, alias="LanguageCode")
    """The language code used to create your Call Analytics job. For a list of supported languages and their associated
    language codes, refer to the Supported languages table. If you do not know the language spoken in your media file,
    you can omit this field and let Amazon Transcribe automatically identify the language of your media. To improve the
    accuracy of language identification, you can include several language codes and Amazon Transcribe chooses the
    closest match for your transcription."""

    media_sample_rate_hertz: Optional[int] = Field(default=UNSET, alias="MediaSampleRateHertz")
    """The sample rate, in hertz, of the audio track in your input media file."""

    media_format: Optional[MediaFormatOrStr] = Field(default=UNSET, alias="MediaFormat")
    """The format of the input media file."""

    media: Optional[Media] = Field(default=UNSET, alias="Media")
    transcript: Optional[Transcript] = Field(default=UNSET, alias="Transcript")
    start_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="StartTime")
    """The date and time the specified Call Analytics job began processing. Timestamps are in the format
    YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC. For example, 2022-05-04T12:32:58.789000-07:00 represents a transcription job that
    started processing at 12:32 PM UTC-7 on May 4, 2022."""

    creation_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="CreationTime")
    """The date and time the specified Call Analytics job request was made. Timestamps are in the format
    YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC. For example, 2022-05-04T12:32:58.761000-07:00 represents a transcription job that
    started processing at 12:32 PM UTC-7 on May 4, 2022."""

    completion_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="CompletionTime")
    """The date and time the specified Call Analytics job finished processing. Timestamps are in the format
    YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC. For example, 2022-05-04T12:33:13.922000-07:00 represents a transcription job that
    started processing at 12:33 PM UTC-7 on May 4, 2022."""

    failure_reason: Optional[str] = Field(default=UNSET, alias="FailureReason")
    """If CallAnalyticsJobStatus is FAILED, FailureReason contains information about why the Call Analytics job request
    failed. The FailureReason field contains one of the following values: Unsupported media format. The media format
    specified in MediaFormat isn't valid. Refer to refer to the MediaFormat parameter for a list of supported formats.
    The media format provided does not match the detected media format. The media format specified in MediaFormat
    doesn't match the format of the input file. Check the media format of your media file and correct the specified
    value. Invalid sample rate for audio"""

    data_access_role_arn: Optional[str] = Field(default=UNSET, alias="DataAccessRoleArn")
    """The Amazon Resource Name (ARN) you included in your request."""

    identified_language_score: Optional[float] = Field(default=UNSET, alias="IdentifiedLanguageScore")
    """The confidence score associated with the language identified in your media file. Confidence scores are values
    between 0 and 1; a larger value indicates a higher probability that the identified language correctly matches the
    language spoken in your media."""

    settings: Optional[CallAnalyticsJobSettings] = Field(default=UNSET, alias="Settings")
    channel_definitions: Optional[list[ChannelDefinition]] = Field(default=UNSET, alias="ChannelDefinitions")
    """Indicates which speaker is on which channel."""

    tags: Optional[list[TagModel]] = Field(default=UNSET, alias="Tags")
    """The tags, each in the form of a key:value pair, assigned to the specified call analytics job."""


class CallAnalyticsJobDict(TypedDict):
    call_analytics_job_name: NotRequired[str]
    call_analytics_job_status: NotRequired[CallAnalyticsJobStatusOrStr]
    call_analytics_job_details: NotRequired[CallAnalyticsJobDetailsDict]
    language_code: NotRequired[LanguageCodeOrStr]
    media_sample_rate_hertz: NotRequired[int]
    media_format: NotRequired[MediaFormatOrStr]
    media: NotRequired[MediaDict]
    transcript: NotRequired[TranscriptDict]
    start_time: NotRequired[RFC3339DateTime]
    creation_time: NotRequired[RFC3339DateTime]
    completion_time: NotRequired[RFC3339DateTime]
    failure_reason: NotRequired[str]
    data_access_role_arn: NotRequired[str]
    identified_language_score: NotRequired[float]
    settings: NotRequired[CallAnalyticsJobSettingsDict]
    channel_definitions: NotRequired[list[ChannelDefinitionDict]]
    tags: NotRequired[list[TagModelDict]]

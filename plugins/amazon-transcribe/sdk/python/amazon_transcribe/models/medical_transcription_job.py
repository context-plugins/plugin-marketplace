from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.content_identification_type import ContentIdentificationTypeOrStr
from .enums.language_code_amazon_transcribe_service_medical_transcription_job_api import (
    LanguageCodeAmazonTranscribeServiceMedicalTranscriptionJobApiOrStr,
)
from .enums.media_format import MediaFormatOrStr
from .enums.specialty import SpecialtyOrStr
from .enums.transcription_job_status import TranscriptionJobStatusOrStr
from .enums.type import TypeOrStr
from .media import Media, MediaDict
from .medical_transcript import MedicalTranscript, MedicalTranscriptDict
from .medical_transcription_setting import MedicalTranscriptionSetting, MedicalTranscriptionSettingDict
from .tag_model import TagModel, TagModelDict


class MedicalTranscriptionJob(SdkBaseModel):
    medical_transcription_job_name: Optional[str] = Field(default=UNSET, alias="MedicalTranscriptionJobName")
    """The name of the medical transcription job. Job names are case sensitive and must be unique within an Amazon Web
    Services account."""

    transcription_job_status: Optional[TranscriptionJobStatusOrStr] = Field(
        default=UNSET, alias="TranscriptionJobStatus"
    )
    """Provides the status of the specified medical transcription job. If the status is COMPLETED, the job is finished
    and you can find the results at the location specified in TranscriptFileUri. If the status is FAILED, FailureReason
    provides details on why your transcription job failed."""

    language_code: Optional[LanguageCodeAmazonTranscribeServiceMedicalTranscriptionJobApiOrStr] = Field(
        default=UNSET, alias="LanguageCode"
    )
    """The language code used to create your medical transcription job. US English (en-US) is the only supported
    language for medical transcriptions."""

    media_sample_rate_hertz: Optional[int] = Field(default=UNSET, alias="MediaSampleRateHertz")
    """The sample rate, in hertz, of the audio track in your input media file."""

    media_format: Optional[MediaFormatOrStr] = Field(default=UNSET, alias="MediaFormat")
    """The format of the input media file."""

    media: Optional[Media] = Field(default=UNSET, alias="Media")
    transcript: Optional[MedicalTranscript] = Field(default=UNSET, alias="Transcript")
    start_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="StartTime")
    """The date and time the specified medical transcription job began processing. Timestamps are in the format
    YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC. For example, 2022-05-04T12:32:58.789000-07:00 represents a transcription job that
    started processing at 12:32 PM UTC-7 on May 4, 2022."""

    creation_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="CreationTime")
    """The date and time the specified medical transcription job request was made. Timestamps are in the format
    YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC. For example, 2022-05-04T12:32:58.761000-07:00 represents a transcription job that
    started processing at 12:32 PM UTC-7 on May 4, 2022."""

    completion_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="CompletionTime")
    """The date and time the specified medical transcription job finished processing. Timestamps are in the format
    YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC. For example, 2022-05-04T12:33:13.922000-07:00 represents a transcription job that
    started processing at 12:33 PM UTC-7 on May 4, 2022."""

    failure_reason: Optional[str] = Field(default=UNSET, alias="FailureReason")
    """If TranscriptionJobStatus is FAILED, FailureReason contains information about why the transcription job request
    failed. The FailureReason field contains one of the following values: Unsupported media format. The media format
    specified in MediaFormat isn't valid. Refer to refer to the MediaFormat parameter for a list of supported formats.
    The media format provided does not match the detected media format. The media format specified in MediaFormat
    doesn't match the format of the input file. Check the media format of your media file and correct the specified
    value. Invalid sample rate for audio f"""

    settings: Optional[MedicalTranscriptionSetting] = Field(default=UNSET, alias="Settings")
    content_identification_type: Optional[ContentIdentificationTypeOrStr] = Field(
        default=UNSET, alias="ContentIdentificationType"
    )
    """Indicates whether content identification was enabled for your transcription request."""

    specialty: Optional[SpecialtyOrStr] = Field(default=UNSET, alias="Specialty")
    """Describes the medical specialty represented in your media."""

    type_: Optional[TypeOrStr] = Field(default=UNSET, alias="Type")
    """Indicates whether the input media is a dictation or a conversation, as specified in the
    StartMedicalTranscriptionJob request."""

    tags: Optional[list[TagModel]] = Field(default=UNSET, alias="Tags")
    """The tags, each in the form of a key:value pair, assigned to the specified medical transcription job."""


class MedicalTranscriptionJobDict(TypedDict):
    medical_transcription_job_name: NotRequired[str]
    transcription_job_status: NotRequired[TranscriptionJobStatusOrStr]
    language_code: NotRequired[LanguageCodeAmazonTranscribeServiceMedicalTranscriptionJobApiOrStr]
    media_sample_rate_hertz: NotRequired[int]
    media_format: NotRequired[MediaFormatOrStr]
    media: NotRequired[MediaDict]
    transcript: NotRequired[MedicalTranscriptDict]
    start_time: NotRequired[RFC3339DateTime]
    creation_time: NotRequired[RFC3339DateTime]
    completion_time: NotRequired[RFC3339DateTime]
    failure_reason: NotRequired[str]
    settings: NotRequired[MedicalTranscriptionSettingDict]
    content_identification_type: NotRequired[ContentIdentificationTypeOrStr]
    specialty: NotRequired[SpecialtyOrStr]
    type_: NotRequired[TypeOrStr]
    tags: NotRequired[list[TagModelDict]]

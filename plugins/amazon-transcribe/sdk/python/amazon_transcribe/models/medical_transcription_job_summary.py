from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.content_identification_type1 import ContentIdentificationType1OrStr
from .enums.language_code1_amazon_transcribe_service_medical_transcription_job_api import (
    LanguageCode1AmazonTranscribeServiceMedicalTranscriptionJobApiOrStr,
)
from .enums.output_location_type import OutputLocationTypeOrStr
from .enums.specialty1 import Specialty1OrStr
from .enums.transcription_job_status1 import TranscriptionJobStatus1OrStr
from .enums.type import TypeOrStr


class MedicalTranscriptionJobSummary(SdkBaseModel):
    medical_transcription_job_name: Optional[str] = Field(default=UNSET, alias="MedicalTranscriptionJobName")
    """The name of the medical transcription job. Job names are case sensitive and must be unique within an Amazon Web
    Services account."""

    creation_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="CreationTime")
    """The date and time the specified medical transcription job request was made. Timestamps are in the format
    YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC. For example, 2022-05-04T12:32:58.761000-07:00 represents a transcription job that
    started processing at 12:32 PM UTC-7 on May 4, 2022."""

    start_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="StartTime")
    """The date and time your medical transcription job began processing. Timestamps are in the format
    YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC. For example, 2022-05-04T12:32:58.789000-07:00 represents a transcription job that
    started processing at 12:32 PM UTC-7 on May 4, 2022."""

    completion_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="CompletionTime")
    """The date and time the specified medical transcription job finished processing. Timestamps are in the format
    YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC. For example, 2022-05-04T12:33:13.922000-07:00 represents a transcription job that
    started processing at 12:33 PM UTC-7 on May 4, 2022."""

    language_code: Optional[LanguageCode1AmazonTranscribeServiceMedicalTranscriptionJobApiOrStr] = Field(
        default=UNSET, alias="LanguageCode"
    )
    """The language code used to create your medical transcription. US English (en-US) is the only supported language
    for medical transcriptions."""

    transcription_job_status: Optional[TranscriptionJobStatus1OrStr] = Field(
        default=UNSET, alias="TranscriptionJobStatus"
    )
    """Provides the status of your medical transcription job. If the status is COMPLETED, the job is finished and you
    can find the results at the location specified in TranscriptFileUri. If the status is FAILED, FailureReason provides
    details on why your transcription job failed."""

    failure_reason: Optional[str] = Field(default=UNSET, alias="FailureReason")
    """If TranscriptionJobStatus is FAILED, FailureReason contains information about why the transcription job failed.
    See also: Common Errors."""

    output_location_type: Optional[OutputLocationTypeOrStr] = Field(default=UNSET, alias="OutputLocationType")
    """Indicates where the specified medical transcription output is stored. If the value is CUSTOMER_BUCKET, the
    location is the Amazon S3 bucket you specified using the OutputBucketName parameter in your request. If you also
    included OutputKey in your request, your output is located in the path you specified in your request. If the value
    is SERVICE_BUCKET, the location is a service-managed Amazon S3 bucket. To access a transcript stored in a
    service-managed bucket, use the URI shown in the TranscriptFileUri field."""

    specialty: Optional[Specialty1OrStr] = Field(default=UNSET, alias="Specialty")
    """Provides the medical specialty represented in your media."""

    content_identification_type: Optional[ContentIdentificationType1OrStr] = Field(
        default=UNSET, alias="ContentIdentificationType"
    )
    """Labels all personal health information (PHI) identified in your transcript. For more information, see Identifying
    personal health information (PHI) in a transcription."""

    type_: Optional[TypeOrStr] = Field(default=UNSET, alias="Type")
    """Indicates whether the input media is a dictation or a conversation, as specified in the
    StartMedicalTranscriptionJob request."""


class MedicalTranscriptionJobSummaryDict(TypedDict):
    medical_transcription_job_name: NotRequired[str]
    creation_time: NotRequired[RFC3339DateTime]
    start_time: NotRequired[RFC3339DateTime]
    completion_time: NotRequired[RFC3339DateTime]
    language_code: NotRequired[LanguageCode1AmazonTranscribeServiceMedicalTranscriptionJobApiOrStr]
    transcription_job_status: NotRequired[TranscriptionJobStatus1OrStr]
    failure_reason: NotRequired[str]
    output_location_type: NotRequired[OutputLocationTypeOrStr]
    specialty: NotRequired[Specialty1OrStr]
    content_identification_type: NotRequired[ContentIdentificationType1OrStr]
    type_: NotRequired[TypeOrStr]

from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.language_code_amazon_transcribe_service_medical_scribe_job_api import (
    LanguageCodeAmazonTranscribeServiceMedicalScribeJobApiOrStr,
)
from .enums.medical_scribe_job_status import MedicalScribeJobStatusOrStr


class MedicalScribeJobSummary(SdkBaseModel):
    medical_scribe_job_name: Optional[str] = Field(default=UNSET, alias="MedicalScribeJobName")
    """The name of the Medical Scribe job. Job names are case sensitive and must be unique within an Amazon Web Services
    account."""

    creation_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="CreationTime")
    """The date and time the specified Medical Scribe job request was made. Timestamps are in the format
    YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC. For example, 2022-05-04T12:32:58.761000-07:00 represents a Medical Scribe job that
    started processing at 12:32 PM UTC-7 on May 4, 2022."""

    start_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="StartTime")
    """The date and time your Medical Scribe job began processing. Timestamps are in the format
    YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC. For example, 2022-05-04T12:32:58.789000-07:00 represents a Medical Scribe job that
    started processing at 12:32 PM UTC-7 on May 4, 2022."""

    completion_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="CompletionTime")
    """The date and time the specified Medical Scribe job finished processing. Timestamps are in the format
    YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC. For example, 2022-05-04T12:32:58.761000-07:00 represents a Medical Scribe job that
    finished processing at 12:32 PM UTC-7 on May 4, 2022."""

    language_code: Optional[LanguageCodeAmazonTranscribeServiceMedicalScribeJobApiOrStr] = Field(
        default=UNSET, alias="LanguageCode"
    )
    """The language code used to create your Medical Scribe job. US English (en-US) is the only supported language for
    Medical Scribe jobs."""

    medical_scribe_job_status: Optional[MedicalScribeJobStatusOrStr] = Field(
        default=UNSET, alias="MedicalScribeJobStatus"
    )
    """Provides the status of the specified Medical Scribe job. If the status is COMPLETED, the job is finished and you
    can find the results at the location specified in MedicalScribeOutput If the status is FAILED, FailureReason
    provides details on why your Medical Scribe job failed."""

    failure_reason: Optional[str] = Field(default=UNSET, alias="FailureReason")
    """If MedicalScribeJobStatus is FAILED, FailureReason contains information about why the transcription job failed.
    See also: Common Errors."""


class MedicalScribeJobSummaryDict(TypedDict):
    medical_scribe_job_name: NotRequired[str]
    creation_time: NotRequired[RFC3339DateTime]
    start_time: NotRequired[RFC3339DateTime]
    completion_time: NotRequired[RFC3339DateTime]
    language_code: NotRequired[LanguageCodeAmazonTranscribeServiceMedicalScribeJobApiOrStr]
    medical_scribe_job_status: NotRequired[MedicalScribeJobStatusOrStr]
    failure_reason: NotRequired[str]

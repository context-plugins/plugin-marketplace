from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .call_analytics_job_details import CallAnalyticsJobDetails, CallAnalyticsJobDetailsDict
from .enums.call_analytics_job_status1 import CallAnalyticsJobStatus1OrStr
from .enums.language_code1 import LanguageCode1OrStr


class CallAnalyticsJobSummary(SdkBaseModel):
    call_analytics_job_name: Optional[str] = Field(default=UNSET, alias="CallAnalyticsJobName")
    """The name of the Call Analytics job. Job names are case sensitive and must be unique within an Amazon Web Services
    account."""

    creation_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="CreationTime")
    """The date and time the specified Call Analytics job request was made. Timestamps are in the format
    YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC. For example, 2022-05-04T12:32:58.761000-07:00 represents a transcription job that
    started processing at 12:32 PM UTC-7 on May 4, 2022."""

    start_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="StartTime")
    """The date and time your Call Analytics job began processing. Timestamps are in the format
    YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC. For example, 2022-05-04T12:32:58.789000-07:00 represents a transcription job that
    started processing at 12:32 PM UTC-7 on May 4, 2022."""

    completion_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="CompletionTime")
    """The date and time the specified Call Analytics job finished processing. Timestamps are in the format
    YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC. For example, 2022-05-04T12:33:13.922000-07:00 represents a transcription job that
    started processing at 12:33 PM UTC-7 on May 4, 2022."""

    language_code: Optional[LanguageCode1OrStr] = Field(default=UNSET, alias="LanguageCode")
    """The language code used to create your Call Analytics transcription."""

    call_analytics_job_status: Optional[CallAnalyticsJobStatus1OrStr] = Field(
        default=UNSET, alias="CallAnalyticsJobStatus"
    )
    """Provides the status of your Call Analytics job. If the status is COMPLETED, the job is finished and you can find
    the results at the location specified in TranscriptFileUri (or RedactedTranscriptFileUri, if you requested
    transcript redaction). If the status is FAILED, FailureReason provides details on why your transcription job
    failed."""

    call_analytics_job_details: Optional[CallAnalyticsJobDetails] = Field(
        default=UNSET, alias="CallAnalyticsJobDetails"
    )
    failure_reason: Optional[str] = Field(default=UNSET, alias="FailureReason")
    """If CallAnalyticsJobStatus is FAILED, FailureReason contains information about why the Call Analytics job failed.
    See also: Common Errors."""


class CallAnalyticsJobSummaryDict(TypedDict):
    call_analytics_job_name: NotRequired[str]
    creation_time: NotRequired[RFC3339DateTime]
    start_time: NotRequired[RFC3339DateTime]
    completion_time: NotRequired[RFC3339DateTime]
    language_code: NotRequired[LanguageCode1OrStr]
    call_analytics_job_status: NotRequired[CallAnalyticsJobStatus1OrStr]
    call_analytics_job_details: NotRequired[CallAnalyticsJobDetailsDict]
    failure_reason: NotRequired[str]

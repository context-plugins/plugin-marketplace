from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.language_code_amazon_transcribe_service_medical_scribe_job_api import (
    LanguageCodeAmazonTranscribeServiceMedicalScribeJobApiOrStr,
)
from .enums.medical_scribe_job_status import MedicalScribeJobStatusOrStr
from .media import Media, MediaDict
from .medical_scribe_channel_definition import MedicalScribeChannelDefinition, MedicalScribeChannelDefinitionDict
from .medical_scribe_output import MedicalScribeOutput, MedicalScribeOutputDict
from .medical_scribe_settings import MedicalScribeSettings, MedicalScribeSettingsDict
from .tag_model import TagModel, TagModelDict


class MedicalScribeJob(SdkBaseModel):
    medical_scribe_job_name: Optional[str] = Field(default=UNSET, alias="MedicalScribeJobName")
    """The name of the Medical Scribe job. Job names are case sensitive and must be unique within an Amazon Web Services
    account."""

    medical_scribe_job_status: Optional[MedicalScribeJobStatusOrStr] = Field(
        default=UNSET, alias="MedicalScribeJobStatus"
    )
    """Provides the status of the specified Medical Scribe job. If the status is COMPLETED, the job is finished and you
    can find the results at the location specified in MedicalScribeOutput If the status is FAILED, FailureReason
    provides details on why your Medical Scribe job failed."""

    language_code: Optional[LanguageCodeAmazonTranscribeServiceMedicalScribeJobApiOrStr] = Field(
        default=UNSET, alias="LanguageCode"
    )
    """The language code used to create your Medical Scribe job. US English (en-US) is the only supported language for
    Medical Scribe jobs."""

    media: Optional[Media] = Field(default=UNSET, alias="Media")
    medical_scribe_output: Optional[MedicalScribeOutput] = Field(default=UNSET, alias="MedicalScribeOutput")
    start_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="StartTime")
    """The date and time your Medical Scribe job began processing. Timestamps are in the format
    YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC. For example, 2022-05-04T12:32:58.789000-07:00 represents a Medical Scribe job that
    started processing at 12:32 PM UTC-7 on May 4, 2022."""

    creation_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="CreationTime")
    """The date and time the specified Medical Scribe job request was made. Timestamps are in the format
    YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC. For example, 2022-05-04T12:32:58.761000-07:00 represents a Medical Scribe job that
    started processing at 12:32 PM UTC-7 on May 4, 2022."""

    completion_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="CompletionTime")
    """The date and time the specified Medical Scribe job finished processing. Timestamps are in the format
    YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC. For example, 2022-05-04T12:32:58.761000-07:00 represents a Medical Scribe job that
    finished processing at 12:32 PM UTC-7 on May 4, 2022."""

    failure_reason: Optional[str] = Field(default=UNSET, alias="FailureReason")
    """If MedicalScribeJobStatus is FAILED, FailureReason contains information about why the transcription job failed.
    See also: Common Errors."""

    settings: Optional[MedicalScribeSettings] = Field(default=UNSET, alias="Settings")
    data_access_role_arn: Optional[str] = Field(default=UNSET, alias="DataAccessRoleArn")
    """The Amazon Resource Name (ARN) of an IAM role that has permissions to access the Amazon S3 bucket that contains
    your input files, write to the output bucket, and use your KMS key if supplied. If the role that you specify doesn’t
    have the appropriate permissions your request fails. IAM role ARNs have the format
    arn:partition:iam::account:role/role-name-with-path. For example: arn:aws:iam::111122223333:role/Admin. For more
    information, see IAM ARNs."""

    channel_definitions: Optional[list[MedicalScribeChannelDefinition]] = Field(
        default=UNSET, alias="ChannelDefinitions"
    )
    """Makes it possible to specify which speaker is on which channel. For example, if the clinician is the first
    participant to speak, you would set ChannelId of the first ChannelDefinition in the list to 0 (to indicate the first
    channel) and ParticipantRole to CLINICIAN (to indicate that it's the clinician speaking). Then you would set the
    ChannelId of the second ChannelDefinition in the list to 1 (to indicate the second channel) and ParticipantRole to
    PATIENT (to indicate that it's the patient speaking)."""

    medical_scribe_context_provided: Optional[bool] = Field(default=UNSET, alias="MedicalScribeContextProvided")
    """Indicates whether the MedicalScribeContext object was provided when the Medical Scribe job was started."""

    tags: Optional[list[TagModel]] = Field(default=UNSET, alias="Tags")
    """Adds one or more custom tags, each in the form of a key:value pair, to the Medical Scribe job. To learn more
    about using tags with Amazon Transcribe, refer to Tagging resources."""


class MedicalScribeJobDict(TypedDict):
    medical_scribe_job_name: NotRequired[str]
    medical_scribe_job_status: NotRequired[MedicalScribeJobStatusOrStr]
    language_code: NotRequired[LanguageCodeAmazonTranscribeServiceMedicalScribeJobApiOrStr]
    media: NotRequired[MediaDict]
    medical_scribe_output: NotRequired[MedicalScribeOutputDict]
    start_time: NotRequired[RFC3339DateTime]
    creation_time: NotRequired[RFC3339DateTime]
    completion_time: NotRequired[RFC3339DateTime]
    failure_reason: NotRequired[str]
    settings: NotRequired[MedicalScribeSettingsDict]
    data_access_role_arn: NotRequired[str]
    channel_definitions: NotRequired[list[MedicalScribeChannelDefinitionDict]]
    medical_scribe_context_provided: NotRequired[bool]
    tags: NotRequired[list[TagModelDict]]

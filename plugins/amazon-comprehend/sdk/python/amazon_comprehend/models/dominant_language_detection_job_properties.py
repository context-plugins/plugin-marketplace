from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.job_status1 import JobStatus1OrStr
from .input_data_config import InputDataConfig, InputDataConfigDict
from .output_data_config import OutputDataConfig, OutputDataConfigDict
from .vpc_config import VpcConfig, VpcConfigDict


class DominantLanguageDetectionJobProperties(SdkBaseModel):
    job_id: Optional[str] = Field(default=UNSET, alias="JobId")
    """The identifier assigned to the dominant language detection job."""

    job_arn: Optional[str] = Field(default=UNSET, alias="JobArn")
    """The Amazon Resource Name (ARN) of the dominant language detection job. It is a unique, fully qualified identifier
    for the job. It includes the Amazon Web Services account, Amazon Web Services Region, and the job ID. The format of
    the ARN is as follows: arn::comprehend:::dominant-language-detection-job/ The following is an example job ARN:
    arn:aws:comprehend:us-west-2:111122223333:dominant-language-detection-job/1234abcd12ab34cd56ef1234567890ab"""

    job_name: Optional[str] = Field(default=UNSET, alias="JobName")
    """The name that you assigned to the dominant language detection job."""

    job_status: Optional[JobStatus1OrStr] = Field(default=UNSET, alias="JobStatus")
    """The current status of the dominant language detection job. If the status is FAILED, the Message field shows the
    reason for the failure."""

    message: Optional[str] = Field(default=UNSET, alias="Message")
    """A description for the status of a job."""

    submit_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="SubmitTime")
    """The time that the dominant language detection job was submitted for processing."""

    end_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="EndTime")
    """The time that the dominant language detection job completed."""

    input_data_config: Optional[InputDataConfig] = Field(default=UNSET, alias="InputDataConfig")
    output_data_config: Optional[OutputDataConfig] = Field(default=UNSET, alias="OutputDataConfig")
    data_access_role_arn: Optional[str] = Field(default=UNSET, alias="DataAccessRoleArn")
    """The Amazon Resource Name (ARN) of the IAM role that grants Amazon Comprehend read access to your input data."""

    volume_kms_key_id: Optional[str] = Field(default=UNSET, alias="VolumeKmsKeyId")
    """ID for the Amazon Web Services Key Management Service (KMS) key that Amazon Comprehend uses to encrypt data on
    the storage volume attached to the ML compute instance(s) that process the analysis job. The VolumeKmsKeyId can be
    either of the following formats: KMS Key ID: "1234abcd-12ab-34cd-56ef-1234567890ab" Amazon Resource Name (ARN) of a
    KMS Key: "arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"
    """

    vpc_config: Optional[VpcConfig] = Field(default=UNSET, alias="VpcConfig")


class DominantLanguageDetectionJobPropertiesDict(TypedDict):
    job_id: NotRequired[str]
    job_arn: NotRequired[str]
    job_name: NotRequired[str]
    job_status: NotRequired[JobStatus1OrStr]
    message: NotRequired[str]
    submit_time: NotRequired[RFC3339DateTime]
    end_time: NotRequired[RFC3339DateTime]
    input_data_config: NotRequired[InputDataConfigDict]
    output_data_config: NotRequired[OutputDataConfigDict]
    data_access_role_arn: NotRequired[str]
    volume_kms_key_id: NotRequired[str]
    vpc_config: NotRequired[VpcConfigDict]

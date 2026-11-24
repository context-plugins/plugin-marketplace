from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.job_status8 import JobStatus8OrStr
from .input_data_config import InputDataConfig, InputDataConfigDict
from .output_data_config import OutputDataConfig, OutputDataConfigDict
from .vpc_config import VpcConfig, VpcConfigDict


class TopicsDetectionJobProperties(SdkBaseModel):
    job_id: Optional[str] = Field(default=UNSET, alias="JobId")
    """The identifier assigned to the topic detection job."""

    job_arn: Optional[str] = Field(default=UNSET, alias="JobArn")
    """The Amazon Resource Name (ARN) of the topics detection job. It is a unique, fully qualified identifier for the
    job. It includes the Amazon Web Services account, Amazon Web Services Region, and the job ID. The format of the ARN
    is as follows: arn::comprehend:::topics-detection-job/ The following is an example job ARN:
    arn:aws:comprehend:us-west-2:111122223333:topics-detection-job/1234abcd12ab34cd56ef1234567890ab"""

    job_name: Optional[str] = Field(default=UNSET, alias="JobName")
    """The name of the topic detection job."""

    job_status: Optional[JobStatus8OrStr] = Field(default=UNSET, alias="JobStatus")
    """The current status of the topic detection job. If the status is Failed, the reason for the failure is shown in
    the Message field."""

    message: Optional[str] = Field(default=UNSET, alias="Message")
    """A description for the status of a job."""

    submit_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="SubmitTime")
    """The time that the topic detection job was submitted for processing."""

    end_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="EndTime")
    """The time that the topic detection job was completed."""

    input_data_config: Optional[InputDataConfig] = Field(default=UNSET, alias="InputDataConfig")
    output_data_config: Optional[OutputDataConfig] = Field(default=UNSET, alias="OutputDataConfig")
    number_of_topics: Optional[int] = Field(default=UNSET, alias="NumberOfTopics")
    """The number of topics to detect supplied when you created the topic detection job. The default is 10."""

    data_access_role_arn: Optional[str] = Field(default=UNSET, alias="DataAccessRoleArn")
    """The Amazon Resource Name (ARN) of the IAM role that grants Amazon Comprehend read access to your job data."""

    volume_kms_key_id: Optional[str] = Field(default=UNSET, alias="VolumeKmsKeyId")
    """ID for the Amazon Web Services Key Management Service (KMS) key that Amazon Comprehend uses to encrypt data on
    the storage volume attached to the ML compute instance(s) that process the analysis job. The VolumeKmsKeyId can be
    either of the following formats: KMS Key ID: "1234abcd-12ab-34cd-56ef-1234567890ab" Amazon Resource Name (ARN) of a
    KMS Key: "arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"
    """

    vpc_config: Optional[VpcConfig] = Field(default=UNSET, alias="VpcConfig")


class TopicsDetectionJobPropertiesDict(TypedDict):
    job_id: NotRequired[str]
    job_arn: NotRequired[str]
    job_name: NotRequired[str]
    job_status: NotRequired[JobStatus8OrStr]
    message: NotRequired[str]
    submit_time: NotRequired[RFC3339DateTime]
    end_time: NotRequired[RFC3339DateTime]
    input_data_config: NotRequired[InputDataConfigDict]
    output_data_config: NotRequired[OutputDataConfigDict]
    number_of_topics: NotRequired[int]
    data_access_role_arn: NotRequired[str]
    volume_kms_key_id: NotRequired[str]
    vpc_config: NotRequired[VpcConfigDict]

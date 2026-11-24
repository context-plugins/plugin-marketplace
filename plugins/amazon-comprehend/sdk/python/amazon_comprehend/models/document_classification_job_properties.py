from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.job_status import JobStatusOrStr
from .input_data_config import InputDataConfig, InputDataConfigDict
from .output_data_config import OutputDataConfig, OutputDataConfigDict
from .vpc_config import VpcConfig, VpcConfigDict


class DocumentClassificationJobProperties(SdkBaseModel):
    job_id: Optional[str] = Field(default=UNSET, alias="JobId")
    """The identifier assigned to the document classification job."""

    job_arn: Optional[str] = Field(default=UNSET, alias="JobArn")
    """The Amazon Resource Name (ARN) of the document classification job. It is a unique, fully qualified identifier for
    the job. It includes the Amazon Web Services account, Amazon Web Services Region, and the job ID. The format of the
    ARN is as follows: arn::comprehend:::document-classification-job/ The following is an example job ARN:
    arn:aws:comprehend:us-west-2:111122223333:document-classification-job/1234abcd12ab34cd56ef1234567890ab"""

    job_name: Optional[str] = Field(default=UNSET, alias="JobName")
    """The name that you assigned to the document classification job."""

    job_status: Optional[JobStatusOrStr] = Field(default=UNSET, alias="JobStatus")
    """The current status of the document classification job. If the status is FAILED, the Message field shows the
    reason for the failure."""

    message: Optional[str] = Field(default=UNSET, alias="Message")
    """A description of the status of the job."""

    submit_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="SubmitTime")
    """The time that the document classification job was submitted for processing."""

    end_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="EndTime")
    """The time that the document classification job completed."""

    document_classifier_arn: Optional[str] = Field(default=UNSET, alias="DocumentClassifierArn")
    """The Amazon Resource Name (ARN) that identifies the document classifier."""

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
    flywheel_arn: Optional[str] = Field(default=UNSET, alias="FlywheelArn")
    """The Amazon Resource Number (ARN) of the flywheel"""


class DocumentClassificationJobPropertiesDict(TypedDict):
    job_id: NotRequired[str]
    job_arn: NotRequired[str]
    job_name: NotRequired[str]
    job_status: NotRequired[JobStatusOrStr]
    message: NotRequired[str]
    submit_time: NotRequired[RFC3339DateTime]
    end_time: NotRequired[RFC3339DateTime]
    document_classifier_arn: NotRequired[str]
    input_data_config: NotRequired[InputDataConfigDict]
    output_data_config: NotRequired[OutputDataConfigDict]
    data_access_role_arn: NotRequired[str]
    volume_kms_key_id: NotRequired[str]
    vpc_config: NotRequired[VpcConfigDict]
    flywheel_arn: NotRequired[str]

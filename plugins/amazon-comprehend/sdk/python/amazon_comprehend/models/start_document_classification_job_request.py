from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .input_data_config import InputDataConfig, InputDataConfigDict
from .output_data_config import OutputDataConfig, OutputDataConfigDict
from .tag_model import TagModel, TagModelDict
from .vpc_config import VpcConfig, VpcConfigDict


class StartDocumentClassificationJobRequest(SdkBaseModel):
    job_name: Optional[str] = Field(default=UNSET, alias="JobName")
    """The identifier of the job."""

    document_classifier_arn: Optional[str] = Field(default=UNSET, alias="DocumentClassifierArn")
    """The Amazon Resource Name (ARN) of the document classifier to use to process the job."""

    input_data_config: InputDataConfig = Field(alias="InputDataConfig")
    output_data_config: OutputDataConfig = Field(alias="OutputDataConfig")
    data_access_role_arn: str = Field(alias="DataAccessRoleArn")
    """The Amazon Resource Name (ARN) of the IAM role that grants Amazon Comprehend read access to your input data."""

    client_request_token: Optional[str] = Field(default=UNSET, alias="ClientRequestToken")
    """A unique identifier for the request. If you do not set the client request token, Amazon Comprehend generates
    one."""

    volume_kms_key_id: Optional[str] = Field(default=UNSET, alias="VolumeKmsKeyId")
    """ID for the Amazon Web Services Key Management Service (KMS) key that Amazon Comprehend uses to encrypt data on
    the storage volume attached to the ML compute instance(s) that process the analysis job. The VolumeKmsKeyId can be
    either of the following formats: KMS Key ID: "1234abcd-12ab-34cd-56ef-1234567890ab" Amazon Resource Name (ARN) of a
    KMS Key: "arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"
    """

    vpc_config: Optional[VpcConfig] = Field(default=UNSET, alias="VpcConfig")
    tags: Optional[list[TagModel]] = Field(default=UNSET, alias="Tags")
    """Tags to associate with the document classification job. A tag is a key-value pair that adds metadata to a
    resource used by Amazon Comprehend. For example, a tag with "Sales" as the key might be added to a resource to
    indicate its use by the sales department."""

    flywheel_arn: Optional[str] = Field(default=UNSET, alias="FlywheelArn")
    """The Amazon Resource Number (ARN) of the flywheel associated with the model to use."""


class StartDocumentClassificationJobRequestDict(TypedDict):
    job_name: NotRequired[str]
    document_classifier_arn: NotRequired[str]
    input_data_config: InputDataConfigDict
    output_data_config: OutputDataConfigDict
    data_access_role_arn: str
    client_request_token: NotRequired[str]
    volume_kms_key_id: NotRequired[str]
    vpc_config: NotRequired[VpcConfigDict]
    tags: NotRequired[list[TagModelDict]]
    flywheel_arn: NotRequired[str]

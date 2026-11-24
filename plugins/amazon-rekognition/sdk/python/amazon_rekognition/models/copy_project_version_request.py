from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .output_config import OutputConfig, OutputConfigDict


class CopyProjectVersionRequest(SdkBaseModel):
    source_project_arn: str = Field(alias="SourceProjectArn")
    """The ARN of the source project in the trusting AWS account."""

    source_project_version_arn: str = Field(alias="SourceProjectVersionArn")
    """The ARN of the model version in the source project that you want to copy to a destination project."""

    destination_project_arn: str = Field(alias="DestinationProjectArn")
    """The ARN of the project in the trusted AWS account that you want to copy the model version to."""

    version_name: str = Field(alias="VersionName")
    """A name for the version of the model that's copied to the destination project."""

    output_config: OutputConfig = Field(alias="OutputConfig")
    tags: Optional[dict[str, str]] = Field(default=UNSET, alias="Tags")
    """The key-value tags to assign to the model version."""

    kms_key_id: Optional[str] = Field(default=UNSET, alias="KmsKeyId")
    """The identifier for your AWS Key Management Service key (AWS KMS key). You can supply the Amazon Resource Name
    (ARN) of your KMS key, the ID of your KMS key, an alias for your KMS key, or an alias ARN. The key is used to
    encrypt training results and manifest files written to the output Amazon S3 bucket (OutputConfig). If you choose to
    use your own KMS key, you need the following permissions on the KMS key. kms:CreateGrant kms:DescribeKey
    kms:GenerateDataKey kms:Decrypt If you don't specify a value for KmsKeyId, images copied into the service are
    encrypted using a key that AWS owns and manages."""


class CopyProjectVersionRequestDict(TypedDict):
    source_project_arn: str
    source_project_version_arn: str
    destination_project_arn: str
    version_name: str
    output_config: OutputConfigDict
    tags: NotRequired[dict[str, str]]
    kms_key_id: NotRequired[str]

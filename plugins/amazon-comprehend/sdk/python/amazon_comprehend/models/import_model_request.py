from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .tag_model import TagModel, TagModelDict


class ImportModelRequest(SdkBaseModel):
    source_model_arn: str = Field(alias="SourceModelArn")
    """The Amazon Resource Name (ARN) of the custom model to import."""

    model_name: Optional[str] = Field(default=UNSET, alias="ModelName")
    """The name to assign to the custom model that is created in Amazon Comprehend by this import."""

    version_name: Optional[str] = Field(default=UNSET, alias="VersionName")
    """The version name given to the custom model that is created by this import. Version names can have a maximum of
    256 characters. Alphanumeric characters, hyphens (-) and underscores (_) are allowed. The version name must be
    unique among all models with the same classifier name in the account/Region."""

    model_kms_key_id: Optional[str] = Field(default=UNSET, alias="ModelKmsKeyId")
    """ID for the KMS key that Amazon Comprehend uses to encrypt trained custom models. The ModelKmsKeyId can be either
    of the following formats: KMS Key ID: "1234abcd-12ab-34cd-56ef-1234567890ab" Amazon Resource Name (ARN) of a KMS
    Key: "arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"
    """

    data_access_role_arn: Optional[str] = Field(default=UNSET, alias="DataAccessRoleArn")
    """The Amazon Resource Name (ARN) of the IAM role that grants Amazon Comprehend permission to use Amazon Key
    Management Service (KMS) to encrypt or decrypt the custom model."""

    tags: Optional[list[TagModel]] = Field(default=UNSET, alias="Tags")
    """Tags to associate with the custom model that is created by this import. A tag is a key-value pair that adds as a
    metadata to a resource used by Amazon Comprehend. For example, a tag with "Sales" as the key might be added to a
    resource to indicate its use by the sales department."""


class ImportModelRequestDict(TypedDict):
    source_model_arn: str
    model_name: NotRequired[str]
    version_name: NotRequired[str]
    model_kms_key_id: NotRequired[str]
    data_access_role_arn: NotRequired[str]
    tags: NotRequired[list[TagModelDict]]

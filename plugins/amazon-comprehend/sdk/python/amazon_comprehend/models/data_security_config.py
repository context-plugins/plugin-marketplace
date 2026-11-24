from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .vpc_config import VpcConfig, VpcConfigDict


class DataSecurityConfig(SdkBaseModel):
    model_kms_key_id: Optional[str] = Field(default=UNSET, alias="ModelKmsKeyId")
    """ID for the KMS key that Amazon Comprehend uses to encrypt trained custom models. The ModelKmsKeyId can be either
    of the following formats: KMS Key ID: "1234abcd-12ab-34cd-56ef-1234567890ab" Amazon Resource Name (ARN) of a KMS
    Key: "arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"
    """

    volume_kms_key_id: Optional[str] = Field(default=UNSET, alias="VolumeKmsKeyId")
    """ID for the KMS key that Amazon Comprehend uses to encrypt the volume."""

    data_lake_kms_key_id: Optional[str] = Field(default=UNSET, alias="DataLakeKmsKeyId")
    """ID for the KMS key that Amazon Comprehend uses to encrypt the data in the data lake."""

    vpc_config: Optional[VpcConfig] = Field(default=UNSET, alias="VpcConfig")


class DataSecurityConfigDict(TypedDict):
    model_kms_key_id: NotRequired[str]
    volume_kms_key_id: NotRequired[str]
    data_lake_kms_key_id: NotRequired[str]
    vpc_config: NotRequired[VpcConfigDict]

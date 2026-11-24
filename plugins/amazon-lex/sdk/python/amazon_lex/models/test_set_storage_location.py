from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class TestSetStorageLocation(SdkBaseModel):
    s3_bucket_name: str = Field(alias="s3BucketName")
    """The name of the Amazon S3 bucket in which the test set is stored."""

    s3_path: str = Field(alias="s3Path")
    """The path inside the Amazon S3 bucket where the test set is stored."""

    kms_key_arn: Optional[str] = Field(default=UNSET, alias="kmsKeyArn")
    """The Amazon Resource Name (ARN) of an Amazon Web Services Key Management Service (KMS) key for encrypting the test
    set."""


class TestSetStorageLocationDict(TypedDict):
    s3_bucket_name: str
    s3_path: str
    kms_key_arn: NotRequired[str]

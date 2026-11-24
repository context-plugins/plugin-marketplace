from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class S3BucketLogDestination(SdkBaseModel):
    kms_key_arn: Optional[str] = Field(default=UNSET, alias="kmsKeyArn")
    """The Amazon Resource Name (ARN) of an Amazon Web Services Key Management Service (KMS) key for encrypting audio
    log files stored in an S3 bucket."""

    s3_bucket_arn: str = Field(alias="s3BucketArn")
    """The Amazon Resource Name (ARN) of an Amazon S3 bucket where audio log files are stored."""

    log_prefix: str = Field(alias="logPrefix")
    """The S3 prefix to assign to audio log files."""


class S3BucketLogDestinationDict(TypedDict):
    kms_key_arn: NotRequired[str]
    s3_bucket_arn: str
    log_prefix: str

from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GrammarSlotTypeSource(SdkBaseModel):
    s3_bucket_name: str = Field(alias="s3BucketName")
    """The name of the Amazon S3 bucket that contains the grammar source."""

    s3_object_key: str = Field(alias="s3ObjectKey")
    """The path to the grammar in the Amazon S3 bucket."""

    kms_key_arn: Optional[str] = Field(default=UNSET, alias="kmsKeyArn")
    """The KMS key required to decrypt the contents of the grammar, if any."""


class GrammarSlotTypeSourceDict(TypedDict):
    s3_bucket_name: str
    s3_object_key: str
    kms_key_arn: NotRequired[str]

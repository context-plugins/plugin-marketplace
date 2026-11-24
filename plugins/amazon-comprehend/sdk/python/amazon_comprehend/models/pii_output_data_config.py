from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class PiiOutputDataConfig(SdkBaseModel):
    s3_uri: str = Field(alias="S3Uri")
    """When you use the PiiOutputDataConfig object with asynchronous operations, you specify the Amazon S3 location
    where you want to write the output data. For a PII entity detection job, the output file is plain text, not a
    compressed archive. The output file name is the same as the input file, with .out appended at the end."""

    kms_key_id: Optional[str] = Field(default=UNSET, alias="KmsKeyId")
    """ID for the Amazon Web Services Key Management Service (KMS) key that Amazon Comprehend uses to encrypt the output
    results from an analysis job."""


class PiiOutputDataConfigDict(TypedDict):
    s3_uri: str
    kms_key_id: NotRequired[str]

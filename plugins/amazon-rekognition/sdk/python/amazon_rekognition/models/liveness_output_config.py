from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class LivenessOutputConfig(SdkBaseModel):
    s3_bucket: str = Field(alias="S3Bucket")
    """The path to an AWS Amazon S3 bucket used to store Face Liveness session results."""

    s3_key_prefix: Optional[str] = Field(default=UNSET, alias="S3KeyPrefix")
    """The prefix prepended to the output files for the Face Liveness session results."""


class LivenessOutputConfigDict(TypedDict):
    s3_bucket: str
    s3_key_prefix: NotRequired[str]

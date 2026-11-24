from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class MediaAnalysisOutputConfig(SdkBaseModel):
    s3_bucket: str = Field(alias="S3Bucket")
    """Specifies the Amazon S3 bucket to contain the output of the media analysis job."""

    s3_key_prefix: Optional[str] = Field(default=UNSET, alias="S3KeyPrefix")
    """Specifies the Amazon S3 key prefix that comes after the name of the bucket you have designated for storage."""


class MediaAnalysisOutputConfigDict(TypedDict):
    s3_bucket: str
    s3_key_prefix: NotRequired[str]

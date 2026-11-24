from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .s3_bucket_log_destination import S3BucketLogDestination, S3BucketLogDestinationDict


class AudioLogDestination(SdkBaseModel):
    s3_bucket: S3BucketLogDestination = Field(alias="s3Bucket")


class AudioLogDestinationDict(TypedDict):
    s3_bucket: S3BucketLogDestinationDict

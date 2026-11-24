from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class TestSetImportInputLocation(SdkBaseModel):
    s3_bucket_name: str = Field(alias="s3BucketName")
    """The name of the Amazon S3 bucket."""

    s3_path: str = Field(alias="s3Path")
    """The path inside the Amazon S3 bucket pointing to the test-set CSV file."""


class TestSetImportInputLocationDict(TypedDict):
    s3_bucket_name: str
    s3_path: str

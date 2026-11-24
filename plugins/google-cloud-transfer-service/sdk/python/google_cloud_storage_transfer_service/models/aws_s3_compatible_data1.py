from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .s3_compatible_metadata2 import S3CompatibleMetadata2, S3CompatibleMetadata2Dict


class AwsS3CompatibleData1(SdkBaseModel):
    """Optional. An AWS S3 compatible data source."""

    s3_metadata: Optional[S3CompatibleMetadata2] = Field(default=UNSET, alias="s3Metadata")
    """A S3 compatible metadata."""

    path: Optional[str] = UNSET
    """Specifies the root path to transfer objects. Must be an empty string or full path name that ends with a '/'. This
    field is treated as an object prefix. As such, it should generally not begin with a '/'."""

    region: Optional[str] = UNSET
    """Specifies the region to sign requests with. This can be left blank if requests should be signed with an empty
    region."""

    endpoint: Optional[str] = UNSET
    """Required. Specifies the endpoint of the storage service."""

    bucket_name: Optional[str] = Field(default=UNSET, alias="bucketName")
    """Required. Specifies the name of the bucket."""


class AwsS3CompatibleData1Dict(TypedDict):
    s3_metadata: NotRequired[S3CompatibleMetadata2Dict]
    path: NotRequired[str]
    region: NotRequired[str]
    endpoint: NotRequired[str]
    bucket_name: NotRequired[str]

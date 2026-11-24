from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.bucket_owner_access import BucketOwnerAccessOrStr
from .enums.status1 import Status1OrStr


class S3LogsConfig(SdkBaseModel):
    status: Status1OrStr
    """The current status of the S3 build logs. Valid values are: ENABLED: S3 build logs are enabled for this build
    project. DISABLED: S3 build logs are not enabled for this build project."""

    location: Optional[str] = UNSET
    """The ARN of an S3 bucket and the path prefix for S3 logs. If your Amazon S3 bucket name is my-bucket, and your
    path prefix is build-log, then acceptable formats are my-bucket/build-log or arn:aws:s3:::my-bucket/build-log."""

    encryption_disabled: Optional[bool] = Field(default=UNSET, alias="encryptionDisabled")
    """Set to true if you do not want your S3 build log output encrypted. By default S3 build logs are encrypted."""

    bucket_owner_access: Optional[BucketOwnerAccessOrStr] = Field(default=UNSET, alias="bucketOwnerAccess")


class S3LogsConfigDict(TypedDict):
    status: Status1OrStr
    location: NotRequired[str]
    encryption_disabled: NotRequired[bool]
    bucket_owner_access: NotRequired[BucketOwnerAccessOrStr]

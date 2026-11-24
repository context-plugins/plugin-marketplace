from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.packaging1 import Packaging1OrStr


class S3ReportExportConfig(SdkBaseModel):
    bucket: Optional[str] = UNSET
    """The name of the S3 bucket where the raw data of a report are exported."""

    bucket_owner: Optional[str] = Field(default=UNSET, alias="bucketOwner")
    """The Amazon Web Services account identifier of the owner of the Amazon S3 bucket. This allows report data to be
    exported to an Amazon S3 bucket that is owned by an account other than the account running the build."""

    path: Optional[str] = UNSET
    """The path to the exported report's raw data results."""

    packaging: Optional[Packaging1OrStr] = UNSET
    """The type of build output artifact to create. Valid values include: NONE: CodeBuild creates the raw data in the
    output bucket. This is the default if packaging is not specified. ZIP: CodeBuild creates a ZIP file with the raw
    data in the output bucket."""

    encryption_key: Optional[str] = Field(default=UNSET, alias="encryptionKey")
    """The encryption key for the report's encrypted raw data."""

    encryption_disabled: Optional[bool] = Field(default=UNSET, alias="encryptionDisabled")
    """A boolean value that specifies if the results of a report are encrypted."""


class S3ReportExportConfigDict(TypedDict):
    bucket: NotRequired[str]
    bucket_owner: NotRequired[str]
    path: NotRequired[str]
    packaging: NotRequired[Packaging1OrStr]
    encryption_key: NotRequired[str]
    encryption_disabled: NotRequired[bool]

from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class S3Object(SdkBaseModel):
    bucket: Optional[str] = Field(default=UNSET, alias="Bucket")
    """Name of the S3 bucket."""

    name: Optional[str] = Field(default=UNSET, alias="Name")
    """S3 object key name."""

    version: Optional[str] = Field(default=UNSET, alias="Version")
    """If the bucket is versioning enabled, you can specify the object version."""


class S3ObjectDict(TypedDict):
    bucket: NotRequired[str]
    name: NotRequired[str]
    version: NotRequired[str]

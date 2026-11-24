from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .s3_object import S3Object, S3ObjectDict


class Image(SdkBaseModel):
    bytes_: Optional[str] = Field(default=UNSET, alias="Bytes")
    """Blob of image bytes up to 5 MBs. Note that the maximum image size you can pass to DetectCustomLabels is 4MB."""

    s3_object: Optional[S3Object] = Field(default=UNSET, alias="S3Object")


class ImageDict(TypedDict):
    bytes_: NotRequired[str]
    s3_object: NotRequired[S3ObjectDict]

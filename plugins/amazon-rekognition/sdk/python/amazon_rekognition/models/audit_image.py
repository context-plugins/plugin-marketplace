from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .bounding_box import BoundingBox, BoundingBoxDict
from .s3_object import S3Object, S3ObjectDict


class AuditImage(SdkBaseModel):
    bytes_: Optional[str] = Field(default=UNSET, alias="Bytes")
    """The Base64-encoded bytes representing an image selected from the Face Liveness video and returned for audit
    purposes."""

    s3_object: Optional[S3Object] = Field(default=UNSET, alias="S3Object")
    bounding_box: Optional[BoundingBox] = Field(default=UNSET, alias="BoundingBox")


class AuditImageDict(TypedDict):
    bytes_: NotRequired[str]
    s3_object: NotRequired[S3ObjectDict]
    bounding_box: NotRequired[BoundingBoxDict]

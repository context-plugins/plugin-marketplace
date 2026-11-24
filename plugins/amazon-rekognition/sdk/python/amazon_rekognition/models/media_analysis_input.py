from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .s3_object import S3Object, S3ObjectDict


class MediaAnalysisInput(SdkBaseModel):
    s3_object: S3Object = Field(alias="S3Object")


class MediaAnalysisInputDict(TypedDict):
    s3_object: S3ObjectDict

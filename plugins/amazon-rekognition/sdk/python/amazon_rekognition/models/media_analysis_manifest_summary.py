from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .s3_object import S3Object, S3ObjectDict


class MediaAnalysisManifestSummary(SdkBaseModel):
    s3_object: Optional[S3Object] = Field(default=UNSET, alias="S3Object")


class MediaAnalysisManifestSummaryDict(TypedDict):
    s3_object: NotRequired[S3ObjectDict]

from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .media_analysis_model_versions import MediaAnalysisModelVersions, MediaAnalysisModelVersionsDict
from .s3_object import S3Object, S3ObjectDict


class MediaAnalysisResults(SdkBaseModel):
    s3_object: Optional[S3Object] = Field(default=UNSET, alias="S3Object")
    model_versions: Optional[MediaAnalysisModelVersions] = Field(default=UNSET, alias="ModelVersions")


class MediaAnalysisResultsDict(TypedDict):
    s3_object: NotRequired[S3ObjectDict]
    model_versions: NotRequired[MediaAnalysisModelVersionsDict]

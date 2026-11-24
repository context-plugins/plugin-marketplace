from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .dominant_language_detection_job_properties import (
    DominantLanguageDetectionJobProperties,
    DominantLanguageDetectionJobPropertiesDict,
)


class DescribeDominantLanguageDetectionJobResponse(SdkBaseModel):
    dominant_language_detection_job_properties: Optional[DominantLanguageDetectionJobProperties] = Field(
        default=UNSET, alias="DominantLanguageDetectionJobProperties"
    )


class DescribeDominantLanguageDetectionJobResponseDict(TypedDict):
    dominant_language_detection_job_properties: NotRequired[DominantLanguageDetectionJobPropertiesDict]

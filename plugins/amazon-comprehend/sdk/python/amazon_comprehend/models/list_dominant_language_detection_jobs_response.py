from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .dominant_language_detection_job_properties import (
    DominantLanguageDetectionJobProperties,
    DominantLanguageDetectionJobPropertiesDict,
)


class ListDominantLanguageDetectionJobsResponse(SdkBaseModel):
    dominant_language_detection_job_properties_list: Optional[list[DominantLanguageDetectionJobProperties]] = Field(
        default=UNSET, alias="DominantLanguageDetectionJobPropertiesList"
    )
    """A list containing the properties of each job that is returned."""

    next_token: Optional[str] = Field(default=UNSET, alias="NextToken")
    """Identifies the next page of results to return."""


class ListDominantLanguageDetectionJobsResponseDict(TypedDict):
    dominant_language_detection_job_properties_list: NotRequired[list[DominantLanguageDetectionJobPropertiesDict]]
    next_token: NotRequired[str]

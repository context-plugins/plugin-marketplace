from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .key_phrases_detection_job_properties import KeyPhrasesDetectionJobProperties, KeyPhrasesDetectionJobPropertiesDict


class ListKeyPhrasesDetectionJobsResponse(SdkBaseModel):
    key_phrases_detection_job_properties_list: Optional[list[KeyPhrasesDetectionJobProperties]] = Field(
        default=UNSET, alias="KeyPhrasesDetectionJobPropertiesList"
    )
    """A list containing the properties of each job that is returned."""

    next_token: Optional[str] = Field(default=UNSET, alias="NextToken")
    """Identifies the next page of results to return."""


class ListKeyPhrasesDetectionJobsResponseDict(TypedDict):
    key_phrases_detection_job_properties_list: NotRequired[list[KeyPhrasesDetectionJobPropertiesDict]]
    next_token: NotRequired[str]

from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .topics_detection_job_properties import TopicsDetectionJobProperties, TopicsDetectionJobPropertiesDict


class ListTopicsDetectionJobsResponse(SdkBaseModel):
    topics_detection_job_properties_list: Optional[list[TopicsDetectionJobProperties]] = Field(
        default=UNSET, alias="TopicsDetectionJobPropertiesList"
    )
    """A list containing the properties of each job that is returned."""

    next_token: Optional[str] = Field(default=UNSET, alias="NextToken")
    """Identifies the next page of results to return."""


class ListTopicsDetectionJobsResponseDict(TypedDict):
    topics_detection_job_properties_list: NotRequired[list[TopicsDetectionJobPropertiesDict]]
    next_token: NotRequired[str]

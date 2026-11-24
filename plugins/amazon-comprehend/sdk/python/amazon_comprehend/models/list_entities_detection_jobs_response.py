from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .entities_detection_job_properties import EntitiesDetectionJobProperties, EntitiesDetectionJobPropertiesDict


class ListEntitiesDetectionJobsResponse(SdkBaseModel):
    entities_detection_job_properties_list: Optional[list[EntitiesDetectionJobProperties]] = Field(
        default=UNSET, alias="EntitiesDetectionJobPropertiesList"
    )
    """A list containing the properties of each job that is returned."""

    next_token: Optional[str] = Field(default=UNSET, alias="NextToken")
    """Identifies the next page of results to return."""


class ListEntitiesDetectionJobsResponseDict(TypedDict):
    entities_detection_job_properties_list: NotRequired[list[EntitiesDetectionJobPropertiesDict]]
    next_token: NotRequired[str]

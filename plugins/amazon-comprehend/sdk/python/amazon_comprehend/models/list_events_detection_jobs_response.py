from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .events_detection_job_properties import EventsDetectionJobProperties, EventsDetectionJobPropertiesDict


class ListEventsDetectionJobsResponse(SdkBaseModel):
    events_detection_job_properties_list: Optional[list[EventsDetectionJobProperties]] = Field(
        default=UNSET, alias="EventsDetectionJobPropertiesList"
    )
    """A list containing the properties of each job that is returned."""

    next_token: Optional[str] = Field(default=UNSET, alias="NextToken")
    """Identifies the next page of results to return."""


class ListEventsDetectionJobsResponseDict(TypedDict):
    events_detection_job_properties_list: NotRequired[list[EventsDetectionJobPropertiesDict]]
    next_token: NotRequired[str]

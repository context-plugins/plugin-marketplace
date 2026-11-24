from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .events_detection_job_properties import EventsDetectionJobProperties, EventsDetectionJobPropertiesDict


class DescribeEventsDetectionJobResponse(SdkBaseModel):
    events_detection_job_properties: Optional[EventsDetectionJobProperties] = Field(
        default=UNSET, alias="EventsDetectionJobProperties"
    )


class DescribeEventsDetectionJobResponseDict(TypedDict):
    events_detection_job_properties: NotRequired[EventsDetectionJobPropertiesDict]

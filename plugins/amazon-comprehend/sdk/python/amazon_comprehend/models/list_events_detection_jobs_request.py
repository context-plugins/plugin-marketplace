from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .events_detection_job_filter import EventsDetectionJobFilter, EventsDetectionJobFilterDict


class ListEventsDetectionJobsRequest(SdkBaseModel):
    filter: Optional[EventsDetectionJobFilter] = Field(default=UNSET, alias="Filter")
    next_token: Optional[str] = Field(default=UNSET, alias="NextToken")
    """Identifies the next page of results to return."""

    max_results: Optional[int] = Field(default=UNSET, alias="MaxResults")
    """The maximum number of results to return in each page."""


class ListEventsDetectionJobsRequestDict(TypedDict):
    filter: NotRequired[EventsDetectionJobFilterDict]
    next_token: NotRequired[str]
    max_results: NotRequired[int]

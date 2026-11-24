from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .pii_entities_detection_job_filter import PiiEntitiesDetectionJobFilter, PiiEntitiesDetectionJobFilterDict


class ListPiiEntitiesDetectionJobsRequest(SdkBaseModel):
    filter: Optional[PiiEntitiesDetectionJobFilter] = Field(default=UNSET, alias="Filter")
    next_token: Optional[str] = Field(default=UNSET, alias="NextToken")
    """Identifies the next page of results to return."""

    max_results: Optional[int] = Field(default=UNSET, alias="MaxResults")
    """The maximum number of results to return in each page."""


class ListPiiEntitiesDetectionJobsRequestDict(TypedDict):
    filter: NotRequired[PiiEntitiesDetectionJobFilterDict]
    next_token: NotRequired[str]
    max_results: NotRequired[int]

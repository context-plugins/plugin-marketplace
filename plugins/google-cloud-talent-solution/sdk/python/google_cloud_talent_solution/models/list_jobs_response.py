from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .job import Job, JobDict
from .response_metadata1 import ResponseMetadata1, ResponseMetadata1Dict


class ListJobsResponse(SdkBaseModel):
    """List jobs response."""

    metadata: Optional[ResponseMetadata1] = UNSET
    """Additional information for the API invocation, such as the request tracking id."""

    jobs: Optional[list[Job]] = UNSET
    """The Jobs for a given company. The maximum number of items returned is based on the limit field provided in the
    request."""

    next_page_token: Optional[str] = Field(default=UNSET, alias="nextPageToken")
    """A token to retrieve the next page of results."""


class ListJobsResponseDict(TypedDict):
    metadata: NotRequired[ResponseMetadata1Dict]
    jobs: NotRequired[list[JobDict]]
    next_page_token: NotRequired[str]

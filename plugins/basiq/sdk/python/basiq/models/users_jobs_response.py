from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .jobs_data import JobsData, JobsDataDict
from .resource_link import ResourceLink, ResourceLinkDict


class UsersJobsResponse(SdkBaseModel):
    type_: str = Field(alias="type")
    """Type of the response, always "list"."""

    data: list[JobsData]
    """Container object, containing job details."""

    size: int
    """Size of the all the jobs."""

    links: ResourceLink
    """Link object containing a link to the resource, self reference."""


class UsersJobsResponseDict(TypedDict):
    type_: str
    data: list[JobsDataDict]
    size: int
    links: ResourceLinkDict

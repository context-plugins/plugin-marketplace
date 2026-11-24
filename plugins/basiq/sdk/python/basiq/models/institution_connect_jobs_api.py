from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .jobs_links import JobsLinks, JobsLinksDict


class InstitutionConnectJobsApi(SdkBaseModel):
    """Institution details."""

    id: str
    """A string that uniquely identifies institution."""

    links: JobsLinks
    """Links to the resources."""

    type_: str = Field(alias="type")
    """Always "institution"."""


class InstitutionConnectJobsApiDict(TypedDict):
    id: str
    links: JobsLinksDict
    type_: str

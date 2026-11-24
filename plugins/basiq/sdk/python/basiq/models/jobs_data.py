from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .institution_connect_jobs_api import InstitutionConnectJobsApi, InstitutionConnectJobsApiDict
from .jobs_links import JobsLinks, JobsLinksDict
from .jobs_step import JobsStep, JobsStepDict


class JobsData(SdkBaseModel):
    """Container object, containing job details."""

    type_: Optional[str] = Field(default=UNSET, alias="type")
    """Value is "job"."""

    id: str
    """A string that uniquely identifies the job."""

    created: str
    """The date time when the job was created."""

    updated: str
    """The date time when the job was last updated."""

    institution: InstitutionConnectJobsApi
    """Institution details."""

    steps: list[JobsStep]
    """List of steps that need to be completed."""

    links: Optional[JobsLinks] = UNSET
    """Links to the resources."""


class JobsDataDict(TypedDict):
    type_: NotRequired[str]
    id: str
    created: str
    updated: str
    institution: InstitutionConnectJobsApiDict
    steps: list[JobsStepDict]
    links: NotRequired[JobsLinksDict]

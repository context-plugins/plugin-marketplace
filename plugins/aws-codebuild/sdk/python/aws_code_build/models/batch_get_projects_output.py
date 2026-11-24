from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .project import Project, ProjectDict


class BatchGetProjectsOutput(SdkBaseModel):
    projects: Optional[list[Project]] = UNSET
    """Information about the requested build projects."""

    projects_not_found: Optional[list[str]] = Field(default=UNSET, alias="projectsNotFound")
    """The names of build projects for which information could not be found."""


class BatchGetProjectsOutputDict(TypedDict):
    projects: NotRequired[list[ProjectDict]]
    projects_not_found: NotRequired[list[str]]

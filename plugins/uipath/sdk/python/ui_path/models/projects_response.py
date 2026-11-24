from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .project import Project, ProjectDict


class ProjectsResponse(SdkBaseModel):
    projects: Optional[list[Project]] = UNSET


class ProjectsResponseDict(TypedDict):
    projects: NotRequired[list[ProjectDict]]

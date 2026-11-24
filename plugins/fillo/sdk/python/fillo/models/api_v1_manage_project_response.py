from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .project import Project, ProjectDict


class ApiV1ManageProjectResponse(SdkBaseModel):
    project: Project


class ApiV1ManageProjectResponseDict(TypedDict):
    project: ProjectDict

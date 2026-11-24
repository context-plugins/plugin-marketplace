from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .project import Project, ProjectDict


class UpdateProjectOutput(SdkBaseModel):
    project: Optional[Project] = UNSET


class UpdateProjectOutputDict(TypedDict):
    project: NotRequired[ProjectDict]

from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .project import Project, ProjectDict


class CreateProjectOutput(SdkBaseModel):
    project: Optional[Project] = UNSET


class CreateProjectOutputDict(TypedDict):
    project: NotRequired[ProjectDict]

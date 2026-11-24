from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .project import Project, ProjectDict


class ProjectList(SdkBaseModel):
    """A list of automation projects."""

    data: Optional[list[Project]] = UNSET
    """Array of project objects."""


class ProjectListDict(TypedDict):
    data: NotRequired[list[ProjectDict]]

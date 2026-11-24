from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .project2 import Project2, Project2Dict


class ProjectList2(SdkBaseModel):
    """A list of Launch projects."""

    data: Optional[list[Project2]] = UNSET
    """Array of Launch project objects."""


class ProjectList2Dict(TypedDict):
    data: NotRequired[list[Project2Dict]]

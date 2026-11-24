from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CreateProjectRequest2(SdkBaseModel):
    """Parameters for creating or updating a Launch project."""

    name: str
    """Display name for the project."""

    description: Optional[str] = UNSET
    """Description of the project."""

    framework: Optional[str] = UNSET
    """The web framework for the project."""


class CreateProjectRequest2Dict(TypedDict):
    name: str
    description: NotRequired[str]
    framework: NotRequired[str]

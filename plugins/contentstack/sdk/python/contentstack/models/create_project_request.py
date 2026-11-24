from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CreateProjectRequest(SdkBaseModel):
    """Parameters for creating or updating a project."""

    name: str
    """Display name for the project."""

    description: Optional[str] = UNSET
    """Description of the project's purpose."""


class CreateProjectRequestDict(TypedDict):
    name: str
    description: NotRequired[str]

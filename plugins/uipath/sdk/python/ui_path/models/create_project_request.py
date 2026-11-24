from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CreateProjectRequest(SdkBaseModel):
    """Request payload for creating a new test project"""

    name: str
    """Display name for the new test project"""

    description: Optional[str] = UNSET
    """Optional description of the project's testing scope"""


class CreateProjectRequestDict(TypedDict):
    name: str
    description: NotRequired[str]

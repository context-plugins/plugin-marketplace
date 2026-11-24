from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class Project2(SdkBaseModel):
    """A Contentstack Launch project for web application deployment."""

    uid: Optional[str] = UNSET
    """Unique identifier of the project."""

    name: Optional[str] = UNSET
    """Display name of the project."""

    description: Optional[str] = UNSET
    """Description of the project."""

    framework: Optional[str] = UNSET
    """The web framework used by the project (e.g., next, gatsby, nuxt)."""

    created_at: Optional[RFC3339DateTime] = UNSET
    """ISO 8601 timestamp when the project was created."""

    updated_at: Optional[RFC3339DateTime] = UNSET
    """ISO 8601 timestamp when the project was last updated."""


class Project2Dict(TypedDict):
    uid: NotRequired[str]
    name: NotRequired[str]
    description: NotRequired[str]
    framework: NotRequired[str]
    created_at: NotRequired[RFC3339DateTime]
    updated_at: NotRequired[RFC3339DateTime]

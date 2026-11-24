from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class Project(SdkBaseModel):
    """An automation project within a Contentstack organization."""

    uid: Optional[str] = UNSET
    """Unique identifier of the project."""

    name: Optional[str] = UNSET
    """Display name of the project."""

    description: Optional[str] = UNSET
    """Description of the project's purpose."""

    organization_uid: Optional[str] = UNSET
    """UID of the organization that owns the project."""

    created_at: Optional[RFC3339DateTime] = UNSET
    """ISO 8601 timestamp when the project was created."""

    updated_at: Optional[RFC3339DateTime] = UNSET
    """ISO 8601 timestamp when the project was last updated."""


class ProjectDict(TypedDict):
    uid: NotRequired[str]
    name: NotRequired[str]
    description: NotRequired[str]
    organization_uid: NotRequired[str]
    created_at: NotRequired[RFC3339DateTime]
    updated_at: NotRequired[RFC3339DateTime]

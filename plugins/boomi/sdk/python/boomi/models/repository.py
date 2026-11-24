from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class Repository(SdkBaseModel):
    """A DataHub repository that organizes master data domains and models."""

    id: Optional[str] = UNSET
    """Unique identifier of the repository."""

    name: Optional[str] = UNSET
    """Display name of the repository."""

    description: Optional[str] = UNSET
    """Human-readable description of the repository's purpose."""

    created_date: Optional[RFC3339DateTime] = Field(default=UNSET, alias="createdDate")
    """Timestamp when the repository was created."""


class RepositoryDict(TypedDict):
    id: NotRequired[str]
    name: NotRequired[str]
    description: NotRequired[str]
    created_date: NotRequired[RFC3339DateTime]

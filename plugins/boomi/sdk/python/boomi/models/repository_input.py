from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class RepositoryInput(SdkBaseModel):
    """Input for creating a DataHub repository."""

    name: str
    """Display name for the repository."""

    description: Optional[str] = UNSET
    """Optional description of the repository."""


class RepositoryInputDict(TypedDict):
    name: str
    description: NotRequired[str]

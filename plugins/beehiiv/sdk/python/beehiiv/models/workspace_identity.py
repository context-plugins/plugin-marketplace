from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class WorkspaceIdentity(SdkBaseModel):
    id: str
    """The prefixed ID of the workspace."""

    name: str
    """The name of the workspace."""

    owner_email: str
    """The email of the owner of the workspace."""


class WorkspaceIdentityDict(TypedDict):
    id: str
    name: str
    owner_email: str

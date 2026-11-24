from __future__ import annotations

from uuid import UUID

from pydantic import ConfigDict
from typing_extensions import TypedDict

from ..core import RFC3339DateTime, SdkBaseModel
from .identity import Identity, IdentityDict


class Commit(SdkBaseModel):
    """Commit refers to a VCS commit and all associated details."""

    model_config = ConfigDict(extra="forbid")

    entity_type: str
    """A string description of this resource."""

    author_id: UUID | None
    """The ID of the Member that authored the Commit, if known."""

    hash: str
    """The Commit hash."""

    updated_at: RFC3339DateTime | None
    """The time/date the Commit was updated."""

    id: int | None
    """The unique ID of the Commit."""

    url: str
    """The URL of the Commit."""

    author_email: str
    """The email address of the VCS user that authored the Commit."""

    timestamp: RFC3339DateTime
    """The time/date the Commit was pushed."""

    author_identity: Identity
    """The Identity of the VCS user that authored the Commit."""

    repository_id: int | None
    """The ID of the Repository that contains the Commit."""

    created_at: RFC3339DateTime
    """The time/date the Commit was created."""

    message: str
    """The Commit message."""


class CommitDict(TypedDict):
    entity_type: str
    author_id: UUID | None
    hash: str
    updated_at: RFC3339DateTime | None
    id: int | None
    url: str
    author_email: str
    timestamp: RFC3339DateTime
    author_identity: IdentityDict
    repository_id: int | None
    created_at: RFC3339DateTime
    message: str

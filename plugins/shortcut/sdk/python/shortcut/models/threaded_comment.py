from __future__ import annotations

from uuid import UUID

from pydantic import ConfigDict
from typing_extensions import TypedDict

from ..core import RFC3339DateTime, SdkBaseModel


class ThreadedComment(SdkBaseModel):
    """Comments associated with Epic Discussions."""

    model_config = ConfigDict(extra="forbid")

    app_url: str
    """The Shortcut application url for the Comment."""

    entity_type: str
    """A string description of this resource."""

    deleted: bool
    """True/false boolean indicating whether the Comment is deleted."""

    mention_ids: list[UUID]
    """``Deprecated:`` use ``member_mention_ids``."""

    author_id: UUID
    """The unique ID of the Member that authored the Comment."""

    member_mention_ids: list[UUID]
    """An array of Member IDs that have been mentioned in this Comment."""

    comments: list[ThreadedComment]
    """A nested array of threaded comments."""

    updated_at: RFC3339DateTime
    """The time/date the Comment was updated."""

    group_mention_ids: list[UUID]
    """An array of Group IDs that have been mentioned in this Comment."""

    external_id: str | None
    """This field can be set to another unique ID. In the case that the Comment has been imported from another tool, the
    ID in the other tool can be indicated here."""

    id: int
    """The unique ID of the Comment."""

    created_at: RFC3339DateTime
    """The time/date the Comment was created."""

    text: str
    """The text of the Comment."""


class ThreadedCommentDict(TypedDict):
    app_url: str
    entity_type: str
    deleted: bool
    mention_ids: list[UUID]
    author_id: UUID
    member_mention_ids: list[UUID]
    comments: list[ThreadedCommentDict]
    updated_at: RFC3339DateTime
    group_mention_ids: list[UUID]
    external_id: str | None
    id: int
    created_at: RFC3339DateTime
    text: str

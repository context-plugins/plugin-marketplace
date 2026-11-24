from __future__ import annotations

from uuid import UUID

from pydantic import ConfigDict
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .story_reaction import StoryReaction, StoryReactionDict


class StoryComment(SdkBaseModel):
    """A Comment is any note added within the Comment field of a Story."""

    model_config = ConfigDict(extra="forbid")

    app_url: str
    """The Shortcut application url for the Comment."""

    entity_type: str
    """A string description of this resource."""

    deleted: bool
    """True/false boolean indicating whether the Comment has been deleted."""

    story_id: int
    """The ID of the Story on which the Comment appears."""

    mention_ids: list[UUID]
    """``Deprecated:`` use ``member_mention_ids``."""

    author_id: UUID | None
    """The unique ID of the Member who is the Comment's author."""

    member_mention_ids: list[UUID]
    """The unique IDs of the Member who are mentioned in the Comment."""

    blocker: Optional[bool] = UNSET
    """Marks the comment as a blocker that can be surfaced to permissions or teams mentioned in the comment. Can only be
    used on a top-level comment."""

    linked_to_slack: bool
    """Whether the Comment is currently the root of a thread that is linked to Slack."""

    updated_at: RFC3339DateTime | None
    """The time/date when the Comment was updated."""

    group_mention_ids: list[UUID]
    """The unique IDs of the Group who are mentioned in the Comment."""

    external_id: str | None
    """This field can be set to another unique ID. In the case that the Comment has been imported from another tool, the
    ID in the other tool can be indicated here."""

    parent_id: OptionalNullable[int] = UNSET
    """The ID of the parent Comment this Comment is threaded under."""

    id: int
    """The unique ID of the Comment."""

    position: int
    """The Comments numerical position in the list from oldest to newest."""

    unblocks_parent: Optional[bool] = UNSET
    """Marks the comment as an unblocker to its blocker parent. Can only be set on a threaded comment who has a parent
    with ``blocker`` set."""

    reactions: list[StoryReaction]
    """A set of Reactions to this Comment."""

    created_at: RFC3339DateTime
    """The time/date when the Comment was created."""

    text: str | None
    """The text of the Comment. In the case that the Comment has been deleted, this field can be set to nil."""


class StoryCommentDict(TypedDict):
    app_url: str
    entity_type: str
    deleted: bool
    story_id: int
    mention_ids: list[UUID]
    author_id: UUID | None
    member_mention_ids: list[UUID]
    blocker: NotRequired[bool]
    linked_to_slack: bool
    updated_at: RFC3339DateTime | None
    group_mention_ids: list[UUID]
    external_id: str | None
    parent_id: NotRequired[int | None]
    id: int
    position: int
    unblocks_parent: NotRequired[bool]
    reactions: list[StoryReactionDict]
    created_at: RFC3339DateTime
    text: str | None

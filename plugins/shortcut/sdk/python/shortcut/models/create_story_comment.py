from __future__ import annotations

from uuid import UUID

from pydantic import ConfigDict
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, RFC3339DateTime, SdkBaseModel


class CreateStoryComment(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    text: str
    """The comment text."""

    author_id: Optional[UUID] = UNSET
    """The Member ID of the Comment's author. Defaults to the user identified by the API token."""

    created_at: Optional[RFC3339DateTime] = UNSET
    """Defaults to the time/date the comment is created, but can be set to reflect another date."""

    updated_at: Optional[RFC3339DateTime] = UNSET
    """Defaults to the time/date the comment is last updated, but can be set to reflect another date."""

    external_id: Optional[str] = UNSET
    """This field can be set to another unique ID. In the case that the comment has been imported from another tool, the
    ID in the other tool can be indicated here."""

    parent_id: OptionalNullable[int] = UNSET
    """The ID of the Comment that this comment is threaded under."""


class CreateStoryCommentDict(TypedDict):
    text: str
    author_id: NotRequired[UUID]
    created_at: NotRequired[RFC3339DateTime]
    updated_at: NotRequired[RFC3339DateTime]
    external_id: NotRequired[str]
    parent_id: NotRequired[int | None]

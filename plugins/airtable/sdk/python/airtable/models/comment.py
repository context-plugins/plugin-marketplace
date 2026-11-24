from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .author import Author, AuthorDict


class Comment(SdkBaseModel):
    """A comment on an Airtable record."""

    id: str
    """The unique identifier of the comment."""

    author: Optional[Author] = UNSET
    """The user who created the comment."""

    text: str
    """The text content of the comment."""

    created_time: RFC3339DateTime = Field(alias="createdTime")
    """The time when the comment was created."""

    last_updated_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="lastUpdatedTime")
    """The time when the comment was last updated."""


class CommentDict(TypedDict):
    id: str
    author: NotRequired[AuthorDict]
    text: str
    created_time: RFC3339DateTime
    last_updated_time: NotRequired[RFC3339DateTime]

from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .comment import Comment, CommentDict


class CommentList(SdkBaseModel):
    """A paginated list of comments on a record."""

    comments: list[Comment]
    offset: Optional[str] = UNSET
    """Pagination cursor for the next page of results."""


class CommentListDict(TypedDict):
    comments: list[CommentDict]
    offset: NotRequired[str]

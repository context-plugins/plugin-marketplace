from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class Comment(SdkBaseModel):
    id: Optional[str] = UNSET
    text: Optional[str] = UNSET
    username: Optional[str] = UNSET
    timestamp: Optional[RFC3339DateTime] = UNSET
    like_count: Optional[int] = UNSET
    hidden: Optional[bool] = UNSET
    parent_id: Optional[str] = UNSET
    """ID of the parent comment if this is a reply."""


class CommentDict(TypedDict):
    id: NotRequired[str]
    text: NotRequired[str]
    username: NotRequired[str]
    timestamp: NotRequired[RFC3339DateTime]
    like_count: NotRequired[int]
    hidden: NotRequired[bool]
    parent_id: NotRequired[str]

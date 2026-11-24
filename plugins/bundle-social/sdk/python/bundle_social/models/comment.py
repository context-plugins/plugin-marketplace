from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, RFC3339DateTime, SdkBaseModel


class Comment(SdkBaseModel):
    id: str
    recommendation_id: str = Field(alias="recommendationId")
    root_object_id: str = Field(alias="rootObjectId")
    parent_comment_id: OptionalNullable[str] = Field(default=UNSET, alias="parentCommentId")
    author_name: OptionalNullable[str] = Field(default=UNSET, alias="authorName")
    author_external_id: OptionalNullable[str] = Field(default=UNSET, alias="authorExternalId")
    author_avatar_url: OptionalNullable[str] = Field(default=UNSET, alias="authorAvatarUrl")
    text: OptionalNullable[str] = UNSET
    likes_count: float = Field(alias="likesCount")
    replies_count: float = Field(alias="repliesCount")
    can_reply: OptionalNullable[bool] = Field(default=UNSET, alias="canReply")
    created_time: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="createdTime")


class CommentDict(TypedDict):
    id: str
    recommendation_id: str
    root_object_id: str
    parent_comment_id: NotRequired[str | None]
    author_name: NotRequired[str | None]
    author_external_id: NotRequired[str | None]
    author_avatar_url: NotRequired[str | None]
    text: NotRequired[str | None]
    likes_count: float
    replies_count: float
    can_reply: NotRequired[bool | None]
    created_time: NotRequired[RFC3339DateTime | None]

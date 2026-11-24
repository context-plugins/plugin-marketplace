from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, RFC3339DateTime, SdkBaseModel


class PrivateReplyContext(SdkBaseModel):
    fetched_comment_id: str = Field(alias="fetchedCommentId")
    external_comment_id: OptionalNullable[str] = Field(default=UNSET, alias="externalCommentId")
    text: OptionalNullable[str] = UNSET
    author_name: OptionalNullable[str] = Field(default=UNSET, alias="authorName")
    author_avatar_url: OptionalNullable[str] = Field(default=UNSET, alias="authorAvatarUrl")
    published_at: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="publishedAt")
    post_id: OptionalNullable[str] = Field(default=UNSET, alias="postId")
    external_post_id: OptionalNullable[str] = Field(default=UNSET, alias="externalPostId")
    post_permalink: OptionalNullable[str] = Field(default=UNSET, alias="postPermalink")
    post_thumbnail_url: OptionalNullable[str] = Field(default=UNSET, alias="postThumbnailUrl")


class PrivateReplyContextDict(TypedDict):
    fetched_comment_id: str
    external_comment_id: NotRequired[str | None]
    text: NotRequired[str | None]
    author_name: NotRequired[str | None]
    author_avatar_url: NotRequired[str | None]
    published_at: NotRequired[RFC3339DateTime | None]
    post_id: NotRequired[str | None]
    external_post_id: NotRequired[str | None]
    post_permalink: NotRequired[str | None]
    post_thumbnail_url: NotRequired[str | None]

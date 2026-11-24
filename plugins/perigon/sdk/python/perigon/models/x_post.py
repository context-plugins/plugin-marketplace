from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .x_post_media import XPostMedia, XPostMediaDict


class XPost(SdkBaseModel):
    tweet_id: str = Field(alias="tweetId")
    screen_name: str = Field(alias="screenName")
    text: str
    lang: str
    created_at: RFC3339DateTime = Field(alias="createdAt")
    avatar_url: OptionalNullable[str] = Field(default=UNSET, alias="avatarUrl")
    favorites: OptionalNullable[int] = UNSET
    retweets: OptionalNullable[int] = UNSET
    replies: OptionalNullable[int] = UNSET
    quotes: OptionalNullable[int] = UNSET
    bookmarks: OptionalNullable[int] = UNSET
    media: XPostMedia


class XPostDict(TypedDict):
    tweet_id: str
    screen_name: str
    text: str
    lang: str
    created_at: RFC3339DateTime
    avatar_url: NotRequired[str | None]
    favorites: NotRequired[int | None]
    retweets: NotRequired[int | None]
    replies: NotRequired[int | None]
    quotes: NotRequired[int | None]
    bookmarks: NotRequired[int | None]
    media: XPostMediaDict

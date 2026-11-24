from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class ErrorsBundleSocialCommentApi(SdkBaseModel):
    twitter: OptionalNullable[str] = Field(default=UNSET, alias="TWITTER")
    facebook: OptionalNullable[str] = Field(default=UNSET, alias="FACEBOOK")
    instagram: OptionalNullable[str] = Field(default=UNSET, alias="INSTAGRAM")
    tiktok: OptionalNullable[str] = Field(default=UNSET, alias="TIKTOK")
    linkedin: OptionalNullable[str] = Field(default=UNSET, alias="LINKEDIN")
    reddit: OptionalNullable[str] = Field(default=UNSET, alias="REDDIT")
    youtube: OptionalNullable[str] = Field(default=UNSET, alias="YOUTUBE")
    mastodon: OptionalNullable[str] = Field(default=UNSET, alias="MASTODON")
    threads: OptionalNullable[str] = Field(default=UNSET, alias="THREADS")
    discord: OptionalNullable[str] = Field(default=UNSET, alias="DISCORD")
    slack: OptionalNullable[str] = Field(default=UNSET, alias="SLACK")
    bluesky: OptionalNullable[str] = Field(default=UNSET, alias="BLUESKY")


class ErrorsBundleSocialCommentApiDict(TypedDict):
    twitter: NotRequired[str | None]
    facebook: NotRequired[str | None]
    instagram: NotRequired[str | None]
    tiktok: NotRequired[str | None]
    linkedin: NotRequired[str | None]
    reddit: NotRequired[str | None]
    youtube: NotRequired[str | None]
    mastodon: NotRequired[str | None]
    threads: NotRequired[str | None]
    discord: NotRequired[str | None]
    slack: NotRequired[str | None]
    bluesky: NotRequired[str | None]

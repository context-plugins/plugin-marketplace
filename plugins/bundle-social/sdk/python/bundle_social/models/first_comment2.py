from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class FirstComment2(SdkBaseModel):
    tiktok: OptionalNullable[str] = Field(default=UNSET, alias="TIKTOK")
    youtube: OptionalNullable[str] = Field(default=UNSET, alias="YOUTUBE")
    instagram: OptionalNullable[str] = Field(default=UNSET, alias="INSTAGRAM")
    facebook: OptionalNullable[str] = Field(default=UNSET, alias="FACEBOOK")
    twitter: OptionalNullable[str] = Field(default=UNSET, alias="TWITTER")
    threads: OptionalNullable[str] = Field(default=UNSET, alias="THREADS")
    linkedin: OptionalNullable[str] = Field(default=UNSET, alias="LINKEDIN")
    reddit: OptionalNullable[str] = Field(default=UNSET, alias="REDDIT")
    mastodon: OptionalNullable[str] = Field(default=UNSET, alias="MASTODON")
    discord: OptionalNullable[str] = Field(default=UNSET, alias="DISCORD")
    slack: OptionalNullable[str] = Field(default=UNSET, alias="SLACK")
    bluesky: OptionalNullable[str] = Field(default=UNSET, alias="BLUESKY")


class FirstComment2Dict(TypedDict):
    tiktok: NotRequired[str | None]
    youtube: NotRequired[str | None]
    instagram: NotRequired[str | None]
    facebook: NotRequired[str | None]
    twitter: NotRequired[str | None]
    threads: NotRequired[str | None]
    linkedin: NotRequired[str | None]
    reddit: NotRequired[str | None]
    mastodon: NotRequired[str | None]
    discord: NotRequired[str | None]
    slack: NotRequired[str | None]
    bluesky: NotRequired[str | None]

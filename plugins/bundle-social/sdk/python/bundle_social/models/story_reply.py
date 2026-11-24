from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class StoryReply(SdkBaseModel):
    story_id: OptionalNullable[str] = Field(default=UNSET, alias="storyId")
    url: OptionalNullable[str] = UNSET
    link_sticker_url: OptionalNullable[str] = Field(default=UNSET, alias="linkStickerUrl")


class StoryReplyDict(TypedDict):
    story_id: NotRequired[str | None]
    url: NotRequired[str | None]
    link_sticker_url: NotRequired[str | None]

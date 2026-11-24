from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel
from .enums.reply_control import ReplyControlOrStr
from .gif import Gif, GifDict
from .media_item1 import MediaItem1, MediaItem1Dict
from .poll1 import Poll1, Poll1Dict


class Threads(SdkBaseModel):
    text: OptionalNullable[str] = UNSET
    upload_ids: OptionalNullable[list[str]] = Field(default=UNSET, alias="uploadIds")
    media_items: OptionalNullable[list[MediaItem1]] = Field(default=UNSET, alias="mediaItems")
    topic_tag: OptionalNullable[str] = Field(default=UNSET, alias="topicTag")
    reply_control: OptionalNullable[ReplyControlOrStr] = Field(default=UNSET, alias="replyControl")
    link_attachment: OptionalNullable[str] = Field(default=UNSET, alias="linkAttachment")
    poll: OptionalNullable[Poll1] = UNSET
    gif: OptionalNullable[Gif] = UNSET
    allowlisted_country_codes: OptionalNullable[list[str]] = Field(default=UNSET, alias="allowlistedCountryCodes")
    crosspost_to_instagram_story: OptionalNullable[bool] = Field(default=UNSET, alias="crosspostToInstagramStory")
    crosspost_to_instagram_story_dark_mode: OptionalNullable[bool] = Field(
        default=UNSET, alias="crosspostToInstagramStoryDarkMode"
    )


class ThreadsDict(TypedDict):
    text: NotRequired[str | None]
    upload_ids: NotRequired[list[str] | None]
    media_items: NotRequired[list[MediaItem1Dict] | None]
    topic_tag: NotRequired[str | None]
    reply_control: NotRequired[ReplyControlOrStr | None]
    link_attachment: NotRequired[str | None]
    poll: NotRequired[Poll1Dict | None]
    gif: NotRequired[GifDict | None]
    allowlisted_country_codes: NotRequired[list[str] | None]
    crosspost_to_instagram_story: NotRequired[bool | None]
    crosspost_to_instagram_story_dark_mode: NotRequired[bool | None]

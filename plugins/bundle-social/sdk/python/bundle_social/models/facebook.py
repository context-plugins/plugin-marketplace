from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .enums.type1 import Type1, Type1OrStr
from .media_item1 import MediaItem1, MediaItem1Dict


class Facebook(SdkBaseModel):
    type_: Type1OrStr = Field(default=Type1.POST, alias="type")
    text: OptionalNullable[str] = UNSET
    upload_ids: OptionalNullable[list[str]] = Field(default=UNSET, alias="uploadIds")
    media_items: OptionalNullable[list[MediaItem1]] = Field(default=UNSET, alias="mediaItems")
    link: OptionalNullable[str] = UNSET
    """The URL to which the post will link to. Only available for type POST."""

    thumbnail: OptionalNullable[str] = UNSET
    """The URL to image uploaded on bundle.social."""

    media_title: OptionalNullable[str] = Field(default=UNSET, alias="mediaTitle")
    """Title for video posts (type POST with video only, not REEL or STORY). This is displayed as the video title on
    Facebook."""

    native_schedule_time: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="nativeScheduleTime")
    """If passed, instead of publishing immediately, the post will be scheduled for the given date/time directly in Meta
    scheduler. Local date/time as ISO 8601 string max 30 days in the future."""

    text_format_preset_id: OptionalNullable[str] = Field(default=UNSET, alias="textFormatPresetId")
    """Facebook text background preset ID (colored status), e.g. 1679248482160767 for blue. Only available for type POST
    without video."""


class FacebookDict(TypedDict):
    type_: NotRequired[Type1OrStr]
    text: NotRequired[str | None]
    upload_ids: NotRequired[list[str] | None]
    media_items: NotRequired[list[MediaItem1Dict] | None]
    link: NotRequired[str | None]
    thumbnail: NotRequired[str | None]
    media_title: NotRequired[str | None]
    native_schedule_time: NotRequired[RFC3339DateTime | None]
    text_format_preset_id: NotRequired[str | None]

from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel
from .enums.privacy import PrivacyOrStr
from .enums.type3 import Type3, Type3OrStr
from .music_sound_info1 import MusicSoundInfo1, MusicSoundInfo1Dict


class Tiktok(SdkBaseModel):
    type_: Type3OrStr = Field(default=Type3.VIDEO, alias="type")
    text: OptionalNullable[str] = UNSET
    upload_ids: OptionalNullable[list[str]] = Field(default=UNSET, alias="uploadIds")
    thumbnail: OptionalNullable[str] = UNSET
    """The URL to image uploaded on bundle.social."""

    privacy: OptionalNullable[PrivacyOrStr] = UNSET
    photo_cover_index: int | None = Field(default=0, alias="photoCoverIndex")
    is_brand_content: bool | None = Field(default=False, alias="isBrandContent")
    """Set to true if the video is a paid partnership to promote a third-party business."""

    is_organic_brand_content: bool | None = Field(default=False, alias="isOrganicBrandContent")
    """Set to true if this video is promoting the creator's own business."""

    disable_comments: bool | None = Field(default=False, alias="disableComments")
    """If set to true, other TikTok users will not be allowed to make comments on this post."""

    disable_duet: bool | None = Field(default=False, alias="disableDuet")
    """If set to true, other TikTok users will not be allowed to make Stitches using this post."""

    disable_stitch: bool | None = Field(default=False, alias="disableStitch")
    """If set to true, other TikTok users will not be allowed to make Duets using this post."""

    thumbnail_offset: float | None = Field(default=0.0, alias="thumbnailOffset")
    """Choose a frame of the published video as the cover photo in ms"""

    is_ai_generated: bool | None = Field(default=False, alias="isAiGenerated")
    """Set to true if this video is AI generated."""

    auto_add_music: bool | None = Field(default=False, alias="autoAddMusic")
    """If set to true, TikTok will automatically add music to the photos."""

    auto_scale: bool | None = Field(default=False, alias="autoScale")
    upload_to_draft: bool | None = Field(default=False, alias="uploadToDraft")
    """If set to true, upload post as draft."""

    music_sound_info: OptionalNullable[MusicSoundInfo1] = Field(default=UNSET, alias="musicSoundInfo")
    """Information about the commercial sound (track) used for TikTok publishing."""


class TiktokDict(TypedDict):
    type_: NotRequired[Type3OrStr]
    text: NotRequired[str | None]
    upload_ids: NotRequired[list[str] | None]
    thumbnail: NotRequired[str | None]
    privacy: NotRequired[PrivacyOrStr | None]
    photo_cover_index: NotRequired[int | None]
    is_brand_content: NotRequired[bool | None]
    is_organic_brand_content: NotRequired[bool | None]
    disable_comments: NotRequired[bool | None]
    disable_duet: NotRequired[bool | None]
    disable_stitch: NotRequired[bool | None]
    thumbnail_offset: NotRequired[float | None]
    is_ai_generated: NotRequired[bool | None]
    auto_add_music: NotRequired[bool | None]
    auto_scale: NotRequired[bool | None]
    upload_to_draft: NotRequired[bool | None]
    music_sound_info: NotRequired[MusicSoundInfo1Dict | None]

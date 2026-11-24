from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel
from .enums.privacy2 import Privacy2OrStr
from .enums.type4 import Type4, Type4OrStr


class Youtube(SdkBaseModel):
    type_: Type4OrStr = Field(default=Type4.SHORT, alias="type")
    upload_ids: OptionalNullable[list[str]] = Field(default=UNSET, alias="uploadIds")
    text: OptionalNullable[str] = UNSET
    description: OptionalNullable[str] = UNSET
    thumbnail: OptionalNullable[str] = UNSET
    """The URL to image uploaded on bundle.social."""

    privacy: OptionalNullable[Privacy2OrStr] = UNSET
    default_language: OptionalNullable[str] = Field(default=UNSET, alias="defaultLanguage")
    """BCP-47 language code for the video's title and description, e.g. "en" or "pl"."""

    default_audio_language: OptionalNullable[str] = Field(default=UNSET, alias="defaultAudioLanguage")
    """BCP-47 language code for the video's default audio track, e.g. "en" or "pl"."""

    made_for_kids: bool | None = Field(default=False, alias="madeForKids")
    """Set to true if the video is made for kids."""

    contains_synthetic_media: bool | None = Field(default=False, alias="containsSyntheticMedia")
    """Set to true if video contains AI generated content"""

    has_paid_product_placement: bool | None = Field(default=False, alias="hasPaidProductPlacement")
    """Set to true if video has paid product placement"""


class YoutubeDict(TypedDict):
    type_: NotRequired[Type4OrStr]
    upload_ids: NotRequired[list[str] | None]
    text: NotRequired[str | None]
    description: NotRequired[str | None]
    thumbnail: NotRequired[str | None]
    privacy: NotRequired[Privacy2OrStr | None]
    default_language: NotRequired[str | None]
    default_audio_language: NotRequired[str | None]
    made_for_kids: NotRequired[bool | None]
    contains_synthetic_media: NotRequired[bool | None]
    has_paid_product_placement: NotRequired[bool | None]

from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel
from .enums.story_duration import StoryDurationOrStr
from .enums.type5 import Type5, Type5OrStr


class Snapchat(SdkBaseModel):
    type_: Type5OrStr = Field(default=Type5.STORY, alias="type")
    upload_ids: OptionalNullable[list[str]] = Field(default=UNSET, alias="uploadIds")
    text: OptionalNullable[str] = UNSET
    title: OptionalNullable[str] = UNSET
    description: OptionalNullable[str] = UNSET
    locale: OptionalNullable[str] = UNSET
    skip_save_to_profile: bool | None = Field(default=False, alias="skipSaveToProfile")
    story_duration: OptionalNullable[StoryDurationOrStr] = Field(default=UNSET, alias="storyDuration")


class SnapchatDict(TypedDict):
    type_: NotRequired[Type5OrStr]
    upload_ids: NotRequired[list[str] | None]
    text: NotRequired[str | None]
    title: NotRequired[str | None]
    description: NotRequired[str | None]
    locale: NotRequired[str | None]
    skip_save_to_profile: NotRequired[bool | None]
    story_duration: NotRequired[StoryDurationOrStr | None]

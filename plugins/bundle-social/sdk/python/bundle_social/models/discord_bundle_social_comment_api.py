from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class DiscordBundleSocialCommentApi(SdkBaseModel):
    text: OptionalNullable[str] = UNSET


class DiscordBundleSocialCommentApiDict(TypedDict):
    text: NotRequired[str | None]

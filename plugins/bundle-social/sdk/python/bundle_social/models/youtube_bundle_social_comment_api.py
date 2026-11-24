from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class YoutubeBundleSocialCommentApi(SdkBaseModel):
    text: OptionalNullable[str] = UNSET


class YoutubeBundleSocialCommentApiDict(TypedDict):
    text: NotRequired[str | None]

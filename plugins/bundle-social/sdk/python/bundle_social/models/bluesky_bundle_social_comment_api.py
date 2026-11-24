from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class BlueskyBundleSocialCommentApi(SdkBaseModel):
    text: OptionalNullable[str] = UNSET


class BlueskyBundleSocialCommentApiDict(TypedDict):
    text: NotRequired[str | None]

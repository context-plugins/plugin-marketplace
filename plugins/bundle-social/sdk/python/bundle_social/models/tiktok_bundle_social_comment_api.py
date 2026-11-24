from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class TiktokBundleSocialCommentApi(SdkBaseModel):
    text: OptionalNullable[str] = UNSET


class TiktokBundleSocialCommentApiDict(TypedDict):
    text: NotRequired[str | None]

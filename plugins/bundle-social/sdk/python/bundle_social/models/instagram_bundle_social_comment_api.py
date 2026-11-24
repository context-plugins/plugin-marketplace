from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class InstagramBundleSocialCommentApi(SdkBaseModel):
    text: OptionalNullable[str] = UNSET


class InstagramBundleSocialCommentApiDict(TypedDict):
    text: NotRequired[str | None]

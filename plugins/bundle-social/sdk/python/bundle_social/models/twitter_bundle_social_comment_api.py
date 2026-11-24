from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class TwitterBundleSocialCommentApi(SdkBaseModel):
    text: OptionalNullable[str] = UNSET


class TwitterBundleSocialCommentApiDict(TypedDict):
    text: NotRequired[str | None]

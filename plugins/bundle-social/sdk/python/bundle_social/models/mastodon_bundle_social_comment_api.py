from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class MastodonBundleSocialCommentApi(SdkBaseModel):
    text: OptionalNullable[str] = UNSET


class MastodonBundleSocialCommentApiDict(TypedDict):
    text: NotRequired[str | None]

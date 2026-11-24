from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class FacebookBundleSocialCommentApi(SdkBaseModel):
    text: OptionalNullable[str] = UNSET


class FacebookBundleSocialCommentApiDict(TypedDict):
    text: NotRequired[str | None]

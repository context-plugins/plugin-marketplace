from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class SlackBundleSocialCommentApi(SdkBaseModel):
    text: OptionalNullable[str] = UNSET


class SlackBundleSocialCommentApiDict(TypedDict):
    text: NotRequired[str | None]

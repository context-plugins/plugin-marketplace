from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class LinkedinBundleSocialCommentApi(SdkBaseModel):
    text: OptionalNullable[str] = UNSET


class LinkedinBundleSocialCommentApiDict(TypedDict):
    text: NotRequired[str | None]

from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class ThreadsBundleSocialCommentApi(SdkBaseModel):
    text: OptionalNullable[str] = UNSET


class ThreadsBundleSocialCommentApiDict(TypedDict):
    text: NotRequired[str | None]

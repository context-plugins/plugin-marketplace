from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class Reddit2BundleSocialCommentApi(SdkBaseModel):
    id: OptionalNullable[str] = UNSET
    permalink: OptionalNullable[str] = UNSET


class Reddit2BundleSocialCommentApiDict(TypedDict):
    id: NotRequired[str | None]
    permalink: NotRequired[str | None]

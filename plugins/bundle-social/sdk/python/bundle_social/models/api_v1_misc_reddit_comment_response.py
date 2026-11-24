from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class ApiV1MiscRedditCommentResponse(SdkBaseModel):
    success: bool
    permalink: OptionalNullable[str] = UNSET


class ApiV1MiscRedditCommentResponseDict(TypedDict):
    success: bool
    permalink: NotRequired[str | None]

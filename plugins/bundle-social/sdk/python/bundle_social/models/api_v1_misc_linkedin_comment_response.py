from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class ApiV1MiscLinkedinCommentResponse(SdkBaseModel):
    success: bool
    permalink: OptionalNullable[str] = UNSET


class ApiV1MiscLinkedinCommentResponseDict(TypedDict):
    success: bool
    permalink: NotRequired[str | None]

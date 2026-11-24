from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ApiV1MiscInstagramCommentResponse(SdkBaseModel):
    success: bool


class ApiV1MiscInstagramCommentResponseDict(TypedDict):
    success: bool

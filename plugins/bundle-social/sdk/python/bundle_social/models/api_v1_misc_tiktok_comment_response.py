from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ApiV1MiscTiktokCommentResponse(SdkBaseModel):
    success: bool


class ApiV1MiscTiktokCommentResponseDict(TypedDict):
    success: bool

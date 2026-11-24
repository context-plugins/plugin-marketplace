from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ApiV1MiscBlueskyPostResponse(SdkBaseModel):
    success: bool


class ApiV1MiscBlueskyPostResponseDict(TypedDict):
    success: bool

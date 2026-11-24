from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ApiV1MiscRedditPostResponse(SdkBaseModel):
    success: bool
    permalink: str


class ApiV1MiscRedditPostResponseDict(TypedDict):
    success: bool
    permalink: str

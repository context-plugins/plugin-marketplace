from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ApiV1MiscYoutubeVideoResponse(SdkBaseModel):
    success: bool
    permalink: str


class ApiV1MiscYoutubeVideoResponseDict(TypedDict):
    success: bool
    permalink: str

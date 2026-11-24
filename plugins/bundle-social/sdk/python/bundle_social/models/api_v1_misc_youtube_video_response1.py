from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ApiV1MiscYoutubeVideoResponse1(SdkBaseModel):
    success: bool


class ApiV1MiscYoutubeVideoResponse1Dict(TypedDict):
    success: bool

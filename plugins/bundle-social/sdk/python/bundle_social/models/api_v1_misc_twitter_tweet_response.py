from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ApiV1MiscTwitterTweetResponse(SdkBaseModel):
    success: bool


class ApiV1MiscTwitterTweetResponseDict(TypedDict):
    success: bool

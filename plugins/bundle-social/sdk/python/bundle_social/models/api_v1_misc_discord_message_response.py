from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ApiV1MiscDiscordMessageResponse(SdkBaseModel):
    success: bool


class ApiV1MiscDiscordMessageResponseDict(TypedDict):
    success: bool

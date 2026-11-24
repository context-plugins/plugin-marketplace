from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ApiV1MiscTwitterRetweetResponse(SdkBaseModel):
    success: bool


class ApiV1MiscTwitterRetweetResponseDict(TypedDict):
    success: bool

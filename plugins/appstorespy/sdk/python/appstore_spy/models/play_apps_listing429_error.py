from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class PlayAppsListing429Error(SdkBaseModel):
    error: str


class PlayAppsListing429ErrorDict(TypedDict):
    error: str

from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class PlayAppsListing429Error1(SdkBaseModel):
    error: str


class PlayAppsListing429Error1Dict(TypedDict):
    error: str

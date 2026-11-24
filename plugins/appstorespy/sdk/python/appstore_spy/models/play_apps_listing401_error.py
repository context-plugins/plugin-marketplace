from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class PlayAppsListing401Error(SdkBaseModel):
    message: str
    code: int


class PlayAppsListing401ErrorDict(TypedDict):
    message: str
    code: int

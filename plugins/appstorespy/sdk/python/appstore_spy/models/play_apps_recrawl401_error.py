from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class PlayAppsRecrawl401Error(SdkBaseModel):
    message: str
    code: int


class PlayAppsRecrawl401ErrorDict(TypedDict):
    message: str
    code: int

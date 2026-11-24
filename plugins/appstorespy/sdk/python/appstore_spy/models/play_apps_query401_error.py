from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class PlayAppsQuery401Error(SdkBaseModel):
    message: str
    code: int


class PlayAppsQuery401ErrorDict(TypedDict):
    message: str
    code: int

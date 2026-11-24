from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class PlayApps401Error(SdkBaseModel):
    message: str
    code: int


class PlayApps401ErrorDict(TypedDict):
    message: str
    code: int

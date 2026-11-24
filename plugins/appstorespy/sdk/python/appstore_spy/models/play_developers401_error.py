from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class PlayDevelopers401Error(SdkBaseModel):
    message: str
    code: int


class PlayDevelopers401ErrorDict(TypedDict):
    message: str
    code: int

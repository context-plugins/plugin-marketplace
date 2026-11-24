from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class PlayInfoLanguages401Error(SdkBaseModel):
    message: str
    code: int


class PlayInfoLanguages401ErrorDict(TypedDict):
    message: str
    code: int

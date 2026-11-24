from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class PlayInfoCountries401Error(SdkBaseModel):
    message: str
    code: int


class PlayInfoCountries401ErrorDict(TypedDict):
    message: str
    code: int

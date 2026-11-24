from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class PlayInfoCountries401Error1(SdkBaseModel):
    message: str
    code: int


class PlayInfoCountries401Error1Dict(TypedDict):
    message: str
    code: int

from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class IosInfoCountries401Error(SdkBaseModel):
    message: str
    code: int


class IosInfoCountries401ErrorDict(TypedDict):
    message: str
    code: int

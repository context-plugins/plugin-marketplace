from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class PlayAggregatesCountries401Error(SdkBaseModel):
    message: str
    code: int


class PlayAggregatesCountries401ErrorDict(TypedDict):
    message: str
    code: int

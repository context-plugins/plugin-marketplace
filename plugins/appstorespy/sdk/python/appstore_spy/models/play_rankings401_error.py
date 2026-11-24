from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class PlayRankings401Error(SdkBaseModel):
    message: str
    code: int


class PlayRankings401ErrorDict(TypedDict):
    message: str
    code: int

from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class PlayAppsSummary401Error(SdkBaseModel):
    message: str
    code: int


class PlayAppsSummary401ErrorDict(TypedDict):
    message: str
    code: int

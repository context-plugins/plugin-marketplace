from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class PlayAppsSimilar401Error(SdkBaseModel):
    message: str
    code: int


class PlayAppsSimilar401ErrorDict(TypedDict):
    message: str
    code: int

from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class PlaySuggestions401Error(SdkBaseModel):
    message: str
    code: int


class PlaySuggestions401ErrorDict(TypedDict):
    message: str
    code: int

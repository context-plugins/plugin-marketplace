from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class PlayEstimates401Error(SdkBaseModel):
    message: str
    code: int


class PlayEstimates401ErrorDict(TypedDict):
    message: str
    code: int

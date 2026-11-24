from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class IosDevelopers401Error(SdkBaseModel):
    message: str
    code: int


class IosDevelopers401ErrorDict(TypedDict):
    message: str
    code: int

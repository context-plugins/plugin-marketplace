from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class IosDevelopersQuery401Error(SdkBaseModel):
    message: str
    code: int


class IosDevelopersQuery401ErrorDict(TypedDict):
    message: str
    code: int

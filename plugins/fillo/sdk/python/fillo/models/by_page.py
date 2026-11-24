from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ByPage(SdkBaseModel):
    page: int
    count: int


class ByPageDict(TypedDict):
    page: int
    count: int

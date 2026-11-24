from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class V1Mercari401Error(SdkBaseModel):
    error: str


class V1Mercari401ErrorDict(TypedDict):
    error: str

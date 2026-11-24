from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ApiV2HlrHistory401Error(SdkBaseModel):
    error: str


class ApiV2HlrHistory401ErrorDict(TypedDict):
    error: str

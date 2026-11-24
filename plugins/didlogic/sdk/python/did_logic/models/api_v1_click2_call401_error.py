from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ApiV1Click2Call401Error(SdkBaseModel):
    error: str


class ApiV1Click2Call401ErrorDict(TypedDict):
    error: str

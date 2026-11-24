from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class Error1(SdkBaseModel):
    source: str
    message: str


class Error1Dict(TypedDict):
    source: str
    message: str

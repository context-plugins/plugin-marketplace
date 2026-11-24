from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class Error(SdkBaseModel):
    error: str


class ErrorDict(TypedDict):
    error: str

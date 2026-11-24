from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ErrorError(SdkBaseModel):
    detail: str


class ErrorErrorDict(TypedDict):
    detail: str

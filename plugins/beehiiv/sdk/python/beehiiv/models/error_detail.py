from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ErrorDetail(SdkBaseModel):
    message: str
    code: str


class ErrorDetailDict(TypedDict):
    message: str
    code: str

from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class UnprocessableErrorError(SdkBaseModel):
    message: str


class UnprocessableErrorErrorDict(TypedDict):
    message: str

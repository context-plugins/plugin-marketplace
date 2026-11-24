from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class DedupeSessionInvalidErrorError(SdkBaseModel):
    code: str
    message: str


class DedupeSessionInvalidErrorErrorDict(TypedDict):
    code: str
    message: str

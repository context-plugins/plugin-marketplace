from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class RuntimeV2LexThrottlingExceptionError(SdkBaseModel):
    message: str


class RuntimeV2LexThrottlingExceptionErrorDict(TypedDict):
    message: str

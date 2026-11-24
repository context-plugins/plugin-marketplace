from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class RuntimeV2LexThrottlingException(SdkBaseModel):
    message: str


class RuntimeV2LexThrottlingExceptionDict(TypedDict):
    message: str

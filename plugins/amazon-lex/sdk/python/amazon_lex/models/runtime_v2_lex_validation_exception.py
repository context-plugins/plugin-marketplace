from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class RuntimeV2LexValidationException(SdkBaseModel):
    message: str


class RuntimeV2LexValidationExceptionDict(TypedDict):
    message: str

from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class RuntimeV2LexValidationExceptionError(SdkBaseModel):
    message: str


class RuntimeV2LexValidationExceptionErrorDict(TypedDict):
    message: str

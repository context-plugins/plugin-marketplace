from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class RuntimeV2LexResourceNotFoundExceptionError(SdkBaseModel):
    message: str


class RuntimeV2LexResourceNotFoundExceptionErrorDict(TypedDict):
    message: str

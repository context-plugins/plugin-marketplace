from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class RuntimeV2LexInternalServerExceptionError(SdkBaseModel):
    message: str


class RuntimeV2LexInternalServerExceptionErrorDict(TypedDict):
    message: str

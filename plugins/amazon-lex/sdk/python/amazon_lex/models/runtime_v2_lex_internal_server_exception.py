from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class RuntimeV2LexInternalServerException(SdkBaseModel):
    message: str


class RuntimeV2LexInternalServerExceptionDict(TypedDict):
    message: str

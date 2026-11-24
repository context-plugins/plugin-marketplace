from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class RuntimeV2LexResourceNotFoundException(SdkBaseModel):
    message: str


class RuntimeV2LexResourceNotFoundExceptionDict(TypedDict):
    message: str

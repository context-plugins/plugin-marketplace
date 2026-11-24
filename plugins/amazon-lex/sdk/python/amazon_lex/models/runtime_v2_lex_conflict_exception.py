from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class RuntimeV2LexConflictException(SdkBaseModel):
    message: str


class RuntimeV2LexConflictExceptionDict(TypedDict):
    message: str

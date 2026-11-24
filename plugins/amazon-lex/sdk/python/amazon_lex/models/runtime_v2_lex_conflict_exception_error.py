from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class RuntimeV2LexConflictExceptionError(SdkBaseModel):
    message: str


class RuntimeV2LexConflictExceptionErrorDict(TypedDict):
    message: str

from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class DependencyFailedException(SdkBaseModel):
    message: str


class DependencyFailedExceptionDict(TypedDict):
    message: str

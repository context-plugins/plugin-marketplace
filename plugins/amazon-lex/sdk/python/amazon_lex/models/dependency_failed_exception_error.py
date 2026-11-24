from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class DependencyFailedExceptionError(SdkBaseModel):
    message: str


class DependencyFailedExceptionErrorDict(TypedDict):
    message: str

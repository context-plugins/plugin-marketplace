from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class AccessDeniedExceptionError(SdkBaseModel):
    message: str


class AccessDeniedExceptionErrorDict(TypedDict):
    message: str

from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class AccessDeniedException(SdkBaseModel):
    message: str


class AccessDeniedExceptionDict(TypedDict):
    message: str

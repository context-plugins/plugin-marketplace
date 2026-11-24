from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class AuthenticationException(SdkBaseModel):
    message: str
    """Error overview."""


class AuthenticationExceptionDict(TypedDict):
    message: str

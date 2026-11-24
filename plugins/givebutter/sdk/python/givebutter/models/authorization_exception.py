from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class AuthorizationException(SdkBaseModel):
    message: str
    """Error overview."""


class AuthorizationExceptionDict(TypedDict):
    message: str

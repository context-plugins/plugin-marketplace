from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class AuthorizationException1(SdkBaseModel):
    message: str
    """Error overview."""


class AuthorizationException1Dict(TypedDict):
    message: str

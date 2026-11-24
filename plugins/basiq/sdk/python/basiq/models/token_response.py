from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class TokenResponse(SdkBaseModel):
    access_token: str
    """The generated access token."""

    expires_in: int
    """Expires in 3600 seconds"""

    token_type: str
    """This value will always be ``Bearer``."""


class TokenResponseDict(TypedDict):
    access_token: str
    expires_in: int
    token_type: str

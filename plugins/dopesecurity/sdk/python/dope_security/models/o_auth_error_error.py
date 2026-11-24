from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class OAuthErrorError(SdkBaseModel):
    """The error response related OAuth tokens"""

    error: str
    """Specifies the OAuth error code string when the request for a token fails."""


class OAuthErrorErrorDict(TypedDict):
    error: str

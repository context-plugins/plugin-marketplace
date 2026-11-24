from __future__ import annotations

from typing import Literal

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class TokenResponse(SdkBaseModel):
    """Access token response from ``/oauth/token``."""

    access_token: str
    token_type: Literal["Bearer"] = "Bearer"
    """The token type returned by OAuth2 token endpoints."""

    expires_in: int
    refresh_token: Optional[str] = UNSET
    scope: Optional[str] = UNSET
    created_at: int


class TokenResponseDict(TypedDict):
    access_token: str
    token_type: Literal["Bearer"]
    expires_in: int
    refresh_token: NotRequired[str]
    scope: NotRequired[str]
    created_at: int

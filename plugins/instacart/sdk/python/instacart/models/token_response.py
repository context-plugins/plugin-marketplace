from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.token_type import TokenTypeOrStr


class TokenResponse(SdkBaseModel):
    access_token: Optional[str] = UNSET
    """The Bearer token to use for authenticating API requests."""

    token_type: Optional[TokenTypeOrStr] = UNSET
    """The type of token issued."""

    expires_in: Optional[int] = UNSET
    """The number of seconds until the token expires. Typically 86400 seconds (24 hours)."""

    scope: Optional[str] = UNSET
    """The scope of access granted by the token."""

    created_at: Optional[int] = UNSET
    """Unix timestamp indicating when the token was created."""


class TokenResponseDict(TypedDict):
    access_token: NotRequired[str]
    token_type: NotRequired[TokenTypeOrStr]
    expires_in: NotRequired[int]
    scope: NotRequired[str]
    created_at: NotRequired[int]

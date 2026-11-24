from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.grant_type1 import GrantType1OrStr


class OauthTokenRequest(SdkBaseModel):
    grant_type: GrantType1OrStr
    """authorization_code or refresh_token."""

    code: Optional[str] = UNSET
    """Authorization code returned from /oauth/authorize."""

    redirect_uri: Optional[str] = UNSET
    """Must match the redirect URI used in the authorization request."""

    client_id: Optional[str] = UNSET
    """OAuth application client ID (uid)."""

    client_secret: Optional[str] = UNSET
    """Required for confidential clients."""

    refresh_token: Optional[str] = UNSET
    """Refresh token returned from a previous token exchange."""

    code_verifier: Optional[str] = UNSET
    """PKCE code verifier. Required for public clients."""


class OauthTokenRequestDict(TypedDict):
    grant_type: GrantType1OrStr
    code: NotRequired[str]
    redirect_uri: NotRequired[str]
    client_id: NotRequired[str]
    client_secret: NotRequired[str]
    refresh_token: NotRequired[str]
    code_verifier: NotRequired[str]

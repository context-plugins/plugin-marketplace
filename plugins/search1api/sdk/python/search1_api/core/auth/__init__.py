"""The authentication layer's curated surface: its models, its contract, its composites.

The route the runtime facade and ``raw_client`` take, so neither needs to know how this package is laid
out. What only ``schemes/`` needs -- ``ScopeT``, ``OAuth2Credentials``, ``CredentialsPlacement``,
``OAuthParams`` and ``scope_params`` -- stays behind, reached at ``models`` directly.

⚠️ **``schemes/`` is deliberately not re-exported here.** A scheme module reaches ``raw_client``, which
reaches this package -- so importing ``.schemes`` from this file would close that loop into an
``ImportError`` on whichever of the two is imported first. The facade names ``.schemes`` itself."""

from .composition import (
    AllSchemes,
    AnySchemes,
    AnySchemesError,
    AsyncAllSchemes,
    AsyncAnySchemes,
    invalidate,
    is_configured,
    no_auth,
    resolve_auth,
)
from .models import (
    AuthParams,
    OAuthToken,
    OAuthTokenRefreshable,
    client_secret_basic,
    client_secret_post,
)
from .protocols import (
    AsyncAuthScheme,
    AsyncRefreshableTokenSource,
    AsyncTokenSource,
    AuthScheme,
    RefreshableTokenSource,
    RevocableAuthScheme,
    TokenSource,
)

__all__ = [
    # What one scheme contributes to a request
    "AuthParams",
    # The contract
    "AuthScheme",
    "AsyncAuthScheme",
    "RevocableAuthScheme",
    # The absent credential, and composition
    "no_auth",
    "is_configured",
    "resolve_auth",
    "invalidate",
    "AllSchemes",
    "AnySchemes",
    "AsyncAllSchemes",
    "AsyncAnySchemes",
    "AnySchemesError",
    # Managed OAuth 2.0 -- the token source seam
    "TokenSource",
    "AsyncTokenSource",
    "RefreshableTokenSource",
    "AsyncRefreshableTokenSource",
    # Managed OAuth 2.0 -- the provider's vocabulary
    "OAuthToken",
    "OAuthTokenRefreshable",
    "client_secret_basic",
    "client_secret_post",
]

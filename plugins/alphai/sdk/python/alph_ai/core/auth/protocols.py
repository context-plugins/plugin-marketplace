"""Every protocol the authentication layer defines: what a scheme is, and where a token comes from.

Two families, one file. :class:`AuthScheme` and its async twin are the whole contract for applying a
credential to a request, so a scheme this runtime does not ship is a class a *caller* writes; ``apply``
runs once per request, which is what makes rotation and just-in-time signing work.
:class:`TokenSource` and its three relatives are the seam managed OAuth 2.0 fetches through, so a
consumer replaces the built-in source without touching the caching scheme that calls it.

Nothing here has a body, so nothing here reaches a scheme, a composite or a transport -- only the
models its members name."""

from __future__ import annotations

from collections.abc import Awaitable
from typing import Protocol, TypeVar, runtime_checkable

from .models import AuthParams, OAuthToken, OAuthTokenRefreshable

CredentialsT_contra = TypeVar("CredentialsT_contra", contravariant=True)
"""A grant's credentials, as a source accepts them.

Contravariant because the protocols below take it in an *argument* position and nowhere else."""


class AuthScheme(Protocol):
    """A security scheme, as the synchronous client sees it.

    Implementations:

    - MUST be safe to call repeatedly -- ``apply`` runs once per request.
    - SHOULD be frozen: one scheme instance serves every request a client makes.
    - MAY block, but only if the synchronous client is the only one that will hold it."""

    def apply(self) -> AuthParams: ...


class AsyncAuthScheme(Protocol):
    """A security scheme, as the asynchronous client sees it.

    ``apply`` may return the parameters directly *or* an awaitable of them, so one synchronous method
    satisfies this protocol **and** :class:`AuthScheme` and no async twin of a static scheme is
    needed. A scheme that must reach the network declares ``async def apply`` and satisfies only this
    one, which is what keeps it off the synchronous transport it could not use."""

    def apply(self) -> AuthParams | Awaitable[AuthParams]: ...


@runtime_checkable
class RevocableAuthScheme(Protocol):
    """A scheme whose credential can go stale before it expires.

    ``invalidate`` is a **hint, not a barrier**: it runs after a 401 and must not block, so a fetch
    already in flight may repopulate the cache immediately afterwards. ``runtime_checkable`` because
    ``composition.invalidate`` has to ask a scheme whose type it does not know."""

    def invalidate(self) -> None: ...


class TokenSource(Protocol[CredentialsT_contra]):
    """Where an OAuth 2.0 scheme gets its token, given that grant's credentials.

    Generic because the credentials differ between grants, so a mismatch is reported at the client
    constructor rather than at the first request. ``fetch`` always receives the validated credentials
    model, never the mapping form.

    Implementations:

    - MUST be safe to call repeatedly, and MAY be called concurrently.
    - MUST NOT issue a request that itself uses the scheme holding them -- ``fetch`` runs inside that
      scheme's lock, so doing so deadlocks.
    - SHOULD bound their own I/O. The built-in source inherits the client's timeout."""

    def fetch(self, credentials: CredentialsT_contra) -> OAuthToken: ...


class AsyncTokenSource(Protocol[CredentialsT_contra]):
    """:class:`TokenSource` as the asynchronous client sees it.

    ``fetch`` is a coroutine, deliberately unlike :meth:`AsyncAuthScheme.apply`'s union: nothing about
    obtaining a token is static, so declaring it makes a synchronous source a **type** error rather
    than a ``TypeError`` at the first request."""

    async def fetch(self, credentials: CredentialsT_contra) -> OAuthToken: ...


class RefreshableTokenSource(TokenSource[CredentialsT_contra], Protocol[CredentialsT_contra]):
    """A :class:`TokenSource` that can also exchange a refresh token for a new access token.

    Extends rather than replaces: ``fetch`` still runs when there is nothing to refresh, and again
    when a refresh is refused. ``refresh`` returns ``None`` for a *provider* refusal rather than
    raising; a transport failure still propagates, as ``SdkConnectionError``, and so does a success whose
    body will not decode, as ``ResponseDecodeError``."""

    def fetch(self, credentials: CredentialsT_contra) -> OAuthTokenRefreshable: ...

    def refresh(self, credentials: CredentialsT_contra, refresh_token: str) -> OAuthTokenRefreshable | None: ...


class AsyncRefreshableTokenSource(AsyncTokenSource[CredentialsT_contra], Protocol[CredentialsT_contra]):
    """:class:`RefreshableTokenSource` as the asynchronous client sees it: both members are awaited."""

    async def fetch(self, credentials: CredentialsT_contra) -> OAuthTokenRefreshable: ...

    async def refresh(self, credentials: CredentialsT_contra, refresh_token: str) -> OAuthTokenRefreshable | None: ...

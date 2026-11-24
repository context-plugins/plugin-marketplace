"""Managed OAuth 2.0's caching schemes: two tiers, four classes, and no fetching code at all.

:class:`OAuth2Scheme` owns the token cache, the deadline, ``invalidate`` and the ``Bearer``
application, and obtains a token by calling ``source.fetch(credentials)``.
:class:`OAuth2RefreshableScheme` is its sibling for a grant whose endpoint may issue a refresh token,
and prefers a refresh over a re-acquisition. Two tiers and not one with a flag: client credentials can
never reach a refresh branch (RFC 6749 §4.4.3), so making that branch reachable would need an
``isinstance`` on the token.

The one module in this directory that names no grant, which is what lets four classes serve every one."""

from __future__ import annotations

import asyncio
import threading
import time
from dataclasses import dataclass, field
from math import inf
from typing import Final, Generic, TypeVar

from ...params import param
from ..models import AuthParams, OAuthToken, OAuthTokenRefreshable
from ..protocols import (
    AsyncRefreshableTokenSource,
    AsyncTokenSource,
    RefreshableTokenSource,
    TokenSource,
)

CredentialsT = TypeVar("CredentialsT")
"""A grant's credentials, as the scheme holds them.

Declared here and not beside its contravariant twin in ``protocols``: the four classes below are its
only consumers."""

_EXPIRY_BUFFER_SECONDS: Final = 30.0


@dataclass(frozen=True, slots=True)
class _CachedToken:
    """An access token and the monotonic instant it stops being usable.

    One object rather than two fields on the scheme, so the lock-free fast path reads a *single*
    attribute and can never observe a new token beside a stale deadline."""

    access_token: str = field(repr=False)
    expires_at: float

    def is_expired(self) -> bool:
        return time.monotonic() >= self.expires_at


def _expires_at(expires_in: int | None) -> float:
    """The monotonic instant a token issued *now* stops being usable.

    ``time.monotonic``, because ``expires_in`` is a duration and a wall clock an NTP step can move
    does not measure one. Named for the conversion it performs: a duration in, an instant out.

    Args:
        expires_in: RFC 6749 §5.1's lifetime in seconds; ``None`` or non-positive means no
            client-side deadline, and the token is cached until a 401 dislodges it.

    Returns:
        The monotonic deadline, or ``inf`` when there is none."""
    if expires_in is None or expires_in <= 0:
        return inf

    # ``max``, not a flat subtraction: subtracting outright is non-monotonic near the buffer, so a
    # longer-lived token would be cached for less time. The two cross at 60 s.
    return time.monotonic() + max(expires_in - _EXPIRY_BUFFER_SECONDS, expires_in / 2)


def _cache(token: OAuthToken) -> _CachedToken:
    """Deadline a token on the monotonic clock.

    Args:
        token: The token endpoint's success body.

    Returns:
        The cache entry: the token, plus the deadline :func:`_expires_at` computes for it."""
    return _CachedToken(token.access_token, _expires_at(token.expires_in))


@dataclass(frozen=True, slots=True)
class _CachedRefreshableToken:
    """:class:`_CachedToken` plus the refresh token that outlives it.

    A sibling rather than a third field, so a scheme over a grant that cannot be issued a refresh
    token has none to read. Frozen and fully built before publication, for its sibling's reason."""

    access_token: str = field(repr=False)
    expires_at: float
    refresh_token: str | None = field(repr=False)

    def is_expired(self) -> bool:
        return time.monotonic() >= self.expires_at


def _cache_refreshable(token: OAuthTokenRefreshable, previous: str | None) -> _CachedRefreshableToken:
    """Deadline a refreshable token, keeping ``previous`` when the response omitted one.

    RFC 6749 §6: a refresh response MAY omit ``refresh_token``, and the previously-issued one stays
    valid when it does.

    Args:
        token: The token endpoint's success body.
        previous: The refresh token that bought this response; ``None`` on a first acquisition.

    Returns:
        The cache entry, carrying whichever refresh token is still valid."""
    return _CachedRefreshableToken(
        token.access_token,
        _expires_at(token.expires_in),
        token.refresh_token if token.refresh_token is not None else previous,
    )


class OAuth2Scheme(Generic[CredentialsT]):
    """A bearer token obtained through a :class:`TokenSource` and cached until it expires.

    Grant-agnostic, and holds no fetching code of its own: it calls ``source.fetch(credentials)``.
    Acquisition is lazy and one instance serves a client's whole life, so the cache does too. Not
    frozen -- the token cache is the one thing a scheme legitimately mutates."""

    __slots__ = ("_cached", "_credentials", "_lock", "_source")

    def __init__(self, *, credentials: CredentialsT, source: TokenSource[CredentialsT]) -> None:
        self._credentials = credentials
        self._source = source
        self._lock = threading.Lock()
        self._cached: _CachedToken | None = None

    def apply(self) -> AuthParams:
        token = self._get_and_cache_token()
        return AuthParams(headers=(param[str]("Authorization", f"Bearer {token}"),))

    def invalidate(self) -> None:
        """Drop the cached token, so the next request obtains a new one."""
        self._cached = None

    def _get_and_cache_token(self) -> str:
        """The cached access token, obtaining and caching one when none is fresh.

        Double-checked: the fast path is one lock-free attribute read, and the second check inside
        the lock is what makes a burst of concurrent requests pay for **one** acquisition.

        Returns:
            The access token to apply."""
        cached = self._cached
        if cached is not None and not cached.is_expired():
            return cached.access_token

        with self._lock:
            cached = self._cached
            if cached is not None and not cached.is_expired():
                return cached.access_token

            cached = _cache(self._source.fetch(self._credentials))
            self._cached = cached
            return cached.access_token


class AsyncOAuth2Scheme(Generic[CredentialsT]):
    """:class:`OAuth2Scheme` for the asynchronous client: the token is awaited.

    The lock is an ``asyncio.Lock``, which binds to the running loop on first *use* rather than at
    construction, so building the client outside a loop is fine. Thereafter the scheme belongs to
    one loop -- the same constraint the connection pool beside it already imposes."""

    __slots__ = ("_cached", "_credentials", "_lock", "_source")

    def __init__(self, *, credentials: CredentialsT, source: AsyncTokenSource[CredentialsT]) -> None:
        self._credentials = credentials
        self._source = source
        self._lock = asyncio.Lock()
        self._cached: _CachedToken | None = None

    async def apply(self) -> AuthParams:
        token = await self._get_and_cache_token()
        return AuthParams(headers=(param[str]("Authorization", f"Bearer {token}"),))

    def invalidate(self) -> None:
        """Drop the cached token, so the next request obtains a new one."""
        self._cached = None

    async def _get_and_cache_token(self) -> str:
        """See :meth:`OAuth2Scheme._get_and_cache_token`; the source may need to be awaited.

        Returns:
            The access token to apply."""
        cached = self._cached
        if cached is not None and not cached.is_expired():
            return cached.access_token

        async with self._lock:
            cached = self._cached
            if cached is not None and not cached.is_expired():
                return cached.access_token

            cached = _cache(await self._source.fetch(self._credentials))
            self._cached = cached
            return cached.access_token


class OAuth2RefreshableScheme(Generic[CredentialsT]):
    """:class:`OAuth2Scheme` for a grant whose token endpoint may issue a refresh token.

    **Refreshing is preferred over re-acquiring**, which is the whole value of the tier: for the
    authorization-code grant a re-acquisition runs the caller's prompt again. :meth:`invalidate`
    drops the refresh token too, so a 401 is answered by a full re-acquisition."""

    __slots__ = ("_cached", "_credentials", "_lock", "_source")

    def __init__(self, *, credentials: CredentialsT, source: RefreshableTokenSource[CredentialsT]) -> None:
        self._credentials = credentials
        self._source = source
        self._lock = threading.Lock()
        self._cached: _CachedRefreshableToken | None = None

    def apply(self) -> AuthParams:
        token = self._get_and_cache_token()
        return AuthParams(headers=(param[str]("Authorization", f"Bearer {token}"),))

    def invalidate(self) -> None:
        """Drop the cached token, so the next request acquires a new one from scratch."""
        self._cached = None

    def _get_and_cache_token(self) -> str:
        """The cached access token, refreshing or re-acquiring when none is fresh.

        Double-checked as :meth:`OAuth2Scheme._get_and_cache_token` is, with one branch added: a
        stale entry still carrying a refresh token is worth one attempt first. The fallback calls
        ``fetch``, which for an interactive grant blocks on a human *while this lock is held*.

        Returns:
            The access token to apply."""
        cached = self._cached
        if cached is not None and not cached.is_expired():
            return cached.access_token

        with self._lock:
            cached = self._cached
            if cached is not None and not cached.is_expired():
                return cached.access_token

            if cached is not None and cached.refresh_token is not None:
                refreshed = self._source.refresh(self._credentials, cached.refresh_token)
                if refreshed is not None:
                    acquired = _cache_refreshable(refreshed, cached.refresh_token)
                    self._cached = acquired
                    return acquired.access_token

            acquired = _cache_refreshable(self._source.fetch(self._credentials), None)
            self._cached = acquired
            return acquired.access_token


class AsyncOAuth2RefreshableScheme(Generic[CredentialsT]):
    """:class:`OAuth2RefreshableScheme` for the asynchronous client: both source calls are awaited."""

    __slots__ = ("_cached", "_credentials", "_lock", "_source")

    def __init__(self, *, credentials: CredentialsT, source: AsyncRefreshableTokenSource[CredentialsT]) -> None:
        self._credentials = credentials
        self._source = source
        self._lock = asyncio.Lock()
        self._cached: _CachedRefreshableToken | None = None

    async def apply(self) -> AuthParams:
        token = await self._get_and_cache_token()
        return AuthParams(headers=(param[str]("Authorization", f"Bearer {token}"),))

    def invalidate(self) -> None:
        """Drop the cached token, so the next request acquires a new one from scratch."""
        self._cached = None

    async def _get_and_cache_token(self) -> str:
        """See :meth:`OAuth2RefreshableScheme._get_and_cache_token`; both source calls are awaited.

        Returns:
            The access token to apply."""
        cached = self._cached
        if cached is not None and not cached.is_expired():
            return cached.access_token

        async with self._lock:
            cached = self._cached
            if cached is not None and not cached.is_expired():
                return cached.access_token

            if cached is not None and cached.refresh_token is not None:
                refreshed = await self._source.refresh(self._credentials, cached.refresh_token)
                if refreshed is not None:
                    acquired = _cache_refreshable(refreshed, cached.refresh_token)
                    self._cached = acquired
                    return acquired.access_token

            acquired = _cache_refreshable(await self._source.fetch(self._credentials), None)
            self._cached = acquired
            return acquired.access_token

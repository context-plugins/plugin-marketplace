"""The absent credential, and the two ways an operation's ``security`` composes several schemes.

:data:`no_auth` is what an unconfigured credential becomes, and :func:`is_configured` tests identity
against that one instance -- never "applying it did not raise", so a *blank* credential is configured
and is sent. :class:`AllSchemes` and :class:`AnySchemes`, with their async twins, are OpenAPI's AND and
OR requirements. Neither withholds a request over a partial set: the SDK never refuses to send because
a credential is missing, the server decides. An OR group whose every configured member raised raises
:class:`AnySchemesError` with each failure, which ``execute`` wraps in ``AuthSchemeError`` naming the call.

All four composites carry ``invalidate``, which makes a composite itself revocable so nesting
propagates."""

from __future__ import annotations

from collections.abc import Sequence
from dataclasses import dataclass
from typing import Final

from .models import AuthParams
from .protocols import AsyncAuthScheme, AuthScheme, RevocableAuthScheme


async def resolve_auth(scheme: AsyncAuthScheme) -> AuthParams:
    """The async client's counterpart to a plain ``scheme.apply()``.

    Narrowing is on :class:`AuthParams` rather than on awaitability, so the awaited branch keeps its
    precise type instead of widening to ``Any``.

    Args:
        scheme: The scheme to apply, whether or not it needs I/O to produce its parameters.

    Returns:
        What the scheme contributes to this request."""
    applied = scheme.apply()
    return applied if isinstance(applied, AuthParams) else await applied


@dataclass(frozen=True, slots=True)
class _NoAuth:
    """The absent credential: a scheme that contributes nothing.

    Private so that :func:`is_configured` can test identity against the one instance below; a second
    instance would be indistinguishable from a configured scheme by that test."""

    def apply(self) -> AuthParams:
        return AuthParams()


no_auth: Final[AuthScheme] = _NoAuth()
"""What the client writes when a credential is absent, and ``execute``'s default.

An endpoint whose operation declares no ``security`` omits ``auth_scheme=`` entirely and takes this. The SDK
never refuses to send a request because a credential is missing -- the server decides."""


def is_configured(scheme: AuthScheme | AsyncAuthScheme) -> bool:
    """Whether a credential was supplied for ``scheme``.

    Identity against the one null object, never "applying it did not raise". A *blank* credential is
    configured and is sent: ``None`` is the only sentinel.

    Args:
        scheme: The scheme to test, a caller's own included.

    Returns:
        ``True`` unless this is the null object :data:`no_auth`."""
    return scheme is not no_auth


def invalidate(scheme: AuthScheme | AsyncAuthScheme) -> None:
    """Drop whatever ``scheme`` cached, if it caches anything at all.

    A no-op for every static scheme, so on an API with no managed OAuth the 401 branch in ``execute``
    costs one ``isinstance`` and nothing else.

    Args:
        scheme: The scheme a 401 was received against."""
    if isinstance(scheme, RevocableAuthScheme):
        scheme.invalidate()


class AllSchemes:
    """AND-composition: every configured member applies.

    An unconfigured member contributes nothing and drops out on its own; the request still goes out
    with whatever *was* configured. This layer never withholds a request over a partial set."""

    __slots__ = ("_schemes",)

    def __init__(self, *schemes: AuthScheme) -> None:
        self._schemes = schemes

    def apply(self) -> AuthParams:
        applied = [scheme.apply() for scheme in self._schemes]
        return AuthParams(
            headers=tuple(p for a in applied for p in a.headers),
            query_params=tuple(p for a in applied for p in a.query_params),
            cookies=tuple(p for a in applied for p in a.cookies),
        )

    def invalidate(self) -> None:
        """Drop every member's cached credential, via the module-level :func:`invalidate`.

        Having this makes a composite itself revocable, so nesting one inside another propagates."""
        for scheme in self._schemes:
            invalidate(scheme)


class AnySchemesError(Exception):
    """Every configured member of an OR group raised: each failure, in the order the members were tried.

    What :class:`AnySchemes` and :class:`AsyncAnySchemes` raise, and never what a caller catches. A scheme
    is applied without the request, so the group cannot name the call; ``execute`` wraps this in
    ``AuthSchemeError`` naming it, with these failures as its ``scheme_failures`` and this as its cause,
    under the message ``could not be authenticated: no configured scheme succeeded``. An OR group nested
    in another is one of the outer group's failures, never flattened."""

    def __init__(self, scheme_failures: Sequence[Exception]) -> None:
        super().__init__("no configured scheme succeeded")
        self.scheme_failures: tuple[Exception, ...] = tuple(scheme_failures)
        """What each configured member raised, in the order they were tried; never empty."""

    def __reduce__(self) -> tuple[type[AnySchemesError], tuple[tuple[Exception, ...]]]:
        # BaseException's own reduce replays ``args`` -- the message -- into ``scheme_failures``.
        return type(self), (self.scheme_failures,)


class AnySchemes:
    """OR-composition: the first *configured* member that applies wins.

    The candidates are chosen on credential presence, never on "applying it did not fail" -- an
    unconfigured member is never tried, so one listed ahead of a configured one cannot win and send the
    request unauthenticated. Among the candidates, one that raises yields to the next; when every one
    raised, :class:`AnySchemesError` carries each failure, the first as its cause. A failure a later
    member recovers from is absorbed: the call goes ahead on that member's credential. A token request
    that fails logs its own lines, a WARNING where it was refused and an ERROR where it got no response,
    and those lines are the signal that a fallback credential is in use. A scheme is applied outside the
    call's log scope, so the group adds no line of its own; a caller who wants one naming the scheme, or
    one for a scheme that makes no request, wraps that scheme. A caller's cancellation is not an
    ``Exception`` and is never collected. With nothing configured the request goes out unauthenticated, as
    a single unconfigured scheme would."""

    __slots__ = ("_schemes",)

    def __init__(self, *schemes: AuthScheme) -> None:
        self._schemes = schemes

    def apply(self) -> AuthParams:
        failures: list[Exception] = []
        for scheme in self._schemes:
            if not is_configured(scheme):
                continue
            try:
                return scheme.apply()
            except Exception as error:
                failures.append(error)
        if failures:
            raise AnySchemesError(failures) from failures[0]
        return AuthParams()

    def invalidate(self) -> None:
        """Drop every member's cached credential; see :meth:`AllSchemes.invalidate`.

        Over-invalidates on purpose: which arm won the last :meth:`apply` is not tracked, and tracking
        it would mean per-request state on an object every request shares."""
        for scheme in self._schemes:
            invalidate(scheme)


class AsyncAllSchemes:
    """:class:`AllSchemes` for the asynchronous client: a member may await its credential."""

    __slots__ = ("_schemes",)

    def __init__(self, *schemes: AsyncAuthScheme) -> None:
        self._schemes = schemes

    async def apply(self) -> AuthParams:
        applied = [await resolve_auth(scheme) for scheme in self._schemes]
        return AuthParams(
            headers=tuple(p for a in applied for p in a.headers),
            query_params=tuple(p for a in applied for p in a.query_params),
            cookies=tuple(p for a in applied for p in a.cookies),
        )

    def invalidate(self) -> None:
        """See :meth:`AllSchemes.invalidate`. Not a coroutine: dropping a cache never awaits."""
        for scheme in self._schemes:
            invalidate(scheme)


class AsyncAnySchemes:
    """:class:`AnySchemes` for the asynchronous client: a candidate may await its credential.

    The candidates are still chosen without I/O, so no unconfigured member is ever resolved, and none
    after the one that wins. A failure a later member recovers from is dropped, as it is there."""

    __slots__ = ("_schemes",)

    def __init__(self, *schemes: AsyncAuthScheme) -> None:
        self._schemes = schemes

    async def apply(self) -> AuthParams:
        failures: list[Exception] = []
        for scheme in self._schemes:
            if not is_configured(scheme):
                continue
            try:
                return await resolve_auth(scheme)
            except Exception as error:
                failures.append(error)
        if failures:
            raise AnySchemesError(failures) from failures[0]
        return AuthParams()

    def invalidate(self) -> None:
        """See :meth:`AnySchemes.invalidate`, including why it over-invalidates."""
        for scheme in self._schemes:
            invalidate(scheme)

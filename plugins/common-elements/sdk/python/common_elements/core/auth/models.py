"""What every security scheme trades in, and the OAuth 2.0 vocabulary its grants share.

:class:`AuthParams` is what one scheme contributes to a request. The rest is managed OAuth 2.0's
grant-agnostic half: the token endpoint's success body (RFC 6749 §5.1, fixed for every provider, which
is why it is a runtime type at all), §2.3.1's client-authentication placements, §3.3's scope delimiter,
and the scope vocabulary parameter every grant's credentials carry. A refusal is not typed: the token
endpoint maps through ``raw_error_response``.

The bottom of the auth layer. It names no protocol and no scheme, so ``protocols``, ``composition`` and
``schemes/`` all import from here and nothing imports back. It performs no token request either --
which is why no ``RawClient``, ``form_body`` or ``UrlTemplate`` appears below."""

from __future__ import annotations

from base64 import b64encode
from collections.abc import Callable, Sequence
from dataclasses import dataclass
from typing import Any, TypeAlias
from urllib.parse import quote

from pydantic import BaseModel, ConfigDict, Field

# ``TypeVar`` from here and not ``typing``: PEP 696 defaults reach ``typing`` at 3.13, and ``ScopeT``
# below needs one at the 3.10 floor.
from typing_extensions import TypeVar

from .._internal.wire import text_values
from ..params import Param, param


@dataclass(frozen=True, slots=True)
class AuthParams:
    """What one scheme contributes to a request.

    Held as :class:`Param` rather than plain strings, so a credential is validated, dumped and
    encoded by the same code as an endpoint's own parameters."""

    headers: tuple[Param[Any], ...] = ()
    query_params: tuple[Param[Any], ...] = ()
    cookies: tuple[Param[Any], ...] = ()

    def request_headers(self) -> tuple[Param[Any], ...]:
        """Every header this contributes, cookie pairs folded into one ``Cookie`` (RFC 6265).

        Folding here rather than at each scheme is what lets two cookie-bearing schemes compose;
        two ``Cookie`` parameters would see the second overwrite the first. This covers only what
        *this request's* schemes contributed -- folding the jar across the API's, the endpoint's and
        the caller's layers is ``_internal/headers.py``'s.

        The jar is tested rather than the tuple, so cookies that all render to nothing contribute no
        header at all instead of an empty one that would clobber a lower layer.

        Returns:
            The headers, plus one folded ``Cookie`` when any cookie was contributed."""
        jar = "; ".join(f"{cookie.key}={value}" for cookie in self.cookies for value in text_values(cookie))
        if not jar:
            return self.headers

        return *self.headers, param[str]("Cookie", jar)


ScopeT = TypeVar("ScopeT", bound=str, default=str)
"""A grant's scope vocabulary, as its flow declares it.

Bound to ``str`` because RFC 6749 §3.3 puts scopes on the wire as space-delimited strings, and
defaulted to it so an unparametrized credential means what it always did: any scope the provider
accepts, which is also what a flow declaring no scopes emits."""


class OAuth2Credentials(BaseModel):
    """The base every OAuth 2.0 grant's credentials share, carrying one thing: their repr.

    Each grant's credentials are generic over :data:`ScopeT`, and pydantic names a parametrized model
    after its parametrization -- so an unhelped repr prints the flow's whole scope vocabulary in place
    of the class a caller wrote. This restores the latter.

    ⚠️ **It declares no fields, and must not gain one.** Pydantic orders a base's fields ahead of a
    subclass's, so a field here would move to the front of every credential's repr and ``model_dump``.
    A grant's own fields stay in its own model, which is also where ``model_config``, its ``coerce``
    and its validators stay."""

    def __repr_name__(self) -> str:
        """The class name without its parametrization.

        Returns:
            The unsubscripted class's name, or this class's own when it was never subscripted."""
        origin = type(self).__pydantic_generic_metadata__["origin"]
        return origin.__name__ if origin is not None else type(self).__name__


class OAuthToken(BaseModel):
    """The token endpoint's success body (RFC 6749 §5.1), and what a token source returns.

    ``expires_in`` is RECOMMENDED rather than required, so its absence means "no client-side
    deadline". ``token_type`` is parsed because the RFC requires it and deliberately **not** used
    when applying: echoing a wire keyword into ``Authorization`` would put unvalidated data there.

    No ``refresh_token``: RFC 6749 §4.4.3 says the client-credentials grant SHOULD NOT be issued
    one. A grant that may be returns :class:`OAuthTokenRefreshable` instead."""

    model_config = ConfigDict(frozen=True)

    access_token: str = Field(repr=False)
    token_type: str
    expires_in: int | None = None
    scope: str | None = None


class OAuthTokenRefreshable(OAuthToken):
    """The token endpoint's success body for a grant that may issue a refresh token.

    RFC 6749 §4.1.4 and §4.3.3 both make ``refresh_token`` OPTIONAL. A subclass rather than an
    optional field, so a source's declared return type says which tier it belongs to."""

    refresh_token: str | None = Field(default=None, repr=False)


OAuthParams: TypeAlias = tuple[Param[Any], ...]
"""One destination's worth of parameters: half a token request, or an authorization URL's query."""

CredentialsPlacement: TypeAlias = Callable[[str, str | None], tuple[OAuthParams, OAuthParams]]
"""Where a client's own credentials travel on a token request: its headers, and its form fields.

Named after the specification extension it is read from, ``x-oauth2-credentials-placement``.
Grant-agnostic: RFC 6749 §2.3.1 authenticates the *client*, which every grant does identically."""


def scope_params(scopes: Sequence[str] | None) -> OAuthParams:
    """The ``scope`` field, or nothing at all when no scopes were asked for.

    RFC 6749 §3.3's space delimiter, written once, so a caller passes a list and never learns it.
    Takes a ``Sequence`` so a credential's narrowed ``list[ScopeT]`` reaches it without a copy.

    Args:
        scopes: The scopes to request; absent or empty asks for the client's defaults.

    Returns:
        One ``scope`` parameter, or an empty tuple."""
    if not scopes:
        return ()
    return (param[str]("scope", " ".join(scopes)),)


def client_secret_basic(client_id: str, client_secret: str | None) -> tuple[OAuthParams, OAuthParams]:
    """RFC 6749 §2.3.1: the client authenticates with HTTP Basic on the token request.

    Both halves are percent-encoded before base64, as §2.3.1 requires. A client with **no secret**
    identifies itself with a ``client_id`` form field instead, which is §3.2.1's requirement exactly
    then rather than a degraded fallback.

    Args:
        client_id: The client's identifier, as issued by the provider.
        client_secret: Its secret, or ``None`` for a public client.

    Returns:
        The headers and the form fields the client's credentials contribute, in that order."""
    if client_secret is None:
        return (), (param[str]("client_id", client_id),)
    raw = f"{quote(client_id, safe='')}:{quote(client_secret, safe='')}"
    return (param[str]("Authorization", f"Basic {b64encode(raw.encode()).decode()}"),), ()


def client_secret_post(client_id: str, client_secret: str | None) -> tuple[OAuthParams, OAuthParams]:
    """RFC 6749 §2.3.1's alternative: the credentials travel in the form body instead.

    The empty header tuple is the invariant, not an oversight -- carrying the pair in both places
    would authenticate the client twice.

    Args:
        client_id: The client's identifier, as issued by the provider.
        client_secret: Its secret, omitted entirely when ``None`` (§3.2.1).

    Returns:
        An empty header tuple, and the form fields the client's credentials contribute."""
    if client_secret is None:
        return (), (param[str]("client_id", client_id),)
    return (), (
        param[str]("client_id", client_id),
        param[str]("client_secret", client_secret),
    )

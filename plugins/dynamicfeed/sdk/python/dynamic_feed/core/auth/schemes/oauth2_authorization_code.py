"""``oauth2`` / ``authorizationCode`` -- RFC 6749 §4.1, with RFC 7636 PKCE.

The only grant that cannot complete without a human, and the only one needing the refreshable tier.

**The human leg is a callback on the credentials**, not a two-step surface on the client: the source
calls it in the middle of ``fetch`` -- build the URL, hand it over, exchange the code that comes
back -- so the whole flow stays behind the one ``fetch(credentials)`` seam every grant shares.

**The credentials are twinned** because that callback's flavour must match the transport awaiting
it; a prompt blocking on a human is the last thing that should run inside an event loop."""

from __future__ import annotations

import secrets
from base64 import urlsafe_b64encode
from collections.abc import Awaitable, Callable
from dataclasses import dataclass
from hashlib import sha256
from typing import Generic, Literal, TypeAlias

from pydantic import ConfigDict, Field, model_validator
from typing_extensions import NotRequired, Self, TypedDict

from ..._internal.urls import build_url
from ...bodies import form_body
from ...decoding import async_json_decoder, json_decoder, raw_error_response
from ...params import UrlTemplate, param
from ...raw_client import AsyncRawClient, RawClient
from ...results import Success, unwrap
from ..models import (
    CredentialsPlacement,
    OAuth2Credentials,
    OAuthParams,
    OAuthTokenRefreshable,
    ScopeT,
    scope_params,
)

AuthorizationCodePrompt: TypeAlias = Callable[[str], str]
"""How the SDK obtains an authorization code: hand a URL to a human, get a code back.

Given the fully built authorization URL, an implementation navigates the user to it, receives the
redirect, and returns its ``code`` query parameter. Opening a browser and listening on the redirect
URI are the caller's business: what is correct differs between a desktop app, a CLI and a test.

Called on the first acquisition, and again whenever a refresh is refused. ⚠️ It runs **inside the
scheme's lock**, so it must not issue a request that itself uses this scheme."""

AsyncAuthorizationCodePrompt: TypeAlias = Callable[[str], Awaitable[str]]
""":data:`AuthorizationCodePrompt` for the asynchronous client: awaited rather than called.

A coroutine and not a union, so a synchronous prompt is a **type** error on the asynchronous
credentials rather than a whole event loop discovered blocked on a human in production."""

PkceMethod: TypeAlias = Literal["S256", "plain"]
"""RFC 7636 §4.2's code-challenge transformations.

A ``Literal`` and **not** a ``(str, Enum)``: these two members are fixed by an RFC, not derived from
a description, so the set cannot grow after generation and a call site is checked statically."""


@dataclass(frozen=True, slots=True)
class _Pkce:
    """One authorization's verifier, its derived challenge, and which transformation derived it."""

    verifier: str
    challenge: str
    method: PkceMethod


def _generate_pkce(method: PkceMethod) -> _Pkce:
    """A fresh RFC 7636 §4.1 verifier and its §4.2 challenge -- one pair per authorization.

    Per acquisition rather than per client, because a verifier reused across authorizations is one
    an observer of the first can replay against the second.

    Args:
        method: ``S256``, or ``plain`` where §7.2 permits it -- the verifier as its own challenge.

    Returns:
        The verifier, its challenge, and the method that derived it."""
    verifier = secrets.token_urlsafe(32)
    if method == "plain":
        return _Pkce(verifier, verifier, method)
    digest = sha256(verifier.encode("ascii")).digest()
    return _Pkce(verifier, urlsafe_b64encode(digest).rstrip(b"=").decode("ascii"), method)


class AuthorizationCodeCredentials(OAuth2Credentials, Generic[ScopeT]):
    """What the authorization-code grant needs, for the synchronous client (RFC 6749 §4.1).

    ``prompt_for_authorization_code`` is **required**, so a configured credential provably has a way
    to obtain a code, checked when this model is built rather than at the first request.

    ``state`` is **pass-through only**: sent on the authorization request, never generated or
    validated here -- the SDK never sees the redirect, so producing and verifying it are the
    caller's one job. ``pkce`` defaults to ``"S256"``; ``None`` disables it and then requires
    ``client_secret``, which the validator below refuses at construction. ``scopes`` is typed by
    the flow's declared vocabulary, as every grant's is."""

    model_config = ConfigDict(frozen=True, extra="forbid")

    client_id: str
    client_secret: str | None = Field(default=None, repr=False)
    redirect_uri: str
    scopes: list[ScopeT] | None = None
    state: str | None = None
    pkce: PkceMethod | None = "S256"
    prompt_for_authorization_code: AuthorizationCodePrompt

    @model_validator(mode="after")
    def _require_a_secret_without_pkce(self) -> Self:
        if self.pkce is None and self.client_secret is None:
            raise ValueError(
                "client_secret is required when pkce is None: a client that neither authenticates "
                "nor proves possession of a code verifier cannot use the authorization-code grant "
                'safely. Set pkce="S256" for a public client, or supply client_secret.'
            )
        return self

    @classmethod
    def coerce(cls, value: AuthorizationCodeCredentialsOrDict[ScopeT]) -> AuthorizationCodeCredentials[ScopeT]:
        """Accept either spelling, validating the mapping form.

        Args:
            value: The credential, as the typed model or as a mapping.

        Returns:
            The validated model; see :meth:`BasicAuthCredentials.coerce` for why it takes no
            ``None``.

        Raises:
            ValidationError: If a key is missing or unknown, if ``scopes`` names one this flow does
                not declare, or if ``pkce`` is ``None`` without a ``client_secret``."""
        if isinstance(value, cls):
            return value
        return cls.model_validate(value)


class AuthorizationCodeCredentialsDict(TypedDict, Generic[ScopeT]):
    client_id: str
    client_secret: NotRequired[str | None]
    redirect_uri: str
    scopes: NotRequired[list[ScopeT] | None]
    state: NotRequired[str | None]
    pkce: NotRequired[PkceMethod | None]
    prompt_for_authorization_code: AuthorizationCodePrompt


AuthorizationCodeCredentialsOrDict: TypeAlias = (
    AuthorizationCodeCredentials[ScopeT] | AuthorizationCodeCredentialsDict[ScopeT]
)
"""What an authorization-code credential accepts: the typed model, or a mapping of the same keys."""


class AsyncAuthorizationCodeCredentials(OAuth2Credentials, Generic[ScopeT]):
    """:class:`AuthorizationCodeCredentials` for the asynchronous client.

    Identical but for ``prompt_for_authorization_code``, which is awaited. Written out rather than
    sharing a base: the two would still need their own ``coerce``, ``TypedDict`` and validator."""

    model_config = ConfigDict(frozen=True, extra="forbid")

    client_id: str
    client_secret: str | None = Field(default=None, repr=False)
    redirect_uri: str
    scopes: list[ScopeT] | None = None
    state: str | None = None
    pkce: PkceMethod | None = "S256"
    prompt_for_authorization_code: AsyncAuthorizationCodePrompt

    @model_validator(mode="after")
    def _require_a_secret_without_pkce(self) -> Self:
        if self.pkce is None and self.client_secret is None:
            raise ValueError(
                "client_secret is required when pkce is None: a client that neither authenticates "
                "nor proves possession of a code verifier cannot use the authorization-code grant "
                'safely. Set pkce="S256" for a public client, or supply client_secret.'
            )
        return self

    @classmethod
    def coerce(
        cls, value: AsyncAuthorizationCodeCredentialsOrDict[ScopeT]
    ) -> AsyncAuthorizationCodeCredentials[ScopeT]:
        """See :meth:`AuthorizationCodeCredentials.coerce`.

        Args:
            value: The credential, as the typed model or as a mapping.

        Returns:
            The validated model.

        Raises:
            ValidationError: If a key is missing or unknown, if ``scopes`` names one this flow does
                not declare, or if ``pkce`` is ``None`` without a ``client_secret``."""
        if isinstance(value, cls):
            return value
        return cls.model_validate(value)


class AsyncAuthorizationCodeCredentialsDict(TypedDict, Generic[ScopeT]):
    client_id: str
    client_secret: NotRequired[str | None]
    redirect_uri: str
    scopes: NotRequired[list[ScopeT] | None]
    state: NotRequired[str | None]
    pkce: NotRequired[PkceMethod | None]
    prompt_for_authorization_code: AsyncAuthorizationCodePrompt


AsyncAuthorizationCodeCredentialsOrDict: TypeAlias = (
    AsyncAuthorizationCodeCredentials[ScopeT] | AsyncAuthorizationCodeCredentialsDict[ScopeT]
)
""":data:`AuthorizationCodeCredentialsOrDict` for the asynchronous client."""


def _authorization_params(
    credentials: AuthorizationCodeCredentials[ScopeT] | AsyncAuthorizationCodeCredentials[ScopeT],
    pkce: _Pkce | None,
) -> OAuthParams:
    """RFC 6749 §4.1.1's authorization request, as query parameters.

    Shared by both flavours: what goes on an authorization URL does not depend on which transport
    later exchanges the code.

    Args:
        credentials: The configured credentials, in either flavour.
        pkce: This acquisition's PKCE pair, or ``None`` when PKCE is disabled.

    Returns:
        The query parameters for the authorization URL. ``state`` is omitted entirely when unset
        rather than sent empty, since §4.1.1 only RECOMMENDS it."""
    params = (
        param[str]("response_type", "code"),
        param[str]("client_id", credentials.client_id),
        param[str]("redirect_uri", credentials.redirect_uri),
        *scope_params(credentials.scopes),
    )
    if credentials.state is not None:
        params = (*params, param[str]("state", credentials.state))
    if pkce is None:
        return params
    return (
        *params,
        param[str]("code_challenge", pkce.challenge),
        param[PkceMethod]("code_challenge_method", pkce.method),
    )


def _code_verifier_params(pkce: _Pkce | None) -> OAuthParams:
    """RFC 7636 §4.5's ``code_verifier`` on the exchange.

    Args:
        pkce: This acquisition's PKCE pair, or ``None`` when PKCE is disabled.

    Returns:
        One ``code_verifier`` parameter, or an empty tuple."""
    if pkce is None:
        return ()
    return (param[str]("code_verifier", pkce.verifier),)


@dataclass(frozen=True, slots=True, kw_only=True)
class AuthorizationCodeTokenSource(Generic[ScopeT]):
    """The built-in :class:`RefreshableTokenSource` for the authorization-code grant.

    Two requests with a human between them: :meth:`fetch` builds the authorization URL, hands it to
    the credentials' prompt and exchanges the code; :meth:`refresh` skips both, which is the entire
    reason this grant needs the refreshable tier.

    ``refresh_url`` is its own field because the flow declares ``refreshUrl`` beside ``tokenUrl``;
    §6 defaults it to the token endpoint, but a description naming another is read, not guessed."""

    client: RawClient
    authorization_url: UrlTemplate
    token_url: UrlTemplate
    refresh_url: UrlTemplate
    placement: CredentialsPlacement

    def fetch(self, credentials: AuthorizationCodeCredentials[ScopeT]) -> OAuthTokenRefreshable:
        pkce = _generate_pkce(credentials.pkce) if credentials.pkce is not None else None
        code = credentials.prompt_for_authorization_code(
            build_url(self.authorization_url, query_params=_authorization_params(credentials, pkce))
        )
        headers, client_params = self.placement(credentials.client_id, credentials.client_secret)
        return unwrap(
            self.client.execute(
                http_method="POST",
                url_template=self.token_url,
                headers=headers,
                body=form_body(
                    param[str]("grant_type", "authorization_code"),
                    param[str]("code", code),
                    param[str]("redirect_uri", credentials.redirect_uri),
                    *_code_verifier_params(pkce),
                    *client_params,
                ),
                decoder=json_decoder[OAuthTokenRefreshable],
                error_mapper=raw_error_response,
            )
        )

    def refresh(
        self, credentials: AuthorizationCodeCredentials[ScopeT], refresh_token: str
    ) -> OAuthTokenRefreshable | None:
        """RFC 6749 §6, and ``None`` when the provider refuses.

        The one operation in this runtime that reads an ``ApiResult`` instead of unwrapping it: a
        refused refresh is a step in the flow, not an error, so the scheme re-acquires instead.

        Args:
            credentials: The configured credentials.
            refresh_token: The refresh token to spend.

        Returns:
            The new token, or ``None`` for a provider refusal. A transport failure propagates as
            ``SdkConnectionError``, and a success whose body will not decode as ``ResponseDecodeError``."""
        headers, client_params = self.placement(credentials.client_id, credentials.client_secret)
        result = self.client.execute(
            http_method="POST",
            url_template=self.refresh_url,
            headers=headers,
            body=form_body(
                param[str]("grant_type", "refresh_token"),
                param[str]("refresh_token", refresh_token),
                *client_params,
            ),
            decoder=json_decoder[OAuthTokenRefreshable],
            error_mapper=raw_error_response,
        )
        return result.payload if isinstance(result, Success) else None


@dataclass(frozen=True, slots=True, kw_only=True)
class AsyncAuthorizationCodeTokenSource(Generic[ScopeT]):
    """:class:`AuthorizationCodeTokenSource` for the asynchronous client.

    The prompt is awaited, as are both requests."""

    client: AsyncRawClient
    authorization_url: UrlTemplate
    token_url: UrlTemplate
    refresh_url: UrlTemplate
    placement: CredentialsPlacement

    async def fetch(self, credentials: AsyncAuthorizationCodeCredentials[ScopeT]) -> OAuthTokenRefreshable:
        pkce = _generate_pkce(credentials.pkce) if credentials.pkce is not None else None
        code = await credentials.prompt_for_authorization_code(
            build_url(self.authorization_url, query_params=_authorization_params(credentials, pkce))
        )
        headers, client_params = self.placement(credentials.client_id, credentials.client_secret)
        return unwrap(
            await self.client.execute(
                http_method="POST",
                url_template=self.token_url,
                headers=headers,
                body=form_body(
                    param[str]("grant_type", "authorization_code"),
                    param[str]("code", code),
                    param[str]("redirect_uri", credentials.redirect_uri),
                    *_code_verifier_params(pkce),
                    *client_params,
                ),
                decoder=async_json_decoder[OAuthTokenRefreshable],
                error_mapper=raw_error_response,
            )
        )

    async def refresh(
        self, credentials: AsyncAuthorizationCodeCredentials[ScopeT], refresh_token: str
    ) -> OAuthTokenRefreshable | None:
        """See :meth:`AuthorizationCodeTokenSource.refresh`.

        Args:
            credentials: The configured credentials.
            refresh_token: The refresh token to spend.

        Returns:
            The new token, or ``None`` for a provider refusal."""
        headers, client_params = self.placement(credentials.client_id, credentials.client_secret)
        result = await self.client.execute(
            http_method="POST",
            url_template=self.refresh_url,
            headers=headers,
            body=form_body(
                param[str]("grant_type", "refresh_token"),
                param[str]("refresh_token", refresh_token),
                *client_params,
            ),
            decoder=async_json_decoder[OAuthTokenRefreshable],
            error_mapper=raw_error_response,
        )
        return result.payload if isinstance(result, Success) else None

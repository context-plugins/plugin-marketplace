"""``oauth2`` / ``password`` -- RFC 6749 §4.3, the resource owner password credentials grant.

Two credential pairs on one request: the resource owner's, always as form fields, and the client's
own, wherever ``x-oauth2-credentials-placement`` puts them.

**Plain tier, not refreshable.** §4.3.3 permits a refresh token here and this ignores it, so the
resource owner's password is re-sent at every expiry -- the cost §10.7 warns about, taken
deliberately (ADR-0019 decision 6). The refreshable tier is available to a generator that emits it;
this API's client does not."""

from __future__ import annotations

from dataclasses import dataclass
from typing import Generic, TypeAlias

from pydantic import ConfigDict, Field
from typing_extensions import NotRequired, TypedDict

from ...bodies import form_body
from ...decoding import async_json_decoder, json_decoder, raw_error_response
from ...params import UrlTemplate, param
from ...raw_client import AsyncRawClient, RawClient
from ...results import unwrap
from ..models import (
    CredentialsPlacement,
    OAuth2Credentials,
    OAuthParams,
    OAuthToken,
    ScopeT,
    scope_params,
)


class PasswordCredentials(OAuth2Credentials, Generic[ScopeT]):
    """The resource owner's credentials, plus the client's own (RFC 6749 §4.3.2).

    ``client_secret`` is optional because a public client has none -- §3.2.1 then makes ``client_id``
    the required identification, which the placement function writes. ``scopes`` is typed by the
    flow's declared vocabulary, as every grant's is."""

    model_config = ConfigDict(frozen=True, extra="forbid")

    client_id: str
    client_secret: str | None = Field(default=None, repr=False)
    username: str
    password: str = Field(repr=False)
    scopes: list[ScopeT] | None = None

    @classmethod
    def coerce(cls, value: PasswordCredentialsOrDict[ScopeT]) -> PasswordCredentials[ScopeT]:
        """Accept either spelling, validating the mapping form.

        Args:
            value: The credential, as the typed model or as a mapping.

        Returns:
            The validated model; see :meth:`BasicAuthCredentials.coerce` for why it takes no
            ``None``.

        Raises:
            ValidationError: If the mapping is missing a key, carries an unknown one, or names a
                scope this flow does not declare."""
        if isinstance(value, cls):
            return value
        return cls.model_validate(value)


class PasswordCredentialsDict(TypedDict, Generic[ScopeT]):
    client_id: str
    client_secret: NotRequired[str | None]
    username: str
    password: str
    scopes: NotRequired[list[ScopeT] | None]


PasswordCredentialsOrDict: TypeAlias = PasswordCredentials[ScopeT] | PasswordCredentialsDict[ScopeT]
"""What a password credential accepts: the typed model, or a mapping of the same keys."""


def _token_params(credentials: PasswordCredentials[ScopeT]) -> OAuthParams:
    """RFC 6749 §4.3.2's token request, less the client's own half.

    Shared by both flavours rather than duplicated, so an edit cannot land in one only.

    Args:
        credentials: The configured password credentials.

    Returns:
        The ``grant_type``, the resource owner's pair and the scopes. The client's half is
        deliberately absent: it comes from the source's ``placement``."""
    return (
        param[str]("grant_type", "password"),
        param[str]("username", credentials.username),
        param[str]("password", credentials.password),
        *scope_params(credentials.scopes),
    )


@dataclass(frozen=True, slots=True, kw_only=True)
class PasswordTokenSource(Generic[ScopeT]):
    """The built-in :class:`TokenSource` for the password grant: POST the token request.

    ``placement`` is read from the flow's own ``x-oauth2-credentials-placement`` by the generated
    client, exactly as the client-credentials source's is. Carries no ``auth_scheme=`` -- the
    credentials are on this request already, so the fetch provably cannot recurse into itself."""

    client: RawClient
    token_url: UrlTemplate
    placement: CredentialsPlacement

    def fetch(self, credentials: PasswordCredentials[ScopeT]) -> OAuthToken:
        headers, client_params = self.placement(credentials.client_id, credentials.client_secret)
        return unwrap(
            self.client.execute(
                http_method="POST",
                url_template=self.token_url,
                headers=headers,
                body=form_body(*_token_params(credentials), *client_params),
                decoder=json_decoder[OAuthToken],
                error_mapper=raw_error_response,
            )
        )


@dataclass(frozen=True, slots=True, kw_only=True)
class AsyncPasswordTokenSource(Generic[ScopeT]):
    """:class:`PasswordTokenSource` for the asynchronous client: the request is awaited."""

    client: AsyncRawClient
    token_url: UrlTemplate
    placement: CredentialsPlacement

    async def fetch(self, credentials: PasswordCredentials[ScopeT]) -> OAuthToken:
        headers, client_params = self.placement(credentials.client_id, credentials.client_secret)
        return unwrap(
            await self.client.execute(
                http_method="POST",
                url_template=self.token_url,
                headers=headers,
                body=form_body(*_token_params(credentials), *client_params),
                decoder=async_json_decoder[OAuthToken],
                error_mapper=raw_error_response,
            )
        )

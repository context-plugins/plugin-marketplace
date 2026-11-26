"""``oauth2`` / ``clientCredentials`` -- RFC 6749 §4.4.

The grant with the least to it: no resource owner, so no second credential pair and no human. The
whole request is a ``grant_type``, the scopes, and whatever the placement contributes."""

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


class ClientCredentials(OAuth2Credentials, Generic[ScopeT]):
    """The client identifier and secret of an OAuth 2.0 ``clientCredentials`` flow (RFC 6749 §4.4).

    ``scopes`` is a list this SDK joins for the wire, so a caller never writes §3.3's delimiter, and
    it is typed by the flow's declared vocabulary -- so a scope the flow does not document fails the
    build at the call site instead of the request at the provider."""

    model_config = ConfigDict(frozen=True, extra="forbid")

    client_id: str
    client_secret: str = Field(repr=False)
    scopes: list[ScopeT] | None = None

    @classmethod
    def coerce(cls, value: ClientCredentialsOrDict[ScopeT]) -> ClientCredentials[ScopeT]:
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


class ClientCredentialsDict(TypedDict, Generic[ScopeT]):
    client_id: str
    client_secret: str
    scopes: NotRequired[list[ScopeT] | None]


ClientCredentialsOrDict: TypeAlias = ClientCredentials[ScopeT] | ClientCredentialsDict[ScopeT]
"""What a client-credentials credential accepts: the typed model, or a mapping of the same keys."""


def _token_params(credentials: ClientCredentials[ScopeT]) -> OAuthParams:
    """RFC 6749 §4.4.2's token request, minus the client's own credentials.

    Shared by both flavours rather than duplicated, so an edit cannot land in one only.

    Args:
        credentials: The configured client credentials.

    Returns:
        The ``grant_type`` and the scopes; the placement's half is spliced in by each ``fetch``."""
    return param[str]("grant_type", "client_credentials"), *scope_params(credentials.scopes)


@dataclass(frozen=True, slots=True, kw_only=True)
class ClientCredentialsTokenSource(Generic[ScopeT]):
    """The built-in :class:`TokenSource` for the client-credentials grant: POST the token request.

    ``placement`` is a field rather than two subclasses, because the placements differ in *data* and
    not in behaviour: :meth:`fetch` is identical for both. Carries no ``auth_scheme=`` -- the
    credentials are on this request already, so the fetch provably cannot recurse into itself."""

    client: RawClient
    token_url: UrlTemplate
    placement: CredentialsPlacement

    def fetch(self, credentials: ClientCredentials[ScopeT]) -> OAuthToken:
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
class AsyncClientCredentialsTokenSource(Generic[ScopeT]):
    """:class:`ClientCredentialsTokenSource` for the asynchronous client: the request is awaited."""

    client: AsyncRawClient
    token_url: UrlTemplate
    placement: CredentialsPlacement

    async def fetch(self, credentials: ClientCredentials[ScopeT]) -> OAuthToken:
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

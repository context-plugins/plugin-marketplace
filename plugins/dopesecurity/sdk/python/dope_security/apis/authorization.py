from __future__ import annotations

from uuid import UUID, uuid4

from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    BaseRawResponse,
    RawClient,
    RequestOptionsOrDict,
    async_json_decoder,
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.generate_access_token_error import GenerateAccessTokenErrorBody, generate_access_token_error_mapper
from ..models.partner_oauth_token_request import PartnerOauthTokenRequest, PartnerOauthTokenRequestDict
from ..models.partner_oauth_token_response import PartnerOauthTokenResponse
from ..server.server import Server


class Authorization:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = AuthorizationWithRawResponse(client, server)

    def generate_access_token(
        self,
        body: PartnerOauthTokenRequest | PartnerOauthTokenRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PartnerOauthTokenResponse:
        """Use this API to generate an access token for use with the Flightdeck API. A valid access token returned from
        this API is required in all other Flightdeck API calls.

        Token generation is based on the OAuth 2.0 Client Credentials Flow. The returned token is used within the HTTP
        Authorization header as follows:

        ``Authorization: Bearer ``

        Note:
        - The required ``client_id`` and ``client_secret`` are created by an admin via the dope console.
        - Returned access tokens are valid for a limited time period. Clients must check the ``expires_in`` value in
        the response to generate a new access token before the current one expires.
        - The OAuth scopes parameter is not supported and if provided will be ignored. The scopes returned in the access
        token are set directly by the authorization server.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad request Client not authorized Internal server error. ``error`` is ``OAuthError |
                RawError``."""
        return unwrap(self._with_raw_response.generate_access_token(body, request_options=request_options))

    @property
    def with_raw_response(self) -> AuthorizationWithRawResponse:
        return self._with_raw_response


class AsyncAuthorization:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncAuthorizationWithRawResponse(client, server)

    async def generate_access_token(
        self,
        body: PartnerOauthTokenRequest | PartnerOauthTokenRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PartnerOauthTokenResponse:
        """Use this API to generate an access token for use with the Flightdeck API. A valid access token returned from
        this API is required in all other Flightdeck API calls.

        Token generation is based on the OAuth 2.0 Client Credentials Flow. The returned token is used within the HTTP
        Authorization header as follows:

        ``Authorization: Bearer ``

        Note:
        - The required ``client_id`` and ``client_secret`` are created by an admin via the dope console.
        - Returned access tokens are valid for a limited time period. Clients must check the ``expires_in`` value in
        the response to generate a new access token before the current one expires.
        - The OAuth scopes parameter is not supported and if provided will be ignored. The scopes returned in the access
        token are set directly by the authorization server.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad request Client not authorized Internal server error. ``error`` is ``OAuthError |
                RawError``."""
        return unwrap(await self._with_raw_response.generate_access_token(body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncAuthorizationWithRawResponse:
        return self._with_raw_response


class AuthorizationWithRawResponse(BaseRawResponse[RawClient, Server]):
    def generate_access_token(
        self,
        body: PartnerOauthTokenRequest | PartnerOauthTokenRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PartnerOauthTokenResponse, GenerateAccessTokenErrorBody]:
        """Use this API to generate an access token for use with the Flightdeck API. A valid access token returned from
        this API is required in all other Flightdeck API calls.

        Token generation is based on the OAuth 2.0 Client Credentials Flow. The returned token is used within the HTTP
        Authorization header as follows:

        ``Authorization: Bearer ``

        Note:
        - The required ``client_id`` and ``client_secret`` are created by an admin via the dope console.
        - Returned access tokens are valid for a limited time period. Clients must check the ``expires_in`` value in
        the response to generate a new access token before the current one expires.
        - The OAuth scopes parameter is not supported and if provided will be ignored. The scopes returned in the access
        token are set directly by the authorization server.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/partner/oauth/token"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PartnerOauthTokenRequest | PartnerOauthTokenRequestDict](body),
            decoder=json_decoder[PartnerOauthTokenResponse],
            error_mapper=generate_access_token_error_mapper,
            request_options=request_options,
        )


class AsyncAuthorizationWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def generate_access_token(
        self,
        body: PartnerOauthTokenRequest | PartnerOauthTokenRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PartnerOauthTokenResponse, GenerateAccessTokenErrorBody]:
        """Use this API to generate an access token for use with the Flightdeck API. A valid access token returned from
        this API is required in all other Flightdeck API calls.

        Token generation is based on the OAuth 2.0 Client Credentials Flow. The returned token is used within the HTTP
        Authorization header as follows:

        ``Authorization: Bearer ``

        Note:
        - The required ``client_id`` and ``client_secret`` are created by an admin via the dope console.
        - Returned access tokens are valid for a limited time period. Clients must check the ``expires_in`` value in
        the response to generate a new access token before the current one expires.
        - The OAuth scopes parameter is not supported and if provided will be ignored. The scopes returned in the access
        token are set directly by the authorization server.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/partner/oauth/token"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PartnerOauthTokenRequest | PartnerOauthTokenRequestDict](body),
            decoder=async_json_decoder[PartnerOauthTokenResponse],
            error_mapper=generate_access_token_error_mapper,
            request_options=request_options,
        )

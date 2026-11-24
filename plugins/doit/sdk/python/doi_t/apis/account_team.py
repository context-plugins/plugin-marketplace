from __future__ import annotations

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    AllSchemes,
    AnySchemes,
    ApiResult,
    AsyncAllSchemes,
    AsyncAnySchemes,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    RawClient,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_json_decoder,
    json_decoder,
    unwrap,
)
from ..errors.list_account_team_error import ListAccountTeamErrorBody, list_account_team_error_mapper
from ..models.customers_v1_account_team_response import CustomersV1AccountTeamResponse
from ..server.server import Server


class AccountTeam:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = AccountTeamWithRawResponse(client, server, auth)

    def list_account_team(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> CustomersV1AccountTeamResponse:
        """Returns a list of all DoiT account managers assigned to your organization.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - List of account managers returned.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request.
                ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.list_account_team(request_options=request_options))

    @property
    def with_raw_response(self) -> AccountTeamWithRawResponse:
        return self._with_raw_response


class AsyncAccountTeam:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncAccountTeamWithRawResponse(client, server, auth)

    async def list_account_team(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> CustomersV1AccountTeamResponse:
        """Returns a list of all DoiT account managers assigned to your organization.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - List of account managers returned.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request.
                ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.list_account_team(request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncAccountTeamWithRawResponse:
        return self._with_raw_response


class AccountTeamWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def list_account_team(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[CustomersV1AccountTeamResponse, ListAccountTeamErrorBody]:
        """Returns a list of all DoiT account managers assigned to your organization.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/customers/v1/accountTeam"),
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[CustomersV1AccountTeamResponse],
            error_mapper=list_account_team_error_mapper,
            request_options=request_options,
        )


class AsyncAccountTeamWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def list_account_team(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[CustomersV1AccountTeamResponse, ListAccountTeamErrorBody]:
        """Returns a list of all DoiT account managers assigned to your organization.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/customers/v1/accountTeam"),
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[CustomersV1AccountTeamResponse],
            error_mapper=list_account_team_error_mapper,
            request_options=request_options,
        )

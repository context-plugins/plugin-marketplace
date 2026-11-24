from __future__ import annotations

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    RawClient,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_json_decoder,
    json_decoder,
    param,
    unwrap,
)
from ..errors.get_ad_account_error import GetAdAccountErrorBody, get_ad_account_error_mapper
from ..models.ad_account import AdAccount
from ..server.server import Server


class AdAccounts:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = AdAccountsWithRawResponse(client, server, auth)

    def get_ad_account(
        self, ad_account_id: str, *, fields: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> AdAccount:
        """Retrieves the details of a specific ad account including settings, spend limits, and status information.

        Args:
            ad_account_id: The ID of the ad account (numeric, without the act_ prefix)
            fields: Comma-separated list of fields to include in the response. If omitted, default fields are returned.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved ad account details

        Raises:
            ApiError: Invalid or expired access token The requested resource was not found ``error`` is ``Error |
                RawError``."""
        return unwrap(
            self._with_raw_response.get_ad_account(ad_account_id, fields=fields, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AdAccountsWithRawResponse:
        return self._with_raw_response


class AsyncAdAccounts:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncAdAccountsWithRawResponse(client, server, auth)

    async def get_ad_account(
        self, ad_account_id: str, *, fields: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> AdAccount:
        """Retrieves the details of a specific ad account including settings, spend limits, and status information.

        Args:
            ad_account_id: The ID of the ad account (numeric, without the act_ prefix)
            fields: Comma-separated list of fields to include in the response. If omitted, default fields are returned.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved ad account details

        Raises:
            ApiError: Invalid or expired access token The requested resource was not found ``error`` is ``Error |
                RawError``."""
        return unwrap(
            await self._with_raw_response.get_ad_account(ad_account_id, fields=fields, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncAdAccountsWithRawResponse:
        return self._with_raw_response


class AdAccountsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_ad_account(
        self, ad_account_id: str, *, fields: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[AdAccount, GetAdAccountErrorBody]:
        """Retrieves the details of a specific ad account including settings, spend limits, and status information.

        Args:
            ad_account_id: The ID of the ad account (numeric, without the act_ prefix)
            fields: Comma-separated list of fields to include in the response. If omitted, default fields are returned.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/act_{ad_account_id}"),
            path_params=[param[str]("ad_account_id", ad_account_id)],
            query_params=[param[str | None]("fields", fields)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[AdAccount],
            error_mapper=get_ad_account_error_mapper,
            request_options=request_options,
        )


class AsyncAdAccountsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_ad_account(
        self, ad_account_id: str, *, fields: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[AdAccount, GetAdAccountErrorBody]:
        """Retrieves the details of a specific ad account including settings, spend limits, and status information.

        Args:
            ad_account_id: The ID of the ad account (numeric, without the act_ prefix)
            fields: Comma-separated list of fields to include in the response. If omitted, default fields are returned.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/act_{ad_account_id}"),
            path_params=[param[str]("ad_account_id", ad_account_id)],
            query_params=[param[str | None]("fields", fields)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[AdAccount],
            error_mapper=get_ad_account_error_mapper,
            request_options=request_options,
        )

from __future__ import annotations

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    AnySchemes,
    ApiResult,
    AsyncAnySchemes,
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
from ..errors.analyticsadmin_account_summaries_list_error import (
    AnalyticsadminAccountSummariesListErrorBody,
    analyticsadmin_account_summaries_list_error_mapper,
)
from ..models.google_analytics_admin_v1_beta_list_account_summaries_response import (
    GoogleAnalyticsAdminV1BetaListAccountSummariesResponse,
)
from ..server.server import Server


class AccountSummaries:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = AccountSummariesWithRawResponse(client, server, auth)

    def analyticsadmin_account_summaries_list(
        self,
        *,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GoogleAnalyticsAdminV1BetaListAccountSummariesResponse:
        """Returns summaries of all accounts accessible by the caller.

        Args:
            page_size: Optional. The maximum number of AccountSummary resources to return. The service may return fewer
                than this value, even if there are additional pages. If unspecified, at most 50 resources will be
                returned. The maximum value is 200; (higher values will be coerced to the maximum)
            page_token: Optional. A page token, received from a previous ``ListAccountSummaries`` call. Provide this to
                retrieve the subsequent page. When paginating, all other parameters provided to ``ListAccountSummaries``
                must match the call that provided the page token.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.analyticsadmin_account_summaries_list(
                page_size=page_size, page_token=page_token, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AccountSummariesWithRawResponse:
        return self._with_raw_response


class AsyncAccountSummaries:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncAccountSummariesWithRawResponse(client, server, auth)

    async def analyticsadmin_account_summaries_list(
        self,
        *,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GoogleAnalyticsAdminV1BetaListAccountSummariesResponse:
        """Returns summaries of all accounts accessible by the caller.

        Args:
            page_size: Optional. The maximum number of AccountSummary resources to return. The service may return fewer
                than this value, even if there are additional pages. If unspecified, at most 50 resources will be
                returned. The maximum value is 200; (higher values will be coerced to the maximum)
            page_token: Optional. A page token, received from a previous ``ListAccountSummaries`` call. Provide this to
                retrieve the subsequent page. When paginating, all other parameters provided to ``ListAccountSummaries``
                must match the call that provided the page token.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.analyticsadmin_account_summaries_list(
                page_size=page_size, page_token=page_token, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncAccountSummariesWithRawResponse:
        return self._with_raw_response


class AccountSummariesWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def analyticsadmin_account_summaries_list(
        self,
        *,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleAnalyticsAdminV1BetaListAccountSummariesResponse, AnalyticsadminAccountSummariesListErrorBody]:
        """Returns summaries of all accounts accessible by the caller.

        Args:
            page_size: Optional. The maximum number of AccountSummary resources to return. The service may return fewer
                than this value, even if there are additional pages. If unspecified, at most 50 resources will be
                returned. The maximum value is 200; (higher values will be coerced to the maximum)
            page_token: Optional. A page token, received from a previous ``ListAccountSummaries`` call. Provide this to
                retrieve the subsequent page. When paginating, all other parameters provided to ``ListAccountSummaries``
                must match the call that provided the page token.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1beta/accountSummaries"),
            query_params=[param[int | None]("pageSize", page_size), param[str | None]("pageToken", page_token)],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[GoogleAnalyticsAdminV1BetaListAccountSummariesResponse],
            error_mapper=analyticsadmin_account_summaries_list_error_mapper,
            request_options=request_options,
        )


class AsyncAccountSummariesWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def analyticsadmin_account_summaries_list(
        self,
        *,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleAnalyticsAdminV1BetaListAccountSummariesResponse, AnalyticsadminAccountSummariesListErrorBody]:
        """Returns summaries of all accounts accessible by the caller.

        Args:
            page_size: Optional. The maximum number of AccountSummary resources to return. The service may return fewer
                than this value, even if there are additional pages. If unspecified, at most 50 resources will be
                returned. The maximum value is 200; (higher values will be coerced to the maximum)
            page_token: Optional. A page token, received from a previous ``ListAccountSummaries`` call. Provide this to
                retrieve the subsequent page. When paginating, all other parameters provided to ``ListAccountSummaries``
                must match the call that provided the page token.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1beta/accountSummaries"),
            query_params=[param[int | None]("pageSize", page_size), param[str | None]("pageToken", page_token)],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[GoogleAnalyticsAdminV1BetaListAccountSummariesResponse],
            error_mapper=analyticsadmin_account_summaries_list_error_mapper,
            request_options=request_options,
        )

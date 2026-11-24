from __future__ import annotations

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    RawClient,
    RawError,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_empty_response,
    empty_response,
    param,
    raw_error_response,
    unwrap,
)
from ..server.server import Server


class Analytic:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = AnalyticWithRawResponse(client, server, auth)

    def get_api_v1_analytic_statuses(
        self,
        *,
        api_token_name: str | None = None,
        domain: str | None = None,
        end_date: str | None = None,
        start_date: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Send a ``GET`` request.

        Args:
            api_token_name: Value sent with the request.
            domain: Value sent with the request.
            end_date: Value sent with the request.
            start_date: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success (status as documented)

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.get_api_v1_analytic_statuses(
                api_token_name=api_token_name,
                domain=domain,
                end_date=end_date,
                start_date=start_date,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> AnalyticWithRawResponse:
        return self._with_raw_response


class AsyncAnalytic:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncAnalyticWithRawResponse(client, server, auth)

    async def get_api_v1_analytic_statuses(
        self,
        *,
        api_token_name: str | None = None,
        domain: str | None = None,
        end_date: str | None = None,
        start_date: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Send a ``GET`` request.

        Args:
            api_token_name: Value sent with the request.
            domain: Value sent with the request.
            end_date: Value sent with the request.
            start_date: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success (status as documented)

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.get_api_v1_analytic_statuses(
                api_token_name=api_token_name,
                domain=domain,
                end_date=end_date,
                start_date=start_date,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> AsyncAnalyticWithRawResponse:
        return self._with_raw_response


class AnalyticWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_api_v1_analytic_statuses(
        self,
        *,
        api_token_name: str | None = None,
        domain: str | None = None,
        end_date: str | None = None,
        start_date: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, RawError]:
        """Send a ``GET`` request.

        Args:
            api_token_name: Value sent with the request.
            domain: Value sent with the request.
            end_date: Value sent with the request.
            start_date: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/analytic/statuses"),
            query_params=[
                param[str | None]("apiTokenName", api_token_name),
                param[str | None]("domain", domain),
                param[str | None]("endDate", end_date),
                param[str | None]("startDate", start_date),
            ],
            auth_scheme=self._auth.api_key,
            decoder=empty_response,
            error_mapper=raw_error_response,
            request_options=request_options,
        )


class AsyncAnalyticWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_api_v1_analytic_statuses(
        self,
        *,
        api_token_name: str | None = None,
        domain: str | None = None,
        end_date: str | None = None,
        start_date: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, RawError]:
        """Send a ``GET`` request.

        Args:
            api_token_name: Value sent with the request.
            domain: Value sent with the request.
            end_date: Value sent with the request.
            start_date: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/analytic/statuses"),
            query_params=[
                param[str | None]("apiTokenName", api_token_name),
                param[str | None]("domain", domain),
                param[str | None]("endDate", end_date),
                param[str | None]("startDate", start_date),
            ],
            auth_scheme=self._auth.api_key,
            decoder=async_empty_response,
            error_mapper=raw_error_response,
            request_options=request_options,
        )

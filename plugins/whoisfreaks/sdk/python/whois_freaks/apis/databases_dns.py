from __future__ import annotations

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    ApiResult,
    AsyncFileResponse,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    Date,
    FileResponse,
    RawClient,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_file_decoder,
    file_decoder,
    param,
    unwrap,
)
from ..errors.db_dns_daily_error import DbDnsDailyErrorBody, db_dns_daily_error_mapper
from ..errors.db_dns_monthly_error import DbDnsMonthlyErrorBody, db_dns_monthly_error_mapper
from ..errors.db_dns_weekly_error import DbDnsWeeklyErrorBody, db_dns_weekly_error_mapper
from ..server.server import Server


class DatabasesDns:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = DatabasesDnsWithRawResponse(client, server, auth)

    def db_dns_daily(
        self, *, date: Date | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> FileResponse:
        """DNS Database Daily. Returns the file/snapshot described by this operation.

        Args:
            date: yyyy-MM-dd; omit for latest
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            CSV

        Raises:
            ApiError: Error response (4XX) ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.db_dns_daily(date=date, request_options=request_options))

    def db_dns_monthly(
        self, *, date: Date | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> FileResponse:
        """DNS Database Monthly. Returns the file/snapshot described by this operation.

        Args:
            date: yyyy-MM-dd; omit for latest
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            CSV

        Raises:
            ApiError: Error response (4XX) ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.db_dns_monthly(date=date, request_options=request_options))

    def db_dns_weekly(
        self, *, date: Date | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> FileResponse:
        """DNS Database Weekly. Returns the file/snapshot described by this operation.

        Args:
            date: yyyy-MM-dd; omit for latest
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            CSV

        Raises:
            ApiError: Error response (4XX) ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.db_dns_weekly(date=date, request_options=request_options))

    @property
    def with_raw_response(self) -> DatabasesDnsWithRawResponse:
        return self._with_raw_response


class AsyncDatabasesDns:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncDatabasesDnsWithRawResponse(client, server, auth)

    async def db_dns_daily(
        self, *, date: Date | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> AsyncFileResponse:
        """DNS Database Daily. Returns the file/snapshot described by this operation.

        Args:
            date: yyyy-MM-dd; omit for latest
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            CSV

        Raises:
            ApiError: Error response (4XX) ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.db_dns_daily(date=date, request_options=request_options))

    async def db_dns_monthly(
        self, *, date: Date | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> AsyncFileResponse:
        """DNS Database Monthly. Returns the file/snapshot described by this operation.

        Args:
            date: yyyy-MM-dd; omit for latest
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            CSV

        Raises:
            ApiError: Error response (4XX) ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.db_dns_monthly(date=date, request_options=request_options))

    async def db_dns_weekly(
        self, *, date: Date | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> AsyncFileResponse:
        """DNS Database Weekly. Returns the file/snapshot described by this operation.

        Args:
            date: yyyy-MM-dd; omit for latest
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            CSV

        Raises:
            ApiError: Error response (4XX) ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.db_dns_weekly(date=date, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncDatabasesDnsWithRawResponse:
        return self._with_raw_response


class DatabasesDnsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def db_dns_daily(
        self, *, date: Date | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[FileResponse, DbDnsDailyErrorBody]:
        """DNS Database Daily. Returns the file/snapshot described by this operation.

        Args:
            date: yyyy-MM-dd; omit for latest
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the body unread or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3.2/download/dbupdate/daily/dns"),
            query_params=[param[Date | None]("date", date)],
            auth_scheme=self._auth.api_key_auth,
            decoder=file_decoder,
            error_mapper=db_dns_daily_error_mapper,
            request_options=request_options,
        )

    def db_dns_monthly(
        self, *, date: Date | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[FileResponse, DbDnsMonthlyErrorBody]:
        """DNS Database Monthly. Returns the file/snapshot described by this operation.

        Args:
            date: yyyy-MM-dd; omit for latest
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the body unread or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3.2/download/dbupdate/monthly/dns"),
            query_params=[param[Date | None]("date", date)],
            auth_scheme=self._auth.api_key_auth,
            decoder=file_decoder,
            error_mapper=db_dns_monthly_error_mapper,
            request_options=request_options,
        )

    def db_dns_weekly(
        self, *, date: Date | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[FileResponse, DbDnsWeeklyErrorBody]:
        """DNS Database Weekly. Returns the file/snapshot described by this operation.

        Args:
            date: yyyy-MM-dd; omit for latest
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the body unread or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3.2/download/dbupdate/weekly/dns"),
            query_params=[param[Date | None]("date", date)],
            auth_scheme=self._auth.api_key_auth,
            decoder=file_decoder,
            error_mapper=db_dns_weekly_error_mapper,
            request_options=request_options,
        )


class AsyncDatabasesDnsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def db_dns_daily(
        self, *, date: Date | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[AsyncFileResponse, DbDnsDailyErrorBody]:
        """DNS Database Daily. Returns the file/snapshot described by this operation.

        Args:
            date: yyyy-MM-dd; omit for latest
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the body unread or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3.2/download/dbupdate/daily/dns"),
            query_params=[param[Date | None]("date", date)],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_file_decoder,
            error_mapper=db_dns_daily_error_mapper,
            request_options=request_options,
        )

    async def db_dns_monthly(
        self, *, date: Date | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[AsyncFileResponse, DbDnsMonthlyErrorBody]:
        """DNS Database Monthly. Returns the file/snapshot described by this operation.

        Args:
            date: yyyy-MM-dd; omit for latest
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the body unread or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3.2/download/dbupdate/monthly/dns"),
            query_params=[param[Date | None]("date", date)],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_file_decoder,
            error_mapper=db_dns_monthly_error_mapper,
            request_options=request_options,
        )

    async def db_dns_weekly(
        self, *, date: Date | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[AsyncFileResponse, DbDnsWeeklyErrorBody]:
        """DNS Database Weekly. Returns the file/snapshot described by this operation.

        Args:
            date: yyyy-MM-dd; omit for latest
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the body unread or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3.2/download/dbupdate/weekly/dns"),
            query_params=[param[Date | None]("date", date)],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_file_decoder,
            error_mapper=db_dns_weekly_error_mapper,
            request_options=request_options,
        )

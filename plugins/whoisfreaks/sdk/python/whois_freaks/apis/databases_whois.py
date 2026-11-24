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
from ..errors.db_whois_daily_error import DbWhoisDailyErrorBody, db_whois_daily_error_mapper
from ..errors.db_whois_monthly_error import DbWhoisMonthlyErrorBody, db_whois_monthly_error_mapper
from ..errors.db_whois_weekly_error import DbWhoisWeeklyErrorBody, db_whois_weekly_error_mapper
from ..server.server import Server


class DatabasesWhois:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = DatabasesWhoisWithRawResponse(client, server, auth)

    def db_whois_daily(
        self, *, date: Date | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> FileResponse:
        """WHOIS Database Daily. Returns the file/snapshot described by this operation.

        Args:
            date: yyyy-MM-dd; omit for latest
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            CSV

        Raises:
            ApiError: Error response (4XX) ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.db_whois_daily(date=date, request_options=request_options))

    def db_whois_monthly(
        self, *, date: Date | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> FileResponse:
        """WHOIS Database Monthly. Returns the file/snapshot described by this operation.

        Args:
            date: yyyy-MM-dd; omit for latest
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            CSV

        Raises:
            ApiError: Error response (4XX) ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.db_whois_monthly(date=date, request_options=request_options))

    def db_whois_weekly(
        self, *, date: Date | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> FileResponse:
        """WHOIS Database Weekly. Returns the file/snapshot described by this operation.

        Args:
            date: yyyy-MM-dd; omit for latest
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            CSV

        Raises:
            ApiError: Error response (4XX) ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.db_whois_weekly(date=date, request_options=request_options))

    @property
    def with_raw_response(self) -> DatabasesWhoisWithRawResponse:
        return self._with_raw_response


class AsyncDatabasesWhois:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncDatabasesWhoisWithRawResponse(client, server, auth)

    async def db_whois_daily(
        self, *, date: Date | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> AsyncFileResponse:
        """WHOIS Database Daily. Returns the file/snapshot described by this operation.

        Args:
            date: yyyy-MM-dd; omit for latest
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            CSV

        Raises:
            ApiError: Error response (4XX) ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.db_whois_daily(date=date, request_options=request_options))

    async def db_whois_monthly(
        self, *, date: Date | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> AsyncFileResponse:
        """WHOIS Database Monthly. Returns the file/snapshot described by this operation.

        Args:
            date: yyyy-MM-dd; omit for latest
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            CSV

        Raises:
            ApiError: Error response (4XX) ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.db_whois_monthly(date=date, request_options=request_options))

    async def db_whois_weekly(
        self, *, date: Date | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> AsyncFileResponse:
        """WHOIS Database Weekly. Returns the file/snapshot described by this operation.

        Args:
            date: yyyy-MM-dd; omit for latest
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            CSV

        Raises:
            ApiError: Error response (4XX) ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.db_whois_weekly(date=date, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncDatabasesWhoisWithRawResponse:
        return self._with_raw_response


class DatabasesWhoisWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def db_whois_daily(
        self, *, date: Date | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[FileResponse, DbWhoisDailyErrorBody]:
        """WHOIS Database Daily. Returns the file/snapshot described by this operation.

        Args:
            date: yyyy-MM-dd; omit for latest
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the body unread or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3.3/download/dbupdate/daily/domains/whois"),
            query_params=[param[Date | None]("date", date)],
            auth_scheme=self._auth.api_key_auth,
            decoder=file_decoder,
            error_mapper=db_whois_daily_error_mapper,
            request_options=request_options,
        )

    def db_whois_monthly(
        self, *, date: Date | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[FileResponse, DbWhoisMonthlyErrorBody]:
        """WHOIS Database Monthly. Returns the file/snapshot described by this operation.

        Args:
            date: yyyy-MM-dd; omit for latest
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the body unread or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3.3/download/dbupdate/monthly/domains/whois"),
            query_params=[param[Date | None]("date", date)],
            auth_scheme=self._auth.api_key_auth,
            decoder=file_decoder,
            error_mapper=db_whois_monthly_error_mapper,
            request_options=request_options,
        )

    def db_whois_weekly(
        self, *, date: Date | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[FileResponse, DbWhoisWeeklyErrorBody]:
        """WHOIS Database Weekly. Returns the file/snapshot described by this operation.

        Args:
            date: yyyy-MM-dd; omit for latest
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the body unread or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3.3/download/dbupdate/weekly/domains/whois"),
            query_params=[param[Date | None]("date", date)],
            auth_scheme=self._auth.api_key_auth,
            decoder=file_decoder,
            error_mapper=db_whois_weekly_error_mapper,
            request_options=request_options,
        )


class AsyncDatabasesWhoisWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def db_whois_daily(
        self, *, date: Date | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[AsyncFileResponse, DbWhoisDailyErrorBody]:
        """WHOIS Database Daily. Returns the file/snapshot described by this operation.

        Args:
            date: yyyy-MM-dd; omit for latest
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the body unread or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3.3/download/dbupdate/daily/domains/whois"),
            query_params=[param[Date | None]("date", date)],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_file_decoder,
            error_mapper=db_whois_daily_error_mapper,
            request_options=request_options,
        )

    async def db_whois_monthly(
        self, *, date: Date | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[AsyncFileResponse, DbWhoisMonthlyErrorBody]:
        """WHOIS Database Monthly. Returns the file/snapshot described by this operation.

        Args:
            date: yyyy-MM-dd; omit for latest
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the body unread or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3.3/download/dbupdate/monthly/domains/whois"),
            query_params=[param[Date | None]("date", date)],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_file_decoder,
            error_mapper=db_whois_monthly_error_mapper,
            request_options=request_options,
        )

    async def db_whois_weekly(
        self, *, date: Date | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[AsyncFileResponse, DbWhoisWeeklyErrorBody]:
        """WHOIS Database Weekly. Returns the file/snapshot described by this operation.

        Args:
            date: yyyy-MM-dd; omit for latest
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the body unread or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3.3/download/dbupdate/weekly/domains/whois"),
            query_params=[param[Date | None]("date", date)],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_file_decoder,
            error_mapper=db_whois_weekly_error_mapper,
            request_options=request_options,
        )

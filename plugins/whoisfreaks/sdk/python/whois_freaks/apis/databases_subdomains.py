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
from ..errors.db_subdomains_daily_error import DbSubdomainsDailyErrorBody, db_subdomains_daily_error_mapper
from ..errors.db_subdomains_monthly_error import DbSubdomainsMonthlyErrorBody, db_subdomains_monthly_error_mapper
from ..errors.db_subdomains_weekly_error import DbSubdomainsWeeklyErrorBody, db_subdomains_weekly_error_mapper
from ..server.server import Server


class DatabasesSubdomains:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = DatabasesSubdomainsWithRawResponse(client, server, auth)

    def db_subdomains_daily(
        self, *, date: Date | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> FileResponse:
        """Subdomains Daily. Returns the file/snapshot described by this operation.

        Args:
            date: yyyy-MM-dd; omit for latest
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            CSV

        Raises:
            ApiError: Error response (4XX) ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.db_subdomains_daily(date=date, request_options=request_options))

    def db_subdomains_monthly(
        self, *, date: Date | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> FileResponse:
        """Subdomains Monthly. Returns the file/snapshot described by this operation.

        Args:
            date: yyyy-MM-dd; omit for latest
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            CSV

        Raises:
            ApiError: Error response (4XX) ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.db_subdomains_monthly(date=date, request_options=request_options))

    def db_subdomains_weekly(
        self, *, date: Date | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> FileResponse:
        """Subdomains Weekly. Returns the file/snapshot described by this operation.

        Args:
            date: yyyy-MM-dd; omit for latest
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            CSV

        Raises:
            ApiError: Error response (4XX) ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.db_subdomains_weekly(date=date, request_options=request_options))

    @property
    def with_raw_response(self) -> DatabasesSubdomainsWithRawResponse:
        return self._with_raw_response


class AsyncDatabasesSubdomains:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncDatabasesSubdomainsWithRawResponse(client, server, auth)

    async def db_subdomains_daily(
        self, *, date: Date | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> AsyncFileResponse:
        """Subdomains Daily. Returns the file/snapshot described by this operation.

        Args:
            date: yyyy-MM-dd; omit for latest
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            CSV

        Raises:
            ApiError: Error response (4XX) ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.db_subdomains_daily(date=date, request_options=request_options))

    async def db_subdomains_monthly(
        self, *, date: Date | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> AsyncFileResponse:
        """Subdomains Monthly. Returns the file/snapshot described by this operation.

        Args:
            date: yyyy-MM-dd; omit for latest
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            CSV

        Raises:
            ApiError: Error response (4XX) ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.db_subdomains_monthly(date=date, request_options=request_options))

    async def db_subdomains_weekly(
        self, *, date: Date | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> AsyncFileResponse:
        """Subdomains Weekly. Returns the file/snapshot described by this operation.

        Args:
            date: yyyy-MM-dd; omit for latest
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            CSV

        Raises:
            ApiError: Error response (4XX) ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.db_subdomains_weekly(date=date, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncDatabasesSubdomainsWithRawResponse:
        return self._with_raw_response


class DatabasesSubdomainsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def db_subdomains_daily(
        self, *, date: Date | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[FileResponse, DbSubdomainsDailyErrorBody]:
        """Subdomains Daily. Returns the file/snapshot described by this operation.

        Args:
            date: yyyy-MM-dd; omit for latest
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the body unread or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3.2/download/dbupdate/daily/subdomains"),
            query_params=[param[Date | None]("date", date)],
            auth_scheme=self._auth.api_key_auth,
            decoder=file_decoder,
            error_mapper=db_subdomains_daily_error_mapper,
            request_options=request_options,
        )

    def db_subdomains_monthly(
        self, *, date: Date | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[FileResponse, DbSubdomainsMonthlyErrorBody]:
        """Subdomains Monthly. Returns the file/snapshot described by this operation.

        Args:
            date: yyyy-MM-dd; omit for latest
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the body unread or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3.2/download/dbupdate/monthly/subdomains"),
            query_params=[param[Date | None]("date", date)],
            auth_scheme=self._auth.api_key_auth,
            decoder=file_decoder,
            error_mapper=db_subdomains_monthly_error_mapper,
            request_options=request_options,
        )

    def db_subdomains_weekly(
        self, *, date: Date | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[FileResponse, DbSubdomainsWeeklyErrorBody]:
        """Subdomains Weekly. Returns the file/snapshot described by this operation.

        Args:
            date: yyyy-MM-dd; omit for latest
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the body unread or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3.2/download/dbupdate/weekly/subdomains"),
            query_params=[param[Date | None]("date", date)],
            auth_scheme=self._auth.api_key_auth,
            decoder=file_decoder,
            error_mapper=db_subdomains_weekly_error_mapper,
            request_options=request_options,
        )


class AsyncDatabasesSubdomainsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def db_subdomains_daily(
        self, *, date: Date | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[AsyncFileResponse, DbSubdomainsDailyErrorBody]:
        """Subdomains Daily. Returns the file/snapshot described by this operation.

        Args:
            date: yyyy-MM-dd; omit for latest
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the body unread or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3.2/download/dbupdate/daily/subdomains"),
            query_params=[param[Date | None]("date", date)],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_file_decoder,
            error_mapper=db_subdomains_daily_error_mapper,
            request_options=request_options,
        )

    async def db_subdomains_monthly(
        self, *, date: Date | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[AsyncFileResponse, DbSubdomainsMonthlyErrorBody]:
        """Subdomains Monthly. Returns the file/snapshot described by this operation.

        Args:
            date: yyyy-MM-dd; omit for latest
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the body unread or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3.2/download/dbupdate/monthly/subdomains"),
            query_params=[param[Date | None]("date", date)],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_file_decoder,
            error_mapper=db_subdomains_monthly_error_mapper,
            request_options=request_options,
        )

    async def db_subdomains_weekly(
        self, *, date: Date | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[AsyncFileResponse, DbSubdomainsWeeklyErrorBody]:
        """Subdomains Weekly. Returns the file/snapshot described by this operation.

        Args:
            date: yyyy-MM-dd; omit for latest
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the body unread or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3.2/download/dbupdate/weekly/subdomains"),
            query_params=[param[Date | None]("date", date)],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_file_decoder,
            error_mapper=db_subdomains_weekly_error_mapper,
            request_options=request_options,
        )

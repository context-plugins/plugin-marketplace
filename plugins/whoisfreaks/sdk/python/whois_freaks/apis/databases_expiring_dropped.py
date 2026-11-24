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
    async_json_decoder,
    file_decoder,
    json_decoder,
    param,
    unwrap,
)
from ..errors.db_dropped_backlinks_error import DbDroppedBacklinksErrorBody, db_dropped_backlinks_error_mapper
from ..errors.db_dropped_error import DbDroppedErrorBody, db_dropped_error_mapper
from ..errors.db_dropped_json_error import DbDroppedJsonErrorBody, db_dropped_json_error_mapper
from ..errors.db_expired_cleaned_error import DbExpiredCleanedErrorBody, db_expired_cleaned_error_mapper
from ..errors.db_expired_error import DbExpiredErrorBody, db_expired_error_mapper
from ..server.server import Server


class DatabasesExpiringDropped:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = DatabasesExpiringDroppedWithRawResponse(client, server, auth)

    def db_dropped(
        self, whois: bool, *, date: Date | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> FileResponse:
        """Dropped Domains. Returns the file/snapshot described by this operation.

        Args:
            whois: Value sent with the request.
            date: yyyy-MM-dd; omit for latest
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            CSV

        Raises:
            ApiError: Error response (4XX) ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.db_dropped(whois, date=date, request_options=request_options))

    def db_dropped_backlinks(
        self,
        *,
        whois: bool | None = None,
        date: Date | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> FileResponse:
        """Dropped With Backlinks. Returns the file/snapshot described by this operation.

        Args:
            whois: Value sent with the request.
            date: yyyy-MM-dd; omit for latest
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            CSV

        Raises:
            ApiError: Error response (4XX) ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.db_dropped_backlinks(whois=whois, date=date, request_options=request_options)
        )

    def db_dropped_json(
        self, *, date: Date | None = None, tlds: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> list[str]:
        """Dropped Domains (JSON). Returns the file/snapshot described by this operation.

        Args:
            date: yyyy-MM-dd; omit for latest
            tlds: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            JSON array of domains

        Raises:
            ApiError: Error response (4XX) ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.db_dropped_json(date=date, tlds=tlds, request_options=request_options))

    def db_expired(
        self, whois: bool, *, date: Date | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> FileResponse:
        """Expiring Domains. Returns the file/snapshot described by this operation.

        Args:
            whois: Value sent with the request.
            date: yyyy-MM-dd; omit for latest
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            CSV

        Raises:
            ApiError: Error response (4XX) ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.db_expired(whois, date=date, request_options=request_options))

    def db_expired_cleaned(
        self, *, date: Date | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> FileResponse:
        """Expiring Cleaned WHOIS. Returns the file/snapshot described by this operation.

        Args:
            date: yyyy-MM-dd; omit for latest
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            CSV

        Raises:
            ApiError: Error response (4XX) ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.db_expired_cleaned(date=date, request_options=request_options))

    @property
    def with_raw_response(self) -> DatabasesExpiringDroppedWithRawResponse:
        return self._with_raw_response


class AsyncDatabasesExpiringDropped:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncDatabasesExpiringDroppedWithRawResponse(client, server, auth)

    async def db_dropped(
        self, whois: bool, *, date: Date | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> AsyncFileResponse:
        """Dropped Domains. Returns the file/snapshot described by this operation.

        Args:
            whois: Value sent with the request.
            date: yyyy-MM-dd; omit for latest
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            CSV

        Raises:
            ApiError: Error response (4XX) ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.db_dropped(whois, date=date, request_options=request_options))

    async def db_dropped_backlinks(
        self,
        *,
        whois: bool | None = None,
        date: Date | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> AsyncFileResponse:
        """Dropped With Backlinks. Returns the file/snapshot described by this operation.

        Args:
            whois: Value sent with the request.
            date: yyyy-MM-dd; omit for latest
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            CSV

        Raises:
            ApiError: Error response (4XX) ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.db_dropped_backlinks(whois=whois, date=date, request_options=request_options)
        )

    async def db_dropped_json(
        self,
        *,
        date: Date | None = None,
        tlds: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> list[str]:
        """Dropped Domains (JSON). Returns the file/snapshot described by this operation.

        Args:
            date: yyyy-MM-dd; omit for latest
            tlds: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            JSON array of domains

        Raises:
            ApiError: Error response (4XX) ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.db_dropped_json(date=date, tlds=tlds, request_options=request_options)
        )

    async def db_expired(
        self, whois: bool, *, date: Date | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> AsyncFileResponse:
        """Expiring Domains. Returns the file/snapshot described by this operation.

        Args:
            whois: Value sent with the request.
            date: yyyy-MM-dd; omit for latest
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            CSV

        Raises:
            ApiError: Error response (4XX) ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.db_expired(whois, date=date, request_options=request_options))

    async def db_expired_cleaned(
        self, *, date: Date | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> AsyncFileResponse:
        """Expiring Cleaned WHOIS. Returns the file/snapshot described by this operation.

        Args:
            date: yyyy-MM-dd; omit for latest
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            CSV

        Raises:
            ApiError: Error response (4XX) ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.db_expired_cleaned(date=date, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncDatabasesExpiringDroppedWithRawResponse:
        return self._with_raw_response


class DatabasesExpiringDroppedWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def db_dropped(
        self, whois: bool, *, date: Date | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[FileResponse, DbDroppedErrorBody]:
        """Dropped Domains. Returns the file/snapshot described by this operation.

        Args:
            whois: Value sent with the request.
            date: yyyy-MM-dd; omit for latest
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the body unread or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3.1/download/domainer/dropped"),
            query_params=[param[bool]("whois", whois), param[Date | None]("date", date)],
            auth_scheme=self._auth.api_key_auth,
            decoder=file_decoder,
            error_mapper=db_dropped_error_mapper,
            request_options=request_options,
        )

    def db_dropped_backlinks(
        self,
        *,
        whois: bool | None = None,
        date: Date | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[FileResponse, DbDroppedBacklinksErrorBody]:
        """Dropped With Backlinks. Returns the file/snapshot described by this operation.

        Args:
            whois: Value sent with the request.
            date: yyyy-MM-dd; omit for latest
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the body unread or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3.3/download/domainer/dropped/backlinks"),
            query_params=[param[bool | None]("whois", whois), param[Date | None]("date", date)],
            auth_scheme=self._auth.api_key_auth,
            decoder=file_decoder,
            error_mapper=db_dropped_backlinks_error_mapper,
            request_options=request_options,
        )

    def db_dropped_json(
        self, *, date: Date | None = None, tlds: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[list[str], DbDroppedJsonErrorBody]:
        """Dropped Domains (JSON). Returns the file/snapshot described by this operation.

        Args:
            date: yyyy-MM-dd; omit for latest
            tlds: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3.1/domains/dropped"),
            query_params=[param[Date | None]("date", date), param[str | None]("tlds", tlds)],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[list[str]],
            error_mapper=db_dropped_json_error_mapper,
            request_options=request_options,
        )

    def db_expired(
        self, whois: bool, *, date: Date | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[FileResponse, DbExpiredErrorBody]:
        """Expiring Domains. Returns the file/snapshot described by this operation.

        Args:
            whois: Value sent with the request.
            date: yyyy-MM-dd; omit for latest
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the body unread or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3.1/download/domainer/expired"),
            query_params=[param[bool]("whois", whois), param[Date | None]("date", date)],
            auth_scheme=self._auth.api_key_auth,
            decoder=file_decoder,
            error_mapper=db_expired_error_mapper,
            request_options=request_options,
        )

    def db_expired_cleaned(
        self, *, date: Date | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[FileResponse, DbExpiredCleanedErrorBody]:
        """Expiring Cleaned WHOIS. Returns the file/snapshot described by this operation.

        Args:
            date: yyyy-MM-dd; omit for latest
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the body unread or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3.1/download/domainer/expired/cleaned"),
            query_params=[param[Date | None]("date", date)],
            auth_scheme=self._auth.api_key_auth,
            decoder=file_decoder,
            error_mapper=db_expired_cleaned_error_mapper,
            request_options=request_options,
        )


class AsyncDatabasesExpiringDroppedWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def db_dropped(
        self, whois: bool, *, date: Date | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[AsyncFileResponse, DbDroppedErrorBody]:
        """Dropped Domains. Returns the file/snapshot described by this operation.

        Args:
            whois: Value sent with the request.
            date: yyyy-MM-dd; omit for latest
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the body unread or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3.1/download/domainer/dropped"),
            query_params=[param[bool]("whois", whois), param[Date | None]("date", date)],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_file_decoder,
            error_mapper=db_dropped_error_mapper,
            request_options=request_options,
        )

    async def db_dropped_backlinks(
        self,
        *,
        whois: bool | None = None,
        date: Date | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[AsyncFileResponse, DbDroppedBacklinksErrorBody]:
        """Dropped With Backlinks. Returns the file/snapshot described by this operation.

        Args:
            whois: Value sent with the request.
            date: yyyy-MM-dd; omit for latest
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the body unread or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3.3/download/domainer/dropped/backlinks"),
            query_params=[param[bool | None]("whois", whois), param[Date | None]("date", date)],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_file_decoder,
            error_mapper=db_dropped_backlinks_error_mapper,
            request_options=request_options,
        )

    async def db_dropped_json(
        self,
        *,
        date: Date | None = None,
        tlds: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[list[str], DbDroppedJsonErrorBody]:
        """Dropped Domains (JSON). Returns the file/snapshot described by this operation.

        Args:
            date: yyyy-MM-dd; omit for latest
            tlds: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3.1/domains/dropped"),
            query_params=[param[Date | None]("date", date), param[str | None]("tlds", tlds)],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[list[str]],
            error_mapper=db_dropped_json_error_mapper,
            request_options=request_options,
        )

    async def db_expired(
        self, whois: bool, *, date: Date | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[AsyncFileResponse, DbExpiredErrorBody]:
        """Expiring Domains. Returns the file/snapshot described by this operation.

        Args:
            whois: Value sent with the request.
            date: yyyy-MM-dd; omit for latest
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the body unread or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3.1/download/domainer/expired"),
            query_params=[param[bool]("whois", whois), param[Date | None]("date", date)],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_file_decoder,
            error_mapper=db_expired_error_mapper,
            request_options=request_options,
        )

    async def db_expired_cleaned(
        self, *, date: Date | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[AsyncFileResponse, DbExpiredCleanedErrorBody]:
        """Expiring Cleaned WHOIS. Returns the file/snapshot described by this operation.

        Args:
            date: yyyy-MM-dd; omit for latest
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the body unread or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3.1/download/domainer/expired/cleaned"),
            query_params=[param[Date | None]("date", date)],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_file_decoder,
            error_mapper=db_expired_cleaned_error_mapper,
            request_options=request_options,
        )

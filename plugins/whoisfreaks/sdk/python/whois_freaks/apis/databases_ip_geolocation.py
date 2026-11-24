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
from ..errors.db_ip_city_error import DbIpCityErrorBody, db_ip_city_error_mapper
from ..errors.db_ip_city_status_error import DbIpCityStatusErrorBody, db_ip_city_status_error_mapper
from ..errors.db_ip_country_error import DbIpCountryErrorBody, db_ip_country_error_mapper
from ..errors.db_ip_country_status_error import DbIpCountryStatusErrorBody, db_ip_country_status_error_mapper
from ..models.snapshot_status import SnapshotStatus
from ..server.server import Server


class DatabasesIpGeolocation:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = DatabasesIpGeolocationWithRawResponse(client, server, auth)

    def db_ip_city(self, date: Date, *, request_options: RequestOptionsOrDict | None = None) -> FileResponse:
        """IP to City Snapshot. Returns the file/snapshot described by this operation.

        Args:
            date: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            ZIP archive

        Raises:
            ApiError: Error response (4XX) ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.db_ip_city(date, request_options=request_options))

    def db_ip_city_status(self, *, request_options: RequestOptionsOrDict | None = None) -> SnapshotStatus:
        """IP to City Snapshot Status. Returns the file/snapshot described by this operation.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Error response (4XX) ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.db_ip_city_status(request_options=request_options))

    def db_ip_country(self, date: Date, *, request_options: RequestOptionsOrDict | None = None) -> FileResponse:
        """IP to Country Snapshot. Returns the file/snapshot described by this operation.

        Args:
            date: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            ZIP archive

        Raises:
            ApiError: Error response (4XX) ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.db_ip_country(date, request_options=request_options))

    def db_ip_country_status(self, *, request_options: RequestOptionsOrDict | None = None) -> SnapshotStatus:
        """IP to Country Snapshot Status. Returns the file/snapshot described by this operation.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Error response (4XX) ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.db_ip_country_status(request_options=request_options))

    @property
    def with_raw_response(self) -> DatabasesIpGeolocationWithRawResponse:
        return self._with_raw_response


class AsyncDatabasesIpGeolocation:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncDatabasesIpGeolocationWithRawResponse(client, server, auth)

    async def db_ip_city(
        self, date: Date, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> AsyncFileResponse:
        """IP to City Snapshot. Returns the file/snapshot described by this operation.

        Args:
            date: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            ZIP archive

        Raises:
            ApiError: Error response (4XX) ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.db_ip_city(date, request_options=request_options))

    async def db_ip_city_status(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> SnapshotStatus:
        """IP to City Snapshot Status. Returns the file/snapshot described by this operation.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Error response (4XX) ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.db_ip_city_status(request_options=request_options))

    async def db_ip_country(
        self, date: Date, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> AsyncFileResponse:
        """IP to Country Snapshot. Returns the file/snapshot described by this operation.

        Args:
            date: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            ZIP archive

        Raises:
            ApiError: Error response (4XX) ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.db_ip_country(date, request_options=request_options))

    async def db_ip_country_status(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> SnapshotStatus:
        """IP to Country Snapshot Status. Returns the file/snapshot described by this operation.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Error response (4XX) ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.db_ip_country_status(request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncDatabasesIpGeolocationWithRawResponse:
        return self._with_raw_response


class DatabasesIpGeolocationWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def db_ip_city(
        self, date: Date, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[FileResponse, DbIpCityErrorBody]:
        """IP to City Snapshot. Returns the file/snapshot described by this operation.

        Args:
            date: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the body unread or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3.3/download/snapshot/ip/city"),
            query_params=[param[Date]("date", date)],
            auth_scheme=self._auth.api_key_auth,
            decoder=file_decoder,
            error_mapper=db_ip_city_error_mapper,
            request_options=request_options,
        )

    def db_ip_city_status(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[SnapshotStatus, DbIpCityStatusErrorBody]:
        """IP to City Snapshot Status. Returns the file/snapshot described by this operation.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3.3/status/snapshot/ip/city"),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[SnapshotStatus],
            error_mapper=db_ip_city_status_error_mapper,
            request_options=request_options,
        )

    def db_ip_country(
        self, date: Date, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[FileResponse, DbIpCountryErrorBody]:
        """IP to Country Snapshot. Returns the file/snapshot described by this operation.

        Args:
            date: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the body unread or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3.3/download/snapshot/ip/country"),
            query_params=[param[Date]("date", date)],
            auth_scheme=self._auth.api_key_auth,
            decoder=file_decoder,
            error_mapper=db_ip_country_error_mapper,
            request_options=request_options,
        )

    def db_ip_country_status(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[SnapshotStatus, DbIpCountryStatusErrorBody]:
        """IP to Country Snapshot Status. Returns the file/snapshot described by this operation.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3.3/status/snapshot/ip/country"),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[SnapshotStatus],
            error_mapper=db_ip_country_status_error_mapper,
            request_options=request_options,
        )


class AsyncDatabasesIpGeolocationWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def db_ip_city(
        self, date: Date, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[AsyncFileResponse, DbIpCityErrorBody]:
        """IP to City Snapshot. Returns the file/snapshot described by this operation.

        Args:
            date: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the body unread or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3.3/download/snapshot/ip/city"),
            query_params=[param[Date]("date", date)],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_file_decoder,
            error_mapper=db_ip_city_error_mapper,
            request_options=request_options,
        )

    async def db_ip_city_status(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[SnapshotStatus, DbIpCityStatusErrorBody]:
        """IP to City Snapshot Status. Returns the file/snapshot described by this operation.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3.3/status/snapshot/ip/city"),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[SnapshotStatus],
            error_mapper=db_ip_city_status_error_mapper,
            request_options=request_options,
        )

    async def db_ip_country(
        self, date: Date, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[AsyncFileResponse, DbIpCountryErrorBody]:
        """IP to Country Snapshot. Returns the file/snapshot described by this operation.

        Args:
            date: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the body unread or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3.3/download/snapshot/ip/country"),
            query_params=[param[Date]("date", date)],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_file_decoder,
            error_mapper=db_ip_country_error_mapper,
            request_options=request_options,
        )

    async def db_ip_country_status(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[SnapshotStatus, DbIpCountryStatusErrorBody]:
        """IP to Country Snapshot Status. Returns the file/snapshot described by this operation.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3.3/status/snapshot/ip/country"),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[SnapshotStatus],
            error_mapper=db_ip_country_status_error_mapper,
            request_options=request_options,
        )

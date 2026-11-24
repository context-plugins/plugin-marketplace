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
from ..errors.db_ip_whois_error import DbIpWhoisErrorBody, db_ip_whois_error_mapper
from ..errors.db_ip_whois_status_error import DbIpWhoisStatusErrorBody, db_ip_whois_status_error_mapper
from ..models.snapshot_status import SnapshotStatus
from ..server.server import Server


class DatabasesIpWhois:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = DatabasesIpWhoisWithRawResponse(client, server, auth)

    def db_ip_whois(self, date: Date, *, request_options: RequestOptionsOrDict | None = None) -> FileResponse:
        """IP WHOIS Snapshot. Returns the file/snapshot described by this operation.

        Args:
            date: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            JSON gzipped

        Raises:
            ApiError: Error response (4XX) ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.db_ip_whois(date, request_options=request_options))

    def db_ip_whois_status(self, *, request_options: RequestOptionsOrDict | None = None) -> SnapshotStatus:
        """IP WHOIS Snapshot Status. Returns the file/snapshot described by this operation.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Error response (4XX) ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.db_ip_whois_status(request_options=request_options))

    @property
    def with_raw_response(self) -> DatabasesIpWhoisWithRawResponse:
        return self._with_raw_response


class AsyncDatabasesIpWhois:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncDatabasesIpWhoisWithRawResponse(client, server, auth)

    async def db_ip_whois(
        self, date: Date, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> AsyncFileResponse:
        """IP WHOIS Snapshot. Returns the file/snapshot described by this operation.

        Args:
            date: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            JSON gzipped

        Raises:
            ApiError: Error response (4XX) ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.db_ip_whois(date, request_options=request_options))

    async def db_ip_whois_status(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> SnapshotStatus:
        """IP WHOIS Snapshot Status. Returns the file/snapshot described by this operation.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Error response (4XX) ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.db_ip_whois_status(request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncDatabasesIpWhoisWithRawResponse:
        return self._with_raw_response


class DatabasesIpWhoisWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def db_ip_whois(
        self, date: Date, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[FileResponse, DbIpWhoisErrorBody]:
        """IP WHOIS Snapshot. Returns the file/snapshot described by this operation.

        Args:
            date: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the body unread or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3.3/download/snapshot/ip/whois"),
            query_params=[param[Date]("date", date)],
            auth_scheme=self._auth.api_key_auth,
            decoder=file_decoder,
            error_mapper=db_ip_whois_error_mapper,
            request_options=request_options,
        )

    def db_ip_whois_status(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[SnapshotStatus, DbIpWhoisStatusErrorBody]:
        """IP WHOIS Snapshot Status. Returns the file/snapshot described by this operation.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3.3/status/snapshot/ip/whois"),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[SnapshotStatus],
            error_mapper=db_ip_whois_status_error_mapper,
            request_options=request_options,
        )


class AsyncDatabasesIpWhoisWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def db_ip_whois(
        self, date: Date, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[AsyncFileResponse, DbIpWhoisErrorBody]:
        """IP WHOIS Snapshot. Returns the file/snapshot described by this operation.

        Args:
            date: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the body unread or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3.3/download/snapshot/ip/whois"),
            query_params=[param[Date]("date", date)],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_file_decoder,
            error_mapper=db_ip_whois_error_mapper,
            request_options=request_options,
        )

    async def db_ip_whois_status(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[SnapshotStatus, DbIpWhoisStatusErrorBody]:
        """IP WHOIS Snapshot Status. Returns the file/snapshot described by this operation.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3.3/status/snapshot/ip/whois"),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[SnapshotStatus],
            error_mapper=db_ip_whois_status_error_mapper,
            request_options=request_options,
        )

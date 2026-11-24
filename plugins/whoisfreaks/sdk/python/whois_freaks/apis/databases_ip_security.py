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
from ..errors.db_ip_security_error import DbIpSecurityErrorBody, db_ip_security_error_mapper
from ..errors.db_ip_security_status_error import DbIpSecurityStatusErrorBody, db_ip_security_status_error_mapper
from ..models.snapshot_status import SnapshotStatus
from ..server.server import Server


class DatabasesIpSecurity:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = DatabasesIpSecurityWithRawResponse(client, server, auth)

    def db_ip_security(self, date: Date, *, request_options: RequestOptionsOrDict | None = None) -> FileResponse:
        """IP Security Snapshot. Returns the file/snapshot described by this operation.

        Args:
            date: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            CSV

        Raises:
            ApiError: Error response (4XX) ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.db_ip_security(date, request_options=request_options))

    def db_ip_security_status(self, *, request_options: RequestOptionsOrDict | None = None) -> SnapshotStatus:
        """IP Security Snapshot Status. Returns the file/snapshot described by this operation.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Error response (4XX) ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.db_ip_security_status(request_options=request_options))

    @property
    def with_raw_response(self) -> DatabasesIpSecurityWithRawResponse:
        return self._with_raw_response


class AsyncDatabasesIpSecurity:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncDatabasesIpSecurityWithRawResponse(client, server, auth)

    async def db_ip_security(
        self, date: Date, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> AsyncFileResponse:
        """IP Security Snapshot. Returns the file/snapshot described by this operation.

        Args:
            date: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            CSV

        Raises:
            ApiError: Error response (4XX) ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.db_ip_security(date, request_options=request_options))

    async def db_ip_security_status(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> SnapshotStatus:
        """IP Security Snapshot Status. Returns the file/snapshot described by this operation.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Error response (4XX) ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.db_ip_security_status(request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncDatabasesIpSecurityWithRawResponse:
        return self._with_raw_response


class DatabasesIpSecurityWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def db_ip_security(
        self, date: Date, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[FileResponse, DbIpSecurityErrorBody]:
        """IP Security Snapshot. Returns the file/snapshot described by this operation.

        Args:
            date: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the body unread or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3.3/download/snapshot/ip/security"),
            query_params=[param[Date]("date", date)],
            auth_scheme=self._auth.api_key_auth,
            decoder=file_decoder,
            error_mapper=db_ip_security_error_mapper,
            request_options=request_options,
        )

    def db_ip_security_status(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[SnapshotStatus, DbIpSecurityStatusErrorBody]:
        """IP Security Snapshot Status. Returns the file/snapshot described by this operation.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3.3/status/snapshot/ip/security"),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[SnapshotStatus],
            error_mapper=db_ip_security_status_error_mapper,
            request_options=request_options,
        )


class AsyncDatabasesIpSecurityWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def db_ip_security(
        self, date: Date, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[AsyncFileResponse, DbIpSecurityErrorBody]:
        """IP Security Snapshot. Returns the file/snapshot described by this operation.

        Args:
            date: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the body unread or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3.3/download/snapshot/ip/security"),
            query_params=[param[Date]("date", date)],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_file_decoder,
            error_mapper=db_ip_security_error_mapper,
            request_options=request_options,
        )

    async def db_ip_security_status(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[SnapshotStatus, DbIpSecurityStatusErrorBody]:
        """IP Security Snapshot Status. Returns the file/snapshot described by this operation.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3.3/status/snapshot/ip/security"),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[SnapshotStatus],
            error_mapper=db_ip_security_status_error_mapper,
            request_options=request_options,
        )

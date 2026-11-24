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
    async_text_decoder,
    json_decoder,
    text_decoder,
    unwrap,
)
from ..errors.account_usage_error import AccountUsageErrorBody, account_usage_error_mapper
from ..errors.database_file_status_error import DatabaseFileStatusErrorBody, database_file_status_error_mapper
from ..errors.rotate_api_key_error import RotateApiKeyErrorBody, rotate_api_key_error_mapper
from ..models.account_usage_response import AccountUsageResponse
from ..models.database_file_status import DatabaseFileStatus
from ..server.server import Server


class Account:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = AccountWithRawResponse(client, server, auth)

    def account_usage(self, *, request_options: RequestOptionsOrDict | None = None) -> AccountUsageResponse:
        """Account Usage. Returns the file/snapshot described by this operation.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Error response (4XX) ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.account_usage(request_options=request_options))

    def database_file_status(self, *, request_options: RequestOptionsOrDict | None = None) -> DatabaseFileStatus:
        """No API key required. Returns freshness of all downloadable files.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Too many requests ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.database_file_status(request_options=request_options))

    def rotate_api_key(self, *, request_options: RequestOptionsOrDict | None = None) -> str:
        """Rotate API Key. Returns the file/snapshot described by this operation.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Key rotated

        Raises:
            ApiError: Not allowed ``error`` is ``str | RawError``."""
        return unwrap(self._with_raw_response.rotate_api_key(request_options=request_options))

    @property
    def with_raw_response(self) -> AccountWithRawResponse:
        return self._with_raw_response


class AsyncAccount:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncAccountWithRawResponse(client, server, auth)

    async def account_usage(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> AccountUsageResponse:
        """Account Usage. Returns the file/snapshot described by this operation.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Error response (4XX) ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.account_usage(request_options=request_options))

    async def database_file_status(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> DatabaseFileStatus:
        """No API key required. Returns freshness of all downloadable files.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Too many requests ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.database_file_status(request_options=request_options))

    async def rotate_api_key(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> str:
        """Rotate API Key. Returns the file/snapshot described by this operation.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Key rotated

        Raises:
            ApiError: Not allowed ``error`` is ``str | RawError``."""
        return unwrap(await self._with_raw_response.rotate_api_key(request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncAccountWithRawResponse:
        return self._with_raw_response


class AccountWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def account_usage(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[AccountUsageResponse, AccountUsageErrorBody]:
        """Account Usage. Returns the file/snapshot described by this operation.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1.0/whoisapi/usage"),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[AccountUsageResponse],
            error_mapper=account_usage_error_mapper,
            request_options=request_options,
        )

    def database_file_status(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[DatabaseFileStatus, DatabaseFileStatusErrorBody]:
        """No API key required. Returns freshness of all downloadable files.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3.4/status"),
            decoder=json_decoder[DatabaseFileStatus],
            error_mapper=database_file_status_error_mapper,
            request_options=request_options,
        )

    def rotate_api_key(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[str, RotateApiKeyErrorBody]:
        """Rotate API Key. Returns the file/snapshot described by this operation.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1.0/api-key/rotate"),
            auth_scheme=self._auth.api_key_auth,
            decoder=text_decoder[str],
            error_mapper=rotate_api_key_error_mapper,
            request_options=request_options,
        )


class AsyncAccountWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def account_usage(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[AccountUsageResponse, AccountUsageErrorBody]:
        """Account Usage. Returns the file/snapshot described by this operation.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1.0/whoisapi/usage"),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[AccountUsageResponse],
            error_mapper=account_usage_error_mapper,
            request_options=request_options,
        )

    async def database_file_status(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[DatabaseFileStatus, DatabaseFileStatusErrorBody]:
        """No API key required. Returns freshness of all downloadable files.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3.4/status"),
            decoder=async_json_decoder[DatabaseFileStatus],
            error_mapper=database_file_status_error_mapper,
            request_options=request_options,
        )

    async def rotate_api_key(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[str, RotateApiKeyErrorBody]:
        """Rotate API Key. Returns the file/snapshot described by this operation.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1.0/api-key/rotate"),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_text_decoder[str],
            error_mapper=rotate_api_key_error_mapper,
            request_options=request_options,
        )

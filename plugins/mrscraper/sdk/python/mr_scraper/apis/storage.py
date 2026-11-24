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
    async_empty_response,
    empty_response,
    param,
    unwrap,
)
from ..errors.get_storage_by_key_error import GetStorageByKeyErrorBody, get_storage_by_key_error_mapper
from ..server.server import Server


class Storage:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = StorageWithRawResponse(client, server, auth)

    def get_storage_by_key(self, key: str, *, request_options: RequestOptionsOrDict | None = None) -> None:
        """Returns the stored body directly with application/json content type, without a message/data envelope. The key
        may contain multiple path segments and must belong to the authenticated user.

        Args:
            key: Full storage key, for example results/<user-scope>/<uuid>.json
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Raw stored result body; its shape depends on the saved result

        Raises:
            ApiError: Invalid storage key Authentication required Result belongs to another user Result not found Result
                storage is temporarily unavailable ``error`` is ``Storage400Error1 | Any | Storage403Error1 |
                Storage404Error1 | Storage503Error1 | RawError``."""
        return unwrap(self._with_raw_response.get_storage_by_key(key, request_options=request_options))

    @property
    def with_raw_response(self) -> StorageWithRawResponse:
        return self._with_raw_response


class AsyncStorage:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncStorageWithRawResponse(client, server, auth)

    async def get_storage_by_key(self, key: str, *, request_options: AsyncRequestOptionsOrDict | None = None) -> None:
        """Returns the stored body directly with application/json content type, without a message/data envelope. The key
        may contain multiple path segments and must belong to the authenticated user.

        Args:
            key: Full storage key, for example results/<user-scope>/<uuid>.json
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Raw stored result body; its shape depends on the saved result

        Raises:
            ApiError: Invalid storage key Authentication required Result belongs to another user Result not found Result
                storage is temporarily unavailable ``error`` is ``Storage400Error1 | Any | Storage403Error1 |
                Storage404Error1 | Storage503Error1 | RawError``."""
        return unwrap(await self._with_raw_response.get_storage_by_key(key, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncStorageWithRawResponse:
        return self._with_raw_response


class StorageWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_storage_by_key(
        self, key: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, GetStorageByKeyErrorBody]:
        """Returns the stored body directly with application/json content type, without a message/data envelope. The key
        may contain multiple path segments and must belong to the authenticated user.

        Args:
            key: Full storage key, for example results/<user-scope>/<uuid>.json
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_scraper_service_gateway_auth_api("/storage/{key}"),
            path_params=[param[str]("key", key)],
            auth_scheme=AnySchemes(self._auth.api_key, self._auth.bearer_auth),
            decoder=empty_response,
            error_mapper=get_storage_by_key_error_mapper,
            request_options=request_options,
        )


class AsyncStorageWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_storage_by_key(
        self, key: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, GetStorageByKeyErrorBody]:
        """Returns the stored body directly with application/json content type, without a message/data envelope. The key
        may contain multiple path segments and must belong to the authenticated user.

        Args:
            key: Full storage key, for example results/<user-scope>/<uuid>.json
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_scraper_service_gateway_auth_api("/storage/{key}"),
            path_params=[param[str]("key", key)],
            auth_scheme=AsyncAnySchemes(self._auth.api_key, self._auth.bearer_auth),
            decoder=async_empty_response,
            error_mapper=get_storage_by_key_error_mapper,
            request_options=request_options,
        )

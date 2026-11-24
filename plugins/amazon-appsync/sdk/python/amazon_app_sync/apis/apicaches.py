from __future__ import annotations

from typing import Any
from uuid import UUID, uuid4

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    RawClient,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_json_decoder,
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.create_api_cache_error import CreateApiCacheErrorBody, create_api_cache_error_mapper
from ..errors.delete_api_cache_error import DeleteApiCacheErrorBody, delete_api_cache_error_mapper
from ..errors.get_api_cache_error import GetApiCacheErrorBody, get_api_cache_error_mapper
from ..errors.update_api_cache_error import UpdateApiCacheErrorBody, update_api_cache_error_mapper
from ..models.create_api_cache_response import CreateApiCacheResponse
from ..models.get_api_cache_response import GetApiCacheResponse
from ..models.update_api_cache_response import UpdateApiCacheResponse
from ..models.v1_apis_api_caches_request import V1ApisApiCachesRequest, V1ApisApiCachesRequestDict
from ..models.v1_apis_api_caches_update_request import V1ApisApiCachesUpdateRequest, V1ApisApiCachesUpdateRequestDict
from ..server.server import Server


class Apicaches:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = ApicachesWithRawResponse(client, server, auth)

    def create_api_cache(
        self,
        api_id: str,
        *,
        body: V1ApisApiCachesRequest | V1ApisApiCachesRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> CreateApiCacheResponse:
        """Creates a cache for the GraphQL API.

        Args:
            api_id: The GraphQL API ID.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException ConcurrentModificationException InternalFailureException NotFoundException
                UnauthorizedException ``error`` is ``BadRequestException | UnauthorizedException | NotFoundException |
                ConcurrentModificationException | InternalFailureException | RawError``."""
        return unwrap(self._with_raw_response.create_api_cache(api_id, body=body, request_options=request_options))

    def delete_api_cache(self, api_id: str, *, request_options: RequestOptionsOrDict | None = None) -> Any:
        """Deletes an ApiCache object.

        Args:
            api_id: The API ID.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException ConcurrentModificationException InternalFailureException NotFoundException
                UnauthorizedException ``error`` is ``BadRequestException | UnauthorizedException | NotFoundException |
                ConcurrentModificationException | InternalFailureException | RawError``."""
        return unwrap(self._with_raw_response.delete_api_cache(api_id, request_options=request_options))

    def get_api_cache(self, api_id: str, *, request_options: RequestOptionsOrDict | None = None) -> GetApiCacheResponse:
        """Retrieves an ApiCache object.

        Args:
            api_id: The API ID.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException ConcurrentModificationException InternalFailureException NotFoundException
                UnauthorizedException ``error`` is ``BadRequestException | UnauthorizedException | NotFoundException |
                ConcurrentModificationException | InternalFailureException | RawError``."""
        return unwrap(self._with_raw_response.get_api_cache(api_id, request_options=request_options))

    def update_api_cache(
        self,
        api_id: str,
        *,
        body: V1ApisApiCachesUpdateRequest | V1ApisApiCachesUpdateRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> UpdateApiCacheResponse:
        """Updates the cache for the GraphQL API.

        Args:
            api_id: The GraphQL API ID.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException ConcurrentModificationException InternalFailureException NotFoundException
                UnauthorizedException ``error`` is ``BadRequestException | UnauthorizedException | NotFoundException |
                ConcurrentModificationException | InternalFailureException | RawError``."""
        return unwrap(self._with_raw_response.update_api_cache(api_id, body=body, request_options=request_options))

    @property
    def with_raw_response(self) -> ApicachesWithRawResponse:
        return self._with_raw_response


class AsyncApicaches:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncApicachesWithRawResponse(client, server, auth)

    async def create_api_cache(
        self,
        api_id: str,
        *,
        body: V1ApisApiCachesRequest | V1ApisApiCachesRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CreateApiCacheResponse:
        """Creates a cache for the GraphQL API.

        Args:
            api_id: The GraphQL API ID.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException ConcurrentModificationException InternalFailureException NotFoundException
                UnauthorizedException ``error`` is ``BadRequestException | UnauthorizedException | NotFoundException |
                ConcurrentModificationException | InternalFailureException | RawError``."""
        return unwrap(
            await self._with_raw_response.create_api_cache(api_id, body=body, request_options=request_options)
        )

    async def delete_api_cache(self, api_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None) -> Any:
        """Deletes an ApiCache object.

        Args:
            api_id: The API ID.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException ConcurrentModificationException InternalFailureException NotFoundException
                UnauthorizedException ``error`` is ``BadRequestException | UnauthorizedException | NotFoundException |
                ConcurrentModificationException | InternalFailureException | RawError``."""
        return unwrap(await self._with_raw_response.delete_api_cache(api_id, request_options=request_options))

    async def get_api_cache(
        self, api_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> GetApiCacheResponse:
        """Retrieves an ApiCache object.

        Args:
            api_id: The API ID.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException ConcurrentModificationException InternalFailureException NotFoundException
                UnauthorizedException ``error`` is ``BadRequestException | UnauthorizedException | NotFoundException |
                ConcurrentModificationException | InternalFailureException | RawError``."""
        return unwrap(await self._with_raw_response.get_api_cache(api_id, request_options=request_options))

    async def update_api_cache(
        self,
        api_id: str,
        *,
        body: V1ApisApiCachesUpdateRequest | V1ApisApiCachesUpdateRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> UpdateApiCacheResponse:
        """Updates the cache for the GraphQL API.

        Args:
            api_id: The GraphQL API ID.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException ConcurrentModificationException InternalFailureException NotFoundException
                UnauthorizedException ``error`` is ``BadRequestException | UnauthorizedException | NotFoundException |
                ConcurrentModificationException | InternalFailureException | RawError``."""
        return unwrap(
            await self._with_raw_response.update_api_cache(api_id, body=body, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncApicachesWithRawResponse:
        return self._with_raw_response


class ApicachesWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_api_cache(
        self,
        api_id: str,
        *,
        body: V1ApisApiCachesRequest | V1ApisApiCachesRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[CreateApiCacheResponse, CreateApiCacheErrorBody]:
        """Creates a cache for the GraphQL API.

        Args:
            api_id: The GraphQL API ID.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/apis/{apiId}/ApiCaches"),
            path_params=[param[str]("apiId", api_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1ApisApiCachesRequest | V1ApisApiCachesRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[CreateApiCacheResponse],
            error_mapper=create_api_cache_error_mapper,
            request_options=request_options,
        )

    def delete_api_cache(
        self, api_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Any, DeleteApiCacheErrorBody]:
        """Deletes an ApiCache object.

        Args:
            api_id: The API ID.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v1/apis/{apiId}/ApiCaches"),
            path_params=[param[str]("apiId", api_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[Any],
            error_mapper=delete_api_cache_error_mapper,
            request_options=request_options,
        )

    def get_api_cache(
        self, api_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[GetApiCacheResponse, GetApiCacheErrorBody]:
        """Retrieves an ApiCache object.

        Args:
            api_id: The API ID.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/apis/{apiId}/ApiCaches"),
            path_params=[param[str]("apiId", api_id)],
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[GetApiCacheResponse],
            error_mapper=get_api_cache_error_mapper,
            request_options=request_options,
        )

    def update_api_cache(
        self,
        api_id: str,
        *,
        body: V1ApisApiCachesUpdateRequest | V1ApisApiCachesUpdateRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[UpdateApiCacheResponse, UpdateApiCacheErrorBody]:
        """Updates the cache for the GraphQL API.

        Args:
            api_id: The GraphQL API ID.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/apis/{apiId}/ApiCaches/update"),
            path_params=[param[str]("apiId", api_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1ApisApiCachesUpdateRequest | V1ApisApiCachesUpdateRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[UpdateApiCacheResponse],
            error_mapper=update_api_cache_error_mapper,
            request_options=request_options,
        )


class AsyncApicachesWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_api_cache(
        self,
        api_id: str,
        *,
        body: V1ApisApiCachesRequest | V1ApisApiCachesRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CreateApiCacheResponse, CreateApiCacheErrorBody]:
        """Creates a cache for the GraphQL API.

        Args:
            api_id: The GraphQL API ID.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/apis/{apiId}/ApiCaches"),
            path_params=[param[str]("apiId", api_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1ApisApiCachesRequest | V1ApisApiCachesRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[CreateApiCacheResponse],
            error_mapper=create_api_cache_error_mapper,
            request_options=request_options,
        )

    async def delete_api_cache(
        self, api_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Any, DeleteApiCacheErrorBody]:
        """Deletes an ApiCache object.

        Args:
            api_id: The API ID.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v1/apis/{apiId}/ApiCaches"),
            path_params=[param[str]("apiId", api_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[Any],
            error_mapper=delete_api_cache_error_mapper,
            request_options=request_options,
        )

    async def get_api_cache(
        self, api_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[GetApiCacheResponse, GetApiCacheErrorBody]:
        """Retrieves an ApiCache object.

        Args:
            api_id: The API ID.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/apis/{apiId}/ApiCaches"),
            path_params=[param[str]("apiId", api_id)],
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[GetApiCacheResponse],
            error_mapper=get_api_cache_error_mapper,
            request_options=request_options,
        )

    async def update_api_cache(
        self,
        api_id: str,
        *,
        body: V1ApisApiCachesUpdateRequest | V1ApisApiCachesUpdateRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[UpdateApiCacheResponse, UpdateApiCacheErrorBody]:
        """Updates the cache for the GraphQL API.

        Args:
            api_id: The GraphQL API ID.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/apis/{apiId}/ApiCaches/update"),
            path_params=[param[str]("apiId", api_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1ApisApiCachesUpdateRequest | V1ApisApiCachesUpdateRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[UpdateApiCacheResponse],
            error_mapper=update_api_cache_error_mapper,
            request_options=request_options,
        )

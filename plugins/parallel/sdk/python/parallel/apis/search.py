from __future__ import annotations

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
from ..errors.v1_search_v1_search_post_error import V1SearchV1SearchPostErrorBody, v1_search_v1_search_post_error_mapper
from ..models.v1_search_request import V1SearchRequest, V1SearchRequestDict
from ..models.v1_search_response import V1SearchResponse
from ..server.server import Server


class Search:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = SearchWithRawResponse(client, server, auth)

    def v1_search_v1_search_post(
        self, body: V1SearchRequest | V1SearchRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> V1SearchResponse:
        """Searches the web.

        The legacy Search API reference (``/v1beta/search`` endpoint) is available here, and migration guide is here.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Request validation error ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.v1_search_v1_search_post(body, request_options=request_options))

    @property
    def with_raw_response(self) -> SearchWithRawResponse:
        return self._with_raw_response


class AsyncSearch:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncSearchWithRawResponse(client, server, auth)

    async def v1_search_v1_search_post(
        self, body: V1SearchRequest | V1SearchRequestDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V1SearchResponse:
        """Searches the web.

        The legacy Search API reference (``/v1beta/search`` endpoint) is available here, and migration guide is here.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Request validation error ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.v1_search_v1_search_post(body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncSearchWithRawResponse:
        return self._with_raw_response


class SearchWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def v1_search_v1_search_post(
        self, body: V1SearchRequest | V1SearchRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1SearchResponse, V1SearchV1SearchPostErrorBody]:
        """Searches the web.

        The legacy Search API reference (``/v1beta/search`` endpoint) is available here, and migration guide is here.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/search"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1SearchRequest | V1SearchRequestDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[V1SearchResponse],
            error_mapper=v1_search_v1_search_post_error_mapper,
            request_options=request_options,
        )


class AsyncSearchWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def v1_search_v1_search_post(
        self, body: V1SearchRequest | V1SearchRequestDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1SearchResponse, V1SearchV1SearchPostErrorBody]:
        """Searches the web.

        The legacy Search API reference (``/v1beta/search`` endpoint) is available here, and migration guide is here.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/search"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1SearchRequest | V1SearchRequestDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[V1SearchResponse],
            error_mapper=v1_search_v1_search_post_error_mapper,
            request_options=request_options,
        )

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
from ..errors.search_api_v1_error import SearchApiV1ErrorBody, search_api_v1_error_mapper
from ..models.search_request import SearchRequest, SearchRequestDict
from ..models.search_response import SearchResponse
from ..server.server import Server


class Search:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = SearchWithRawResponse(client, server, auth)

    def search_api_v1(
        self, body: SearchRequest | SearchRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> SearchResponse:
        """Searches the audio corpus and returns segment-level results with timestamps, highlights, and the parent
        episode + podcast. The default ``search_type`` of ``hybrid`` combines keyword scoring with semantic vector
        matching; use ``text`` for boolean queries and quoted phrases, ``semantic`` for natural-language questions.
        Filter by podcast, speaker, or publish-date range via the ``filters`` object.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Search results

        Raises:
            ApiError: Invalid request (e.g. empty query) Missing or invalid API key No active subscription Semantic
                search requires a Pro/Enterprise plan (``code: FEATURE_NOT_AVAILABLE``) Monthly text-search or
                semantic-search quota exhausted (``code: SEARCH_LIMIT_EXCEEDED`` or ``SEMANTIC_SEARCH_LIMIT_EXCEEDED``,
                body includes ``usage: { current, limit }``) ``error`` is ``ApiErrorBody | RawError``."""
        return unwrap(self._with_raw_response.search_api_v1(body, request_options=request_options))

    @property
    def with_raw_response(self) -> SearchWithRawResponse:
        return self._with_raw_response


class AsyncSearch:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncSearchWithRawResponse(client, server, auth)

    async def search_api_v1(
        self, body: SearchRequest | SearchRequestDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> SearchResponse:
        """Searches the audio corpus and returns segment-level results with timestamps, highlights, and the parent
        episode + podcast. The default ``search_type`` of ``hybrid`` combines keyword scoring with semantic vector
        matching; use ``text`` for boolean queries and quoted phrases, ``semantic`` for natural-language questions.
        Filter by podcast, speaker, or publish-date range via the ``filters`` object.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Search results

        Raises:
            ApiError: Invalid request (e.g. empty query) Missing or invalid API key No active subscription Semantic
                search requires a Pro/Enterprise plan (``code: FEATURE_NOT_AVAILABLE``) Monthly text-search or
                semantic-search quota exhausted (``code: SEARCH_LIMIT_EXCEEDED`` or ``SEMANTIC_SEARCH_LIMIT_EXCEEDED``,
                body includes ``usage: { current, limit }``) ``error`` is ``ApiErrorBody | RawError``."""
        return unwrap(await self._with_raw_response.search_api_v1(body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncSearchWithRawResponse:
        return self._with_raw_response


class SearchWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def search_api_v1(
        self, body: SearchRequest | SearchRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[SearchResponse, SearchApiV1ErrorBody]:
        """Searches the audio corpus and returns segment-level results with timestamps, highlights, and the parent
        episode + podcast. The default ``search_type`` of ``hybrid`` combines keyword scoring with semantic vector
        matching; use ``text`` for boolean queries and quoted phrases, ``semantic`` for natural-language questions.
        Filter by podcast, speaker, or publish-date range via the ``filters`` object.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/search"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[SearchRequest | SearchRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[SearchResponse],
            error_mapper=search_api_v1_error_mapper,
            request_options=request_options,
        )


class AsyncSearchWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def search_api_v1(
        self, body: SearchRequest | SearchRequestDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[SearchResponse, SearchApiV1ErrorBody]:
        """Searches the audio corpus and returns segment-level results with timestamps, highlights, and the parent
        episode + podcast. The default ``search_type`` of ``hybrid`` combines keyword scoring with semantic vector
        matching; use ``text`` for boolean queries and quoted phrases, ``semantic`` for natural-language questions.
        Filter by podcast, speaker, or publish-date range via the ``filters`` object.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/search"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[SearchRequest | SearchRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[SearchResponse],
            error_mapper=search_api_v1_error_mapper,
            request_options=request_options,
        )

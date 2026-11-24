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
    json_decoder,
    param,
    unwrap,
)
from ..errors.get_api_v1_sources_error import GetApiV1SourcesErrorBody, get_api_v1_sources_error_mapper
from ..models.api_v1_sources_response import ApiV1SourcesResponse
from ..server.server import Server


class Sources:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = SourcesWithRawResponse(client, server, auth)

    def get_api_v1_sources(
        self,
        *,
        limit: int | None = None,
        cursor: str | None = None,
        fields: str | None = None,
        if_none_match: str | None = None,
        if_modified_since: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1SourcesResponse:
        """Returns a paginated list of enabled news sources, ordered alphabetically by name. Use source IDs to filter
        articles and stories via the ``sources`` parameter on the articles and stories list endpoints.

        Args:
            limit: Number of sources to return per page (default 25, max 100).
            cursor: Opaque pagination cursor from a previous response.
            fields: Comma-separated list of fields to include. Available fields: ``id``, ``name``, ``domain``,
                ``country``, ``source_type``.
            if_none_match: ETag value from a previous response. Returns ``304 Not Modified`` if data has not changed.
            if_modified_since: HTTP date from a previous ``Last-Modified`` header. Returns ``304 Not Modified`` if
                nothing has changed since.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Sources retrieved

        Raises:
            ApiError: Unauthorized ``error`` is ``ProblemDetails | RawError``."""
        return unwrap(
            self._with_raw_response.get_api_v1_sources(
                limit=limit,
                cursor=cursor,
                fields=fields,
                if_none_match=if_none_match,
                if_modified_since=if_modified_since,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> SourcesWithRawResponse:
        return self._with_raw_response


class AsyncSources:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncSourcesWithRawResponse(client, server, auth)

    async def get_api_v1_sources(
        self,
        *,
        limit: int | None = None,
        cursor: str | None = None,
        fields: str | None = None,
        if_none_match: str | None = None,
        if_modified_since: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1SourcesResponse:
        """Returns a paginated list of enabled news sources, ordered alphabetically by name. Use source IDs to filter
        articles and stories via the ``sources`` parameter on the articles and stories list endpoints.

        Args:
            limit: Number of sources to return per page (default 25, max 100).
            cursor: Opaque pagination cursor from a previous response.
            fields: Comma-separated list of fields to include. Available fields: ``id``, ``name``, ``domain``,
                ``country``, ``source_type``.
            if_none_match: ETag value from a previous response. Returns ``304 Not Modified`` if data has not changed.
            if_modified_since: HTTP date from a previous ``Last-Modified`` header. Returns ``304 Not Modified`` if
                nothing has changed since.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Sources retrieved

        Raises:
            ApiError: Unauthorized ``error`` is ``ProblemDetails | RawError``."""
        return unwrap(
            await self._with_raw_response.get_api_v1_sources(
                limit=limit,
                cursor=cursor,
                fields=fields,
                if_none_match=if_none_match,
                if_modified_since=if_modified_since,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> AsyncSourcesWithRawResponse:
        return self._with_raw_response


class SourcesWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_api_v1_sources(
        self,
        *,
        limit: int | None = None,
        cursor: str | None = None,
        fields: str | None = None,
        if_none_match: str | None = None,
        if_modified_since: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1SourcesResponse, GetApiV1SourcesErrorBody]:
        """Returns a paginated list of enabled news sources, ordered alphabetically by name. Use source IDs to filter
        articles and stories via the ``sources`` parameter on the articles and stories list endpoints.

        Args:
            limit: Number of sources to return per page (default 25, max 100).
            cursor: Opaque pagination cursor from a previous response.
            fields: Comma-separated list of fields to include. Available fields: ``id``, ``name``, ``domain``,
                ``country``, ``source_type``.
            if_none_match: ETag value from a previous response. Returns ``304 Not Modified`` if data has not changed.
            if_modified_since: HTTP date from a previous ``Last-Modified`` header. Returns ``304 Not Modified`` if
                nothing has changed since.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/sources"),
            query_params=[
                param[int | None]("limit", limit),
                param[str | None]("cursor", cursor),
                param[str | None]("fields", fields),
            ],
            headers=[
                param[str | None]("If-None-Match", if_none_match),
                param[str | None]("If-Modified-Since", if_modified_since),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1SourcesResponse],
            error_mapper=get_api_v1_sources_error_mapper,
            request_options=request_options,
        )


class AsyncSourcesWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_api_v1_sources(
        self,
        *,
        limit: int | None = None,
        cursor: str | None = None,
        fields: str | None = None,
        if_none_match: str | None = None,
        if_modified_since: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1SourcesResponse, GetApiV1SourcesErrorBody]:
        """Returns a paginated list of enabled news sources, ordered alphabetically by name. Use source IDs to filter
        articles and stories via the ``sources`` parameter on the articles and stories list endpoints.

        Args:
            limit: Number of sources to return per page (default 25, max 100).
            cursor: Opaque pagination cursor from a previous response.
            fields: Comma-separated list of fields to include. Available fields: ``id``, ``name``, ``domain``,
                ``country``, ``source_type``.
            if_none_match: ETag value from a previous response. Returns ``304 Not Modified`` if data has not changed.
            if_modified_since: HTTP date from a previous ``Last-Modified`` header. Returns ``304 Not Modified`` if
                nothing has changed since.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/sources"),
            query_params=[
                param[int | None]("limit", limit),
                param[str | None]("cursor", cursor),
                param[str | None]("fields", fields),
            ],
            headers=[
                param[str | None]("If-None-Match", if_none_match),
                param[str | None]("If-Modified-Since", if_modified_since),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1SourcesResponse],
            error_mapper=get_api_v1_sources_error_mapper,
            request_options=request_options,
        )

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
from ..errors.get_api_v1_indices_by_identifier_companies_error import (
    GetApiV1IndicesByIdentifierCompaniesErrorBody,
    get_api_v1_indices_by_identifier_companies_error_mapper,
)
from ..errors.get_api_v1_indices_by_identifier_error import (
    GetApiV1IndicesByIdentifierErrorBody,
    get_api_v1_indices_by_identifier_error_mapper,
)
from ..errors.get_api_v1_indices_error import GetApiV1IndicesErrorBody, get_api_v1_indices_error_mapper
from ..models.api_v1_indices_companies_response import ApiV1IndicesCompaniesResponse
from ..models.api_v1_indices_response import ApiV1IndicesResponse
from ..models.api_v1_indices_response1 import ApiV1IndicesResponse1
from ..server.server import Server


class IndicesApi:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = IndicesApiWithRawResponse(client, server, auth)

    def get_api_v1_indices(
        self,
        *,
        limit: int | None = None,
        cursor: str | None = None,
        exchange: str | None = None,
        fields: str | None = None,
        if_none_match: str | None = None,
        if_modified_since: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1IndicesResponse:
        """Returns stock indices, ordered alphabetically by name. Use ``exchange`` to filter by a specific exchange.

        Args:
            limit: Number of indices to return per page (default 25, max 100).
            cursor: Opaque pagination cursor from a previous response.
            exchange: Filter by exchange MIC code, comma-separated for multiple (e.g. ``XSTO``, ``XSTO,XHEL``). Only
                active exchanges match.
            fields: Comma-separated list of fields to include in the response. Available fields: ``id``, ``name``,
                ``symbol``, ``pan_nordic``, ``exchange``.
            if_none_match: ETag value from a previous response. Returns ``304 Not Modified`` if data has not changed.
            if_modified_since: HTTP date from a previous ``Last-Modified`` header. Returns ``304 Not Modified`` if
                nothing has changed since.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Indices retrieved successfully

        Raises:
            ApiError: unauthorized forbidden - insufficient scope ``error`` is ``ProblemDetails | RawError``."""
        return unwrap(
            self._with_raw_response.get_api_v1_indices(
                limit=limit,
                cursor=cursor,
                exchange=exchange,
                fields=fields,
                if_none_match=if_none_match,
                if_modified_since=if_modified_since,
                request_options=request_options,
            ),
        )

    def get_api_v1_indices_by_identifier(
        self,
        identifier: str,
        *,
        if_none_match: str | None = None,
        if_modified_since: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1IndicesResponse1:
        """Returns details for a single index, including description and company count. Look up by index ID or symbol
        (case-insensitive, e.g. ``OMXS30``). Note: ``companies_count`` reflects the number of distinct companies in the
        index, which may be less than the number of index constituents when a company has multiple share classes listed.

        Args:
            identifier: Index ID or symbol (e.g. ``OMXS30``)
            if_none_match: ETag value from a previous response. Returns ``304 Not Modified`` if data has not changed.
            if_modified_since: HTTP date from a previous ``Last-Modified`` header. Returns ``304 Not Modified`` if
                nothing has changed since.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Index retrieved successfully

        Raises:
            ApiError: Stock index not found ``error`` is ``ProblemDetails | RawError``."""
        return unwrap(
            self._with_raw_response.get_api_v1_indices_by_identifier(
                identifier,
                if_none_match=if_none_match,
                if_modified_since=if_modified_since,
                request_options=request_options,
            ),
        )

    def get_api_v1_indices_by_identifier_companies(
        self,
        identifier: str,
        *,
        limit: int | None = None,
        cursor: str | None = None,
        if_none_match: str | None = None,
        if_modified_since: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1IndicesCompaniesResponse:
        """Returns companies that are members of a specific index, ordered alphabetically. The ``ticker`` and
        ``exchange`` shown for each company reflect its primary listing, which may differ from the listing used in this
        index (e.g. a company listed on multiple exchanges).

        Args:
            identifier: Index ID or symbol (e.g. ``OMXS30``)
            limit: Number of companies to return per page (default 25, max 100).
            cursor: Opaque pagination cursor from a previous response.
            if_none_match: ETag value from a previous response. Returns ``304 Not Modified`` if data has not changed.
            if_modified_since: HTTP date from a previous ``Last-Modified`` header. Returns ``304 Not Modified`` if
                nothing has changed since.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Index companies retrieved successfully

        Raises:
            ApiError: Stock index not found ``error`` is ``ProblemDetails | RawError``."""
        return unwrap(
            self._with_raw_response.get_api_v1_indices_by_identifier_companies(
                identifier,
                limit=limit,
                cursor=cursor,
                if_none_match=if_none_match,
                if_modified_since=if_modified_since,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> IndicesApiWithRawResponse:
        return self._with_raw_response


class AsyncIndicesApi:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncIndicesApiWithRawResponse(client, server, auth)

    async def get_api_v1_indices(
        self,
        *,
        limit: int | None = None,
        cursor: str | None = None,
        exchange: str | None = None,
        fields: str | None = None,
        if_none_match: str | None = None,
        if_modified_since: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1IndicesResponse:
        """Returns stock indices, ordered alphabetically by name. Use ``exchange`` to filter by a specific exchange.

        Args:
            limit: Number of indices to return per page (default 25, max 100).
            cursor: Opaque pagination cursor from a previous response.
            exchange: Filter by exchange MIC code, comma-separated for multiple (e.g. ``XSTO``, ``XSTO,XHEL``). Only
                active exchanges match.
            fields: Comma-separated list of fields to include in the response. Available fields: ``id``, ``name``,
                ``symbol``, ``pan_nordic``, ``exchange``.
            if_none_match: ETag value from a previous response. Returns ``304 Not Modified`` if data has not changed.
            if_modified_since: HTTP date from a previous ``Last-Modified`` header. Returns ``304 Not Modified`` if
                nothing has changed since.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Indices retrieved successfully

        Raises:
            ApiError: unauthorized forbidden - insufficient scope ``error`` is ``ProblemDetails | RawError``."""
        return unwrap(
            await self._with_raw_response.get_api_v1_indices(
                limit=limit,
                cursor=cursor,
                exchange=exchange,
                fields=fields,
                if_none_match=if_none_match,
                if_modified_since=if_modified_since,
                request_options=request_options,
            ),
        )

    async def get_api_v1_indices_by_identifier(
        self,
        identifier: str,
        *,
        if_none_match: str | None = None,
        if_modified_since: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1IndicesResponse1:
        """Returns details for a single index, including description and company count. Look up by index ID or symbol
        (case-insensitive, e.g. ``OMXS30``). Note: ``companies_count`` reflects the number of distinct companies in the
        index, which may be less than the number of index constituents when a company has multiple share classes listed.

        Args:
            identifier: Index ID or symbol (e.g. ``OMXS30``)
            if_none_match: ETag value from a previous response. Returns ``304 Not Modified`` if data has not changed.
            if_modified_since: HTTP date from a previous ``Last-Modified`` header. Returns ``304 Not Modified`` if
                nothing has changed since.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Index retrieved successfully

        Raises:
            ApiError: Stock index not found ``error`` is ``ProblemDetails | RawError``."""
        return unwrap(
            await self._with_raw_response.get_api_v1_indices_by_identifier(
                identifier,
                if_none_match=if_none_match,
                if_modified_since=if_modified_since,
                request_options=request_options,
            ),
        )

    async def get_api_v1_indices_by_identifier_companies(
        self,
        identifier: str,
        *,
        limit: int | None = None,
        cursor: str | None = None,
        if_none_match: str | None = None,
        if_modified_since: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1IndicesCompaniesResponse:
        """Returns companies that are members of a specific index, ordered alphabetically. The ``ticker`` and
        ``exchange`` shown for each company reflect its primary listing, which may differ from the listing used in this
        index (e.g. a company listed on multiple exchanges).

        Args:
            identifier: Index ID or symbol (e.g. ``OMXS30``)
            limit: Number of companies to return per page (default 25, max 100).
            cursor: Opaque pagination cursor from a previous response.
            if_none_match: ETag value from a previous response. Returns ``304 Not Modified`` if data has not changed.
            if_modified_since: HTTP date from a previous ``Last-Modified`` header. Returns ``304 Not Modified`` if
                nothing has changed since.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Index companies retrieved successfully

        Raises:
            ApiError: Stock index not found ``error`` is ``ProblemDetails | RawError``."""
        return unwrap(
            await self._with_raw_response.get_api_v1_indices_by_identifier_companies(
                identifier,
                limit=limit,
                cursor=cursor,
                if_none_match=if_none_match,
                if_modified_since=if_modified_since,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> AsyncIndicesApiWithRawResponse:
        return self._with_raw_response


class IndicesApiWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_api_v1_indices(
        self,
        *,
        limit: int | None = None,
        cursor: str | None = None,
        exchange: str | None = None,
        fields: str | None = None,
        if_none_match: str | None = None,
        if_modified_since: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1IndicesResponse, GetApiV1IndicesErrorBody]:
        """Returns stock indices, ordered alphabetically by name. Use ``exchange`` to filter by a specific exchange.

        Args:
            limit: Number of indices to return per page (default 25, max 100).
            cursor: Opaque pagination cursor from a previous response.
            exchange: Filter by exchange MIC code, comma-separated for multiple (e.g. ``XSTO``, ``XSTO,XHEL``). Only
                active exchanges match.
            fields: Comma-separated list of fields to include in the response. Available fields: ``id``, ``name``,
                ``symbol``, ``pan_nordic``, ``exchange``.
            if_none_match: ETag value from a previous response. Returns ``304 Not Modified`` if data has not changed.
            if_modified_since: HTTP date from a previous ``Last-Modified`` header. Returns ``304 Not Modified`` if
                nothing has changed since.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/indices"),
            query_params=[
                param[int | None]("limit", limit),
                param[str | None]("cursor", cursor),
                param[str | None]("exchange", exchange),
                param[str | None]("fields", fields),
            ],
            headers=[
                param[str | None]("If-None-Match", if_none_match),
                param[str | None]("If-Modified-Since", if_modified_since),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1IndicesResponse],
            error_mapper=get_api_v1_indices_error_mapper,
            request_options=request_options,
        )

    def get_api_v1_indices_by_identifier(
        self,
        identifier: str,
        *,
        if_none_match: str | None = None,
        if_modified_since: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1IndicesResponse1, GetApiV1IndicesByIdentifierErrorBody]:
        """Returns details for a single index, including description and company count. Look up by index ID or symbol
        (case-insensitive, e.g. ``OMXS30``). Note: ``companies_count`` reflects the number of distinct companies in the
        index, which may be less than the number of index constituents when a company has multiple share classes listed.

        Args:
            identifier: Index ID or symbol (e.g. ``OMXS30``)
            if_none_match: ETag value from a previous response. Returns ``304 Not Modified`` if data has not changed.
            if_modified_since: HTTP date from a previous ``Last-Modified`` header. Returns ``304 Not Modified`` if
                nothing has changed since.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/indices/{identifier}"),
            path_params=[param[str]("identifier", identifier)],
            headers=[
                param[str | None]("If-None-Match", if_none_match),
                param[str | None]("If-Modified-Since", if_modified_since),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1IndicesResponse1],
            error_mapper=get_api_v1_indices_by_identifier_error_mapper,
            request_options=request_options,
        )

    def get_api_v1_indices_by_identifier_companies(
        self,
        identifier: str,
        *,
        limit: int | None = None,
        cursor: str | None = None,
        if_none_match: str | None = None,
        if_modified_since: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1IndicesCompaniesResponse, GetApiV1IndicesByIdentifierCompaniesErrorBody]:
        """Returns companies that are members of a specific index, ordered alphabetically. The ``ticker`` and
        ``exchange`` shown for each company reflect its primary listing, which may differ from the listing used in this
        index (e.g. a company listed on multiple exchanges).

        Args:
            identifier: Index ID or symbol (e.g. ``OMXS30``)
            limit: Number of companies to return per page (default 25, max 100).
            cursor: Opaque pagination cursor from a previous response.
            if_none_match: ETag value from a previous response. Returns ``304 Not Modified`` if data has not changed.
            if_modified_since: HTTP date from a previous ``Last-Modified`` header. Returns ``304 Not Modified`` if
                nothing has changed since.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/indices/{identifier}/companies"),
            path_params=[param[str]("identifier", identifier)],
            query_params=[param[int | None]("limit", limit), param[str | None]("cursor", cursor)],
            headers=[
                param[str | None]("If-None-Match", if_none_match),
                param[str | None]("If-Modified-Since", if_modified_since),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1IndicesCompaniesResponse],
            error_mapper=get_api_v1_indices_by_identifier_companies_error_mapper,
            request_options=request_options,
        )


class AsyncIndicesApiWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_api_v1_indices(
        self,
        *,
        limit: int | None = None,
        cursor: str | None = None,
        exchange: str | None = None,
        fields: str | None = None,
        if_none_match: str | None = None,
        if_modified_since: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1IndicesResponse, GetApiV1IndicesErrorBody]:
        """Returns stock indices, ordered alphabetically by name. Use ``exchange`` to filter by a specific exchange.

        Args:
            limit: Number of indices to return per page (default 25, max 100).
            cursor: Opaque pagination cursor from a previous response.
            exchange: Filter by exchange MIC code, comma-separated for multiple (e.g. ``XSTO``, ``XSTO,XHEL``). Only
                active exchanges match.
            fields: Comma-separated list of fields to include in the response. Available fields: ``id``, ``name``,
                ``symbol``, ``pan_nordic``, ``exchange``.
            if_none_match: ETag value from a previous response. Returns ``304 Not Modified`` if data has not changed.
            if_modified_since: HTTP date from a previous ``Last-Modified`` header. Returns ``304 Not Modified`` if
                nothing has changed since.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/indices"),
            query_params=[
                param[int | None]("limit", limit),
                param[str | None]("cursor", cursor),
                param[str | None]("exchange", exchange),
                param[str | None]("fields", fields),
            ],
            headers=[
                param[str | None]("If-None-Match", if_none_match),
                param[str | None]("If-Modified-Since", if_modified_since),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1IndicesResponse],
            error_mapper=get_api_v1_indices_error_mapper,
            request_options=request_options,
        )

    async def get_api_v1_indices_by_identifier(
        self,
        identifier: str,
        *,
        if_none_match: str | None = None,
        if_modified_since: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1IndicesResponse1, GetApiV1IndicesByIdentifierErrorBody]:
        """Returns details for a single index, including description and company count. Look up by index ID or symbol
        (case-insensitive, e.g. ``OMXS30``). Note: ``companies_count`` reflects the number of distinct companies in the
        index, which may be less than the number of index constituents when a company has multiple share classes listed.

        Args:
            identifier: Index ID or symbol (e.g. ``OMXS30``)
            if_none_match: ETag value from a previous response. Returns ``304 Not Modified`` if data has not changed.
            if_modified_since: HTTP date from a previous ``Last-Modified`` header. Returns ``304 Not Modified`` if
                nothing has changed since.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/indices/{identifier}"),
            path_params=[param[str]("identifier", identifier)],
            headers=[
                param[str | None]("If-None-Match", if_none_match),
                param[str | None]("If-Modified-Since", if_modified_since),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1IndicesResponse1],
            error_mapper=get_api_v1_indices_by_identifier_error_mapper,
            request_options=request_options,
        )

    async def get_api_v1_indices_by_identifier_companies(
        self,
        identifier: str,
        *,
        limit: int | None = None,
        cursor: str | None = None,
        if_none_match: str | None = None,
        if_modified_since: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1IndicesCompaniesResponse, GetApiV1IndicesByIdentifierCompaniesErrorBody]:
        """Returns companies that are members of a specific index, ordered alphabetically. The ``ticker`` and
        ``exchange`` shown for each company reflect its primary listing, which may differ from the listing used in this
        index (e.g. a company listed on multiple exchanges).

        Args:
            identifier: Index ID or symbol (e.g. ``OMXS30``)
            limit: Number of companies to return per page (default 25, max 100).
            cursor: Opaque pagination cursor from a previous response.
            if_none_match: ETag value from a previous response. Returns ``304 Not Modified`` if data has not changed.
            if_modified_since: HTTP date from a previous ``Last-Modified`` header. Returns ``304 Not Modified`` if
                nothing has changed since.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/indices/{identifier}/companies"),
            path_params=[param[str]("identifier", identifier)],
            query_params=[param[int | None]("limit", limit), param[str | None]("cursor", cursor)],
            headers=[
                param[str | None]("If-None-Match", if_none_match),
                param[str | None]("If-Modified-Since", if_modified_since),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1IndicesCompaniesResponse],
            error_mapper=get_api_v1_indices_by_identifier_companies_error_mapper,
            request_options=request_options,
        )

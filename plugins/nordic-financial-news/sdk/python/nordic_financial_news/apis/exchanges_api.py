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
from ..errors.get_api_v1_exchanges_by_identifier_companies_error import (
    GetApiV1ExchangesByIdentifierCompaniesErrorBody,
    get_api_v1_exchanges_by_identifier_companies_error_mapper,
)
from ..errors.get_api_v1_exchanges_by_identifier_error import (
    GetApiV1ExchangesByIdentifierErrorBody,
    get_api_v1_exchanges_by_identifier_error_mapper,
)
from ..errors.get_api_v1_exchanges_error import GetApiV1ExchangesErrorBody, get_api_v1_exchanges_error_mapper
from ..models.api_v1_exchanges_companies_response import ApiV1ExchangesCompaniesResponse
from ..models.api_v1_exchanges_response import ApiV1ExchangesResponse
from ..models.api_v1_exchanges_response1 import ApiV1ExchangesResponse1
from ..server.server import Server


class ExchangesApi:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = ExchangesApiWithRawResponse(client, server, auth)

    def get_api_v1_exchanges(
        self,
        *,
        limit: int | None = None,
        cursor: str | None = None,
        country: str | None = None,
        fields: str | None = None,
        if_none_match: str | None = None,
        if_modified_since: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1ExchangesResponse:
        """Returns active Nordic stock exchanges, ordered alphabetically. Supports filtering by country.

        Args:
            limit: Number of exchanges to return per page (default 25, max 100).
            cursor: Opaque pagination cursor from a previous response.
            country: Filter by country using ISO 3166-1 alpha-2 code. Comma-separated for multiple (e.g. ``SE,NO``).
                Case-insensitive.
            fields: Comma-separated list of fields to include in the response. Available fields: ``id``, ``name``,
                ``mic_code``, ``acronym``, ``country``.
            if_none_match: ETag value from a previous response. Returns ``304 Not Modified`` if data has not changed.
            if_modified_since: HTTP date from a previous ``Last-Modified`` header. Returns ``304 Not Modified`` if
                nothing has changed since.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Exchanges retrieved successfully

        Raises:
            ApiError: unauthorized forbidden - insufficient scope ``error`` is ``ProblemDetails | RawError``."""
        return unwrap(
            self._with_raw_response.get_api_v1_exchanges(
                limit=limit,
                cursor=cursor,
                country=country,
                fields=fields,
                if_none_match=if_none_match,
                if_modified_since=if_modified_since,
                request_options=request_options,
            ),
        )

    def get_api_v1_exchanges_by_identifier(
        self,
        identifier: str,
        *,
        if_none_match: str | None = None,
        if_modified_since: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1ExchangesResponse1:
        """Returns detailed information about a stock exchange, including currency, timezone, and location. Look up by
        exchange ID (e.g. ``exch_nasdaq1``) or MIC code (e.g. ``XSTO``).

        Args:
            identifier: Exchange ID or MIC code (e.g. ``XSTO``)
            if_none_match: ETag value from a previous response. Returns ``304 Not Modified`` if data has not changed.
            if_modified_since: HTTP date from a previous ``Last-Modified`` header. Returns ``304 Not Modified`` if
                nothing has changed since.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Exchange retrieved successfully

        Raises:
            ApiError: Exchange not found ``error`` is ``ProblemDetails | RawError``."""
        return unwrap(
            self._with_raw_response.get_api_v1_exchanges_by_identifier(
                identifier,
                if_none_match=if_none_match,
                if_modified_since=if_modified_since,
                request_options=request_options,
            ),
        )

    def get_api_v1_exchanges_by_identifier_companies(
        self,
        identifier: str,
        *,
        limit: int | None = None,
        cursor: str | None = None,
        if_none_match: str | None = None,
        if_modified_since: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1ExchangesCompaniesResponse:
        """Returns companies listed on a specific exchange, ordered alphabetically. The ``ticker`` and ``exchange``
        shown for each company reflect its primary listing, which may be on a different exchange if the company is
        listed on multiple exchanges.

        Args:
            identifier: Exchange ID or MIC code (e.g. ``XSTO``)
            limit: Number of companies to return per page (default 25, max 100).
            cursor: Opaque pagination cursor from a previous response.
            if_none_match: ETag value from a previous response. Returns ``304 Not Modified`` if data has not changed.
            if_modified_since: HTTP date from a previous ``Last-Modified`` header. Returns ``304 Not Modified`` if
                nothing has changed since.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Exchange companies retrieved successfully

        Raises:
            ApiError: Exchange not found ``error`` is ``ProblemDetails | RawError``."""
        return unwrap(
            self._with_raw_response.get_api_v1_exchanges_by_identifier_companies(
                identifier,
                limit=limit,
                cursor=cursor,
                if_none_match=if_none_match,
                if_modified_since=if_modified_since,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> ExchangesApiWithRawResponse:
        return self._with_raw_response


class AsyncExchangesApi:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncExchangesApiWithRawResponse(client, server, auth)

    async def get_api_v1_exchanges(
        self,
        *,
        limit: int | None = None,
        cursor: str | None = None,
        country: str | None = None,
        fields: str | None = None,
        if_none_match: str | None = None,
        if_modified_since: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1ExchangesResponse:
        """Returns active Nordic stock exchanges, ordered alphabetically. Supports filtering by country.

        Args:
            limit: Number of exchanges to return per page (default 25, max 100).
            cursor: Opaque pagination cursor from a previous response.
            country: Filter by country using ISO 3166-1 alpha-2 code. Comma-separated for multiple (e.g. ``SE,NO``).
                Case-insensitive.
            fields: Comma-separated list of fields to include in the response. Available fields: ``id``, ``name``,
                ``mic_code``, ``acronym``, ``country``.
            if_none_match: ETag value from a previous response. Returns ``304 Not Modified`` if data has not changed.
            if_modified_since: HTTP date from a previous ``Last-Modified`` header. Returns ``304 Not Modified`` if
                nothing has changed since.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Exchanges retrieved successfully

        Raises:
            ApiError: unauthorized forbidden - insufficient scope ``error`` is ``ProblemDetails | RawError``."""
        return unwrap(
            await self._with_raw_response.get_api_v1_exchanges(
                limit=limit,
                cursor=cursor,
                country=country,
                fields=fields,
                if_none_match=if_none_match,
                if_modified_since=if_modified_since,
                request_options=request_options,
            ),
        )

    async def get_api_v1_exchanges_by_identifier(
        self,
        identifier: str,
        *,
        if_none_match: str | None = None,
        if_modified_since: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1ExchangesResponse1:
        """Returns detailed information about a stock exchange, including currency, timezone, and location. Look up by
        exchange ID (e.g. ``exch_nasdaq1``) or MIC code (e.g. ``XSTO``).

        Args:
            identifier: Exchange ID or MIC code (e.g. ``XSTO``)
            if_none_match: ETag value from a previous response. Returns ``304 Not Modified`` if data has not changed.
            if_modified_since: HTTP date from a previous ``Last-Modified`` header. Returns ``304 Not Modified`` if
                nothing has changed since.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Exchange retrieved successfully

        Raises:
            ApiError: Exchange not found ``error`` is ``ProblemDetails | RawError``."""
        return unwrap(
            await self._with_raw_response.get_api_v1_exchanges_by_identifier(
                identifier,
                if_none_match=if_none_match,
                if_modified_since=if_modified_since,
                request_options=request_options,
            ),
        )

    async def get_api_v1_exchanges_by_identifier_companies(
        self,
        identifier: str,
        *,
        limit: int | None = None,
        cursor: str | None = None,
        if_none_match: str | None = None,
        if_modified_since: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1ExchangesCompaniesResponse:
        """Returns companies listed on a specific exchange, ordered alphabetically. The ``ticker`` and ``exchange``
        shown for each company reflect its primary listing, which may be on a different exchange if the company is
        listed on multiple exchanges.

        Args:
            identifier: Exchange ID or MIC code (e.g. ``XSTO``)
            limit: Number of companies to return per page (default 25, max 100).
            cursor: Opaque pagination cursor from a previous response.
            if_none_match: ETag value from a previous response. Returns ``304 Not Modified`` if data has not changed.
            if_modified_since: HTTP date from a previous ``Last-Modified`` header. Returns ``304 Not Modified`` if
                nothing has changed since.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Exchange companies retrieved successfully

        Raises:
            ApiError: Exchange not found ``error`` is ``ProblemDetails | RawError``."""
        return unwrap(
            await self._with_raw_response.get_api_v1_exchanges_by_identifier_companies(
                identifier,
                limit=limit,
                cursor=cursor,
                if_none_match=if_none_match,
                if_modified_since=if_modified_since,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> AsyncExchangesApiWithRawResponse:
        return self._with_raw_response


class ExchangesApiWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_api_v1_exchanges(
        self,
        *,
        limit: int | None = None,
        cursor: str | None = None,
        country: str | None = None,
        fields: str | None = None,
        if_none_match: str | None = None,
        if_modified_since: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1ExchangesResponse, GetApiV1ExchangesErrorBody]:
        """Returns active Nordic stock exchanges, ordered alphabetically. Supports filtering by country.

        Args:
            limit: Number of exchanges to return per page (default 25, max 100).
            cursor: Opaque pagination cursor from a previous response.
            country: Filter by country using ISO 3166-1 alpha-2 code. Comma-separated for multiple (e.g. ``SE,NO``).
                Case-insensitive.
            fields: Comma-separated list of fields to include in the response. Available fields: ``id``, ``name``,
                ``mic_code``, ``acronym``, ``country``.
            if_none_match: ETag value from a previous response. Returns ``304 Not Modified`` if data has not changed.
            if_modified_since: HTTP date from a previous ``Last-Modified`` header. Returns ``304 Not Modified`` if
                nothing has changed since.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/exchanges"),
            query_params=[
                param[int | None]("limit", limit),
                param[str | None]("cursor", cursor),
                param[str | None]("country", country),
                param[str | None]("fields", fields),
            ],
            headers=[
                param[str | None]("If-None-Match", if_none_match),
                param[str | None]("If-Modified-Since", if_modified_since),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1ExchangesResponse],
            error_mapper=get_api_v1_exchanges_error_mapper,
            request_options=request_options,
        )

    def get_api_v1_exchanges_by_identifier(
        self,
        identifier: str,
        *,
        if_none_match: str | None = None,
        if_modified_since: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1ExchangesResponse1, GetApiV1ExchangesByIdentifierErrorBody]:
        """Returns detailed information about a stock exchange, including currency, timezone, and location. Look up by
        exchange ID (e.g. ``exch_nasdaq1``) or MIC code (e.g. ``XSTO``).

        Args:
            identifier: Exchange ID or MIC code (e.g. ``XSTO``)
            if_none_match: ETag value from a previous response. Returns ``304 Not Modified`` if data has not changed.
            if_modified_since: HTTP date from a previous ``Last-Modified`` header. Returns ``304 Not Modified`` if
                nothing has changed since.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/exchanges/{identifier}"),
            path_params=[param[str]("identifier", identifier)],
            headers=[
                param[str | None]("If-None-Match", if_none_match),
                param[str | None]("If-Modified-Since", if_modified_since),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1ExchangesResponse1],
            error_mapper=get_api_v1_exchanges_by_identifier_error_mapper,
            request_options=request_options,
        )

    def get_api_v1_exchanges_by_identifier_companies(
        self,
        identifier: str,
        *,
        limit: int | None = None,
        cursor: str | None = None,
        if_none_match: str | None = None,
        if_modified_since: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1ExchangesCompaniesResponse, GetApiV1ExchangesByIdentifierCompaniesErrorBody]:
        """Returns companies listed on a specific exchange, ordered alphabetically. The ``ticker`` and ``exchange``
        shown for each company reflect its primary listing, which may be on a different exchange if the company is
        listed on multiple exchanges.

        Args:
            identifier: Exchange ID or MIC code (e.g. ``XSTO``)
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
            url_template=self._server.default("/api/v1/exchanges/{identifier}/companies"),
            path_params=[param[str]("identifier", identifier)],
            query_params=[param[int | None]("limit", limit), param[str | None]("cursor", cursor)],
            headers=[
                param[str | None]("If-None-Match", if_none_match),
                param[str | None]("If-Modified-Since", if_modified_since),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1ExchangesCompaniesResponse],
            error_mapper=get_api_v1_exchanges_by_identifier_companies_error_mapper,
            request_options=request_options,
        )


class AsyncExchangesApiWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_api_v1_exchanges(
        self,
        *,
        limit: int | None = None,
        cursor: str | None = None,
        country: str | None = None,
        fields: str | None = None,
        if_none_match: str | None = None,
        if_modified_since: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1ExchangesResponse, GetApiV1ExchangesErrorBody]:
        """Returns active Nordic stock exchanges, ordered alphabetically. Supports filtering by country.

        Args:
            limit: Number of exchanges to return per page (default 25, max 100).
            cursor: Opaque pagination cursor from a previous response.
            country: Filter by country using ISO 3166-1 alpha-2 code. Comma-separated for multiple (e.g. ``SE,NO``).
                Case-insensitive.
            fields: Comma-separated list of fields to include in the response. Available fields: ``id``, ``name``,
                ``mic_code``, ``acronym``, ``country``.
            if_none_match: ETag value from a previous response. Returns ``304 Not Modified`` if data has not changed.
            if_modified_since: HTTP date from a previous ``Last-Modified`` header. Returns ``304 Not Modified`` if
                nothing has changed since.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/exchanges"),
            query_params=[
                param[int | None]("limit", limit),
                param[str | None]("cursor", cursor),
                param[str | None]("country", country),
                param[str | None]("fields", fields),
            ],
            headers=[
                param[str | None]("If-None-Match", if_none_match),
                param[str | None]("If-Modified-Since", if_modified_since),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1ExchangesResponse],
            error_mapper=get_api_v1_exchanges_error_mapper,
            request_options=request_options,
        )

    async def get_api_v1_exchanges_by_identifier(
        self,
        identifier: str,
        *,
        if_none_match: str | None = None,
        if_modified_since: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1ExchangesResponse1, GetApiV1ExchangesByIdentifierErrorBody]:
        """Returns detailed information about a stock exchange, including currency, timezone, and location. Look up by
        exchange ID (e.g. ``exch_nasdaq1``) or MIC code (e.g. ``XSTO``).

        Args:
            identifier: Exchange ID or MIC code (e.g. ``XSTO``)
            if_none_match: ETag value from a previous response. Returns ``304 Not Modified`` if data has not changed.
            if_modified_since: HTTP date from a previous ``Last-Modified`` header. Returns ``304 Not Modified`` if
                nothing has changed since.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/exchanges/{identifier}"),
            path_params=[param[str]("identifier", identifier)],
            headers=[
                param[str | None]("If-None-Match", if_none_match),
                param[str | None]("If-Modified-Since", if_modified_since),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1ExchangesResponse1],
            error_mapper=get_api_v1_exchanges_by_identifier_error_mapper,
            request_options=request_options,
        )

    async def get_api_v1_exchanges_by_identifier_companies(
        self,
        identifier: str,
        *,
        limit: int | None = None,
        cursor: str | None = None,
        if_none_match: str | None = None,
        if_modified_since: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1ExchangesCompaniesResponse, GetApiV1ExchangesByIdentifierCompaniesErrorBody]:
        """Returns companies listed on a specific exchange, ordered alphabetically. The ``ticker`` and ``exchange``
        shown for each company reflect its primary listing, which may be on a different exchange if the company is
        listed on multiple exchanges.

        Args:
            identifier: Exchange ID or MIC code (e.g. ``XSTO``)
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
            url_template=self._server.default("/api/v1/exchanges/{identifier}/companies"),
            path_params=[param[str]("identifier", identifier)],
            query_params=[param[int | None]("limit", limit), param[str | None]("cursor", cursor)],
            headers=[
                param[str | None]("If-None-Match", if_none_match),
                param[str | None]("If-Modified-Since", if_modified_since),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1ExchangesCompaniesResponse],
            error_mapper=get_api_v1_exchanges_by_identifier_companies_error_mapper,
            request_options=request_options,
        )

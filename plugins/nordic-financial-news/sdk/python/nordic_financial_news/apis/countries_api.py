from __future__ import annotations

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    RawClient,
    RawError,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_json_decoder,
    json_decoder,
    param,
    raw_error_response,
    unwrap,
)
from ..errors.get_api_v1_countries_by_identifier_error import (
    GetApiV1CountriesByIdentifierErrorBody,
    get_api_v1_countries_by_identifier_error_mapper,
)
from ..models.api_v1_countries_response import ApiV1CountriesResponse
from ..models.api_v1_countries_response1 import ApiV1CountriesResponse1
from ..server.server import Server


class CountriesApi:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = CountriesApiWithRawResponse(client, server, auth)

    def get_api_v1_countries(
        self,
        *,
        limit: int | None = None,
        cursor: str | None = None,
        fields: str | None = None,
        if_none_match: str | None = None,
        if_modified_since: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1CountriesResponse:
        """Returns the Nordic countries covered by the API, ordered alphabetically. Use the country ``id`` or
        ``iso2_code`` to filter articles, stories, and companies by country.

        Args:
            limit: Number of countries to return per page (default 25, max 100).
            cursor: Opaque pagination cursor from a previous response.
            fields: Comma-separated list of fields to include. Available fields: ``id``, ``name``, ``iso2_code``.
            if_none_match: ETag value from a previous response. Returns ``304 Not Modified`` if data has not changed.
            if_modified_since: HTTP date from a previous ``Last-Modified`` header. Returns ``304 Not Modified`` if
                nothing has changed since.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Countries retrieved successfully

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.get_api_v1_countries(
                limit=limit,
                cursor=cursor,
                fields=fields,
                if_none_match=if_none_match,
                if_modified_since=if_modified_since,
                request_options=request_options,
            ),
        )

    def get_api_v1_countries_by_identifier(
        self,
        identifier: str,
        *,
        if_none_match: str | None = None,
        if_modified_since: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1CountriesResponse1:
        """Returns details for a single country, including its stock exchanges. Look up by country ID or ISO 3166-1
        alpha-2 code (e.g. ``SE``).

        Args:
            identifier: Country ID, ISO 3166-1 alpha-2 code (e.g. ``SE``), or slug (e.g. ``sweden``)
            if_none_match: ETag value from a previous response. Returns ``304 Not Modified`` if data has not changed.
            if_modified_since: HTTP date from a previous ``Last-Modified`` header. Returns ``304 Not Modified`` if
                nothing has changed since.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Country retrieved successfully

        Raises:
            ApiError: Country not found ``error`` is ``ProblemDetails | RawError``."""
        return unwrap(
            self._with_raw_response.get_api_v1_countries_by_identifier(
                identifier,
                if_none_match=if_none_match,
                if_modified_since=if_modified_since,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> CountriesApiWithRawResponse:
        return self._with_raw_response


class AsyncCountriesApi:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncCountriesApiWithRawResponse(client, server, auth)

    async def get_api_v1_countries(
        self,
        *,
        limit: int | None = None,
        cursor: str | None = None,
        fields: str | None = None,
        if_none_match: str | None = None,
        if_modified_since: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1CountriesResponse:
        """Returns the Nordic countries covered by the API, ordered alphabetically. Use the country ``id`` or
        ``iso2_code`` to filter articles, stories, and companies by country.

        Args:
            limit: Number of countries to return per page (default 25, max 100).
            cursor: Opaque pagination cursor from a previous response.
            fields: Comma-separated list of fields to include. Available fields: ``id``, ``name``, ``iso2_code``.
            if_none_match: ETag value from a previous response. Returns ``304 Not Modified`` if data has not changed.
            if_modified_since: HTTP date from a previous ``Last-Modified`` header. Returns ``304 Not Modified`` if
                nothing has changed since.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Countries retrieved successfully

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.get_api_v1_countries(
                limit=limit,
                cursor=cursor,
                fields=fields,
                if_none_match=if_none_match,
                if_modified_since=if_modified_since,
                request_options=request_options,
            ),
        )

    async def get_api_v1_countries_by_identifier(
        self,
        identifier: str,
        *,
        if_none_match: str | None = None,
        if_modified_since: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1CountriesResponse1:
        """Returns details for a single country, including its stock exchanges. Look up by country ID or ISO 3166-1
        alpha-2 code (e.g. ``SE``).

        Args:
            identifier: Country ID, ISO 3166-1 alpha-2 code (e.g. ``SE``), or slug (e.g. ``sweden``)
            if_none_match: ETag value from a previous response. Returns ``304 Not Modified`` if data has not changed.
            if_modified_since: HTTP date from a previous ``Last-Modified`` header. Returns ``304 Not Modified`` if
                nothing has changed since.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Country retrieved successfully

        Raises:
            ApiError: Country not found ``error`` is ``ProblemDetails | RawError``."""
        return unwrap(
            await self._with_raw_response.get_api_v1_countries_by_identifier(
                identifier,
                if_none_match=if_none_match,
                if_modified_since=if_modified_since,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> AsyncCountriesApiWithRawResponse:
        return self._with_raw_response


class CountriesApiWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_api_v1_countries(
        self,
        *,
        limit: int | None = None,
        cursor: str | None = None,
        fields: str | None = None,
        if_none_match: str | None = None,
        if_modified_since: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1CountriesResponse, RawError]:
        """Returns the Nordic countries covered by the API, ordered alphabetically. Use the country ``id`` or
        ``iso2_code`` to filter articles, stories, and companies by country.

        Args:
            limit: Number of countries to return per page (default 25, max 100).
            cursor: Opaque pagination cursor from a previous response.
            fields: Comma-separated list of fields to include. Available fields: ``id``, ``name``, ``iso2_code``.
            if_none_match: ETag value from a previous response. Returns ``304 Not Modified`` if data has not changed.
            if_modified_since: HTTP date from a previous ``Last-Modified`` header. Returns ``304 Not Modified`` if
                nothing has changed since.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/countries"),
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
            decoder=json_decoder[ApiV1CountriesResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def get_api_v1_countries_by_identifier(
        self,
        identifier: str,
        *,
        if_none_match: str | None = None,
        if_modified_since: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1CountriesResponse1, GetApiV1CountriesByIdentifierErrorBody]:
        """Returns details for a single country, including its stock exchanges. Look up by country ID or ISO 3166-1
        alpha-2 code (e.g. ``SE``).

        Args:
            identifier: Country ID, ISO 3166-1 alpha-2 code (e.g. ``SE``), or slug (e.g. ``sweden``)
            if_none_match: ETag value from a previous response. Returns ``304 Not Modified`` if data has not changed.
            if_modified_since: HTTP date from a previous ``Last-Modified`` header. Returns ``304 Not Modified`` if
                nothing has changed since.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/countries/{identifier}"),
            path_params=[param[str]("identifier", identifier)],
            headers=[
                param[str | None]("If-None-Match", if_none_match),
                param[str | None]("If-Modified-Since", if_modified_since),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1CountriesResponse1],
            error_mapper=get_api_v1_countries_by_identifier_error_mapper,
            request_options=request_options,
        )


class AsyncCountriesApiWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_api_v1_countries(
        self,
        *,
        limit: int | None = None,
        cursor: str | None = None,
        fields: str | None = None,
        if_none_match: str | None = None,
        if_modified_since: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1CountriesResponse, RawError]:
        """Returns the Nordic countries covered by the API, ordered alphabetically. Use the country ``id`` or
        ``iso2_code`` to filter articles, stories, and companies by country.

        Args:
            limit: Number of countries to return per page (default 25, max 100).
            cursor: Opaque pagination cursor from a previous response.
            fields: Comma-separated list of fields to include. Available fields: ``id``, ``name``, ``iso2_code``.
            if_none_match: ETag value from a previous response. Returns ``304 Not Modified`` if data has not changed.
            if_modified_since: HTTP date from a previous ``Last-Modified`` header. Returns ``304 Not Modified`` if
                nothing has changed since.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/countries"),
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
            decoder=async_json_decoder[ApiV1CountriesResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def get_api_v1_countries_by_identifier(
        self,
        identifier: str,
        *,
        if_none_match: str | None = None,
        if_modified_since: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1CountriesResponse1, GetApiV1CountriesByIdentifierErrorBody]:
        """Returns details for a single country, including its stock exchanges. Look up by country ID or ISO 3166-1
        alpha-2 code (e.g. ``SE``).

        Args:
            identifier: Country ID, ISO 3166-1 alpha-2 code (e.g. ``SE``), or slug (e.g. ``sweden``)
            if_none_match: ETag value from a previous response. Returns ``304 Not Modified`` if data has not changed.
            if_modified_since: HTTP date from a previous ``Last-Modified`` header. Returns ``304 Not Modified`` if
                nothing has changed since.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/countries/{identifier}"),
            path_params=[param[str]("identifier", identifier)],
            headers=[
                param[str | None]("If-None-Match", if_none_match),
                param[str | None]("If-Modified-Since", if_modified_since),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1CountriesResponse1],
            error_mapper=get_api_v1_countries_by_identifier_error_mapper,
            request_options=request_options,
        )

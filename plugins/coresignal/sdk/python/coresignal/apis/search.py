from __future__ import annotations

from typing import Any
from uuid import UUID, uuid4

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
    json_body,
    json_decoder,
    param,
    raw_error_response,
    unwrap,
)
from ..errors.search_companies_by_filter_error import (
    SearchCompaniesByFilterErrorBody,
    search_companies_by_filter_error_mapper,
)
from ..models.company_filter import CompanyFilter, CompanyFilterDict
from ..server.server import Server


class Search:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = SearchWithRawResponse(client, server, auth)

    def search_companies_by_es_dsl(
        self, body: Any, *, request_options: RequestOptionsOrDict | None = None
    ) -> list[int]:
        """Search company records using a full Elasticsearch DSL query body.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Array of matching company record IDs

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.search_companies_by_es_dsl(body, request_options=request_options))

    def search_companies_by_filter(
        self, body: CompanyFilter | CompanyFilterDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> list[int]:
        """Search company records using a structured filter object. Returns matching record IDs.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Array of matching company record IDs

        Raises:
            ApiError: Missing or invalid apikey header API credits exhausted for the account Rate limit exceeded
                ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.search_companies_by_filter(body, request_options=request_options))

    @property
    def with_raw_response(self) -> SearchWithRawResponse:
        return self._with_raw_response


class AsyncSearch:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncSearchWithRawResponse(client, server, auth)

    async def search_companies_by_es_dsl(
        self, body: Any, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> list[int]:
        """Search company records using a full Elasticsearch DSL query body.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Array of matching company record IDs

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.search_companies_by_es_dsl(body, request_options=request_options))

    async def search_companies_by_filter(
        self, body: CompanyFilter | CompanyFilterDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> list[int]:
        """Search company records using a structured filter object. Returns matching record IDs.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Array of matching company record IDs

        Raises:
            ApiError: Missing or invalid apikey header API credits exhausted for the account Rate limit exceeded
                ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.search_companies_by_filter(body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncSearchWithRawResponse:
        return self._with_raw_response


class SearchWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def search_companies_by_es_dsl(
        self, body: Any, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[list[int], RawError]:
        """Search company records using a full Elasticsearch DSL query body.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/search/es_dsl"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[Any](body),
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[list[int]],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def search_companies_by_filter(
        self, body: CompanyFilter | CompanyFilterDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[list[int], SearchCompaniesByFilterErrorBody]:
        """Search company records using a structured filter object. Returns matching record IDs.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/search/filter"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CompanyFilter | CompanyFilterDict](body),
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[list[int]],
            error_mapper=search_companies_by_filter_error_mapper,
            request_options=request_options,
        )


class AsyncSearchWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def search_companies_by_es_dsl(
        self, body: Any, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[list[int], RawError]:
        """Search company records using a full Elasticsearch DSL query body.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/search/es_dsl"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[Any](body),
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[list[int]],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def search_companies_by_filter(
        self, body: CompanyFilter | CompanyFilterDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[list[int], SearchCompaniesByFilterErrorBody]:
        """Search company records using a structured filter object. Returns matching record IDs.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/search/filter"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CompanyFilter | CompanyFilterDict](body),
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[list[int]],
            error_mapper=search_companies_by_filter_error_mapper,
            request_options=request_options,
        )

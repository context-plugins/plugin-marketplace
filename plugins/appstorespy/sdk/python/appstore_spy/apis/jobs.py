from __future__ import annotations

from uuid import UUID, uuid4

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    RawClient,
    RequestOptionsOrDict,
    RFC3339DateTime,
    SecuredRawResponse,
    async_json_decoder,
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.create_search_jobs_search_post_error import (
    CreateSearchJobsSearchPostErrorBody,
    create_search_jobs_search_post_error_mapper,
)
from ..errors.get_search_jobs_search_get_error import (
    GetSearchJobsSearchGetErrorBody,
    get_search_jobs_search_get_error_mapper,
)
from ..models.enums.store import StoreOrStr
from ..models.search_create import SearchCreate, SearchCreateDict
from ..models.search_result import SearchResult
from ..server.server import Server


class Jobs:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = JobsWithRawResponse(client, server, auth)

    def create_search_jobs_search_post(
        self, body: SearchCreate | SearchCreateDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> SearchResult:
        """Submits a keyword crawl job for one search term in one store and country. Returns the created job
        immediately; poll ``GET /jobs/search`` with the returned id to collect the results.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error The ``API-KEY`` header is missing or holds an unknown key Nothing was charged:
                the credit balance does not cover this call's price (with X-Cost and X-Remaining-Credits), or the paid
                subscription is not active and must be renewed ``error`` is ``JobsSearch401Error1 | str |
                HttpValidationError | RawError``."""
        return unwrap(self._with_raw_response.create_search_jobs_search_post(body, request_options=request_options))

    def get_search_jobs_search_get(
        self,
        *,
        store: StoreOrStr | None = None,
        term: str | None = None,
        id_user: str | None = None,
        country: str | None = None,
        search_id: str | None = None,
        updated_gte: RFC3339DateTime | None = None,
        updated_lte: RFC3339DateTime | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> list[SearchResult]:
        """Lists the keyword crawl jobs you have submitted, filtered by store, term, country or last-updated window.
        Each result carries the job's current state and, once finished, its results.

        Args:
            store: Value sent with the request.
            term: Value sent with the request.
            id_user: Value sent with the request.
            country: Value sent with the request.
            search_id: Value sent with the request.
            updated_gte: Value sent with the request.
            updated_lte: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error The ``API-KEY`` header is missing or holds an unknown key Nothing was charged:
                the credit balance does not cover this call's price (with X-Cost and X-Remaining-Credits), or the paid
                subscription is not active and must be renewed ``error`` is ``JobsSearch401Error1 | str |
                HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.get_search_jobs_search_get(
                store=store,
                term=term,
                id_user=id_user,
                country=country,
                search_id=search_id,
                updated_gte=updated_gte,
                updated_lte=updated_lte,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> JobsWithRawResponse:
        return self._with_raw_response


class AsyncJobs:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncJobsWithRawResponse(client, server, auth)

    async def create_search_jobs_search_post(
        self, body: SearchCreate | SearchCreateDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> SearchResult:
        """Submits a keyword crawl job for one search term in one store and country. Returns the created job
        immediately; poll ``GET /jobs/search`` with the returned id to collect the results.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error The ``API-KEY`` header is missing or holds an unknown key Nothing was charged:
                the credit balance does not cover this call's price (with X-Cost and X-Remaining-Credits), or the paid
                subscription is not active and must be renewed ``error`` is ``JobsSearch401Error1 | str |
                HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.create_search_jobs_search_post(body, request_options=request_options)
        )

    async def get_search_jobs_search_get(
        self,
        *,
        store: StoreOrStr | None = None,
        term: str | None = None,
        id_user: str | None = None,
        country: str | None = None,
        search_id: str | None = None,
        updated_gte: RFC3339DateTime | None = None,
        updated_lte: RFC3339DateTime | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> list[SearchResult]:
        """Lists the keyword crawl jobs you have submitted, filtered by store, term, country or last-updated window.
        Each result carries the job's current state and, once finished, its results.

        Args:
            store: Value sent with the request.
            term: Value sent with the request.
            id_user: Value sent with the request.
            country: Value sent with the request.
            search_id: Value sent with the request.
            updated_gte: Value sent with the request.
            updated_lte: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error The ``API-KEY`` header is missing or holds an unknown key Nothing was charged:
                the credit balance does not cover this call's price (with X-Cost and X-Remaining-Credits), or the paid
                subscription is not active and must be renewed ``error`` is ``JobsSearch401Error1 | str |
                HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.get_search_jobs_search_get(
                store=store,
                term=term,
                id_user=id_user,
                country=country,
                search_id=search_id,
                updated_gte=updated_gte,
                updated_lte=updated_lte,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> AsyncJobsWithRawResponse:
        return self._with_raw_response


class JobsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_search_jobs_search_post(
        self, body: SearchCreate | SearchCreateDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[SearchResult, CreateSearchJobsSearchPostErrorBody]:
        """Submits a keyword crawl job for one search term in one store and country. Returns the created job
        immediately; poll ``GET /jobs/search`` with the returned id to collect the results.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/jobs/search"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[SearchCreate | SearchCreateDict](body),
            auth_scheme=self._auth.api_key_header,
            decoder=json_decoder[SearchResult],
            error_mapper=create_search_jobs_search_post_error_mapper,
            request_options=request_options,
        )

    def get_search_jobs_search_get(
        self,
        *,
        store: StoreOrStr | None = None,
        term: str | None = None,
        id_user: str | None = None,
        country: str | None = None,
        search_id: str | None = None,
        updated_gte: RFC3339DateTime | None = None,
        updated_lte: RFC3339DateTime | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[list[SearchResult], GetSearchJobsSearchGetErrorBody]:
        """Lists the keyword crawl jobs you have submitted, filtered by store, term, country or last-updated window.
        Each result carries the job's current state and, once finished, its results.

        Args:
            store: Value sent with the request.
            term: Value sent with the request.
            id_user: Value sent with the request.
            country: Value sent with the request.
            search_id: Value sent with the request.
            updated_gte: Value sent with the request.
            updated_lte: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/jobs/search"),
            query_params=[
                param[StoreOrStr | None]("store", store),
                param[str | None]("term", term),
                param[str | None]("id_user", id_user),
                param[str | None]("country", country),
                param[str | None]("search_id", search_id),
                param[RFC3339DateTime | None]("updated_gte", updated_gte),
                param[RFC3339DateTime | None]("updated_lte", updated_lte),
            ],
            auth_scheme=self._auth.api_key_header,
            decoder=json_decoder[list[SearchResult]],
            error_mapper=get_search_jobs_search_get_error_mapper,
            request_options=request_options,
        )


class AsyncJobsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_search_jobs_search_post(
        self, body: SearchCreate | SearchCreateDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[SearchResult, CreateSearchJobsSearchPostErrorBody]:
        """Submits a keyword crawl job for one search term in one store and country. Returns the created job
        immediately; poll ``GET /jobs/search`` with the returned id to collect the results.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/jobs/search"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[SearchCreate | SearchCreateDict](body),
            auth_scheme=self._auth.api_key_header,
            decoder=async_json_decoder[SearchResult],
            error_mapper=create_search_jobs_search_post_error_mapper,
            request_options=request_options,
        )

    async def get_search_jobs_search_get(
        self,
        *,
        store: StoreOrStr | None = None,
        term: str | None = None,
        id_user: str | None = None,
        country: str | None = None,
        search_id: str | None = None,
        updated_gte: RFC3339DateTime | None = None,
        updated_lte: RFC3339DateTime | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[list[SearchResult], GetSearchJobsSearchGetErrorBody]:
        """Lists the keyword crawl jobs you have submitted, filtered by store, term, country or last-updated window.
        Each result carries the job's current state and, once finished, its results.

        Args:
            store: Value sent with the request.
            term: Value sent with the request.
            id_user: Value sent with the request.
            country: Value sent with the request.
            search_id: Value sent with the request.
            updated_gte: Value sent with the request.
            updated_lte: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/jobs/search"),
            query_params=[
                param[StoreOrStr | None]("store", store),
                param[str | None]("term", term),
                param[str | None]("id_user", id_user),
                param[str | None]("country", country),
                param[str | None]("search_id", search_id),
                param[RFC3339DateTime | None]("updated_gte", updated_gte),
                param[RFC3339DateTime | None]("updated_lte", updated_lte),
            ],
            auth_scheme=self._auth.api_key_header,
            decoder=async_json_decoder[list[SearchResult]],
            error_mapper=get_search_jobs_search_get_error_mapper,
            request_options=request_options,
        )

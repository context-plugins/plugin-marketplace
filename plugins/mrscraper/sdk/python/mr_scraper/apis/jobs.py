from __future__ import annotations

from uuid import UUID, uuid4

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    AnySchemes,
    ApiResult,
    AsyncAnySchemes,
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
from ..models.job_job import JobJob, JobJobDict
from ..models.jobs_response import JobsResponse
from ..models.jobs_response1 import JobsResponse1
from ..server.server import Server


class Jobs:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = JobsWithRawResponse(client, server, auth)

    def get_jobs(
        self,
        *,
        page_size: int | None = None,
        page: int | None = None,
        sort_field: str | None = None,
        sort_order: str | None = None,
        search: str | None = None,
        start_at: str | None = None,
        end_at: str | None = None,
        date_range_column: str | None = None,
        name: str | None = None,
        status: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> JobsResponse:
        """Send a ``GET`` request.

        Args:
            page_size: Page size
            page: Page number
            sort_field: Sort field
            sort_order: Sort order (ASC/DESC)
            search: Search term
            start_at: Start date for created_at filter
            end_at: End date for created_at filter
            date_range_column: Custom date range column
            name: Filter by name
            status: Filter by status
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Paginated jobs

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.get_jobs(
                page_size=page_size,
                page=page,
                sort_field=sort_field,
                sort_order=sort_order,
                search=search,
                start_at=start_at,
                end_at=end_at,
                date_range_column=date_range_column,
                name=name,
                status=status,
                request_options=request_options,
            ),
        )

    def get_jobs_by_id(self, id_: int, *, request_options: RequestOptionsOrDict | None = None) -> JobsResponse1:
        """Send a ``GET`` request.

        Args:
            id_: Job ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Job retrieved

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.get_jobs_by_id(id_, request_options=request_options))

    def post_jobs(
        self, body: JobJob | JobJobDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> JobsResponse1:
        """Send a ``POST`` request.

        Args:
            body: Job object (ID will be auto-generated, do not include)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Job created

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.post_jobs(body, request_options=request_options))

    def put_jobs_by_id(
        self, id_: int, body: JobJob | JobJobDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> JobsResponse1:
        """Send a ``PUT`` request.

        Args:
            id_: Job ID
            body: Job object
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Job updated

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.put_jobs_by_id(id_, body, request_options=request_options))

    @property
    def with_raw_response(self) -> JobsWithRawResponse:
        return self._with_raw_response


class AsyncJobs:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncJobsWithRawResponse(client, server, auth)

    async def get_jobs(
        self,
        *,
        page_size: int | None = None,
        page: int | None = None,
        sort_field: str | None = None,
        sort_order: str | None = None,
        search: str | None = None,
        start_at: str | None = None,
        end_at: str | None = None,
        date_range_column: str | None = None,
        name: str | None = None,
        status: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> JobsResponse:
        """Send a ``GET`` request.

        Args:
            page_size: Page size
            page: Page number
            sort_field: Sort field
            sort_order: Sort order (ASC/DESC)
            search: Search term
            start_at: Start date for created_at filter
            end_at: End date for created_at filter
            date_range_column: Custom date range column
            name: Filter by name
            status: Filter by status
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Paginated jobs

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.get_jobs(
                page_size=page_size,
                page=page,
                sort_field=sort_field,
                sort_order=sort_order,
                search=search,
                start_at=start_at,
                end_at=end_at,
                date_range_column=date_range_column,
                name=name,
                status=status,
                request_options=request_options,
            ),
        )

    async def get_jobs_by_id(
        self, id_: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> JobsResponse1:
        """Send a ``GET`` request.

        Args:
            id_: Job ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Job retrieved

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.get_jobs_by_id(id_, request_options=request_options))

    async def post_jobs(
        self, body: JobJob | JobJobDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> JobsResponse1:
        """Send a ``POST`` request.

        Args:
            body: Job object (ID will be auto-generated, do not include)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Job created

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.post_jobs(body, request_options=request_options))

    async def put_jobs_by_id(
        self, id_: int, body: JobJob | JobJobDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> JobsResponse1:
        """Send a ``PUT`` request.

        Args:
            id_: Job ID
            body: Job object
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Job updated

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.put_jobs_by_id(id_, body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncJobsWithRawResponse:
        return self._with_raw_response


class JobsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_jobs(
        self,
        *,
        page_size: int | None = None,
        page: int | None = None,
        sort_field: str | None = None,
        sort_order: str | None = None,
        search: str | None = None,
        start_at: str | None = None,
        end_at: str | None = None,
        date_range_column: str | None = None,
        name: str | None = None,
        status: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[JobsResponse, RawError]:
        """Send a ``GET`` request.

        Args:
            page_size: Page size
            page: Page number
            sort_field: Sort field
            sort_order: Sort order (ASC/DESC)
            search: Search term
            start_at: Start date for created_at filter
            end_at: End date for created_at filter
            date_range_column: Custom date range column
            name: Filter by name
            status: Filter by status
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_scraper_service_gateway_auth_api("/jobs"),
            query_params=[
                param[int | None]("pageSize", page_size),
                param[int | None]("page", page),
                param[str | None]("sortField", sort_field),
                param[str | None]("sortOrder", sort_order),
                param[str | None]("search", search),
                param[str | None]("startAt", start_at),
                param[str | None]("endAt", end_at),
                param[str | None]("dateRangeColumn", date_range_column),
                param[str | None]("name", name),
                param[str | None]("status", status),
            ],
            auth_scheme=AnySchemes(self._auth.api_key, self._auth.bearer_auth),
            decoder=json_decoder[JobsResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def get_jobs_by_id(
        self, id_: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[JobsResponse1, RawError]:
        """Send a ``GET`` request.

        Args:
            id_: Job ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_scraper_service_gateway_auth_api("/jobs/{id}"),
            path_params=[param[int]("id", id_)],
            auth_scheme=AnySchemes(self._auth.api_key, self._auth.bearer_auth),
            decoder=json_decoder[JobsResponse1],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def post_jobs(
        self, body: JobJob | JobJobDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[JobsResponse1, RawError]:
        """Send a ``POST`` request.

        Args:
            body: Job object (ID will be auto-generated, do not include)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default_scraper_service_gateway_auth_api("/jobs"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[JobJob | JobJobDict](body),
            auth_scheme=AnySchemes(self._auth.api_key, self._auth.bearer_auth),
            decoder=json_decoder[JobsResponse1],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def put_jobs_by_id(
        self, id_: int, body: JobJob | JobJobDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[JobsResponse1, RawError]:
        """Send a ``PUT`` request.

        Args:
            id_: Job ID
            body: Job object
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default_scraper_service_gateway_auth_api("/jobs/{id}"),
            path_params=[param[int]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[JobJob | JobJobDict](body),
            auth_scheme=AnySchemes(self._auth.api_key, self._auth.bearer_auth),
            decoder=json_decoder[JobsResponse1],
            error_mapper=raw_error_response,
            request_options=request_options,
        )


class AsyncJobsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_jobs(
        self,
        *,
        page_size: int | None = None,
        page: int | None = None,
        sort_field: str | None = None,
        sort_order: str | None = None,
        search: str | None = None,
        start_at: str | None = None,
        end_at: str | None = None,
        date_range_column: str | None = None,
        name: str | None = None,
        status: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[JobsResponse, RawError]:
        """Send a ``GET`` request.

        Args:
            page_size: Page size
            page: Page number
            sort_field: Sort field
            sort_order: Sort order (ASC/DESC)
            search: Search term
            start_at: Start date for created_at filter
            end_at: End date for created_at filter
            date_range_column: Custom date range column
            name: Filter by name
            status: Filter by status
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_scraper_service_gateway_auth_api("/jobs"),
            query_params=[
                param[int | None]("pageSize", page_size),
                param[int | None]("page", page),
                param[str | None]("sortField", sort_field),
                param[str | None]("sortOrder", sort_order),
                param[str | None]("search", search),
                param[str | None]("startAt", start_at),
                param[str | None]("endAt", end_at),
                param[str | None]("dateRangeColumn", date_range_column),
                param[str | None]("name", name),
                param[str | None]("status", status),
            ],
            auth_scheme=AsyncAnySchemes(self._auth.api_key, self._auth.bearer_auth),
            decoder=async_json_decoder[JobsResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def get_jobs_by_id(
        self, id_: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[JobsResponse1, RawError]:
        """Send a ``GET`` request.

        Args:
            id_: Job ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_scraper_service_gateway_auth_api("/jobs/{id}"),
            path_params=[param[int]("id", id_)],
            auth_scheme=AsyncAnySchemes(self._auth.api_key, self._auth.bearer_auth),
            decoder=async_json_decoder[JobsResponse1],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def post_jobs(
        self, body: JobJob | JobJobDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[JobsResponse1, RawError]:
        """Send a ``POST`` request.

        Args:
            body: Job object (ID will be auto-generated, do not include)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default_scraper_service_gateway_auth_api("/jobs"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[JobJob | JobJobDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.api_key, self._auth.bearer_auth),
            decoder=async_json_decoder[JobsResponse1],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def put_jobs_by_id(
        self, id_: int, body: JobJob | JobJobDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[JobsResponse1, RawError]:
        """Send a ``PUT`` request.

        Args:
            id_: Job ID
            body: Job object
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default_scraper_service_gateway_auth_api("/jobs/{id}"),
            path_params=[param[int]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[JobJob | JobJobDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.api_key, self._auth.bearer_auth),
            decoder=async_json_decoder[JobsResponse1],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

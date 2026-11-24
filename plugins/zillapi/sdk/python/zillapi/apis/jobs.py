from __future__ import annotations

from uuid import UUID

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    RawClient,
    RawError,
    RequestOptionsOrDict,
    RFC3339DateTime,
    SecuredRawResponse,
    async_json_decoder,
    json_decoder,
    param,
    raw_error_response,
    unwrap,
)
from ..errors.get_job_results_error import GetJobResultsErrorBody, get_job_results_error_mapper
from ..models.enums.format import Format, FormatOrStr
from ..models.enums.status_zillapi_zillow_property_data_jobs_api import StatusZillapiZillowPropertyDataJobsApiOrStr
from ..models.enums.type import TypeOrStr
from ..models.v1_jobs_response import V1JobsResponse
from ..models.v1_jobs_response1 import V1JobsResponse1
from ..models.v1_jobs_results_response import V1JobsResultsResponse
from ..server.server import Server


class Jobs:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = JobsWithRawResponse(client, server, auth)

    def get_job(self, id_: UUID, *, request_options: RequestOptionsOrDict | None = None) -> V1JobsResponse1:
        """Fetch a single job row including status, result_count, chain_stage, and timestamps. For chained_search_detail
        jobs, status: succeeded means both stages finished. Control-plane endpoint — free.

        Args:
            id_: Job UUID.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.get_job(id_, request_options=request_options))

    def get_job_results(
        self,
        id_: UUID,
        *,
        limit: int | None = 100,
        offset: int | None = 0,
        format_: FormatOrStr | None = Format.JSON,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1JobsResultsResponse:
        """Fetch paginated results for a succeeded job in JSON, CSV, or NDJSON. Returns 409 job_not_ready until the job
        status is succeeded. Free — billing happens once when the job completes, not on result reads.

        Args:
            id_: Job UUID.
            limit: Page size (max 1000).
            offset: Pagination offset (unbounded).
            format_: Response format.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Job results

        Raises:
            ApiError: Standard error Standard error ``error`` is ``ApiErrorModel | RawError``."""
        return unwrap(
            self._with_raw_response.get_job_results(
                id_, limit=limit, offset=offset, format_=format_, request_options=request_options
            ),
        )

    def list_jobs(
        self,
        *,
        status: StatusZillapiZillowPropertyDataJobsApiOrStr | None = None,
        type_: TypeOrStr | None = None,
        since: RFC3339DateTime | None = None,
        limit: int | None = 50,
        offset: int | None = 0,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1JobsResponse:
        """List your async jobs filtered by status, type, and creation time. Control-plane endpoint — free, does not
        consume credits.

        Args:
            status: Filter by job status.
            type_: Filter by job type.
            since: Return jobs with created_at >= this ISO timestamp.
            limit: Page size (max 500).
            offset: Pagination offset.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.list_jobs(
                status=status, type_=type_, since=since, limit=limit, offset=offset, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> JobsWithRawResponse:
        return self._with_raw_response


class AsyncJobs:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncJobsWithRawResponse(client, server, auth)

    async def get_job(self, id_: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None) -> V1JobsResponse1:
        """Fetch a single job row including status, result_count, chain_stage, and timestamps. For chained_search_detail
        jobs, status: succeeded means both stages finished. Control-plane endpoint — free.

        Args:
            id_: Job UUID.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.get_job(id_, request_options=request_options))

    async def get_job_results(
        self,
        id_: UUID,
        *,
        limit: int | None = 100,
        offset: int | None = 0,
        format_: FormatOrStr | None = Format.JSON,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1JobsResultsResponse:
        """Fetch paginated results for a succeeded job in JSON, CSV, or NDJSON. Returns 409 job_not_ready until the job
        status is succeeded. Free — billing happens once when the job completes, not on result reads.

        Args:
            id_: Job UUID.
            limit: Page size (max 1000).
            offset: Pagination offset (unbounded).
            format_: Response format.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Job results

        Raises:
            ApiError: Standard error Standard error ``error`` is ``ApiErrorModel | RawError``."""
        return unwrap(
            await self._with_raw_response.get_job_results(
                id_, limit=limit, offset=offset, format_=format_, request_options=request_options
            ),
        )

    async def list_jobs(
        self,
        *,
        status: StatusZillapiZillowPropertyDataJobsApiOrStr | None = None,
        type_: TypeOrStr | None = None,
        since: RFC3339DateTime | None = None,
        limit: int | None = 50,
        offset: int | None = 0,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1JobsResponse:
        """List your async jobs filtered by status, type, and creation time. Control-plane endpoint — free, does not
        consume credits.

        Args:
            status: Filter by job status.
            type_: Filter by job type.
            since: Return jobs with created_at >= this ISO timestamp.
            limit: Page size (max 500).
            offset: Pagination offset.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.list_jobs(
                status=status, type_=type_, since=since, limit=limit, offset=offset, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncJobsWithRawResponse:
        return self._with_raw_response


class JobsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_job(
        self, id_: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1JobsResponse1, RawError]:
        """Fetch a single job row including status, result_count, chain_stage, and timestamps. For chained_search_detail
        jobs, status: succeeded means both stages finished. Control-plane endpoint — free.

        Args:
            id_: Job UUID.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/jobs/{id}"),
            path_params=[param[UUID]("id", id_)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[V1JobsResponse1],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def get_job_results(
        self,
        id_: UUID,
        *,
        limit: int | None = 100,
        offset: int | None = 0,
        format_: FormatOrStr | None = Format.JSON,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1JobsResultsResponse, GetJobResultsErrorBody]:
        """Fetch paginated results for a succeeded job in JSON, CSV, or NDJSON. Returns 409 job_not_ready until the job
        status is succeeded. Free — billing happens once when the job completes, not on result reads.

        Args:
            id_: Job UUID.
            limit: Page size (max 1000).
            offset: Pagination offset (unbounded).
            format_: Response format.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/jobs/{id}/results"),
            path_params=[param[UUID]("id", id_)],
            query_params=[
                param[int | None]("limit", limit),
                param[int | None]("offset", offset),
                param[FormatOrStr | None]("format", format_),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[V1JobsResultsResponse],
            error_mapper=get_job_results_error_mapper,
            request_options=request_options,
        )

    def list_jobs(
        self,
        *,
        status: StatusZillapiZillowPropertyDataJobsApiOrStr | None = None,
        type_: TypeOrStr | None = None,
        since: RFC3339DateTime | None = None,
        limit: int | None = 50,
        offset: int | None = 0,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1JobsResponse, RawError]:
        """List your async jobs filtered by status, type, and creation time. Control-plane endpoint — free, does not
        consume credits.

        Args:
            status: Filter by job status.
            type_: Filter by job type.
            since: Return jobs with created_at >= this ISO timestamp.
            limit: Page size (max 500).
            offset: Pagination offset.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/jobs"),
            query_params=[
                param[StatusZillapiZillowPropertyDataJobsApiOrStr | None]("status", status),
                param[TypeOrStr | None]("type", type_),
                param[RFC3339DateTime | None]("since", since),
                param[int | None]("limit", limit),
                param[int | None]("offset", offset),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[V1JobsResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )


class AsyncJobsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_job(
        self, id_: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1JobsResponse1, RawError]:
        """Fetch a single job row including status, result_count, chain_stage, and timestamps. For chained_search_detail
        jobs, status: succeeded means both stages finished. Control-plane endpoint — free.

        Args:
            id_: Job UUID.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/jobs/{id}"),
            path_params=[param[UUID]("id", id_)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[V1JobsResponse1],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def get_job_results(
        self,
        id_: UUID,
        *,
        limit: int | None = 100,
        offset: int | None = 0,
        format_: FormatOrStr | None = Format.JSON,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1JobsResultsResponse, GetJobResultsErrorBody]:
        """Fetch paginated results for a succeeded job in JSON, CSV, or NDJSON. Returns 409 job_not_ready until the job
        status is succeeded. Free — billing happens once when the job completes, not on result reads.

        Args:
            id_: Job UUID.
            limit: Page size (max 1000).
            offset: Pagination offset (unbounded).
            format_: Response format.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/jobs/{id}/results"),
            path_params=[param[UUID]("id", id_)],
            query_params=[
                param[int | None]("limit", limit),
                param[int | None]("offset", offset),
                param[FormatOrStr | None]("format", format_),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[V1JobsResultsResponse],
            error_mapper=get_job_results_error_mapper,
            request_options=request_options,
        )

    async def list_jobs(
        self,
        *,
        status: StatusZillapiZillowPropertyDataJobsApiOrStr | None = None,
        type_: TypeOrStr | None = None,
        since: RFC3339DateTime | None = None,
        limit: int | None = 50,
        offset: int | None = 0,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1JobsResponse, RawError]:
        """List your async jobs filtered by status, type, and creation time. Control-plane endpoint — free, does not
        consume credits.

        Args:
            status: Filter by job status.
            type_: Filter by job type.
            since: Return jobs with created_at >= this ISO timestamp.
            limit: Page size (max 500).
            offset: Pagination offset.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/jobs"),
            query_params=[
                param[StatusZillapiZillowPropertyDataJobsApiOrStr | None]("status", status),
                param[TypeOrStr | None]("type", type_),
                param[RFC3339DateTime | None]("since", since),
                param[int | None]("limit", limit),
                param[int | None]("offset", offset),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[V1JobsResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

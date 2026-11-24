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
from ..errors.get_batch_status_error import GetBatchStatusErrorBody, get_batch_status_error_mapper
from ..errors.get_job_status_error import GetJobStatusErrorBody, get_job_status_error_mapper
from ..models.batch_status_response import BatchStatusResponse
from ..models.job_status_response import JobStatusResponse
from ..server.server import Server


class Jobs:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = JobsWithRawResponse(client, server, auth)

    def get_batch_status(
        self, batch_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> BatchStatusResponse:
        """Returns the current status of a batch capture request, including per-URL job statuses and progress.

        Args:
            batch_id: Batch identifier (returned by ``POST /v1/screenshot/batch``)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Batch status

        Raises:
            ApiError: Missing or invalid API key Batch not found ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.get_batch_status(batch_id, request_options=request_options))

    def get_job_status(self, job_id: str, *, request_options: RequestOptionsOrDict | None = None) -> JobStatusResponse:
        """Returns the current status of an async screenshot job. When status is ``completed``, the response includes
        the image URL or base64 data.

        Args:
            job_id: Async job identifier (returned when ``async: true``)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Job status

        Raises:
            ApiError: Missing or invalid API key Job not found ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.get_job_status(job_id, request_options=request_options))

    @property
    def with_raw_response(self) -> JobsWithRawResponse:
        return self._with_raw_response


class AsyncJobs:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncJobsWithRawResponse(client, server, auth)

    async def get_batch_status(
        self, batch_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> BatchStatusResponse:
        """Returns the current status of a batch capture request, including per-URL job statuses and progress.

        Args:
            batch_id: Batch identifier (returned by ``POST /v1/screenshot/batch``)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Batch status

        Raises:
            ApiError: Missing or invalid API key Batch not found ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.get_batch_status(batch_id, request_options=request_options))

    async def get_job_status(
        self, job_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> JobStatusResponse:
        """Returns the current status of an async screenshot job. When status is ``completed``, the response includes
        the image URL or base64 data.

        Args:
            job_id: Async job identifier (returned when ``async: true``)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Job status

        Raises:
            ApiError: Missing or invalid API key Job not found ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.get_job_status(job_id, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncJobsWithRawResponse:
        return self._with_raw_response


class JobsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_batch_status(
        self, batch_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[BatchStatusResponse, GetBatchStatusErrorBody]:
        """Returns the current status of a batch capture request, including per-URL job statuses and progress.

        Args:
            batch_id: Batch identifier (returned by ``POST /v1/screenshot/batch``)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/batches/{batchId}"),
            path_params=[param[str]("batchId", batch_id)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[BatchStatusResponse],
            error_mapper=get_batch_status_error_mapper,
            request_options=request_options,
        )

    def get_job_status(
        self, job_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[JobStatusResponse, GetJobStatusErrorBody]:
        """Returns the current status of an async screenshot job. When status is ``completed``, the response includes
        the image URL or base64 data.

        Args:
            job_id: Async job identifier (returned when ``async: true``)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/jobs/{jobId}"),
            path_params=[param[str]("jobId", job_id)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[JobStatusResponse],
            error_mapper=get_job_status_error_mapper,
            request_options=request_options,
        )


class AsyncJobsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_batch_status(
        self, batch_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[BatchStatusResponse, GetBatchStatusErrorBody]:
        """Returns the current status of a batch capture request, including per-URL job statuses and progress.

        Args:
            batch_id: Batch identifier (returned by ``POST /v1/screenshot/batch``)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/batches/{batchId}"),
            path_params=[param[str]("batchId", batch_id)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[BatchStatusResponse],
            error_mapper=get_batch_status_error_mapper,
            request_options=request_options,
        )

    async def get_job_status(
        self, job_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[JobStatusResponse, GetJobStatusErrorBody]:
        """Returns the current status of an async screenshot job. When status is ``completed``, the response includes
        the image URL or base64 data.

        Args:
            job_id: Async job identifier (returned when ``async: true``)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/jobs/{jobId}"),
            path_params=[param[str]("jobId", job_id)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[JobStatusResponse],
            error_mapper=get_job_status_error_mapper,
            request_options=request_options,
        )

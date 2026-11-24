from __future__ import annotations

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
    async_empty_response,
    empty_response,
    param,
    raw_error_response,
    unwrap,
)
from ..server.server import Server


class JobsApi:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = JobsApiWithRawResponse(client, server, auth)

    def get_job_log(
        self, org: str, pipeline: str, number: int, job: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Send a ``GET`` request.

        Args:
            org: Organization slug
            pipeline: Pipeline slug
            number: Build number
            job: Job UUID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Log content

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.get_job_log(org, pipeline, number, job, request_options=request_options))

    def retry_job(
        self, org: str, pipeline: str, number: int, job: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Send a ``PUT`` request.

        Args:
            org: Organization slug
            pipeline: Pipeline slug
            number: Build number
            job: Job UUID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Job retried

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.retry_job(org, pipeline, number, job, request_options=request_options))

    @property
    def with_raw_response(self) -> JobsApiWithRawResponse:
        return self._with_raw_response


class AsyncJobsApi:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncJobsApiWithRawResponse(client, server, auth)

    async def get_job_log(
        self,
        org: str,
        pipeline: str,
        number: int,
        job: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Send a ``GET`` request.

        Args:
            org: Organization slug
            pipeline: Pipeline slug
            number: Build number
            job: Job UUID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Log content

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.get_job_log(org, pipeline, number, job, request_options=request_options)
        )

    async def retry_job(
        self,
        org: str,
        pipeline: str,
        number: int,
        job: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Send a ``PUT`` request.

        Args:
            org: Organization slug
            pipeline: Pipeline slug
            number: Build number
            job: Job UUID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Job retried

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.retry_job(org, pipeline, number, job, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncJobsApiWithRawResponse:
        return self._with_raw_response


class JobsApiWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_job_log(
        self, org: str, pipeline: str, number: int, job: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, RawError]:
        """Send a ``GET`` request.

        Args:
            org: Organization slug
            pipeline: Pipeline slug
            number: Build number
            job: Job UUID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/organizations/{org}/pipelines/{pipeline}/builds/{number}/jobs/{job}/log"
            ),
            path_params=[
                param[str]("org", org),
                param[str]("pipeline", pipeline),
                param[int]("number", number),
                param[str]("job", job),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=empty_response,
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def retry_job(
        self, org: str, pipeline: str, number: int, job: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, RawError]:
        """Send a ``PUT`` request.

        Args:
            org: Organization slug
            pipeline: Pipeline slug
            number: Build number
            job: Job UUID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default(
                "/organizations/{org}/pipelines/{pipeline}/builds/{number}/jobs/{job}/retry"
            ),
            path_params=[
                param[str]("org", org),
                param[str]("pipeline", pipeline),
                param[int]("number", number),
                param[str]("job", job),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=empty_response,
            error_mapper=raw_error_response,
            request_options=request_options,
        )


class AsyncJobsApiWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_job_log(
        self,
        org: str,
        pipeline: str,
        number: int,
        job: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, RawError]:
        """Send a ``GET`` request.

        Args:
            org: Organization slug
            pipeline: Pipeline slug
            number: Build number
            job: Job UUID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/organizations/{org}/pipelines/{pipeline}/builds/{number}/jobs/{job}/log"
            ),
            path_params=[
                param[str]("org", org),
                param[str]("pipeline", pipeline),
                param[int]("number", number),
                param[str]("job", job),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_empty_response,
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def retry_job(
        self,
        org: str,
        pipeline: str,
        number: int,
        job: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, RawError]:
        """Send a ``PUT`` request.

        Args:
            org: Organization slug
            pipeline: Pipeline slug
            number: Build number
            job: Job UUID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default(
                "/organizations/{org}/pipelines/{pipeline}/builds/{number}/jobs/{job}/retry"
            ),
            path_params=[
                param[str]("org", org),
                param[str]("pipeline", pipeline),
                param[int]("number", number),
                param[str]("job", job),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_empty_response,
            error_mapper=raw_error_response,
            request_options=request_options,
        )

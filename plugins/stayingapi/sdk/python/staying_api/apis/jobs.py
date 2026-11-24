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
from ..errors.poll_job_error import PollJobErrorBody, poll_job_error_mapper
from ..models.unions.job_response import JobResponse
from ..server.server import Server


class Jobs:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = JobsWithRawResponse(client, server, auth)

    def poll_job(self, job_id: str, *, request_options: RequestOptionsOrDict | None = None) -> JobResponse:
        """Poll until status is terminal (completed | failed). While pending/running the response carries a Retry-After
        header. Enforces jobs.user_id == caller; unknown/not-owned/expired → job_not_found (404).

        Args:
            job_id: job_-prefixed id.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Job status. pending/running carry a Retry-After header; completed carries the payload at data.result; FAILED
            is HTTP 200 with the failure nested at data.error (NOT a top-level error) and creditsCharged 0. Branch on
            data.status — see JobResponse.

        Raises:
            ApiError: Authentication error. job_not_found (unknown, not owned, or expired). ``error`` is ``ErrorEnvelope
                | RawError``."""
        return unwrap(self._with_raw_response.poll_job(job_id, request_options=request_options))

    @property
    def with_raw_response(self) -> JobsWithRawResponse:
        return self._with_raw_response


class AsyncJobs:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncJobsWithRawResponse(client, server, auth)

    async def poll_job(self, job_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None) -> JobResponse:
        """Poll until status is terminal (completed | failed). While pending/running the response carries a Retry-After
        header. Enforces jobs.user_id == caller; unknown/not-owned/expired → job_not_found (404).

        Args:
            job_id: job_-prefixed id.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Job status. pending/running carry a Retry-After header; completed carries the payload at data.result; FAILED
            is HTTP 200 with the failure nested at data.error (NOT a top-level error) and creditsCharged 0. Branch on
            data.status — see JobResponse.

        Raises:
            ApiError: Authentication error. job_not_found (unknown, not owned, or expired). ``error`` is ``ErrorEnvelope
                | RawError``."""
        return unwrap(await self._with_raw_response.poll_job(job_id, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncJobsWithRawResponse:
        return self._with_raw_response


class JobsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def poll_job(
        self, job_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[JobResponse, PollJobErrorBody]:
        """Poll until status is terminal (completed | failed). While pending/running the response carries a Retry-After
        header. Enforces jobs.user_id == caller; unknown/not-owned/expired → job_not_found (404).

        Args:
            job_id: job_-prefixed id.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/jobs/{jobId}"),
            path_params=[param[str]("jobId", job_id)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[JobResponse],
            error_mapper=poll_job_error_mapper,
            request_options=request_options,
        )


class AsyncJobsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def poll_job(
        self, job_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[JobResponse, PollJobErrorBody]:
        """Poll until status is terminal (completed | failed). While pending/running the response carries a Retry-After
        header. Enforces jobs.user_id == caller; unknown/not-owned/expired → job_not_found (404).

        Args:
            job_id: job_-prefixed id.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/jobs/{jobId}"),
            path_params=[param[str]("jobId", job_id)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[JobResponse],
            error_mapper=poll_job_error_mapper,
            request_options=request_options,
        )

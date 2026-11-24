from __future__ import annotations

from uuid import UUID, uuid4

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
from ..errors.cancel_job_error import CancelJobErrorBody, cancel_job_error_mapper
from ..errors.get_job_error import GetJobErrorBody, get_job_error_mapper
from ..errors.list_job_artifacts_error import ListJobArtifactsErrorBody, list_job_artifacts_error_mapper
from ..errors.list_job_tests_error import ListJobTestsErrorBody, list_job_tests_error_mapper
from ..models.artifact_list import ArtifactList
from ..models.job import Job
from ..models.message_response import MessageResponse
from ..models.test_list import TestList
from ..server.server import Server


class JobApi:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = JobApiWithRawResponse(client, server, auth)

    def cancel_job(
        self, project_slug: str, job_number: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> MessageResponse:
        """Cancels a running job by its job number.

        Args:
            project_slug: The project slug in the form vcs-slug/org-name/repo-name (e.g.,
                gh/CircleCI-Public/api-preview-docs)
            job_number: The number of the job
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Job cancelled successfully

        Raises:
            ApiError: Unauthorized ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.cancel_job(project_slug, job_number, request_options=request_options))

    def get_job(
        self, project_slug: str, job_number: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> Job:
        """Returns detailed information about a specific job, including its status, duration, and executor
        configuration.

        Args:
            project_slug: The project slug in the form vcs-slug/org-name/repo-name (e.g.,
                gh/CircleCI-Public/api-preview-docs)
            job_number: The number of the job
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved job details

        Raises:
            ApiError: Unauthorized Job not found ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.get_job(project_slug, job_number, request_options=request_options))

    def list_job_artifacts(
        self, project_slug: str, job_number: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> ArtifactList:
        """Returns a paginated list of artifacts produced by a given job.

        Args:
            project_slug: The project slug in the form vcs-slug/org-name/repo-name (e.g.,
                gh/CircleCI-Public/api-preview-docs)
            job_number: The number of the job
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved artifacts

        Raises:
            ApiError: Unauthorized ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.list_job_artifacts(project_slug, job_number, request_options=request_options)
        )

    def list_job_tests(
        self, project_slug: str, job_number: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> TestList:
        """Returns test metadata for a given job, collected from JUnit XML or similar test result files.

        Args:
            project_slug: The project slug in the form vcs-slug/org-name/repo-name (e.g.,
                gh/CircleCI-Public/api-preview-docs)
            job_number: The number of the job
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved test metadata

        Raises:
            ApiError: Unauthorized ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.list_job_tests(project_slug, job_number, request_options=request_options))

    @property
    def with_raw_response(self) -> JobApiWithRawResponse:
        return self._with_raw_response


class AsyncJobApi:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncJobApiWithRawResponse(client, server, auth)

    async def cancel_job(
        self, project_slug: str, job_number: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> MessageResponse:
        """Cancels a running job by its job number.

        Args:
            project_slug: The project slug in the form vcs-slug/org-name/repo-name (e.g.,
                gh/CircleCI-Public/api-preview-docs)
            job_number: The number of the job
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Job cancelled successfully

        Raises:
            ApiError: Unauthorized ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.cancel_job(project_slug, job_number, request_options=request_options)
        )

    async def get_job(
        self, project_slug: str, job_number: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Job:
        """Returns detailed information about a specific job, including its status, duration, and executor
        configuration.

        Args:
            project_slug: The project slug in the form vcs-slug/org-name/repo-name (e.g.,
                gh/CircleCI-Public/api-preview-docs)
            job_number: The number of the job
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved job details

        Raises:
            ApiError: Unauthorized Job not found ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.get_job(project_slug, job_number, request_options=request_options))

    async def list_job_artifacts(
        self, project_slug: str, job_number: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ArtifactList:
        """Returns a paginated list of artifacts produced by a given job.

        Args:
            project_slug: The project slug in the form vcs-slug/org-name/repo-name (e.g.,
                gh/CircleCI-Public/api-preview-docs)
            job_number: The number of the job
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved artifacts

        Raises:
            ApiError: Unauthorized ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.list_job_artifacts(project_slug, job_number, request_options=request_options)
        )

    async def list_job_tests(
        self, project_slug: str, job_number: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> TestList:
        """Returns test metadata for a given job, collected from JUnit XML or similar test result files.

        Args:
            project_slug: The project slug in the form vcs-slug/org-name/repo-name (e.g.,
                gh/CircleCI-Public/api-preview-docs)
            job_number: The number of the job
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved test metadata

        Raises:
            ApiError: Unauthorized ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.list_job_tests(project_slug, job_number, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncJobApiWithRawResponse:
        return self._with_raw_response


class JobApiWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def cancel_job(
        self, project_slug: str, job_number: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[MessageResponse, CancelJobErrorBody]:
        """Cancels a running job by its job number.

        Args:
            project_slug: The project slug in the form vcs-slug/org-name/repo-name (e.g.,
                gh/CircleCI-Public/api-preview-docs)
            job_number: The number of the job
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default_circle_ci_rest_api_v2_context_api(
                "/project/{project-slug}/job/{job-number}/cancel"
            ),
            path_params=[param[str]("project-slug", project_slug), param[int]("job-number", job_number)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.api_token,
            decoder=json_decoder[MessageResponse],
            error_mapper=cancel_job_error_mapper,
            request_options=request_options,
        )

    def get_job(
        self, project_slug: str, job_number: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Job, GetJobErrorBody]:
        """Returns detailed information about a specific job, including its status, duration, and executor
        configuration.

        Args:
            project_slug: The project slug in the form vcs-slug/org-name/repo-name (e.g.,
                gh/CircleCI-Public/api-preview-docs)
            job_number: The number of the job
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_circle_ci_rest_api_v2_context_api(
                "/project/{project-slug}/job/{job-number}"
            ),
            path_params=[param[str]("project-slug", project_slug), param[int]("job-number", job_number)],
            auth_scheme=self._auth.api_token,
            decoder=json_decoder[Job],
            error_mapper=get_job_error_mapper,
            request_options=request_options,
        )

    def list_job_artifacts(
        self, project_slug: str, job_number: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ArtifactList, ListJobArtifactsErrorBody]:
        """Returns a paginated list of artifacts produced by a given job.

        Args:
            project_slug: The project slug in the form vcs-slug/org-name/repo-name (e.g.,
                gh/CircleCI-Public/api-preview-docs)
            job_number: The number of the job
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_circle_ci_rest_api_v2_context_api(
                "/project/{project-slug}/{job-number}/artifacts"
            ),
            path_params=[param[str]("project-slug", project_slug), param[int]("job-number", job_number)],
            auth_scheme=self._auth.api_token,
            decoder=json_decoder[ArtifactList],
            error_mapper=list_job_artifacts_error_mapper,
            request_options=request_options,
        )

    def list_job_tests(
        self, project_slug: str, job_number: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[TestList, ListJobTestsErrorBody]:
        """Returns test metadata for a given job, collected from JUnit XML or similar test result files.

        Args:
            project_slug: The project slug in the form vcs-slug/org-name/repo-name (e.g.,
                gh/CircleCI-Public/api-preview-docs)
            job_number: The number of the job
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_circle_ci_rest_api_v2_context_api(
                "/project/{project-slug}/{job-number}/tests"
            ),
            path_params=[param[str]("project-slug", project_slug), param[int]("job-number", job_number)],
            auth_scheme=self._auth.api_token,
            decoder=json_decoder[TestList],
            error_mapper=list_job_tests_error_mapper,
            request_options=request_options,
        )


class AsyncJobApiWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def cancel_job(
        self, project_slug: str, job_number: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[MessageResponse, CancelJobErrorBody]:
        """Cancels a running job by its job number.

        Args:
            project_slug: The project slug in the form vcs-slug/org-name/repo-name (e.g.,
                gh/CircleCI-Public/api-preview-docs)
            job_number: The number of the job
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default_circle_ci_rest_api_v2_context_api(
                "/project/{project-slug}/job/{job-number}/cancel"
            ),
            path_params=[param[str]("project-slug", project_slug), param[int]("job-number", job_number)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.api_token,
            decoder=async_json_decoder[MessageResponse],
            error_mapper=cancel_job_error_mapper,
            request_options=request_options,
        )

    async def get_job(
        self, project_slug: str, job_number: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Job, GetJobErrorBody]:
        """Returns detailed information about a specific job, including its status, duration, and executor
        configuration.

        Args:
            project_slug: The project slug in the form vcs-slug/org-name/repo-name (e.g.,
                gh/CircleCI-Public/api-preview-docs)
            job_number: The number of the job
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_circle_ci_rest_api_v2_context_api(
                "/project/{project-slug}/job/{job-number}"
            ),
            path_params=[param[str]("project-slug", project_slug), param[int]("job-number", job_number)],
            auth_scheme=self._auth.api_token,
            decoder=async_json_decoder[Job],
            error_mapper=get_job_error_mapper,
            request_options=request_options,
        )

    async def list_job_artifacts(
        self, project_slug: str, job_number: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ArtifactList, ListJobArtifactsErrorBody]:
        """Returns a paginated list of artifacts produced by a given job.

        Args:
            project_slug: The project slug in the form vcs-slug/org-name/repo-name (e.g.,
                gh/CircleCI-Public/api-preview-docs)
            job_number: The number of the job
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_circle_ci_rest_api_v2_context_api(
                "/project/{project-slug}/{job-number}/artifacts"
            ),
            path_params=[param[str]("project-slug", project_slug), param[int]("job-number", job_number)],
            auth_scheme=self._auth.api_token,
            decoder=async_json_decoder[ArtifactList],
            error_mapper=list_job_artifacts_error_mapper,
            request_options=request_options,
        )

    async def list_job_tests(
        self, project_slug: str, job_number: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[TestList, ListJobTestsErrorBody]:
        """Returns test metadata for a given job, collected from JUnit XML or similar test result files.

        Args:
            project_slug: The project slug in the form vcs-slug/org-name/repo-name (e.g.,
                gh/CircleCI-Public/api-preview-docs)
            job_number: The number of the job
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_circle_ci_rest_api_v2_context_api(
                "/project/{project-slug}/{job-number}/tests"
            ),
            path_params=[param[str]("project-slug", project_slug), param[int]("job-number", job_number)],
            auth_scheme=self._auth.api_token,
            decoder=async_json_decoder[TestList],
            error_mapper=list_job_tests_error_mapper,
            request_options=request_options,
        )

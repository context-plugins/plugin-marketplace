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
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.get_jobs_error import GetJobsErrorBody, get_jobs_error_mapper
from ..errors.get_user_jobs_error import GetUserJobsErrorBody, get_user_jobs_error_mapper
from ..errors.post_job_mfa_error import PostJobMfaErrorBody, post_job_mfa_error_mapper
from ..models.connection_response_resource import ConnectionResponseResource
from ..models.jobs_mfa_request import JobsMfaRequest, JobsMfaRequestDict
from ..models.unions.jobs_response3 import JobsResponse3
from ..models.users_jobs_response import UsersJobsResponse
from ..server.server import Server


class Jobs:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = JobsWithRawResponse(client, server, auth)

    def get_jobs(self, job_id: str, *, request_options: RequestOptionsOrDict | None = None) -> JobsResponse3:
        """Retrieves the details of an existing job. You need only supply the unique job identifier that was returned
        upon job creation.

        Args:
            job_id: The identifier of the job to be retrieved.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Returns a job details if a valid job ID was provided.

        Raises:
            ApiError: Returns error that server cannot or will not process the request due to something that is
                perceived to be a client error Error status response code indicates that the request has not been
                applied because it lacks valid authentication credentials for the target resource. Error that access is
                forbidden and tied to the application logic, such as insufficient rights to a resource. Returns error
                indicating that server can't find requested resource. Returns error response code indicates that the
                server encountered an unexpected condition that prevented it from fulfilling the request. ``error`` is
                ``Jobs400Error1 | Jobs401Error1 | Jobs403Error1 | Jobs404Error1 | Jobs500Error1 | RawError``."""
        return unwrap(self._with_raw_response.get_jobs(job_id, request_options=request_options))

    def get_user_jobs(
        self, user_id: str, *, filter_: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> UsersJobsResponse:
        """Retrieves the details of all existing and previous jobs associated with a user.

        **Note:** This endpoint only returns jobs that are less than 7 days old.

        Args:
            user_id: User identifier
            filter_: Connection identification filter. e.g. connection.id.eq('ab63cd')
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Returns a list of jobs with details.

        Raises:
            ApiError: Returns error that server cannot or will not process the request due to something that is
                perceived to be a client error Error status response code indicates that the request has not been
                applied because it lacks valid authentication credentials for the target resource. Error that access is
                forbidden and tied to the application logic, such as insufficient rights to a resource. Returns error
                indicating that server can't find requested resource. Returns error response code indicates that the
                server encountered an unexpected condition that prevented it from fulfilling the request. ``error`` is
                ``UsersJobs400Error1 | UsersJobs401Error1 | UsersJobs403Error1 | UsersJobs404Error1 | UsersJobs500Error1
                | RawError``."""
        return unwrap(self._with_raw_response.get_user_jobs(user_id, filter_=filter_, request_options=request_options))

    def post_job_mfa(
        self,
        job_id: str,
        body: JobsMfaRequest | JobsMfaRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ConnectionResponseResource:
        """Ensure that you generate an authentication token with scope = CLIENT_ACCESS and basiq-version = 3.0 to create
        this resource

        Args:
            job_id: The identifier of the job.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Returns a job if MFA response was correct. Returns an error otherwise.

        Raises:
            ApiError: Returns error that server cannot or will not process the request due to something that is
                perceived to be a client error Error status response code indicates that the request has not been
                applied because it lacks valid authentication credentials for the target resource. Error that access is
                forbidden and tied to the application logic, such as insufficient rights to a resource. Returns error
                indicating that server can't find requested resource. Returns error response code indicates that the
                server encountered an unexpected condition that prevented it from fulfilling the request. ``error`` is
                ``JobsMfa400Error1 | JobsMfa401Error1 | JobsMfa403Error1 | JobsMfa404Error1 | JobsMfa500Error1 |
                RawError``."""
        return unwrap(self._with_raw_response.post_job_mfa(job_id, body, request_options=request_options))

    @property
    def with_raw_response(self) -> JobsWithRawResponse:
        return self._with_raw_response


class AsyncJobs:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncJobsWithRawResponse(client, server, auth)

    async def get_jobs(self, job_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None) -> JobsResponse3:
        """Retrieves the details of an existing job. You need only supply the unique job identifier that was returned
        upon job creation.

        Args:
            job_id: The identifier of the job to be retrieved.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Returns a job details if a valid job ID was provided.

        Raises:
            ApiError: Returns error that server cannot or will not process the request due to something that is
                perceived to be a client error Error status response code indicates that the request has not been
                applied because it lacks valid authentication credentials for the target resource. Error that access is
                forbidden and tied to the application logic, such as insufficient rights to a resource. Returns error
                indicating that server can't find requested resource. Returns error response code indicates that the
                server encountered an unexpected condition that prevented it from fulfilling the request. ``error`` is
                ``Jobs400Error1 | Jobs401Error1 | Jobs403Error1 | Jobs404Error1 | Jobs500Error1 | RawError``."""
        return unwrap(await self._with_raw_response.get_jobs(job_id, request_options=request_options))

    async def get_user_jobs(
        self, user_id: str, *, filter_: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> UsersJobsResponse:
        """Retrieves the details of all existing and previous jobs associated with a user.

        **Note:** This endpoint only returns jobs that are less than 7 days old.

        Args:
            user_id: User identifier
            filter_: Connection identification filter. e.g. connection.id.eq('ab63cd')
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Returns a list of jobs with details.

        Raises:
            ApiError: Returns error that server cannot or will not process the request due to something that is
                perceived to be a client error Error status response code indicates that the request has not been
                applied because it lacks valid authentication credentials for the target resource. Error that access is
                forbidden and tied to the application logic, such as insufficient rights to a resource. Returns error
                indicating that server can't find requested resource. Returns error response code indicates that the
                server encountered an unexpected condition that prevented it from fulfilling the request. ``error`` is
                ``UsersJobs400Error1 | UsersJobs401Error1 | UsersJobs403Error1 | UsersJobs404Error1 | UsersJobs500Error1
                | RawError``."""
        return unwrap(
            await self._with_raw_response.get_user_jobs(user_id, filter_=filter_, request_options=request_options)
        )

    async def post_job_mfa(
        self,
        job_id: str,
        body: JobsMfaRequest | JobsMfaRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ConnectionResponseResource:
        """Ensure that you generate an authentication token with scope = CLIENT_ACCESS and basiq-version = 3.0 to create
        this resource

        Args:
            job_id: The identifier of the job.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Returns a job if MFA response was correct. Returns an error otherwise.

        Raises:
            ApiError: Returns error that server cannot or will not process the request due to something that is
                perceived to be a client error Error status response code indicates that the request has not been
                applied because it lacks valid authentication credentials for the target resource. Error that access is
                forbidden and tied to the application logic, such as insufficient rights to a resource. Returns error
                indicating that server can't find requested resource. Returns error response code indicates that the
                server encountered an unexpected condition that prevented it from fulfilling the request. ``error`` is
                ``JobsMfa400Error1 | JobsMfa401Error1 | JobsMfa403Error1 | JobsMfa404Error1 | JobsMfa500Error1 |
                RawError``."""
        return unwrap(await self._with_raw_response.post_job_mfa(job_id, body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncJobsWithRawResponse:
        return self._with_raw_response


class JobsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_jobs(
        self, job_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[JobsResponse3, GetJobsErrorBody]:
        """Retrieves the details of an existing job. You need only supply the unique job identifier that was returned
        upon job creation.

        Args:
            job_id: The identifier of the job to be retrieved.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/jobs/{jobId}"),
            path_params=[param[str]("jobId", job_id)],
            auth_scheme=self._auth.services_token,
            decoder=json_decoder[JobsResponse3],
            error_mapper=get_jobs_error_mapper,
            request_options=request_options,
        )

    def get_user_jobs(
        self, user_id: str, *, filter_: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[UsersJobsResponse, GetUserJobsErrorBody]:
        """Retrieves the details of all existing and previous jobs associated with a user.

        **Note:** This endpoint only returns jobs that are less than 7 days old.

        Args:
            user_id: User identifier
            filter_: Connection identification filter. e.g. connection.id.eq('ab63cd')
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/users/{userId}/jobs"),
            path_params=[param[str]("userId", user_id)],
            query_params=[param[str | None]("filter", filter_)],
            auth_scheme=self._auth.services_token,
            decoder=json_decoder[UsersJobsResponse],
            error_mapper=get_user_jobs_error_mapper,
            request_options=request_options,
        )

    def post_job_mfa(
        self,
        job_id: str,
        body: JobsMfaRequest | JobsMfaRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ConnectionResponseResource, PostJobMfaErrorBody]:
        """Ensure that you generate an authentication token with scope = CLIENT_ACCESS and basiq-version = 3.0 to create
        this resource

        Args:
            job_id: The identifier of the job.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/jobs/{jobId}/mfa"),
            path_params=[param[str]("jobId", job_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[JobsMfaRequest | JobsMfaRequestDict](body),
            auth_scheme=self._auth.services_token,
            decoder=json_decoder[ConnectionResponseResource],
            error_mapper=post_job_mfa_error_mapper,
            request_options=request_options,
        )


class AsyncJobsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_jobs(
        self, job_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[JobsResponse3, GetJobsErrorBody]:
        """Retrieves the details of an existing job. You need only supply the unique job identifier that was returned
        upon job creation.

        Args:
            job_id: The identifier of the job to be retrieved.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/jobs/{jobId}"),
            path_params=[param[str]("jobId", job_id)],
            auth_scheme=self._auth.services_token,
            decoder=async_json_decoder[JobsResponse3],
            error_mapper=get_jobs_error_mapper,
            request_options=request_options,
        )

    async def get_user_jobs(
        self, user_id: str, *, filter_: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[UsersJobsResponse, GetUserJobsErrorBody]:
        """Retrieves the details of all existing and previous jobs associated with a user.

        **Note:** This endpoint only returns jobs that are less than 7 days old.

        Args:
            user_id: User identifier
            filter_: Connection identification filter. e.g. connection.id.eq('ab63cd')
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/users/{userId}/jobs"),
            path_params=[param[str]("userId", user_id)],
            query_params=[param[str | None]("filter", filter_)],
            auth_scheme=self._auth.services_token,
            decoder=async_json_decoder[UsersJobsResponse],
            error_mapper=get_user_jobs_error_mapper,
            request_options=request_options,
        )

    async def post_job_mfa(
        self,
        job_id: str,
        body: JobsMfaRequest | JobsMfaRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ConnectionResponseResource, PostJobMfaErrorBody]:
        """Ensure that you generate an authentication token with scope = CLIENT_ACCESS and basiq-version = 3.0 to create
        this resource

        Args:
            job_id: The identifier of the job.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/jobs/{jobId}/mfa"),
            path_params=[param[str]("jobId", job_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[JobsMfaRequest | JobsMfaRequestDict](body),
            auth_scheme=self._auth.services_token,
            decoder=async_json_decoder[ConnectionResponseResource],
            error_mapper=post_job_mfa_error_mapper,
            request_options=request_options,
        )

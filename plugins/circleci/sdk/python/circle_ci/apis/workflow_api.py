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
from ..errors.approve_workflow_job_error import ApproveWorkflowJobErrorBody, approve_workflow_job_error_mapper
from ..errors.cancel_workflow_error import CancelWorkflowErrorBody, cancel_workflow_error_mapper
from ..errors.get_workflow_error import GetWorkflowErrorBody, get_workflow_error_mapper
from ..errors.list_workflow_jobs_error import ListWorkflowJobsErrorBody, list_workflow_jobs_error_mapper
from ..errors.rerun_workflow_error import RerunWorkflowErrorBody, rerun_workflow_error_mapper
from ..models.message_response import MessageResponse
from ..models.rerun_workflow_response import RerunWorkflowResponse
from ..models.workflow import Workflow
from ..models.workflow_job_list import WorkflowJobList
from ..models.workflow_rerun_request import WorkflowRerunRequest, WorkflowRerunRequestDict
from ..server.server import Server


class WorkflowApi:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = WorkflowApiWithRawResponse(client, server, auth)

    def approve_workflow_job(
        self, id_: UUID, approval_request_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> MessageResponse:
        """Approves a pending approval job in a workflow, allowing the workflow to continue execution.

        Args:
            id_: The unique identifier of the workflow
            approval_request_id: The ID of the approval request to approve
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Approval accepted

        Raises:
            ApiError: Unauthorized ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.approve_workflow_job(id_, approval_request_id, request_options=request_options)
        )

    def cancel_workflow(self, id_: UUID, *, request_options: RequestOptionsOrDict | None = None) -> MessageResponse:
        """Cancels a running workflow and all of its running jobs.

        Args:
            id_: The unique identifier of the workflow
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Workflow cancellation accepted

        Raises:
            ApiError: Unauthorized ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.cancel_workflow(id_, request_options=request_options))

    def get_workflow(self, id_: UUID, *, request_options: RequestOptionsOrDict | None = None) -> Workflow:
        """Returns a workflow by its unique identifier, including its status, pipeline ID, and timing information.

        Args:
            id_: The unique identifier of the workflow
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved workflow

        Raises:
            ApiError: Unauthorized Workflow not found ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.get_workflow(id_, request_options=request_options))

    def list_workflow_jobs(self, id_: UUID, *, request_options: RequestOptionsOrDict | None = None) -> WorkflowJobList:
        """Returns a list of jobs associated with a given workflow.

        Args:
            id_: The unique identifier of the workflow
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved workflow jobs

        Raises:
            ApiError: Unauthorized ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.list_workflow_jobs(id_, request_options=request_options))

    def rerun_workflow(
        self,
        id_: UUID,
        *,
        body: WorkflowRerunRequest | WorkflowRerunRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> RerunWorkflowResponse:
        """Reruns a workflow. Optionally, specific jobs can be selected for rerun, and SSH access can be enabled for
        debugging.

        Args:
            id_: The unique identifier of the workflow
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Workflow rerun accepted

        Raises:
            ApiError: Unauthorized ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.rerun_workflow(id_, body=body, request_options=request_options))

    @property
    def with_raw_response(self) -> WorkflowApiWithRawResponse:
        return self._with_raw_response


class AsyncWorkflowApi:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncWorkflowApiWithRawResponse(client, server, auth)

    async def approve_workflow_job(
        self, id_: UUID, approval_request_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> MessageResponse:
        """Approves a pending approval job in a workflow, allowing the workflow to continue execution.

        Args:
            id_: The unique identifier of the workflow
            approval_request_id: The ID of the approval request to approve
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Approval accepted

        Raises:
            ApiError: Unauthorized ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.approve_workflow_job(
                id_, approval_request_id, request_options=request_options
            ),
        )

    async def cancel_workflow(
        self, id_: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> MessageResponse:
        """Cancels a running workflow and all of its running jobs.

        Args:
            id_: The unique identifier of the workflow
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Workflow cancellation accepted

        Raises:
            ApiError: Unauthorized ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.cancel_workflow(id_, request_options=request_options))

    async def get_workflow(self, id_: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None) -> Workflow:
        """Returns a workflow by its unique identifier, including its status, pipeline ID, and timing information.

        Args:
            id_: The unique identifier of the workflow
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved workflow

        Raises:
            ApiError: Unauthorized Workflow not found ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.get_workflow(id_, request_options=request_options))

    async def list_workflow_jobs(
        self, id_: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> WorkflowJobList:
        """Returns a list of jobs associated with a given workflow.

        Args:
            id_: The unique identifier of the workflow
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved workflow jobs

        Raises:
            ApiError: Unauthorized ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.list_workflow_jobs(id_, request_options=request_options))

    async def rerun_workflow(
        self,
        id_: UUID,
        *,
        body: WorkflowRerunRequest | WorkflowRerunRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> RerunWorkflowResponse:
        """Reruns a workflow. Optionally, specific jobs can be selected for rerun, and SSH access can be enabled for
        debugging.

        Args:
            id_: The unique identifier of the workflow
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Workflow rerun accepted

        Raises:
            ApiError: Unauthorized ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.rerun_workflow(id_, body=body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncWorkflowApiWithRawResponse:
        return self._with_raw_response


class WorkflowApiWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def approve_workflow_job(
        self, id_: UUID, approval_request_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[MessageResponse, ApproveWorkflowJobErrorBody]:
        """Approves a pending approval job in a workflow, allowing the workflow to continue execution.

        Args:
            id_: The unique identifier of the workflow
            approval_request_id: The ID of the approval request to approve
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default_circle_ci_rest_api_v2_context_api(
                "/workflow/{id}/approve/{approval_request_id}"
            ),
            path_params=[param[UUID]("id", id_), param[UUID]("approval_request_id", approval_request_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.api_token,
            decoder=json_decoder[MessageResponse],
            error_mapper=approve_workflow_job_error_mapper,
            request_options=request_options,
        )

    def cancel_workflow(
        self, id_: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[MessageResponse, CancelWorkflowErrorBody]:
        """Cancels a running workflow and all of its running jobs.

        Args:
            id_: The unique identifier of the workflow
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default_circle_ci_rest_api_v2_context_api("/workflow/{id}/cancel"),
            path_params=[param[UUID]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.api_token,
            decoder=json_decoder[MessageResponse],
            error_mapper=cancel_workflow_error_mapper,
            request_options=request_options,
        )

    def get_workflow(
        self, id_: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Workflow, GetWorkflowErrorBody]:
        """Returns a workflow by its unique identifier, including its status, pipeline ID, and timing information.

        Args:
            id_: The unique identifier of the workflow
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_circle_ci_rest_api_v2_context_api("/workflow/{id}"),
            path_params=[param[UUID]("id", id_)],
            auth_scheme=self._auth.api_token,
            decoder=json_decoder[Workflow],
            error_mapper=get_workflow_error_mapper,
            request_options=request_options,
        )

    def list_workflow_jobs(
        self, id_: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[WorkflowJobList, ListWorkflowJobsErrorBody]:
        """Returns a list of jobs associated with a given workflow.

        Args:
            id_: The unique identifier of the workflow
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_circle_ci_rest_api_v2_context_api("/workflow/{id}/job"),
            path_params=[param[UUID]("id", id_)],
            auth_scheme=self._auth.api_token,
            decoder=json_decoder[WorkflowJobList],
            error_mapper=list_workflow_jobs_error_mapper,
            request_options=request_options,
        )

    def rerun_workflow(
        self,
        id_: UUID,
        *,
        body: WorkflowRerunRequest | WorkflowRerunRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[RerunWorkflowResponse, RerunWorkflowErrorBody]:
        """Reruns a workflow. Optionally, specific jobs can be selected for rerun, and SSH access can be enabled for
        debugging.

        Args:
            id_: The unique identifier of the workflow
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default_circle_ci_rest_api_v2_context_api("/workflow/{id}/rerun"),
            path_params=[param[UUID]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[WorkflowRerunRequest | WorkflowRerunRequestDict | None](body),
            auth_scheme=self._auth.api_token,
            decoder=json_decoder[RerunWorkflowResponse],
            error_mapper=rerun_workflow_error_mapper,
            request_options=request_options,
        )


class AsyncWorkflowApiWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def approve_workflow_job(
        self, id_: UUID, approval_request_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[MessageResponse, ApproveWorkflowJobErrorBody]:
        """Approves a pending approval job in a workflow, allowing the workflow to continue execution.

        Args:
            id_: The unique identifier of the workflow
            approval_request_id: The ID of the approval request to approve
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default_circle_ci_rest_api_v2_context_api(
                "/workflow/{id}/approve/{approval_request_id}"
            ),
            path_params=[param[UUID]("id", id_), param[UUID]("approval_request_id", approval_request_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.api_token,
            decoder=async_json_decoder[MessageResponse],
            error_mapper=approve_workflow_job_error_mapper,
            request_options=request_options,
        )

    async def cancel_workflow(
        self, id_: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[MessageResponse, CancelWorkflowErrorBody]:
        """Cancels a running workflow and all of its running jobs.

        Args:
            id_: The unique identifier of the workflow
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default_circle_ci_rest_api_v2_context_api("/workflow/{id}/cancel"),
            path_params=[param[UUID]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.api_token,
            decoder=async_json_decoder[MessageResponse],
            error_mapper=cancel_workflow_error_mapper,
            request_options=request_options,
        )

    async def get_workflow(
        self, id_: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Workflow, GetWorkflowErrorBody]:
        """Returns a workflow by its unique identifier, including its status, pipeline ID, and timing information.

        Args:
            id_: The unique identifier of the workflow
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_circle_ci_rest_api_v2_context_api("/workflow/{id}"),
            path_params=[param[UUID]("id", id_)],
            auth_scheme=self._auth.api_token,
            decoder=async_json_decoder[Workflow],
            error_mapper=get_workflow_error_mapper,
            request_options=request_options,
        )

    async def list_workflow_jobs(
        self, id_: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[WorkflowJobList, ListWorkflowJobsErrorBody]:
        """Returns a list of jobs associated with a given workflow.

        Args:
            id_: The unique identifier of the workflow
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_circle_ci_rest_api_v2_context_api("/workflow/{id}/job"),
            path_params=[param[UUID]("id", id_)],
            auth_scheme=self._auth.api_token,
            decoder=async_json_decoder[WorkflowJobList],
            error_mapper=list_workflow_jobs_error_mapper,
            request_options=request_options,
        )

    async def rerun_workflow(
        self,
        id_: UUID,
        *,
        body: WorkflowRerunRequest | WorkflowRerunRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[RerunWorkflowResponse, RerunWorkflowErrorBody]:
        """Reruns a workflow. Optionally, specific jobs can be selected for rerun, and SSH access can be enabled for
        debugging.

        Args:
            id_: The unique identifier of the workflow
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default_circle_ci_rest_api_v2_context_api("/workflow/{id}/rerun"),
            path_params=[param[UUID]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[WorkflowRerunRequest | WorkflowRerunRequestDict | None](body),
            auth_scheme=self._auth.api_token,
            decoder=async_json_decoder[RerunWorkflowResponse],
            error_mapper=rerun_workflow_error_mapper,
            request_options=request_options,
        )

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
from ..errors.get_workflow_error import GetWorkflowErrorBody, get_workflow_error_mapper
from ..errors.list_workflows_error import ListWorkflowsErrorBody, list_workflows_error_mapper
from ..models.workflow import Workflow
from ..server.server import Server


class Workflows:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = WorkflowsWithRawResponse(client, server, auth)

    def get_workflow(self, workflow_public_id: int, *, request_options: RequestOptionsOrDict | None = None) -> Workflow:
        """Get Workflow returns information about a chosen Workflow.

        Args:
            workflow_public_id: The ID of the Workflow.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.get_workflow(workflow_public_id, request_options=request_options))

    def list_workflows(self, *, request_options: RequestOptionsOrDict | None = None) -> list[Workflow]:
        """Returns a list of all Workflows in the Workspace.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.list_workflows(request_options=request_options))

    @property
    def with_raw_response(self) -> WorkflowsWithRawResponse:
        return self._with_raw_response


class AsyncWorkflows:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncWorkflowsWithRawResponse(client, server, auth)

    async def get_workflow(
        self, workflow_public_id: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Workflow:
        """Get Workflow returns information about a chosen Workflow.

        Args:
            workflow_public_id: The ID of the Workflow.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.get_workflow(workflow_public_id, request_options=request_options))

    async def list_workflows(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> list[Workflow]:
        """Returns a list of all Workflows in the Workspace.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.list_workflows(request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncWorkflowsWithRawResponse:
        return self._with_raw_response


class WorkflowsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_workflow(
        self, workflow_public_id: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Workflow, GetWorkflowErrorBody]:
        """Get Workflow returns information about a chosen Workflow.

        Args:
            workflow_public_id: The ID of the Workflow.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v3/workflows/{workflow-public-id}"),
            path_params=[param[int]("workflow-public-id", workflow_public_id)],
            auth_scheme=self._auth.api_token,
            decoder=json_decoder[Workflow],
            error_mapper=get_workflow_error_mapper,
            request_options=request_options,
        )

    def list_workflows(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[list[Workflow], ListWorkflowsErrorBody]:
        """Returns a list of all Workflows in the Workspace.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v3/workflows"),
            auth_scheme=self._auth.api_token,
            decoder=json_decoder[list[Workflow]],
            error_mapper=list_workflows_error_mapper,
            request_options=request_options,
        )


class AsyncWorkflowsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_workflow(
        self, workflow_public_id: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Workflow, GetWorkflowErrorBody]:
        """Get Workflow returns information about a chosen Workflow.

        Args:
            workflow_public_id: The ID of the Workflow.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v3/workflows/{workflow-public-id}"),
            path_params=[param[int]("workflow-public-id", workflow_public_id)],
            auth_scheme=self._auth.api_token,
            decoder=async_json_decoder[Workflow],
            error_mapper=get_workflow_error_mapper,
            request_options=request_options,
        )

    async def list_workflows(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[list[Workflow], ListWorkflowsErrorBody]:
        """Returns a list of all Workflows in the Workspace.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v3/workflows"),
            auth_scheme=self._auth.api_token,
            decoder=async_json_decoder[list[Workflow]],
            error_mapper=list_workflows_error_mapper,
            request_options=request_options,
        )

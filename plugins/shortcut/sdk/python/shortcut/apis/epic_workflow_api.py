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
    unwrap,
)
from ..errors.get_epic_workflow_error import GetEpicWorkflowErrorBody, get_epic_workflow_error_mapper
from ..models.epic_workflow import EpicWorkflow
from ..server.server import Server


class EpicWorkflowApi:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = EpicWorkflowApiWithRawResponse(client, server, auth)

    def get_epic_workflow(self, *, request_options: RequestOptionsOrDict | None = None) -> EpicWorkflow:
        """Returns the Epic Workflow for the Workspace.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.get_epic_workflow(request_options=request_options))

    @property
    def with_raw_response(self) -> EpicWorkflowApiWithRawResponse:
        return self._with_raw_response


class AsyncEpicWorkflowApi:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncEpicWorkflowApiWithRawResponse(client, server, auth)

    async def get_epic_workflow(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> EpicWorkflow:
        """Returns the Epic Workflow for the Workspace.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.get_epic_workflow(request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncEpicWorkflowApiWithRawResponse:
        return self._with_raw_response


class EpicWorkflowApiWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_epic_workflow(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[EpicWorkflow, GetEpicWorkflowErrorBody]:
        """Returns the Epic Workflow for the Workspace.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v3/epic-workflow"),
            auth_scheme=self._auth.api_token,
            decoder=json_decoder[EpicWorkflow],
            error_mapper=get_epic_workflow_error_mapper,
            request_options=request_options,
        )


class AsyncEpicWorkflowApiWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_epic_workflow(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[EpicWorkflow, GetEpicWorkflowErrorBody]:
        """Returns the Epic Workflow for the Workspace.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v3/epic-workflow"),
            auth_scheme=self._auth.api_token,
            decoder=async_json_decoder[EpicWorkflow],
            error_mapper=get_epic_workflow_error_mapper,
            request_options=request_options,
        )

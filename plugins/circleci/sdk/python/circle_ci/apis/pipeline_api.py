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
from ..errors.continue_pipeline_error import ContinuePipelineErrorBody, continue_pipeline_error_mapper
from ..errors.get_pipeline_config_error import GetPipelineConfigErrorBody, get_pipeline_config_error_mapper
from ..errors.get_pipeline_error import GetPipelineErrorBody, get_pipeline_error_mapper
from ..errors.list_my_project_pipelines_error import (
    ListMyProjectPipelinesErrorBody,
    list_my_project_pipelines_error_mapper,
)
from ..errors.list_pipeline_workflows_error import ListPipelineWorkflowsErrorBody, list_pipeline_workflows_error_mapper
from ..errors.list_pipelines_error import ListPipelinesErrorBody, list_pipelines_error_mapper
from ..errors.list_project_pipelines_error import ListProjectPipelinesErrorBody, list_project_pipelines_error_mapper
from ..errors.trigger_pipeline_error import TriggerPipelineErrorBody, trigger_pipeline_error_mapper
from ..models.message_response import MessageResponse
from ..models.pipeline_circle_ci_rest_api_v2_pipeline_api import PipelineCircleCiRestApiV2PipelineApi
from ..models.pipeline_config import PipelineConfig
from ..models.pipeline_continue_request import PipelineContinueRequest, PipelineContinueRequestDict
from ..models.pipeline_creation import PipelineCreation
from ..models.pipeline_list import PipelineList
from ..models.trigger_pipeline_request import TriggerPipelineRequest, TriggerPipelineRequestDict
from ..models.workflow_list import WorkflowList
from ..server.server import Server


class PipelineApi:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = PipelineApiWithRawResponse(client, server, auth)

    def continue_pipeline(
        self,
        body: PipelineContinueRequest | PipelineContinueRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> MessageResponse:
        """Continues a pipeline from a setup workflow by providing configuration and pipeline parameters.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Pipeline continued successfully

        Raises:
            ApiError: Bad request ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.continue_pipeline(body, request_options=request_options))

    def get_pipeline(
        self, pipeline_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> PipelineCircleCiRestApiV2PipelineApi:
        """Returns a pipeline by its unique identifier.

        Args:
            pipeline_id: The unique identifier of the pipeline
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved pipeline

        Raises:
            ApiError: Unauthorized Pipeline not found ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.get_pipeline(pipeline_id, request_options=request_options))

    def get_pipeline_config(
        self, pipeline_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> PipelineConfig:
        """Returns the configuration source for a given pipeline.

        Args:
            pipeline_id: The unique identifier of the pipeline
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved pipeline configuration

        Raises:
            ApiError: Unauthorized ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.get_pipeline_config(pipeline_id, request_options=request_options))

    def list_my_project_pipelines(
        self, project_slug: str, *, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> PipelineList:
        """Returns a paginated list of pipelines for a project filtered to those triggered by the current user.

        Args:
            project_slug: The project slug in the form vcs-slug/org-name/repo-name (e.g.,
                gh/CircleCI-Public/api-preview-docs)
            page_token: Token for retrieving the next page of results
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved pipelines

        Raises:
            ApiError: Unauthorized ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.list_my_project_pipelines(
                project_slug, page_token=page_token, request_options=request_options
            ),
        )

    def list_pipeline_workflows(
        self, pipeline_id: UUID, *, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> WorkflowList:
        """Returns a paginated list of workflows associated with a given pipeline.

        Args:
            pipeline_id: The unique identifier of the pipeline
            page_token: Token for retrieving the next page of results
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved workflows

        Raises:
            ApiError: Unauthorized ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.list_pipeline_workflows(
                pipeline_id, page_token=page_token, request_options=request_options
            ),
        )

    def list_pipelines(
        self,
        *,
        org_slug: str | None = None,
        mine: bool | None = None,
        page_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PipelineList:
        """Returns all pipelines for the most recently built projects you follow in the organization.

        Args:
            org_slug: Organization slug in the form vcs-slug/org-name
            mine: Filter to only pipelines triggered by the current user
            page_token: Token for retrieving the next page of results
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved pipelines

        Raises:
            ApiError: Unauthorized ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.list_pipelines(
                org_slug=org_slug, mine=mine, page_token=page_token, request_options=request_options
            ),
        )

    def list_project_pipelines(
        self,
        project_slug: str,
        *,
        branch: str | None = None,
        page_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PipelineList:
        """Returns a paginated list of pipelines for a given project.

        Args:
            project_slug: The project slug in the form vcs-slug/org-name/repo-name (e.g.,
                gh/CircleCI-Public/api-preview-docs)
            branch: Filter pipelines by branch name
            page_token: Token for retrieving the next page of results
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved pipelines

        Raises:
            ApiError: Unauthorized ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.list_project_pipelines(
                project_slug, branch=branch, page_token=page_token, request_options=request_options
            ),
        )

    def trigger_pipeline(
        self,
        project_slug: str,
        *,
        body: TriggerPipelineRequest | TriggerPipelineRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PipelineCreation:
        """Triggers a new pipeline on the specified project. Optionally specify a branch, tag, or revision to build.
        Pipeline parameters can also be provided.

        Args:
            project_slug: The project slug in the form vcs-slug/org-name/repo-name (e.g.,
                gh/CircleCI-Public/api-preview-docs)
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Pipeline triggered successfully

        Raises:
            ApiError: Bad request Unauthorized ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.trigger_pipeline(project_slug, body=body, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> PipelineApiWithRawResponse:
        return self._with_raw_response


class AsyncPipelineApi:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncPipelineApiWithRawResponse(client, server, auth)

    async def continue_pipeline(
        self,
        body: PipelineContinueRequest | PipelineContinueRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> MessageResponse:
        """Continues a pipeline from a setup workflow by providing configuration and pipeline parameters.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Pipeline continued successfully

        Raises:
            ApiError: Bad request ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.continue_pipeline(body, request_options=request_options))

    async def get_pipeline(
        self, pipeline_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> PipelineCircleCiRestApiV2PipelineApi:
        """Returns a pipeline by its unique identifier.

        Args:
            pipeline_id: The unique identifier of the pipeline
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved pipeline

        Raises:
            ApiError: Unauthorized Pipeline not found ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.get_pipeline(pipeline_id, request_options=request_options))

    async def get_pipeline_config(
        self, pipeline_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> PipelineConfig:
        """Returns the configuration source for a given pipeline.

        Args:
            pipeline_id: The unique identifier of the pipeline
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved pipeline configuration

        Raises:
            ApiError: Unauthorized ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.get_pipeline_config(pipeline_id, request_options=request_options))

    async def list_my_project_pipelines(
        self,
        project_slug: str,
        *,
        page_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PipelineList:
        """Returns a paginated list of pipelines for a project filtered to those triggered by the current user.

        Args:
            project_slug: The project slug in the form vcs-slug/org-name/repo-name (e.g.,
                gh/CircleCI-Public/api-preview-docs)
            page_token: Token for retrieving the next page of results
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved pipelines

        Raises:
            ApiError: Unauthorized ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.list_my_project_pipelines(
                project_slug, page_token=page_token, request_options=request_options
            ),
        )

    async def list_pipeline_workflows(
        self,
        pipeline_id: UUID,
        *,
        page_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> WorkflowList:
        """Returns a paginated list of workflows associated with a given pipeline.

        Args:
            pipeline_id: The unique identifier of the pipeline
            page_token: Token for retrieving the next page of results
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved workflows

        Raises:
            ApiError: Unauthorized ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.list_pipeline_workflows(
                pipeline_id, page_token=page_token, request_options=request_options
            ),
        )

    async def list_pipelines(
        self,
        *,
        org_slug: str | None = None,
        mine: bool | None = None,
        page_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PipelineList:
        """Returns all pipelines for the most recently built projects you follow in the organization.

        Args:
            org_slug: Organization slug in the form vcs-slug/org-name
            mine: Filter to only pipelines triggered by the current user
            page_token: Token for retrieving the next page of results
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved pipelines

        Raises:
            ApiError: Unauthorized ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.list_pipelines(
                org_slug=org_slug, mine=mine, page_token=page_token, request_options=request_options
            ),
        )

    async def list_project_pipelines(
        self,
        project_slug: str,
        *,
        branch: str | None = None,
        page_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PipelineList:
        """Returns a paginated list of pipelines for a given project.

        Args:
            project_slug: The project slug in the form vcs-slug/org-name/repo-name (e.g.,
                gh/CircleCI-Public/api-preview-docs)
            branch: Filter pipelines by branch name
            page_token: Token for retrieving the next page of results
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved pipelines

        Raises:
            ApiError: Unauthorized ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.list_project_pipelines(
                project_slug, branch=branch, page_token=page_token, request_options=request_options
            ),
        )

    async def trigger_pipeline(
        self,
        project_slug: str,
        *,
        body: TriggerPipelineRequest | TriggerPipelineRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PipelineCreation:
        """Triggers a new pipeline on the specified project. Optionally specify a branch, tag, or revision to build.
        Pipeline parameters can also be provided.

        Args:
            project_slug: The project slug in the form vcs-slug/org-name/repo-name (e.g.,
                gh/CircleCI-Public/api-preview-docs)
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Pipeline triggered successfully

        Raises:
            ApiError: Bad request Unauthorized ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.trigger_pipeline(project_slug, body=body, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncPipelineApiWithRawResponse:
        return self._with_raw_response


class PipelineApiWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def continue_pipeline(
        self,
        body: PipelineContinueRequest | PipelineContinueRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[MessageResponse, ContinuePipelineErrorBody]:
        """Continues a pipeline from a setup workflow by providing configuration and pipeline parameters.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default_circle_ci_rest_api_v2_context_api("/pipeline/continue"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PipelineContinueRequest | PipelineContinueRequestDict](body),
            auth_scheme=self._auth.api_token,
            decoder=json_decoder[MessageResponse],
            error_mapper=continue_pipeline_error_mapper,
            request_options=request_options,
        )

    def get_pipeline(
        self, pipeline_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[PipelineCircleCiRestApiV2PipelineApi, GetPipelineErrorBody]:
        """Returns a pipeline by its unique identifier.

        Args:
            pipeline_id: The unique identifier of the pipeline
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_circle_ci_rest_api_v2_context_api("/pipeline/{pipeline-id}"),
            path_params=[param[UUID]("pipeline-id", pipeline_id)],
            auth_scheme=self._auth.api_token,
            decoder=json_decoder[PipelineCircleCiRestApiV2PipelineApi],
            error_mapper=get_pipeline_error_mapper,
            request_options=request_options,
        )

    def get_pipeline_config(
        self, pipeline_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[PipelineConfig, GetPipelineConfigErrorBody]:
        """Returns the configuration source for a given pipeline.

        Args:
            pipeline_id: The unique identifier of the pipeline
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_circle_ci_rest_api_v2_context_api("/pipeline/{pipeline-id}/config"),
            path_params=[param[UUID]("pipeline-id", pipeline_id)],
            auth_scheme=self._auth.api_token,
            decoder=json_decoder[PipelineConfig],
            error_mapper=get_pipeline_config_error_mapper,
            request_options=request_options,
        )

    def list_my_project_pipelines(
        self, project_slug: str, *, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[PipelineList, ListMyProjectPipelinesErrorBody]:
        """Returns a paginated list of pipelines for a project filtered to those triggered by the current user.

        Args:
            project_slug: The project slug in the form vcs-slug/org-name/repo-name (e.g.,
                gh/CircleCI-Public/api-preview-docs)
            page_token: Token for retrieving the next page of results
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_circle_ci_rest_api_v2_context_api(
                "/project/{project-slug}/pipeline/mine"
            ),
            path_params=[param[str]("project-slug", project_slug)],
            query_params=[param[str | None]("page-token", page_token)],
            auth_scheme=self._auth.api_token,
            decoder=json_decoder[PipelineList],
            error_mapper=list_my_project_pipelines_error_mapper,
            request_options=request_options,
        )

    def list_pipeline_workflows(
        self, pipeline_id: UUID, *, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[WorkflowList, ListPipelineWorkflowsErrorBody]:
        """Returns a paginated list of workflows associated with a given pipeline.

        Args:
            pipeline_id: The unique identifier of the pipeline
            page_token: Token for retrieving the next page of results
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_circle_ci_rest_api_v2_context_api("/pipeline/{pipeline-id}/workflow"),
            path_params=[param[UUID]("pipeline-id", pipeline_id)],
            query_params=[param[str | None]("page-token", page_token)],
            auth_scheme=self._auth.api_token,
            decoder=json_decoder[WorkflowList],
            error_mapper=list_pipeline_workflows_error_mapper,
            request_options=request_options,
        )

    def list_pipelines(
        self,
        *,
        org_slug: str | None = None,
        mine: bool | None = None,
        page_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PipelineList, ListPipelinesErrorBody]:
        """Returns all pipelines for the most recently built projects you follow in the organization.

        Args:
            org_slug: Organization slug in the form vcs-slug/org-name
            mine: Filter to only pipelines triggered by the current user
            page_token: Token for retrieving the next page of results
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_circle_ci_rest_api_v2_context_api("/pipeline"),
            query_params=[
                param[str | None]("org-slug", org_slug),
                param[bool | None]("mine", mine),
                param[str | None]("page-token", page_token),
            ],
            auth_scheme=self._auth.api_token,
            decoder=json_decoder[PipelineList],
            error_mapper=list_pipelines_error_mapper,
            request_options=request_options,
        )

    def list_project_pipelines(
        self,
        project_slug: str,
        *,
        branch: str | None = None,
        page_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PipelineList, ListProjectPipelinesErrorBody]:
        """Returns a paginated list of pipelines for a given project.

        Args:
            project_slug: The project slug in the form vcs-slug/org-name/repo-name (e.g.,
                gh/CircleCI-Public/api-preview-docs)
            branch: Filter pipelines by branch name
            page_token: Token for retrieving the next page of results
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_circle_ci_rest_api_v2_context_api("/project/{project-slug}/pipeline"),
            path_params=[param[str]("project-slug", project_slug)],
            query_params=[param[str | None]("branch", branch), param[str | None]("page-token", page_token)],
            auth_scheme=self._auth.api_token,
            decoder=json_decoder[PipelineList],
            error_mapper=list_project_pipelines_error_mapper,
            request_options=request_options,
        )

    def trigger_pipeline(
        self,
        project_slug: str,
        *,
        body: TriggerPipelineRequest | TriggerPipelineRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PipelineCreation, TriggerPipelineErrorBody]:
        """Triggers a new pipeline on the specified project. Optionally specify a branch, tag, or revision to build.
        Pipeline parameters can also be provided.

        Args:
            project_slug: The project slug in the form vcs-slug/org-name/repo-name (e.g.,
                gh/CircleCI-Public/api-preview-docs)
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default_circle_ci_rest_api_v2_context_api("/project/{project-slug}/pipeline"),
            path_params=[param[str]("project-slug", project_slug)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[TriggerPipelineRequest | TriggerPipelineRequestDict | None](body),
            auth_scheme=self._auth.api_token,
            decoder=json_decoder[PipelineCreation],
            error_mapper=trigger_pipeline_error_mapper,
            request_options=request_options,
        )


class AsyncPipelineApiWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def continue_pipeline(
        self,
        body: PipelineContinueRequest | PipelineContinueRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[MessageResponse, ContinuePipelineErrorBody]:
        """Continues a pipeline from a setup workflow by providing configuration and pipeline parameters.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default_circle_ci_rest_api_v2_context_api("/pipeline/continue"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PipelineContinueRequest | PipelineContinueRequestDict](body),
            auth_scheme=self._auth.api_token,
            decoder=async_json_decoder[MessageResponse],
            error_mapper=continue_pipeline_error_mapper,
            request_options=request_options,
        )

    async def get_pipeline(
        self, pipeline_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[PipelineCircleCiRestApiV2PipelineApi, GetPipelineErrorBody]:
        """Returns a pipeline by its unique identifier.

        Args:
            pipeline_id: The unique identifier of the pipeline
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_circle_ci_rest_api_v2_context_api("/pipeline/{pipeline-id}"),
            path_params=[param[UUID]("pipeline-id", pipeline_id)],
            auth_scheme=self._auth.api_token,
            decoder=async_json_decoder[PipelineCircleCiRestApiV2PipelineApi],
            error_mapper=get_pipeline_error_mapper,
            request_options=request_options,
        )

    async def get_pipeline_config(
        self, pipeline_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[PipelineConfig, GetPipelineConfigErrorBody]:
        """Returns the configuration source for a given pipeline.

        Args:
            pipeline_id: The unique identifier of the pipeline
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_circle_ci_rest_api_v2_context_api("/pipeline/{pipeline-id}/config"),
            path_params=[param[UUID]("pipeline-id", pipeline_id)],
            auth_scheme=self._auth.api_token,
            decoder=async_json_decoder[PipelineConfig],
            error_mapper=get_pipeline_config_error_mapper,
            request_options=request_options,
        )

    async def list_my_project_pipelines(
        self,
        project_slug: str,
        *,
        page_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PipelineList, ListMyProjectPipelinesErrorBody]:
        """Returns a paginated list of pipelines for a project filtered to those triggered by the current user.

        Args:
            project_slug: The project slug in the form vcs-slug/org-name/repo-name (e.g.,
                gh/CircleCI-Public/api-preview-docs)
            page_token: Token for retrieving the next page of results
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_circle_ci_rest_api_v2_context_api(
                "/project/{project-slug}/pipeline/mine"
            ),
            path_params=[param[str]("project-slug", project_slug)],
            query_params=[param[str | None]("page-token", page_token)],
            auth_scheme=self._auth.api_token,
            decoder=async_json_decoder[PipelineList],
            error_mapper=list_my_project_pipelines_error_mapper,
            request_options=request_options,
        )

    async def list_pipeline_workflows(
        self,
        pipeline_id: UUID,
        *,
        page_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[WorkflowList, ListPipelineWorkflowsErrorBody]:
        """Returns a paginated list of workflows associated with a given pipeline.

        Args:
            pipeline_id: The unique identifier of the pipeline
            page_token: Token for retrieving the next page of results
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_circle_ci_rest_api_v2_context_api("/pipeline/{pipeline-id}/workflow"),
            path_params=[param[UUID]("pipeline-id", pipeline_id)],
            query_params=[param[str | None]("page-token", page_token)],
            auth_scheme=self._auth.api_token,
            decoder=async_json_decoder[WorkflowList],
            error_mapper=list_pipeline_workflows_error_mapper,
            request_options=request_options,
        )

    async def list_pipelines(
        self,
        *,
        org_slug: str | None = None,
        mine: bool | None = None,
        page_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PipelineList, ListPipelinesErrorBody]:
        """Returns all pipelines for the most recently built projects you follow in the organization.

        Args:
            org_slug: Organization slug in the form vcs-slug/org-name
            mine: Filter to only pipelines triggered by the current user
            page_token: Token for retrieving the next page of results
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_circle_ci_rest_api_v2_context_api("/pipeline"),
            query_params=[
                param[str | None]("org-slug", org_slug),
                param[bool | None]("mine", mine),
                param[str | None]("page-token", page_token),
            ],
            auth_scheme=self._auth.api_token,
            decoder=async_json_decoder[PipelineList],
            error_mapper=list_pipelines_error_mapper,
            request_options=request_options,
        )

    async def list_project_pipelines(
        self,
        project_slug: str,
        *,
        branch: str | None = None,
        page_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PipelineList, ListProjectPipelinesErrorBody]:
        """Returns a paginated list of pipelines for a given project.

        Args:
            project_slug: The project slug in the form vcs-slug/org-name/repo-name (e.g.,
                gh/CircleCI-Public/api-preview-docs)
            branch: Filter pipelines by branch name
            page_token: Token for retrieving the next page of results
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_circle_ci_rest_api_v2_context_api("/project/{project-slug}/pipeline"),
            path_params=[param[str]("project-slug", project_slug)],
            query_params=[param[str | None]("branch", branch), param[str | None]("page-token", page_token)],
            auth_scheme=self._auth.api_token,
            decoder=async_json_decoder[PipelineList],
            error_mapper=list_project_pipelines_error_mapper,
            request_options=request_options,
        )

    async def trigger_pipeline(
        self,
        project_slug: str,
        *,
        body: TriggerPipelineRequest | TriggerPipelineRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PipelineCreation, TriggerPipelineErrorBody]:
        """Triggers a new pipeline on the specified project. Optionally specify a branch, tag, or revision to build.
        Pipeline parameters can also be provided.

        Args:
            project_slug: The project slug in the form vcs-slug/org-name/repo-name (e.g.,
                gh/CircleCI-Public/api-preview-docs)
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default_circle_ci_rest_api_v2_context_api("/project/{project-slug}/pipeline"),
            path_params=[param[str]("project-slug", project_slug)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[TriggerPipelineRequest | TriggerPipelineRequestDict | None](body),
            auth_scheme=self._auth.api_token,
            decoder=async_json_decoder[PipelineCreation],
            error_mapper=trigger_pipeline_error_mapper,
            request_options=request_options,
        )

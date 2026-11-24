from __future__ import annotations

from uuid import UUID, uuid4

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    AnySchemes,
    ApiResult,
    AsyncAnySchemes,
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
from ..errors.create_deployment_error import CreateDeploymentErrorBody, create_deployment_error_mapper
from ..errors.get_all_deployments_error import GetAllDeploymentsErrorBody, get_all_deployments_error_mapper
from ..errors.get_deployment_error import GetDeploymentErrorBody, get_deployment_error_mapper
from ..errors.get_deployment_logs_error import GetDeploymentLogsErrorBody, get_deployment_logs_error_mapper
from ..errors.get_server_logs_error import GetServerLogsErrorBody, get_server_logs_error_mapper
from ..models.create_deployment_request import CreateDeploymentRequest, CreateDeploymentRequestDict
from ..models.deployment import Deployment
from ..models.deployment_list import DeploymentList
from ..models.log_response import LogResponse
from ..server.server import Server


class Deployments:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = DeploymentsWithRawResponse(client, server, auth)

    def create_deployment(
        self,
        project_uid: str,
        env_uid: str,
        body: CreateDeploymentRequest | CreateDeploymentRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Deployment:
        """Triggers a new deployment to the specified environment. Requires a previously uploaded build artifact
        referenced by its upload URL. The deployment process builds and publishes the application to the environment's
        CDN infrastructure.

        Args:
            project_uid: The unique identifier of the Launch project.
            env_uid: The unique identifier of the deployment environment.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Deployment created and queued for processing.

        Raises:
            ApiError: The request is malformed or contains invalid parameters. Authentication credentials are missing or
                invalid. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.create_deployment(project_uid, env_uid, body, request_options=request_options)
        )

    def get_all_deployments(
        self, project_uid: str, env_uid: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> DeploymentList:
        """Retrieves all deployments for a specific environment, showing deployment history with status, creation times,
        and build metadata.

        Args:
            project_uid: The unique identifier of the Launch project.
            env_uid: The unique identifier of the deployment environment.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A list of deployments for the environment.

        Raises:
            ApiError: Authentication credentials are missing or invalid. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_all_deployments(project_uid, env_uid, request_options=request_options)
        )

    def get_deployment(
        self, project_uid: str, env_uid: str, deploy_uid: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> Deployment:
        """Retrieves the full details of a specific deployment including its status, build configuration, and completion
        information.

        Args:
            project_uid: The unique identifier of the Launch project.
            env_uid: The unique identifier of the deployment environment.
            deploy_uid: The unique identifier of the deployment.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The requested deployment details.

        Raises:
            ApiError: Authentication credentials are missing or invalid. The requested resource was not found. ``error``
                is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_deployment(project_uid, env_uid, deploy_uid, request_options=request_options)
        )

    def get_deployment_logs(
        self, project_uid: str, env_uid: str, deploy_uid: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> LogResponse:
        """Retrieves the build and deployment logs for a specific deployment, useful for debugging failed deployments
        and monitoring build progress.

        Args:
            project_uid: The unique identifier of the Launch project.
            env_uid: The unique identifier of the deployment environment.
            deploy_uid: The unique identifier of the deployment.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deployment log output.

        Raises:
            ApiError: Authentication credentials are missing or invalid. The requested resource was not found. ``error``
                is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_deployment_logs(
                project_uid, env_uid, deploy_uid, request_options=request_options
            ),
        )

    def get_server_logs(
        self, project_uid: str, env_uid: str, deploy_uid: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> LogResponse:
        """Retrieves server-side runtime logs for a deployed environment, useful for debugging server-side rendering
        issues and monitoring application runtime behavior.

        Args:
            project_uid: The unique identifier of the Launch project.
            env_uid: The unique identifier of the deployment environment.
            deploy_uid: The unique identifier of the deployment.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The server runtime logs.

        Raises:
            ApiError: Authentication credentials are missing or invalid. The requested resource was not found. ``error``
                is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_server_logs(project_uid, env_uid, deploy_uid, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> DeploymentsWithRawResponse:
        return self._with_raw_response


class AsyncDeployments:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncDeploymentsWithRawResponse(client, server, auth)

    async def create_deployment(
        self,
        project_uid: str,
        env_uid: str,
        body: CreateDeploymentRequest | CreateDeploymentRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Deployment:
        """Triggers a new deployment to the specified environment. Requires a previously uploaded build artifact
        referenced by its upload URL. The deployment process builds and publishes the application to the environment's
        CDN infrastructure.

        Args:
            project_uid: The unique identifier of the Launch project.
            env_uid: The unique identifier of the deployment environment.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Deployment created and queued for processing.

        Raises:
            ApiError: The request is malformed or contains invalid parameters. Authentication credentials are missing or
                invalid. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.create_deployment(project_uid, env_uid, body, request_options=request_options)
        )

    async def get_all_deployments(
        self, project_uid: str, env_uid: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> DeploymentList:
        """Retrieves all deployments for a specific environment, showing deployment history with status, creation times,
        and build metadata.

        Args:
            project_uid: The unique identifier of the Launch project.
            env_uid: The unique identifier of the deployment environment.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A list of deployments for the environment.

        Raises:
            ApiError: Authentication credentials are missing or invalid. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_all_deployments(project_uid, env_uid, request_options=request_options)
        )

    async def get_deployment(
        self,
        project_uid: str,
        env_uid: str,
        deploy_uid: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Deployment:
        """Retrieves the full details of a specific deployment including its status, build configuration, and completion
        information.

        Args:
            project_uid: The unique identifier of the Launch project.
            env_uid: The unique identifier of the deployment environment.
            deploy_uid: The unique identifier of the deployment.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The requested deployment details.

        Raises:
            ApiError: Authentication credentials are missing or invalid. The requested resource was not found. ``error``
                is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_deployment(
                project_uid, env_uid, deploy_uid, request_options=request_options
            ),
        )

    async def get_deployment_logs(
        self,
        project_uid: str,
        env_uid: str,
        deploy_uid: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> LogResponse:
        """Retrieves the build and deployment logs for a specific deployment, useful for debugging failed deployments
        and monitoring build progress.

        Args:
            project_uid: The unique identifier of the Launch project.
            env_uid: The unique identifier of the deployment environment.
            deploy_uid: The unique identifier of the deployment.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deployment log output.

        Raises:
            ApiError: Authentication credentials are missing or invalid. The requested resource was not found. ``error``
                is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_deployment_logs(
                project_uid, env_uid, deploy_uid, request_options=request_options
            ),
        )

    async def get_server_logs(
        self,
        project_uid: str,
        env_uid: str,
        deploy_uid: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> LogResponse:
        """Retrieves server-side runtime logs for a deployed environment, useful for debugging server-side rendering
        issues and monitoring application runtime behavior.

        Args:
            project_uid: The unique identifier of the Launch project.
            env_uid: The unique identifier of the deployment environment.
            deploy_uid: The unique identifier of the deployment.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The server runtime logs.

        Raises:
            ApiError: Authentication credentials are missing or invalid. The requested resource was not found. ``error``
                is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_server_logs(
                project_uid, env_uid, deploy_uid, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncDeploymentsWithRawResponse:
        return self._with_raw_response


class DeploymentsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_deployment(
        self,
        project_uid: str,
        env_uid: str,
        body: CreateDeploymentRequest | CreateDeploymentRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Deployment, CreateDeploymentErrorBody]:
        """Triggers a new deployment to the specified environment. Requires a previously uploaded build artifact
        referenced by its upload URL. The deployment process builds and publishes the application to the environment's
        CDN infrastructure.

        Args:
            project_uid: The unique identifier of the Launch project.
            env_uid: The unique identifier of the deployment environment.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/projects/{project_uid}/environments/{env_uid}/deployments"),
            path_params=[param[str]("project_uid", project_uid), param[str]("env_uid", env_uid)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateDeploymentRequest | CreateDeploymentRequestDict](body),
            auth_scheme=AnySchemes(self._auth.bearer_auth, self._auth.authtoken_auth),
            decoder=json_decoder[Deployment],
            error_mapper=create_deployment_error_mapper,
            request_options=request_options,
        )

    def get_all_deployments(
        self, project_uid: str, env_uid: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[DeploymentList, GetAllDeploymentsErrorBody]:
        """Retrieves all deployments for a specific environment, showing deployment history with status, creation times,
        and build metadata.

        Args:
            project_uid: The unique identifier of the Launch project.
            env_uid: The unique identifier of the deployment environment.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/projects/{project_uid}/environments/{env_uid}/deployments"),
            path_params=[param[str]("project_uid", project_uid), param[str]("env_uid", env_uid)],
            auth_scheme=AnySchemes(self._auth.bearer_auth, self._auth.authtoken_auth),
            decoder=json_decoder[DeploymentList],
            error_mapper=get_all_deployments_error_mapper,
            request_options=request_options,
        )

    def get_deployment(
        self, project_uid: str, env_uid: str, deploy_uid: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Deployment, GetDeploymentErrorBody]:
        """Retrieves the full details of a specific deployment including its status, build configuration, and completion
        information.

        Args:
            project_uid: The unique identifier of the Launch project.
            env_uid: The unique identifier of the deployment environment.
            deploy_uid: The unique identifier of the deployment.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/projects/{project_uid}/environments/{env_uid}/deployments/{deploy_uid}"
            ),
            path_params=[
                param[str]("project_uid", project_uid),
                param[str]("env_uid", env_uid),
                param[str]("deploy_uid", deploy_uid),
            ],
            auth_scheme=AnySchemes(self._auth.bearer_auth, self._auth.authtoken_auth),
            decoder=json_decoder[Deployment],
            error_mapper=get_deployment_error_mapper,
            request_options=request_options,
        )

    def get_deployment_logs(
        self, project_uid: str, env_uid: str, deploy_uid: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[LogResponse, GetDeploymentLogsErrorBody]:
        """Retrieves the build and deployment logs for a specific deployment, useful for debugging failed deployments
        and monitoring build progress.

        Args:
            project_uid: The unique identifier of the Launch project.
            env_uid: The unique identifier of the deployment environment.
            deploy_uid: The unique identifier of the deployment.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/projects/{project_uid}/environments/{env_uid}/deployments/{deploy_uid}/logs"
            ),
            path_params=[
                param[str]("project_uid", project_uid),
                param[str]("env_uid", env_uid),
                param[str]("deploy_uid", deploy_uid),
            ],
            auth_scheme=AnySchemes(self._auth.bearer_auth, self._auth.authtoken_auth),
            decoder=json_decoder[LogResponse],
            error_mapper=get_deployment_logs_error_mapper,
            request_options=request_options,
        )

    def get_server_logs(
        self, project_uid: str, env_uid: str, deploy_uid: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[LogResponse, GetServerLogsErrorBody]:
        """Retrieves server-side runtime logs for a deployed environment, useful for debugging server-side rendering
        issues and monitoring application runtime behavior.

        Args:
            project_uid: The unique identifier of the Launch project.
            env_uid: The unique identifier of the deployment environment.
            deploy_uid: The unique identifier of the deployment.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/projects/{project_uid}/environments/{env_uid}/deployments/{deploy_uid}/server-logs"
            ),
            path_params=[
                param[str]("project_uid", project_uid),
                param[str]("env_uid", env_uid),
                param[str]("deploy_uid", deploy_uid),
            ],
            auth_scheme=AnySchemes(self._auth.bearer_auth, self._auth.authtoken_auth),
            decoder=json_decoder[LogResponse],
            error_mapper=get_server_logs_error_mapper,
            request_options=request_options,
        )


class AsyncDeploymentsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_deployment(
        self,
        project_uid: str,
        env_uid: str,
        body: CreateDeploymentRequest | CreateDeploymentRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Deployment, CreateDeploymentErrorBody]:
        """Triggers a new deployment to the specified environment. Requires a previously uploaded build artifact
        referenced by its upload URL. The deployment process builds and publishes the application to the environment's
        CDN infrastructure.

        Args:
            project_uid: The unique identifier of the Launch project.
            env_uid: The unique identifier of the deployment environment.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/projects/{project_uid}/environments/{env_uid}/deployments"),
            path_params=[param[str]("project_uid", project_uid), param[str]("env_uid", env_uid)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateDeploymentRequest | CreateDeploymentRequestDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.bearer_auth, self._auth.authtoken_auth),
            decoder=async_json_decoder[Deployment],
            error_mapper=create_deployment_error_mapper,
            request_options=request_options,
        )

    async def get_all_deployments(
        self, project_uid: str, env_uid: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[DeploymentList, GetAllDeploymentsErrorBody]:
        """Retrieves all deployments for a specific environment, showing deployment history with status, creation times,
        and build metadata.

        Args:
            project_uid: The unique identifier of the Launch project.
            env_uid: The unique identifier of the deployment environment.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/projects/{project_uid}/environments/{env_uid}/deployments"),
            path_params=[param[str]("project_uid", project_uid), param[str]("env_uid", env_uid)],
            auth_scheme=AsyncAnySchemes(self._auth.bearer_auth, self._auth.authtoken_auth),
            decoder=async_json_decoder[DeploymentList],
            error_mapper=get_all_deployments_error_mapper,
            request_options=request_options,
        )

    async def get_deployment(
        self,
        project_uid: str,
        env_uid: str,
        deploy_uid: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Deployment, GetDeploymentErrorBody]:
        """Retrieves the full details of a specific deployment including its status, build configuration, and completion
        information.

        Args:
            project_uid: The unique identifier of the Launch project.
            env_uid: The unique identifier of the deployment environment.
            deploy_uid: The unique identifier of the deployment.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/projects/{project_uid}/environments/{env_uid}/deployments/{deploy_uid}"
            ),
            path_params=[
                param[str]("project_uid", project_uid),
                param[str]("env_uid", env_uid),
                param[str]("deploy_uid", deploy_uid),
            ],
            auth_scheme=AsyncAnySchemes(self._auth.bearer_auth, self._auth.authtoken_auth),
            decoder=async_json_decoder[Deployment],
            error_mapper=get_deployment_error_mapper,
            request_options=request_options,
        )

    async def get_deployment_logs(
        self,
        project_uid: str,
        env_uid: str,
        deploy_uid: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[LogResponse, GetDeploymentLogsErrorBody]:
        """Retrieves the build and deployment logs for a specific deployment, useful for debugging failed deployments
        and monitoring build progress.

        Args:
            project_uid: The unique identifier of the Launch project.
            env_uid: The unique identifier of the deployment environment.
            deploy_uid: The unique identifier of the deployment.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/projects/{project_uid}/environments/{env_uid}/deployments/{deploy_uid}/logs"
            ),
            path_params=[
                param[str]("project_uid", project_uid),
                param[str]("env_uid", env_uid),
                param[str]("deploy_uid", deploy_uid),
            ],
            auth_scheme=AsyncAnySchemes(self._auth.bearer_auth, self._auth.authtoken_auth),
            decoder=async_json_decoder[LogResponse],
            error_mapper=get_deployment_logs_error_mapper,
            request_options=request_options,
        )

    async def get_server_logs(
        self,
        project_uid: str,
        env_uid: str,
        deploy_uid: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[LogResponse, GetServerLogsErrorBody]:
        """Retrieves server-side runtime logs for a deployed environment, useful for debugging server-side rendering
        issues and monitoring application runtime behavior.

        Args:
            project_uid: The unique identifier of the Launch project.
            env_uid: The unique identifier of the deployment environment.
            deploy_uid: The unique identifier of the deployment.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/projects/{project_uid}/environments/{env_uid}/deployments/{deploy_uid}/server-logs"
            ),
            path_params=[
                param[str]("project_uid", project_uid),
                param[str]("env_uid", env_uid),
                param[str]("deploy_uid", deploy_uid),
            ],
            auth_scheme=AsyncAnySchemes(self._auth.bearer_auth, self._auth.authtoken_auth),
            decoder=async_json_decoder[LogResponse],
            error_mapper=get_server_logs_error_mapper,
            request_options=request_options,
        )

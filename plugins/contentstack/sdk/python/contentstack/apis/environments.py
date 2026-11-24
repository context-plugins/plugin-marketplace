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
    async_empty_response,
    async_json_decoder,
    empty_response,
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.create_environment_error import CreateEnvironmentErrorBody, create_environment_error_mapper
from ..errors.delete_environment_error import DeleteEnvironmentErrorBody, delete_environment_error_mapper
from ..errors.get_all_environments_error import GetAllEnvironmentsErrorBody, get_all_environments_error_mapper
from ..errors.get_environment_error import GetEnvironmentErrorBody, get_environment_error_mapper
from ..errors.get_projects_by_project_uid_environments_error import (
    GetProjectsByProjectUidEnvironmentsErrorBody,
    get_projects_by_project_uid_environments_error_mapper,
)
from ..errors.revalidate_cache_error import RevalidateCacheErrorBody, revalidate_cache_error_mapper
from ..errors.update_environment_error import UpdateEnvironmentErrorBody, update_environment_error_mapper
from ..models.create_environment_request import CreateEnvironmentRequest, CreateEnvironmentRequestDict
from ..models.environment2 import Environment2
from ..models.environment_list import EnvironmentList
from ..models.environment_list2 import EnvironmentList2
from ..models.projects_environments_revalidate_cache_request import (
    ProjectsEnvironmentsRevalidateCacheRequest,
    ProjectsEnvironmentsRevalidateCacheRequestDict,
)
from ..server.server import Server


class Environments:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = EnvironmentsWithRawResponse(client, server, auth)

    def create_environment(
        self,
        project_uid: str,
        body: CreateEnvironmentRequest | CreateEnvironmentRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Environment2:
        """Creates a new deployment environment for a Launch project. Each environment can have its own domain, build
        configuration, and deployment settings.

        Args:
            project_uid: The unique identifier of the Launch project.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The newly created environment.

        Raises:
            ApiError: The request is malformed or contains invalid parameters. Authentication credentials are missing or
                invalid. ``error`` is ``Error2ContentstackEnvironmentsApi | Error2 | RawError``."""
        return unwrap(self._with_raw_response.create_environment(project_uid, body, request_options=request_options))

    def delete_environment(
        self, project_uid: str, env_uid: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Permanently deletes a deployment environment and its deployment history. This action is irreversible.

        Args:
            project_uid: The unique identifier of the Launch project.
            env_uid: The unique identifier of the deployment environment.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Environment deleted successfully.

        Raises:
            ApiError: Authentication credentials are missing or invalid. The requested resource was not found. ``error``
                is ``Error2 | Error2ContentstackEnvironmentsApi | RawError``."""
        return unwrap(self._with_raw_response.delete_environment(project_uid, env_uid, request_options=request_options))

    def get_all_environments(
        self, api_key: str, *, authtoken: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> EnvironmentList:
        """Retrieves all deployment environments configured for the stack, such as production, staging, and development.

        Args:
            api_key: The API key identifying the Contentstack stack.
            authtoken: User session token for authentication. Required if not using management token.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A list of environments in the stack.

        Raises:
            ApiError: Authentication credentials are missing or invalid. ``error`` is ``Error2 | RawError``."""
        return unwrap(
            self._with_raw_response.get_all_environments(api_key, authtoken=authtoken, request_options=request_options)
        )

    def get_environment(
        self, project_uid: str, env_uid: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> Environment2:
        """Retrieves details for a specific deployment environment including its domain configuration, framework
        settings, and latest deployment status.

        Args:
            project_uid: The unique identifier of the Launch project.
            env_uid: The unique identifier of the deployment environment.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The requested environment.

        Raises:
            ApiError: Authentication credentials are missing or invalid. The requested resource was not found. ``error``
                is ``Error2 | Error2ContentstackEnvironmentsApi | RawError``."""
        return unwrap(self._with_raw_response.get_environment(project_uid, env_uid, request_options=request_options))

    def get_projects_by_project_uid_environments(
        self, project_uid: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> EnvironmentList2:
        """Retrieves all deployment environments configured for a Launch project, including their domain configurations
        and current deployment status.

        Args:
            project_uid: The unique identifier of the Launch project.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A list of environments for the project.

        Raises:
            ApiError: Authentication credentials are missing or invalid. ``error`` is ``Error2 | RawError``."""
        return unwrap(
            self._with_raw_response.get_projects_by_project_uid_environments(
                project_uid, request_options=request_options
            ),
        )

    def revalidate_cache(
        self,
        project_uid: str,
        env_uid: str,
        *,
        body: ProjectsEnvironmentsRevalidateCacheRequest | ProjectsEnvironmentsRevalidateCacheRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Triggers a CDN cache revalidation for the specified environment, forcing the CDN to fetch fresh content on
        the next request. Subject to cache revalidation quota limits per organization.

        Args:
            project_uid: The unique identifier of the Launch project.
            env_uid: The unique identifier of the deployment environment.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Cache revalidation triggered successfully.

        Raises:
            ApiError: Authentication credentials are missing or invalid. The requested resource was not found. ``error``
                is ``Error2 | Error2ContentstackEnvironmentsApi | RawError``."""
        return unwrap(
            self._with_raw_response.revalidate_cache(project_uid, env_uid, body=body, request_options=request_options)
        )

    def update_environment(
        self,
        project_uid: str,
        env_uid: str,
        body: CreateEnvironmentRequest | CreateEnvironmentRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Environment2:
        """Updates the configuration of a deployment environment such as domain settings or build configuration.

        Args:
            project_uid: The unique identifier of the Launch project.
            env_uid: The unique identifier of the deployment environment.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The updated environment.

        Raises:
            ApiError: The request is malformed or contains invalid parameters. Authentication credentials are missing or
                invalid. ``error`` is ``Error2ContentstackEnvironmentsApi | Error2 | RawError``."""
        return unwrap(
            self._with_raw_response.update_environment(project_uid, env_uid, body, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> EnvironmentsWithRawResponse:
        return self._with_raw_response


class AsyncEnvironments:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncEnvironmentsWithRawResponse(client, server, auth)

    async def create_environment(
        self,
        project_uid: str,
        body: CreateEnvironmentRequest | CreateEnvironmentRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Environment2:
        """Creates a new deployment environment for a Launch project. Each environment can have its own domain, build
        configuration, and deployment settings.

        Args:
            project_uid: The unique identifier of the Launch project.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The newly created environment.

        Raises:
            ApiError: The request is malformed or contains invalid parameters. Authentication credentials are missing or
                invalid. ``error`` is ``Error2ContentstackEnvironmentsApi | Error2 | RawError``."""
        return unwrap(
            await self._with_raw_response.create_environment(project_uid, body, request_options=request_options)
        )

    async def delete_environment(
        self, project_uid: str, env_uid: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Permanently deletes a deployment environment and its deployment history. This action is irreversible.

        Args:
            project_uid: The unique identifier of the Launch project.
            env_uid: The unique identifier of the deployment environment.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Environment deleted successfully.

        Raises:
            ApiError: Authentication credentials are missing or invalid. The requested resource was not found. ``error``
                is ``Error2 | Error2ContentstackEnvironmentsApi | RawError``."""
        return unwrap(
            await self._with_raw_response.delete_environment(project_uid, env_uid, request_options=request_options)
        )

    async def get_all_environments(
        self, api_key: str, *, authtoken: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> EnvironmentList:
        """Retrieves all deployment environments configured for the stack, such as production, staging, and development.

        Args:
            api_key: The API key identifying the Contentstack stack.
            authtoken: User session token for authentication. Required if not using management token.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A list of environments in the stack.

        Raises:
            ApiError: Authentication credentials are missing or invalid. ``error`` is ``Error2 | RawError``."""
        return unwrap(
            await self._with_raw_response.get_all_environments(
                api_key, authtoken=authtoken, request_options=request_options
            ),
        )

    async def get_environment(
        self, project_uid: str, env_uid: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Environment2:
        """Retrieves details for a specific deployment environment including its domain configuration, framework
        settings, and latest deployment status.

        Args:
            project_uid: The unique identifier of the Launch project.
            env_uid: The unique identifier of the deployment environment.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The requested environment.

        Raises:
            ApiError: Authentication credentials are missing or invalid. The requested resource was not found. ``error``
                is ``Error2 | Error2ContentstackEnvironmentsApi | RawError``."""
        return unwrap(
            await self._with_raw_response.get_environment(project_uid, env_uid, request_options=request_options)
        )

    async def get_projects_by_project_uid_environments(
        self, project_uid: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> EnvironmentList2:
        """Retrieves all deployment environments configured for a Launch project, including their domain configurations
        and current deployment status.

        Args:
            project_uid: The unique identifier of the Launch project.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A list of environments for the project.

        Raises:
            ApiError: Authentication credentials are missing or invalid. ``error`` is ``Error2 | RawError``."""
        return unwrap(
            await self._with_raw_response.get_projects_by_project_uid_environments(
                project_uid, request_options=request_options
            ),
        )

    async def revalidate_cache(
        self,
        project_uid: str,
        env_uid: str,
        *,
        body: ProjectsEnvironmentsRevalidateCacheRequest | ProjectsEnvironmentsRevalidateCacheRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Triggers a CDN cache revalidation for the specified environment, forcing the CDN to fetch fresh content on
        the next request. Subject to cache revalidation quota limits per organization.

        Args:
            project_uid: The unique identifier of the Launch project.
            env_uid: The unique identifier of the deployment environment.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Cache revalidation triggered successfully.

        Raises:
            ApiError: Authentication credentials are missing or invalid. The requested resource was not found. ``error``
                is ``Error2 | Error2ContentstackEnvironmentsApi | RawError``."""
        return unwrap(
            await self._with_raw_response.revalidate_cache(
                project_uid, env_uid, body=body, request_options=request_options
            ),
        )

    async def update_environment(
        self,
        project_uid: str,
        env_uid: str,
        body: CreateEnvironmentRequest | CreateEnvironmentRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Environment2:
        """Updates the configuration of a deployment environment such as domain settings or build configuration.

        Args:
            project_uid: The unique identifier of the Launch project.
            env_uid: The unique identifier of the deployment environment.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The updated environment.

        Raises:
            ApiError: The request is malformed or contains invalid parameters. Authentication credentials are missing or
                invalid. ``error`` is ``Error2ContentstackEnvironmentsApi | Error2 | RawError``."""
        return unwrap(
            await self._with_raw_response.update_environment(
                project_uid, env_uid, body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncEnvironmentsWithRawResponse:
        return self._with_raw_response


class EnvironmentsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_environment(
        self,
        project_uid: str,
        body: CreateEnvironmentRequest | CreateEnvironmentRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Environment2, CreateEnvironmentErrorBody]:
        """Creates a new deployment environment for a Launch project. Each environment can have its own domain, build
        configuration, and deployment settings.

        Args:
            project_uid: The unique identifier of the Launch project.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default_contentstack_environments_api("/projects/{project_uid}/environments"),
            path_params=[param[str]("project_uid", project_uid)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateEnvironmentRequest | CreateEnvironmentRequestDict](body),
            auth_scheme=AnySchemes(self._auth.bearer_auth, self._auth.authtoken_auth),
            decoder=json_decoder[Environment2],
            error_mapper=create_environment_error_mapper,
            request_options=request_options,
        )

    def delete_environment(
        self, project_uid: str, env_uid: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteEnvironmentErrorBody]:
        """Permanently deletes a deployment environment and its deployment history. This action is irreversible.

        Args:
            project_uid: The unique identifier of the Launch project.
            env_uid: The unique identifier of the deployment environment.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default_contentstack_environments_api(
                "/projects/{project_uid}/environments/{env_uid}"
            ),
            path_params=[param[str]("project_uid", project_uid), param[str]("env_uid", env_uid)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.bearer_auth, self._auth.authtoken_auth),
            decoder=empty_response,
            error_mapper=delete_environment_error_mapper,
            request_options=request_options,
        )

    def get_all_environments(
        self, api_key: str, *, authtoken: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[EnvironmentList, GetAllEnvironmentsErrorBody]:
        """Retrieves all deployment environments configured for the stack, such as production, staging, and development.

        Args:
            api_key: The API key identifying the Contentstack stack.
            authtoken: User session token for authentication. Required if not using management token.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_contentstack_environments_api("/environments"),
            headers=[param[str]("api_key", api_key), param[str | None]("authtoken", authtoken)],
            auth_scheme=AnySchemes(self._auth.authtoken_auth, self._auth.management_token_auth),
            decoder=json_decoder[EnvironmentList],
            error_mapper=get_all_environments_error_mapper,
            request_options=request_options,
        )

    def get_environment(
        self, project_uid: str, env_uid: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Environment2, GetEnvironmentErrorBody]:
        """Retrieves details for a specific deployment environment including its domain configuration, framework
        settings, and latest deployment status.

        Args:
            project_uid: The unique identifier of the Launch project.
            env_uid: The unique identifier of the deployment environment.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_contentstack_environments_api(
                "/projects/{project_uid}/environments/{env_uid}"
            ),
            path_params=[param[str]("project_uid", project_uid), param[str]("env_uid", env_uid)],
            auth_scheme=AnySchemes(self._auth.bearer_auth, self._auth.authtoken_auth),
            decoder=json_decoder[Environment2],
            error_mapper=get_environment_error_mapper,
            request_options=request_options,
        )

    def get_projects_by_project_uid_environments(
        self, project_uid: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[EnvironmentList2, GetProjectsByProjectUidEnvironmentsErrorBody]:
        """Retrieves all deployment environments configured for a Launch project, including their domain configurations
        and current deployment status.

        Args:
            project_uid: The unique identifier of the Launch project.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_contentstack_environments_api("/projects/{project_uid}/environments"),
            path_params=[param[str]("project_uid", project_uid)],
            auth_scheme=AnySchemes(self._auth.bearer_auth, self._auth.authtoken_auth),
            decoder=json_decoder[EnvironmentList2],
            error_mapper=get_projects_by_project_uid_environments_error_mapper,
            request_options=request_options,
        )

    def revalidate_cache(
        self,
        project_uid: str,
        env_uid: str,
        *,
        body: ProjectsEnvironmentsRevalidateCacheRequest | ProjectsEnvironmentsRevalidateCacheRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, RevalidateCacheErrorBody]:
        """Triggers a CDN cache revalidation for the specified environment, forcing the CDN to fetch fresh content on
        the next request. Subject to cache revalidation quota limits per organization.

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
            url_template=self._server.default_contentstack_environments_api(
                "/projects/{project_uid}/environments/{env_uid}/revalidate-cache"
            ),
            path_params=[param[str]("project_uid", project_uid), param[str]("env_uid", env_uid)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[
                ProjectsEnvironmentsRevalidateCacheRequest | ProjectsEnvironmentsRevalidateCacheRequestDict | None
            ](body),
            auth_scheme=AnySchemes(self._auth.bearer_auth, self._auth.authtoken_auth),
            decoder=empty_response,
            error_mapper=revalidate_cache_error_mapper,
            request_options=request_options,
        )

    def update_environment(
        self,
        project_uid: str,
        env_uid: str,
        body: CreateEnvironmentRequest | CreateEnvironmentRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Environment2, UpdateEnvironmentErrorBody]:
        """Updates the configuration of a deployment environment such as domain settings or build configuration.

        Args:
            project_uid: The unique identifier of the Launch project.
            env_uid: The unique identifier of the deployment environment.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default_contentstack_environments_api(
                "/projects/{project_uid}/environments/{env_uid}"
            ),
            path_params=[param[str]("project_uid", project_uid), param[str]("env_uid", env_uid)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateEnvironmentRequest | CreateEnvironmentRequestDict](body),
            auth_scheme=AnySchemes(self._auth.bearer_auth, self._auth.authtoken_auth),
            decoder=json_decoder[Environment2],
            error_mapper=update_environment_error_mapper,
            request_options=request_options,
        )


class AsyncEnvironmentsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_environment(
        self,
        project_uid: str,
        body: CreateEnvironmentRequest | CreateEnvironmentRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Environment2, CreateEnvironmentErrorBody]:
        """Creates a new deployment environment for a Launch project. Each environment can have its own domain, build
        configuration, and deployment settings.

        Args:
            project_uid: The unique identifier of the Launch project.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default_contentstack_environments_api("/projects/{project_uid}/environments"),
            path_params=[param[str]("project_uid", project_uid)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateEnvironmentRequest | CreateEnvironmentRequestDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.bearer_auth, self._auth.authtoken_auth),
            decoder=async_json_decoder[Environment2],
            error_mapper=create_environment_error_mapper,
            request_options=request_options,
        )

    async def delete_environment(
        self, project_uid: str, env_uid: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteEnvironmentErrorBody]:
        """Permanently deletes a deployment environment and its deployment history. This action is irreversible.

        Args:
            project_uid: The unique identifier of the Launch project.
            env_uid: The unique identifier of the deployment environment.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default_contentstack_environments_api(
                "/projects/{project_uid}/environments/{env_uid}"
            ),
            path_params=[param[str]("project_uid", project_uid), param[str]("env_uid", env_uid)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.bearer_auth, self._auth.authtoken_auth),
            decoder=async_empty_response,
            error_mapper=delete_environment_error_mapper,
            request_options=request_options,
        )

    async def get_all_environments(
        self, api_key: str, *, authtoken: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[EnvironmentList, GetAllEnvironmentsErrorBody]:
        """Retrieves all deployment environments configured for the stack, such as production, staging, and development.

        Args:
            api_key: The API key identifying the Contentstack stack.
            authtoken: User session token for authentication. Required if not using management token.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_contentstack_environments_api("/environments"),
            headers=[param[str]("api_key", api_key), param[str | None]("authtoken", authtoken)],
            auth_scheme=AsyncAnySchemes(self._auth.authtoken_auth, self._auth.management_token_auth),
            decoder=async_json_decoder[EnvironmentList],
            error_mapper=get_all_environments_error_mapper,
            request_options=request_options,
        )

    async def get_environment(
        self, project_uid: str, env_uid: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Environment2, GetEnvironmentErrorBody]:
        """Retrieves details for a specific deployment environment including its domain configuration, framework
        settings, and latest deployment status.

        Args:
            project_uid: The unique identifier of the Launch project.
            env_uid: The unique identifier of the deployment environment.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_contentstack_environments_api(
                "/projects/{project_uid}/environments/{env_uid}"
            ),
            path_params=[param[str]("project_uid", project_uid), param[str]("env_uid", env_uid)],
            auth_scheme=AsyncAnySchemes(self._auth.bearer_auth, self._auth.authtoken_auth),
            decoder=async_json_decoder[Environment2],
            error_mapper=get_environment_error_mapper,
            request_options=request_options,
        )

    async def get_projects_by_project_uid_environments(
        self, project_uid: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[EnvironmentList2, GetProjectsByProjectUidEnvironmentsErrorBody]:
        """Retrieves all deployment environments configured for a Launch project, including their domain configurations
        and current deployment status.

        Args:
            project_uid: The unique identifier of the Launch project.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_contentstack_environments_api("/projects/{project_uid}/environments"),
            path_params=[param[str]("project_uid", project_uid)],
            auth_scheme=AsyncAnySchemes(self._auth.bearer_auth, self._auth.authtoken_auth),
            decoder=async_json_decoder[EnvironmentList2],
            error_mapper=get_projects_by_project_uid_environments_error_mapper,
            request_options=request_options,
        )

    async def revalidate_cache(
        self,
        project_uid: str,
        env_uid: str,
        *,
        body: ProjectsEnvironmentsRevalidateCacheRequest | ProjectsEnvironmentsRevalidateCacheRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, RevalidateCacheErrorBody]:
        """Triggers a CDN cache revalidation for the specified environment, forcing the CDN to fetch fresh content on
        the next request. Subject to cache revalidation quota limits per organization.

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
            url_template=self._server.default_contentstack_environments_api(
                "/projects/{project_uid}/environments/{env_uid}/revalidate-cache"
            ),
            path_params=[param[str]("project_uid", project_uid), param[str]("env_uid", env_uid)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[
                ProjectsEnvironmentsRevalidateCacheRequest | ProjectsEnvironmentsRevalidateCacheRequestDict | None
            ](body),
            auth_scheme=AsyncAnySchemes(self._auth.bearer_auth, self._auth.authtoken_auth),
            decoder=async_empty_response,
            error_mapper=revalidate_cache_error_mapper,
            request_options=request_options,
        )

    async def update_environment(
        self,
        project_uid: str,
        env_uid: str,
        body: CreateEnvironmentRequest | CreateEnvironmentRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Environment2, UpdateEnvironmentErrorBody]:
        """Updates the configuration of a deployment environment such as domain settings or build configuration.

        Args:
            project_uid: The unique identifier of the Launch project.
            env_uid: The unique identifier of the deployment environment.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default_contentstack_environments_api(
                "/projects/{project_uid}/environments/{env_uid}"
            ),
            path_params=[param[str]("project_uid", project_uid), param[str]("env_uid", env_uid)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateEnvironmentRequest | CreateEnvironmentRequestDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.bearer_auth, self._auth.authtoken_auth),
            decoder=async_json_decoder[Environment2],
            error_mapper=update_environment_error_mapper,
            request_options=request_options,
        )

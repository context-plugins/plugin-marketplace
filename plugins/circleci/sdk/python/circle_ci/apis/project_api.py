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
from ..errors.create_checkout_key_error import CreateCheckoutKeyErrorBody, create_checkout_key_error_mapper
from ..errors.create_project_environment_variable_error import (
    CreateProjectEnvironmentVariableErrorBody,
    create_project_environment_variable_error_mapper,
)
from ..errors.delete_checkout_key_error import DeleteCheckoutKeyErrorBody, delete_checkout_key_error_mapper
from ..errors.delete_project_environment_variable_error import (
    DeleteProjectEnvironmentVariableErrorBody,
    delete_project_environment_variable_error_mapper,
)
from ..errors.follow_project_error import FollowProjectErrorBody, follow_project_error_mapper
from ..errors.get_checkout_key_error import GetCheckoutKeyErrorBody, get_checkout_key_error_mapper
from ..errors.get_project_environment_variable_error import (
    GetProjectEnvironmentVariableErrorBody,
    get_project_environment_variable_error_mapper,
)
from ..errors.get_project_error import GetProjectErrorBody, get_project_error_mapper
from ..errors.list_checkout_keys_error import ListCheckoutKeysErrorBody, list_checkout_keys_error_mapper
from ..errors.list_project_environment_variables_error import (
    ListProjectEnvironmentVariablesErrorBody,
    list_project_environment_variables_error_mapper,
)
from ..errors.list_projects_error import ListProjectsErrorBody, list_projects_error_mapper
from ..models.checkout_key import CheckoutKey
from ..models.checkout_key_list import CheckoutKeyList
from ..models.enums.vcs_type import VcsTypeOrStr
from ..models.message_response import MessageResponse
from ..models.project2 import Project2
from ..models.project_checkout_key_request import ProjectCheckoutKeyRequest, ProjectCheckoutKeyRequestDict
from ..models.project_circleci_project_api import ProjectCircleciProjectApi
from ..models.project_env_var import ProjectEnvVar
from ..models.project_env_var_list import ProjectEnvVarList
from ..models.project_envvar_request import ProjectEnvvarRequest, ProjectEnvvarRequestDict
from ..models.project_project_follow_response import ProjectProjectFollowResponse
from ..server.server import Server


class ProjectApi:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = ProjectApiWithRawResponse(client, server, auth)

    def create_checkout_key(
        self,
        project_slug: str,
        body: ProjectCheckoutKeyRequest | ProjectCheckoutKeyRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> CheckoutKey:
        """Creates a new checkout key for the specified project. Only deploy keys and user keys are supported.

        Args:
            project_slug: The project slug in the form vcs-slug/org-name/repo-name (e.g.,
                gh/CircleCI-Public/api-preview-docs)
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Checkout key created successfully

        Raises:
            ApiError: Unauthorized ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.create_checkout_key(project_slug, body, request_options=request_options))

    def create_project_environment_variable(
        self,
        project_slug: str,
        body: ProjectEnvvarRequest | ProjectEnvvarRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ProjectEnvVar:
        """Creates a new environment variable for the specified project.

        Args:
            project_slug: The project slug in the form vcs-slug/org-name/repo-name (e.g.,
                gh/CircleCI-Public/api-preview-docs)
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Environment variable created successfully

        Raises:
            ApiError: Unauthorized ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.create_project_environment_variable(
                project_slug, body, request_options=request_options
            ),
        )

    def delete_checkout_key(
        self, project_slug: str, fingerprint: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> MessageResponse:
        """Deletes a checkout key by its fingerprint.

        Args:
            project_slug: The project slug in the form vcs-slug/org-name/repo-name (e.g.,
                gh/CircleCI-Public/api-preview-docs)
            fingerprint: The fingerprint of the checkout key
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully deleted checkout key

        Raises:
            ApiError: Unauthorized ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.delete_checkout_key(project_slug, fingerprint, request_options=request_options)
        )

    def delete_project_environment_variable(
        self, project_slug: str, name: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> MessageResponse:
        """Deletes an environment variable from the specified project.

        Args:
            project_slug: The project slug in the form vcs-slug/org-name/repo-name (e.g.,
                gh/CircleCI-Public/api-preview-docs)
            name: The name of the environment variable
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully deleted environment variable

        Raises:
            ApiError: Unauthorized ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.delete_project_environment_variable(
                project_slug, name, request_options=request_options
            ),
        )

    def follow_project(
        self,
        vcs_type: VcsTypeOrStr,
        username: str,
        project: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ProjectProjectFollowResponse:
        """Follows a project, adding it to the authenticated user's list of followed projects.

        Args:
            vcs_type: The version control system type
            username: The organization or user name
            project: The repository name
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Project followed successfully

        Raises:
            ApiError: Unauthorized ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.follow_project(vcs_type, username, project, request_options=request_options)
        )

    def get_checkout_key(
        self, project_slug: str, fingerprint: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> CheckoutKey:
        """Returns a checkout key by its fingerprint.

        Args:
            project_slug: The project slug in the form vcs-slug/org-name/repo-name (e.g.,
                gh/CircleCI-Public/api-preview-docs)
            fingerprint: The fingerprint of the checkout key
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved checkout key

        Raises:
            ApiError: Unauthorized Checkout key not found ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.get_checkout_key(project_slug, fingerprint, request_options=request_options)
        )

    def get_project(self, project_slug: str, *, request_options: RequestOptionsOrDict | None = None) -> Project2:
        """Returns a project by its slug, which is a triplet of the VCS type, organization name, and repository name.

        Args:
            project_slug: The project slug in the form vcs-slug/org-name/repo-name (e.g.,
                gh/CircleCI-Public/api-preview-docs)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved project

        Raises:
            ApiError: Unauthorized ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.get_project(project_slug, request_options=request_options))

    def get_project_environment_variable(
        self, project_slug: str, name: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ProjectEnvVar:
        """Returns a masked environment variable by name for the specified project.

        Args:
            project_slug: The project slug in the form vcs-slug/org-name/repo-name (e.g.,
                gh/CircleCI-Public/api-preview-docs)
            name: The name of the environment variable
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved environment variable

        Raises:
            ApiError: Unauthorized Environment variable not found ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.get_project_environment_variable(
                project_slug, name, request_options=request_options
            ),
        )

    def list_checkout_keys(
        self, project_slug: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> CheckoutKeyList:
        """Returns a paginated list of checkout keys for a given project.

        Args:
            project_slug: The project slug in the form vcs-slug/org-name/repo-name (e.g.,
                gh/CircleCI-Public/api-preview-docs)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved checkout keys

        Raises:
            ApiError: Unauthorized ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.list_checkout_keys(project_slug, request_options=request_options))

    def list_project_environment_variables(
        self, project_slug: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ProjectEnvVarList:
        """Returns a paginated list of masked environment variables for a given project.

        Args:
            project_slug: The project slug in the form vcs-slug/org-name/repo-name (e.g.,
                gh/CircleCI-Public/api-preview-docs)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved environment variables

        Raises:
            ApiError: Unauthorized ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.list_project_environment_variables(project_slug, request_options=request_options)
        )

    def list_projects(self, *, request_options: RequestOptionsOrDict | None = None) -> list[ProjectCircleciProjectApi]:
        """Returns a list of all projects the authenticated user follows, including recent build summaries for each
        project.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved projects

        Raises:
            ApiError: Unauthorized ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.list_projects(request_options=request_options))

    @property
    def with_raw_response(self) -> ProjectApiWithRawResponse:
        return self._with_raw_response


class AsyncProjectApi:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncProjectApiWithRawResponse(client, server, auth)

    async def create_checkout_key(
        self,
        project_slug: str,
        body: ProjectCheckoutKeyRequest | ProjectCheckoutKeyRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CheckoutKey:
        """Creates a new checkout key for the specified project. Only deploy keys and user keys are supported.

        Args:
            project_slug: The project slug in the form vcs-slug/org-name/repo-name (e.g.,
                gh/CircleCI-Public/api-preview-docs)
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Checkout key created successfully

        Raises:
            ApiError: Unauthorized ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.create_checkout_key(project_slug, body, request_options=request_options)
        )

    async def create_project_environment_variable(
        self,
        project_slug: str,
        body: ProjectEnvvarRequest | ProjectEnvvarRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ProjectEnvVar:
        """Creates a new environment variable for the specified project.

        Args:
            project_slug: The project slug in the form vcs-slug/org-name/repo-name (e.g.,
                gh/CircleCI-Public/api-preview-docs)
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Environment variable created successfully

        Raises:
            ApiError: Unauthorized ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.create_project_environment_variable(
                project_slug, body, request_options=request_options
            ),
        )

    async def delete_checkout_key(
        self, project_slug: str, fingerprint: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> MessageResponse:
        """Deletes a checkout key by its fingerprint.

        Args:
            project_slug: The project slug in the form vcs-slug/org-name/repo-name (e.g.,
                gh/CircleCI-Public/api-preview-docs)
            fingerprint: The fingerprint of the checkout key
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully deleted checkout key

        Raises:
            ApiError: Unauthorized ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.delete_checkout_key(
                project_slug, fingerprint, request_options=request_options
            ),
        )

    async def delete_project_environment_variable(
        self, project_slug: str, name: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> MessageResponse:
        """Deletes an environment variable from the specified project.

        Args:
            project_slug: The project slug in the form vcs-slug/org-name/repo-name (e.g.,
                gh/CircleCI-Public/api-preview-docs)
            name: The name of the environment variable
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully deleted environment variable

        Raises:
            ApiError: Unauthorized ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.delete_project_environment_variable(
                project_slug, name, request_options=request_options
            ),
        )

    async def follow_project(
        self,
        vcs_type: VcsTypeOrStr,
        username: str,
        project: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ProjectProjectFollowResponse:
        """Follows a project, adding it to the authenticated user's list of followed projects.

        Args:
            vcs_type: The version control system type
            username: The organization or user name
            project: The repository name
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Project followed successfully

        Raises:
            ApiError: Unauthorized ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.follow_project(vcs_type, username, project, request_options=request_options)
        )

    async def get_checkout_key(
        self, project_slug: str, fingerprint: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> CheckoutKey:
        """Returns a checkout key by its fingerprint.

        Args:
            project_slug: The project slug in the form vcs-slug/org-name/repo-name (e.g.,
                gh/CircleCI-Public/api-preview-docs)
            fingerprint: The fingerprint of the checkout key
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved checkout key

        Raises:
            ApiError: Unauthorized Checkout key not found ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.get_checkout_key(project_slug, fingerprint, request_options=request_options)
        )

    async def get_project(
        self, project_slug: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Project2:
        """Returns a project by its slug, which is a triplet of the VCS type, organization name, and repository name.

        Args:
            project_slug: The project slug in the form vcs-slug/org-name/repo-name (e.g.,
                gh/CircleCI-Public/api-preview-docs)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved project

        Raises:
            ApiError: Unauthorized ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.get_project(project_slug, request_options=request_options))

    async def get_project_environment_variable(
        self, project_slug: str, name: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ProjectEnvVar:
        """Returns a masked environment variable by name for the specified project.

        Args:
            project_slug: The project slug in the form vcs-slug/org-name/repo-name (e.g.,
                gh/CircleCI-Public/api-preview-docs)
            name: The name of the environment variable
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved environment variable

        Raises:
            ApiError: Unauthorized Environment variable not found ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.get_project_environment_variable(
                project_slug, name, request_options=request_options
            ),
        )

    async def list_checkout_keys(
        self, project_slug: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> CheckoutKeyList:
        """Returns a paginated list of checkout keys for a given project.

        Args:
            project_slug: The project slug in the form vcs-slug/org-name/repo-name (e.g.,
                gh/CircleCI-Public/api-preview-docs)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved checkout keys

        Raises:
            ApiError: Unauthorized ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.list_checkout_keys(project_slug, request_options=request_options))

    async def list_project_environment_variables(
        self, project_slug: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ProjectEnvVarList:
        """Returns a paginated list of masked environment variables for a given project.

        Args:
            project_slug: The project slug in the form vcs-slug/org-name/repo-name (e.g.,
                gh/CircleCI-Public/api-preview-docs)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved environment variables

        Raises:
            ApiError: Unauthorized ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.list_project_environment_variables(
                project_slug, request_options=request_options
            ),
        )

    async def list_projects(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> list[ProjectCircleciProjectApi]:
        """Returns a list of all projects the authenticated user follows, including recent build summaries for each
        project.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved projects

        Raises:
            ApiError: Unauthorized ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.list_projects(request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncProjectApiWithRawResponse:
        return self._with_raw_response


class ProjectApiWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_checkout_key(
        self,
        project_slug: str,
        body: ProjectCheckoutKeyRequest | ProjectCheckoutKeyRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[CheckoutKey, CreateCheckoutKeyErrorBody]:
        """Creates a new checkout key for the specified project. Only deploy keys and user keys are supported.

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
            url_template=self._server.default("/project/{project-slug}/checkout-key"),
            path_params=[param[str]("project-slug", project_slug)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ProjectCheckoutKeyRequest | ProjectCheckoutKeyRequestDict](body),
            auth_scheme=self._auth.api_token,
            decoder=json_decoder[CheckoutKey],
            error_mapper=create_checkout_key_error_mapper,
            request_options=request_options,
        )

    def create_project_environment_variable(
        self,
        project_slug: str,
        body: ProjectEnvvarRequest | ProjectEnvvarRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ProjectEnvVar, CreateProjectEnvironmentVariableErrorBody]:
        """Creates a new environment variable for the specified project.

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
            url_template=self._server.default("/project/{project-slug}/envvar"),
            path_params=[param[str]("project-slug", project_slug)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ProjectEnvvarRequest | ProjectEnvvarRequestDict](body),
            auth_scheme=self._auth.api_token,
            decoder=json_decoder[ProjectEnvVar],
            error_mapper=create_project_environment_variable_error_mapper,
            request_options=request_options,
        )

    def delete_checkout_key(
        self, project_slug: str, fingerprint: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[MessageResponse, DeleteCheckoutKeyErrorBody]:
        """Deletes a checkout key by its fingerprint.

        Args:
            project_slug: The project slug in the form vcs-slug/org-name/repo-name (e.g.,
                gh/CircleCI-Public/api-preview-docs)
            fingerprint: The fingerprint of the checkout key
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/project/{project-slug}/checkout-key/{fingerprint}"),
            path_params=[param[str]("project-slug", project_slug), param[str]("fingerprint", fingerprint)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.api_token,
            decoder=json_decoder[MessageResponse],
            error_mapper=delete_checkout_key_error_mapper,
            request_options=request_options,
        )

    def delete_project_environment_variable(
        self, project_slug: str, name: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[MessageResponse, DeleteProjectEnvironmentVariableErrorBody]:
        """Deletes an environment variable from the specified project.

        Args:
            project_slug: The project slug in the form vcs-slug/org-name/repo-name (e.g.,
                gh/CircleCI-Public/api-preview-docs)
            name: The name of the environment variable
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/project/{project-slug}/envvar/{name}"),
            path_params=[param[str]("project-slug", project_slug), param[str]("name", name)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.api_token,
            decoder=json_decoder[MessageResponse],
            error_mapper=delete_project_environment_variable_error_mapper,
            request_options=request_options,
        )

    def follow_project(
        self,
        vcs_type: VcsTypeOrStr,
        username: str,
        project: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ProjectProjectFollowResponse, FollowProjectErrorBody]:
        """Follows a project, adding it to the authenticated user's list of followed projects.

        Args:
            vcs_type: The version control system type
            username: The organization or user name
            project: The repository name
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/project/{vcs-type}/{username}/{project}/follow"),
            path_params=[
                param[VcsTypeOrStr]("vcs-type", vcs_type),
                param[str]("username", username),
                param[str]("project", project),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.api_token,
            decoder=json_decoder[ProjectProjectFollowResponse],
            error_mapper=follow_project_error_mapper,
            request_options=request_options,
        )

    def get_checkout_key(
        self, project_slug: str, fingerprint: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[CheckoutKey, GetCheckoutKeyErrorBody]:
        """Returns a checkout key by its fingerprint.

        Args:
            project_slug: The project slug in the form vcs-slug/org-name/repo-name (e.g.,
                gh/CircleCI-Public/api-preview-docs)
            fingerprint: The fingerprint of the checkout key
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/project/{project-slug}/checkout-key/{fingerprint}"),
            path_params=[param[str]("project-slug", project_slug), param[str]("fingerprint", fingerprint)],
            auth_scheme=self._auth.api_token,
            decoder=json_decoder[CheckoutKey],
            error_mapper=get_checkout_key_error_mapper,
            request_options=request_options,
        )

    def get_project(
        self, project_slug: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Project2, GetProjectErrorBody]:
        """Returns a project by its slug, which is a triplet of the VCS type, organization name, and repository name.

        Args:
            project_slug: The project slug in the form vcs-slug/org-name/repo-name (e.g.,
                gh/CircleCI-Public/api-preview-docs)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/project/{project-slug}"),
            path_params=[param[str]("project-slug", project_slug)],
            auth_scheme=self._auth.api_token,
            decoder=json_decoder[Project2],
            error_mapper=get_project_error_mapper,
            request_options=request_options,
        )

    def get_project_environment_variable(
        self, project_slug: str, name: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ProjectEnvVar, GetProjectEnvironmentVariableErrorBody]:
        """Returns a masked environment variable by name for the specified project.

        Args:
            project_slug: The project slug in the form vcs-slug/org-name/repo-name (e.g.,
                gh/CircleCI-Public/api-preview-docs)
            name: The name of the environment variable
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/project/{project-slug}/envvar/{name}"),
            path_params=[param[str]("project-slug", project_slug), param[str]("name", name)],
            auth_scheme=self._auth.api_token,
            decoder=json_decoder[ProjectEnvVar],
            error_mapper=get_project_environment_variable_error_mapper,
            request_options=request_options,
        )

    def list_checkout_keys(
        self, project_slug: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[CheckoutKeyList, ListCheckoutKeysErrorBody]:
        """Returns a paginated list of checkout keys for a given project.

        Args:
            project_slug: The project slug in the form vcs-slug/org-name/repo-name (e.g.,
                gh/CircleCI-Public/api-preview-docs)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/project/{project-slug}/checkout-key"),
            path_params=[param[str]("project-slug", project_slug)],
            auth_scheme=self._auth.api_token,
            decoder=json_decoder[CheckoutKeyList],
            error_mapper=list_checkout_keys_error_mapper,
            request_options=request_options,
        )

    def list_project_environment_variables(
        self, project_slug: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ProjectEnvVarList, ListProjectEnvironmentVariablesErrorBody]:
        """Returns a paginated list of masked environment variables for a given project.

        Args:
            project_slug: The project slug in the form vcs-slug/org-name/repo-name (e.g.,
                gh/CircleCI-Public/api-preview-docs)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/project/{project-slug}/envvar"),
            path_params=[param[str]("project-slug", project_slug)],
            auth_scheme=self._auth.api_token,
            decoder=json_decoder[ProjectEnvVarList],
            error_mapper=list_project_environment_variables_error_mapper,
            request_options=request_options,
        )

    def list_projects(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[list[ProjectCircleciProjectApi], ListProjectsErrorBody]:
        """Returns a list of all projects the authenticated user follows, including recent build summaries for each
        project.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/projects"),
            auth_scheme=self._auth.api_token,
            decoder=json_decoder[list[ProjectCircleciProjectApi]],
            error_mapper=list_projects_error_mapper,
            request_options=request_options,
        )


class AsyncProjectApiWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_checkout_key(
        self,
        project_slug: str,
        body: ProjectCheckoutKeyRequest | ProjectCheckoutKeyRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CheckoutKey, CreateCheckoutKeyErrorBody]:
        """Creates a new checkout key for the specified project. Only deploy keys and user keys are supported.

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
            url_template=self._server.default("/project/{project-slug}/checkout-key"),
            path_params=[param[str]("project-slug", project_slug)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ProjectCheckoutKeyRequest | ProjectCheckoutKeyRequestDict](body),
            auth_scheme=self._auth.api_token,
            decoder=async_json_decoder[CheckoutKey],
            error_mapper=create_checkout_key_error_mapper,
            request_options=request_options,
        )

    async def create_project_environment_variable(
        self,
        project_slug: str,
        body: ProjectEnvvarRequest | ProjectEnvvarRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ProjectEnvVar, CreateProjectEnvironmentVariableErrorBody]:
        """Creates a new environment variable for the specified project.

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
            url_template=self._server.default("/project/{project-slug}/envvar"),
            path_params=[param[str]("project-slug", project_slug)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ProjectEnvvarRequest | ProjectEnvvarRequestDict](body),
            auth_scheme=self._auth.api_token,
            decoder=async_json_decoder[ProjectEnvVar],
            error_mapper=create_project_environment_variable_error_mapper,
            request_options=request_options,
        )

    async def delete_checkout_key(
        self, project_slug: str, fingerprint: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[MessageResponse, DeleteCheckoutKeyErrorBody]:
        """Deletes a checkout key by its fingerprint.

        Args:
            project_slug: The project slug in the form vcs-slug/org-name/repo-name (e.g.,
                gh/CircleCI-Public/api-preview-docs)
            fingerprint: The fingerprint of the checkout key
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/project/{project-slug}/checkout-key/{fingerprint}"),
            path_params=[param[str]("project-slug", project_slug), param[str]("fingerprint", fingerprint)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.api_token,
            decoder=async_json_decoder[MessageResponse],
            error_mapper=delete_checkout_key_error_mapper,
            request_options=request_options,
        )

    async def delete_project_environment_variable(
        self, project_slug: str, name: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[MessageResponse, DeleteProjectEnvironmentVariableErrorBody]:
        """Deletes an environment variable from the specified project.

        Args:
            project_slug: The project slug in the form vcs-slug/org-name/repo-name (e.g.,
                gh/CircleCI-Public/api-preview-docs)
            name: The name of the environment variable
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/project/{project-slug}/envvar/{name}"),
            path_params=[param[str]("project-slug", project_slug), param[str]("name", name)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.api_token,
            decoder=async_json_decoder[MessageResponse],
            error_mapper=delete_project_environment_variable_error_mapper,
            request_options=request_options,
        )

    async def follow_project(
        self,
        vcs_type: VcsTypeOrStr,
        username: str,
        project: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ProjectProjectFollowResponse, FollowProjectErrorBody]:
        """Follows a project, adding it to the authenticated user's list of followed projects.

        Args:
            vcs_type: The version control system type
            username: The organization or user name
            project: The repository name
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/project/{vcs-type}/{username}/{project}/follow"),
            path_params=[
                param[VcsTypeOrStr]("vcs-type", vcs_type),
                param[str]("username", username),
                param[str]("project", project),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.api_token,
            decoder=async_json_decoder[ProjectProjectFollowResponse],
            error_mapper=follow_project_error_mapper,
            request_options=request_options,
        )

    async def get_checkout_key(
        self, project_slug: str, fingerprint: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[CheckoutKey, GetCheckoutKeyErrorBody]:
        """Returns a checkout key by its fingerprint.

        Args:
            project_slug: The project slug in the form vcs-slug/org-name/repo-name (e.g.,
                gh/CircleCI-Public/api-preview-docs)
            fingerprint: The fingerprint of the checkout key
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/project/{project-slug}/checkout-key/{fingerprint}"),
            path_params=[param[str]("project-slug", project_slug), param[str]("fingerprint", fingerprint)],
            auth_scheme=self._auth.api_token,
            decoder=async_json_decoder[CheckoutKey],
            error_mapper=get_checkout_key_error_mapper,
            request_options=request_options,
        )

    async def get_project(
        self, project_slug: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Project2, GetProjectErrorBody]:
        """Returns a project by its slug, which is a triplet of the VCS type, organization name, and repository name.

        Args:
            project_slug: The project slug in the form vcs-slug/org-name/repo-name (e.g.,
                gh/CircleCI-Public/api-preview-docs)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/project/{project-slug}"),
            path_params=[param[str]("project-slug", project_slug)],
            auth_scheme=self._auth.api_token,
            decoder=async_json_decoder[Project2],
            error_mapper=get_project_error_mapper,
            request_options=request_options,
        )

    async def get_project_environment_variable(
        self, project_slug: str, name: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ProjectEnvVar, GetProjectEnvironmentVariableErrorBody]:
        """Returns a masked environment variable by name for the specified project.

        Args:
            project_slug: The project slug in the form vcs-slug/org-name/repo-name (e.g.,
                gh/CircleCI-Public/api-preview-docs)
            name: The name of the environment variable
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/project/{project-slug}/envvar/{name}"),
            path_params=[param[str]("project-slug", project_slug), param[str]("name", name)],
            auth_scheme=self._auth.api_token,
            decoder=async_json_decoder[ProjectEnvVar],
            error_mapper=get_project_environment_variable_error_mapper,
            request_options=request_options,
        )

    async def list_checkout_keys(
        self, project_slug: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[CheckoutKeyList, ListCheckoutKeysErrorBody]:
        """Returns a paginated list of checkout keys for a given project.

        Args:
            project_slug: The project slug in the form vcs-slug/org-name/repo-name (e.g.,
                gh/CircleCI-Public/api-preview-docs)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/project/{project-slug}/checkout-key"),
            path_params=[param[str]("project-slug", project_slug)],
            auth_scheme=self._auth.api_token,
            decoder=async_json_decoder[CheckoutKeyList],
            error_mapper=list_checkout_keys_error_mapper,
            request_options=request_options,
        )

    async def list_project_environment_variables(
        self, project_slug: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ProjectEnvVarList, ListProjectEnvironmentVariablesErrorBody]:
        """Returns a paginated list of masked environment variables for a given project.

        Args:
            project_slug: The project slug in the form vcs-slug/org-name/repo-name (e.g.,
                gh/CircleCI-Public/api-preview-docs)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/project/{project-slug}/envvar"),
            path_params=[param[str]("project-slug", project_slug)],
            auth_scheme=self._auth.api_token,
            decoder=async_json_decoder[ProjectEnvVarList],
            error_mapper=list_project_environment_variables_error_mapper,
            request_options=request_options,
        )

    async def list_projects(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[list[ProjectCircleciProjectApi], ListProjectsErrorBody]:
        """Returns a list of all projects the authenticated user follows, including recent build summaries for each
        project.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/projects"),
            auth_scheme=self._auth.api_token,
            decoder=async_json_decoder[list[ProjectCircleciProjectApi]],
            error_mapper=list_projects_error_mapper,
            request_options=request_options,
        )

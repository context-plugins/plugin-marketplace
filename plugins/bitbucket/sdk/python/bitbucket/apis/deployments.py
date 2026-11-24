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
    RawError,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_empty_response,
    async_json_decoder,
    empty_response,
    json_body,
    json_decoder,
    param,
    raw_error_response,
    unwrap,
)
from ..errors.create_environment_error import CreateEnvironmentErrorBody, create_environment_error_mapper
from ..errors.delete_environment_for_repository_error import (
    DeleteEnvironmentForRepositoryErrorBody,
    delete_environment_for_repository_error_mapper,
)
from ..errors.delete_repositories_by_workspace_by_repo_slug_deploy_keys_by_key_id_error import (
    DeleteRepositoriesByWorkspaceByRepoSlugDeployKeysByKeyIdErrorBody,
    delete_repositories_by_workspace_by_repo_slug_deploy_keys_by_key_id_error_mapper,
)
from ..errors.delete_workspaces_by_workspace_projects_by_project_key_deploy_keys_by_key_id_error import (
    DeleteWorkspacesByWorkspaceProjectsByProjectKeyDeployKeysByKeyIdErrorBody,
    delete_workspaces_by_workspace_projects_by_project_key_deploy_keys_by_key_id_error_mapper,
)
from ..errors.get_deployment_for_repository_error import (
    GetDeploymentForRepositoryErrorBody,
    get_deployment_for_repository_error_mapper,
)
from ..errors.get_environment_for_repository_error import (
    GetEnvironmentForRepositoryErrorBody,
    get_environment_for_repository_error_mapper,
)
from ..errors.get_repositories_by_workspace_by_repo_slug_deploy_keys_by_key_id_error import (
    GetRepositoriesByWorkspaceByRepoSlugDeployKeysByKeyIdErrorBody,
    get_repositories_by_workspace_by_repo_slug_deploy_keys_by_key_id_error_mapper,
)
from ..errors.get_repositories_by_workspace_by_repo_slug_deploy_keys_error import (
    GetRepositoriesByWorkspaceByRepoSlugDeployKeysErrorBody,
    get_repositories_by_workspace_by_repo_slug_deploy_keys_error_mapper,
)
from ..errors.get_workspaces_by_workspace_projects_by_project_key_deploy_keys_by_key_id_error import (
    GetWorkspacesByWorkspaceProjectsByProjectKeyDeployKeysByKeyIdErrorBody,
    get_workspaces_by_workspace_projects_by_project_key_deploy_keys_by_key_id_error_mapper,
)
from ..errors.get_workspaces_by_workspace_projects_by_project_key_deploy_keys_error import (
    GetWorkspacesByWorkspaceProjectsByProjectKeyDeployKeysErrorBody,
    get_workspaces_by_workspace_projects_by_project_key_deploy_keys_error_mapper,
)
from ..errors.post_repositories_by_workspace_by_repo_slug_deploy_keys_error import (
    PostRepositoriesByWorkspaceByRepoSlugDeployKeysErrorBody,
    post_repositories_by_workspace_by_repo_slug_deploy_keys_error_mapper,
)
from ..errors.post_workspaces_by_workspace_projects_by_project_key_deploy_keys_error import (
    PostWorkspacesByWorkspaceProjectsByProjectKeyDeployKeysErrorBody,
    post_workspaces_by_workspace_projects_by_project_key_deploy_keys_error_mapper,
)
from ..errors.put_repositories_by_workspace_by_repo_slug_deploy_keys_by_key_id_error import (
    PutRepositoriesByWorkspaceByRepoSlugDeployKeysByKeyIdErrorBody,
    put_repositories_by_workspace_by_repo_slug_deploy_keys_by_key_id_error_mapper,
)
from ..errors.update_environment_for_repository_error import (
    UpdateEnvironmentForRepositoryErrorBody,
    update_environment_for_repository_error_mapper,
)
from ..models.deploy_key import DeployKey
from ..models.deployment import Deployment
from ..models.deployment_environment import DeploymentEnvironment, DeploymentEnvironmentDict
from ..models.paginated_deploy_keys import PaginatedDeployKeys
from ..models.paginated_deployment_environments import PaginatedDeploymentEnvironments
from ..models.paginated_deployments import PaginatedDeployments
from ..models.paginated_project_deploy_keys import PaginatedProjectDeployKeys
from ..models.project_deploy_key import ProjectDeployKey
from ..server.server import Server


class Deployments:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = DeploymentsWithRawResponse(client, server, auth)

    def create_environment(
        self,
        workspace: str,
        repo_slug: str,
        body: DeploymentEnvironment | DeploymentEnvironmentDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> DeploymentEnvironment:
        """Create an environment.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            body: The environment to create.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The environment was created.

        Raises:
            ApiError: The account or repository does not exist. An environment host with the provided name already
                exists. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.create_environment(workspace, repo_slug, body, request_options=request_options)
        )

    def delete_environment_for_repository(
        self,
        workspace: str,
        repo_slug: str,
        environment_uuid: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Send a ``DELETE`` request.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            environment_uuid: The environment UUID.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The environment was deleted.

        Raises:
            ApiError: No account or repository with the UUID provided exists. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.delete_environment_for_repository(
                workspace, repo_slug, environment_uuid, request_options=request_options
            ),
        )

    def delete_repositories_by_workspace_by_repo_slug_deploy_keys_by_key_id(
        self, key_id: str, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """This deletes a deploy key from a repository.

        Args:
            key_id: The key ID matching the deploy key.
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The key has been deleted

        Raises:
            ApiError: If the current user does not have permission to delete a key for the specified user If the
                specified user, repository, or deploy key does not exist ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.delete_repositories_by_workspace_by_repo_slug_deploy_keys_by_key_id(
                key_id, repo_slug, workspace, request_options=request_options
            ),
        )

    def delete_workspaces_by_workspace_projects_by_project_key_deploy_keys_by_key_id(
        self, key_id: str, project_key: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """This deletes a deploy key from a project.

        Args:
            key_id: The key ID matching the project deploy key.
            project_key: The project in question. This is the actual ``key`` assigned to the project.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The project deploy key has been deleted

        Raises:
            ApiError: If the current user does not have permission to delete a key for the specified project If the
                specified workspace, project, or project deploy key does not exist ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.delete_workspaces_by_workspace_projects_by_project_key_deploy_keys_by_key_id(
                key_id, project_key, workspace, request_options=request_options
            ),
        )

    def get_deployment_for_repository(
        self,
        workspace: str,
        repo_slug: str,
        deployment_uuid: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Deployment:
        """Retrieve a deployment

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            deployment_uuid: The deployment UUID.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deployment.

        Raises:
            ApiError: No account, repository or deployment with the UUID provided exists. ``error`` is ``Error |
                RawError``."""
        return unwrap(
            self._with_raw_response.get_deployment_for_repository(
                workspace, repo_slug, deployment_uuid, request_options=request_options
            ),
        )

    def get_deployments_for_repository(
        self, workspace: str, repo_slug: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> PaginatedDeployments:
        """Find deployments

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The matching deployments.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.get_deployments_for_repository(
                workspace, repo_slug, request_options=request_options
            ),
        )

    def get_environment_for_repository(
        self,
        workspace: str,
        repo_slug: str,
        environment_uuid: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> DeploymentEnvironment:
        """Retrieve an environment

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            environment_uuid: The environment UUID.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The environment.

        Raises:
            ApiError: No account, repository or environment with the UUID provided exists. ``error`` is ``Error |
                RawError``."""
        return unwrap(
            self._with_raw_response.get_environment_for_repository(
                workspace, repo_slug, environment_uuid, request_options=request_options
            ),
        )

    def get_environments_for_repository(
        self, workspace: str, repo_slug: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> PaginatedDeploymentEnvironments:
        """Find environments

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The matching environments.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.get_environments_for_repository(
                workspace, repo_slug, request_options=request_options
            ),
        )

    def get_repositories_by_workspace_by_repo_slug_deploy_keys(
        self, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> PaginatedDeployKeys:
        """Returns all deploy-keys belonging to a repository.

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Deploy keys matching the repository

        Raises:
            ApiError: If the specified user or repository is not accessible to the current user If the specified user or
                repository does not exist ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_repositories_by_workspace_by_repo_slug_deploy_keys(
                repo_slug, workspace, request_options=request_options
            ),
        )

    def get_repositories_by_workspace_by_repo_slug_deploy_keys_by_key_id(
        self, key_id: str, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> DeployKey:
        """Returns the deploy key belonging to a specific key.

        Args:
            key_id: The key ID matching the deploy key.
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Deploy key matching the key ID

        Raises:
            ApiError: If the specified user or repository is not accessible to the current user If the specified user or
                repository does not exist ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_repositories_by_workspace_by_repo_slug_deploy_keys_by_key_id(
                key_id, repo_slug, workspace, request_options=request_options
            ),
        )

    def get_workspaces_by_workspace_projects_by_project_key_deploy_keys(
        self, project_key: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> PaginatedProjectDeployKeys:
        """Returns all deploy keys belonging to a project.

        Args:
            project_key: The project in question. This is the actual ``key`` assigned to the project.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Deploy keys matching the project

        Raises:
            ApiError: If the specified workspace or project is not accessible to the current user If the specified
                workspace or project does not exist ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_workspaces_by_workspace_projects_by_project_key_deploy_keys(
                project_key, workspace, request_options=request_options
            ),
        )

    def get_workspaces_by_workspace_projects_by_project_key_deploy_keys_by_key_id(
        self, key_id: str, project_key: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ProjectDeployKey:
        """Returns the deploy key belonging to a specific key ID.

        Args:
            key_id: The key ID matching the project deploy key.
            project_key: The project in question. This is the actual ``key`` assigned to the project.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Project deploy key matching the key ID

        Raises:
            ApiError: If the specified workspace or project is not accessible to the current user If the specified
                workspace or project does not exist ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_workspaces_by_workspace_projects_by_project_key_deploy_keys_by_key_id(
                key_id, project_key, workspace, request_options=request_options
            ),
        )

    def post_repositories_by_workspace_by_repo_slug_deploy_keys(
        self, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> DeployKey:
        r"""Create a new deploy key in a repository. Note: If authenticating a deploy key with an OAuth consumer, any
        changes to the OAuth consumer will subsequently invalidate the deploy key.

        Example:
        ```
        $ curl -X POST \ -H "Authorization " \ -H "Content-type: application/json" \
        https://api.bitbucket.org/2.0/repositories/mleu/test/deploy-keys -d \
        '{
        "key": "ssh-rsa
        AAAAB3NzaC1yc2EAAAADAQABAAABAQDAK/b1cHHDr/TEV1JGQl+WjCwStKG6Bhrv0rFpEsYlyTBm1fzN0VOJJYn4ZOPCPJwqse6fGbXntEs+BbXiptR+++HycVgl65TMR0b5ul5AgwrVdZdT7qjCOCgaSV74/9xlHDK8oqgGnfA7ZoBBU+qpVyaloSjBdJfLtPY/xqj4yHnXKYzrtn/uFc4Kp9Tb7PUg9Io3qohSTGJGVHnsVblq/rToJG7L5xIo0OxK0SJSQ5vuId93ZuFZrCNMXj8JDHZeSEtjJzpRCBEXHxpOPhAcbm4MzULgkFHhAVgp4JbkrT99/wpvZ7r9AdkTg7HGqL3rlaDrEcWfL7Lu6TnhBdq5
        mleu@C02W454JHTD8", "label": "mydeploykey"
        }'
        ```

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deploy key that was created

        Raises:
            ApiError: Invalid deploy key inputs If the specified user or repository is not accessible to the current
                user If the specified user or repository does not exist ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.post_repositories_by_workspace_by_repo_slug_deploy_keys(
                repo_slug, workspace, request_options=request_options
            ),
        )

    def post_workspaces_by_workspace_projects_by_project_key_deploy_keys(
        self, project_key: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ProjectDeployKey:
        r"""Create a new deploy key in a project.

        Example:
        ```
        $ curl -X POST \ -H "Authorization " \ -H "Content-type: application/json" \
        https://api.bitbucket.org/2.0/workspaces/standard/projects/TEST_PROJECT/deploy-keys/ -d \
        '{
        "key": "ssh-rsa
        AAAAB3NzaC1yc2EAAAADAQABAAABAQDAK/b1cHHDr/TEV1JGQl+WjCwStKG6Bhrv0rFpEsYlyTBm1fzN0VOJJYn4ZOPCPJwqse6fGbXntEs+BbXiptR+++HycVgl65TMR0b5ul5AgwrVdZdT7qjCOCgaSV74/9xlHDK8oqgGnfA7ZoBBU+qpVyaloSjBdJfLtPY/xqj4yHnXKYzrtn/uFc4Kp9Tb7PUg9Io3qohSTGJGVHnsVblq/rToJG7L5xIo0OxK0SJSQ5vuId93ZuFZrCNMXj8JDHZeSEtjJzpRCBEXHxpOPhAcbm4MzULgkFHhAVgp4JbkrT99/wpvZ7r9AdkTg7HGqL3rlaDrEcWfL7Lu6TnhBdq5
        mleu@C02W454JHTD8", "label": "mydeploykey"
        }'
        ```

        Args:
            project_key: The project in question. This is the actual ``key`` assigned to the project.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The project deploy key that was created

        Raises:
            ApiError: Invalid deploy key inputs If the specified workspace or project is not accessible to the current
                user If the specified workspace or project does not exist ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.post_workspaces_by_workspace_projects_by_project_key_deploy_keys(
                project_key, workspace, request_options=request_options
            ),
        )

    def put_repositories_by_workspace_by_repo_slug_deploy_keys_by_key_id(
        self, key_id: str, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> DeployKey:
        r"""Create a new deploy key in a repository.

        The same key needs to be passed in but the comment and label can change.

        Example:
        ```
        $ curl -X PUT \ -H "Authorization " \ -H "Content-type: application/json" \
        https://api.bitbucket.org/2.0/repositories/mleu/test/deploy-keys/1234 -d \
        '{
        "label": "newlabel", "key": "ssh-rsa
        AAAAB3NzaC1yc2EAAAADAQABAAABAQDAK/b1cHHDr/TEV1JGQl+WjCwStKG6Bhrv0rFpEsYlyTBm1fzN0VOJJYn4ZOPCPJwqse6fGbXntEs+BbXiptR+++HycVgl65TMR0b5ul5AgwrVdZdT7qjCOCgaSV74/9xlHDK8oqgGnfA7ZoBBU+qpVyaloSjBdJfLtPY/xqj4yHnXKYzrtn/uFc4Kp9Tb7PUg9Io3qohSTGJGVHnsVblq/rToJG7L5xIo0OxK0SJSQ5vuId93ZuFZrCNMXj8JDHZeSEtjJzpRCBEXHxpOPhAcbm4MzULgkFHhAVgp4JbkrT99/wpvZ7r9AdkTg7HGqL3rlaDrEcWfL7Lu6TnhBdq5
        newcomment",
        }'
        ```

        Args:
            key_id: The key ID matching the deploy key.
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The newly updated deploy key.

        Raises:
            ApiError: If the submitted key or related value is invalid If the current user does not have permission to
                add a key for the specified user If the specified user, repository, or deploy key does not exist
                ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.put_repositories_by_workspace_by_repo_slug_deploy_keys_by_key_id(
                key_id, repo_slug, workspace, request_options=request_options
            ),
        )

    def update_environment_for_repository(
        self,
        workspace: str,
        repo_slug: str,
        environment_uuid: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Send a ``POST`` request.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            environment_uuid: The environment UUID.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The environment update request was accepted.

        Raises:
            ApiError: No account, repository or environment with the UUID provided exists. ``error`` is ``Error |
                RawError``."""
        return unwrap(
            self._with_raw_response.update_environment_for_repository(
                workspace, repo_slug, environment_uuid, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> DeploymentsWithRawResponse:
        return self._with_raw_response


class AsyncDeployments:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncDeploymentsWithRawResponse(client, server, auth)

    async def create_environment(
        self,
        workspace: str,
        repo_slug: str,
        body: DeploymentEnvironment | DeploymentEnvironmentDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> DeploymentEnvironment:
        """Create an environment.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            body: The environment to create.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The environment was created.

        Raises:
            ApiError: The account or repository does not exist. An environment host with the provided name already
                exists. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.create_environment(
                workspace, repo_slug, body, request_options=request_options
            ),
        )

    async def delete_environment_for_repository(
        self,
        workspace: str,
        repo_slug: str,
        environment_uuid: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Send a ``DELETE`` request.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            environment_uuid: The environment UUID.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The environment was deleted.

        Raises:
            ApiError: No account or repository with the UUID provided exists. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.delete_environment_for_repository(
                workspace, repo_slug, environment_uuid, request_options=request_options
            ),
        )

    async def delete_repositories_by_workspace_by_repo_slug_deploy_keys_by_key_id(
        self, key_id: str, repo_slug: str, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """This deletes a deploy key from a repository.

        Args:
            key_id: The key ID matching the deploy key.
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The key has been deleted

        Raises:
            ApiError: If the current user does not have permission to delete a key for the specified user If the
                specified user, repository, or deploy key does not exist ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.delete_repositories_by_workspace_by_repo_slug_deploy_keys_by_key_id(
                key_id, repo_slug, workspace, request_options=request_options
            ),
        )

    async def delete_workspaces_by_workspace_projects_by_project_key_deploy_keys_by_key_id(
        self, key_id: str, project_key: str, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """This deletes a deploy key from a project.

        Args:
            key_id: The key ID matching the project deploy key.
            project_key: The project in question. This is the actual ``key`` assigned to the project.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The project deploy key has been deleted

        Raises:
            ApiError: If the current user does not have permission to delete a key for the specified project If the
                specified workspace, project, or project deploy key does not exist ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.delete_workspaces_by_workspace_projects_by_project_key_deploy_keys_by_key_id(
                key_id, project_key, workspace, request_options=request_options
            ),
        )

    async def get_deployment_for_repository(
        self,
        workspace: str,
        repo_slug: str,
        deployment_uuid: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Deployment:
        """Retrieve a deployment

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            deployment_uuid: The deployment UUID.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deployment.

        Raises:
            ApiError: No account, repository or deployment with the UUID provided exists. ``error`` is ``Error |
                RawError``."""
        return unwrap(
            await self._with_raw_response.get_deployment_for_repository(
                workspace, repo_slug, deployment_uuid, request_options=request_options
            ),
        )

    async def get_deployments_for_repository(
        self, workspace: str, repo_slug: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> PaginatedDeployments:
        """Find deployments

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The matching deployments.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.get_deployments_for_repository(
                workspace, repo_slug, request_options=request_options
            ),
        )

    async def get_environment_for_repository(
        self,
        workspace: str,
        repo_slug: str,
        environment_uuid: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> DeploymentEnvironment:
        """Retrieve an environment

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            environment_uuid: The environment UUID.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The environment.

        Raises:
            ApiError: No account, repository or environment with the UUID provided exists. ``error`` is ``Error |
                RawError``."""
        return unwrap(
            await self._with_raw_response.get_environment_for_repository(
                workspace, repo_slug, environment_uuid, request_options=request_options
            ),
        )

    async def get_environments_for_repository(
        self, workspace: str, repo_slug: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> PaginatedDeploymentEnvironments:
        """Find environments

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The matching environments.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.get_environments_for_repository(
                workspace, repo_slug, request_options=request_options
            ),
        )

    async def get_repositories_by_workspace_by_repo_slug_deploy_keys(
        self, repo_slug: str, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> PaginatedDeployKeys:
        """Returns all deploy-keys belonging to a repository.

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Deploy keys matching the repository

        Raises:
            ApiError: If the specified user or repository is not accessible to the current user If the specified user or
                repository does not exist ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_repositories_by_workspace_by_repo_slug_deploy_keys(
                repo_slug, workspace, request_options=request_options
            ),
        )

    async def get_repositories_by_workspace_by_repo_slug_deploy_keys_by_key_id(
        self, key_id: str, repo_slug: str, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> DeployKey:
        """Returns the deploy key belonging to a specific key.

        Args:
            key_id: The key ID matching the deploy key.
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Deploy key matching the key ID

        Raises:
            ApiError: If the specified user or repository is not accessible to the current user If the specified user or
                repository does not exist ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_repositories_by_workspace_by_repo_slug_deploy_keys_by_key_id(
                key_id, repo_slug, workspace, request_options=request_options
            ),
        )

    async def get_workspaces_by_workspace_projects_by_project_key_deploy_keys(
        self, project_key: str, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> PaginatedProjectDeployKeys:
        """Returns all deploy keys belonging to a project.

        Args:
            project_key: The project in question. This is the actual ``key`` assigned to the project.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Deploy keys matching the project

        Raises:
            ApiError: If the specified workspace or project is not accessible to the current user If the specified
                workspace or project does not exist ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_workspaces_by_workspace_projects_by_project_key_deploy_keys(
                project_key, workspace, request_options=request_options
            ),
        )

    async def get_workspaces_by_workspace_projects_by_project_key_deploy_keys_by_key_id(
        self, key_id: str, project_key: str, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ProjectDeployKey:
        """Returns the deploy key belonging to a specific key ID.

        Args:
            key_id: The key ID matching the project deploy key.
            project_key: The project in question. This is the actual ``key`` assigned to the project.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Project deploy key matching the key ID

        Raises:
            ApiError: If the specified workspace or project is not accessible to the current user If the specified
                workspace or project does not exist ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_workspaces_by_workspace_projects_by_project_key_deploy_keys_by_key_id(
                key_id, project_key, workspace, request_options=request_options
            ),
        )

    async def post_repositories_by_workspace_by_repo_slug_deploy_keys(
        self, repo_slug: str, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> DeployKey:
        r"""Create a new deploy key in a repository. Note: If authenticating a deploy key with an OAuth consumer, any
        changes to the OAuth consumer will subsequently invalidate the deploy key.

        Example:
        ```
        $ curl -X POST \ -H "Authorization " \ -H "Content-type: application/json" \
        https://api.bitbucket.org/2.0/repositories/mleu/test/deploy-keys -d \
        '{
        "key": "ssh-rsa
        AAAAB3NzaC1yc2EAAAADAQABAAABAQDAK/b1cHHDr/TEV1JGQl+WjCwStKG6Bhrv0rFpEsYlyTBm1fzN0VOJJYn4ZOPCPJwqse6fGbXntEs+BbXiptR+++HycVgl65TMR0b5ul5AgwrVdZdT7qjCOCgaSV74/9xlHDK8oqgGnfA7ZoBBU+qpVyaloSjBdJfLtPY/xqj4yHnXKYzrtn/uFc4Kp9Tb7PUg9Io3qohSTGJGVHnsVblq/rToJG7L5xIo0OxK0SJSQ5vuId93ZuFZrCNMXj8JDHZeSEtjJzpRCBEXHxpOPhAcbm4MzULgkFHhAVgp4JbkrT99/wpvZ7r9AdkTg7HGqL3rlaDrEcWfL7Lu6TnhBdq5
        mleu@C02W454JHTD8", "label": "mydeploykey"
        }'
        ```

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deploy key that was created

        Raises:
            ApiError: Invalid deploy key inputs If the specified user or repository is not accessible to the current
                user If the specified user or repository does not exist ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.post_repositories_by_workspace_by_repo_slug_deploy_keys(
                repo_slug, workspace, request_options=request_options
            ),
        )

    async def post_workspaces_by_workspace_projects_by_project_key_deploy_keys(
        self, project_key: str, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ProjectDeployKey:
        r"""Create a new deploy key in a project.

        Example:
        ```
        $ curl -X POST \ -H "Authorization " \ -H "Content-type: application/json" \
        https://api.bitbucket.org/2.0/workspaces/standard/projects/TEST_PROJECT/deploy-keys/ -d \
        '{
        "key": "ssh-rsa
        AAAAB3NzaC1yc2EAAAADAQABAAABAQDAK/b1cHHDr/TEV1JGQl+WjCwStKG6Bhrv0rFpEsYlyTBm1fzN0VOJJYn4ZOPCPJwqse6fGbXntEs+BbXiptR+++HycVgl65TMR0b5ul5AgwrVdZdT7qjCOCgaSV74/9xlHDK8oqgGnfA7ZoBBU+qpVyaloSjBdJfLtPY/xqj4yHnXKYzrtn/uFc4Kp9Tb7PUg9Io3qohSTGJGVHnsVblq/rToJG7L5xIo0OxK0SJSQ5vuId93ZuFZrCNMXj8JDHZeSEtjJzpRCBEXHxpOPhAcbm4MzULgkFHhAVgp4JbkrT99/wpvZ7r9AdkTg7HGqL3rlaDrEcWfL7Lu6TnhBdq5
        mleu@C02W454JHTD8", "label": "mydeploykey"
        }'
        ```

        Args:
            project_key: The project in question. This is the actual ``key`` assigned to the project.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The project deploy key that was created

        Raises:
            ApiError: Invalid deploy key inputs If the specified workspace or project is not accessible to the current
                user If the specified workspace or project does not exist ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.post_workspaces_by_workspace_projects_by_project_key_deploy_keys(
                project_key, workspace, request_options=request_options
            ),
        )

    async def put_repositories_by_workspace_by_repo_slug_deploy_keys_by_key_id(
        self, key_id: str, repo_slug: str, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> DeployKey:
        r"""Create a new deploy key in a repository.

        The same key needs to be passed in but the comment and label can change.

        Example:
        ```
        $ curl -X PUT \ -H "Authorization " \ -H "Content-type: application/json" \
        https://api.bitbucket.org/2.0/repositories/mleu/test/deploy-keys/1234 -d \
        '{
        "label": "newlabel", "key": "ssh-rsa
        AAAAB3NzaC1yc2EAAAADAQABAAABAQDAK/b1cHHDr/TEV1JGQl+WjCwStKG6Bhrv0rFpEsYlyTBm1fzN0VOJJYn4ZOPCPJwqse6fGbXntEs+BbXiptR+++HycVgl65TMR0b5ul5AgwrVdZdT7qjCOCgaSV74/9xlHDK8oqgGnfA7ZoBBU+qpVyaloSjBdJfLtPY/xqj4yHnXKYzrtn/uFc4Kp9Tb7PUg9Io3qohSTGJGVHnsVblq/rToJG7L5xIo0OxK0SJSQ5vuId93ZuFZrCNMXj8JDHZeSEtjJzpRCBEXHxpOPhAcbm4MzULgkFHhAVgp4JbkrT99/wpvZ7r9AdkTg7HGqL3rlaDrEcWfL7Lu6TnhBdq5
        newcomment",
        }'
        ```

        Args:
            key_id: The key ID matching the deploy key.
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The newly updated deploy key.

        Raises:
            ApiError: If the submitted key or related value is invalid If the current user does not have permission to
                add a key for the specified user If the specified user, repository, or deploy key does not exist
                ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.put_repositories_by_workspace_by_repo_slug_deploy_keys_by_key_id(
                key_id, repo_slug, workspace, request_options=request_options
            ),
        )

    async def update_environment_for_repository(
        self,
        workspace: str,
        repo_slug: str,
        environment_uuid: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Send a ``POST`` request.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            environment_uuid: The environment UUID.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The environment update request was accepted.

        Raises:
            ApiError: No account, repository or environment with the UUID provided exists. ``error`` is ``Error |
                RawError``."""
        return unwrap(
            await self._with_raw_response.update_environment_for_repository(
                workspace, repo_slug, environment_uuid, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncDeploymentsWithRawResponse:
        return self._with_raw_response


class DeploymentsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_environment(
        self,
        workspace: str,
        repo_slug: str,
        body: DeploymentEnvironment | DeploymentEnvironmentDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[DeploymentEnvironment, CreateEnvironmentErrorBody]:
        """Create an environment.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            body: The environment to create.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/environments"),
            path_params=[param[str]("workspace", workspace), param[str]("repo_slug", repo_slug)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[DeploymentEnvironment | DeploymentEnvironmentDict](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[DeploymentEnvironment],
            error_mapper=create_environment_error_mapper,
            request_options=request_options,
        )

    def delete_environment_for_repository(
        self,
        workspace: str,
        repo_slug: str,
        environment_uuid: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DeleteEnvironmentForRepositoryErrorBody]:
        """Send a ``DELETE`` request.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            environment_uuid: The environment UUID.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/environments/{environment_uuid}"),
            path_params=[
                param[str]("workspace", workspace),
                param[str]("repo_slug", repo_slug),
                param[str]("environment_uuid", environment_uuid),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=empty_response,
            error_mapper=delete_environment_for_repository_error_mapper,
            request_options=request_options,
        )

    def delete_repositories_by_workspace_by_repo_slug_deploy_keys_by_key_id(
        self, key_id: str, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteRepositoriesByWorkspaceByRepoSlugDeployKeysByKeyIdErrorBody]:
        """This deletes a deploy key from a repository.

        Args:
            key_id: The key ID matching the deploy key.
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/deploy-keys/{key_id}"),
            path_params=[
                param[str]("key_id", key_id), param[str]("repo_slug", repo_slug), param[str]("workspace", workspace)
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=empty_response,
            error_mapper=delete_repositories_by_workspace_by_repo_slug_deploy_keys_by_key_id_error_mapper,
            request_options=request_options,
        )

    def delete_workspaces_by_workspace_projects_by_project_key_deploy_keys_by_key_id(
        self, key_id: str, project_key: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteWorkspacesByWorkspaceProjectsByProjectKeyDeployKeysByKeyIdErrorBody]:
        """This deletes a deploy key from a project.

        Args:
            key_id: The key ID matching the project deploy key.
            project_key: The project in question. This is the actual ``key`` assigned to the project.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/workspaces/{workspace}/projects/{project_key}/deploy-keys/{key_id}"),
            path_params=[
                param[str]("key_id", key_id), param[str]("project_key", project_key), param[str]("workspace", workspace)
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=empty_response,
            error_mapper=delete_workspaces_by_workspace_projects_by_project_key_deploy_keys_by_key_id_error_mapper,
            request_options=request_options,
        )

    def get_deployment_for_repository(
        self,
        workspace: str,
        repo_slug: str,
        deployment_uuid: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Deployment, GetDeploymentForRepositoryErrorBody]:
        """Retrieve a deployment

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            deployment_uuid: The deployment UUID.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/deployments/{deployment_uuid}"),
            path_params=[
                param[str]("workspace", workspace),
                param[str]("repo_slug", repo_slug),
                param[str]("deployment_uuid", deployment_uuid),
            ],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[Deployment],
            error_mapper=get_deployment_for_repository_error_mapper,
            request_options=request_options,
        )

    def get_deployments_for_repository(
        self, workspace: str, repo_slug: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[PaginatedDeployments, RawError]:
        """Find deployments

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/deployments"),
            path_params=[param[str]("workspace", workspace), param[str]("repo_slug", repo_slug)],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[PaginatedDeployments],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def get_environment_for_repository(
        self,
        workspace: str,
        repo_slug: str,
        environment_uuid: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[DeploymentEnvironment, GetEnvironmentForRepositoryErrorBody]:
        """Retrieve an environment

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            environment_uuid: The environment UUID.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/environments/{environment_uuid}"),
            path_params=[
                param[str]("workspace", workspace),
                param[str]("repo_slug", repo_slug),
                param[str]("environment_uuid", environment_uuid),
            ],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[DeploymentEnvironment],
            error_mapper=get_environment_for_repository_error_mapper,
            request_options=request_options,
        )

    def get_environments_for_repository(
        self, workspace: str, repo_slug: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[PaginatedDeploymentEnvironments, RawError]:
        """Find environments

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/environments"),
            path_params=[param[str]("workspace", workspace), param[str]("repo_slug", repo_slug)],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[PaginatedDeploymentEnvironments],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def get_repositories_by_workspace_by_repo_slug_deploy_keys(
        self, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[PaginatedDeployKeys, GetRepositoriesByWorkspaceByRepoSlugDeployKeysErrorBody]:
        """Returns all deploy-keys belonging to a repository.

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/deploy-keys"),
            path_params=[param[str]("repo_slug", repo_slug), param[str]("workspace", workspace)],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[PaginatedDeployKeys],
            error_mapper=get_repositories_by_workspace_by_repo_slug_deploy_keys_error_mapper,
            request_options=request_options,
        )

    def get_repositories_by_workspace_by_repo_slug_deploy_keys_by_key_id(
        self, key_id: str, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[DeployKey, GetRepositoriesByWorkspaceByRepoSlugDeployKeysByKeyIdErrorBody]:
        """Returns the deploy key belonging to a specific key.

        Args:
            key_id: The key ID matching the deploy key.
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/deploy-keys/{key_id}"),
            path_params=[
                param[str]("key_id", key_id), param[str]("repo_slug", repo_slug), param[str]("workspace", workspace)
            ],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[DeployKey],
            error_mapper=get_repositories_by_workspace_by_repo_slug_deploy_keys_by_key_id_error_mapper,
            request_options=request_options,
        )

    def get_workspaces_by_workspace_projects_by_project_key_deploy_keys(
        self, project_key: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[PaginatedProjectDeployKeys, GetWorkspacesByWorkspaceProjectsByProjectKeyDeployKeysErrorBody]:
        """Returns all deploy keys belonging to a project.

        Args:
            project_key: The project in question. This is the actual ``key`` assigned to the project.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/workspaces/{workspace}/projects/{project_key}/deploy-keys"),
            path_params=[param[str]("project_key", project_key), param[str]("workspace", workspace)],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[PaginatedProjectDeployKeys],
            error_mapper=get_workspaces_by_workspace_projects_by_project_key_deploy_keys_error_mapper,
            request_options=request_options,
        )

    def get_workspaces_by_workspace_projects_by_project_key_deploy_keys_by_key_id(
        self, key_id: str, project_key: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ProjectDeployKey, GetWorkspacesByWorkspaceProjectsByProjectKeyDeployKeysByKeyIdErrorBody]:
        """Returns the deploy key belonging to a specific key ID.

        Args:
            key_id: The key ID matching the project deploy key.
            project_key: The project in question. This is the actual ``key`` assigned to the project.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/workspaces/{workspace}/projects/{project_key}/deploy-keys/{key_id}"),
            path_params=[
                param[str]("key_id", key_id), param[str]("project_key", project_key), param[str]("workspace", workspace)
            ],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[ProjectDeployKey],
            error_mapper=get_workspaces_by_workspace_projects_by_project_key_deploy_keys_by_key_id_error_mapper,
            request_options=request_options,
        )

    def post_repositories_by_workspace_by_repo_slug_deploy_keys(
        self, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[DeployKey, PostRepositoriesByWorkspaceByRepoSlugDeployKeysErrorBody]:
        r"""Create a new deploy key in a repository. Note: If authenticating a deploy key with an OAuth consumer, any
        changes to the OAuth consumer will subsequently invalidate the deploy key.

        Example:
        ```
        $ curl -X POST \ -H "Authorization " \ -H "Content-type: application/json" \
        https://api.bitbucket.org/2.0/repositories/mleu/test/deploy-keys -d \
        '{
        "key": "ssh-rsa
        AAAAB3NzaC1yc2EAAAADAQABAAABAQDAK/b1cHHDr/TEV1JGQl+WjCwStKG6Bhrv0rFpEsYlyTBm1fzN0VOJJYn4ZOPCPJwqse6fGbXntEs+BbXiptR+++HycVgl65TMR0b5ul5AgwrVdZdT7qjCOCgaSV74/9xlHDK8oqgGnfA7ZoBBU+qpVyaloSjBdJfLtPY/xqj4yHnXKYzrtn/uFc4Kp9Tb7PUg9Io3qohSTGJGVHnsVblq/rToJG7L5xIo0OxK0SJSQ5vuId93ZuFZrCNMXj8JDHZeSEtjJzpRCBEXHxpOPhAcbm4MzULgkFHhAVgp4JbkrT99/wpvZ7r9AdkTg7HGqL3rlaDrEcWfL7Lu6TnhBdq5
        mleu@C02W454JHTD8", "label": "mydeploykey"
        }'
        ```

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/deploy-keys"),
            path_params=[param[str]("repo_slug", repo_slug), param[str]("workspace", workspace)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[DeployKey],
            error_mapper=post_repositories_by_workspace_by_repo_slug_deploy_keys_error_mapper,
            request_options=request_options,
        )

    def post_workspaces_by_workspace_projects_by_project_key_deploy_keys(
        self, project_key: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ProjectDeployKey, PostWorkspacesByWorkspaceProjectsByProjectKeyDeployKeysErrorBody]:
        r"""Create a new deploy key in a project.

        Example:
        ```
        $ curl -X POST \ -H "Authorization " \ -H "Content-type: application/json" \
        https://api.bitbucket.org/2.0/workspaces/standard/projects/TEST_PROJECT/deploy-keys/ -d \
        '{
        "key": "ssh-rsa
        AAAAB3NzaC1yc2EAAAADAQABAAABAQDAK/b1cHHDr/TEV1JGQl+WjCwStKG6Bhrv0rFpEsYlyTBm1fzN0VOJJYn4ZOPCPJwqse6fGbXntEs+BbXiptR+++HycVgl65TMR0b5ul5AgwrVdZdT7qjCOCgaSV74/9xlHDK8oqgGnfA7ZoBBU+qpVyaloSjBdJfLtPY/xqj4yHnXKYzrtn/uFc4Kp9Tb7PUg9Io3qohSTGJGVHnsVblq/rToJG7L5xIo0OxK0SJSQ5vuId93ZuFZrCNMXj8JDHZeSEtjJzpRCBEXHxpOPhAcbm4MzULgkFHhAVgp4JbkrT99/wpvZ7r9AdkTg7HGqL3rlaDrEcWfL7Lu6TnhBdq5
        mleu@C02W454JHTD8", "label": "mydeploykey"
        }'
        ```

        Args:
            project_key: The project in question. This is the actual ``key`` assigned to the project.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/workspaces/{workspace}/projects/{project_key}/deploy-keys"),
            path_params=[param[str]("project_key", project_key), param[str]("workspace", workspace)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[ProjectDeployKey],
            error_mapper=post_workspaces_by_workspace_projects_by_project_key_deploy_keys_error_mapper,
            request_options=request_options,
        )

    def put_repositories_by_workspace_by_repo_slug_deploy_keys_by_key_id(
        self, key_id: str, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[DeployKey, PutRepositoriesByWorkspaceByRepoSlugDeployKeysByKeyIdErrorBody]:
        r"""Create a new deploy key in a repository.

        The same key needs to be passed in but the comment and label can change.

        Example:
        ```
        $ curl -X PUT \ -H "Authorization " \ -H "Content-type: application/json" \
        https://api.bitbucket.org/2.0/repositories/mleu/test/deploy-keys/1234 -d \
        '{
        "label": "newlabel", "key": "ssh-rsa
        AAAAB3NzaC1yc2EAAAADAQABAAABAQDAK/b1cHHDr/TEV1JGQl+WjCwStKG6Bhrv0rFpEsYlyTBm1fzN0VOJJYn4ZOPCPJwqse6fGbXntEs+BbXiptR+++HycVgl65TMR0b5ul5AgwrVdZdT7qjCOCgaSV74/9xlHDK8oqgGnfA7ZoBBU+qpVyaloSjBdJfLtPY/xqj4yHnXKYzrtn/uFc4Kp9Tb7PUg9Io3qohSTGJGVHnsVblq/rToJG7L5xIo0OxK0SJSQ5vuId93ZuFZrCNMXj8JDHZeSEtjJzpRCBEXHxpOPhAcbm4MzULgkFHhAVgp4JbkrT99/wpvZ7r9AdkTg7HGqL3rlaDrEcWfL7Lu6TnhBdq5
        newcomment",
        }'
        ```

        Args:
            key_id: The key ID matching the deploy key.
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/deploy-keys/{key_id}"),
            path_params=[
                param[str]("key_id", key_id), param[str]("repo_slug", repo_slug), param[str]("workspace", workspace)
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[DeployKey],
            error_mapper=put_repositories_by_workspace_by_repo_slug_deploy_keys_by_key_id_error_mapper,
            request_options=request_options,
        )

    def update_environment_for_repository(
        self,
        workspace: str,
        repo_slug: str,
        environment_uuid: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, UpdateEnvironmentForRepositoryErrorBody]:
        """Send a ``POST`` request.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            environment_uuid: The environment UUID.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default(
                "/repositories/{workspace}/{repo_slug}/environments/{environment_uuid}/changes"
            ),
            path_params=[
                param[str]("workspace", workspace),
                param[str]("repo_slug", repo_slug),
                param[str]("environment_uuid", environment_uuid),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=empty_response,
            error_mapper=update_environment_for_repository_error_mapper,
            request_options=request_options,
        )


class AsyncDeploymentsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_environment(
        self,
        workspace: str,
        repo_slug: str,
        body: DeploymentEnvironment | DeploymentEnvironmentDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[DeploymentEnvironment, CreateEnvironmentErrorBody]:
        """Create an environment.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            body: The environment to create.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/environments"),
            path_params=[param[str]("workspace", workspace), param[str]("repo_slug", repo_slug)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[DeploymentEnvironment | DeploymentEnvironmentDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[DeploymentEnvironment],
            error_mapper=create_environment_error_mapper,
            request_options=request_options,
        )

    async def delete_environment_for_repository(
        self,
        workspace: str,
        repo_slug: str,
        environment_uuid: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DeleteEnvironmentForRepositoryErrorBody]:
        """Send a ``DELETE`` request.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            environment_uuid: The environment UUID.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/environments/{environment_uuid}"),
            path_params=[
                param[str]("workspace", workspace),
                param[str]("repo_slug", repo_slug),
                param[str]("environment_uuid", environment_uuid),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_empty_response,
            error_mapper=delete_environment_for_repository_error_mapper,
            request_options=request_options,
        )

    async def delete_repositories_by_workspace_by_repo_slug_deploy_keys_by_key_id(
        self, key_id: str, repo_slug: str, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteRepositoriesByWorkspaceByRepoSlugDeployKeysByKeyIdErrorBody]:
        """This deletes a deploy key from a repository.

        Args:
            key_id: The key ID matching the deploy key.
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/deploy-keys/{key_id}"),
            path_params=[
                param[str]("key_id", key_id), param[str]("repo_slug", repo_slug), param[str]("workspace", workspace)
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_empty_response,
            error_mapper=delete_repositories_by_workspace_by_repo_slug_deploy_keys_by_key_id_error_mapper,
            request_options=request_options,
        )

    async def delete_workspaces_by_workspace_projects_by_project_key_deploy_keys_by_key_id(
        self, key_id: str, project_key: str, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteWorkspacesByWorkspaceProjectsByProjectKeyDeployKeysByKeyIdErrorBody]:
        """This deletes a deploy key from a project.

        Args:
            key_id: The key ID matching the project deploy key.
            project_key: The project in question. This is the actual ``key`` assigned to the project.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/workspaces/{workspace}/projects/{project_key}/deploy-keys/{key_id}"),
            path_params=[
                param[str]("key_id", key_id), param[str]("project_key", project_key), param[str]("workspace", workspace)
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_empty_response,
            error_mapper=delete_workspaces_by_workspace_projects_by_project_key_deploy_keys_by_key_id_error_mapper,
            request_options=request_options,
        )

    async def get_deployment_for_repository(
        self,
        workspace: str,
        repo_slug: str,
        deployment_uuid: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Deployment, GetDeploymentForRepositoryErrorBody]:
        """Retrieve a deployment

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            deployment_uuid: The deployment UUID.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/deployments/{deployment_uuid}"),
            path_params=[
                param[str]("workspace", workspace),
                param[str]("repo_slug", repo_slug),
                param[str]("deployment_uuid", deployment_uuid),
            ],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[Deployment],
            error_mapper=get_deployment_for_repository_error_mapper,
            request_options=request_options,
        )

    async def get_deployments_for_repository(
        self, workspace: str, repo_slug: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[PaginatedDeployments, RawError]:
        """Find deployments

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/deployments"),
            path_params=[param[str]("workspace", workspace), param[str]("repo_slug", repo_slug)],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[PaginatedDeployments],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def get_environment_for_repository(
        self,
        workspace: str,
        repo_slug: str,
        environment_uuid: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[DeploymentEnvironment, GetEnvironmentForRepositoryErrorBody]:
        """Retrieve an environment

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            environment_uuid: The environment UUID.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/environments/{environment_uuid}"),
            path_params=[
                param[str]("workspace", workspace),
                param[str]("repo_slug", repo_slug),
                param[str]("environment_uuid", environment_uuid),
            ],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[DeploymentEnvironment],
            error_mapper=get_environment_for_repository_error_mapper,
            request_options=request_options,
        )

    async def get_environments_for_repository(
        self, workspace: str, repo_slug: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[PaginatedDeploymentEnvironments, RawError]:
        """Find environments

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/environments"),
            path_params=[param[str]("workspace", workspace), param[str]("repo_slug", repo_slug)],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[PaginatedDeploymentEnvironments],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def get_repositories_by_workspace_by_repo_slug_deploy_keys(
        self, repo_slug: str, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[PaginatedDeployKeys, GetRepositoriesByWorkspaceByRepoSlugDeployKeysErrorBody]:
        """Returns all deploy-keys belonging to a repository.

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/deploy-keys"),
            path_params=[param[str]("repo_slug", repo_slug), param[str]("workspace", workspace)],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[PaginatedDeployKeys],
            error_mapper=get_repositories_by_workspace_by_repo_slug_deploy_keys_error_mapper,
            request_options=request_options,
        )

    async def get_repositories_by_workspace_by_repo_slug_deploy_keys_by_key_id(
        self, key_id: str, repo_slug: str, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[DeployKey, GetRepositoriesByWorkspaceByRepoSlugDeployKeysByKeyIdErrorBody]:
        """Returns the deploy key belonging to a specific key.

        Args:
            key_id: The key ID matching the deploy key.
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/deploy-keys/{key_id}"),
            path_params=[
                param[str]("key_id", key_id), param[str]("repo_slug", repo_slug), param[str]("workspace", workspace)
            ],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[DeployKey],
            error_mapper=get_repositories_by_workspace_by_repo_slug_deploy_keys_by_key_id_error_mapper,
            request_options=request_options,
        )

    async def get_workspaces_by_workspace_projects_by_project_key_deploy_keys(
        self, project_key: str, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[PaginatedProjectDeployKeys, GetWorkspacesByWorkspaceProjectsByProjectKeyDeployKeysErrorBody]:
        """Returns all deploy keys belonging to a project.

        Args:
            project_key: The project in question. This is the actual ``key`` assigned to the project.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/workspaces/{workspace}/projects/{project_key}/deploy-keys"),
            path_params=[param[str]("project_key", project_key), param[str]("workspace", workspace)],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[PaginatedProjectDeployKeys],
            error_mapper=get_workspaces_by_workspace_projects_by_project_key_deploy_keys_error_mapper,
            request_options=request_options,
        )

    async def get_workspaces_by_workspace_projects_by_project_key_deploy_keys_by_key_id(
        self, key_id: str, project_key: str, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ProjectDeployKey, GetWorkspacesByWorkspaceProjectsByProjectKeyDeployKeysByKeyIdErrorBody]:
        """Returns the deploy key belonging to a specific key ID.

        Args:
            key_id: The key ID matching the project deploy key.
            project_key: The project in question. This is the actual ``key`` assigned to the project.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/workspaces/{workspace}/projects/{project_key}/deploy-keys/{key_id}"),
            path_params=[
                param[str]("key_id", key_id), param[str]("project_key", project_key), param[str]("workspace", workspace)
            ],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[ProjectDeployKey],
            error_mapper=get_workspaces_by_workspace_projects_by_project_key_deploy_keys_by_key_id_error_mapper,
            request_options=request_options,
        )

    async def post_repositories_by_workspace_by_repo_slug_deploy_keys(
        self, repo_slug: str, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[DeployKey, PostRepositoriesByWorkspaceByRepoSlugDeployKeysErrorBody]:
        r"""Create a new deploy key in a repository. Note: If authenticating a deploy key with an OAuth consumer, any
        changes to the OAuth consumer will subsequently invalidate the deploy key.

        Example:
        ```
        $ curl -X POST \ -H "Authorization " \ -H "Content-type: application/json" \
        https://api.bitbucket.org/2.0/repositories/mleu/test/deploy-keys -d \
        '{
        "key": "ssh-rsa
        AAAAB3NzaC1yc2EAAAADAQABAAABAQDAK/b1cHHDr/TEV1JGQl+WjCwStKG6Bhrv0rFpEsYlyTBm1fzN0VOJJYn4ZOPCPJwqse6fGbXntEs+BbXiptR+++HycVgl65TMR0b5ul5AgwrVdZdT7qjCOCgaSV74/9xlHDK8oqgGnfA7ZoBBU+qpVyaloSjBdJfLtPY/xqj4yHnXKYzrtn/uFc4Kp9Tb7PUg9Io3qohSTGJGVHnsVblq/rToJG7L5xIo0OxK0SJSQ5vuId93ZuFZrCNMXj8JDHZeSEtjJzpRCBEXHxpOPhAcbm4MzULgkFHhAVgp4JbkrT99/wpvZ7r9AdkTg7HGqL3rlaDrEcWfL7Lu6TnhBdq5
        mleu@C02W454JHTD8", "label": "mydeploykey"
        }'
        ```

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/deploy-keys"),
            path_params=[param[str]("repo_slug", repo_slug), param[str]("workspace", workspace)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[DeployKey],
            error_mapper=post_repositories_by_workspace_by_repo_slug_deploy_keys_error_mapper,
            request_options=request_options,
        )

    async def post_workspaces_by_workspace_projects_by_project_key_deploy_keys(
        self, project_key: str, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ProjectDeployKey, PostWorkspacesByWorkspaceProjectsByProjectKeyDeployKeysErrorBody]:
        r"""Create a new deploy key in a project.

        Example:
        ```
        $ curl -X POST \ -H "Authorization " \ -H "Content-type: application/json" \
        https://api.bitbucket.org/2.0/workspaces/standard/projects/TEST_PROJECT/deploy-keys/ -d \
        '{
        "key": "ssh-rsa
        AAAAB3NzaC1yc2EAAAADAQABAAABAQDAK/b1cHHDr/TEV1JGQl+WjCwStKG6Bhrv0rFpEsYlyTBm1fzN0VOJJYn4ZOPCPJwqse6fGbXntEs+BbXiptR+++HycVgl65TMR0b5ul5AgwrVdZdT7qjCOCgaSV74/9xlHDK8oqgGnfA7ZoBBU+qpVyaloSjBdJfLtPY/xqj4yHnXKYzrtn/uFc4Kp9Tb7PUg9Io3qohSTGJGVHnsVblq/rToJG7L5xIo0OxK0SJSQ5vuId93ZuFZrCNMXj8JDHZeSEtjJzpRCBEXHxpOPhAcbm4MzULgkFHhAVgp4JbkrT99/wpvZ7r9AdkTg7HGqL3rlaDrEcWfL7Lu6TnhBdq5
        mleu@C02W454JHTD8", "label": "mydeploykey"
        }'
        ```

        Args:
            project_key: The project in question. This is the actual ``key`` assigned to the project.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/workspaces/{workspace}/projects/{project_key}/deploy-keys"),
            path_params=[param[str]("project_key", project_key), param[str]("workspace", workspace)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[ProjectDeployKey],
            error_mapper=post_workspaces_by_workspace_projects_by_project_key_deploy_keys_error_mapper,
            request_options=request_options,
        )

    async def put_repositories_by_workspace_by_repo_slug_deploy_keys_by_key_id(
        self, key_id: str, repo_slug: str, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[DeployKey, PutRepositoriesByWorkspaceByRepoSlugDeployKeysByKeyIdErrorBody]:
        r"""Create a new deploy key in a repository.

        The same key needs to be passed in but the comment and label can change.

        Example:
        ```
        $ curl -X PUT \ -H "Authorization " \ -H "Content-type: application/json" \
        https://api.bitbucket.org/2.0/repositories/mleu/test/deploy-keys/1234 -d \
        '{
        "label": "newlabel", "key": "ssh-rsa
        AAAAB3NzaC1yc2EAAAADAQABAAABAQDAK/b1cHHDr/TEV1JGQl+WjCwStKG6Bhrv0rFpEsYlyTBm1fzN0VOJJYn4ZOPCPJwqse6fGbXntEs+BbXiptR+++HycVgl65TMR0b5ul5AgwrVdZdT7qjCOCgaSV74/9xlHDK8oqgGnfA7ZoBBU+qpVyaloSjBdJfLtPY/xqj4yHnXKYzrtn/uFc4Kp9Tb7PUg9Io3qohSTGJGVHnsVblq/rToJG7L5xIo0OxK0SJSQ5vuId93ZuFZrCNMXj8JDHZeSEtjJzpRCBEXHxpOPhAcbm4MzULgkFHhAVgp4JbkrT99/wpvZ7r9AdkTg7HGqL3rlaDrEcWfL7Lu6TnhBdq5
        newcomment",
        }'
        ```

        Args:
            key_id: The key ID matching the deploy key.
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/deploy-keys/{key_id}"),
            path_params=[
                param[str]("key_id", key_id), param[str]("repo_slug", repo_slug), param[str]("workspace", workspace)
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[DeployKey],
            error_mapper=put_repositories_by_workspace_by_repo_slug_deploy_keys_by_key_id_error_mapper,
            request_options=request_options,
        )

    async def update_environment_for_repository(
        self,
        workspace: str,
        repo_slug: str,
        environment_uuid: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, UpdateEnvironmentForRepositoryErrorBody]:
        """Send a ``POST`` request.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            environment_uuid: The environment UUID.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default(
                "/repositories/{workspace}/{repo_slug}/environments/{environment_uuid}/changes"
            ),
            path_params=[
                param[str]("workspace", workspace),
                param[str]("repo_slug", repo_slug),
                param[str]("environment_uuid", environment_uuid),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_empty_response,
            error_mapper=update_environment_for_repository_error_mapper,
            request_options=request_options,
        )

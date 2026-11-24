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
    json_decoder,
    param,
    unwrap,
)
from ..errors.get_repositories_by_workspace_by_repo_slug_branching_model_error import (
    GetRepositoriesByWorkspaceByRepoSlugBranchingModelErrorBody,
    get_repositories_by_workspace_by_repo_slug_branching_model_error_mapper,
)
from ..errors.get_repositories_by_workspace_by_repo_slug_branching_model_settings_error import (
    GetRepositoriesByWorkspaceByRepoSlugBranchingModelSettingsErrorBody,
    get_repositories_by_workspace_by_repo_slug_branching_model_settings_error_mapper,
)
from ..errors.get_repositories_by_workspace_by_repo_slug_effective_branching_model_error import (
    GetRepositoriesByWorkspaceByRepoSlugEffectiveBranchingModelErrorBody,
    get_repositories_by_workspace_by_repo_slug_effective_branching_model_error_mapper,
)
from ..errors.get_workspaces_by_workspace_projects_by_project_key_branching_model_error import (
    GetWorkspacesByWorkspaceProjectsByProjectKeyBranchingModelErrorBody,
    get_workspaces_by_workspace_projects_by_project_key_branching_model_error_mapper,
)
from ..errors.get_workspaces_by_workspace_projects_by_project_key_branching_model_settings_error import (
    GetWorkspacesByWorkspaceProjectsByProjectKeyBranchingModelSettingsErrorBody,
    get_workspaces_by_workspace_projects_by_project_key_branching_model_settings_error_mapper,
)
from ..errors.put_repositories_by_workspace_by_repo_slug_branching_model_settings_error import (
    PutRepositoriesByWorkspaceByRepoSlugBranchingModelSettingsErrorBody,
    put_repositories_by_workspace_by_repo_slug_branching_model_settings_error_mapper,
)
from ..errors.put_workspaces_by_workspace_projects_by_project_key_branching_model_settings_error import (
    PutWorkspacesByWorkspaceProjectsByProjectKeyBranchingModelSettingsErrorBody,
    put_workspaces_by_workspace_projects_by_project_key_branching_model_settings_error_mapper,
)
from ..models.branching_model import BranchingModel
from ..models.branching_model_settings import BranchingModelSettings
from ..models.effective_repo_branching_model import EffectiveRepoBranchingModel
from ..models.project_branching_model import ProjectBranchingModel
from ..server.server import Server


class BranchingModelApi:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = BranchingModelApiWithRawResponse(client, server, auth)

    def get_repositories_by_workspace_by_repo_slug_branching_model(
        self, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> BranchingModel:
        """Return the branching model as applied to the repository. This view is read-only. The branching model settings
        can be changed using the settings API.

        The returned object:

        1. Always has a ``development`` property. ``development.branch`` contains
        the actual repository branch object that is considered to be the ``development`` branch. ``development.branch``
        will not be present if it does not exist.
        2. Might have a ``production`` property. ``production`` will not
        be present when ``production`` is disabled. ``production.branch`` contains the actual branch object that is
        considered to be the ``production`` branch. ``production.branch`` will not be present if it does not exist.
        3. Always has a ``branch_types`` array which contains all enabled branch
        types.

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The branching model object

        Raises:
            ApiError: If the request was not authenticated If the authenticated user does not have read access to the
                repository If the repository does not exist ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_repositories_by_workspace_by_repo_slug_branching_model(
                repo_slug, workspace, request_options=request_options
            ),
        )

    def get_repositories_by_workspace_by_repo_slug_branching_model_settings(
        self, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> BranchingModelSettings:
        """Return the branching model configuration for a repository. The returned object:

        1. Always has a ``development`` property for the development branch.
        2. Always a ``production`` property for the production branch. The
        production branch can be disabled.
        3. The ``branch_types`` contains all the branch types.
        4. ``default_branch_deletion`` indicates whether branches will be
        deleted by default on merge.

        This is the raw configuration for the branching model. A client wishing to see the branching model with its
        actual current branches may find the active model API more useful.

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The branching model configuration

        Raises:
            ApiError: If the request was not authenticated If the authenticated user does not have admin access to the
                repository If the repository does not exist ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_repositories_by_workspace_by_repo_slug_branching_model_settings(
                repo_slug, workspace, request_options=request_options
            ),
        )

    def get_repositories_by_workspace_by_repo_slug_effective_branching_model(
        self, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> EffectiveRepoBranchingModel:
        """Send a ``GET`` request.

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The effective branching model object

        Raises:
            ApiError: If the request was not authenticated If the authenticated user does not have read access to the
                repository If the repository does not exist ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_repositories_by_workspace_by_repo_slug_effective_branching_model(
                repo_slug, workspace, request_options=request_options
            ),
        )

    def get_workspaces_by_workspace_projects_by_project_key_branching_model(
        self, project_key: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ProjectBranchingModel:
        """Return the branching model set at the project level. This view is read-only. The branching model settings can
        be changed using the settings API.

        The returned object:

        1. Always has a ``development`` property. ``development.name`` is
        the user-specified branch that can be inherited by an individual repository's branching model.
        2. Might have a ``production`` property. ``production`` will not
        be present when ``production`` is disabled. ``production.name`` is the user-specified branch that can be
        inherited by an individual repository's branching model.
        3. Always has a ``branch_types`` array which contains all enabled branch
        types.

        Args:
            project_key: The project in question. This is the actual ``key`` assigned to the project.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The branching model object

        Raises:
            ApiError: If the request was not authenticated If the authenticated user does not have read access to the
                project If the project does not exist ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_workspaces_by_workspace_projects_by_project_key_branching_model(
                project_key, workspace, request_options=request_options
            ),
        )

    def get_workspaces_by_workspace_projects_by_project_key_branching_model_settings(
        self, project_key: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> BranchingModelSettings:
        """Return the branching model configuration for a project. The returned object:

        1. Always has a ``development`` property for the development branch.
        2. Always a ``production`` property for the production branch. The
        production branch can be disabled.
        3. The ``branch_types`` contains all the branch types.
        4. ``default_branch_deletion`` indicates whether branches will be
        deleted by default on merge.

        This is the raw configuration for the branching model. A client wishing to see the branching model with its
        actual current branches may find the active model API more useful.

        Args:
            project_key: The project in question. This is the actual ``key`` assigned to the project.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The branching model configuration

        Raises:
            ApiError: If the request was not authenticated If the authenticated user does not have admin access to the
                project If the project does not exist ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_workspaces_by_workspace_projects_by_project_key_branching_model_settings(
                project_key, workspace, request_options=request_options
            ),
        )

    def put_repositories_by_workspace_by_repo_slug_branching_model_settings(
        self, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> BranchingModelSettings:
        """Update the branching model configuration for a repository.

        The ``development`` branch can be configured to a specific branch or to track the main branch. When set to a
        specific branch it must currently exist. Only the passed properties will be updated. The properties not passed
        will be left unchanged. A request without a ``development`` property will leave the development branch
        unchanged.

        It is possible for the ``development`` branch to be invalid. This happens when it points at a specific branch
        that has been deleted. This is indicated in the ``is_valid`` field for the branch. It is not possible to update
        the settings for ``development`` if that would leave the branch in an invalid state. Such a request will be
        rejected.

        The ``production`` branch can be a specific branch, the main branch or disabled. When set to a specific branch
        it must currently exist. The ``enabled`` property can be used to enable (``true``) or disable (``false``) it.
        Only the passed properties will be updated. The properties not passed will be left unchanged. A request without
        a ``production`` property will leave the production branch unchanged.

        It is possible for the ``production`` branch to be invalid. This happens when it points at a specific branch
        that has been deleted. This is indicated in the ``is_valid`` field for the branch. A request that would leave
        ``production`` enabled and invalid will be rejected. It is possible to update ``production`` and make it invalid
        if it would also be left disabled.

        The ``branch_types`` property contains the branch types to be updated. Only the branch types passed will be
        updated. All updates will be rejected if it would leave the branching model in an invalid state. For branch
        types this means that:

        1. The prefixes for all enabled branch types are valid. For example,
        it is not possible to use '*' inside a Git prefix.
        2. A prefix of an enabled branch type must not be a prefix of another
        enabled branch type. This is to ensure that a branch can be easily classified by its prefix unambiguously.

        It is possible to store an invalid prefix if that branch type would be left disabled. Only the passed properties
        will be updated. The properties not passed will be left unchanged. Each branch type must have a ``kind``
        property to identify it.

        The ``default_branch_deletion`` property is a string. The value of ``true`` indicates to delete branches by
        default. The value of ``false`` indicates that branches will not be deleted by default. A request without a
        ``default_branch_deletion`` property will leave it unchanged. Other values would be ignored.

        There is currently a side effect when using this API endpoint. If the repository is inheriting branching model
        settings from its project, updating the branching model for this repository will disable the project setting
        inheritance.

        We have deprecated this side effect and will remove it on 1 August 2022.

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The updated branching model configuration

        Raises:
            ApiError: If the request contains invalid branching model configuration If the request was not authenticated
                If the authenticated user does not have admin access to the repository If the repository does not exist
                ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.put_repositories_by_workspace_by_repo_slug_branching_model_settings(
                repo_slug, workspace, request_options=request_options
            ),
        )

    def put_workspaces_by_workspace_projects_by_project_key_branching_model_settings(
        self, project_key: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> BranchingModelSettings:
        """Update the branching model configuration for a project.

        The ``development`` branch can be configured to a specific branch or to track the main branch. Any branch name
        can be supplied, but will only successfully be applied to a repository via inheritance if that branch exists for
        that repository. Only the passed properties will be updated. The properties not passed will be left unchanged. A
        request without a ``development`` property will leave the development branch unchanged.

        The ``production`` branch can be a specific branch, the main branch or disabled. Any branch name can be
        supplied, but will only successfully be applied to a repository via inheritance if that branch exists for that
        repository. The ``enabled`` property can be used to enable (``true``) or disable (``false``) it. Only the passed
        properties will be updated. The properties not passed will be left unchanged. A request without a ``production``
        property will leave the production branch unchanged.

        The ``branch_types`` property contains the branch types to be updated. Only the branch types passed will be
        updated. All updates will be rejected if it would leave the branching model in an invalid state. For branch
        types this means that:

        1. The prefixes for all enabled branch types are valid. For example,
        it is not possible to use '*' inside a Git prefix.
        2. A prefix of an enabled branch type must not be a prefix of another
        enabled branch type. This is to ensure that a branch can be easily classified by its prefix unambiguously.

        It is possible to store an invalid prefix if that branch type would be left disabled. Only the passed properties
        will be updated. The properties not passed will be left unchanged. Each branch type must have a ``kind``
        property to identify it.

        The ``default_branch_deletion`` property is a string. The value of ``true`` indicates to delete branches by
        default. The value of ``false`` indicates that branches will not be deleted by default. A request without a
        ``default_branch_deletion`` property will leave it unchanged. Other values would be ignored.

        Args:
            project_key: The project in question. This is the actual ``key`` assigned to the project.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The updated branching model configuration

        Raises:
            ApiError: If the request contains an invalid branching model configuration If the request was not
                authenticated If the authenticated user does not have admin access to the project If the project does
                not exist ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.put_workspaces_by_workspace_projects_by_project_key_branching_model_settings(
                project_key, workspace, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> BranchingModelApiWithRawResponse:
        return self._with_raw_response


class AsyncBranchingModelApi:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncBranchingModelApiWithRawResponse(client, server, auth)

    async def get_repositories_by_workspace_by_repo_slug_branching_model(
        self, repo_slug: str, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> BranchingModel:
        """Return the branching model as applied to the repository. This view is read-only. The branching model settings
        can be changed using the settings API.

        The returned object:

        1. Always has a ``development`` property. ``development.branch`` contains
        the actual repository branch object that is considered to be the ``development`` branch. ``development.branch``
        will not be present if it does not exist.
        2. Might have a ``production`` property. ``production`` will not
        be present when ``production`` is disabled. ``production.branch`` contains the actual branch object that is
        considered to be the ``production`` branch. ``production.branch`` will not be present if it does not exist.
        3. Always has a ``branch_types`` array which contains all enabled branch
        types.

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The branching model object

        Raises:
            ApiError: If the request was not authenticated If the authenticated user does not have read access to the
                repository If the repository does not exist ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_repositories_by_workspace_by_repo_slug_branching_model(
                repo_slug, workspace, request_options=request_options
            ),
        )

    async def get_repositories_by_workspace_by_repo_slug_branching_model_settings(
        self, repo_slug: str, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> BranchingModelSettings:
        """Return the branching model configuration for a repository. The returned object:

        1. Always has a ``development`` property for the development branch.
        2. Always a ``production`` property for the production branch. The
        production branch can be disabled.
        3. The ``branch_types`` contains all the branch types.
        4. ``default_branch_deletion`` indicates whether branches will be
        deleted by default on merge.

        This is the raw configuration for the branching model. A client wishing to see the branching model with its
        actual current branches may find the active model API more useful.

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The branching model configuration

        Raises:
            ApiError: If the request was not authenticated If the authenticated user does not have admin access to the
                repository If the repository does not exist ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_repositories_by_workspace_by_repo_slug_branching_model_settings(
                repo_slug, workspace, request_options=request_options
            ),
        )

    async def get_repositories_by_workspace_by_repo_slug_effective_branching_model(
        self, repo_slug: str, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> EffectiveRepoBranchingModel:
        """Send a ``GET`` request.

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The effective branching model object

        Raises:
            ApiError: If the request was not authenticated If the authenticated user does not have read access to the
                repository If the repository does not exist ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_repositories_by_workspace_by_repo_slug_effective_branching_model(
                repo_slug, workspace, request_options=request_options
            ),
        )

    async def get_workspaces_by_workspace_projects_by_project_key_branching_model(
        self, project_key: str, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ProjectBranchingModel:
        """Return the branching model set at the project level. This view is read-only. The branching model settings can
        be changed using the settings API.

        The returned object:

        1. Always has a ``development`` property. ``development.name`` is
        the user-specified branch that can be inherited by an individual repository's branching model.
        2. Might have a ``production`` property. ``production`` will not
        be present when ``production`` is disabled. ``production.name`` is the user-specified branch that can be
        inherited by an individual repository's branching model.
        3. Always has a ``branch_types`` array which contains all enabled branch
        types.

        Args:
            project_key: The project in question. This is the actual ``key`` assigned to the project.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The branching model object

        Raises:
            ApiError: If the request was not authenticated If the authenticated user does not have read access to the
                project If the project does not exist ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_workspaces_by_workspace_projects_by_project_key_branching_model(
                project_key, workspace, request_options=request_options
            ),
        )

    async def get_workspaces_by_workspace_projects_by_project_key_branching_model_settings(
        self, project_key: str, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> BranchingModelSettings:
        """Return the branching model configuration for a project. The returned object:

        1. Always has a ``development`` property for the development branch.
        2. Always a ``production`` property for the production branch. The
        production branch can be disabled.
        3. The ``branch_types`` contains all the branch types.
        4. ``default_branch_deletion`` indicates whether branches will be
        deleted by default on merge.

        This is the raw configuration for the branching model. A client wishing to see the branching model with its
        actual current branches may find the active model API more useful.

        Args:
            project_key: The project in question. This is the actual ``key`` assigned to the project.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The branching model configuration

        Raises:
            ApiError: If the request was not authenticated If the authenticated user does not have admin access to the
                project If the project does not exist ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_workspaces_by_workspace_projects_by_project_key_branching_model_settings(
                project_key, workspace, request_options=request_options
            ),
        )

    async def put_repositories_by_workspace_by_repo_slug_branching_model_settings(
        self, repo_slug: str, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> BranchingModelSettings:
        """Update the branching model configuration for a repository.

        The ``development`` branch can be configured to a specific branch or to track the main branch. When set to a
        specific branch it must currently exist. Only the passed properties will be updated. The properties not passed
        will be left unchanged. A request without a ``development`` property will leave the development branch
        unchanged.

        It is possible for the ``development`` branch to be invalid. This happens when it points at a specific branch
        that has been deleted. This is indicated in the ``is_valid`` field for the branch. It is not possible to update
        the settings for ``development`` if that would leave the branch in an invalid state. Such a request will be
        rejected.

        The ``production`` branch can be a specific branch, the main branch or disabled. When set to a specific branch
        it must currently exist. The ``enabled`` property can be used to enable (``true``) or disable (``false``) it.
        Only the passed properties will be updated. The properties not passed will be left unchanged. A request without
        a ``production`` property will leave the production branch unchanged.

        It is possible for the ``production`` branch to be invalid. This happens when it points at a specific branch
        that has been deleted. This is indicated in the ``is_valid`` field for the branch. A request that would leave
        ``production`` enabled and invalid will be rejected. It is possible to update ``production`` and make it invalid
        if it would also be left disabled.

        The ``branch_types`` property contains the branch types to be updated. Only the branch types passed will be
        updated. All updates will be rejected if it would leave the branching model in an invalid state. For branch
        types this means that:

        1. The prefixes for all enabled branch types are valid. For example,
        it is not possible to use '*' inside a Git prefix.
        2. A prefix of an enabled branch type must not be a prefix of another
        enabled branch type. This is to ensure that a branch can be easily classified by its prefix unambiguously.

        It is possible to store an invalid prefix if that branch type would be left disabled. Only the passed properties
        will be updated. The properties not passed will be left unchanged. Each branch type must have a ``kind``
        property to identify it.

        The ``default_branch_deletion`` property is a string. The value of ``true`` indicates to delete branches by
        default. The value of ``false`` indicates that branches will not be deleted by default. A request without a
        ``default_branch_deletion`` property will leave it unchanged. Other values would be ignored.

        There is currently a side effect when using this API endpoint. If the repository is inheriting branching model
        settings from its project, updating the branching model for this repository will disable the project setting
        inheritance.

        We have deprecated this side effect and will remove it on 1 August 2022.

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The updated branching model configuration

        Raises:
            ApiError: If the request contains invalid branching model configuration If the request was not authenticated
                If the authenticated user does not have admin access to the repository If the repository does not exist
                ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.put_repositories_by_workspace_by_repo_slug_branching_model_settings(
                repo_slug, workspace, request_options=request_options
            ),
        )

    async def put_workspaces_by_workspace_projects_by_project_key_branching_model_settings(
        self, project_key: str, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> BranchingModelSettings:
        """Update the branching model configuration for a project.

        The ``development`` branch can be configured to a specific branch or to track the main branch. Any branch name
        can be supplied, but will only successfully be applied to a repository via inheritance if that branch exists for
        that repository. Only the passed properties will be updated. The properties not passed will be left unchanged. A
        request without a ``development`` property will leave the development branch unchanged.

        The ``production`` branch can be a specific branch, the main branch or disabled. Any branch name can be
        supplied, but will only successfully be applied to a repository via inheritance if that branch exists for that
        repository. The ``enabled`` property can be used to enable (``true``) or disable (``false``) it. Only the passed
        properties will be updated. The properties not passed will be left unchanged. A request without a ``production``
        property will leave the production branch unchanged.

        The ``branch_types`` property contains the branch types to be updated. Only the branch types passed will be
        updated. All updates will be rejected if it would leave the branching model in an invalid state. For branch
        types this means that:

        1. The prefixes for all enabled branch types are valid. For example,
        it is not possible to use '*' inside a Git prefix.
        2. A prefix of an enabled branch type must not be a prefix of another
        enabled branch type. This is to ensure that a branch can be easily classified by its prefix unambiguously.

        It is possible to store an invalid prefix if that branch type would be left disabled. Only the passed properties
        will be updated. The properties not passed will be left unchanged. Each branch type must have a ``kind``
        property to identify it.

        The ``default_branch_deletion`` property is a string. The value of ``true`` indicates to delete branches by
        default. The value of ``false`` indicates that branches will not be deleted by default. A request without a
        ``default_branch_deletion`` property will leave it unchanged. Other values would be ignored.

        Args:
            project_key: The project in question. This is the actual ``key`` assigned to the project.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The updated branching model configuration

        Raises:
            ApiError: If the request contains an invalid branching model configuration If the request was not
                authenticated If the authenticated user does not have admin access to the project If the project does
                not exist ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.put_workspaces_by_workspace_projects_by_project_key_branching_model_settings(
                project_key, workspace, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncBranchingModelApiWithRawResponse:
        return self._with_raw_response


class BranchingModelApiWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_repositories_by_workspace_by_repo_slug_branching_model(
        self, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[BranchingModel, GetRepositoriesByWorkspaceByRepoSlugBranchingModelErrorBody]:
        """Return the branching model as applied to the repository. This view is read-only. The branching model settings
        can be changed using the settings API.

        The returned object:

        1. Always has a ``development`` property. ``development.branch`` contains
        the actual repository branch object that is considered to be the ``development`` branch. ``development.branch``
        will not be present if it does not exist.
        2. Might have a ``production`` property. ``production`` will not
        be present when ``production`` is disabled. ``production.branch`` contains the actual branch object that is
        considered to be the ``production`` branch. ``production.branch`` will not be present if it does not exist.
        3. Always has a ``branch_types`` array which contains all enabled branch
        types.

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
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/branching-model"),
            path_params=[param[str]("repo_slug", repo_slug), param[str]("workspace", workspace)],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[BranchingModel],
            error_mapper=get_repositories_by_workspace_by_repo_slug_branching_model_error_mapper,
            request_options=request_options,
        )

    def get_repositories_by_workspace_by_repo_slug_branching_model_settings(
        self, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[BranchingModelSettings, GetRepositoriesByWorkspaceByRepoSlugBranchingModelSettingsErrorBody]:
        """Return the branching model configuration for a repository. The returned object:

        1. Always has a ``development`` property for the development branch.
        2. Always a ``production`` property for the production branch. The
        production branch can be disabled.
        3. The ``branch_types`` contains all the branch types.
        4. ``default_branch_deletion`` indicates whether branches will be
        deleted by default on merge.

        This is the raw configuration for the branching model. A client wishing to see the branching model with its
        actual current branches may find the active model API more useful.

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
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/branching-model/settings"),
            path_params=[param[str]("repo_slug", repo_slug), param[str]("workspace", workspace)],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[BranchingModelSettings],
            error_mapper=get_repositories_by_workspace_by_repo_slug_branching_model_settings_error_mapper,
            request_options=request_options,
        )

    def get_repositories_by_workspace_by_repo_slug_effective_branching_model(
        self, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[EffectiveRepoBranchingModel, GetRepositoriesByWorkspaceByRepoSlugEffectiveBranchingModelErrorBody]:
        """Send a ``GET`` request.

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
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/effective-branching-model"),
            path_params=[param[str]("repo_slug", repo_slug), param[str]("workspace", workspace)],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[EffectiveRepoBranchingModel],
            error_mapper=get_repositories_by_workspace_by_repo_slug_effective_branching_model_error_mapper,
            request_options=request_options,
        )

    def get_workspaces_by_workspace_projects_by_project_key_branching_model(
        self, project_key: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ProjectBranchingModel, GetWorkspacesByWorkspaceProjectsByProjectKeyBranchingModelErrorBody]:
        """Return the branching model set at the project level. This view is read-only. The branching model settings can
        be changed using the settings API.

        The returned object:

        1. Always has a ``development`` property. ``development.name`` is
        the user-specified branch that can be inherited by an individual repository's branching model.
        2. Might have a ``production`` property. ``production`` will not
        be present when ``production`` is disabled. ``production.name`` is the user-specified branch that can be
        inherited by an individual repository's branching model.
        3. Always has a ``branch_types`` array which contains all enabled branch
        types.

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
            url_template=self._server.default("/workspaces/{workspace}/projects/{project_key}/branching-model"),
            path_params=[param[str]("project_key", project_key), param[str]("workspace", workspace)],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[ProjectBranchingModel],
            error_mapper=get_workspaces_by_workspace_projects_by_project_key_branching_model_error_mapper,
            request_options=request_options,
        )

    def get_workspaces_by_workspace_projects_by_project_key_branching_model_settings(
        self, project_key: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[BranchingModelSettings, GetWorkspacesByWorkspaceProjectsByProjectKeyBranchingModelSettingsErrorBody]:
        """Return the branching model configuration for a project. The returned object:

        1. Always has a ``development`` property for the development branch.
        2. Always a ``production`` property for the production branch. The
        production branch can be disabled.
        3. The ``branch_types`` contains all the branch types.
        4. ``default_branch_deletion`` indicates whether branches will be
        deleted by default on merge.

        This is the raw configuration for the branching model. A client wishing to see the branching model with its
        actual current branches may find the active model API more useful.

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
            url_template=self._server.default(
                "/workspaces/{workspace}/projects/{project_key}/branching-model/settings"
            ),
            path_params=[param[str]("project_key", project_key), param[str]("workspace", workspace)],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[BranchingModelSettings],
            error_mapper=get_workspaces_by_workspace_projects_by_project_key_branching_model_settings_error_mapper,
            request_options=request_options,
        )

    def put_repositories_by_workspace_by_repo_slug_branching_model_settings(
        self, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[BranchingModelSettings, PutRepositoriesByWorkspaceByRepoSlugBranchingModelSettingsErrorBody]:
        """Update the branching model configuration for a repository.

        The ``development`` branch can be configured to a specific branch or to track the main branch. When set to a
        specific branch it must currently exist. Only the passed properties will be updated. The properties not passed
        will be left unchanged. A request without a ``development`` property will leave the development branch
        unchanged.

        It is possible for the ``development`` branch to be invalid. This happens when it points at a specific branch
        that has been deleted. This is indicated in the ``is_valid`` field for the branch. It is not possible to update
        the settings for ``development`` if that would leave the branch in an invalid state. Such a request will be
        rejected.

        The ``production`` branch can be a specific branch, the main branch or disabled. When set to a specific branch
        it must currently exist. The ``enabled`` property can be used to enable (``true``) or disable (``false``) it.
        Only the passed properties will be updated. The properties not passed will be left unchanged. A request without
        a ``production`` property will leave the production branch unchanged.

        It is possible for the ``production`` branch to be invalid. This happens when it points at a specific branch
        that has been deleted. This is indicated in the ``is_valid`` field for the branch. A request that would leave
        ``production`` enabled and invalid will be rejected. It is possible to update ``production`` and make it invalid
        if it would also be left disabled.

        The ``branch_types`` property contains the branch types to be updated. Only the branch types passed will be
        updated. All updates will be rejected if it would leave the branching model in an invalid state. For branch
        types this means that:

        1. The prefixes for all enabled branch types are valid. For example,
        it is not possible to use '*' inside a Git prefix.
        2. A prefix of an enabled branch type must not be a prefix of another
        enabled branch type. This is to ensure that a branch can be easily classified by its prefix unambiguously.

        It is possible to store an invalid prefix if that branch type would be left disabled. Only the passed properties
        will be updated. The properties not passed will be left unchanged. Each branch type must have a ``kind``
        property to identify it.

        The ``default_branch_deletion`` property is a string. The value of ``true`` indicates to delete branches by
        default. The value of ``false`` indicates that branches will not be deleted by default. A request without a
        ``default_branch_deletion`` property will leave it unchanged. Other values would be ignored.

        There is currently a side effect when using this API endpoint. If the repository is inheriting branching model
        settings from its project, updating the branching model for this repository will disable the project setting
        inheritance.

        We have deprecated this side effect and will remove it on 1 August 2022.

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
            http_method="PUT",
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/branching-model/settings"),
            path_params=[param[str]("repo_slug", repo_slug), param[str]("workspace", workspace)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[BranchingModelSettings],
            error_mapper=put_repositories_by_workspace_by_repo_slug_branching_model_settings_error_mapper,
            request_options=request_options,
        )

    def put_workspaces_by_workspace_projects_by_project_key_branching_model_settings(
        self, project_key: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[BranchingModelSettings, PutWorkspacesByWorkspaceProjectsByProjectKeyBranchingModelSettingsErrorBody]:
        """Update the branching model configuration for a project.

        The ``development`` branch can be configured to a specific branch or to track the main branch. Any branch name
        can be supplied, but will only successfully be applied to a repository via inheritance if that branch exists for
        that repository. Only the passed properties will be updated. The properties not passed will be left unchanged. A
        request without a ``development`` property will leave the development branch unchanged.

        The ``production`` branch can be a specific branch, the main branch or disabled. Any branch name can be
        supplied, but will only successfully be applied to a repository via inheritance if that branch exists for that
        repository. The ``enabled`` property can be used to enable (``true``) or disable (``false``) it. Only the passed
        properties will be updated. The properties not passed will be left unchanged. A request without a ``production``
        property will leave the production branch unchanged.

        The ``branch_types`` property contains the branch types to be updated. Only the branch types passed will be
        updated. All updates will be rejected if it would leave the branching model in an invalid state. For branch
        types this means that:

        1. The prefixes for all enabled branch types are valid. For example,
        it is not possible to use '*' inside a Git prefix.
        2. A prefix of an enabled branch type must not be a prefix of another
        enabled branch type. This is to ensure that a branch can be easily classified by its prefix unambiguously.

        It is possible to store an invalid prefix if that branch type would be left disabled. Only the passed properties
        will be updated. The properties not passed will be left unchanged. Each branch type must have a ``kind``
        property to identify it.

        The ``default_branch_deletion`` property is a string. The value of ``true`` indicates to delete branches by
        default. The value of ``false`` indicates that branches will not be deleted by default. A request without a
        ``default_branch_deletion`` property will leave it unchanged. Other values would be ignored.

        Args:
            project_key: The project in question. This is the actual ``key`` assigned to the project.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default(
                "/workspaces/{workspace}/projects/{project_key}/branching-model/settings"
            ),
            path_params=[param[str]("project_key", project_key), param[str]("workspace", workspace)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[BranchingModelSettings],
            error_mapper=put_workspaces_by_workspace_projects_by_project_key_branching_model_settings_error_mapper,
            request_options=request_options,
        )


class AsyncBranchingModelApiWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_repositories_by_workspace_by_repo_slug_branching_model(
        self, repo_slug: str, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[BranchingModel, GetRepositoriesByWorkspaceByRepoSlugBranchingModelErrorBody]:
        """Return the branching model as applied to the repository. This view is read-only. The branching model settings
        can be changed using the settings API.

        The returned object:

        1. Always has a ``development`` property. ``development.branch`` contains
        the actual repository branch object that is considered to be the ``development`` branch. ``development.branch``
        will not be present if it does not exist.
        2. Might have a ``production`` property. ``production`` will not
        be present when ``production`` is disabled. ``production.branch`` contains the actual branch object that is
        considered to be the ``production`` branch. ``production.branch`` will not be present if it does not exist.
        3. Always has a ``branch_types`` array which contains all enabled branch
        types.

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
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/branching-model"),
            path_params=[param[str]("repo_slug", repo_slug), param[str]("workspace", workspace)],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[BranchingModel],
            error_mapper=get_repositories_by_workspace_by_repo_slug_branching_model_error_mapper,
            request_options=request_options,
        )

    async def get_repositories_by_workspace_by_repo_slug_branching_model_settings(
        self, repo_slug: str, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[BranchingModelSettings, GetRepositoriesByWorkspaceByRepoSlugBranchingModelSettingsErrorBody]:
        """Return the branching model configuration for a repository. The returned object:

        1. Always has a ``development`` property for the development branch.
        2. Always a ``production`` property for the production branch. The
        production branch can be disabled.
        3. The ``branch_types`` contains all the branch types.
        4. ``default_branch_deletion`` indicates whether branches will be
        deleted by default on merge.

        This is the raw configuration for the branching model. A client wishing to see the branching model with its
        actual current branches may find the active model API more useful.

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
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/branching-model/settings"),
            path_params=[param[str]("repo_slug", repo_slug), param[str]("workspace", workspace)],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[BranchingModelSettings],
            error_mapper=get_repositories_by_workspace_by_repo_slug_branching_model_settings_error_mapper,
            request_options=request_options,
        )

    async def get_repositories_by_workspace_by_repo_slug_effective_branching_model(
        self, repo_slug: str, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[EffectiveRepoBranchingModel, GetRepositoriesByWorkspaceByRepoSlugEffectiveBranchingModelErrorBody]:
        """Send a ``GET`` request.

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
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/effective-branching-model"),
            path_params=[param[str]("repo_slug", repo_slug), param[str]("workspace", workspace)],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[EffectiveRepoBranchingModel],
            error_mapper=get_repositories_by_workspace_by_repo_slug_effective_branching_model_error_mapper,
            request_options=request_options,
        )

    async def get_workspaces_by_workspace_projects_by_project_key_branching_model(
        self, project_key: str, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ProjectBranchingModel, GetWorkspacesByWorkspaceProjectsByProjectKeyBranchingModelErrorBody]:
        """Return the branching model set at the project level. This view is read-only. The branching model settings can
        be changed using the settings API.

        The returned object:

        1. Always has a ``development`` property. ``development.name`` is
        the user-specified branch that can be inherited by an individual repository's branching model.
        2. Might have a ``production`` property. ``production`` will not
        be present when ``production`` is disabled. ``production.name`` is the user-specified branch that can be
        inherited by an individual repository's branching model.
        3. Always has a ``branch_types`` array which contains all enabled branch
        types.

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
            url_template=self._server.default("/workspaces/{workspace}/projects/{project_key}/branching-model"),
            path_params=[param[str]("project_key", project_key), param[str]("workspace", workspace)],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[ProjectBranchingModel],
            error_mapper=get_workspaces_by_workspace_projects_by_project_key_branching_model_error_mapper,
            request_options=request_options,
        )

    async def get_workspaces_by_workspace_projects_by_project_key_branching_model_settings(
        self, project_key: str, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[BranchingModelSettings, GetWorkspacesByWorkspaceProjectsByProjectKeyBranchingModelSettingsErrorBody]:
        """Return the branching model configuration for a project. The returned object:

        1. Always has a ``development`` property for the development branch.
        2. Always a ``production`` property for the production branch. The
        production branch can be disabled.
        3. The ``branch_types`` contains all the branch types.
        4. ``default_branch_deletion`` indicates whether branches will be
        deleted by default on merge.

        This is the raw configuration for the branching model. A client wishing to see the branching model with its
        actual current branches may find the active model API more useful.

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
            url_template=self._server.default(
                "/workspaces/{workspace}/projects/{project_key}/branching-model/settings"
            ),
            path_params=[param[str]("project_key", project_key), param[str]("workspace", workspace)],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[BranchingModelSettings],
            error_mapper=get_workspaces_by_workspace_projects_by_project_key_branching_model_settings_error_mapper,
            request_options=request_options,
        )

    async def put_repositories_by_workspace_by_repo_slug_branching_model_settings(
        self, repo_slug: str, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[BranchingModelSettings, PutRepositoriesByWorkspaceByRepoSlugBranchingModelSettingsErrorBody]:
        """Update the branching model configuration for a repository.

        The ``development`` branch can be configured to a specific branch or to track the main branch. When set to a
        specific branch it must currently exist. Only the passed properties will be updated. The properties not passed
        will be left unchanged. A request without a ``development`` property will leave the development branch
        unchanged.

        It is possible for the ``development`` branch to be invalid. This happens when it points at a specific branch
        that has been deleted. This is indicated in the ``is_valid`` field for the branch. It is not possible to update
        the settings for ``development`` if that would leave the branch in an invalid state. Such a request will be
        rejected.

        The ``production`` branch can be a specific branch, the main branch or disabled. When set to a specific branch
        it must currently exist. The ``enabled`` property can be used to enable (``true``) or disable (``false``) it.
        Only the passed properties will be updated. The properties not passed will be left unchanged. A request without
        a ``production`` property will leave the production branch unchanged.

        It is possible for the ``production`` branch to be invalid. This happens when it points at a specific branch
        that has been deleted. This is indicated in the ``is_valid`` field for the branch. A request that would leave
        ``production`` enabled and invalid will be rejected. It is possible to update ``production`` and make it invalid
        if it would also be left disabled.

        The ``branch_types`` property contains the branch types to be updated. Only the branch types passed will be
        updated. All updates will be rejected if it would leave the branching model in an invalid state. For branch
        types this means that:

        1. The prefixes for all enabled branch types are valid. For example,
        it is not possible to use '*' inside a Git prefix.
        2. A prefix of an enabled branch type must not be a prefix of another
        enabled branch type. This is to ensure that a branch can be easily classified by its prefix unambiguously.

        It is possible to store an invalid prefix if that branch type would be left disabled. Only the passed properties
        will be updated. The properties not passed will be left unchanged. Each branch type must have a ``kind``
        property to identify it.

        The ``default_branch_deletion`` property is a string. The value of ``true`` indicates to delete branches by
        default. The value of ``false`` indicates that branches will not be deleted by default. A request without a
        ``default_branch_deletion`` property will leave it unchanged. Other values would be ignored.

        There is currently a side effect when using this API endpoint. If the repository is inheriting branching model
        settings from its project, updating the branching model for this repository will disable the project setting
        inheritance.

        We have deprecated this side effect and will remove it on 1 August 2022.

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
            http_method="PUT",
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/branching-model/settings"),
            path_params=[param[str]("repo_slug", repo_slug), param[str]("workspace", workspace)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[BranchingModelSettings],
            error_mapper=put_repositories_by_workspace_by_repo_slug_branching_model_settings_error_mapper,
            request_options=request_options,
        )

    async def put_workspaces_by_workspace_projects_by_project_key_branching_model_settings(
        self, project_key: str, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[BranchingModelSettings, PutWorkspacesByWorkspaceProjectsByProjectKeyBranchingModelSettingsErrorBody]:
        """Update the branching model configuration for a project.

        The ``development`` branch can be configured to a specific branch or to track the main branch. Any branch name
        can be supplied, but will only successfully be applied to a repository via inheritance if that branch exists for
        that repository. Only the passed properties will be updated. The properties not passed will be left unchanged. A
        request without a ``development`` property will leave the development branch unchanged.

        The ``production`` branch can be a specific branch, the main branch or disabled. Any branch name can be
        supplied, but will only successfully be applied to a repository via inheritance if that branch exists for that
        repository. The ``enabled`` property can be used to enable (``true``) or disable (``false``) it. Only the passed
        properties will be updated. The properties not passed will be left unchanged. A request without a ``production``
        property will leave the production branch unchanged.

        The ``branch_types`` property contains the branch types to be updated. Only the branch types passed will be
        updated. All updates will be rejected if it would leave the branching model in an invalid state. For branch
        types this means that:

        1. The prefixes for all enabled branch types are valid. For example,
        it is not possible to use '*' inside a Git prefix.
        2. A prefix of an enabled branch type must not be a prefix of another
        enabled branch type. This is to ensure that a branch can be easily classified by its prefix unambiguously.

        It is possible to store an invalid prefix if that branch type would be left disabled. Only the passed properties
        will be updated. The properties not passed will be left unchanged. Each branch type must have a ``kind``
        property to identify it.

        The ``default_branch_deletion`` property is a string. The value of ``true`` indicates to delete branches by
        default. The value of ``false`` indicates that branches will not be deleted by default. A request without a
        ``default_branch_deletion`` property will leave it unchanged. Other values would be ignored.

        Args:
            project_key: The project in question. This is the actual ``key`` assigned to the project.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default(
                "/workspaces/{workspace}/projects/{project_key}/branching-model/settings"
            ),
            path_params=[param[str]("project_key", project_key), param[str]("workspace", workspace)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[BranchingModelSettings],
            error_mapper=put_workspaces_by_workspace_projects_by_project_key_branching_model_settings_error_mapper,
            request_options=request_options,
        )

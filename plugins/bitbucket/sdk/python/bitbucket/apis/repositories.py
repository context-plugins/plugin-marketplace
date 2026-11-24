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
from ..errors.delete_repositories_by_workspace_by_repo_slug_error import (
    DeleteRepositoriesByWorkspaceByRepoSlugErrorBody,
    delete_repositories_by_workspace_by_repo_slug_error_mapper,
)
from ..errors.delete_repositories_by_workspace_by_repo_slug_hooks_by_uid_error import (
    DeleteRepositoriesByWorkspaceByRepoSlugHooksByUidErrorBody,
    delete_repositories_by_workspace_by_repo_slug_hooks_by_uid_error_mapper,
)
from ..errors.delete_repositories_by_workspace_by_repo_slug_permissions_config_groups_by_group_slug_error import (
    DeleteRepositoriesByWorkspaceByRepoSlugPermissionsConfigGroupsByGroupSlugErrorBody,
    delete_repositories_by_workspace_by_repo_slug_permissions_config_groups_by_group_slug_error_mapper,
)
from ..errors.delete_repositories_by_workspace_by_repo_slug_permissions_config_users_by_selected_user_id_error import (
    DeleteRepositoriesByWorkspaceByRepoSlugPermissionsConfigUsersBySelectedUserIdErrorBody,
    delete_repositories_by_workspace_by_repo_slug_permissions_config_users_by_selected_user_id_error_mapper,
)
from ..errors.get_repositories_by_workspace_by_repo_slug_error import (
    GetRepositoriesByWorkspaceByRepoSlugErrorBody,
    get_repositories_by_workspace_by_repo_slug_error_mapper,
)
from ..errors.get_repositories_by_workspace_by_repo_slug_filehistory_by_commit_by_path_error import (
    GetRepositoriesByWorkspaceByRepoSlugFilehistoryByCommitByPathErrorBody,
    get_repositories_by_workspace_by_repo_slug_filehistory_by_commit_by_path_error_mapper,
)
from ..errors.get_repositories_by_workspace_by_repo_slug_hooks_by_uid_error import (
    GetRepositoriesByWorkspaceByRepoSlugHooksByUidErrorBody,
    get_repositories_by_workspace_by_repo_slug_hooks_by_uid_error_mapper,
)
from ..errors.get_repositories_by_workspace_by_repo_slug_hooks_error import (
    GetRepositoriesByWorkspaceByRepoSlugHooksErrorBody,
    get_repositories_by_workspace_by_repo_slug_hooks_error_mapper,
)
from ..errors.get_repositories_by_workspace_by_repo_slug_override_settings_error import (
    GetRepositoriesByWorkspaceByRepoSlugOverrideSettingsErrorBody,
    get_repositories_by_workspace_by_repo_slug_override_settings_error_mapper,
)
from ..errors.get_repositories_by_workspace_by_repo_slug_permissions_config_groups_by_group_slug_error import (
    GetRepositoriesByWorkspaceByRepoSlugPermissionsConfigGroupsByGroupSlugErrorBody,
    get_repositories_by_workspace_by_repo_slug_permissions_config_groups_by_group_slug_error_mapper,
)
from ..errors.get_repositories_by_workspace_by_repo_slug_permissions_config_groups_error import (
    GetRepositoriesByWorkspaceByRepoSlugPermissionsConfigGroupsErrorBody,
    get_repositories_by_workspace_by_repo_slug_permissions_config_groups_error_mapper,
)
from ..errors.get_repositories_by_workspace_by_repo_slug_permissions_config_users_by_selected_user_id_error import (
    GetRepositoriesByWorkspaceByRepoSlugPermissionsConfigUsersBySelectedUserIdErrorBody,
    get_repositories_by_workspace_by_repo_slug_permissions_config_users_by_selected_user_id_error_mapper,
)
from ..errors.get_repositories_by_workspace_by_repo_slug_permissions_config_users_error import (
    GetRepositoriesByWorkspaceByRepoSlugPermissionsConfigUsersErrorBody,
    get_repositories_by_workspace_by_repo_slug_permissions_config_users_error_mapper,
)
from ..errors.get_repositories_by_workspace_by_repo_slug_src_by_commit_by_path_error import (
    GetRepositoriesByWorkspaceByRepoSlugSrcByCommitByPathErrorBody,
    get_repositories_by_workspace_by_repo_slug_src_by_commit_by_path_error_mapper,
)
from ..errors.get_repositories_by_workspace_by_repo_slug_src_error import (
    GetRepositoriesByWorkspaceByRepoSlugSrcErrorBody,
    get_repositories_by_workspace_by_repo_slug_src_error_mapper,
)
from ..errors.get_repositories_by_workspace_error import (
    GetRepositoriesByWorkspaceErrorBody,
    get_repositories_by_workspace_error_mapper,
)
from ..errors.get_user_workspaces_by_workspace_permissions_repositories_error import (
    GetUserWorkspacesByWorkspacePermissionsRepositoriesErrorBody,
    get_user_workspaces_by_workspace_permissions_repositories_error_mapper,
)
from ..errors.post_repositories_by_workspace_by_repo_slug_error import (
    PostRepositoriesByWorkspaceByRepoSlugErrorBody,
    post_repositories_by_workspace_by_repo_slug_error_mapper,
)
from ..errors.post_repositories_by_workspace_by_repo_slug_hooks_error import (
    PostRepositoriesByWorkspaceByRepoSlugHooksErrorBody,
    post_repositories_by_workspace_by_repo_slug_hooks_error_mapper,
)
from ..errors.post_repositories_by_workspace_by_repo_slug_src_error import (
    PostRepositoriesByWorkspaceByRepoSlugSrcErrorBody,
    post_repositories_by_workspace_by_repo_slug_src_error_mapper,
)
from ..errors.put_repositories_by_workspace_by_repo_slug_error import (
    PutRepositoriesByWorkspaceByRepoSlugErrorBody,
    put_repositories_by_workspace_by_repo_slug_error_mapper,
)
from ..errors.put_repositories_by_workspace_by_repo_slug_hooks_by_uid_error import (
    PutRepositoriesByWorkspaceByRepoSlugHooksByUidErrorBody,
    put_repositories_by_workspace_by_repo_slug_hooks_by_uid_error_mapper,
)
from ..errors.put_repositories_by_workspace_by_repo_slug_override_settings_error import (
    PutRepositoriesByWorkspaceByRepoSlugOverrideSettingsErrorBody,
    put_repositories_by_workspace_by_repo_slug_override_settings_error_mapper,
)
from ..errors.put_repositories_by_workspace_by_repo_slug_permissions_config_groups_by_group_slug_error import (
    PutRepositoriesByWorkspaceByRepoSlugPermissionsConfigGroupsByGroupSlugErrorBody,
    put_repositories_by_workspace_by_repo_slug_permissions_config_groups_by_group_slug_error_mapper,
)
from ..errors.put_repositories_by_workspace_by_repo_slug_permissions_config_users_by_selected_user_id_error import (
    PutRepositoriesByWorkspaceByRepoSlugPermissionsConfigUsersBySelectedUserIdErrorBody,
    put_repositories_by_workspace_by_repo_slug_permissions_config_users_by_selected_user_id_error_mapper,
)
from ..models.bitbucket_apps_permissions_serializers_repo_permission_update_schema import (
    BitbucketAppsPermissionsSerializersRepoPermissionUpdateSchema,
    BitbucketAppsPermissionsSerializersRepoPermissionUpdateSchemaDict,
)
from ..models.enums.format import FormatOrStr
from ..models.enums.format1 import Format1OrStr
from ..models.enums.role1 import Role1OrStr
from ..models.paginated_accounts import PaginatedAccounts
from ..models.paginated_files import PaginatedFiles
from ..models.paginated_repositories import PaginatedRepositories
from ..models.paginated_repository_group_permissions import PaginatedRepositoryGroupPermissions
from ..models.paginated_repository_permissions import PaginatedRepositoryPermissions
from ..models.paginated_repository_user_permissions import PaginatedRepositoryUserPermissions
from ..models.paginated_tree_entry import PaginatedTreeEntry
from ..models.paginated_webhook_subscriptions import PaginatedWebhookSubscriptions
from ..models.repository_bitbucket_repositories_api import (
    RepositoryBitbucketRepositoriesApi,
    RepositoryBitbucketRepositoriesApiDict,
)
from ..models.repository_group_permission import RepositoryGroupPermission
from ..models.repository_inheritance_state import RepositoryInheritanceState
from ..models.repository_user_permission import RepositoryUserPermission
from ..models.webhook_subscription import WebhookSubscription
from ..server.server import Server


class Repositories:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = RepositoriesWithRawResponse(client, server, auth)

    def delete_repositories_by_workspace_by_repo_slug(
        self,
        repo_slug: str,
        workspace: str,
        *,
        redirect_to: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Deletes the repository. This is an irreversible operation.

        This does not affect its forks.

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            redirect_to: If a repository has been moved to a new location, use this parameter to show users a friendly
                message in the Bitbucket UI that the repository has moved to a new location. However, a GET to this
                endpoint will still return a 404.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Indicates successful deletion.

        Raises:
            ApiError: If the caller either does not have admin access to the repository, or the repository is set to
                read-only. If the repository does not exist. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.delete_repositories_by_workspace_by_repo_slug(
                repo_slug, workspace, redirect_to=redirect_to, request_options=request_options
            ),
        )

    def delete_repositories_by_workspace_by_repo_slug_hooks_by_uid(
        self, repo_slug: str, uid: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Deletes the specified webhook subscription from the given repository.

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            uid: Installed webhook's ID
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            When the webhook was deleted successfully

        Raises:
            ApiError: If the authenticated user does not have permission to delete the webhook. If the webhook or
                repository does not exist. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.delete_repositories_by_workspace_by_repo_slug_hooks_by_uid(
                repo_slug, uid, workspace, request_options=request_options
            ),
        )

    def delete_repositories_by_workspace_by_repo_slug_permissions_config_groups_by_group_slug(
        self, group_slug: str, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Deletes the repository group permission between the requested repository and group, if one exists.

        Only users with admin permission for the repository may access this resource.

        The only authentication method supported for this endpoint is via app passwords.

        Args:
            group_slug: Slug of the requested group.
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Group permission deleted

        Raises:
            ApiError: The user couldn't be authenticated. The requesting user isn't an admin of the repository, or the
                authentication method was not via app password. The workspace does not exist, the repository does not
                exist, or the group does not exist. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.delete_repositories_by_workspace_by_repo_slug_permissions_config_groups_by_group_slug(
                group_slug, repo_slug, workspace, request_options=request_options
            ),
        )

    def delete_repositories_by_workspace_by_repo_slug_permissions_config_users_by_selected_user_id(
        self,
        repo_slug: str,
        selected_user_id: str,
        workspace: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Deletes the repository user permission between the requested repository and user, if one exists.

        Only users with admin permission for the repository may access this resource.

        The only authentication method for this endpoint is via app passwords.

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            selected_user_id: This can either be the UUID of the account, surrounded by curly-braces, for example:
                ``{account UUID}``, OR an Atlassian Account ID.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The repository user permission was deleted and no content returned.

        Raises:
            ApiError: The user couldn't be authenticated. The requesting user isn't an admin of the repository, or the
                authentication method was not via app password. One or more of the workspace, repository, and user
                doesn't exist for the given identifiers. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.delete_repositories_by_workspace_by_repo_slug_permissions_config_users_by_selected_user_id(
                repo_slug, selected_user_id, workspace, request_options=request_options
            ),
        )

    def get_repositories(
        self,
        *,
        after: str | None = None,
        role: Role1OrStr | None = None,
        q: str | None = None,
        sort: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PaginatedRepositories:
        """**This endpoint is deprecated. Please use the workspace scoped alternative.**

        Returns a paginated list of all public repositories.

        This endpoint also supports filtering and sorting of the results. See filtering and sorting for more details.

        Args:
            after: Filter the results to include only repositories created on or after this `ISO-8601
                <https://en.wikipedia.org/wiki/ISO_8601>`__ timestamp. Example: ``YYYY-MM-DDTHH:mm:ss.sssZ``
            role: Filters the result based on the authenticated user's role on each repository. * **member**: returns
                repositories to which the user has explicit read access * **contributor**: returns repositories to which
                the user has explicit write access * **admin**: returns repositories to which the user has explicit
                administrator access * **owner**: returns all repositories owned by the current user
            q: Query string to narrow down the response as per `filtering and sorting
                </cloud/bitbucket/rest/intro/#filtering>`__. ``role`` parameter must also be specified.
            sort: Field by which the results should be sorted as per `filtering and sorting
                </cloud/bitbucket/rest/intro/#filtering>`__.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            All public repositories.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.get_repositories(
                after=after, role=role, q=q, sort=sort, request_options=request_options
            ),
        )

    def get_repositories_by_workspace(
        self,
        workspace: str,
        *,
        role: Role1OrStr | None = None,
        q: str | None = None,
        sort: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PaginatedRepositories:
        """Returns a paginated list of all repositories owned by the specified workspace.

        The result can be narrowed down based on the authenticated user's role.

        E.g. with ``?role=contributor``, only those repositories that the authenticated user has write access to are
        returned (this includes any repo the user is an admin on, as that implies write access).

        This endpoint also supports filtering and sorting of the results. See filtering and sorting for more details.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            role: Filters the result based on the authenticated user's role on each repository. * **member**: returns
                repositories to which the user has explicit read access * **contributor**: returns repositories to which
                the user has explicit write access * **admin**: returns repositories to which the user has explicit
                administrator access * **owner**: returns all repositories owned by the current user
            q: Query string to narrow down the response as per `filtering and sorting
                </cloud/bitbucket/rest/intro/#filtering>`__.
            sort: Field by which the results should be sorted as per `filtering and sorting
                </cloud/bitbucket/rest/intro/#filtering>`__.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The repositories owned by the specified account.

        Raises:
            ApiError: If the specified account does not exist. If the specified account marked as spam. ``error`` is
                ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_repositories_by_workspace(
                workspace, role=role, q=q, sort=sort, request_options=request_options
            ),
        )

    def get_repositories_by_workspace_by_repo_slug(
        self, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> RepositoryBitbucketRepositoriesApi:
        """Returns the object describing this repository.

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The repository object.

        Raises:
            ApiError: If the repository is private and the authenticated user does not have access to it. If no
                repository exists at this location. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_repositories_by_workspace_by_repo_slug(
                repo_slug, workspace, request_options=request_options
            ),
        )

    def get_repositories_by_workspace_by_repo_slug_filehistory_by_commit_by_path(
        self,
        commit: str,
        path: str,
        repo_slug: str,
        workspace: str,
        *,
        renames: str | None = None,
        q: str | None = None,
        sort: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PaginatedFiles:
        r"""Returns a paginated list of commits that modified the specified file.

        Commits are returned in reverse chronological order. This is roughly equivalent to the following commands:

        $ git log --follow --date-order

        By default, Bitbucket will follow renames and the path name in the returned entries reflects that. This can be
        turned off using the ``?renames=false`` query parameter.

        Results are returned in descending chronological order by default, and like most endpoints you can filter and
        sort the response to only provide exactly the data you want.

        The example response returns commits made before 2011-05-18 against a file named ``README.rst``. The results are
        filtered to only return the path and date. This request can be made using:

        ```
        $ curl 'https://api.bitbucket.org/2.0/repositories/evzijst/dogslow/filehistory/master/README.rst'\
        '?fields=values.next,values.path,values.commit.date&q=commit.date<=2011-05-18'
        ```

        In the response you can see that the file was renamed to ``README.rst`` by the commit made on 2011-05-16, and
        was previously named ``README.txt``.

        Args:
            commit: The commit's SHA1.
            path: Path to the file.
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            renames: When ``true``, Bitbucket will follow the history of the file across renames (this is the default
                behavior). This can be turned off by specifying ``false``.
            q: Query string to narrow down the response as per `filtering and sorting
                </cloud/bitbucket/rest/intro/#filtering>`__.
            sort: Name of a response property sort the result by as per `filtering and sorting
                </cloud/bitbucket/rest/intro/#sorting-query-results>`__.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A paginated list of commits that modified the specified file

        Raises:
            ApiError: If the repository does not exist. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_repositories_by_workspace_by_repo_slug_filehistory_by_commit_by_path(
                commit, path, repo_slug, workspace, renames=renames, q=q, sort=sort, request_options=request_options
            ),
        )

    def get_repositories_by_workspace_by_repo_slug_forks(
        self,
        repo_slug: str,
        workspace: str,
        *,
        role: Role1OrStr | None = None,
        q: str | None = None,
        sort: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PaginatedRepositories:
        """Returns a paginated list of all the forks of the specified repository.

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            role: Filters the result based on the authenticated user's role on each repository. * **member**: returns
                repositories to which the user has explicit read access * **contributor**: returns repositories to which
                the user has explicit write access * **admin**: returns repositories to which the user has explicit
                administrator access * **owner**: returns all repositories owned by the current user
            q: Query string to narrow down the response as per `filtering and sorting
                </cloud/bitbucket/rest/intro/#filtering>`__.
            sort: Field by which the results should be sorted as per `filtering and sorting
                </cloud/bitbucket/rest/intro/#filtering>`__.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            All forks.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.get_repositories_by_workspace_by_repo_slug_forks(
                repo_slug, workspace, role=role, q=q, sort=sort, request_options=request_options
            ),
        )

    def get_repositories_by_workspace_by_repo_slug_hooks(
        self, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> PaginatedWebhookSubscriptions:
        """Returns a paginated list of webhooks installed on this repository.

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The paginated list of installed webhooks.

        Raises:
            ApiError: If the authenticated user does not have permission to access the webhooks. If the repository does
                not exist. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_repositories_by_workspace_by_repo_slug_hooks(
                repo_slug, workspace, request_options=request_options
            ),
        )

    def get_repositories_by_workspace_by_repo_slug_hooks_by_uid(
        self, repo_slug: str, uid: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> WebhookSubscription:
        """Returns the webhook with the specified id installed on the specified repository.

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            uid: Installed webhook's ID
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The webhook subscription object.

        Raises:
            ApiError: If the webhook or repository does not exist. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_repositories_by_workspace_by_repo_slug_hooks_by_uid(
                repo_slug, uid, workspace, request_options=request_options
            ),
        )

    def get_repositories_by_workspace_by_repo_slug_override_settings(
        self, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> RepositoryInheritanceState:
        """Send a ``GET`` request.

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The repository setting inheritance state

        Raises:
            ApiError: If no repository exists at this location ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_repositories_by_workspace_by_repo_slug_override_settings(
                repo_slug, workspace, request_options=request_options
            ),
        )

    def get_repositories_by_workspace_by_repo_slug_permissions_config_groups(
        self, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> PaginatedRepositoryGroupPermissions:
        """Returns a paginated list of explicit group permissions for the given repository. This endpoint does not
        support BBQL features.

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Paginated of explicit group permissions on the repository.

        Raises:
            ApiError: The user couldn't be authenticated. The requesting user isn't an admin of the repository. One or
                both of the workspace and repository doesn't exist for the given identifiers. ``error`` is ``Error |
                RawError``."""
        return unwrap(
            self._with_raw_response.get_repositories_by_workspace_by_repo_slug_permissions_config_groups(
                repo_slug, workspace, request_options=request_options
            ),
        )

    def get_repositories_by_workspace_by_repo_slug_permissions_config_groups_by_group_slug(
        self, group_slug: str, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> RepositoryGroupPermission:
        """Returns the group permission for a given group slug and repository

        Only users with admin permission for the repository may access this resource.

        Permissions can be:

        * ``admin``
        * ``write``
        * ``read``
        * ``none``

        Args:
            group_slug: Slug of the requested group.
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Group permission for group slug and repository

        Raises:
            ApiError: The user couldn't be authenticated. The requesting user isn't an admin of the repository. The
                given user, workspace, and/or repository could not be found ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_repositories_by_workspace_by_repo_slug_permissions_config_groups_by_group_slug(
                group_slug, repo_slug, workspace, request_options=request_options
            ),
        )

    def get_repositories_by_workspace_by_repo_slug_permissions_config_users(
        self, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> PaginatedRepositoryUserPermissions:
        """Returns a paginated list of explicit user permissions for the given repository. This endpoint does not
        support BBQL features.

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Paginated of explicit user permissions on the repository.

        Raises:
            ApiError: The user couldn't be authenticated. The requesting user isn't an admin of the repository. No
                repository exists for the given repository slug and workspace. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_repositories_by_workspace_by_repo_slug_permissions_config_users(
                repo_slug, workspace, request_options=request_options
            ),
        )

    def get_repositories_by_workspace_by_repo_slug_permissions_config_users_by_selected_user_id(
        self,
        repo_slug: str,
        selected_user_id: str,
        workspace: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> RepositoryUserPermission:
        """Returns the explicit user permission for a given user and repository.

        Only users with admin permission for the repository may access this resource.

        Permissions can be:

        * ``admin``
        * ``write``
        * ``read``
        * ``none``

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            selected_user_id: This can either be the UUID of the account, surrounded by curly-braces, for example:
                ``{account UUID}``, OR an Atlassian Account ID.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Explicit user permission for user and repository

        Raises:
            ApiError: The user couldn't be authenticated. The requesting user isn't an admin of the repository. One or
                both of the workspace and repository doesn't exist for the given identifiers. ``error`` is ``Error |
                RawError``."""
        return unwrap(
            self._with_raw_response.get_repositories_by_workspace_by_repo_slug_permissions_config_users_by_selected_user_id(
                repo_slug, selected_user_id, workspace, request_options=request_options
            ),
        )

    def get_repositories_by_workspace_by_repo_slug_src(
        self,
        repo_slug: str,
        workspace: str,
        *,
        format_: FormatOrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PaginatedTreeEntry:
        """This endpoint redirects the client to the directory listing of the root directory on the main branch.

        This is equivalent to directly hitting /2.0/repositories/{username}/{repo_slug}/src/{commit}/{path} without
        having to know the name or SHA1 of the repo's main branch.

        To create new commits, POST to this endpoint

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            format_: Instead of returning the file's contents, return the (json) meta data for it.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            If the path matches a file, then the raw contents of the file are returned (unless the ``format=meta`` query
            parameter was provided, in which case a json document containing the file's meta data is returned). If the
            path matches a directory, then a paginated list of file and directory entries is returned (if the
            ``format=meta`` query parameter was provided, then the json document containing the directory's meta data is
            returned).

        Raises:
            ApiError: If the path or commit in the URL does not exist. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_repositories_by_workspace_by_repo_slug_src(
                repo_slug, workspace, format_=format_, request_options=request_options
            ),
        )

    def get_repositories_by_workspace_by_repo_slug_src_by_commit_by_path(
        self,
        commit: str,
        path: str,
        repo_slug: str,
        workspace: str,
        *,
        format_: Format1OrStr | None = None,
        q: str | None = None,
        sort: str | None = None,
        max_depth: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PaginatedTreeEntry:
        """This endpoints is used to retrieve the contents of a single file, or the contents of a directory at a
        specified revision.

        Args:
            commit: The commit's SHA1.
            path: Path to the file.
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            format_: If 'meta' is provided, returns the (json) meta data for the contents of the file. If 'rendered' is
                provided, returns the contents of a non-binary file in HTML-formatted rendered markup. The 'rendered'
                option only supports these filetypes: ``.md``, ``.markdown``, ``.mkd``, ``.mkdn``, ``.mdown``,
                ``.text``, ``.rst``, and ``.textile``. Since Git does not generally track what text encoding scheme is
                used, this endpoint attempts to detect the most appropriate character encoding. While usually correct,
                determining the character encoding can be ambiguous which in exceptional cases can lead to
                misinterpretation of the characters. As such, the raw element in the response object should not be
                treated as equivalent to the file's actual contents.
            q: Optional filter expression as per `filtering and sorting </cloud/bitbucket/rest/intro/#filtering>`__.
            sort: Optional sorting parameter as per `filtering and sorting
                </cloud/bitbucket/rest/intro/#sorting-query-results>`__.
            max_depth: If provided, returns the contents of the repository and its subdirectories recursively until the
                specified max_depth of nested directories. When omitted, this defaults to 1.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            If the path matches a file, then the raw contents of the file are returned. If the ``format=meta`` query
            parameter is provided, a json document containing the file's meta data is returned. If the
            ``format=rendered`` query parameter is provided, the contents of the file in HTML-formated rendered markup
            is returned. If the path matches a directory, then a paginated list of file and directory entries is
            returned (if the ``format=meta`` query parameter was provided, then the json document containing the
            directory's meta data is returned.)

        Raises:
            ApiError: If the path or commit in the URL does not exist. If the call times out, possibly because the
                specified recursion depth is too large. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_repositories_by_workspace_by_repo_slug_src_by_commit_by_path(
                commit,
                path,
                repo_slug,
                workspace,
                format_=format_,
                q=q,
                sort=sort,
                max_depth=max_depth,
                request_options=request_options,
            ),
        )

    def get_repositories_by_workspace_by_repo_slug_watchers(
        self, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> PaginatedAccounts:
        """Returns a paginated list of all the watchers on the specified repository.

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A paginated list of all the watchers on the specified repository.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.get_repositories_by_workspace_by_repo_slug_watchers(
                repo_slug, workspace, request_options=request_options
            ),
        )

    def get_user_permissions_repositories(
        self, *, q: str | None = None, sort: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> PaginatedRepositoryPermissions:
        """**This endpoint is deprecated. Please use the workspace scoped alternative.**

        Returns an object for each repository the caller has explicit access to and their effective permission — the
        highest level of permission the caller has. This does not return public repositories that the user was not
        granted any specific permission in, and does not distinguish between explicit and implicit privileges.

        Permissions can be:

        * ``admin``
        * ``write``
        * ``read``

        Results may be further filtered or sorted by repository or permission by adding the following query string
        parameters:

        * ``q=repository.name="geordi"`` or ``q=permission>"read"``
        * ``sort=repository.name``

        Note that the query parameter values need to be URL escaped so that ``=`` would become ``%3D``.

        Args:
            q: Query string to narrow down the response as per `filtering and sorting
                </cloud/bitbucket/rest/intro/#filtering>`__.
            sort: Name of a response property sort the result by as per `filtering and sorting
                </cloud/bitbucket/rest/intro/#filtering>`__.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Repository permissions for the repositories a caller has explicit access to.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.get_user_permissions_repositories(q=q, sort=sort, request_options=request_options)
        )

    def get_user_workspaces_by_workspace_permissions_repositories(
        self,
        workspace: str,
        *,
        q: str | None = None,
        sort: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PaginatedRepositoryPermissions:
        """Returns an object for each repository the caller has explicit access to in the specified workspace and their
        effective permission — the highest level of permission the caller has. This does not return public repositories
        that the user was not granted any specific permission in, and does not distinguish between explicit and implicit
        privileges.

        Permissions can be:

        * ``admin``
        * ``write``
        * ``read``

        Results may be further filtered or sorted by repository or permission by adding the following query string
        parameters:

        * ``q=repository.name="bits"`` or ``q=permission>"read"``
        * ``sort=repository.name``

        Note that the query parameter values need to be URL escaped so that ``=`` would become ``%3D``.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            q: Query string to narrow down the response as per `filtering and sorting
                </cloud/bitbucket/rest/intro/#filtering>`__.
            sort: Name of a response property sort the result by as per `filtering and sorting
                </cloud/bitbucket/rest/intro/#filtering>`__.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The list of repository permissions for the authenticated user in the specified workspace.

        Raises:
            ApiError: The request was invalid. The request wasn't authenticated. The requesting user does not have
                access to the workspace. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_user_workspaces_by_workspace_permissions_repositories(
                workspace, q=q, sort=sort, request_options=request_options
            ),
        )

    def post_repositories_by_workspace_by_repo_slug(
        self,
        repo_slug: str,
        workspace: str,
        *,
        body: RepositoryBitbucketRepositoriesApi | RepositoryBitbucketRepositoriesApiDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> RepositoryBitbucketRepositoriesApi:
        """Creates a new repository.

        Note: In order to set the project for the newly created repository, pass in either the project key or the
        project UUID as part of the request body as shown in the examples below:

        ```
        $ curl -X POST -H "Content-Type: application/json" -d '{ "scm": "git", "project": { "key": "MARS"
        }
        }' https://api.bitbucket.org/2.0/repositories/teamsinspace/hablanding
        ```

        or

        ```
        $ curl -X POST -H "Content-Type: application/json" -d '{ "scm": "git", "project": { "key":
        "{ba516952-992a-4c2d-acbd-17d502922f96}"
        }
        }' https://api.bitbucket.org/2.0/repositories/teamsinspace/hablanding
        ```

        The project must be assigned for all repositories. If the project is not provided, the repository is
        automatically assigned to the oldest project in the workspace.

        Note: In the examples above, the workspace ID ``teamsinspace``, and/or the repository name ``hablanding`` can be
        replaced by UUIDs.

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            body: The repository that is to be created. Note that most object elements are optional. Elements "owner"
                and "full_name" are ignored as the URL implies them.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The newly created repository.

        Raises:
            ApiError: If the input document was invalid, or if the caller lacks the privilege to create repositories
                under the targeted account. If the request was not authenticated. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.post_repositories_by_workspace_by_repo_slug(
                repo_slug, workspace, body=body, request_options=request_options
            ),
        )

    def post_repositories_by_workspace_by_repo_slug_forks(
        self,
        repo_slug: str,
        workspace: str,
        *,
        body: RepositoryBitbucketRepositoriesApi | RepositoryBitbucketRepositoriesApiDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> RepositoryBitbucketRepositoriesApi:
        r"""Creates a new fork of the specified repository.

        #### Forking a repository

        To create a fork, specify the workspace explicitly as part of the request body:

        ```
        $ curl -X POST -u jdoe https://api.bitbucket.org/2.0/repositories/atlassian/bbql/forks \ -H 'Content-Type:
        application/json' -d '{ "name": "bbql_fork", "workspace": { "slug": "atlassian"
        }
        }'
        ```

        To fork a repository into the same workspace, also specify a new ``name``.

        When you specify a value for ``name``, it will also affect the ``slug``. The ``slug`` is reflected in the
        repository URL of the new fork. It is derived from ``name`` by substituting non-ASCII characters, removes
        whitespace, and changes characters to lower case. For example, ``My repo`` would turn into ``my_repo``.

        You need contributor access to create new forks within a workspace.

        #### Change the properties of a new fork

        By default the fork inherits most of its properties from the parent. However, since the optional POST body
        document follows the normal ``repository`` JSON schema and you can override the new fork's properties.

        Properties that can be overridden include:

        * description
        * fork_policy
        * language
        * mainbranch
        * is_private (note that a private repo's fork_policy might prohibit
        the creation of public forks, in which ``is_private=False`` would fail)
        * has_issues (to initialize or disable the new repo's issue tracker --
        note that the actual contents of the parent repository's issue tracker are not copied during forking)
        * has_wiki (to initialize or disable the new repo's wiki --
        note that the actual contents of the parent repository's wiki are not copied during forking)
        * project (when forking into a private project, the fork's ``is_private``
        must be ``true``)

        Properties that cannot be modified include:

        * scm
        * parent
        * full_name

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            body: A repository object. This can be left blank.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The newly created fork.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.post_repositories_by_workspace_by_repo_slug_forks(
                repo_slug, workspace, body=body, request_options=request_options
            ),
        )

    def post_repositories_by_workspace_by_repo_slug_hooks(
        self, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> WebhookSubscription:
        """Creates a new webhook on the specified repository.

        Example:

        ```
        $ curl -X POST -u credentials -H 'Content-Type: application/json'
        https://api.bitbucket.org/2.0/repositories/my-workspace/my-repo-slug/hooks -d '
        {
        "description": "Webhook Description", "url": "https://example.com/", "active": true, "secret": "this is a really
        bad secret", "events": [ "repo:push", "issue:created", "issue:updated"
        ]
        }'
        ```

        When the ``secret`` is provided it will be used as the key to generate a HMAC digest value sent in the
        ``X-Hub-Signature`` header at delivery time. Passing a ``null`` or empty ``secret`` or not passing a ``secret``
        will leave the webhook's secret unset. Bitbucket only generates the ``X-Hub-Signature`` when the webhook's
        secret is set.

        Note that this call requires the webhook scope, as well as any scope that applies to the events that the webhook
        subscribes to. In the example above that means: ``webhook``, ``repository`` and ``issue``.

        Also note that the ``url`` must properly resolve and cannot be an internal, non-routed address.

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            If the webhook was registered successfully.

        Raises:
            ApiError: If the authenticated user does not have permission to install webhooks on the specified
                repository. If the repository does not exist. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.post_repositories_by_workspace_by_repo_slug_hooks(
                repo_slug, workspace, request_options=request_options
            ),
        )

    def post_repositories_by_workspace_by_repo_slug_src(
        self,
        repo_slug: str,
        workspace: str,
        *,
        message: str | None = None,
        author: str | None = None,
        parents: str | None = None,
        files: str | None = None,
        branch: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """This endpoint is used to create new commits in the repository by uploading files.

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            message: The commit message. When omitted, Bitbucket uses a canned string.
            author: The raw string to be used as the new commit's author. This string follows the format ``Erik van
                Zijst <evzijst@atlassian.com>``. When omitted, Bitbucket uses the authenticated user's full/display name
                and primary email address. Commits cannot be created anonymously.
            parents: #### Deprecation Notice: Support for specifying multiple parent commits is deprecated and will be
                removed in a future release. Only a single SHA1 is accepted. A SHA1 of the commit that should be the
                parent of the newly created commit. When omitted, the new commit will inherit from and become a child of
                the main branch's tip/HEAD commit.
            files: Optional field that declares the files that the request is manipulating. When adding a new file to a
                repo, or when overwriting an existing file, the client can just upload the full contents of the file in
                a normal form field and the use of this ``files`` meta data field is redundant. However, when the
                ``files`` field contains a file path that does not have a corresponding, identically-named form field,
                then Bitbucket interprets that as the client wanting to replace the named file with the null set and the
                file is deleted instead. Paths in the repo that are referenced in neither files nor an individual file
                field, remain unchanged and carry over from the parent to the new commit. This API does not support
                renaming as an explicit feature. To rename a file, simply delete it and recreate it under the new name
                in the same commit.
            branch: The name of the branch that the new commit should be created on. When omitted, the commit will be
                created on top of the main branch and will become the main branch's new head. When a branch name is
                provided that already exists in the repo, then the commit will be created on top of that branch. In this
                case, *if* a parent SHA1 was also provided, then it is asserted that the parent is the branch's tip/HEAD
                at the time the request is made. When this is not the case, a 409 is returned. When a new branch name is
                specified (that does not already exist in the repo), and no parent SHA1s are provided, then the new
                commit will inherit from the current main branch's tip/HEAD commit, but not advance the main branch. The
                new commit will be the new branch. When the request *also* specifies a parent SHA1, then the new commit
                and branch are created directly on top of the parent commit, regardless of the state of the main branch.
                When a branch name is not specified, but a parent SHA1 is provided, then Bitbucket asserts that it
                represents the main branch's current HEAD/tip, or a 409 is returned. When a branch name is not specified
                and the repo is empty, the new commit will become the repo's root commit and will be on the main branch.
                When a branch name is specified and the repo is empty, the new commit will become the repo's root commit
                and also define the repo's main branch going forward. This API cannot be used to create additional root
                commits in non-empty repos. The branch field cannot be repeated. As a side effect, this API can be used
                to create a new branch without modifying any files, by specifying a new branch name in this field,
                together with ``parents``, but omitting the ``files`` fields, while not sending any files. This will
                create a new commit and branch with the same contents as the first parent. The diff of this commit
                against its first parent will be empty.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Raises:
            ApiError: If the authenticated user does not have write or admin access If the repository does not exist.
                ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.post_repositories_by_workspace_by_repo_slug_src(
                repo_slug,
                workspace,
                message=message,
                author=author,
                parents=parents,
                files=files,
                branch=branch,
                request_options=request_options,
            ),
        )

    def put_repositories_by_workspace_by_repo_slug(
        self,
        repo_slug: str,
        workspace: str,
        *,
        body: RepositoryBitbucketRepositoriesApi | RepositoryBitbucketRepositoriesApiDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> RepositoryBitbucketRepositoriesApi:
        """Since this endpoint can be used to both update and to create a repository, the request body depends on the
        intent.

        #### Creation

        See the POST documentation for the repository endpoint for an example of the request body.

        #### Update

        Note: Changing the ``name`` of the repository will cause the location to be changed. This is because the URL of
        the repo is derived from the name (a process called slugification). In such a scenario, it is possible for the
        request to fail if the newly created slug conflicts with an existing repository's slug. But if there is no
        conflict, the new location will be returned in the ``Location`` header of the response.

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            body: The repository that is to be updated. Note that the elements "owner" and "full_name" are ignored since
                the URL implies them.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The existing repository has been updated

        Raises:
            ApiError: If the input document was invalid, or if the caller lacks the privilege to create repositories
                under the targeted account. If the request was not authenticated. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.put_repositories_by_workspace_by_repo_slug(
                repo_slug, workspace, body=body, request_options=request_options
            ),
        )

    def put_repositories_by_workspace_by_repo_slug_hooks_by_uid(
        self, repo_slug: str, uid: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> WebhookSubscription:
        """Updates the specified webhook subscription.

        The following properties can be mutated:

        * ``description``
        * ``url``
        * ``secret``
        * ``active``
        * ``events``

        The hook's secret is used as a key to generate the HMAC hex digest sent in the ``X-Hub-Signature`` header at
        delivery time. This signature is only generated when the hook has a secret.

        Set the hook's secret by passing the new value in the ``secret`` field. Passing a ``null`` value in the
        ``secret`` field will remove the secret from the hook. The hook's secret can be left unchanged by not passing
        the ``secret`` field in the request.

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            uid: Installed webhook's ID
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The webhook subscription object.

        Raises:
            ApiError: If the authenticated user does not have permission to update the webhook. If the webhook or
                repository does not exist. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.put_repositories_by_workspace_by_repo_slug_hooks_by_uid(
                repo_slug, uid, workspace, request_options=request_options
            ),
        )

    def put_repositories_by_workspace_by_repo_slug_override_settings(
        self, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Send a ``PUT`` request.

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The repository setting inheritance state was set and no content returned

        Raises:
            ApiError: If no repository exists at this location ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.put_repositories_by_workspace_by_repo_slug_override_settings(
                repo_slug, workspace, request_options=request_options
            ),
        )

    def put_repositories_by_workspace_by_repo_slug_permissions_config_groups_by_group_slug(
        self,
        group_slug: str,
        repo_slug: str,
        workspace: str,
        body: (
            BitbucketAppsPermissionsSerializersRepoPermissionUpdateSchema
            | BitbucketAppsPermissionsSerializersRepoPermissionUpdateSchemaDict
        ),
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> RepositoryGroupPermission:
        """Updates the group permission, or grants a new permission if one does not already exist.

        Only users with admin permission for the repository may access this resource.

        The only authentication method supported for this endpoint is via app passwords.

        Permissions can be:

        * ``admin``
        * ``write``
        * ``read``

        Args:
            group_slug: Slug of the requested group.
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            body: The permission to grant
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Group permission updated

        Raises:
            ApiError: No permission value was provided or the value is invalid(not one of read, write, or admin) The
                user couldn't be authenticated. You have reached your plan's user limit and must upgrade before giving
                access to additional users. The requesting user isn't an admin of the repository, or the authentication
                method was not via app password. The workspace does not exist, the repository does not exist, or the
                group does not exist. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.put_repositories_by_workspace_by_repo_slug_permissions_config_groups_by_group_slug(
                group_slug, repo_slug, workspace, body, request_options=request_options
            ),
        )

    def put_repositories_by_workspace_by_repo_slug_permissions_config_users_by_selected_user_id(
        self,
        repo_slug: str,
        selected_user_id: str,
        workspace: str,
        body: (
            BitbucketAppsPermissionsSerializersRepoPermissionUpdateSchema
            | BitbucketAppsPermissionsSerializersRepoPermissionUpdateSchemaDict
        ),
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> RepositoryUserPermission:
        """Updates the explicit user permission for a given user and repository. The selected user must be a member of
        the workspace, and cannot be the workspace owner. Only users with admin permission for the repository may access
        this resource.

        The only authentication method for this endpoint is via app passwords.

        Permissions can be:

        * ``admin``
        * ``write``
        * ``read``

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            selected_user_id: This can either be the UUID of the account, surrounded by curly-braces, for example:
                ``{account UUID}``, OR an Atlassian Account ID.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            body: The permission to grant
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Explicit user permission updated

        Raises:
            ApiError: No permission value was provided or the value is invalid (not one of read, write, or admin), or
                the selected user is not a valid user to update. The user couldn't be authenticated. You have reached
                your plan's user limit and must upgrade before giving access to additional users. The requesting user
                isn't an admin of the repository, or the authentication method was not via app password. One or more of
                the workspace, repository, and selected user doesn't exist for the given identifiers. ``error`` is
                ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.put_repositories_by_workspace_by_repo_slug_permissions_config_users_by_selected_user_id(
                repo_slug, selected_user_id, workspace, body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> RepositoriesWithRawResponse:
        return self._with_raw_response


class AsyncRepositories:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncRepositoriesWithRawResponse(client, server, auth)

    async def delete_repositories_by_workspace_by_repo_slug(
        self,
        repo_slug: str,
        workspace: str,
        *,
        redirect_to: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Deletes the repository. This is an irreversible operation.

        This does not affect its forks.

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            redirect_to: If a repository has been moved to a new location, use this parameter to show users a friendly
                message in the Bitbucket UI that the repository has moved to a new location. However, a GET to this
                endpoint will still return a 404.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Indicates successful deletion.

        Raises:
            ApiError: If the caller either does not have admin access to the repository, or the repository is set to
                read-only. If the repository does not exist. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.delete_repositories_by_workspace_by_repo_slug(
                repo_slug, workspace, redirect_to=redirect_to, request_options=request_options
            ),
        )

    async def delete_repositories_by_workspace_by_repo_slug_hooks_by_uid(
        self, repo_slug: str, uid: str, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Deletes the specified webhook subscription from the given repository.

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            uid: Installed webhook's ID
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            When the webhook was deleted successfully

        Raises:
            ApiError: If the authenticated user does not have permission to delete the webhook. If the webhook or
                repository does not exist. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.delete_repositories_by_workspace_by_repo_slug_hooks_by_uid(
                repo_slug, uid, workspace, request_options=request_options
            ),
        )

    async def delete_repositories_by_workspace_by_repo_slug_permissions_config_groups_by_group_slug(
        self,
        group_slug: str,
        repo_slug: str,
        workspace: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Deletes the repository group permission between the requested repository and group, if one exists.

        Only users with admin permission for the repository may access this resource.

        The only authentication method supported for this endpoint is via app passwords.

        Args:
            group_slug: Slug of the requested group.
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Group permission deleted

        Raises:
            ApiError: The user couldn't be authenticated. The requesting user isn't an admin of the repository, or the
                authentication method was not via app password. The workspace does not exist, the repository does not
                exist, or the group does not exist. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.delete_repositories_by_workspace_by_repo_slug_permissions_config_groups_by_group_slug(
                group_slug, repo_slug, workspace, request_options=request_options
            ),
        )

    async def delete_repositories_by_workspace_by_repo_slug_permissions_config_users_by_selected_user_id(
        self,
        repo_slug: str,
        selected_user_id: str,
        workspace: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Deletes the repository user permission between the requested repository and user, if one exists.

        Only users with admin permission for the repository may access this resource.

        The only authentication method for this endpoint is via app passwords.

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            selected_user_id: This can either be the UUID of the account, surrounded by curly-braces, for example:
                ``{account UUID}``, OR an Atlassian Account ID.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The repository user permission was deleted and no content returned.

        Raises:
            ApiError: The user couldn't be authenticated. The requesting user isn't an admin of the repository, or the
                authentication method was not via app password. One or more of the workspace, repository, and user
                doesn't exist for the given identifiers. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.delete_repositories_by_workspace_by_repo_slug_permissions_config_users_by_selected_user_id(
                repo_slug, selected_user_id, workspace, request_options=request_options
            ),
        )

    async def get_repositories(
        self,
        *,
        after: str | None = None,
        role: Role1OrStr | None = None,
        q: str | None = None,
        sort: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PaginatedRepositories:
        """**This endpoint is deprecated. Please use the workspace scoped alternative.**

        Returns a paginated list of all public repositories.

        This endpoint also supports filtering and sorting of the results. See filtering and sorting for more details.

        Args:
            after: Filter the results to include only repositories created on or after this `ISO-8601
                <https://en.wikipedia.org/wiki/ISO_8601>`__ timestamp. Example: ``YYYY-MM-DDTHH:mm:ss.sssZ``
            role: Filters the result based on the authenticated user's role on each repository. * **member**: returns
                repositories to which the user has explicit read access * **contributor**: returns repositories to which
                the user has explicit write access * **admin**: returns repositories to which the user has explicit
                administrator access * **owner**: returns all repositories owned by the current user
            q: Query string to narrow down the response as per `filtering and sorting
                </cloud/bitbucket/rest/intro/#filtering>`__. ``role`` parameter must also be specified.
            sort: Field by which the results should be sorted as per `filtering and sorting
                </cloud/bitbucket/rest/intro/#filtering>`__.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            All public repositories.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.get_repositories(
                after=after, role=role, q=q, sort=sort, request_options=request_options
            ),
        )

    async def get_repositories_by_workspace(
        self,
        workspace: str,
        *,
        role: Role1OrStr | None = None,
        q: str | None = None,
        sort: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PaginatedRepositories:
        """Returns a paginated list of all repositories owned by the specified workspace.

        The result can be narrowed down based on the authenticated user's role.

        E.g. with ``?role=contributor``, only those repositories that the authenticated user has write access to are
        returned (this includes any repo the user is an admin on, as that implies write access).

        This endpoint also supports filtering and sorting of the results. See filtering and sorting for more details.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            role: Filters the result based on the authenticated user's role on each repository. * **member**: returns
                repositories to which the user has explicit read access * **contributor**: returns repositories to which
                the user has explicit write access * **admin**: returns repositories to which the user has explicit
                administrator access * **owner**: returns all repositories owned by the current user
            q: Query string to narrow down the response as per `filtering and sorting
                </cloud/bitbucket/rest/intro/#filtering>`__.
            sort: Field by which the results should be sorted as per `filtering and sorting
                </cloud/bitbucket/rest/intro/#filtering>`__.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The repositories owned by the specified account.

        Raises:
            ApiError: If the specified account does not exist. If the specified account marked as spam. ``error`` is
                ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_repositories_by_workspace(
                workspace, role=role, q=q, sort=sort, request_options=request_options
            ),
        )

    async def get_repositories_by_workspace_by_repo_slug(
        self, repo_slug: str, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> RepositoryBitbucketRepositoriesApi:
        """Returns the object describing this repository.

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The repository object.

        Raises:
            ApiError: If the repository is private and the authenticated user does not have access to it. If no
                repository exists at this location. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_repositories_by_workspace_by_repo_slug(
                repo_slug, workspace, request_options=request_options
            ),
        )

    async def get_repositories_by_workspace_by_repo_slug_filehistory_by_commit_by_path(
        self,
        commit: str,
        path: str,
        repo_slug: str,
        workspace: str,
        *,
        renames: str | None = None,
        q: str | None = None,
        sort: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PaginatedFiles:
        r"""Returns a paginated list of commits that modified the specified file.

        Commits are returned in reverse chronological order. This is roughly equivalent to the following commands:

        $ git log --follow --date-order

        By default, Bitbucket will follow renames and the path name in the returned entries reflects that. This can be
        turned off using the ``?renames=false`` query parameter.

        Results are returned in descending chronological order by default, and like most endpoints you can filter and
        sort the response to only provide exactly the data you want.

        The example response returns commits made before 2011-05-18 against a file named ``README.rst``. The results are
        filtered to only return the path and date. This request can be made using:

        ```
        $ curl 'https://api.bitbucket.org/2.0/repositories/evzijst/dogslow/filehistory/master/README.rst'\
        '?fields=values.next,values.path,values.commit.date&q=commit.date<=2011-05-18'
        ```

        In the response you can see that the file was renamed to ``README.rst`` by the commit made on 2011-05-16, and
        was previously named ``README.txt``.

        Args:
            commit: The commit's SHA1.
            path: Path to the file.
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            renames: When ``true``, Bitbucket will follow the history of the file across renames (this is the default
                behavior). This can be turned off by specifying ``false``.
            q: Query string to narrow down the response as per `filtering and sorting
                </cloud/bitbucket/rest/intro/#filtering>`__.
            sort: Name of a response property sort the result by as per `filtering and sorting
                </cloud/bitbucket/rest/intro/#sorting-query-results>`__.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A paginated list of commits that modified the specified file

        Raises:
            ApiError: If the repository does not exist. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_repositories_by_workspace_by_repo_slug_filehistory_by_commit_by_path(
                commit, path, repo_slug, workspace, renames=renames, q=q, sort=sort, request_options=request_options
            ),
        )

    async def get_repositories_by_workspace_by_repo_slug_forks(
        self,
        repo_slug: str,
        workspace: str,
        *,
        role: Role1OrStr | None = None,
        q: str | None = None,
        sort: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PaginatedRepositories:
        """Returns a paginated list of all the forks of the specified repository.

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            role: Filters the result based on the authenticated user's role on each repository. * **member**: returns
                repositories to which the user has explicit read access * **contributor**: returns repositories to which
                the user has explicit write access * **admin**: returns repositories to which the user has explicit
                administrator access * **owner**: returns all repositories owned by the current user
            q: Query string to narrow down the response as per `filtering and sorting
                </cloud/bitbucket/rest/intro/#filtering>`__.
            sort: Field by which the results should be sorted as per `filtering and sorting
                </cloud/bitbucket/rest/intro/#filtering>`__.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            All forks.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.get_repositories_by_workspace_by_repo_slug_forks(
                repo_slug, workspace, role=role, q=q, sort=sort, request_options=request_options
            ),
        )

    async def get_repositories_by_workspace_by_repo_slug_hooks(
        self, repo_slug: str, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> PaginatedWebhookSubscriptions:
        """Returns a paginated list of webhooks installed on this repository.

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The paginated list of installed webhooks.

        Raises:
            ApiError: If the authenticated user does not have permission to access the webhooks. If the repository does
                not exist. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_repositories_by_workspace_by_repo_slug_hooks(
                repo_slug, workspace, request_options=request_options
            ),
        )

    async def get_repositories_by_workspace_by_repo_slug_hooks_by_uid(
        self, repo_slug: str, uid: str, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> WebhookSubscription:
        """Returns the webhook with the specified id installed on the specified repository.

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            uid: Installed webhook's ID
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The webhook subscription object.

        Raises:
            ApiError: If the webhook or repository does not exist. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_repositories_by_workspace_by_repo_slug_hooks_by_uid(
                repo_slug, uid, workspace, request_options=request_options
            ),
        )

    async def get_repositories_by_workspace_by_repo_slug_override_settings(
        self, repo_slug: str, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> RepositoryInheritanceState:
        """Send a ``GET`` request.

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The repository setting inheritance state

        Raises:
            ApiError: If no repository exists at this location ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_repositories_by_workspace_by_repo_slug_override_settings(
                repo_slug, workspace, request_options=request_options
            ),
        )

    async def get_repositories_by_workspace_by_repo_slug_permissions_config_groups(
        self, repo_slug: str, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> PaginatedRepositoryGroupPermissions:
        """Returns a paginated list of explicit group permissions for the given repository. This endpoint does not
        support BBQL features.

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Paginated of explicit group permissions on the repository.

        Raises:
            ApiError: The user couldn't be authenticated. The requesting user isn't an admin of the repository. One or
                both of the workspace and repository doesn't exist for the given identifiers. ``error`` is ``Error |
                RawError``."""
        return unwrap(
            await self._with_raw_response.get_repositories_by_workspace_by_repo_slug_permissions_config_groups(
                repo_slug, workspace, request_options=request_options
            ),
        )

    async def get_repositories_by_workspace_by_repo_slug_permissions_config_groups_by_group_slug(
        self,
        group_slug: str,
        repo_slug: str,
        workspace: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> RepositoryGroupPermission:
        """Returns the group permission for a given group slug and repository

        Only users with admin permission for the repository may access this resource.

        Permissions can be:

        * ``admin``
        * ``write``
        * ``read``
        * ``none``

        Args:
            group_slug: Slug of the requested group.
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Group permission for group slug and repository

        Raises:
            ApiError: The user couldn't be authenticated. The requesting user isn't an admin of the repository. The
                given user, workspace, and/or repository could not be found ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_repositories_by_workspace_by_repo_slug_permissions_config_groups_by_group_slug(
                group_slug, repo_slug, workspace, request_options=request_options
            ),
        )

    async def get_repositories_by_workspace_by_repo_slug_permissions_config_users(
        self, repo_slug: str, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> PaginatedRepositoryUserPermissions:
        """Returns a paginated list of explicit user permissions for the given repository. This endpoint does not
        support BBQL features.

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Paginated of explicit user permissions on the repository.

        Raises:
            ApiError: The user couldn't be authenticated. The requesting user isn't an admin of the repository. No
                repository exists for the given repository slug and workspace. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_repositories_by_workspace_by_repo_slug_permissions_config_users(
                repo_slug, workspace, request_options=request_options
            ),
        )

    async def get_repositories_by_workspace_by_repo_slug_permissions_config_users_by_selected_user_id(
        self,
        repo_slug: str,
        selected_user_id: str,
        workspace: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> RepositoryUserPermission:
        """Returns the explicit user permission for a given user and repository.

        Only users with admin permission for the repository may access this resource.

        Permissions can be:

        * ``admin``
        * ``write``
        * ``read``
        * ``none``

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            selected_user_id: This can either be the UUID of the account, surrounded by curly-braces, for example:
                ``{account UUID}``, OR an Atlassian Account ID.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Explicit user permission for user and repository

        Raises:
            ApiError: The user couldn't be authenticated. The requesting user isn't an admin of the repository. One or
                both of the workspace and repository doesn't exist for the given identifiers. ``error`` is ``Error |
                RawError``."""
        return unwrap(
            await self._with_raw_response.get_repositories_by_workspace_by_repo_slug_permissions_config_users_by_selected_user_id(
                repo_slug, selected_user_id, workspace, request_options=request_options
            ),
        )

    async def get_repositories_by_workspace_by_repo_slug_src(
        self,
        repo_slug: str,
        workspace: str,
        *,
        format_: FormatOrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PaginatedTreeEntry:
        """This endpoint redirects the client to the directory listing of the root directory on the main branch.

        This is equivalent to directly hitting /2.0/repositories/{username}/{repo_slug}/src/{commit}/{path} without
        having to know the name or SHA1 of the repo's main branch.

        To create new commits, POST to this endpoint

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            format_: Instead of returning the file's contents, return the (json) meta data for it.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            If the path matches a file, then the raw contents of the file are returned (unless the ``format=meta`` query
            parameter was provided, in which case a json document containing the file's meta data is returned). If the
            path matches a directory, then a paginated list of file and directory entries is returned (if the
            ``format=meta`` query parameter was provided, then the json document containing the directory's meta data is
            returned).

        Raises:
            ApiError: If the path or commit in the URL does not exist. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_repositories_by_workspace_by_repo_slug_src(
                repo_slug, workspace, format_=format_, request_options=request_options
            ),
        )

    async def get_repositories_by_workspace_by_repo_slug_src_by_commit_by_path(
        self,
        commit: str,
        path: str,
        repo_slug: str,
        workspace: str,
        *,
        format_: Format1OrStr | None = None,
        q: str | None = None,
        sort: str | None = None,
        max_depth: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PaginatedTreeEntry:
        """This endpoints is used to retrieve the contents of a single file, or the contents of a directory at a
        specified revision.

        Args:
            commit: The commit's SHA1.
            path: Path to the file.
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            format_: If 'meta' is provided, returns the (json) meta data for the contents of the file. If 'rendered' is
                provided, returns the contents of a non-binary file in HTML-formatted rendered markup. The 'rendered'
                option only supports these filetypes: ``.md``, ``.markdown``, ``.mkd``, ``.mkdn``, ``.mdown``,
                ``.text``, ``.rst``, and ``.textile``. Since Git does not generally track what text encoding scheme is
                used, this endpoint attempts to detect the most appropriate character encoding. While usually correct,
                determining the character encoding can be ambiguous which in exceptional cases can lead to
                misinterpretation of the characters. As such, the raw element in the response object should not be
                treated as equivalent to the file's actual contents.
            q: Optional filter expression as per `filtering and sorting </cloud/bitbucket/rest/intro/#filtering>`__.
            sort: Optional sorting parameter as per `filtering and sorting
                </cloud/bitbucket/rest/intro/#sorting-query-results>`__.
            max_depth: If provided, returns the contents of the repository and its subdirectories recursively until the
                specified max_depth of nested directories. When omitted, this defaults to 1.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            If the path matches a file, then the raw contents of the file are returned. If the ``format=meta`` query
            parameter is provided, a json document containing the file's meta data is returned. If the
            ``format=rendered`` query parameter is provided, the contents of the file in HTML-formated rendered markup
            is returned. If the path matches a directory, then a paginated list of file and directory entries is
            returned (if the ``format=meta`` query parameter was provided, then the json document containing the
            directory's meta data is returned.)

        Raises:
            ApiError: If the path or commit in the URL does not exist. If the call times out, possibly because the
                specified recursion depth is too large. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_repositories_by_workspace_by_repo_slug_src_by_commit_by_path(
                commit,
                path,
                repo_slug,
                workspace,
                format_=format_,
                q=q,
                sort=sort,
                max_depth=max_depth,
                request_options=request_options,
            ),
        )

    async def get_repositories_by_workspace_by_repo_slug_watchers(
        self, repo_slug: str, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> PaginatedAccounts:
        """Returns a paginated list of all the watchers on the specified repository.

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A paginated list of all the watchers on the specified repository.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.get_repositories_by_workspace_by_repo_slug_watchers(
                repo_slug, workspace, request_options=request_options
            ),
        )

    async def get_user_permissions_repositories(
        self, *, q: str | None = None, sort: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> PaginatedRepositoryPermissions:
        """**This endpoint is deprecated. Please use the workspace scoped alternative.**

        Returns an object for each repository the caller has explicit access to and their effective permission — the
        highest level of permission the caller has. This does not return public repositories that the user was not
        granted any specific permission in, and does not distinguish between explicit and implicit privileges.

        Permissions can be:

        * ``admin``
        * ``write``
        * ``read``

        Results may be further filtered or sorted by repository or permission by adding the following query string
        parameters:

        * ``q=repository.name="geordi"`` or ``q=permission>"read"``
        * ``sort=repository.name``

        Note that the query parameter values need to be URL escaped so that ``=`` would become ``%3D``.

        Args:
            q: Query string to narrow down the response as per `filtering and sorting
                </cloud/bitbucket/rest/intro/#filtering>`__.
            sort: Name of a response property sort the result by as per `filtering and sorting
                </cloud/bitbucket/rest/intro/#filtering>`__.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Repository permissions for the repositories a caller has explicit access to.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.get_user_permissions_repositories(
                q=q, sort=sort, request_options=request_options
            ),
        )

    async def get_user_workspaces_by_workspace_permissions_repositories(
        self,
        workspace: str,
        *,
        q: str | None = None,
        sort: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PaginatedRepositoryPermissions:
        """Returns an object for each repository the caller has explicit access to in the specified workspace and their
        effective permission — the highest level of permission the caller has. This does not return public repositories
        that the user was not granted any specific permission in, and does not distinguish between explicit and implicit
        privileges.

        Permissions can be:

        * ``admin``
        * ``write``
        * ``read``

        Results may be further filtered or sorted by repository or permission by adding the following query string
        parameters:

        * ``q=repository.name="bits"`` or ``q=permission>"read"``
        * ``sort=repository.name``

        Note that the query parameter values need to be URL escaped so that ``=`` would become ``%3D``.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            q: Query string to narrow down the response as per `filtering and sorting
                </cloud/bitbucket/rest/intro/#filtering>`__.
            sort: Name of a response property sort the result by as per `filtering and sorting
                </cloud/bitbucket/rest/intro/#filtering>`__.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The list of repository permissions for the authenticated user in the specified workspace.

        Raises:
            ApiError: The request was invalid. The request wasn't authenticated. The requesting user does not have
                access to the workspace. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_user_workspaces_by_workspace_permissions_repositories(
                workspace, q=q, sort=sort, request_options=request_options
            ),
        )

    async def post_repositories_by_workspace_by_repo_slug(
        self,
        repo_slug: str,
        workspace: str,
        *,
        body: RepositoryBitbucketRepositoriesApi | RepositoryBitbucketRepositoriesApiDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> RepositoryBitbucketRepositoriesApi:
        """Creates a new repository.

        Note: In order to set the project for the newly created repository, pass in either the project key or the
        project UUID as part of the request body as shown in the examples below:

        ```
        $ curl -X POST -H "Content-Type: application/json" -d '{ "scm": "git", "project": { "key": "MARS"
        }
        }' https://api.bitbucket.org/2.0/repositories/teamsinspace/hablanding
        ```

        or

        ```
        $ curl -X POST -H "Content-Type: application/json" -d '{ "scm": "git", "project": { "key":
        "{ba516952-992a-4c2d-acbd-17d502922f96}"
        }
        }' https://api.bitbucket.org/2.0/repositories/teamsinspace/hablanding
        ```

        The project must be assigned for all repositories. If the project is not provided, the repository is
        automatically assigned to the oldest project in the workspace.

        Note: In the examples above, the workspace ID ``teamsinspace``, and/or the repository name ``hablanding`` can be
        replaced by UUIDs.

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            body: The repository that is to be created. Note that most object elements are optional. Elements "owner"
                and "full_name" are ignored as the URL implies them.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The newly created repository.

        Raises:
            ApiError: If the input document was invalid, or if the caller lacks the privilege to create repositories
                under the targeted account. If the request was not authenticated. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.post_repositories_by_workspace_by_repo_slug(
                repo_slug, workspace, body=body, request_options=request_options
            ),
        )

    async def post_repositories_by_workspace_by_repo_slug_forks(
        self,
        repo_slug: str,
        workspace: str,
        *,
        body: RepositoryBitbucketRepositoriesApi | RepositoryBitbucketRepositoriesApiDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> RepositoryBitbucketRepositoriesApi:
        r"""Creates a new fork of the specified repository.

        #### Forking a repository

        To create a fork, specify the workspace explicitly as part of the request body:

        ```
        $ curl -X POST -u jdoe https://api.bitbucket.org/2.0/repositories/atlassian/bbql/forks \ -H 'Content-Type:
        application/json' -d '{ "name": "bbql_fork", "workspace": { "slug": "atlassian"
        }
        }'
        ```

        To fork a repository into the same workspace, also specify a new ``name``.

        When you specify a value for ``name``, it will also affect the ``slug``. The ``slug`` is reflected in the
        repository URL of the new fork. It is derived from ``name`` by substituting non-ASCII characters, removes
        whitespace, and changes characters to lower case. For example, ``My repo`` would turn into ``my_repo``.

        You need contributor access to create new forks within a workspace.

        #### Change the properties of a new fork

        By default the fork inherits most of its properties from the parent. However, since the optional POST body
        document follows the normal ``repository`` JSON schema and you can override the new fork's properties.

        Properties that can be overridden include:

        * description
        * fork_policy
        * language
        * mainbranch
        * is_private (note that a private repo's fork_policy might prohibit
        the creation of public forks, in which ``is_private=False`` would fail)
        * has_issues (to initialize or disable the new repo's issue tracker --
        note that the actual contents of the parent repository's issue tracker are not copied during forking)
        * has_wiki (to initialize or disable the new repo's wiki --
        note that the actual contents of the parent repository's wiki are not copied during forking)
        * project (when forking into a private project, the fork's ``is_private``
        must be ``true``)

        Properties that cannot be modified include:

        * scm
        * parent
        * full_name

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            body: A repository object. This can be left blank.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The newly created fork.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.post_repositories_by_workspace_by_repo_slug_forks(
                repo_slug, workspace, body=body, request_options=request_options
            ),
        )

    async def post_repositories_by_workspace_by_repo_slug_hooks(
        self, repo_slug: str, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> WebhookSubscription:
        """Creates a new webhook on the specified repository.

        Example:

        ```
        $ curl -X POST -u credentials -H 'Content-Type: application/json'
        https://api.bitbucket.org/2.0/repositories/my-workspace/my-repo-slug/hooks -d '
        {
        "description": "Webhook Description", "url": "https://example.com/", "active": true, "secret": "this is a really
        bad secret", "events": [ "repo:push", "issue:created", "issue:updated"
        ]
        }'
        ```

        When the ``secret`` is provided it will be used as the key to generate a HMAC digest value sent in the
        ``X-Hub-Signature`` header at delivery time. Passing a ``null`` or empty ``secret`` or not passing a ``secret``
        will leave the webhook's secret unset. Bitbucket only generates the ``X-Hub-Signature`` when the webhook's
        secret is set.

        Note that this call requires the webhook scope, as well as any scope that applies to the events that the webhook
        subscribes to. In the example above that means: ``webhook``, ``repository`` and ``issue``.

        Also note that the ``url`` must properly resolve and cannot be an internal, non-routed address.

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            If the webhook was registered successfully.

        Raises:
            ApiError: If the authenticated user does not have permission to install webhooks on the specified
                repository. If the repository does not exist. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.post_repositories_by_workspace_by_repo_slug_hooks(
                repo_slug, workspace, request_options=request_options
            ),
        )

    async def post_repositories_by_workspace_by_repo_slug_src(
        self,
        repo_slug: str,
        workspace: str,
        *,
        message: str | None = None,
        author: str | None = None,
        parents: str | None = None,
        files: str | None = None,
        branch: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """This endpoint is used to create new commits in the repository by uploading files.

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            message: The commit message. When omitted, Bitbucket uses a canned string.
            author: The raw string to be used as the new commit's author. This string follows the format ``Erik van
                Zijst <evzijst@atlassian.com>``. When omitted, Bitbucket uses the authenticated user's full/display name
                and primary email address. Commits cannot be created anonymously.
            parents: #### Deprecation Notice: Support for specifying multiple parent commits is deprecated and will be
                removed in a future release. Only a single SHA1 is accepted. A SHA1 of the commit that should be the
                parent of the newly created commit. When omitted, the new commit will inherit from and become a child of
                the main branch's tip/HEAD commit.
            files: Optional field that declares the files that the request is manipulating. When adding a new file to a
                repo, or when overwriting an existing file, the client can just upload the full contents of the file in
                a normal form field and the use of this ``files`` meta data field is redundant. However, when the
                ``files`` field contains a file path that does not have a corresponding, identically-named form field,
                then Bitbucket interprets that as the client wanting to replace the named file with the null set and the
                file is deleted instead. Paths in the repo that are referenced in neither files nor an individual file
                field, remain unchanged and carry over from the parent to the new commit. This API does not support
                renaming as an explicit feature. To rename a file, simply delete it and recreate it under the new name
                in the same commit.
            branch: The name of the branch that the new commit should be created on. When omitted, the commit will be
                created on top of the main branch and will become the main branch's new head. When a branch name is
                provided that already exists in the repo, then the commit will be created on top of that branch. In this
                case, *if* a parent SHA1 was also provided, then it is asserted that the parent is the branch's tip/HEAD
                at the time the request is made. When this is not the case, a 409 is returned. When a new branch name is
                specified (that does not already exist in the repo), and no parent SHA1s are provided, then the new
                commit will inherit from the current main branch's tip/HEAD commit, but not advance the main branch. The
                new commit will be the new branch. When the request *also* specifies a parent SHA1, then the new commit
                and branch are created directly on top of the parent commit, regardless of the state of the main branch.
                When a branch name is not specified, but a parent SHA1 is provided, then Bitbucket asserts that it
                represents the main branch's current HEAD/tip, or a 409 is returned. When a branch name is not specified
                and the repo is empty, the new commit will become the repo's root commit and will be on the main branch.
                When a branch name is specified and the repo is empty, the new commit will become the repo's root commit
                and also define the repo's main branch going forward. This API cannot be used to create additional root
                commits in non-empty repos. The branch field cannot be repeated. As a side effect, this API can be used
                to create a new branch without modifying any files, by specifying a new branch name in this field,
                together with ``parents``, but omitting the ``files`` fields, while not sending any files. This will
                create a new commit and branch with the same contents as the first parent. The diff of this commit
                against its first parent will be empty.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Raises:
            ApiError: If the authenticated user does not have write or admin access If the repository does not exist.
                ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.post_repositories_by_workspace_by_repo_slug_src(
                repo_slug,
                workspace,
                message=message,
                author=author,
                parents=parents,
                files=files,
                branch=branch,
                request_options=request_options,
            ),
        )

    async def put_repositories_by_workspace_by_repo_slug(
        self,
        repo_slug: str,
        workspace: str,
        *,
        body: RepositoryBitbucketRepositoriesApi | RepositoryBitbucketRepositoriesApiDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> RepositoryBitbucketRepositoriesApi:
        """Since this endpoint can be used to both update and to create a repository, the request body depends on the
        intent.

        #### Creation

        See the POST documentation for the repository endpoint for an example of the request body.

        #### Update

        Note: Changing the ``name`` of the repository will cause the location to be changed. This is because the URL of
        the repo is derived from the name (a process called slugification). In such a scenario, it is possible for the
        request to fail if the newly created slug conflicts with an existing repository's slug. But if there is no
        conflict, the new location will be returned in the ``Location`` header of the response.

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            body: The repository that is to be updated. Note that the elements "owner" and "full_name" are ignored since
                the URL implies them.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The existing repository has been updated

        Raises:
            ApiError: If the input document was invalid, or if the caller lacks the privilege to create repositories
                under the targeted account. If the request was not authenticated. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.put_repositories_by_workspace_by_repo_slug(
                repo_slug, workspace, body=body, request_options=request_options
            ),
        )

    async def put_repositories_by_workspace_by_repo_slug_hooks_by_uid(
        self, repo_slug: str, uid: str, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> WebhookSubscription:
        """Updates the specified webhook subscription.

        The following properties can be mutated:

        * ``description``
        * ``url``
        * ``secret``
        * ``active``
        * ``events``

        The hook's secret is used as a key to generate the HMAC hex digest sent in the ``X-Hub-Signature`` header at
        delivery time. This signature is only generated when the hook has a secret.

        Set the hook's secret by passing the new value in the ``secret`` field. Passing a ``null`` value in the
        ``secret`` field will remove the secret from the hook. The hook's secret can be left unchanged by not passing
        the ``secret`` field in the request.

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            uid: Installed webhook's ID
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The webhook subscription object.

        Raises:
            ApiError: If the authenticated user does not have permission to update the webhook. If the webhook or
                repository does not exist. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.put_repositories_by_workspace_by_repo_slug_hooks_by_uid(
                repo_slug, uid, workspace, request_options=request_options
            ),
        )

    async def put_repositories_by_workspace_by_repo_slug_override_settings(
        self, repo_slug: str, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Send a ``PUT`` request.

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The repository setting inheritance state was set and no content returned

        Raises:
            ApiError: If no repository exists at this location ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.put_repositories_by_workspace_by_repo_slug_override_settings(
                repo_slug, workspace, request_options=request_options
            ),
        )

    async def put_repositories_by_workspace_by_repo_slug_permissions_config_groups_by_group_slug(
        self,
        group_slug: str,
        repo_slug: str,
        workspace: str,
        body: (
            BitbucketAppsPermissionsSerializersRepoPermissionUpdateSchema
            | BitbucketAppsPermissionsSerializersRepoPermissionUpdateSchemaDict
        ),
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> RepositoryGroupPermission:
        """Updates the group permission, or grants a new permission if one does not already exist.

        Only users with admin permission for the repository may access this resource.

        The only authentication method supported for this endpoint is via app passwords.

        Permissions can be:

        * ``admin``
        * ``write``
        * ``read``

        Args:
            group_slug: Slug of the requested group.
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            body: The permission to grant
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Group permission updated

        Raises:
            ApiError: No permission value was provided or the value is invalid(not one of read, write, or admin) The
                user couldn't be authenticated. You have reached your plan's user limit and must upgrade before giving
                access to additional users. The requesting user isn't an admin of the repository, or the authentication
                method was not via app password. The workspace does not exist, the repository does not exist, or the
                group does not exist. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.put_repositories_by_workspace_by_repo_slug_permissions_config_groups_by_group_slug(
                group_slug, repo_slug, workspace, body, request_options=request_options
            ),
        )

    async def put_repositories_by_workspace_by_repo_slug_permissions_config_users_by_selected_user_id(
        self,
        repo_slug: str,
        selected_user_id: str,
        workspace: str,
        body: (
            BitbucketAppsPermissionsSerializersRepoPermissionUpdateSchema
            | BitbucketAppsPermissionsSerializersRepoPermissionUpdateSchemaDict
        ),
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> RepositoryUserPermission:
        """Updates the explicit user permission for a given user and repository. The selected user must be a member of
        the workspace, and cannot be the workspace owner. Only users with admin permission for the repository may access
        this resource.

        The only authentication method for this endpoint is via app passwords.

        Permissions can be:

        * ``admin``
        * ``write``
        * ``read``

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            selected_user_id: This can either be the UUID of the account, surrounded by curly-braces, for example:
                ``{account UUID}``, OR an Atlassian Account ID.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            body: The permission to grant
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Explicit user permission updated

        Raises:
            ApiError: No permission value was provided or the value is invalid (not one of read, write, or admin), or
                the selected user is not a valid user to update. The user couldn't be authenticated. You have reached
                your plan's user limit and must upgrade before giving access to additional users. The requesting user
                isn't an admin of the repository, or the authentication method was not via app password. One or more of
                the workspace, repository, and selected user doesn't exist for the given identifiers. ``error`` is
                ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.put_repositories_by_workspace_by_repo_slug_permissions_config_users_by_selected_user_id(
                repo_slug, selected_user_id, workspace, body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncRepositoriesWithRawResponse:
        return self._with_raw_response


class RepositoriesWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def delete_repositories_by_workspace_by_repo_slug(
        self,
        repo_slug: str,
        workspace: str,
        *,
        redirect_to: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DeleteRepositoriesByWorkspaceByRepoSlugErrorBody]:
        """Deletes the repository. This is an irreversible operation.

        This does not affect its forks.

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            redirect_to: If a repository has been moved to a new location, use this parameter to show users a friendly
                message in the Bitbucket UI that the repository has moved to a new location. However, a GET to this
                endpoint will still return a 404.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}"),
            path_params=[param[str]("repo_slug", repo_slug), param[str]("workspace", workspace)],
            query_params=[param[str | None]("redirect_to", redirect_to)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=empty_response,
            error_mapper=delete_repositories_by_workspace_by_repo_slug_error_mapper,
            request_options=request_options,
        )

    def delete_repositories_by_workspace_by_repo_slug_hooks_by_uid(
        self, repo_slug: str, uid: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteRepositoriesByWorkspaceByRepoSlugHooksByUidErrorBody]:
        """Deletes the specified webhook subscription from the given repository.

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            uid: Installed webhook's ID
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/hooks/{uid}"),
            path_params=[
                param[str]("repo_slug", repo_slug), param[str]("uid", uid), param[str]("workspace", workspace)
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=empty_response,
            error_mapper=delete_repositories_by_workspace_by_repo_slug_hooks_by_uid_error_mapper,
            request_options=request_options,
        )

    def delete_repositories_by_workspace_by_repo_slug_permissions_config_groups_by_group_slug(
        self, group_slug: str, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteRepositoriesByWorkspaceByRepoSlugPermissionsConfigGroupsByGroupSlugErrorBody]:
        """Deletes the repository group permission between the requested repository and group, if one exists.

        Only users with admin permission for the repository may access this resource.

        The only authentication method supported for this endpoint is via app passwords.

        Args:
            group_slug: Slug of the requested group.
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
            url_template=self._server.default(
                "/repositories/{workspace}/{repo_slug}/permissions-config/groups/{group_slug}"
            ),
            path_params=[
                param[str]("group_slug", group_slug),
                param[str]("repo_slug", repo_slug),
                param[str]("workspace", workspace),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=empty_response,
            error_mapper=delete_repositories_by_workspace_by_repo_slug_permissions_config_groups_by_group_slug_error_mapper,
            request_options=request_options,
        )

    def delete_repositories_by_workspace_by_repo_slug_permissions_config_users_by_selected_user_id(
        self,
        repo_slug: str,
        selected_user_id: str,
        workspace: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DeleteRepositoriesByWorkspaceByRepoSlugPermissionsConfigUsersBySelectedUserIdErrorBody]:
        """Deletes the repository user permission between the requested repository and user, if one exists.

        Only users with admin permission for the repository may access this resource.

        The only authentication method for this endpoint is via app passwords.

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            selected_user_id: This can either be the UUID of the account, surrounded by curly-braces, for example:
                ``{account UUID}``, OR an Atlassian Account ID.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default(
                "/repositories/{workspace}/{repo_slug}/permissions-config/users/{selected_user_id}"
            ),
            path_params=[
                param[str]("repo_slug", repo_slug),
                param[str]("selected_user_id", selected_user_id),
                param[str]("workspace", workspace),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=empty_response,
            error_mapper=delete_repositories_by_workspace_by_repo_slug_permissions_config_users_by_selected_user_id_error_mapper,
            request_options=request_options,
        )

    def get_repositories(
        self,
        *,
        after: str | None = None,
        role: Role1OrStr | None = None,
        q: str | None = None,
        sort: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PaginatedRepositories, RawError]:
        """**This endpoint is deprecated. Please use the workspace scoped alternative.**

        Returns a paginated list of all public repositories.

        This endpoint also supports filtering and sorting of the results. See filtering and sorting for more details.

        Args:
            after: Filter the results to include only repositories created on or after this `ISO-8601
                <https://en.wikipedia.org/wiki/ISO_8601>`__ timestamp. Example: ``YYYY-MM-DDTHH:mm:ss.sssZ``
            role: Filters the result based on the authenticated user's role on each repository. * **member**: returns
                repositories to which the user has explicit read access * **contributor**: returns repositories to which
                the user has explicit write access * **admin**: returns repositories to which the user has explicit
                administrator access * **owner**: returns all repositories owned by the current user
            q: Query string to narrow down the response as per `filtering and sorting
                </cloud/bitbucket/rest/intro/#filtering>`__. ``role`` parameter must also be specified.
            sort: Field by which the results should be sorted as per `filtering and sorting
                </cloud/bitbucket/rest/intro/#filtering>`__.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/repositories"),
            query_params=[
                param[str | None]("after", after),
                param[Role1OrStr | None]("role", role),
                param[str | None]("q", q),
                param[str | None]("sort", sort),
            ],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[PaginatedRepositories],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def get_repositories_by_workspace(
        self,
        workspace: str,
        *,
        role: Role1OrStr | None = None,
        q: str | None = None,
        sort: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PaginatedRepositories, GetRepositoriesByWorkspaceErrorBody]:
        """Returns a paginated list of all repositories owned by the specified workspace.

        The result can be narrowed down based on the authenticated user's role.

        E.g. with ``?role=contributor``, only those repositories that the authenticated user has write access to are
        returned (this includes any repo the user is an admin on, as that implies write access).

        This endpoint also supports filtering and sorting of the results. See filtering and sorting for more details.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            role: Filters the result based on the authenticated user's role on each repository. * **member**: returns
                repositories to which the user has explicit read access * **contributor**: returns repositories to which
                the user has explicit write access * **admin**: returns repositories to which the user has explicit
                administrator access * **owner**: returns all repositories owned by the current user
            q: Query string to narrow down the response as per `filtering and sorting
                </cloud/bitbucket/rest/intro/#filtering>`__.
            sort: Field by which the results should be sorted as per `filtering and sorting
                </cloud/bitbucket/rest/intro/#filtering>`__.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/repositories/{workspace}"),
            path_params=[param[str]("workspace", workspace)],
            query_params=[
                param[Role1OrStr | None]("role", role), param[str | None]("q", q), param[str | None]("sort", sort)
            ],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[PaginatedRepositories],
            error_mapper=get_repositories_by_workspace_error_mapper,
            request_options=request_options,
        )

    def get_repositories_by_workspace_by_repo_slug(
        self, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[RepositoryBitbucketRepositoriesApi, GetRepositoriesByWorkspaceByRepoSlugErrorBody]:
        """Returns the object describing this repository.

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
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}"),
            path_params=[param[str]("repo_slug", repo_slug), param[str]("workspace", workspace)],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[RepositoryBitbucketRepositoriesApi],
            error_mapper=get_repositories_by_workspace_by_repo_slug_error_mapper,
            request_options=request_options,
        )

    def get_repositories_by_workspace_by_repo_slug_filehistory_by_commit_by_path(
        self,
        commit: str,
        path: str,
        repo_slug: str,
        workspace: str,
        *,
        renames: str | None = None,
        q: str | None = None,
        sort: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PaginatedFiles, GetRepositoriesByWorkspaceByRepoSlugFilehistoryByCommitByPathErrorBody]:
        r"""Returns a paginated list of commits that modified the specified file.

        Commits are returned in reverse chronological order. This is roughly equivalent to the following commands:

        $ git log --follow --date-order

        By default, Bitbucket will follow renames and the path name in the returned entries reflects that. This can be
        turned off using the ``?renames=false`` query parameter.

        Results are returned in descending chronological order by default, and like most endpoints you can filter and
        sort the response to only provide exactly the data you want.

        The example response returns commits made before 2011-05-18 against a file named ``README.rst``. The results are
        filtered to only return the path and date. This request can be made using:

        ```
        $ curl 'https://api.bitbucket.org/2.0/repositories/evzijst/dogslow/filehistory/master/README.rst'\
        '?fields=values.next,values.path,values.commit.date&q=commit.date<=2011-05-18'
        ```

        In the response you can see that the file was renamed to ``README.rst`` by the commit made on 2011-05-16, and
        was previously named ``README.txt``.

        Args:
            commit: The commit's SHA1.
            path: Path to the file.
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            renames: When ``true``, Bitbucket will follow the history of the file across renames (this is the default
                behavior). This can be turned off by specifying ``false``.
            q: Query string to narrow down the response as per `filtering and sorting
                </cloud/bitbucket/rest/intro/#filtering>`__.
            sort: Name of a response property sort the result by as per `filtering and sorting
                </cloud/bitbucket/rest/intro/#sorting-query-results>`__.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/filehistory/{commit}/{path}"),
            path_params=[
                param[str]("commit", commit),
                param[str]("path", path),
                param[str]("repo_slug", repo_slug),
                param[str]("workspace", workspace),
            ],
            query_params=[
                param[str | None]("renames", renames), param[str | None]("q", q), param[str | None]("sort", sort)
            ],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[PaginatedFiles],
            error_mapper=get_repositories_by_workspace_by_repo_slug_filehistory_by_commit_by_path_error_mapper,
            request_options=request_options,
        )

    def get_repositories_by_workspace_by_repo_slug_forks(
        self,
        repo_slug: str,
        workspace: str,
        *,
        role: Role1OrStr | None = None,
        q: str | None = None,
        sort: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PaginatedRepositories, RawError]:
        """Returns a paginated list of all the forks of the specified repository.

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            role: Filters the result based on the authenticated user's role on each repository. * **member**: returns
                repositories to which the user has explicit read access * **contributor**: returns repositories to which
                the user has explicit write access * **admin**: returns repositories to which the user has explicit
                administrator access * **owner**: returns all repositories owned by the current user
            q: Query string to narrow down the response as per `filtering and sorting
                </cloud/bitbucket/rest/intro/#filtering>`__.
            sort: Field by which the results should be sorted as per `filtering and sorting
                </cloud/bitbucket/rest/intro/#filtering>`__.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/forks"),
            path_params=[param[str]("repo_slug", repo_slug), param[str]("workspace", workspace)],
            query_params=[
                param[Role1OrStr | None]("role", role), param[str | None]("q", q), param[str | None]("sort", sort)
            ],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[PaginatedRepositories],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def get_repositories_by_workspace_by_repo_slug_hooks(
        self, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[PaginatedWebhookSubscriptions, GetRepositoriesByWorkspaceByRepoSlugHooksErrorBody]:
        """Returns a paginated list of webhooks installed on this repository.

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
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/hooks"),
            path_params=[param[str]("repo_slug", repo_slug), param[str]("workspace", workspace)],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[PaginatedWebhookSubscriptions],
            error_mapper=get_repositories_by_workspace_by_repo_slug_hooks_error_mapper,
            request_options=request_options,
        )

    def get_repositories_by_workspace_by_repo_slug_hooks_by_uid(
        self, repo_slug: str, uid: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[WebhookSubscription, GetRepositoriesByWorkspaceByRepoSlugHooksByUidErrorBody]:
        """Returns the webhook with the specified id installed on the specified repository.

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            uid: Installed webhook's ID
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/hooks/{uid}"),
            path_params=[
                param[str]("repo_slug", repo_slug), param[str]("uid", uid), param[str]("workspace", workspace)
            ],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[WebhookSubscription],
            error_mapper=get_repositories_by_workspace_by_repo_slug_hooks_by_uid_error_mapper,
            request_options=request_options,
        )

    def get_repositories_by_workspace_by_repo_slug_override_settings(
        self, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[RepositoryInheritanceState, GetRepositoriesByWorkspaceByRepoSlugOverrideSettingsErrorBody]:
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
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/override-settings"),
            path_params=[param[str]("repo_slug", repo_slug), param[str]("workspace", workspace)],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[RepositoryInheritanceState],
            error_mapper=get_repositories_by_workspace_by_repo_slug_override_settings_error_mapper,
            request_options=request_options,
        )

    def get_repositories_by_workspace_by_repo_slug_permissions_config_groups(
        self, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[
        PaginatedRepositoryGroupPermissions, GetRepositoriesByWorkspaceByRepoSlugPermissionsConfigGroupsErrorBody
    ]:
        """Returns a paginated list of explicit group permissions for the given repository. This endpoint does not
        support BBQL features.

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
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/permissions-config/groups"),
            path_params=[param[str]("repo_slug", repo_slug), param[str]("workspace", workspace)],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[PaginatedRepositoryGroupPermissions],
            error_mapper=get_repositories_by_workspace_by_repo_slug_permissions_config_groups_error_mapper,
            request_options=request_options,
        )

    def get_repositories_by_workspace_by_repo_slug_permissions_config_groups_by_group_slug(
        self, group_slug: str, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[
        RepositoryGroupPermission, GetRepositoriesByWorkspaceByRepoSlugPermissionsConfigGroupsByGroupSlugErrorBody
    ]:
        """Returns the group permission for a given group slug and repository

        Only users with admin permission for the repository may access this resource.

        Permissions can be:

        * ``admin``
        * ``write``
        * ``read``
        * ``none``

        Args:
            group_slug: Slug of the requested group.
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
            url_template=self._server.default(
                "/repositories/{workspace}/{repo_slug}/permissions-config/groups/{group_slug}"
            ),
            path_params=[
                param[str]("group_slug", group_slug),
                param[str]("repo_slug", repo_slug),
                param[str]("workspace", workspace),
            ],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[RepositoryGroupPermission],
            error_mapper=get_repositories_by_workspace_by_repo_slug_permissions_config_groups_by_group_slug_error_mapper,
            request_options=request_options,
        )

    def get_repositories_by_workspace_by_repo_slug_permissions_config_users(
        self, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[
        PaginatedRepositoryUserPermissions, GetRepositoriesByWorkspaceByRepoSlugPermissionsConfigUsersErrorBody
    ]:
        """Returns a paginated list of explicit user permissions for the given repository. This endpoint does not
        support BBQL features.

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
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/permissions-config/users"),
            path_params=[param[str]("repo_slug", repo_slug), param[str]("workspace", workspace)],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[PaginatedRepositoryUserPermissions],
            error_mapper=get_repositories_by_workspace_by_repo_slug_permissions_config_users_error_mapper,
            request_options=request_options,
        )

    def get_repositories_by_workspace_by_repo_slug_permissions_config_users_by_selected_user_id(
        self,
        repo_slug: str,
        selected_user_id: str,
        workspace: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[
        RepositoryUserPermission, GetRepositoriesByWorkspaceByRepoSlugPermissionsConfigUsersBySelectedUserIdErrorBody
    ]:
        """Returns the explicit user permission for a given user and repository.

        Only users with admin permission for the repository may access this resource.

        Permissions can be:

        * ``admin``
        * ``write``
        * ``read``
        * ``none``

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            selected_user_id: This can either be the UUID of the account, surrounded by curly-braces, for example:
                ``{account UUID}``, OR an Atlassian Account ID.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/repositories/{workspace}/{repo_slug}/permissions-config/users/{selected_user_id}"
            ),
            path_params=[
                param[str]("repo_slug", repo_slug),
                param[str]("selected_user_id", selected_user_id),
                param[str]("workspace", workspace),
            ],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[RepositoryUserPermission],
            error_mapper=get_repositories_by_workspace_by_repo_slug_permissions_config_users_by_selected_user_id_error_mapper,
            request_options=request_options,
        )

    def get_repositories_by_workspace_by_repo_slug_src(
        self,
        repo_slug: str,
        workspace: str,
        *,
        format_: FormatOrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PaginatedTreeEntry, GetRepositoriesByWorkspaceByRepoSlugSrcErrorBody]:
        """This endpoint redirects the client to the directory listing of the root directory on the main branch.

        This is equivalent to directly hitting /2.0/repositories/{username}/{repo_slug}/src/{commit}/{path} without
        having to know the name or SHA1 of the repo's main branch.

        To create new commits, POST to this endpoint

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            format_: Instead of returning the file's contents, return the (json) meta data for it.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/src"),
            path_params=[param[str]("repo_slug", repo_slug), param[str]("workspace", workspace)],
            query_params=[param[FormatOrStr | None]("format", format_)],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[PaginatedTreeEntry],
            error_mapper=get_repositories_by_workspace_by_repo_slug_src_error_mapper,
            request_options=request_options,
        )

    def get_repositories_by_workspace_by_repo_slug_src_by_commit_by_path(
        self,
        commit: str,
        path: str,
        repo_slug: str,
        workspace: str,
        *,
        format_: Format1OrStr | None = None,
        q: str | None = None,
        sort: str | None = None,
        max_depth: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PaginatedTreeEntry, GetRepositoriesByWorkspaceByRepoSlugSrcByCommitByPathErrorBody]:
        """This endpoints is used to retrieve the contents of a single file, or the contents of a directory at a
        specified revision.

        Args:
            commit: The commit's SHA1.
            path: Path to the file.
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            format_: If 'meta' is provided, returns the (json) meta data for the contents of the file. If 'rendered' is
                provided, returns the contents of a non-binary file in HTML-formatted rendered markup. The 'rendered'
                option only supports these filetypes: ``.md``, ``.markdown``, ``.mkd``, ``.mkdn``, ``.mdown``,
                ``.text``, ``.rst``, and ``.textile``. Since Git does not generally track what text encoding scheme is
                used, this endpoint attempts to detect the most appropriate character encoding. While usually correct,
                determining the character encoding can be ambiguous which in exceptional cases can lead to
                misinterpretation of the characters. As such, the raw element in the response object should not be
                treated as equivalent to the file's actual contents.
            q: Optional filter expression as per `filtering and sorting </cloud/bitbucket/rest/intro/#filtering>`__.
            sort: Optional sorting parameter as per `filtering and sorting
                </cloud/bitbucket/rest/intro/#sorting-query-results>`__.
            max_depth: If provided, returns the contents of the repository and its subdirectories recursively until the
                specified max_depth of nested directories. When omitted, this defaults to 1.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/src/{commit}/{path}"),
            path_params=[
                param[str]("commit", commit),
                param[str]("path", path),
                param[str]("repo_slug", repo_slug),
                param[str]("workspace", workspace),
            ],
            query_params=[
                param[Format1OrStr | None]("format", format_),
                param[str | None]("q", q),
                param[str | None]("sort", sort),
                param[int | None]("max_depth", max_depth),
            ],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[PaginatedTreeEntry],
            error_mapper=get_repositories_by_workspace_by_repo_slug_src_by_commit_by_path_error_mapper,
            request_options=request_options,
        )

    def get_repositories_by_workspace_by_repo_slug_watchers(
        self, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[PaginatedAccounts, RawError]:
        """Returns a paginated list of all the watchers on the specified repository.

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
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/watchers"),
            path_params=[param[str]("repo_slug", repo_slug), param[str]("workspace", workspace)],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[PaginatedAccounts],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def get_user_permissions_repositories(
        self, *, q: str | None = None, sort: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[PaginatedRepositoryPermissions, RawError]:
        """**This endpoint is deprecated. Please use the workspace scoped alternative.**

        Returns an object for each repository the caller has explicit access to and their effective permission — the
        highest level of permission the caller has. This does not return public repositories that the user was not
        granted any specific permission in, and does not distinguish between explicit and implicit privileges.

        Permissions can be:

        * ``admin``
        * ``write``
        * ``read``

        Results may be further filtered or sorted by repository or permission by adding the following query string
        parameters:

        * ``q=repository.name="geordi"`` or ``q=permission>"read"``
        * ``sort=repository.name``

        Note that the query parameter values need to be URL escaped so that ``=`` would become ``%3D``.

        Args:
            q: Query string to narrow down the response as per `filtering and sorting
                </cloud/bitbucket/rest/intro/#filtering>`__.
            sort: Name of a response property sort the result by as per `filtering and sorting
                </cloud/bitbucket/rest/intro/#filtering>`__.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/user/permissions/repositories"),
            query_params=[param[str | None]("q", q), param[str | None]("sort", sort)],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[PaginatedRepositoryPermissions],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def get_user_workspaces_by_workspace_permissions_repositories(
        self,
        workspace: str,
        *,
        q: str | None = None,
        sort: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PaginatedRepositoryPermissions, GetUserWorkspacesByWorkspacePermissionsRepositoriesErrorBody]:
        """Returns an object for each repository the caller has explicit access to in the specified workspace and their
        effective permission — the highest level of permission the caller has. This does not return public repositories
        that the user was not granted any specific permission in, and does not distinguish between explicit and implicit
        privileges.

        Permissions can be:

        * ``admin``
        * ``write``
        * ``read``

        Results may be further filtered or sorted by repository or permission by adding the following query string
        parameters:

        * ``q=repository.name="bits"`` or ``q=permission>"read"``
        * ``sort=repository.name``

        Note that the query parameter values need to be URL escaped so that ``=`` would become ``%3D``.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            q: Query string to narrow down the response as per `filtering and sorting
                </cloud/bitbucket/rest/intro/#filtering>`__.
            sort: Name of a response property sort the result by as per `filtering and sorting
                </cloud/bitbucket/rest/intro/#filtering>`__.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/user/workspaces/{workspace}/permissions/repositories"),
            path_params=[param[str]("workspace", workspace)],
            query_params=[param[str | None]("q", q), param[str | None]("sort", sort)],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[PaginatedRepositoryPermissions],
            error_mapper=get_user_workspaces_by_workspace_permissions_repositories_error_mapper,
            request_options=request_options,
        )

    def post_repositories_by_workspace_by_repo_slug(
        self,
        repo_slug: str,
        workspace: str,
        *,
        body: RepositoryBitbucketRepositoriesApi | RepositoryBitbucketRepositoriesApiDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[RepositoryBitbucketRepositoriesApi, PostRepositoriesByWorkspaceByRepoSlugErrorBody]:
        """Creates a new repository.

        Note: In order to set the project for the newly created repository, pass in either the project key or the
        project UUID as part of the request body as shown in the examples below:

        ```
        $ curl -X POST -H "Content-Type: application/json" -d '{ "scm": "git", "project": { "key": "MARS"
        }
        }' https://api.bitbucket.org/2.0/repositories/teamsinspace/hablanding
        ```

        or

        ```
        $ curl -X POST -H "Content-Type: application/json" -d '{ "scm": "git", "project": { "key":
        "{ba516952-992a-4c2d-acbd-17d502922f96}"
        }
        }' https://api.bitbucket.org/2.0/repositories/teamsinspace/hablanding
        ```

        The project must be assigned for all repositories. If the project is not provided, the repository is
        automatically assigned to the oldest project in the workspace.

        Note: In the examples above, the workspace ID ``teamsinspace``, and/or the repository name ``hablanding`` can be
        replaced by UUIDs.

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            body: The repository that is to be created. Note that most object elements are optional. Elements "owner"
                and "full_name" are ignored as the URL implies them.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}"),
            path_params=[param[str]("repo_slug", repo_slug), param[str]("workspace", workspace)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[RepositoryBitbucketRepositoriesApi | RepositoryBitbucketRepositoriesApiDict | None](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[RepositoryBitbucketRepositoriesApi],
            error_mapper=post_repositories_by_workspace_by_repo_slug_error_mapper,
            request_options=request_options,
        )

    def post_repositories_by_workspace_by_repo_slug_forks(
        self,
        repo_slug: str,
        workspace: str,
        *,
        body: RepositoryBitbucketRepositoriesApi | RepositoryBitbucketRepositoriesApiDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[RepositoryBitbucketRepositoriesApi, RawError]:
        r"""Creates a new fork of the specified repository.

        #### Forking a repository

        To create a fork, specify the workspace explicitly as part of the request body:

        ```
        $ curl -X POST -u jdoe https://api.bitbucket.org/2.0/repositories/atlassian/bbql/forks \ -H 'Content-Type:
        application/json' -d '{ "name": "bbql_fork", "workspace": { "slug": "atlassian"
        }
        }'
        ```

        To fork a repository into the same workspace, also specify a new ``name``.

        When you specify a value for ``name``, it will also affect the ``slug``. The ``slug`` is reflected in the
        repository URL of the new fork. It is derived from ``name`` by substituting non-ASCII characters, removes
        whitespace, and changes characters to lower case. For example, ``My repo`` would turn into ``my_repo``.

        You need contributor access to create new forks within a workspace.

        #### Change the properties of a new fork

        By default the fork inherits most of its properties from the parent. However, since the optional POST body
        document follows the normal ``repository`` JSON schema and you can override the new fork's properties.

        Properties that can be overridden include:

        * description
        * fork_policy
        * language
        * mainbranch
        * is_private (note that a private repo's fork_policy might prohibit
        the creation of public forks, in which ``is_private=False`` would fail)
        * has_issues (to initialize or disable the new repo's issue tracker --
        note that the actual contents of the parent repository's issue tracker are not copied during forking)
        * has_wiki (to initialize or disable the new repo's wiki --
        note that the actual contents of the parent repository's wiki are not copied during forking)
        * project (when forking into a private project, the fork's ``is_private``
        must be ``true``)

        Properties that cannot be modified include:

        * scm
        * parent
        * full_name

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            body: A repository object. This can be left blank.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/forks"),
            path_params=[param[str]("repo_slug", repo_slug), param[str]("workspace", workspace)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[RepositoryBitbucketRepositoriesApi | RepositoryBitbucketRepositoriesApiDict | None](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[RepositoryBitbucketRepositoriesApi],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def post_repositories_by_workspace_by_repo_slug_hooks(
        self, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[WebhookSubscription, PostRepositoriesByWorkspaceByRepoSlugHooksErrorBody]:
        """Creates a new webhook on the specified repository.

        Example:

        ```
        $ curl -X POST -u credentials -H 'Content-Type: application/json'
        https://api.bitbucket.org/2.0/repositories/my-workspace/my-repo-slug/hooks -d '
        {
        "description": "Webhook Description", "url": "https://example.com/", "active": true, "secret": "this is a really
        bad secret", "events": [ "repo:push", "issue:created", "issue:updated"
        ]
        }'
        ```

        When the ``secret`` is provided it will be used as the key to generate a HMAC digest value sent in the
        ``X-Hub-Signature`` header at delivery time. Passing a ``null`` or empty ``secret`` or not passing a ``secret``
        will leave the webhook's secret unset. Bitbucket only generates the ``X-Hub-Signature`` when the webhook's
        secret is set.

        Note that this call requires the webhook scope, as well as any scope that applies to the events that the webhook
        subscribes to. In the example above that means: ``webhook``, ``repository`` and ``issue``.

        Also note that the ``url`` must properly resolve and cannot be an internal, non-routed address.

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
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/hooks"),
            path_params=[param[str]("repo_slug", repo_slug), param[str]("workspace", workspace)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[WebhookSubscription],
            error_mapper=post_repositories_by_workspace_by_repo_slug_hooks_error_mapper,
            request_options=request_options,
        )

    def post_repositories_by_workspace_by_repo_slug_src(
        self,
        repo_slug: str,
        workspace: str,
        *,
        message: str | None = None,
        author: str | None = None,
        parents: str | None = None,
        files: str | None = None,
        branch: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, PostRepositoriesByWorkspaceByRepoSlugSrcErrorBody]:
        """This endpoint is used to create new commits in the repository by uploading files.

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            message: The commit message. When omitted, Bitbucket uses a canned string.
            author: The raw string to be used as the new commit's author. This string follows the format ``Erik van
                Zijst <evzijst@atlassian.com>``. When omitted, Bitbucket uses the authenticated user's full/display name
                and primary email address. Commits cannot be created anonymously.
            parents: #### Deprecation Notice: Support for specifying multiple parent commits is deprecated and will be
                removed in a future release. Only a single SHA1 is accepted. A SHA1 of the commit that should be the
                parent of the newly created commit. When omitted, the new commit will inherit from and become a child of
                the main branch's tip/HEAD commit.
            files: Optional field that declares the files that the request is manipulating. When adding a new file to a
                repo, or when overwriting an existing file, the client can just upload the full contents of the file in
                a normal form field and the use of this ``files`` meta data field is redundant. However, when the
                ``files`` field contains a file path that does not have a corresponding, identically-named form field,
                then Bitbucket interprets that as the client wanting to replace the named file with the null set and the
                file is deleted instead. Paths in the repo that are referenced in neither files nor an individual file
                field, remain unchanged and carry over from the parent to the new commit. This API does not support
                renaming as an explicit feature. To rename a file, simply delete it and recreate it under the new name
                in the same commit.
            branch: The name of the branch that the new commit should be created on. When omitted, the commit will be
                created on top of the main branch and will become the main branch's new head. When a branch name is
                provided that already exists in the repo, then the commit will be created on top of that branch. In this
                case, *if* a parent SHA1 was also provided, then it is asserted that the parent is the branch's tip/HEAD
                at the time the request is made. When this is not the case, a 409 is returned. When a new branch name is
                specified (that does not already exist in the repo), and no parent SHA1s are provided, then the new
                commit will inherit from the current main branch's tip/HEAD commit, but not advance the main branch. The
                new commit will be the new branch. When the request *also* specifies a parent SHA1, then the new commit
                and branch are created directly on top of the parent commit, regardless of the state of the main branch.
                When a branch name is not specified, but a parent SHA1 is provided, then Bitbucket asserts that it
                represents the main branch's current HEAD/tip, or a 409 is returned. When a branch name is not specified
                and the repo is empty, the new commit will become the repo's root commit and will be on the main branch.
                When a branch name is specified and the repo is empty, the new commit will become the repo's root commit
                and also define the repo's main branch going forward. This API cannot be used to create additional root
                commits in non-empty repos. The branch field cannot be repeated. As a side effect, this API can be used
                to create a new branch without modifying any files, by specifying a new branch name in this field,
                together with ``parents``, but omitting the ``files`` fields, while not sending any files. This will
                create a new commit and branch with the same contents as the first parent. The diff of this commit
                against its first parent will be empty.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/src"),
            path_params=[param[str]("repo_slug", repo_slug), param[str]("workspace", workspace)],
            query_params=[
                param[str | None]("message", message),
                param[str | None]("author", author),
                param[str | None]("parents", parents),
                param[str | None]("files", files),
                param[str | None]("branch", branch),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=empty_response,
            error_mapper=post_repositories_by_workspace_by_repo_slug_src_error_mapper,
            request_options=request_options,
        )

    def put_repositories_by_workspace_by_repo_slug(
        self,
        repo_slug: str,
        workspace: str,
        *,
        body: RepositoryBitbucketRepositoriesApi | RepositoryBitbucketRepositoriesApiDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[RepositoryBitbucketRepositoriesApi, PutRepositoriesByWorkspaceByRepoSlugErrorBody]:
        """Since this endpoint can be used to both update and to create a repository, the request body depends on the
        intent.

        #### Creation

        See the POST documentation for the repository endpoint for an example of the request body.

        #### Update

        Note: Changing the ``name`` of the repository will cause the location to be changed. This is because the URL of
        the repo is derived from the name (a process called slugification). In such a scenario, it is possible for the
        request to fail if the newly created slug conflicts with an existing repository's slug. But if there is no
        conflict, the new location will be returned in the ``Location`` header of the response.

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            body: The repository that is to be updated. Note that the elements "owner" and "full_name" are ignored since
                the URL implies them.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}"),
            path_params=[param[str]("repo_slug", repo_slug), param[str]("workspace", workspace)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[RepositoryBitbucketRepositoriesApi | RepositoryBitbucketRepositoriesApiDict | None](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[RepositoryBitbucketRepositoriesApi],
            error_mapper=put_repositories_by_workspace_by_repo_slug_error_mapper,
            request_options=request_options,
        )

    def put_repositories_by_workspace_by_repo_slug_hooks_by_uid(
        self, repo_slug: str, uid: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[WebhookSubscription, PutRepositoriesByWorkspaceByRepoSlugHooksByUidErrorBody]:
        """Updates the specified webhook subscription.

        The following properties can be mutated:

        * ``description``
        * ``url``
        * ``secret``
        * ``active``
        * ``events``

        The hook's secret is used as a key to generate the HMAC hex digest sent in the ``X-Hub-Signature`` header at
        delivery time. This signature is only generated when the hook has a secret.

        Set the hook's secret by passing the new value in the ``secret`` field. Passing a ``null`` value in the
        ``secret`` field will remove the secret from the hook. The hook's secret can be left unchanged by not passing
        the ``secret`` field in the request.

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            uid: Installed webhook's ID
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/hooks/{uid}"),
            path_params=[
                param[str]("repo_slug", repo_slug), param[str]("uid", uid), param[str]("workspace", workspace)
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[WebhookSubscription],
            error_mapper=put_repositories_by_workspace_by_repo_slug_hooks_by_uid_error_mapper,
            request_options=request_options,
        )

    def put_repositories_by_workspace_by_repo_slug_override_settings(
        self, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, PutRepositoriesByWorkspaceByRepoSlugOverrideSettingsErrorBody]:
        """Send a ``PUT`` request.

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
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/override-settings"),
            path_params=[param[str]("repo_slug", repo_slug), param[str]("workspace", workspace)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=empty_response,
            error_mapper=put_repositories_by_workspace_by_repo_slug_override_settings_error_mapper,
            request_options=request_options,
        )

    def put_repositories_by_workspace_by_repo_slug_permissions_config_groups_by_group_slug(
        self,
        group_slug: str,
        repo_slug: str,
        workspace: str,
        body: (
            BitbucketAppsPermissionsSerializersRepoPermissionUpdateSchema
            | BitbucketAppsPermissionsSerializersRepoPermissionUpdateSchemaDict
        ),
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[
        RepositoryGroupPermission, PutRepositoriesByWorkspaceByRepoSlugPermissionsConfigGroupsByGroupSlugErrorBody
    ]:
        """Updates the group permission, or grants a new permission if one does not already exist.

        Only users with admin permission for the repository may access this resource.

        The only authentication method supported for this endpoint is via app passwords.

        Permissions can be:

        * ``admin``
        * ``write``
        * ``read``

        Args:
            group_slug: Slug of the requested group.
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            body: The permission to grant
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default(
                "/repositories/{workspace}/{repo_slug}/permissions-config/groups/{group_slug}"
            ),
            path_params=[
                param[str]("group_slug", group_slug),
                param[str]("repo_slug", repo_slug),
                param[str]("workspace", workspace),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[
                (
                    BitbucketAppsPermissionsSerializersRepoPermissionUpdateSchema
                    | BitbucketAppsPermissionsSerializersRepoPermissionUpdateSchemaDict
                )
            ](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[RepositoryGroupPermission],
            error_mapper=put_repositories_by_workspace_by_repo_slug_permissions_config_groups_by_group_slug_error_mapper,
            request_options=request_options,
        )

    def put_repositories_by_workspace_by_repo_slug_permissions_config_users_by_selected_user_id(
        self,
        repo_slug: str,
        selected_user_id: str,
        workspace: str,
        body: (
            BitbucketAppsPermissionsSerializersRepoPermissionUpdateSchema
            | BitbucketAppsPermissionsSerializersRepoPermissionUpdateSchemaDict
        ),
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[
        RepositoryUserPermission, PutRepositoriesByWorkspaceByRepoSlugPermissionsConfigUsersBySelectedUserIdErrorBody
    ]:
        """Updates the explicit user permission for a given user and repository. The selected user must be a member of
        the workspace, and cannot be the workspace owner. Only users with admin permission for the repository may access
        this resource.

        The only authentication method for this endpoint is via app passwords.

        Permissions can be:

        * ``admin``
        * ``write``
        * ``read``

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            selected_user_id: This can either be the UUID of the account, surrounded by curly-braces, for example:
                ``{account UUID}``, OR an Atlassian Account ID.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            body: The permission to grant
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default(
                "/repositories/{workspace}/{repo_slug}/permissions-config/users/{selected_user_id}"
            ),
            path_params=[
                param[str]("repo_slug", repo_slug),
                param[str]("selected_user_id", selected_user_id),
                param[str]("workspace", workspace),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[
                (
                    BitbucketAppsPermissionsSerializersRepoPermissionUpdateSchema
                    | BitbucketAppsPermissionsSerializersRepoPermissionUpdateSchemaDict
                )
            ](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[RepositoryUserPermission],
            error_mapper=put_repositories_by_workspace_by_repo_slug_permissions_config_users_by_selected_user_id_error_mapper,
            request_options=request_options,
        )


class AsyncRepositoriesWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def delete_repositories_by_workspace_by_repo_slug(
        self,
        repo_slug: str,
        workspace: str,
        *,
        redirect_to: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DeleteRepositoriesByWorkspaceByRepoSlugErrorBody]:
        """Deletes the repository. This is an irreversible operation.

        This does not affect its forks.

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            redirect_to: If a repository has been moved to a new location, use this parameter to show users a friendly
                message in the Bitbucket UI that the repository has moved to a new location. However, a GET to this
                endpoint will still return a 404.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}"),
            path_params=[param[str]("repo_slug", repo_slug), param[str]("workspace", workspace)],
            query_params=[param[str | None]("redirect_to", redirect_to)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_empty_response,
            error_mapper=delete_repositories_by_workspace_by_repo_slug_error_mapper,
            request_options=request_options,
        )

    async def delete_repositories_by_workspace_by_repo_slug_hooks_by_uid(
        self, repo_slug: str, uid: str, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteRepositoriesByWorkspaceByRepoSlugHooksByUidErrorBody]:
        """Deletes the specified webhook subscription from the given repository.

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            uid: Installed webhook's ID
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/hooks/{uid}"),
            path_params=[
                param[str]("repo_slug", repo_slug), param[str]("uid", uid), param[str]("workspace", workspace)
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_empty_response,
            error_mapper=delete_repositories_by_workspace_by_repo_slug_hooks_by_uid_error_mapper,
            request_options=request_options,
        )

    async def delete_repositories_by_workspace_by_repo_slug_permissions_config_groups_by_group_slug(
        self,
        group_slug: str,
        repo_slug: str,
        workspace: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DeleteRepositoriesByWorkspaceByRepoSlugPermissionsConfigGroupsByGroupSlugErrorBody]:
        """Deletes the repository group permission between the requested repository and group, if one exists.

        Only users with admin permission for the repository may access this resource.

        The only authentication method supported for this endpoint is via app passwords.

        Args:
            group_slug: Slug of the requested group.
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
            url_template=self._server.default(
                "/repositories/{workspace}/{repo_slug}/permissions-config/groups/{group_slug}"
            ),
            path_params=[
                param[str]("group_slug", group_slug),
                param[str]("repo_slug", repo_slug),
                param[str]("workspace", workspace),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_empty_response,
            error_mapper=delete_repositories_by_workspace_by_repo_slug_permissions_config_groups_by_group_slug_error_mapper,
            request_options=request_options,
        )

    async def delete_repositories_by_workspace_by_repo_slug_permissions_config_users_by_selected_user_id(
        self,
        repo_slug: str,
        selected_user_id: str,
        workspace: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DeleteRepositoriesByWorkspaceByRepoSlugPermissionsConfigUsersBySelectedUserIdErrorBody]:
        """Deletes the repository user permission between the requested repository and user, if one exists.

        Only users with admin permission for the repository may access this resource.

        The only authentication method for this endpoint is via app passwords.

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            selected_user_id: This can either be the UUID of the account, surrounded by curly-braces, for example:
                ``{account UUID}``, OR an Atlassian Account ID.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default(
                "/repositories/{workspace}/{repo_slug}/permissions-config/users/{selected_user_id}"
            ),
            path_params=[
                param[str]("repo_slug", repo_slug),
                param[str]("selected_user_id", selected_user_id),
                param[str]("workspace", workspace),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_empty_response,
            error_mapper=delete_repositories_by_workspace_by_repo_slug_permissions_config_users_by_selected_user_id_error_mapper,
            request_options=request_options,
        )

    async def get_repositories(
        self,
        *,
        after: str | None = None,
        role: Role1OrStr | None = None,
        q: str | None = None,
        sort: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PaginatedRepositories, RawError]:
        """**This endpoint is deprecated. Please use the workspace scoped alternative.**

        Returns a paginated list of all public repositories.

        This endpoint also supports filtering and sorting of the results. See filtering and sorting for more details.

        Args:
            after: Filter the results to include only repositories created on or after this `ISO-8601
                <https://en.wikipedia.org/wiki/ISO_8601>`__ timestamp. Example: ``YYYY-MM-DDTHH:mm:ss.sssZ``
            role: Filters the result based on the authenticated user's role on each repository. * **member**: returns
                repositories to which the user has explicit read access * **contributor**: returns repositories to which
                the user has explicit write access * **admin**: returns repositories to which the user has explicit
                administrator access * **owner**: returns all repositories owned by the current user
            q: Query string to narrow down the response as per `filtering and sorting
                </cloud/bitbucket/rest/intro/#filtering>`__. ``role`` parameter must also be specified.
            sort: Field by which the results should be sorted as per `filtering and sorting
                </cloud/bitbucket/rest/intro/#filtering>`__.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/repositories"),
            query_params=[
                param[str | None]("after", after),
                param[Role1OrStr | None]("role", role),
                param[str | None]("q", q),
                param[str | None]("sort", sort),
            ],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[PaginatedRepositories],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def get_repositories_by_workspace(
        self,
        workspace: str,
        *,
        role: Role1OrStr | None = None,
        q: str | None = None,
        sort: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PaginatedRepositories, GetRepositoriesByWorkspaceErrorBody]:
        """Returns a paginated list of all repositories owned by the specified workspace.

        The result can be narrowed down based on the authenticated user's role.

        E.g. with ``?role=contributor``, only those repositories that the authenticated user has write access to are
        returned (this includes any repo the user is an admin on, as that implies write access).

        This endpoint also supports filtering and sorting of the results. See filtering and sorting for more details.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            role: Filters the result based on the authenticated user's role on each repository. * **member**: returns
                repositories to which the user has explicit read access * **contributor**: returns repositories to which
                the user has explicit write access * **admin**: returns repositories to which the user has explicit
                administrator access * **owner**: returns all repositories owned by the current user
            q: Query string to narrow down the response as per `filtering and sorting
                </cloud/bitbucket/rest/intro/#filtering>`__.
            sort: Field by which the results should be sorted as per `filtering and sorting
                </cloud/bitbucket/rest/intro/#filtering>`__.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/repositories/{workspace}"),
            path_params=[param[str]("workspace", workspace)],
            query_params=[
                param[Role1OrStr | None]("role", role), param[str | None]("q", q), param[str | None]("sort", sort)
            ],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[PaginatedRepositories],
            error_mapper=get_repositories_by_workspace_error_mapper,
            request_options=request_options,
        )

    async def get_repositories_by_workspace_by_repo_slug(
        self, repo_slug: str, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[RepositoryBitbucketRepositoriesApi, GetRepositoriesByWorkspaceByRepoSlugErrorBody]:
        """Returns the object describing this repository.

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
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}"),
            path_params=[param[str]("repo_slug", repo_slug), param[str]("workspace", workspace)],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[RepositoryBitbucketRepositoriesApi],
            error_mapper=get_repositories_by_workspace_by_repo_slug_error_mapper,
            request_options=request_options,
        )

    async def get_repositories_by_workspace_by_repo_slug_filehistory_by_commit_by_path(
        self,
        commit: str,
        path: str,
        repo_slug: str,
        workspace: str,
        *,
        renames: str | None = None,
        q: str | None = None,
        sort: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PaginatedFiles, GetRepositoriesByWorkspaceByRepoSlugFilehistoryByCommitByPathErrorBody]:
        r"""Returns a paginated list of commits that modified the specified file.

        Commits are returned in reverse chronological order. This is roughly equivalent to the following commands:

        $ git log --follow --date-order

        By default, Bitbucket will follow renames and the path name in the returned entries reflects that. This can be
        turned off using the ``?renames=false`` query parameter.

        Results are returned in descending chronological order by default, and like most endpoints you can filter and
        sort the response to only provide exactly the data you want.

        The example response returns commits made before 2011-05-18 against a file named ``README.rst``. The results are
        filtered to only return the path and date. This request can be made using:

        ```
        $ curl 'https://api.bitbucket.org/2.0/repositories/evzijst/dogslow/filehistory/master/README.rst'\
        '?fields=values.next,values.path,values.commit.date&q=commit.date<=2011-05-18'
        ```

        In the response you can see that the file was renamed to ``README.rst`` by the commit made on 2011-05-16, and
        was previously named ``README.txt``.

        Args:
            commit: The commit's SHA1.
            path: Path to the file.
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            renames: When ``true``, Bitbucket will follow the history of the file across renames (this is the default
                behavior). This can be turned off by specifying ``false``.
            q: Query string to narrow down the response as per `filtering and sorting
                </cloud/bitbucket/rest/intro/#filtering>`__.
            sort: Name of a response property sort the result by as per `filtering and sorting
                </cloud/bitbucket/rest/intro/#sorting-query-results>`__.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/filehistory/{commit}/{path}"),
            path_params=[
                param[str]("commit", commit),
                param[str]("path", path),
                param[str]("repo_slug", repo_slug),
                param[str]("workspace", workspace),
            ],
            query_params=[
                param[str | None]("renames", renames), param[str | None]("q", q), param[str | None]("sort", sort)
            ],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[PaginatedFiles],
            error_mapper=get_repositories_by_workspace_by_repo_slug_filehistory_by_commit_by_path_error_mapper,
            request_options=request_options,
        )

    async def get_repositories_by_workspace_by_repo_slug_forks(
        self,
        repo_slug: str,
        workspace: str,
        *,
        role: Role1OrStr | None = None,
        q: str | None = None,
        sort: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PaginatedRepositories, RawError]:
        """Returns a paginated list of all the forks of the specified repository.

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            role: Filters the result based on the authenticated user's role on each repository. * **member**: returns
                repositories to which the user has explicit read access * **contributor**: returns repositories to which
                the user has explicit write access * **admin**: returns repositories to which the user has explicit
                administrator access * **owner**: returns all repositories owned by the current user
            q: Query string to narrow down the response as per `filtering and sorting
                </cloud/bitbucket/rest/intro/#filtering>`__.
            sort: Field by which the results should be sorted as per `filtering and sorting
                </cloud/bitbucket/rest/intro/#filtering>`__.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/forks"),
            path_params=[param[str]("repo_slug", repo_slug), param[str]("workspace", workspace)],
            query_params=[
                param[Role1OrStr | None]("role", role), param[str | None]("q", q), param[str | None]("sort", sort)
            ],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[PaginatedRepositories],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def get_repositories_by_workspace_by_repo_slug_hooks(
        self, repo_slug: str, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[PaginatedWebhookSubscriptions, GetRepositoriesByWorkspaceByRepoSlugHooksErrorBody]:
        """Returns a paginated list of webhooks installed on this repository.

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
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/hooks"),
            path_params=[param[str]("repo_slug", repo_slug), param[str]("workspace", workspace)],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[PaginatedWebhookSubscriptions],
            error_mapper=get_repositories_by_workspace_by_repo_slug_hooks_error_mapper,
            request_options=request_options,
        )

    async def get_repositories_by_workspace_by_repo_slug_hooks_by_uid(
        self, repo_slug: str, uid: str, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[WebhookSubscription, GetRepositoriesByWorkspaceByRepoSlugHooksByUidErrorBody]:
        """Returns the webhook with the specified id installed on the specified repository.

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            uid: Installed webhook's ID
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/hooks/{uid}"),
            path_params=[
                param[str]("repo_slug", repo_slug), param[str]("uid", uid), param[str]("workspace", workspace)
            ],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[WebhookSubscription],
            error_mapper=get_repositories_by_workspace_by_repo_slug_hooks_by_uid_error_mapper,
            request_options=request_options,
        )

    async def get_repositories_by_workspace_by_repo_slug_override_settings(
        self, repo_slug: str, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[RepositoryInheritanceState, GetRepositoriesByWorkspaceByRepoSlugOverrideSettingsErrorBody]:
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
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/override-settings"),
            path_params=[param[str]("repo_slug", repo_slug), param[str]("workspace", workspace)],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[RepositoryInheritanceState],
            error_mapper=get_repositories_by_workspace_by_repo_slug_override_settings_error_mapper,
            request_options=request_options,
        )

    async def get_repositories_by_workspace_by_repo_slug_permissions_config_groups(
        self, repo_slug: str, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[
        PaginatedRepositoryGroupPermissions, GetRepositoriesByWorkspaceByRepoSlugPermissionsConfigGroupsErrorBody
    ]:
        """Returns a paginated list of explicit group permissions for the given repository. This endpoint does not
        support BBQL features.

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
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/permissions-config/groups"),
            path_params=[param[str]("repo_slug", repo_slug), param[str]("workspace", workspace)],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[PaginatedRepositoryGroupPermissions],
            error_mapper=get_repositories_by_workspace_by_repo_slug_permissions_config_groups_error_mapper,
            request_options=request_options,
        )

    async def get_repositories_by_workspace_by_repo_slug_permissions_config_groups_by_group_slug(
        self,
        group_slug: str,
        repo_slug: str,
        workspace: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[
        RepositoryGroupPermission, GetRepositoriesByWorkspaceByRepoSlugPermissionsConfigGroupsByGroupSlugErrorBody
    ]:
        """Returns the group permission for a given group slug and repository

        Only users with admin permission for the repository may access this resource.

        Permissions can be:

        * ``admin``
        * ``write``
        * ``read``
        * ``none``

        Args:
            group_slug: Slug of the requested group.
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
            url_template=self._server.default(
                "/repositories/{workspace}/{repo_slug}/permissions-config/groups/{group_slug}"
            ),
            path_params=[
                param[str]("group_slug", group_slug),
                param[str]("repo_slug", repo_slug),
                param[str]("workspace", workspace),
            ],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[RepositoryGroupPermission],
            error_mapper=get_repositories_by_workspace_by_repo_slug_permissions_config_groups_by_group_slug_error_mapper,
            request_options=request_options,
        )

    async def get_repositories_by_workspace_by_repo_slug_permissions_config_users(
        self, repo_slug: str, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[
        PaginatedRepositoryUserPermissions, GetRepositoriesByWorkspaceByRepoSlugPermissionsConfigUsersErrorBody
    ]:
        """Returns a paginated list of explicit user permissions for the given repository. This endpoint does not
        support BBQL features.

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
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/permissions-config/users"),
            path_params=[param[str]("repo_slug", repo_slug), param[str]("workspace", workspace)],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[PaginatedRepositoryUserPermissions],
            error_mapper=get_repositories_by_workspace_by_repo_slug_permissions_config_users_error_mapper,
            request_options=request_options,
        )

    async def get_repositories_by_workspace_by_repo_slug_permissions_config_users_by_selected_user_id(
        self,
        repo_slug: str,
        selected_user_id: str,
        workspace: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[
        RepositoryUserPermission, GetRepositoriesByWorkspaceByRepoSlugPermissionsConfigUsersBySelectedUserIdErrorBody
    ]:
        """Returns the explicit user permission for a given user and repository.

        Only users with admin permission for the repository may access this resource.

        Permissions can be:

        * ``admin``
        * ``write``
        * ``read``
        * ``none``

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            selected_user_id: This can either be the UUID of the account, surrounded by curly-braces, for example:
                ``{account UUID}``, OR an Atlassian Account ID.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/repositories/{workspace}/{repo_slug}/permissions-config/users/{selected_user_id}"
            ),
            path_params=[
                param[str]("repo_slug", repo_slug),
                param[str]("selected_user_id", selected_user_id),
                param[str]("workspace", workspace),
            ],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[RepositoryUserPermission],
            error_mapper=get_repositories_by_workspace_by_repo_slug_permissions_config_users_by_selected_user_id_error_mapper,
            request_options=request_options,
        )

    async def get_repositories_by_workspace_by_repo_slug_src(
        self,
        repo_slug: str,
        workspace: str,
        *,
        format_: FormatOrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PaginatedTreeEntry, GetRepositoriesByWorkspaceByRepoSlugSrcErrorBody]:
        """This endpoint redirects the client to the directory listing of the root directory on the main branch.

        This is equivalent to directly hitting /2.0/repositories/{username}/{repo_slug}/src/{commit}/{path} without
        having to know the name or SHA1 of the repo's main branch.

        To create new commits, POST to this endpoint

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            format_: Instead of returning the file's contents, return the (json) meta data for it.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/src"),
            path_params=[param[str]("repo_slug", repo_slug), param[str]("workspace", workspace)],
            query_params=[param[FormatOrStr | None]("format", format_)],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[PaginatedTreeEntry],
            error_mapper=get_repositories_by_workspace_by_repo_slug_src_error_mapper,
            request_options=request_options,
        )

    async def get_repositories_by_workspace_by_repo_slug_src_by_commit_by_path(
        self,
        commit: str,
        path: str,
        repo_slug: str,
        workspace: str,
        *,
        format_: Format1OrStr | None = None,
        q: str | None = None,
        sort: str | None = None,
        max_depth: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PaginatedTreeEntry, GetRepositoriesByWorkspaceByRepoSlugSrcByCommitByPathErrorBody]:
        """This endpoints is used to retrieve the contents of a single file, or the contents of a directory at a
        specified revision.

        Args:
            commit: The commit's SHA1.
            path: Path to the file.
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            format_: If 'meta' is provided, returns the (json) meta data for the contents of the file. If 'rendered' is
                provided, returns the contents of a non-binary file in HTML-formatted rendered markup. The 'rendered'
                option only supports these filetypes: ``.md``, ``.markdown``, ``.mkd``, ``.mkdn``, ``.mdown``,
                ``.text``, ``.rst``, and ``.textile``. Since Git does not generally track what text encoding scheme is
                used, this endpoint attempts to detect the most appropriate character encoding. While usually correct,
                determining the character encoding can be ambiguous which in exceptional cases can lead to
                misinterpretation of the characters. As such, the raw element in the response object should not be
                treated as equivalent to the file's actual contents.
            q: Optional filter expression as per `filtering and sorting </cloud/bitbucket/rest/intro/#filtering>`__.
            sort: Optional sorting parameter as per `filtering and sorting
                </cloud/bitbucket/rest/intro/#sorting-query-results>`__.
            max_depth: If provided, returns the contents of the repository and its subdirectories recursively until the
                specified max_depth of nested directories. When omitted, this defaults to 1.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/src/{commit}/{path}"),
            path_params=[
                param[str]("commit", commit),
                param[str]("path", path),
                param[str]("repo_slug", repo_slug),
                param[str]("workspace", workspace),
            ],
            query_params=[
                param[Format1OrStr | None]("format", format_),
                param[str | None]("q", q),
                param[str | None]("sort", sort),
                param[int | None]("max_depth", max_depth),
            ],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[PaginatedTreeEntry],
            error_mapper=get_repositories_by_workspace_by_repo_slug_src_by_commit_by_path_error_mapper,
            request_options=request_options,
        )

    async def get_repositories_by_workspace_by_repo_slug_watchers(
        self, repo_slug: str, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[PaginatedAccounts, RawError]:
        """Returns a paginated list of all the watchers on the specified repository.

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
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/watchers"),
            path_params=[param[str]("repo_slug", repo_slug), param[str]("workspace", workspace)],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[PaginatedAccounts],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def get_user_permissions_repositories(
        self, *, q: str | None = None, sort: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[PaginatedRepositoryPermissions, RawError]:
        """**This endpoint is deprecated. Please use the workspace scoped alternative.**

        Returns an object for each repository the caller has explicit access to and their effective permission — the
        highest level of permission the caller has. This does not return public repositories that the user was not
        granted any specific permission in, and does not distinguish between explicit and implicit privileges.

        Permissions can be:

        * ``admin``
        * ``write``
        * ``read``

        Results may be further filtered or sorted by repository or permission by adding the following query string
        parameters:

        * ``q=repository.name="geordi"`` or ``q=permission>"read"``
        * ``sort=repository.name``

        Note that the query parameter values need to be URL escaped so that ``=`` would become ``%3D``.

        Args:
            q: Query string to narrow down the response as per `filtering and sorting
                </cloud/bitbucket/rest/intro/#filtering>`__.
            sort: Name of a response property sort the result by as per `filtering and sorting
                </cloud/bitbucket/rest/intro/#filtering>`__.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/user/permissions/repositories"),
            query_params=[param[str | None]("q", q), param[str | None]("sort", sort)],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[PaginatedRepositoryPermissions],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def get_user_workspaces_by_workspace_permissions_repositories(
        self,
        workspace: str,
        *,
        q: str | None = None,
        sort: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PaginatedRepositoryPermissions, GetUserWorkspacesByWorkspacePermissionsRepositoriesErrorBody]:
        """Returns an object for each repository the caller has explicit access to in the specified workspace and their
        effective permission — the highest level of permission the caller has. This does not return public repositories
        that the user was not granted any specific permission in, and does not distinguish between explicit and implicit
        privileges.

        Permissions can be:

        * ``admin``
        * ``write``
        * ``read``

        Results may be further filtered or sorted by repository or permission by adding the following query string
        parameters:

        * ``q=repository.name="bits"`` or ``q=permission>"read"``
        * ``sort=repository.name``

        Note that the query parameter values need to be URL escaped so that ``=`` would become ``%3D``.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            q: Query string to narrow down the response as per `filtering and sorting
                </cloud/bitbucket/rest/intro/#filtering>`__.
            sort: Name of a response property sort the result by as per `filtering and sorting
                </cloud/bitbucket/rest/intro/#filtering>`__.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/user/workspaces/{workspace}/permissions/repositories"),
            path_params=[param[str]("workspace", workspace)],
            query_params=[param[str | None]("q", q), param[str | None]("sort", sort)],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[PaginatedRepositoryPermissions],
            error_mapper=get_user_workspaces_by_workspace_permissions_repositories_error_mapper,
            request_options=request_options,
        )

    async def post_repositories_by_workspace_by_repo_slug(
        self,
        repo_slug: str,
        workspace: str,
        *,
        body: RepositoryBitbucketRepositoriesApi | RepositoryBitbucketRepositoriesApiDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[RepositoryBitbucketRepositoriesApi, PostRepositoriesByWorkspaceByRepoSlugErrorBody]:
        """Creates a new repository.

        Note: In order to set the project for the newly created repository, pass in either the project key or the
        project UUID as part of the request body as shown in the examples below:

        ```
        $ curl -X POST -H "Content-Type: application/json" -d '{ "scm": "git", "project": { "key": "MARS"
        }
        }' https://api.bitbucket.org/2.0/repositories/teamsinspace/hablanding
        ```

        or

        ```
        $ curl -X POST -H "Content-Type: application/json" -d '{ "scm": "git", "project": { "key":
        "{ba516952-992a-4c2d-acbd-17d502922f96}"
        }
        }' https://api.bitbucket.org/2.0/repositories/teamsinspace/hablanding
        ```

        The project must be assigned for all repositories. If the project is not provided, the repository is
        automatically assigned to the oldest project in the workspace.

        Note: In the examples above, the workspace ID ``teamsinspace``, and/or the repository name ``hablanding`` can be
        replaced by UUIDs.

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            body: The repository that is to be created. Note that most object elements are optional. Elements "owner"
                and "full_name" are ignored as the URL implies them.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}"),
            path_params=[param[str]("repo_slug", repo_slug), param[str]("workspace", workspace)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[RepositoryBitbucketRepositoriesApi | RepositoryBitbucketRepositoriesApiDict | None](body),
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[RepositoryBitbucketRepositoriesApi],
            error_mapper=post_repositories_by_workspace_by_repo_slug_error_mapper,
            request_options=request_options,
        )

    async def post_repositories_by_workspace_by_repo_slug_forks(
        self,
        repo_slug: str,
        workspace: str,
        *,
        body: RepositoryBitbucketRepositoriesApi | RepositoryBitbucketRepositoriesApiDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[RepositoryBitbucketRepositoriesApi, RawError]:
        r"""Creates a new fork of the specified repository.

        #### Forking a repository

        To create a fork, specify the workspace explicitly as part of the request body:

        ```
        $ curl -X POST -u jdoe https://api.bitbucket.org/2.0/repositories/atlassian/bbql/forks \ -H 'Content-Type:
        application/json' -d '{ "name": "bbql_fork", "workspace": { "slug": "atlassian"
        }
        }'
        ```

        To fork a repository into the same workspace, also specify a new ``name``.

        When you specify a value for ``name``, it will also affect the ``slug``. The ``slug`` is reflected in the
        repository URL of the new fork. It is derived from ``name`` by substituting non-ASCII characters, removes
        whitespace, and changes characters to lower case. For example, ``My repo`` would turn into ``my_repo``.

        You need contributor access to create new forks within a workspace.

        #### Change the properties of a new fork

        By default the fork inherits most of its properties from the parent. However, since the optional POST body
        document follows the normal ``repository`` JSON schema and you can override the new fork's properties.

        Properties that can be overridden include:

        * description
        * fork_policy
        * language
        * mainbranch
        * is_private (note that a private repo's fork_policy might prohibit
        the creation of public forks, in which ``is_private=False`` would fail)
        * has_issues (to initialize or disable the new repo's issue tracker --
        note that the actual contents of the parent repository's issue tracker are not copied during forking)
        * has_wiki (to initialize or disable the new repo's wiki --
        note that the actual contents of the parent repository's wiki are not copied during forking)
        * project (when forking into a private project, the fork's ``is_private``
        must be ``true``)

        Properties that cannot be modified include:

        * scm
        * parent
        * full_name

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            body: A repository object. This can be left blank.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/forks"),
            path_params=[param[str]("repo_slug", repo_slug), param[str]("workspace", workspace)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[RepositoryBitbucketRepositoriesApi | RepositoryBitbucketRepositoriesApiDict | None](body),
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[RepositoryBitbucketRepositoriesApi],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def post_repositories_by_workspace_by_repo_slug_hooks(
        self, repo_slug: str, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[WebhookSubscription, PostRepositoriesByWorkspaceByRepoSlugHooksErrorBody]:
        """Creates a new webhook on the specified repository.

        Example:

        ```
        $ curl -X POST -u credentials -H 'Content-Type: application/json'
        https://api.bitbucket.org/2.0/repositories/my-workspace/my-repo-slug/hooks -d '
        {
        "description": "Webhook Description", "url": "https://example.com/", "active": true, "secret": "this is a really
        bad secret", "events": [ "repo:push", "issue:created", "issue:updated"
        ]
        }'
        ```

        When the ``secret`` is provided it will be used as the key to generate a HMAC digest value sent in the
        ``X-Hub-Signature`` header at delivery time. Passing a ``null`` or empty ``secret`` or not passing a ``secret``
        will leave the webhook's secret unset. Bitbucket only generates the ``X-Hub-Signature`` when the webhook's
        secret is set.

        Note that this call requires the webhook scope, as well as any scope that applies to the events that the webhook
        subscribes to. In the example above that means: ``webhook``, ``repository`` and ``issue``.

        Also note that the ``url`` must properly resolve and cannot be an internal, non-routed address.

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
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/hooks"),
            path_params=[param[str]("repo_slug", repo_slug), param[str]("workspace", workspace)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[WebhookSubscription],
            error_mapper=post_repositories_by_workspace_by_repo_slug_hooks_error_mapper,
            request_options=request_options,
        )

    async def post_repositories_by_workspace_by_repo_slug_src(
        self,
        repo_slug: str,
        workspace: str,
        *,
        message: str | None = None,
        author: str | None = None,
        parents: str | None = None,
        files: str | None = None,
        branch: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, PostRepositoriesByWorkspaceByRepoSlugSrcErrorBody]:
        """This endpoint is used to create new commits in the repository by uploading files.

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            message: The commit message. When omitted, Bitbucket uses a canned string.
            author: The raw string to be used as the new commit's author. This string follows the format ``Erik van
                Zijst <evzijst@atlassian.com>``. When omitted, Bitbucket uses the authenticated user's full/display name
                and primary email address. Commits cannot be created anonymously.
            parents: #### Deprecation Notice: Support for specifying multiple parent commits is deprecated and will be
                removed in a future release. Only a single SHA1 is accepted. A SHA1 of the commit that should be the
                parent of the newly created commit. When omitted, the new commit will inherit from and become a child of
                the main branch's tip/HEAD commit.
            files: Optional field that declares the files that the request is manipulating. When adding a new file to a
                repo, or when overwriting an existing file, the client can just upload the full contents of the file in
                a normal form field and the use of this ``files`` meta data field is redundant. However, when the
                ``files`` field contains a file path that does not have a corresponding, identically-named form field,
                then Bitbucket interprets that as the client wanting to replace the named file with the null set and the
                file is deleted instead. Paths in the repo that are referenced in neither files nor an individual file
                field, remain unchanged and carry over from the parent to the new commit. This API does not support
                renaming as an explicit feature. To rename a file, simply delete it and recreate it under the new name
                in the same commit.
            branch: The name of the branch that the new commit should be created on. When omitted, the commit will be
                created on top of the main branch and will become the main branch's new head. When a branch name is
                provided that already exists in the repo, then the commit will be created on top of that branch. In this
                case, *if* a parent SHA1 was also provided, then it is asserted that the parent is the branch's tip/HEAD
                at the time the request is made. When this is not the case, a 409 is returned. When a new branch name is
                specified (that does not already exist in the repo), and no parent SHA1s are provided, then the new
                commit will inherit from the current main branch's tip/HEAD commit, but not advance the main branch. The
                new commit will be the new branch. When the request *also* specifies a parent SHA1, then the new commit
                and branch are created directly on top of the parent commit, regardless of the state of the main branch.
                When a branch name is not specified, but a parent SHA1 is provided, then Bitbucket asserts that it
                represents the main branch's current HEAD/tip, or a 409 is returned. When a branch name is not specified
                and the repo is empty, the new commit will become the repo's root commit and will be on the main branch.
                When a branch name is specified and the repo is empty, the new commit will become the repo's root commit
                and also define the repo's main branch going forward. This API cannot be used to create additional root
                commits in non-empty repos. The branch field cannot be repeated. As a side effect, this API can be used
                to create a new branch without modifying any files, by specifying a new branch name in this field,
                together with ``parents``, but omitting the ``files`` fields, while not sending any files. This will
                create a new commit and branch with the same contents as the first parent. The diff of this commit
                against its first parent will be empty.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/src"),
            path_params=[param[str]("repo_slug", repo_slug), param[str]("workspace", workspace)],
            query_params=[
                param[str | None]("message", message),
                param[str | None]("author", author),
                param[str | None]("parents", parents),
                param[str | None]("files", files),
                param[str | None]("branch", branch),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_empty_response,
            error_mapper=post_repositories_by_workspace_by_repo_slug_src_error_mapper,
            request_options=request_options,
        )

    async def put_repositories_by_workspace_by_repo_slug(
        self,
        repo_slug: str,
        workspace: str,
        *,
        body: RepositoryBitbucketRepositoriesApi | RepositoryBitbucketRepositoriesApiDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[RepositoryBitbucketRepositoriesApi, PutRepositoriesByWorkspaceByRepoSlugErrorBody]:
        """Since this endpoint can be used to both update and to create a repository, the request body depends on the
        intent.

        #### Creation

        See the POST documentation for the repository endpoint for an example of the request body.

        #### Update

        Note: Changing the ``name`` of the repository will cause the location to be changed. This is because the URL of
        the repo is derived from the name (a process called slugification). In such a scenario, it is possible for the
        request to fail if the newly created slug conflicts with an existing repository's slug. But if there is no
        conflict, the new location will be returned in the ``Location`` header of the response.

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            body: The repository that is to be updated. Note that the elements "owner" and "full_name" are ignored since
                the URL implies them.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}"),
            path_params=[param[str]("repo_slug", repo_slug), param[str]("workspace", workspace)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[RepositoryBitbucketRepositoriesApi | RepositoryBitbucketRepositoriesApiDict | None](body),
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[RepositoryBitbucketRepositoriesApi],
            error_mapper=put_repositories_by_workspace_by_repo_slug_error_mapper,
            request_options=request_options,
        )

    async def put_repositories_by_workspace_by_repo_slug_hooks_by_uid(
        self, repo_slug: str, uid: str, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[WebhookSubscription, PutRepositoriesByWorkspaceByRepoSlugHooksByUidErrorBody]:
        """Updates the specified webhook subscription.

        The following properties can be mutated:

        * ``description``
        * ``url``
        * ``secret``
        * ``active``
        * ``events``

        The hook's secret is used as a key to generate the HMAC hex digest sent in the ``X-Hub-Signature`` header at
        delivery time. This signature is only generated when the hook has a secret.

        Set the hook's secret by passing the new value in the ``secret`` field. Passing a ``null`` value in the
        ``secret`` field will remove the secret from the hook. The hook's secret can be left unchanged by not passing
        the ``secret`` field in the request.

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            uid: Installed webhook's ID
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/hooks/{uid}"),
            path_params=[
                param[str]("repo_slug", repo_slug), param[str]("uid", uid), param[str]("workspace", workspace)
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[WebhookSubscription],
            error_mapper=put_repositories_by_workspace_by_repo_slug_hooks_by_uid_error_mapper,
            request_options=request_options,
        )

    async def put_repositories_by_workspace_by_repo_slug_override_settings(
        self, repo_slug: str, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, PutRepositoriesByWorkspaceByRepoSlugOverrideSettingsErrorBody]:
        """Send a ``PUT`` request.

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
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/override-settings"),
            path_params=[param[str]("repo_slug", repo_slug), param[str]("workspace", workspace)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_empty_response,
            error_mapper=put_repositories_by_workspace_by_repo_slug_override_settings_error_mapper,
            request_options=request_options,
        )

    async def put_repositories_by_workspace_by_repo_slug_permissions_config_groups_by_group_slug(
        self,
        group_slug: str,
        repo_slug: str,
        workspace: str,
        body: (
            BitbucketAppsPermissionsSerializersRepoPermissionUpdateSchema
            | BitbucketAppsPermissionsSerializersRepoPermissionUpdateSchemaDict
        ),
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[
        RepositoryGroupPermission, PutRepositoriesByWorkspaceByRepoSlugPermissionsConfigGroupsByGroupSlugErrorBody
    ]:
        """Updates the group permission, or grants a new permission if one does not already exist.

        Only users with admin permission for the repository may access this resource.

        The only authentication method supported for this endpoint is via app passwords.

        Permissions can be:

        * ``admin``
        * ``write``
        * ``read``

        Args:
            group_slug: Slug of the requested group.
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            body: The permission to grant
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default(
                "/repositories/{workspace}/{repo_slug}/permissions-config/groups/{group_slug}"
            ),
            path_params=[
                param[str]("group_slug", group_slug),
                param[str]("repo_slug", repo_slug),
                param[str]("workspace", workspace),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[
                (
                    BitbucketAppsPermissionsSerializersRepoPermissionUpdateSchema
                    | BitbucketAppsPermissionsSerializersRepoPermissionUpdateSchemaDict
                )
            ](body),
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[RepositoryGroupPermission],
            error_mapper=put_repositories_by_workspace_by_repo_slug_permissions_config_groups_by_group_slug_error_mapper,
            request_options=request_options,
        )

    async def put_repositories_by_workspace_by_repo_slug_permissions_config_users_by_selected_user_id(
        self,
        repo_slug: str,
        selected_user_id: str,
        workspace: str,
        body: (
            BitbucketAppsPermissionsSerializersRepoPermissionUpdateSchema
            | BitbucketAppsPermissionsSerializersRepoPermissionUpdateSchemaDict
        ),
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[
        RepositoryUserPermission, PutRepositoriesByWorkspaceByRepoSlugPermissionsConfigUsersBySelectedUserIdErrorBody
    ]:
        """Updates the explicit user permission for a given user and repository. The selected user must be a member of
        the workspace, and cannot be the workspace owner. Only users with admin permission for the repository may access
        this resource.

        The only authentication method for this endpoint is via app passwords.

        Permissions can be:

        * ``admin``
        * ``write``
        * ``read``

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            selected_user_id: This can either be the UUID of the account, surrounded by curly-braces, for example:
                ``{account UUID}``, OR an Atlassian Account ID.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            body: The permission to grant
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default(
                "/repositories/{workspace}/{repo_slug}/permissions-config/users/{selected_user_id}"
            ),
            path_params=[
                param[str]("repo_slug", repo_slug),
                param[str]("selected_user_id", selected_user_id),
                param[str]("workspace", workspace),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[
                (
                    BitbucketAppsPermissionsSerializersRepoPermissionUpdateSchema
                    | BitbucketAppsPermissionsSerializersRepoPermissionUpdateSchemaDict
                )
            ](body),
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[RepositoryUserPermission],
            error_mapper=put_repositories_by_workspace_by_repo_slug_permissions_config_users_by_selected_user_id_error_mapper,
            request_options=request_options,
        )

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
    json_decoder,
    param,
    unwrap,
)
from ..errors.delete_workspaces_by_workspace_hooks_by_uid2_error import (
    DeleteWorkspacesByWorkspaceHooksByUid2ErrorBody,
    delete_workspaces_by_workspace_hooks_by_uid2_error_mapper,
)
from ..errors.get_user_permissions_workspaces_error import (
    GetUserPermissionsWorkspacesErrorBody,
    get_user_permissions_workspaces_error_mapper,
)
from ..errors.get_user_workspaces_by_workspace_permission_error import (
    GetUserWorkspacesByWorkspacePermissionErrorBody,
    get_user_workspaces_by_workspace_permission_error_mapper,
)
from ..errors.get_user_workspaces_error import GetUserWorkspacesErrorBody, get_user_workspaces_error_mapper
from ..errors.get_workspaces_by_workspace_error import (
    GetWorkspacesByWorkspaceErrorBody,
    get_workspaces_by_workspace_error_mapper,
)
from ..errors.get_workspaces_by_workspace_hooks2_error import (
    GetWorkspacesByWorkspaceHooks2ErrorBody,
    get_workspaces_by_workspace_hooks2_error_mapper,
)
from ..errors.get_workspaces_by_workspace_hooks_by_uid2_error import (
    GetWorkspacesByWorkspaceHooksByUid2ErrorBody,
    get_workspaces_by_workspace_hooks_by_uid2_error_mapper,
)
from ..errors.get_workspaces_by_workspace_members_by_member_error import (
    GetWorkspacesByWorkspaceMembersByMemberErrorBody,
    get_workspaces_by_workspace_members_by_member_error_mapper,
)
from ..errors.get_workspaces_by_workspace_members_error import (
    GetWorkspacesByWorkspaceMembersErrorBody,
    get_workspaces_by_workspace_members_error_mapper,
)
from ..errors.get_workspaces_by_workspace_permissions_error import (
    GetWorkspacesByWorkspacePermissionsErrorBody,
    get_workspaces_by_workspace_permissions_error_mapper,
)
from ..errors.get_workspaces_by_workspace_permissions_repositories_by_repo_slug_error import (
    GetWorkspacesByWorkspacePermissionsRepositoriesByRepoSlugErrorBody,
    get_workspaces_by_workspace_permissions_repositories_by_repo_slug_error_mapper,
)
from ..errors.get_workspaces_by_workspace_permissions_repositories_error import (
    GetWorkspacesByWorkspacePermissionsRepositoriesErrorBody,
    get_workspaces_by_workspace_permissions_repositories_error_mapper,
)
from ..errors.get_workspaces_by_workspace_projects_by_project_key2_error import (
    GetWorkspacesByWorkspaceProjectsByProjectKey2ErrorBody,
    get_workspaces_by_workspace_projects_by_project_key2_error_mapper,
)
from ..errors.get_workspaces_by_workspace_projects_error import (
    GetWorkspacesByWorkspaceProjectsErrorBody,
    get_workspaces_by_workspace_projects_error_mapper,
)
from ..errors.get_workspaces_by_workspace_pullrequests_by_selected_user2_error import (
    GetWorkspacesByWorkspacePullrequestsBySelectedUser2ErrorBody,
    get_workspaces_by_workspace_pullrequests_by_selected_user2_error_mapper,
)
from ..errors.get_workspaces_error import GetWorkspacesErrorBody, get_workspaces_error_mapper
from ..errors.post_workspaces_by_workspace_hooks2_error import (
    PostWorkspacesByWorkspaceHooks2ErrorBody,
    post_workspaces_by_workspace_hooks2_error_mapper,
)
from ..errors.put_workspaces_by_workspace_hooks_by_uid2_error import (
    PutWorkspacesByWorkspaceHooksByUid2ErrorBody,
    put_workspaces_by_workspace_hooks_by_uid2_error_mapper,
)
from ..models.enums.role1_bitbucket_workspaces_api import Role1BitbucketWorkspacesApiOrStr
from ..models.enums.state2_bitbucket_workspaces_api import State2BitbucketWorkspacesApiOrStr
from ..models.paginated_projects import PaginatedProjects
from ..models.paginated_pull_requests import PaginatedPullRequests
from ..models.paginated_repository_permissions import PaginatedRepositoryPermissions
from ..models.paginated_webhook_subscriptions import PaginatedWebhookSubscriptions
from ..models.paginated_workspace_memberships import PaginatedWorkspaceMemberships
from ..models.paginated_workspace_permissions import PaginatedWorkspacePermissions
from ..models.paginated_workspaces import PaginatedWorkspaces
from ..models.project_bitbucket_deployments_api import ProjectBitbucketDeploymentsApi
from ..models.webhook_subscription import WebhookSubscription
from ..models.workspace_bitbucket_workspaces_api import WorkspaceBitbucketWorkspacesApi
from ..models.workspace_membership import WorkspaceMembership
from ..server.server import Server


class Workspaces:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = WorkspacesWithRawResponse(client, server, auth)

    def delete_workspaces_by_workspace_hooks_by_uid2(
        self, uid: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Deletes the specified webhook subscription from the given workspace.

        Args:
            uid: Installed webhook's ID
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            When the webhook was deleted successfully

        Raises:
            ApiError: If the authenticated user does not have permission to delete the webhook. If the webhook or
                workspace does not exist. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.delete_workspaces_by_workspace_hooks_by_uid2(
                uid, workspace, request_options=request_options
            ),
        )

    def get_user_permissions_workspaces(
        self, *, q: str | None = None, sort: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> PaginatedWorkspaceMemberships:
        """**This endpoint is deprecated. Please use the supported alternatives:**
        * List workspaces for user
        * Get user permission on a workspace

        Returns an object for each workspace the caller is a member of, and their effective role - the highest level of
        privilege the caller has. If a user is a member of multiple groups with distinct roles, only the highest level
        is returned.

        Permissions can be:

        * ``owner``
        * ``collaborator``
        * ``member``

        **The ``collaborator`` role is being removed from the Bitbucket Cloud API. For more information, see the
        deprecation announcement.**

        **When you move your administration from Bitbucket Cloud to admin.atlassian.com, the following fields on
        ``workspace_membership`` will no longer be present: ``last_accessed`` and ``added_on``. See the deprecation
        announcement.**

        Results may be further filtered or sorted by workspace or permission by adding the following query string
        parameters:

        * ``q=workspace.slug="bbworkspace1"`` or ``q=permission="owner"``
        * ``sort=workspace.slug``

        Note that the query parameter values need to be URL escaped so that ``=`` would become ``%3D``.

        Args:
            q: Query string to narrow down the response. See `filtering and sorting
                </cloud/bitbucket/rest/intro/#filtering>`__ for details.
            sort: Name of a response property to sort results. See `filtering and sorting
                </cloud/bitbucket/rest/intro/#sorting-query-results>`__ for details.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            All of the workspace memberships for the authenticated user.

        Raises:
            ApiError: The request wasn't authenticated. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_user_permissions_workspaces(q=q, sort=sort, request_options=request_options)
        )

    def get_user_workspaces(
        self,
        *,
        sort: str | None = None,
        administrator: bool | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PaginatedWorkspacePermissions:
        """Returns an object for each workspace accessible to the caller. This object also contains details on whether
        the caller has admin permissions on the workspace (``"administrator" = true``) or not (``"administrator" =
        false``).

        Queries support filtering based on administrator permissions, sorting or filtering by ``slug``. Results can be
        paginated.

        Args:
            sort: Name of a response property to sort results (only slug is supported).
            administrator: Filter workspaces based on which ones the caller has admin permissions or not.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The list of workspaces accessible by the authenticated user.

        Raises:
            ApiError: The request was invalid. The request wasn't authenticated. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_user_workspaces(
                sort=sort, administrator=administrator, request_options=request_options
            ),
        )

    def get_user_workspaces_by_workspace_permission(
        self, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> WorkspaceMembership:
        """Returns the caller's effective role; as in, the highest level of privilege the caller has for the workspace.
        If the calling user is a member of multiple groups with distinct roles, only the highest level is returned.

        Permissions can be:

        * ``owner``
        * ``create-project``
        * ``collaborator`` (deprecated; see this
        deprecation announcement for more details)
        * ``member``

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The user that is part of a workspace.

        Raises:
            ApiError: The request wasn't authenticated. The requesting user does not have access to the workspace.
                ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_user_workspaces_by_workspace_permission(
                workspace, request_options=request_options
            ),
        )

    def get_workspaces(
        self,
        *,
        role: Role1BitbucketWorkspacesApiOrStr | None = None,
        q: str | None = None,
        sort: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PaginatedWorkspaces:
        """**This endpoint is deprecated. Please use the supported alternative.**

        Returns a list of workspaces accessible by the authenticated user.

        Results may be further filtered or sorted by workspace or permission by adding the following query string
        parameters:

        * ``q=slug="bbworkspace1"`` or ``q=is_private=true``
        * ``sort=created_on``

        Note that the query parameter values need to be URL escaped so that ``=`` would become ``%3D``.

        **The ``collaborator`` role is being removed from the Bitbucket Cloud API. For more information, see the
        deprecation announcement.**

        Args:
            role: Filters the workspaces based on the authenticated user's role on each workspace. * **member**: returns
                a list of all the workspaces which the caller is a member of at least one workspace group or repository
                * **collaborator**: returns a list of workspaces which the caller has write access to at least one
                repository in the workspace * **owner**: returns a list of workspaces which the caller has administrator
                access
            q: Query string to narrow down the response. See `filtering and sorting
                </cloud/bitbucket/rest/intro/#filtering>`__ for details.
            sort: Name of a response property to sort results. See `filtering and sorting
                </cloud/bitbucket/rest/intro/#sorting-query-results>`__ for details.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The list of workspaces accessible by the authenticated user.

        Raises:
            ApiError: The request wasn't authenticated. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_workspaces(role=role, q=q, sort=sort, request_options=request_options)
        )

    def get_workspaces_by_workspace(
        self, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> WorkspaceBitbucketWorkspacesApi:
        """Returns the requested workspace.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The workspace.

        Raises:
            ApiError: If no workspace exists for the specified name or UUID. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.get_workspaces_by_workspace(workspace, request_options=request_options))

    def get_workspaces_by_workspace_hooks2(
        self, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> PaginatedWebhookSubscriptions:
        """Returns a paginated list of webhooks installed on this workspace.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The paginated list of installed webhooks.

        Raises:
            ApiError: If the authenticated user is not an owner on the specified workspace. If the specified workspace
                does not exist. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_workspaces_by_workspace_hooks2(workspace, request_options=request_options)
        )

    def get_workspaces_by_workspace_hooks_by_uid2(
        self, uid: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> WebhookSubscription:
        """Returns the webhook with the specified id installed on the given workspace.

        Args:
            uid: Installed webhook's ID
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The webhook subscription object.

        Raises:
            ApiError: If the webhook or workspace does not exist. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_workspaces_by_workspace_hooks_by_uid2(
                uid, workspace, request_options=request_options
            ),
        )

    def get_workspaces_by_workspace_members(
        self, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> PaginatedWorkspaceMemberships:
        """Returns all members of the requested workspace.

        This endpoint additionally supports filtering by email address, if called by a workspace administrator,
        integration or workspace access token. This is done by adding the following query string parameter:

        * ``q=user.email IN ("user1@org.com","user2@org.com")``

        When filtering by email, you can query up to 90 addresses at a time. Note that the query parameter values need
        to be URL escaped, so the final query string should be:

        * ``q=user.email%20IN%20(%22user1@org.com%22,%22user2@org.com%22)``

        Email addresses that you filter by (and only these email addresses) can be included in the response using the
        ``fields`` query parameter:

        * ``&fields=+values.user.email`` - add the ``email`` field to the default ``user`` response object
        * ``&fields=values.user.email,values.user.account_id`` - only return user email addresses and
        account IDs

        Once again, all query parameter values must be URL escaped.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The list of users that are part of a workspace.

        Raises:
            ApiError: When more than 90 emails were provided when querying by email. The request wasn't authenticated.
                ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_workspaces_by_workspace_members(workspace, request_options=request_options)
        )

    def get_workspaces_by_workspace_members_by_member(
        self, member: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> WorkspaceMembership:
        """Returns the workspace membership, which includes a ``User`` object for the member and a ``Workspace`` object
        for the requested workspace.

        Args:
            member: Member's UUID or Atlassian ID.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The user that is part of a workspace.

        Raises:
            ApiError: The request wasn't authenticated. A workspace cannot be found, or a user cannot be found, or the
                user is not a a member of the workspace. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_workspaces_by_workspace_members_by_member(
                member, workspace, request_options=request_options
            ),
        )

    def get_workspaces_by_workspace_permissions(
        self, workspace: str, *, q: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> PaginatedWorkspaceMemberships:
        """Returns the list of members in a workspace and their permission levels. Permission can be:
        * ``owner``
        * ``collaborator``
        * ``member``

        **The ``collaborator`` role is being removed from the Bitbucket Cloud API. For more information, see the
        deprecation announcement.**

        **When you move your administration from Bitbucket Cloud to admin.atlassian.com, the following fields on
        ``workspace_membership`` will no longer be present: ``last_accessed`` and ``added_on``. See the deprecation
        announcement.**

        Results may be further filtered by permission by adding the following query string parameters:

        * ``q=permission="owner"``

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            q: Query string to narrow down the response as per `filtering and sorting
                </cloud/bitbucket/rest/intro/#filtering>`__.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The list of users that are part of a workspace, along with their permission.

        Raises:
            ApiError: The request wasn't authenticated. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_workspaces_by_workspace_permissions(
                workspace, q=q, request_options=request_options
            ),
        )

    def get_workspaces_by_workspace_permissions_repositories(
        self,
        workspace: str,
        *,
        q: str | None = None,
        sort: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PaginatedRepositoryPermissions:
        """Returns an object for each repository permission for all of a workspace's repositories.

        Permissions returned are effective permissions: the highest level of permission the user has. This does not
        distinguish between direct and indirect (group) privileges.

        Only users with admin permission for the team may access this resource.

        Permissions can be:

        * ``admin``
        * ``write``
        * ``read``

        Results may be further filtered or sorted by repository, user, or permission by adding the following query
        string parameters:

        * ``q=repository.name="geordi"`` or ``q=permission>"read"``
        * ``sort=user.display_name``

        Note that the query parameter values need to be URL escaped so that ``=`` would become ``%3D``.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            q: Query string to narrow down the response as per `filtering and sorting
                </cloud/bitbucket/rest/intro/#filtering>`__.
            sort: Name of a response property sort the result by as per `filtering and sorting
                </cloud/bitbucket/rest/intro/#sorting-query-results>`__.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            List of workspace's repository permissions.

        Raises:
            ApiError: The requesting user isn't an admin of the workspace. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_workspaces_by_workspace_permissions_repositories(
                workspace, q=q, sort=sort, request_options=request_options
            ),
        )

    def get_workspaces_by_workspace_permissions_repositories_by_repo_slug(
        self,
        repo_slug: str,
        workspace: str,
        *,
        q: str | None = None,
        sort: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PaginatedRepositoryPermissions:
        """Returns an object for the repository permission of each user in the requested repository.

        Permissions returned are effective permissions: the highest level of permission the user has. This does not
        distinguish between direct and indirect (group) privileges.

        Only users with admin permission for the repository may access this resource.

        Permissions can be:

        * ``admin``
        * ``write``
        * ``read``

        Results may be further filtered or sorted by user, or permission by adding the following query string
        parameters:

        * ``q=permission>"read"``
        * ``sort=user.display_name``

        Note that the query parameter values need to be URL escaped so that ``=`` would become ``%3D``.

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            q: Query string to narrow down the response as per `filtering and sorting
                </cloud/bitbucket/rest/intro/#filtering>`__.
            sort: Name of a response property sort the result by as per `filtering and sorting
                </cloud/bitbucket/rest/intro/#sorting-query-results>`__.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The repository permission for all users in this repository.

        Raises:
            ApiError: The requesting user isn't an admin of the repository. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_workspaces_by_workspace_permissions_repositories_by_repo_slug(
                repo_slug, workspace, q=q, sort=sort, request_options=request_options
            ),
        )

    def get_workspaces_by_workspace_projects(
        self, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> PaginatedProjects:
        """Returns the list of projects in this workspace.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The list of projects in this workspace.

        Raises:
            ApiError: A workspace doesn't exist at this location. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_workspaces_by_workspace_projects(workspace, request_options=request_options)
        )

    def get_workspaces_by_workspace_projects_by_project_key2(
        self, project_key: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ProjectBitbucketDeploymentsApi:
        """Returns the requested project.

        Args:
            project_key: The project in question. This is the actual ``key`` assigned to the project.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The project that is part of a workspace.

        Raises:
            ApiError: The request wasn't authenticated. The requesting user isn't authorized to access the project. A
                project isn't hosted at this location. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_workspaces_by_workspace_projects_by_project_key2(
                project_key, workspace, request_options=request_options
            ),
        )

    def get_workspaces_by_workspace_pullrequests_by_selected_user2(
        self,
        selected_user: str,
        workspace: str,
        *,
        state: State2BitbucketWorkspacesApiOrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PaginatedPullRequests:
        """Returns all workspace pull requests authored by the specified user.

        By default only open pull requests are returned. This can be controlled using the ``state`` query parameter. To
        retrieve pull requests that are in one of multiple states, repeat the ``state`` parameter for each individual
        state.

        This endpoint also supports filtering and sorting of the results. See filtering and sorting for more details.

        Args:
            selected_user: This can either be the username of the pull request author, the author's UUID surrounded by
                curly-braces, for example: ``{account UUID}``, or the author's Atlassian ID.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            state: Only return pull requests that are in this state. This parameter can be repeated.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            All pull requests authored by the specified user.

        Raises:
            ApiError: If the specified user does not exist. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_workspaces_by_workspace_pullrequests_by_selected_user2(
                selected_user, workspace, state=state, request_options=request_options
            ),
        )

    def post_workspaces_by_workspace_hooks2(
        self, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> WebhookSubscription:
        """Creates a new webhook on the specified workspace.

        Workspace webhooks are fired for events from all repositories contained by that workspace.

        Example:

        ```
        $ curl -X POST -u credentials -H 'Content-Type: application/json'
        https://api.bitbucket.org/2.0/workspaces/my-workspace/hooks -d '
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

        This call requires the webhook scope, as well as any scope that applies to the events that the webhook
        subscribes to. In the example above that means: ``webhook``, ``repository`` and ``issue``.

        The ``url`` must properly resolve and cannot be an internal, non-routed address.

        Only workspace owners can install webhooks on workspaces.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            If the webhook was registered successfully.

        Raises:
            ApiError: If the authenticated user does not have permission to install webhooks on the specified workspace.
                If the specified workspace does not exist. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.post_workspaces_by_workspace_hooks2(workspace, request_options=request_options)
        )

    def put_workspaces_by_workspace_hooks_by_uid2(
        self, uid: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
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
            uid: Installed webhook's ID
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The webhook subscription object.

        Raises:
            ApiError: If the authenticated user does not have permission to update the webhook. If the webhook or
                workspace does not exist. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.put_workspaces_by_workspace_hooks_by_uid2(
                uid, workspace, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> WorkspacesWithRawResponse:
        return self._with_raw_response


class AsyncWorkspaces:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncWorkspacesWithRawResponse(client, server, auth)

    async def delete_workspaces_by_workspace_hooks_by_uid2(
        self, uid: str, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Deletes the specified webhook subscription from the given workspace.

        Args:
            uid: Installed webhook's ID
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            When the webhook was deleted successfully

        Raises:
            ApiError: If the authenticated user does not have permission to delete the webhook. If the webhook or
                workspace does not exist. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.delete_workspaces_by_workspace_hooks_by_uid2(
                uid, workspace, request_options=request_options
            ),
        )

    async def get_user_permissions_workspaces(
        self, *, q: str | None = None, sort: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> PaginatedWorkspaceMemberships:
        """**This endpoint is deprecated. Please use the supported alternatives:**
        * List workspaces for user
        * Get user permission on a workspace

        Returns an object for each workspace the caller is a member of, and their effective role - the highest level of
        privilege the caller has. If a user is a member of multiple groups with distinct roles, only the highest level
        is returned.

        Permissions can be:

        * ``owner``
        * ``collaborator``
        * ``member``

        **The ``collaborator`` role is being removed from the Bitbucket Cloud API. For more information, see the
        deprecation announcement.**

        **When you move your administration from Bitbucket Cloud to admin.atlassian.com, the following fields on
        ``workspace_membership`` will no longer be present: ``last_accessed`` and ``added_on``. See the deprecation
        announcement.**

        Results may be further filtered or sorted by workspace or permission by adding the following query string
        parameters:

        * ``q=workspace.slug="bbworkspace1"`` or ``q=permission="owner"``
        * ``sort=workspace.slug``

        Note that the query parameter values need to be URL escaped so that ``=`` would become ``%3D``.

        Args:
            q: Query string to narrow down the response. See `filtering and sorting
                </cloud/bitbucket/rest/intro/#filtering>`__ for details.
            sort: Name of a response property to sort results. See `filtering and sorting
                </cloud/bitbucket/rest/intro/#sorting-query-results>`__ for details.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            All of the workspace memberships for the authenticated user.

        Raises:
            ApiError: The request wasn't authenticated. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_user_permissions_workspaces(
                q=q, sort=sort, request_options=request_options
            ),
        )

    async def get_user_workspaces(
        self,
        *,
        sort: str | None = None,
        administrator: bool | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PaginatedWorkspacePermissions:
        """Returns an object for each workspace accessible to the caller. This object also contains details on whether
        the caller has admin permissions on the workspace (``"administrator" = true``) or not (``"administrator" =
        false``).

        Queries support filtering based on administrator permissions, sorting or filtering by ``slug``. Results can be
        paginated.

        Args:
            sort: Name of a response property to sort results (only slug is supported).
            administrator: Filter workspaces based on which ones the caller has admin permissions or not.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The list of workspaces accessible by the authenticated user.

        Raises:
            ApiError: The request was invalid. The request wasn't authenticated. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_user_workspaces(
                sort=sort, administrator=administrator, request_options=request_options
            ),
        )

    async def get_user_workspaces_by_workspace_permission(
        self, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> WorkspaceMembership:
        """Returns the caller's effective role; as in, the highest level of privilege the caller has for the workspace.
        If the calling user is a member of multiple groups with distinct roles, only the highest level is returned.

        Permissions can be:

        * ``owner``
        * ``create-project``
        * ``collaborator`` (deprecated; see this
        deprecation announcement for more details)
        * ``member``

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The user that is part of a workspace.

        Raises:
            ApiError: The request wasn't authenticated. The requesting user does not have access to the workspace.
                ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_user_workspaces_by_workspace_permission(
                workspace, request_options=request_options
            ),
        )

    async def get_workspaces(
        self,
        *,
        role: Role1BitbucketWorkspacesApiOrStr | None = None,
        q: str | None = None,
        sort: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PaginatedWorkspaces:
        """**This endpoint is deprecated. Please use the supported alternative.**

        Returns a list of workspaces accessible by the authenticated user.

        Results may be further filtered or sorted by workspace or permission by adding the following query string
        parameters:

        * ``q=slug="bbworkspace1"`` or ``q=is_private=true``
        * ``sort=created_on``

        Note that the query parameter values need to be URL escaped so that ``=`` would become ``%3D``.

        **The ``collaborator`` role is being removed from the Bitbucket Cloud API. For more information, see the
        deprecation announcement.**

        Args:
            role: Filters the workspaces based on the authenticated user's role on each workspace. * **member**: returns
                a list of all the workspaces which the caller is a member of at least one workspace group or repository
                * **collaborator**: returns a list of workspaces which the caller has write access to at least one
                repository in the workspace * **owner**: returns a list of workspaces which the caller has administrator
                access
            q: Query string to narrow down the response. See `filtering and sorting
                </cloud/bitbucket/rest/intro/#filtering>`__ for details.
            sort: Name of a response property to sort results. See `filtering and sorting
                </cloud/bitbucket/rest/intro/#sorting-query-results>`__ for details.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The list of workspaces accessible by the authenticated user.

        Raises:
            ApiError: The request wasn't authenticated. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_workspaces(role=role, q=q, sort=sort, request_options=request_options)
        )

    async def get_workspaces_by_workspace(
        self, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> WorkspaceBitbucketWorkspacesApi:
        """Returns the requested workspace.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The workspace.

        Raises:
            ApiError: If no workspace exists for the specified name or UUID. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_workspaces_by_workspace(workspace, request_options=request_options)
        )

    async def get_workspaces_by_workspace_hooks2(
        self, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> PaginatedWebhookSubscriptions:
        """Returns a paginated list of webhooks installed on this workspace.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The paginated list of installed webhooks.

        Raises:
            ApiError: If the authenticated user is not an owner on the specified workspace. If the specified workspace
                does not exist. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_workspaces_by_workspace_hooks2(workspace, request_options=request_options)
        )

    async def get_workspaces_by_workspace_hooks_by_uid2(
        self, uid: str, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> WebhookSubscription:
        """Returns the webhook with the specified id installed on the given workspace.

        Args:
            uid: Installed webhook's ID
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The webhook subscription object.

        Raises:
            ApiError: If the webhook or workspace does not exist. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_workspaces_by_workspace_hooks_by_uid2(
                uid, workspace, request_options=request_options
            ),
        )

    async def get_workspaces_by_workspace_members(
        self, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> PaginatedWorkspaceMemberships:
        """Returns all members of the requested workspace.

        This endpoint additionally supports filtering by email address, if called by a workspace administrator,
        integration or workspace access token. This is done by adding the following query string parameter:

        * ``q=user.email IN ("user1@org.com","user2@org.com")``

        When filtering by email, you can query up to 90 addresses at a time. Note that the query parameter values need
        to be URL escaped, so the final query string should be:

        * ``q=user.email%20IN%20(%22user1@org.com%22,%22user2@org.com%22)``

        Email addresses that you filter by (and only these email addresses) can be included in the response using the
        ``fields`` query parameter:

        * ``&fields=+values.user.email`` - add the ``email`` field to the default ``user`` response object
        * ``&fields=values.user.email,values.user.account_id`` - only return user email addresses and
        account IDs

        Once again, all query parameter values must be URL escaped.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The list of users that are part of a workspace.

        Raises:
            ApiError: When more than 90 emails were provided when querying by email. The request wasn't authenticated.
                ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_workspaces_by_workspace_members(
                workspace, request_options=request_options
            ),
        )

    async def get_workspaces_by_workspace_members_by_member(
        self, member: str, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> WorkspaceMembership:
        """Returns the workspace membership, which includes a ``User`` object for the member and a ``Workspace`` object
        for the requested workspace.

        Args:
            member: Member's UUID or Atlassian ID.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The user that is part of a workspace.

        Raises:
            ApiError: The request wasn't authenticated. A workspace cannot be found, or a user cannot be found, or the
                user is not a a member of the workspace. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_workspaces_by_workspace_members_by_member(
                member, workspace, request_options=request_options
            ),
        )

    async def get_workspaces_by_workspace_permissions(
        self, workspace: str, *, q: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> PaginatedWorkspaceMemberships:
        """Returns the list of members in a workspace and their permission levels. Permission can be:
        * ``owner``
        * ``collaborator``
        * ``member``

        **The ``collaborator`` role is being removed from the Bitbucket Cloud API. For more information, see the
        deprecation announcement.**

        **When you move your administration from Bitbucket Cloud to admin.atlassian.com, the following fields on
        ``workspace_membership`` will no longer be present: ``last_accessed`` and ``added_on``. See the deprecation
        announcement.**

        Results may be further filtered by permission by adding the following query string parameters:

        * ``q=permission="owner"``

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            q: Query string to narrow down the response as per `filtering and sorting
                </cloud/bitbucket/rest/intro/#filtering>`__.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The list of users that are part of a workspace, along with their permission.

        Raises:
            ApiError: The request wasn't authenticated. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_workspaces_by_workspace_permissions(
                workspace, q=q, request_options=request_options
            ),
        )

    async def get_workspaces_by_workspace_permissions_repositories(
        self,
        workspace: str,
        *,
        q: str | None = None,
        sort: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PaginatedRepositoryPermissions:
        """Returns an object for each repository permission for all of a workspace's repositories.

        Permissions returned are effective permissions: the highest level of permission the user has. This does not
        distinguish between direct and indirect (group) privileges.

        Only users with admin permission for the team may access this resource.

        Permissions can be:

        * ``admin``
        * ``write``
        * ``read``

        Results may be further filtered or sorted by repository, user, or permission by adding the following query
        string parameters:

        * ``q=repository.name="geordi"`` or ``q=permission>"read"``
        * ``sort=user.display_name``

        Note that the query parameter values need to be URL escaped so that ``=`` would become ``%3D``.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            q: Query string to narrow down the response as per `filtering and sorting
                </cloud/bitbucket/rest/intro/#filtering>`__.
            sort: Name of a response property sort the result by as per `filtering and sorting
                </cloud/bitbucket/rest/intro/#sorting-query-results>`__.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            List of workspace's repository permissions.

        Raises:
            ApiError: The requesting user isn't an admin of the workspace. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_workspaces_by_workspace_permissions_repositories(
                workspace, q=q, sort=sort, request_options=request_options
            ),
        )

    async def get_workspaces_by_workspace_permissions_repositories_by_repo_slug(
        self,
        repo_slug: str,
        workspace: str,
        *,
        q: str | None = None,
        sort: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PaginatedRepositoryPermissions:
        """Returns an object for the repository permission of each user in the requested repository.

        Permissions returned are effective permissions: the highest level of permission the user has. This does not
        distinguish between direct and indirect (group) privileges.

        Only users with admin permission for the repository may access this resource.

        Permissions can be:

        * ``admin``
        * ``write``
        * ``read``

        Results may be further filtered or sorted by user, or permission by adding the following query string
        parameters:

        * ``q=permission>"read"``
        * ``sort=user.display_name``

        Note that the query parameter values need to be URL escaped so that ``=`` would become ``%3D``.

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            q: Query string to narrow down the response as per `filtering and sorting
                </cloud/bitbucket/rest/intro/#filtering>`__.
            sort: Name of a response property sort the result by as per `filtering and sorting
                </cloud/bitbucket/rest/intro/#sorting-query-results>`__.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The repository permission for all users in this repository.

        Raises:
            ApiError: The requesting user isn't an admin of the repository. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_workspaces_by_workspace_permissions_repositories_by_repo_slug(
                repo_slug, workspace, q=q, sort=sort, request_options=request_options
            ),
        )

    async def get_workspaces_by_workspace_projects(
        self, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> PaginatedProjects:
        """Returns the list of projects in this workspace.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The list of projects in this workspace.

        Raises:
            ApiError: A workspace doesn't exist at this location. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_workspaces_by_workspace_projects(
                workspace, request_options=request_options
            ),
        )

    async def get_workspaces_by_workspace_projects_by_project_key2(
        self, project_key: str, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ProjectBitbucketDeploymentsApi:
        """Returns the requested project.

        Args:
            project_key: The project in question. This is the actual ``key`` assigned to the project.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The project that is part of a workspace.

        Raises:
            ApiError: The request wasn't authenticated. The requesting user isn't authorized to access the project. A
                project isn't hosted at this location. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_workspaces_by_workspace_projects_by_project_key2(
                project_key, workspace, request_options=request_options
            ),
        )

    async def get_workspaces_by_workspace_pullrequests_by_selected_user2(
        self,
        selected_user: str,
        workspace: str,
        *,
        state: State2BitbucketWorkspacesApiOrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PaginatedPullRequests:
        """Returns all workspace pull requests authored by the specified user.

        By default only open pull requests are returned. This can be controlled using the ``state`` query parameter. To
        retrieve pull requests that are in one of multiple states, repeat the ``state`` parameter for each individual
        state.

        This endpoint also supports filtering and sorting of the results. See filtering and sorting for more details.

        Args:
            selected_user: This can either be the username of the pull request author, the author's UUID surrounded by
                curly-braces, for example: ``{account UUID}``, or the author's Atlassian ID.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            state: Only return pull requests that are in this state. This parameter can be repeated.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            All pull requests authored by the specified user.

        Raises:
            ApiError: If the specified user does not exist. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_workspaces_by_workspace_pullrequests_by_selected_user2(
                selected_user, workspace, state=state, request_options=request_options
            ),
        )

    async def post_workspaces_by_workspace_hooks2(
        self, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> WebhookSubscription:
        """Creates a new webhook on the specified workspace.

        Workspace webhooks are fired for events from all repositories contained by that workspace.

        Example:

        ```
        $ curl -X POST -u credentials -H 'Content-Type: application/json'
        https://api.bitbucket.org/2.0/workspaces/my-workspace/hooks -d '
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

        This call requires the webhook scope, as well as any scope that applies to the events that the webhook
        subscribes to. In the example above that means: ``webhook``, ``repository`` and ``issue``.

        The ``url`` must properly resolve and cannot be an internal, non-routed address.

        Only workspace owners can install webhooks on workspaces.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            If the webhook was registered successfully.

        Raises:
            ApiError: If the authenticated user does not have permission to install webhooks on the specified workspace.
                If the specified workspace does not exist. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.post_workspaces_by_workspace_hooks2(
                workspace, request_options=request_options
            ),
        )

    async def put_workspaces_by_workspace_hooks_by_uid2(
        self, uid: str, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
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
            uid: Installed webhook's ID
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The webhook subscription object.

        Raises:
            ApiError: If the authenticated user does not have permission to update the webhook. If the webhook or
                workspace does not exist. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.put_workspaces_by_workspace_hooks_by_uid2(
                uid, workspace, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncWorkspacesWithRawResponse:
        return self._with_raw_response


class WorkspacesWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def delete_workspaces_by_workspace_hooks_by_uid2(
        self, uid: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteWorkspacesByWorkspaceHooksByUid2ErrorBody]:
        """Deletes the specified webhook subscription from the given workspace.

        Args:
            uid: Installed webhook's ID
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/workspaces/{workspace}/hooks/{uid}"),
            path_params=[param[str]("uid", uid), param[str]("workspace", workspace)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=empty_response,
            error_mapper=delete_workspaces_by_workspace_hooks_by_uid2_error_mapper,
            request_options=request_options,
        )

    def get_user_permissions_workspaces(
        self, *, q: str | None = None, sort: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[PaginatedWorkspaceMemberships, GetUserPermissionsWorkspacesErrorBody]:
        """**This endpoint is deprecated. Please use the supported alternatives:**
        * List workspaces for user
        * Get user permission on a workspace

        Returns an object for each workspace the caller is a member of, and their effective role - the highest level of
        privilege the caller has. If a user is a member of multiple groups with distinct roles, only the highest level
        is returned.

        Permissions can be:

        * ``owner``
        * ``collaborator``
        * ``member``

        **The ``collaborator`` role is being removed from the Bitbucket Cloud API. For more information, see the
        deprecation announcement.**

        **When you move your administration from Bitbucket Cloud to admin.atlassian.com, the following fields on
        ``workspace_membership`` will no longer be present: ``last_accessed`` and ``added_on``. See the deprecation
        announcement.**

        Results may be further filtered or sorted by workspace or permission by adding the following query string
        parameters:

        * ``q=workspace.slug="bbworkspace1"`` or ``q=permission="owner"``
        * ``sort=workspace.slug``

        Note that the query parameter values need to be URL escaped so that ``=`` would become ``%3D``.

        Args:
            q: Query string to narrow down the response. See `filtering and sorting
                </cloud/bitbucket/rest/intro/#filtering>`__ for details.
            sort: Name of a response property to sort results. See `filtering and sorting
                </cloud/bitbucket/rest/intro/#sorting-query-results>`__ for details.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/user/permissions/workspaces"),
            query_params=[param[str | None]("q", q), param[str | None]("sort", sort)],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[PaginatedWorkspaceMemberships],
            error_mapper=get_user_permissions_workspaces_error_mapper,
            request_options=request_options,
        )

    def get_user_workspaces(
        self,
        *,
        sort: str | None = None,
        administrator: bool | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PaginatedWorkspacePermissions, GetUserWorkspacesErrorBody]:
        """Returns an object for each workspace accessible to the caller. This object also contains details on whether
        the caller has admin permissions on the workspace (``"administrator" = true``) or not (``"administrator" =
        false``).

        Queries support filtering based on administrator permissions, sorting or filtering by ``slug``. Results can be
        paginated.

        Args:
            sort: Name of a response property to sort results (only slug is supported).
            administrator: Filter workspaces based on which ones the caller has admin permissions or not.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/user/workspaces"),
            query_params=[param[str | None]("sort", sort), param[bool | None]("administrator", administrator)],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[PaginatedWorkspacePermissions],
            error_mapper=get_user_workspaces_error_mapper,
            request_options=request_options,
        )

    def get_user_workspaces_by_workspace_permission(
        self, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[WorkspaceMembership, GetUserWorkspacesByWorkspacePermissionErrorBody]:
        """Returns the caller's effective role; as in, the highest level of privilege the caller has for the workspace.
        If the calling user is a member of multiple groups with distinct roles, only the highest level is returned.

        Permissions can be:

        * ``owner``
        * ``create-project``
        * ``collaborator`` (deprecated; see this
        deprecation announcement for more details)
        * ``member``

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/user/workspaces/{workspace}/permission"),
            path_params=[param[str]("workspace", workspace)],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[WorkspaceMembership],
            error_mapper=get_user_workspaces_by_workspace_permission_error_mapper,
            request_options=request_options,
        )

    def get_workspaces(
        self,
        *,
        role: Role1BitbucketWorkspacesApiOrStr | None = None,
        q: str | None = None,
        sort: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PaginatedWorkspaces, GetWorkspacesErrorBody]:
        """**This endpoint is deprecated. Please use the supported alternative.**

        Returns a list of workspaces accessible by the authenticated user.

        Results may be further filtered or sorted by workspace or permission by adding the following query string
        parameters:

        * ``q=slug="bbworkspace1"`` or ``q=is_private=true``
        * ``sort=created_on``

        Note that the query parameter values need to be URL escaped so that ``=`` would become ``%3D``.

        **The ``collaborator`` role is being removed from the Bitbucket Cloud API. For more information, see the
        deprecation announcement.**

        Args:
            role: Filters the workspaces based on the authenticated user's role on each workspace. * **member**: returns
                a list of all the workspaces which the caller is a member of at least one workspace group or repository
                * **collaborator**: returns a list of workspaces which the caller has write access to at least one
                repository in the workspace * **owner**: returns a list of workspaces which the caller has administrator
                access
            q: Query string to narrow down the response. See `filtering and sorting
                </cloud/bitbucket/rest/intro/#filtering>`__ for details.
            sort: Name of a response property to sort results. See `filtering and sorting
                </cloud/bitbucket/rest/intro/#sorting-query-results>`__ for details.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/workspaces"),
            query_params=[
                param[Role1BitbucketWorkspacesApiOrStr | None]("role", role),
                param[str | None]("q", q),
                param[str | None]("sort", sort),
            ],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[PaginatedWorkspaces],
            error_mapper=get_workspaces_error_mapper,
            request_options=request_options,
        )

    def get_workspaces_by_workspace(
        self, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[WorkspaceBitbucketWorkspacesApi, GetWorkspacesByWorkspaceErrorBody]:
        """Returns the requested workspace.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/workspaces/{workspace}"),
            path_params=[param[str]("workspace", workspace)],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[WorkspaceBitbucketWorkspacesApi],
            error_mapper=get_workspaces_by_workspace_error_mapper,
            request_options=request_options,
        )

    def get_workspaces_by_workspace_hooks2(
        self, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[PaginatedWebhookSubscriptions, GetWorkspacesByWorkspaceHooks2ErrorBody]:
        """Returns a paginated list of webhooks installed on this workspace.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/workspaces/{workspace}/hooks"),
            path_params=[param[str]("workspace", workspace)],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[PaginatedWebhookSubscriptions],
            error_mapper=get_workspaces_by_workspace_hooks2_error_mapper,
            request_options=request_options,
        )

    def get_workspaces_by_workspace_hooks_by_uid2(
        self, uid: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[WebhookSubscription, GetWorkspacesByWorkspaceHooksByUid2ErrorBody]:
        """Returns the webhook with the specified id installed on the given workspace.

        Args:
            uid: Installed webhook's ID
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/workspaces/{workspace}/hooks/{uid}"),
            path_params=[param[str]("uid", uid), param[str]("workspace", workspace)],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[WebhookSubscription],
            error_mapper=get_workspaces_by_workspace_hooks_by_uid2_error_mapper,
            request_options=request_options,
        )

    def get_workspaces_by_workspace_members(
        self, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[PaginatedWorkspaceMemberships, GetWorkspacesByWorkspaceMembersErrorBody]:
        """Returns all members of the requested workspace.

        This endpoint additionally supports filtering by email address, if called by a workspace administrator,
        integration or workspace access token. This is done by adding the following query string parameter:

        * ``q=user.email IN ("user1@org.com","user2@org.com")``

        When filtering by email, you can query up to 90 addresses at a time. Note that the query parameter values need
        to be URL escaped, so the final query string should be:

        * ``q=user.email%20IN%20(%22user1@org.com%22,%22user2@org.com%22)``

        Email addresses that you filter by (and only these email addresses) can be included in the response using the
        ``fields`` query parameter:

        * ``&fields=+values.user.email`` - add the ``email`` field to the default ``user`` response object
        * ``&fields=values.user.email,values.user.account_id`` - only return user email addresses and
        account IDs

        Once again, all query parameter values must be URL escaped.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/workspaces/{workspace}/members"),
            path_params=[param[str]("workspace", workspace)],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[PaginatedWorkspaceMemberships],
            error_mapper=get_workspaces_by_workspace_members_error_mapper,
            request_options=request_options,
        )

    def get_workspaces_by_workspace_members_by_member(
        self, member: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[WorkspaceMembership, GetWorkspacesByWorkspaceMembersByMemberErrorBody]:
        """Returns the workspace membership, which includes a ``User`` object for the member and a ``Workspace`` object
        for the requested workspace.

        Args:
            member: Member's UUID or Atlassian ID.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/workspaces/{workspace}/members/{member}"),
            path_params=[param[str]("member", member), param[str]("workspace", workspace)],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[WorkspaceMembership],
            error_mapper=get_workspaces_by_workspace_members_by_member_error_mapper,
            request_options=request_options,
        )

    def get_workspaces_by_workspace_permissions(
        self, workspace: str, *, q: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[PaginatedWorkspaceMemberships, GetWorkspacesByWorkspacePermissionsErrorBody]:
        """Returns the list of members in a workspace and their permission levels. Permission can be:
        * ``owner``
        * ``collaborator``
        * ``member``

        **The ``collaborator`` role is being removed from the Bitbucket Cloud API. For more information, see the
        deprecation announcement.**

        **When you move your administration from Bitbucket Cloud to admin.atlassian.com, the following fields on
        ``workspace_membership`` will no longer be present: ``last_accessed`` and ``added_on``. See the deprecation
        announcement.**

        Results may be further filtered by permission by adding the following query string parameters:

        * ``q=permission="owner"``

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            q: Query string to narrow down the response as per `filtering and sorting
                </cloud/bitbucket/rest/intro/#filtering>`__.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/workspaces/{workspace}/permissions"),
            path_params=[param[str]("workspace", workspace)],
            query_params=[param[str | None]("q", q)],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[PaginatedWorkspaceMemberships],
            error_mapper=get_workspaces_by_workspace_permissions_error_mapper,
            request_options=request_options,
        )

    def get_workspaces_by_workspace_permissions_repositories(
        self,
        workspace: str,
        *,
        q: str | None = None,
        sort: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PaginatedRepositoryPermissions, GetWorkspacesByWorkspacePermissionsRepositoriesErrorBody]:
        """Returns an object for each repository permission for all of a workspace's repositories.

        Permissions returned are effective permissions: the highest level of permission the user has. This does not
        distinguish between direct and indirect (group) privileges.

        Only users with admin permission for the team may access this resource.

        Permissions can be:

        * ``admin``
        * ``write``
        * ``read``

        Results may be further filtered or sorted by repository, user, or permission by adding the following query
        string parameters:

        * ``q=repository.name="geordi"`` or ``q=permission>"read"``
        * ``sort=user.display_name``

        Note that the query parameter values need to be URL escaped so that ``=`` would become ``%3D``.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
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
            url_template=self._server.default("/workspaces/{workspace}/permissions/repositories"),
            path_params=[param[str]("workspace", workspace)],
            query_params=[param[str | None]("q", q), param[str | None]("sort", sort)],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[PaginatedRepositoryPermissions],
            error_mapper=get_workspaces_by_workspace_permissions_repositories_error_mapper,
            request_options=request_options,
        )

    def get_workspaces_by_workspace_permissions_repositories_by_repo_slug(
        self,
        repo_slug: str,
        workspace: str,
        *,
        q: str | None = None,
        sort: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PaginatedRepositoryPermissions, GetWorkspacesByWorkspacePermissionsRepositoriesByRepoSlugErrorBody]:
        """Returns an object for the repository permission of each user in the requested repository.

        Permissions returned are effective permissions: the highest level of permission the user has. This does not
        distinguish between direct and indirect (group) privileges.

        Only users with admin permission for the repository may access this resource.

        Permissions can be:

        * ``admin``
        * ``write``
        * ``read``

        Results may be further filtered or sorted by user, or permission by adding the following query string
        parameters:

        * ``q=permission>"read"``
        * ``sort=user.display_name``

        Note that the query parameter values need to be URL escaped so that ``=`` would become ``%3D``.

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
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
            url_template=self._server.default("/workspaces/{workspace}/permissions/repositories/{repo_slug}"),
            path_params=[param[str]("repo_slug", repo_slug), param[str]("workspace", workspace)],
            query_params=[param[str | None]("q", q), param[str | None]("sort", sort)],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[PaginatedRepositoryPermissions],
            error_mapper=get_workspaces_by_workspace_permissions_repositories_by_repo_slug_error_mapper,
            request_options=request_options,
        )

    def get_workspaces_by_workspace_projects(
        self, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[PaginatedProjects, GetWorkspacesByWorkspaceProjectsErrorBody]:
        """Returns the list of projects in this workspace.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/workspaces/{workspace}/projects"),
            path_params=[param[str]("workspace", workspace)],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[PaginatedProjects],
            error_mapper=get_workspaces_by_workspace_projects_error_mapper,
            request_options=request_options,
        )

    def get_workspaces_by_workspace_projects_by_project_key2(
        self, project_key: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ProjectBitbucketDeploymentsApi, GetWorkspacesByWorkspaceProjectsByProjectKey2ErrorBody]:
        """Returns the requested project.

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
            url_template=self._server.default("/workspaces/{workspace}/projects/{project_key}"),
            path_params=[param[str]("project_key", project_key), param[str]("workspace", workspace)],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[ProjectBitbucketDeploymentsApi],
            error_mapper=get_workspaces_by_workspace_projects_by_project_key2_error_mapper,
            request_options=request_options,
        )

    def get_workspaces_by_workspace_pullrequests_by_selected_user2(
        self,
        selected_user: str,
        workspace: str,
        *,
        state: State2BitbucketWorkspacesApiOrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PaginatedPullRequests, GetWorkspacesByWorkspacePullrequestsBySelectedUser2ErrorBody]:
        """Returns all workspace pull requests authored by the specified user.

        By default only open pull requests are returned. This can be controlled using the ``state`` query parameter. To
        retrieve pull requests that are in one of multiple states, repeat the ``state`` parameter for each individual
        state.

        This endpoint also supports filtering and sorting of the results. See filtering and sorting for more details.

        Args:
            selected_user: This can either be the username of the pull request author, the author's UUID surrounded by
                curly-braces, for example: ``{account UUID}``, or the author's Atlassian ID.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            state: Only return pull requests that are in this state. This parameter can be repeated.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/workspaces/{workspace}/pullrequests/{selected_user}"),
            path_params=[param[str]("selected_user", selected_user), param[str]("workspace", workspace)],
            query_params=[param[State2BitbucketWorkspacesApiOrStr | None]("state", state)],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[PaginatedPullRequests],
            error_mapper=get_workspaces_by_workspace_pullrequests_by_selected_user2_error_mapper,
            request_options=request_options,
        )

    def post_workspaces_by_workspace_hooks2(
        self, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[WebhookSubscription, PostWorkspacesByWorkspaceHooks2ErrorBody]:
        """Creates a new webhook on the specified workspace.

        Workspace webhooks are fired for events from all repositories contained by that workspace.

        Example:

        ```
        $ curl -X POST -u credentials -H 'Content-Type: application/json'
        https://api.bitbucket.org/2.0/workspaces/my-workspace/hooks -d '
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

        This call requires the webhook scope, as well as any scope that applies to the events that the webhook
        subscribes to. In the example above that means: ``webhook``, ``repository`` and ``issue``.

        The ``url`` must properly resolve and cannot be an internal, non-routed address.

        Only workspace owners can install webhooks on workspaces.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/workspaces/{workspace}/hooks"),
            path_params=[param[str]("workspace", workspace)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[WebhookSubscription],
            error_mapper=post_workspaces_by_workspace_hooks2_error_mapper,
            request_options=request_options,
        )

    def put_workspaces_by_workspace_hooks_by_uid2(
        self, uid: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[WebhookSubscription, PutWorkspacesByWorkspaceHooksByUid2ErrorBody]:
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
            uid: Installed webhook's ID
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/workspaces/{workspace}/hooks/{uid}"),
            path_params=[param[str]("uid", uid), param[str]("workspace", workspace)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[WebhookSubscription],
            error_mapper=put_workspaces_by_workspace_hooks_by_uid2_error_mapper,
            request_options=request_options,
        )


class AsyncWorkspacesWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def delete_workspaces_by_workspace_hooks_by_uid2(
        self, uid: str, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteWorkspacesByWorkspaceHooksByUid2ErrorBody]:
        """Deletes the specified webhook subscription from the given workspace.

        Args:
            uid: Installed webhook's ID
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/workspaces/{workspace}/hooks/{uid}"),
            path_params=[param[str]("uid", uid), param[str]("workspace", workspace)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_empty_response,
            error_mapper=delete_workspaces_by_workspace_hooks_by_uid2_error_mapper,
            request_options=request_options,
        )

    async def get_user_permissions_workspaces(
        self, *, q: str | None = None, sort: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[PaginatedWorkspaceMemberships, GetUserPermissionsWorkspacesErrorBody]:
        """**This endpoint is deprecated. Please use the supported alternatives:**
        * List workspaces for user
        * Get user permission on a workspace

        Returns an object for each workspace the caller is a member of, and their effective role - the highest level of
        privilege the caller has. If a user is a member of multiple groups with distinct roles, only the highest level
        is returned.

        Permissions can be:

        * ``owner``
        * ``collaborator``
        * ``member``

        **The ``collaborator`` role is being removed from the Bitbucket Cloud API. For more information, see the
        deprecation announcement.**

        **When you move your administration from Bitbucket Cloud to admin.atlassian.com, the following fields on
        ``workspace_membership`` will no longer be present: ``last_accessed`` and ``added_on``. See the deprecation
        announcement.**

        Results may be further filtered or sorted by workspace or permission by adding the following query string
        parameters:

        * ``q=workspace.slug="bbworkspace1"`` or ``q=permission="owner"``
        * ``sort=workspace.slug``

        Note that the query parameter values need to be URL escaped so that ``=`` would become ``%3D``.

        Args:
            q: Query string to narrow down the response. See `filtering and sorting
                </cloud/bitbucket/rest/intro/#filtering>`__ for details.
            sort: Name of a response property to sort results. See `filtering and sorting
                </cloud/bitbucket/rest/intro/#sorting-query-results>`__ for details.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/user/permissions/workspaces"),
            query_params=[param[str | None]("q", q), param[str | None]("sort", sort)],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[PaginatedWorkspaceMemberships],
            error_mapper=get_user_permissions_workspaces_error_mapper,
            request_options=request_options,
        )

    async def get_user_workspaces(
        self,
        *,
        sort: str | None = None,
        administrator: bool | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PaginatedWorkspacePermissions, GetUserWorkspacesErrorBody]:
        """Returns an object for each workspace accessible to the caller. This object also contains details on whether
        the caller has admin permissions on the workspace (``"administrator" = true``) or not (``"administrator" =
        false``).

        Queries support filtering based on administrator permissions, sorting or filtering by ``slug``. Results can be
        paginated.

        Args:
            sort: Name of a response property to sort results (only slug is supported).
            administrator: Filter workspaces based on which ones the caller has admin permissions or not.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/user/workspaces"),
            query_params=[param[str | None]("sort", sort), param[bool | None]("administrator", administrator)],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[PaginatedWorkspacePermissions],
            error_mapper=get_user_workspaces_error_mapper,
            request_options=request_options,
        )

    async def get_user_workspaces_by_workspace_permission(
        self, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[WorkspaceMembership, GetUserWorkspacesByWorkspacePermissionErrorBody]:
        """Returns the caller's effective role; as in, the highest level of privilege the caller has for the workspace.
        If the calling user is a member of multiple groups with distinct roles, only the highest level is returned.

        Permissions can be:

        * ``owner``
        * ``create-project``
        * ``collaborator`` (deprecated; see this
        deprecation announcement for more details)
        * ``member``

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/user/workspaces/{workspace}/permission"),
            path_params=[param[str]("workspace", workspace)],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[WorkspaceMembership],
            error_mapper=get_user_workspaces_by_workspace_permission_error_mapper,
            request_options=request_options,
        )

    async def get_workspaces(
        self,
        *,
        role: Role1BitbucketWorkspacesApiOrStr | None = None,
        q: str | None = None,
        sort: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PaginatedWorkspaces, GetWorkspacesErrorBody]:
        """**This endpoint is deprecated. Please use the supported alternative.**

        Returns a list of workspaces accessible by the authenticated user.

        Results may be further filtered or sorted by workspace or permission by adding the following query string
        parameters:

        * ``q=slug="bbworkspace1"`` or ``q=is_private=true``
        * ``sort=created_on``

        Note that the query parameter values need to be URL escaped so that ``=`` would become ``%3D``.

        **The ``collaborator`` role is being removed from the Bitbucket Cloud API. For more information, see the
        deprecation announcement.**

        Args:
            role: Filters the workspaces based on the authenticated user's role on each workspace. * **member**: returns
                a list of all the workspaces which the caller is a member of at least one workspace group or repository
                * **collaborator**: returns a list of workspaces which the caller has write access to at least one
                repository in the workspace * **owner**: returns a list of workspaces which the caller has administrator
                access
            q: Query string to narrow down the response. See `filtering and sorting
                </cloud/bitbucket/rest/intro/#filtering>`__ for details.
            sort: Name of a response property to sort results. See `filtering and sorting
                </cloud/bitbucket/rest/intro/#sorting-query-results>`__ for details.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/workspaces"),
            query_params=[
                param[Role1BitbucketWorkspacesApiOrStr | None]("role", role),
                param[str | None]("q", q),
                param[str | None]("sort", sort),
            ],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[PaginatedWorkspaces],
            error_mapper=get_workspaces_error_mapper,
            request_options=request_options,
        )

    async def get_workspaces_by_workspace(
        self, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[WorkspaceBitbucketWorkspacesApi, GetWorkspacesByWorkspaceErrorBody]:
        """Returns the requested workspace.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/workspaces/{workspace}"),
            path_params=[param[str]("workspace", workspace)],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[WorkspaceBitbucketWorkspacesApi],
            error_mapper=get_workspaces_by_workspace_error_mapper,
            request_options=request_options,
        )

    async def get_workspaces_by_workspace_hooks2(
        self, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[PaginatedWebhookSubscriptions, GetWorkspacesByWorkspaceHooks2ErrorBody]:
        """Returns a paginated list of webhooks installed on this workspace.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/workspaces/{workspace}/hooks"),
            path_params=[param[str]("workspace", workspace)],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[PaginatedWebhookSubscriptions],
            error_mapper=get_workspaces_by_workspace_hooks2_error_mapper,
            request_options=request_options,
        )

    async def get_workspaces_by_workspace_hooks_by_uid2(
        self, uid: str, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[WebhookSubscription, GetWorkspacesByWorkspaceHooksByUid2ErrorBody]:
        """Returns the webhook with the specified id installed on the given workspace.

        Args:
            uid: Installed webhook's ID
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/workspaces/{workspace}/hooks/{uid}"),
            path_params=[param[str]("uid", uid), param[str]("workspace", workspace)],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[WebhookSubscription],
            error_mapper=get_workspaces_by_workspace_hooks_by_uid2_error_mapper,
            request_options=request_options,
        )

    async def get_workspaces_by_workspace_members(
        self, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[PaginatedWorkspaceMemberships, GetWorkspacesByWorkspaceMembersErrorBody]:
        """Returns all members of the requested workspace.

        This endpoint additionally supports filtering by email address, if called by a workspace administrator,
        integration or workspace access token. This is done by adding the following query string parameter:

        * ``q=user.email IN ("user1@org.com","user2@org.com")``

        When filtering by email, you can query up to 90 addresses at a time. Note that the query parameter values need
        to be URL escaped, so the final query string should be:

        * ``q=user.email%20IN%20(%22user1@org.com%22,%22user2@org.com%22)``

        Email addresses that you filter by (and only these email addresses) can be included in the response using the
        ``fields`` query parameter:

        * ``&fields=+values.user.email`` - add the ``email`` field to the default ``user`` response object
        * ``&fields=values.user.email,values.user.account_id`` - only return user email addresses and
        account IDs

        Once again, all query parameter values must be URL escaped.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/workspaces/{workspace}/members"),
            path_params=[param[str]("workspace", workspace)],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[PaginatedWorkspaceMemberships],
            error_mapper=get_workspaces_by_workspace_members_error_mapper,
            request_options=request_options,
        )

    async def get_workspaces_by_workspace_members_by_member(
        self, member: str, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[WorkspaceMembership, GetWorkspacesByWorkspaceMembersByMemberErrorBody]:
        """Returns the workspace membership, which includes a ``User`` object for the member and a ``Workspace`` object
        for the requested workspace.

        Args:
            member: Member's UUID or Atlassian ID.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/workspaces/{workspace}/members/{member}"),
            path_params=[param[str]("member", member), param[str]("workspace", workspace)],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[WorkspaceMembership],
            error_mapper=get_workspaces_by_workspace_members_by_member_error_mapper,
            request_options=request_options,
        )

    async def get_workspaces_by_workspace_permissions(
        self, workspace: str, *, q: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[PaginatedWorkspaceMemberships, GetWorkspacesByWorkspacePermissionsErrorBody]:
        """Returns the list of members in a workspace and their permission levels. Permission can be:
        * ``owner``
        * ``collaborator``
        * ``member``

        **The ``collaborator`` role is being removed from the Bitbucket Cloud API. For more information, see the
        deprecation announcement.**

        **When you move your administration from Bitbucket Cloud to admin.atlassian.com, the following fields on
        ``workspace_membership`` will no longer be present: ``last_accessed`` and ``added_on``. See the deprecation
        announcement.**

        Results may be further filtered by permission by adding the following query string parameters:

        * ``q=permission="owner"``

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            q: Query string to narrow down the response as per `filtering and sorting
                </cloud/bitbucket/rest/intro/#filtering>`__.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/workspaces/{workspace}/permissions"),
            path_params=[param[str]("workspace", workspace)],
            query_params=[param[str | None]("q", q)],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[PaginatedWorkspaceMemberships],
            error_mapper=get_workspaces_by_workspace_permissions_error_mapper,
            request_options=request_options,
        )

    async def get_workspaces_by_workspace_permissions_repositories(
        self,
        workspace: str,
        *,
        q: str | None = None,
        sort: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PaginatedRepositoryPermissions, GetWorkspacesByWorkspacePermissionsRepositoriesErrorBody]:
        """Returns an object for each repository permission for all of a workspace's repositories.

        Permissions returned are effective permissions: the highest level of permission the user has. This does not
        distinguish between direct and indirect (group) privileges.

        Only users with admin permission for the team may access this resource.

        Permissions can be:

        * ``admin``
        * ``write``
        * ``read``

        Results may be further filtered or sorted by repository, user, or permission by adding the following query
        string parameters:

        * ``q=repository.name="geordi"`` or ``q=permission>"read"``
        * ``sort=user.display_name``

        Note that the query parameter values need to be URL escaped so that ``=`` would become ``%3D``.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
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
            url_template=self._server.default("/workspaces/{workspace}/permissions/repositories"),
            path_params=[param[str]("workspace", workspace)],
            query_params=[param[str | None]("q", q), param[str | None]("sort", sort)],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[PaginatedRepositoryPermissions],
            error_mapper=get_workspaces_by_workspace_permissions_repositories_error_mapper,
            request_options=request_options,
        )

    async def get_workspaces_by_workspace_permissions_repositories_by_repo_slug(
        self,
        repo_slug: str,
        workspace: str,
        *,
        q: str | None = None,
        sort: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PaginatedRepositoryPermissions, GetWorkspacesByWorkspacePermissionsRepositoriesByRepoSlugErrorBody]:
        """Returns an object for the repository permission of each user in the requested repository.

        Permissions returned are effective permissions: the highest level of permission the user has. This does not
        distinguish between direct and indirect (group) privileges.

        Only users with admin permission for the repository may access this resource.

        Permissions can be:

        * ``admin``
        * ``write``
        * ``read``

        Results may be further filtered or sorted by user, or permission by adding the following query string
        parameters:

        * ``q=permission>"read"``
        * ``sort=user.display_name``

        Note that the query parameter values need to be URL escaped so that ``=`` would become ``%3D``.

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
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
            url_template=self._server.default("/workspaces/{workspace}/permissions/repositories/{repo_slug}"),
            path_params=[param[str]("repo_slug", repo_slug), param[str]("workspace", workspace)],
            query_params=[param[str | None]("q", q), param[str | None]("sort", sort)],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[PaginatedRepositoryPermissions],
            error_mapper=get_workspaces_by_workspace_permissions_repositories_by_repo_slug_error_mapper,
            request_options=request_options,
        )

    async def get_workspaces_by_workspace_projects(
        self, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[PaginatedProjects, GetWorkspacesByWorkspaceProjectsErrorBody]:
        """Returns the list of projects in this workspace.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/workspaces/{workspace}/projects"),
            path_params=[param[str]("workspace", workspace)],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[PaginatedProjects],
            error_mapper=get_workspaces_by_workspace_projects_error_mapper,
            request_options=request_options,
        )

    async def get_workspaces_by_workspace_projects_by_project_key2(
        self, project_key: str, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ProjectBitbucketDeploymentsApi, GetWorkspacesByWorkspaceProjectsByProjectKey2ErrorBody]:
        """Returns the requested project.

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
            url_template=self._server.default("/workspaces/{workspace}/projects/{project_key}"),
            path_params=[param[str]("project_key", project_key), param[str]("workspace", workspace)],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[ProjectBitbucketDeploymentsApi],
            error_mapper=get_workspaces_by_workspace_projects_by_project_key2_error_mapper,
            request_options=request_options,
        )

    async def get_workspaces_by_workspace_pullrequests_by_selected_user2(
        self,
        selected_user: str,
        workspace: str,
        *,
        state: State2BitbucketWorkspacesApiOrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PaginatedPullRequests, GetWorkspacesByWorkspacePullrequestsBySelectedUser2ErrorBody]:
        """Returns all workspace pull requests authored by the specified user.

        By default only open pull requests are returned. This can be controlled using the ``state`` query parameter. To
        retrieve pull requests that are in one of multiple states, repeat the ``state`` parameter for each individual
        state.

        This endpoint also supports filtering and sorting of the results. See filtering and sorting for more details.

        Args:
            selected_user: This can either be the username of the pull request author, the author's UUID surrounded by
                curly-braces, for example: ``{account UUID}``, or the author's Atlassian ID.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            state: Only return pull requests that are in this state. This parameter can be repeated.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/workspaces/{workspace}/pullrequests/{selected_user}"),
            path_params=[param[str]("selected_user", selected_user), param[str]("workspace", workspace)],
            query_params=[param[State2BitbucketWorkspacesApiOrStr | None]("state", state)],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[PaginatedPullRequests],
            error_mapper=get_workspaces_by_workspace_pullrequests_by_selected_user2_error_mapper,
            request_options=request_options,
        )

    async def post_workspaces_by_workspace_hooks2(
        self, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[WebhookSubscription, PostWorkspacesByWorkspaceHooks2ErrorBody]:
        """Creates a new webhook on the specified workspace.

        Workspace webhooks are fired for events from all repositories contained by that workspace.

        Example:

        ```
        $ curl -X POST -u credentials -H 'Content-Type: application/json'
        https://api.bitbucket.org/2.0/workspaces/my-workspace/hooks -d '
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

        This call requires the webhook scope, as well as any scope that applies to the events that the webhook
        subscribes to. In the example above that means: ``webhook``, ``repository`` and ``issue``.

        The ``url`` must properly resolve and cannot be an internal, non-routed address.

        Only workspace owners can install webhooks on workspaces.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/workspaces/{workspace}/hooks"),
            path_params=[param[str]("workspace", workspace)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[WebhookSubscription],
            error_mapper=post_workspaces_by_workspace_hooks2_error_mapper,
            request_options=request_options,
        )

    async def put_workspaces_by_workspace_hooks_by_uid2(
        self, uid: str, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[WebhookSubscription, PutWorkspacesByWorkspaceHooksByUid2ErrorBody]:
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
            uid: Installed webhook's ID
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/workspaces/{workspace}/hooks/{uid}"),
            path_params=[param[str]("uid", uid), param[str]("workspace", workspace)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[WebhookSubscription],
            error_mapper=put_workspaces_by_workspace_hooks_by_uid2_error_mapper,
            request_options=request_options,
        )

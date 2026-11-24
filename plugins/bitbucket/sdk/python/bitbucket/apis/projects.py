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
from ..errors.delete_workspaces_by_workspace_projects_by_project_key_default_reviewers_by_selected_user_error import (
    DeleteWorkspacesByWorkspaceProjectsByProjectKeyDefaultReviewersBySelectedUserErrorBody,
    delete_workspaces_by_workspace_projects_by_project_key_default_reviewers_by_selected_user_error_mapper,
)
from ..errors.delete_workspaces_by_workspace_projects_by_project_key_error import (
    DeleteWorkspacesByWorkspaceProjectsByProjectKeyErrorBody,
    delete_workspaces_by_workspace_projects_by_project_key_error_mapper,
)
from ..errors.delete_workspaces_by_workspace_projects_by_project_key_permissions_config_groups_by_group_slug_error import (
    DeleteWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigGroupsByGroupSlugErrorBody,
    delete_workspaces_by_workspace_projects_by_project_key_permissions_config_groups_by_group_slug_error_mapper,
)
from ..errors.delete_workspaces_by_workspace_projects_by_project_key_permissions_config_users_by_selected_user_id_error import (
    DeleteWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigUsersBySelectedUserIdErrorBody,
    delete_workspaces_by_workspace_projects_by_project_key_permissions_config_users_by_selected_user_id_error_mapper,
)
from ..errors.get_workspaces_by_workspace_projects_by_project_key_default_reviewers_by_selected_user_error import (
    GetWorkspacesByWorkspaceProjectsByProjectKeyDefaultReviewersBySelectedUserErrorBody,
    get_workspaces_by_workspace_projects_by_project_key_default_reviewers_by_selected_user_error_mapper,
)
from ..errors.get_workspaces_by_workspace_projects_by_project_key_default_reviewers_error import (
    GetWorkspacesByWorkspaceProjectsByProjectKeyDefaultReviewersErrorBody,
    get_workspaces_by_workspace_projects_by_project_key_default_reviewers_error_mapper,
)
from ..errors.get_workspaces_by_workspace_projects_by_project_key_error import (
    GetWorkspacesByWorkspaceProjectsByProjectKeyErrorBody,
    get_workspaces_by_workspace_projects_by_project_key_error_mapper,
)
from ..errors.get_workspaces_by_workspace_projects_by_project_key_permissions_config_groups_by_group_slug_error import (
    GetWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigGroupsByGroupSlugErrorBody,
    get_workspaces_by_workspace_projects_by_project_key_permissions_config_groups_by_group_slug_error_mapper,
)
from ..errors.get_workspaces_by_workspace_projects_by_project_key_permissions_config_groups_error import (
    GetWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigGroupsErrorBody,
    get_workspaces_by_workspace_projects_by_project_key_permissions_config_groups_error_mapper,
)
from ..errors.get_workspaces_by_workspace_projects_by_project_key_permissions_config_users_by_selected_user_id_error import (
    GetWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigUsersBySelectedUserIdErrorBody,
    get_workspaces_by_workspace_projects_by_project_key_permissions_config_users_by_selected_user_id_error_mapper,
)
from ..errors.get_workspaces_by_workspace_projects_by_project_key_permissions_config_users_error import (
    GetWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigUsersErrorBody,
    get_workspaces_by_workspace_projects_by_project_key_permissions_config_users_error_mapper,
)
from ..errors.post_workspaces_by_workspace_projects_error import (
    PostWorkspacesByWorkspaceProjectsErrorBody,
    post_workspaces_by_workspace_projects_error_mapper,
)
from ..errors.put_workspaces_by_workspace_projects_by_project_key_default_reviewers_by_selected_user_error import (
    PutWorkspacesByWorkspaceProjectsByProjectKeyDefaultReviewersBySelectedUserErrorBody,
    put_workspaces_by_workspace_projects_by_project_key_default_reviewers_by_selected_user_error_mapper,
)
from ..errors.put_workspaces_by_workspace_projects_by_project_key_error import (
    PutWorkspacesByWorkspaceProjectsByProjectKeyErrorBody,
    put_workspaces_by_workspace_projects_by_project_key_error_mapper,
)
from ..errors.put_workspaces_by_workspace_projects_by_project_key_permissions_config_groups_by_group_slug_error import (
    PutWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigGroupsByGroupSlugErrorBody,
    put_workspaces_by_workspace_projects_by_project_key_permissions_config_groups_by_group_slug_error_mapper,
)
from ..errors.put_workspaces_by_workspace_projects_by_project_key_permissions_config_users_by_selected_user_id_error import (
    PutWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigUsersBySelectedUserIdErrorBody,
    put_workspaces_by_workspace_projects_by_project_key_permissions_config_users_by_selected_user_id_error_mapper,
)
from ..models.bitbucket_apps_permissions_serializers_project_permission_update_schema import (
    BitbucketAppsPermissionsSerializersProjectPermissionUpdateSchema,
    BitbucketAppsPermissionsSerializersProjectPermissionUpdateSchemaDict,
)
from ..models.paginated_default_reviewer_and_type import PaginatedDefaultReviewerAndType
from ..models.paginated_project_group_permissions import PaginatedProjectGroupPermissions
from ..models.paginated_project_user_permissions import PaginatedProjectUserPermissions
from ..models.project_bitbucket_projects_api import ProjectBitbucketProjectsApi, ProjectBitbucketProjectsApiDict
from ..models.project_group_permission import ProjectGroupPermission
from ..models.project_user_permission import ProjectUserPermission
from ..models.user import User
from ..server.server import Server


class Projects:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = ProjectsWithRawResponse(client, server, auth)

    def delete_workspaces_by_workspace_projects_by_project_key(
        self, project_key: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Deletes this project. This is an irreversible operation.

        You cannot delete a project that still contains repositories. To delete the project, delete or transfer the
        repositories first.

        Example:
        ```
        $ curl -X DELETE https://api.bitbucket.org/2.0/workspaces/bbworkspace1/projects/PROJ
        ```

        Args:
            project_key: The project in question. This is the actual ``key`` assigned to the project.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful deletion.

        Raises:
            ApiError: The requesting user isn't authorized to delete the project or the project isn't empty. A project
                isn't hosted at this location. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.delete_workspaces_by_workspace_projects_by_project_key(
                project_key, workspace, request_options=request_options
            ),
        )

    def delete_workspaces_by_workspace_projects_by_project_key_default_reviewers_by_selected_user(
        self,
        project_key: str,
        selected_user: str,
        workspace: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Removes a default reviewer from the project.

        Example:
        ```
        $ curl https://api.bitbucket.org/2.0/.../default-reviewers/%7Bf0e0e8e9-66c1-4b85-a784-44a9eb9ef1a6%7D

        HTTP/1.1 204
        ```

        Args:
            project_key: The project in question. This can either be the actual ``key`` assigned to the project or the
                ``UUID`` (surrounded by curly-braces (``{}``)).
            selected_user: This can either be the username or the UUID of the default reviewer, surrounded by
                curly-braces, for example: ``{account UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The specified user was removed from the list of project default reviewers

        Raises:
            ApiError: If the specified user is not a default reviewer for the project If the authenticated user does not
                have admin access to the project If the specified user, project, or workspace does not exist ``error``
                is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.delete_workspaces_by_workspace_projects_by_project_key_default_reviewers_by_selected_user(
                project_key, selected_user, workspace, request_options=request_options
            ),
        )

    def delete_workspaces_by_workspace_projects_by_project_key_permissions_config_groups_by_group_slug(
        self, group_slug: str, project_key: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Deletes the project group permission between the requested project and group, if one exists.

        Only users with admin permission for the project may access this resource.

        Args:
            group_slug: Slug of the requested group.
            project_key: The project in question. This is the actual key assigned to the project.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The project group permission was deleted and no content returned.

        Raises:
            ApiError: The user couldn't be authenticated. The requesting user isn't an admin of the project, or the
                authentication method was not via app password. One or more of the workspace, project, and group doesn't
                exist for the given identifiers or the requesting user is not authenticated ``error`` is ``Error |
                RawError``."""
        return unwrap(
            self._with_raw_response.delete_workspaces_by_workspace_projects_by_project_key_permissions_config_groups_by_group_slug(
                group_slug, project_key, workspace, request_options=request_options
            ),
        )

    def delete_workspaces_by_workspace_projects_by_project_key_permissions_config_users_by_selected_user_id(
        self,
        project_key: str,
        selected_user_id: str,
        workspace: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Deletes the project user permission between the requested project and user, if one exists.

        Only users with admin permission for the project may access this resource.

        Due to security concerns, the JWT and OAuth authentication methods are unsupported. This is to ensure
        integrations and add-ons are not allowed to change permissions.

        Args:
            project_key: The project in question. This is the actual key assigned to the project.
            selected_user_id: This can either be the username, the user's UUID surrounded by curly-braces, for example:
                {account UUID}, or the user's Atlassian ID.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The project user permission was deleted and no content returned.

        Raises:
            ApiError: The user couldn't be authenticated. The requesting user isn't an admin of the project, or the
                authentication method was not via app password. One or more of the workspace, project, and selected user
                doesn't exist for the given identifiers or the requesting user is not authenticated ``error`` is ``Error
                | RawError``."""
        return unwrap(
            self._with_raw_response.delete_workspaces_by_workspace_projects_by_project_key_permissions_config_users_by_selected_user_id(
                project_key, selected_user_id, workspace, request_options=request_options
            ),
        )

    def get_workspaces_by_workspace_projects_by_project_key(
        self, project_key: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ProjectBitbucketProjectsApi:
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
            self._with_raw_response.get_workspaces_by_workspace_projects_by_project_key(
                project_key, workspace, request_options=request_options
            ),
        )

    def get_workspaces_by_workspace_projects_by_project_key_default_reviewers(
        self, project_key: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> PaginatedDefaultReviewerAndType:
        """Return a list of all default reviewers for a project. This is a list of users that will be added as default
        reviewers to pull requests for any repository within the project.

        Args:
            project_key: The project in question. This is the actual ``key`` assigned to the project.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The list of project default reviewers

        Raises:
            ApiError: If the authenticated user does not have admin access to the project If the workspace or project
                does not exist at this location ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_workspaces_by_workspace_projects_by_project_key_default_reviewers(
                project_key, workspace, request_options=request_options
            ),
        )

    def get_workspaces_by_workspace_projects_by_project_key_default_reviewers_by_selected_user(
        self,
        project_key: str,
        selected_user: str,
        workspace: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> User:
        """Returns the specified default reviewer.

        Args:
            project_key: The project in question. This can either be the actual ``key`` assigned to the project or the
                ``UUID`` (surrounded by curly-braces (``{}``)).
            selected_user: This can either be the username or the UUID of the default reviewer, surrounded by
                curly-braces, for example: ``{account UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The specified user that is a default reviewer

        Raises:
            ApiError: If the specified user is not a default reviewer for the project If the authenticated user does not
                have admin access to the project If the specified user, project, or workspace does not exist ``error``
                is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_workspaces_by_workspace_projects_by_project_key_default_reviewers_by_selected_user(
                project_key, selected_user, workspace, request_options=request_options
            ),
        )

    def get_workspaces_by_workspace_projects_by_project_key_permissions_config_groups(
        self, project_key: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> PaginatedProjectGroupPermissions:
        """Returns a paginated list of explicit group permissions for the given project. This endpoint does not support
        BBQL features.

        Args:
            project_key: The project in question. This is the actual key assigned to the project.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Paginated list of project group permissions

        Raises:
            ApiError: The user couldn't be authenticated. The user doesn't have admin access to the project. One or both
                of the workspace and project don't exist for the given identifiers or the requesting user is not
                authenticated ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_workspaces_by_workspace_projects_by_project_key_permissions_config_groups(
                project_key, workspace, request_options=request_options
            ),
        )

    def get_workspaces_by_workspace_projects_by_project_key_permissions_config_groups_by_group_slug(
        self, group_slug: str, project_key: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ProjectGroupPermission:
        """Returns the group permission for a given group and project.

        Only users with admin permission for the project may access this resource.

        Permissions can be:

        * ``admin``
        * ``create-repo``
        * ``write``
        * ``read``
        * ``none``

        Args:
            group_slug: Slug of the requested group.
            project_key: The project in question. This is the actual key assigned to the project.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Project group permission

        Raises:
            ApiError: The user couldn't be authenticated. The user doesn't have admin access to the project. One or more
                of the workspace, project, and group doesn't exist for the given identifiers or the requesting user is
                not authenticated ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_workspaces_by_workspace_projects_by_project_key_permissions_config_groups_by_group_slug(
                group_slug, project_key, workspace, request_options=request_options
            ),
        )

    def get_workspaces_by_workspace_projects_by_project_key_permissions_config_users(
        self, project_key: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> PaginatedProjectUserPermissions:
        """Returns a paginated list of explicit user permissions for the given project. This endpoint does not support
        BBQL features.

        Args:
            project_key: The project in question. This is the actual key assigned to the project.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Paginated list of explicit user permissions.

        Raises:
            ApiError: The user couldn't be authenticated. The user doesn't have admin access to the project. One or both
                of the workspace and project don't exist for the given identifiers or the requesting user is not
                authenticated ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_workspaces_by_workspace_projects_by_project_key_permissions_config_users(
                project_key, workspace, request_options=request_options
            ),
        )

    def get_workspaces_by_workspace_projects_by_project_key_permissions_config_users_by_selected_user_id(
        self,
        project_key: str,
        selected_user_id: str,
        workspace: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ProjectUserPermission:
        """Returns the explicit user permission for a given user and project.

        Only users with admin permission for the project may access this resource.

        Permissions can be:

        * ``admin``
        * ``create-repo``
        * ``write``
        * ``read``
        * ``none``

        Args:
            project_key: The project in question. This is the actual key assigned to the project.
            selected_user_id: This can either be the username, the user's UUID surrounded by curly-braces, for example:
                {account UUID}, or the user's Atlassian ID.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Explicit user permission for user and project

        Raises:
            ApiError: The user couldn't be authenticated. The requesting user isn't an admin of the project. One or more
                of the workspace, project, and selected user doesn't exist for the given identifiers or the requesting
                user is not authenticated ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_workspaces_by_workspace_projects_by_project_key_permissions_config_users_by_selected_user_id(
                project_key, selected_user_id, workspace, request_options=request_options
            ),
        )

    def post_workspaces_by_workspace_projects(
        self,
        workspace: str,
        body: ProjectBitbucketProjectsApi | ProjectBitbucketProjectsApiDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ProjectBitbucketProjectsApi:
        r"""Creates a new project.

        Note that the avatar has to be embedded as either a data-url or a URL to an external image as shown in the
        examples below:

        ```
        $ body=$(cat << EOF
        {
        "name": "Mars Project", "key": "MARS", "description": "Software for colonizing mars.", "links": { "avatar": {
        "href": "data:image/gif;base64,R0lGODlhEAAQAMQAAORHHOVSKudfOulrSOp3WOyDZu6QdvCchPGolfO0o/..."
        }
        },
        "is_private": false
        }
        EOF
        )
        $ curl -H "Content-Type: application/json" \ -X POST \ -d "$body" \
        https://api.bitbucket.org/2.0/workspaces/teams-in-space/projects/ | jq .
        {
        // Serialized project document
        }
        ```

        or even:

        ```
        $ body=$(cat << EOF
        {
        "name": "Mars Project", "key": "MARS", "description": "Software for colonizing mars.", "links": { "avatar": {
        "href": "http://i.imgur.com/72tRx4w.gif"
        }
        },
        "is_private": false
        }
        EOF
        )
        $ curl -H "Content-Type: application/json" \ -X POST \ -d "$body" \
        https://api.bitbucket.org/2.0/workspaces/teams-in-space/projects/ | jq .
        {
        // Serialized project document
        }
        ```

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A new project has been created.

        Raises:
            ApiError: The user requesting to create a project does not have the necessary permissions. A workspace
                doesn't exist at this location. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.post_workspaces_by_workspace_projects(
                workspace, body, request_options=request_options
            ),
        )

    def put_workspaces_by_workspace_projects_by_project_key(
        self,
        project_key: str,
        workspace: str,
        body: ProjectBitbucketProjectsApi | ProjectBitbucketProjectsApiDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ProjectBitbucketProjectsApi:
        """Since this endpoint can be used to both update and to create a project, the request body depends on the
        intent.

        #### Creation

        See the POST documentation for the project collection for an example of the request body.

        Note: The ``key`` should not be specified in the body of request (since it is already present in the URL). The
        ``name`` is required, everything else is optional.

        #### Update

        See the POST documentation for the project collection for an example of the request body.

        Note: The key is not required in the body (since it is already in the URL). The key may be specified in the
        body, if the intent is to change the key itself. In such a scenario, the location of the project is changed and
        is returned in the ``Location`` header of the response.

        Args:
            project_key: The project in question. This is the actual ``key`` assigned to the project.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The existing project is has been updated.

        Raises:
            ApiError: The requesting user isn't authorized to update or create the project. A workspace doesn't exist at
                the location. Note that the project's absence from this location doesn't raise a 404, since a PUT at a
                non-existent location can be used to create a new project. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.put_workspaces_by_workspace_projects_by_project_key(
                project_key, workspace, body, request_options=request_options
            ),
        )

    def put_workspaces_by_workspace_projects_by_project_key_default_reviewers_by_selected_user(
        self,
        project_key: str,
        selected_user: str,
        workspace: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> User:
        """Adds the specified user to the project's list of default reviewers. The method is idempotent. Accepts an
        optional body containing the ``uuid`` of the user to be added.

        Args:
            project_key: The project in question. This can either be the actual ``key`` assigned to the project or the
                ``UUID`` (surrounded by curly-braces (``{}``)).
            selected_user: This can either be the username or the UUID of the default reviewer, surrounded by
                curly-braces, for example: ``{account UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The specified user was added as a project default reviewer

        Raises:
            ApiError: If the specified user cannot be added as a default reviewer for the project If the authenticated
                user does not have admin access to the project If the specified user, project, or workspace does not
                exist ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.put_workspaces_by_workspace_projects_by_project_key_default_reviewers_by_selected_user(
                project_key, selected_user, workspace, request_options=request_options
            ),
        )

    def put_workspaces_by_workspace_projects_by_project_key_permissions_config_groups_by_group_slug(
        self,
        group_slug: str,
        project_key: str,
        workspace: str,
        body: (
            BitbucketAppsPermissionsSerializersProjectPermissionUpdateSchema
            | BitbucketAppsPermissionsSerializersProjectPermissionUpdateSchemaDict
        ),
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ProjectGroupPermission:
        """Updates the group permission, or grants a new permission if one does not already exist.

        Only users with admin permission for the project may access this resource.

        Due to security concerns, the JWT and OAuth authentication methods are unsupported. This is to ensure
        integrations and add-ons are not allowed to change permissions.

        Permissions can be:

        * ``admin``
        * ``create-repo``
        * ``write``
        * ``read``

        Args:
            group_slug: Slug of the requested group.
            project_key: The project in question. This is the actual key assigned to the project.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            body: The permission to grant
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Project group permission updated.

        Raises:
            ApiError: No permission value was provided or the value is invalid(not one of read, write, create-repo, or
                admin). The user couldn't be authenticated. You have reached your plan's user limit and must upgrade
                before giving access to additional users. The requesting user isn't an admin of the project, or the
                authentication method was not via app password. One or more of the workspace, project, and group doesn't
                exist for the given identifiers or the requesting user is not authenticated ``error`` is ``Error |
                RawError``."""
        return unwrap(
            self._with_raw_response.put_workspaces_by_workspace_projects_by_project_key_permissions_config_groups_by_group_slug(
                group_slug, project_key, workspace, body, request_options=request_options
            ),
        )

    def put_workspaces_by_workspace_projects_by_project_key_permissions_config_users_by_selected_user_id(
        self,
        project_key: str,
        selected_user_id: str,
        workspace: str,
        body: (
            BitbucketAppsPermissionsSerializersProjectPermissionUpdateSchema
            | BitbucketAppsPermissionsSerializersProjectPermissionUpdateSchemaDict
        ),
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ProjectUserPermission:
        """Updates the explicit user permission for a given user and project. The selected user must be a member of the
        workspace, and cannot be the workspace owner.

        Only users with admin permission for the project may access this resource.

        Due to security concerns, the JWT and OAuth authentication methods are unsupported. This is to ensure
        integrations and add-ons are not allowed to change permissions.

        Permissions can be:

        * ``admin``
        * ``create-repo``
        * ``write``
        * ``read``

        Args:
            project_key: The project in question. This is the actual key assigned to the project.
            selected_user_id: This can either be the username, the user's UUID surrounded by curly-braces, for example:
                {account UUID}, or the user's Atlassian ID.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            body: The permission to grant
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Explicit user permission updated

        Raises:
            ApiError: No permission value was provided or the value is invalid (not one of read, write, create-repo, or
                admin) The user couldn't be authenticated. You have reached your plan's user limit and must upgrade
                before giving access to additional users. The requesting user isn't an admin of the project, or the
                authentication method was not via app password. One or more of the workspace, project, and selected user
                doesn't exist for the given identifiers or the requesting user is not authenticated ``error`` is ``Error
                | RawError``."""
        return unwrap(
            self._with_raw_response.put_workspaces_by_workspace_projects_by_project_key_permissions_config_users_by_selected_user_id(
                project_key, selected_user_id, workspace, body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> ProjectsWithRawResponse:
        return self._with_raw_response


class AsyncProjects:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncProjectsWithRawResponse(client, server, auth)

    async def delete_workspaces_by_workspace_projects_by_project_key(
        self, project_key: str, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Deletes this project. This is an irreversible operation.

        You cannot delete a project that still contains repositories. To delete the project, delete or transfer the
        repositories first.

        Example:
        ```
        $ curl -X DELETE https://api.bitbucket.org/2.0/workspaces/bbworkspace1/projects/PROJ
        ```

        Args:
            project_key: The project in question. This is the actual ``key`` assigned to the project.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful deletion.

        Raises:
            ApiError: The requesting user isn't authorized to delete the project or the project isn't empty. A project
                isn't hosted at this location. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.delete_workspaces_by_workspace_projects_by_project_key(
                project_key, workspace, request_options=request_options
            ),
        )

    async def delete_workspaces_by_workspace_projects_by_project_key_default_reviewers_by_selected_user(
        self,
        project_key: str,
        selected_user: str,
        workspace: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Removes a default reviewer from the project.

        Example:
        ```
        $ curl https://api.bitbucket.org/2.0/.../default-reviewers/%7Bf0e0e8e9-66c1-4b85-a784-44a9eb9ef1a6%7D

        HTTP/1.1 204
        ```

        Args:
            project_key: The project in question. This can either be the actual ``key`` assigned to the project or the
                ``UUID`` (surrounded by curly-braces (``{}``)).
            selected_user: This can either be the username or the UUID of the default reviewer, surrounded by
                curly-braces, for example: ``{account UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The specified user was removed from the list of project default reviewers

        Raises:
            ApiError: If the specified user is not a default reviewer for the project If the authenticated user does not
                have admin access to the project If the specified user, project, or workspace does not exist ``error``
                is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.delete_workspaces_by_workspace_projects_by_project_key_default_reviewers_by_selected_user(
                project_key, selected_user, workspace, request_options=request_options
            ),
        )

    async def delete_workspaces_by_workspace_projects_by_project_key_permissions_config_groups_by_group_slug(
        self,
        group_slug: str,
        project_key: str,
        workspace: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Deletes the project group permission between the requested project and group, if one exists.

        Only users with admin permission for the project may access this resource.

        Args:
            group_slug: Slug of the requested group.
            project_key: The project in question. This is the actual key assigned to the project.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The project group permission was deleted and no content returned.

        Raises:
            ApiError: The user couldn't be authenticated. The requesting user isn't an admin of the project, or the
                authentication method was not via app password. One or more of the workspace, project, and group doesn't
                exist for the given identifiers or the requesting user is not authenticated ``error`` is ``Error |
                RawError``."""
        return unwrap(
            await self._with_raw_response.delete_workspaces_by_workspace_projects_by_project_key_permissions_config_groups_by_group_slug(
                group_slug, project_key, workspace, request_options=request_options
            ),
        )

    async def delete_workspaces_by_workspace_projects_by_project_key_permissions_config_users_by_selected_user_id(
        self,
        project_key: str,
        selected_user_id: str,
        workspace: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Deletes the project user permission between the requested project and user, if one exists.

        Only users with admin permission for the project may access this resource.

        Due to security concerns, the JWT and OAuth authentication methods are unsupported. This is to ensure
        integrations and add-ons are not allowed to change permissions.

        Args:
            project_key: The project in question. This is the actual key assigned to the project.
            selected_user_id: This can either be the username, the user's UUID surrounded by curly-braces, for example:
                {account UUID}, or the user's Atlassian ID.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The project user permission was deleted and no content returned.

        Raises:
            ApiError: The user couldn't be authenticated. The requesting user isn't an admin of the project, or the
                authentication method was not via app password. One or more of the workspace, project, and selected user
                doesn't exist for the given identifiers or the requesting user is not authenticated ``error`` is ``Error
                | RawError``."""
        return unwrap(
            await self._with_raw_response.delete_workspaces_by_workspace_projects_by_project_key_permissions_config_users_by_selected_user_id(
                project_key, selected_user_id, workspace, request_options=request_options
            ),
        )

    async def get_workspaces_by_workspace_projects_by_project_key(
        self, project_key: str, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ProjectBitbucketProjectsApi:
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
            await self._with_raw_response.get_workspaces_by_workspace_projects_by_project_key(
                project_key, workspace, request_options=request_options
            ),
        )

    async def get_workspaces_by_workspace_projects_by_project_key_default_reviewers(
        self, project_key: str, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> PaginatedDefaultReviewerAndType:
        """Return a list of all default reviewers for a project. This is a list of users that will be added as default
        reviewers to pull requests for any repository within the project.

        Args:
            project_key: The project in question. This is the actual ``key`` assigned to the project.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The list of project default reviewers

        Raises:
            ApiError: If the authenticated user does not have admin access to the project If the workspace or project
                does not exist at this location ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_workspaces_by_workspace_projects_by_project_key_default_reviewers(
                project_key, workspace, request_options=request_options
            ),
        )

    async def get_workspaces_by_workspace_projects_by_project_key_default_reviewers_by_selected_user(
        self,
        project_key: str,
        selected_user: str,
        workspace: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> User:
        """Returns the specified default reviewer.

        Args:
            project_key: The project in question. This can either be the actual ``key`` assigned to the project or the
                ``UUID`` (surrounded by curly-braces (``{}``)).
            selected_user: This can either be the username or the UUID of the default reviewer, surrounded by
                curly-braces, for example: ``{account UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The specified user that is a default reviewer

        Raises:
            ApiError: If the specified user is not a default reviewer for the project If the authenticated user does not
                have admin access to the project If the specified user, project, or workspace does not exist ``error``
                is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_workspaces_by_workspace_projects_by_project_key_default_reviewers_by_selected_user(
                project_key, selected_user, workspace, request_options=request_options
            ),
        )

    async def get_workspaces_by_workspace_projects_by_project_key_permissions_config_groups(
        self, project_key: str, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> PaginatedProjectGroupPermissions:
        """Returns a paginated list of explicit group permissions for the given project. This endpoint does not support
        BBQL features.

        Args:
            project_key: The project in question. This is the actual key assigned to the project.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Paginated list of project group permissions

        Raises:
            ApiError: The user couldn't be authenticated. The user doesn't have admin access to the project. One or both
                of the workspace and project don't exist for the given identifiers or the requesting user is not
                authenticated ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_workspaces_by_workspace_projects_by_project_key_permissions_config_groups(
                project_key, workspace, request_options=request_options
            ),
        )

    async def get_workspaces_by_workspace_projects_by_project_key_permissions_config_groups_by_group_slug(
        self,
        group_slug: str,
        project_key: str,
        workspace: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ProjectGroupPermission:
        """Returns the group permission for a given group and project.

        Only users with admin permission for the project may access this resource.

        Permissions can be:

        * ``admin``
        * ``create-repo``
        * ``write``
        * ``read``
        * ``none``

        Args:
            group_slug: Slug of the requested group.
            project_key: The project in question. This is the actual key assigned to the project.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Project group permission

        Raises:
            ApiError: The user couldn't be authenticated. The user doesn't have admin access to the project. One or more
                of the workspace, project, and group doesn't exist for the given identifiers or the requesting user is
                not authenticated ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_workspaces_by_workspace_projects_by_project_key_permissions_config_groups_by_group_slug(
                group_slug, project_key, workspace, request_options=request_options
            ),
        )

    async def get_workspaces_by_workspace_projects_by_project_key_permissions_config_users(
        self, project_key: str, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> PaginatedProjectUserPermissions:
        """Returns a paginated list of explicit user permissions for the given project. This endpoint does not support
        BBQL features.

        Args:
            project_key: The project in question. This is the actual key assigned to the project.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Paginated list of explicit user permissions.

        Raises:
            ApiError: The user couldn't be authenticated. The user doesn't have admin access to the project. One or both
                of the workspace and project don't exist for the given identifiers or the requesting user is not
                authenticated ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_workspaces_by_workspace_projects_by_project_key_permissions_config_users(
                project_key, workspace, request_options=request_options
            ),
        )

    async def get_workspaces_by_workspace_projects_by_project_key_permissions_config_users_by_selected_user_id(
        self,
        project_key: str,
        selected_user_id: str,
        workspace: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ProjectUserPermission:
        """Returns the explicit user permission for a given user and project.

        Only users with admin permission for the project may access this resource.

        Permissions can be:

        * ``admin``
        * ``create-repo``
        * ``write``
        * ``read``
        * ``none``

        Args:
            project_key: The project in question. This is the actual key assigned to the project.
            selected_user_id: This can either be the username, the user's UUID surrounded by curly-braces, for example:
                {account UUID}, or the user's Atlassian ID.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Explicit user permission for user and project

        Raises:
            ApiError: The user couldn't be authenticated. The requesting user isn't an admin of the project. One or more
                of the workspace, project, and selected user doesn't exist for the given identifiers or the requesting
                user is not authenticated ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_workspaces_by_workspace_projects_by_project_key_permissions_config_users_by_selected_user_id(
                project_key, selected_user_id, workspace, request_options=request_options
            ),
        )

    async def post_workspaces_by_workspace_projects(
        self,
        workspace: str,
        body: ProjectBitbucketProjectsApi | ProjectBitbucketProjectsApiDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ProjectBitbucketProjectsApi:
        r"""Creates a new project.

        Note that the avatar has to be embedded as either a data-url or a URL to an external image as shown in the
        examples below:

        ```
        $ body=$(cat << EOF
        {
        "name": "Mars Project", "key": "MARS", "description": "Software for colonizing mars.", "links": { "avatar": {
        "href": "data:image/gif;base64,R0lGODlhEAAQAMQAAORHHOVSKudfOulrSOp3WOyDZu6QdvCchPGolfO0o/..."
        }
        },
        "is_private": false
        }
        EOF
        )
        $ curl -H "Content-Type: application/json" \ -X POST \ -d "$body" \
        https://api.bitbucket.org/2.0/workspaces/teams-in-space/projects/ | jq .
        {
        // Serialized project document
        }
        ```

        or even:

        ```
        $ body=$(cat << EOF
        {
        "name": "Mars Project", "key": "MARS", "description": "Software for colonizing mars.", "links": { "avatar": {
        "href": "http://i.imgur.com/72tRx4w.gif"
        }
        },
        "is_private": false
        }
        EOF
        )
        $ curl -H "Content-Type: application/json" \ -X POST \ -d "$body" \
        https://api.bitbucket.org/2.0/workspaces/teams-in-space/projects/ | jq .
        {
        // Serialized project document
        }
        ```

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A new project has been created.

        Raises:
            ApiError: The user requesting to create a project does not have the necessary permissions. A workspace
                doesn't exist at this location. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.post_workspaces_by_workspace_projects(
                workspace, body, request_options=request_options
            ),
        )

    async def put_workspaces_by_workspace_projects_by_project_key(
        self,
        project_key: str,
        workspace: str,
        body: ProjectBitbucketProjectsApi | ProjectBitbucketProjectsApiDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ProjectBitbucketProjectsApi:
        """Since this endpoint can be used to both update and to create a project, the request body depends on the
        intent.

        #### Creation

        See the POST documentation for the project collection for an example of the request body.

        Note: The ``key`` should not be specified in the body of request (since it is already present in the URL). The
        ``name`` is required, everything else is optional.

        #### Update

        See the POST documentation for the project collection for an example of the request body.

        Note: The key is not required in the body (since it is already in the URL). The key may be specified in the
        body, if the intent is to change the key itself. In such a scenario, the location of the project is changed and
        is returned in the ``Location`` header of the response.

        Args:
            project_key: The project in question. This is the actual ``key`` assigned to the project.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The existing project is has been updated.

        Raises:
            ApiError: The requesting user isn't authorized to update or create the project. A workspace doesn't exist at
                the location. Note that the project's absence from this location doesn't raise a 404, since a PUT at a
                non-existent location can be used to create a new project. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.put_workspaces_by_workspace_projects_by_project_key(
                project_key, workspace, body, request_options=request_options
            ),
        )

    async def put_workspaces_by_workspace_projects_by_project_key_default_reviewers_by_selected_user(
        self,
        project_key: str,
        selected_user: str,
        workspace: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> User:
        """Adds the specified user to the project's list of default reviewers. The method is idempotent. Accepts an
        optional body containing the ``uuid`` of the user to be added.

        Args:
            project_key: The project in question. This can either be the actual ``key`` assigned to the project or the
                ``UUID`` (surrounded by curly-braces (``{}``)).
            selected_user: This can either be the username or the UUID of the default reviewer, surrounded by
                curly-braces, for example: ``{account UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The specified user was added as a project default reviewer

        Raises:
            ApiError: If the specified user cannot be added as a default reviewer for the project If the authenticated
                user does not have admin access to the project If the specified user, project, or workspace does not
                exist ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.put_workspaces_by_workspace_projects_by_project_key_default_reviewers_by_selected_user(
                project_key, selected_user, workspace, request_options=request_options
            ),
        )

    async def put_workspaces_by_workspace_projects_by_project_key_permissions_config_groups_by_group_slug(
        self,
        group_slug: str,
        project_key: str,
        workspace: str,
        body: (
            BitbucketAppsPermissionsSerializersProjectPermissionUpdateSchema
            | BitbucketAppsPermissionsSerializersProjectPermissionUpdateSchemaDict
        ),
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ProjectGroupPermission:
        """Updates the group permission, or grants a new permission if one does not already exist.

        Only users with admin permission for the project may access this resource.

        Due to security concerns, the JWT and OAuth authentication methods are unsupported. This is to ensure
        integrations and add-ons are not allowed to change permissions.

        Permissions can be:

        * ``admin``
        * ``create-repo``
        * ``write``
        * ``read``

        Args:
            group_slug: Slug of the requested group.
            project_key: The project in question. This is the actual key assigned to the project.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            body: The permission to grant
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Project group permission updated.

        Raises:
            ApiError: No permission value was provided or the value is invalid(not one of read, write, create-repo, or
                admin). The user couldn't be authenticated. You have reached your plan's user limit and must upgrade
                before giving access to additional users. The requesting user isn't an admin of the project, or the
                authentication method was not via app password. One or more of the workspace, project, and group doesn't
                exist for the given identifiers or the requesting user is not authenticated ``error`` is ``Error |
                RawError``."""
        return unwrap(
            await self._with_raw_response.put_workspaces_by_workspace_projects_by_project_key_permissions_config_groups_by_group_slug(
                group_slug, project_key, workspace, body, request_options=request_options
            ),
        )

    async def put_workspaces_by_workspace_projects_by_project_key_permissions_config_users_by_selected_user_id(
        self,
        project_key: str,
        selected_user_id: str,
        workspace: str,
        body: (
            BitbucketAppsPermissionsSerializersProjectPermissionUpdateSchema
            | BitbucketAppsPermissionsSerializersProjectPermissionUpdateSchemaDict
        ),
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ProjectUserPermission:
        """Updates the explicit user permission for a given user and project. The selected user must be a member of the
        workspace, and cannot be the workspace owner.

        Only users with admin permission for the project may access this resource.

        Due to security concerns, the JWT and OAuth authentication methods are unsupported. This is to ensure
        integrations and add-ons are not allowed to change permissions.

        Permissions can be:

        * ``admin``
        * ``create-repo``
        * ``write``
        * ``read``

        Args:
            project_key: The project in question. This is the actual key assigned to the project.
            selected_user_id: This can either be the username, the user's UUID surrounded by curly-braces, for example:
                {account UUID}, or the user's Atlassian ID.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            body: The permission to grant
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Explicit user permission updated

        Raises:
            ApiError: No permission value was provided or the value is invalid (not one of read, write, create-repo, or
                admin) The user couldn't be authenticated. You have reached your plan's user limit and must upgrade
                before giving access to additional users. The requesting user isn't an admin of the project, or the
                authentication method was not via app password. One or more of the workspace, project, and selected user
                doesn't exist for the given identifiers or the requesting user is not authenticated ``error`` is ``Error
                | RawError``."""
        return unwrap(
            await self._with_raw_response.put_workspaces_by_workspace_projects_by_project_key_permissions_config_users_by_selected_user_id(
                project_key, selected_user_id, workspace, body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncProjectsWithRawResponse:
        return self._with_raw_response


class ProjectsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def delete_workspaces_by_workspace_projects_by_project_key(
        self, project_key: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteWorkspacesByWorkspaceProjectsByProjectKeyErrorBody]:
        """Deletes this project. This is an irreversible operation.

        You cannot delete a project that still contains repositories. To delete the project, delete or transfer the
        repositories first.

        Example:
        ```
        $ curl -X DELETE https://api.bitbucket.org/2.0/workspaces/bbworkspace1/projects/PROJ
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
            http_method="DELETE",
            url_template=self._server.default("/workspaces/{workspace}/projects/{project_key}"),
            path_params=[param[str]("project_key", project_key), param[str]("workspace", workspace)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=empty_response,
            error_mapper=delete_workspaces_by_workspace_projects_by_project_key_error_mapper,
            request_options=request_options,
        )

    def delete_workspaces_by_workspace_projects_by_project_key_default_reviewers_by_selected_user(
        self,
        project_key: str,
        selected_user: str,
        workspace: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DeleteWorkspacesByWorkspaceProjectsByProjectKeyDefaultReviewersBySelectedUserErrorBody]:
        """Removes a default reviewer from the project.

        Example:
        ```
        $ curl https://api.bitbucket.org/2.0/.../default-reviewers/%7Bf0e0e8e9-66c1-4b85-a784-44a9eb9ef1a6%7D

        HTTP/1.1 204
        ```

        Args:
            project_key: The project in question. This can either be the actual ``key`` assigned to the project or the
                ``UUID`` (surrounded by curly-braces (``{}``)).
            selected_user: This can either be the username or the UUID of the default reviewer, surrounded by
                curly-braces, for example: ``{account UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default(
                "/workspaces/{workspace}/projects/{project_key}/default-reviewers/{selected_user}"
            ),
            path_params=[
                param[str]("project_key", project_key),
                param[str]("selected_user", selected_user),
                param[str]("workspace", workspace),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=empty_response,
            error_mapper=delete_workspaces_by_workspace_projects_by_project_key_default_reviewers_by_selected_user_error_mapper,
            request_options=request_options,
        )

    def delete_workspaces_by_workspace_projects_by_project_key_permissions_config_groups_by_group_slug(
        self, group_slug: str, project_key: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigGroupsByGroupSlugErrorBody]:
        """Deletes the project group permission between the requested project and group, if one exists.

        Only users with admin permission for the project may access this resource.

        Args:
            group_slug: Slug of the requested group.
            project_key: The project in question. This is the actual key assigned to the project.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default(
                "/workspaces/{workspace}/projects/{project_key}/permissions-config/groups/{group_slug}"
            ),
            path_params=[
                param[str]("group_slug", group_slug),
                param[str]("project_key", project_key),
                param[str]("workspace", workspace),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=empty_response,
            error_mapper=delete_workspaces_by_workspace_projects_by_project_key_permissions_config_groups_by_group_slug_error_mapper,
            request_options=request_options,
        )

    def delete_workspaces_by_workspace_projects_by_project_key_permissions_config_users_by_selected_user_id(
        self,
        project_key: str,
        selected_user_id: str,
        workspace: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[
        None, DeleteWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigUsersBySelectedUserIdErrorBody
    ]:
        """Deletes the project user permission between the requested project and user, if one exists.

        Only users with admin permission for the project may access this resource.

        Due to security concerns, the JWT and OAuth authentication methods are unsupported. This is to ensure
        integrations and add-ons are not allowed to change permissions.

        Args:
            project_key: The project in question. This is the actual key assigned to the project.
            selected_user_id: This can either be the username, the user's UUID surrounded by curly-braces, for example:
                {account UUID}, or the user's Atlassian ID.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default(
                "/workspaces/{workspace}/projects/{project_key}/permissions-config/users/{selected_user_id}"
            ),
            path_params=[
                param[str]("project_key", project_key),
                param[str]("selected_user_id", selected_user_id),
                param[str]("workspace", workspace),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=empty_response,
            error_mapper=delete_workspaces_by_workspace_projects_by_project_key_permissions_config_users_by_selected_user_id_error_mapper,
            request_options=request_options,
        )

    def get_workspaces_by_workspace_projects_by_project_key(
        self, project_key: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ProjectBitbucketProjectsApi, GetWorkspacesByWorkspaceProjectsByProjectKeyErrorBody]:
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
            decoder=json_decoder[ProjectBitbucketProjectsApi],
            error_mapper=get_workspaces_by_workspace_projects_by_project_key_error_mapper,
            request_options=request_options,
        )

    def get_workspaces_by_workspace_projects_by_project_key_default_reviewers(
        self, project_key: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[
        PaginatedDefaultReviewerAndType, GetWorkspacesByWorkspaceProjectsByProjectKeyDefaultReviewersErrorBody
    ]:
        """Return a list of all default reviewers for a project. This is a list of users that will be added as default
        reviewers to pull requests for any repository within the project.

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
            url_template=self._server.default("/workspaces/{workspace}/projects/{project_key}/default-reviewers"),
            path_params=[param[str]("project_key", project_key), param[str]("workspace", workspace)],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[PaginatedDefaultReviewerAndType],
            error_mapper=get_workspaces_by_workspace_projects_by_project_key_default_reviewers_error_mapper,
            request_options=request_options,
        )

    def get_workspaces_by_workspace_projects_by_project_key_default_reviewers_by_selected_user(
        self,
        project_key: str,
        selected_user: str,
        workspace: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[User, GetWorkspacesByWorkspaceProjectsByProjectKeyDefaultReviewersBySelectedUserErrorBody]:
        """Returns the specified default reviewer.

        Args:
            project_key: The project in question. This can either be the actual ``key`` assigned to the project or the
                ``UUID`` (surrounded by curly-braces (``{}``)).
            selected_user: This can either be the username or the UUID of the default reviewer, surrounded by
                curly-braces, for example: ``{account UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/workspaces/{workspace}/projects/{project_key}/default-reviewers/{selected_user}"
            ),
            path_params=[
                param[str]("project_key", project_key),
                param[str]("selected_user", selected_user),
                param[str]("workspace", workspace),
            ],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[User],
            error_mapper=get_workspaces_by_workspace_projects_by_project_key_default_reviewers_by_selected_user_error_mapper,
            request_options=request_options,
        )

    def get_workspaces_by_workspace_projects_by_project_key_permissions_config_groups(
        self, project_key: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[
        PaginatedProjectGroupPermissions, GetWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigGroupsErrorBody
    ]:
        """Returns a paginated list of explicit group permissions for the given project. This endpoint does not support
        BBQL features.

        Args:
            project_key: The project in question. This is the actual key assigned to the project.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/workspaces/{workspace}/projects/{project_key}/permissions-config/groups"
            ),
            path_params=[param[str]("project_key", project_key), param[str]("workspace", workspace)],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[PaginatedProjectGroupPermissions],
            error_mapper=get_workspaces_by_workspace_projects_by_project_key_permissions_config_groups_error_mapper,
            request_options=request_options,
        )

    def get_workspaces_by_workspace_projects_by_project_key_permissions_config_groups_by_group_slug(
        self, group_slug: str, project_key: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[
        ProjectGroupPermission, GetWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigGroupsByGroupSlugErrorBody
    ]:
        """Returns the group permission for a given group and project.

        Only users with admin permission for the project may access this resource.

        Permissions can be:

        * ``admin``
        * ``create-repo``
        * ``write``
        * ``read``
        * ``none``

        Args:
            group_slug: Slug of the requested group.
            project_key: The project in question. This is the actual key assigned to the project.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/workspaces/{workspace}/projects/{project_key}/permissions-config/groups/{group_slug}"
            ),
            path_params=[
                param[str]("group_slug", group_slug),
                param[str]("project_key", project_key),
                param[str]("workspace", workspace),
            ],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[ProjectGroupPermission],
            error_mapper=get_workspaces_by_workspace_projects_by_project_key_permissions_config_groups_by_group_slug_error_mapper,
            request_options=request_options,
        )

    def get_workspaces_by_workspace_projects_by_project_key_permissions_config_users(
        self, project_key: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[
        PaginatedProjectUserPermissions, GetWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigUsersErrorBody
    ]:
        """Returns a paginated list of explicit user permissions for the given project. This endpoint does not support
        BBQL features.

        Args:
            project_key: The project in question. This is the actual key assigned to the project.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/workspaces/{workspace}/projects/{project_key}/permissions-config/users"
            ),
            path_params=[param[str]("project_key", project_key), param[str]("workspace", workspace)],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[PaginatedProjectUserPermissions],
            error_mapper=get_workspaces_by_workspace_projects_by_project_key_permissions_config_users_error_mapper,
            request_options=request_options,
        )

    def get_workspaces_by_workspace_projects_by_project_key_permissions_config_users_by_selected_user_id(
        self,
        project_key: str,
        selected_user_id: str,
        workspace: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[
        ProjectUserPermission,
        GetWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigUsersBySelectedUserIdErrorBody,
    ]:
        """Returns the explicit user permission for a given user and project.

        Only users with admin permission for the project may access this resource.

        Permissions can be:

        * ``admin``
        * ``create-repo``
        * ``write``
        * ``read``
        * ``none``

        Args:
            project_key: The project in question. This is the actual key assigned to the project.
            selected_user_id: This can either be the username, the user's UUID surrounded by curly-braces, for example:
                {account UUID}, or the user's Atlassian ID.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/workspaces/{workspace}/projects/{project_key}/permissions-config/users/{selected_user_id}"
            ),
            path_params=[
                param[str]("project_key", project_key),
                param[str]("selected_user_id", selected_user_id),
                param[str]("workspace", workspace),
            ],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[ProjectUserPermission],
            error_mapper=get_workspaces_by_workspace_projects_by_project_key_permissions_config_users_by_selected_user_id_error_mapper,
            request_options=request_options,
        )

    def post_workspaces_by_workspace_projects(
        self,
        workspace: str,
        body: ProjectBitbucketProjectsApi | ProjectBitbucketProjectsApiDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ProjectBitbucketProjectsApi, PostWorkspacesByWorkspaceProjectsErrorBody]:
        r"""Creates a new project.

        Note that the avatar has to be embedded as either a data-url or a URL to an external image as shown in the
        examples below:

        ```
        $ body=$(cat << EOF
        {
        "name": "Mars Project", "key": "MARS", "description": "Software for colonizing mars.", "links": { "avatar": {
        "href": "data:image/gif;base64,R0lGODlhEAAQAMQAAORHHOVSKudfOulrSOp3WOyDZu6QdvCchPGolfO0o/..."
        }
        },
        "is_private": false
        }
        EOF
        )
        $ curl -H "Content-Type: application/json" \ -X POST \ -d "$body" \
        https://api.bitbucket.org/2.0/workspaces/teams-in-space/projects/ | jq .
        {
        // Serialized project document
        }
        ```

        or even:

        ```
        $ body=$(cat << EOF
        {
        "name": "Mars Project", "key": "MARS", "description": "Software for colonizing mars.", "links": { "avatar": {
        "href": "http://i.imgur.com/72tRx4w.gif"
        }
        },
        "is_private": false
        }
        EOF
        )
        $ curl -H "Content-Type: application/json" \ -X POST \ -d "$body" \
        https://api.bitbucket.org/2.0/workspaces/teams-in-space/projects/ | jq .
        {
        // Serialized project document
        }
        ```

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/workspaces/{workspace}/projects"),
            path_params=[param[str]("workspace", workspace)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ProjectBitbucketProjectsApi | ProjectBitbucketProjectsApiDict](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[ProjectBitbucketProjectsApi],
            error_mapper=post_workspaces_by_workspace_projects_error_mapper,
            request_options=request_options,
        )

    def put_workspaces_by_workspace_projects_by_project_key(
        self,
        project_key: str,
        workspace: str,
        body: ProjectBitbucketProjectsApi | ProjectBitbucketProjectsApiDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ProjectBitbucketProjectsApi, PutWorkspacesByWorkspaceProjectsByProjectKeyErrorBody]:
        """Since this endpoint can be used to both update and to create a project, the request body depends on the
        intent.

        #### Creation

        See the POST documentation for the project collection for an example of the request body.

        Note: The ``key`` should not be specified in the body of request (since it is already present in the URL). The
        ``name`` is required, everything else is optional.

        #### Update

        See the POST documentation for the project collection for an example of the request body.

        Note: The key is not required in the body (since it is already in the URL). The key may be specified in the
        body, if the intent is to change the key itself. In such a scenario, the location of the project is changed and
        is returned in the ``Location`` header of the response.

        Args:
            project_key: The project in question. This is the actual ``key`` assigned to the project.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/workspaces/{workspace}/projects/{project_key}"),
            path_params=[param[str]("project_key", project_key), param[str]("workspace", workspace)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ProjectBitbucketProjectsApi | ProjectBitbucketProjectsApiDict](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[ProjectBitbucketProjectsApi],
            error_mapper=put_workspaces_by_workspace_projects_by_project_key_error_mapper,
            request_options=request_options,
        )

    def put_workspaces_by_workspace_projects_by_project_key_default_reviewers_by_selected_user(
        self,
        project_key: str,
        selected_user: str,
        workspace: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[User, PutWorkspacesByWorkspaceProjectsByProjectKeyDefaultReviewersBySelectedUserErrorBody]:
        """Adds the specified user to the project's list of default reviewers. The method is idempotent. Accepts an
        optional body containing the ``uuid`` of the user to be added.

        Args:
            project_key: The project in question. This can either be the actual ``key`` assigned to the project or the
                ``UUID`` (surrounded by curly-braces (``{}``)).
            selected_user: This can either be the username or the UUID of the default reviewer, surrounded by
                curly-braces, for example: ``{account UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default(
                "/workspaces/{workspace}/projects/{project_key}/default-reviewers/{selected_user}"
            ),
            path_params=[
                param[str]("project_key", project_key),
                param[str]("selected_user", selected_user),
                param[str]("workspace", workspace),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[User],
            error_mapper=put_workspaces_by_workspace_projects_by_project_key_default_reviewers_by_selected_user_error_mapper,
            request_options=request_options,
        )

    def put_workspaces_by_workspace_projects_by_project_key_permissions_config_groups_by_group_slug(
        self,
        group_slug: str,
        project_key: str,
        workspace: str,
        body: (
            BitbucketAppsPermissionsSerializersProjectPermissionUpdateSchema
            | BitbucketAppsPermissionsSerializersProjectPermissionUpdateSchemaDict
        ),
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[
        ProjectGroupPermission, PutWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigGroupsByGroupSlugErrorBody
    ]:
        """Updates the group permission, or grants a new permission if one does not already exist.

        Only users with admin permission for the project may access this resource.

        Due to security concerns, the JWT and OAuth authentication methods are unsupported. This is to ensure
        integrations and add-ons are not allowed to change permissions.

        Permissions can be:

        * ``admin``
        * ``create-repo``
        * ``write``
        * ``read``

        Args:
            group_slug: Slug of the requested group.
            project_key: The project in question. This is the actual key assigned to the project.
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
                "/workspaces/{workspace}/projects/{project_key}/permissions-config/groups/{group_slug}"
            ),
            path_params=[
                param[str]("group_slug", group_slug),
                param[str]("project_key", project_key),
                param[str]("workspace", workspace),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[
                (
                    BitbucketAppsPermissionsSerializersProjectPermissionUpdateSchema
                    | BitbucketAppsPermissionsSerializersProjectPermissionUpdateSchemaDict
                )
            ](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[ProjectGroupPermission],
            error_mapper=put_workspaces_by_workspace_projects_by_project_key_permissions_config_groups_by_group_slug_error_mapper,
            request_options=request_options,
        )

    def put_workspaces_by_workspace_projects_by_project_key_permissions_config_users_by_selected_user_id(
        self,
        project_key: str,
        selected_user_id: str,
        workspace: str,
        body: (
            BitbucketAppsPermissionsSerializersProjectPermissionUpdateSchema
            | BitbucketAppsPermissionsSerializersProjectPermissionUpdateSchemaDict
        ),
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[
        ProjectUserPermission,
        PutWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigUsersBySelectedUserIdErrorBody,
    ]:
        """Updates the explicit user permission for a given user and project. The selected user must be a member of the
        workspace, and cannot be the workspace owner.

        Only users with admin permission for the project may access this resource.

        Due to security concerns, the JWT and OAuth authentication methods are unsupported. This is to ensure
        integrations and add-ons are not allowed to change permissions.

        Permissions can be:

        * ``admin``
        * ``create-repo``
        * ``write``
        * ``read``

        Args:
            project_key: The project in question. This is the actual key assigned to the project.
            selected_user_id: This can either be the username, the user's UUID surrounded by curly-braces, for example:
                {account UUID}, or the user's Atlassian ID.
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
                "/workspaces/{workspace}/projects/{project_key}/permissions-config/users/{selected_user_id}"
            ),
            path_params=[
                param[str]("project_key", project_key),
                param[str]("selected_user_id", selected_user_id),
                param[str]("workspace", workspace),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[
                (
                    BitbucketAppsPermissionsSerializersProjectPermissionUpdateSchema
                    | BitbucketAppsPermissionsSerializersProjectPermissionUpdateSchemaDict
                )
            ](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[ProjectUserPermission],
            error_mapper=put_workspaces_by_workspace_projects_by_project_key_permissions_config_users_by_selected_user_id_error_mapper,
            request_options=request_options,
        )


class AsyncProjectsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def delete_workspaces_by_workspace_projects_by_project_key(
        self, project_key: str, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteWorkspacesByWorkspaceProjectsByProjectKeyErrorBody]:
        """Deletes this project. This is an irreversible operation.

        You cannot delete a project that still contains repositories. To delete the project, delete or transfer the
        repositories first.

        Example:
        ```
        $ curl -X DELETE https://api.bitbucket.org/2.0/workspaces/bbworkspace1/projects/PROJ
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
            http_method="DELETE",
            url_template=self._server.default("/workspaces/{workspace}/projects/{project_key}"),
            path_params=[param[str]("project_key", project_key), param[str]("workspace", workspace)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_empty_response,
            error_mapper=delete_workspaces_by_workspace_projects_by_project_key_error_mapper,
            request_options=request_options,
        )

    async def delete_workspaces_by_workspace_projects_by_project_key_default_reviewers_by_selected_user(
        self,
        project_key: str,
        selected_user: str,
        workspace: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DeleteWorkspacesByWorkspaceProjectsByProjectKeyDefaultReviewersBySelectedUserErrorBody]:
        """Removes a default reviewer from the project.

        Example:
        ```
        $ curl https://api.bitbucket.org/2.0/.../default-reviewers/%7Bf0e0e8e9-66c1-4b85-a784-44a9eb9ef1a6%7D

        HTTP/1.1 204
        ```

        Args:
            project_key: The project in question. This can either be the actual ``key`` assigned to the project or the
                ``UUID`` (surrounded by curly-braces (``{}``)).
            selected_user: This can either be the username or the UUID of the default reviewer, surrounded by
                curly-braces, for example: ``{account UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default(
                "/workspaces/{workspace}/projects/{project_key}/default-reviewers/{selected_user}"
            ),
            path_params=[
                param[str]("project_key", project_key),
                param[str]("selected_user", selected_user),
                param[str]("workspace", workspace),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_empty_response,
            error_mapper=delete_workspaces_by_workspace_projects_by_project_key_default_reviewers_by_selected_user_error_mapper,
            request_options=request_options,
        )

    async def delete_workspaces_by_workspace_projects_by_project_key_permissions_config_groups_by_group_slug(
        self,
        group_slug: str,
        project_key: str,
        workspace: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DeleteWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigGroupsByGroupSlugErrorBody]:
        """Deletes the project group permission between the requested project and group, if one exists.

        Only users with admin permission for the project may access this resource.

        Args:
            group_slug: Slug of the requested group.
            project_key: The project in question. This is the actual key assigned to the project.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default(
                "/workspaces/{workspace}/projects/{project_key}/permissions-config/groups/{group_slug}"
            ),
            path_params=[
                param[str]("group_slug", group_slug),
                param[str]("project_key", project_key),
                param[str]("workspace", workspace),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_empty_response,
            error_mapper=delete_workspaces_by_workspace_projects_by_project_key_permissions_config_groups_by_group_slug_error_mapper,
            request_options=request_options,
        )

    async def delete_workspaces_by_workspace_projects_by_project_key_permissions_config_users_by_selected_user_id(
        self,
        project_key: str,
        selected_user_id: str,
        workspace: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[
        None, DeleteWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigUsersBySelectedUserIdErrorBody
    ]:
        """Deletes the project user permission between the requested project and user, if one exists.

        Only users with admin permission for the project may access this resource.

        Due to security concerns, the JWT and OAuth authentication methods are unsupported. This is to ensure
        integrations and add-ons are not allowed to change permissions.

        Args:
            project_key: The project in question. This is the actual key assigned to the project.
            selected_user_id: This can either be the username, the user's UUID surrounded by curly-braces, for example:
                {account UUID}, or the user's Atlassian ID.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default(
                "/workspaces/{workspace}/projects/{project_key}/permissions-config/users/{selected_user_id}"
            ),
            path_params=[
                param[str]("project_key", project_key),
                param[str]("selected_user_id", selected_user_id),
                param[str]("workspace", workspace),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_empty_response,
            error_mapper=delete_workspaces_by_workspace_projects_by_project_key_permissions_config_users_by_selected_user_id_error_mapper,
            request_options=request_options,
        )

    async def get_workspaces_by_workspace_projects_by_project_key(
        self, project_key: str, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ProjectBitbucketProjectsApi, GetWorkspacesByWorkspaceProjectsByProjectKeyErrorBody]:
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
            decoder=async_json_decoder[ProjectBitbucketProjectsApi],
            error_mapper=get_workspaces_by_workspace_projects_by_project_key_error_mapper,
            request_options=request_options,
        )

    async def get_workspaces_by_workspace_projects_by_project_key_default_reviewers(
        self, project_key: str, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[
        PaginatedDefaultReviewerAndType, GetWorkspacesByWorkspaceProjectsByProjectKeyDefaultReviewersErrorBody
    ]:
        """Return a list of all default reviewers for a project. This is a list of users that will be added as default
        reviewers to pull requests for any repository within the project.

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
            url_template=self._server.default("/workspaces/{workspace}/projects/{project_key}/default-reviewers"),
            path_params=[param[str]("project_key", project_key), param[str]("workspace", workspace)],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[PaginatedDefaultReviewerAndType],
            error_mapper=get_workspaces_by_workspace_projects_by_project_key_default_reviewers_error_mapper,
            request_options=request_options,
        )

    async def get_workspaces_by_workspace_projects_by_project_key_default_reviewers_by_selected_user(
        self,
        project_key: str,
        selected_user: str,
        workspace: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[User, GetWorkspacesByWorkspaceProjectsByProjectKeyDefaultReviewersBySelectedUserErrorBody]:
        """Returns the specified default reviewer.

        Args:
            project_key: The project in question. This can either be the actual ``key`` assigned to the project or the
                ``UUID`` (surrounded by curly-braces (``{}``)).
            selected_user: This can either be the username or the UUID of the default reviewer, surrounded by
                curly-braces, for example: ``{account UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/workspaces/{workspace}/projects/{project_key}/default-reviewers/{selected_user}"
            ),
            path_params=[
                param[str]("project_key", project_key),
                param[str]("selected_user", selected_user),
                param[str]("workspace", workspace),
            ],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[User],
            error_mapper=get_workspaces_by_workspace_projects_by_project_key_default_reviewers_by_selected_user_error_mapper,
            request_options=request_options,
        )

    async def get_workspaces_by_workspace_projects_by_project_key_permissions_config_groups(
        self, project_key: str, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[
        PaginatedProjectGroupPermissions, GetWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigGroupsErrorBody
    ]:
        """Returns a paginated list of explicit group permissions for the given project. This endpoint does not support
        BBQL features.

        Args:
            project_key: The project in question. This is the actual key assigned to the project.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/workspaces/{workspace}/projects/{project_key}/permissions-config/groups"
            ),
            path_params=[param[str]("project_key", project_key), param[str]("workspace", workspace)],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[PaginatedProjectGroupPermissions],
            error_mapper=get_workspaces_by_workspace_projects_by_project_key_permissions_config_groups_error_mapper,
            request_options=request_options,
        )

    async def get_workspaces_by_workspace_projects_by_project_key_permissions_config_groups_by_group_slug(
        self,
        group_slug: str,
        project_key: str,
        workspace: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[
        ProjectGroupPermission, GetWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigGroupsByGroupSlugErrorBody
    ]:
        """Returns the group permission for a given group and project.

        Only users with admin permission for the project may access this resource.

        Permissions can be:

        * ``admin``
        * ``create-repo``
        * ``write``
        * ``read``
        * ``none``

        Args:
            group_slug: Slug of the requested group.
            project_key: The project in question. This is the actual key assigned to the project.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/workspaces/{workspace}/projects/{project_key}/permissions-config/groups/{group_slug}"
            ),
            path_params=[
                param[str]("group_slug", group_slug),
                param[str]("project_key", project_key),
                param[str]("workspace", workspace),
            ],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[ProjectGroupPermission],
            error_mapper=get_workspaces_by_workspace_projects_by_project_key_permissions_config_groups_by_group_slug_error_mapper,
            request_options=request_options,
        )

    async def get_workspaces_by_workspace_projects_by_project_key_permissions_config_users(
        self, project_key: str, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[
        PaginatedProjectUserPermissions, GetWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigUsersErrorBody
    ]:
        """Returns a paginated list of explicit user permissions for the given project. This endpoint does not support
        BBQL features.

        Args:
            project_key: The project in question. This is the actual key assigned to the project.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/workspaces/{workspace}/projects/{project_key}/permissions-config/users"
            ),
            path_params=[param[str]("project_key", project_key), param[str]("workspace", workspace)],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[PaginatedProjectUserPermissions],
            error_mapper=get_workspaces_by_workspace_projects_by_project_key_permissions_config_users_error_mapper,
            request_options=request_options,
        )

    async def get_workspaces_by_workspace_projects_by_project_key_permissions_config_users_by_selected_user_id(
        self,
        project_key: str,
        selected_user_id: str,
        workspace: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[
        ProjectUserPermission,
        GetWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigUsersBySelectedUserIdErrorBody,
    ]:
        """Returns the explicit user permission for a given user and project.

        Only users with admin permission for the project may access this resource.

        Permissions can be:

        * ``admin``
        * ``create-repo``
        * ``write``
        * ``read``
        * ``none``

        Args:
            project_key: The project in question. This is the actual key assigned to the project.
            selected_user_id: This can either be the username, the user's UUID surrounded by curly-braces, for example:
                {account UUID}, or the user's Atlassian ID.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/workspaces/{workspace}/projects/{project_key}/permissions-config/users/{selected_user_id}"
            ),
            path_params=[
                param[str]("project_key", project_key),
                param[str]("selected_user_id", selected_user_id),
                param[str]("workspace", workspace),
            ],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[ProjectUserPermission],
            error_mapper=get_workspaces_by_workspace_projects_by_project_key_permissions_config_users_by_selected_user_id_error_mapper,
            request_options=request_options,
        )

    async def post_workspaces_by_workspace_projects(
        self,
        workspace: str,
        body: ProjectBitbucketProjectsApi | ProjectBitbucketProjectsApiDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ProjectBitbucketProjectsApi, PostWorkspacesByWorkspaceProjectsErrorBody]:
        r"""Creates a new project.

        Note that the avatar has to be embedded as either a data-url or a URL to an external image as shown in the
        examples below:

        ```
        $ body=$(cat << EOF
        {
        "name": "Mars Project", "key": "MARS", "description": "Software for colonizing mars.", "links": { "avatar": {
        "href": "data:image/gif;base64,R0lGODlhEAAQAMQAAORHHOVSKudfOulrSOp3WOyDZu6QdvCchPGolfO0o/..."
        }
        },
        "is_private": false
        }
        EOF
        )
        $ curl -H "Content-Type: application/json" \ -X POST \ -d "$body" \
        https://api.bitbucket.org/2.0/workspaces/teams-in-space/projects/ | jq .
        {
        // Serialized project document
        }
        ```

        or even:

        ```
        $ body=$(cat << EOF
        {
        "name": "Mars Project", "key": "MARS", "description": "Software for colonizing mars.", "links": { "avatar": {
        "href": "http://i.imgur.com/72tRx4w.gif"
        }
        },
        "is_private": false
        }
        EOF
        )
        $ curl -H "Content-Type: application/json" \ -X POST \ -d "$body" \
        https://api.bitbucket.org/2.0/workspaces/teams-in-space/projects/ | jq .
        {
        // Serialized project document
        }
        ```

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/workspaces/{workspace}/projects"),
            path_params=[param[str]("workspace", workspace)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ProjectBitbucketProjectsApi | ProjectBitbucketProjectsApiDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[ProjectBitbucketProjectsApi],
            error_mapper=post_workspaces_by_workspace_projects_error_mapper,
            request_options=request_options,
        )

    async def put_workspaces_by_workspace_projects_by_project_key(
        self,
        project_key: str,
        workspace: str,
        body: ProjectBitbucketProjectsApi | ProjectBitbucketProjectsApiDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ProjectBitbucketProjectsApi, PutWorkspacesByWorkspaceProjectsByProjectKeyErrorBody]:
        """Since this endpoint can be used to both update and to create a project, the request body depends on the
        intent.

        #### Creation

        See the POST documentation for the project collection for an example of the request body.

        Note: The ``key`` should not be specified in the body of request (since it is already present in the URL). The
        ``name`` is required, everything else is optional.

        #### Update

        See the POST documentation for the project collection for an example of the request body.

        Note: The key is not required in the body (since it is already in the URL). The key may be specified in the
        body, if the intent is to change the key itself. In such a scenario, the location of the project is changed and
        is returned in the ``Location`` header of the response.

        Args:
            project_key: The project in question. This is the actual ``key`` assigned to the project.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/workspaces/{workspace}/projects/{project_key}"),
            path_params=[param[str]("project_key", project_key), param[str]("workspace", workspace)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ProjectBitbucketProjectsApi | ProjectBitbucketProjectsApiDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[ProjectBitbucketProjectsApi],
            error_mapper=put_workspaces_by_workspace_projects_by_project_key_error_mapper,
            request_options=request_options,
        )

    async def put_workspaces_by_workspace_projects_by_project_key_default_reviewers_by_selected_user(
        self,
        project_key: str,
        selected_user: str,
        workspace: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[User, PutWorkspacesByWorkspaceProjectsByProjectKeyDefaultReviewersBySelectedUserErrorBody]:
        """Adds the specified user to the project's list of default reviewers. The method is idempotent. Accepts an
        optional body containing the ``uuid`` of the user to be added.

        Args:
            project_key: The project in question. This can either be the actual ``key`` assigned to the project or the
                ``UUID`` (surrounded by curly-braces (``{}``)).
            selected_user: This can either be the username or the UUID of the default reviewer, surrounded by
                curly-braces, for example: ``{account UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default(
                "/workspaces/{workspace}/projects/{project_key}/default-reviewers/{selected_user}"
            ),
            path_params=[
                param[str]("project_key", project_key),
                param[str]("selected_user", selected_user),
                param[str]("workspace", workspace),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[User],
            error_mapper=put_workspaces_by_workspace_projects_by_project_key_default_reviewers_by_selected_user_error_mapper,
            request_options=request_options,
        )

    async def put_workspaces_by_workspace_projects_by_project_key_permissions_config_groups_by_group_slug(
        self,
        group_slug: str,
        project_key: str,
        workspace: str,
        body: (
            BitbucketAppsPermissionsSerializersProjectPermissionUpdateSchema
            | BitbucketAppsPermissionsSerializersProjectPermissionUpdateSchemaDict
        ),
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[
        ProjectGroupPermission, PutWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigGroupsByGroupSlugErrorBody
    ]:
        """Updates the group permission, or grants a new permission if one does not already exist.

        Only users with admin permission for the project may access this resource.

        Due to security concerns, the JWT and OAuth authentication methods are unsupported. This is to ensure
        integrations and add-ons are not allowed to change permissions.

        Permissions can be:

        * ``admin``
        * ``create-repo``
        * ``write``
        * ``read``

        Args:
            group_slug: Slug of the requested group.
            project_key: The project in question. This is the actual key assigned to the project.
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
                "/workspaces/{workspace}/projects/{project_key}/permissions-config/groups/{group_slug}"
            ),
            path_params=[
                param[str]("group_slug", group_slug),
                param[str]("project_key", project_key),
                param[str]("workspace", workspace),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[
                (
                    BitbucketAppsPermissionsSerializersProjectPermissionUpdateSchema
                    | BitbucketAppsPermissionsSerializersProjectPermissionUpdateSchemaDict
                )
            ](body),
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[ProjectGroupPermission],
            error_mapper=put_workspaces_by_workspace_projects_by_project_key_permissions_config_groups_by_group_slug_error_mapper,
            request_options=request_options,
        )

    async def put_workspaces_by_workspace_projects_by_project_key_permissions_config_users_by_selected_user_id(
        self,
        project_key: str,
        selected_user_id: str,
        workspace: str,
        body: (
            BitbucketAppsPermissionsSerializersProjectPermissionUpdateSchema
            | BitbucketAppsPermissionsSerializersProjectPermissionUpdateSchemaDict
        ),
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[
        ProjectUserPermission,
        PutWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigUsersBySelectedUserIdErrorBody,
    ]:
        """Updates the explicit user permission for a given user and project. The selected user must be a member of the
        workspace, and cannot be the workspace owner.

        Only users with admin permission for the project may access this resource.

        Due to security concerns, the JWT and OAuth authentication methods are unsupported. This is to ensure
        integrations and add-ons are not allowed to change permissions.

        Permissions can be:

        * ``admin``
        * ``create-repo``
        * ``write``
        * ``read``

        Args:
            project_key: The project in question. This is the actual key assigned to the project.
            selected_user_id: This can either be the username, the user's UUID surrounded by curly-braces, for example:
                {account UUID}, or the user's Atlassian ID.
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
                "/workspaces/{workspace}/projects/{project_key}/permissions-config/users/{selected_user_id}"
            ),
            path_params=[
                param[str]("project_key", project_key),
                param[str]("selected_user_id", selected_user_id),
                param[str]("workspace", workspace),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[
                (
                    BitbucketAppsPermissionsSerializersProjectPermissionUpdateSchema
                    | BitbucketAppsPermissionsSerializersProjectPermissionUpdateSchemaDict
                )
            ](body),
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[ProjectUserPermission],
            error_mapper=put_workspaces_by_workspace_projects_by_project_key_permissions_config_users_by_selected_user_id_error_mapper,
            request_options=request_options,
        )

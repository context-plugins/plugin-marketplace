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
from ..errors.delete_repositories_by_workspace_by_repo_slug_branch_restrictions_by_id_error import (
    DeleteRepositoriesByWorkspaceByRepoSlugBranchRestrictionsByIdErrorBody,
    delete_repositories_by_workspace_by_repo_slug_branch_restrictions_by_id_error_mapper,
)
from ..errors.get_repositories_by_workspace_by_repo_slug_branch_restrictions_by_id_error import (
    GetRepositoriesByWorkspaceByRepoSlugBranchRestrictionsByIdErrorBody,
    get_repositories_by_workspace_by_repo_slug_branch_restrictions_by_id_error_mapper,
)
from ..errors.get_repositories_by_workspace_by_repo_slug_branch_restrictions_error import (
    GetRepositoriesByWorkspaceByRepoSlugBranchRestrictionsErrorBody,
    get_repositories_by_workspace_by_repo_slug_branch_restrictions_error_mapper,
)
from ..errors.post_repositories_by_workspace_by_repo_slug_branch_restrictions_error import (
    PostRepositoriesByWorkspaceByRepoSlugBranchRestrictionsErrorBody,
    post_repositories_by_workspace_by_repo_slug_branch_restrictions_error_mapper,
)
from ..errors.put_repositories_by_workspace_by_repo_slug_branch_restrictions_by_id_error import (
    PutRepositoriesByWorkspaceByRepoSlugBranchRestrictionsByIdErrorBody,
    put_repositories_by_workspace_by_repo_slug_branch_restrictions_by_id_error_mapper,
)
from ..models.branchrestriction import Branchrestriction, BranchrestrictionDict
from ..models.paginated_branch_restrictions import PaginatedBranchRestrictions
from ..server.server import Server


class BranchRestrictions:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = BranchRestrictionsWithRawResponse(client, server, auth)

    def delete_repositories_by_workspace_by_repo_slug_branch_restrictions_by_id(
        self, id_: str, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Deletes an existing branch restriction rule.

        Args:
            id_: The restriction rule's id
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Raises:
            ApiError: If the request was not authenticated If the authenticated user does not have admin access to the
                repository If the repository or branch restriction id does not exist ``error`` is ``Error |
                RawError``."""
        return unwrap(
            self._with_raw_response.delete_repositories_by_workspace_by_repo_slug_branch_restrictions_by_id(
                id_, repo_slug, workspace, request_options=request_options
            ),
        )

    def get_repositories_by_workspace_by_repo_slug_branch_restrictions(
        self,
        repo_slug: str,
        workspace: str,
        *,
        kind: str | None = None,
        pattern: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PaginatedBranchRestrictions:
        """Returns a paginated list of all branch restrictions on the repository.

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            kind: Branch restrictions of this type
            pattern: Branch restrictions applied to branches of this pattern
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A paginated list of branch restrictions

        Raises:
            ApiError: If the request was not authenticated If the authenticated user does not have admin access to the
                repository If the repository does not exist ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_repositories_by_workspace_by_repo_slug_branch_restrictions(
                repo_slug, workspace, kind=kind, pattern=pattern, request_options=request_options
            ),
        )

    def get_repositories_by_workspace_by_repo_slug_branch_restrictions_by_id(
        self, id_: str, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> Branchrestriction:
        """Returns a specific branch restriction rule.

        Args:
            id_: The restriction rule's id
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The branch restriction rule

        Raises:
            ApiError: If the request was not authenticated If the authenticated user does not have admin access to the
                repository If the repository or branch restriction id does not exist ``error`` is ``Error |
                RawError``."""
        return unwrap(
            self._with_raw_response.get_repositories_by_workspace_by_repo_slug_branch_restrictions_by_id(
                id_, repo_slug, workspace, request_options=request_options
            ),
        )

    def post_repositories_by_workspace_by_repo_slug_branch_restrictions(
        self,
        repo_slug: str,
        workspace: str,
        body: Branchrestriction | BranchrestrictionDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Branchrestriction:
        """Creates a new branch restriction rule for a repository.

        ``kind`` describes what will be restricted. Allowed values include: ``push``, ``force``, ``delete``,
        ``restrict_merges``, ``require_tasks_to_be_completed``, ``require_approvals_to_merge``,
        ``require_default_reviewer_approvals_to_merge``, ``require_no_changes_requested``,
        ``require_passing_builds_to_merge``, ``require_commits_behind``, ``reset_pullrequest_approvals_on_change``,
        ``smart_reset_pullrequest_approvals``, ``reset_pullrequest_changes_requested_on_change``,
        ``require_all_dependencies_merged``, ``enforce_merge_checks``, and ``allow_auto_merge_when_builds_pass``.

        Different kinds of branch restrictions have different requirements:

        * ``push`` and ``restrict_merges`` require ``users`` and ``groups`` to be
        specified. Empty lists are allowed, in which case permission is denied for everybody.

        The restriction applies to all branches that match. There are two ways to match a branch. It is configured in
        ``branch_match_kind``:

        1. ``glob``: Matches a branch against the ``pattern``. A ``'*'`` in
        ``pattern`` will expand to match zero or more characters, and every other character matches itself. For example,
        ``'foo*'`` will match ``'foo'`` and ``'foobar'``, but not ``'barfoo'``. ``'*'`` will match all branches.
        2. ``branching_model``: Matches a branch against the repository's
        branching model. The ``branch_type`` controls the type of branch to match. Allowed values include:
        ``production``, ``development``, ``bugfix``, ``release``, ``feature`` and ``hotfix``.

        The combination of ``kind`` and match must be unique. This means that two ``glob`` restrictions in a repository
        cannot have the same ``kind`` and ``pattern``. Additionally, two ``branching_model`` restrictions in a
        repository cannot have the same ``kind`` and ``branch_type``.

        ``users`` and ``groups`` are lists of users and groups that are except from the restriction. They can only be
        configured in ``push`` and ``restrict_merges`` restrictions. The ``push`` restriction stops a user pushing to
        matching branches unless that user is in ``users`` or is a member of a group in ``groups``. The
        ``restrict_merges`` stops a user merging pull requests to matching branches unless that user is in ``users`` or
        is a member of a group in ``groups``. Adding new users or groups to an existing restriction should be done via
        ``PUT``.

        Note that branch restrictions with overlapping matchers is allowed, but the resulting behavior may be
        surprising.

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            body: The new rule
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A paginated list of branch restrictions

        Raises:
            ApiError: If the request was not authenticated If the authenticated user does not have admin access to the
                repository If the repository does not exist ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.post_repositories_by_workspace_by_repo_slug_branch_restrictions(
                repo_slug, workspace, body, request_options=request_options
            ),
        )

    def put_repositories_by_workspace_by_repo_slug_branch_restrictions_by_id(
        self,
        id_: str,
        repo_slug: str,
        workspace: str,
        body: Branchrestriction | BranchrestrictionDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Branchrestriction:
        """Updates an existing branch restriction rule.

        Fields not present in the request body are ignored.

        See ``POST`` for details.

        Args:
            id_: The restriction rule's id
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            body: The new version of the existing rule
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The updated branch restriction rule

        Raises:
            ApiError: If the request was not authenticated If the authenticated user does not have admin access to the
                repository If the repository or branch restriction id does not exist ``error`` is ``Error |
                RawError``."""
        return unwrap(
            self._with_raw_response.put_repositories_by_workspace_by_repo_slug_branch_restrictions_by_id(
                id_, repo_slug, workspace, body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> BranchRestrictionsWithRawResponse:
        return self._with_raw_response


class AsyncBranchRestrictions:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncBranchRestrictionsWithRawResponse(client, server, auth)

    async def delete_repositories_by_workspace_by_repo_slug_branch_restrictions_by_id(
        self, id_: str, repo_slug: str, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Deletes an existing branch restriction rule.

        Args:
            id_: The restriction rule's id
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Raises:
            ApiError: If the request was not authenticated If the authenticated user does not have admin access to the
                repository If the repository or branch restriction id does not exist ``error`` is ``Error |
                RawError``."""
        return unwrap(
            await self._with_raw_response.delete_repositories_by_workspace_by_repo_slug_branch_restrictions_by_id(
                id_, repo_slug, workspace, request_options=request_options
            ),
        )

    async def get_repositories_by_workspace_by_repo_slug_branch_restrictions(
        self,
        repo_slug: str,
        workspace: str,
        *,
        kind: str | None = None,
        pattern: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PaginatedBranchRestrictions:
        """Returns a paginated list of all branch restrictions on the repository.

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            kind: Branch restrictions of this type
            pattern: Branch restrictions applied to branches of this pattern
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A paginated list of branch restrictions

        Raises:
            ApiError: If the request was not authenticated If the authenticated user does not have admin access to the
                repository If the repository does not exist ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_repositories_by_workspace_by_repo_slug_branch_restrictions(
                repo_slug, workspace, kind=kind, pattern=pattern, request_options=request_options
            ),
        )

    async def get_repositories_by_workspace_by_repo_slug_branch_restrictions_by_id(
        self, id_: str, repo_slug: str, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Branchrestriction:
        """Returns a specific branch restriction rule.

        Args:
            id_: The restriction rule's id
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The branch restriction rule

        Raises:
            ApiError: If the request was not authenticated If the authenticated user does not have admin access to the
                repository If the repository or branch restriction id does not exist ``error`` is ``Error |
                RawError``."""
        return unwrap(
            await self._with_raw_response.get_repositories_by_workspace_by_repo_slug_branch_restrictions_by_id(
                id_, repo_slug, workspace, request_options=request_options
            ),
        )

    async def post_repositories_by_workspace_by_repo_slug_branch_restrictions(
        self,
        repo_slug: str,
        workspace: str,
        body: Branchrestriction | BranchrestrictionDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Branchrestriction:
        """Creates a new branch restriction rule for a repository.

        ``kind`` describes what will be restricted. Allowed values include: ``push``, ``force``, ``delete``,
        ``restrict_merges``, ``require_tasks_to_be_completed``, ``require_approvals_to_merge``,
        ``require_default_reviewer_approvals_to_merge``, ``require_no_changes_requested``,
        ``require_passing_builds_to_merge``, ``require_commits_behind``, ``reset_pullrequest_approvals_on_change``,
        ``smart_reset_pullrequest_approvals``, ``reset_pullrequest_changes_requested_on_change``,
        ``require_all_dependencies_merged``, ``enforce_merge_checks``, and ``allow_auto_merge_when_builds_pass``.

        Different kinds of branch restrictions have different requirements:

        * ``push`` and ``restrict_merges`` require ``users`` and ``groups`` to be
        specified. Empty lists are allowed, in which case permission is denied for everybody.

        The restriction applies to all branches that match. There are two ways to match a branch. It is configured in
        ``branch_match_kind``:

        1. ``glob``: Matches a branch against the ``pattern``. A ``'*'`` in
        ``pattern`` will expand to match zero or more characters, and every other character matches itself. For example,
        ``'foo*'`` will match ``'foo'`` and ``'foobar'``, but not ``'barfoo'``. ``'*'`` will match all branches.
        2. ``branching_model``: Matches a branch against the repository's
        branching model. The ``branch_type`` controls the type of branch to match. Allowed values include:
        ``production``, ``development``, ``bugfix``, ``release``, ``feature`` and ``hotfix``.

        The combination of ``kind`` and match must be unique. This means that two ``glob`` restrictions in a repository
        cannot have the same ``kind`` and ``pattern``. Additionally, two ``branching_model`` restrictions in a
        repository cannot have the same ``kind`` and ``branch_type``.

        ``users`` and ``groups`` are lists of users and groups that are except from the restriction. They can only be
        configured in ``push`` and ``restrict_merges`` restrictions. The ``push`` restriction stops a user pushing to
        matching branches unless that user is in ``users`` or is a member of a group in ``groups``. The
        ``restrict_merges`` stops a user merging pull requests to matching branches unless that user is in ``users`` or
        is a member of a group in ``groups``. Adding new users or groups to an existing restriction should be done via
        ``PUT``.

        Note that branch restrictions with overlapping matchers is allowed, but the resulting behavior may be
        surprising.

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            body: The new rule
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A paginated list of branch restrictions

        Raises:
            ApiError: If the request was not authenticated If the authenticated user does not have admin access to the
                repository If the repository does not exist ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.post_repositories_by_workspace_by_repo_slug_branch_restrictions(
                repo_slug, workspace, body, request_options=request_options
            ),
        )

    async def put_repositories_by_workspace_by_repo_slug_branch_restrictions_by_id(
        self,
        id_: str,
        repo_slug: str,
        workspace: str,
        body: Branchrestriction | BranchrestrictionDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Branchrestriction:
        """Updates an existing branch restriction rule.

        Fields not present in the request body are ignored.

        See ``POST`` for details.

        Args:
            id_: The restriction rule's id
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            body: The new version of the existing rule
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The updated branch restriction rule

        Raises:
            ApiError: If the request was not authenticated If the authenticated user does not have admin access to the
                repository If the repository or branch restriction id does not exist ``error`` is ``Error |
                RawError``."""
        return unwrap(
            await self._with_raw_response.put_repositories_by_workspace_by_repo_slug_branch_restrictions_by_id(
                id_, repo_slug, workspace, body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncBranchRestrictionsWithRawResponse:
        return self._with_raw_response


class BranchRestrictionsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def delete_repositories_by_workspace_by_repo_slug_branch_restrictions_by_id(
        self, id_: str, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteRepositoriesByWorkspaceByRepoSlugBranchRestrictionsByIdErrorBody]:
        """Deletes an existing branch restriction rule.

        Args:
            id_: The restriction rule's id
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
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/branch-restrictions/{id}"),
            path_params=[param[str]("id", id_), param[str]("repo_slug", repo_slug), param[str]("workspace", workspace)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=empty_response,
            error_mapper=delete_repositories_by_workspace_by_repo_slug_branch_restrictions_by_id_error_mapper,
            request_options=request_options,
        )

    def get_repositories_by_workspace_by_repo_slug_branch_restrictions(
        self,
        repo_slug: str,
        workspace: str,
        *,
        kind: str | None = None,
        pattern: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PaginatedBranchRestrictions, GetRepositoriesByWorkspaceByRepoSlugBranchRestrictionsErrorBody]:
        """Returns a paginated list of all branch restrictions on the repository.

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            kind: Branch restrictions of this type
            pattern: Branch restrictions applied to branches of this pattern
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/branch-restrictions"),
            path_params=[param[str]("repo_slug", repo_slug), param[str]("workspace", workspace)],
            query_params=[param[str | None]("kind", kind), param[str | None]("pattern", pattern)],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[PaginatedBranchRestrictions],
            error_mapper=get_repositories_by_workspace_by_repo_slug_branch_restrictions_error_mapper,
            request_options=request_options,
        )

    def get_repositories_by_workspace_by_repo_slug_branch_restrictions_by_id(
        self, id_: str, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Branchrestriction, GetRepositoriesByWorkspaceByRepoSlugBranchRestrictionsByIdErrorBody]:
        """Returns a specific branch restriction rule.

        Args:
            id_: The restriction rule's id
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
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/branch-restrictions/{id}"),
            path_params=[param[str]("id", id_), param[str]("repo_slug", repo_slug), param[str]("workspace", workspace)],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[Branchrestriction],
            error_mapper=get_repositories_by_workspace_by_repo_slug_branch_restrictions_by_id_error_mapper,
            request_options=request_options,
        )

    def post_repositories_by_workspace_by_repo_slug_branch_restrictions(
        self,
        repo_slug: str,
        workspace: str,
        body: Branchrestriction | BranchrestrictionDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Branchrestriction, PostRepositoriesByWorkspaceByRepoSlugBranchRestrictionsErrorBody]:
        """Creates a new branch restriction rule for a repository.

        ``kind`` describes what will be restricted. Allowed values include: ``push``, ``force``, ``delete``,
        ``restrict_merges``, ``require_tasks_to_be_completed``, ``require_approvals_to_merge``,
        ``require_default_reviewer_approvals_to_merge``, ``require_no_changes_requested``,
        ``require_passing_builds_to_merge``, ``require_commits_behind``, ``reset_pullrequest_approvals_on_change``,
        ``smart_reset_pullrequest_approvals``, ``reset_pullrequest_changes_requested_on_change``,
        ``require_all_dependencies_merged``, ``enforce_merge_checks``, and ``allow_auto_merge_when_builds_pass``.

        Different kinds of branch restrictions have different requirements:

        * ``push`` and ``restrict_merges`` require ``users`` and ``groups`` to be
        specified. Empty lists are allowed, in which case permission is denied for everybody.

        The restriction applies to all branches that match. There are two ways to match a branch. It is configured in
        ``branch_match_kind``:

        1. ``glob``: Matches a branch against the ``pattern``. A ``'*'`` in
        ``pattern`` will expand to match zero or more characters, and every other character matches itself. For example,
        ``'foo*'`` will match ``'foo'`` and ``'foobar'``, but not ``'barfoo'``. ``'*'`` will match all branches.
        2. ``branching_model``: Matches a branch against the repository's
        branching model. The ``branch_type`` controls the type of branch to match. Allowed values include:
        ``production``, ``development``, ``bugfix``, ``release``, ``feature`` and ``hotfix``.

        The combination of ``kind`` and match must be unique. This means that two ``glob`` restrictions in a repository
        cannot have the same ``kind`` and ``pattern``. Additionally, two ``branching_model`` restrictions in a
        repository cannot have the same ``kind`` and ``branch_type``.

        ``users`` and ``groups`` are lists of users and groups that are except from the restriction. They can only be
        configured in ``push`` and ``restrict_merges`` restrictions. The ``push`` restriction stops a user pushing to
        matching branches unless that user is in ``users`` or is a member of a group in ``groups``. The
        ``restrict_merges`` stops a user merging pull requests to matching branches unless that user is in ``users`` or
        is a member of a group in ``groups``. Adding new users or groups to an existing restriction should be done via
        ``PUT``.

        Note that branch restrictions with overlapping matchers is allowed, but the resulting behavior may be
        surprising.

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            body: The new rule
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/branch-restrictions"),
            path_params=[param[str]("repo_slug", repo_slug), param[str]("workspace", workspace)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[Branchrestriction | BranchrestrictionDict](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[Branchrestriction],
            error_mapper=post_repositories_by_workspace_by_repo_slug_branch_restrictions_error_mapper,
            request_options=request_options,
        )

    def put_repositories_by_workspace_by_repo_slug_branch_restrictions_by_id(
        self,
        id_: str,
        repo_slug: str,
        workspace: str,
        body: Branchrestriction | BranchrestrictionDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Branchrestriction, PutRepositoriesByWorkspaceByRepoSlugBranchRestrictionsByIdErrorBody]:
        """Updates an existing branch restriction rule.

        Fields not present in the request body are ignored.

        See ``POST`` for details.

        Args:
            id_: The restriction rule's id
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            body: The new version of the existing rule
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/branch-restrictions/{id}"),
            path_params=[param[str]("id", id_), param[str]("repo_slug", repo_slug), param[str]("workspace", workspace)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[Branchrestriction | BranchrestrictionDict](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[Branchrestriction],
            error_mapper=put_repositories_by_workspace_by_repo_slug_branch_restrictions_by_id_error_mapper,
            request_options=request_options,
        )


class AsyncBranchRestrictionsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def delete_repositories_by_workspace_by_repo_slug_branch_restrictions_by_id(
        self, id_: str, repo_slug: str, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteRepositoriesByWorkspaceByRepoSlugBranchRestrictionsByIdErrorBody]:
        """Deletes an existing branch restriction rule.

        Args:
            id_: The restriction rule's id
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
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/branch-restrictions/{id}"),
            path_params=[param[str]("id", id_), param[str]("repo_slug", repo_slug), param[str]("workspace", workspace)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_empty_response,
            error_mapper=delete_repositories_by_workspace_by_repo_slug_branch_restrictions_by_id_error_mapper,
            request_options=request_options,
        )

    async def get_repositories_by_workspace_by_repo_slug_branch_restrictions(
        self,
        repo_slug: str,
        workspace: str,
        *,
        kind: str | None = None,
        pattern: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PaginatedBranchRestrictions, GetRepositoriesByWorkspaceByRepoSlugBranchRestrictionsErrorBody]:
        """Returns a paginated list of all branch restrictions on the repository.

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            kind: Branch restrictions of this type
            pattern: Branch restrictions applied to branches of this pattern
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/branch-restrictions"),
            path_params=[param[str]("repo_slug", repo_slug), param[str]("workspace", workspace)],
            query_params=[param[str | None]("kind", kind), param[str | None]("pattern", pattern)],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[PaginatedBranchRestrictions],
            error_mapper=get_repositories_by_workspace_by_repo_slug_branch_restrictions_error_mapper,
            request_options=request_options,
        )

    async def get_repositories_by_workspace_by_repo_slug_branch_restrictions_by_id(
        self, id_: str, repo_slug: str, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Branchrestriction, GetRepositoriesByWorkspaceByRepoSlugBranchRestrictionsByIdErrorBody]:
        """Returns a specific branch restriction rule.

        Args:
            id_: The restriction rule's id
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
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/branch-restrictions/{id}"),
            path_params=[param[str]("id", id_), param[str]("repo_slug", repo_slug), param[str]("workspace", workspace)],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[Branchrestriction],
            error_mapper=get_repositories_by_workspace_by_repo_slug_branch_restrictions_by_id_error_mapper,
            request_options=request_options,
        )

    async def post_repositories_by_workspace_by_repo_slug_branch_restrictions(
        self,
        repo_slug: str,
        workspace: str,
        body: Branchrestriction | BranchrestrictionDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Branchrestriction, PostRepositoriesByWorkspaceByRepoSlugBranchRestrictionsErrorBody]:
        """Creates a new branch restriction rule for a repository.

        ``kind`` describes what will be restricted. Allowed values include: ``push``, ``force``, ``delete``,
        ``restrict_merges``, ``require_tasks_to_be_completed``, ``require_approvals_to_merge``,
        ``require_default_reviewer_approvals_to_merge``, ``require_no_changes_requested``,
        ``require_passing_builds_to_merge``, ``require_commits_behind``, ``reset_pullrequest_approvals_on_change``,
        ``smart_reset_pullrequest_approvals``, ``reset_pullrequest_changes_requested_on_change``,
        ``require_all_dependencies_merged``, ``enforce_merge_checks``, and ``allow_auto_merge_when_builds_pass``.

        Different kinds of branch restrictions have different requirements:

        * ``push`` and ``restrict_merges`` require ``users`` and ``groups`` to be
        specified. Empty lists are allowed, in which case permission is denied for everybody.

        The restriction applies to all branches that match. There are two ways to match a branch. It is configured in
        ``branch_match_kind``:

        1. ``glob``: Matches a branch against the ``pattern``. A ``'*'`` in
        ``pattern`` will expand to match zero or more characters, and every other character matches itself. For example,
        ``'foo*'`` will match ``'foo'`` and ``'foobar'``, but not ``'barfoo'``. ``'*'`` will match all branches.
        2. ``branching_model``: Matches a branch against the repository's
        branching model. The ``branch_type`` controls the type of branch to match. Allowed values include:
        ``production``, ``development``, ``bugfix``, ``release``, ``feature`` and ``hotfix``.

        The combination of ``kind`` and match must be unique. This means that two ``glob`` restrictions in a repository
        cannot have the same ``kind`` and ``pattern``. Additionally, two ``branching_model`` restrictions in a
        repository cannot have the same ``kind`` and ``branch_type``.

        ``users`` and ``groups`` are lists of users and groups that are except from the restriction. They can only be
        configured in ``push`` and ``restrict_merges`` restrictions. The ``push`` restriction stops a user pushing to
        matching branches unless that user is in ``users`` or is a member of a group in ``groups``. The
        ``restrict_merges`` stops a user merging pull requests to matching branches unless that user is in ``users`` or
        is a member of a group in ``groups``. Adding new users or groups to an existing restriction should be done via
        ``PUT``.

        Note that branch restrictions with overlapping matchers is allowed, but the resulting behavior may be
        surprising.

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            body: The new rule
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/branch-restrictions"),
            path_params=[param[str]("repo_slug", repo_slug), param[str]("workspace", workspace)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[Branchrestriction | BranchrestrictionDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[Branchrestriction],
            error_mapper=post_repositories_by_workspace_by_repo_slug_branch_restrictions_error_mapper,
            request_options=request_options,
        )

    async def put_repositories_by_workspace_by_repo_slug_branch_restrictions_by_id(
        self,
        id_: str,
        repo_slug: str,
        workspace: str,
        body: Branchrestriction | BranchrestrictionDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Branchrestriction, PutRepositoriesByWorkspaceByRepoSlugBranchRestrictionsByIdErrorBody]:
        """Updates an existing branch restriction rule.

        Fields not present in the request body are ignored.

        See ``POST`` for details.

        Args:
            id_: The restriction rule's id
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            body: The new version of the existing rule
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/branch-restrictions/{id}"),
            path_params=[param[str]("id", id_), param[str]("repo_slug", repo_slug), param[str]("workspace", workspace)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[Branchrestriction | BranchrestrictionDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[Branchrestriction],
            error_mapper=put_repositories_by_workspace_by_repo_slug_branch_restrictions_by_id_error_mapper,
            request_options=request_options,
        )

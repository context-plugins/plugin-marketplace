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
from ..errors.delete_repositories_by_workspace_by_repo_slug_default_reviewers_by_target_username_error import (
    DeleteRepositoriesByWorkspaceByRepoSlugDefaultReviewersByTargetUsernameErrorBody,
    delete_repositories_by_workspace_by_repo_slug_default_reviewers_by_target_username_error_mapper,
)
from ..errors.delete_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_approve_error import (
    DeleteRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdApproveErrorBody,
    delete_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_approve_error_mapper,
)
from ..errors.delete_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_comments_by_comment_id_error import (
    DeleteRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsByCommentIdErrorBody,
    delete_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_comments_by_comment_id_error_mapper,
)
from ..errors.delete_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_comments_by_comment_id_resolve_error import (
    DeleteRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsByCommentIdResolveErrorBody,
    delete_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_comments_by_comment_id_resolve_error_mapper,
)
from ..errors.delete_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_request_changes_error import (
    DeleteRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdRequestChangesErrorBody,
    delete_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_request_changes_error_mapper,
)
from ..errors.delete_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_tasks_by_task_id_error import (
    DeleteRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdTasksByTaskIdErrorBody,
    delete_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_tasks_by_task_id_error_mapper,
)
from ..errors.get_pullrequests_for_commit_error import (
    GetPullrequestsForCommitErrorBody,
    get_pullrequests_for_commit_error_mapper,
)
from ..errors.get_repositories_by_workspace_by_repo_slug_default_reviewers_by_target_username_error import (
    GetRepositoriesByWorkspaceByRepoSlugDefaultReviewersByTargetUsernameErrorBody,
    get_repositories_by_workspace_by_repo_slug_default_reviewers_by_target_username_error_mapper,
)
from ..errors.get_repositories_by_workspace_by_repo_slug_default_reviewers_error import (
    GetRepositoriesByWorkspaceByRepoSlugDefaultReviewersErrorBody,
    get_repositories_by_workspace_by_repo_slug_default_reviewers_error_mapper,
)
from ..errors.get_repositories_by_workspace_by_repo_slug_effective_default_reviewers_error import (
    GetRepositoriesByWorkspaceByRepoSlugEffectiveDefaultReviewersErrorBody,
    get_repositories_by_workspace_by_repo_slug_effective_default_reviewers_error_mapper,
)
from ..errors.get_repositories_by_workspace_by_repo_slug_pullrequests_activity_error import (
    GetRepositoriesByWorkspaceByRepoSlugPullrequestsActivityErrorBody,
    get_repositories_by_workspace_by_repo_slug_pullrequests_activity_error_mapper,
)
from ..errors.get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_activity_error import (
    GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdActivityErrorBody,
    get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_activity_error_mapper,
)
from ..errors.get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_comments_by_comment_id_error import (
    GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsByCommentIdErrorBody,
    get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_comments_by_comment_id_error_mapper,
)
from ..errors.get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_comments_error import (
    GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsErrorBody,
    get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_comments_error_mapper,
)
from ..errors.get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_commits_error import (
    GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommitsErrorBody,
    get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_commits_error_mapper,
)
from ..errors.get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_error import (
    GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdErrorBody,
    get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_error_mapper,
)
from ..errors.get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_merge_task_status_by_task_id_error import (
    GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdMergeTaskStatusByTaskIdErrorBody,
    get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_merge_task_status_by_task_id_error_mapper,
)
from ..errors.get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_statuses2_error import (
    GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdStatuses2ErrorBody,
    get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_statuses2_error_mapper,
)
from ..errors.get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_tasks_by_task_id_error import (
    GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdTasksByTaskIdErrorBody,
    get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_tasks_by_task_id_error_mapper,
)
from ..errors.get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_tasks_error import (
    GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdTasksErrorBody,
    get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_tasks_error_mapper,
)
from ..errors.get_repositories_by_workspace_by_repo_slug_pullrequests_error import (
    GetRepositoriesByWorkspaceByRepoSlugPullrequestsErrorBody,
    get_repositories_by_workspace_by_repo_slug_pullrequests_error_mapper,
)
from ..errors.get_workspaces_by_workspace_pullrequests_by_selected_user_error import (
    GetWorkspacesByWorkspacePullrequestsBySelectedUserErrorBody,
    get_workspaces_by_workspace_pullrequests_by_selected_user_error_mapper,
)
from ..errors.post_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_approve_error import (
    PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdApproveErrorBody,
    post_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_approve_error_mapper,
)
from ..errors.post_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_comments_by_comment_id_resolve_error import (
    PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsByCommentIdResolveErrorBody,
    post_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_comments_by_comment_id_resolve_error_mapper,
)
from ..errors.post_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_comments_error import (
    PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsErrorBody,
    post_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_comments_error_mapper,
)
from ..errors.post_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_decline_error import (
    PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdDeclineErrorBody,
    post_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_decline_error_mapper,
)
from ..errors.post_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_merge_error import (
    PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdMergeErrorBody,
    post_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_merge_error_mapper,
)
from ..errors.post_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_request_changes_error import (
    PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdRequestChangesErrorBody,
    post_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_request_changes_error_mapper,
)
from ..errors.post_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_tasks_error import (
    PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdTasksErrorBody,
    post_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_tasks_error_mapper,
)
from ..errors.post_repositories_by_workspace_by_repo_slug_pullrequests_error import (
    PostRepositoriesByWorkspaceByRepoSlugPullrequestsErrorBody,
    post_repositories_by_workspace_by_repo_slug_pullrequests_error_mapper,
)
from ..errors.put_repositories_by_workspace_by_repo_slug_default_reviewers_by_target_username_error import (
    PutRepositoriesByWorkspaceByRepoSlugDefaultReviewersByTargetUsernameErrorBody,
    put_repositories_by_workspace_by_repo_slug_default_reviewers_by_target_username_error_mapper,
)
from ..errors.put_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_comments_by_comment_id_error import (
    PutRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsByCommentIdErrorBody,
    put_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_comments_by_comment_id_error_mapper,
)
from ..errors.put_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_error import (
    PutRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdErrorBody,
    put_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_error_mapper,
)
from ..errors.put_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_tasks_by_task_id_error import (
    PutRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdTasksByTaskIdErrorBody,
    put_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_tasks_by_task_id_error_mapper,
)
from ..models.account import Account
from ..models.comment_resolution import CommentResolution
from ..models.enums.state5 import State5OrStr
from ..models.paginated_accounts import PaginatedAccounts
from ..models.paginated_commit_statuses import PaginatedCommitStatuses
from ..models.paginated_default_reviewer_and_type import PaginatedDefaultReviewerAndType
from ..models.paginated_pull_request_comments import PaginatedPullRequestComments
from ..models.paginated_pull_requests import PaginatedPullRequests
from ..models.paginated_tasks import PaginatedTasks
from ..models.participant import Participant
from ..models.pull_request_merge_parameters import PullRequestMergeParameters, PullRequestMergeParametersDict
from ..models.pull_request_task_create import PullRequestTaskCreate, PullRequestTaskCreateDict
from ..models.pull_request_task_update import PullRequestTaskUpdate, PullRequestTaskUpdateDict
from ..models.pullrequest import Pullrequest, PullrequestDict
from ..models.pullrequest_comment import PullrequestComment, PullrequestCommentDict
from ..models.pullrequest_comment_task import PullrequestCommentTask
from ..server.server import Server


class PullRequests:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = PullRequestsWithRawResponse(client, server, auth)

    def delete_repositories_by_workspace_by_repo_slug_default_reviewers_by_target_username(
        self,
        repo_slug: str,
        target_username: str,
        workspace: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Removes a default reviewer from the repository.

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            target_username: This can either be the username or the UUID of the default reviewer, surrounded by
                curly-braces, for example: ``{account UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The specified user successfully removed from the default reviewers

        Raises:
            ApiError: If the authenticated user does not have access modify the default reviewers If the specified user
                does not exist ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.delete_repositories_by_workspace_by_repo_slug_default_reviewers_by_target_username(
                repo_slug, target_username, workspace, request_options=request_options
            ),
        )

    def delete_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_approve(
        self,
        pull_request_id: int,
        repo_slug: str,
        workspace: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Redact the authenticated user's approval of the specified pull request.

        Args:
            pull_request_id: The id of the pull request.
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An empty response indicating the authenticated user's approval has been withdrawn.

        Raises:
            ApiError: Pull request cannot be unapproved because the pull request has already been merged. The request
                wasn't authenticated. The specified pull request or the repository does not exist. ``error`` is ``Error
                | RawError``."""
        return unwrap(
            self._with_raw_response.delete_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_approve(
                pull_request_id, repo_slug, workspace, request_options=request_options
            ),
        )

    def delete_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_comments_by_comment_id(
        self,
        comment_id: int,
        pull_request_id: int,
        repo_slug: str,
        workspace: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Deletes a specific pull request comment.

        Args:
            comment_id: The id of the comment.
            pull_request_id: The id of the pull request.
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful deletion.

        Raises:
            ApiError: If the authenticated user does not have access to delete the comment. If the comment does not
                exist. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.delete_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_comments_by_comment_id(
                comment_id, pull_request_id, repo_slug, workspace, request_options=request_options
            ),
        )

    def delete_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_comments_by_comment_id_resolve(
        self,
        comment_id: int,
        pull_request_id: int,
        repo_slug: str,
        workspace: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Send a ``DELETE`` request.

        Args:
            comment_id: The id of the comment.
            pull_request_id: The id of the pull request.
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The comment is reopened.

        Raises:
            ApiError: If the authenticated user does not have access to the pull request, or if the provided comment is
                not a top-level comment. If the comment does not exist, or if the comment has not been resolved
                ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.delete_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_comments_by_comment_id_resolve(
                comment_id, pull_request_id, repo_slug, workspace, request_options=request_options
            ),
        )

    def delete_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_request_changes(
        self,
        pull_request_id: int,
        repo_slug: str,
        workspace: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Send a ``DELETE`` request.

        Args:
            pull_request_id: The id of the pull request.
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An empty response indicating the authenticated user's request for change has been withdrawn.

        Raises:
            ApiError: Pull request requested changes cannot be removed because the pull request has already been merged.
                The request wasn't authenticated. The specified pull request or the repository does not exist. ``error``
                is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.delete_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_request_changes(
                pull_request_id, repo_slug, workspace, request_options=request_options
            ),
        )

    def delete_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_tasks_by_task_id(
        self,
        pull_request_id: int,
        repo_slug: str,
        task_id: int,
        workspace: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Deletes a specific pull request task.

        Args:
            pull_request_id: The id of the pull request.
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            task_id: The ID of the task.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful deletion.

        Raises:
            ApiError: If the authenticated user does not have access to delete the task. If the task does not exist.
                ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.delete_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_tasks_by_task_id(
                pull_request_id, repo_slug, task_id, workspace, request_options=request_options
            ),
        )

    def get_pullrequests_for_commit(
        self,
        workspace: str,
        repo_slug: str,
        commit: str,
        *,
        page: int | None = 1,
        pagelen: int | None = 30,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PaginatedPullRequests:
        """Returns a paginated list of all pull requests as part of which this commit was reviewed. Pull Request Commit
        Links app must be installed first before using this API; installation automatically occurs when 'Go to pull
        request' is clicked from the web interface for a commit's details.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces
            repo_slug: The repository; either the UUID in curly braces, or the slug
            commit: The SHA1 of the commit
            page: Which page to retrieve
            pagelen: How many pull requests to retrieve per page
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The paginated list of pull requests.

        Raises:
            ApiError: Either the repository does not exist, or pull request commit links have not yet been indexed.
                ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_pullrequests_for_commit(
                workspace, repo_slug, commit, page=page, pagelen=pagelen, request_options=request_options
            ),
        )

    def get_repositories_by_workspace_by_repo_slug_default_reviewers(
        self, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> PaginatedAccounts:
        """Returns the repository's default reviewers.

        These are the users that are automatically added as reviewers on every new pull request that is created. To
        obtain the repository's default reviewers as well as the default reviewers inherited from the project, use the
        effective-default-reveiwers endpoint.

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The paginated list of default reviewers

        Raises:
            ApiError: If the authenticated user does not have access to view the default reviewers ``error`` is ``Error
                | RawError``."""
        return unwrap(
            self._with_raw_response.get_repositories_by_workspace_by_repo_slug_default_reviewers(
                repo_slug, workspace, request_options=request_options
            ),
        )

    def get_repositories_by_workspace_by_repo_slug_default_reviewers_by_target_username(
        self,
        repo_slug: str,
        target_username: str,
        workspace: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Account:
        """Returns the specified reviewer.

        This can be used to test whether a user is among the repository's default reviewers list. A 404 indicates that
        that specified user is not a default reviewer.

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            target_username: This can either be the username or the UUID of the default reviewer, surrounded by
                curly-braces, for example: ``{account UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The specified user is a default reviewer

        Raises:
            ApiError: If the authenticated user does not have access to check if the specified user is a default
                reviewer If the specified user does not exist or is not a default reviewer ``error`` is ``Error |
                RawError``."""
        return unwrap(
            self._with_raw_response.get_repositories_by_workspace_by_repo_slug_default_reviewers_by_target_username(
                repo_slug, target_username, workspace, request_options=request_options
            ),
        )

    def get_repositories_by_workspace_by_repo_slug_effective_default_reviewers(
        self, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> PaginatedDefaultReviewerAndType:
        """Returns the repository's effective default reviewers. This includes both default reviewers defined at the
        repository level as well as those inherited from its project.

        These are the users that are automatically added as reviewers on every new pull request that is created.

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The paginated list of effective default reviewers

        Raises:
            ApiError: If the authenticated user does not have access to view the default reviewers ``error`` is ``Error
                | RawError``."""
        return unwrap(
            self._with_raw_response.get_repositories_by_workspace_by_repo_slug_effective_default_reviewers(
                repo_slug, workspace, request_options=request_options
            ),
        )

    def get_repositories_by_workspace_by_repo_slug_pullrequests(
        self,
        repo_slug: str,
        workspace: str,
        *,
        state: State5OrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PaginatedPullRequests:
        """Returns all pull requests on the specified repository.

        By default only open pull requests are returned. This can be controlled using the ``state`` query parameter. To
        retrieve pull requests that are in one of multiple states, repeat the ``state`` parameter for each individual
        state.

        This endpoint also supports filtering and sorting of the results. See filtering and sorting for more details.

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            state: Only return pull requests that are in this state. This parameter can be repeated.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            All pull requests on the specified repository.

        Raises:
            ApiError: If the repository is private and the request was not authenticated. If the specified repository
                does not exist. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_repositories_by_workspace_by_repo_slug_pullrequests(
                repo_slug, workspace, state=state, request_options=request_options
            ),
        )

    def get_repositories_by_workspace_by_repo_slug_pullrequests_activity(
        self, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Returns a paginated list of the pull request's activity log.

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The pull request activity log

        Raises:
            ApiError: If the repository is private and the request was not authenticated. If the specified repository
                does not exist. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_repositories_by_workspace_by_repo_slug_pullrequests_activity(
                repo_slug, workspace, request_options=request_options
            ),
        )

    def get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id(
        self,
        pull_request_id: int,
        repo_slug: str,
        workspace: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Pullrequest:
        """Returns the specified pull request.

        Args:
            pull_request_id: The id of the pull request.
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The pull request object

        Raises:
            ApiError: If the repository is private and the request was not authenticated. If the repository or pull
                request does not exist ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id(
                pull_request_id, repo_slug, workspace, request_options=request_options
            ),
        )

    def get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_activity(
        self,
        pull_request_id: int,
        repo_slug: str,
        workspace: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Returns a paginated list of the pull request's activity log.

        Args:
            pull_request_id: The id of the pull request.
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The pull request activity log

        Raises:
            ApiError: If the repository is private and the request was not authenticated. If the specified repository
                does not exist. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_activity(
                pull_request_id, repo_slug, workspace, request_options=request_options
            ),
        )

    def get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_comments(
        self,
        pull_request_id: int,
        repo_slug: str,
        workspace: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PaginatedPullRequestComments:
        """Returns a paginated list of the pull request's comments.

        This includes both global, inline comments and replies.

        The default sorting is oldest to newest and can be overridden with the ``sort`` query parameter.

        This endpoint also supports filtering and sorting of the results. See filtering and sorting for more details.

        Args:
            pull_request_id: The id of the pull request.
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A paginated list of comments made on the given pull request, in chronological order.

        Raises:
            ApiError: If the authenticated user does not have access to the pull request. If the pull request does not
                exist. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_comments(
                pull_request_id, repo_slug, workspace, request_options=request_options
            ),
        )

    def get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_comments_by_comment_id(
        self,
        comment_id: int,
        pull_request_id: int,
        repo_slug: str,
        workspace: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PullrequestComment:
        """Returns a specific pull request comment.

        Args:
            comment_id: The id of the comment.
            pull_request_id: The id of the pull request.
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The comment.

        Raises:
            ApiError: If the authenticated user does not have access to the pull request. If the comment does not exist.
                ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_comments_by_comment_id(
                comment_id, pull_request_id, repo_slug, workspace, request_options=request_options
            ),
        )

    def get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_commits(
        self,
        pull_request_id: int,
        repo_slug: str,
        workspace: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Returns a paginated list of the pull request's commits.

        These are the commits that are being merged into the destination branch when the pull requests gets accepted.

        Args:
            pull_request_id: The id of the pull request.
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A paginated list of commits made on the given pull request, in chronological order. This list will be empty
            if the source branch no longer exists.

        Raises:
            ApiError: If the authenticated user does not have access to the pull request. If the pull request does not
                exist or the source branch is from a forked repository which no longer exists. ``error`` is ``Error |
                RawError``."""
        return unwrap(
            self._with_raw_response.get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_commits(
                pull_request_id, repo_slug, workspace, request_options=request_options
            ),
        )

    def get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_diff(
        self,
        pull_request_id: int,
        repo_slug: str,
        workspace: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Redirects to the repository diff with the revspec that corresponds to the pull request.

        Args:
            pull_request_id: The id of the pull request.
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_diff(
                pull_request_id, repo_slug, workspace, request_options=request_options
            ),
        )

    def get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_diffstat(
        self,
        pull_request_id: int,
        repo_slug: str,
        workspace: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Redirects to the repository diffstat with the revspec that corresponds to the pull request.

        Args:
            pull_request_id: The id of the pull request.
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_diffstat(
                pull_request_id, repo_slug, workspace, request_options=request_options
            ),
        )

    def get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_merge_task_status_by_task_id(
        self,
        pull_request_id: int,
        repo_slug: str,
        task_id: str,
        workspace: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """When merging a pull request takes too long, the client receives a task ID along with a 202 status code. The
        task ID can be used in a call to this endpoint to check the status of a merge task.

        ```
        curl -X GET https://api.bitbucket.org/2.0/repositories/atlassian/bitbucket/pullrequests/2286/merge/task-status/
        ```

        If the merge task is not yet finished, a PENDING status will be returned.

        ```
        HTTP/2 200
        {
        "task_status": "PENDING", "links": { "self": { "href":
        "https://api.bitbucket.org/2.0/repositories/atlassian/bitbucket/pullrequests/2286/merge/task-status/"
        }
        }
        }
        ```

        If the merge was successful, a SUCCESS status will be returned.

        ```
        HTTP/2 200
        {
        "task_status": "SUCCESS", "links": { "self": { "href":
        "https://api.bitbucket.org/2.0/repositories/atlassian/bitbucket/pullrequests/2286/merge/task-status/"
        }
        },
        "merge_result":
        }
        ```

        If the merge task failed, an error will be returned.

        ```
        {
        "type": "error", "error": { "message": ""
        }
        }
        ```

        Args:
            pull_request_id: The id of the pull request.
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            task_id: ID of the merge task
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Returns a task status if the merge is either pending or successful, and if it is successful, a pull request

        Raises:
            ApiError: If the provided task ID does not relate to this pull request, or if something went wrong during
                the merge operation The user making the request does not have permission to the repo and is different
                from the user who queued the task Unable to merge because one of the refs involved changed while
                attempting to merge ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_merge_task_status_by_task_id(
                pull_request_id, repo_slug, task_id, workspace, request_options=request_options
            ),
        )

    def get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_patch(
        self,
        pull_request_id: int,
        repo_slug: str,
        workspace: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Redirects to the repository patch with the revspec that corresponds to pull request.

        Args:
            pull_request_id: The id of the pull request.
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_patch(
                pull_request_id, repo_slug, workspace, request_options=request_options
            ),
        )

    def get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_statuses2(
        self,
        pull_request_id: int,
        repo_slug: str,
        workspace: str,
        *,
        q: str | None = None,
        sort: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PaginatedCommitStatuses:
        """Returns all statuses (e.g. build results) for the given pull request.

        Args:
            pull_request_id: The id of the pull request.
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            q: Query string to narrow down the response as per `filtering and sorting
                </cloud/bitbucket/rest/intro/#filtering>`__.
            sort: Field by which the results should be sorted as per `filtering and sorting
                </cloud/bitbucket/rest/intro/#filtering>`__. Defaults to ``created_on``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A paginated list of all commit statuses for this pull request.

        Raises:
            ApiError: If the repository is private and the request was not authenticated. If the specified repository or
                pull request does not exist. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_statuses2(
                pull_request_id, repo_slug, workspace, q=q, sort=sort, request_options=request_options
            ),
        )

    def get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_tasks(
        self,
        pull_request_id: int,
        repo_slug: str,
        workspace: str,
        *,
        q: str | None = None,
        sort: str | None = None,
        pagelen: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PaginatedTasks:
        """Returns a paginated list of the pull request's tasks.

        This endpoint supports filtering and sorting of the results by the 'task' field. See filtering and sorting for
        more details.

        Args:
            pull_request_id: The id of the pull request.
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            q: Query string to narrow down the response. See `filtering and sorting
                </cloud/bitbucket/rest/intro/#filtering>`__ for details.
            sort: Field by which the results should be sorted as per `filtering and sorting
                </cloud/bitbucket/rest/intro/#filtering>`__. Defaults to ``created_on``.
            pagelen: Current number of objects on the existing page. The default value is 10 with 100 being the maximum
                allowed value. Individual APIs may enforce different values.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A paginated list of pull request tasks for the given pull request.

        Raises:
            ApiError: If the user provides an invalid filter, sort, or fields query parameter. If the authenticated user
                does not have access to the pull request. If the pull request does not exist. ``error`` is ``Error |
                RawError``."""
        return unwrap(
            self._with_raw_response.get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_tasks(
                pull_request_id, repo_slug, workspace, q=q, sort=sort, pagelen=pagelen, request_options=request_options
            ),
        )

    def get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_tasks_by_task_id(
        self,
        pull_request_id: int,
        repo_slug: str,
        task_id: int,
        workspace: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PullrequestCommentTask:
        """Returns a specific pull request task.

        Args:
            pull_request_id: The id of the pull request.
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            task_id: The ID of the task.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The task.

        Raises:
            ApiError: If the authenticated user does not have access to the pull request. If the task does not exist.
                ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_tasks_by_task_id(
                pull_request_id, repo_slug, task_id, workspace, request_options=request_options
            ),
        )

    def get_workspaces_by_workspace_pullrequests_by_selected_user(
        self,
        selected_user: str,
        workspace: str,
        *,
        state: State5OrStr | None = None,
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
            self._with_raw_response.get_workspaces_by_workspace_pullrequests_by_selected_user(
                selected_user, workspace, state=state, request_options=request_options
            ),
        )

    def post_repositories_by_workspace_by_repo_slug_pullrequests(
        self,
        repo_slug: str,
        workspace: str,
        *,
        body: Pullrequest | PullrequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Pullrequest:
        r"""Creates a new pull request where the destination repository is this repository and the author is the
        authenticated user.

        The minimum required fields to create a pull request are ``title`` and ``source``, specified by a branch name.

        ```
        curl https://api.bitbucket.org/2.0/repositories/my-workspace/my-repository/pullrequests \ -u
        my-username:my-password \ --request POST \ --header 'Content-Type: application/json' \ --data '{ "title": "My
        Title", "source": { "branch": { "name": "staging"
        }
        }
        }'
        ```

        If the pull request's ``destination`` is not specified, it will default to the ``repository.mainbranch``. To
        open a pull request to a different branch, say from a feature branch to a staging branch, specify a
        ``destination`` (same format as the ``source``):

        ```
        {
        "title": "My Title", "source": { "branch": { "name": "my-feature-branch"
        }
        },
        "destination": { "branch": { "name": "staging"
        }
        }
        }
        ```

        Reviewers can be specified by adding an array of user objects as the ``reviewers`` property.

        ```
        {
        "title": "My Title", "source": { "branch": { "name": "my-feature-branch"
        }
        },
        "reviewers": [
        {
        "uuid": "{504c3b62-8120-4f0c-a7bc-87800b9d6f70}"
        }
        ]
        }
        ```

        Other fields:

        * ``description`` - a string
        * ``close_source_branch`` - boolean that specifies if the source branch should be closed upon merging
        * ``draft`` - boolean that specifies whether the pull request is a draft

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            body: The new pull request. The request URL you POST to becomes the destination repository URL. For this
                reason, you must specify an explicit source repository in the request object if you want to pull from a
                different repository (fork). Since not all elements are required or even mutable, you only need to
                include the elements you want to initialize, such as the source branch and the title.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The newly created pull request.

        Raises:
            ApiError: If the input document was invalid, or if the caller lacks the privilege to create repositories
                under the targeted account. If the request was not authenticated. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.post_repositories_by_workspace_by_repo_slug_pullrequests(
                repo_slug, workspace, body=body, request_options=request_options
            ),
        )

    def post_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_approve(
        self,
        pull_request_id: int,
        repo_slug: str,
        workspace: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Participant:
        """Approve the specified pull request as the authenticated user.

        Args:
            pull_request_id: The id of the pull request.
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The ``participant`` object recording that the authenticated user approved the pull request.

        Raises:
            ApiError: The request wasn't authenticated. The specified pull request or the repository does not exist.
                ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.post_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_approve(
                pull_request_id, repo_slug, workspace, request_options=request_options
            ),
        )

    def post_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_comments(
        self,
        pull_request_id: int,
        repo_slug: str,
        workspace: str,
        body: PullrequestComment | PullrequestCommentDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PullrequestComment:
        """Creates a new pull request comment.

        Returns the newly created pull request comment.

        Args:
            pull_request_id: The id of the pull request.
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            body: The comment object.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The newly created comment.

        Raises:
            ApiError: If the authenticated user does not have access to the pull request. If the pull request does not
                exist. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.post_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_comments(
                pull_request_id, repo_slug, workspace, body, request_options=request_options
            ),
        )

    def post_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_comments_by_comment_id_resolve(
        self,
        comment_id: int,
        pull_request_id: int,
        repo_slug: str,
        workspace: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> CommentResolution:
        """Send a ``POST`` request.

        Args:
            comment_id: The id of the comment.
            pull_request_id: The id of the pull request.
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The comment resolution details.

        Raises:
            ApiError: If the authenticated user does not have access to the pull request, if the provided comment is not
                a top-level comment, or if the comment is not on the diff. If the comment does not exist. If the comment
                has already been resolved. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.post_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_comments_by_comment_id_resolve(
                comment_id, pull_request_id, repo_slug, workspace, request_options=request_options
            ),
        )

    def post_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_decline(
        self,
        pull_request_id: int,
        repo_slug: str,
        workspace: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Pullrequest:
        """Declines the pull request.

        Args:
            pull_request_id: The id of the pull request.
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The pull request was successfully declined.

        Raises:
            ApiError: If the decline took too long and timed out. In this case the caller should retry the request
                later. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.post_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_decline(
                pull_request_id, repo_slug, workspace, request_options=request_options
            ),
        )

    def post_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_merge(
        self,
        pull_request_id: int,
        repo_slug: str,
        workspace: str,
        *,
        async_: bool | None = None,
        body: PullRequestMergeParameters | PullRequestMergeParametersDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Pullrequest:
        """Merges the pull request.

        Args:
            pull_request_id: The id of the pull request.
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            async_: Default value is false. When set to true, runs merge asynchronously and immediately returns a 202
                with polling link to the task-status API in the Location header. When set to false, runs merge and waits
                for it to complete, returning 200 when it succeeds. If the duration of the merge exceeds a timeout
                threshold, the API returns a 202 with polling link to the task-status API in the Location header.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The pull request object.

        Raises:
            ApiError: Unable to merge because one of the refs involved changed while attempting to merge If the merge
                took too long and timed out. In this case the caller should retry the request later ``error`` is ``Error
                | RawError``."""
        return unwrap(
            self._with_raw_response.post_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_merge(
                pull_request_id, repo_slug, workspace, async_=async_, body=body, request_options=request_options
            ),
        )

    def post_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_request_changes(
        self,
        pull_request_id: int,
        repo_slug: str,
        workspace: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Participant:
        """Send a ``POST`` request.

        Args:
            pull_request_id: The id of the pull request.
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The ``participant`` object recording that the authenticated user requested changes on the pull request.

        Raises:
            ApiError: Pull request changes cannot be requested because the pull request has already been merged. The
                request wasn't authenticated. The specified pull request or the repository does not exist. ``error`` is
                ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.post_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_request_changes(
                pull_request_id, repo_slug, workspace, request_options=request_options
            ),
        )

    def post_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_tasks(
        self,
        pull_request_id: int,
        repo_slug: str,
        workspace: str,
        body: PullRequestTaskCreate | PullRequestTaskCreateDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PullrequestCommentTask:
        """Creates a new pull request task.

        Returns the newly created pull request task.

        Tasks can optionally be created in relation to a comment specified by the comment's ID which will cause the task
        to appear below the comment on a pull request when viewed in Bitbucket.

        Args:
            pull_request_id: The id of the pull request.
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            body: The contents of the task
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The newly created task.

        Raises:
            ApiError: There is a missing required field in the request or the task content is blank. If the
                authenticated user does not have access to the pull request. If the pull request does not exist.
                ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.post_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_tasks(
                pull_request_id, repo_slug, workspace, body, request_options=request_options
            ),
        )

    def put_repositories_by_workspace_by_repo_slug_default_reviewers_by_target_username(
        self,
        repo_slug: str,
        target_username: str,
        workspace: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Account:
        """Adds the specified user to the repository's list of default reviewers.

        This method is idempotent. Adding a user a second time has no effect.

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            target_username: This can either be the username or the UUID of the default reviewer, surrounded by
                curly-braces, for example: ``{account UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The specified user was successfully added to the default reviewers

        Raises:
            ApiError: If the authenticated user tried to add a team, bot user, or user without access to the repository
                to the default reviewers If the authenticated user does not have permission to modify the default
                reviewers If the specified user does not exist ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.put_repositories_by_workspace_by_repo_slug_default_reviewers_by_target_username(
                repo_slug, target_username, workspace, request_options=request_options
            ),
        )

    def put_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id(
        self,
        pull_request_id: int,
        repo_slug: str,
        workspace: str,
        *,
        body: Pullrequest | PullrequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Pullrequest:
        """Mutates the specified pull request.

        This can be used to change the pull request's branches or description.

        Only open pull requests can be mutated.

        Args:
            pull_request_id: The id of the pull request.
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            body: The pull request that is to be updated.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The updated pull request

        Raises:
            ApiError: If the input document was invalid. If the request was not authenticated. If the repository or pull
                request id does not exist ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.put_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id(
                pull_request_id, repo_slug, workspace, body=body, request_options=request_options
            ),
        )

    def put_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_comments_by_comment_id(
        self,
        comment_id: int,
        pull_request_id: int,
        repo_slug: str,
        workspace: str,
        body: PullrequestComment | PullrequestCommentDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PullrequestComment:
        """Updates a specific pull request comment.

        Args:
            comment_id: The id of the comment.
            pull_request_id: The id of the pull request.
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            body: The contents of the updated comment.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The updated comment.

        Raises:
            ApiError: If the authenticated user does not have access to the comment. If the comment does not exist.
                ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.put_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_comments_by_comment_id(
                comment_id, pull_request_id, repo_slug, workspace, body, request_options=request_options
            ),
        )

    def put_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_tasks_by_task_id(
        self,
        pull_request_id: int,
        repo_slug: str,
        task_id: int,
        workspace: str,
        body: PullRequestTaskUpdate | PullRequestTaskUpdateDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PullrequestCommentTask:
        """Updates a specific pull request task.

        Args:
            pull_request_id: The id of the pull request.
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            task_id: The ID of the task.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            body: The updated state and content of the task.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The updated task.

        Raises:
            ApiError: There is a missing required field in the request or the task content is blank. If the
                authenticated user does not have access to the pull request. If the task does not exist. ``error`` is
                ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.put_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_tasks_by_task_id(
                pull_request_id, repo_slug, task_id, workspace, body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> PullRequestsWithRawResponse:
        return self._with_raw_response


class AsyncPullRequests:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncPullRequestsWithRawResponse(client, server, auth)

    async def delete_repositories_by_workspace_by_repo_slug_default_reviewers_by_target_username(
        self,
        repo_slug: str,
        target_username: str,
        workspace: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Removes a default reviewer from the repository.

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            target_username: This can either be the username or the UUID of the default reviewer, surrounded by
                curly-braces, for example: ``{account UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The specified user successfully removed from the default reviewers

        Raises:
            ApiError: If the authenticated user does not have access modify the default reviewers If the specified user
                does not exist ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.delete_repositories_by_workspace_by_repo_slug_default_reviewers_by_target_username(
                repo_slug, target_username, workspace, request_options=request_options
            ),
        )

    async def delete_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_approve(
        self,
        pull_request_id: int,
        repo_slug: str,
        workspace: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Redact the authenticated user's approval of the specified pull request.

        Args:
            pull_request_id: The id of the pull request.
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An empty response indicating the authenticated user's approval has been withdrawn.

        Raises:
            ApiError: Pull request cannot be unapproved because the pull request has already been merged. The request
                wasn't authenticated. The specified pull request or the repository does not exist. ``error`` is ``Error
                | RawError``."""
        return unwrap(
            await self._with_raw_response.delete_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_approve(
                pull_request_id, repo_slug, workspace, request_options=request_options
            ),
        )

    async def delete_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_comments_by_comment_id(
        self,
        comment_id: int,
        pull_request_id: int,
        repo_slug: str,
        workspace: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Deletes a specific pull request comment.

        Args:
            comment_id: The id of the comment.
            pull_request_id: The id of the pull request.
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful deletion.

        Raises:
            ApiError: If the authenticated user does not have access to delete the comment. If the comment does not
                exist. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.delete_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_comments_by_comment_id(
                comment_id, pull_request_id, repo_slug, workspace, request_options=request_options
            ),
        )

    async def delete_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_comments_by_comment_id_resolve(
        self,
        comment_id: int,
        pull_request_id: int,
        repo_slug: str,
        workspace: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Send a ``DELETE`` request.

        Args:
            comment_id: The id of the comment.
            pull_request_id: The id of the pull request.
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The comment is reopened.

        Raises:
            ApiError: If the authenticated user does not have access to the pull request, or if the provided comment is
                not a top-level comment. If the comment does not exist, or if the comment has not been resolved
                ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.delete_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_comments_by_comment_id_resolve(
                comment_id, pull_request_id, repo_slug, workspace, request_options=request_options
            ),
        )

    async def delete_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_request_changes(
        self,
        pull_request_id: int,
        repo_slug: str,
        workspace: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Send a ``DELETE`` request.

        Args:
            pull_request_id: The id of the pull request.
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An empty response indicating the authenticated user's request for change has been withdrawn.

        Raises:
            ApiError: Pull request requested changes cannot be removed because the pull request has already been merged.
                The request wasn't authenticated. The specified pull request or the repository does not exist. ``error``
                is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.delete_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_request_changes(
                pull_request_id, repo_slug, workspace, request_options=request_options
            ),
        )

    async def delete_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_tasks_by_task_id(
        self,
        pull_request_id: int,
        repo_slug: str,
        task_id: int,
        workspace: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Deletes a specific pull request task.

        Args:
            pull_request_id: The id of the pull request.
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            task_id: The ID of the task.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful deletion.

        Raises:
            ApiError: If the authenticated user does not have access to delete the task. If the task does not exist.
                ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.delete_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_tasks_by_task_id(
                pull_request_id, repo_slug, task_id, workspace, request_options=request_options
            ),
        )

    async def get_pullrequests_for_commit(
        self,
        workspace: str,
        repo_slug: str,
        commit: str,
        *,
        page: int | None = 1,
        pagelen: int | None = 30,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PaginatedPullRequests:
        """Returns a paginated list of all pull requests as part of which this commit was reviewed. Pull Request Commit
        Links app must be installed first before using this API; installation automatically occurs when 'Go to pull
        request' is clicked from the web interface for a commit's details.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces
            repo_slug: The repository; either the UUID in curly braces, or the slug
            commit: The SHA1 of the commit
            page: Which page to retrieve
            pagelen: How many pull requests to retrieve per page
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The paginated list of pull requests.

        Raises:
            ApiError: Either the repository does not exist, or pull request commit links have not yet been indexed.
                ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_pullrequests_for_commit(
                workspace, repo_slug, commit, page=page, pagelen=pagelen, request_options=request_options
            ),
        )

    async def get_repositories_by_workspace_by_repo_slug_default_reviewers(
        self, repo_slug: str, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> PaginatedAccounts:
        """Returns the repository's default reviewers.

        These are the users that are automatically added as reviewers on every new pull request that is created. To
        obtain the repository's default reviewers as well as the default reviewers inherited from the project, use the
        effective-default-reveiwers endpoint.

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The paginated list of default reviewers

        Raises:
            ApiError: If the authenticated user does not have access to view the default reviewers ``error`` is ``Error
                | RawError``."""
        return unwrap(
            await self._with_raw_response.get_repositories_by_workspace_by_repo_slug_default_reviewers(
                repo_slug, workspace, request_options=request_options
            ),
        )

    async def get_repositories_by_workspace_by_repo_slug_default_reviewers_by_target_username(
        self,
        repo_slug: str,
        target_username: str,
        workspace: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Account:
        """Returns the specified reviewer.

        This can be used to test whether a user is among the repository's default reviewers list. A 404 indicates that
        that specified user is not a default reviewer.

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            target_username: This can either be the username or the UUID of the default reviewer, surrounded by
                curly-braces, for example: ``{account UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The specified user is a default reviewer

        Raises:
            ApiError: If the authenticated user does not have access to check if the specified user is a default
                reviewer If the specified user does not exist or is not a default reviewer ``error`` is ``Error |
                RawError``."""
        return unwrap(
            await self._with_raw_response.get_repositories_by_workspace_by_repo_slug_default_reviewers_by_target_username(
                repo_slug, target_username, workspace, request_options=request_options
            ),
        )

    async def get_repositories_by_workspace_by_repo_slug_effective_default_reviewers(
        self, repo_slug: str, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> PaginatedDefaultReviewerAndType:
        """Returns the repository's effective default reviewers. This includes both default reviewers defined at the
        repository level as well as those inherited from its project.

        These are the users that are automatically added as reviewers on every new pull request that is created.

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The paginated list of effective default reviewers

        Raises:
            ApiError: If the authenticated user does not have access to view the default reviewers ``error`` is ``Error
                | RawError``."""
        return unwrap(
            await self._with_raw_response.get_repositories_by_workspace_by_repo_slug_effective_default_reviewers(
                repo_slug, workspace, request_options=request_options
            ),
        )

    async def get_repositories_by_workspace_by_repo_slug_pullrequests(
        self,
        repo_slug: str,
        workspace: str,
        *,
        state: State5OrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PaginatedPullRequests:
        """Returns all pull requests on the specified repository.

        By default only open pull requests are returned. This can be controlled using the ``state`` query parameter. To
        retrieve pull requests that are in one of multiple states, repeat the ``state`` parameter for each individual
        state.

        This endpoint also supports filtering and sorting of the results. See filtering and sorting for more details.

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            state: Only return pull requests that are in this state. This parameter can be repeated.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            All pull requests on the specified repository.

        Raises:
            ApiError: If the repository is private and the request was not authenticated. If the specified repository
                does not exist. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_repositories_by_workspace_by_repo_slug_pullrequests(
                repo_slug, workspace, state=state, request_options=request_options
            ),
        )

    async def get_repositories_by_workspace_by_repo_slug_pullrequests_activity(
        self, repo_slug: str, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Returns a paginated list of the pull request's activity log.

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The pull request activity log

        Raises:
            ApiError: If the repository is private and the request was not authenticated. If the specified repository
                does not exist. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_repositories_by_workspace_by_repo_slug_pullrequests_activity(
                repo_slug, workspace, request_options=request_options
            ),
        )

    async def get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id(
        self,
        pull_request_id: int,
        repo_slug: str,
        workspace: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Pullrequest:
        """Returns the specified pull request.

        Args:
            pull_request_id: The id of the pull request.
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The pull request object

        Raises:
            ApiError: If the repository is private and the request was not authenticated. If the repository or pull
                request does not exist ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id(
                pull_request_id, repo_slug, workspace, request_options=request_options
            ),
        )

    async def get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_activity(
        self,
        pull_request_id: int,
        repo_slug: str,
        workspace: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Returns a paginated list of the pull request's activity log.

        Args:
            pull_request_id: The id of the pull request.
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The pull request activity log

        Raises:
            ApiError: If the repository is private and the request was not authenticated. If the specified repository
                does not exist. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_activity(
                pull_request_id, repo_slug, workspace, request_options=request_options
            ),
        )

    async def get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_comments(
        self,
        pull_request_id: int,
        repo_slug: str,
        workspace: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PaginatedPullRequestComments:
        """Returns a paginated list of the pull request's comments.

        This includes both global, inline comments and replies.

        The default sorting is oldest to newest and can be overridden with the ``sort`` query parameter.

        This endpoint also supports filtering and sorting of the results. See filtering and sorting for more details.

        Args:
            pull_request_id: The id of the pull request.
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A paginated list of comments made on the given pull request, in chronological order.

        Raises:
            ApiError: If the authenticated user does not have access to the pull request. If the pull request does not
                exist. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_comments(
                pull_request_id, repo_slug, workspace, request_options=request_options
            ),
        )

    async def get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_comments_by_comment_id(
        self,
        comment_id: int,
        pull_request_id: int,
        repo_slug: str,
        workspace: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PullrequestComment:
        """Returns a specific pull request comment.

        Args:
            comment_id: The id of the comment.
            pull_request_id: The id of the pull request.
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The comment.

        Raises:
            ApiError: If the authenticated user does not have access to the pull request. If the comment does not exist.
                ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_comments_by_comment_id(
                comment_id, pull_request_id, repo_slug, workspace, request_options=request_options
            ),
        )

    async def get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_commits(
        self,
        pull_request_id: int,
        repo_slug: str,
        workspace: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Returns a paginated list of the pull request's commits.

        These are the commits that are being merged into the destination branch when the pull requests gets accepted.

        Args:
            pull_request_id: The id of the pull request.
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A paginated list of commits made on the given pull request, in chronological order. This list will be empty
            if the source branch no longer exists.

        Raises:
            ApiError: If the authenticated user does not have access to the pull request. If the pull request does not
                exist or the source branch is from a forked repository which no longer exists. ``error`` is ``Error |
                RawError``."""
        return unwrap(
            await self._with_raw_response.get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_commits(
                pull_request_id, repo_slug, workspace, request_options=request_options
            ),
        )

    async def get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_diff(
        self,
        pull_request_id: int,
        repo_slug: str,
        workspace: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Redirects to the repository diff with the revspec that corresponds to the pull request.

        Args:
            pull_request_id: The id of the pull request.
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_diff(
                pull_request_id, repo_slug, workspace, request_options=request_options
            ),
        )

    async def get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_diffstat(
        self,
        pull_request_id: int,
        repo_slug: str,
        workspace: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Redirects to the repository diffstat with the revspec that corresponds to the pull request.

        Args:
            pull_request_id: The id of the pull request.
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_diffstat(
                pull_request_id, repo_slug, workspace, request_options=request_options
            ),
        )

    async def get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_merge_task_status_by_task_id(
        self,
        pull_request_id: int,
        repo_slug: str,
        task_id: str,
        workspace: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """When merging a pull request takes too long, the client receives a task ID along with a 202 status code. The
        task ID can be used in a call to this endpoint to check the status of a merge task.

        ```
        curl -X GET https://api.bitbucket.org/2.0/repositories/atlassian/bitbucket/pullrequests/2286/merge/task-status/
        ```

        If the merge task is not yet finished, a PENDING status will be returned.

        ```
        HTTP/2 200
        {
        "task_status": "PENDING", "links": { "self": { "href":
        "https://api.bitbucket.org/2.0/repositories/atlassian/bitbucket/pullrequests/2286/merge/task-status/"
        }
        }
        }
        ```

        If the merge was successful, a SUCCESS status will be returned.

        ```
        HTTP/2 200
        {
        "task_status": "SUCCESS", "links": { "self": { "href":
        "https://api.bitbucket.org/2.0/repositories/atlassian/bitbucket/pullrequests/2286/merge/task-status/"
        }
        },
        "merge_result":
        }
        ```

        If the merge task failed, an error will be returned.

        ```
        {
        "type": "error", "error": { "message": ""
        }
        }
        ```

        Args:
            pull_request_id: The id of the pull request.
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            task_id: ID of the merge task
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Returns a task status if the merge is either pending or successful, and if it is successful, a pull request

        Raises:
            ApiError: If the provided task ID does not relate to this pull request, or if something went wrong during
                the merge operation The user making the request does not have permission to the repo and is different
                from the user who queued the task Unable to merge because one of the refs involved changed while
                attempting to merge ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_merge_task_status_by_task_id(
                pull_request_id, repo_slug, task_id, workspace, request_options=request_options
            ),
        )

    async def get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_patch(
        self,
        pull_request_id: int,
        repo_slug: str,
        workspace: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Redirects to the repository patch with the revspec that corresponds to pull request.

        Args:
            pull_request_id: The id of the pull request.
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_patch(
                pull_request_id, repo_slug, workspace, request_options=request_options
            ),
        )

    async def get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_statuses2(
        self,
        pull_request_id: int,
        repo_slug: str,
        workspace: str,
        *,
        q: str | None = None,
        sort: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PaginatedCommitStatuses:
        """Returns all statuses (e.g. build results) for the given pull request.

        Args:
            pull_request_id: The id of the pull request.
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            q: Query string to narrow down the response as per `filtering and sorting
                </cloud/bitbucket/rest/intro/#filtering>`__.
            sort: Field by which the results should be sorted as per `filtering and sorting
                </cloud/bitbucket/rest/intro/#filtering>`__. Defaults to ``created_on``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A paginated list of all commit statuses for this pull request.

        Raises:
            ApiError: If the repository is private and the request was not authenticated. If the specified repository or
                pull request does not exist. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_statuses2(
                pull_request_id, repo_slug, workspace, q=q, sort=sort, request_options=request_options
            ),
        )

    async def get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_tasks(
        self,
        pull_request_id: int,
        repo_slug: str,
        workspace: str,
        *,
        q: str | None = None,
        sort: str | None = None,
        pagelen: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PaginatedTasks:
        """Returns a paginated list of the pull request's tasks.

        This endpoint supports filtering and sorting of the results by the 'task' field. See filtering and sorting for
        more details.

        Args:
            pull_request_id: The id of the pull request.
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            q: Query string to narrow down the response. See `filtering and sorting
                </cloud/bitbucket/rest/intro/#filtering>`__ for details.
            sort: Field by which the results should be sorted as per `filtering and sorting
                </cloud/bitbucket/rest/intro/#filtering>`__. Defaults to ``created_on``.
            pagelen: Current number of objects on the existing page. The default value is 10 with 100 being the maximum
                allowed value. Individual APIs may enforce different values.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A paginated list of pull request tasks for the given pull request.

        Raises:
            ApiError: If the user provides an invalid filter, sort, or fields query parameter. If the authenticated user
                does not have access to the pull request. If the pull request does not exist. ``error`` is ``Error |
                RawError``."""
        return unwrap(
            await self._with_raw_response.get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_tasks(
                pull_request_id, repo_slug, workspace, q=q, sort=sort, pagelen=pagelen, request_options=request_options
            ),
        )

    async def get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_tasks_by_task_id(
        self,
        pull_request_id: int,
        repo_slug: str,
        task_id: int,
        workspace: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PullrequestCommentTask:
        """Returns a specific pull request task.

        Args:
            pull_request_id: The id of the pull request.
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            task_id: The ID of the task.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The task.

        Raises:
            ApiError: If the authenticated user does not have access to the pull request. If the task does not exist.
                ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_tasks_by_task_id(
                pull_request_id, repo_slug, task_id, workspace, request_options=request_options
            ),
        )

    async def get_workspaces_by_workspace_pullrequests_by_selected_user(
        self,
        selected_user: str,
        workspace: str,
        *,
        state: State5OrStr | None = None,
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
            await self._with_raw_response.get_workspaces_by_workspace_pullrequests_by_selected_user(
                selected_user, workspace, state=state, request_options=request_options
            ),
        )

    async def post_repositories_by_workspace_by_repo_slug_pullrequests(
        self,
        repo_slug: str,
        workspace: str,
        *,
        body: Pullrequest | PullrequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Pullrequest:
        r"""Creates a new pull request where the destination repository is this repository and the author is the
        authenticated user.

        The minimum required fields to create a pull request are ``title`` and ``source``, specified by a branch name.

        ```
        curl https://api.bitbucket.org/2.0/repositories/my-workspace/my-repository/pullrequests \ -u
        my-username:my-password \ --request POST \ --header 'Content-Type: application/json' \ --data '{ "title": "My
        Title", "source": { "branch": { "name": "staging"
        }
        }
        }'
        ```

        If the pull request's ``destination`` is not specified, it will default to the ``repository.mainbranch``. To
        open a pull request to a different branch, say from a feature branch to a staging branch, specify a
        ``destination`` (same format as the ``source``):

        ```
        {
        "title": "My Title", "source": { "branch": { "name": "my-feature-branch"
        }
        },
        "destination": { "branch": { "name": "staging"
        }
        }
        }
        ```

        Reviewers can be specified by adding an array of user objects as the ``reviewers`` property.

        ```
        {
        "title": "My Title", "source": { "branch": { "name": "my-feature-branch"
        }
        },
        "reviewers": [
        {
        "uuid": "{504c3b62-8120-4f0c-a7bc-87800b9d6f70}"
        }
        ]
        }
        ```

        Other fields:

        * ``description`` - a string
        * ``close_source_branch`` - boolean that specifies if the source branch should be closed upon merging
        * ``draft`` - boolean that specifies whether the pull request is a draft

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            body: The new pull request. The request URL you POST to becomes the destination repository URL. For this
                reason, you must specify an explicit source repository in the request object if you want to pull from a
                different repository (fork). Since not all elements are required or even mutable, you only need to
                include the elements you want to initialize, such as the source branch and the title.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The newly created pull request.

        Raises:
            ApiError: If the input document was invalid, or if the caller lacks the privilege to create repositories
                under the targeted account. If the request was not authenticated. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.post_repositories_by_workspace_by_repo_slug_pullrequests(
                repo_slug, workspace, body=body, request_options=request_options
            ),
        )

    async def post_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_approve(
        self,
        pull_request_id: int,
        repo_slug: str,
        workspace: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Participant:
        """Approve the specified pull request as the authenticated user.

        Args:
            pull_request_id: The id of the pull request.
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The ``participant`` object recording that the authenticated user approved the pull request.

        Raises:
            ApiError: The request wasn't authenticated. The specified pull request or the repository does not exist.
                ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.post_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_approve(
                pull_request_id, repo_slug, workspace, request_options=request_options
            ),
        )

    async def post_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_comments(
        self,
        pull_request_id: int,
        repo_slug: str,
        workspace: str,
        body: PullrequestComment | PullrequestCommentDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PullrequestComment:
        """Creates a new pull request comment.

        Returns the newly created pull request comment.

        Args:
            pull_request_id: The id of the pull request.
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            body: The comment object.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The newly created comment.

        Raises:
            ApiError: If the authenticated user does not have access to the pull request. If the pull request does not
                exist. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.post_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_comments(
                pull_request_id, repo_slug, workspace, body, request_options=request_options
            ),
        )

    async def post_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_comments_by_comment_id_resolve(
        self,
        comment_id: int,
        pull_request_id: int,
        repo_slug: str,
        workspace: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CommentResolution:
        """Send a ``POST`` request.

        Args:
            comment_id: The id of the comment.
            pull_request_id: The id of the pull request.
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The comment resolution details.

        Raises:
            ApiError: If the authenticated user does not have access to the pull request, if the provided comment is not
                a top-level comment, or if the comment is not on the diff. If the comment does not exist. If the comment
                has already been resolved. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.post_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_comments_by_comment_id_resolve(
                comment_id, pull_request_id, repo_slug, workspace, request_options=request_options
            ),
        )

    async def post_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_decline(
        self,
        pull_request_id: int,
        repo_slug: str,
        workspace: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Pullrequest:
        """Declines the pull request.

        Args:
            pull_request_id: The id of the pull request.
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The pull request was successfully declined.

        Raises:
            ApiError: If the decline took too long and timed out. In this case the caller should retry the request
                later. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.post_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_decline(
                pull_request_id, repo_slug, workspace, request_options=request_options
            ),
        )

    async def post_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_merge(
        self,
        pull_request_id: int,
        repo_slug: str,
        workspace: str,
        *,
        async_: bool | None = None,
        body: PullRequestMergeParameters | PullRequestMergeParametersDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Pullrequest:
        """Merges the pull request.

        Args:
            pull_request_id: The id of the pull request.
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            async_: Default value is false. When set to true, runs merge asynchronously and immediately returns a 202
                with polling link to the task-status API in the Location header. When set to false, runs merge and waits
                for it to complete, returning 200 when it succeeds. If the duration of the merge exceeds a timeout
                threshold, the API returns a 202 with polling link to the task-status API in the Location header.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The pull request object.

        Raises:
            ApiError: Unable to merge because one of the refs involved changed while attempting to merge If the merge
                took too long and timed out. In this case the caller should retry the request later ``error`` is ``Error
                | RawError``."""
        return unwrap(
            await self._with_raw_response.post_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_merge(
                pull_request_id, repo_slug, workspace, async_=async_, body=body, request_options=request_options
            ),
        )

    async def post_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_request_changes(
        self,
        pull_request_id: int,
        repo_slug: str,
        workspace: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Participant:
        """Send a ``POST`` request.

        Args:
            pull_request_id: The id of the pull request.
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The ``participant`` object recording that the authenticated user requested changes on the pull request.

        Raises:
            ApiError: Pull request changes cannot be requested because the pull request has already been merged. The
                request wasn't authenticated. The specified pull request or the repository does not exist. ``error`` is
                ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.post_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_request_changes(
                pull_request_id, repo_slug, workspace, request_options=request_options
            ),
        )

    async def post_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_tasks(
        self,
        pull_request_id: int,
        repo_slug: str,
        workspace: str,
        body: PullRequestTaskCreate | PullRequestTaskCreateDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PullrequestCommentTask:
        """Creates a new pull request task.

        Returns the newly created pull request task.

        Tasks can optionally be created in relation to a comment specified by the comment's ID which will cause the task
        to appear below the comment on a pull request when viewed in Bitbucket.

        Args:
            pull_request_id: The id of the pull request.
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            body: The contents of the task
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The newly created task.

        Raises:
            ApiError: There is a missing required field in the request or the task content is blank. If the
                authenticated user does not have access to the pull request. If the pull request does not exist.
                ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.post_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_tasks(
                pull_request_id, repo_slug, workspace, body, request_options=request_options
            ),
        )

    async def put_repositories_by_workspace_by_repo_slug_default_reviewers_by_target_username(
        self,
        repo_slug: str,
        target_username: str,
        workspace: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Account:
        """Adds the specified user to the repository's list of default reviewers.

        This method is idempotent. Adding a user a second time has no effect.

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            target_username: This can either be the username or the UUID of the default reviewer, surrounded by
                curly-braces, for example: ``{account UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The specified user was successfully added to the default reviewers

        Raises:
            ApiError: If the authenticated user tried to add a team, bot user, or user without access to the repository
                to the default reviewers If the authenticated user does not have permission to modify the default
                reviewers If the specified user does not exist ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.put_repositories_by_workspace_by_repo_slug_default_reviewers_by_target_username(
                repo_slug, target_username, workspace, request_options=request_options
            ),
        )

    async def put_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id(
        self,
        pull_request_id: int,
        repo_slug: str,
        workspace: str,
        *,
        body: Pullrequest | PullrequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Pullrequest:
        """Mutates the specified pull request.

        This can be used to change the pull request's branches or description.

        Only open pull requests can be mutated.

        Args:
            pull_request_id: The id of the pull request.
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            body: The pull request that is to be updated.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The updated pull request

        Raises:
            ApiError: If the input document was invalid. If the request was not authenticated. If the repository or pull
                request id does not exist ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.put_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id(
                pull_request_id, repo_slug, workspace, body=body, request_options=request_options
            ),
        )

    async def put_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_comments_by_comment_id(
        self,
        comment_id: int,
        pull_request_id: int,
        repo_slug: str,
        workspace: str,
        body: PullrequestComment | PullrequestCommentDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PullrequestComment:
        """Updates a specific pull request comment.

        Args:
            comment_id: The id of the comment.
            pull_request_id: The id of the pull request.
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            body: The contents of the updated comment.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The updated comment.

        Raises:
            ApiError: If the authenticated user does not have access to the comment. If the comment does not exist.
                ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.put_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_comments_by_comment_id(
                comment_id, pull_request_id, repo_slug, workspace, body, request_options=request_options
            ),
        )

    async def put_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_tasks_by_task_id(
        self,
        pull_request_id: int,
        repo_slug: str,
        task_id: int,
        workspace: str,
        body: PullRequestTaskUpdate | PullRequestTaskUpdateDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PullrequestCommentTask:
        """Updates a specific pull request task.

        Args:
            pull_request_id: The id of the pull request.
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            task_id: The ID of the task.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            body: The updated state and content of the task.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The updated task.

        Raises:
            ApiError: There is a missing required field in the request or the task content is blank. If the
                authenticated user does not have access to the pull request. If the task does not exist. ``error`` is
                ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.put_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_tasks_by_task_id(
                pull_request_id, repo_slug, task_id, workspace, body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncPullRequestsWithRawResponse:
        return self._with_raw_response


class PullRequestsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def delete_repositories_by_workspace_by_repo_slug_default_reviewers_by_target_username(
        self,
        repo_slug: str,
        target_username: str,
        workspace: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DeleteRepositoriesByWorkspaceByRepoSlugDefaultReviewersByTargetUsernameErrorBody]:
        """Removes a default reviewer from the repository.

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            target_username: This can either be the username or the UUID of the default reviewer, surrounded by
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
                "/repositories/{workspace}/{repo_slug}/default-reviewers/{target_username}"
            ),
            path_params=[
                param[str]("repo_slug", repo_slug),
                param[str]("target_username", target_username),
                param[str]("workspace", workspace),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=empty_response,
            error_mapper=delete_repositories_by_workspace_by_repo_slug_default_reviewers_by_target_username_error_mapper,
            request_options=request_options,
        )

    def delete_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_approve(
        self,
        pull_request_id: int,
        repo_slug: str,
        workspace: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DeleteRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdApproveErrorBody]:
        """Redact the authenticated user's approval of the specified pull request.

        Args:
            pull_request_id: The id of the pull request.
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
                "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/approve"
            ),
            path_params=[
                param[int]("pull_request_id", pull_request_id),
                param[str]("repo_slug", repo_slug),
                param[str]("workspace", workspace),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=empty_response,
            error_mapper=delete_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_approve_error_mapper,
            request_options=request_options,
        )

    def delete_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_comments_by_comment_id(
        self,
        comment_id: int,
        pull_request_id: int,
        repo_slug: str,
        workspace: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[
        None, DeleteRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsByCommentIdErrorBody
    ]:
        """Deletes a specific pull request comment.

        Args:
            comment_id: The id of the comment.
            pull_request_id: The id of the pull request.
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
                "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/comments/{comment_id}"
            ),
            path_params=[
                param[int]("comment_id", comment_id),
                param[int]("pull_request_id", pull_request_id),
                param[str]("repo_slug", repo_slug),
                param[str]("workspace", workspace),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=empty_response,
            error_mapper=delete_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_comments_by_comment_id_error_mapper,
            request_options=request_options,
        )

    def delete_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_comments_by_comment_id_resolve(
        self,
        comment_id: int,
        pull_request_id: int,
        repo_slug: str,
        workspace: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[
        None, DeleteRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsByCommentIdResolveErrorBody
    ]:
        """Send a ``DELETE`` request.

        Args:
            comment_id: The id of the comment.
            pull_request_id: The id of the pull request.
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
                "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/comments/{comment_id}/resolve"
            ),
            path_params=[
                param[int]("comment_id", comment_id),
                param[int]("pull_request_id", pull_request_id),
                param[str]("repo_slug", repo_slug),
                param[str]("workspace", workspace),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=empty_response,
            error_mapper=delete_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_comments_by_comment_id_resolve_error_mapper,
            request_options=request_options,
        )

    def delete_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_request_changes(
        self,
        pull_request_id: int,
        repo_slug: str,
        workspace: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DeleteRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdRequestChangesErrorBody]:
        """Send a ``DELETE`` request.

        Args:
            pull_request_id: The id of the pull request.
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
                "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/request-changes"
            ),
            path_params=[
                param[int]("pull_request_id", pull_request_id),
                param[str]("repo_slug", repo_slug),
                param[str]("workspace", workspace),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=empty_response,
            error_mapper=delete_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_request_changes_error_mapper,
            request_options=request_options,
        )

    def delete_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_tasks_by_task_id(
        self,
        pull_request_id: int,
        repo_slug: str,
        task_id: int,
        workspace: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DeleteRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdTasksByTaskIdErrorBody]:
        """Deletes a specific pull request task.

        Args:
            pull_request_id: The id of the pull request.
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            task_id: The ID of the task.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default(
                "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/tasks/{task_id}"
            ),
            path_params=[
                param[int]("pull_request_id", pull_request_id),
                param[str]("repo_slug", repo_slug),
                param[int]("task_id", task_id),
                param[str]("workspace", workspace),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=empty_response,
            error_mapper=delete_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_tasks_by_task_id_error_mapper,
            request_options=request_options,
        )

    def get_pullrequests_for_commit(
        self,
        workspace: str,
        repo_slug: str,
        commit: str,
        *,
        page: int | None = 1,
        pagelen: int | None = 30,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PaginatedPullRequests, GetPullrequestsForCommitErrorBody]:
        """Returns a paginated list of all pull requests as part of which this commit was reviewed. Pull Request Commit
        Links app must be installed first before using this API; installation automatically occurs when 'Go to pull
        request' is clicked from the web interface for a commit's details.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces
            repo_slug: The repository; either the UUID in curly braces, or the slug
            commit: The SHA1 of the commit
            page: Which page to retrieve
            pagelen: How many pull requests to retrieve per page
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/commit/{commit}/pullrequests"),
            path_params=[
                param[str]("workspace", workspace), param[str]("repo_slug", repo_slug), param[str]("commit", commit)
            ],
            query_params=[param[int | None]("page", page), param[int | None]("pagelen", pagelen)],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[PaginatedPullRequests],
            error_mapper=get_pullrequests_for_commit_error_mapper,
            request_options=request_options,
        )

    def get_repositories_by_workspace_by_repo_slug_default_reviewers(
        self, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[PaginatedAccounts, GetRepositoriesByWorkspaceByRepoSlugDefaultReviewersErrorBody]:
        """Returns the repository's default reviewers.

        These are the users that are automatically added as reviewers on every new pull request that is created. To
        obtain the repository's default reviewers as well as the default reviewers inherited from the project, use the
        effective-default-reveiwers endpoint.

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
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/default-reviewers"),
            path_params=[param[str]("repo_slug", repo_slug), param[str]("workspace", workspace)],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[PaginatedAccounts],
            error_mapper=get_repositories_by_workspace_by_repo_slug_default_reviewers_error_mapper,
            request_options=request_options,
        )

    def get_repositories_by_workspace_by_repo_slug_default_reviewers_by_target_username(
        self,
        repo_slug: str,
        target_username: str,
        workspace: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Account, GetRepositoriesByWorkspaceByRepoSlugDefaultReviewersByTargetUsernameErrorBody]:
        """Returns the specified reviewer.

        This can be used to test whether a user is among the repository's default reviewers list. A 404 indicates that
        that specified user is not a default reviewer.

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            target_username: This can either be the username or the UUID of the default reviewer, surrounded by
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
                "/repositories/{workspace}/{repo_slug}/default-reviewers/{target_username}"
            ),
            path_params=[
                param[str]("repo_slug", repo_slug),
                param[str]("target_username", target_username),
                param[str]("workspace", workspace),
            ],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[Account],
            error_mapper=get_repositories_by_workspace_by_repo_slug_default_reviewers_by_target_username_error_mapper,
            request_options=request_options,
        )

    def get_repositories_by_workspace_by_repo_slug_effective_default_reviewers(
        self, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[
        PaginatedDefaultReviewerAndType, GetRepositoriesByWorkspaceByRepoSlugEffectiveDefaultReviewersErrorBody
    ]:
        """Returns the repository's effective default reviewers. This includes both default reviewers defined at the
        repository level as well as those inherited from its project.

        These are the users that are automatically added as reviewers on every new pull request that is created.

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
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/effective-default-reviewers"),
            path_params=[param[str]("repo_slug", repo_slug), param[str]("workspace", workspace)],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[PaginatedDefaultReviewerAndType],
            error_mapper=get_repositories_by_workspace_by_repo_slug_effective_default_reviewers_error_mapper,
            request_options=request_options,
        )

    def get_repositories_by_workspace_by_repo_slug_pullrequests(
        self,
        repo_slug: str,
        workspace: str,
        *,
        state: State5OrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PaginatedPullRequests, GetRepositoriesByWorkspaceByRepoSlugPullrequestsErrorBody]:
        """Returns all pull requests on the specified repository.

        By default only open pull requests are returned. This can be controlled using the ``state`` query parameter. To
        retrieve pull requests that are in one of multiple states, repeat the ``state`` parameter for each individual
        state.

        This endpoint also supports filtering and sorting of the results. See filtering and sorting for more details.

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            state: Only return pull requests that are in this state. This parameter can be repeated.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/pullrequests"),
            path_params=[param[str]("repo_slug", repo_slug), param[str]("workspace", workspace)],
            query_params=[param[State5OrStr | None]("state", state)],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[PaginatedPullRequests],
            error_mapper=get_repositories_by_workspace_by_repo_slug_pullrequests_error_mapper,
            request_options=request_options,
        )

    def get_repositories_by_workspace_by_repo_slug_pullrequests_activity(
        self, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, GetRepositoriesByWorkspaceByRepoSlugPullrequestsActivityErrorBody]:
        """Returns a paginated list of the pull request's activity log.

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
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/pullrequests/activity"),
            path_params=[param[str]("repo_slug", repo_slug), param[str]("workspace", workspace)],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=empty_response,
            error_mapper=get_repositories_by_workspace_by_repo_slug_pullrequests_activity_error_mapper,
            request_options=request_options,
        )

    def get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id(
        self,
        pull_request_id: int,
        repo_slug: str,
        workspace: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Pullrequest, GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdErrorBody]:
        """Returns the specified pull request.

        Args:
            pull_request_id: The id of the pull request.
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
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}"),
            path_params=[
                param[int]("pull_request_id", pull_request_id),
                param[str]("repo_slug", repo_slug),
                param[str]("workspace", workspace),
            ],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[Pullrequest],
            error_mapper=get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_error_mapper,
            request_options=request_options,
        )

    def get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_activity(
        self,
        pull_request_id: int,
        repo_slug: str,
        workspace: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdActivityErrorBody]:
        """Returns a paginated list of the pull request's activity log.

        Args:
            pull_request_id: The id of the pull request.
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
                "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/activity"
            ),
            path_params=[
                param[int]("pull_request_id", pull_request_id),
                param[str]("repo_slug", repo_slug),
                param[str]("workspace", workspace),
            ],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=empty_response,
            error_mapper=get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_activity_error_mapper,
            request_options=request_options,
        )

    def get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_comments(
        self,
        pull_request_id: int,
        repo_slug: str,
        workspace: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[
        PaginatedPullRequestComments, GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsErrorBody
    ]:
        """Returns a paginated list of the pull request's comments.

        This includes both global, inline comments and replies.

        The default sorting is oldest to newest and can be overridden with the ``sort`` query parameter.

        This endpoint also supports filtering and sorting of the results. See filtering and sorting for more details.

        Args:
            pull_request_id: The id of the pull request.
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
                "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/comments"
            ),
            path_params=[
                param[int]("pull_request_id", pull_request_id),
                param[str]("repo_slug", repo_slug),
                param[str]("workspace", workspace),
            ],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[PaginatedPullRequestComments],
            error_mapper=get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_comments_error_mapper,
            request_options=request_options,
        )

    def get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_comments_by_comment_id(
        self,
        comment_id: int,
        pull_request_id: int,
        repo_slug: str,
        workspace: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[
        PullrequestComment, GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsByCommentIdErrorBody
    ]:
        """Returns a specific pull request comment.

        Args:
            comment_id: The id of the comment.
            pull_request_id: The id of the pull request.
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
                "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/comments/{comment_id}"
            ),
            path_params=[
                param[int]("comment_id", comment_id),
                param[int]("pull_request_id", pull_request_id),
                param[str]("repo_slug", repo_slug),
                param[str]("workspace", workspace),
            ],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[PullrequestComment],
            error_mapper=get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_comments_by_comment_id_error_mapper,
            request_options=request_options,
        )

    def get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_commits(
        self,
        pull_request_id: int,
        repo_slug: str,
        workspace: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommitsErrorBody]:
        """Returns a paginated list of the pull request's commits.

        These are the commits that are being merged into the destination branch when the pull requests gets accepted.

        Args:
            pull_request_id: The id of the pull request.
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
                "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/commits"
            ),
            path_params=[
                param[int]("pull_request_id", pull_request_id),
                param[str]("repo_slug", repo_slug),
                param[str]("workspace", workspace),
            ],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=empty_response,
            error_mapper=get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_commits_error_mapper,
            request_options=request_options,
        )

    def get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_diff(
        self,
        pull_request_id: int,
        repo_slug: str,
        workspace: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, RawError]:
        """Redirects to the repository diff with the revspec that corresponds to the pull request.

        Args:
            pull_request_id: The id of the pull request.
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
                "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/diff"
            ),
            path_params=[
                param[int]("pull_request_id", pull_request_id),
                param[str]("repo_slug", repo_slug),
                param[str]("workspace", workspace),
            ],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=empty_response,
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_diffstat(
        self,
        pull_request_id: int,
        repo_slug: str,
        workspace: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, RawError]:
        """Redirects to the repository diffstat with the revspec that corresponds to the pull request.

        Args:
            pull_request_id: The id of the pull request.
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
                "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/diffstat"
            ),
            path_params=[
                param[int]("pull_request_id", pull_request_id),
                param[str]("repo_slug", repo_slug),
                param[str]("workspace", workspace),
            ],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=empty_response,
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_merge_task_status_by_task_id(
        self,
        pull_request_id: int,
        repo_slug: str,
        task_id: str,
        workspace: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[
        None, GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdMergeTaskStatusByTaskIdErrorBody
    ]:
        """When merging a pull request takes too long, the client receives a task ID along with a 202 status code. The
        task ID can be used in a call to this endpoint to check the status of a merge task.

        ```
        curl -X GET https://api.bitbucket.org/2.0/repositories/atlassian/bitbucket/pullrequests/2286/merge/task-status/
        ```

        If the merge task is not yet finished, a PENDING status will be returned.

        ```
        HTTP/2 200
        {
        "task_status": "PENDING", "links": { "self": { "href":
        "https://api.bitbucket.org/2.0/repositories/atlassian/bitbucket/pullrequests/2286/merge/task-status/"
        }
        }
        }
        ```

        If the merge was successful, a SUCCESS status will be returned.

        ```
        HTTP/2 200
        {
        "task_status": "SUCCESS", "links": { "self": { "href":
        "https://api.bitbucket.org/2.0/repositories/atlassian/bitbucket/pullrequests/2286/merge/task-status/"
        }
        },
        "merge_result":
        }
        ```

        If the merge task failed, an error will be returned.

        ```
        {
        "type": "error", "error": { "message": ""
        }
        }
        ```

        Args:
            pull_request_id: The id of the pull request.
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            task_id: ID of the merge task
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/merge/task-status/{task_id}"
            ),
            path_params=[
                param[int]("pull_request_id", pull_request_id),
                param[str]("repo_slug", repo_slug),
                param[str]("task_id", task_id),
                param[str]("workspace", workspace),
            ],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=empty_response,
            error_mapper=get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_merge_task_status_by_task_id_error_mapper,
            request_options=request_options,
        )

    def get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_patch(
        self,
        pull_request_id: int,
        repo_slug: str,
        workspace: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, RawError]:
        """Redirects to the repository patch with the revspec that corresponds to pull request.

        Args:
            pull_request_id: The id of the pull request.
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
                "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/patch"
            ),
            path_params=[
                param[int]("pull_request_id", pull_request_id),
                param[str]("repo_slug", repo_slug),
                param[str]("workspace", workspace),
            ],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=empty_response,
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_statuses2(
        self,
        pull_request_id: int,
        repo_slug: str,
        workspace: str,
        *,
        q: str | None = None,
        sort: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[
        PaginatedCommitStatuses, GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdStatuses2ErrorBody
    ]:
        """Returns all statuses (e.g. build results) for the given pull request.

        Args:
            pull_request_id: The id of the pull request.
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            q: Query string to narrow down the response as per `filtering and sorting
                </cloud/bitbucket/rest/intro/#filtering>`__.
            sort: Field by which the results should be sorted as per `filtering and sorting
                </cloud/bitbucket/rest/intro/#filtering>`__. Defaults to ``created_on``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/statuses"
            ),
            path_params=[
                param[int]("pull_request_id", pull_request_id),
                param[str]("repo_slug", repo_slug),
                param[str]("workspace", workspace),
            ],
            query_params=[param[str | None]("q", q), param[str | None]("sort", sort)],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[PaginatedCommitStatuses],
            error_mapper=get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_statuses2_error_mapper,
            request_options=request_options,
        )

    def get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_tasks(
        self,
        pull_request_id: int,
        repo_slug: str,
        workspace: str,
        *,
        q: str | None = None,
        sort: str | None = None,
        pagelen: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PaginatedTasks, GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdTasksErrorBody]:
        """Returns a paginated list of the pull request's tasks.

        This endpoint supports filtering and sorting of the results by the 'task' field. See filtering and sorting for
        more details.

        Args:
            pull_request_id: The id of the pull request.
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            q: Query string to narrow down the response. See `filtering and sorting
                </cloud/bitbucket/rest/intro/#filtering>`__ for details.
            sort: Field by which the results should be sorted as per `filtering and sorting
                </cloud/bitbucket/rest/intro/#filtering>`__. Defaults to ``created_on``.
            pagelen: Current number of objects on the existing page. The default value is 10 with 100 being the maximum
                allowed value. Individual APIs may enforce different values.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/tasks"
            ),
            path_params=[
                param[int]("pull_request_id", pull_request_id),
                param[str]("repo_slug", repo_slug),
                param[str]("workspace", workspace),
            ],
            query_params=[
                param[str | None]("q", q), param[str | None]("sort", sort), param[int | None]("pagelen", pagelen)
            ],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[PaginatedTasks],
            error_mapper=get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_tasks_error_mapper,
            request_options=request_options,
        )

    def get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_tasks_by_task_id(
        self,
        pull_request_id: int,
        repo_slug: str,
        task_id: int,
        workspace: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[
        PullrequestCommentTask, GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdTasksByTaskIdErrorBody
    ]:
        """Returns a specific pull request task.

        Args:
            pull_request_id: The id of the pull request.
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            task_id: The ID of the task.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/tasks/{task_id}"
            ),
            path_params=[
                param[int]("pull_request_id", pull_request_id),
                param[str]("repo_slug", repo_slug),
                param[int]("task_id", task_id),
                param[str]("workspace", workspace),
            ],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[PullrequestCommentTask],
            error_mapper=get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_tasks_by_task_id_error_mapper,
            request_options=request_options,
        )

    def get_workspaces_by_workspace_pullrequests_by_selected_user(
        self,
        selected_user: str,
        workspace: str,
        *,
        state: State5OrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PaginatedPullRequests, GetWorkspacesByWorkspacePullrequestsBySelectedUserErrorBody]:
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
            query_params=[param[State5OrStr | None]("state", state)],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[PaginatedPullRequests],
            error_mapper=get_workspaces_by_workspace_pullrequests_by_selected_user_error_mapper,
            request_options=request_options,
        )

    def post_repositories_by_workspace_by_repo_slug_pullrequests(
        self,
        repo_slug: str,
        workspace: str,
        *,
        body: Pullrequest | PullrequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Pullrequest, PostRepositoriesByWorkspaceByRepoSlugPullrequestsErrorBody]:
        r"""Creates a new pull request where the destination repository is this repository and the author is the
        authenticated user.

        The minimum required fields to create a pull request are ``title`` and ``source``, specified by a branch name.

        ```
        curl https://api.bitbucket.org/2.0/repositories/my-workspace/my-repository/pullrequests \ -u
        my-username:my-password \ --request POST \ --header 'Content-Type: application/json' \ --data '{ "title": "My
        Title", "source": { "branch": { "name": "staging"
        }
        }
        }'
        ```

        If the pull request's ``destination`` is not specified, it will default to the ``repository.mainbranch``. To
        open a pull request to a different branch, say from a feature branch to a staging branch, specify a
        ``destination`` (same format as the ``source``):

        ```
        {
        "title": "My Title", "source": { "branch": { "name": "my-feature-branch"
        }
        },
        "destination": { "branch": { "name": "staging"
        }
        }
        }
        ```

        Reviewers can be specified by adding an array of user objects as the ``reviewers`` property.

        ```
        {
        "title": "My Title", "source": { "branch": { "name": "my-feature-branch"
        }
        },
        "reviewers": [
        {
        "uuid": "{504c3b62-8120-4f0c-a7bc-87800b9d6f70}"
        }
        ]
        }
        ```

        Other fields:

        * ``description`` - a string
        * ``close_source_branch`` - boolean that specifies if the source branch should be closed upon merging
        * ``draft`` - boolean that specifies whether the pull request is a draft

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            body: The new pull request. The request URL you POST to becomes the destination repository URL. For this
                reason, you must specify an explicit source repository in the request object if you want to pull from a
                different repository (fork). Since not all elements are required or even mutable, you only need to
                include the elements you want to initialize, such as the source branch and the title.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/pullrequests"),
            path_params=[param[str]("repo_slug", repo_slug), param[str]("workspace", workspace)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[Pullrequest | PullrequestDict | None](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[Pullrequest],
            error_mapper=post_repositories_by_workspace_by_repo_slug_pullrequests_error_mapper,
            request_options=request_options,
        )

    def post_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_approve(
        self,
        pull_request_id: int,
        repo_slug: str,
        workspace: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Participant, PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdApproveErrorBody]:
        """Approve the specified pull request as the authenticated user.

        Args:
            pull_request_id: The id of the pull request.
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
            url_template=self._server.default(
                "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/approve"
            ),
            path_params=[
                param[int]("pull_request_id", pull_request_id),
                param[str]("repo_slug", repo_slug),
                param[str]("workspace", workspace),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[Participant],
            error_mapper=post_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_approve_error_mapper,
            request_options=request_options,
        )

    def post_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_comments(
        self,
        pull_request_id: int,
        repo_slug: str,
        workspace: str,
        body: PullrequestComment | PullrequestCommentDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[
        PullrequestComment, PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsErrorBody
    ]:
        """Creates a new pull request comment.

        Returns the newly created pull request comment.

        Args:
            pull_request_id: The id of the pull request.
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            body: The comment object.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default(
                "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/comments"
            ),
            path_params=[
                param[int]("pull_request_id", pull_request_id),
                param[str]("repo_slug", repo_slug),
                param[str]("workspace", workspace),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PullrequestComment | PullrequestCommentDict](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[PullrequestComment],
            error_mapper=post_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_comments_error_mapper,
            request_options=request_options,
        )

    def post_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_comments_by_comment_id_resolve(
        self,
        comment_id: int,
        pull_request_id: int,
        repo_slug: str,
        workspace: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[
        CommentResolution,
        PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsByCommentIdResolveErrorBody,
    ]:
        """Send a ``POST`` request.

        Args:
            comment_id: The id of the comment.
            pull_request_id: The id of the pull request.
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
            url_template=self._server.default(
                "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/comments/{comment_id}/resolve"
            ),
            path_params=[
                param[int]("comment_id", comment_id),
                param[int]("pull_request_id", pull_request_id),
                param[str]("repo_slug", repo_slug),
                param[str]("workspace", workspace),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[CommentResolution],
            error_mapper=post_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_comments_by_comment_id_resolve_error_mapper,
            request_options=request_options,
        )

    def post_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_decline(
        self,
        pull_request_id: int,
        repo_slug: str,
        workspace: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Pullrequest, PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdDeclineErrorBody]:
        """Declines the pull request.

        Args:
            pull_request_id: The id of the pull request.
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
            url_template=self._server.default(
                "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/decline"
            ),
            path_params=[
                param[int]("pull_request_id", pull_request_id),
                param[str]("repo_slug", repo_slug),
                param[str]("workspace", workspace),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[Pullrequest],
            error_mapper=post_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_decline_error_mapper,
            request_options=request_options,
        )

    def post_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_merge(
        self,
        pull_request_id: int,
        repo_slug: str,
        workspace: str,
        *,
        async_: bool | None = None,
        body: PullRequestMergeParameters | PullRequestMergeParametersDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Pullrequest, PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdMergeErrorBody]:
        """Merges the pull request.

        Args:
            pull_request_id: The id of the pull request.
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            async_: Default value is false. When set to true, runs merge asynchronously and immediately returns a 202
                with polling link to the task-status API in the Location header. When set to false, runs merge and waits
                for it to complete, returning 200 when it succeeds. If the duration of the merge exceeds a timeout
                threshold, the API returns a 202 with polling link to the task-status API in the Location header.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default(
                "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/merge"
            ),
            path_params=[
                param[int]("pull_request_id", pull_request_id),
                param[str]("repo_slug", repo_slug),
                param[str]("workspace", workspace),
            ],
            query_params=[param[bool | None]("async", async_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PullRequestMergeParameters | PullRequestMergeParametersDict | None](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[Pullrequest],
            error_mapper=post_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_merge_error_mapper,
            request_options=request_options,
        )

    def post_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_request_changes(
        self,
        pull_request_id: int,
        repo_slug: str,
        workspace: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[
        Participant, PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdRequestChangesErrorBody
    ]:
        """Send a ``POST`` request.

        Args:
            pull_request_id: The id of the pull request.
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
            url_template=self._server.default(
                "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/request-changes"
            ),
            path_params=[
                param[int]("pull_request_id", pull_request_id),
                param[str]("repo_slug", repo_slug),
                param[str]("workspace", workspace),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[Participant],
            error_mapper=post_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_request_changes_error_mapper,
            request_options=request_options,
        )

    def post_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_tasks(
        self,
        pull_request_id: int,
        repo_slug: str,
        workspace: str,
        body: PullRequestTaskCreate | PullRequestTaskCreateDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[
        PullrequestCommentTask, PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdTasksErrorBody
    ]:
        """Creates a new pull request task.

        Returns the newly created pull request task.

        Tasks can optionally be created in relation to a comment specified by the comment's ID which will cause the task
        to appear below the comment on a pull request when viewed in Bitbucket.

        Args:
            pull_request_id: The id of the pull request.
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            body: The contents of the task
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default(
                "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/tasks"
            ),
            path_params=[
                param[int]("pull_request_id", pull_request_id),
                param[str]("repo_slug", repo_slug),
                param[str]("workspace", workspace),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PullRequestTaskCreate | PullRequestTaskCreateDict](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[PullrequestCommentTask],
            error_mapper=post_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_tasks_error_mapper,
            request_options=request_options,
        )

    def put_repositories_by_workspace_by_repo_slug_default_reviewers_by_target_username(
        self,
        repo_slug: str,
        target_username: str,
        workspace: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Account, PutRepositoriesByWorkspaceByRepoSlugDefaultReviewersByTargetUsernameErrorBody]:
        """Adds the specified user to the repository's list of default reviewers.

        This method is idempotent. Adding a user a second time has no effect.

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            target_username: This can either be the username or the UUID of the default reviewer, surrounded by
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
                "/repositories/{workspace}/{repo_slug}/default-reviewers/{target_username}"
            ),
            path_params=[
                param[str]("repo_slug", repo_slug),
                param[str]("target_username", target_username),
                param[str]("workspace", workspace),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[Account],
            error_mapper=put_repositories_by_workspace_by_repo_slug_default_reviewers_by_target_username_error_mapper,
            request_options=request_options,
        )

    def put_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id(
        self,
        pull_request_id: int,
        repo_slug: str,
        workspace: str,
        *,
        body: Pullrequest | PullrequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Pullrequest, PutRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdErrorBody]:
        """Mutates the specified pull request.

        This can be used to change the pull request's branches or description.

        Only open pull requests can be mutated.

        Args:
            pull_request_id: The id of the pull request.
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            body: The pull request that is to be updated.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}"),
            path_params=[
                param[int]("pull_request_id", pull_request_id),
                param[str]("repo_slug", repo_slug),
                param[str]("workspace", workspace),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[Pullrequest | PullrequestDict | None](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[Pullrequest],
            error_mapper=put_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_error_mapper,
            request_options=request_options,
        )

    def put_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_comments_by_comment_id(
        self,
        comment_id: int,
        pull_request_id: int,
        repo_slug: str,
        workspace: str,
        body: PullrequestComment | PullrequestCommentDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[
        PullrequestComment, PutRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsByCommentIdErrorBody
    ]:
        """Updates a specific pull request comment.

        Args:
            comment_id: The id of the comment.
            pull_request_id: The id of the pull request.
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            body: The contents of the updated comment.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default(
                "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/comments/{comment_id}"
            ),
            path_params=[
                param[int]("comment_id", comment_id),
                param[int]("pull_request_id", pull_request_id),
                param[str]("repo_slug", repo_slug),
                param[str]("workspace", workspace),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PullrequestComment | PullrequestCommentDict](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[PullrequestComment],
            error_mapper=put_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_comments_by_comment_id_error_mapper,
            request_options=request_options,
        )

    def put_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_tasks_by_task_id(
        self,
        pull_request_id: int,
        repo_slug: str,
        task_id: int,
        workspace: str,
        body: PullRequestTaskUpdate | PullRequestTaskUpdateDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[
        PullrequestCommentTask, PutRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdTasksByTaskIdErrorBody
    ]:
        """Updates a specific pull request task.

        Args:
            pull_request_id: The id of the pull request.
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            task_id: The ID of the task.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            body: The updated state and content of the task.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default(
                "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/tasks/{task_id}"
            ),
            path_params=[
                param[int]("pull_request_id", pull_request_id),
                param[str]("repo_slug", repo_slug),
                param[int]("task_id", task_id),
                param[str]("workspace", workspace),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PullRequestTaskUpdate | PullRequestTaskUpdateDict](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[PullrequestCommentTask],
            error_mapper=put_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_tasks_by_task_id_error_mapper,
            request_options=request_options,
        )


class AsyncPullRequestsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def delete_repositories_by_workspace_by_repo_slug_default_reviewers_by_target_username(
        self,
        repo_slug: str,
        target_username: str,
        workspace: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DeleteRepositoriesByWorkspaceByRepoSlugDefaultReviewersByTargetUsernameErrorBody]:
        """Removes a default reviewer from the repository.

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            target_username: This can either be the username or the UUID of the default reviewer, surrounded by
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
                "/repositories/{workspace}/{repo_slug}/default-reviewers/{target_username}"
            ),
            path_params=[
                param[str]("repo_slug", repo_slug),
                param[str]("target_username", target_username),
                param[str]("workspace", workspace),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_empty_response,
            error_mapper=delete_repositories_by_workspace_by_repo_slug_default_reviewers_by_target_username_error_mapper,
            request_options=request_options,
        )

    async def delete_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_approve(
        self,
        pull_request_id: int,
        repo_slug: str,
        workspace: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DeleteRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdApproveErrorBody]:
        """Redact the authenticated user's approval of the specified pull request.

        Args:
            pull_request_id: The id of the pull request.
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
                "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/approve"
            ),
            path_params=[
                param[int]("pull_request_id", pull_request_id),
                param[str]("repo_slug", repo_slug),
                param[str]("workspace", workspace),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_empty_response,
            error_mapper=delete_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_approve_error_mapper,
            request_options=request_options,
        )

    async def delete_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_comments_by_comment_id(
        self,
        comment_id: int,
        pull_request_id: int,
        repo_slug: str,
        workspace: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[
        None, DeleteRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsByCommentIdErrorBody
    ]:
        """Deletes a specific pull request comment.

        Args:
            comment_id: The id of the comment.
            pull_request_id: The id of the pull request.
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
                "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/comments/{comment_id}"
            ),
            path_params=[
                param[int]("comment_id", comment_id),
                param[int]("pull_request_id", pull_request_id),
                param[str]("repo_slug", repo_slug),
                param[str]("workspace", workspace),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_empty_response,
            error_mapper=delete_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_comments_by_comment_id_error_mapper,
            request_options=request_options,
        )

    async def delete_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_comments_by_comment_id_resolve(
        self,
        comment_id: int,
        pull_request_id: int,
        repo_slug: str,
        workspace: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[
        None, DeleteRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsByCommentIdResolveErrorBody
    ]:
        """Send a ``DELETE`` request.

        Args:
            comment_id: The id of the comment.
            pull_request_id: The id of the pull request.
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
                "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/comments/{comment_id}/resolve"
            ),
            path_params=[
                param[int]("comment_id", comment_id),
                param[int]("pull_request_id", pull_request_id),
                param[str]("repo_slug", repo_slug),
                param[str]("workspace", workspace),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_empty_response,
            error_mapper=delete_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_comments_by_comment_id_resolve_error_mapper,
            request_options=request_options,
        )

    async def delete_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_request_changes(
        self,
        pull_request_id: int,
        repo_slug: str,
        workspace: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DeleteRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdRequestChangesErrorBody]:
        """Send a ``DELETE`` request.

        Args:
            pull_request_id: The id of the pull request.
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
                "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/request-changes"
            ),
            path_params=[
                param[int]("pull_request_id", pull_request_id),
                param[str]("repo_slug", repo_slug),
                param[str]("workspace", workspace),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_empty_response,
            error_mapper=delete_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_request_changes_error_mapper,
            request_options=request_options,
        )

    async def delete_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_tasks_by_task_id(
        self,
        pull_request_id: int,
        repo_slug: str,
        task_id: int,
        workspace: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DeleteRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdTasksByTaskIdErrorBody]:
        """Deletes a specific pull request task.

        Args:
            pull_request_id: The id of the pull request.
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            task_id: The ID of the task.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default(
                "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/tasks/{task_id}"
            ),
            path_params=[
                param[int]("pull_request_id", pull_request_id),
                param[str]("repo_slug", repo_slug),
                param[int]("task_id", task_id),
                param[str]("workspace", workspace),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_empty_response,
            error_mapper=delete_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_tasks_by_task_id_error_mapper,
            request_options=request_options,
        )

    async def get_pullrequests_for_commit(
        self,
        workspace: str,
        repo_slug: str,
        commit: str,
        *,
        page: int | None = 1,
        pagelen: int | None = 30,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PaginatedPullRequests, GetPullrequestsForCommitErrorBody]:
        """Returns a paginated list of all pull requests as part of which this commit was reviewed. Pull Request Commit
        Links app must be installed first before using this API; installation automatically occurs when 'Go to pull
        request' is clicked from the web interface for a commit's details.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces
            repo_slug: The repository; either the UUID in curly braces, or the slug
            commit: The SHA1 of the commit
            page: Which page to retrieve
            pagelen: How many pull requests to retrieve per page
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/commit/{commit}/pullrequests"),
            path_params=[
                param[str]("workspace", workspace), param[str]("repo_slug", repo_slug), param[str]("commit", commit)
            ],
            query_params=[param[int | None]("page", page), param[int | None]("pagelen", pagelen)],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[PaginatedPullRequests],
            error_mapper=get_pullrequests_for_commit_error_mapper,
            request_options=request_options,
        )

    async def get_repositories_by_workspace_by_repo_slug_default_reviewers(
        self, repo_slug: str, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[PaginatedAccounts, GetRepositoriesByWorkspaceByRepoSlugDefaultReviewersErrorBody]:
        """Returns the repository's default reviewers.

        These are the users that are automatically added as reviewers on every new pull request that is created. To
        obtain the repository's default reviewers as well as the default reviewers inherited from the project, use the
        effective-default-reveiwers endpoint.

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
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/default-reviewers"),
            path_params=[param[str]("repo_slug", repo_slug), param[str]("workspace", workspace)],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[PaginatedAccounts],
            error_mapper=get_repositories_by_workspace_by_repo_slug_default_reviewers_error_mapper,
            request_options=request_options,
        )

    async def get_repositories_by_workspace_by_repo_slug_default_reviewers_by_target_username(
        self,
        repo_slug: str,
        target_username: str,
        workspace: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Account, GetRepositoriesByWorkspaceByRepoSlugDefaultReviewersByTargetUsernameErrorBody]:
        """Returns the specified reviewer.

        This can be used to test whether a user is among the repository's default reviewers list. A 404 indicates that
        that specified user is not a default reviewer.

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            target_username: This can either be the username or the UUID of the default reviewer, surrounded by
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
                "/repositories/{workspace}/{repo_slug}/default-reviewers/{target_username}"
            ),
            path_params=[
                param[str]("repo_slug", repo_slug),
                param[str]("target_username", target_username),
                param[str]("workspace", workspace),
            ],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[Account],
            error_mapper=get_repositories_by_workspace_by_repo_slug_default_reviewers_by_target_username_error_mapper,
            request_options=request_options,
        )

    async def get_repositories_by_workspace_by_repo_slug_effective_default_reviewers(
        self, repo_slug: str, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[
        PaginatedDefaultReviewerAndType, GetRepositoriesByWorkspaceByRepoSlugEffectiveDefaultReviewersErrorBody
    ]:
        """Returns the repository's effective default reviewers. This includes both default reviewers defined at the
        repository level as well as those inherited from its project.

        These are the users that are automatically added as reviewers on every new pull request that is created.

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
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/effective-default-reviewers"),
            path_params=[param[str]("repo_slug", repo_slug), param[str]("workspace", workspace)],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[PaginatedDefaultReviewerAndType],
            error_mapper=get_repositories_by_workspace_by_repo_slug_effective_default_reviewers_error_mapper,
            request_options=request_options,
        )

    async def get_repositories_by_workspace_by_repo_slug_pullrequests(
        self,
        repo_slug: str,
        workspace: str,
        *,
        state: State5OrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PaginatedPullRequests, GetRepositoriesByWorkspaceByRepoSlugPullrequestsErrorBody]:
        """Returns all pull requests on the specified repository.

        By default only open pull requests are returned. This can be controlled using the ``state`` query parameter. To
        retrieve pull requests that are in one of multiple states, repeat the ``state`` parameter for each individual
        state.

        This endpoint also supports filtering and sorting of the results. See filtering and sorting for more details.

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            state: Only return pull requests that are in this state. This parameter can be repeated.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/pullrequests"),
            path_params=[param[str]("repo_slug", repo_slug), param[str]("workspace", workspace)],
            query_params=[param[State5OrStr | None]("state", state)],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[PaginatedPullRequests],
            error_mapper=get_repositories_by_workspace_by_repo_slug_pullrequests_error_mapper,
            request_options=request_options,
        )

    async def get_repositories_by_workspace_by_repo_slug_pullrequests_activity(
        self, repo_slug: str, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, GetRepositoriesByWorkspaceByRepoSlugPullrequestsActivityErrorBody]:
        """Returns a paginated list of the pull request's activity log.

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
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/pullrequests/activity"),
            path_params=[param[str]("repo_slug", repo_slug), param[str]("workspace", workspace)],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_empty_response,
            error_mapper=get_repositories_by_workspace_by_repo_slug_pullrequests_activity_error_mapper,
            request_options=request_options,
        )

    async def get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id(
        self,
        pull_request_id: int,
        repo_slug: str,
        workspace: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Pullrequest, GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdErrorBody]:
        """Returns the specified pull request.

        Args:
            pull_request_id: The id of the pull request.
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
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}"),
            path_params=[
                param[int]("pull_request_id", pull_request_id),
                param[str]("repo_slug", repo_slug),
                param[str]("workspace", workspace),
            ],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[Pullrequest],
            error_mapper=get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_error_mapper,
            request_options=request_options,
        )

    async def get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_activity(
        self,
        pull_request_id: int,
        repo_slug: str,
        workspace: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdActivityErrorBody]:
        """Returns a paginated list of the pull request's activity log.

        Args:
            pull_request_id: The id of the pull request.
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
                "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/activity"
            ),
            path_params=[
                param[int]("pull_request_id", pull_request_id),
                param[str]("repo_slug", repo_slug),
                param[str]("workspace", workspace),
            ],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_empty_response,
            error_mapper=get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_activity_error_mapper,
            request_options=request_options,
        )

    async def get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_comments(
        self,
        pull_request_id: int,
        repo_slug: str,
        workspace: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[
        PaginatedPullRequestComments, GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsErrorBody
    ]:
        """Returns a paginated list of the pull request's comments.

        This includes both global, inline comments and replies.

        The default sorting is oldest to newest and can be overridden with the ``sort`` query parameter.

        This endpoint also supports filtering and sorting of the results. See filtering and sorting for more details.

        Args:
            pull_request_id: The id of the pull request.
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
                "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/comments"
            ),
            path_params=[
                param[int]("pull_request_id", pull_request_id),
                param[str]("repo_slug", repo_slug),
                param[str]("workspace", workspace),
            ],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[PaginatedPullRequestComments],
            error_mapper=get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_comments_error_mapper,
            request_options=request_options,
        )

    async def get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_comments_by_comment_id(
        self,
        comment_id: int,
        pull_request_id: int,
        repo_slug: str,
        workspace: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[
        PullrequestComment, GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsByCommentIdErrorBody
    ]:
        """Returns a specific pull request comment.

        Args:
            comment_id: The id of the comment.
            pull_request_id: The id of the pull request.
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
                "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/comments/{comment_id}"
            ),
            path_params=[
                param[int]("comment_id", comment_id),
                param[int]("pull_request_id", pull_request_id),
                param[str]("repo_slug", repo_slug),
                param[str]("workspace", workspace),
            ],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[PullrequestComment],
            error_mapper=get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_comments_by_comment_id_error_mapper,
            request_options=request_options,
        )

    async def get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_commits(
        self,
        pull_request_id: int,
        repo_slug: str,
        workspace: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommitsErrorBody]:
        """Returns a paginated list of the pull request's commits.

        These are the commits that are being merged into the destination branch when the pull requests gets accepted.

        Args:
            pull_request_id: The id of the pull request.
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
                "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/commits"
            ),
            path_params=[
                param[int]("pull_request_id", pull_request_id),
                param[str]("repo_slug", repo_slug),
                param[str]("workspace", workspace),
            ],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_empty_response,
            error_mapper=get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_commits_error_mapper,
            request_options=request_options,
        )

    async def get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_diff(
        self,
        pull_request_id: int,
        repo_slug: str,
        workspace: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, RawError]:
        """Redirects to the repository diff with the revspec that corresponds to the pull request.

        Args:
            pull_request_id: The id of the pull request.
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
                "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/diff"
            ),
            path_params=[
                param[int]("pull_request_id", pull_request_id),
                param[str]("repo_slug", repo_slug),
                param[str]("workspace", workspace),
            ],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_empty_response,
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_diffstat(
        self,
        pull_request_id: int,
        repo_slug: str,
        workspace: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, RawError]:
        """Redirects to the repository diffstat with the revspec that corresponds to the pull request.

        Args:
            pull_request_id: The id of the pull request.
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
                "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/diffstat"
            ),
            path_params=[
                param[int]("pull_request_id", pull_request_id),
                param[str]("repo_slug", repo_slug),
                param[str]("workspace", workspace),
            ],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_empty_response,
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_merge_task_status_by_task_id(
        self,
        pull_request_id: int,
        repo_slug: str,
        task_id: str,
        workspace: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[
        None, GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdMergeTaskStatusByTaskIdErrorBody
    ]:
        """When merging a pull request takes too long, the client receives a task ID along with a 202 status code. The
        task ID can be used in a call to this endpoint to check the status of a merge task.

        ```
        curl -X GET https://api.bitbucket.org/2.0/repositories/atlassian/bitbucket/pullrequests/2286/merge/task-status/
        ```

        If the merge task is not yet finished, a PENDING status will be returned.

        ```
        HTTP/2 200
        {
        "task_status": "PENDING", "links": { "self": { "href":
        "https://api.bitbucket.org/2.0/repositories/atlassian/bitbucket/pullrequests/2286/merge/task-status/"
        }
        }
        }
        ```

        If the merge was successful, a SUCCESS status will be returned.

        ```
        HTTP/2 200
        {
        "task_status": "SUCCESS", "links": { "self": { "href":
        "https://api.bitbucket.org/2.0/repositories/atlassian/bitbucket/pullrequests/2286/merge/task-status/"
        }
        },
        "merge_result":
        }
        ```

        If the merge task failed, an error will be returned.

        ```
        {
        "type": "error", "error": { "message": ""
        }
        }
        ```

        Args:
            pull_request_id: The id of the pull request.
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            task_id: ID of the merge task
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/merge/task-status/{task_id}"
            ),
            path_params=[
                param[int]("pull_request_id", pull_request_id),
                param[str]("repo_slug", repo_slug),
                param[str]("task_id", task_id),
                param[str]("workspace", workspace),
            ],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_empty_response,
            error_mapper=get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_merge_task_status_by_task_id_error_mapper,
            request_options=request_options,
        )

    async def get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_patch(
        self,
        pull_request_id: int,
        repo_slug: str,
        workspace: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, RawError]:
        """Redirects to the repository patch with the revspec that corresponds to pull request.

        Args:
            pull_request_id: The id of the pull request.
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
                "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/patch"
            ),
            path_params=[
                param[int]("pull_request_id", pull_request_id),
                param[str]("repo_slug", repo_slug),
                param[str]("workspace", workspace),
            ],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_empty_response,
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_statuses2(
        self,
        pull_request_id: int,
        repo_slug: str,
        workspace: str,
        *,
        q: str | None = None,
        sort: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[
        PaginatedCommitStatuses, GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdStatuses2ErrorBody
    ]:
        """Returns all statuses (e.g. build results) for the given pull request.

        Args:
            pull_request_id: The id of the pull request.
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            q: Query string to narrow down the response as per `filtering and sorting
                </cloud/bitbucket/rest/intro/#filtering>`__.
            sort: Field by which the results should be sorted as per `filtering and sorting
                </cloud/bitbucket/rest/intro/#filtering>`__. Defaults to ``created_on``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/statuses"
            ),
            path_params=[
                param[int]("pull_request_id", pull_request_id),
                param[str]("repo_slug", repo_slug),
                param[str]("workspace", workspace),
            ],
            query_params=[param[str | None]("q", q), param[str | None]("sort", sort)],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[PaginatedCommitStatuses],
            error_mapper=get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_statuses2_error_mapper,
            request_options=request_options,
        )

    async def get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_tasks(
        self,
        pull_request_id: int,
        repo_slug: str,
        workspace: str,
        *,
        q: str | None = None,
        sort: str | None = None,
        pagelen: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PaginatedTasks, GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdTasksErrorBody]:
        """Returns a paginated list of the pull request's tasks.

        This endpoint supports filtering and sorting of the results by the 'task' field. See filtering and sorting for
        more details.

        Args:
            pull_request_id: The id of the pull request.
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            q: Query string to narrow down the response. See `filtering and sorting
                </cloud/bitbucket/rest/intro/#filtering>`__ for details.
            sort: Field by which the results should be sorted as per `filtering and sorting
                </cloud/bitbucket/rest/intro/#filtering>`__. Defaults to ``created_on``.
            pagelen: Current number of objects on the existing page. The default value is 10 with 100 being the maximum
                allowed value. Individual APIs may enforce different values.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/tasks"
            ),
            path_params=[
                param[int]("pull_request_id", pull_request_id),
                param[str]("repo_slug", repo_slug),
                param[str]("workspace", workspace),
            ],
            query_params=[
                param[str | None]("q", q), param[str | None]("sort", sort), param[int | None]("pagelen", pagelen)
            ],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[PaginatedTasks],
            error_mapper=get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_tasks_error_mapper,
            request_options=request_options,
        )

    async def get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_tasks_by_task_id(
        self,
        pull_request_id: int,
        repo_slug: str,
        task_id: int,
        workspace: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[
        PullrequestCommentTask, GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdTasksByTaskIdErrorBody
    ]:
        """Returns a specific pull request task.

        Args:
            pull_request_id: The id of the pull request.
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            task_id: The ID of the task.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/tasks/{task_id}"
            ),
            path_params=[
                param[int]("pull_request_id", pull_request_id),
                param[str]("repo_slug", repo_slug),
                param[int]("task_id", task_id),
                param[str]("workspace", workspace),
            ],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[PullrequestCommentTask],
            error_mapper=get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_tasks_by_task_id_error_mapper,
            request_options=request_options,
        )

    async def get_workspaces_by_workspace_pullrequests_by_selected_user(
        self,
        selected_user: str,
        workspace: str,
        *,
        state: State5OrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PaginatedPullRequests, GetWorkspacesByWorkspacePullrequestsBySelectedUserErrorBody]:
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
            query_params=[param[State5OrStr | None]("state", state)],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[PaginatedPullRequests],
            error_mapper=get_workspaces_by_workspace_pullrequests_by_selected_user_error_mapper,
            request_options=request_options,
        )

    async def post_repositories_by_workspace_by_repo_slug_pullrequests(
        self,
        repo_slug: str,
        workspace: str,
        *,
        body: Pullrequest | PullrequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Pullrequest, PostRepositoriesByWorkspaceByRepoSlugPullrequestsErrorBody]:
        r"""Creates a new pull request where the destination repository is this repository and the author is the
        authenticated user.

        The minimum required fields to create a pull request are ``title`` and ``source``, specified by a branch name.

        ```
        curl https://api.bitbucket.org/2.0/repositories/my-workspace/my-repository/pullrequests \ -u
        my-username:my-password \ --request POST \ --header 'Content-Type: application/json' \ --data '{ "title": "My
        Title", "source": { "branch": { "name": "staging"
        }
        }
        }'
        ```

        If the pull request's ``destination`` is not specified, it will default to the ``repository.mainbranch``. To
        open a pull request to a different branch, say from a feature branch to a staging branch, specify a
        ``destination`` (same format as the ``source``):

        ```
        {
        "title": "My Title", "source": { "branch": { "name": "my-feature-branch"
        }
        },
        "destination": { "branch": { "name": "staging"
        }
        }
        }
        ```

        Reviewers can be specified by adding an array of user objects as the ``reviewers`` property.

        ```
        {
        "title": "My Title", "source": { "branch": { "name": "my-feature-branch"
        }
        },
        "reviewers": [
        {
        "uuid": "{504c3b62-8120-4f0c-a7bc-87800b9d6f70}"
        }
        ]
        }
        ```

        Other fields:

        * ``description`` - a string
        * ``close_source_branch`` - boolean that specifies if the source branch should be closed upon merging
        * ``draft`` - boolean that specifies whether the pull request is a draft

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            body: The new pull request. The request URL you POST to becomes the destination repository URL. For this
                reason, you must specify an explicit source repository in the request object if you want to pull from a
                different repository (fork). Since not all elements are required or even mutable, you only need to
                include the elements you want to initialize, such as the source branch and the title.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/pullrequests"),
            path_params=[param[str]("repo_slug", repo_slug), param[str]("workspace", workspace)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[Pullrequest | PullrequestDict | None](body),
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[Pullrequest],
            error_mapper=post_repositories_by_workspace_by_repo_slug_pullrequests_error_mapper,
            request_options=request_options,
        )

    async def post_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_approve(
        self,
        pull_request_id: int,
        repo_slug: str,
        workspace: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Participant, PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdApproveErrorBody]:
        """Approve the specified pull request as the authenticated user.

        Args:
            pull_request_id: The id of the pull request.
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
            url_template=self._server.default(
                "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/approve"
            ),
            path_params=[
                param[int]("pull_request_id", pull_request_id),
                param[str]("repo_slug", repo_slug),
                param[str]("workspace", workspace),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[Participant],
            error_mapper=post_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_approve_error_mapper,
            request_options=request_options,
        )

    async def post_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_comments(
        self,
        pull_request_id: int,
        repo_slug: str,
        workspace: str,
        body: PullrequestComment | PullrequestCommentDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[
        PullrequestComment, PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsErrorBody
    ]:
        """Creates a new pull request comment.

        Returns the newly created pull request comment.

        Args:
            pull_request_id: The id of the pull request.
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            body: The comment object.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default(
                "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/comments"
            ),
            path_params=[
                param[int]("pull_request_id", pull_request_id),
                param[str]("repo_slug", repo_slug),
                param[str]("workspace", workspace),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PullrequestComment | PullrequestCommentDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[PullrequestComment],
            error_mapper=post_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_comments_error_mapper,
            request_options=request_options,
        )

    async def post_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_comments_by_comment_id_resolve(
        self,
        comment_id: int,
        pull_request_id: int,
        repo_slug: str,
        workspace: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[
        CommentResolution,
        PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsByCommentIdResolveErrorBody,
    ]:
        """Send a ``POST`` request.

        Args:
            comment_id: The id of the comment.
            pull_request_id: The id of the pull request.
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
            url_template=self._server.default(
                "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/comments/{comment_id}/resolve"
            ),
            path_params=[
                param[int]("comment_id", comment_id),
                param[int]("pull_request_id", pull_request_id),
                param[str]("repo_slug", repo_slug),
                param[str]("workspace", workspace),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[CommentResolution],
            error_mapper=post_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_comments_by_comment_id_resolve_error_mapper,
            request_options=request_options,
        )

    async def post_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_decline(
        self,
        pull_request_id: int,
        repo_slug: str,
        workspace: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Pullrequest, PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdDeclineErrorBody]:
        """Declines the pull request.

        Args:
            pull_request_id: The id of the pull request.
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
            url_template=self._server.default(
                "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/decline"
            ),
            path_params=[
                param[int]("pull_request_id", pull_request_id),
                param[str]("repo_slug", repo_slug),
                param[str]("workspace", workspace),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[Pullrequest],
            error_mapper=post_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_decline_error_mapper,
            request_options=request_options,
        )

    async def post_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_merge(
        self,
        pull_request_id: int,
        repo_slug: str,
        workspace: str,
        *,
        async_: bool | None = None,
        body: PullRequestMergeParameters | PullRequestMergeParametersDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Pullrequest, PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdMergeErrorBody]:
        """Merges the pull request.

        Args:
            pull_request_id: The id of the pull request.
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            async_: Default value is false. When set to true, runs merge asynchronously and immediately returns a 202
                with polling link to the task-status API in the Location header. When set to false, runs merge and waits
                for it to complete, returning 200 when it succeeds. If the duration of the merge exceeds a timeout
                threshold, the API returns a 202 with polling link to the task-status API in the Location header.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default(
                "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/merge"
            ),
            path_params=[
                param[int]("pull_request_id", pull_request_id),
                param[str]("repo_slug", repo_slug),
                param[str]("workspace", workspace),
            ],
            query_params=[param[bool | None]("async", async_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PullRequestMergeParameters | PullRequestMergeParametersDict | None](body),
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[Pullrequest],
            error_mapper=post_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_merge_error_mapper,
            request_options=request_options,
        )

    async def post_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_request_changes(
        self,
        pull_request_id: int,
        repo_slug: str,
        workspace: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[
        Participant, PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdRequestChangesErrorBody
    ]:
        """Send a ``POST`` request.

        Args:
            pull_request_id: The id of the pull request.
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
            url_template=self._server.default(
                "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/request-changes"
            ),
            path_params=[
                param[int]("pull_request_id", pull_request_id),
                param[str]("repo_slug", repo_slug),
                param[str]("workspace", workspace),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[Participant],
            error_mapper=post_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_request_changes_error_mapper,
            request_options=request_options,
        )

    async def post_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_tasks(
        self,
        pull_request_id: int,
        repo_slug: str,
        workspace: str,
        body: PullRequestTaskCreate | PullRequestTaskCreateDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[
        PullrequestCommentTask, PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdTasksErrorBody
    ]:
        """Creates a new pull request task.

        Returns the newly created pull request task.

        Tasks can optionally be created in relation to a comment specified by the comment's ID which will cause the task
        to appear below the comment on a pull request when viewed in Bitbucket.

        Args:
            pull_request_id: The id of the pull request.
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            body: The contents of the task
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default(
                "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/tasks"
            ),
            path_params=[
                param[int]("pull_request_id", pull_request_id),
                param[str]("repo_slug", repo_slug),
                param[str]("workspace", workspace),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PullRequestTaskCreate | PullRequestTaskCreateDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[PullrequestCommentTask],
            error_mapper=post_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_tasks_error_mapper,
            request_options=request_options,
        )

    async def put_repositories_by_workspace_by_repo_slug_default_reviewers_by_target_username(
        self,
        repo_slug: str,
        target_username: str,
        workspace: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Account, PutRepositoriesByWorkspaceByRepoSlugDefaultReviewersByTargetUsernameErrorBody]:
        """Adds the specified user to the repository's list of default reviewers.

        This method is idempotent. Adding a user a second time has no effect.

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            target_username: This can either be the username or the UUID of the default reviewer, surrounded by
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
                "/repositories/{workspace}/{repo_slug}/default-reviewers/{target_username}"
            ),
            path_params=[
                param[str]("repo_slug", repo_slug),
                param[str]("target_username", target_username),
                param[str]("workspace", workspace),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[Account],
            error_mapper=put_repositories_by_workspace_by_repo_slug_default_reviewers_by_target_username_error_mapper,
            request_options=request_options,
        )

    async def put_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id(
        self,
        pull_request_id: int,
        repo_slug: str,
        workspace: str,
        *,
        body: Pullrequest | PullrequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Pullrequest, PutRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdErrorBody]:
        """Mutates the specified pull request.

        This can be used to change the pull request's branches or description.

        Only open pull requests can be mutated.

        Args:
            pull_request_id: The id of the pull request.
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            body: The pull request that is to be updated.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}"),
            path_params=[
                param[int]("pull_request_id", pull_request_id),
                param[str]("repo_slug", repo_slug),
                param[str]("workspace", workspace),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[Pullrequest | PullrequestDict | None](body),
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[Pullrequest],
            error_mapper=put_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_error_mapper,
            request_options=request_options,
        )

    async def put_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_comments_by_comment_id(
        self,
        comment_id: int,
        pull_request_id: int,
        repo_slug: str,
        workspace: str,
        body: PullrequestComment | PullrequestCommentDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[
        PullrequestComment, PutRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsByCommentIdErrorBody
    ]:
        """Updates a specific pull request comment.

        Args:
            comment_id: The id of the comment.
            pull_request_id: The id of the pull request.
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            body: The contents of the updated comment.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default(
                "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/comments/{comment_id}"
            ),
            path_params=[
                param[int]("comment_id", comment_id),
                param[int]("pull_request_id", pull_request_id),
                param[str]("repo_slug", repo_slug),
                param[str]("workspace", workspace),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PullrequestComment | PullrequestCommentDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[PullrequestComment],
            error_mapper=put_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_comments_by_comment_id_error_mapper,
            request_options=request_options,
        )

    async def put_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_tasks_by_task_id(
        self,
        pull_request_id: int,
        repo_slug: str,
        task_id: int,
        workspace: str,
        body: PullRequestTaskUpdate | PullRequestTaskUpdateDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[
        PullrequestCommentTask, PutRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdTasksByTaskIdErrorBody
    ]:
        """Updates a specific pull request task.

        Args:
            pull_request_id: The id of the pull request.
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            task_id: The ID of the task.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            body: The updated state and content of the task.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default(
                "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/tasks/{task_id}"
            ),
            path_params=[
                param[int]("pull_request_id", pull_request_id),
                param[str]("repo_slug", repo_slug),
                param[int]("task_id", task_id),
                param[str]("workspace", workspace),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PullRequestTaskUpdate | PullRequestTaskUpdateDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[PullrequestCommentTask],
            error_mapper=put_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_tasks_by_task_id_error_mapper,
            request_options=request_options,
        )

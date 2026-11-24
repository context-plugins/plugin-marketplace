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
from ..errors.delete_repositories_by_workspace_by_repo_slug_issues_by_issue_id_attachments_by_path_error import (
    DeleteRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdAttachmentsByPathErrorBody,
    delete_repositories_by_workspace_by_repo_slug_issues_by_issue_id_attachments_by_path_error_mapper,
)
from ..errors.delete_repositories_by_workspace_by_repo_slug_issues_by_issue_id_error import (
    DeleteRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdErrorBody,
    delete_repositories_by_workspace_by_repo_slug_issues_by_issue_id_error_mapper,
)
from ..errors.delete_repositories_by_workspace_by_repo_slug_issues_by_issue_id_watch_error import (
    DeleteRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdWatchErrorBody,
    delete_repositories_by_workspace_by_repo_slug_issues_by_issue_id_watch_error_mapper,
)
from ..errors.get_repositories_by_workspace_by_repo_slug_components_by_component_id_error import (
    GetRepositoriesByWorkspaceByRepoSlugComponentsByComponentIdErrorBody,
    get_repositories_by_workspace_by_repo_slug_components_by_component_id_error_mapper,
)
from ..errors.get_repositories_by_workspace_by_repo_slug_components_error import (
    GetRepositoriesByWorkspaceByRepoSlugComponentsErrorBody,
    get_repositories_by_workspace_by_repo_slug_components_error_mapper,
)
from ..errors.get_repositories_by_workspace_by_repo_slug_issues_by_issue_id_attachments_by_path_error import (
    GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdAttachmentsByPathErrorBody,
    get_repositories_by_workspace_by_repo_slug_issues_by_issue_id_attachments_by_path_error_mapper,
)
from ..errors.get_repositories_by_workspace_by_repo_slug_issues_by_issue_id_attachments_error import (
    GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdAttachmentsErrorBody,
    get_repositories_by_workspace_by_repo_slug_issues_by_issue_id_attachments_error_mapper,
)
from ..errors.get_repositories_by_workspace_by_repo_slug_issues_by_issue_id_changes_by_change_id_error import (
    GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdChangesByChangeIdErrorBody,
    get_repositories_by_workspace_by_repo_slug_issues_by_issue_id_changes_by_change_id_error_mapper,
)
from ..errors.get_repositories_by_workspace_by_repo_slug_issues_by_issue_id_changes_error import (
    GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdChangesErrorBody,
    get_repositories_by_workspace_by_repo_slug_issues_by_issue_id_changes_error_mapper,
)
from ..errors.get_repositories_by_workspace_by_repo_slug_issues_by_issue_id_error import (
    GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdErrorBody,
    get_repositories_by_workspace_by_repo_slug_issues_by_issue_id_error_mapper,
)
from ..errors.get_repositories_by_workspace_by_repo_slug_issues_by_issue_id_vote_error import (
    GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdVoteErrorBody,
    get_repositories_by_workspace_by_repo_slug_issues_by_issue_id_vote_error_mapper,
)
from ..errors.get_repositories_by_workspace_by_repo_slug_issues_by_issue_id_watch_error import (
    GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdWatchErrorBody,
    get_repositories_by_workspace_by_repo_slug_issues_by_issue_id_watch_error_mapper,
)
from ..errors.get_repositories_by_workspace_by_repo_slug_issues_error import (
    GetRepositoriesByWorkspaceByRepoSlugIssuesErrorBody,
    get_repositories_by_workspace_by_repo_slug_issues_error_mapper,
)
from ..errors.get_repositories_by_workspace_by_repo_slug_issues_export_repo_name_issues_task_id_zip_error import (
    GetRepositoriesByWorkspaceByRepoSlugIssuesExportRepoNameIssuesTaskIdZipErrorBody,
    get_repositories_by_workspace_by_repo_slug_issues_export_repo_name_issues_task_id_zip_error_mapper,
)
from ..errors.get_repositories_by_workspace_by_repo_slug_issues_import_error import (
    GetRepositoriesByWorkspaceByRepoSlugIssuesImportErrorBody,
    get_repositories_by_workspace_by_repo_slug_issues_import_error_mapper,
)
from ..errors.get_repositories_by_workspace_by_repo_slug_milestones_by_milestone_id_error import (
    GetRepositoriesByWorkspaceByRepoSlugMilestonesByMilestoneIdErrorBody,
    get_repositories_by_workspace_by_repo_slug_milestones_by_milestone_id_error_mapper,
)
from ..errors.get_repositories_by_workspace_by_repo_slug_milestones_error import (
    GetRepositoriesByWorkspaceByRepoSlugMilestonesErrorBody,
    get_repositories_by_workspace_by_repo_slug_milestones_error_mapper,
)
from ..errors.get_repositories_by_workspace_by_repo_slug_versions_by_version_id_error import (
    GetRepositoriesByWorkspaceByRepoSlugVersionsByVersionIdErrorBody,
    get_repositories_by_workspace_by_repo_slug_versions_by_version_id_error_mapper,
)
from ..errors.get_repositories_by_workspace_by_repo_slug_versions_error import (
    GetRepositoriesByWorkspaceByRepoSlugVersionsErrorBody,
    get_repositories_by_workspace_by_repo_slug_versions_error_mapper,
)
from ..errors.post_repositories_by_workspace_by_repo_slug_issues_by_issue_id_attachments_error import (
    PostRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdAttachmentsErrorBody,
    post_repositories_by_workspace_by_repo_slug_issues_by_issue_id_attachments_error_mapper,
)
from ..errors.post_repositories_by_workspace_by_repo_slug_issues_by_issue_id_changes_error import (
    PostRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdChangesErrorBody,
    post_repositories_by_workspace_by_repo_slug_issues_by_issue_id_changes_error_mapper,
)
from ..errors.post_repositories_by_workspace_by_repo_slug_issues_by_issue_id_comments_error import (
    PostRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdCommentsErrorBody,
    post_repositories_by_workspace_by_repo_slug_issues_by_issue_id_comments_error_mapper,
)
from ..errors.post_repositories_by_workspace_by_repo_slug_issues_error import (
    PostRepositoriesByWorkspaceByRepoSlugIssuesErrorBody,
    post_repositories_by_workspace_by_repo_slug_issues_error_mapper,
)
from ..errors.post_repositories_by_workspace_by_repo_slug_issues_export_error import (
    PostRepositoriesByWorkspaceByRepoSlugIssuesExportErrorBody,
    post_repositories_by_workspace_by_repo_slug_issues_export_error_mapper,
)
from ..errors.post_repositories_by_workspace_by_repo_slug_issues_import_error import (
    PostRepositoriesByWorkspaceByRepoSlugIssuesImportErrorBody,
    post_repositories_by_workspace_by_repo_slug_issues_import_error_mapper,
)
from ..errors.put_repositories_by_workspace_by_repo_slug_issues_by_issue_id_comments_by_comment_id_error import (
    PutRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdCommentsByCommentIdErrorBody,
    put_repositories_by_workspace_by_repo_slug_issues_by_issue_id_comments_by_comment_id_error_mapper,
)
from ..errors.put_repositories_by_workspace_by_repo_slug_issues_by_issue_id_error import (
    PutRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdErrorBody,
    put_repositories_by_workspace_by_repo_slug_issues_by_issue_id_error_mapper,
)
from ..errors.put_repositories_by_workspace_by_repo_slug_issues_by_issue_id_vote_error import (
    PutRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdVoteErrorBody,
    put_repositories_by_workspace_by_repo_slug_issues_by_issue_id_vote_error_mapper,
)
from ..errors.put_repositories_by_workspace_by_repo_slug_issues_by_issue_id_watch_error import (
    PutRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdWatchErrorBody,
    put_repositories_by_workspace_by_repo_slug_issues_by_issue_id_watch_error_mapper,
)
from ..models.component import Component
from ..models.error import Error
from ..models.export_options import ExportOptions, ExportOptionsDict
from ..models.issue import Issue, IssueDict
from ..models.issue_change import IssueChange, IssueChangeDict
from ..models.issue_comment import IssueComment, IssueCommentDict
from ..models.issue_job_status import IssueJobStatus
from ..models.milestone import Milestone
from ..models.paginated_components import PaginatedComponents
from ..models.paginated_issue_attachment import PaginatedIssueAttachment
from ..models.paginated_issue_comments import PaginatedIssueComments
from ..models.paginated_issues import PaginatedIssues
from ..models.paginated_log_entries import PaginatedLogEntries
from ..models.paginated_milestones import PaginatedMilestones
from ..models.paginated_versions import PaginatedVersions
from ..models.version import Version
from ..server.server import Server


class IssueTracker:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = IssueTrackerWithRawResponse(client, server, auth)

    def delete_repositories_by_workspace_by_repo_slug_issues_by_issue_id(
        self, issue_id: str, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Deletes the specified issue. This requires write access to the repository.

        Args:
            issue_id: The issue id
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Indicates the issue was deleted successfully.

        Raises:
            ApiError: When the authenticated user isn't authorized to delete the issue. The specified repository or
                issue does not exist or does not have the issue tracker enabled. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.delete_repositories_by_workspace_by_repo_slug_issues_by_issue_id(
                issue_id, repo_slug, workspace, request_options=request_options
            ),
        )

    def delete_repositories_by_workspace_by_repo_slug_issues_by_issue_id_attachments_by_path(
        self,
        issue_id: str,
        path: str,
        repo_slug: str,
        workspace: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Deletes an attachment.

        Args:
            issue_id: The issue id
            path: Path to the file.
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Indicates that the deletion was successful

        Raises:
            ApiError: If the issue tracker is private and the request was not authenticated. The specified repository or
                issue does not exist or does not have the issue tracker enabled. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.delete_repositories_by_workspace_by_repo_slug_issues_by_issue_id_attachments_by_path(
                issue_id, path, repo_slug, workspace, request_options=request_options
            ),
        )

    def delete_repositories_by_workspace_by_repo_slug_issues_by_issue_id_comments_by_comment_id(
        self,
        comment_id: int,
        issue_id: str,
        repo_slug: str,
        workspace: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Deletes the specified comment.

        Args:
            comment_id: The id of the comment.
            issue_id: The issue id
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Indicates successful deletion.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.delete_repositories_by_workspace_by_repo_slug_issues_by_issue_id_comments_by_comment_id(
                comment_id, issue_id, repo_slug, workspace, request_options=request_options
            ),
        )

    def delete_repositories_by_workspace_by_repo_slug_issues_by_issue_id_vote(
        self, issue_id: str, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> Error:
        """Retract your vote.

        Args:
            issue_id: The issue id
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Unexpected error.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.delete_repositories_by_workspace_by_repo_slug_issues_by_issue_id_vote(
                issue_id, repo_slug, workspace, request_options=request_options
            ),
        )

    def delete_repositories_by_workspace_by_repo_slug_issues_by_issue_id_watch(
        self, issue_id: str, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> Error:
        """Stop watching this issue.

        Args:
            issue_id: The issue id
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Indicates that the authenticated user successfully stopped watching this issue.

        Raises:
            ApiError: When the request wasn't authenticated. The specified repository or issue does not exist or does
                not have the issue tracker enabled. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.delete_repositories_by_workspace_by_repo_slug_issues_by_issue_id_watch(
                issue_id, repo_slug, workspace, request_options=request_options
            ),
        )

    def get_repositories_by_workspace_by_repo_slug_components(
        self, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> PaginatedComponents:
        """Returns the components that have been defined in the issue tracker.

        This resource is only available on repositories that have the issue tracker enabled.

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The components that have been defined in the issue tracker.

        Raises:
            ApiError: The specified repository does not exist or does not have the issue tracker enabled. ``error`` is
                ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_repositories_by_workspace_by_repo_slug_components(
                repo_slug, workspace, request_options=request_options
            ),
        )

    def get_repositories_by_workspace_by_repo_slug_components_by_component_id(
        self, component_id: int, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> Component:
        """Returns the specified issue tracker component object.

        Args:
            component_id: The component's id
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The specified component object.

        Raises:
            ApiError: The specified repository or component does not exist or does not have the issue tracker enabled.
                ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_repositories_by_workspace_by_repo_slug_components_by_component_id(
                component_id, repo_slug, workspace, request_options=request_options
            ),
        )

    def get_repositories_by_workspace_by_repo_slug_issues(
        self, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> PaginatedIssues:
        """Returns the issues in the issue tracker.

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A paginated list of the issues matching any filter criteria that were provided.

        Raises:
            ApiError: The specified repository does not exist or does not have the issue tracker enabled. ``error`` is
                ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_repositories_by_workspace_by_repo_slug_issues(
                repo_slug, workspace, request_options=request_options
            ),
        )

    def get_repositories_by_workspace_by_repo_slug_issues_by_issue_id(
        self, issue_id: str, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> Issue:
        """Returns the specified issue.

        Args:
            issue_id: The issue id
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The issue object.

        Raises:
            ApiError: When the authenticated user isn't authorized to access the issue. The specified repository or
                issue does not exist or does not have the issue tracker enabled. The specified issue is unavailable.
                ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_repositories_by_workspace_by_repo_slug_issues_by_issue_id(
                issue_id, repo_slug, workspace, request_options=request_options
            ),
        )

    def get_repositories_by_workspace_by_repo_slug_issues_by_issue_id_attachments(
        self, issue_id: str, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> PaginatedIssueAttachment:
        """Returns all attachments for this issue.

        This returns the files' meta data. This does not return the files' actual contents.

        The files are always ordered by their upload date.

        Args:
            issue_id: The issue id
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A paginated list of all attachments for this issue.

        Raises:
            ApiError: If the issue tracker is private and the request was not authenticated. The specified repository or
                issue does not exist or does not have the issue tracker enabled. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_repositories_by_workspace_by_repo_slug_issues_by_issue_id_attachments(
                issue_id, repo_slug, workspace, request_options=request_options
            ),
        )

    def get_repositories_by_workspace_by_repo_slug_issues_by_issue_id_attachments_by_path(
        self,
        issue_id: str,
        path: str,
        repo_slug: str,
        workspace: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Returns the contents of the specified file attachment.

        Note that this endpoint does not return a JSON response, but instead returns a redirect pointing to the actual
        file that in turn will return the raw contents.

        The redirect URL contains a one-time token that has a limited lifetime. As a result, the link should not be
        persisted, stored, or shared.

        Args:
            issue_id: The issue id
            path: Path to the file.
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Raises:
            ApiError: If the issue tracker is private and the request was not authenticated. The specified repository or
                issue does not exist or does not have the issue tracker enabled. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_repositories_by_workspace_by_repo_slug_issues_by_issue_id_attachments_by_path(
                issue_id, path, repo_slug, workspace, request_options=request_options
            ),
        )

    def get_repositories_by_workspace_by_repo_slug_issues_by_issue_id_changes(
        self,
        issue_id: str,
        repo_slug: str,
        workspace: str,
        *,
        q: str | None = None,
        sort: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PaginatedLogEntries:
        r"""Returns the list of all changes that have been made to the specified issue. Changes are returned in
        chronological order with the oldest change first.

        Each time an issue is edited in the UI or through the API, an immutable change record is created under the
        ``/issues/123/changes`` endpoint. It also has a comment associated with the change.

        Note that this operation is changing significantly, due to privacy changes. See the announcement for details.

        Changes support filtering and sorting that can be used to search for specific changes. For instance, to see when
        an issue transitioned to "resolved":

        ```
        $ curl -s https://api.bitbucket.org/2.0/repositories/site/master/issues/1/changes \ -G
        --data-urlencode='q=changes.state.new = "resolved"'
        ```

        This resource is only available on repositories that have the issue tracker enabled.

        N.B.

        The ``changes.assignee`` and ``changes.assignee_account_id`` fields are not a ``user`` object. Instead, they
        contain the raw ``username`` and ``account_id`` of the user. This is to protect the integrity of the audit log
        even after a user account gets deleted.

        The ``changes.assignee`` field is deprecated will disappear in the future. Use ``changes.assignee_account_id``
        instead.

        Args:
            issue_id: The issue id
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            q: Query string to narrow down the response. See `filtering and sorting
                </cloud/bitbucket/rest/intro/#filtering>`__ for details.
            sort: Name of a response property to sort results. See `filtering and sorting
                </cloud/bitbucket/rest/intro/#sorting-query-results>`__ for details.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Returns all the issue changes that were made on the specified issue.

        Raises:
            ApiError: The specified repository or issue does not exist or does not have the issue tracker enabled.
                ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_repositories_by_workspace_by_repo_slug_issues_by_issue_id_changes(
                issue_id, repo_slug, workspace, q=q, sort=sort, request_options=request_options
            ),
        )

    def get_repositories_by_workspace_by_repo_slug_issues_by_issue_id_changes_by_change_id(
        self,
        change_id: str,
        issue_id: str,
        repo_slug: str,
        workspace: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> IssueChange:
        """Returns the specified issue change object.

        This resource is only available on repositories that have the issue tracker enabled.

        Args:
            change_id: The issue change id
            issue_id: The issue id
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The specified issue change object.

        Raises:
            ApiError: The specified repository or issue change does not exist or does not have the issue tracker
                enabled. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_repositories_by_workspace_by_repo_slug_issues_by_issue_id_changes_by_change_id(
                change_id, issue_id, repo_slug, workspace, request_options=request_options
            ),
        )

    def get_repositories_by_workspace_by_repo_slug_issues_by_issue_id_comments(
        self,
        issue_id: str,
        repo_slug: str,
        workspace: str,
        *,
        q: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PaginatedIssueComments:
        """Returns a paginated list of all comments that were made on the specified issue.

        The default sorting is oldest to newest and can be overridden with the ``sort`` query parameter.

        This endpoint also supports filtering and sorting of the results. See filtering and sorting for more details.

        Args:
            issue_id: The issue id
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            q: Query string to narrow down the response as per `filtering and sorting
                </cloud/bitbucket/rest/intro/#filtering>`__.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A paginated list of issue comments.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.get_repositories_by_workspace_by_repo_slug_issues_by_issue_id_comments(
                issue_id, repo_slug, workspace, q=q, request_options=request_options
            ),
        )

    def get_repositories_by_workspace_by_repo_slug_issues_by_issue_id_comments_by_comment_id(
        self,
        comment_id: int,
        issue_id: str,
        repo_slug: str,
        workspace: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> IssueComment:
        """Returns the specified issue comment object.

        Args:
            comment_id: The id of the comment.
            issue_id: The issue id
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The issue comment.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.get_repositories_by_workspace_by_repo_slug_issues_by_issue_id_comments_by_comment_id(
                comment_id, issue_id, repo_slug, workspace, request_options=request_options
            ),
        )

    def get_repositories_by_workspace_by_repo_slug_issues_by_issue_id_vote(
        self, issue_id: str, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> Error:
        """Check whether the authenticated user has voted for this issue. A 204 status code indicates that the user has
        voted, while a 404 implies they haven't.

        Args:
            issue_id: The issue id
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            If the authenticated user has not voted for this issue.

        Raises:
            ApiError: When the request wasn't authenticated. If the authenticated user has not voted for this issue, or
                when the repo does not exist, or does not have an issue tracker. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_repositories_by_workspace_by_repo_slug_issues_by_issue_id_vote(
                issue_id, repo_slug, workspace, request_options=request_options
            ),
        )

    def get_repositories_by_workspace_by_repo_slug_issues_by_issue_id_watch(
        self, issue_id: str, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> Error:
        """Indicated whether or not the authenticated user is watching this issue.

        Args:
            issue_id: The issue id
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            If the authenticated user is watching this issue.

        Raises:
            ApiError: When the request wasn't authenticated. If the authenticated user is not watching this issue, or
                when the repo does not exist, or does not have an issue tracker. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_repositories_by_workspace_by_repo_slug_issues_by_issue_id_watch(
                issue_id, repo_slug, workspace, request_options=request_options
            ),
        )

    def get_repositories_by_workspace_by_repo_slug_issues_export_repo_name_issues_task_id_zip(
        self,
        repo_name: str,
        repo_slug: str,
        task_id: str,
        workspace: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> IssueJobStatus:
        """This endpoint is used to poll for the progress of an issue export job and return the zip file after the job
        is complete. As long as the job is running, this will return a 202 response with in the response body a
        description of the current status.

        After the job has been scheduled, but before it starts executing, the endpoint returns a 202 response with
        status ``ACCEPTED``.

        Once it starts running, it is a 202 response with status ``STARTED`` and progress filled.

        After it is finished, it becomes a 200 response with status ``SUCCESS`` or ``FAILURE``.

        Args:
            repo_name: The name of the repo
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            task_id: The ID of the export task
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Export job accepted

        Raises:
            ApiError: The request wasn't authenticated properly When the authenticated user does not have admin
                permission on the repo No export job has begun ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_repositories_by_workspace_by_repo_slug_issues_export_repo_name_issues_task_id_zip(
                repo_name, repo_slug, task_id, workspace, request_options=request_options
            ),
        )

    def get_repositories_by_workspace_by_repo_slug_issues_import(
        self, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> IssueJobStatus:
        """When using GET, this endpoint reports the status of the current import task.

        After the job has been scheduled, but before it starts executing, the endpoint returns a 202 response with
        status ``ACCEPTED``.

        Once it starts running, it is a 202 response with status ``STARTED`` and progress filled.

        After it is finished, it becomes a 200 response with status ``SUCCESS`` or ``FAILURE``.

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Import job complete with either FAILURE or SUCCESS status

        Raises:
            ApiError: The request wasn't authenticated properly When the authenticated user does not have admin
                permission on the repo No export job has begun ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_repositories_by_workspace_by_repo_slug_issues_import(
                repo_slug, workspace, request_options=request_options
            ),
        )

    def get_repositories_by_workspace_by_repo_slug_milestones(
        self, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> PaginatedMilestones:
        """Returns the milestones that have been defined in the issue tracker.

        This resource is only available on repositories that have the issue tracker enabled.

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The milestones that have been defined in the issue tracker.

        Raises:
            ApiError: The specified repository does not exist or does not have the issue tracker enabled. ``error`` is
                ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_repositories_by_workspace_by_repo_slug_milestones(
                repo_slug, workspace, request_options=request_options
            ),
        )

    def get_repositories_by_workspace_by_repo_slug_milestones_by_milestone_id(
        self, milestone_id: int, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> Milestone:
        """Returns the specified issue tracker milestone object.

        Args:
            milestone_id: The milestone's id
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The specified milestone object.

        Raises:
            ApiError: The specified repository or milestone does not exist or does not have the issue tracker enabled.
                ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_repositories_by_workspace_by_repo_slug_milestones_by_milestone_id(
                milestone_id, repo_slug, workspace, request_options=request_options
            ),
        )

    def get_repositories_by_workspace_by_repo_slug_versions(
        self, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> PaginatedVersions:
        """Returns the versions that have been defined in the issue tracker.

        This resource is only available on repositories that have the issue tracker enabled.

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The versions that have been defined in the issue tracker.

        Raises:
            ApiError: The specified repository does not exist or does not have the issue tracker enabled. ``error`` is
                ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_repositories_by_workspace_by_repo_slug_versions(
                repo_slug, workspace, request_options=request_options
            ),
        )

    def get_repositories_by_workspace_by_repo_slug_versions_by_version_id(
        self, repo_slug: str, version_id: int, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> Version:
        """Returns the specified issue tracker version object.

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            version_id: The version's id
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The specified version object.

        Raises:
            ApiError: The specified repository or version does not exist or does not have the issue tracker enabled.
                ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_repositories_by_workspace_by_repo_slug_versions_by_version_id(
                repo_slug, version_id, workspace, request_options=request_options
            ),
        )

    def post_repositories_by_workspace_by_repo_slug_issues(
        self,
        repo_slug: str,
        workspace: str,
        body: Issue | IssueDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Issue:
        """Creates a new issue.

        This call requires authentication. Private repositories or private issue trackers require the caller to
        authenticate with an account that has appropriate authorization.

        The authenticated user is used for the issue's ``reporter`` field.

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            body: The new issue. The only required element is ``title``. All other elements can be omitted from the
                body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The newly created issue.

        Raises:
            ApiError: When the request wasn't authenticated. When the authenticated user isn't authorized to create the
                issue. The specified repository does not exist or does not have the issue tracker enabled. ``error`` is
                ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.post_repositories_by_workspace_by_repo_slug_issues(
                repo_slug, workspace, body, request_options=request_options
            ),
        )

    def post_repositories_by_workspace_by_repo_slug_issues_by_issue_id_attachments(
        self, issue_id: str, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Upload new issue attachments.

        To upload files, perform a ``multipart/form-data`` POST containing one or more file fields.

        When a file is uploaded with the same name as an existing attachment, then the existing file will be replaced.

        Args:
            issue_id: The issue id
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An empty response document.

        Raises:
            ApiError: If no files were uploaded, or if the wrong ``Content-Type`` was used. If the issue tracker is
                private and the request was not authenticated. The specified repository or issue does not exist or does
                not have the issue tracker enabled. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.post_repositories_by_workspace_by_repo_slug_issues_by_issue_id_attachments(
                issue_id, repo_slug, workspace, request_options=request_options
            ),
        )

    def post_repositories_by_workspace_by_repo_slug_issues_by_issue_id_changes(
        self,
        issue_id: str,
        repo_slug: str,
        workspace: str,
        body: IssueChange | IssueChangeDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> IssueChange:
        r"""Makes a change to the specified issue.

        For example, to change an issue's state and assignee, create a new change object that modifies these fields:

        ```
        curl https://api.bitbucket.org/2.0/site/master/issues/1234/changes \ -s -u evzijst -X POST -H "Content-Type:
        application/json" \ -d '{ "changes": { "assignee_account_id": { "new":
        "557058:c0b72ad0-1cb5-4018-9cdc-0cde8492c443"
        },
        "state": { "new": 'resolved"
        }
        }
        "message": { "raw": "This is now resolved."
        }
        }'
        ```

        The above example also includes a custom comment to go alongside the change. This comment will also be visible
        on the issue page in the UI.

        The fields of the ``changes`` object are strings, not objects. This allows for immutable change log records,
        even after user accounts, milestones, or other objects recorded in a change entry, get renamed or deleted.

        The ``assignee_account_id`` field stores the account id. When POSTing a new change and changing the assignee,
        the client should therefore use the user's account_id in the ``changes.assignee_account_id.new`` field.

        This call requires authentication. Private repositories or private issue trackers require the caller to
        authenticate with an account that has appropriate authorization.

        Args:
            issue_id: The issue id
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            body: The new issue state change. The only required elements are ``changes.[].new``. All other elements can
                be omitted from the body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The newly created issue change.

        Raises:
            ApiError: When the request wasn't authenticated. When the authenticated user isn't authorized to modify the
                issue. The specified repository or issue does not exist or does not have the issue tracker enabled.
                ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.post_repositories_by_workspace_by_repo_slug_issues_by_issue_id_changes(
                issue_id, repo_slug, workspace, body, request_options=request_options
            ),
        )

    def post_repositories_by_workspace_by_repo_slug_issues_by_issue_id_comments(
        self,
        issue_id: str,
        repo_slug: str,
        workspace: str,
        body: IssueComment | IssueCommentDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        r"""Creates a new issue comment.

        ```
        $ curl https://api.bitbucket.org/2.0/repositories/atlassian/prlinks/issues/42/comments/ \ -X POST -u evzijst \
        -H 'Content-Type: application/json' \ -d '{"content": {"raw": "Lorem ipsum."}}'
        ```

        Args:
            issue_id: The issue id
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            body: The new issue comment object.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The newly created comment.

        Raises:
            ApiError: If the input was invalid, or if the comment being created is detected as spam ``error`` is ``Error
                | RawError``."""
        return unwrap(
            self._with_raw_response.post_repositories_by_workspace_by_repo_slug_issues_by_issue_id_comments(
                issue_id, repo_slug, workspace, body, request_options=request_options
            ),
        )

    def post_repositories_by_workspace_by_repo_slug_issues_export(
        self,
        repo_slug: str,
        workspace: str,
        *,
        body: ExportOptions | ExportOptionsDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """A POST request to this endpoint initiates a new background celery task that archives the repo's issues.

        When the job has been accepted, it will return a 202 (Accepted) along with a unique url to this job in the
        'Location' response header. This url is the endpoint for where the user can obtain their zip files."

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            body: The options to apply to the export. Available options include ``project_key`` and ``project_name``
                which, if specified, are used as the project key and name in the exported Jira json format. Option
                ``send_email`` specifies whether an email should be sent upon export result. Option
                ``include_attachments`` specifies whether attachments are included in the export.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The export job has been accepted

        Raises:
            ApiError: The request wasn't authenticated properly When the authenticated user does not have admin
                permission on the repo The repo does not exist or does not have an issue tracker ``error`` is ``Error |
                RawError``."""
        return unwrap(
            self._with_raw_response.post_repositories_by_workspace_by_repo_slug_issues_export(
                repo_slug, workspace, body=body, request_options=request_options
            ),
        )

    def post_repositories_by_workspace_by_repo_slug_issues_import(
        self, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> IssueJobStatus:
        """A POST request to this endpoint will import the zip file given by the archive parameter into the repository.
        All existing issues will be deleted and replaced by the contents of the imported zip file.

        Imports are done through a multipart/form-data POST. There is one valid and required form field, with the name
        "archive," which needs to be a file field:

        ```
        $ curl -u -X POST -F archive=@/path/to/file.zip https://api.bitbucket.org/2.0/repositories///issues/import
        ```

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Import job accepted

        Raises:
            ApiError: The request wasn't authenticated properly When the authenticated user does not have admin
                permission on the repo No export job has begun Import already running ``error`` is ``Error |
                RawError``."""
        return unwrap(
            self._with_raw_response.post_repositories_by_workspace_by_repo_slug_issues_import(
                repo_slug, workspace, request_options=request_options
            ),
        )

    def put_repositories_by_workspace_by_repo_slug_issues_by_issue_id(
        self, issue_id: str, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> Issue:
        r"""Modifies the issue.

        ```
        $ curl https://api.bitbucket.org/2.0/repostories/evzijst/dogslow/issues/123 \ -u evzijst -s -X PUT -H
        'Content-Type: application/json' \ -d '{ "title": "Updated title", "assignee": { "account_id":
        "5d5355e8c6b9320d9ea5b28d"
        },
        "priority": "minor", "version": { "name": "1.0"
        },
        "component": null
        }'
        ```

        This example changes the ``title``, ``assignee``, ``priority`` and the ``version``. It also removes the value of
        the ``component`` from the issue by setting the field to ``null``. Any field not present keeps its existing
        value.

        Each time an issue is edited in the UI or through the API, an immutable change record is created under the
        ``/issues/123/changes`` endpoint. It also has a comment associated with the change.

        Args:
            issue_id: The issue id
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The updated issue object.

        Raises:
            ApiError: When the authenticated user isn't authorized to access the issue. The specified repository or
                issue does not exist or does not have the issue tracker enabled. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.put_repositories_by_workspace_by_repo_slug_issues_by_issue_id(
                issue_id, repo_slug, workspace, request_options=request_options
            ),
        )

    def put_repositories_by_workspace_by_repo_slug_issues_by_issue_id_comments_by_comment_id(
        self,
        comment_id: int,
        issue_id: str,
        repo_slug: str,
        workspace: str,
        body: IssueComment | IssueCommentDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> IssueComment:
        r"""Updates the content of the specified issue comment. Note that only the ``content.raw`` field can be
        modified.

        ```
        $ curl https://api.bitbucket.org/2.0/repositories/atlassian/prlinks/issues/42/comments/5728901 \ -X PUT -u
        evzijst \ -H 'Content-Type: application/json' \ -d '{"content": {"raw": "Lorem ipsum."}'
        ```

        Args:
            comment_id: The id of the comment.
            issue_id: The issue id
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            body: The updated comment.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The updated issue comment.

        Raises:
            ApiError: If the input was invalid, or if the update to the comment is detected as spam ``error`` is ``Error
                | RawError``."""
        return unwrap(
            self._with_raw_response.put_repositories_by_workspace_by_repo_slug_issues_by_issue_id_comments_by_comment_id(
                comment_id, issue_id, repo_slug, workspace, body, request_options=request_options
            ),
        )

    def put_repositories_by_workspace_by_repo_slug_issues_by_issue_id_vote(
        self, issue_id: str, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> Error:
        """Vote for this issue.

        To cast your vote, do an empty PUT. The 204 status code indicates that the operation was successful.

        Args:
            issue_id: The issue id
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Indicating the authenticated user has cast their vote successfully.

        Raises:
            ApiError: When the request wasn't authenticated. The specified repository or issue does not exist or does
                not have the issue tracker enabled. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.put_repositories_by_workspace_by_repo_slug_issues_by_issue_id_vote(
                issue_id, repo_slug, workspace, request_options=request_options
            ),
        )

    def put_repositories_by_workspace_by_repo_slug_issues_by_issue_id_watch(
        self, issue_id: str, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> Error:
        """Start watching this issue.

        To start watching this issue, do an empty PUT. The 204 status code indicates that the operation was successful.

        Args:
            issue_id: The issue id
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Indicates that the authenticated user successfully started watching this issue.

        Raises:
            ApiError: When the request wasn't authenticated. If the authenticated user is not watching this issue, or
                when the repo does not exist, or does not have an issue tracker. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.put_repositories_by_workspace_by_repo_slug_issues_by_issue_id_watch(
                issue_id, repo_slug, workspace, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> IssueTrackerWithRawResponse:
        return self._with_raw_response


class AsyncIssueTracker:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncIssueTrackerWithRawResponse(client, server, auth)

    async def delete_repositories_by_workspace_by_repo_slug_issues_by_issue_id(
        self, issue_id: str, repo_slug: str, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Deletes the specified issue. This requires write access to the repository.

        Args:
            issue_id: The issue id
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Indicates the issue was deleted successfully.

        Raises:
            ApiError: When the authenticated user isn't authorized to delete the issue. The specified repository or
                issue does not exist or does not have the issue tracker enabled. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.delete_repositories_by_workspace_by_repo_slug_issues_by_issue_id(
                issue_id, repo_slug, workspace, request_options=request_options
            ),
        )

    async def delete_repositories_by_workspace_by_repo_slug_issues_by_issue_id_attachments_by_path(
        self,
        issue_id: str,
        path: str,
        repo_slug: str,
        workspace: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Deletes an attachment.

        Args:
            issue_id: The issue id
            path: Path to the file.
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Indicates that the deletion was successful

        Raises:
            ApiError: If the issue tracker is private and the request was not authenticated. The specified repository or
                issue does not exist or does not have the issue tracker enabled. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.delete_repositories_by_workspace_by_repo_slug_issues_by_issue_id_attachments_by_path(
                issue_id, path, repo_slug, workspace, request_options=request_options
            ),
        )

    async def delete_repositories_by_workspace_by_repo_slug_issues_by_issue_id_comments_by_comment_id(
        self,
        comment_id: int,
        issue_id: str,
        repo_slug: str,
        workspace: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Deletes the specified comment.

        Args:
            comment_id: The id of the comment.
            issue_id: The issue id
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Indicates successful deletion.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.delete_repositories_by_workspace_by_repo_slug_issues_by_issue_id_comments_by_comment_id(
                comment_id, issue_id, repo_slug, workspace, request_options=request_options
            ),
        )

    async def delete_repositories_by_workspace_by_repo_slug_issues_by_issue_id_vote(
        self, issue_id: str, repo_slug: str, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Error:
        """Retract your vote.

        Args:
            issue_id: The issue id
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Unexpected error.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.delete_repositories_by_workspace_by_repo_slug_issues_by_issue_id_vote(
                issue_id, repo_slug, workspace, request_options=request_options
            ),
        )

    async def delete_repositories_by_workspace_by_repo_slug_issues_by_issue_id_watch(
        self, issue_id: str, repo_slug: str, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Error:
        """Stop watching this issue.

        Args:
            issue_id: The issue id
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Indicates that the authenticated user successfully stopped watching this issue.

        Raises:
            ApiError: When the request wasn't authenticated. The specified repository or issue does not exist or does
                not have the issue tracker enabled. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.delete_repositories_by_workspace_by_repo_slug_issues_by_issue_id_watch(
                issue_id, repo_slug, workspace, request_options=request_options
            ),
        )

    async def get_repositories_by_workspace_by_repo_slug_components(
        self, repo_slug: str, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> PaginatedComponents:
        """Returns the components that have been defined in the issue tracker.

        This resource is only available on repositories that have the issue tracker enabled.

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The components that have been defined in the issue tracker.

        Raises:
            ApiError: The specified repository does not exist or does not have the issue tracker enabled. ``error`` is
                ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_repositories_by_workspace_by_repo_slug_components(
                repo_slug, workspace, request_options=request_options
            ),
        )

    async def get_repositories_by_workspace_by_repo_slug_components_by_component_id(
        self,
        component_id: int,
        repo_slug: str,
        workspace: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Component:
        """Returns the specified issue tracker component object.

        Args:
            component_id: The component's id
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The specified component object.

        Raises:
            ApiError: The specified repository or component does not exist or does not have the issue tracker enabled.
                ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_repositories_by_workspace_by_repo_slug_components_by_component_id(
                component_id, repo_slug, workspace, request_options=request_options
            ),
        )

    async def get_repositories_by_workspace_by_repo_slug_issues(
        self, repo_slug: str, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> PaginatedIssues:
        """Returns the issues in the issue tracker.

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A paginated list of the issues matching any filter criteria that were provided.

        Raises:
            ApiError: The specified repository does not exist or does not have the issue tracker enabled. ``error`` is
                ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_repositories_by_workspace_by_repo_slug_issues(
                repo_slug, workspace, request_options=request_options
            ),
        )

    async def get_repositories_by_workspace_by_repo_slug_issues_by_issue_id(
        self, issue_id: str, repo_slug: str, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Issue:
        """Returns the specified issue.

        Args:
            issue_id: The issue id
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The issue object.

        Raises:
            ApiError: When the authenticated user isn't authorized to access the issue. The specified repository or
                issue does not exist or does not have the issue tracker enabled. The specified issue is unavailable.
                ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_repositories_by_workspace_by_repo_slug_issues_by_issue_id(
                issue_id, repo_slug, workspace, request_options=request_options
            ),
        )

    async def get_repositories_by_workspace_by_repo_slug_issues_by_issue_id_attachments(
        self, issue_id: str, repo_slug: str, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> PaginatedIssueAttachment:
        """Returns all attachments for this issue.

        This returns the files' meta data. This does not return the files' actual contents.

        The files are always ordered by their upload date.

        Args:
            issue_id: The issue id
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A paginated list of all attachments for this issue.

        Raises:
            ApiError: If the issue tracker is private and the request was not authenticated. The specified repository or
                issue does not exist or does not have the issue tracker enabled. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_repositories_by_workspace_by_repo_slug_issues_by_issue_id_attachments(
                issue_id, repo_slug, workspace, request_options=request_options
            ),
        )

    async def get_repositories_by_workspace_by_repo_slug_issues_by_issue_id_attachments_by_path(
        self,
        issue_id: str,
        path: str,
        repo_slug: str,
        workspace: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Returns the contents of the specified file attachment.

        Note that this endpoint does not return a JSON response, but instead returns a redirect pointing to the actual
        file that in turn will return the raw contents.

        The redirect URL contains a one-time token that has a limited lifetime. As a result, the link should not be
        persisted, stored, or shared.

        Args:
            issue_id: The issue id
            path: Path to the file.
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Raises:
            ApiError: If the issue tracker is private and the request was not authenticated. The specified repository or
                issue does not exist or does not have the issue tracker enabled. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_repositories_by_workspace_by_repo_slug_issues_by_issue_id_attachments_by_path(
                issue_id, path, repo_slug, workspace, request_options=request_options
            ),
        )

    async def get_repositories_by_workspace_by_repo_slug_issues_by_issue_id_changes(
        self,
        issue_id: str,
        repo_slug: str,
        workspace: str,
        *,
        q: str | None = None,
        sort: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PaginatedLogEntries:
        r"""Returns the list of all changes that have been made to the specified issue. Changes are returned in
        chronological order with the oldest change first.

        Each time an issue is edited in the UI or through the API, an immutable change record is created under the
        ``/issues/123/changes`` endpoint. It also has a comment associated with the change.

        Note that this operation is changing significantly, due to privacy changes. See the announcement for details.

        Changes support filtering and sorting that can be used to search for specific changes. For instance, to see when
        an issue transitioned to "resolved":

        ```
        $ curl -s https://api.bitbucket.org/2.0/repositories/site/master/issues/1/changes \ -G
        --data-urlencode='q=changes.state.new = "resolved"'
        ```

        This resource is only available on repositories that have the issue tracker enabled.

        N.B.

        The ``changes.assignee`` and ``changes.assignee_account_id`` fields are not a ``user`` object. Instead, they
        contain the raw ``username`` and ``account_id`` of the user. This is to protect the integrity of the audit log
        even after a user account gets deleted.

        The ``changes.assignee`` field is deprecated will disappear in the future. Use ``changes.assignee_account_id``
        instead.

        Args:
            issue_id: The issue id
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            q: Query string to narrow down the response. See `filtering and sorting
                </cloud/bitbucket/rest/intro/#filtering>`__ for details.
            sort: Name of a response property to sort results. See `filtering and sorting
                </cloud/bitbucket/rest/intro/#sorting-query-results>`__ for details.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Returns all the issue changes that were made on the specified issue.

        Raises:
            ApiError: The specified repository or issue does not exist or does not have the issue tracker enabled.
                ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_repositories_by_workspace_by_repo_slug_issues_by_issue_id_changes(
                issue_id, repo_slug, workspace, q=q, sort=sort, request_options=request_options
            ),
        )

    async def get_repositories_by_workspace_by_repo_slug_issues_by_issue_id_changes_by_change_id(
        self,
        change_id: str,
        issue_id: str,
        repo_slug: str,
        workspace: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> IssueChange:
        """Returns the specified issue change object.

        This resource is only available on repositories that have the issue tracker enabled.

        Args:
            change_id: The issue change id
            issue_id: The issue id
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The specified issue change object.

        Raises:
            ApiError: The specified repository or issue change does not exist or does not have the issue tracker
                enabled. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_repositories_by_workspace_by_repo_slug_issues_by_issue_id_changes_by_change_id(
                change_id, issue_id, repo_slug, workspace, request_options=request_options
            ),
        )

    async def get_repositories_by_workspace_by_repo_slug_issues_by_issue_id_comments(
        self,
        issue_id: str,
        repo_slug: str,
        workspace: str,
        *,
        q: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PaginatedIssueComments:
        """Returns a paginated list of all comments that were made on the specified issue.

        The default sorting is oldest to newest and can be overridden with the ``sort`` query parameter.

        This endpoint also supports filtering and sorting of the results. See filtering and sorting for more details.

        Args:
            issue_id: The issue id
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            q: Query string to narrow down the response as per `filtering and sorting
                </cloud/bitbucket/rest/intro/#filtering>`__.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A paginated list of issue comments.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.get_repositories_by_workspace_by_repo_slug_issues_by_issue_id_comments(
                issue_id, repo_slug, workspace, q=q, request_options=request_options
            ),
        )

    async def get_repositories_by_workspace_by_repo_slug_issues_by_issue_id_comments_by_comment_id(
        self,
        comment_id: int,
        issue_id: str,
        repo_slug: str,
        workspace: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> IssueComment:
        """Returns the specified issue comment object.

        Args:
            comment_id: The id of the comment.
            issue_id: The issue id
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The issue comment.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.get_repositories_by_workspace_by_repo_slug_issues_by_issue_id_comments_by_comment_id(
                comment_id, issue_id, repo_slug, workspace, request_options=request_options
            ),
        )

    async def get_repositories_by_workspace_by_repo_slug_issues_by_issue_id_vote(
        self, issue_id: str, repo_slug: str, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Error:
        """Check whether the authenticated user has voted for this issue. A 204 status code indicates that the user has
        voted, while a 404 implies they haven't.

        Args:
            issue_id: The issue id
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            If the authenticated user has not voted for this issue.

        Raises:
            ApiError: When the request wasn't authenticated. If the authenticated user has not voted for this issue, or
                when the repo does not exist, or does not have an issue tracker. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_repositories_by_workspace_by_repo_slug_issues_by_issue_id_vote(
                issue_id, repo_slug, workspace, request_options=request_options
            ),
        )

    async def get_repositories_by_workspace_by_repo_slug_issues_by_issue_id_watch(
        self, issue_id: str, repo_slug: str, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Error:
        """Indicated whether or not the authenticated user is watching this issue.

        Args:
            issue_id: The issue id
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            If the authenticated user is watching this issue.

        Raises:
            ApiError: When the request wasn't authenticated. If the authenticated user is not watching this issue, or
                when the repo does not exist, or does not have an issue tracker. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_repositories_by_workspace_by_repo_slug_issues_by_issue_id_watch(
                issue_id, repo_slug, workspace, request_options=request_options
            ),
        )

    async def get_repositories_by_workspace_by_repo_slug_issues_export_repo_name_issues_task_id_zip(
        self,
        repo_name: str,
        repo_slug: str,
        task_id: str,
        workspace: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> IssueJobStatus:
        """This endpoint is used to poll for the progress of an issue export job and return the zip file after the job
        is complete. As long as the job is running, this will return a 202 response with in the response body a
        description of the current status.

        After the job has been scheduled, but before it starts executing, the endpoint returns a 202 response with
        status ``ACCEPTED``.

        Once it starts running, it is a 202 response with status ``STARTED`` and progress filled.

        After it is finished, it becomes a 200 response with status ``SUCCESS`` or ``FAILURE``.

        Args:
            repo_name: The name of the repo
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            task_id: The ID of the export task
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Export job accepted

        Raises:
            ApiError: The request wasn't authenticated properly When the authenticated user does not have admin
                permission on the repo No export job has begun ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_repositories_by_workspace_by_repo_slug_issues_export_repo_name_issues_task_id_zip(
                repo_name, repo_slug, task_id, workspace, request_options=request_options
            ),
        )

    async def get_repositories_by_workspace_by_repo_slug_issues_import(
        self, repo_slug: str, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> IssueJobStatus:
        """When using GET, this endpoint reports the status of the current import task.

        After the job has been scheduled, but before it starts executing, the endpoint returns a 202 response with
        status ``ACCEPTED``.

        Once it starts running, it is a 202 response with status ``STARTED`` and progress filled.

        After it is finished, it becomes a 200 response with status ``SUCCESS`` or ``FAILURE``.

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Import job complete with either FAILURE or SUCCESS status

        Raises:
            ApiError: The request wasn't authenticated properly When the authenticated user does not have admin
                permission on the repo No export job has begun ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_repositories_by_workspace_by_repo_slug_issues_import(
                repo_slug, workspace, request_options=request_options
            ),
        )

    async def get_repositories_by_workspace_by_repo_slug_milestones(
        self, repo_slug: str, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> PaginatedMilestones:
        """Returns the milestones that have been defined in the issue tracker.

        This resource is only available on repositories that have the issue tracker enabled.

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The milestones that have been defined in the issue tracker.

        Raises:
            ApiError: The specified repository does not exist or does not have the issue tracker enabled. ``error`` is
                ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_repositories_by_workspace_by_repo_slug_milestones(
                repo_slug, workspace, request_options=request_options
            ),
        )

    async def get_repositories_by_workspace_by_repo_slug_milestones_by_milestone_id(
        self,
        milestone_id: int,
        repo_slug: str,
        workspace: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Milestone:
        """Returns the specified issue tracker milestone object.

        Args:
            milestone_id: The milestone's id
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The specified milestone object.

        Raises:
            ApiError: The specified repository or milestone does not exist or does not have the issue tracker enabled.
                ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_repositories_by_workspace_by_repo_slug_milestones_by_milestone_id(
                milestone_id, repo_slug, workspace, request_options=request_options
            ),
        )

    async def get_repositories_by_workspace_by_repo_slug_versions(
        self, repo_slug: str, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> PaginatedVersions:
        """Returns the versions that have been defined in the issue tracker.

        This resource is only available on repositories that have the issue tracker enabled.

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The versions that have been defined in the issue tracker.

        Raises:
            ApiError: The specified repository does not exist or does not have the issue tracker enabled. ``error`` is
                ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_repositories_by_workspace_by_repo_slug_versions(
                repo_slug, workspace, request_options=request_options
            ),
        )

    async def get_repositories_by_workspace_by_repo_slug_versions_by_version_id(
        self,
        repo_slug: str,
        version_id: int,
        workspace: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Version:
        """Returns the specified issue tracker version object.

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            version_id: The version's id
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The specified version object.

        Raises:
            ApiError: The specified repository or version does not exist or does not have the issue tracker enabled.
                ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_repositories_by_workspace_by_repo_slug_versions_by_version_id(
                repo_slug, version_id, workspace, request_options=request_options
            ),
        )

    async def post_repositories_by_workspace_by_repo_slug_issues(
        self,
        repo_slug: str,
        workspace: str,
        body: Issue | IssueDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Issue:
        """Creates a new issue.

        This call requires authentication. Private repositories or private issue trackers require the caller to
        authenticate with an account that has appropriate authorization.

        The authenticated user is used for the issue's ``reporter`` field.

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            body: The new issue. The only required element is ``title``. All other elements can be omitted from the
                body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The newly created issue.

        Raises:
            ApiError: When the request wasn't authenticated. When the authenticated user isn't authorized to create the
                issue. The specified repository does not exist or does not have the issue tracker enabled. ``error`` is
                ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.post_repositories_by_workspace_by_repo_slug_issues(
                repo_slug, workspace, body, request_options=request_options
            ),
        )

    async def post_repositories_by_workspace_by_repo_slug_issues_by_issue_id_attachments(
        self, issue_id: str, repo_slug: str, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Upload new issue attachments.

        To upload files, perform a ``multipart/form-data`` POST containing one or more file fields.

        When a file is uploaded with the same name as an existing attachment, then the existing file will be replaced.

        Args:
            issue_id: The issue id
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An empty response document.

        Raises:
            ApiError: If no files were uploaded, or if the wrong ``Content-Type`` was used. If the issue tracker is
                private and the request was not authenticated. The specified repository or issue does not exist or does
                not have the issue tracker enabled. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.post_repositories_by_workspace_by_repo_slug_issues_by_issue_id_attachments(
                issue_id, repo_slug, workspace, request_options=request_options
            ),
        )

    async def post_repositories_by_workspace_by_repo_slug_issues_by_issue_id_changes(
        self,
        issue_id: str,
        repo_slug: str,
        workspace: str,
        body: IssueChange | IssueChangeDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> IssueChange:
        r"""Makes a change to the specified issue.

        For example, to change an issue's state and assignee, create a new change object that modifies these fields:

        ```
        curl https://api.bitbucket.org/2.0/site/master/issues/1234/changes \ -s -u evzijst -X POST -H "Content-Type:
        application/json" \ -d '{ "changes": { "assignee_account_id": { "new":
        "557058:c0b72ad0-1cb5-4018-9cdc-0cde8492c443"
        },
        "state": { "new": 'resolved"
        }
        }
        "message": { "raw": "This is now resolved."
        }
        }'
        ```

        The above example also includes a custom comment to go alongside the change. This comment will also be visible
        on the issue page in the UI.

        The fields of the ``changes`` object are strings, not objects. This allows for immutable change log records,
        even after user accounts, milestones, or other objects recorded in a change entry, get renamed or deleted.

        The ``assignee_account_id`` field stores the account id. When POSTing a new change and changing the assignee,
        the client should therefore use the user's account_id in the ``changes.assignee_account_id.new`` field.

        This call requires authentication. Private repositories or private issue trackers require the caller to
        authenticate with an account that has appropriate authorization.

        Args:
            issue_id: The issue id
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            body: The new issue state change. The only required elements are ``changes.[].new``. All other elements can
                be omitted from the body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The newly created issue change.

        Raises:
            ApiError: When the request wasn't authenticated. When the authenticated user isn't authorized to modify the
                issue. The specified repository or issue does not exist or does not have the issue tracker enabled.
                ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.post_repositories_by_workspace_by_repo_slug_issues_by_issue_id_changes(
                issue_id, repo_slug, workspace, body, request_options=request_options
            ),
        )

    async def post_repositories_by_workspace_by_repo_slug_issues_by_issue_id_comments(
        self,
        issue_id: str,
        repo_slug: str,
        workspace: str,
        body: IssueComment | IssueCommentDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        r"""Creates a new issue comment.

        ```
        $ curl https://api.bitbucket.org/2.0/repositories/atlassian/prlinks/issues/42/comments/ \ -X POST -u evzijst \
        -H 'Content-Type: application/json' \ -d '{"content": {"raw": "Lorem ipsum."}}'
        ```

        Args:
            issue_id: The issue id
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            body: The new issue comment object.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The newly created comment.

        Raises:
            ApiError: If the input was invalid, or if the comment being created is detected as spam ``error`` is ``Error
                | RawError``."""
        return unwrap(
            await self._with_raw_response.post_repositories_by_workspace_by_repo_slug_issues_by_issue_id_comments(
                issue_id, repo_slug, workspace, body, request_options=request_options
            ),
        )

    async def post_repositories_by_workspace_by_repo_slug_issues_export(
        self,
        repo_slug: str,
        workspace: str,
        *,
        body: ExportOptions | ExportOptionsDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """A POST request to this endpoint initiates a new background celery task that archives the repo's issues.

        When the job has been accepted, it will return a 202 (Accepted) along with a unique url to this job in the
        'Location' response header. This url is the endpoint for where the user can obtain their zip files."

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            body: The options to apply to the export. Available options include ``project_key`` and ``project_name``
                which, if specified, are used as the project key and name in the exported Jira json format. Option
                ``send_email`` specifies whether an email should be sent upon export result. Option
                ``include_attachments`` specifies whether attachments are included in the export.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The export job has been accepted

        Raises:
            ApiError: The request wasn't authenticated properly When the authenticated user does not have admin
                permission on the repo The repo does not exist or does not have an issue tracker ``error`` is ``Error |
                RawError``."""
        return unwrap(
            await self._with_raw_response.post_repositories_by_workspace_by_repo_slug_issues_export(
                repo_slug, workspace, body=body, request_options=request_options
            ),
        )

    async def post_repositories_by_workspace_by_repo_slug_issues_import(
        self, repo_slug: str, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> IssueJobStatus:
        """A POST request to this endpoint will import the zip file given by the archive parameter into the repository.
        All existing issues will be deleted and replaced by the contents of the imported zip file.

        Imports are done through a multipart/form-data POST. There is one valid and required form field, with the name
        "archive," which needs to be a file field:

        ```
        $ curl -u -X POST -F archive=@/path/to/file.zip https://api.bitbucket.org/2.0/repositories///issues/import
        ```

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Import job accepted

        Raises:
            ApiError: The request wasn't authenticated properly When the authenticated user does not have admin
                permission on the repo No export job has begun Import already running ``error`` is ``Error |
                RawError``."""
        return unwrap(
            await self._with_raw_response.post_repositories_by_workspace_by_repo_slug_issues_import(
                repo_slug, workspace, request_options=request_options
            ),
        )

    async def put_repositories_by_workspace_by_repo_slug_issues_by_issue_id(
        self, issue_id: str, repo_slug: str, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Issue:
        r"""Modifies the issue.

        ```
        $ curl https://api.bitbucket.org/2.0/repostories/evzijst/dogslow/issues/123 \ -u evzijst -s -X PUT -H
        'Content-Type: application/json' \ -d '{ "title": "Updated title", "assignee": { "account_id":
        "5d5355e8c6b9320d9ea5b28d"
        },
        "priority": "minor", "version": { "name": "1.0"
        },
        "component": null
        }'
        ```

        This example changes the ``title``, ``assignee``, ``priority`` and the ``version``. It also removes the value of
        the ``component`` from the issue by setting the field to ``null``. Any field not present keeps its existing
        value.

        Each time an issue is edited in the UI or through the API, an immutable change record is created under the
        ``/issues/123/changes`` endpoint. It also has a comment associated with the change.

        Args:
            issue_id: The issue id
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The updated issue object.

        Raises:
            ApiError: When the authenticated user isn't authorized to access the issue. The specified repository or
                issue does not exist or does not have the issue tracker enabled. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.put_repositories_by_workspace_by_repo_slug_issues_by_issue_id(
                issue_id, repo_slug, workspace, request_options=request_options
            ),
        )

    async def put_repositories_by_workspace_by_repo_slug_issues_by_issue_id_comments_by_comment_id(
        self,
        comment_id: int,
        issue_id: str,
        repo_slug: str,
        workspace: str,
        body: IssueComment | IssueCommentDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> IssueComment:
        r"""Updates the content of the specified issue comment. Note that only the ``content.raw`` field can be
        modified.

        ```
        $ curl https://api.bitbucket.org/2.0/repositories/atlassian/prlinks/issues/42/comments/5728901 \ -X PUT -u
        evzijst \ -H 'Content-Type: application/json' \ -d '{"content": {"raw": "Lorem ipsum."}'
        ```

        Args:
            comment_id: The id of the comment.
            issue_id: The issue id
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            body: The updated comment.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The updated issue comment.

        Raises:
            ApiError: If the input was invalid, or if the update to the comment is detected as spam ``error`` is ``Error
                | RawError``."""
        return unwrap(
            await self._with_raw_response.put_repositories_by_workspace_by_repo_slug_issues_by_issue_id_comments_by_comment_id(
                comment_id, issue_id, repo_slug, workspace, body, request_options=request_options
            ),
        )

    async def put_repositories_by_workspace_by_repo_slug_issues_by_issue_id_vote(
        self, issue_id: str, repo_slug: str, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Error:
        """Vote for this issue.

        To cast your vote, do an empty PUT. The 204 status code indicates that the operation was successful.

        Args:
            issue_id: The issue id
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Indicating the authenticated user has cast their vote successfully.

        Raises:
            ApiError: When the request wasn't authenticated. The specified repository or issue does not exist or does
                not have the issue tracker enabled. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.put_repositories_by_workspace_by_repo_slug_issues_by_issue_id_vote(
                issue_id, repo_slug, workspace, request_options=request_options
            ),
        )

    async def put_repositories_by_workspace_by_repo_slug_issues_by_issue_id_watch(
        self, issue_id: str, repo_slug: str, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Error:
        """Start watching this issue.

        To start watching this issue, do an empty PUT. The 204 status code indicates that the operation was successful.

        Args:
            issue_id: The issue id
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Indicates that the authenticated user successfully started watching this issue.

        Raises:
            ApiError: When the request wasn't authenticated. If the authenticated user is not watching this issue, or
                when the repo does not exist, or does not have an issue tracker. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.put_repositories_by_workspace_by_repo_slug_issues_by_issue_id_watch(
                issue_id, repo_slug, workspace, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncIssueTrackerWithRawResponse:
        return self._with_raw_response


class IssueTrackerWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def delete_repositories_by_workspace_by_repo_slug_issues_by_issue_id(
        self, issue_id: str, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdErrorBody]:
        """Deletes the specified issue. This requires write access to the repository.

        Args:
            issue_id: The issue id
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
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/issues/{issue_id}"),
            path_params=[
                param[str]("issue_id", issue_id), param[str]("repo_slug", repo_slug), param[str]("workspace", workspace)
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=empty_response,
            error_mapper=delete_repositories_by_workspace_by_repo_slug_issues_by_issue_id_error_mapper,
            request_options=request_options,
        )

    def delete_repositories_by_workspace_by_repo_slug_issues_by_issue_id_attachments_by_path(
        self,
        issue_id: str,
        path: str,
        repo_slug: str,
        workspace: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DeleteRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdAttachmentsByPathErrorBody]:
        """Deletes an attachment.

        Args:
            issue_id: The issue id
            path: Path to the file.
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
                "/repositories/{workspace}/{repo_slug}/issues/{issue_id}/attachments/{path}"
            ),
            path_params=[
                param[str]("issue_id", issue_id),
                param[str]("path", path),
                param[str]("repo_slug", repo_slug),
                param[str]("workspace", workspace),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=empty_response,
            error_mapper=delete_repositories_by_workspace_by_repo_slug_issues_by_issue_id_attachments_by_path_error_mapper,
            request_options=request_options,
        )

    def delete_repositories_by_workspace_by_repo_slug_issues_by_issue_id_comments_by_comment_id(
        self,
        comment_id: int,
        issue_id: str,
        repo_slug: str,
        workspace: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, RawError]:
        """Deletes the specified comment.

        Args:
            comment_id: The id of the comment.
            issue_id: The issue id
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
                "/repositories/{workspace}/{repo_slug}/issues/{issue_id}/comments/{comment_id}"
            ),
            path_params=[
                param[int]("comment_id", comment_id),
                param[str]("issue_id", issue_id),
                param[str]("repo_slug", repo_slug),
                param[str]("workspace", workspace),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=empty_response,
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def delete_repositories_by_workspace_by_repo_slug_issues_by_issue_id_vote(
        self, issue_id: str, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Error, RawError]:
        """Retract your vote.

        Args:
            issue_id: The issue id
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
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/issues/{issue_id}/vote"),
            path_params=[
                param[str]("issue_id", issue_id), param[str]("repo_slug", repo_slug), param[str]("workspace", workspace)
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[Error],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def delete_repositories_by_workspace_by_repo_slug_issues_by_issue_id_watch(
        self, issue_id: str, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Error, DeleteRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdWatchErrorBody]:
        """Stop watching this issue.

        Args:
            issue_id: The issue id
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
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/issues/{issue_id}/watch"),
            path_params=[
                param[str]("issue_id", issue_id), param[str]("repo_slug", repo_slug), param[str]("workspace", workspace)
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[Error],
            error_mapper=delete_repositories_by_workspace_by_repo_slug_issues_by_issue_id_watch_error_mapper,
            request_options=request_options,
        )

    def get_repositories_by_workspace_by_repo_slug_components(
        self, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[PaginatedComponents, GetRepositoriesByWorkspaceByRepoSlugComponentsErrorBody]:
        """Returns the components that have been defined in the issue tracker.

        This resource is only available on repositories that have the issue tracker enabled.

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
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/components"),
            path_params=[param[str]("repo_slug", repo_slug), param[str]("workspace", workspace)],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[PaginatedComponents],
            error_mapper=get_repositories_by_workspace_by_repo_slug_components_error_mapper,
            request_options=request_options,
        )

    def get_repositories_by_workspace_by_repo_slug_components_by_component_id(
        self, component_id: int, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Component, GetRepositoriesByWorkspaceByRepoSlugComponentsByComponentIdErrorBody]:
        """Returns the specified issue tracker component object.

        Args:
            component_id: The component's id
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
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/components/{component_id}"),
            path_params=[
                param[int]("component_id", component_id),
                param[str]("repo_slug", repo_slug),
                param[str]("workspace", workspace),
            ],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[Component],
            error_mapper=get_repositories_by_workspace_by_repo_slug_components_by_component_id_error_mapper,
            request_options=request_options,
        )

    def get_repositories_by_workspace_by_repo_slug_issues(
        self, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[PaginatedIssues, GetRepositoriesByWorkspaceByRepoSlugIssuesErrorBody]:
        """Returns the issues in the issue tracker.

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
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/issues"),
            path_params=[param[str]("repo_slug", repo_slug), param[str]("workspace", workspace)],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[PaginatedIssues],
            error_mapper=get_repositories_by_workspace_by_repo_slug_issues_error_mapper,
            request_options=request_options,
        )

    def get_repositories_by_workspace_by_repo_slug_issues_by_issue_id(
        self, issue_id: str, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Issue, GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdErrorBody]:
        """Returns the specified issue.

        Args:
            issue_id: The issue id
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
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/issues/{issue_id}"),
            path_params=[
                param[str]("issue_id", issue_id), param[str]("repo_slug", repo_slug), param[str]("workspace", workspace)
            ],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[Issue],
            error_mapper=get_repositories_by_workspace_by_repo_slug_issues_by_issue_id_error_mapper,
            request_options=request_options,
        )

    def get_repositories_by_workspace_by_repo_slug_issues_by_issue_id_attachments(
        self, issue_id: str, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[PaginatedIssueAttachment, GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdAttachmentsErrorBody]:
        """Returns all attachments for this issue.

        This returns the files' meta data. This does not return the files' actual contents.

        The files are always ordered by their upload date.

        Args:
            issue_id: The issue id
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
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/issues/{issue_id}/attachments"),
            path_params=[
                param[str]("issue_id", issue_id), param[str]("repo_slug", repo_slug), param[str]("workspace", workspace)
            ],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[PaginatedIssueAttachment],
            error_mapper=get_repositories_by_workspace_by_repo_slug_issues_by_issue_id_attachments_error_mapper,
            request_options=request_options,
        )

    def get_repositories_by_workspace_by_repo_slug_issues_by_issue_id_attachments_by_path(
        self,
        issue_id: str,
        path: str,
        repo_slug: str,
        workspace: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdAttachmentsByPathErrorBody]:
        """Returns the contents of the specified file attachment.

        Note that this endpoint does not return a JSON response, but instead returns a redirect pointing to the actual
        file that in turn will return the raw contents.

        The redirect URL contains a one-time token that has a limited lifetime. As a result, the link should not be
        persisted, stored, or shared.

        Args:
            issue_id: The issue id
            path: Path to the file.
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
                "/repositories/{workspace}/{repo_slug}/issues/{issue_id}/attachments/{path}"
            ),
            path_params=[
                param[str]("issue_id", issue_id),
                param[str]("path", path),
                param[str]("repo_slug", repo_slug),
                param[str]("workspace", workspace),
            ],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=empty_response,
            error_mapper=get_repositories_by_workspace_by_repo_slug_issues_by_issue_id_attachments_by_path_error_mapper,
            request_options=request_options,
        )

    def get_repositories_by_workspace_by_repo_slug_issues_by_issue_id_changes(
        self,
        issue_id: str,
        repo_slug: str,
        workspace: str,
        *,
        q: str | None = None,
        sort: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PaginatedLogEntries, GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdChangesErrorBody]:
        r"""Returns the list of all changes that have been made to the specified issue. Changes are returned in
        chronological order with the oldest change first.

        Each time an issue is edited in the UI or through the API, an immutable change record is created under the
        ``/issues/123/changes`` endpoint. It also has a comment associated with the change.

        Note that this operation is changing significantly, due to privacy changes. See the announcement for details.

        Changes support filtering and sorting that can be used to search for specific changes. For instance, to see when
        an issue transitioned to "resolved":

        ```
        $ curl -s https://api.bitbucket.org/2.0/repositories/site/master/issues/1/changes \ -G
        --data-urlencode='q=changes.state.new = "resolved"'
        ```

        This resource is only available on repositories that have the issue tracker enabled.

        N.B.

        The ``changes.assignee`` and ``changes.assignee_account_id`` fields are not a ``user`` object. Instead, they
        contain the raw ``username`` and ``account_id`` of the user. This is to protect the integrity of the audit log
        even after a user account gets deleted.

        The ``changes.assignee`` field is deprecated will disappear in the future. Use ``changes.assignee_account_id``
        instead.

        Args:
            issue_id: The issue id
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
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
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/issues/{issue_id}/changes"),
            path_params=[
                param[str]("issue_id", issue_id), param[str]("repo_slug", repo_slug), param[str]("workspace", workspace)
            ],
            query_params=[param[str | None]("q", q), param[str | None]("sort", sort)],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[PaginatedLogEntries],
            error_mapper=get_repositories_by_workspace_by_repo_slug_issues_by_issue_id_changes_error_mapper,
            request_options=request_options,
        )

    def get_repositories_by_workspace_by_repo_slug_issues_by_issue_id_changes_by_change_id(
        self,
        change_id: str,
        issue_id: str,
        repo_slug: str,
        workspace: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[IssueChange, GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdChangesByChangeIdErrorBody]:
        """Returns the specified issue change object.

        This resource is only available on repositories that have the issue tracker enabled.

        Args:
            change_id: The issue change id
            issue_id: The issue id
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
                "/repositories/{workspace}/{repo_slug}/issues/{issue_id}/changes/{change_id}"
            ),
            path_params=[
                param[str]("change_id", change_id),
                param[str]("issue_id", issue_id),
                param[str]("repo_slug", repo_slug),
                param[str]("workspace", workspace),
            ],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[IssueChange],
            error_mapper=get_repositories_by_workspace_by_repo_slug_issues_by_issue_id_changes_by_change_id_error_mapper,
            request_options=request_options,
        )

    def get_repositories_by_workspace_by_repo_slug_issues_by_issue_id_comments(
        self,
        issue_id: str,
        repo_slug: str,
        workspace: str,
        *,
        q: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PaginatedIssueComments, RawError]:
        """Returns a paginated list of all comments that were made on the specified issue.

        The default sorting is oldest to newest and can be overridden with the ``sort`` query parameter.

        This endpoint also supports filtering and sorting of the results. See filtering and sorting for more details.

        Args:
            issue_id: The issue id
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
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
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/issues/{issue_id}/comments"),
            path_params=[
                param[str]("issue_id", issue_id), param[str]("repo_slug", repo_slug), param[str]("workspace", workspace)
            ],
            query_params=[param[str | None]("q", q)],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[PaginatedIssueComments],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def get_repositories_by_workspace_by_repo_slug_issues_by_issue_id_comments_by_comment_id(
        self,
        comment_id: int,
        issue_id: str,
        repo_slug: str,
        workspace: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[IssueComment, RawError]:
        """Returns the specified issue comment object.

        Args:
            comment_id: The id of the comment.
            issue_id: The issue id
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
                "/repositories/{workspace}/{repo_slug}/issues/{issue_id}/comments/{comment_id}"
            ),
            path_params=[
                param[int]("comment_id", comment_id),
                param[str]("issue_id", issue_id),
                param[str]("repo_slug", repo_slug),
                param[str]("workspace", workspace),
            ],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[IssueComment],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def get_repositories_by_workspace_by_repo_slug_issues_by_issue_id_vote(
        self, issue_id: str, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Error, GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdVoteErrorBody]:
        """Check whether the authenticated user has voted for this issue. A 204 status code indicates that the user has
        voted, while a 404 implies they haven't.

        Args:
            issue_id: The issue id
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
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/issues/{issue_id}/vote"),
            path_params=[
                param[str]("issue_id", issue_id), param[str]("repo_slug", repo_slug), param[str]("workspace", workspace)
            ],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[Error],
            error_mapper=get_repositories_by_workspace_by_repo_slug_issues_by_issue_id_vote_error_mapper,
            request_options=request_options,
        )

    def get_repositories_by_workspace_by_repo_slug_issues_by_issue_id_watch(
        self, issue_id: str, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Error, GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdWatchErrorBody]:
        """Indicated whether or not the authenticated user is watching this issue.

        Args:
            issue_id: The issue id
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
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/issues/{issue_id}/watch"),
            path_params=[
                param[str]("issue_id", issue_id), param[str]("repo_slug", repo_slug), param[str]("workspace", workspace)
            ],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[Error],
            error_mapper=get_repositories_by_workspace_by_repo_slug_issues_by_issue_id_watch_error_mapper,
            request_options=request_options,
        )

    def get_repositories_by_workspace_by_repo_slug_issues_export_repo_name_issues_task_id_zip(
        self,
        repo_name: str,
        repo_slug: str,
        task_id: str,
        workspace: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[IssueJobStatus, GetRepositoriesByWorkspaceByRepoSlugIssuesExportRepoNameIssuesTaskIdZipErrorBody]:
        """This endpoint is used to poll for the progress of an issue export job and return the zip file after the job
        is complete. As long as the job is running, this will return a 202 response with in the response body a
        description of the current status.

        After the job has been scheduled, but before it starts executing, the endpoint returns a 202 response with
        status ``ACCEPTED``.

        Once it starts running, it is a 202 response with status ``STARTED`` and progress filled.

        After it is finished, it becomes a 200 response with status ``SUCCESS`` or ``FAILURE``.

        Args:
            repo_name: The name of the repo
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            task_id: The ID of the export task
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/repositories/{workspace}/{repo_slug}/issues/export/{repo_name}-issues-{task_id}.zip"
            ),
            path_params=[
                param[str]("repo_name", repo_name),
                param[str]("repo_slug", repo_slug),
                param[str]("task_id", task_id),
                param[str]("workspace", workspace),
            ],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[IssueJobStatus],
            error_mapper=get_repositories_by_workspace_by_repo_slug_issues_export_repo_name_issues_task_id_zip_error_mapper,
            request_options=request_options,
        )

    def get_repositories_by_workspace_by_repo_slug_issues_import(
        self, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[IssueJobStatus, GetRepositoriesByWorkspaceByRepoSlugIssuesImportErrorBody]:
        """When using GET, this endpoint reports the status of the current import task.

        After the job has been scheduled, but before it starts executing, the endpoint returns a 202 response with
        status ``ACCEPTED``.

        Once it starts running, it is a 202 response with status ``STARTED`` and progress filled.

        After it is finished, it becomes a 200 response with status ``SUCCESS`` or ``FAILURE``.

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
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/issues/import"),
            path_params=[param[str]("repo_slug", repo_slug), param[str]("workspace", workspace)],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[IssueJobStatus],
            error_mapper=get_repositories_by_workspace_by_repo_slug_issues_import_error_mapper,
            request_options=request_options,
        )

    def get_repositories_by_workspace_by_repo_slug_milestones(
        self, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[PaginatedMilestones, GetRepositoriesByWorkspaceByRepoSlugMilestonesErrorBody]:
        """Returns the milestones that have been defined in the issue tracker.

        This resource is only available on repositories that have the issue tracker enabled.

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
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/milestones"),
            path_params=[param[str]("repo_slug", repo_slug), param[str]("workspace", workspace)],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[PaginatedMilestones],
            error_mapper=get_repositories_by_workspace_by_repo_slug_milestones_error_mapper,
            request_options=request_options,
        )

    def get_repositories_by_workspace_by_repo_slug_milestones_by_milestone_id(
        self, milestone_id: int, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Milestone, GetRepositoriesByWorkspaceByRepoSlugMilestonesByMilestoneIdErrorBody]:
        """Returns the specified issue tracker milestone object.

        Args:
            milestone_id: The milestone's id
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
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/milestones/{milestone_id}"),
            path_params=[
                param[int]("milestone_id", milestone_id),
                param[str]("repo_slug", repo_slug),
                param[str]("workspace", workspace),
            ],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[Milestone],
            error_mapper=get_repositories_by_workspace_by_repo_slug_milestones_by_milestone_id_error_mapper,
            request_options=request_options,
        )

    def get_repositories_by_workspace_by_repo_slug_versions(
        self, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[PaginatedVersions, GetRepositoriesByWorkspaceByRepoSlugVersionsErrorBody]:
        """Returns the versions that have been defined in the issue tracker.

        This resource is only available on repositories that have the issue tracker enabled.

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
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/versions"),
            path_params=[param[str]("repo_slug", repo_slug), param[str]("workspace", workspace)],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[PaginatedVersions],
            error_mapper=get_repositories_by_workspace_by_repo_slug_versions_error_mapper,
            request_options=request_options,
        )

    def get_repositories_by_workspace_by_repo_slug_versions_by_version_id(
        self, repo_slug: str, version_id: int, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Version, GetRepositoriesByWorkspaceByRepoSlugVersionsByVersionIdErrorBody]:
        """Returns the specified issue tracker version object.

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            version_id: The version's id
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/versions/{version_id}"),
            path_params=[
                param[str]("repo_slug", repo_slug),
                param[int]("version_id", version_id),
                param[str]("workspace", workspace),
            ],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[Version],
            error_mapper=get_repositories_by_workspace_by_repo_slug_versions_by_version_id_error_mapper,
            request_options=request_options,
        )

    def post_repositories_by_workspace_by_repo_slug_issues(
        self,
        repo_slug: str,
        workspace: str,
        body: Issue | IssueDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Issue, PostRepositoriesByWorkspaceByRepoSlugIssuesErrorBody]:
        """Creates a new issue.

        This call requires authentication. Private repositories or private issue trackers require the caller to
        authenticate with an account that has appropriate authorization.

        The authenticated user is used for the issue's ``reporter`` field.

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            body: The new issue. The only required element is ``title``. All other elements can be omitted from the
                body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/issues"),
            path_params=[param[str]("repo_slug", repo_slug), param[str]("workspace", workspace)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[Issue | IssueDict](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[Issue],
            error_mapper=post_repositories_by_workspace_by_repo_slug_issues_error_mapper,
            request_options=request_options,
        )

    def post_repositories_by_workspace_by_repo_slug_issues_by_issue_id_attachments(
        self, issue_id: str, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, PostRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdAttachmentsErrorBody]:
        """Upload new issue attachments.

        To upload files, perform a ``multipart/form-data`` POST containing one or more file fields.

        When a file is uploaded with the same name as an existing attachment, then the existing file will be replaced.

        Args:
            issue_id: The issue id
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
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/issues/{issue_id}/attachments"),
            path_params=[
                param[str]("issue_id", issue_id), param[str]("repo_slug", repo_slug), param[str]("workspace", workspace)
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=empty_response,
            error_mapper=post_repositories_by_workspace_by_repo_slug_issues_by_issue_id_attachments_error_mapper,
            request_options=request_options,
        )

    def post_repositories_by_workspace_by_repo_slug_issues_by_issue_id_changes(
        self,
        issue_id: str,
        repo_slug: str,
        workspace: str,
        body: IssueChange | IssueChangeDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[IssueChange, PostRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdChangesErrorBody]:
        r"""Makes a change to the specified issue.

        For example, to change an issue's state and assignee, create a new change object that modifies these fields:

        ```
        curl https://api.bitbucket.org/2.0/site/master/issues/1234/changes \ -s -u evzijst -X POST -H "Content-Type:
        application/json" \ -d '{ "changes": { "assignee_account_id": { "new":
        "557058:c0b72ad0-1cb5-4018-9cdc-0cde8492c443"
        },
        "state": { "new": 'resolved"
        }
        }
        "message": { "raw": "This is now resolved."
        }
        }'
        ```

        The above example also includes a custom comment to go alongside the change. This comment will also be visible
        on the issue page in the UI.

        The fields of the ``changes`` object are strings, not objects. This allows for immutable change log records,
        even after user accounts, milestones, or other objects recorded in a change entry, get renamed or deleted.

        The ``assignee_account_id`` field stores the account id. When POSTing a new change and changing the assignee,
        the client should therefore use the user's account_id in the ``changes.assignee_account_id.new`` field.

        This call requires authentication. Private repositories or private issue trackers require the caller to
        authenticate with an account that has appropriate authorization.

        Args:
            issue_id: The issue id
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            body: The new issue state change. The only required elements are ``changes.[].new``. All other elements can
                be omitted from the body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/issues/{issue_id}/changes"),
            path_params=[
                param[str]("issue_id", issue_id), param[str]("repo_slug", repo_slug), param[str]("workspace", workspace)
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[IssueChange | IssueChangeDict](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[IssueChange],
            error_mapper=post_repositories_by_workspace_by_repo_slug_issues_by_issue_id_changes_error_mapper,
            request_options=request_options,
        )

    def post_repositories_by_workspace_by_repo_slug_issues_by_issue_id_comments(
        self,
        issue_id: str,
        repo_slug: str,
        workspace: str,
        body: IssueComment | IssueCommentDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, PostRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdCommentsErrorBody]:
        r"""Creates a new issue comment.

        ```
        $ curl https://api.bitbucket.org/2.0/repositories/atlassian/prlinks/issues/42/comments/ \ -X POST -u evzijst \
        -H 'Content-Type: application/json' \ -d '{"content": {"raw": "Lorem ipsum."}}'
        ```

        Args:
            issue_id: The issue id
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            body: The new issue comment object.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/issues/{issue_id}/comments"),
            path_params=[
                param[str]("issue_id", issue_id), param[str]("repo_slug", repo_slug), param[str]("workspace", workspace)
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[IssueComment | IssueCommentDict](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=empty_response,
            error_mapper=post_repositories_by_workspace_by_repo_slug_issues_by_issue_id_comments_error_mapper,
            request_options=request_options,
        )

    def post_repositories_by_workspace_by_repo_slug_issues_export(
        self,
        repo_slug: str,
        workspace: str,
        *,
        body: ExportOptions | ExportOptionsDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, PostRepositoriesByWorkspaceByRepoSlugIssuesExportErrorBody]:
        """A POST request to this endpoint initiates a new background celery task that archives the repo's issues.

        When the job has been accepted, it will return a 202 (Accepted) along with a unique url to this job in the
        'Location' response header. This url is the endpoint for where the user can obtain their zip files."

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            body: The options to apply to the export. Available options include ``project_key`` and ``project_name``
                which, if specified, are used as the project key and name in the exported Jira json format. Option
                ``send_email`` specifies whether an email should be sent upon export result. Option
                ``include_attachments`` specifies whether attachments are included in the export.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/issues/export"),
            path_params=[param[str]("repo_slug", repo_slug), param[str]("workspace", workspace)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ExportOptions | ExportOptionsDict | None](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=empty_response,
            error_mapper=post_repositories_by_workspace_by_repo_slug_issues_export_error_mapper,
            request_options=request_options,
        )

    def post_repositories_by_workspace_by_repo_slug_issues_import(
        self, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[IssueJobStatus, PostRepositoriesByWorkspaceByRepoSlugIssuesImportErrorBody]:
        """A POST request to this endpoint will import the zip file given by the archive parameter into the repository.
        All existing issues will be deleted and replaced by the contents of the imported zip file.

        Imports are done through a multipart/form-data POST. There is one valid and required form field, with the name
        "archive," which needs to be a file field:

        ```
        $ curl -u -X POST -F archive=@/path/to/file.zip https://api.bitbucket.org/2.0/repositories///issues/import
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
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/issues/import"),
            path_params=[param[str]("repo_slug", repo_slug), param[str]("workspace", workspace)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[IssueJobStatus],
            error_mapper=post_repositories_by_workspace_by_repo_slug_issues_import_error_mapper,
            request_options=request_options,
        )

    def put_repositories_by_workspace_by_repo_slug_issues_by_issue_id(
        self, issue_id: str, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Issue, PutRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdErrorBody]:
        r"""Modifies the issue.

        ```
        $ curl https://api.bitbucket.org/2.0/repostories/evzijst/dogslow/issues/123 \ -u evzijst -s -X PUT -H
        'Content-Type: application/json' \ -d '{ "title": "Updated title", "assignee": { "account_id":
        "5d5355e8c6b9320d9ea5b28d"
        },
        "priority": "minor", "version": { "name": "1.0"
        },
        "component": null
        }'
        ```

        This example changes the ``title``, ``assignee``, ``priority`` and the ``version``. It also removes the value of
        the ``component`` from the issue by setting the field to ``null``. Any field not present keeps its existing
        value.

        Each time an issue is edited in the UI or through the API, an immutable change record is created under the
        ``/issues/123/changes`` endpoint. It also has a comment associated with the change.

        Args:
            issue_id: The issue id
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
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/issues/{issue_id}"),
            path_params=[
                param[str]("issue_id", issue_id), param[str]("repo_slug", repo_slug), param[str]("workspace", workspace)
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[Issue],
            error_mapper=put_repositories_by_workspace_by_repo_slug_issues_by_issue_id_error_mapper,
            request_options=request_options,
        )

    def put_repositories_by_workspace_by_repo_slug_issues_by_issue_id_comments_by_comment_id(
        self,
        comment_id: int,
        issue_id: str,
        repo_slug: str,
        workspace: str,
        body: IssueComment | IssueCommentDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[IssueComment, PutRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdCommentsByCommentIdErrorBody]:
        r"""Updates the content of the specified issue comment. Note that only the ``content.raw`` field can be
        modified.

        ```
        $ curl https://api.bitbucket.org/2.0/repositories/atlassian/prlinks/issues/42/comments/5728901 \ -X PUT -u
        evzijst \ -H 'Content-Type: application/json' \ -d '{"content": {"raw": "Lorem ipsum."}'
        ```

        Args:
            comment_id: The id of the comment.
            issue_id: The issue id
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            body: The updated comment.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default(
                "/repositories/{workspace}/{repo_slug}/issues/{issue_id}/comments/{comment_id}"
            ),
            path_params=[
                param[int]("comment_id", comment_id),
                param[str]("issue_id", issue_id),
                param[str]("repo_slug", repo_slug),
                param[str]("workspace", workspace),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[IssueComment | IssueCommentDict](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[IssueComment],
            error_mapper=put_repositories_by_workspace_by_repo_slug_issues_by_issue_id_comments_by_comment_id_error_mapper,
            request_options=request_options,
        )

    def put_repositories_by_workspace_by_repo_slug_issues_by_issue_id_vote(
        self, issue_id: str, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Error, PutRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdVoteErrorBody]:
        """Vote for this issue.

        To cast your vote, do an empty PUT. The 204 status code indicates that the operation was successful.

        Args:
            issue_id: The issue id
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
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/issues/{issue_id}/vote"),
            path_params=[
                param[str]("issue_id", issue_id), param[str]("repo_slug", repo_slug), param[str]("workspace", workspace)
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[Error],
            error_mapper=put_repositories_by_workspace_by_repo_slug_issues_by_issue_id_vote_error_mapper,
            request_options=request_options,
        )

    def put_repositories_by_workspace_by_repo_slug_issues_by_issue_id_watch(
        self, issue_id: str, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Error, PutRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdWatchErrorBody]:
        """Start watching this issue.

        To start watching this issue, do an empty PUT. The 204 status code indicates that the operation was successful.

        Args:
            issue_id: The issue id
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
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/issues/{issue_id}/watch"),
            path_params=[
                param[str]("issue_id", issue_id), param[str]("repo_slug", repo_slug), param[str]("workspace", workspace)
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[Error],
            error_mapper=put_repositories_by_workspace_by_repo_slug_issues_by_issue_id_watch_error_mapper,
            request_options=request_options,
        )


class AsyncIssueTrackerWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def delete_repositories_by_workspace_by_repo_slug_issues_by_issue_id(
        self, issue_id: str, repo_slug: str, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdErrorBody]:
        """Deletes the specified issue. This requires write access to the repository.

        Args:
            issue_id: The issue id
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
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/issues/{issue_id}"),
            path_params=[
                param[str]("issue_id", issue_id), param[str]("repo_slug", repo_slug), param[str]("workspace", workspace)
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_empty_response,
            error_mapper=delete_repositories_by_workspace_by_repo_slug_issues_by_issue_id_error_mapper,
            request_options=request_options,
        )

    async def delete_repositories_by_workspace_by_repo_slug_issues_by_issue_id_attachments_by_path(
        self,
        issue_id: str,
        path: str,
        repo_slug: str,
        workspace: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DeleteRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdAttachmentsByPathErrorBody]:
        """Deletes an attachment.

        Args:
            issue_id: The issue id
            path: Path to the file.
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
                "/repositories/{workspace}/{repo_slug}/issues/{issue_id}/attachments/{path}"
            ),
            path_params=[
                param[str]("issue_id", issue_id),
                param[str]("path", path),
                param[str]("repo_slug", repo_slug),
                param[str]("workspace", workspace),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_empty_response,
            error_mapper=delete_repositories_by_workspace_by_repo_slug_issues_by_issue_id_attachments_by_path_error_mapper,
            request_options=request_options,
        )

    async def delete_repositories_by_workspace_by_repo_slug_issues_by_issue_id_comments_by_comment_id(
        self,
        comment_id: int,
        issue_id: str,
        repo_slug: str,
        workspace: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, RawError]:
        """Deletes the specified comment.

        Args:
            comment_id: The id of the comment.
            issue_id: The issue id
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
                "/repositories/{workspace}/{repo_slug}/issues/{issue_id}/comments/{comment_id}"
            ),
            path_params=[
                param[int]("comment_id", comment_id),
                param[str]("issue_id", issue_id),
                param[str]("repo_slug", repo_slug),
                param[str]("workspace", workspace),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_empty_response,
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def delete_repositories_by_workspace_by_repo_slug_issues_by_issue_id_vote(
        self, issue_id: str, repo_slug: str, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Error, RawError]:
        """Retract your vote.

        Args:
            issue_id: The issue id
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
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/issues/{issue_id}/vote"),
            path_params=[
                param[str]("issue_id", issue_id), param[str]("repo_slug", repo_slug), param[str]("workspace", workspace)
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[Error],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def delete_repositories_by_workspace_by_repo_slug_issues_by_issue_id_watch(
        self, issue_id: str, repo_slug: str, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Error, DeleteRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdWatchErrorBody]:
        """Stop watching this issue.

        Args:
            issue_id: The issue id
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
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/issues/{issue_id}/watch"),
            path_params=[
                param[str]("issue_id", issue_id), param[str]("repo_slug", repo_slug), param[str]("workspace", workspace)
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[Error],
            error_mapper=delete_repositories_by_workspace_by_repo_slug_issues_by_issue_id_watch_error_mapper,
            request_options=request_options,
        )

    async def get_repositories_by_workspace_by_repo_slug_components(
        self, repo_slug: str, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[PaginatedComponents, GetRepositoriesByWorkspaceByRepoSlugComponentsErrorBody]:
        """Returns the components that have been defined in the issue tracker.

        This resource is only available on repositories that have the issue tracker enabled.

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
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/components"),
            path_params=[param[str]("repo_slug", repo_slug), param[str]("workspace", workspace)],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[PaginatedComponents],
            error_mapper=get_repositories_by_workspace_by_repo_slug_components_error_mapper,
            request_options=request_options,
        )

    async def get_repositories_by_workspace_by_repo_slug_components_by_component_id(
        self,
        component_id: int,
        repo_slug: str,
        workspace: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Component, GetRepositoriesByWorkspaceByRepoSlugComponentsByComponentIdErrorBody]:
        """Returns the specified issue tracker component object.

        Args:
            component_id: The component's id
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
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/components/{component_id}"),
            path_params=[
                param[int]("component_id", component_id),
                param[str]("repo_slug", repo_slug),
                param[str]("workspace", workspace),
            ],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[Component],
            error_mapper=get_repositories_by_workspace_by_repo_slug_components_by_component_id_error_mapper,
            request_options=request_options,
        )

    async def get_repositories_by_workspace_by_repo_slug_issues(
        self, repo_slug: str, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[PaginatedIssues, GetRepositoriesByWorkspaceByRepoSlugIssuesErrorBody]:
        """Returns the issues in the issue tracker.

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
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/issues"),
            path_params=[param[str]("repo_slug", repo_slug), param[str]("workspace", workspace)],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[PaginatedIssues],
            error_mapper=get_repositories_by_workspace_by_repo_slug_issues_error_mapper,
            request_options=request_options,
        )

    async def get_repositories_by_workspace_by_repo_slug_issues_by_issue_id(
        self, issue_id: str, repo_slug: str, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Issue, GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdErrorBody]:
        """Returns the specified issue.

        Args:
            issue_id: The issue id
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
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/issues/{issue_id}"),
            path_params=[
                param[str]("issue_id", issue_id), param[str]("repo_slug", repo_slug), param[str]("workspace", workspace)
            ],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[Issue],
            error_mapper=get_repositories_by_workspace_by_repo_slug_issues_by_issue_id_error_mapper,
            request_options=request_options,
        )

    async def get_repositories_by_workspace_by_repo_slug_issues_by_issue_id_attachments(
        self, issue_id: str, repo_slug: str, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[PaginatedIssueAttachment, GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdAttachmentsErrorBody]:
        """Returns all attachments for this issue.

        This returns the files' meta data. This does not return the files' actual contents.

        The files are always ordered by their upload date.

        Args:
            issue_id: The issue id
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
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/issues/{issue_id}/attachments"),
            path_params=[
                param[str]("issue_id", issue_id), param[str]("repo_slug", repo_slug), param[str]("workspace", workspace)
            ],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[PaginatedIssueAttachment],
            error_mapper=get_repositories_by_workspace_by_repo_slug_issues_by_issue_id_attachments_error_mapper,
            request_options=request_options,
        )

    async def get_repositories_by_workspace_by_repo_slug_issues_by_issue_id_attachments_by_path(
        self,
        issue_id: str,
        path: str,
        repo_slug: str,
        workspace: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdAttachmentsByPathErrorBody]:
        """Returns the contents of the specified file attachment.

        Note that this endpoint does not return a JSON response, but instead returns a redirect pointing to the actual
        file that in turn will return the raw contents.

        The redirect URL contains a one-time token that has a limited lifetime. As a result, the link should not be
        persisted, stored, or shared.

        Args:
            issue_id: The issue id
            path: Path to the file.
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
                "/repositories/{workspace}/{repo_slug}/issues/{issue_id}/attachments/{path}"
            ),
            path_params=[
                param[str]("issue_id", issue_id),
                param[str]("path", path),
                param[str]("repo_slug", repo_slug),
                param[str]("workspace", workspace),
            ],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_empty_response,
            error_mapper=get_repositories_by_workspace_by_repo_slug_issues_by_issue_id_attachments_by_path_error_mapper,
            request_options=request_options,
        )

    async def get_repositories_by_workspace_by_repo_slug_issues_by_issue_id_changes(
        self,
        issue_id: str,
        repo_slug: str,
        workspace: str,
        *,
        q: str | None = None,
        sort: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PaginatedLogEntries, GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdChangesErrorBody]:
        r"""Returns the list of all changes that have been made to the specified issue. Changes are returned in
        chronological order with the oldest change first.

        Each time an issue is edited in the UI or through the API, an immutable change record is created under the
        ``/issues/123/changes`` endpoint. It also has a comment associated with the change.

        Note that this operation is changing significantly, due to privacy changes. See the announcement for details.

        Changes support filtering and sorting that can be used to search for specific changes. For instance, to see when
        an issue transitioned to "resolved":

        ```
        $ curl -s https://api.bitbucket.org/2.0/repositories/site/master/issues/1/changes \ -G
        --data-urlencode='q=changes.state.new = "resolved"'
        ```

        This resource is only available on repositories that have the issue tracker enabled.

        N.B.

        The ``changes.assignee`` and ``changes.assignee_account_id`` fields are not a ``user`` object. Instead, they
        contain the raw ``username`` and ``account_id`` of the user. This is to protect the integrity of the audit log
        even after a user account gets deleted.

        The ``changes.assignee`` field is deprecated will disappear in the future. Use ``changes.assignee_account_id``
        instead.

        Args:
            issue_id: The issue id
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
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
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/issues/{issue_id}/changes"),
            path_params=[
                param[str]("issue_id", issue_id), param[str]("repo_slug", repo_slug), param[str]("workspace", workspace)
            ],
            query_params=[param[str | None]("q", q), param[str | None]("sort", sort)],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[PaginatedLogEntries],
            error_mapper=get_repositories_by_workspace_by_repo_slug_issues_by_issue_id_changes_error_mapper,
            request_options=request_options,
        )

    async def get_repositories_by_workspace_by_repo_slug_issues_by_issue_id_changes_by_change_id(
        self,
        change_id: str,
        issue_id: str,
        repo_slug: str,
        workspace: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[IssueChange, GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdChangesByChangeIdErrorBody]:
        """Returns the specified issue change object.

        This resource is only available on repositories that have the issue tracker enabled.

        Args:
            change_id: The issue change id
            issue_id: The issue id
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
                "/repositories/{workspace}/{repo_slug}/issues/{issue_id}/changes/{change_id}"
            ),
            path_params=[
                param[str]("change_id", change_id),
                param[str]("issue_id", issue_id),
                param[str]("repo_slug", repo_slug),
                param[str]("workspace", workspace),
            ],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[IssueChange],
            error_mapper=get_repositories_by_workspace_by_repo_slug_issues_by_issue_id_changes_by_change_id_error_mapper,
            request_options=request_options,
        )

    async def get_repositories_by_workspace_by_repo_slug_issues_by_issue_id_comments(
        self,
        issue_id: str,
        repo_slug: str,
        workspace: str,
        *,
        q: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PaginatedIssueComments, RawError]:
        """Returns a paginated list of all comments that were made on the specified issue.

        The default sorting is oldest to newest and can be overridden with the ``sort`` query parameter.

        This endpoint also supports filtering and sorting of the results. See filtering and sorting for more details.

        Args:
            issue_id: The issue id
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
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
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/issues/{issue_id}/comments"),
            path_params=[
                param[str]("issue_id", issue_id), param[str]("repo_slug", repo_slug), param[str]("workspace", workspace)
            ],
            query_params=[param[str | None]("q", q)],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[PaginatedIssueComments],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def get_repositories_by_workspace_by_repo_slug_issues_by_issue_id_comments_by_comment_id(
        self,
        comment_id: int,
        issue_id: str,
        repo_slug: str,
        workspace: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[IssueComment, RawError]:
        """Returns the specified issue comment object.

        Args:
            comment_id: The id of the comment.
            issue_id: The issue id
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
                "/repositories/{workspace}/{repo_slug}/issues/{issue_id}/comments/{comment_id}"
            ),
            path_params=[
                param[int]("comment_id", comment_id),
                param[str]("issue_id", issue_id),
                param[str]("repo_slug", repo_slug),
                param[str]("workspace", workspace),
            ],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[IssueComment],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def get_repositories_by_workspace_by_repo_slug_issues_by_issue_id_vote(
        self, issue_id: str, repo_slug: str, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Error, GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdVoteErrorBody]:
        """Check whether the authenticated user has voted for this issue. A 204 status code indicates that the user has
        voted, while a 404 implies they haven't.

        Args:
            issue_id: The issue id
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
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/issues/{issue_id}/vote"),
            path_params=[
                param[str]("issue_id", issue_id), param[str]("repo_slug", repo_slug), param[str]("workspace", workspace)
            ],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[Error],
            error_mapper=get_repositories_by_workspace_by_repo_slug_issues_by_issue_id_vote_error_mapper,
            request_options=request_options,
        )

    async def get_repositories_by_workspace_by_repo_slug_issues_by_issue_id_watch(
        self, issue_id: str, repo_slug: str, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Error, GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdWatchErrorBody]:
        """Indicated whether or not the authenticated user is watching this issue.

        Args:
            issue_id: The issue id
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
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/issues/{issue_id}/watch"),
            path_params=[
                param[str]("issue_id", issue_id), param[str]("repo_slug", repo_slug), param[str]("workspace", workspace)
            ],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[Error],
            error_mapper=get_repositories_by_workspace_by_repo_slug_issues_by_issue_id_watch_error_mapper,
            request_options=request_options,
        )

    async def get_repositories_by_workspace_by_repo_slug_issues_export_repo_name_issues_task_id_zip(
        self,
        repo_name: str,
        repo_slug: str,
        task_id: str,
        workspace: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[IssueJobStatus, GetRepositoriesByWorkspaceByRepoSlugIssuesExportRepoNameIssuesTaskIdZipErrorBody]:
        """This endpoint is used to poll for the progress of an issue export job and return the zip file after the job
        is complete. As long as the job is running, this will return a 202 response with in the response body a
        description of the current status.

        After the job has been scheduled, but before it starts executing, the endpoint returns a 202 response with
        status ``ACCEPTED``.

        Once it starts running, it is a 202 response with status ``STARTED`` and progress filled.

        After it is finished, it becomes a 200 response with status ``SUCCESS`` or ``FAILURE``.

        Args:
            repo_name: The name of the repo
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            task_id: The ID of the export task
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/repositories/{workspace}/{repo_slug}/issues/export/{repo_name}-issues-{task_id}.zip"
            ),
            path_params=[
                param[str]("repo_name", repo_name),
                param[str]("repo_slug", repo_slug),
                param[str]("task_id", task_id),
                param[str]("workspace", workspace),
            ],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[IssueJobStatus],
            error_mapper=get_repositories_by_workspace_by_repo_slug_issues_export_repo_name_issues_task_id_zip_error_mapper,
            request_options=request_options,
        )

    async def get_repositories_by_workspace_by_repo_slug_issues_import(
        self, repo_slug: str, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[IssueJobStatus, GetRepositoriesByWorkspaceByRepoSlugIssuesImportErrorBody]:
        """When using GET, this endpoint reports the status of the current import task.

        After the job has been scheduled, but before it starts executing, the endpoint returns a 202 response with
        status ``ACCEPTED``.

        Once it starts running, it is a 202 response with status ``STARTED`` and progress filled.

        After it is finished, it becomes a 200 response with status ``SUCCESS`` or ``FAILURE``.

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
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/issues/import"),
            path_params=[param[str]("repo_slug", repo_slug), param[str]("workspace", workspace)],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[IssueJobStatus],
            error_mapper=get_repositories_by_workspace_by_repo_slug_issues_import_error_mapper,
            request_options=request_options,
        )

    async def get_repositories_by_workspace_by_repo_slug_milestones(
        self, repo_slug: str, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[PaginatedMilestones, GetRepositoriesByWorkspaceByRepoSlugMilestonesErrorBody]:
        """Returns the milestones that have been defined in the issue tracker.

        This resource is only available on repositories that have the issue tracker enabled.

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
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/milestones"),
            path_params=[param[str]("repo_slug", repo_slug), param[str]("workspace", workspace)],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[PaginatedMilestones],
            error_mapper=get_repositories_by_workspace_by_repo_slug_milestones_error_mapper,
            request_options=request_options,
        )

    async def get_repositories_by_workspace_by_repo_slug_milestones_by_milestone_id(
        self,
        milestone_id: int,
        repo_slug: str,
        workspace: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Milestone, GetRepositoriesByWorkspaceByRepoSlugMilestonesByMilestoneIdErrorBody]:
        """Returns the specified issue tracker milestone object.

        Args:
            milestone_id: The milestone's id
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
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/milestones/{milestone_id}"),
            path_params=[
                param[int]("milestone_id", milestone_id),
                param[str]("repo_slug", repo_slug),
                param[str]("workspace", workspace),
            ],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[Milestone],
            error_mapper=get_repositories_by_workspace_by_repo_slug_milestones_by_milestone_id_error_mapper,
            request_options=request_options,
        )

    async def get_repositories_by_workspace_by_repo_slug_versions(
        self, repo_slug: str, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[PaginatedVersions, GetRepositoriesByWorkspaceByRepoSlugVersionsErrorBody]:
        """Returns the versions that have been defined in the issue tracker.

        This resource is only available on repositories that have the issue tracker enabled.

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
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/versions"),
            path_params=[param[str]("repo_slug", repo_slug), param[str]("workspace", workspace)],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[PaginatedVersions],
            error_mapper=get_repositories_by_workspace_by_repo_slug_versions_error_mapper,
            request_options=request_options,
        )

    async def get_repositories_by_workspace_by_repo_slug_versions_by_version_id(
        self,
        repo_slug: str,
        version_id: int,
        workspace: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Version, GetRepositoriesByWorkspaceByRepoSlugVersionsByVersionIdErrorBody]:
        """Returns the specified issue tracker version object.

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            version_id: The version's id
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/versions/{version_id}"),
            path_params=[
                param[str]("repo_slug", repo_slug),
                param[int]("version_id", version_id),
                param[str]("workspace", workspace),
            ],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[Version],
            error_mapper=get_repositories_by_workspace_by_repo_slug_versions_by_version_id_error_mapper,
            request_options=request_options,
        )

    async def post_repositories_by_workspace_by_repo_slug_issues(
        self,
        repo_slug: str,
        workspace: str,
        body: Issue | IssueDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Issue, PostRepositoriesByWorkspaceByRepoSlugIssuesErrorBody]:
        """Creates a new issue.

        This call requires authentication. Private repositories or private issue trackers require the caller to
        authenticate with an account that has appropriate authorization.

        The authenticated user is used for the issue's ``reporter`` field.

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            body: The new issue. The only required element is ``title``. All other elements can be omitted from the
                body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/issues"),
            path_params=[param[str]("repo_slug", repo_slug), param[str]("workspace", workspace)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[Issue | IssueDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[Issue],
            error_mapper=post_repositories_by_workspace_by_repo_slug_issues_error_mapper,
            request_options=request_options,
        )

    async def post_repositories_by_workspace_by_repo_slug_issues_by_issue_id_attachments(
        self, issue_id: str, repo_slug: str, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, PostRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdAttachmentsErrorBody]:
        """Upload new issue attachments.

        To upload files, perform a ``multipart/form-data`` POST containing one or more file fields.

        When a file is uploaded with the same name as an existing attachment, then the existing file will be replaced.

        Args:
            issue_id: The issue id
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
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/issues/{issue_id}/attachments"),
            path_params=[
                param[str]("issue_id", issue_id), param[str]("repo_slug", repo_slug), param[str]("workspace", workspace)
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_empty_response,
            error_mapper=post_repositories_by_workspace_by_repo_slug_issues_by_issue_id_attachments_error_mapper,
            request_options=request_options,
        )

    async def post_repositories_by_workspace_by_repo_slug_issues_by_issue_id_changes(
        self,
        issue_id: str,
        repo_slug: str,
        workspace: str,
        body: IssueChange | IssueChangeDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[IssueChange, PostRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdChangesErrorBody]:
        r"""Makes a change to the specified issue.

        For example, to change an issue's state and assignee, create a new change object that modifies these fields:

        ```
        curl https://api.bitbucket.org/2.0/site/master/issues/1234/changes \ -s -u evzijst -X POST -H "Content-Type:
        application/json" \ -d '{ "changes": { "assignee_account_id": { "new":
        "557058:c0b72ad0-1cb5-4018-9cdc-0cde8492c443"
        },
        "state": { "new": 'resolved"
        }
        }
        "message": { "raw": "This is now resolved."
        }
        }'
        ```

        The above example also includes a custom comment to go alongside the change. This comment will also be visible
        on the issue page in the UI.

        The fields of the ``changes`` object are strings, not objects. This allows for immutable change log records,
        even after user accounts, milestones, or other objects recorded in a change entry, get renamed or deleted.

        The ``assignee_account_id`` field stores the account id. When POSTing a new change and changing the assignee,
        the client should therefore use the user's account_id in the ``changes.assignee_account_id.new`` field.

        This call requires authentication. Private repositories or private issue trackers require the caller to
        authenticate with an account that has appropriate authorization.

        Args:
            issue_id: The issue id
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            body: The new issue state change. The only required elements are ``changes.[].new``. All other elements can
                be omitted from the body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/issues/{issue_id}/changes"),
            path_params=[
                param[str]("issue_id", issue_id), param[str]("repo_slug", repo_slug), param[str]("workspace", workspace)
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[IssueChange | IssueChangeDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[IssueChange],
            error_mapper=post_repositories_by_workspace_by_repo_slug_issues_by_issue_id_changes_error_mapper,
            request_options=request_options,
        )

    async def post_repositories_by_workspace_by_repo_slug_issues_by_issue_id_comments(
        self,
        issue_id: str,
        repo_slug: str,
        workspace: str,
        body: IssueComment | IssueCommentDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, PostRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdCommentsErrorBody]:
        r"""Creates a new issue comment.

        ```
        $ curl https://api.bitbucket.org/2.0/repositories/atlassian/prlinks/issues/42/comments/ \ -X POST -u evzijst \
        -H 'Content-Type: application/json' \ -d '{"content": {"raw": "Lorem ipsum."}}'
        ```

        Args:
            issue_id: The issue id
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            body: The new issue comment object.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/issues/{issue_id}/comments"),
            path_params=[
                param[str]("issue_id", issue_id), param[str]("repo_slug", repo_slug), param[str]("workspace", workspace)
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[IssueComment | IssueCommentDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_empty_response,
            error_mapper=post_repositories_by_workspace_by_repo_slug_issues_by_issue_id_comments_error_mapper,
            request_options=request_options,
        )

    async def post_repositories_by_workspace_by_repo_slug_issues_export(
        self,
        repo_slug: str,
        workspace: str,
        *,
        body: ExportOptions | ExportOptionsDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, PostRepositoriesByWorkspaceByRepoSlugIssuesExportErrorBody]:
        """A POST request to this endpoint initiates a new background celery task that archives the repo's issues.

        When the job has been accepted, it will return a 202 (Accepted) along with a unique url to this job in the
        'Location' response header. This url is the endpoint for where the user can obtain their zip files."

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            body: The options to apply to the export. Available options include ``project_key`` and ``project_name``
                which, if specified, are used as the project key and name in the exported Jira json format. Option
                ``send_email`` specifies whether an email should be sent upon export result. Option
                ``include_attachments`` specifies whether attachments are included in the export.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/issues/export"),
            path_params=[param[str]("repo_slug", repo_slug), param[str]("workspace", workspace)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ExportOptions | ExportOptionsDict | None](body),
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_empty_response,
            error_mapper=post_repositories_by_workspace_by_repo_slug_issues_export_error_mapper,
            request_options=request_options,
        )

    async def post_repositories_by_workspace_by_repo_slug_issues_import(
        self, repo_slug: str, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[IssueJobStatus, PostRepositoriesByWorkspaceByRepoSlugIssuesImportErrorBody]:
        """A POST request to this endpoint will import the zip file given by the archive parameter into the repository.
        All existing issues will be deleted and replaced by the contents of the imported zip file.

        Imports are done through a multipart/form-data POST. There is one valid and required form field, with the name
        "archive," which needs to be a file field:

        ```
        $ curl -u -X POST -F archive=@/path/to/file.zip https://api.bitbucket.org/2.0/repositories///issues/import
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
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/issues/import"),
            path_params=[param[str]("repo_slug", repo_slug), param[str]("workspace", workspace)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[IssueJobStatus],
            error_mapper=post_repositories_by_workspace_by_repo_slug_issues_import_error_mapper,
            request_options=request_options,
        )

    async def put_repositories_by_workspace_by_repo_slug_issues_by_issue_id(
        self, issue_id: str, repo_slug: str, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Issue, PutRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdErrorBody]:
        r"""Modifies the issue.

        ```
        $ curl https://api.bitbucket.org/2.0/repostories/evzijst/dogslow/issues/123 \ -u evzijst -s -X PUT -H
        'Content-Type: application/json' \ -d '{ "title": "Updated title", "assignee": { "account_id":
        "5d5355e8c6b9320d9ea5b28d"
        },
        "priority": "minor", "version": { "name": "1.0"
        },
        "component": null
        }'
        ```

        This example changes the ``title``, ``assignee``, ``priority`` and the ``version``. It also removes the value of
        the ``component`` from the issue by setting the field to ``null``. Any field not present keeps its existing
        value.

        Each time an issue is edited in the UI or through the API, an immutable change record is created under the
        ``/issues/123/changes`` endpoint. It also has a comment associated with the change.

        Args:
            issue_id: The issue id
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
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/issues/{issue_id}"),
            path_params=[
                param[str]("issue_id", issue_id), param[str]("repo_slug", repo_slug), param[str]("workspace", workspace)
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[Issue],
            error_mapper=put_repositories_by_workspace_by_repo_slug_issues_by_issue_id_error_mapper,
            request_options=request_options,
        )

    async def put_repositories_by_workspace_by_repo_slug_issues_by_issue_id_comments_by_comment_id(
        self,
        comment_id: int,
        issue_id: str,
        repo_slug: str,
        workspace: str,
        body: IssueComment | IssueCommentDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[IssueComment, PutRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdCommentsByCommentIdErrorBody]:
        r"""Updates the content of the specified issue comment. Note that only the ``content.raw`` field can be
        modified.

        ```
        $ curl https://api.bitbucket.org/2.0/repositories/atlassian/prlinks/issues/42/comments/5728901 \ -X PUT -u
        evzijst \ -H 'Content-Type: application/json' \ -d '{"content": {"raw": "Lorem ipsum."}'
        ```

        Args:
            comment_id: The id of the comment.
            issue_id: The issue id
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            body: The updated comment.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default(
                "/repositories/{workspace}/{repo_slug}/issues/{issue_id}/comments/{comment_id}"
            ),
            path_params=[
                param[int]("comment_id", comment_id),
                param[str]("issue_id", issue_id),
                param[str]("repo_slug", repo_slug),
                param[str]("workspace", workspace),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[IssueComment | IssueCommentDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[IssueComment],
            error_mapper=put_repositories_by_workspace_by_repo_slug_issues_by_issue_id_comments_by_comment_id_error_mapper,
            request_options=request_options,
        )

    async def put_repositories_by_workspace_by_repo_slug_issues_by_issue_id_vote(
        self, issue_id: str, repo_slug: str, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Error, PutRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdVoteErrorBody]:
        """Vote for this issue.

        To cast your vote, do an empty PUT. The 204 status code indicates that the operation was successful.

        Args:
            issue_id: The issue id
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
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/issues/{issue_id}/vote"),
            path_params=[
                param[str]("issue_id", issue_id), param[str]("repo_slug", repo_slug), param[str]("workspace", workspace)
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[Error],
            error_mapper=put_repositories_by_workspace_by_repo_slug_issues_by_issue_id_vote_error_mapper,
            request_options=request_options,
        )

    async def put_repositories_by_workspace_by_repo_slug_issues_by_issue_id_watch(
        self, issue_id: str, repo_slug: str, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Error, PutRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdWatchErrorBody]:
        """Start watching this issue.

        To start watching this issue, do an empty PUT. The 204 status code indicates that the operation was successful.

        Args:
            issue_id: The issue id
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
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/issues/{issue_id}/watch"),
            path_params=[
                param[str]("issue_id", issue_id), param[str]("repo_slug", repo_slug), param[str]("workspace", workspace)
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[Error],
            error_mapper=put_repositories_by_workspace_by_repo_slug_issues_by_issue_id_watch_error_mapper,
            request_options=request_options,
        )

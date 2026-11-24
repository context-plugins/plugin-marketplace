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
from ..errors.create_or_update_annotation_error import (
    CreateOrUpdateAnnotationErrorBody,
    create_or_update_annotation_error_mapper,
)
from ..errors.create_or_update_report_error import CreateOrUpdateReportErrorBody, create_or_update_report_error_mapper
from ..errors.delete_repositories_by_workspace_by_repo_slug_commit_by_commit_approve_error import (
    DeleteRepositoriesByWorkspaceByRepoSlugCommitByCommitApproveErrorBody,
    delete_repositories_by_workspace_by_repo_slug_commit_by_commit_approve_error_mapper,
)
from ..errors.delete_repositories_by_workspace_by_repo_slug_commit_by_commit_comments_by_comment_id_error import (
    DeleteRepositoriesByWorkspaceByRepoSlugCommitByCommitCommentsByCommentIdErrorBody,
    delete_repositories_by_workspace_by_repo_slug_commit_by_commit_comments_by_comment_id_error_mapper,
)
from ..errors.get_annotation_error import GetAnnotationErrorBody, get_annotation_error_mapper
from ..errors.get_report_error import GetReportErrorBody, get_report_error_mapper
from ..errors.get_repositories_by_workspace_by_repo_slug_commit_by_commit_error import (
    GetRepositoriesByWorkspaceByRepoSlugCommitByCommitErrorBody,
    get_repositories_by_workspace_by_repo_slug_commit_by_commit_error_mapper,
)
from ..errors.get_repositories_by_workspace_by_repo_slug_commits_by_revision_error import (
    GetRepositoriesByWorkspaceByRepoSlugCommitsByRevisionErrorBody,
    get_repositories_by_workspace_by_repo_slug_commits_by_revision_error_mapper,
)
from ..errors.get_repositories_by_workspace_by_repo_slug_commits_error import (
    GetRepositoriesByWorkspaceByRepoSlugCommitsErrorBody,
    get_repositories_by_workspace_by_repo_slug_commits_error_mapper,
)
from ..errors.get_repositories_by_workspace_by_repo_slug_diff_by_spec_error import (
    GetRepositoriesByWorkspaceByRepoSlugDiffBySpecErrorBody,
    get_repositories_by_workspace_by_repo_slug_diff_by_spec_error_mapper,
)
from ..errors.get_repositories_by_workspace_by_repo_slug_diffstat_by_spec_error import (
    GetRepositoriesByWorkspaceByRepoSlugDiffstatBySpecErrorBody,
    get_repositories_by_workspace_by_repo_slug_diffstat_by_spec_error_mapper,
)
from ..errors.get_repositories_by_workspace_by_repo_slug_merge_base_by_revspec_error import (
    GetRepositoriesByWorkspaceByRepoSlugMergeBaseByRevspecErrorBody,
    get_repositories_by_workspace_by_repo_slug_merge_base_by_revspec_error_mapper,
)
from ..errors.get_repositories_by_workspace_by_repo_slug_patch_by_spec_error import (
    GetRepositoriesByWorkspaceByRepoSlugPatchBySpecErrorBody,
    get_repositories_by_workspace_by_repo_slug_patch_by_spec_error_mapper,
)
from ..errors.post_repositories_by_workspace_by_repo_slug_commit_by_commit_approve_error import (
    PostRepositoriesByWorkspaceByRepoSlugCommitByCommitApproveErrorBody,
    post_repositories_by_workspace_by_repo_slug_commit_by_commit_approve_error_mapper,
)
from ..errors.post_repositories_by_workspace_by_repo_slug_commit_by_commit_comments_error import (
    PostRepositoriesByWorkspaceByRepoSlugCommitByCommitCommentsErrorBody,
    post_repositories_by_workspace_by_repo_slug_commit_by_commit_comments_error_mapper,
)
from ..errors.post_repositories_by_workspace_by_repo_slug_commits_by_revision_error import (
    PostRepositoriesByWorkspaceByRepoSlugCommitsByRevisionErrorBody,
    post_repositories_by_workspace_by_repo_slug_commits_by_revision_error_mapper,
)
from ..errors.post_repositories_by_workspace_by_repo_slug_commits_error import (
    PostRepositoriesByWorkspaceByRepoSlugCommitsErrorBody,
    post_repositories_by_workspace_by_repo_slug_commits_error_mapper,
)
from ..errors.put_repositories_by_workspace_by_repo_slug_commit_by_commit_comments_by_comment_id_error import (
    PutRepositoriesByWorkspaceByRepoSlugCommitByCommitCommentsByCommentIdErrorBody,
    put_repositories_by_workspace_by_repo_slug_commit_by_commit_comments_by_comment_id_error_mapper,
)
from ..models.commit import Commit
from ..models.commit_comment import CommitComment, CommitCommentDict
from ..models.page import Page
from ..models.paginated_annotations import PaginatedAnnotations
from ..models.paginated_commit_comments import PaginatedCommitComments
from ..models.paginated_diff_stat import PaginatedDiffStat
from ..models.paginated_reports import PaginatedReports
from ..models.participant import Participant
from ..models.report import Report, ReportDict
from ..models.report_annotation import ReportAnnotation, ReportAnnotationDict
from ..server.server import Server


class Commits:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = CommitsWithRawResponse(client, server, auth)

    def bulk_create_or_update_annotations(
        self,
        workspace: str,
        repo_slug: str,
        commit: str,
        report_id: str,
        body: list[ReportAnnotation | ReportAnnotationDict],
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> list[ReportAnnotation]:
        r"""Bulk upload of annotations. Annotations are individual findings that have been identified as part of a
        report, for example, a line of code that represents a vulnerability. These annotations can be attached to a
        specific file and even a specific line in that file, however, that is optional. Annotations are not mandatory
        and a report can contain up to 1000 annotations.

        Add the annotations you want to upload as objects in a JSON array and make sure each annotation has the
        external_id field set to a unique value. If you want to use an existing id from your own system, we recommend
        prefixing it with your system's name to avoid collisions, for example, mySystem-annotation001. The external id
        can later be used to identify the report as an alternative to the generated UUID. You can upload up to 100
        annotations per POST request.

        ### Sample cURL request:
        ```
        curl --location 'https://api.bitbucket.org/2.0/repositories///commit//reports/mysystem-001/annotations' \
        --header 'Content-Type: application/json' \ --data-raw '[
        {
        "external_id": "mysystem-annotation001", "title": "Security scan report", "annotation_type": "VULNERABILITY",
        "summary": "This line represents a security threat.", "severity": "HIGH", "path":
        "my-service/src/main/java/com/myCompany/mysystem/logic/Main.java", "line": 42
        },
        {
        "external_id": "mySystem-annotation002", "title": "Bug report", "annotation_type": "BUG", "result": "FAILED",
        "summary": "This line might introduce a bug.", "severity": "MEDIUM", "path":
        "my-service/src/main/java/com/myCompany/mysystem/logic/Helper.java", "line": 13
        }
        ]'
        ```

        ### Possible field values: annotation_type: VULNERABILITY, CODE_SMELL, BUG result: PASSED, FAILED, IGNORED,
        SKIPPED severity: HIGH, MEDIUM, LOW, CRITICAL

        Please refer to the Code Insights documentation for more information.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            commit: The commit for which to retrieve reports.
            report_id: Uuid or external-if of the report for which to get annotations for.
            body: The annotations to create or update
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.bulk_create_or_update_annotations(
                workspace, repo_slug, commit, report_id, body, request_options=request_options
            ),
        )

    def create_or_update_annotation(
        self,
        workspace: str,
        repo_slug: str,
        commit: str,
        report_id: str,
        annotation_id: str,
        body: ReportAnnotation | ReportAnnotationDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ReportAnnotation:
        r"""Creates or updates an individual annotation for the specified report. Annotations are individual findings
        that have been identified as part of a report, for example, a line of code that represents a vulnerability.
        These annotations can be attached to a specific file and even a specific line in that file, however, that is
        optional. Annotations are not mandatory and a report can contain up to 1000 annotations.

        Just as reports, annotation needs to be uploaded with a unique ID that can later be used to identify the report
        as an alternative to the generated UUID. If you want to use an existing id from your own system, we recommend
        prefixing it with your system's name to avoid collisions, for example, mySystem-annotation001.

        ### Sample cURL request:
        ```
        curl --request PUT
        'https://api.bitbucket.org/2.0/repositories///commit//reports/mySystem-001/annotations/mysystem-annotation001' \
        --header 'Content-Type: application/json' \ --data-raw '{ "title": "Security scan report", "annotation_type":
        "VULNERABILITY", "summary": "This line represents a security thread.", "severity": "HIGH", "path":
        "my-service/src/main/java/com/myCompany/mysystem/logic/Main.java", "line": 42
        }'
        ```

        ### Possible field values: annotation_type: VULNERABILITY, CODE_SMELL, BUG result: PASSED, FAILED, IGNORED,
        SKIPPED severity: HIGH, MEDIUM, LOW, CRITICAL

        Please refer to the Code Insights documentation for more information.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            commit: The commit the report belongs to.
            report_id: Either the uuid or external-id of the report.
            annotation_id: Either the uuid or external-id of the annotation.
            body: The annotation to create or update
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: The provided Annotation object is malformed or incomplete. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.create_or_update_annotation(
                workspace, repo_slug, commit, report_id, annotation_id, body, request_options=request_options
            ),
        )

    def create_or_update_report(
        self,
        workspace: str,
        repo_slug: str,
        commit: str,
        report_id: str,
        body: Report | ReportDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Report:
        r"""Creates or updates a report for the specified commit. To upload a report, make sure to generate an ID that
        is unique across all reports for that commit. If you want to use an existing id from your own system, we
        recommend prefixing it with your system's name to avoid collisions, for example, mySystem-001.

        ### Sample cURL request:
        ```
        curl --request PUT 'https://api.bitbucket.org/2.0/repositories///commit//reports/mysystem-001' \ --header
        'Content-Type: application/json' \ --data-raw '{ "title": "Security scan report", "details": "This pull request
        introduces 10 new dependency vulnerabilities.", "report_type": "SECURITY", "reporter": "mySystem", "link":
        "http://www.mysystem.com/reports/001", "result": "FAILED", "data": [
        {
        "title": "Duration (seconds)", "type": "DURATION", "value": 14
        },
        {
        "title": "Safe to merge?", "type": "BOOLEAN", "value": false
        }
        ]
        }'
        ```

        ### Possible field values: report_type: SECURITY, COVERAGE, TEST, BUG result: PASSED, FAILED, PENDING data.type:
        BOOLEAN, DATE, DURATION, LINK, NUMBER, PERCENTAGE, TEXT

        #### Data field formats
        | Type Field | Value Field Type | Value Field Display |
        |:--------------|:------------------|:--------------------|
        | None/ Omitted | Number, String or Boolean (not an array or object) | Plain text |
        | BOOLEAN | Boolean | The value will be read as a JSON boolean and displayed as 'Yes' or 'No'. |
        | DATE | Number | The value will be read as a JSON number in the form of a Unix timestamp (milliseconds) and
            will be displayed as a relative date if the date is less than one week ago, otherwise it will be displayed
            as an absolute date. |
        | DURATION | Number | The value will be read as a JSON number in milliseconds and will be displayed in a human
            readable duration format. |
        | LINK | Object: ``{"text": "Link text here", "href": "https://link.to.annotation/in/external/tool"}`` | The
            value will be read as a JSON object containing the fields "text" and "href" and will be displayed as a
            clickable link on the report. |
        | NUMBER | Number | The value will be read as a JSON number and large numbers will be displayed in a human
            readable format (e.g. 14.3k). |
        | PERCENTAGE | Number (between 0 and 100) | The value will be read as a JSON number between 0 and 100 and will
            be displayed with a percentage sign. |
        | TEXT | String | The value will be read as a JSON string and will be displayed as-is |

        Please refer to the Code Insights documentation for more information.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            commit: The commit the report belongs to.
            report_id: Either the uuid or external-id of the report.
            body: The report to create or update
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: The provided Report object is malformed or incomplete. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.create_or_update_report(
                workspace, repo_slug, commit, report_id, body, request_options=request_options
            ),
        )

    def delete_annotation(
        self,
        workspace: str,
        repo_slug: str,
        commit: str,
        report_id: str,
        annotation_id: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Deletes a single Annotation matching the provided ID.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            commit: The commit the annotation belongs to.
            report_id: Either the uuid or external-id of the annotation.
            annotation_id: Either the uuid or external-id of the annotation.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            No content

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.delete_annotation(
                workspace, repo_slug, commit, report_id, annotation_id, request_options=request_options
            ),
        )

    def delete_report(
        self,
        workspace: str,
        repo_slug: str,
        commit: str,
        report_id: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Deletes a single Report matching the provided ID.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            commit: The commit the report belongs to.
            report_id: Either the uuid or external-id of the report.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            No content

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.delete_report(
                workspace, repo_slug, commit, report_id, request_options=request_options
            ),
        )

    def delete_repositories_by_workspace_by_repo_slug_commit_by_commit_approve(
        self, commit: str, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Redact the authenticated user's approval of the specified commit.

        This operation is only available to users that have explicit access to the repository. In contrast, just the
        fact that a repository is publicly accessible to users does not give them the ability to approve commits.

        Args:
            commit: The commit's SHA1.
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An empty response indicating the authenticated user's approval has been withdrawn.

        Raises:
            ApiError: If the specified commit, or the repository does not exist. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.delete_repositories_by_workspace_by_repo_slug_commit_by_commit_approve(
                commit, repo_slug, workspace, request_options=request_options
            ),
        )

    def delete_repositories_by_workspace_by_repo_slug_commit_by_commit_comments_by_comment_id(
        self,
        comment_id: int,
        commit: str,
        repo_slug: str,
        workspace: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Deletes the specified commit comment.

        Note that deleting comments that have visible replies that point to them will not really delete the resource.
        This is to retain the integrity of the original comment tree. Instead, the ``deleted`` element is set to
        ``true`` and the content is blanked out. The comment will continue to be returned by the collections and self
        endpoints.

        Args:
            comment_id: The id of the comment.
            commit: The commit's SHA1.
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Indicates the comment was deleted by this action or a previous delete.

        Raises:
            ApiError: If the comment doesn't exist ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.delete_repositories_by_workspace_by_repo_slug_commit_by_commit_comments_by_comment_id(
                comment_id, commit, repo_slug, workspace, request_options=request_options
            ),
        )

    def get_annotation(
        self,
        workspace: str,
        repo_slug: str,
        commit: str,
        report_id: str,
        annotation_id: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ReportAnnotation:
        """Returns a single Annotation matching the provided ID.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            commit: The commit the report belongs to.
            report_id: Either the uuid or external-id of the report.
            annotation_id: Either the uuid or external-id of the annotation.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: The annotation with the given ID was not found. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_annotation(
                workspace, repo_slug, commit, report_id, annotation_id, request_options=request_options
            ),
        )

    def get_annotations_for_report(
        self,
        workspace: str,
        repo_slug: str,
        commit: str,
        report_id: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PaginatedAnnotations:
        """Returns a paginated list of Annotations for a specified report.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            commit: The commit for which to retrieve reports.
            report_id: Uuid or external-if of the report for which to get annotations for.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.get_annotations_for_report(
                workspace, repo_slug, commit, report_id, request_options=request_options
            ),
        )

    def get_report(
        self,
        workspace: str,
        repo_slug: str,
        commit: str,
        report_id: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Report:
        """Returns a single Report matching the provided ID.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            commit: The commit the report belongs to.
            report_id: Either the uuid or external-id of the report.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: The report with the given ID was not found. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_report(workspace, repo_slug, commit, report_id, request_options=request_options)
        )

    def get_reports_for_commit(
        self, workspace: str, repo_slug: str, commit: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> PaginatedReports:
        """Returns a paginated list of Reports linked to this commit.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            commit: The commit for which to retrieve reports.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.get_reports_for_commit(
                workspace, repo_slug, commit, request_options=request_options
            ),
        )

    def get_repositories_by_workspace_by_repo_slug_commit_by_commit(
        self, commit: str, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> Commit:
        """Returns the specified commit.

        Args:
            commit: The commit's SHA1.
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The commit object

        Raises:
            ApiError: If the specified commit or repository does not exist. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_repositories_by_workspace_by_repo_slug_commit_by_commit(
                commit, repo_slug, workspace, request_options=request_options
            ),
        )

    def get_repositories_by_workspace_by_repo_slug_commit_by_commit_comments(
        self,
        commit: str,
        repo_slug: str,
        workspace: str,
        *,
        q: str | None = None,
        sort: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PaginatedCommitComments:
        """Returns the commit's comments.

        This includes both global and inline comments.

        The default sorting is oldest to newest and can be overridden with the ``sort`` query parameter.

        Args:
            commit: The commit's SHA1.
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            q: Query string to narrow down the response as per `filtering and sorting
                </cloud/bitbucket/rest/intro/#filtering>`__.
            sort: Field by which the results should be sorted as per `filtering and sorting
                </cloud/bitbucket/rest/intro/#filtering>`__.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A paginated list of commit comments.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.get_repositories_by_workspace_by_repo_slug_commit_by_commit_comments(
                commit, repo_slug, workspace, q=q, sort=sort, request_options=request_options
            ),
        )

    def get_repositories_by_workspace_by_repo_slug_commit_by_commit_comments_by_comment_id(
        self,
        comment_id: int,
        commit: str,
        repo_slug: str,
        workspace: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> CommitComment:
        """Returns the specified commit comment.

        Args:
            comment_id: The id of the comment.
            commit: The commit's SHA1.
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The commit comment.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.get_repositories_by_workspace_by_repo_slug_commit_by_commit_comments_by_comment_id(
                comment_id, commit, repo_slug, workspace, request_options=request_options
            ),
        )

    def get_repositories_by_workspace_by_repo_slug_commits(
        self, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> Page:
        """These are the repository's commits. They are paginated and returned in reverse chronological order, similar
        to the output of ``git log``. Like these tools, the DAG can be filtered.

        #### GET /repositories/{workspace}/{repo_slug}/commits/

        Returns all commits in the repo in topological order (newest commit first). All branches and tags are included
        (similar to ``git log --all``).

        #### GET /repositories/{workspace}/{repo_slug}/commits/?exclude=master

        Returns all commits in the repo that are not on master (similar to ``git log --all ^master``).

        #### GET /repositories/{workspace}/{repo_slug}/commits/?include=foo&include=bar&exclude=fu&exclude=fubar

        Returns all commits that are on refs ``foo`` or ``bar``, but not on ``fu`` or ``fubar`` (similar to ``git log
        foo bar ^fu ^fubar``).

        An optional ``path`` parameter can be specified that will limit the results to commits that affect that path.
        ``path`` can either be a file or a directory. If a directory is specified, commits are returned that have
        modified any file in the directory tree rooted by ``path``. It is important to note that if the ``path``
        parameter is specified, the commits returned by this endpoint may no longer be a DAG, parent commits that do not
        modify the path will be omitted from the response.

        #### GET /repositories/{workspace}/{repo_slug}/commits/?path=README.md&include=foo&include=bar&exclude=master

        Returns all commits that are on refs ``foo`` or ``bar``, but not on ``master`` that changed the file README.md.

        #### GET /repositories/{workspace}/{repo_slug}/commits/?path=src/&include=foo&include=bar&exclude=master

        Returns all commits that are on refs ``foo`` or ``bar``, but not on ``master`` that changed to a file in any
        file in the directory src or its children.

        Because the response could include a very large number of commits, it is paginated. Follow the 'next' link in
        the response to navigate to the next page of commits. As with other paginated resources, do not construct your
        own links.

        When the include and exclude parameters are more than can fit in a query string, clients can use a
        ``x-www-form-urlencoded`` POST instead.

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A paginated list of commits

        Raises:
            ApiError: If the specified repository does not exist. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_repositories_by_workspace_by_repo_slug_commits(
                repo_slug, workspace, request_options=request_options
            ),
        )

    def get_repositories_by_workspace_by_repo_slug_commits_by_revision(
        self, repo_slug: str, revision: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> Page:
        """These are the repository's commits. They are paginated and returned in reverse chronological order, similar
        to the output of ``git log``. Like these tools, the DAG can be filtered.

        #### GET /repositories/{workspace}/{repo_slug}/commits/master

        Returns all commits on ref ``master`` (similar to ``git log master``).

        #### GET /repositories/{workspace}/{repo_slug}/commits/dev?include=foo&exclude=master

        Returns all commits on ref ``dev`` or ``foo``, except those that are reachable on ``master`` (similar to ``git
        log dev foo ^master``).

        An optional ``path`` parameter can be specified that will limit the results to commits that affect that path.
        ``path`` can either be a file or a directory. If a directory is specified, commits are returned that have
        modified any file in the directory tree rooted by ``path``. It is important to note that if the ``path``
        parameter is specified, the commits returned by this endpoint may no longer be a DAG, parent commits that do not
        modify the path will be omitted from the response.

        #### GET /repositories/{workspace}/{repo_slug}/commits/dev?path=README.md&include=foo&include=bar&exclude=master

        Returns all commits that are on refs ``dev`` or ``foo`` or ``bar``, but not on ``master`` that changed the file
        README.md.

        #### GET /repositories/{workspace}/{repo_slug}/commits/dev?path=src/&include=foo&exclude=master

        Returns all commits that are on refs ``dev`` or ``foo``, but not on ``master`` that changed to a file in any
        file in the directory src or its children.

        Because the response could include a very large number of commits, it is paginated. Follow the 'next' link in
        the response to navigate to the next page of commits. As with other paginated resources, do not construct your
        own links.

        When the include and exclude parameters are more than can fit in a query string, clients can use a
        ``x-www-form-urlencoded`` POST instead.

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            revision: A commit SHA1 or ref name.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A paginated list of commits

        Raises:
            ApiError: If the specified revision does not exist. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_repositories_by_workspace_by_repo_slug_commits_by_revision(
                repo_slug, revision, workspace, request_options=request_options
            ),
        )

    def get_repositories_by_workspace_by_repo_slug_diff_by_spec(
        self,
        repo_slug: str,
        spec: str,
        workspace: str,
        *,
        context: int | None = None,
        path: str | None = None,
        ignore_whitespace: bool | None = None,
        binary: bool | None = None,
        renames: bool | None = None,
        merge: bool | None = None,
        topic: bool | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Produces a raw git-style diff.

        #### Single commit spec

        If the ``spec`` argument to this API is a single commit, the diff is produced against the first parent of the
        specified commit.

        #### Two commit spec

        Two commits separated by ``..`` may be provided as the ``spec``, e.g., ``3a8b42..9ff173``. When two commits are
        provided and the ``topic`` query parameter is true, this API produces a 2-way three dot diff. This is the diff
        between source commit and the merge base of the source commit and the destination commit. When the ``topic``
        query param is false, a simple git-style diff is produced.

        The two commits are interpreted as follows:

        * First commit: the commit containing the changes we wish to preview
        * Second commit: the commit representing the state to which we want to
        compare the first commit
        * **Note**: This is the opposite of the order used in ``git diff``.

        #### Comparison to patches

        While similar to patches, diffs:

        * Don't have a commit header (username, commit message, etc)
        * Support the optional ``path=foo/bar.py`` query param to filter
        the diff to just that one file diff

        #### Response

        The raw diff is returned as-is, in whatever encoding the files in the repository use. It is not decoded into
        unicode. As such, the content-type is ``text/plain``.

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            spec: A commit SHA (e.g. ``3a8b42``) or a commit range using double dot notation (e.g. ``3a8b42..9ff173``).
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            context: Generate diffs with <n> lines of context instead of the usual three.
            path: Limit the diff to a particular file (this parameter can be repeated for multiple paths).
            ignore_whitespace: Generate diffs that ignore whitespace.
            binary: Generate diffs that include binary files, true if omitted.
            renames: Whether to perform rename detection, true if omitted.
            merge: This parameter is deprecated. The 'topic' parameter should be used instead. The 'merge' and 'topic'
                parameters cannot be both used at the same time. If true, the source commit is merged into the
                destination commit, and then a diff from the destination to the merge result is returned. If false, a
                simple 'two dot' diff between the source and destination is returned. True if omitted.
            topic: If true, returns 2-way 'three-dot' diff. This is a diff between the source commit and the merge base
                of the source commit and the destination commit. If false, a simple 'two dot' diff between the source
                and destination is returned. If omitted, defaults to true, ie. a 2 way 'three-dot' diff is returned.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The raw diff

        Raises:
            ApiError: If the diff was too large and timed out. Since this endpoint does not employ any form of
                pagination, but instead returns the diff as a single document, it can run into trouble on very large
                diffs. If Bitbucket times out in cases like these, a 555 status code is returned. ``error`` is ``Error |
                RawError``."""
        return unwrap(
            self._with_raw_response.get_repositories_by_workspace_by_repo_slug_diff_by_spec(
                repo_slug,
                spec,
                workspace,
                context=context,
                path=path,
                ignore_whitespace=ignore_whitespace,
                binary=binary,
                renames=renames,
                merge=merge,
                topic=topic,
                request_options=request_options,
            ),
        )

    def get_repositories_by_workspace_by_repo_slug_diffstat_by_spec(
        self,
        repo_slug: str,
        spec: str,
        workspace: str,
        *,
        ignore_whitespace: bool | None = None,
        merge: bool | None = None,
        path: str | None = None,
        renames: bool | None = None,
        topic: bool | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PaginatedDiffStat:
        """Produces a response in JSON format with a record for every path modified, including information on the type
        of the change and the number of lines added and removed.

        #### Single commit spec

        If the ``spec`` argument to this API is a single commit, the diff is produced against the first parent of the
        specified commit.

        #### Two commit spec

        Two commits separated by ``..`` may be provided as the ``spec``, e.g., ``3a8b42..9ff173``. When two commits are
        provided and the ``topic`` query parameter is true, this API produces a 2-way three dot diff. This is the diff
        between source commit and the merge base of the source commit and the destination commit. When the ``topic``
        query param is false, a simple git-style diff is produced.

        The two commits are interpreted as follows:

        * First commit: the commit containing the changes we wish to preview
        * Second commit: the commit representing the state to which we want to
        compare the first commit
        * **Note**: This is the opposite of the order used in ``git diff``.

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            spec: A commit SHA (e.g. ``3a8b42``) or a commit range using double dot notation (e.g. ``3a8b42..9ff173``).
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            ignore_whitespace: Generate diffs that ignore whitespace
            merge: This parameter is deprecated. The 'topic' parameter should be used instead. The 'merge' and 'topic'
                parameters cannot be both used at the same time. If true, the source commit is merged into the
                destination commit, and then a diffstat from the destination to the merge result is returned. If false,
                a simple 'two dot' diffstat between the source and destination is returned. True if omitted.
            path: Limit the diffstat to a particular file (this parameter can be repeated for multiple paths).
            renames: Whether to perform rename detection, true if omitted.
            topic: If true, returns 2-way 'three-dot' diff. This is a diff between the source commit and the merge base
                of the source commit and the destination commit. If false, a simple 'two dot' diff between the source
                and destination is returned.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The diff stats

        Raises:
            ApiError: If generating the diffstat timed out. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_repositories_by_workspace_by_repo_slug_diffstat_by_spec(
                repo_slug,
                spec,
                workspace,
                ignore_whitespace=ignore_whitespace,
                merge=merge,
                path=path,
                renames=renames,
                topic=topic,
                request_options=request_options,
            ),
        )

    def get_repositories_by_workspace_by_repo_slug_merge_base_by_revspec(
        self, repo_slug: str, revspec: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> Commit:
        """Returns the best common ancestor between two commits, specified in a revspec of 2 commits (e.g.
        3a8b42..9ff173).

        If more than one best common ancestor exists, only one will be returned. It is unspecified which will be
        returned.

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            revspec: A commit range using double dot notation (e.g. ``3a8b42..9ff173``).
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The merge base of the provided spec.

        Raises:
            ApiError: If the request was not authenticated. If the authenticated user does not have access to any of the
                repositories specified. If the repository or ref in the spec does not exist. ``error`` is ``Error |
                RawError``."""
        return unwrap(
            self._with_raw_response.get_repositories_by_workspace_by_repo_slug_merge_base_by_revspec(
                repo_slug, revspec, workspace, request_options=request_options
            ),
        )

    def get_repositories_by_workspace_by_repo_slug_patch_by_spec(
        self, repo_slug: str, spec: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Produces a raw patch for a single commit (diffed against its first parent), or a patch-series for a revspec
        of 2 commits (e.g. ``3a8b42..9ff173`` where the first commit represents the source and the second commit the
        destination).

        In case of the latter (diffing a revspec), a patch series is returned for the commits on the source branch
        (``3a8b42`` and its ancestors in our example).

        While similar to diffs, patches:

        * Have a commit header (username, commit message, etc)
        * Do not support the ``path=foo/bar.py`` query parameter

        The raw patch is returned as-is, in whatever encoding the files in the repository use. It is not decoded into
        unicode. As such, the content-type is ``text/plain``.

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            spec: A commit SHA (e.g. ``3a8b42``) or a commit range using double dot notation (e.g. ``3a8b42..9ff173``).
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The raw patches

        Raises:
            ApiError: If the diff was too large and timed out. Since this endpoint does not employ any form of
                pagination, but instead returns the diff as a single document, it can run into trouble on very large
                diffs. If Bitbucket times out in cases like these, a 555 status code is returned. ``error`` is ``Error |
                RawError``."""
        return unwrap(
            self._with_raw_response.get_repositories_by_workspace_by_repo_slug_patch_by_spec(
                repo_slug, spec, workspace, request_options=request_options
            ),
        )

    def post_repositories_by_workspace_by_repo_slug_commit_by_commit_approve(
        self, commit: str, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> Participant:
        """Approve the specified commit as the authenticated user.

        This operation is only available to users that have explicit access to the repository. In contrast, just the
        fact that a repository is publicly accessible to users does not give them the ability to approve commits.

        Args:
            commit: The commit's SHA1.
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The ``participant`` object recording that the authenticated user approved the commit.

        Raises:
            ApiError: If the specified commit, or the repository does not exist. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.post_repositories_by_workspace_by_repo_slug_commit_by_commit_approve(
                commit, repo_slug, workspace, request_options=request_options
            ),
        )

    def post_repositories_by_workspace_by_repo_slug_commit_by_commit_comments(
        self,
        commit: str,
        repo_slug: str,
        workspace: str,
        body: CommitComment | CommitCommentDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        r"""Creates new comment on the specified commit.

        To post a reply to an existing comment, include the ``parent.id`` field:

        ```
        $ curl
        https://api.bitbucket.org/2.0/repositories/atlassian/prlinks/commit/db9ba1e031d07a02603eae0e559a7adc010257fc/comments/
        \ -X POST -u evzijst \ -H 'Content-Type: application/json' \ -d '{"content": {"raw": "One more thing!"},
        "parent": {"id": 5728901}}'
        ```

        Args:
            commit: The commit's SHA1.
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            body: The specified comment.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The newly created comment.

        Raises:
            ApiError: If the comment was detected as spam, or if the parent comment is not attached to the same node as
                the new comment If a parent ID was passed in that cannot be found ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.post_repositories_by_workspace_by_repo_slug_commit_by_commit_comments(
                commit, repo_slug, workspace, body, request_options=request_options
            ),
        )

    def post_repositories_by_workspace_by_repo_slug_commits(
        self, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> Page:
        """Identical to ``GET /repositories/{workspace}/{repo_slug}/commits``, except that POST allows clients to place
        the include and exclude parameters in the request body to avoid URL length issues.

        **Note that this resource does NOT support new commit creation.**

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A paginated list of commits

        Raises:
            ApiError: If the specified repository does not exist. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.post_repositories_by_workspace_by_repo_slug_commits(
                repo_slug, workspace, request_options=request_options
            ),
        )

    def post_repositories_by_workspace_by_repo_slug_commits_by_revision(
        self, repo_slug: str, revision: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> Page:
        """Identical to ``GET /repositories/{workspace}/{repo_slug}/commits/{revision}``, except that POST allows
        clients to place the include and exclude parameters in the request body to avoid URL length issues.

        **Note that this resource does NOT support new commit creation.**

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            revision: A commit SHA1 or ref name.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A paginated list of commits

        Raises:
            ApiError: If the specified revision does not exist. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.post_repositories_by_workspace_by_repo_slug_commits_by_revision(
                repo_slug, revision, workspace, request_options=request_options
            ),
        )

    def put_repositories_by_workspace_by_repo_slug_commit_by_commit_comments_by_comment_id(
        self,
        comment_id: int,
        commit: str,
        repo_slug: str,
        workspace: str,
        body: CommitComment | CommitCommentDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        r"""Used to update the contents of a comment. Only the content of the comment can be updated.

        ```
        $ curl https://api.bitbucket.org/2.0/repositories/atlassian/prlinks/commit/7f71b5/comments/5728901 \ -X PUT -u
        evzijst \ -H 'Content-Type: application/json' \ -d '{"content": {"raw": "One more thing!"}'
        ```

        Args:
            comment_id: The id of the comment.
            commit: The commit's SHA1.
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            body: The updated comment.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The newly updated comment.

        Raises:
            ApiError: If the comment update was detected as spam ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.put_repositories_by_workspace_by_repo_slug_commit_by_commit_comments_by_comment_id(
                comment_id, commit, repo_slug, workspace, body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> CommitsWithRawResponse:
        return self._with_raw_response


class AsyncCommits:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncCommitsWithRawResponse(client, server, auth)

    async def bulk_create_or_update_annotations(
        self,
        workspace: str,
        repo_slug: str,
        commit: str,
        report_id: str,
        body: list[ReportAnnotation | ReportAnnotationDict],
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> list[ReportAnnotation]:
        r"""Bulk upload of annotations. Annotations are individual findings that have been identified as part of a
        report, for example, a line of code that represents a vulnerability. These annotations can be attached to a
        specific file and even a specific line in that file, however, that is optional. Annotations are not mandatory
        and a report can contain up to 1000 annotations.

        Add the annotations you want to upload as objects in a JSON array and make sure each annotation has the
        external_id field set to a unique value. If you want to use an existing id from your own system, we recommend
        prefixing it with your system's name to avoid collisions, for example, mySystem-annotation001. The external id
        can later be used to identify the report as an alternative to the generated UUID. You can upload up to 100
        annotations per POST request.

        ### Sample cURL request:
        ```
        curl --location 'https://api.bitbucket.org/2.0/repositories///commit//reports/mysystem-001/annotations' \
        --header 'Content-Type: application/json' \ --data-raw '[
        {
        "external_id": "mysystem-annotation001", "title": "Security scan report", "annotation_type": "VULNERABILITY",
        "summary": "This line represents a security threat.", "severity": "HIGH", "path":
        "my-service/src/main/java/com/myCompany/mysystem/logic/Main.java", "line": 42
        },
        {
        "external_id": "mySystem-annotation002", "title": "Bug report", "annotation_type": "BUG", "result": "FAILED",
        "summary": "This line might introduce a bug.", "severity": "MEDIUM", "path":
        "my-service/src/main/java/com/myCompany/mysystem/logic/Helper.java", "line": 13
        }
        ]'
        ```

        ### Possible field values: annotation_type: VULNERABILITY, CODE_SMELL, BUG result: PASSED, FAILED, IGNORED,
        SKIPPED severity: HIGH, MEDIUM, LOW, CRITICAL

        Please refer to the Code Insights documentation for more information.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            commit: The commit for which to retrieve reports.
            report_id: Uuid or external-if of the report for which to get annotations for.
            body: The annotations to create or update
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.bulk_create_or_update_annotations(
                workspace, repo_slug, commit, report_id, body, request_options=request_options
            ),
        )

    async def create_or_update_annotation(
        self,
        workspace: str,
        repo_slug: str,
        commit: str,
        report_id: str,
        annotation_id: str,
        body: ReportAnnotation | ReportAnnotationDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ReportAnnotation:
        r"""Creates or updates an individual annotation for the specified report. Annotations are individual findings
        that have been identified as part of a report, for example, a line of code that represents a vulnerability.
        These annotations can be attached to a specific file and even a specific line in that file, however, that is
        optional. Annotations are not mandatory and a report can contain up to 1000 annotations.

        Just as reports, annotation needs to be uploaded with a unique ID that can later be used to identify the report
        as an alternative to the generated UUID. If you want to use an existing id from your own system, we recommend
        prefixing it with your system's name to avoid collisions, for example, mySystem-annotation001.

        ### Sample cURL request:
        ```
        curl --request PUT
        'https://api.bitbucket.org/2.0/repositories///commit//reports/mySystem-001/annotations/mysystem-annotation001' \
        --header 'Content-Type: application/json' \ --data-raw '{ "title": "Security scan report", "annotation_type":
        "VULNERABILITY", "summary": "This line represents a security thread.", "severity": "HIGH", "path":
        "my-service/src/main/java/com/myCompany/mysystem/logic/Main.java", "line": 42
        }'
        ```

        ### Possible field values: annotation_type: VULNERABILITY, CODE_SMELL, BUG result: PASSED, FAILED, IGNORED,
        SKIPPED severity: HIGH, MEDIUM, LOW, CRITICAL

        Please refer to the Code Insights documentation for more information.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            commit: The commit the report belongs to.
            report_id: Either the uuid or external-id of the report.
            annotation_id: Either the uuid or external-id of the annotation.
            body: The annotation to create or update
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: The provided Annotation object is malformed or incomplete. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.create_or_update_annotation(
                workspace, repo_slug, commit, report_id, annotation_id, body, request_options=request_options
            ),
        )

    async def create_or_update_report(
        self,
        workspace: str,
        repo_slug: str,
        commit: str,
        report_id: str,
        body: Report | ReportDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Report:
        r"""Creates or updates a report for the specified commit. To upload a report, make sure to generate an ID that
        is unique across all reports for that commit. If you want to use an existing id from your own system, we
        recommend prefixing it with your system's name to avoid collisions, for example, mySystem-001.

        ### Sample cURL request:
        ```
        curl --request PUT 'https://api.bitbucket.org/2.0/repositories///commit//reports/mysystem-001' \ --header
        'Content-Type: application/json' \ --data-raw '{ "title": "Security scan report", "details": "This pull request
        introduces 10 new dependency vulnerabilities.", "report_type": "SECURITY", "reporter": "mySystem", "link":
        "http://www.mysystem.com/reports/001", "result": "FAILED", "data": [
        {
        "title": "Duration (seconds)", "type": "DURATION", "value": 14
        },
        {
        "title": "Safe to merge?", "type": "BOOLEAN", "value": false
        }
        ]
        }'
        ```

        ### Possible field values: report_type: SECURITY, COVERAGE, TEST, BUG result: PASSED, FAILED, PENDING data.type:
        BOOLEAN, DATE, DURATION, LINK, NUMBER, PERCENTAGE, TEXT

        #### Data field formats
        | Type Field | Value Field Type | Value Field Display |
        |:--------------|:------------------|:--------------------|
        | None/ Omitted | Number, String or Boolean (not an array or object) | Plain text |
        | BOOLEAN | Boolean | The value will be read as a JSON boolean and displayed as 'Yes' or 'No'. |
        | DATE | Number | The value will be read as a JSON number in the form of a Unix timestamp (milliseconds) and
            will be displayed as a relative date if the date is less than one week ago, otherwise it will be displayed
            as an absolute date. |
        | DURATION | Number | The value will be read as a JSON number in milliseconds and will be displayed in a human
            readable duration format. |
        | LINK | Object: ``{"text": "Link text here", "href": "https://link.to.annotation/in/external/tool"}`` | The
            value will be read as a JSON object containing the fields "text" and "href" and will be displayed as a
            clickable link on the report. |
        | NUMBER | Number | The value will be read as a JSON number and large numbers will be displayed in a human
            readable format (e.g. 14.3k). |
        | PERCENTAGE | Number (between 0 and 100) | The value will be read as a JSON number between 0 and 100 and will
            be displayed with a percentage sign. |
        | TEXT | String | The value will be read as a JSON string and will be displayed as-is |

        Please refer to the Code Insights documentation for more information.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            commit: The commit the report belongs to.
            report_id: Either the uuid or external-id of the report.
            body: The report to create or update
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: The provided Report object is malformed or incomplete. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.create_or_update_report(
                workspace, repo_slug, commit, report_id, body, request_options=request_options
            ),
        )

    async def delete_annotation(
        self,
        workspace: str,
        repo_slug: str,
        commit: str,
        report_id: str,
        annotation_id: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Deletes a single Annotation matching the provided ID.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            commit: The commit the annotation belongs to.
            report_id: Either the uuid or external-id of the annotation.
            annotation_id: Either the uuid or external-id of the annotation.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            No content

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.delete_annotation(
                workspace, repo_slug, commit, report_id, annotation_id, request_options=request_options
            ),
        )

    async def delete_report(
        self,
        workspace: str,
        repo_slug: str,
        commit: str,
        report_id: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Deletes a single Report matching the provided ID.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            commit: The commit the report belongs to.
            report_id: Either the uuid or external-id of the report.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            No content

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.delete_report(
                workspace, repo_slug, commit, report_id, request_options=request_options
            ),
        )

    async def delete_repositories_by_workspace_by_repo_slug_commit_by_commit_approve(
        self, commit: str, repo_slug: str, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Redact the authenticated user's approval of the specified commit.

        This operation is only available to users that have explicit access to the repository. In contrast, just the
        fact that a repository is publicly accessible to users does not give them the ability to approve commits.

        Args:
            commit: The commit's SHA1.
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An empty response indicating the authenticated user's approval has been withdrawn.

        Raises:
            ApiError: If the specified commit, or the repository does not exist. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.delete_repositories_by_workspace_by_repo_slug_commit_by_commit_approve(
                commit, repo_slug, workspace, request_options=request_options
            ),
        )

    async def delete_repositories_by_workspace_by_repo_slug_commit_by_commit_comments_by_comment_id(
        self,
        comment_id: int,
        commit: str,
        repo_slug: str,
        workspace: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Deletes the specified commit comment.

        Note that deleting comments that have visible replies that point to them will not really delete the resource.
        This is to retain the integrity of the original comment tree. Instead, the ``deleted`` element is set to
        ``true`` and the content is blanked out. The comment will continue to be returned by the collections and self
        endpoints.

        Args:
            comment_id: The id of the comment.
            commit: The commit's SHA1.
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Indicates the comment was deleted by this action or a previous delete.

        Raises:
            ApiError: If the comment doesn't exist ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.delete_repositories_by_workspace_by_repo_slug_commit_by_commit_comments_by_comment_id(
                comment_id, commit, repo_slug, workspace, request_options=request_options
            ),
        )

    async def get_annotation(
        self,
        workspace: str,
        repo_slug: str,
        commit: str,
        report_id: str,
        annotation_id: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ReportAnnotation:
        """Returns a single Annotation matching the provided ID.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            commit: The commit the report belongs to.
            report_id: Either the uuid or external-id of the report.
            annotation_id: Either the uuid or external-id of the annotation.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: The annotation with the given ID was not found. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_annotation(
                workspace, repo_slug, commit, report_id, annotation_id, request_options=request_options
            ),
        )

    async def get_annotations_for_report(
        self,
        workspace: str,
        repo_slug: str,
        commit: str,
        report_id: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PaginatedAnnotations:
        """Returns a paginated list of Annotations for a specified report.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            commit: The commit for which to retrieve reports.
            report_id: Uuid or external-if of the report for which to get annotations for.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.get_annotations_for_report(
                workspace, repo_slug, commit, report_id, request_options=request_options
            ),
        )

    async def get_report(
        self,
        workspace: str,
        repo_slug: str,
        commit: str,
        report_id: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Report:
        """Returns a single Report matching the provided ID.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            commit: The commit the report belongs to.
            report_id: Either the uuid or external-id of the report.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: The report with the given ID was not found. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_report(
                workspace, repo_slug, commit, report_id, request_options=request_options
            ),
        )

    async def get_reports_for_commit(
        self, workspace: str, repo_slug: str, commit: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> PaginatedReports:
        """Returns a paginated list of Reports linked to this commit.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            commit: The commit for which to retrieve reports.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.get_reports_for_commit(
                workspace, repo_slug, commit, request_options=request_options
            ),
        )

    async def get_repositories_by_workspace_by_repo_slug_commit_by_commit(
        self, commit: str, repo_slug: str, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Commit:
        """Returns the specified commit.

        Args:
            commit: The commit's SHA1.
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The commit object

        Raises:
            ApiError: If the specified commit or repository does not exist. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_repositories_by_workspace_by_repo_slug_commit_by_commit(
                commit, repo_slug, workspace, request_options=request_options
            ),
        )

    async def get_repositories_by_workspace_by_repo_slug_commit_by_commit_comments(
        self,
        commit: str,
        repo_slug: str,
        workspace: str,
        *,
        q: str | None = None,
        sort: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PaginatedCommitComments:
        """Returns the commit's comments.

        This includes both global and inline comments.

        The default sorting is oldest to newest and can be overridden with the ``sort`` query parameter.

        Args:
            commit: The commit's SHA1.
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            q: Query string to narrow down the response as per `filtering and sorting
                </cloud/bitbucket/rest/intro/#filtering>`__.
            sort: Field by which the results should be sorted as per `filtering and sorting
                </cloud/bitbucket/rest/intro/#filtering>`__.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A paginated list of commit comments.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.get_repositories_by_workspace_by_repo_slug_commit_by_commit_comments(
                commit, repo_slug, workspace, q=q, sort=sort, request_options=request_options
            ),
        )

    async def get_repositories_by_workspace_by_repo_slug_commit_by_commit_comments_by_comment_id(
        self,
        comment_id: int,
        commit: str,
        repo_slug: str,
        workspace: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CommitComment:
        """Returns the specified commit comment.

        Args:
            comment_id: The id of the comment.
            commit: The commit's SHA1.
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The commit comment.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.get_repositories_by_workspace_by_repo_slug_commit_by_commit_comments_by_comment_id(
                comment_id, commit, repo_slug, workspace, request_options=request_options
            ),
        )

    async def get_repositories_by_workspace_by_repo_slug_commits(
        self, repo_slug: str, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Page:
        """These are the repository's commits. They are paginated and returned in reverse chronological order, similar
        to the output of ``git log``. Like these tools, the DAG can be filtered.

        #### GET /repositories/{workspace}/{repo_slug}/commits/

        Returns all commits in the repo in topological order (newest commit first). All branches and tags are included
        (similar to ``git log --all``).

        #### GET /repositories/{workspace}/{repo_slug}/commits/?exclude=master

        Returns all commits in the repo that are not on master (similar to ``git log --all ^master``).

        #### GET /repositories/{workspace}/{repo_slug}/commits/?include=foo&include=bar&exclude=fu&exclude=fubar

        Returns all commits that are on refs ``foo`` or ``bar``, but not on ``fu`` or ``fubar`` (similar to ``git log
        foo bar ^fu ^fubar``).

        An optional ``path`` parameter can be specified that will limit the results to commits that affect that path.
        ``path`` can either be a file or a directory. If a directory is specified, commits are returned that have
        modified any file in the directory tree rooted by ``path``. It is important to note that if the ``path``
        parameter is specified, the commits returned by this endpoint may no longer be a DAG, parent commits that do not
        modify the path will be omitted from the response.

        #### GET /repositories/{workspace}/{repo_slug}/commits/?path=README.md&include=foo&include=bar&exclude=master

        Returns all commits that are on refs ``foo`` or ``bar``, but not on ``master`` that changed the file README.md.

        #### GET /repositories/{workspace}/{repo_slug}/commits/?path=src/&include=foo&include=bar&exclude=master

        Returns all commits that are on refs ``foo`` or ``bar``, but not on ``master`` that changed to a file in any
        file in the directory src or its children.

        Because the response could include a very large number of commits, it is paginated. Follow the 'next' link in
        the response to navigate to the next page of commits. As with other paginated resources, do not construct your
        own links.

        When the include and exclude parameters are more than can fit in a query string, clients can use a
        ``x-www-form-urlencoded`` POST instead.

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A paginated list of commits

        Raises:
            ApiError: If the specified repository does not exist. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_repositories_by_workspace_by_repo_slug_commits(
                repo_slug, workspace, request_options=request_options
            ),
        )

    async def get_repositories_by_workspace_by_repo_slug_commits_by_revision(
        self, repo_slug: str, revision: str, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Page:
        """These are the repository's commits. They are paginated and returned in reverse chronological order, similar
        to the output of ``git log``. Like these tools, the DAG can be filtered.

        #### GET /repositories/{workspace}/{repo_slug}/commits/master

        Returns all commits on ref ``master`` (similar to ``git log master``).

        #### GET /repositories/{workspace}/{repo_slug}/commits/dev?include=foo&exclude=master

        Returns all commits on ref ``dev`` or ``foo``, except those that are reachable on ``master`` (similar to ``git
        log dev foo ^master``).

        An optional ``path`` parameter can be specified that will limit the results to commits that affect that path.
        ``path`` can either be a file or a directory. If a directory is specified, commits are returned that have
        modified any file in the directory tree rooted by ``path``. It is important to note that if the ``path``
        parameter is specified, the commits returned by this endpoint may no longer be a DAG, parent commits that do not
        modify the path will be omitted from the response.

        #### GET /repositories/{workspace}/{repo_slug}/commits/dev?path=README.md&include=foo&include=bar&exclude=master

        Returns all commits that are on refs ``dev`` or ``foo`` or ``bar``, but not on ``master`` that changed the file
        README.md.

        #### GET /repositories/{workspace}/{repo_slug}/commits/dev?path=src/&include=foo&exclude=master

        Returns all commits that are on refs ``dev`` or ``foo``, but not on ``master`` that changed to a file in any
        file in the directory src or its children.

        Because the response could include a very large number of commits, it is paginated. Follow the 'next' link in
        the response to navigate to the next page of commits. As with other paginated resources, do not construct your
        own links.

        When the include and exclude parameters are more than can fit in a query string, clients can use a
        ``x-www-form-urlencoded`` POST instead.

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            revision: A commit SHA1 or ref name.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A paginated list of commits

        Raises:
            ApiError: If the specified revision does not exist. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_repositories_by_workspace_by_repo_slug_commits_by_revision(
                repo_slug, revision, workspace, request_options=request_options
            ),
        )

    async def get_repositories_by_workspace_by_repo_slug_diff_by_spec(
        self,
        repo_slug: str,
        spec: str,
        workspace: str,
        *,
        context: int | None = None,
        path: str | None = None,
        ignore_whitespace: bool | None = None,
        binary: bool | None = None,
        renames: bool | None = None,
        merge: bool | None = None,
        topic: bool | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Produces a raw git-style diff.

        #### Single commit spec

        If the ``spec`` argument to this API is a single commit, the diff is produced against the first parent of the
        specified commit.

        #### Two commit spec

        Two commits separated by ``..`` may be provided as the ``spec``, e.g., ``3a8b42..9ff173``. When two commits are
        provided and the ``topic`` query parameter is true, this API produces a 2-way three dot diff. This is the diff
        between source commit and the merge base of the source commit and the destination commit. When the ``topic``
        query param is false, a simple git-style diff is produced.

        The two commits are interpreted as follows:

        * First commit: the commit containing the changes we wish to preview
        * Second commit: the commit representing the state to which we want to
        compare the first commit
        * **Note**: This is the opposite of the order used in ``git diff``.

        #### Comparison to patches

        While similar to patches, diffs:

        * Don't have a commit header (username, commit message, etc)
        * Support the optional ``path=foo/bar.py`` query param to filter
        the diff to just that one file diff

        #### Response

        The raw diff is returned as-is, in whatever encoding the files in the repository use. It is not decoded into
        unicode. As such, the content-type is ``text/plain``.

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            spec: A commit SHA (e.g. ``3a8b42``) or a commit range using double dot notation (e.g. ``3a8b42..9ff173``).
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            context: Generate diffs with <n> lines of context instead of the usual three.
            path: Limit the diff to a particular file (this parameter can be repeated for multiple paths).
            ignore_whitespace: Generate diffs that ignore whitespace.
            binary: Generate diffs that include binary files, true if omitted.
            renames: Whether to perform rename detection, true if omitted.
            merge: This parameter is deprecated. The 'topic' parameter should be used instead. The 'merge' and 'topic'
                parameters cannot be both used at the same time. If true, the source commit is merged into the
                destination commit, and then a diff from the destination to the merge result is returned. If false, a
                simple 'two dot' diff between the source and destination is returned. True if omitted.
            topic: If true, returns 2-way 'three-dot' diff. This is a diff between the source commit and the merge base
                of the source commit and the destination commit. If false, a simple 'two dot' diff between the source
                and destination is returned. If omitted, defaults to true, ie. a 2 way 'three-dot' diff is returned.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The raw diff

        Raises:
            ApiError: If the diff was too large and timed out. Since this endpoint does not employ any form of
                pagination, but instead returns the diff as a single document, it can run into trouble on very large
                diffs. If Bitbucket times out in cases like these, a 555 status code is returned. ``error`` is ``Error |
                RawError``."""
        return unwrap(
            await self._with_raw_response.get_repositories_by_workspace_by_repo_slug_diff_by_spec(
                repo_slug,
                spec,
                workspace,
                context=context,
                path=path,
                ignore_whitespace=ignore_whitespace,
                binary=binary,
                renames=renames,
                merge=merge,
                topic=topic,
                request_options=request_options,
            ),
        )

    async def get_repositories_by_workspace_by_repo_slug_diffstat_by_spec(
        self,
        repo_slug: str,
        spec: str,
        workspace: str,
        *,
        ignore_whitespace: bool | None = None,
        merge: bool | None = None,
        path: str | None = None,
        renames: bool | None = None,
        topic: bool | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PaginatedDiffStat:
        """Produces a response in JSON format with a record for every path modified, including information on the type
        of the change and the number of lines added and removed.

        #### Single commit spec

        If the ``spec`` argument to this API is a single commit, the diff is produced against the first parent of the
        specified commit.

        #### Two commit spec

        Two commits separated by ``..`` may be provided as the ``spec``, e.g., ``3a8b42..9ff173``. When two commits are
        provided and the ``topic`` query parameter is true, this API produces a 2-way three dot diff. This is the diff
        between source commit and the merge base of the source commit and the destination commit. When the ``topic``
        query param is false, a simple git-style diff is produced.

        The two commits are interpreted as follows:

        * First commit: the commit containing the changes we wish to preview
        * Second commit: the commit representing the state to which we want to
        compare the first commit
        * **Note**: This is the opposite of the order used in ``git diff``.

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            spec: A commit SHA (e.g. ``3a8b42``) or a commit range using double dot notation (e.g. ``3a8b42..9ff173``).
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            ignore_whitespace: Generate diffs that ignore whitespace
            merge: This parameter is deprecated. The 'topic' parameter should be used instead. The 'merge' and 'topic'
                parameters cannot be both used at the same time. If true, the source commit is merged into the
                destination commit, and then a diffstat from the destination to the merge result is returned. If false,
                a simple 'two dot' diffstat between the source and destination is returned. True if omitted.
            path: Limit the diffstat to a particular file (this parameter can be repeated for multiple paths).
            renames: Whether to perform rename detection, true if omitted.
            topic: If true, returns 2-way 'three-dot' diff. This is a diff between the source commit and the merge base
                of the source commit and the destination commit. If false, a simple 'two dot' diff between the source
                and destination is returned.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The diff stats

        Raises:
            ApiError: If generating the diffstat timed out. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_repositories_by_workspace_by_repo_slug_diffstat_by_spec(
                repo_slug,
                spec,
                workspace,
                ignore_whitespace=ignore_whitespace,
                merge=merge,
                path=path,
                renames=renames,
                topic=topic,
                request_options=request_options,
            ),
        )

    async def get_repositories_by_workspace_by_repo_slug_merge_base_by_revspec(
        self, repo_slug: str, revspec: str, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Commit:
        """Returns the best common ancestor between two commits, specified in a revspec of 2 commits (e.g.
        3a8b42..9ff173).

        If more than one best common ancestor exists, only one will be returned. It is unspecified which will be
        returned.

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            revspec: A commit range using double dot notation (e.g. ``3a8b42..9ff173``).
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The merge base of the provided spec.

        Raises:
            ApiError: If the request was not authenticated. If the authenticated user does not have access to any of the
                repositories specified. If the repository or ref in the spec does not exist. ``error`` is ``Error |
                RawError``."""
        return unwrap(
            await self._with_raw_response.get_repositories_by_workspace_by_repo_slug_merge_base_by_revspec(
                repo_slug, revspec, workspace, request_options=request_options
            ),
        )

    async def get_repositories_by_workspace_by_repo_slug_patch_by_spec(
        self, repo_slug: str, spec: str, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Produces a raw patch for a single commit (diffed against its first parent), or a patch-series for a revspec
        of 2 commits (e.g. ``3a8b42..9ff173`` where the first commit represents the source and the second commit the
        destination).

        In case of the latter (diffing a revspec), a patch series is returned for the commits on the source branch
        (``3a8b42`` and its ancestors in our example).

        While similar to diffs, patches:

        * Have a commit header (username, commit message, etc)
        * Do not support the ``path=foo/bar.py`` query parameter

        The raw patch is returned as-is, in whatever encoding the files in the repository use. It is not decoded into
        unicode. As such, the content-type is ``text/plain``.

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            spec: A commit SHA (e.g. ``3a8b42``) or a commit range using double dot notation (e.g. ``3a8b42..9ff173``).
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The raw patches

        Raises:
            ApiError: If the diff was too large and timed out. Since this endpoint does not employ any form of
                pagination, but instead returns the diff as a single document, it can run into trouble on very large
                diffs. If Bitbucket times out in cases like these, a 555 status code is returned. ``error`` is ``Error |
                RawError``."""
        return unwrap(
            await self._with_raw_response.get_repositories_by_workspace_by_repo_slug_patch_by_spec(
                repo_slug, spec, workspace, request_options=request_options
            ),
        )

    async def post_repositories_by_workspace_by_repo_slug_commit_by_commit_approve(
        self, commit: str, repo_slug: str, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Participant:
        """Approve the specified commit as the authenticated user.

        This operation is only available to users that have explicit access to the repository. In contrast, just the
        fact that a repository is publicly accessible to users does not give them the ability to approve commits.

        Args:
            commit: The commit's SHA1.
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The ``participant`` object recording that the authenticated user approved the commit.

        Raises:
            ApiError: If the specified commit, or the repository does not exist. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.post_repositories_by_workspace_by_repo_slug_commit_by_commit_approve(
                commit, repo_slug, workspace, request_options=request_options
            ),
        )

    async def post_repositories_by_workspace_by_repo_slug_commit_by_commit_comments(
        self,
        commit: str,
        repo_slug: str,
        workspace: str,
        body: CommitComment | CommitCommentDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        r"""Creates new comment on the specified commit.

        To post a reply to an existing comment, include the ``parent.id`` field:

        ```
        $ curl
        https://api.bitbucket.org/2.0/repositories/atlassian/prlinks/commit/db9ba1e031d07a02603eae0e559a7adc010257fc/comments/
        \ -X POST -u evzijst \ -H 'Content-Type: application/json' \ -d '{"content": {"raw": "One more thing!"},
        "parent": {"id": 5728901}}'
        ```

        Args:
            commit: The commit's SHA1.
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            body: The specified comment.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The newly created comment.

        Raises:
            ApiError: If the comment was detected as spam, or if the parent comment is not attached to the same node as
                the new comment If a parent ID was passed in that cannot be found ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.post_repositories_by_workspace_by_repo_slug_commit_by_commit_comments(
                commit, repo_slug, workspace, body, request_options=request_options
            ),
        )

    async def post_repositories_by_workspace_by_repo_slug_commits(
        self, repo_slug: str, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Page:
        """Identical to ``GET /repositories/{workspace}/{repo_slug}/commits``, except that POST allows clients to place
        the include and exclude parameters in the request body to avoid URL length issues.

        **Note that this resource does NOT support new commit creation.**

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A paginated list of commits

        Raises:
            ApiError: If the specified repository does not exist. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.post_repositories_by_workspace_by_repo_slug_commits(
                repo_slug, workspace, request_options=request_options
            ),
        )

    async def post_repositories_by_workspace_by_repo_slug_commits_by_revision(
        self, repo_slug: str, revision: str, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Page:
        """Identical to ``GET /repositories/{workspace}/{repo_slug}/commits/{revision}``, except that POST allows
        clients to place the include and exclude parameters in the request body to avoid URL length issues.

        **Note that this resource does NOT support new commit creation.**

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            revision: A commit SHA1 or ref name.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A paginated list of commits

        Raises:
            ApiError: If the specified revision does not exist. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.post_repositories_by_workspace_by_repo_slug_commits_by_revision(
                repo_slug, revision, workspace, request_options=request_options
            ),
        )

    async def put_repositories_by_workspace_by_repo_slug_commit_by_commit_comments_by_comment_id(
        self,
        comment_id: int,
        commit: str,
        repo_slug: str,
        workspace: str,
        body: CommitComment | CommitCommentDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        r"""Used to update the contents of a comment. Only the content of the comment can be updated.

        ```
        $ curl https://api.bitbucket.org/2.0/repositories/atlassian/prlinks/commit/7f71b5/comments/5728901 \ -X PUT -u
        evzijst \ -H 'Content-Type: application/json' \ -d '{"content": {"raw": "One more thing!"}'
        ```

        Args:
            comment_id: The id of the comment.
            commit: The commit's SHA1.
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            body: The updated comment.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The newly updated comment.

        Raises:
            ApiError: If the comment update was detected as spam ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.put_repositories_by_workspace_by_repo_slug_commit_by_commit_comments_by_comment_id(
                comment_id, commit, repo_slug, workspace, body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncCommitsWithRawResponse:
        return self._with_raw_response


class CommitsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def bulk_create_or_update_annotations(
        self,
        workspace: str,
        repo_slug: str,
        commit: str,
        report_id: str,
        body: list[ReportAnnotation | ReportAnnotationDict],
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[list[ReportAnnotation], RawError]:
        r"""Bulk upload of annotations. Annotations are individual findings that have been identified as part of a
        report, for example, a line of code that represents a vulnerability. These annotations can be attached to a
        specific file and even a specific line in that file, however, that is optional. Annotations are not mandatory
        and a report can contain up to 1000 annotations.

        Add the annotations you want to upload as objects in a JSON array and make sure each annotation has the
        external_id field set to a unique value. If you want to use an existing id from your own system, we recommend
        prefixing it with your system's name to avoid collisions, for example, mySystem-annotation001. The external id
        can later be used to identify the report as an alternative to the generated UUID. You can upload up to 100
        annotations per POST request.

        ### Sample cURL request:
        ```
        curl --location 'https://api.bitbucket.org/2.0/repositories///commit//reports/mysystem-001/annotations' \
        --header 'Content-Type: application/json' \ --data-raw '[
        {
        "external_id": "mysystem-annotation001", "title": "Security scan report", "annotation_type": "VULNERABILITY",
        "summary": "This line represents a security threat.", "severity": "HIGH", "path":
        "my-service/src/main/java/com/myCompany/mysystem/logic/Main.java", "line": 42
        },
        {
        "external_id": "mySystem-annotation002", "title": "Bug report", "annotation_type": "BUG", "result": "FAILED",
        "summary": "This line might introduce a bug.", "severity": "MEDIUM", "path":
        "my-service/src/main/java/com/myCompany/mysystem/logic/Helper.java", "line": 13
        }
        ]'
        ```

        ### Possible field values: annotation_type: VULNERABILITY, CODE_SMELL, BUG result: PASSED, FAILED, IGNORED,
        SKIPPED severity: HIGH, MEDIUM, LOW, CRITICAL

        Please refer to the Code Insights documentation for more information.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            commit: The commit for which to retrieve reports.
            report_id: Uuid or external-if of the report for which to get annotations for.
            body: The annotations to create or update
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default(
                "/repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}/annotations"
            ),
            path_params=[
                param[str]("workspace", workspace),
                param[str]("repo_slug", repo_slug),
                param[str]("commit", commit),
                param[str]("reportId", report_id),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[list[ReportAnnotation | ReportAnnotationDict]](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[list[ReportAnnotation]],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def create_or_update_annotation(
        self,
        workspace: str,
        repo_slug: str,
        commit: str,
        report_id: str,
        annotation_id: str,
        body: ReportAnnotation | ReportAnnotationDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ReportAnnotation, CreateOrUpdateAnnotationErrorBody]:
        r"""Creates or updates an individual annotation for the specified report. Annotations are individual findings
        that have been identified as part of a report, for example, a line of code that represents a vulnerability.
        These annotations can be attached to a specific file and even a specific line in that file, however, that is
        optional. Annotations are not mandatory and a report can contain up to 1000 annotations.

        Just as reports, annotation needs to be uploaded with a unique ID that can later be used to identify the report
        as an alternative to the generated UUID. If you want to use an existing id from your own system, we recommend
        prefixing it with your system's name to avoid collisions, for example, mySystem-annotation001.

        ### Sample cURL request:
        ```
        curl --request PUT
        'https://api.bitbucket.org/2.0/repositories///commit//reports/mySystem-001/annotations/mysystem-annotation001' \
        --header 'Content-Type: application/json' \ --data-raw '{ "title": "Security scan report", "annotation_type":
        "VULNERABILITY", "summary": "This line represents a security thread.", "severity": "HIGH", "path":
        "my-service/src/main/java/com/myCompany/mysystem/logic/Main.java", "line": 42
        }'
        ```

        ### Possible field values: annotation_type: VULNERABILITY, CODE_SMELL, BUG result: PASSED, FAILED, IGNORED,
        SKIPPED severity: HIGH, MEDIUM, LOW, CRITICAL

        Please refer to the Code Insights documentation for more information.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            commit: The commit the report belongs to.
            report_id: Either the uuid or external-id of the report.
            annotation_id: Either the uuid or external-id of the annotation.
            body: The annotation to create or update
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default(
                "/repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}/annotations/{annotationId}"
            ),
            path_params=[
                param[str]("workspace", workspace),
                param[str]("repo_slug", repo_slug),
                param[str]("commit", commit),
                param[str]("reportId", report_id),
                param[str]("annotationId", annotation_id),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ReportAnnotation | ReportAnnotationDict](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[ReportAnnotation],
            error_mapper=create_or_update_annotation_error_mapper,
            request_options=request_options,
        )

    def create_or_update_report(
        self,
        workspace: str,
        repo_slug: str,
        commit: str,
        report_id: str,
        body: Report | ReportDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Report, CreateOrUpdateReportErrorBody]:
        r"""Creates or updates a report for the specified commit. To upload a report, make sure to generate an ID that
        is unique across all reports for that commit. If you want to use an existing id from your own system, we
        recommend prefixing it with your system's name to avoid collisions, for example, mySystem-001.

        ### Sample cURL request:
        ```
        curl --request PUT 'https://api.bitbucket.org/2.0/repositories///commit//reports/mysystem-001' \ --header
        'Content-Type: application/json' \ --data-raw '{ "title": "Security scan report", "details": "This pull request
        introduces 10 new dependency vulnerabilities.", "report_type": "SECURITY", "reporter": "mySystem", "link":
        "http://www.mysystem.com/reports/001", "result": "FAILED", "data": [
        {
        "title": "Duration (seconds)", "type": "DURATION", "value": 14
        },
        {
        "title": "Safe to merge?", "type": "BOOLEAN", "value": false
        }
        ]
        }'
        ```

        ### Possible field values: report_type: SECURITY, COVERAGE, TEST, BUG result: PASSED, FAILED, PENDING data.type:
        BOOLEAN, DATE, DURATION, LINK, NUMBER, PERCENTAGE, TEXT

        #### Data field formats
        | Type Field | Value Field Type | Value Field Display |
        |:--------------|:------------------|:--------------------|
        | None/ Omitted | Number, String or Boolean (not an array or object) | Plain text |
        | BOOLEAN | Boolean | The value will be read as a JSON boolean and displayed as 'Yes' or 'No'. |
        | DATE | Number | The value will be read as a JSON number in the form of a Unix timestamp (milliseconds) and
            will be displayed as a relative date if the date is less than one week ago, otherwise it will be displayed
            as an absolute date. |
        | DURATION | Number | The value will be read as a JSON number in milliseconds and will be displayed in a human
            readable duration format. |
        | LINK | Object: ``{"text": "Link text here", "href": "https://link.to.annotation/in/external/tool"}`` | The
            value will be read as a JSON object containing the fields "text" and "href" and will be displayed as a
            clickable link on the report. |
        | NUMBER | Number | The value will be read as a JSON number and large numbers will be displayed in a human
            readable format (e.g. 14.3k). |
        | PERCENTAGE | Number (between 0 and 100) | The value will be read as a JSON number between 0 and 100 and will
            be displayed with a percentage sign. |
        | TEXT | String | The value will be read as a JSON string and will be displayed as-is |

        Please refer to the Code Insights documentation for more information.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            commit: The commit the report belongs to.
            report_id: Either the uuid or external-id of the report.
            body: The report to create or update
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default(
                "/repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}"
            ),
            path_params=[
                param[str]("workspace", workspace),
                param[str]("repo_slug", repo_slug),
                param[str]("commit", commit),
                param[str]("reportId", report_id),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[Report | ReportDict](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[Report],
            error_mapper=create_or_update_report_error_mapper,
            request_options=request_options,
        )

    def delete_annotation(
        self,
        workspace: str,
        repo_slug: str,
        commit: str,
        report_id: str,
        annotation_id: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, RawError]:
        """Deletes a single Annotation matching the provided ID.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            commit: The commit the annotation belongs to.
            report_id: Either the uuid or external-id of the annotation.
            annotation_id: Either the uuid or external-id of the annotation.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default(
                "/repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}/annotations/{annotationId}"
            ),
            path_params=[
                param[str]("workspace", workspace),
                param[str]("repo_slug", repo_slug),
                param[str]("commit", commit),
                param[str]("reportId", report_id),
                param[str]("annotationId", annotation_id),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=empty_response,
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def delete_report(
        self,
        workspace: str,
        repo_slug: str,
        commit: str,
        report_id: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, RawError]:
        """Deletes a single Report matching the provided ID.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            commit: The commit the report belongs to.
            report_id: Either the uuid or external-id of the report.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default(
                "/repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}"
            ),
            path_params=[
                param[str]("workspace", workspace),
                param[str]("repo_slug", repo_slug),
                param[str]("commit", commit),
                param[str]("reportId", report_id),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=empty_response,
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def delete_repositories_by_workspace_by_repo_slug_commit_by_commit_approve(
        self, commit: str, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteRepositoriesByWorkspaceByRepoSlugCommitByCommitApproveErrorBody]:
        """Redact the authenticated user's approval of the specified commit.

        This operation is only available to users that have explicit access to the repository. In contrast, just the
        fact that a repository is publicly accessible to users does not give them the ability to approve commits.

        Args:
            commit: The commit's SHA1.
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
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/commit/{commit}/approve"),
            path_params=[
                param[str]("commit", commit), param[str]("repo_slug", repo_slug), param[str]("workspace", workspace)
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=empty_response,
            error_mapper=delete_repositories_by_workspace_by_repo_slug_commit_by_commit_approve_error_mapper,
            request_options=request_options,
        )

    def delete_repositories_by_workspace_by_repo_slug_commit_by_commit_comments_by_comment_id(
        self,
        comment_id: int,
        commit: str,
        repo_slug: str,
        workspace: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DeleteRepositoriesByWorkspaceByRepoSlugCommitByCommitCommentsByCommentIdErrorBody]:
        """Deletes the specified commit comment.

        Note that deleting comments that have visible replies that point to them will not really delete the resource.
        This is to retain the integrity of the original comment tree. Instead, the ``deleted`` element is set to
        ``true`` and the content is blanked out. The comment will continue to be returned by the collections and self
        endpoints.

        Args:
            comment_id: The id of the comment.
            commit: The commit's SHA1.
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
                "/repositories/{workspace}/{repo_slug}/commit/{commit}/comments/{comment_id}"
            ),
            path_params=[
                param[int]("comment_id", comment_id),
                param[str]("commit", commit),
                param[str]("repo_slug", repo_slug),
                param[str]("workspace", workspace),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=empty_response,
            error_mapper=delete_repositories_by_workspace_by_repo_slug_commit_by_commit_comments_by_comment_id_error_mapper,
            request_options=request_options,
        )

    def get_annotation(
        self,
        workspace: str,
        repo_slug: str,
        commit: str,
        report_id: str,
        annotation_id: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ReportAnnotation, GetAnnotationErrorBody]:
        """Returns a single Annotation matching the provided ID.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            commit: The commit the report belongs to.
            report_id: Either the uuid or external-id of the report.
            annotation_id: Either the uuid or external-id of the annotation.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}/annotations/{annotationId}"
            ),
            path_params=[
                param[str]("workspace", workspace),
                param[str]("repo_slug", repo_slug),
                param[str]("commit", commit),
                param[str]("reportId", report_id),
                param[str]("annotationId", annotation_id),
            ],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[ReportAnnotation],
            error_mapper=get_annotation_error_mapper,
            request_options=request_options,
        )

    def get_annotations_for_report(
        self,
        workspace: str,
        repo_slug: str,
        commit: str,
        report_id: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PaginatedAnnotations, RawError]:
        """Returns a paginated list of Annotations for a specified report.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            commit: The commit for which to retrieve reports.
            report_id: Uuid or external-if of the report for which to get annotations for.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}/annotations"
            ),
            path_params=[
                param[str]("workspace", workspace),
                param[str]("repo_slug", repo_slug),
                param[str]("commit", commit),
                param[str]("reportId", report_id),
            ],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[PaginatedAnnotations],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def get_report(
        self,
        workspace: str,
        repo_slug: str,
        commit: str,
        report_id: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Report, GetReportErrorBody]:
        """Returns a single Report matching the provided ID.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            commit: The commit the report belongs to.
            report_id: Either the uuid or external-id of the report.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}"
            ),
            path_params=[
                param[str]("workspace", workspace),
                param[str]("repo_slug", repo_slug),
                param[str]("commit", commit),
                param[str]("reportId", report_id),
            ],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[Report],
            error_mapper=get_report_error_mapper,
            request_options=request_options,
        )

    def get_reports_for_commit(
        self, workspace: str, repo_slug: str, commit: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[PaginatedReports, RawError]:
        """Returns a paginated list of Reports linked to this commit.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            commit: The commit for which to retrieve reports.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/commit/{commit}/reports"),
            path_params=[
                param[str]("workspace", workspace), param[str]("repo_slug", repo_slug), param[str]("commit", commit)
            ],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[PaginatedReports],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def get_repositories_by_workspace_by_repo_slug_commit_by_commit(
        self, commit: str, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Commit, GetRepositoriesByWorkspaceByRepoSlugCommitByCommitErrorBody]:
        """Returns the specified commit.

        Args:
            commit: The commit's SHA1.
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
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/commit/{commit}"),
            path_params=[
                param[str]("commit", commit), param[str]("repo_slug", repo_slug), param[str]("workspace", workspace)
            ],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[Commit],
            error_mapper=get_repositories_by_workspace_by_repo_slug_commit_by_commit_error_mapper,
            request_options=request_options,
        )

    def get_repositories_by_workspace_by_repo_slug_commit_by_commit_comments(
        self,
        commit: str,
        repo_slug: str,
        workspace: str,
        *,
        q: str | None = None,
        sort: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PaginatedCommitComments, RawError]:
        """Returns the commit's comments.

        This includes both global and inline comments.

        The default sorting is oldest to newest and can be overridden with the ``sort`` query parameter.

        Args:
            commit: The commit's SHA1.
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
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
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/commit/{commit}/comments"),
            path_params=[
                param[str]("commit", commit), param[str]("repo_slug", repo_slug), param[str]("workspace", workspace)
            ],
            query_params=[param[str | None]("q", q), param[str | None]("sort", sort)],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[PaginatedCommitComments],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def get_repositories_by_workspace_by_repo_slug_commit_by_commit_comments_by_comment_id(
        self,
        comment_id: int,
        commit: str,
        repo_slug: str,
        workspace: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[CommitComment, RawError]:
        """Returns the specified commit comment.

        Args:
            comment_id: The id of the comment.
            commit: The commit's SHA1.
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
                "/repositories/{workspace}/{repo_slug}/commit/{commit}/comments/{comment_id}"
            ),
            path_params=[
                param[int]("comment_id", comment_id),
                param[str]("commit", commit),
                param[str]("repo_slug", repo_slug),
                param[str]("workspace", workspace),
            ],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[CommitComment],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def get_repositories_by_workspace_by_repo_slug_commits(
        self, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Page, GetRepositoriesByWorkspaceByRepoSlugCommitsErrorBody]:
        """These are the repository's commits. They are paginated and returned in reverse chronological order, similar
        to the output of ``git log``. Like these tools, the DAG can be filtered.

        #### GET /repositories/{workspace}/{repo_slug}/commits/

        Returns all commits in the repo in topological order (newest commit first). All branches and tags are included
        (similar to ``git log --all``).

        #### GET /repositories/{workspace}/{repo_slug}/commits/?exclude=master

        Returns all commits in the repo that are not on master (similar to ``git log --all ^master``).

        #### GET /repositories/{workspace}/{repo_slug}/commits/?include=foo&include=bar&exclude=fu&exclude=fubar

        Returns all commits that are on refs ``foo`` or ``bar``, but not on ``fu`` or ``fubar`` (similar to ``git log
        foo bar ^fu ^fubar``).

        An optional ``path`` parameter can be specified that will limit the results to commits that affect that path.
        ``path`` can either be a file or a directory. If a directory is specified, commits are returned that have
        modified any file in the directory tree rooted by ``path``. It is important to note that if the ``path``
        parameter is specified, the commits returned by this endpoint may no longer be a DAG, parent commits that do not
        modify the path will be omitted from the response.

        #### GET /repositories/{workspace}/{repo_slug}/commits/?path=README.md&include=foo&include=bar&exclude=master

        Returns all commits that are on refs ``foo`` or ``bar``, but not on ``master`` that changed the file README.md.

        #### GET /repositories/{workspace}/{repo_slug}/commits/?path=src/&include=foo&include=bar&exclude=master

        Returns all commits that are on refs ``foo`` or ``bar``, but not on ``master`` that changed to a file in any
        file in the directory src or its children.

        Because the response could include a very large number of commits, it is paginated. Follow the 'next' link in
        the response to navigate to the next page of commits. As with other paginated resources, do not construct your
        own links.

        When the include and exclude parameters are more than can fit in a query string, clients can use a
        ``x-www-form-urlencoded`` POST instead.

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
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/commits"),
            path_params=[param[str]("repo_slug", repo_slug), param[str]("workspace", workspace)],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[Page],
            error_mapper=get_repositories_by_workspace_by_repo_slug_commits_error_mapper,
            request_options=request_options,
        )

    def get_repositories_by_workspace_by_repo_slug_commits_by_revision(
        self, repo_slug: str, revision: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Page, GetRepositoriesByWorkspaceByRepoSlugCommitsByRevisionErrorBody]:
        """These are the repository's commits. They are paginated and returned in reverse chronological order, similar
        to the output of ``git log``. Like these tools, the DAG can be filtered.

        #### GET /repositories/{workspace}/{repo_slug}/commits/master

        Returns all commits on ref ``master`` (similar to ``git log master``).

        #### GET /repositories/{workspace}/{repo_slug}/commits/dev?include=foo&exclude=master

        Returns all commits on ref ``dev`` or ``foo``, except those that are reachable on ``master`` (similar to ``git
        log dev foo ^master``).

        An optional ``path`` parameter can be specified that will limit the results to commits that affect that path.
        ``path`` can either be a file or a directory. If a directory is specified, commits are returned that have
        modified any file in the directory tree rooted by ``path``. It is important to note that if the ``path``
        parameter is specified, the commits returned by this endpoint may no longer be a DAG, parent commits that do not
        modify the path will be omitted from the response.

        #### GET /repositories/{workspace}/{repo_slug}/commits/dev?path=README.md&include=foo&include=bar&exclude=master

        Returns all commits that are on refs ``dev`` or ``foo`` or ``bar``, but not on ``master`` that changed the file
        README.md.

        #### GET /repositories/{workspace}/{repo_slug}/commits/dev?path=src/&include=foo&exclude=master

        Returns all commits that are on refs ``dev`` or ``foo``, but not on ``master`` that changed to a file in any
        file in the directory src or its children.

        Because the response could include a very large number of commits, it is paginated. Follow the 'next' link in
        the response to navigate to the next page of commits. As with other paginated resources, do not construct your
        own links.

        When the include and exclude parameters are more than can fit in a query string, clients can use a
        ``x-www-form-urlencoded`` POST instead.

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            revision: A commit SHA1 or ref name.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/commits/{revision}"),
            path_params=[
                param[str]("repo_slug", repo_slug), param[str]("revision", revision), param[str]("workspace", workspace)
            ],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[Page],
            error_mapper=get_repositories_by_workspace_by_repo_slug_commits_by_revision_error_mapper,
            request_options=request_options,
        )

    def get_repositories_by_workspace_by_repo_slug_diff_by_spec(
        self,
        repo_slug: str,
        spec: str,
        workspace: str,
        *,
        context: int | None = None,
        path: str | None = None,
        ignore_whitespace: bool | None = None,
        binary: bool | None = None,
        renames: bool | None = None,
        merge: bool | None = None,
        topic: bool | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, GetRepositoriesByWorkspaceByRepoSlugDiffBySpecErrorBody]:
        """Produces a raw git-style diff.

        #### Single commit spec

        If the ``spec`` argument to this API is a single commit, the diff is produced against the first parent of the
        specified commit.

        #### Two commit spec

        Two commits separated by ``..`` may be provided as the ``spec``, e.g., ``3a8b42..9ff173``. When two commits are
        provided and the ``topic`` query parameter is true, this API produces a 2-way three dot diff. This is the diff
        between source commit and the merge base of the source commit and the destination commit. When the ``topic``
        query param is false, a simple git-style diff is produced.

        The two commits are interpreted as follows:

        * First commit: the commit containing the changes we wish to preview
        * Second commit: the commit representing the state to which we want to
        compare the first commit
        * **Note**: This is the opposite of the order used in ``git diff``.

        #### Comparison to patches

        While similar to patches, diffs:

        * Don't have a commit header (username, commit message, etc)
        * Support the optional ``path=foo/bar.py`` query param to filter
        the diff to just that one file diff

        #### Response

        The raw diff is returned as-is, in whatever encoding the files in the repository use. It is not decoded into
        unicode. As such, the content-type is ``text/plain``.

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            spec: A commit SHA (e.g. ``3a8b42``) or a commit range using double dot notation (e.g. ``3a8b42..9ff173``).
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            context: Generate diffs with <n> lines of context instead of the usual three.
            path: Limit the diff to a particular file (this parameter can be repeated for multiple paths).
            ignore_whitespace: Generate diffs that ignore whitespace.
            binary: Generate diffs that include binary files, true if omitted.
            renames: Whether to perform rename detection, true if omitted.
            merge: This parameter is deprecated. The 'topic' parameter should be used instead. The 'merge' and 'topic'
                parameters cannot be both used at the same time. If true, the source commit is merged into the
                destination commit, and then a diff from the destination to the merge result is returned. If false, a
                simple 'two dot' diff between the source and destination is returned. True if omitted.
            topic: If true, returns 2-way 'three-dot' diff. This is a diff between the source commit and the merge base
                of the source commit and the destination commit. If false, a simple 'two dot' diff between the source
                and destination is returned. If omitted, defaults to true, ie. a 2 way 'three-dot' diff is returned.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/diff/{spec}"),
            path_params=[
                param[str]("repo_slug", repo_slug), param[str]("spec", spec), param[str]("workspace", workspace)
            ],
            query_params=[
                param[int | None]("context", context),
                param[str | None]("path", path),
                param[bool | None]("ignore_whitespace", ignore_whitespace),
                param[bool | None]("binary", binary),
                param[bool | None]("renames", renames),
                param[bool | None]("merge", merge),
                param[bool | None]("topic", topic),
            ],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=empty_response,
            error_mapper=get_repositories_by_workspace_by_repo_slug_diff_by_spec_error_mapper,
            request_options=request_options,
        )

    def get_repositories_by_workspace_by_repo_slug_diffstat_by_spec(
        self,
        repo_slug: str,
        spec: str,
        workspace: str,
        *,
        ignore_whitespace: bool | None = None,
        merge: bool | None = None,
        path: str | None = None,
        renames: bool | None = None,
        topic: bool | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PaginatedDiffStat, GetRepositoriesByWorkspaceByRepoSlugDiffstatBySpecErrorBody]:
        """Produces a response in JSON format with a record for every path modified, including information on the type
        of the change and the number of lines added and removed.

        #### Single commit spec

        If the ``spec`` argument to this API is a single commit, the diff is produced against the first parent of the
        specified commit.

        #### Two commit spec

        Two commits separated by ``..`` may be provided as the ``spec``, e.g., ``3a8b42..9ff173``. When two commits are
        provided and the ``topic`` query parameter is true, this API produces a 2-way three dot diff. This is the diff
        between source commit and the merge base of the source commit and the destination commit. When the ``topic``
        query param is false, a simple git-style diff is produced.

        The two commits are interpreted as follows:

        * First commit: the commit containing the changes we wish to preview
        * Second commit: the commit representing the state to which we want to
        compare the first commit
        * **Note**: This is the opposite of the order used in ``git diff``.

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            spec: A commit SHA (e.g. ``3a8b42``) or a commit range using double dot notation (e.g. ``3a8b42..9ff173``).
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            ignore_whitespace: Generate diffs that ignore whitespace
            merge: This parameter is deprecated. The 'topic' parameter should be used instead. The 'merge' and 'topic'
                parameters cannot be both used at the same time. If true, the source commit is merged into the
                destination commit, and then a diffstat from the destination to the merge result is returned. If false,
                a simple 'two dot' diffstat between the source and destination is returned. True if omitted.
            path: Limit the diffstat to a particular file (this parameter can be repeated for multiple paths).
            renames: Whether to perform rename detection, true if omitted.
            topic: If true, returns 2-way 'three-dot' diff. This is a diff between the source commit and the merge base
                of the source commit and the destination commit. If false, a simple 'two dot' diff between the source
                and destination is returned.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/diffstat/{spec}"),
            path_params=[
                param[str]("repo_slug", repo_slug), param[str]("spec", spec), param[str]("workspace", workspace)
            ],
            query_params=[
                param[bool | None]("ignore_whitespace", ignore_whitespace),
                param[bool | None]("merge", merge),
                param[str | None]("path", path),
                param[bool | None]("renames", renames),
                param[bool | None]("topic", topic),
            ],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[PaginatedDiffStat],
            error_mapper=get_repositories_by_workspace_by_repo_slug_diffstat_by_spec_error_mapper,
            request_options=request_options,
        )

    def get_repositories_by_workspace_by_repo_slug_merge_base_by_revspec(
        self, repo_slug: str, revspec: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Commit, GetRepositoriesByWorkspaceByRepoSlugMergeBaseByRevspecErrorBody]:
        """Returns the best common ancestor between two commits, specified in a revspec of 2 commits (e.g.
        3a8b42..9ff173).

        If more than one best common ancestor exists, only one will be returned. It is unspecified which will be
        returned.

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            revspec: A commit range using double dot notation (e.g. ``3a8b42..9ff173``).
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/merge-base/{revspec}"),
            path_params=[
                param[str]("repo_slug", repo_slug), param[str]("revspec", revspec), param[str]("workspace", workspace)
            ],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[Commit],
            error_mapper=get_repositories_by_workspace_by_repo_slug_merge_base_by_revspec_error_mapper,
            request_options=request_options,
        )

    def get_repositories_by_workspace_by_repo_slug_patch_by_spec(
        self, repo_slug: str, spec: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, GetRepositoriesByWorkspaceByRepoSlugPatchBySpecErrorBody]:
        """Produces a raw patch for a single commit (diffed against its first parent), or a patch-series for a revspec
        of 2 commits (e.g. ``3a8b42..9ff173`` where the first commit represents the source and the second commit the
        destination).

        In case of the latter (diffing a revspec), a patch series is returned for the commits on the source branch
        (``3a8b42`` and its ancestors in our example).

        While similar to diffs, patches:

        * Have a commit header (username, commit message, etc)
        * Do not support the ``path=foo/bar.py`` query parameter

        The raw patch is returned as-is, in whatever encoding the files in the repository use. It is not decoded into
        unicode. As such, the content-type is ``text/plain``.

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            spec: A commit SHA (e.g. ``3a8b42``) or a commit range using double dot notation (e.g. ``3a8b42..9ff173``).
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/patch/{spec}"),
            path_params=[
                param[str]("repo_slug", repo_slug), param[str]("spec", spec), param[str]("workspace", workspace)
            ],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=empty_response,
            error_mapper=get_repositories_by_workspace_by_repo_slug_patch_by_spec_error_mapper,
            request_options=request_options,
        )

    def post_repositories_by_workspace_by_repo_slug_commit_by_commit_approve(
        self, commit: str, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Participant, PostRepositoriesByWorkspaceByRepoSlugCommitByCommitApproveErrorBody]:
        """Approve the specified commit as the authenticated user.

        This operation is only available to users that have explicit access to the repository. In contrast, just the
        fact that a repository is publicly accessible to users does not give them the ability to approve commits.

        Args:
            commit: The commit's SHA1.
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
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/commit/{commit}/approve"),
            path_params=[
                param[str]("commit", commit), param[str]("repo_slug", repo_slug), param[str]("workspace", workspace)
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[Participant],
            error_mapper=post_repositories_by_workspace_by_repo_slug_commit_by_commit_approve_error_mapper,
            request_options=request_options,
        )

    def post_repositories_by_workspace_by_repo_slug_commit_by_commit_comments(
        self,
        commit: str,
        repo_slug: str,
        workspace: str,
        body: CommitComment | CommitCommentDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, PostRepositoriesByWorkspaceByRepoSlugCommitByCommitCommentsErrorBody]:
        r"""Creates new comment on the specified commit.

        To post a reply to an existing comment, include the ``parent.id`` field:

        ```
        $ curl
        https://api.bitbucket.org/2.0/repositories/atlassian/prlinks/commit/db9ba1e031d07a02603eae0e559a7adc010257fc/comments/
        \ -X POST -u evzijst \ -H 'Content-Type: application/json' \ -d '{"content": {"raw": "One more thing!"},
        "parent": {"id": 5728901}}'
        ```

        Args:
            commit: The commit's SHA1.
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            body: The specified comment.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/commit/{commit}/comments"),
            path_params=[
                param[str]("commit", commit), param[str]("repo_slug", repo_slug), param[str]("workspace", workspace)
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CommitComment | CommitCommentDict](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=empty_response,
            error_mapper=post_repositories_by_workspace_by_repo_slug_commit_by_commit_comments_error_mapper,
            request_options=request_options,
        )

    def post_repositories_by_workspace_by_repo_slug_commits(
        self, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Page, PostRepositoriesByWorkspaceByRepoSlugCommitsErrorBody]:
        """Identical to ``GET /repositories/{workspace}/{repo_slug}/commits``, except that POST allows clients to place
        the include and exclude parameters in the request body to avoid URL length issues.

        **Note that this resource does NOT support new commit creation.**

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
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/commits"),
            path_params=[param[str]("repo_slug", repo_slug), param[str]("workspace", workspace)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[Page],
            error_mapper=post_repositories_by_workspace_by_repo_slug_commits_error_mapper,
            request_options=request_options,
        )

    def post_repositories_by_workspace_by_repo_slug_commits_by_revision(
        self, repo_slug: str, revision: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Page, PostRepositoriesByWorkspaceByRepoSlugCommitsByRevisionErrorBody]:
        """Identical to ``GET /repositories/{workspace}/{repo_slug}/commits/{revision}``, except that POST allows
        clients to place the include and exclude parameters in the request body to avoid URL length issues.

        **Note that this resource does NOT support new commit creation.**

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            revision: A commit SHA1 or ref name.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/commits/{revision}"),
            path_params=[
                param[str]("repo_slug", repo_slug), param[str]("revision", revision), param[str]("workspace", workspace)
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[Page],
            error_mapper=post_repositories_by_workspace_by_repo_slug_commits_by_revision_error_mapper,
            request_options=request_options,
        )

    def put_repositories_by_workspace_by_repo_slug_commit_by_commit_comments_by_comment_id(
        self,
        comment_id: int,
        commit: str,
        repo_slug: str,
        workspace: str,
        body: CommitComment | CommitCommentDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, PutRepositoriesByWorkspaceByRepoSlugCommitByCommitCommentsByCommentIdErrorBody]:
        r"""Used to update the contents of a comment. Only the content of the comment can be updated.

        ```
        $ curl https://api.bitbucket.org/2.0/repositories/atlassian/prlinks/commit/7f71b5/comments/5728901 \ -X PUT -u
        evzijst \ -H 'Content-Type: application/json' \ -d '{"content": {"raw": "One more thing!"}'
        ```

        Args:
            comment_id: The id of the comment.
            commit: The commit's SHA1.
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
                "/repositories/{workspace}/{repo_slug}/commit/{commit}/comments/{comment_id}"
            ),
            path_params=[
                param[int]("comment_id", comment_id),
                param[str]("commit", commit),
                param[str]("repo_slug", repo_slug),
                param[str]("workspace", workspace),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CommitComment | CommitCommentDict](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=empty_response,
            error_mapper=put_repositories_by_workspace_by_repo_slug_commit_by_commit_comments_by_comment_id_error_mapper,
            request_options=request_options,
        )


class AsyncCommitsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def bulk_create_or_update_annotations(
        self,
        workspace: str,
        repo_slug: str,
        commit: str,
        report_id: str,
        body: list[ReportAnnotation | ReportAnnotationDict],
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[list[ReportAnnotation], RawError]:
        r"""Bulk upload of annotations. Annotations are individual findings that have been identified as part of a
        report, for example, a line of code that represents a vulnerability. These annotations can be attached to a
        specific file and even a specific line in that file, however, that is optional. Annotations are not mandatory
        and a report can contain up to 1000 annotations.

        Add the annotations you want to upload as objects in a JSON array and make sure each annotation has the
        external_id field set to a unique value. If you want to use an existing id from your own system, we recommend
        prefixing it with your system's name to avoid collisions, for example, mySystem-annotation001. The external id
        can later be used to identify the report as an alternative to the generated UUID. You can upload up to 100
        annotations per POST request.

        ### Sample cURL request:
        ```
        curl --location 'https://api.bitbucket.org/2.0/repositories///commit//reports/mysystem-001/annotations' \
        --header 'Content-Type: application/json' \ --data-raw '[
        {
        "external_id": "mysystem-annotation001", "title": "Security scan report", "annotation_type": "VULNERABILITY",
        "summary": "This line represents a security threat.", "severity": "HIGH", "path":
        "my-service/src/main/java/com/myCompany/mysystem/logic/Main.java", "line": 42
        },
        {
        "external_id": "mySystem-annotation002", "title": "Bug report", "annotation_type": "BUG", "result": "FAILED",
        "summary": "This line might introduce a bug.", "severity": "MEDIUM", "path":
        "my-service/src/main/java/com/myCompany/mysystem/logic/Helper.java", "line": 13
        }
        ]'
        ```

        ### Possible field values: annotation_type: VULNERABILITY, CODE_SMELL, BUG result: PASSED, FAILED, IGNORED,
        SKIPPED severity: HIGH, MEDIUM, LOW, CRITICAL

        Please refer to the Code Insights documentation for more information.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            commit: The commit for which to retrieve reports.
            report_id: Uuid or external-if of the report for which to get annotations for.
            body: The annotations to create or update
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default(
                "/repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}/annotations"
            ),
            path_params=[
                param[str]("workspace", workspace),
                param[str]("repo_slug", repo_slug),
                param[str]("commit", commit),
                param[str]("reportId", report_id),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[list[ReportAnnotation | ReportAnnotationDict]](body),
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[list[ReportAnnotation]],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def create_or_update_annotation(
        self,
        workspace: str,
        repo_slug: str,
        commit: str,
        report_id: str,
        annotation_id: str,
        body: ReportAnnotation | ReportAnnotationDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ReportAnnotation, CreateOrUpdateAnnotationErrorBody]:
        r"""Creates or updates an individual annotation for the specified report. Annotations are individual findings
        that have been identified as part of a report, for example, a line of code that represents a vulnerability.
        These annotations can be attached to a specific file and even a specific line in that file, however, that is
        optional. Annotations are not mandatory and a report can contain up to 1000 annotations.

        Just as reports, annotation needs to be uploaded with a unique ID that can later be used to identify the report
        as an alternative to the generated UUID. If you want to use an existing id from your own system, we recommend
        prefixing it with your system's name to avoid collisions, for example, mySystem-annotation001.

        ### Sample cURL request:
        ```
        curl --request PUT
        'https://api.bitbucket.org/2.0/repositories///commit//reports/mySystem-001/annotations/mysystem-annotation001' \
        --header 'Content-Type: application/json' \ --data-raw '{ "title": "Security scan report", "annotation_type":
        "VULNERABILITY", "summary": "This line represents a security thread.", "severity": "HIGH", "path":
        "my-service/src/main/java/com/myCompany/mysystem/logic/Main.java", "line": 42
        }'
        ```

        ### Possible field values: annotation_type: VULNERABILITY, CODE_SMELL, BUG result: PASSED, FAILED, IGNORED,
        SKIPPED severity: HIGH, MEDIUM, LOW, CRITICAL

        Please refer to the Code Insights documentation for more information.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            commit: The commit the report belongs to.
            report_id: Either the uuid or external-id of the report.
            annotation_id: Either the uuid or external-id of the annotation.
            body: The annotation to create or update
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default(
                "/repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}/annotations/{annotationId}"
            ),
            path_params=[
                param[str]("workspace", workspace),
                param[str]("repo_slug", repo_slug),
                param[str]("commit", commit),
                param[str]("reportId", report_id),
                param[str]("annotationId", annotation_id),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ReportAnnotation | ReportAnnotationDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[ReportAnnotation],
            error_mapper=create_or_update_annotation_error_mapper,
            request_options=request_options,
        )

    async def create_or_update_report(
        self,
        workspace: str,
        repo_slug: str,
        commit: str,
        report_id: str,
        body: Report | ReportDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Report, CreateOrUpdateReportErrorBody]:
        r"""Creates or updates a report for the specified commit. To upload a report, make sure to generate an ID that
        is unique across all reports for that commit. If you want to use an existing id from your own system, we
        recommend prefixing it with your system's name to avoid collisions, for example, mySystem-001.

        ### Sample cURL request:
        ```
        curl --request PUT 'https://api.bitbucket.org/2.0/repositories///commit//reports/mysystem-001' \ --header
        'Content-Type: application/json' \ --data-raw '{ "title": "Security scan report", "details": "This pull request
        introduces 10 new dependency vulnerabilities.", "report_type": "SECURITY", "reporter": "mySystem", "link":
        "http://www.mysystem.com/reports/001", "result": "FAILED", "data": [
        {
        "title": "Duration (seconds)", "type": "DURATION", "value": 14
        },
        {
        "title": "Safe to merge?", "type": "BOOLEAN", "value": false
        }
        ]
        }'
        ```

        ### Possible field values: report_type: SECURITY, COVERAGE, TEST, BUG result: PASSED, FAILED, PENDING data.type:
        BOOLEAN, DATE, DURATION, LINK, NUMBER, PERCENTAGE, TEXT

        #### Data field formats
        | Type Field | Value Field Type | Value Field Display |
        |:--------------|:------------------|:--------------------|
        | None/ Omitted | Number, String or Boolean (not an array or object) | Plain text |
        | BOOLEAN | Boolean | The value will be read as a JSON boolean and displayed as 'Yes' or 'No'. |
        | DATE | Number | The value will be read as a JSON number in the form of a Unix timestamp (milliseconds) and
            will be displayed as a relative date if the date is less than one week ago, otherwise it will be displayed
            as an absolute date. |
        | DURATION | Number | The value will be read as a JSON number in milliseconds and will be displayed in a human
            readable duration format. |
        | LINK | Object: ``{"text": "Link text here", "href": "https://link.to.annotation/in/external/tool"}`` | The
            value will be read as a JSON object containing the fields "text" and "href" and will be displayed as a
            clickable link on the report. |
        | NUMBER | Number | The value will be read as a JSON number and large numbers will be displayed in a human
            readable format (e.g. 14.3k). |
        | PERCENTAGE | Number (between 0 and 100) | The value will be read as a JSON number between 0 and 100 and will
            be displayed with a percentage sign. |
        | TEXT | String | The value will be read as a JSON string and will be displayed as-is |

        Please refer to the Code Insights documentation for more information.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            commit: The commit the report belongs to.
            report_id: Either the uuid or external-id of the report.
            body: The report to create or update
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default(
                "/repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}"
            ),
            path_params=[
                param[str]("workspace", workspace),
                param[str]("repo_slug", repo_slug),
                param[str]("commit", commit),
                param[str]("reportId", report_id),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[Report | ReportDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[Report],
            error_mapper=create_or_update_report_error_mapper,
            request_options=request_options,
        )

    async def delete_annotation(
        self,
        workspace: str,
        repo_slug: str,
        commit: str,
        report_id: str,
        annotation_id: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, RawError]:
        """Deletes a single Annotation matching the provided ID.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            commit: The commit the annotation belongs to.
            report_id: Either the uuid or external-id of the annotation.
            annotation_id: Either the uuid or external-id of the annotation.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default(
                "/repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}/annotations/{annotationId}"
            ),
            path_params=[
                param[str]("workspace", workspace),
                param[str]("repo_slug", repo_slug),
                param[str]("commit", commit),
                param[str]("reportId", report_id),
                param[str]("annotationId", annotation_id),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_empty_response,
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def delete_report(
        self,
        workspace: str,
        repo_slug: str,
        commit: str,
        report_id: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, RawError]:
        """Deletes a single Report matching the provided ID.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            commit: The commit the report belongs to.
            report_id: Either the uuid or external-id of the report.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default(
                "/repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}"
            ),
            path_params=[
                param[str]("workspace", workspace),
                param[str]("repo_slug", repo_slug),
                param[str]("commit", commit),
                param[str]("reportId", report_id),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_empty_response,
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def delete_repositories_by_workspace_by_repo_slug_commit_by_commit_approve(
        self, commit: str, repo_slug: str, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteRepositoriesByWorkspaceByRepoSlugCommitByCommitApproveErrorBody]:
        """Redact the authenticated user's approval of the specified commit.

        This operation is only available to users that have explicit access to the repository. In contrast, just the
        fact that a repository is publicly accessible to users does not give them the ability to approve commits.

        Args:
            commit: The commit's SHA1.
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
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/commit/{commit}/approve"),
            path_params=[
                param[str]("commit", commit), param[str]("repo_slug", repo_slug), param[str]("workspace", workspace)
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_empty_response,
            error_mapper=delete_repositories_by_workspace_by_repo_slug_commit_by_commit_approve_error_mapper,
            request_options=request_options,
        )

    async def delete_repositories_by_workspace_by_repo_slug_commit_by_commit_comments_by_comment_id(
        self,
        comment_id: int,
        commit: str,
        repo_slug: str,
        workspace: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DeleteRepositoriesByWorkspaceByRepoSlugCommitByCommitCommentsByCommentIdErrorBody]:
        """Deletes the specified commit comment.

        Note that deleting comments that have visible replies that point to them will not really delete the resource.
        This is to retain the integrity of the original comment tree. Instead, the ``deleted`` element is set to
        ``true`` and the content is blanked out. The comment will continue to be returned by the collections and self
        endpoints.

        Args:
            comment_id: The id of the comment.
            commit: The commit's SHA1.
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
                "/repositories/{workspace}/{repo_slug}/commit/{commit}/comments/{comment_id}"
            ),
            path_params=[
                param[int]("comment_id", comment_id),
                param[str]("commit", commit),
                param[str]("repo_slug", repo_slug),
                param[str]("workspace", workspace),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_empty_response,
            error_mapper=delete_repositories_by_workspace_by_repo_slug_commit_by_commit_comments_by_comment_id_error_mapper,
            request_options=request_options,
        )

    async def get_annotation(
        self,
        workspace: str,
        repo_slug: str,
        commit: str,
        report_id: str,
        annotation_id: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ReportAnnotation, GetAnnotationErrorBody]:
        """Returns a single Annotation matching the provided ID.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            commit: The commit the report belongs to.
            report_id: Either the uuid or external-id of the report.
            annotation_id: Either the uuid or external-id of the annotation.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}/annotations/{annotationId}"
            ),
            path_params=[
                param[str]("workspace", workspace),
                param[str]("repo_slug", repo_slug),
                param[str]("commit", commit),
                param[str]("reportId", report_id),
                param[str]("annotationId", annotation_id),
            ],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[ReportAnnotation],
            error_mapper=get_annotation_error_mapper,
            request_options=request_options,
        )

    async def get_annotations_for_report(
        self,
        workspace: str,
        repo_slug: str,
        commit: str,
        report_id: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PaginatedAnnotations, RawError]:
        """Returns a paginated list of Annotations for a specified report.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            commit: The commit for which to retrieve reports.
            report_id: Uuid or external-if of the report for which to get annotations for.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}/annotations"
            ),
            path_params=[
                param[str]("workspace", workspace),
                param[str]("repo_slug", repo_slug),
                param[str]("commit", commit),
                param[str]("reportId", report_id),
            ],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[PaginatedAnnotations],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def get_report(
        self,
        workspace: str,
        repo_slug: str,
        commit: str,
        report_id: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Report, GetReportErrorBody]:
        """Returns a single Report matching the provided ID.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            commit: The commit the report belongs to.
            report_id: Either the uuid or external-id of the report.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}"
            ),
            path_params=[
                param[str]("workspace", workspace),
                param[str]("repo_slug", repo_slug),
                param[str]("commit", commit),
                param[str]("reportId", report_id),
            ],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[Report],
            error_mapper=get_report_error_mapper,
            request_options=request_options,
        )

    async def get_reports_for_commit(
        self, workspace: str, repo_slug: str, commit: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[PaginatedReports, RawError]:
        """Returns a paginated list of Reports linked to this commit.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example ``{workspace UUID}``.
            repo_slug: The repository.
            commit: The commit for which to retrieve reports.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/commit/{commit}/reports"),
            path_params=[
                param[str]("workspace", workspace), param[str]("repo_slug", repo_slug), param[str]("commit", commit)
            ],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[PaginatedReports],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def get_repositories_by_workspace_by_repo_slug_commit_by_commit(
        self, commit: str, repo_slug: str, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Commit, GetRepositoriesByWorkspaceByRepoSlugCommitByCommitErrorBody]:
        """Returns the specified commit.

        Args:
            commit: The commit's SHA1.
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
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/commit/{commit}"),
            path_params=[
                param[str]("commit", commit), param[str]("repo_slug", repo_slug), param[str]("workspace", workspace)
            ],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[Commit],
            error_mapper=get_repositories_by_workspace_by_repo_slug_commit_by_commit_error_mapper,
            request_options=request_options,
        )

    async def get_repositories_by_workspace_by_repo_slug_commit_by_commit_comments(
        self,
        commit: str,
        repo_slug: str,
        workspace: str,
        *,
        q: str | None = None,
        sort: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PaginatedCommitComments, RawError]:
        """Returns the commit's comments.

        This includes both global and inline comments.

        The default sorting is oldest to newest and can be overridden with the ``sort`` query parameter.

        Args:
            commit: The commit's SHA1.
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
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
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/commit/{commit}/comments"),
            path_params=[
                param[str]("commit", commit), param[str]("repo_slug", repo_slug), param[str]("workspace", workspace)
            ],
            query_params=[param[str | None]("q", q), param[str | None]("sort", sort)],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[PaginatedCommitComments],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def get_repositories_by_workspace_by_repo_slug_commit_by_commit_comments_by_comment_id(
        self,
        comment_id: int,
        commit: str,
        repo_slug: str,
        workspace: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CommitComment, RawError]:
        """Returns the specified commit comment.

        Args:
            comment_id: The id of the comment.
            commit: The commit's SHA1.
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
                "/repositories/{workspace}/{repo_slug}/commit/{commit}/comments/{comment_id}"
            ),
            path_params=[
                param[int]("comment_id", comment_id),
                param[str]("commit", commit),
                param[str]("repo_slug", repo_slug),
                param[str]("workspace", workspace),
            ],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[CommitComment],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def get_repositories_by_workspace_by_repo_slug_commits(
        self, repo_slug: str, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Page, GetRepositoriesByWorkspaceByRepoSlugCommitsErrorBody]:
        """These are the repository's commits. They are paginated and returned in reverse chronological order, similar
        to the output of ``git log``. Like these tools, the DAG can be filtered.

        #### GET /repositories/{workspace}/{repo_slug}/commits/

        Returns all commits in the repo in topological order (newest commit first). All branches and tags are included
        (similar to ``git log --all``).

        #### GET /repositories/{workspace}/{repo_slug}/commits/?exclude=master

        Returns all commits in the repo that are not on master (similar to ``git log --all ^master``).

        #### GET /repositories/{workspace}/{repo_slug}/commits/?include=foo&include=bar&exclude=fu&exclude=fubar

        Returns all commits that are on refs ``foo`` or ``bar``, but not on ``fu`` or ``fubar`` (similar to ``git log
        foo bar ^fu ^fubar``).

        An optional ``path`` parameter can be specified that will limit the results to commits that affect that path.
        ``path`` can either be a file or a directory. If a directory is specified, commits are returned that have
        modified any file in the directory tree rooted by ``path``. It is important to note that if the ``path``
        parameter is specified, the commits returned by this endpoint may no longer be a DAG, parent commits that do not
        modify the path will be omitted from the response.

        #### GET /repositories/{workspace}/{repo_slug}/commits/?path=README.md&include=foo&include=bar&exclude=master

        Returns all commits that are on refs ``foo`` or ``bar``, but not on ``master`` that changed the file README.md.

        #### GET /repositories/{workspace}/{repo_slug}/commits/?path=src/&include=foo&include=bar&exclude=master

        Returns all commits that are on refs ``foo`` or ``bar``, but not on ``master`` that changed to a file in any
        file in the directory src or its children.

        Because the response could include a very large number of commits, it is paginated. Follow the 'next' link in
        the response to navigate to the next page of commits. As with other paginated resources, do not construct your
        own links.

        When the include and exclude parameters are more than can fit in a query string, clients can use a
        ``x-www-form-urlencoded`` POST instead.

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
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/commits"),
            path_params=[param[str]("repo_slug", repo_slug), param[str]("workspace", workspace)],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[Page],
            error_mapper=get_repositories_by_workspace_by_repo_slug_commits_error_mapper,
            request_options=request_options,
        )

    async def get_repositories_by_workspace_by_repo_slug_commits_by_revision(
        self, repo_slug: str, revision: str, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Page, GetRepositoriesByWorkspaceByRepoSlugCommitsByRevisionErrorBody]:
        """These are the repository's commits. They are paginated and returned in reverse chronological order, similar
        to the output of ``git log``. Like these tools, the DAG can be filtered.

        #### GET /repositories/{workspace}/{repo_slug}/commits/master

        Returns all commits on ref ``master`` (similar to ``git log master``).

        #### GET /repositories/{workspace}/{repo_slug}/commits/dev?include=foo&exclude=master

        Returns all commits on ref ``dev`` or ``foo``, except those that are reachable on ``master`` (similar to ``git
        log dev foo ^master``).

        An optional ``path`` parameter can be specified that will limit the results to commits that affect that path.
        ``path`` can either be a file or a directory. If a directory is specified, commits are returned that have
        modified any file in the directory tree rooted by ``path``. It is important to note that if the ``path``
        parameter is specified, the commits returned by this endpoint may no longer be a DAG, parent commits that do not
        modify the path will be omitted from the response.

        #### GET /repositories/{workspace}/{repo_slug}/commits/dev?path=README.md&include=foo&include=bar&exclude=master

        Returns all commits that are on refs ``dev`` or ``foo`` or ``bar``, but not on ``master`` that changed the file
        README.md.

        #### GET /repositories/{workspace}/{repo_slug}/commits/dev?path=src/&include=foo&exclude=master

        Returns all commits that are on refs ``dev`` or ``foo``, but not on ``master`` that changed to a file in any
        file in the directory src or its children.

        Because the response could include a very large number of commits, it is paginated. Follow the 'next' link in
        the response to navigate to the next page of commits. As with other paginated resources, do not construct your
        own links.

        When the include and exclude parameters are more than can fit in a query string, clients can use a
        ``x-www-form-urlencoded`` POST instead.

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            revision: A commit SHA1 or ref name.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/commits/{revision}"),
            path_params=[
                param[str]("repo_slug", repo_slug), param[str]("revision", revision), param[str]("workspace", workspace)
            ],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[Page],
            error_mapper=get_repositories_by_workspace_by_repo_slug_commits_by_revision_error_mapper,
            request_options=request_options,
        )

    async def get_repositories_by_workspace_by_repo_slug_diff_by_spec(
        self,
        repo_slug: str,
        spec: str,
        workspace: str,
        *,
        context: int | None = None,
        path: str | None = None,
        ignore_whitespace: bool | None = None,
        binary: bool | None = None,
        renames: bool | None = None,
        merge: bool | None = None,
        topic: bool | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, GetRepositoriesByWorkspaceByRepoSlugDiffBySpecErrorBody]:
        """Produces a raw git-style diff.

        #### Single commit spec

        If the ``spec`` argument to this API is a single commit, the diff is produced against the first parent of the
        specified commit.

        #### Two commit spec

        Two commits separated by ``..`` may be provided as the ``spec``, e.g., ``3a8b42..9ff173``. When two commits are
        provided and the ``topic`` query parameter is true, this API produces a 2-way three dot diff. This is the diff
        between source commit and the merge base of the source commit and the destination commit. When the ``topic``
        query param is false, a simple git-style diff is produced.

        The two commits are interpreted as follows:

        * First commit: the commit containing the changes we wish to preview
        * Second commit: the commit representing the state to which we want to
        compare the first commit
        * **Note**: This is the opposite of the order used in ``git diff``.

        #### Comparison to patches

        While similar to patches, diffs:

        * Don't have a commit header (username, commit message, etc)
        * Support the optional ``path=foo/bar.py`` query param to filter
        the diff to just that one file diff

        #### Response

        The raw diff is returned as-is, in whatever encoding the files in the repository use. It is not decoded into
        unicode. As such, the content-type is ``text/plain``.

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            spec: A commit SHA (e.g. ``3a8b42``) or a commit range using double dot notation (e.g. ``3a8b42..9ff173``).
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            context: Generate diffs with <n> lines of context instead of the usual three.
            path: Limit the diff to a particular file (this parameter can be repeated for multiple paths).
            ignore_whitespace: Generate diffs that ignore whitespace.
            binary: Generate diffs that include binary files, true if omitted.
            renames: Whether to perform rename detection, true if omitted.
            merge: This parameter is deprecated. The 'topic' parameter should be used instead. The 'merge' and 'topic'
                parameters cannot be both used at the same time. If true, the source commit is merged into the
                destination commit, and then a diff from the destination to the merge result is returned. If false, a
                simple 'two dot' diff between the source and destination is returned. True if omitted.
            topic: If true, returns 2-way 'three-dot' diff. This is a diff between the source commit and the merge base
                of the source commit and the destination commit. If false, a simple 'two dot' diff between the source
                and destination is returned. If omitted, defaults to true, ie. a 2 way 'three-dot' diff is returned.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/diff/{spec}"),
            path_params=[
                param[str]("repo_slug", repo_slug), param[str]("spec", spec), param[str]("workspace", workspace)
            ],
            query_params=[
                param[int | None]("context", context),
                param[str | None]("path", path),
                param[bool | None]("ignore_whitespace", ignore_whitespace),
                param[bool | None]("binary", binary),
                param[bool | None]("renames", renames),
                param[bool | None]("merge", merge),
                param[bool | None]("topic", topic),
            ],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_empty_response,
            error_mapper=get_repositories_by_workspace_by_repo_slug_diff_by_spec_error_mapper,
            request_options=request_options,
        )

    async def get_repositories_by_workspace_by_repo_slug_diffstat_by_spec(
        self,
        repo_slug: str,
        spec: str,
        workspace: str,
        *,
        ignore_whitespace: bool | None = None,
        merge: bool | None = None,
        path: str | None = None,
        renames: bool | None = None,
        topic: bool | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PaginatedDiffStat, GetRepositoriesByWorkspaceByRepoSlugDiffstatBySpecErrorBody]:
        """Produces a response in JSON format with a record for every path modified, including information on the type
        of the change and the number of lines added and removed.

        #### Single commit spec

        If the ``spec`` argument to this API is a single commit, the diff is produced against the first parent of the
        specified commit.

        #### Two commit spec

        Two commits separated by ``..`` may be provided as the ``spec``, e.g., ``3a8b42..9ff173``. When two commits are
        provided and the ``topic`` query parameter is true, this API produces a 2-way three dot diff. This is the diff
        between source commit and the merge base of the source commit and the destination commit. When the ``topic``
        query param is false, a simple git-style diff is produced.

        The two commits are interpreted as follows:

        * First commit: the commit containing the changes we wish to preview
        * Second commit: the commit representing the state to which we want to
        compare the first commit
        * **Note**: This is the opposite of the order used in ``git diff``.

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            spec: A commit SHA (e.g. ``3a8b42``) or a commit range using double dot notation (e.g. ``3a8b42..9ff173``).
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            ignore_whitespace: Generate diffs that ignore whitespace
            merge: This parameter is deprecated. The 'topic' parameter should be used instead. The 'merge' and 'topic'
                parameters cannot be both used at the same time. If true, the source commit is merged into the
                destination commit, and then a diffstat from the destination to the merge result is returned. If false,
                a simple 'two dot' diffstat between the source and destination is returned. True if omitted.
            path: Limit the diffstat to a particular file (this parameter can be repeated for multiple paths).
            renames: Whether to perform rename detection, true if omitted.
            topic: If true, returns 2-way 'three-dot' diff. This is a diff between the source commit and the merge base
                of the source commit and the destination commit. If false, a simple 'two dot' diff between the source
                and destination is returned.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/diffstat/{spec}"),
            path_params=[
                param[str]("repo_slug", repo_slug), param[str]("spec", spec), param[str]("workspace", workspace)
            ],
            query_params=[
                param[bool | None]("ignore_whitespace", ignore_whitespace),
                param[bool | None]("merge", merge),
                param[str | None]("path", path),
                param[bool | None]("renames", renames),
                param[bool | None]("topic", topic),
            ],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[PaginatedDiffStat],
            error_mapper=get_repositories_by_workspace_by_repo_slug_diffstat_by_spec_error_mapper,
            request_options=request_options,
        )

    async def get_repositories_by_workspace_by_repo_slug_merge_base_by_revspec(
        self, repo_slug: str, revspec: str, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Commit, GetRepositoriesByWorkspaceByRepoSlugMergeBaseByRevspecErrorBody]:
        """Returns the best common ancestor between two commits, specified in a revspec of 2 commits (e.g.
        3a8b42..9ff173).

        If more than one best common ancestor exists, only one will be returned. It is unspecified which will be
        returned.

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            revspec: A commit range using double dot notation (e.g. ``3a8b42..9ff173``).
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/merge-base/{revspec}"),
            path_params=[
                param[str]("repo_slug", repo_slug), param[str]("revspec", revspec), param[str]("workspace", workspace)
            ],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[Commit],
            error_mapper=get_repositories_by_workspace_by_repo_slug_merge_base_by_revspec_error_mapper,
            request_options=request_options,
        )

    async def get_repositories_by_workspace_by_repo_slug_patch_by_spec(
        self, repo_slug: str, spec: str, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, GetRepositoriesByWorkspaceByRepoSlugPatchBySpecErrorBody]:
        """Produces a raw patch for a single commit (diffed against its first parent), or a patch-series for a revspec
        of 2 commits (e.g. ``3a8b42..9ff173`` where the first commit represents the source and the second commit the
        destination).

        In case of the latter (diffing a revspec), a patch series is returned for the commits on the source branch
        (``3a8b42`` and its ancestors in our example).

        While similar to diffs, patches:

        * Have a commit header (username, commit message, etc)
        * Do not support the ``path=foo/bar.py`` query parameter

        The raw patch is returned as-is, in whatever encoding the files in the repository use. It is not decoded into
        unicode. As such, the content-type is ``text/plain``.

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            spec: A commit SHA (e.g. ``3a8b42``) or a commit range using double dot notation (e.g. ``3a8b42..9ff173``).
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/patch/{spec}"),
            path_params=[
                param[str]("repo_slug", repo_slug), param[str]("spec", spec), param[str]("workspace", workspace)
            ],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_empty_response,
            error_mapper=get_repositories_by_workspace_by_repo_slug_patch_by_spec_error_mapper,
            request_options=request_options,
        )

    async def post_repositories_by_workspace_by_repo_slug_commit_by_commit_approve(
        self, commit: str, repo_slug: str, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Participant, PostRepositoriesByWorkspaceByRepoSlugCommitByCommitApproveErrorBody]:
        """Approve the specified commit as the authenticated user.

        This operation is only available to users that have explicit access to the repository. In contrast, just the
        fact that a repository is publicly accessible to users does not give them the ability to approve commits.

        Args:
            commit: The commit's SHA1.
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
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/commit/{commit}/approve"),
            path_params=[
                param[str]("commit", commit), param[str]("repo_slug", repo_slug), param[str]("workspace", workspace)
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[Participant],
            error_mapper=post_repositories_by_workspace_by_repo_slug_commit_by_commit_approve_error_mapper,
            request_options=request_options,
        )

    async def post_repositories_by_workspace_by_repo_slug_commit_by_commit_comments(
        self,
        commit: str,
        repo_slug: str,
        workspace: str,
        body: CommitComment | CommitCommentDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, PostRepositoriesByWorkspaceByRepoSlugCommitByCommitCommentsErrorBody]:
        r"""Creates new comment on the specified commit.

        To post a reply to an existing comment, include the ``parent.id`` field:

        ```
        $ curl
        https://api.bitbucket.org/2.0/repositories/atlassian/prlinks/commit/db9ba1e031d07a02603eae0e559a7adc010257fc/comments/
        \ -X POST -u evzijst \ -H 'Content-Type: application/json' \ -d '{"content": {"raw": "One more thing!"},
        "parent": {"id": 5728901}}'
        ```

        Args:
            commit: The commit's SHA1.
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            body: The specified comment.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/commit/{commit}/comments"),
            path_params=[
                param[str]("commit", commit), param[str]("repo_slug", repo_slug), param[str]("workspace", workspace)
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CommitComment | CommitCommentDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_empty_response,
            error_mapper=post_repositories_by_workspace_by_repo_slug_commit_by_commit_comments_error_mapper,
            request_options=request_options,
        )

    async def post_repositories_by_workspace_by_repo_slug_commits(
        self, repo_slug: str, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Page, PostRepositoriesByWorkspaceByRepoSlugCommitsErrorBody]:
        """Identical to ``GET /repositories/{workspace}/{repo_slug}/commits``, except that POST allows clients to place
        the include and exclude parameters in the request body to avoid URL length issues.

        **Note that this resource does NOT support new commit creation.**

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
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/commits"),
            path_params=[param[str]("repo_slug", repo_slug), param[str]("workspace", workspace)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[Page],
            error_mapper=post_repositories_by_workspace_by_repo_slug_commits_error_mapper,
            request_options=request_options,
        )

    async def post_repositories_by_workspace_by_repo_slug_commits_by_revision(
        self, repo_slug: str, revision: str, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Page, PostRepositoriesByWorkspaceByRepoSlugCommitsByRevisionErrorBody]:
        """Identical to ``GET /repositories/{workspace}/{repo_slug}/commits/{revision}``, except that POST allows
        clients to place the include and exclude parameters in the request body to avoid URL length issues.

        **Note that this resource does NOT support new commit creation.**

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            revision: A commit SHA1 or ref name.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/commits/{revision}"),
            path_params=[
                param[str]("repo_slug", repo_slug), param[str]("revision", revision), param[str]("workspace", workspace)
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[Page],
            error_mapper=post_repositories_by_workspace_by_repo_slug_commits_by_revision_error_mapper,
            request_options=request_options,
        )

    async def put_repositories_by_workspace_by_repo_slug_commit_by_commit_comments_by_comment_id(
        self,
        comment_id: int,
        commit: str,
        repo_slug: str,
        workspace: str,
        body: CommitComment | CommitCommentDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, PutRepositoriesByWorkspaceByRepoSlugCommitByCommitCommentsByCommentIdErrorBody]:
        r"""Used to update the contents of a comment. Only the content of the comment can be updated.

        ```
        $ curl https://api.bitbucket.org/2.0/repositories/atlassian/prlinks/commit/7f71b5/comments/5728901 \ -X PUT -u
        evzijst \ -H 'Content-Type: application/json' \ -d '{"content": {"raw": "One more thing!"}'
        ```

        Args:
            comment_id: The id of the comment.
            commit: The commit's SHA1.
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
                "/repositories/{workspace}/{repo_slug}/commit/{commit}/comments/{comment_id}"
            ),
            path_params=[
                param[int]("comment_id", comment_id),
                param[str]("commit", commit),
                param[str]("repo_slug", repo_slug),
                param[str]("workspace", workspace),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CommitComment | CommitCommentDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_empty_response,
            error_mapper=put_repositories_by_workspace_by_repo_slug_commit_by_commit_comments_by_comment_id_error_mapper,
            request_options=request_options,
        )

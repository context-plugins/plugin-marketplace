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
from ..errors.delete_snippets_by_workspace_by_encoded_id_by_node_id_error import (
    DeleteSnippetsByWorkspaceByEncodedIdByNodeIdErrorBody,
    delete_snippets_by_workspace_by_encoded_id_by_node_id_error_mapper,
)
from ..errors.delete_snippets_by_workspace_by_encoded_id_comments_by_comment_id_error import (
    DeleteSnippetsByWorkspaceByEncodedIdCommentsByCommentIdErrorBody,
    delete_snippets_by_workspace_by_encoded_id_comments_by_comment_id_error_mapper,
)
from ..errors.delete_snippets_by_workspace_by_encoded_id_error import (
    DeleteSnippetsByWorkspaceByEncodedIdErrorBody,
    delete_snippets_by_workspace_by_encoded_id_error_mapper,
)
from ..errors.delete_snippets_by_workspace_by_encoded_id_watch_error import (
    DeleteSnippetsByWorkspaceByEncodedIdWatchErrorBody,
    delete_snippets_by_workspace_by_encoded_id_watch_error_mapper,
)
from ..errors.get_snippets_by_workspace_by_encoded_id_by_node_id_error import (
    GetSnippetsByWorkspaceByEncodedIdByNodeIdErrorBody,
    get_snippets_by_workspace_by_encoded_id_by_node_id_error_mapper,
)
from ..errors.get_snippets_by_workspace_by_encoded_id_by_node_id_files_by_path_error import (
    GetSnippetsByWorkspaceByEncodedIdByNodeIdFilesByPathErrorBody,
    get_snippets_by_workspace_by_encoded_id_by_node_id_files_by_path_error_mapper,
)
from ..errors.get_snippets_by_workspace_by_encoded_id_by_revision_diff_error import (
    GetSnippetsByWorkspaceByEncodedIdByRevisionDiffErrorBody,
    get_snippets_by_workspace_by_encoded_id_by_revision_diff_error_mapper,
)
from ..errors.get_snippets_by_workspace_by_encoded_id_by_revision_patch_error import (
    GetSnippetsByWorkspaceByEncodedIdByRevisionPatchErrorBody,
    get_snippets_by_workspace_by_encoded_id_by_revision_patch_error_mapper,
)
from ..errors.get_snippets_by_workspace_by_encoded_id_comments_by_comment_id_error import (
    GetSnippetsByWorkspaceByEncodedIdCommentsByCommentIdErrorBody,
    get_snippets_by_workspace_by_encoded_id_comments_by_comment_id_error_mapper,
)
from ..errors.get_snippets_by_workspace_by_encoded_id_comments_error import (
    GetSnippetsByWorkspaceByEncodedIdCommentsErrorBody,
    get_snippets_by_workspace_by_encoded_id_comments_error_mapper,
)
from ..errors.get_snippets_by_workspace_by_encoded_id_commits_by_revision_error import (
    GetSnippetsByWorkspaceByEncodedIdCommitsByRevisionErrorBody,
    get_snippets_by_workspace_by_encoded_id_commits_by_revision_error_mapper,
)
from ..errors.get_snippets_by_workspace_by_encoded_id_commits_error import (
    GetSnippetsByWorkspaceByEncodedIdCommitsErrorBody,
    get_snippets_by_workspace_by_encoded_id_commits_error_mapper,
)
from ..errors.get_snippets_by_workspace_by_encoded_id_error import (
    GetSnippetsByWorkspaceByEncodedIdErrorBody,
    get_snippets_by_workspace_by_encoded_id_error_mapper,
)
from ..errors.get_snippets_by_workspace_by_encoded_id_files_by_path_error import (
    GetSnippetsByWorkspaceByEncodedIdFilesByPathErrorBody,
    get_snippets_by_workspace_by_encoded_id_files_by_path_error_mapper,
)
from ..errors.get_snippets_by_workspace_by_encoded_id_watch_error import (
    GetSnippetsByWorkspaceByEncodedIdWatchErrorBody,
    get_snippets_by_workspace_by_encoded_id_watch_error_mapper,
)
from ..errors.get_snippets_by_workspace_by_encoded_id_watchers_error import (
    GetSnippetsByWorkspaceByEncodedIdWatchersErrorBody,
    get_snippets_by_workspace_by_encoded_id_watchers_error_mapper,
)
from ..errors.get_snippets_by_workspace_error import (
    GetSnippetsByWorkspaceErrorBody,
    get_snippets_by_workspace_error_mapper,
)
from ..errors.get_snippets_error import GetSnippetsErrorBody, get_snippets_error_mapper
from ..errors.post_snippets_by_workspace_by_encoded_id_comments_error import (
    PostSnippetsByWorkspaceByEncodedIdCommentsErrorBody,
    post_snippets_by_workspace_by_encoded_id_comments_error_mapper,
)
from ..errors.post_snippets_by_workspace_error import (
    PostSnippetsByWorkspaceErrorBody,
    post_snippets_by_workspace_error_mapper,
)
from ..errors.post_snippets_error import PostSnippetsErrorBody, post_snippets_error_mapper
from ..errors.put_snippets_by_workspace_by_encoded_id_by_node_id_error import (
    PutSnippetsByWorkspaceByEncodedIdByNodeIdErrorBody,
    put_snippets_by_workspace_by_encoded_id_by_node_id_error_mapper,
)
from ..errors.put_snippets_by_workspace_by_encoded_id_comments_by_comment_id_error import (
    PutSnippetsByWorkspaceByEncodedIdCommentsByCommentIdErrorBody,
    put_snippets_by_workspace_by_encoded_id_comments_by_comment_id_error_mapper,
)
from ..errors.put_snippets_by_workspace_by_encoded_id_error import (
    PutSnippetsByWorkspaceByEncodedIdErrorBody,
    put_snippets_by_workspace_by_encoded_id_error_mapper,
)
from ..errors.put_snippets_by_workspace_by_encoded_id_watch_error import (
    PutSnippetsByWorkspaceByEncodedIdWatchErrorBody,
    put_snippets_by_workspace_by_encoded_id_watch_error_mapper,
)
from ..models.enums.role_bitbucket_snippets_api import RoleBitbucketSnippetsApiOrStr
from ..models.paginated_accounts import PaginatedAccounts
from ..models.paginated_snippet_comments import PaginatedSnippetComments
from ..models.paginated_snippet_commits import PaginatedSnippetCommits
from ..models.paginated_snippets import PaginatedSnippets
from ..models.snippet import Snippet, SnippetDict
from ..models.snippet_comment import SnippetComment, SnippetCommentDict
from ..models.snippet_commit import SnippetCommit
from ..server.server import Server


class Snippets:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = SnippetsWithRawResponse(client, server, auth)

    def delete_snippets_by_workspace_by_encoded_id(
        self, encoded_id: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Deletes a snippet and returns an empty response.

        Args:
            encoded_id: The snippet id.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            If the snippet was deleted successfully.

        Raises:
            ApiError: If the snippet is private and the request was not authenticated. If authenticated user does not
                have permission to delete the private snippet. If the snippet does not exist. ``error`` is ``Error |
                RawError``."""
        return unwrap(
            self._with_raw_response.delete_snippets_by_workspace_by_encoded_id(
                encoded_id, workspace, request_options=request_options
            ),
        )

    def delete_snippets_by_workspace_by_encoded_id_by_node_id(
        self, encoded_id: str, node_id: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Deletes the snippet.

        Note that this only works for versioned URLs that point to the latest commit of the snippet. Pointing to an
        older commit results in a 405 status code.

        To delete a snippet, regardless of whether or not concurrent changes are being made to it, use ``DELETE
        /snippets/{encoded_id}`` instead.

        Args:
            encoded_id: The snippet id.
            node_id: A commit revision (SHA1).
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            If the snippet was deleted successfully.

        Raises:
            ApiError: If the snippet is private and the request was not authenticated. If authenticated user does not
                have permission to delete the private snippet. If the snippet does not exist. If ``{node_id}`` is not
                the latest revision. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.delete_snippets_by_workspace_by_encoded_id_by_node_id(
                encoded_id, node_id, workspace, request_options=request_options
            ),
        )

    def delete_snippets_by_workspace_by_encoded_id_comments_by_comment_id(
        self, comment_id: int, encoded_id: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Deletes a snippet comment.

        Comments can only be removed by the comment author, snippet creator, or workspace admin.

        Args:
            comment_id: The id of the comment.
            encoded_id: The snippet id.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Indicates the comment was deleted successfully.

        Raises:
            ApiError: If the authenticated user is not the author of the comment. If the comment or the snippet does not
                exist. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.delete_snippets_by_workspace_by_encoded_id_comments_by_comment_id(
                comment_id, encoded_id, workspace, request_options=request_options
            ),
        )

    def delete_snippets_by_workspace_by_encoded_id_watch(
        self, encoded_id: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Used to stop watching a specific snippet. Returns 204 (No Content) to indicate success.

        Args:
            encoded_id: The snippet id.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Indicates the user stopped watching the snippet successfully.

        Raises:
            ApiError: If the request was not authenticated. If the snippet does not exist. ``error`` is ``Error |
                RawError``."""
        return unwrap(
            self._with_raw_response.delete_snippets_by_workspace_by_encoded_id_watch(
                encoded_id, workspace, request_options=request_options
            ),
        )

    def get_snippets(
        self, *, role: RoleBitbucketSnippetsApiOrStr | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> PaginatedSnippets:
        """**This endpoint is deprecated. Please use the workspace scoped alternative.**

        Returns all snippets. Like pull requests, repositories and workspaces, the full set of snippets is defined by
        what the current user has access to.

        This includes all snippets owned by any of the workspaces the user is a member of, or snippets by other users
        that the current user is either watching or has collaborated on (for instance by commenting on it).

        To limit the set of returned snippets, apply the ``?role=[owner|contributor|member]`` query parameter where the
        roles are defined as follows:

        * ``owner``: all snippets owned by the current user
        * ``contributor``: all snippets owned by, or watched by the current user
        * ``member``: created in a workspaces or watched by the current user

        When no role is specified, all public snippets are returned, as well as all privately owned snippets watched or
        commented on.

        The returned response is a normal paginated JSON list. This endpoint only supports ``application/json``
        responses and no ``multipart/form-data`` or ``multipart/related``. As a result, it is not possible to include
        the file contents.

        Args:
            role: Filter down the result based on the authenticated user's role (``owner``, ``contributor``, or
                ``member``).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A paginated list of snippets.

        Raises:
            ApiError: If the snippet does not exist. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.get_snippets(role=role, request_options=request_options))

    def get_snippets_by_workspace(
        self,
        workspace: str,
        *,
        role: RoleBitbucketSnippetsApiOrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PaginatedSnippets:
        """Identical to ``/snippets``, except that the result is further filtered by the snippet owner and only those
        that are owned by ``{workspace}`` are returned.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            role: Filter down the result based on the authenticated user's role (``owner``, ``contributor``, or
                ``member``).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A paginated list of snippets.

        Raises:
            ApiError: If the user does not exist. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_snippets_by_workspace(workspace, role=role, request_options=request_options)
        )

    def get_snippets_by_workspace_by_encoded_id(
        self, encoded_id: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> Snippet:
        """Retrieves a single snippet.

        Args:
            encoded_id: The snippet id.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The snippet object.

        Raises:
            ApiError: If the snippet is private and the request was not authenticated. If authenticated user does not
                have access to the private snippet. If the snippet does not exist. If the snippet marked as spam.
                ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_snippets_by_workspace_by_encoded_id(
                encoded_id, workspace, request_options=request_options
            ),
        )

    def get_snippets_by_workspace_by_encoded_id_by_node_id(
        self, encoded_id: str, node_id: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> Snippet:
        """Identical to ``GET /snippets/encoded_id``, except that this endpoint can be used to retrieve the contents of
        the snippet as it was at an older revision, while ``/snippets/encoded_id`` always returns the snippet's current
        revision.

        Note that only the snippet's file contents are versioned, not its meta data properties like the title.

        Other than that, the two endpoints are identical in behavior.

        Args:
            encoded_id: The snippet id.
            node_id: A commit revision (SHA1).
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The snippet object.

        Raises:
            ApiError: If the snippet is private and the request was not authenticated. If authenticated user does not
                have access to the private snippet. If the snippet, or the revision does not exist. ``error`` is ``Error
                | RawError``."""
        return unwrap(
            self._with_raw_response.get_snippets_by_workspace_by_encoded_id_by_node_id(
                encoded_id, node_id, workspace, request_options=request_options
            ),
        )

    def get_snippets_by_workspace_by_encoded_id_by_node_id_files_by_path(
        self,
        encoded_id: str,
        node_id: str,
        path: str,
        workspace: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Retrieves the raw contents of a specific file in the snippet. The ``Content-Disposition`` header will be
        "attachment" to avoid issues with malevolent executable files.

        The file's mime type is derived from its filename and returned in the ``Content-Type`` header.

        Note that for text files, no character encoding is included as part of the content type.

        Args:
            encoded_id: The snippet id.
            node_id: A commit revision (SHA1).
            path: Path to the file.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Returns the contents of the specified file.

        Raises:
            ApiError: If the authenticated user does not have access to the snippet. If the file or snippet does not
                exist. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_snippets_by_workspace_by_encoded_id_by_node_id_files_by_path(
                encoded_id, node_id, path, workspace, request_options=request_options
            ),
        )

    def get_snippets_by_workspace_by_encoded_id_by_revision_diff(
        self,
        encoded_id: str,
        revision: str,
        workspace: str,
        *,
        path: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Returns the diff of the specified commit against its first parent.

        Note that this resource is different in functionality from the ``patch`` resource.

        The differences between a diff and a patch are:

        * patches have a commit header with the username, message, etc
        * diffs support the optional ``path=foo/bar.py`` query param to filter the
        diff to just that one file diff (not supported for patches)
        * for a merge, the diff will show the diff between the merge commit and
        its first parent (identical to how PRs work), while patch returns a response containing separate patches for
        each commit on the second parent's ancestry, up to the oldest common ancestor (identical to its reachability).

        Note that the character encoding of the contents of the diff is unspecified as Git does not track this, making
        it hard for Bitbucket to reliably determine this.

        Args:
            encoded_id: The snippet id.
            revision: A revspec expression. This can simply be a commit SHA1, a ref name, or a compare expression like
                ``staging..production``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            path: When used, only one the diff of the specified file will be returned.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The raw diff contents.

        Raises:
            ApiError: If the authenticated user does not have access to the snippet. If the snippet does not exist.
                ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_snippets_by_workspace_by_encoded_id_by_revision_diff(
                encoded_id, revision, workspace, path=path, request_options=request_options
            ),
        )

    def get_snippets_by_workspace_by_encoded_id_by_revision_patch(
        self, encoded_id: str, revision: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Returns the patch of the specified commit against its first parent.

        Note that this resource is different in functionality from the ``diff`` resource.

        The differences between a diff and a patch are:

        * patches have a commit header with the username, message, etc
        * diffs support the optional ``path=foo/bar.py`` query param to filter the
        diff to just that one file diff (not supported for patches)
        * for a merge, the diff will show the diff between the merge commit and
        its first parent (identical to how PRs work), while patch returns a response containing separate patches for
        each commit on the second parent's ancestry, up to the oldest common ancestor (identical to its reachability).

        Note that the character encoding of the contents of the patch is unspecified as Git does not track this, making
        it hard for Bitbucket to reliably determine this.

        Args:
            encoded_id: The snippet id.
            revision: A revspec expression. This can simply be a commit SHA1, a ref name, or a compare expression like
                ``staging..production``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The raw patch contents.

        Raises:
            ApiError: If the authenticated user does not have access to the snippet. If the snippet does not exist.
                ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_snippets_by_workspace_by_encoded_id_by_revision_patch(
                encoded_id, revision, workspace, request_options=request_options
            ),
        )

    def get_snippets_by_workspace_by_encoded_id_comments(
        self, encoded_id: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> PaginatedSnippetComments:
        """Used to retrieve a paginated list of all comments for a specific snippet.

        This resource works identical to commit and pull request comments.

        The default sorting is oldest to newest and can be overridden with the ``sort`` query parameter.

        Args:
            encoded_id: The snippet id.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A paginated list of snippet comments, ordered by creation date.

        Raises:
            ApiError: If the authenticated user does not have access to the snippet. If the snippet does not exist.
                ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_snippets_by_workspace_by_encoded_id_comments(
                encoded_id, workspace, request_options=request_options
            ),
        )

    def get_snippets_by_workspace_by_encoded_id_comments_by_comment_id(
        self, comment_id: int, encoded_id: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> SnippetComment:
        """Returns the specific snippet comment.

        Args:
            comment_id: The id of the comment.
            encoded_id: The snippet id.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The specified comment.

        Raises:
            ApiError: If the authenticated user does not have access to the snippet. If the comment or snippet does not
                exist. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_snippets_by_workspace_by_encoded_id_comments_by_comment_id(
                comment_id, encoded_id, workspace, request_options=request_options
            ),
        )

    def get_snippets_by_workspace_by_encoded_id_commits(
        self, encoded_id: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> PaginatedSnippetCommits:
        """Returns the changes (commits) made on this snippet.

        Args:
            encoded_id: The snippet id.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The paginated list of snippet commits.

        Raises:
            ApiError: If the authenticated user does not have access to the snippet. If the snippet does not exist.
                ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_snippets_by_workspace_by_encoded_id_commits(
                encoded_id, workspace, request_options=request_options
            ),
        )

    def get_snippets_by_workspace_by_encoded_id_commits_by_revision(
        self, encoded_id: str, revision: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> SnippetCommit:
        """Returns the changes made on this snippet in this commit.

        Args:
            encoded_id: The snippet id.
            revision: The commit's SHA1.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The specified snippet commit.

        Raises:
            ApiError: If the authenticated user does not have access to the snippet. If the commit or the snippet does
                not exist. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_snippets_by_workspace_by_encoded_id_commits_by_revision(
                encoded_id, revision, workspace, request_options=request_options
            ),
        )

    def get_snippets_by_workspace_by_encoded_id_files_by_path(
        self, encoded_id: str, path: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Convenience resource for getting to a snippet's raw files without the need for first having to retrieve the
        snippet itself and having to pull out the versioned file links.

        Args:
            encoded_id: The snippet id.
            path: Path to the file.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Raises:
            ApiError: If the authenticated user does not have access to the snippet. If the snippet does not exist.
                ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_snippets_by_workspace_by_encoded_id_files_by_path(
                encoded_id, path, workspace, request_options=request_options
            ),
        )

    def get_snippets_by_workspace_by_encoded_id_watch(
        self, encoded_id: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Used to check if the current user is watching a specific snippet.

        Returns 204 (No Content) if the user is watching the snippet and 404 if not.

        Hitting this endpoint anonymously always returns a 404.

        Args:
            encoded_id: The snippet id.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            If the authenticated user is watching the snippet.

        Raises:
            ApiError: If the snippet does not exist, or if the authenticated user is not watching the snippet. ``error``
                is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_snippets_by_workspace_by_encoded_id_watch(
                encoded_id, workspace, request_options=request_options
            ),
        )

    def get_snippets_by_workspace_by_encoded_id_watchers(
        self, encoded_id: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> PaginatedAccounts:
        """Returns a paginated list of all users watching a specific snippet.

        Args:
            encoded_id: The snippet id.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The paginated list of users watching this snippet

        Raises:
            ApiError: If the snippet does not exist. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_snippets_by_workspace_by_encoded_id_watchers(
                encoded_id, workspace, request_options=request_options
            ),
        )

    def post_snippets(
        self, body: Snippet | SnippetDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> Snippet:
        """Creates a new snippet under the authenticated user's account.

        Args:
            body: The new snippet object.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The newly created snippet object.

        Raises:
            ApiError: If the request was not authenticated ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.post_snippets(body, request_options=request_options))

    def post_snippets_by_workspace(
        self, workspace: str, body: Snippet | SnippetDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> Snippet:
        """Identical to ``/snippets``, except that the new snippet will be created under the workspace specified in the
        path parameter ``{workspace}``.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            body: The new snippet object.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The newly created snippet object.

        Raises:
            ApiError: If the request was not authenticated If the authenticated user does not have permission to create
                snippets in the specified workspace. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.post_snippets_by_workspace(workspace, body, request_options=request_options)
        )

    def post_snippets_by_workspace_by_encoded_id_comments(
        self,
        encoded_id: str,
        workspace: str,
        body: SnippetComment | SnippetCommentDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> SnippetComment:
        """Creates a new comment.

        The only required field in the body is ``content.raw``.

        To create a threaded reply to an existing comment, include ``parent.id``.

        Args:
            encoded_id: The snippet id.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            body: The contents of the new comment.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The newly created comment.

        Raises:
            ApiError: If the authenticated user does not have access to the snippet. If the snippet does not exist.
                ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.post_snippets_by_workspace_by_encoded_id_comments(
                encoded_id, workspace, body, request_options=request_options
            ),
        )

    def put_snippets_by_workspace_by_encoded_id(
        self, encoded_id: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> Snippet:
        """Used to update a snippet.

        Args:
            encoded_id: The snippet id.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The updated snippet object.

        Raises:
            ApiError: If the snippet is private and the request was not authenticated. If authenticated user does not
                have permission to update the private snippet. If the snippet does not exist. ``error`` is ``Error |
                RawError``."""
        return unwrap(
            self._with_raw_response.put_snippets_by_workspace_by_encoded_id(
                encoded_id, workspace, request_options=request_options
            ),
        )

    def put_snippets_by_workspace_by_encoded_id_by_node_id(
        self, encoded_id: str, node_id: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> Snippet:
        """Identical to ``UPDATE /snippets/encoded_id``, except that this endpoint takes an explicit commit revision.
        Only the snippet's "HEAD"/"tip" (most recent) version can be updated and requests on all other, older revisions
        fail by returning a 405 status.

        Usage of this endpoint over the unrestricted ``/snippets/encoded_id`` could be desired if the caller wants to be
        sure no concurrent modifications have taken place between the moment of the UPDATE request and the original GET.

        This can be considered a so-called "Compare And Swap", or CAS operation.

        Other than that, the two endpoints are identical in behavior.

        Args:
            encoded_id: The snippet id.
            node_id: A commit revision (SHA1).
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The updated snippet object.

        Raises:
            ApiError: If the snippet is private and the request was not authenticated. If authenticated user does not
                have permission to update the private snippet. If the snippet or the revision does not exist. If
                ``{node_id}`` is not the latest revision. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.put_snippets_by_workspace_by_encoded_id_by_node_id(
                encoded_id, node_id, workspace, request_options=request_options
            ),
        )

    def put_snippets_by_workspace_by_encoded_id_comments_by_comment_id(
        self,
        comment_id: int,
        encoded_id: str,
        workspace: str,
        body: SnippetComment | SnippetCommentDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> SnippetComment:
        """Updates a comment.

        The only required field in the body is ``content.raw``.

        Comments can only be updated by their author.

        Args:
            comment_id: The id of the comment.
            encoded_id: The snippet id.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            body: The contents to update the comment to.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The updated comment object.

        Raises:
            ApiError: If the authenticated user does not have access to the snippet. If the comment or snippet does not
                exist. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.put_snippets_by_workspace_by_encoded_id_comments_by_comment_id(
                comment_id, encoded_id, workspace, body, request_options=request_options
            ),
        )

    def put_snippets_by_workspace_by_encoded_id_watch(
        self, encoded_id: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Used to start watching a specific snippet. Returns 204 (No Content).

        Args:
            encoded_id: The snippet id.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Indicates the authenticated user is now watching the snippet.

        Raises:
            ApiError: If the request was not authenticated. If the snippet does not exist. ``error`` is ``Error |
                RawError``."""
        return unwrap(
            self._with_raw_response.put_snippets_by_workspace_by_encoded_id_watch(
                encoded_id, workspace, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> SnippetsWithRawResponse:
        return self._with_raw_response


class AsyncSnippets:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncSnippetsWithRawResponse(client, server, auth)

    async def delete_snippets_by_workspace_by_encoded_id(
        self, encoded_id: str, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Deletes a snippet and returns an empty response.

        Args:
            encoded_id: The snippet id.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            If the snippet was deleted successfully.

        Raises:
            ApiError: If the snippet is private and the request was not authenticated. If authenticated user does not
                have permission to delete the private snippet. If the snippet does not exist. ``error`` is ``Error |
                RawError``."""
        return unwrap(
            await self._with_raw_response.delete_snippets_by_workspace_by_encoded_id(
                encoded_id, workspace, request_options=request_options
            ),
        )

    async def delete_snippets_by_workspace_by_encoded_id_by_node_id(
        self, encoded_id: str, node_id: str, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Deletes the snippet.

        Note that this only works for versioned URLs that point to the latest commit of the snippet. Pointing to an
        older commit results in a 405 status code.

        To delete a snippet, regardless of whether or not concurrent changes are being made to it, use ``DELETE
        /snippets/{encoded_id}`` instead.

        Args:
            encoded_id: The snippet id.
            node_id: A commit revision (SHA1).
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            If the snippet was deleted successfully.

        Raises:
            ApiError: If the snippet is private and the request was not authenticated. If authenticated user does not
                have permission to delete the private snippet. If the snippet does not exist. If ``{node_id}`` is not
                the latest revision. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.delete_snippets_by_workspace_by_encoded_id_by_node_id(
                encoded_id, node_id, workspace, request_options=request_options
            ),
        )

    async def delete_snippets_by_workspace_by_encoded_id_comments_by_comment_id(
        self,
        comment_id: int,
        encoded_id: str,
        workspace: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Deletes a snippet comment.

        Comments can only be removed by the comment author, snippet creator, or workspace admin.

        Args:
            comment_id: The id of the comment.
            encoded_id: The snippet id.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Indicates the comment was deleted successfully.

        Raises:
            ApiError: If the authenticated user is not the author of the comment. If the comment or the snippet does not
                exist. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.delete_snippets_by_workspace_by_encoded_id_comments_by_comment_id(
                comment_id, encoded_id, workspace, request_options=request_options
            ),
        )

    async def delete_snippets_by_workspace_by_encoded_id_watch(
        self, encoded_id: str, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Used to stop watching a specific snippet. Returns 204 (No Content) to indicate success.

        Args:
            encoded_id: The snippet id.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Indicates the user stopped watching the snippet successfully.

        Raises:
            ApiError: If the request was not authenticated. If the snippet does not exist. ``error`` is ``Error |
                RawError``."""
        return unwrap(
            await self._with_raw_response.delete_snippets_by_workspace_by_encoded_id_watch(
                encoded_id, workspace, request_options=request_options
            ),
        )

    async def get_snippets(
        self,
        *,
        role: RoleBitbucketSnippetsApiOrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PaginatedSnippets:
        """**This endpoint is deprecated. Please use the workspace scoped alternative.**

        Returns all snippets. Like pull requests, repositories and workspaces, the full set of snippets is defined by
        what the current user has access to.

        This includes all snippets owned by any of the workspaces the user is a member of, or snippets by other users
        that the current user is either watching or has collaborated on (for instance by commenting on it).

        To limit the set of returned snippets, apply the ``?role=[owner|contributor|member]`` query parameter where the
        roles are defined as follows:

        * ``owner``: all snippets owned by the current user
        * ``contributor``: all snippets owned by, or watched by the current user
        * ``member``: created in a workspaces or watched by the current user

        When no role is specified, all public snippets are returned, as well as all privately owned snippets watched or
        commented on.

        The returned response is a normal paginated JSON list. This endpoint only supports ``application/json``
        responses and no ``multipart/form-data`` or ``multipart/related``. As a result, it is not possible to include
        the file contents.

        Args:
            role: Filter down the result based on the authenticated user's role (``owner``, ``contributor``, or
                ``member``).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A paginated list of snippets.

        Raises:
            ApiError: If the snippet does not exist. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.get_snippets(role=role, request_options=request_options))

    async def get_snippets_by_workspace(
        self,
        workspace: str,
        *,
        role: RoleBitbucketSnippetsApiOrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PaginatedSnippets:
        """Identical to ``/snippets``, except that the result is further filtered by the snippet owner and only those
        that are owned by ``{workspace}`` are returned.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            role: Filter down the result based on the authenticated user's role (``owner``, ``contributor``, or
                ``member``).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A paginated list of snippets.

        Raises:
            ApiError: If the user does not exist. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_snippets_by_workspace(
                workspace, role=role, request_options=request_options
            ),
        )

    async def get_snippets_by_workspace_by_encoded_id(
        self, encoded_id: str, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Snippet:
        """Retrieves a single snippet.

        Args:
            encoded_id: The snippet id.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The snippet object.

        Raises:
            ApiError: If the snippet is private and the request was not authenticated. If authenticated user does not
                have access to the private snippet. If the snippet does not exist. If the snippet marked as spam.
                ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_snippets_by_workspace_by_encoded_id(
                encoded_id, workspace, request_options=request_options
            ),
        )

    async def get_snippets_by_workspace_by_encoded_id_by_node_id(
        self, encoded_id: str, node_id: str, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Snippet:
        """Identical to ``GET /snippets/encoded_id``, except that this endpoint can be used to retrieve the contents of
        the snippet as it was at an older revision, while ``/snippets/encoded_id`` always returns the snippet's current
        revision.

        Note that only the snippet's file contents are versioned, not its meta data properties like the title.

        Other than that, the two endpoints are identical in behavior.

        Args:
            encoded_id: The snippet id.
            node_id: A commit revision (SHA1).
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The snippet object.

        Raises:
            ApiError: If the snippet is private and the request was not authenticated. If authenticated user does not
                have access to the private snippet. If the snippet, or the revision does not exist. ``error`` is ``Error
                | RawError``."""
        return unwrap(
            await self._with_raw_response.get_snippets_by_workspace_by_encoded_id_by_node_id(
                encoded_id, node_id, workspace, request_options=request_options
            ),
        )

    async def get_snippets_by_workspace_by_encoded_id_by_node_id_files_by_path(
        self,
        encoded_id: str,
        node_id: str,
        path: str,
        workspace: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Retrieves the raw contents of a specific file in the snippet. The ``Content-Disposition`` header will be
        "attachment" to avoid issues with malevolent executable files.

        The file's mime type is derived from its filename and returned in the ``Content-Type`` header.

        Note that for text files, no character encoding is included as part of the content type.

        Args:
            encoded_id: The snippet id.
            node_id: A commit revision (SHA1).
            path: Path to the file.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Returns the contents of the specified file.

        Raises:
            ApiError: If the authenticated user does not have access to the snippet. If the file or snippet does not
                exist. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_snippets_by_workspace_by_encoded_id_by_node_id_files_by_path(
                encoded_id, node_id, path, workspace, request_options=request_options
            ),
        )

    async def get_snippets_by_workspace_by_encoded_id_by_revision_diff(
        self,
        encoded_id: str,
        revision: str,
        workspace: str,
        *,
        path: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Returns the diff of the specified commit against its first parent.

        Note that this resource is different in functionality from the ``patch`` resource.

        The differences between a diff and a patch are:

        * patches have a commit header with the username, message, etc
        * diffs support the optional ``path=foo/bar.py`` query param to filter the
        diff to just that one file diff (not supported for patches)
        * for a merge, the diff will show the diff between the merge commit and
        its first parent (identical to how PRs work), while patch returns a response containing separate patches for
        each commit on the second parent's ancestry, up to the oldest common ancestor (identical to its reachability).

        Note that the character encoding of the contents of the diff is unspecified as Git does not track this, making
        it hard for Bitbucket to reliably determine this.

        Args:
            encoded_id: The snippet id.
            revision: A revspec expression. This can simply be a commit SHA1, a ref name, or a compare expression like
                ``staging..production``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            path: When used, only one the diff of the specified file will be returned.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The raw diff contents.

        Raises:
            ApiError: If the authenticated user does not have access to the snippet. If the snippet does not exist.
                ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_snippets_by_workspace_by_encoded_id_by_revision_diff(
                encoded_id, revision, workspace, path=path, request_options=request_options
            ),
        )

    async def get_snippets_by_workspace_by_encoded_id_by_revision_patch(
        self,
        encoded_id: str,
        revision: str,
        workspace: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Returns the patch of the specified commit against its first parent.

        Note that this resource is different in functionality from the ``diff`` resource.

        The differences between a diff and a patch are:

        * patches have a commit header with the username, message, etc
        * diffs support the optional ``path=foo/bar.py`` query param to filter the
        diff to just that one file diff (not supported for patches)
        * for a merge, the diff will show the diff between the merge commit and
        its first parent (identical to how PRs work), while patch returns a response containing separate patches for
        each commit on the second parent's ancestry, up to the oldest common ancestor (identical to its reachability).

        Note that the character encoding of the contents of the patch is unspecified as Git does not track this, making
        it hard for Bitbucket to reliably determine this.

        Args:
            encoded_id: The snippet id.
            revision: A revspec expression. This can simply be a commit SHA1, a ref name, or a compare expression like
                ``staging..production``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The raw patch contents.

        Raises:
            ApiError: If the authenticated user does not have access to the snippet. If the snippet does not exist.
                ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_snippets_by_workspace_by_encoded_id_by_revision_patch(
                encoded_id, revision, workspace, request_options=request_options
            ),
        )

    async def get_snippets_by_workspace_by_encoded_id_comments(
        self, encoded_id: str, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> PaginatedSnippetComments:
        """Used to retrieve a paginated list of all comments for a specific snippet.

        This resource works identical to commit and pull request comments.

        The default sorting is oldest to newest and can be overridden with the ``sort`` query parameter.

        Args:
            encoded_id: The snippet id.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A paginated list of snippet comments, ordered by creation date.

        Raises:
            ApiError: If the authenticated user does not have access to the snippet. If the snippet does not exist.
                ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_snippets_by_workspace_by_encoded_id_comments(
                encoded_id, workspace, request_options=request_options
            ),
        )

    async def get_snippets_by_workspace_by_encoded_id_comments_by_comment_id(
        self,
        comment_id: int,
        encoded_id: str,
        workspace: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> SnippetComment:
        """Returns the specific snippet comment.

        Args:
            comment_id: The id of the comment.
            encoded_id: The snippet id.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The specified comment.

        Raises:
            ApiError: If the authenticated user does not have access to the snippet. If the comment or snippet does not
                exist. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_snippets_by_workspace_by_encoded_id_comments_by_comment_id(
                comment_id, encoded_id, workspace, request_options=request_options
            ),
        )

    async def get_snippets_by_workspace_by_encoded_id_commits(
        self, encoded_id: str, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> PaginatedSnippetCommits:
        """Returns the changes (commits) made on this snippet.

        Args:
            encoded_id: The snippet id.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The paginated list of snippet commits.

        Raises:
            ApiError: If the authenticated user does not have access to the snippet. If the snippet does not exist.
                ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_snippets_by_workspace_by_encoded_id_commits(
                encoded_id, workspace, request_options=request_options
            ),
        )

    async def get_snippets_by_workspace_by_encoded_id_commits_by_revision(
        self,
        encoded_id: str,
        revision: str,
        workspace: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> SnippetCommit:
        """Returns the changes made on this snippet in this commit.

        Args:
            encoded_id: The snippet id.
            revision: The commit's SHA1.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The specified snippet commit.

        Raises:
            ApiError: If the authenticated user does not have access to the snippet. If the commit or the snippet does
                not exist. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_snippets_by_workspace_by_encoded_id_commits_by_revision(
                encoded_id, revision, workspace, request_options=request_options
            ),
        )

    async def get_snippets_by_workspace_by_encoded_id_files_by_path(
        self, encoded_id: str, path: str, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Convenience resource for getting to a snippet's raw files without the need for first having to retrieve the
        snippet itself and having to pull out the versioned file links.

        Args:
            encoded_id: The snippet id.
            path: Path to the file.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Raises:
            ApiError: If the authenticated user does not have access to the snippet. If the snippet does not exist.
                ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_snippets_by_workspace_by_encoded_id_files_by_path(
                encoded_id, path, workspace, request_options=request_options
            ),
        )

    async def get_snippets_by_workspace_by_encoded_id_watch(
        self, encoded_id: str, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Used to check if the current user is watching a specific snippet.

        Returns 204 (No Content) if the user is watching the snippet and 404 if not.

        Hitting this endpoint anonymously always returns a 404.

        Args:
            encoded_id: The snippet id.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            If the authenticated user is watching the snippet.

        Raises:
            ApiError: If the snippet does not exist, or if the authenticated user is not watching the snippet. ``error``
                is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_snippets_by_workspace_by_encoded_id_watch(
                encoded_id, workspace, request_options=request_options
            ),
        )

    async def get_snippets_by_workspace_by_encoded_id_watchers(
        self, encoded_id: str, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> PaginatedAccounts:
        """Returns a paginated list of all users watching a specific snippet.

        Args:
            encoded_id: The snippet id.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The paginated list of users watching this snippet

        Raises:
            ApiError: If the snippet does not exist. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_snippets_by_workspace_by_encoded_id_watchers(
                encoded_id, workspace, request_options=request_options
            ),
        )

    async def post_snippets(
        self, body: Snippet | SnippetDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Snippet:
        """Creates a new snippet under the authenticated user's account.

        Args:
            body: The new snippet object.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The newly created snippet object.

        Raises:
            ApiError: If the request was not authenticated ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.post_snippets(body, request_options=request_options))

    async def post_snippets_by_workspace(
        self, workspace: str, body: Snippet | SnippetDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Snippet:
        """Identical to ``/snippets``, except that the new snippet will be created under the workspace specified in the
        path parameter ``{workspace}``.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            body: The new snippet object.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The newly created snippet object.

        Raises:
            ApiError: If the request was not authenticated If the authenticated user does not have permission to create
                snippets in the specified workspace. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.post_snippets_by_workspace(workspace, body, request_options=request_options)
        )

    async def post_snippets_by_workspace_by_encoded_id_comments(
        self,
        encoded_id: str,
        workspace: str,
        body: SnippetComment | SnippetCommentDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> SnippetComment:
        """Creates a new comment.

        The only required field in the body is ``content.raw``.

        To create a threaded reply to an existing comment, include ``parent.id``.

        Args:
            encoded_id: The snippet id.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            body: The contents of the new comment.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The newly created comment.

        Raises:
            ApiError: If the authenticated user does not have access to the snippet. If the snippet does not exist.
                ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.post_snippets_by_workspace_by_encoded_id_comments(
                encoded_id, workspace, body, request_options=request_options
            ),
        )

    async def put_snippets_by_workspace_by_encoded_id(
        self, encoded_id: str, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Snippet:
        """Used to update a snippet.

        Args:
            encoded_id: The snippet id.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The updated snippet object.

        Raises:
            ApiError: If the snippet is private and the request was not authenticated. If authenticated user does not
                have permission to update the private snippet. If the snippet does not exist. ``error`` is ``Error |
                RawError``."""
        return unwrap(
            await self._with_raw_response.put_snippets_by_workspace_by_encoded_id(
                encoded_id, workspace, request_options=request_options
            ),
        )

    async def put_snippets_by_workspace_by_encoded_id_by_node_id(
        self, encoded_id: str, node_id: str, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Snippet:
        """Identical to ``UPDATE /snippets/encoded_id``, except that this endpoint takes an explicit commit revision.
        Only the snippet's "HEAD"/"tip" (most recent) version can be updated and requests on all other, older revisions
        fail by returning a 405 status.

        Usage of this endpoint over the unrestricted ``/snippets/encoded_id`` could be desired if the caller wants to be
        sure no concurrent modifications have taken place between the moment of the UPDATE request and the original GET.

        This can be considered a so-called "Compare And Swap", or CAS operation.

        Other than that, the two endpoints are identical in behavior.

        Args:
            encoded_id: The snippet id.
            node_id: A commit revision (SHA1).
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The updated snippet object.

        Raises:
            ApiError: If the snippet is private and the request was not authenticated. If authenticated user does not
                have permission to update the private snippet. If the snippet or the revision does not exist. If
                ``{node_id}`` is not the latest revision. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.put_snippets_by_workspace_by_encoded_id_by_node_id(
                encoded_id, node_id, workspace, request_options=request_options
            ),
        )

    async def put_snippets_by_workspace_by_encoded_id_comments_by_comment_id(
        self,
        comment_id: int,
        encoded_id: str,
        workspace: str,
        body: SnippetComment | SnippetCommentDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> SnippetComment:
        """Updates a comment.

        The only required field in the body is ``content.raw``.

        Comments can only be updated by their author.

        Args:
            comment_id: The id of the comment.
            encoded_id: The snippet id.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            body: The contents to update the comment to.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The updated comment object.

        Raises:
            ApiError: If the authenticated user does not have access to the snippet. If the comment or snippet does not
                exist. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.put_snippets_by_workspace_by_encoded_id_comments_by_comment_id(
                comment_id, encoded_id, workspace, body, request_options=request_options
            ),
        )

    async def put_snippets_by_workspace_by_encoded_id_watch(
        self, encoded_id: str, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Used to start watching a specific snippet. Returns 204 (No Content).

        Args:
            encoded_id: The snippet id.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Indicates the authenticated user is now watching the snippet.

        Raises:
            ApiError: If the request was not authenticated. If the snippet does not exist. ``error`` is ``Error |
                RawError``."""
        return unwrap(
            await self._with_raw_response.put_snippets_by_workspace_by_encoded_id_watch(
                encoded_id, workspace, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncSnippetsWithRawResponse:
        return self._with_raw_response


class SnippetsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def delete_snippets_by_workspace_by_encoded_id(
        self, encoded_id: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteSnippetsByWorkspaceByEncodedIdErrorBody]:
        """Deletes a snippet and returns an empty response.

        Args:
            encoded_id: The snippet id.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/snippets/{workspace}/{encoded_id}"),
            path_params=[param[str]("encoded_id", encoded_id), param[str]("workspace", workspace)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=empty_response,
            error_mapper=delete_snippets_by_workspace_by_encoded_id_error_mapper,
            request_options=request_options,
        )

    def delete_snippets_by_workspace_by_encoded_id_by_node_id(
        self, encoded_id: str, node_id: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteSnippetsByWorkspaceByEncodedIdByNodeIdErrorBody]:
        """Deletes the snippet.

        Note that this only works for versioned URLs that point to the latest commit of the snippet. Pointing to an
        older commit results in a 405 status code.

        To delete a snippet, regardless of whether or not concurrent changes are being made to it, use ``DELETE
        /snippets/{encoded_id}`` instead.

        Args:
            encoded_id: The snippet id.
            node_id: A commit revision (SHA1).
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/snippets/{workspace}/{encoded_id}/{node_id}"),
            path_params=[
                param[str]("encoded_id", encoded_id), param[str]("node_id", node_id), param[str]("workspace", workspace)
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=empty_response,
            error_mapper=delete_snippets_by_workspace_by_encoded_id_by_node_id_error_mapper,
            request_options=request_options,
        )

    def delete_snippets_by_workspace_by_encoded_id_comments_by_comment_id(
        self, comment_id: int, encoded_id: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteSnippetsByWorkspaceByEncodedIdCommentsByCommentIdErrorBody]:
        """Deletes a snippet comment.

        Comments can only be removed by the comment author, snippet creator, or workspace admin.

        Args:
            comment_id: The id of the comment.
            encoded_id: The snippet id.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/snippets/{workspace}/{encoded_id}/comments/{comment_id}"),
            path_params=[
                param[int]("comment_id", comment_id),
                param[str]("encoded_id", encoded_id),
                param[str]("workspace", workspace),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=empty_response,
            error_mapper=delete_snippets_by_workspace_by_encoded_id_comments_by_comment_id_error_mapper,
            request_options=request_options,
        )

    def delete_snippets_by_workspace_by_encoded_id_watch(
        self, encoded_id: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteSnippetsByWorkspaceByEncodedIdWatchErrorBody]:
        """Used to stop watching a specific snippet. Returns 204 (No Content) to indicate success.

        Args:
            encoded_id: The snippet id.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/snippets/{workspace}/{encoded_id}/watch"),
            path_params=[param[str]("encoded_id", encoded_id), param[str]("workspace", workspace)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=empty_response,
            error_mapper=delete_snippets_by_workspace_by_encoded_id_watch_error_mapper,
            request_options=request_options,
        )

    def get_snippets(
        self, *, role: RoleBitbucketSnippetsApiOrStr | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[PaginatedSnippets, GetSnippetsErrorBody]:
        """**This endpoint is deprecated. Please use the workspace scoped alternative.**

        Returns all snippets. Like pull requests, repositories and workspaces, the full set of snippets is defined by
        what the current user has access to.

        This includes all snippets owned by any of the workspaces the user is a member of, or snippets by other users
        that the current user is either watching or has collaborated on (for instance by commenting on it).

        To limit the set of returned snippets, apply the ``?role=[owner|contributor|member]`` query parameter where the
        roles are defined as follows:

        * ``owner``: all snippets owned by the current user
        * ``contributor``: all snippets owned by, or watched by the current user
        * ``member``: created in a workspaces or watched by the current user

        When no role is specified, all public snippets are returned, as well as all privately owned snippets watched or
        commented on.

        The returned response is a normal paginated JSON list. This endpoint only supports ``application/json``
        responses and no ``multipart/form-data`` or ``multipart/related``. As a result, it is not possible to include
        the file contents.

        Args:
            role: Filter down the result based on the authenticated user's role (``owner``, ``contributor``, or
                ``member``).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/snippets"),
            query_params=[param[RoleBitbucketSnippetsApiOrStr | None]("role", role)],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[PaginatedSnippets],
            error_mapper=get_snippets_error_mapper,
            request_options=request_options,
        )

    def get_snippets_by_workspace(
        self,
        workspace: str,
        *,
        role: RoleBitbucketSnippetsApiOrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PaginatedSnippets, GetSnippetsByWorkspaceErrorBody]:
        """Identical to ``/snippets``, except that the result is further filtered by the snippet owner and only those
        that are owned by ``{workspace}`` are returned.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            role: Filter down the result based on the authenticated user's role (``owner``, ``contributor``, or
                ``member``).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/snippets/{workspace}"),
            path_params=[param[str]("workspace", workspace)],
            query_params=[param[RoleBitbucketSnippetsApiOrStr | None]("role", role)],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[PaginatedSnippets],
            error_mapper=get_snippets_by_workspace_error_mapper,
            request_options=request_options,
        )

    def get_snippets_by_workspace_by_encoded_id(
        self, encoded_id: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Snippet, GetSnippetsByWorkspaceByEncodedIdErrorBody]:
        """Retrieves a single snippet.

        Args:
            encoded_id: The snippet id.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/snippets/{workspace}/{encoded_id}"),
            path_params=[param[str]("encoded_id", encoded_id), param[str]("workspace", workspace)],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[Snippet],
            error_mapper=get_snippets_by_workspace_by_encoded_id_error_mapper,
            request_options=request_options,
        )

    def get_snippets_by_workspace_by_encoded_id_by_node_id(
        self, encoded_id: str, node_id: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Snippet, GetSnippetsByWorkspaceByEncodedIdByNodeIdErrorBody]:
        """Identical to ``GET /snippets/encoded_id``, except that this endpoint can be used to retrieve the contents of
        the snippet as it was at an older revision, while ``/snippets/encoded_id`` always returns the snippet's current
        revision.

        Note that only the snippet's file contents are versioned, not its meta data properties like the title.

        Other than that, the two endpoints are identical in behavior.

        Args:
            encoded_id: The snippet id.
            node_id: A commit revision (SHA1).
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/snippets/{workspace}/{encoded_id}/{node_id}"),
            path_params=[
                param[str]("encoded_id", encoded_id), param[str]("node_id", node_id), param[str]("workspace", workspace)
            ],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[Snippet],
            error_mapper=get_snippets_by_workspace_by_encoded_id_by_node_id_error_mapper,
            request_options=request_options,
        )

    def get_snippets_by_workspace_by_encoded_id_by_node_id_files_by_path(
        self,
        encoded_id: str,
        node_id: str,
        path: str,
        workspace: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, GetSnippetsByWorkspaceByEncodedIdByNodeIdFilesByPathErrorBody]:
        """Retrieves the raw contents of a specific file in the snippet. The ``Content-Disposition`` header will be
        "attachment" to avoid issues with malevolent executable files.

        The file's mime type is derived from its filename and returned in the ``Content-Type`` header.

        Note that for text files, no character encoding is included as part of the content type.

        Args:
            encoded_id: The snippet id.
            node_id: A commit revision (SHA1).
            path: Path to the file.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/snippets/{workspace}/{encoded_id}/{node_id}/files/{path}"),
            path_params=[
                param[str]("encoded_id", encoded_id),
                param[str]("node_id", node_id),
                param[str]("path", path),
                param[str]("workspace", workspace),
            ],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=empty_response,
            error_mapper=get_snippets_by_workspace_by_encoded_id_by_node_id_files_by_path_error_mapper,
            request_options=request_options,
        )

    def get_snippets_by_workspace_by_encoded_id_by_revision_diff(
        self,
        encoded_id: str,
        revision: str,
        workspace: str,
        *,
        path: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, GetSnippetsByWorkspaceByEncodedIdByRevisionDiffErrorBody]:
        """Returns the diff of the specified commit against its first parent.

        Note that this resource is different in functionality from the ``patch`` resource.

        The differences between a diff and a patch are:

        * patches have a commit header with the username, message, etc
        * diffs support the optional ``path=foo/bar.py`` query param to filter the
        diff to just that one file diff (not supported for patches)
        * for a merge, the diff will show the diff between the merge commit and
        its first parent (identical to how PRs work), while patch returns a response containing separate patches for
        each commit on the second parent's ancestry, up to the oldest common ancestor (identical to its reachability).

        Note that the character encoding of the contents of the diff is unspecified as Git does not track this, making
        it hard for Bitbucket to reliably determine this.

        Args:
            encoded_id: The snippet id.
            revision: A revspec expression. This can simply be a commit SHA1, a ref name, or a compare expression like
                ``staging..production``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            path: When used, only one the diff of the specified file will be returned.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/snippets/{workspace}/{encoded_id}/{revision}/diff"),
            path_params=[
                param[str]("encoded_id", encoded_id),
                param[str]("revision", revision),
                param[str]("workspace", workspace),
            ],
            query_params=[param[str | None]("path", path)],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=empty_response,
            error_mapper=get_snippets_by_workspace_by_encoded_id_by_revision_diff_error_mapper,
            request_options=request_options,
        )

    def get_snippets_by_workspace_by_encoded_id_by_revision_patch(
        self, encoded_id: str, revision: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, GetSnippetsByWorkspaceByEncodedIdByRevisionPatchErrorBody]:
        """Returns the patch of the specified commit against its first parent.

        Note that this resource is different in functionality from the ``diff`` resource.

        The differences between a diff and a patch are:

        * patches have a commit header with the username, message, etc
        * diffs support the optional ``path=foo/bar.py`` query param to filter the
        diff to just that one file diff (not supported for patches)
        * for a merge, the diff will show the diff between the merge commit and
        its first parent (identical to how PRs work), while patch returns a response containing separate patches for
        each commit on the second parent's ancestry, up to the oldest common ancestor (identical to its reachability).

        Note that the character encoding of the contents of the patch is unspecified as Git does not track this, making
        it hard for Bitbucket to reliably determine this.

        Args:
            encoded_id: The snippet id.
            revision: A revspec expression. This can simply be a commit SHA1, a ref name, or a compare expression like
                ``staging..production``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/snippets/{workspace}/{encoded_id}/{revision}/patch"),
            path_params=[
                param[str]("encoded_id", encoded_id),
                param[str]("revision", revision),
                param[str]("workspace", workspace),
            ],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=empty_response,
            error_mapper=get_snippets_by_workspace_by_encoded_id_by_revision_patch_error_mapper,
            request_options=request_options,
        )

    def get_snippets_by_workspace_by_encoded_id_comments(
        self, encoded_id: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[PaginatedSnippetComments, GetSnippetsByWorkspaceByEncodedIdCommentsErrorBody]:
        """Used to retrieve a paginated list of all comments for a specific snippet.

        This resource works identical to commit and pull request comments.

        The default sorting is oldest to newest and can be overridden with the ``sort`` query parameter.

        Args:
            encoded_id: The snippet id.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/snippets/{workspace}/{encoded_id}/comments"),
            path_params=[param[str]("encoded_id", encoded_id), param[str]("workspace", workspace)],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[PaginatedSnippetComments],
            error_mapper=get_snippets_by_workspace_by_encoded_id_comments_error_mapper,
            request_options=request_options,
        )

    def get_snippets_by_workspace_by_encoded_id_comments_by_comment_id(
        self, comment_id: int, encoded_id: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[SnippetComment, GetSnippetsByWorkspaceByEncodedIdCommentsByCommentIdErrorBody]:
        """Returns the specific snippet comment.

        Args:
            comment_id: The id of the comment.
            encoded_id: The snippet id.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/snippets/{workspace}/{encoded_id}/comments/{comment_id}"),
            path_params=[
                param[int]("comment_id", comment_id),
                param[str]("encoded_id", encoded_id),
                param[str]("workspace", workspace),
            ],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[SnippetComment],
            error_mapper=get_snippets_by_workspace_by_encoded_id_comments_by_comment_id_error_mapper,
            request_options=request_options,
        )

    def get_snippets_by_workspace_by_encoded_id_commits(
        self, encoded_id: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[PaginatedSnippetCommits, GetSnippetsByWorkspaceByEncodedIdCommitsErrorBody]:
        """Returns the changes (commits) made on this snippet.

        Args:
            encoded_id: The snippet id.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/snippets/{workspace}/{encoded_id}/commits"),
            path_params=[param[str]("encoded_id", encoded_id), param[str]("workspace", workspace)],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[PaginatedSnippetCommits],
            error_mapper=get_snippets_by_workspace_by_encoded_id_commits_error_mapper,
            request_options=request_options,
        )

    def get_snippets_by_workspace_by_encoded_id_commits_by_revision(
        self, encoded_id: str, revision: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[SnippetCommit, GetSnippetsByWorkspaceByEncodedIdCommitsByRevisionErrorBody]:
        """Returns the changes made on this snippet in this commit.

        Args:
            encoded_id: The snippet id.
            revision: The commit's SHA1.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/snippets/{workspace}/{encoded_id}/commits/{revision}"),
            path_params=[
                param[str]("encoded_id", encoded_id),
                param[str]("revision", revision),
                param[str]("workspace", workspace),
            ],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[SnippetCommit],
            error_mapper=get_snippets_by_workspace_by_encoded_id_commits_by_revision_error_mapper,
            request_options=request_options,
        )

    def get_snippets_by_workspace_by_encoded_id_files_by_path(
        self, encoded_id: str, path: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, GetSnippetsByWorkspaceByEncodedIdFilesByPathErrorBody]:
        """Convenience resource for getting to a snippet's raw files without the need for first having to retrieve the
        snippet itself and having to pull out the versioned file links.

        Args:
            encoded_id: The snippet id.
            path: Path to the file.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/snippets/{workspace}/{encoded_id}/files/{path}"),
            path_params=[
                param[str]("encoded_id", encoded_id), param[str]("path", path), param[str]("workspace", workspace)
            ],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=empty_response,
            error_mapper=get_snippets_by_workspace_by_encoded_id_files_by_path_error_mapper,
            request_options=request_options,
        )

    def get_snippets_by_workspace_by_encoded_id_watch(
        self, encoded_id: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, GetSnippetsByWorkspaceByEncodedIdWatchErrorBody]:
        """Used to check if the current user is watching a specific snippet.

        Returns 204 (No Content) if the user is watching the snippet and 404 if not.

        Hitting this endpoint anonymously always returns a 404.

        Args:
            encoded_id: The snippet id.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/snippets/{workspace}/{encoded_id}/watch"),
            path_params=[param[str]("encoded_id", encoded_id), param[str]("workspace", workspace)],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=empty_response,
            error_mapper=get_snippets_by_workspace_by_encoded_id_watch_error_mapper,
            request_options=request_options,
        )

    def get_snippets_by_workspace_by_encoded_id_watchers(
        self, encoded_id: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[PaginatedAccounts, GetSnippetsByWorkspaceByEncodedIdWatchersErrorBody]:
        """Returns a paginated list of all users watching a specific snippet.

        Args:
            encoded_id: The snippet id.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/snippets/{workspace}/{encoded_id}/watchers"),
            path_params=[param[str]("encoded_id", encoded_id), param[str]("workspace", workspace)],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[PaginatedAccounts],
            error_mapper=get_snippets_by_workspace_by_encoded_id_watchers_error_mapper,
            request_options=request_options,
        )

    def post_snippets(
        self, body: Snippet | SnippetDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Snippet, PostSnippetsErrorBody]:
        """Creates a new snippet under the authenticated user's account.

        Args:
            body: The new snippet object.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/snippets"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[Snippet | SnippetDict](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[Snippet],
            error_mapper=post_snippets_error_mapper,
            request_options=request_options,
        )

    def post_snippets_by_workspace(
        self, workspace: str, body: Snippet | SnippetDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Snippet, PostSnippetsByWorkspaceErrorBody]:
        """Identical to ``/snippets``, except that the new snippet will be created under the workspace specified in the
        path parameter ``{workspace}``.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            body: The new snippet object.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/snippets/{workspace}"),
            path_params=[param[str]("workspace", workspace)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[Snippet | SnippetDict](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[Snippet],
            error_mapper=post_snippets_by_workspace_error_mapper,
            request_options=request_options,
        )

    def post_snippets_by_workspace_by_encoded_id_comments(
        self,
        encoded_id: str,
        workspace: str,
        body: SnippetComment | SnippetCommentDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[SnippetComment, PostSnippetsByWorkspaceByEncodedIdCommentsErrorBody]:
        """Creates a new comment.

        The only required field in the body is ``content.raw``.

        To create a threaded reply to an existing comment, include ``parent.id``.

        Args:
            encoded_id: The snippet id.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            body: The contents of the new comment.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/snippets/{workspace}/{encoded_id}/comments"),
            path_params=[param[str]("encoded_id", encoded_id), param[str]("workspace", workspace)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[SnippetComment | SnippetCommentDict](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[SnippetComment],
            error_mapper=post_snippets_by_workspace_by_encoded_id_comments_error_mapper,
            request_options=request_options,
        )

    def put_snippets_by_workspace_by_encoded_id(
        self, encoded_id: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Snippet, PutSnippetsByWorkspaceByEncodedIdErrorBody]:
        """Used to update a snippet.

        Args:
            encoded_id: The snippet id.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/snippets/{workspace}/{encoded_id}"),
            path_params=[param[str]("encoded_id", encoded_id), param[str]("workspace", workspace)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[Snippet],
            error_mapper=put_snippets_by_workspace_by_encoded_id_error_mapper,
            request_options=request_options,
        )

    def put_snippets_by_workspace_by_encoded_id_by_node_id(
        self, encoded_id: str, node_id: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Snippet, PutSnippetsByWorkspaceByEncodedIdByNodeIdErrorBody]:
        """Identical to ``UPDATE /snippets/encoded_id``, except that this endpoint takes an explicit commit revision.
        Only the snippet's "HEAD"/"tip" (most recent) version can be updated and requests on all other, older revisions
        fail by returning a 405 status.

        Usage of this endpoint over the unrestricted ``/snippets/encoded_id`` could be desired if the caller wants to be
        sure no concurrent modifications have taken place between the moment of the UPDATE request and the original GET.

        This can be considered a so-called "Compare And Swap", or CAS operation.

        Other than that, the two endpoints are identical in behavior.

        Args:
            encoded_id: The snippet id.
            node_id: A commit revision (SHA1).
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/snippets/{workspace}/{encoded_id}/{node_id}"),
            path_params=[
                param[str]("encoded_id", encoded_id), param[str]("node_id", node_id), param[str]("workspace", workspace)
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[Snippet],
            error_mapper=put_snippets_by_workspace_by_encoded_id_by_node_id_error_mapper,
            request_options=request_options,
        )

    def put_snippets_by_workspace_by_encoded_id_comments_by_comment_id(
        self,
        comment_id: int,
        encoded_id: str,
        workspace: str,
        body: SnippetComment | SnippetCommentDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[SnippetComment, PutSnippetsByWorkspaceByEncodedIdCommentsByCommentIdErrorBody]:
        """Updates a comment.

        The only required field in the body is ``content.raw``.

        Comments can only be updated by their author.

        Args:
            comment_id: The id of the comment.
            encoded_id: The snippet id.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            body: The contents to update the comment to.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/snippets/{workspace}/{encoded_id}/comments/{comment_id}"),
            path_params=[
                param[int]("comment_id", comment_id),
                param[str]("encoded_id", encoded_id),
                param[str]("workspace", workspace),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[SnippetComment | SnippetCommentDict](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[SnippetComment],
            error_mapper=put_snippets_by_workspace_by_encoded_id_comments_by_comment_id_error_mapper,
            request_options=request_options,
        )

    def put_snippets_by_workspace_by_encoded_id_watch(
        self, encoded_id: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, PutSnippetsByWorkspaceByEncodedIdWatchErrorBody]:
        """Used to start watching a specific snippet. Returns 204 (No Content).

        Args:
            encoded_id: The snippet id.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/snippets/{workspace}/{encoded_id}/watch"),
            path_params=[param[str]("encoded_id", encoded_id), param[str]("workspace", workspace)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=empty_response,
            error_mapper=put_snippets_by_workspace_by_encoded_id_watch_error_mapper,
            request_options=request_options,
        )


class AsyncSnippetsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def delete_snippets_by_workspace_by_encoded_id(
        self, encoded_id: str, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteSnippetsByWorkspaceByEncodedIdErrorBody]:
        """Deletes a snippet and returns an empty response.

        Args:
            encoded_id: The snippet id.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/snippets/{workspace}/{encoded_id}"),
            path_params=[param[str]("encoded_id", encoded_id), param[str]("workspace", workspace)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_empty_response,
            error_mapper=delete_snippets_by_workspace_by_encoded_id_error_mapper,
            request_options=request_options,
        )

    async def delete_snippets_by_workspace_by_encoded_id_by_node_id(
        self, encoded_id: str, node_id: str, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteSnippetsByWorkspaceByEncodedIdByNodeIdErrorBody]:
        """Deletes the snippet.

        Note that this only works for versioned URLs that point to the latest commit of the snippet. Pointing to an
        older commit results in a 405 status code.

        To delete a snippet, regardless of whether or not concurrent changes are being made to it, use ``DELETE
        /snippets/{encoded_id}`` instead.

        Args:
            encoded_id: The snippet id.
            node_id: A commit revision (SHA1).
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/snippets/{workspace}/{encoded_id}/{node_id}"),
            path_params=[
                param[str]("encoded_id", encoded_id), param[str]("node_id", node_id), param[str]("workspace", workspace)
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_empty_response,
            error_mapper=delete_snippets_by_workspace_by_encoded_id_by_node_id_error_mapper,
            request_options=request_options,
        )

    async def delete_snippets_by_workspace_by_encoded_id_comments_by_comment_id(
        self,
        comment_id: int,
        encoded_id: str,
        workspace: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DeleteSnippetsByWorkspaceByEncodedIdCommentsByCommentIdErrorBody]:
        """Deletes a snippet comment.

        Comments can only be removed by the comment author, snippet creator, or workspace admin.

        Args:
            comment_id: The id of the comment.
            encoded_id: The snippet id.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/snippets/{workspace}/{encoded_id}/comments/{comment_id}"),
            path_params=[
                param[int]("comment_id", comment_id),
                param[str]("encoded_id", encoded_id),
                param[str]("workspace", workspace),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_empty_response,
            error_mapper=delete_snippets_by_workspace_by_encoded_id_comments_by_comment_id_error_mapper,
            request_options=request_options,
        )

    async def delete_snippets_by_workspace_by_encoded_id_watch(
        self, encoded_id: str, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteSnippetsByWorkspaceByEncodedIdWatchErrorBody]:
        """Used to stop watching a specific snippet. Returns 204 (No Content) to indicate success.

        Args:
            encoded_id: The snippet id.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/snippets/{workspace}/{encoded_id}/watch"),
            path_params=[param[str]("encoded_id", encoded_id), param[str]("workspace", workspace)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_empty_response,
            error_mapper=delete_snippets_by_workspace_by_encoded_id_watch_error_mapper,
            request_options=request_options,
        )

    async def get_snippets(
        self,
        *,
        role: RoleBitbucketSnippetsApiOrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PaginatedSnippets, GetSnippetsErrorBody]:
        """**This endpoint is deprecated. Please use the workspace scoped alternative.**

        Returns all snippets. Like pull requests, repositories and workspaces, the full set of snippets is defined by
        what the current user has access to.

        This includes all snippets owned by any of the workspaces the user is a member of, or snippets by other users
        that the current user is either watching or has collaborated on (for instance by commenting on it).

        To limit the set of returned snippets, apply the ``?role=[owner|contributor|member]`` query parameter where the
        roles are defined as follows:

        * ``owner``: all snippets owned by the current user
        * ``contributor``: all snippets owned by, or watched by the current user
        * ``member``: created in a workspaces or watched by the current user

        When no role is specified, all public snippets are returned, as well as all privately owned snippets watched or
        commented on.

        The returned response is a normal paginated JSON list. This endpoint only supports ``application/json``
        responses and no ``multipart/form-data`` or ``multipart/related``. As a result, it is not possible to include
        the file contents.

        Args:
            role: Filter down the result based on the authenticated user's role (``owner``, ``contributor``, or
                ``member``).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/snippets"),
            query_params=[param[RoleBitbucketSnippetsApiOrStr | None]("role", role)],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[PaginatedSnippets],
            error_mapper=get_snippets_error_mapper,
            request_options=request_options,
        )

    async def get_snippets_by_workspace(
        self,
        workspace: str,
        *,
        role: RoleBitbucketSnippetsApiOrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PaginatedSnippets, GetSnippetsByWorkspaceErrorBody]:
        """Identical to ``/snippets``, except that the result is further filtered by the snippet owner and only those
        that are owned by ``{workspace}`` are returned.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            role: Filter down the result based on the authenticated user's role (``owner``, ``contributor``, or
                ``member``).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/snippets/{workspace}"),
            path_params=[param[str]("workspace", workspace)],
            query_params=[param[RoleBitbucketSnippetsApiOrStr | None]("role", role)],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[PaginatedSnippets],
            error_mapper=get_snippets_by_workspace_error_mapper,
            request_options=request_options,
        )

    async def get_snippets_by_workspace_by_encoded_id(
        self, encoded_id: str, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Snippet, GetSnippetsByWorkspaceByEncodedIdErrorBody]:
        """Retrieves a single snippet.

        Args:
            encoded_id: The snippet id.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/snippets/{workspace}/{encoded_id}"),
            path_params=[param[str]("encoded_id", encoded_id), param[str]("workspace", workspace)],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[Snippet],
            error_mapper=get_snippets_by_workspace_by_encoded_id_error_mapper,
            request_options=request_options,
        )

    async def get_snippets_by_workspace_by_encoded_id_by_node_id(
        self, encoded_id: str, node_id: str, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Snippet, GetSnippetsByWorkspaceByEncodedIdByNodeIdErrorBody]:
        """Identical to ``GET /snippets/encoded_id``, except that this endpoint can be used to retrieve the contents of
        the snippet as it was at an older revision, while ``/snippets/encoded_id`` always returns the snippet's current
        revision.

        Note that only the snippet's file contents are versioned, not its meta data properties like the title.

        Other than that, the two endpoints are identical in behavior.

        Args:
            encoded_id: The snippet id.
            node_id: A commit revision (SHA1).
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/snippets/{workspace}/{encoded_id}/{node_id}"),
            path_params=[
                param[str]("encoded_id", encoded_id), param[str]("node_id", node_id), param[str]("workspace", workspace)
            ],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[Snippet],
            error_mapper=get_snippets_by_workspace_by_encoded_id_by_node_id_error_mapper,
            request_options=request_options,
        )

    async def get_snippets_by_workspace_by_encoded_id_by_node_id_files_by_path(
        self,
        encoded_id: str,
        node_id: str,
        path: str,
        workspace: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, GetSnippetsByWorkspaceByEncodedIdByNodeIdFilesByPathErrorBody]:
        """Retrieves the raw contents of a specific file in the snippet. The ``Content-Disposition`` header will be
        "attachment" to avoid issues with malevolent executable files.

        The file's mime type is derived from its filename and returned in the ``Content-Type`` header.

        Note that for text files, no character encoding is included as part of the content type.

        Args:
            encoded_id: The snippet id.
            node_id: A commit revision (SHA1).
            path: Path to the file.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/snippets/{workspace}/{encoded_id}/{node_id}/files/{path}"),
            path_params=[
                param[str]("encoded_id", encoded_id),
                param[str]("node_id", node_id),
                param[str]("path", path),
                param[str]("workspace", workspace),
            ],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_empty_response,
            error_mapper=get_snippets_by_workspace_by_encoded_id_by_node_id_files_by_path_error_mapper,
            request_options=request_options,
        )

    async def get_snippets_by_workspace_by_encoded_id_by_revision_diff(
        self,
        encoded_id: str,
        revision: str,
        workspace: str,
        *,
        path: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, GetSnippetsByWorkspaceByEncodedIdByRevisionDiffErrorBody]:
        """Returns the diff of the specified commit against its first parent.

        Note that this resource is different in functionality from the ``patch`` resource.

        The differences between a diff and a patch are:

        * patches have a commit header with the username, message, etc
        * diffs support the optional ``path=foo/bar.py`` query param to filter the
        diff to just that one file diff (not supported for patches)
        * for a merge, the diff will show the diff between the merge commit and
        its first parent (identical to how PRs work), while patch returns a response containing separate patches for
        each commit on the second parent's ancestry, up to the oldest common ancestor (identical to its reachability).

        Note that the character encoding of the contents of the diff is unspecified as Git does not track this, making
        it hard for Bitbucket to reliably determine this.

        Args:
            encoded_id: The snippet id.
            revision: A revspec expression. This can simply be a commit SHA1, a ref name, or a compare expression like
                ``staging..production``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            path: When used, only one the diff of the specified file will be returned.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/snippets/{workspace}/{encoded_id}/{revision}/diff"),
            path_params=[
                param[str]("encoded_id", encoded_id),
                param[str]("revision", revision),
                param[str]("workspace", workspace),
            ],
            query_params=[param[str | None]("path", path)],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_empty_response,
            error_mapper=get_snippets_by_workspace_by_encoded_id_by_revision_diff_error_mapper,
            request_options=request_options,
        )

    async def get_snippets_by_workspace_by_encoded_id_by_revision_patch(
        self,
        encoded_id: str,
        revision: str,
        workspace: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, GetSnippetsByWorkspaceByEncodedIdByRevisionPatchErrorBody]:
        """Returns the patch of the specified commit against its first parent.

        Note that this resource is different in functionality from the ``diff`` resource.

        The differences between a diff and a patch are:

        * patches have a commit header with the username, message, etc
        * diffs support the optional ``path=foo/bar.py`` query param to filter the
        diff to just that one file diff (not supported for patches)
        * for a merge, the diff will show the diff between the merge commit and
        its first parent (identical to how PRs work), while patch returns a response containing separate patches for
        each commit on the second parent's ancestry, up to the oldest common ancestor (identical to its reachability).

        Note that the character encoding of the contents of the patch is unspecified as Git does not track this, making
        it hard for Bitbucket to reliably determine this.

        Args:
            encoded_id: The snippet id.
            revision: A revspec expression. This can simply be a commit SHA1, a ref name, or a compare expression like
                ``staging..production``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/snippets/{workspace}/{encoded_id}/{revision}/patch"),
            path_params=[
                param[str]("encoded_id", encoded_id),
                param[str]("revision", revision),
                param[str]("workspace", workspace),
            ],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_empty_response,
            error_mapper=get_snippets_by_workspace_by_encoded_id_by_revision_patch_error_mapper,
            request_options=request_options,
        )

    async def get_snippets_by_workspace_by_encoded_id_comments(
        self, encoded_id: str, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[PaginatedSnippetComments, GetSnippetsByWorkspaceByEncodedIdCommentsErrorBody]:
        """Used to retrieve a paginated list of all comments for a specific snippet.

        This resource works identical to commit and pull request comments.

        The default sorting is oldest to newest and can be overridden with the ``sort`` query parameter.

        Args:
            encoded_id: The snippet id.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/snippets/{workspace}/{encoded_id}/comments"),
            path_params=[param[str]("encoded_id", encoded_id), param[str]("workspace", workspace)],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[PaginatedSnippetComments],
            error_mapper=get_snippets_by_workspace_by_encoded_id_comments_error_mapper,
            request_options=request_options,
        )

    async def get_snippets_by_workspace_by_encoded_id_comments_by_comment_id(
        self,
        comment_id: int,
        encoded_id: str,
        workspace: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[SnippetComment, GetSnippetsByWorkspaceByEncodedIdCommentsByCommentIdErrorBody]:
        """Returns the specific snippet comment.

        Args:
            comment_id: The id of the comment.
            encoded_id: The snippet id.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/snippets/{workspace}/{encoded_id}/comments/{comment_id}"),
            path_params=[
                param[int]("comment_id", comment_id),
                param[str]("encoded_id", encoded_id),
                param[str]("workspace", workspace),
            ],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[SnippetComment],
            error_mapper=get_snippets_by_workspace_by_encoded_id_comments_by_comment_id_error_mapper,
            request_options=request_options,
        )

    async def get_snippets_by_workspace_by_encoded_id_commits(
        self, encoded_id: str, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[PaginatedSnippetCommits, GetSnippetsByWorkspaceByEncodedIdCommitsErrorBody]:
        """Returns the changes (commits) made on this snippet.

        Args:
            encoded_id: The snippet id.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/snippets/{workspace}/{encoded_id}/commits"),
            path_params=[param[str]("encoded_id", encoded_id), param[str]("workspace", workspace)],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[PaginatedSnippetCommits],
            error_mapper=get_snippets_by_workspace_by_encoded_id_commits_error_mapper,
            request_options=request_options,
        )

    async def get_snippets_by_workspace_by_encoded_id_commits_by_revision(
        self,
        encoded_id: str,
        revision: str,
        workspace: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[SnippetCommit, GetSnippetsByWorkspaceByEncodedIdCommitsByRevisionErrorBody]:
        """Returns the changes made on this snippet in this commit.

        Args:
            encoded_id: The snippet id.
            revision: The commit's SHA1.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/snippets/{workspace}/{encoded_id}/commits/{revision}"),
            path_params=[
                param[str]("encoded_id", encoded_id),
                param[str]("revision", revision),
                param[str]("workspace", workspace),
            ],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[SnippetCommit],
            error_mapper=get_snippets_by_workspace_by_encoded_id_commits_by_revision_error_mapper,
            request_options=request_options,
        )

    async def get_snippets_by_workspace_by_encoded_id_files_by_path(
        self, encoded_id: str, path: str, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, GetSnippetsByWorkspaceByEncodedIdFilesByPathErrorBody]:
        """Convenience resource for getting to a snippet's raw files without the need for first having to retrieve the
        snippet itself and having to pull out the versioned file links.

        Args:
            encoded_id: The snippet id.
            path: Path to the file.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/snippets/{workspace}/{encoded_id}/files/{path}"),
            path_params=[
                param[str]("encoded_id", encoded_id), param[str]("path", path), param[str]("workspace", workspace)
            ],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_empty_response,
            error_mapper=get_snippets_by_workspace_by_encoded_id_files_by_path_error_mapper,
            request_options=request_options,
        )

    async def get_snippets_by_workspace_by_encoded_id_watch(
        self, encoded_id: str, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, GetSnippetsByWorkspaceByEncodedIdWatchErrorBody]:
        """Used to check if the current user is watching a specific snippet.

        Returns 204 (No Content) if the user is watching the snippet and 404 if not.

        Hitting this endpoint anonymously always returns a 404.

        Args:
            encoded_id: The snippet id.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/snippets/{workspace}/{encoded_id}/watch"),
            path_params=[param[str]("encoded_id", encoded_id), param[str]("workspace", workspace)],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_empty_response,
            error_mapper=get_snippets_by_workspace_by_encoded_id_watch_error_mapper,
            request_options=request_options,
        )

    async def get_snippets_by_workspace_by_encoded_id_watchers(
        self, encoded_id: str, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[PaginatedAccounts, GetSnippetsByWorkspaceByEncodedIdWatchersErrorBody]:
        """Returns a paginated list of all users watching a specific snippet.

        Args:
            encoded_id: The snippet id.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/snippets/{workspace}/{encoded_id}/watchers"),
            path_params=[param[str]("encoded_id", encoded_id), param[str]("workspace", workspace)],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[PaginatedAccounts],
            error_mapper=get_snippets_by_workspace_by_encoded_id_watchers_error_mapper,
            request_options=request_options,
        )

    async def post_snippets(
        self, body: Snippet | SnippetDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Snippet, PostSnippetsErrorBody]:
        """Creates a new snippet under the authenticated user's account.

        Args:
            body: The new snippet object.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/snippets"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[Snippet | SnippetDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[Snippet],
            error_mapper=post_snippets_error_mapper,
            request_options=request_options,
        )

    async def post_snippets_by_workspace(
        self, workspace: str, body: Snippet | SnippetDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Snippet, PostSnippetsByWorkspaceErrorBody]:
        """Identical to ``/snippets``, except that the new snippet will be created under the workspace specified in the
        path parameter ``{workspace}``.

        Args:
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            body: The new snippet object.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/snippets/{workspace}"),
            path_params=[param[str]("workspace", workspace)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[Snippet | SnippetDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[Snippet],
            error_mapper=post_snippets_by_workspace_error_mapper,
            request_options=request_options,
        )

    async def post_snippets_by_workspace_by_encoded_id_comments(
        self,
        encoded_id: str,
        workspace: str,
        body: SnippetComment | SnippetCommentDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[SnippetComment, PostSnippetsByWorkspaceByEncodedIdCommentsErrorBody]:
        """Creates a new comment.

        The only required field in the body is ``content.raw``.

        To create a threaded reply to an existing comment, include ``parent.id``.

        Args:
            encoded_id: The snippet id.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            body: The contents of the new comment.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/snippets/{workspace}/{encoded_id}/comments"),
            path_params=[param[str]("encoded_id", encoded_id), param[str]("workspace", workspace)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[SnippetComment | SnippetCommentDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[SnippetComment],
            error_mapper=post_snippets_by_workspace_by_encoded_id_comments_error_mapper,
            request_options=request_options,
        )

    async def put_snippets_by_workspace_by_encoded_id(
        self, encoded_id: str, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Snippet, PutSnippetsByWorkspaceByEncodedIdErrorBody]:
        """Used to update a snippet.

        Args:
            encoded_id: The snippet id.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/snippets/{workspace}/{encoded_id}"),
            path_params=[param[str]("encoded_id", encoded_id), param[str]("workspace", workspace)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[Snippet],
            error_mapper=put_snippets_by_workspace_by_encoded_id_error_mapper,
            request_options=request_options,
        )

    async def put_snippets_by_workspace_by_encoded_id_by_node_id(
        self, encoded_id: str, node_id: str, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Snippet, PutSnippetsByWorkspaceByEncodedIdByNodeIdErrorBody]:
        """Identical to ``UPDATE /snippets/encoded_id``, except that this endpoint takes an explicit commit revision.
        Only the snippet's "HEAD"/"tip" (most recent) version can be updated and requests on all other, older revisions
        fail by returning a 405 status.

        Usage of this endpoint over the unrestricted ``/snippets/encoded_id`` could be desired if the caller wants to be
        sure no concurrent modifications have taken place between the moment of the UPDATE request and the original GET.

        This can be considered a so-called "Compare And Swap", or CAS operation.

        Other than that, the two endpoints are identical in behavior.

        Args:
            encoded_id: The snippet id.
            node_id: A commit revision (SHA1).
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/snippets/{workspace}/{encoded_id}/{node_id}"),
            path_params=[
                param[str]("encoded_id", encoded_id), param[str]("node_id", node_id), param[str]("workspace", workspace)
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[Snippet],
            error_mapper=put_snippets_by_workspace_by_encoded_id_by_node_id_error_mapper,
            request_options=request_options,
        )

    async def put_snippets_by_workspace_by_encoded_id_comments_by_comment_id(
        self,
        comment_id: int,
        encoded_id: str,
        workspace: str,
        body: SnippetComment | SnippetCommentDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[SnippetComment, PutSnippetsByWorkspaceByEncodedIdCommentsByCommentIdErrorBody]:
        """Updates a comment.

        The only required field in the body is ``content.raw``.

        Comments can only be updated by their author.

        Args:
            comment_id: The id of the comment.
            encoded_id: The snippet id.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            body: The contents to update the comment to.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/snippets/{workspace}/{encoded_id}/comments/{comment_id}"),
            path_params=[
                param[int]("comment_id", comment_id),
                param[str]("encoded_id", encoded_id),
                param[str]("workspace", workspace),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[SnippetComment | SnippetCommentDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[SnippetComment],
            error_mapper=put_snippets_by_workspace_by_encoded_id_comments_by_comment_id_error_mapper,
            request_options=request_options,
        )

    async def put_snippets_by_workspace_by_encoded_id_watch(
        self, encoded_id: str, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, PutSnippetsByWorkspaceByEncodedIdWatchErrorBody]:
        """Used to start watching a specific snippet. Returns 204 (No Content).

        Args:
            encoded_id: The snippet id.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/snippets/{workspace}/{encoded_id}/watch"),
            path_params=[param[str]("encoded_id", encoded_id), param[str]("workspace", workspace)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_empty_response,
            error_mapper=put_snippets_by_workspace_by_encoded_id_watch_error_mapper,
            request_options=request_options,
        )

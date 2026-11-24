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
from ..errors.get_repositories_by_workspace_by_repo_slug_filehistory_by_commit_by_path2_error import (
    GetRepositoriesByWorkspaceByRepoSlugFilehistoryByCommitByPath2ErrorBody,
    get_repositories_by_workspace_by_repo_slug_filehistory_by_commit_by_path2_error_mapper,
)
from ..errors.get_repositories_by_workspace_by_repo_slug_src2_error import (
    GetRepositoriesByWorkspaceByRepoSlugSrc2ErrorBody,
    get_repositories_by_workspace_by_repo_slug_src2_error_mapper,
)
from ..errors.get_repositories_by_workspace_by_repo_slug_src_by_commit_by_path2_error import (
    GetRepositoriesByWorkspaceByRepoSlugSrcByCommitByPath2ErrorBody,
    get_repositories_by_workspace_by_repo_slug_src_by_commit_by_path2_error_mapper,
)
from ..errors.post_repositories_by_workspace_by_repo_slug_src2_error import (
    PostRepositoriesByWorkspaceByRepoSlugSrc2ErrorBody,
    post_repositories_by_workspace_by_repo_slug_src2_error_mapper,
)
from ..models.enums.format import FormatOrStr
from ..models.enums.format1 import Format1OrStr
from ..models.paginated_files import PaginatedFiles
from ..models.paginated_tree_entry import PaginatedTreeEntry
from ..server.server import Server


class Source:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = SourceWithRawResponse(client, server, auth)

    def get_repositories_by_workspace_by_repo_slug_filehistory_by_commit_by_path2(
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
            self._with_raw_response.get_repositories_by_workspace_by_repo_slug_filehistory_by_commit_by_path2(
                commit, path, repo_slug, workspace, renames=renames, q=q, sort=sort, request_options=request_options
            ),
        )

    def get_repositories_by_workspace_by_repo_slug_src2(
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
            self._with_raw_response.get_repositories_by_workspace_by_repo_slug_src2(
                repo_slug, workspace, format_=format_, request_options=request_options
            ),
        )

    def get_repositories_by_workspace_by_repo_slug_src_by_commit_by_path2(
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
            self._with_raw_response.get_repositories_by_workspace_by_repo_slug_src_by_commit_by_path2(
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

    def post_repositories_by_workspace_by_repo_slug_src2(
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
            self._with_raw_response.post_repositories_by_workspace_by_repo_slug_src2(
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

    @property
    def with_raw_response(self) -> SourceWithRawResponse:
        return self._with_raw_response


class AsyncSource:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncSourceWithRawResponse(client, server, auth)

    async def get_repositories_by_workspace_by_repo_slug_filehistory_by_commit_by_path2(
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
            await self._with_raw_response.get_repositories_by_workspace_by_repo_slug_filehistory_by_commit_by_path2(
                commit, path, repo_slug, workspace, renames=renames, q=q, sort=sort, request_options=request_options
            ),
        )

    async def get_repositories_by_workspace_by_repo_slug_src2(
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
            await self._with_raw_response.get_repositories_by_workspace_by_repo_slug_src2(
                repo_slug, workspace, format_=format_, request_options=request_options
            ),
        )

    async def get_repositories_by_workspace_by_repo_slug_src_by_commit_by_path2(
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
            await self._with_raw_response.get_repositories_by_workspace_by_repo_slug_src_by_commit_by_path2(
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

    async def post_repositories_by_workspace_by_repo_slug_src2(
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
            await self._with_raw_response.post_repositories_by_workspace_by_repo_slug_src2(
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

    @property
    def with_raw_response(self) -> AsyncSourceWithRawResponse:
        return self._with_raw_response


class SourceWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_repositories_by_workspace_by_repo_slug_filehistory_by_commit_by_path2(
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
    ) -> ApiResult[PaginatedFiles, GetRepositoriesByWorkspaceByRepoSlugFilehistoryByCommitByPath2ErrorBody]:
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
            error_mapper=get_repositories_by_workspace_by_repo_slug_filehistory_by_commit_by_path2_error_mapper,
            request_options=request_options,
        )

    def get_repositories_by_workspace_by_repo_slug_src2(
        self,
        repo_slug: str,
        workspace: str,
        *,
        format_: FormatOrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PaginatedTreeEntry, GetRepositoriesByWorkspaceByRepoSlugSrc2ErrorBody]:
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
            error_mapper=get_repositories_by_workspace_by_repo_slug_src2_error_mapper,
            request_options=request_options,
        )

    def get_repositories_by_workspace_by_repo_slug_src_by_commit_by_path2(
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
    ) -> ApiResult[PaginatedTreeEntry, GetRepositoriesByWorkspaceByRepoSlugSrcByCommitByPath2ErrorBody]:
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
            error_mapper=get_repositories_by_workspace_by_repo_slug_src_by_commit_by_path2_error_mapper,
            request_options=request_options,
        )

    def post_repositories_by_workspace_by_repo_slug_src2(
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
    ) -> ApiResult[None, PostRepositoriesByWorkspaceByRepoSlugSrc2ErrorBody]:
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
            error_mapper=post_repositories_by_workspace_by_repo_slug_src2_error_mapper,
            request_options=request_options,
        )


class AsyncSourceWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_repositories_by_workspace_by_repo_slug_filehistory_by_commit_by_path2(
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
    ) -> ApiResult[PaginatedFiles, GetRepositoriesByWorkspaceByRepoSlugFilehistoryByCommitByPath2ErrorBody]:
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
            error_mapper=get_repositories_by_workspace_by_repo_slug_filehistory_by_commit_by_path2_error_mapper,
            request_options=request_options,
        )

    async def get_repositories_by_workspace_by_repo_slug_src2(
        self,
        repo_slug: str,
        workspace: str,
        *,
        format_: FormatOrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PaginatedTreeEntry, GetRepositoriesByWorkspaceByRepoSlugSrc2ErrorBody]:
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
            error_mapper=get_repositories_by_workspace_by_repo_slug_src2_error_mapper,
            request_options=request_options,
        )

    async def get_repositories_by_workspace_by_repo_slug_src_by_commit_by_path2(
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
    ) -> ApiResult[PaginatedTreeEntry, GetRepositoriesByWorkspaceByRepoSlugSrcByCommitByPath2ErrorBody]:
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
            error_mapper=get_repositories_by_workspace_by_repo_slug_src_by_commit_by_path2_error_mapper,
            request_options=request_options,
        )

    async def post_repositories_by_workspace_by_repo_slug_src2(
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
    ) -> ApiResult[None, PostRepositoriesByWorkspaceByRepoSlugSrc2ErrorBody]:
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
            error_mapper=post_repositories_by_workspace_by_repo_slug_src2_error_mapper,
            request_options=request_options,
        )

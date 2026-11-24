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
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.get_repositories_by_workspace_by_repo_slug_commit_by_commit_statuses_build_by_key_error import (
    GetRepositoriesByWorkspaceByRepoSlugCommitByCommitStatusesBuildByKeyErrorBody,
    get_repositories_by_workspace_by_repo_slug_commit_by_commit_statuses_build_by_key_error_mapper,
)
from ..errors.get_repositories_by_workspace_by_repo_slug_commit_by_commit_statuses_error import (
    GetRepositoriesByWorkspaceByRepoSlugCommitByCommitStatusesErrorBody,
    get_repositories_by_workspace_by_repo_slug_commit_by_commit_statuses_error_mapper,
)
from ..errors.get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_statuses_error import (
    GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdStatusesErrorBody,
    get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_statuses_error_mapper,
)
from ..errors.post_repositories_by_workspace_by_repo_slug_commit_by_commit_statuses_build_error import (
    PostRepositoriesByWorkspaceByRepoSlugCommitByCommitStatusesBuildErrorBody,
    post_repositories_by_workspace_by_repo_slug_commit_by_commit_statuses_build_error_mapper,
)
from ..errors.put_repositories_by_workspace_by_repo_slug_commit_by_commit_statuses_build_by_key_error import (
    PutRepositoriesByWorkspaceByRepoSlugCommitByCommitStatusesBuildByKeyErrorBody,
    put_repositories_by_workspace_by_repo_slug_commit_by_commit_statuses_build_by_key_error_mapper,
)
from ..models.commitstatus import Commitstatus, CommitstatusDict
from ..models.paginated_commit_statuses import PaginatedCommitStatuses
from ..server.server import Server


class CommitStatuses:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = CommitStatusesWithRawResponse(client, server, auth)

    def get_repositories_by_workspace_by_repo_slug_commit_by_commit_statuses(
        self,
        commit: str,
        repo_slug: str,
        workspace: str,
        *,
        refname: str | None = None,
        q: str | None = None,
        sort: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PaginatedCommitStatuses:
        """Returns all statuses (e.g. build results) for a specific commit.

        Args:
            commit: The commit's SHA1.
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            refname: If specified, only return commit status objects that were either created without a refname, or were
                created with the specified refname
            q: Query string to narrow down the response as per `filtering and sorting
                </cloud/bitbucket/rest/intro/#filtering>`__.
            sort: Field by which the results should be sorted as per `filtering and sorting
                </cloud/bitbucket/rest/intro/#filtering>`__. Defaults to ``created_on``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A paginated list of all commit statuses for this commit.

        Raises:
            ApiError: If the repository is private and the request was not authenticated. If the repository or commit
                does not exist ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_repositories_by_workspace_by_repo_slug_commit_by_commit_statuses(
                commit, repo_slug, workspace, refname=refname, q=q, sort=sort, request_options=request_options
            ),
        )

    def get_repositories_by_workspace_by_repo_slug_commit_by_commit_statuses_build_by_key(
        self,
        commit: str,
        key: str,
        repo_slug: str,
        workspace: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Commitstatus:
        """Returns the specified build status for a commit.

        Args:
            commit: The commit's SHA1.
            key: The build status' unique key
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The build status object with the specified key.

        Raises:
            ApiError: If the repository is private and the request was not authenticated. If the repository, commit, or
                build status key does not exist ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_repositories_by_workspace_by_repo_slug_commit_by_commit_statuses_build_by_key(
                commit, key, repo_slug, workspace, request_options=request_options
            ),
        )

    def get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_statuses(
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
            self._with_raw_response.get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_statuses(
                pull_request_id, repo_slug, workspace, q=q, sort=sort, request_options=request_options
            ),
        )

    def post_repositories_by_workspace_by_repo_slug_commit_by_commit_statuses_build(
        self,
        commit: str,
        repo_slug: str,
        workspace: str,
        *,
        body: Commitstatus | CommitstatusDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Commitstatus:
        """Creates a new build status against the specified commit.

        If the specified key already exists, the existing status object will be overwritten.

        Example:

        ```
        curl
        https://api.bitbucket.org/2.0/repositories/my-workspace/my-repo/commit/e10dae226959c2194f2b07b077c07762d93821cf/statuses/build/
        -X POST -u jdoe -H 'Content-Type: application/json' -d '{ "key": "MY-BUILD", "state": "SUCCESSFUL",
        "description": "42 tests passed", "url": "https://www.example.org/my-build-result"
        }'
        ```

        When creating a new commit status, you can use a URI template for the URL. Templates are URLs that contain
        variable names that Bitbucket will evaluate at runtime whenever the URL is displayed anywhere similar to
        parameter substitution in Bitbucket Connect. For example, one could use
        ``https://foo.com/builds/{repository.full_name}`` which Bitbucket will turn into
        ``https://foo.com/builds/foo/bar`` at render time. The context variables available are ``repository`` and
        ``commit``.

        To associate a commit status to a pull request, the refname field must be set to the source branch of the pull
        request.

        Example:
        ```
        curl
        https://api.bitbucket.org/2.0/repositories/my-workspace/my-repo/commit/e10dae226959c2194f2b07b077c07762d93821cf/statuses/build/
        -X POST -u jdoe -H 'Content-Type: application/json' -d '{ "key": "MY-BUILD", "state": "SUCCESSFUL",
        "description": "42 tests passed", "url": "https://www.example.org/my-build-result", "refname": "my-pr-branch"
        }'
        ```

        Args:
            commit: The commit's SHA1.
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            body: The new commit status object.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The newly created build status object.

        Raises:
            ApiError: If the repository is private and the request was not authenticated. If the repository, commit, or
                build status key does not exist ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.post_repositories_by_workspace_by_repo_slug_commit_by_commit_statuses_build(
                commit, repo_slug, workspace, body=body, request_options=request_options
            ),
        )

    def put_repositories_by_workspace_by_repo_slug_commit_by_commit_statuses_build_by_key(
        self,
        commit: str,
        key: str,
        repo_slug: str,
        workspace: str,
        *,
        body: Commitstatus | CommitstatusDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Commitstatus:
        """Used to update the current status of a build status object on the specific commit.

        This operation can also be used to change other properties of the build status:

        * ``state``
        * ``name``
        * ``description``
        * ``url``
        * ``refname``

        The ``key`` cannot be changed.

        Args:
            commit: The commit's SHA1.
            key: The build status' unique key
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            body: The updated build status object
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The updated build status object.

        Raises:
            ApiError: If the repository is private and the request was not authenticated. If the repository or build
                does not exist ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.put_repositories_by_workspace_by_repo_slug_commit_by_commit_statuses_build_by_key(
                commit, key, repo_slug, workspace, body=body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> CommitStatusesWithRawResponse:
        return self._with_raw_response


class AsyncCommitStatuses:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncCommitStatusesWithRawResponse(client, server, auth)

    async def get_repositories_by_workspace_by_repo_slug_commit_by_commit_statuses(
        self,
        commit: str,
        repo_slug: str,
        workspace: str,
        *,
        refname: str | None = None,
        q: str | None = None,
        sort: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PaginatedCommitStatuses:
        """Returns all statuses (e.g. build results) for a specific commit.

        Args:
            commit: The commit's SHA1.
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            refname: If specified, only return commit status objects that were either created without a refname, or were
                created with the specified refname
            q: Query string to narrow down the response as per `filtering and sorting
                </cloud/bitbucket/rest/intro/#filtering>`__.
            sort: Field by which the results should be sorted as per `filtering and sorting
                </cloud/bitbucket/rest/intro/#filtering>`__. Defaults to ``created_on``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A paginated list of all commit statuses for this commit.

        Raises:
            ApiError: If the repository is private and the request was not authenticated. If the repository or commit
                does not exist ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_repositories_by_workspace_by_repo_slug_commit_by_commit_statuses(
                commit, repo_slug, workspace, refname=refname, q=q, sort=sort, request_options=request_options
            ),
        )

    async def get_repositories_by_workspace_by_repo_slug_commit_by_commit_statuses_build_by_key(
        self,
        commit: str,
        key: str,
        repo_slug: str,
        workspace: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Commitstatus:
        """Returns the specified build status for a commit.

        Args:
            commit: The commit's SHA1.
            key: The build status' unique key
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The build status object with the specified key.

        Raises:
            ApiError: If the repository is private and the request was not authenticated. If the repository, commit, or
                build status key does not exist ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_repositories_by_workspace_by_repo_slug_commit_by_commit_statuses_build_by_key(
                commit, key, repo_slug, workspace, request_options=request_options
            ),
        )

    async def get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_statuses(
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
            await self._with_raw_response.get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_statuses(
                pull_request_id, repo_slug, workspace, q=q, sort=sort, request_options=request_options
            ),
        )

    async def post_repositories_by_workspace_by_repo_slug_commit_by_commit_statuses_build(
        self,
        commit: str,
        repo_slug: str,
        workspace: str,
        *,
        body: Commitstatus | CommitstatusDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Commitstatus:
        """Creates a new build status against the specified commit.

        If the specified key already exists, the existing status object will be overwritten.

        Example:

        ```
        curl
        https://api.bitbucket.org/2.0/repositories/my-workspace/my-repo/commit/e10dae226959c2194f2b07b077c07762d93821cf/statuses/build/
        -X POST -u jdoe -H 'Content-Type: application/json' -d '{ "key": "MY-BUILD", "state": "SUCCESSFUL",
        "description": "42 tests passed", "url": "https://www.example.org/my-build-result"
        }'
        ```

        When creating a new commit status, you can use a URI template for the URL. Templates are URLs that contain
        variable names that Bitbucket will evaluate at runtime whenever the URL is displayed anywhere similar to
        parameter substitution in Bitbucket Connect. For example, one could use
        ``https://foo.com/builds/{repository.full_name}`` which Bitbucket will turn into
        ``https://foo.com/builds/foo/bar`` at render time. The context variables available are ``repository`` and
        ``commit``.

        To associate a commit status to a pull request, the refname field must be set to the source branch of the pull
        request.

        Example:
        ```
        curl
        https://api.bitbucket.org/2.0/repositories/my-workspace/my-repo/commit/e10dae226959c2194f2b07b077c07762d93821cf/statuses/build/
        -X POST -u jdoe -H 'Content-Type: application/json' -d '{ "key": "MY-BUILD", "state": "SUCCESSFUL",
        "description": "42 tests passed", "url": "https://www.example.org/my-build-result", "refname": "my-pr-branch"
        }'
        ```

        Args:
            commit: The commit's SHA1.
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            body: The new commit status object.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The newly created build status object.

        Raises:
            ApiError: If the repository is private and the request was not authenticated. If the repository, commit, or
                build status key does not exist ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.post_repositories_by_workspace_by_repo_slug_commit_by_commit_statuses_build(
                commit, repo_slug, workspace, body=body, request_options=request_options
            ),
        )

    async def put_repositories_by_workspace_by_repo_slug_commit_by_commit_statuses_build_by_key(
        self,
        commit: str,
        key: str,
        repo_slug: str,
        workspace: str,
        *,
        body: Commitstatus | CommitstatusDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Commitstatus:
        """Used to update the current status of a build status object on the specific commit.

        This operation can also be used to change other properties of the build status:

        * ``state``
        * ``name``
        * ``description``
        * ``url``
        * ``refname``

        The ``key`` cannot be changed.

        Args:
            commit: The commit's SHA1.
            key: The build status' unique key
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            body: The updated build status object
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The updated build status object.

        Raises:
            ApiError: If the repository is private and the request was not authenticated. If the repository or build
                does not exist ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.put_repositories_by_workspace_by_repo_slug_commit_by_commit_statuses_build_by_key(
                commit, key, repo_slug, workspace, body=body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncCommitStatusesWithRawResponse:
        return self._with_raw_response


class CommitStatusesWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_repositories_by_workspace_by_repo_slug_commit_by_commit_statuses(
        self,
        commit: str,
        repo_slug: str,
        workspace: str,
        *,
        refname: str | None = None,
        q: str | None = None,
        sort: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PaginatedCommitStatuses, GetRepositoriesByWorkspaceByRepoSlugCommitByCommitStatusesErrorBody]:
        """Returns all statuses (e.g. build results) for a specific commit.

        Args:
            commit: The commit's SHA1.
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            refname: If specified, only return commit status objects that were either created without a refname, or were
                created with the specified refname
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
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/commit/{commit}/statuses"),
            path_params=[
                param[str]("commit", commit), param[str]("repo_slug", repo_slug), param[str]("workspace", workspace)
            ],
            query_params=[
                param[str | None]("refname", refname), param[str | None]("q", q), param[str | None]("sort", sort)
            ],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[PaginatedCommitStatuses],
            error_mapper=get_repositories_by_workspace_by_repo_slug_commit_by_commit_statuses_error_mapper,
            request_options=request_options,
        )

    def get_repositories_by_workspace_by_repo_slug_commit_by_commit_statuses_build_by_key(
        self,
        commit: str,
        key: str,
        repo_slug: str,
        workspace: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Commitstatus, GetRepositoriesByWorkspaceByRepoSlugCommitByCommitStatusesBuildByKeyErrorBody]:
        """Returns the specified build status for a commit.

        Args:
            commit: The commit's SHA1.
            key: The build status' unique key
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
                "/repositories/{workspace}/{repo_slug}/commit/{commit}/statuses/build/{key}"
            ),
            path_params=[
                param[str]("commit", commit),
                param[str]("key", key),
                param[str]("repo_slug", repo_slug),
                param[str]("workspace", workspace),
            ],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[Commitstatus],
            error_mapper=get_repositories_by_workspace_by_repo_slug_commit_by_commit_statuses_build_by_key_error_mapper,
            request_options=request_options,
        )

    def get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_statuses(
        self,
        pull_request_id: int,
        repo_slug: str,
        workspace: str,
        *,
        q: str | None = None,
        sort: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[
        PaginatedCommitStatuses, GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdStatusesErrorBody
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
            error_mapper=get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_statuses_error_mapper,
            request_options=request_options,
        )

    def post_repositories_by_workspace_by_repo_slug_commit_by_commit_statuses_build(
        self,
        commit: str,
        repo_slug: str,
        workspace: str,
        *,
        body: Commitstatus | CommitstatusDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Commitstatus, PostRepositoriesByWorkspaceByRepoSlugCommitByCommitStatusesBuildErrorBody]:
        """Creates a new build status against the specified commit.

        If the specified key already exists, the existing status object will be overwritten.

        Example:

        ```
        curl
        https://api.bitbucket.org/2.0/repositories/my-workspace/my-repo/commit/e10dae226959c2194f2b07b077c07762d93821cf/statuses/build/
        -X POST -u jdoe -H 'Content-Type: application/json' -d '{ "key": "MY-BUILD", "state": "SUCCESSFUL",
        "description": "42 tests passed", "url": "https://www.example.org/my-build-result"
        }'
        ```

        When creating a new commit status, you can use a URI template for the URL. Templates are URLs that contain
        variable names that Bitbucket will evaluate at runtime whenever the URL is displayed anywhere similar to
        parameter substitution in Bitbucket Connect. For example, one could use
        ``https://foo.com/builds/{repository.full_name}`` which Bitbucket will turn into
        ``https://foo.com/builds/foo/bar`` at render time. The context variables available are ``repository`` and
        ``commit``.

        To associate a commit status to a pull request, the refname field must be set to the source branch of the pull
        request.

        Example:
        ```
        curl
        https://api.bitbucket.org/2.0/repositories/my-workspace/my-repo/commit/e10dae226959c2194f2b07b077c07762d93821cf/statuses/build/
        -X POST -u jdoe -H 'Content-Type: application/json' -d '{ "key": "MY-BUILD", "state": "SUCCESSFUL",
        "description": "42 tests passed", "url": "https://www.example.org/my-build-result", "refname": "my-pr-branch"
        }'
        ```

        Args:
            commit: The commit's SHA1.
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            body: The new commit status object.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/commit/{commit}/statuses/build"),
            path_params=[
                param[str]("commit", commit), param[str]("repo_slug", repo_slug), param[str]("workspace", workspace)
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[Commitstatus | CommitstatusDict | None](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[Commitstatus],
            error_mapper=post_repositories_by_workspace_by_repo_slug_commit_by_commit_statuses_build_error_mapper,
            request_options=request_options,
        )

    def put_repositories_by_workspace_by_repo_slug_commit_by_commit_statuses_build_by_key(
        self,
        commit: str,
        key: str,
        repo_slug: str,
        workspace: str,
        *,
        body: Commitstatus | CommitstatusDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Commitstatus, PutRepositoriesByWorkspaceByRepoSlugCommitByCommitStatusesBuildByKeyErrorBody]:
        """Used to update the current status of a build status object on the specific commit.

        This operation can also be used to change other properties of the build status:

        * ``state``
        * ``name``
        * ``description``
        * ``url``
        * ``refname``

        The ``key`` cannot be changed.

        Args:
            commit: The commit's SHA1.
            key: The build status' unique key
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            body: The updated build status object
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default(
                "/repositories/{workspace}/{repo_slug}/commit/{commit}/statuses/build/{key}"
            ),
            path_params=[
                param[str]("commit", commit),
                param[str]("key", key),
                param[str]("repo_slug", repo_slug),
                param[str]("workspace", workspace),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[Commitstatus | CommitstatusDict | None](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[Commitstatus],
            error_mapper=put_repositories_by_workspace_by_repo_slug_commit_by_commit_statuses_build_by_key_error_mapper,
            request_options=request_options,
        )


class AsyncCommitStatusesWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_repositories_by_workspace_by_repo_slug_commit_by_commit_statuses(
        self,
        commit: str,
        repo_slug: str,
        workspace: str,
        *,
        refname: str | None = None,
        q: str | None = None,
        sort: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PaginatedCommitStatuses, GetRepositoriesByWorkspaceByRepoSlugCommitByCommitStatusesErrorBody]:
        """Returns all statuses (e.g. build results) for a specific commit.

        Args:
            commit: The commit's SHA1.
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            refname: If specified, only return commit status objects that were either created without a refname, or were
                created with the specified refname
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
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/commit/{commit}/statuses"),
            path_params=[
                param[str]("commit", commit), param[str]("repo_slug", repo_slug), param[str]("workspace", workspace)
            ],
            query_params=[
                param[str | None]("refname", refname), param[str | None]("q", q), param[str | None]("sort", sort)
            ],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[PaginatedCommitStatuses],
            error_mapper=get_repositories_by_workspace_by_repo_slug_commit_by_commit_statuses_error_mapper,
            request_options=request_options,
        )

    async def get_repositories_by_workspace_by_repo_slug_commit_by_commit_statuses_build_by_key(
        self,
        commit: str,
        key: str,
        repo_slug: str,
        workspace: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Commitstatus, GetRepositoriesByWorkspaceByRepoSlugCommitByCommitStatusesBuildByKeyErrorBody]:
        """Returns the specified build status for a commit.

        Args:
            commit: The commit's SHA1.
            key: The build status' unique key
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
                "/repositories/{workspace}/{repo_slug}/commit/{commit}/statuses/build/{key}"
            ),
            path_params=[
                param[str]("commit", commit),
                param[str]("key", key),
                param[str]("repo_slug", repo_slug),
                param[str]("workspace", workspace),
            ],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[Commitstatus],
            error_mapper=get_repositories_by_workspace_by_repo_slug_commit_by_commit_statuses_build_by_key_error_mapper,
            request_options=request_options,
        )

    async def get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_statuses(
        self,
        pull_request_id: int,
        repo_slug: str,
        workspace: str,
        *,
        q: str | None = None,
        sort: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[
        PaginatedCommitStatuses, GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdStatusesErrorBody
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
            error_mapper=get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_statuses_error_mapper,
            request_options=request_options,
        )

    async def post_repositories_by_workspace_by_repo_slug_commit_by_commit_statuses_build(
        self,
        commit: str,
        repo_slug: str,
        workspace: str,
        *,
        body: Commitstatus | CommitstatusDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Commitstatus, PostRepositoriesByWorkspaceByRepoSlugCommitByCommitStatusesBuildErrorBody]:
        """Creates a new build status against the specified commit.

        If the specified key already exists, the existing status object will be overwritten.

        Example:

        ```
        curl
        https://api.bitbucket.org/2.0/repositories/my-workspace/my-repo/commit/e10dae226959c2194f2b07b077c07762d93821cf/statuses/build/
        -X POST -u jdoe -H 'Content-Type: application/json' -d '{ "key": "MY-BUILD", "state": "SUCCESSFUL",
        "description": "42 tests passed", "url": "https://www.example.org/my-build-result"
        }'
        ```

        When creating a new commit status, you can use a URI template for the URL. Templates are URLs that contain
        variable names that Bitbucket will evaluate at runtime whenever the URL is displayed anywhere similar to
        parameter substitution in Bitbucket Connect. For example, one could use
        ``https://foo.com/builds/{repository.full_name}`` which Bitbucket will turn into
        ``https://foo.com/builds/foo/bar`` at render time. The context variables available are ``repository`` and
        ``commit``.

        To associate a commit status to a pull request, the refname field must be set to the source branch of the pull
        request.

        Example:
        ```
        curl
        https://api.bitbucket.org/2.0/repositories/my-workspace/my-repo/commit/e10dae226959c2194f2b07b077c07762d93821cf/statuses/build/
        -X POST -u jdoe -H 'Content-Type: application/json' -d '{ "key": "MY-BUILD", "state": "SUCCESSFUL",
        "description": "42 tests passed", "url": "https://www.example.org/my-build-result", "refname": "my-pr-branch"
        }'
        ```

        Args:
            commit: The commit's SHA1.
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            body: The new commit status object.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/commit/{commit}/statuses/build"),
            path_params=[
                param[str]("commit", commit), param[str]("repo_slug", repo_slug), param[str]("workspace", workspace)
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[Commitstatus | CommitstatusDict | None](body),
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[Commitstatus],
            error_mapper=post_repositories_by_workspace_by_repo_slug_commit_by_commit_statuses_build_error_mapper,
            request_options=request_options,
        )

    async def put_repositories_by_workspace_by_repo_slug_commit_by_commit_statuses_build_by_key(
        self,
        commit: str,
        key: str,
        repo_slug: str,
        workspace: str,
        *,
        body: Commitstatus | CommitstatusDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Commitstatus, PutRepositoriesByWorkspaceByRepoSlugCommitByCommitStatusesBuildByKeyErrorBody]:
        """Used to update the current status of a build status object on the specific commit.

        This operation can also be used to change other properties of the build status:

        * ``state``
        * ``name``
        * ``description``
        * ``url``
        * ``refname``

        The ``key`` cannot be changed.

        Args:
            commit: The commit's SHA1.
            key: The build status' unique key
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            body: The updated build status object
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default(
                "/repositories/{workspace}/{repo_slug}/commit/{commit}/statuses/build/{key}"
            ),
            path_params=[
                param[str]("commit", commit),
                param[str]("key", key),
                param[str]("repo_slug", repo_slug),
                param[str]("workspace", workspace),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[Commitstatus | CommitstatusDict | None](body),
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[Commitstatus],
            error_mapper=put_repositories_by_workspace_by_repo_slug_commit_by_commit_statuses_build_by_key_error_mapper,
            request_options=request_options,
        )

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
    empty_response,
    param,
    unwrap,
)
from ..errors.delete_repositories_by_workspace_by_repo_slug_downloads_by_filename_error import (
    DeleteRepositoriesByWorkspaceByRepoSlugDownloadsByFilenameErrorBody,
    delete_repositories_by_workspace_by_repo_slug_downloads_by_filename_error_mapper,
)
from ..errors.get_repositories_by_workspace_by_repo_slug_downloads_by_filename_error import (
    GetRepositoriesByWorkspaceByRepoSlugDownloadsByFilenameErrorBody,
    get_repositories_by_workspace_by_repo_slug_downloads_by_filename_error_mapper,
)
from ..errors.get_repositories_by_workspace_by_repo_slug_downloads_error import (
    GetRepositoriesByWorkspaceByRepoSlugDownloadsErrorBody,
    get_repositories_by_workspace_by_repo_slug_downloads_error_mapper,
)
from ..errors.post_repositories_by_workspace_by_repo_slug_downloads_error import (
    PostRepositoriesByWorkspaceByRepoSlugDownloadsErrorBody,
    post_repositories_by_workspace_by_repo_slug_downloads_error_mapper,
)
from ..server.server import Server


class Downloads:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = DownloadsWithRawResponse(client, server, auth)

    def delete_repositories_by_workspace_by_repo_slug_downloads_by_filename(
        self, filename: str, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Deletes the specified download artifact from the repository.

        Args:
            filename: Name of the file.
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The specified download artifact was deleted.

        Raises:
            ApiError: User is not authorized to write to the repository. The specified download does not exist.
                ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.delete_repositories_by_workspace_by_repo_slug_downloads_by_filename(
                filename, repo_slug, workspace, request_options=request_options
            ),
        )

    def get_repositories_by_workspace_by_repo_slug_downloads(
        self, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Returns a list of download links associated with the repository.

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Returns a paginated list of the downloads associated with the repository.

        Raises:
            ApiError: User is not authorized to read from the repository. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_repositories_by_workspace_by_repo_slug_downloads(
                repo_slug, workspace, request_options=request_options
            ),
        )

    def get_repositories_by_workspace_by_repo_slug_downloads_by_filename(
        self, filename: str, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Return a redirect to the contents of a download artifact.

        This endpoint returns the actual file contents and not the artifact's metadata.

        $ curl -s -L https://api.bitbucket.org/2.0/repositories/evzijst/git-tests/downloads/hello.txt Hello World

        Args:
            filename: Name of the file.
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Raises:
            ApiError: User is not authorized to read from the repository. The specified download artifact does not
                exist. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_repositories_by_workspace_by_repo_slug_downloads_by_filename(
                filename, repo_slug, workspace, request_options=request_options
            ),
        )

    def post_repositories_by_workspace_by_repo_slug_downloads(
        self, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Upload new download artifacts.

        To upload files, perform a ``multipart/form-data`` POST containing one or more ``files`` fields:

        $ echo Hello World > hello.txt $ curl -s -u evzijst -X POST
        https://api.bitbucket.org/2.0/repositories/evzijst/git-tests/downloads -F files=@hello.txt

        When a file is uploaded with the same name as an existing artifact, then the existing file will be replaced.

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The artifact was uploaded sucessfully.

        Raises:
            ApiError: Bad Request. User is not authorized to write to the repository. Unsupported Content-Type. Use
                multiplart/form-data. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.post_repositories_by_workspace_by_repo_slug_downloads(
                repo_slug, workspace, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> DownloadsWithRawResponse:
        return self._with_raw_response


class AsyncDownloads:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncDownloadsWithRawResponse(client, server, auth)

    async def delete_repositories_by_workspace_by_repo_slug_downloads_by_filename(
        self, filename: str, repo_slug: str, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Deletes the specified download artifact from the repository.

        Args:
            filename: Name of the file.
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The specified download artifact was deleted.

        Raises:
            ApiError: User is not authorized to write to the repository. The specified download does not exist.
                ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.delete_repositories_by_workspace_by_repo_slug_downloads_by_filename(
                filename, repo_slug, workspace, request_options=request_options
            ),
        )

    async def get_repositories_by_workspace_by_repo_slug_downloads(
        self, repo_slug: str, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Returns a list of download links associated with the repository.

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Returns a paginated list of the downloads associated with the repository.

        Raises:
            ApiError: User is not authorized to read from the repository. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_repositories_by_workspace_by_repo_slug_downloads(
                repo_slug, workspace, request_options=request_options
            ),
        )

    async def get_repositories_by_workspace_by_repo_slug_downloads_by_filename(
        self, filename: str, repo_slug: str, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Return a redirect to the contents of a download artifact.

        This endpoint returns the actual file contents and not the artifact's metadata.

        $ curl -s -L https://api.bitbucket.org/2.0/repositories/evzijst/git-tests/downloads/hello.txt Hello World

        Args:
            filename: Name of the file.
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Raises:
            ApiError: User is not authorized to read from the repository. The specified download artifact does not
                exist. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_repositories_by_workspace_by_repo_slug_downloads_by_filename(
                filename, repo_slug, workspace, request_options=request_options
            ),
        )

    async def post_repositories_by_workspace_by_repo_slug_downloads(
        self, repo_slug: str, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Upload new download artifacts.

        To upload files, perform a ``multipart/form-data`` POST containing one or more ``files`` fields:

        $ echo Hello World > hello.txt $ curl -s -u evzijst -X POST
        https://api.bitbucket.org/2.0/repositories/evzijst/git-tests/downloads -F files=@hello.txt

        When a file is uploaded with the same name as an existing artifact, then the existing file will be replaced.

        Args:
            repo_slug: This can either be the repository slug or the UUID of the repository, surrounded by curly-braces,
                for example: ``{repository UUID}``.
            workspace: This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for
                example: ``{workspace UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The artifact was uploaded sucessfully.

        Raises:
            ApiError: Bad Request. User is not authorized to write to the repository. Unsupported Content-Type. Use
                multiplart/form-data. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.post_repositories_by_workspace_by_repo_slug_downloads(
                repo_slug, workspace, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncDownloadsWithRawResponse:
        return self._with_raw_response


class DownloadsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def delete_repositories_by_workspace_by_repo_slug_downloads_by_filename(
        self, filename: str, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteRepositoriesByWorkspaceByRepoSlugDownloadsByFilenameErrorBody]:
        """Deletes the specified download artifact from the repository.

        Args:
            filename: Name of the file.
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
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/downloads/{filename}"),
            path_params=[
                param[str]("filename", filename), param[str]("repo_slug", repo_slug), param[str]("workspace", workspace)
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=empty_response,
            error_mapper=delete_repositories_by_workspace_by_repo_slug_downloads_by_filename_error_mapper,
            request_options=request_options,
        )

    def get_repositories_by_workspace_by_repo_slug_downloads(
        self, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, GetRepositoriesByWorkspaceByRepoSlugDownloadsErrorBody]:
        """Returns a list of download links associated with the repository.

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
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/downloads"),
            path_params=[param[str]("repo_slug", repo_slug), param[str]("workspace", workspace)],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=empty_response,
            error_mapper=get_repositories_by_workspace_by_repo_slug_downloads_error_mapper,
            request_options=request_options,
        )

    def get_repositories_by_workspace_by_repo_slug_downloads_by_filename(
        self, filename: str, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, GetRepositoriesByWorkspaceByRepoSlugDownloadsByFilenameErrorBody]:
        """Return a redirect to the contents of a download artifact.

        This endpoint returns the actual file contents and not the artifact's metadata.

        $ curl -s -L https://api.bitbucket.org/2.0/repositories/evzijst/git-tests/downloads/hello.txt Hello World

        Args:
            filename: Name of the file.
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
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/downloads/{filename}"),
            path_params=[
                param[str]("filename", filename), param[str]("repo_slug", repo_slug), param[str]("workspace", workspace)
            ],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=empty_response,
            error_mapper=get_repositories_by_workspace_by_repo_slug_downloads_by_filename_error_mapper,
            request_options=request_options,
        )

    def post_repositories_by_workspace_by_repo_slug_downloads(
        self, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, PostRepositoriesByWorkspaceByRepoSlugDownloadsErrorBody]:
        """Upload new download artifacts.

        To upload files, perform a ``multipart/form-data`` POST containing one or more ``files`` fields:

        $ echo Hello World > hello.txt $ curl -s -u evzijst -X POST
        https://api.bitbucket.org/2.0/repositories/evzijst/git-tests/downloads -F files=@hello.txt

        When a file is uploaded with the same name as an existing artifact, then the existing file will be replaced.

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
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/downloads"),
            path_params=[param[str]("repo_slug", repo_slug), param[str]("workspace", workspace)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=empty_response,
            error_mapper=post_repositories_by_workspace_by_repo_slug_downloads_error_mapper,
            request_options=request_options,
        )


class AsyncDownloadsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def delete_repositories_by_workspace_by_repo_slug_downloads_by_filename(
        self, filename: str, repo_slug: str, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteRepositoriesByWorkspaceByRepoSlugDownloadsByFilenameErrorBody]:
        """Deletes the specified download artifact from the repository.

        Args:
            filename: Name of the file.
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
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/downloads/{filename}"),
            path_params=[
                param[str]("filename", filename), param[str]("repo_slug", repo_slug), param[str]("workspace", workspace)
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_empty_response,
            error_mapper=delete_repositories_by_workspace_by_repo_slug_downloads_by_filename_error_mapper,
            request_options=request_options,
        )

    async def get_repositories_by_workspace_by_repo_slug_downloads(
        self, repo_slug: str, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, GetRepositoriesByWorkspaceByRepoSlugDownloadsErrorBody]:
        """Returns a list of download links associated with the repository.

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
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/downloads"),
            path_params=[param[str]("repo_slug", repo_slug), param[str]("workspace", workspace)],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_empty_response,
            error_mapper=get_repositories_by_workspace_by_repo_slug_downloads_error_mapper,
            request_options=request_options,
        )

    async def get_repositories_by_workspace_by_repo_slug_downloads_by_filename(
        self, filename: str, repo_slug: str, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, GetRepositoriesByWorkspaceByRepoSlugDownloadsByFilenameErrorBody]:
        """Return a redirect to the contents of a download artifact.

        This endpoint returns the actual file contents and not the artifact's metadata.

        $ curl -s -L https://api.bitbucket.org/2.0/repositories/evzijst/git-tests/downloads/hello.txt Hello World

        Args:
            filename: Name of the file.
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
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/downloads/{filename}"),
            path_params=[
                param[str]("filename", filename), param[str]("repo_slug", repo_slug), param[str]("workspace", workspace)
            ],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_empty_response,
            error_mapper=get_repositories_by_workspace_by_repo_slug_downloads_by_filename_error_mapper,
            request_options=request_options,
        )

    async def post_repositories_by_workspace_by_repo_slug_downloads(
        self, repo_slug: str, workspace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, PostRepositoriesByWorkspaceByRepoSlugDownloadsErrorBody]:
        """Upload new download artifacts.

        To upload files, perform a ``multipart/form-data`` POST containing one or more ``files`` fields:

        $ echo Hello World > hello.txt $ curl -s -u evzijst -X POST
        https://api.bitbucket.org/2.0/repositories/evzijst/git-tests/downloads -F files=@hello.txt

        When a file is uploaded with the same name as an existing artifact, then the existing file will be replaced.

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
            url_template=self._server.default("/repositories/{workspace}/{repo_slug}/downloads"),
            path_params=[param[str]("repo_slug", repo_slug), param[str]("workspace", workspace)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_empty_response,
            error_mapper=post_repositories_by_workspace_by_repo_slug_downloads_error_mapper,
            request_options=request_options,
        )

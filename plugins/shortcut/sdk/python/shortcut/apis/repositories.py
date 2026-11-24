from __future__ import annotations

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    RawClient,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_json_decoder,
    json_decoder,
    param,
    unwrap,
)
from ..errors.get_repository_error import GetRepositoryErrorBody, get_repository_error_mapper
from ..errors.list_repositories_error import ListRepositoriesErrorBody, list_repositories_error_mapper
from ..models.repository import Repository
from ..server.server import Server


class Repositories:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = RepositoriesWithRawResponse(client, server, auth)

    def get_repository(self, repo_public_id: int, *, request_options: RequestOptionsOrDict | None = None) -> Repository:
        """Get Repository returns information about the selected Repository.

        Args:
            repo_public_id: The unique ID of the Repository.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.get_repository(repo_public_id, request_options=request_options))

    def list_repositories(self, *, request_options: RequestOptionsOrDict | None = None) -> list[Repository]:
        """List Repositories returns a list of all Repositories and their attributes.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.list_repositories(request_options=request_options))

    @property
    def with_raw_response(self) -> RepositoriesWithRawResponse:
        return self._with_raw_response


class AsyncRepositories:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncRepositoriesWithRawResponse(client, server, auth)

    async def get_repository(
        self, repo_public_id: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Repository:
        """Get Repository returns information about the selected Repository.

        Args:
            repo_public_id: The unique ID of the Repository.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.get_repository(repo_public_id, request_options=request_options))

    async def list_repositories(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> list[Repository]:
        """List Repositories returns a list of all Repositories and their attributes.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.list_repositories(request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncRepositoriesWithRawResponse:
        return self._with_raw_response


class RepositoriesWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_repository(
        self, repo_public_id: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Repository, GetRepositoryErrorBody]:
        """Get Repository returns information about the selected Repository.

        Args:
            repo_public_id: The unique ID of the Repository.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v3/repositories/{repo-public-id}"),
            path_params=[param[int]("repo-public-id", repo_public_id)],
            auth_scheme=self._auth.api_token,
            decoder=json_decoder[Repository],
            error_mapper=get_repository_error_mapper,
            request_options=request_options,
        )

    def list_repositories(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[list[Repository], ListRepositoriesErrorBody]:
        """List Repositories returns a list of all Repositories and their attributes.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v3/repositories"),
            auth_scheme=self._auth.api_token,
            decoder=json_decoder[list[Repository]],
            error_mapper=list_repositories_error_mapper,
            request_options=request_options,
        )


class AsyncRepositoriesWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_repository(
        self, repo_public_id: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Repository, GetRepositoryErrorBody]:
        """Get Repository returns information about the selected Repository.

        Args:
            repo_public_id: The unique ID of the Repository.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v3/repositories/{repo-public-id}"),
            path_params=[param[int]("repo-public-id", repo_public_id)],
            auth_scheme=self._auth.api_token,
            decoder=async_json_decoder[Repository],
            error_mapper=get_repository_error_mapper,
            request_options=request_options,
        )

    async def list_repositories(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[list[Repository], ListRepositoriesErrorBody]:
        """List Repositories returns a list of all Repositories and their attributes.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v3/repositories"),
            auth_scheme=self._auth.api_token,
            decoder=async_json_decoder[list[Repository]],
            error_mapper=list_repositories_error_mapper,
            request_options=request_options,
        )

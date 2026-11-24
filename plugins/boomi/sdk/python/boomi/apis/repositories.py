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
from ..errors.create_repository_error import CreateRepositoryErrorBody, create_repository_error_mapper
from ..errors.delete_repository_error import DeleteRepositoryErrorBody, delete_repository_error_mapper
from ..errors.get_repository_error import GetRepositoryErrorBody, get_repository_error_mapper
from ..errors.list_repositories_error import ListRepositoriesErrorBody, list_repositories_error_mapper
from ..models.repositories_response import RepositoriesResponse
from ..models.repository import Repository
from ..models.repository_input import RepositoryInput, RepositoryInputDict
from ..server.server import Server


class Repositories:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = RepositoriesWithRawResponse(client, server, auth)

    def create_repository(
        self, body: RepositoryInput | RepositoryInputDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> Repository:
        """Creates a new DataHub repository for managing master data.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The created repository.

        Raises:
            ApiError: The request body is invalid or missing required fields. Authentication credentials are missing or
                invalid. ``error`` is ``ErrorResponseBoomiDataHubGoldenRecordsApi | RawError``."""
        return unwrap(self._with_raw_response.create_repository(body, request_options=request_options))

    def delete_repository(self, repository_id: str, *, request_options: RequestOptionsOrDict | None = None) -> None:
        """Permanently deletes a DataHub repository and all its data.

        Args:
            repository_id: Unique identifier of the DataHub repository.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Deletion successful.

        Raises:
            ApiError: Authentication credentials are missing or invalid. The requested resource was not found. ``error``
                is ``ErrorResponseBoomiDataHubGoldenRecordsApi | RawError``."""
        return unwrap(self._with_raw_response.delete_repository(repository_id, request_options=request_options))

    def get_repository(self, repository_id: str, *, request_options: RequestOptionsOrDict | None = None) -> Repository:
        """Retrieves details of a specific DataHub repository by its ID.

        Args:
            repository_id: Unique identifier of the DataHub repository.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The repository details.

        Raises:
            ApiError: Authentication credentials are missing or invalid. The requested resource was not found. ``error``
                is ``ErrorResponseBoomiDataHubGoldenRecordsApi | RawError``."""
        return unwrap(self._with_raw_response.get_repository(repository_id, request_options=request_options))

    def list_repositories(self, *, request_options: RequestOptionsOrDict | None = None) -> RepositoriesResponse:
        """Returns a list of all DataHub repositories associated with the authenticated account.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A list of DataHub repositories.

        Raises:
            ApiError: Authentication credentials are missing or invalid. ``error`` is
                ``ErrorResponseBoomiDataHubGoldenRecordsApi | RawError``."""
        return unwrap(self._with_raw_response.list_repositories(request_options=request_options))

    @property
    def with_raw_response(self) -> RepositoriesWithRawResponse:
        return self._with_raw_response


class AsyncRepositories:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncRepositoriesWithRawResponse(client, server, auth)

    async def create_repository(
        self, body: RepositoryInput | RepositoryInputDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Repository:
        """Creates a new DataHub repository for managing master data.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The created repository.

        Raises:
            ApiError: The request body is invalid or missing required fields. Authentication credentials are missing or
                invalid. ``error`` is ``ErrorResponseBoomiDataHubGoldenRecordsApi | RawError``."""
        return unwrap(await self._with_raw_response.create_repository(body, request_options=request_options))

    async def delete_repository(
        self, repository_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Permanently deletes a DataHub repository and all its data.

        Args:
            repository_id: Unique identifier of the DataHub repository.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Deletion successful.

        Raises:
            ApiError: Authentication credentials are missing or invalid. The requested resource was not found. ``error``
                is ``ErrorResponseBoomiDataHubGoldenRecordsApi | RawError``."""
        return unwrap(await self._with_raw_response.delete_repository(repository_id, request_options=request_options))

    async def get_repository(
        self, repository_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Repository:
        """Retrieves details of a specific DataHub repository by its ID.

        Args:
            repository_id: Unique identifier of the DataHub repository.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The repository details.

        Raises:
            ApiError: Authentication credentials are missing or invalid. The requested resource was not found. ``error``
                is ``ErrorResponseBoomiDataHubGoldenRecordsApi | RawError``."""
        return unwrap(await self._with_raw_response.get_repository(repository_id, request_options=request_options))

    async def list_repositories(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> RepositoriesResponse:
        """Returns a list of all DataHub repositories associated with the authenticated account.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A list of DataHub repositories.

        Raises:
            ApiError: Authentication credentials are missing or invalid. ``error`` is
                ``ErrorResponseBoomiDataHubGoldenRecordsApi | RawError``."""
        return unwrap(await self._with_raw_response.list_repositories(request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncRepositoriesWithRawResponse:
        return self._with_raw_response


class RepositoriesWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_repository(
        self, body: RepositoryInput | RepositoryInputDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Repository, CreateRepositoryErrorBody]:
        """Creates a new DataHub repository for managing master data.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default_boomi_data_hub_golden_records_api("/repositories"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[RepositoryInput | RepositoryInputDict](body),
            auth_scheme=AnySchemes(self._auth.basic_auth, self._auth.bearer_auth),
            decoder=json_decoder[Repository],
            error_mapper=create_repository_error_mapper,
            request_options=request_options,
        )

    def delete_repository(
        self, repository_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteRepositoryErrorBody]:
        """Permanently deletes a DataHub repository and all its data.

        Args:
            repository_id: Unique identifier of the DataHub repository.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default_boomi_data_hub_golden_records_api("/repositories/{repositoryId}"),
            path_params=[param[str]("repositoryId", repository_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.basic_auth, self._auth.bearer_auth),
            decoder=empty_response,
            error_mapper=delete_repository_error_mapper,
            request_options=request_options,
        )

    def get_repository(
        self, repository_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Repository, GetRepositoryErrorBody]:
        """Retrieves details of a specific DataHub repository by its ID.

        Args:
            repository_id: Unique identifier of the DataHub repository.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_boomi_data_hub_golden_records_api("/repositories/{repositoryId}"),
            path_params=[param[str]("repositoryId", repository_id)],
            auth_scheme=AnySchemes(self._auth.basic_auth, self._auth.bearer_auth),
            decoder=json_decoder[Repository],
            error_mapper=get_repository_error_mapper,
            request_options=request_options,
        )

    def list_repositories(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[RepositoriesResponse, ListRepositoriesErrorBody]:
        """Returns a list of all DataHub repositories associated with the authenticated account.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_boomi_data_hub_golden_records_api("/repositories"),
            auth_scheme=AnySchemes(self._auth.basic_auth, self._auth.bearer_auth),
            decoder=json_decoder[RepositoriesResponse],
            error_mapper=list_repositories_error_mapper,
            request_options=request_options,
        )


class AsyncRepositoriesWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_repository(
        self, body: RepositoryInput | RepositoryInputDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Repository, CreateRepositoryErrorBody]:
        """Creates a new DataHub repository for managing master data.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default_boomi_data_hub_golden_records_api("/repositories"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[RepositoryInput | RepositoryInputDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.basic_auth, self._auth.bearer_auth),
            decoder=async_json_decoder[Repository],
            error_mapper=create_repository_error_mapper,
            request_options=request_options,
        )

    async def delete_repository(
        self, repository_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteRepositoryErrorBody]:
        """Permanently deletes a DataHub repository and all its data.

        Args:
            repository_id: Unique identifier of the DataHub repository.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default_boomi_data_hub_golden_records_api("/repositories/{repositoryId}"),
            path_params=[param[str]("repositoryId", repository_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.basic_auth, self._auth.bearer_auth),
            decoder=async_empty_response,
            error_mapper=delete_repository_error_mapper,
            request_options=request_options,
        )

    async def get_repository(
        self, repository_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Repository, GetRepositoryErrorBody]:
        """Retrieves details of a specific DataHub repository by its ID.

        Args:
            repository_id: Unique identifier of the DataHub repository.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_boomi_data_hub_golden_records_api("/repositories/{repositoryId}"),
            path_params=[param[str]("repositoryId", repository_id)],
            auth_scheme=AsyncAnySchemes(self._auth.basic_auth, self._auth.bearer_auth),
            decoder=async_json_decoder[Repository],
            error_mapper=get_repository_error_mapper,
            request_options=request_options,
        )

    async def list_repositories(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[RepositoriesResponse, ListRepositoriesErrorBody]:
        """Returns a list of all DataHub repositories associated with the authenticated account.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_boomi_data_hub_golden_records_api("/repositories"),
            auth_scheme=AsyncAnySchemes(self._auth.basic_auth, self._auth.bearer_auth),
            decoder=async_json_decoder[RepositoriesResponse],
            error_mapper=list_repositories_error_mapper,
            request_options=request_options,
        )

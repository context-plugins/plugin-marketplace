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
from ..errors.create_source_error import CreateSourceErrorBody, create_source_error_mapper
from ..errors.list_sources_error import ListSourcesErrorBody, list_sources_error_mapper
from ..models.repositories_sources_response import RepositoriesSourcesResponse
from ..models.source_boomi_data_hub_sources_api import SourceBoomiDataHubSourcesApi
from ..models.source_input import SourceInput, SourceInputDict
from ..server.server import Server


class Sources:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = SourcesWithRawResponse(client, server, auth)

    def create_source(
        self,
        repository_id: str,
        body: SourceInput | SourceInputDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> SourceBoomiDataHubSourcesApi:
        """Creates a new data source within the repository representing a system that contributes records to the master
        data hub.

        Args:
            repository_id: Unique identifier of the DataHub repository.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The created data source.

        Raises:
            ApiError: The request body is invalid or missing required fields. Authentication credentials are missing or
                invalid. ``error`` is ``ErrorResponseBoomiDataHubGoldenRecordsApi | RawError``."""
        return unwrap(self._with_raw_response.create_source(repository_id, body, request_options=request_options))

    def list_sources(
        self, repository_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> RepositoriesSourcesResponse:
        """Returns all data sources configured within a specific repository.

        Args:
            repository_id: Unique identifier of the DataHub repository.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A list of data sources.

        Raises:
            ApiError: Authentication credentials are missing or invalid. The requested resource was not found. ``error``
                is ``ErrorResponseBoomiDataHubGoldenRecordsApi | RawError``."""
        return unwrap(self._with_raw_response.list_sources(repository_id, request_options=request_options))

    @property
    def with_raw_response(self) -> SourcesWithRawResponse:
        return self._with_raw_response


class AsyncSources:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncSourcesWithRawResponse(client, server, auth)

    async def create_source(
        self,
        repository_id: str,
        body: SourceInput | SourceInputDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> SourceBoomiDataHubSourcesApi:
        """Creates a new data source within the repository representing a system that contributes records to the master
        data hub.

        Args:
            repository_id: Unique identifier of the DataHub repository.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The created data source.

        Raises:
            ApiError: The request body is invalid or missing required fields. Authentication credentials are missing or
                invalid. ``error`` is ``ErrorResponseBoomiDataHubGoldenRecordsApi | RawError``."""
        return unwrap(await self._with_raw_response.create_source(repository_id, body, request_options=request_options))

    async def list_sources(
        self, repository_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> RepositoriesSourcesResponse:
        """Returns all data sources configured within a specific repository.

        Args:
            repository_id: Unique identifier of the DataHub repository.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A list of data sources.

        Raises:
            ApiError: Authentication credentials are missing or invalid. The requested resource was not found. ``error``
                is ``ErrorResponseBoomiDataHubGoldenRecordsApi | RawError``."""
        return unwrap(await self._with_raw_response.list_sources(repository_id, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncSourcesWithRawResponse:
        return self._with_raw_response


class SourcesWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_source(
        self,
        repository_id: str,
        body: SourceInput | SourceInputDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[SourceBoomiDataHubSourcesApi, CreateSourceErrorBody]:
        """Creates a new data source within the repository representing a system that contributes records to the master
        data hub.

        Args:
            repository_id: Unique identifier of the DataHub repository.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default_boomi_data_hub_golden_records_api("/repositories/{repositoryId}/sources"),
            path_params=[param[str]("repositoryId", repository_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[SourceInput | SourceInputDict](body),
            auth_scheme=AnySchemes(self._auth.basic_auth, self._auth.bearer_auth),
            decoder=json_decoder[SourceBoomiDataHubSourcesApi],
            error_mapper=create_source_error_mapper,
            request_options=request_options,
        )

    def list_sources(
        self, repository_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[RepositoriesSourcesResponse, ListSourcesErrorBody]:
        """Returns all data sources configured within a specific repository.

        Args:
            repository_id: Unique identifier of the DataHub repository.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_boomi_data_hub_golden_records_api("/repositories/{repositoryId}/sources"),
            path_params=[param[str]("repositoryId", repository_id)],
            auth_scheme=AnySchemes(self._auth.basic_auth, self._auth.bearer_auth),
            decoder=json_decoder[RepositoriesSourcesResponse],
            error_mapper=list_sources_error_mapper,
            request_options=request_options,
        )


class AsyncSourcesWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_source(
        self,
        repository_id: str,
        body: SourceInput | SourceInputDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[SourceBoomiDataHubSourcesApi, CreateSourceErrorBody]:
        """Creates a new data source within the repository representing a system that contributes records to the master
        data hub.

        Args:
            repository_id: Unique identifier of the DataHub repository.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default_boomi_data_hub_golden_records_api("/repositories/{repositoryId}/sources"),
            path_params=[param[str]("repositoryId", repository_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[SourceInput | SourceInputDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.basic_auth, self._auth.bearer_auth),
            decoder=async_json_decoder[SourceBoomiDataHubSourcesApi],
            error_mapper=create_source_error_mapper,
            request_options=request_options,
        )

    async def list_sources(
        self, repository_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[RepositoriesSourcesResponse, ListSourcesErrorBody]:
        """Returns all data sources configured within a specific repository.

        Args:
            repository_id: Unique identifier of the DataHub repository.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_boomi_data_hub_golden_records_api("/repositories/{repositoryId}/sources"),
            path_params=[param[str]("repositoryId", repository_id)],
            auth_scheme=AsyncAnySchemes(self._auth.basic_auth, self._auth.bearer_auth),
            decoder=async_json_decoder[RepositoriesSourcesResponse],
            error_mapper=list_sources_error_mapper,
            request_options=request_options,
        )

from __future__ import annotations

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
    json_decoder,
    param,
    unwrap,
)
from ..errors.list_golden_records_error import ListGoldenRecordsErrorBody, list_golden_records_error_mapper
from ..models.repositories_universes_records_response import RepositoriesUniversesRecordsResponse
from ..server.server import Server


class GoldenRecords:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = GoldenRecordsWithRawResponse(client, server, auth)

    def list_golden_records(
        self,
        repository_id: str,
        universe_id: str,
        *,
        page_size: int | None = 100,
        page_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> RepositoriesUniversesRecordsResponse:
        """Returns a paginated list of golden records from the specified master data domain (universe).

        Args:
            repository_id: Unique identifier of the DataHub repository.
            universe_id: Unique identifier of the master data domain (universe).
            page_size: Number of records per page.
            page_token: Pagination token from a previous response.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A paginated list of golden records.

        Raises:
            ApiError: Authentication credentials are missing or invalid. The requested resource was not found. ``error``
                is ``ErrorResponseBoomiDataHubGoldenRecordsApi | RawError``."""
        return unwrap(
            self._with_raw_response.list_golden_records(
                repository_id, universe_id, page_size=page_size, page_token=page_token, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> GoldenRecordsWithRawResponse:
        return self._with_raw_response


class AsyncGoldenRecords:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncGoldenRecordsWithRawResponse(client, server, auth)

    async def list_golden_records(
        self,
        repository_id: str,
        universe_id: str,
        *,
        page_size: int | None = 100,
        page_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> RepositoriesUniversesRecordsResponse:
        """Returns a paginated list of golden records from the specified master data domain (universe).

        Args:
            repository_id: Unique identifier of the DataHub repository.
            universe_id: Unique identifier of the master data domain (universe).
            page_size: Number of records per page.
            page_token: Pagination token from a previous response.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A paginated list of golden records.

        Raises:
            ApiError: Authentication credentials are missing or invalid. The requested resource was not found. ``error``
                is ``ErrorResponseBoomiDataHubGoldenRecordsApi | RawError``."""
        return unwrap(
            await self._with_raw_response.list_golden_records(
                repository_id, universe_id, page_size=page_size, page_token=page_token, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncGoldenRecordsWithRawResponse:
        return self._with_raw_response


class GoldenRecordsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def list_golden_records(
        self,
        repository_id: str,
        universe_id: str,
        *,
        page_size: int | None = 100,
        page_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[RepositoriesUniversesRecordsResponse, ListGoldenRecordsErrorBody]:
        """Returns a paginated list of golden records from the specified master data domain (universe).

        Args:
            repository_id: Unique identifier of the DataHub repository.
            universe_id: Unique identifier of the master data domain (universe).
            page_size: Number of records per page.
            page_token: Pagination token from a previous response.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_boomi_data_hub_golden_records_api(
                "/repositories/{repositoryId}/universes/{universeId}/records"
            ),
            path_params=[param[str]("repositoryId", repository_id), param[str]("universeId", universe_id)],
            query_params=[param[int | None]("pageSize", page_size), param[str | None]("pageToken", page_token)],
            auth_scheme=AnySchemes(self._auth.basic_auth, self._auth.bearer_auth),
            decoder=json_decoder[RepositoriesUniversesRecordsResponse],
            error_mapper=list_golden_records_error_mapper,
            request_options=request_options,
        )


class AsyncGoldenRecordsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def list_golden_records(
        self,
        repository_id: str,
        universe_id: str,
        *,
        page_size: int | None = 100,
        page_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[RepositoriesUniversesRecordsResponse, ListGoldenRecordsErrorBody]:
        """Returns a paginated list of golden records from the specified master data domain (universe).

        Args:
            repository_id: Unique identifier of the DataHub repository.
            universe_id: Unique identifier of the master data domain (universe).
            page_size: Number of records per page.
            page_token: Pagination token from a previous response.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_boomi_data_hub_golden_records_api(
                "/repositories/{repositoryId}/universes/{universeId}/records"
            ),
            path_params=[param[str]("repositoryId", repository_id), param[str]("universeId", universe_id)],
            query_params=[param[int | None]("pageSize", page_size), param[str | None]("pageToken", page_token)],
            auth_scheme=AsyncAnySchemes(self._auth.basic_auth, self._auth.bearer_auth),
            decoder=async_json_decoder[RepositoriesUniversesRecordsResponse],
            error_mapper=list_golden_records_error_mapper,
            request_options=request_options,
        )

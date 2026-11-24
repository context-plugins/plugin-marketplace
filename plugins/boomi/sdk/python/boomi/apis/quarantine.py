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
from ..errors.list_quarantine_entries_error import ListQuarantineEntriesErrorBody, list_quarantine_entries_error_mapper
from ..models.repositories_universes_quarantine_response import RepositoriesUniversesQuarantineResponse
from ..server.server import Server


class Quarantine:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = QuarantineWithRawResponse(client, server, auth)

    def list_quarantine_entries(
        self, repository_id: str, universe_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> RepositoriesUniversesQuarantineResponse:
        """Returns records held in quarantine that could not be automatically processed due to data quality or matching
        issues.

        Args:
            repository_id: Unique identifier of the DataHub repository.
            universe_id: Unique identifier of the master data domain (universe).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A list of quarantined records.

        Raises:
            ApiError: Authentication credentials are missing or invalid. The requested resource was not found. ``error``
                is ``ErrorResponseBoomiDataHubGoldenRecordsApi | RawError``."""
        return unwrap(
            self._with_raw_response.list_quarantine_entries(repository_id, universe_id, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> QuarantineWithRawResponse:
        return self._with_raw_response


class AsyncQuarantine:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncQuarantineWithRawResponse(client, server, auth)

    async def list_quarantine_entries(
        self, repository_id: str, universe_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> RepositoriesUniversesQuarantineResponse:
        """Returns records held in quarantine that could not be automatically processed due to data quality or matching
        issues.

        Args:
            repository_id: Unique identifier of the DataHub repository.
            universe_id: Unique identifier of the master data domain (universe).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A list of quarantined records.

        Raises:
            ApiError: Authentication credentials are missing or invalid. The requested resource was not found. ``error``
                is ``ErrorResponseBoomiDataHubGoldenRecordsApi | RawError``."""
        return unwrap(
            await self._with_raw_response.list_quarantine_entries(
                repository_id, universe_id, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncQuarantineWithRawResponse:
        return self._with_raw_response


class QuarantineWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def list_quarantine_entries(
        self, repository_id: str, universe_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[RepositoriesUniversesQuarantineResponse, ListQuarantineEntriesErrorBody]:
        """Returns records held in quarantine that could not be automatically processed due to data quality or matching
        issues.

        Args:
            repository_id: Unique identifier of the DataHub repository.
            universe_id: Unique identifier of the master data domain (universe).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_boomi_data_hub_golden_records_api(
                "/repositories/{repositoryId}/universes/{universeId}/quarantine"
            ),
            path_params=[param[str]("repositoryId", repository_id), param[str]("universeId", universe_id)],
            auth_scheme=AnySchemes(self._auth.basic_auth, self._auth.bearer_auth),
            decoder=json_decoder[RepositoriesUniversesQuarantineResponse],
            error_mapper=list_quarantine_entries_error_mapper,
            request_options=request_options,
        )


class AsyncQuarantineWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def list_quarantine_entries(
        self, repository_id: str, universe_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[RepositoriesUniversesQuarantineResponse, ListQuarantineEntriesErrorBody]:
        """Returns records held in quarantine that could not be automatically processed due to data quality or matching
        issues.

        Args:
            repository_id: Unique identifier of the DataHub repository.
            universe_id: Unique identifier of the master data domain (universe).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_boomi_data_hub_golden_records_api(
                "/repositories/{repositoryId}/universes/{universeId}/quarantine"
            ),
            path_params=[param[str]("repositoryId", repository_id), param[str]("universeId", universe_id)],
            auth_scheme=AsyncAnySchemes(self._auth.basic_auth, self._auth.bearer_auth),
            decoder=async_json_decoder[RepositoriesUniversesQuarantineResponse],
            error_mapper=list_quarantine_entries_error_mapper,
            request_options=request_options,
        )

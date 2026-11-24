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
from ..errors.get_bulk_enrichment_results_error import (
    GetBulkEnrichmentResultsErrorBody,
    get_bulk_enrichment_results_error_mapper,
)
from ..errors.get_discovery_results_error import GetDiscoveryResultsErrorBody, get_discovery_results_error_mapper
from ..errors.get_intent_results_error import GetIntentResultsErrorBody, get_intent_results_error_mapper
from ..models.bulk_results import BulkResults
from ..models.discovery_results import DiscoveryResults
from ..models.intent_results import IntentResults
from ..server.server import Server


class Results:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = ResultsWithRawResponse(client, server, auth)

    def get_bulk_enrichment_results(
        self, bulk_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> BulkResults:
        """Retrieves the results of a previously submitted bulk enrichment job.

        Args:
            bulk_id: The Leadspace bulk identifier returned when the job was accepted
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The request is done

        Raises:
            ApiError: Unauthorized request (wrong credentials or credentials have expired) The results are not found
                Server error ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.get_bulk_enrichment_results(bulk_id, request_options=request_options))

    def get_discovery_results(
        self, bulk_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> DiscoveryResults:
        """Send a ``GET`` request.

        Args:
            bulk_id: The Leadspace bulk identifier returned when the job was accepted
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Request is done

        Raises:
            ApiError: Unauthorized request (wrong credentials or credentials have expired) Results not found Server
                error ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.get_discovery_results(bulk_id, request_options=request_options))

    def get_intent_results(self, job_id: str, *, request_options: RequestOptionsOrDict | None = None) -> IntentResults:
        """Send a ``GET`` request.

        Args:
            job_id: The Leadspace bulk identifier returned when the job was accepted
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Intent results

        Raises:
            ApiError: Unauthorized request (wrong credentials or credentials have expired) Server error ``error`` is
                ``Error | RawError``."""
        return unwrap(self._with_raw_response.get_intent_results(job_id, request_options=request_options))

    @property
    def with_raw_response(self) -> ResultsWithRawResponse:
        return self._with_raw_response


class AsyncResults:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncResultsWithRawResponse(client, server, auth)

    async def get_bulk_enrichment_results(
        self, bulk_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> BulkResults:
        """Retrieves the results of a previously submitted bulk enrichment job.

        Args:
            bulk_id: The Leadspace bulk identifier returned when the job was accepted
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The request is done

        Raises:
            ApiError: Unauthorized request (wrong credentials or credentials have expired) The results are not found
                Server error ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_bulk_enrichment_results(bulk_id, request_options=request_options)
        )

    async def get_discovery_results(
        self, bulk_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> DiscoveryResults:
        """Send a ``GET`` request.

        Args:
            bulk_id: The Leadspace bulk identifier returned when the job was accepted
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Request is done

        Raises:
            ApiError: Unauthorized request (wrong credentials or credentials have expired) Results not found Server
                error ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.get_discovery_results(bulk_id, request_options=request_options))

    async def get_intent_results(
        self, job_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> IntentResults:
        """Send a ``GET`` request.

        Args:
            job_id: The Leadspace bulk identifier returned when the job was accepted
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Intent results

        Raises:
            ApiError: Unauthorized request (wrong credentials or credentials have expired) Server error ``error`` is
                ``Error | RawError``."""
        return unwrap(await self._with_raw_response.get_intent_results(job_id, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncResultsWithRawResponse:
        return self._with_raw_response


class ResultsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_bulk_enrichment_results(
        self, bulk_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[BulkResults, GetBulkEnrichmentResultsErrorBody]:
        """Retrieves the results of a previously submitted bulk enrichment job.

        Args:
            bulk_id: The Leadspace bulk identifier returned when the job was accepted
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/enrichment/results/{bulkId}"),
            path_params=[param[str]("bulkId", bulk_id)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[BulkResults],
            error_mapper=get_bulk_enrichment_results_error_mapper,
            request_options=request_options,
        )

    def get_discovery_results(
        self, bulk_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[DiscoveryResults, GetDiscoveryResultsErrorBody]:
        """Send a ``GET`` request.

        Args:
            bulk_id: The Leadspace bulk identifier returned when the job was accepted
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/expansion/results/{bulkId}"),
            path_params=[param[str]("bulkId", bulk_id)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[DiscoveryResults],
            error_mapper=get_discovery_results_error_mapper,
            request_options=request_options,
        )

    def get_intent_results(
        self, job_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[IntentResults, GetIntentResultsErrorBody]:
        """Send a ``GET`` request.

        Args:
            job_id: The Leadspace bulk identifier returned when the job was accepted
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/intent/results/{jobId}"),
            path_params=[param[str]("jobId", job_id)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[IntentResults],
            error_mapper=get_intent_results_error_mapper,
            request_options=request_options,
        )


class AsyncResultsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_bulk_enrichment_results(
        self, bulk_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[BulkResults, GetBulkEnrichmentResultsErrorBody]:
        """Retrieves the results of a previously submitted bulk enrichment job.

        Args:
            bulk_id: The Leadspace bulk identifier returned when the job was accepted
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/enrichment/results/{bulkId}"),
            path_params=[param[str]("bulkId", bulk_id)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[BulkResults],
            error_mapper=get_bulk_enrichment_results_error_mapper,
            request_options=request_options,
        )

    async def get_discovery_results(
        self, bulk_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[DiscoveryResults, GetDiscoveryResultsErrorBody]:
        """Send a ``GET`` request.

        Args:
            bulk_id: The Leadspace bulk identifier returned when the job was accepted
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/expansion/results/{bulkId}"),
            path_params=[param[str]("bulkId", bulk_id)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[DiscoveryResults],
            error_mapper=get_discovery_results_error_mapper,
            request_options=request_options,
        )

    async def get_intent_results(
        self, job_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[IntentResults, GetIntentResultsErrorBody]:
        """Send a ``GET`` request.

        Args:
            job_id: The Leadspace bulk identifier returned when the job was accepted
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/intent/results/{jobId}"),
            path_params=[param[str]("jobId", job_id)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[IntentResults],
            error_mapper=get_intent_results_error_mapper,
            request_options=request_options,
        )

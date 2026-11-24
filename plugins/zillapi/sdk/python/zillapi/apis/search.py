from __future__ import annotations

from uuid import UUID, uuid4

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    RawClient,
    RawError,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_json_decoder,
    json_body,
    json_decoder,
    param,
    raw_error_response,
    unwrap,
)
from ..errors.search_error import SearchErrorBody, search_error_mapper
from ..models.job_accepted_zillapi_zillow_property_data_listings_api import (
    JobAcceptedZillapiZillowPropertyDataListingsApi,
)
from ..models.search_results_ok import SearchResultsOk
from ..models.search_with_details_request import SearchWithDetailsRequest, SearchWithDetailsRequestDict
from ..models.unions.search_request2 import SearchRequest2, SearchRequest2Dict
from ..server.server import Server


class Search:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = SearchWithRawResponse(client, server, auth)

    def search(
        self, body: SearchRequest2 | SearchRequest2Dict, *, request_options: RequestOptionsOrDict | None = None
    ) -> SearchResultsOk:
        """Structured listing search using normalized filters (option A) or a pre-built Zillow searchQueryState URL
        (option B). A ``bbox`` or ``searchUrls`` is REQUIRED — a free-text location alone is rejected with 400
        invalid_filters and never hits upstream. Sync when maxItems ≤ 50, async (202/job) otherwise. Billed at 1 credit
        per result returned; failed calls are free.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Search rows (sync). Note: the search-row shape (SearchResultRow) is NOT the same as the detail Property
            shape returned by the property endpoints.

        Raises:
            ApiError: Standard error ``error`` is ``ApiErrorModel | RawError``."""
        return unwrap(self._with_raw_response.search(body, request_options=request_options))

    def search_with_details(
        self,
        body: SearchWithDetailsRequest | SearchWithDetailsRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> JobAcceptedZillapiZillowPropertyDataListingsApi:
        """Run a search and enrich every matched zpid with the full property-detail record in one chained async job.
        Always async; the results returned by GET /v1/jobs/{id}/results are detail rows (Property shape), not search
        rows. Billed per stage: 1 credit per search result plus 1 credit per detail record. Failed calls are free.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Async job accepted

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.search_with_details(body, request_options=request_options))

    @property
    def with_raw_response(self) -> SearchWithRawResponse:
        return self._with_raw_response


class AsyncSearch:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncSearchWithRawResponse(client, server, auth)

    async def search(
        self, body: SearchRequest2 | SearchRequest2Dict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> SearchResultsOk:
        """Structured listing search using normalized filters (option A) or a pre-built Zillow searchQueryState URL
        (option B). A ``bbox`` or ``searchUrls`` is REQUIRED — a free-text location alone is rejected with 400
        invalid_filters and never hits upstream. Sync when maxItems ≤ 50, async (202/job) otherwise. Billed at 1 credit
        per result returned; failed calls are free.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Search rows (sync). Note: the search-row shape (SearchResultRow) is NOT the same as the detail Property
            shape returned by the property endpoints.

        Raises:
            ApiError: Standard error ``error`` is ``ApiErrorModel | RawError``."""
        return unwrap(await self._with_raw_response.search(body, request_options=request_options))

    async def search_with_details(
        self,
        body: SearchWithDetailsRequest | SearchWithDetailsRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> JobAcceptedZillapiZillowPropertyDataListingsApi:
        """Run a search and enrich every matched zpid with the full property-detail record in one chained async job.
        Always async; the results returned by GET /v1/jobs/{id}/results are detail rows (Property shape), not search
        rows. Billed per stage: 1 credit per search result plus 1 credit per detail record. Failed calls are free.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Async job accepted

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.search_with_details(body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncSearchWithRawResponse:
        return self._with_raw_response


class SearchWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def search(
        self, body: SearchRequest2 | SearchRequest2Dict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[SearchResultsOk, SearchErrorBody]:
        """Structured listing search using normalized filters (option A) or a pre-built Zillow searchQueryState URL
        (option B). A ``bbox`` or ``searchUrls`` is REQUIRED — a free-text location alone is rejected with 400
        invalid_filters and never hits upstream. Sync when maxItems ≤ 50, async (202/job) otherwise. Billed at 1 credit
        per result returned; failed calls are free.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/search"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[SearchRequest2 | SearchRequest2Dict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[SearchResultsOk],
            error_mapper=search_error_mapper,
            request_options=request_options,
        )

    def search_with_details(
        self,
        body: SearchWithDetailsRequest | SearchWithDetailsRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[JobAcceptedZillapiZillowPropertyDataListingsApi, RawError]:
        """Run a search and enrich every matched zpid with the full property-detail record in one chained async job.
        Always async; the results returned by GET /v1/jobs/{id}/results are detail rows (Property shape), not search
        rows. Billed per stage: 1 credit per search result plus 1 credit per detail record. Failed calls are free.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/search/with-details"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[SearchWithDetailsRequest | SearchWithDetailsRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[JobAcceptedZillapiZillowPropertyDataListingsApi],
            error_mapper=raw_error_response,
            request_options=request_options,
        )


class AsyncSearchWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def search(
        self, body: SearchRequest2 | SearchRequest2Dict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[SearchResultsOk, SearchErrorBody]:
        """Structured listing search using normalized filters (option A) or a pre-built Zillow searchQueryState URL
        (option B). A ``bbox`` or ``searchUrls`` is REQUIRED — a free-text location alone is rejected with 400
        invalid_filters and never hits upstream. Sync when maxItems ≤ 50, async (202/job) otherwise. Billed at 1 credit
        per result returned; failed calls are free.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/search"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[SearchRequest2 | SearchRequest2Dict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[SearchResultsOk],
            error_mapper=search_error_mapper,
            request_options=request_options,
        )

    async def search_with_details(
        self,
        body: SearchWithDetailsRequest | SearchWithDetailsRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[JobAcceptedZillapiZillowPropertyDataListingsApi, RawError]:
        """Run a search and enrich every matched zpid with the full property-detail record in one chained async job.
        Always async; the results returned by GET /v1/jobs/{id}/results are detail rows (Property shape), not search
        rows. Billed per stage: 1 credit per search result plus 1 credit per detail record. Failed calls are free.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/search/with-details"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[SearchWithDetailsRequest | SearchWithDetailsRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[JobAcceptedZillapiZillowPropertyDataListingsApi],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

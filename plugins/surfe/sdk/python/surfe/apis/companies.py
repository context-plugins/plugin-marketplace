from __future__ import annotations

from uuid import UUID, uuid4

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    ApiResult,
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
from ..errors.get_company_enrichment_error import GetCompanyEnrichmentErrorBody, get_company_enrichment_error_mapper
from ..errors.search_companies_error import SearchCompaniesErrorBody, search_companies_error_mapper
from ..errors.start_company_enrichment_error import (
    StartCompanyEnrichmentErrorBody,
    start_company_enrichment_error_mapper,
)
from ..models.company_enrichment_request import CompanyEnrichmentRequest, CompanyEnrichmentRequestDict
from ..models.company_enrichment_result import CompanyEnrichmentResult
from ..models.company_search_request import CompanySearchRequest, CompanySearchRequestDict
from ..models.company_search_response import CompanySearchResponse
from ..models.enrichment_job_accepted import EnrichmentJobAccepted
from ..server.server import Server


class Companies:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = CompaniesWithRawResponse(client, server, auth)

    def get_company_enrichment(
        self, id_: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> CompanyEnrichmentResult:
        """Retrieve the status and results of a company enrichment job by ID. Poll until status is COMPLETED, or use a
        webhook to be notified.

        Args:
            id_: The enrichment job ID returned by the start operation.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Enrichment job status and enriched companies.

        Raises:
            ApiError: Missing or invalid API key. Resource or job not found. Too many requests. The API allows up to 10
                requests per second with short bursts to 20, plus a daily request quota. ``error`` is ``Error |
                RawError``."""
        return unwrap(self._with_raw_response.get_company_enrichment(id_, request_options=request_options))

    def search_companies(
        self,
        body: CompanySearchRequest | CompanySearchRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> CompanySearchResponse:
        """Search for companies against Ideal Customer Profile filters (industry, employee count, revenue, location,
        keywords). When credit charging is enabled the call deducts ICP search credits and returns 402 when the balance
        is insufficient.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Matching companies.

        Raises:
            ApiError: Missing or invalid API key. Not enough credits to complete the request. Too many requests. The API
                allows up to 10 requests per second with short bursts to 20, plus a daily request quota. ``error`` is
                ``Error | RawError``."""
        return unwrap(self._with_raw_response.search_companies(body, request_options=request_options))

    def start_company_enrichment(
        self,
        body: CompanyEnrichmentRequest | CompanyEnrichmentRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> EnrichmentJobAccepted:
        """Start an asynchronous bulk enrichment job for companies identified by domain. Returns an enrichment ID for
        polling or a webhook callback.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Enrichment job accepted.

        Raises:
            ApiError: Missing or invalid API key. Not enough credits to complete the request. Too many requests. The API
                allows up to 10 requests per second with short bursts to 20, plus a daily request quota. ``error`` is
                ``Error | RawError``."""
        return unwrap(self._with_raw_response.start_company_enrichment(body, request_options=request_options))

    @property
    def with_raw_response(self) -> CompaniesWithRawResponse:
        return self._with_raw_response


class AsyncCompanies:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncCompaniesWithRawResponse(client, server, auth)

    async def get_company_enrichment(
        self, id_: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> CompanyEnrichmentResult:
        """Retrieve the status and results of a company enrichment job by ID. Poll until status is COMPLETED, or use a
        webhook to be notified.

        Args:
            id_: The enrichment job ID returned by the start operation.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Enrichment job status and enriched companies.

        Raises:
            ApiError: Missing or invalid API key. Resource or job not found. Too many requests. The API allows up to 10
                requests per second with short bursts to 20, plus a daily request quota. ``error`` is ``Error |
                RawError``."""
        return unwrap(await self._with_raw_response.get_company_enrichment(id_, request_options=request_options))

    async def search_companies(
        self,
        body: CompanySearchRequest | CompanySearchRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CompanySearchResponse:
        """Search for companies against Ideal Customer Profile filters (industry, employee count, revenue, location,
        keywords). When credit charging is enabled the call deducts ICP search credits and returns 402 when the balance
        is insufficient.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Matching companies.

        Raises:
            ApiError: Missing or invalid API key. Not enough credits to complete the request. Too many requests. The API
                allows up to 10 requests per second with short bursts to 20, plus a daily request quota. ``error`` is
                ``Error | RawError``."""
        return unwrap(await self._with_raw_response.search_companies(body, request_options=request_options))

    async def start_company_enrichment(
        self,
        body: CompanyEnrichmentRequest | CompanyEnrichmentRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> EnrichmentJobAccepted:
        """Start an asynchronous bulk enrichment job for companies identified by domain. Returns an enrichment ID for
        polling or a webhook callback.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Enrichment job accepted.

        Raises:
            ApiError: Missing or invalid API key. Not enough credits to complete the request. Too many requests. The API
                allows up to 10 requests per second with short bursts to 20, plus a daily request quota. ``error`` is
                ``Error | RawError``."""
        return unwrap(await self._with_raw_response.start_company_enrichment(body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncCompaniesWithRawResponse:
        return self._with_raw_response


class CompaniesWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_company_enrichment(
        self, id_: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[CompanyEnrichmentResult, GetCompanyEnrichmentErrorBody]:
        """Retrieve the status and results of a company enrichment job by ID. Poll until status is COMPLETED, or use a
        webhook to be notified.

        Args:
            id_: The enrichment job ID returned by the start operation.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/companies/enrich/{id}"),
            path_params=[param[UUID]("id", id_)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[CompanyEnrichmentResult],
            error_mapper=get_company_enrichment_error_mapper,
            request_options=request_options,
        )

    def search_companies(
        self,
        body: CompanySearchRequest | CompanySearchRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[CompanySearchResponse, SearchCompaniesErrorBody]:
        """Search for companies against Ideal Customer Profile filters (industry, employee count, revenue, location,
        keywords). When credit charging is enabled the call deducts ICP search credits and returns 402 when the balance
        is insufficient.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/companies/search"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CompanySearchRequest | CompanySearchRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[CompanySearchResponse],
            error_mapper=search_companies_error_mapper,
            request_options=request_options,
        )

    def start_company_enrichment(
        self,
        body: CompanyEnrichmentRequest | CompanyEnrichmentRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[EnrichmentJobAccepted, StartCompanyEnrichmentErrorBody]:
        """Start an asynchronous bulk enrichment job for companies identified by domain. Returns an enrichment ID for
        polling or a webhook callback.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/companies/enrich"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CompanyEnrichmentRequest | CompanyEnrichmentRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[EnrichmentJobAccepted],
            error_mapper=start_company_enrichment_error_mapper,
            request_options=request_options,
        )


class AsyncCompaniesWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_company_enrichment(
        self, id_: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[CompanyEnrichmentResult, GetCompanyEnrichmentErrorBody]:
        """Retrieve the status and results of a company enrichment job by ID. Poll until status is COMPLETED, or use a
        webhook to be notified.

        Args:
            id_: The enrichment job ID returned by the start operation.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/companies/enrich/{id}"),
            path_params=[param[UUID]("id", id_)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[CompanyEnrichmentResult],
            error_mapper=get_company_enrichment_error_mapper,
            request_options=request_options,
        )

    async def search_companies(
        self,
        body: CompanySearchRequest | CompanySearchRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CompanySearchResponse, SearchCompaniesErrorBody]:
        """Search for companies against Ideal Customer Profile filters (industry, employee count, revenue, location,
        keywords). When credit charging is enabled the call deducts ICP search credits and returns 402 when the balance
        is insufficient.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/companies/search"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CompanySearchRequest | CompanySearchRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[CompanySearchResponse],
            error_mapper=search_companies_error_mapper,
            request_options=request_options,
        )

    async def start_company_enrichment(
        self,
        body: CompanyEnrichmentRequest | CompanyEnrichmentRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[EnrichmentJobAccepted, StartCompanyEnrichmentErrorBody]:
        """Start an asynchronous bulk enrichment job for companies identified by domain. Returns an enrichment ID for
        polling or a webhook callback.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/companies/enrich"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CompanyEnrichmentRequest | CompanyEnrichmentRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[EnrichmentJobAccepted],
            error_mapper=start_company_enrichment_error_mapper,
            request_options=request_options,
        )

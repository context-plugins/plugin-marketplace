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
from ..errors.find_people_by_email_error import FindPeopleByEmailErrorBody, find_people_by_email_error_mapper
from ..errors.get_people_enrichment_error import GetPeopleEnrichmentErrorBody, get_people_enrichment_error_mapper
from ..errors.search_people_error import SearchPeopleErrorBody, search_people_error_mapper
from ..errors.start_people_enrichment_error import StartPeopleEnrichmentErrorBody, start_people_enrichment_error_mapper
from ..models.enrichment_job_accepted import EnrichmentJobAccepted
from ..models.people_enrichment_request import PeopleEnrichmentRequest, PeopleEnrichmentRequestDict
from ..models.people_enrichment_result import PeopleEnrichmentResult
from ..models.people_find_by_email_request import PeopleFindByEmailRequest, PeopleFindByEmailRequestDict
from ..models.people_find_by_email_response import PeopleFindByEmailResponse
from ..models.people_search_request import PeopleSearchRequest, PeopleSearchRequestDict
from ..models.people_search_response import PeopleSearchResponse
from ..server.server import Server


class People:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = PeopleWithRawResponse(client, server, auth)

    def find_people_by_email(
        self,
        body: PeopleFindByEmailRequest | PeopleFindByEmailRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PeopleFindByEmailResponse:
        """Enrich people directly from a list of email addresses, returning the matched person profile and firmographics
        where available.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Matched people.

        Raises:
            ApiError: Missing or invalid API key. Too many requests. The API allows up to 10 requests per second with
                short bursts to 20, plus a daily request quota. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.find_people_by_email(body, request_options=request_options))

    def get_people_enrichment(
        self, id_: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> PeopleEnrichmentResult:
        """Retrieve the status and results of a people enrichment job by ID. Poll until status is COMPLETED, or use a
        webhook to be notified.

        Args:
            id_: The enrichment job ID returned by the start operation.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Enrichment job status and enriched people.

        Raises:
            ApiError: Missing or invalid API key. Resource or job not found. Too many requests. The API allows up to 10
                requests per second with short bursts to 20, plus a daily request quota. ``error`` is ``Error |
                RawError``."""
        return unwrap(self._with_raw_response.get_people_enrichment(id_, request_options=request_options))

    def search_people(
        self,
        body: PeopleSearchRequest | PeopleSearchRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PeopleSearchResponse:
        """Search for people by persona filters (job titles, seniorities, departments) and company filters (industry,
        headcount, location). Job titles are expanded automatically with acronym and semantic matching. Results are
        paged with nextPageToken.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Matching people.

        Raises:
            ApiError: Missing or invalid API key. Not enough credits to complete the request. Too many requests. The API
                allows up to 10 requests per second with short bursts to 20, plus a daily request quota. ``error`` is
                ``Error | RawError``."""
        return unwrap(self._with_raw_response.search_people(body, request_options=request_options))

    def start_people_enrichment(
        self,
        body: PeopleEnrichmentRequest | PeopleEnrichmentRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> EnrichmentJobAccepted:
        """Start an asynchronous bulk enrichment job for up to 10,000 people. Each person is identified by a LinkedIn
        URL, or by first name + last name + company name or domain. Returns an enrichment ID for polling or a webhook
        callback.

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
        return unwrap(self._with_raw_response.start_people_enrichment(body, request_options=request_options))

    @property
    def with_raw_response(self) -> PeopleWithRawResponse:
        return self._with_raw_response


class AsyncPeople:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncPeopleWithRawResponse(client, server, auth)

    async def find_people_by_email(
        self,
        body: PeopleFindByEmailRequest | PeopleFindByEmailRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PeopleFindByEmailResponse:
        """Enrich people directly from a list of email addresses, returning the matched person profile and firmographics
        where available.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Matched people.

        Raises:
            ApiError: Missing or invalid API key. Too many requests. The API allows up to 10 requests per second with
                short bursts to 20, plus a daily request quota. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.find_people_by_email(body, request_options=request_options))

    async def get_people_enrichment(
        self, id_: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> PeopleEnrichmentResult:
        """Retrieve the status and results of a people enrichment job by ID. Poll until status is COMPLETED, or use a
        webhook to be notified.

        Args:
            id_: The enrichment job ID returned by the start operation.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Enrichment job status and enriched people.

        Raises:
            ApiError: Missing or invalid API key. Resource or job not found. Too many requests. The API allows up to 10
                requests per second with short bursts to 20, plus a daily request quota. ``error`` is ``Error |
                RawError``."""
        return unwrap(await self._with_raw_response.get_people_enrichment(id_, request_options=request_options))

    async def search_people(
        self,
        body: PeopleSearchRequest | PeopleSearchRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PeopleSearchResponse:
        """Search for people by persona filters (job titles, seniorities, departments) and company filters (industry,
        headcount, location). Job titles are expanded automatically with acronym and semantic matching. Results are
        paged with nextPageToken.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Matching people.

        Raises:
            ApiError: Missing or invalid API key. Not enough credits to complete the request. Too many requests. The API
                allows up to 10 requests per second with short bursts to 20, plus a daily request quota. ``error`` is
                ``Error | RawError``."""
        return unwrap(await self._with_raw_response.search_people(body, request_options=request_options))

    async def start_people_enrichment(
        self,
        body: PeopleEnrichmentRequest | PeopleEnrichmentRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> EnrichmentJobAccepted:
        """Start an asynchronous bulk enrichment job for up to 10,000 people. Each person is identified by a LinkedIn
        URL, or by first name + last name + company name or domain. Returns an enrichment ID for polling or a webhook
        callback.

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
        return unwrap(await self._with_raw_response.start_people_enrichment(body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncPeopleWithRawResponse:
        return self._with_raw_response


class PeopleWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def find_people_by_email(
        self,
        body: PeopleFindByEmailRequest | PeopleFindByEmailRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PeopleFindByEmailResponse, FindPeopleByEmailErrorBody]:
        """Enrich people directly from a list of email addresses, returning the matched person profile and firmographics
        where available.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/people/find-by-email"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PeopleFindByEmailRequest | PeopleFindByEmailRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[PeopleFindByEmailResponse],
            error_mapper=find_people_by_email_error_mapper,
            request_options=request_options,
        )

    def get_people_enrichment(
        self, id_: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[PeopleEnrichmentResult, GetPeopleEnrichmentErrorBody]:
        """Retrieve the status and results of a people enrichment job by ID. Poll until status is COMPLETED, or use a
        webhook to be notified.

        Args:
            id_: The enrichment job ID returned by the start operation.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/people/enrich/{id}"),
            path_params=[param[UUID]("id", id_)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[PeopleEnrichmentResult],
            error_mapper=get_people_enrichment_error_mapper,
            request_options=request_options,
        )

    def search_people(
        self,
        body: PeopleSearchRequest | PeopleSearchRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PeopleSearchResponse, SearchPeopleErrorBody]:
        """Search for people by persona filters (job titles, seniorities, departments) and company filters (industry,
        headcount, location). Job titles are expanded automatically with acronym and semantic matching. Results are
        paged with nextPageToken.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/people/search"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PeopleSearchRequest | PeopleSearchRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[PeopleSearchResponse],
            error_mapper=search_people_error_mapper,
            request_options=request_options,
        )

    def start_people_enrichment(
        self,
        body: PeopleEnrichmentRequest | PeopleEnrichmentRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[EnrichmentJobAccepted, StartPeopleEnrichmentErrorBody]:
        """Start an asynchronous bulk enrichment job for up to 10,000 people. Each person is identified by a LinkedIn
        URL, or by first name + last name + company name or domain. Returns an enrichment ID for polling or a webhook
        callback.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/people/enrich"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PeopleEnrichmentRequest | PeopleEnrichmentRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[EnrichmentJobAccepted],
            error_mapper=start_people_enrichment_error_mapper,
            request_options=request_options,
        )


class AsyncPeopleWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def find_people_by_email(
        self,
        body: PeopleFindByEmailRequest | PeopleFindByEmailRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PeopleFindByEmailResponse, FindPeopleByEmailErrorBody]:
        """Enrich people directly from a list of email addresses, returning the matched person profile and firmographics
        where available.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/people/find-by-email"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PeopleFindByEmailRequest | PeopleFindByEmailRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[PeopleFindByEmailResponse],
            error_mapper=find_people_by_email_error_mapper,
            request_options=request_options,
        )

    async def get_people_enrichment(
        self, id_: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[PeopleEnrichmentResult, GetPeopleEnrichmentErrorBody]:
        """Retrieve the status and results of a people enrichment job by ID. Poll until status is COMPLETED, or use a
        webhook to be notified.

        Args:
            id_: The enrichment job ID returned by the start operation.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/people/enrich/{id}"),
            path_params=[param[UUID]("id", id_)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[PeopleEnrichmentResult],
            error_mapper=get_people_enrichment_error_mapper,
            request_options=request_options,
        )

    async def search_people(
        self,
        body: PeopleSearchRequest | PeopleSearchRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PeopleSearchResponse, SearchPeopleErrorBody]:
        """Search for people by persona filters (job titles, seniorities, departments) and company filters (industry,
        headcount, location). Job titles are expanded automatically with acronym and semantic matching. Results are
        paged with nextPageToken.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/people/search"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PeopleSearchRequest | PeopleSearchRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[PeopleSearchResponse],
            error_mapper=search_people_error_mapper,
            request_options=request_options,
        )

    async def start_people_enrichment(
        self,
        body: PeopleEnrichmentRequest | PeopleEnrichmentRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[EnrichmentJobAccepted, StartPeopleEnrichmentErrorBody]:
        """Start an asynchronous bulk enrichment job for up to 10,000 people. Each person is identified by a LinkedIn
        URL, or by first name + last name + company name or domain. Returns an enrichment ID for polling or a webhook
        callback.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/people/enrich"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PeopleEnrichmentRequest | PeopleEnrichmentRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[EnrichmentJobAccepted],
            error_mapper=start_people_enrichment_error_mapper,
            request_options=request_options,
        )

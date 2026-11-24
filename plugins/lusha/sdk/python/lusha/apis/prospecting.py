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
from ..errors.prospecting_companies_error import ProspectingCompaniesErrorBody, prospecting_companies_error_mapper
from ..errors.prospecting_contacts_error import ProspectingContactsErrorBody, prospecting_contacts_error_mapper
from ..models.v3_prospecting_companies_request import V3ProspectingCompaniesRequest, V3ProspectingCompaniesRequestDict
from ..models.v3_prospecting_companies_response import V3ProspectingCompaniesResponse
from ..models.v3_prospecting_contacts_request import V3ProspectingContactsRequest, V3ProspectingContactsRequestDict
from ..models.v3_prospecting_contacts_response import V3ProspectingContactsResponse
from ..server.server import Server


class Prospecting:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = ProspectingWithRawResponse(client, server, auth)

    def prospecting_companies(
        self,
        body: V3ProspectingCompaniesRequest | V3ProspectingCompaniesRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V3ProspectingCompaniesResponse:
        """Search for companies that match your target market using rich filter criteria.

        **Filter by:**
        - Size, revenue range, industry, sub-industry
        - Technologies in use
        - Locations (HQ country, state, city)
        - SIC and NAICS codes
        - Buyer intent topics
        - Signal activity (headcount changes, hiring surges, news events, LinkedIn activity intent)

        Use the returned company ``id`` values with Enrich Companies to get full firmographic data.

        > **Billing:** Charged per result via ``api_search``. If signals are requested, an additional charge applies per
            matched signal per result.

        > **Persisting to a table:** Pass ``tableId`` to also persist matching results into an existing table. This is
            additive — the primary response is unchanged, and a ``tableWrite`` object is added showing what happened on
            the table side. See Companies Tables.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad request - invalid input data Unauthorized - invalid or missing API key Payment required -
                insufficient credits Forbidden - account inactive, V3 access not enabled, or plan does not include this
                feature Too many requests - rate limit exceeded ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.prospecting_companies(body, request_options=request_options))

    def prospecting_contacts(
        self,
        body: V3ProspectingContactsRequest | V3ProspectingContactsRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V3ProspectingContactsResponse:
        """Search for contacts that match your Ideal Customer Profile using rich filter criteria.

        **Filter by contact attributes:**
        - Job title, seniority, department
        - Location (city, state, country, continent)
        - Existing data points (e.g. only contacts with a known work email)
        - Signal activity (promotion, job change)

        **Filter by company attributes:**
        - Size, revenue, industry, technologies
        - Location, intent topics, funding

        Use the returned contact ``id`` values with Enrich Contacts to reveal emails and phones.

        > **Billing:** Charged per result via ``api_search``. If signals are requested, an additional charge applies per
            matched signal per result.

        > **Persisting to a table:** Pass ``tableId`` to also persist matching results into an existing table. This is
            additive — the primary response is unchanged, and a ``tableWrite`` object is added showing what happened on
            the table side. See Contacts Tables.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad request - invalid input data Unauthorized - invalid or missing API key Payment required -
                insufficient credits Forbidden - account inactive, V3 access not enabled, or plan does not include this
                feature Too many requests - rate limit exceeded ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.prospecting_contacts(body, request_options=request_options))

    @property
    def with_raw_response(self) -> ProspectingWithRawResponse:
        return self._with_raw_response


class AsyncProspecting:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncProspectingWithRawResponse(client, server, auth)

    async def prospecting_companies(
        self,
        body: V3ProspectingCompaniesRequest | V3ProspectingCompaniesRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V3ProspectingCompaniesResponse:
        """Search for companies that match your target market using rich filter criteria.

        **Filter by:**
        - Size, revenue range, industry, sub-industry
        - Technologies in use
        - Locations (HQ country, state, city)
        - SIC and NAICS codes
        - Buyer intent topics
        - Signal activity (headcount changes, hiring surges, news events, LinkedIn activity intent)

        Use the returned company ``id`` values with Enrich Companies to get full firmographic data.

        > **Billing:** Charged per result via ``api_search``. If signals are requested, an additional charge applies per
            matched signal per result.

        > **Persisting to a table:** Pass ``tableId`` to also persist matching results into an existing table. This is
            additive — the primary response is unchanged, and a ``tableWrite`` object is added showing what happened on
            the table side. See Companies Tables.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad request - invalid input data Unauthorized - invalid or missing API key Payment required -
                insufficient credits Forbidden - account inactive, V3 access not enabled, or plan does not include this
                feature Too many requests - rate limit exceeded ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.prospecting_companies(body, request_options=request_options))

    async def prospecting_contacts(
        self,
        body: V3ProspectingContactsRequest | V3ProspectingContactsRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V3ProspectingContactsResponse:
        """Search for contacts that match your Ideal Customer Profile using rich filter criteria.

        **Filter by contact attributes:**
        - Job title, seniority, department
        - Location (city, state, country, continent)
        - Existing data points (e.g. only contacts with a known work email)
        - Signal activity (promotion, job change)

        **Filter by company attributes:**
        - Size, revenue, industry, technologies
        - Location, intent topics, funding

        Use the returned contact ``id`` values with Enrich Contacts to reveal emails and phones.

        > **Billing:** Charged per result via ``api_search``. If signals are requested, an additional charge applies per
            matched signal per result.

        > **Persisting to a table:** Pass ``tableId`` to also persist matching results into an existing table. This is
            additive — the primary response is unchanged, and a ``tableWrite`` object is added showing what happened on
            the table side. See Contacts Tables.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad request - invalid input data Unauthorized - invalid or missing API key Payment required -
                insufficient credits Forbidden - account inactive, V3 access not enabled, or plan does not include this
                feature Too many requests - rate limit exceeded ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.prospecting_contacts(body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncProspectingWithRawResponse:
        return self._with_raw_response


class ProspectingWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def prospecting_companies(
        self,
        body: V3ProspectingCompaniesRequest | V3ProspectingCompaniesRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V3ProspectingCompaniesResponse, ProspectingCompaniesErrorBody]:
        """Search for companies that match your target market using rich filter criteria.

        **Filter by:**
        - Size, revenue range, industry, sub-industry
        - Technologies in use
        - Locations (HQ country, state, city)
        - SIC and NAICS codes
        - Buyer intent topics
        - Signal activity (headcount changes, hiring surges, news events, LinkedIn activity intent)

        Use the returned company ``id`` values with Enrich Companies to get full firmographic data.

        > **Billing:** Charged per result via ``api_search``. If signals are requested, an additional charge applies per
            matched signal per result.

        > **Persisting to a table:** Pass ``tableId`` to also persist matching results into an existing table. This is
            additive — the primary response is unchanged, and a ``tableWrite`` object is added showing what happened on
            the table side. See Companies Tables.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/companies/prospecting"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V3ProspectingCompaniesRequest | V3ProspectingCompaniesRequestDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[V3ProspectingCompaniesResponse],
            error_mapper=prospecting_companies_error_mapper,
            request_options=request_options,
        )

    def prospecting_contacts(
        self,
        body: V3ProspectingContactsRequest | V3ProspectingContactsRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V3ProspectingContactsResponse, ProspectingContactsErrorBody]:
        """Search for contacts that match your Ideal Customer Profile using rich filter criteria.

        **Filter by contact attributes:**
        - Job title, seniority, department
        - Location (city, state, country, continent)
        - Existing data points (e.g. only contacts with a known work email)
        - Signal activity (promotion, job change)

        **Filter by company attributes:**
        - Size, revenue, industry, technologies
        - Location, intent topics, funding

        Use the returned contact ``id`` values with Enrich Contacts to reveal emails and phones.

        > **Billing:** Charged per result via ``api_search``. If signals are requested, an additional charge applies per
            matched signal per result.

        > **Persisting to a table:** Pass ``tableId`` to also persist matching results into an existing table. This is
            additive — the primary response is unchanged, and a ``tableWrite`` object is added showing what happened on
            the table side. See Contacts Tables.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/contacts/prospecting"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V3ProspectingContactsRequest | V3ProspectingContactsRequestDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[V3ProspectingContactsResponse],
            error_mapper=prospecting_contacts_error_mapper,
            request_options=request_options,
        )


class AsyncProspectingWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def prospecting_companies(
        self,
        body: V3ProspectingCompaniesRequest | V3ProspectingCompaniesRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V3ProspectingCompaniesResponse, ProspectingCompaniesErrorBody]:
        """Search for companies that match your target market using rich filter criteria.

        **Filter by:**
        - Size, revenue range, industry, sub-industry
        - Technologies in use
        - Locations (HQ country, state, city)
        - SIC and NAICS codes
        - Buyer intent topics
        - Signal activity (headcount changes, hiring surges, news events, LinkedIn activity intent)

        Use the returned company ``id`` values with Enrich Companies to get full firmographic data.

        > **Billing:** Charged per result via ``api_search``. If signals are requested, an additional charge applies per
            matched signal per result.

        > **Persisting to a table:** Pass ``tableId`` to also persist matching results into an existing table. This is
            additive — the primary response is unchanged, and a ``tableWrite`` object is added showing what happened on
            the table side. See Companies Tables.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/companies/prospecting"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V3ProspectingCompaniesRequest | V3ProspectingCompaniesRequestDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[V3ProspectingCompaniesResponse],
            error_mapper=prospecting_companies_error_mapper,
            request_options=request_options,
        )

    async def prospecting_contacts(
        self,
        body: V3ProspectingContactsRequest | V3ProspectingContactsRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V3ProspectingContactsResponse, ProspectingContactsErrorBody]:
        """Search for contacts that match your Ideal Customer Profile using rich filter criteria.

        **Filter by contact attributes:**
        - Job title, seniority, department
        - Location (city, state, country, continent)
        - Existing data points (e.g. only contacts with a known work email)
        - Signal activity (promotion, job change)

        **Filter by company attributes:**
        - Size, revenue, industry, technologies
        - Location, intent topics, funding

        Use the returned contact ``id`` values with Enrich Contacts to reveal emails and phones.

        > **Billing:** Charged per result via ``api_search``. If signals are requested, an additional charge applies per
            matched signal per result.

        > **Persisting to a table:** Pass ``tableId`` to also persist matching results into an existing table. This is
            additive — the primary response is unchanged, and a ``tableWrite`` object is added showing what happened on
            the table side. See Contacts Tables.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/contacts/prospecting"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V3ProspectingContactsRequest | V3ProspectingContactsRequestDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[V3ProspectingContactsResponse],
            error_mapper=prospecting_contacts_error_mapper,
            request_options=request_options,
        )

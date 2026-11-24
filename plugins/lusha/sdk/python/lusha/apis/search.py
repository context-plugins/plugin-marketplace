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
from ..errors.search_companies_error import SearchCompaniesErrorBody, search_companies_error_mapper
from ..errors.search_contacts_error import SearchContactsErrorBody, search_contacts_error_mapper
from ..models.v3_companies_search_request import V3CompaniesSearchRequest, V3CompaniesSearchRequestDict
from ..models.v3_companies_search_response import V3CompaniesSearchResponse
from ..models.v3_contacts_search_request import V3ContactsSearchRequest, V3ContactsSearchRequestDict
from ..models.v3_contacts_search_response import V3ContactsSearchResponse
from ..server.server import Server


class Search:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = SearchWithRawResponse(client, server, auth)

    def search_companies(
        self,
        body: V3CompaniesSearchRequest | V3CompaniesSearchRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V3CompaniesSearchResponse:
        """Look up companies by identifier. Returns a preview of each company profile.

        **Accepted identifiers (at least one required per company):**
        - Lusha company ``id``
        - ``name``
        - ``domain``

        Up to 100 companies per request. Each result includes a ``has`` field listing the data available via Enrich
        Companies.

        Pass a ``signals`` filter to narrow results to companies showing specific activity (e.g. headcount growth,
        hiring surge).

        > **Billing:** Charged per successful result via the ``api_search`` action.

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
        return unwrap(self._with_raw_response.search_companies(body, request_options=request_options))

    def search_contacts(
        self,
        body: V3ContactsSearchRequest | V3ContactsSearchRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V3ContactsSearchResponse:
        """Look up contacts by identifier. Returns a non-PII preview of each profile — no emails or phone numbers.

        **Accepted identifiers (one required per contact):**
        - Lusha contact ``id``
        - ``linkedinUrl``
        - ``email``
        - ``firstName`` + ``lastName`` + ``companyName`` or ``companyDomain``

        Up to 100 contacts per request. Each result includes:
        - ``has`` — data points available on this profile
        - ``canReveal`` — what you can unlock via Enrich Contacts, and the credit cost

        Pass a ``signals`` filter to narrow results to contacts with recent activity (e.g. promotion, job change).

        > **Billing:** Charged per successful result via the ``api_search`` action.

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
        return unwrap(self._with_raw_response.search_contacts(body, request_options=request_options))

    @property
    def with_raw_response(self) -> SearchWithRawResponse:
        return self._with_raw_response


class AsyncSearch:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncSearchWithRawResponse(client, server, auth)

    async def search_companies(
        self,
        body: V3CompaniesSearchRequest | V3CompaniesSearchRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V3CompaniesSearchResponse:
        """Look up companies by identifier. Returns a preview of each company profile.

        **Accepted identifiers (at least one required per company):**
        - Lusha company ``id``
        - ``name``
        - ``domain``

        Up to 100 companies per request. Each result includes a ``has`` field listing the data available via Enrich
        Companies.

        Pass a ``signals`` filter to narrow results to companies showing specific activity (e.g. headcount growth,
        hiring surge).

        > **Billing:** Charged per successful result via the ``api_search`` action.

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
        return unwrap(await self._with_raw_response.search_companies(body, request_options=request_options))

    async def search_contacts(
        self,
        body: V3ContactsSearchRequest | V3ContactsSearchRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V3ContactsSearchResponse:
        """Look up contacts by identifier. Returns a non-PII preview of each profile — no emails or phone numbers.

        **Accepted identifiers (one required per contact):**
        - Lusha contact ``id``
        - ``linkedinUrl``
        - ``email``
        - ``firstName`` + ``lastName`` + ``companyName`` or ``companyDomain``

        Up to 100 contacts per request. Each result includes:
        - ``has`` — data points available on this profile
        - ``canReveal`` — what you can unlock via Enrich Contacts, and the credit cost

        Pass a ``signals`` filter to narrow results to contacts with recent activity (e.g. promotion, job change).

        > **Billing:** Charged per successful result via the ``api_search`` action.

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
        return unwrap(await self._with_raw_response.search_contacts(body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncSearchWithRawResponse:
        return self._with_raw_response


class SearchWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def search_companies(
        self,
        body: V3CompaniesSearchRequest | V3CompaniesSearchRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V3CompaniesSearchResponse, SearchCompaniesErrorBody]:
        """Look up companies by identifier. Returns a preview of each company profile.

        **Accepted identifiers (at least one required per company):**
        - Lusha company ``id``
        - ``name``
        - ``domain``

        Up to 100 companies per request. Each result includes a ``has`` field listing the data available via Enrich
        Companies.

        Pass a ``signals`` filter to narrow results to companies showing specific activity (e.g. headcount growth,
        hiring surge).

        > **Billing:** Charged per successful result via the ``api_search`` action.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/companies/search"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V3CompaniesSearchRequest | V3CompaniesSearchRequestDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[V3CompaniesSearchResponse],
            error_mapper=search_companies_error_mapper,
            request_options=request_options,
        )

    def search_contacts(
        self,
        body: V3ContactsSearchRequest | V3ContactsSearchRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V3ContactsSearchResponse, SearchContactsErrorBody]:
        """Look up contacts by identifier. Returns a non-PII preview of each profile — no emails or phone numbers.

        **Accepted identifiers (one required per contact):**
        - Lusha contact ``id``
        - ``linkedinUrl``
        - ``email``
        - ``firstName`` + ``lastName`` + ``companyName`` or ``companyDomain``

        Up to 100 contacts per request. Each result includes:
        - ``has`` — data points available on this profile
        - ``canReveal`` — what you can unlock via Enrich Contacts, and the credit cost

        Pass a ``signals`` filter to narrow results to contacts with recent activity (e.g. promotion, job change).

        > **Billing:** Charged per successful result via the ``api_search`` action.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/contacts/search"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V3ContactsSearchRequest | V3ContactsSearchRequestDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[V3ContactsSearchResponse],
            error_mapper=search_contacts_error_mapper,
            request_options=request_options,
        )


class AsyncSearchWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def search_companies(
        self,
        body: V3CompaniesSearchRequest | V3CompaniesSearchRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V3CompaniesSearchResponse, SearchCompaniesErrorBody]:
        """Look up companies by identifier. Returns a preview of each company profile.

        **Accepted identifiers (at least one required per company):**
        - Lusha company ``id``
        - ``name``
        - ``domain``

        Up to 100 companies per request. Each result includes a ``has`` field listing the data available via Enrich
        Companies.

        Pass a ``signals`` filter to narrow results to companies showing specific activity (e.g. headcount growth,
        hiring surge).

        > **Billing:** Charged per successful result via the ``api_search`` action.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/companies/search"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V3CompaniesSearchRequest | V3CompaniesSearchRequestDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[V3CompaniesSearchResponse],
            error_mapper=search_companies_error_mapper,
            request_options=request_options,
        )

    async def search_contacts(
        self,
        body: V3ContactsSearchRequest | V3ContactsSearchRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V3ContactsSearchResponse, SearchContactsErrorBody]:
        """Look up contacts by identifier. Returns a non-PII preview of each profile — no emails or phone numbers.

        **Accepted identifiers (one required per contact):**
        - Lusha contact ``id``
        - ``linkedinUrl``
        - ``email``
        - ``firstName`` + ``lastName`` + ``companyName`` or ``companyDomain``

        Up to 100 contacts per request. Each result includes:
        - ``has`` — data points available on this profile
        - ``canReveal`` — what you can unlock via Enrich Contacts, and the credit cost

        Pass a ``signals`` filter to narrow results to contacts with recent activity (e.g. promotion, job change).

        > **Billing:** Charged per successful result via the ``api_search`` action.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/contacts/search"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V3ContactsSearchRequest | V3ContactsSearchRequestDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[V3ContactsSearchResponse],
            error_mapper=search_contacts_error_mapper,
            request_options=request_options,
        )

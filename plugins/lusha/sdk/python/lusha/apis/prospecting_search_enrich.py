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
from ..errors.enrich_prospecting_companies_error import (
    EnrichProspectingCompaniesErrorBody,
    enrich_prospecting_companies_error_mapper,
)
from ..errors.enrich_prospecting_contacts_error import (
    EnrichProspectingContactsErrorBody,
    enrich_prospecting_contacts_error_mapper,
)
from ..errors.search_prospecting_companies_error import (
    SearchProspectingCompaniesErrorBody,
    search_prospecting_companies_error_mapper,
)
from ..errors.search_prospecting_contacts_error import (
    SearchProspectingContactsErrorBody,
    search_prospecting_contacts_error_mapper,
)
from ..models.company_enrich_request import CompanyEnrichRequest, CompanyEnrichRequestDict
from ..models.company_enrich_response import CompanyEnrichResponse
from ..models.company_search_request import CompanySearchRequest, CompanySearchRequestDict
from ..models.company_search_response import CompanySearchResponse
from ..models.contact_enrich_request import ContactEnrichRequest, ContactEnrichRequestDict
from ..models.contact_enrich_response import ContactEnrichResponse
from ..models.contact_search_request import ContactSearchRequest, ContactSearchRequestDict
from ..models.contact_search_response import ContactSearchResponse
from ..server.server import Server


class ProspectingSearchEnrich:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = ProspectingSearchEnrichWithRawResponse(client, server, auth)

    def enrich_prospecting_companies(
        self,
        body: CompanyEnrichRequest | CompanyEnrichRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> CompanyEnrichResponse:
        """Enrich companies from search results. This is step 3 of the prospecting process.

        *Endpoint*: **(POST) https://api.lusha.com/prospecting/company/enrich**

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Enriched company data

        Raises:
            ApiError: Bad request - invalid input data Unauthorized - invalid or missing API key Too many requests -
                rate limit exceeded Internal server error ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.enrich_prospecting_companies(body, request_options=request_options))

    def enrich_prospecting_contacts(
        self,
        body: ContactEnrichRequest | ContactEnrichRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ContactEnrichResponse:
        """Enrich contacts from search results. This is step 3 of the prospecting process.

        *Endpoint*: **(POST) https://api.lusha.com/prospecting/contact/enrich**
        ---

        ⚠️ **Important Notice - Unified Credits Plan Required**

        | Parameter | Requirement |
        |-----------|-------------|
        | ``revealEmails`` and ``revealPhones`` | Only available to customers on the **Unified Credits** pricing plan |
        | Plan Restriction | Attempting to use these parameters on other plans will result in a **403 Unauthorized**
            error |
        | Default Behavior | When neither parameter is used, the API returns **both email addresses and phone numbers**,
            if available |

        ---

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Enriched contact data

        Raises:
            ApiError: Bad request - invalid input data Unauthorized - invalid or missing API key Forbidden - account
                inactive or feature not available Too many requests - rate limit exceeded Internal server error
                ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.enrich_prospecting_contacts(body, request_options=request_options))

    def search_prospecting_companies(
        self,
        body: CompanySearchRequest | CompanySearchRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> CompanySearchResponse:
        """Search for companies using various filters. This is step 2 of the prospecting process.

        *Endpoint*: **(POST) https://api.lusha.com/prospecting/company/search**
        ---

        ##### Signal Filtering (Premium Feature) Filter companies by signal types to identify those with recent business
        events and changes.

        > **Note:** This is a premium feature. Credits are charged for each signal type that returns results.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Search results with company IDs

        Raises:
            ApiError: Bad request - invalid input data Unauthorized - invalid or missing API key Too many requests -
                rate limit exceeded Internal server error ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.search_prospecting_companies(body, request_options=request_options))

    def search_prospecting_contacts(
        self,
        body: ContactSearchRequest | ContactSearchRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ContactSearchResponse:
        """Search for contacts using various filters. This is step 2 of the prospecting process.

        *Endpoint*: **(POST) https://api.lusha.com/prospecting/contact/search**
        ---
        ##### Signal Filtering (Premium Feature) Filter contacts by signal types to find prospects at key career
        moments.

        > **Note:** This is a premium feature. Credits are charged for each signal type that returns results.

        ---
        ##### DNC Filtering (Scale Feature) Use ``excludeDnc: true`` at the top level of the request body to filter out
        contacts whose phone numbers are all marked Do Not Call.
        - Contacts with **at least one callable phone** appear in results - Only callable phones are shown — DNC phones
            are hidden - Contacts with **only DNC phones** are excluded entirely
        > **Note**: Returns **403** on unsupported plans.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Search results with contact IDs

        Raises:
            ApiError: Bad request - invalid input data Unauthorized - invalid or missing API key Forbidden — DNC filter
                not available on your current plan Too many requests - rate limit exceeded Internal server error
                ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.search_prospecting_contacts(body, request_options=request_options))

    @property
    def with_raw_response(self) -> ProspectingSearchEnrichWithRawResponse:
        return self._with_raw_response


class AsyncProspectingSearchEnrich:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncProspectingSearchEnrichWithRawResponse(client, server, auth)

    async def enrich_prospecting_companies(
        self,
        body: CompanyEnrichRequest | CompanyEnrichRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CompanyEnrichResponse:
        """Enrich companies from search results. This is step 3 of the prospecting process.

        *Endpoint*: **(POST) https://api.lusha.com/prospecting/company/enrich**

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Enriched company data

        Raises:
            ApiError: Bad request - invalid input data Unauthorized - invalid or missing API key Too many requests -
                rate limit exceeded Internal server error ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.enrich_prospecting_companies(body, request_options=request_options))

    async def enrich_prospecting_contacts(
        self,
        body: ContactEnrichRequest | ContactEnrichRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ContactEnrichResponse:
        """Enrich contacts from search results. This is step 3 of the prospecting process.

        *Endpoint*: **(POST) https://api.lusha.com/prospecting/contact/enrich**
        ---

        ⚠️ **Important Notice - Unified Credits Plan Required**

        | Parameter | Requirement |
        |-----------|-------------|
        | ``revealEmails`` and ``revealPhones`` | Only available to customers on the **Unified Credits** pricing plan |
        | Plan Restriction | Attempting to use these parameters on other plans will result in a **403 Unauthorized**
            error |
        | Default Behavior | When neither parameter is used, the API returns **both email addresses and phone numbers**,
            if available |

        ---

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Enriched contact data

        Raises:
            ApiError: Bad request - invalid input data Unauthorized - invalid or missing API key Forbidden - account
                inactive or feature not available Too many requests - rate limit exceeded Internal server error
                ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.enrich_prospecting_contacts(body, request_options=request_options))

    async def search_prospecting_companies(
        self,
        body: CompanySearchRequest | CompanySearchRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CompanySearchResponse:
        """Search for companies using various filters. This is step 2 of the prospecting process.

        *Endpoint*: **(POST) https://api.lusha.com/prospecting/company/search**
        ---

        ##### Signal Filtering (Premium Feature) Filter companies by signal types to identify those with recent business
        events and changes.

        > **Note:** This is a premium feature. Credits are charged for each signal type that returns results.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Search results with company IDs

        Raises:
            ApiError: Bad request - invalid input data Unauthorized - invalid or missing API key Too many requests -
                rate limit exceeded Internal server error ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.search_prospecting_companies(body, request_options=request_options))

    async def search_prospecting_contacts(
        self,
        body: ContactSearchRequest | ContactSearchRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ContactSearchResponse:
        """Search for contacts using various filters. This is step 2 of the prospecting process.

        *Endpoint*: **(POST) https://api.lusha.com/prospecting/contact/search**
        ---
        ##### Signal Filtering (Premium Feature) Filter contacts by signal types to find prospects at key career
        moments.

        > **Note:** This is a premium feature. Credits are charged for each signal type that returns results.

        ---
        ##### DNC Filtering (Scale Feature) Use ``excludeDnc: true`` at the top level of the request body to filter out
        contacts whose phone numbers are all marked Do Not Call.
        - Contacts with **at least one callable phone** appear in results - Only callable phones are shown — DNC phones
            are hidden - Contacts with **only DNC phones** are excluded entirely
        > **Note**: Returns **403** on unsupported plans.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Search results with contact IDs

        Raises:
            ApiError: Bad request - invalid input data Unauthorized - invalid or missing API key Forbidden — DNC filter
                not available on your current plan Too many requests - rate limit exceeded Internal server error
                ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.search_prospecting_contacts(body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncProspectingSearchEnrichWithRawResponse:
        return self._with_raw_response


class ProspectingSearchEnrichWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def enrich_prospecting_companies(
        self,
        body: CompanyEnrichRequest | CompanyEnrichRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[CompanyEnrichResponse, EnrichProspectingCompaniesErrorBody]:
        """Enrich companies from search results. This is step 3 of the prospecting process.

        *Endpoint*: **(POST) https://api.lusha.com/prospecting/company/enrich**

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/prospecting/company/enrich"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CompanyEnrichRequest | CompanyEnrichRequestDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[CompanyEnrichResponse],
            error_mapper=enrich_prospecting_companies_error_mapper,
            request_options=request_options,
        )

    def enrich_prospecting_contacts(
        self,
        body: ContactEnrichRequest | ContactEnrichRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ContactEnrichResponse, EnrichProspectingContactsErrorBody]:
        """Enrich contacts from search results. This is step 3 of the prospecting process.

        *Endpoint*: **(POST) https://api.lusha.com/prospecting/contact/enrich**
        ---

        ⚠️ **Important Notice - Unified Credits Plan Required**

        | Parameter | Requirement |
        |-----------|-------------|
        | ``revealEmails`` and ``revealPhones`` | Only available to customers on the **Unified Credits** pricing plan |
        | Plan Restriction | Attempting to use these parameters on other plans will result in a **403 Unauthorized**
            error |
        | Default Behavior | When neither parameter is used, the API returns **both email addresses and phone numbers**,
            if available |

        ---

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/prospecting/contact/enrich"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ContactEnrichRequest | ContactEnrichRequestDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ContactEnrichResponse],
            error_mapper=enrich_prospecting_contacts_error_mapper,
            request_options=request_options,
        )

    def search_prospecting_companies(
        self,
        body: CompanySearchRequest | CompanySearchRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[CompanySearchResponse, SearchProspectingCompaniesErrorBody]:
        """Search for companies using various filters. This is step 2 of the prospecting process.

        *Endpoint*: **(POST) https://api.lusha.com/prospecting/company/search**
        ---

        ##### Signal Filtering (Premium Feature) Filter companies by signal types to identify those with recent business
        events and changes.

        > **Note:** This is a premium feature. Credits are charged for each signal type that returns results.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/prospecting/company/search"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CompanySearchRequest | CompanySearchRequestDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[CompanySearchResponse],
            error_mapper=search_prospecting_companies_error_mapper,
            request_options=request_options,
        )

    def search_prospecting_contacts(
        self,
        body: ContactSearchRequest | ContactSearchRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ContactSearchResponse, SearchProspectingContactsErrorBody]:
        """Search for contacts using various filters. This is step 2 of the prospecting process.

        *Endpoint*: **(POST) https://api.lusha.com/prospecting/contact/search**
        ---
        ##### Signal Filtering (Premium Feature) Filter contacts by signal types to find prospects at key career
        moments.

        > **Note:** This is a premium feature. Credits are charged for each signal type that returns results.

        ---
        ##### DNC Filtering (Scale Feature) Use ``excludeDnc: true`` at the top level of the request body to filter out
        contacts whose phone numbers are all marked Do Not Call.
        - Contacts with **at least one callable phone** appear in results - Only callable phones are shown — DNC phones
            are hidden - Contacts with **only DNC phones** are excluded entirely
        > **Note**: Returns **403** on unsupported plans.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/prospecting/contact/search"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ContactSearchRequest | ContactSearchRequestDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ContactSearchResponse],
            error_mapper=search_prospecting_contacts_error_mapper,
            request_options=request_options,
        )


class AsyncProspectingSearchEnrichWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def enrich_prospecting_companies(
        self,
        body: CompanyEnrichRequest | CompanyEnrichRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CompanyEnrichResponse, EnrichProspectingCompaniesErrorBody]:
        """Enrich companies from search results. This is step 3 of the prospecting process.

        *Endpoint*: **(POST) https://api.lusha.com/prospecting/company/enrich**

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/prospecting/company/enrich"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CompanyEnrichRequest | CompanyEnrichRequestDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[CompanyEnrichResponse],
            error_mapper=enrich_prospecting_companies_error_mapper,
            request_options=request_options,
        )

    async def enrich_prospecting_contacts(
        self,
        body: ContactEnrichRequest | ContactEnrichRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ContactEnrichResponse, EnrichProspectingContactsErrorBody]:
        """Enrich contacts from search results. This is step 3 of the prospecting process.

        *Endpoint*: **(POST) https://api.lusha.com/prospecting/contact/enrich**
        ---

        ⚠️ **Important Notice - Unified Credits Plan Required**

        | Parameter | Requirement |
        |-----------|-------------|
        | ``revealEmails`` and ``revealPhones`` | Only available to customers on the **Unified Credits** pricing plan |
        | Plan Restriction | Attempting to use these parameters on other plans will result in a **403 Unauthorized**
            error |
        | Default Behavior | When neither parameter is used, the API returns **both email addresses and phone numbers**,
            if available |

        ---

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/prospecting/contact/enrich"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ContactEnrichRequest | ContactEnrichRequestDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ContactEnrichResponse],
            error_mapper=enrich_prospecting_contacts_error_mapper,
            request_options=request_options,
        )

    async def search_prospecting_companies(
        self,
        body: CompanySearchRequest | CompanySearchRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CompanySearchResponse, SearchProspectingCompaniesErrorBody]:
        """Search for companies using various filters. This is step 2 of the prospecting process.

        *Endpoint*: **(POST) https://api.lusha.com/prospecting/company/search**
        ---

        ##### Signal Filtering (Premium Feature) Filter companies by signal types to identify those with recent business
        events and changes.

        > **Note:** This is a premium feature. Credits are charged for each signal type that returns results.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/prospecting/company/search"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CompanySearchRequest | CompanySearchRequestDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[CompanySearchResponse],
            error_mapper=search_prospecting_companies_error_mapper,
            request_options=request_options,
        )

    async def search_prospecting_contacts(
        self,
        body: ContactSearchRequest | ContactSearchRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ContactSearchResponse, SearchProspectingContactsErrorBody]:
        """Search for contacts using various filters. This is step 2 of the prospecting process.

        *Endpoint*: **(POST) https://api.lusha.com/prospecting/contact/search**
        ---
        ##### Signal Filtering (Premium Feature) Filter contacts by signal types to find prospects at key career
        moments.

        > **Note:** This is a premium feature. Credits are charged for each signal type that returns results.

        ---
        ##### DNC Filtering (Scale Feature) Use ``excludeDnc: true`` at the top level of the request body to filter out
        contacts whose phone numbers are all marked Do Not Call.
        - Contacts with **at least one callable phone** appear in results - Only callable phones are shown — DNC phones
            are hidden - Contacts with **only DNC phones** are excluded entirely
        > **Note**: Returns **403** on unsupported plans.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/prospecting/contact/search"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ContactSearchRequest | ContactSearchRequestDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ContactSearchResponse],
            error_mapper=search_prospecting_contacts_error_mapper,
            request_options=request_options,
        )

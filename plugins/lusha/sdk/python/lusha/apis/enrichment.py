from __future__ import annotations

from uuid import UUID, uuid4

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    Date,
    RawClient,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_json_decoder,
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.search_multiple_companies_v2_error import (
    SearchMultipleCompaniesV2ErrorBody,
    search_multiple_companies_v2_error_mapper,
)
from ..errors.search_multiple_contacts_error import (
    SearchMultipleContactsErrorBody,
    search_multiple_contacts_error_mapper,
)
from ..errors.search_single_company_v2_error import (
    SearchSingleCompanyV2ErrorBody,
    search_single_company_v2_error_mapper,
)
from ..errors.search_single_contact_error import SearchSingleContactErrorBody, search_single_contact_error_mapper
from ..models.bulk_person_response import BulkPersonResponse
from ..models.companies_bulk_request import CompaniesBulkRequest, CompaniesBulkRequestDict
from ..models.company_bulk_response import CompanyBulkResponse
from ..models.company_single_response import CompanySingleResponse
from ..models.enums.filter_by import FilterByOrStr
from ..models.enums.signal import SignalOrStr
from ..models.enums.signal1 import Signal1OrStr
from ..models.search_bulk_contacts_request import SearchBulkContactsRequest, SearchBulkContactsRequestDict
from ..models.single_contact_response import SingleContactResponse
from ..server.server import Server


class Enrichment:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = EnrichmentWithRawResponse(client, server, auth)

    def search_multiple_companies_v2(
        self,
        body: CompaniesBulkRequest | CompaniesBulkRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> dict[str, CompanyBulkResponse]:
        """Search for multiple companies in a single request. Provide a list of companies with identifiers like domain
        names or company IDs. >##### Endpoint:
        ```
        POST https://api.lusha.com/bulk/company/v2
        ```

        >##### Notes:
        - At least one of ``domain``, ``company``, or ``companyId`` is required.
        - You can process up to 100 companies per request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Bulk company search results

        Raises:
            ApiError: Bad request - invalid input data Unauthorized - invalid or missing API key Too many requests -
                rate limit exceeded Internal server error ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.search_multiple_companies_v2(body, request_options=request_options))

    def search_multiple_contacts(
        self,
        body: SearchBulkContactsRequest | SearchBulkContactsRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> BulkPersonResponse:
        """Enrich multiple contacts in a single request. This endpoint allows you to submit a list of contacts and
        receive enriched data for each one, including company information.

        >##### Endpoint:
        ```
        POST https://api.lusha.com/v2/person
        ```

        >##### Notes
        - You can process up to 100 contacts per request.
        - Using ``personId`` provides the most direct way to retrieve contact information.
        - At least one of ``email``, ``linkedinUrl``, or ``company``/``domain`` with ``fullName`` is required.

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
            body: The list of contacts to enrich
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The list of enriched contacts with their company details

        Raises:
            ApiError: Bad request - invalid input data Unauthorized - invalid or missing API key Forbidden - account
                inactive or feature not available Too many requests - rate limit exceeded Internal server error
                ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.search_multiple_contacts(body, request_options=request_options))

    def search_single_company_v2(
        self,
        *,
        domain: str | None = None,
        company: str | None = None,
        company_id: str | None = None,
        signals: list[Signal1OrStr] | None = None,
        signals_start_date: Date | None = None,
        partial_company: bool | None = True,
        request_options: RequestOptionsOrDict | None = None,
    ) -> CompanySingleResponse:
        """Find detailed information about a single company by using different paramaters. >##### Endpoint:
        ```
        GET https://api.lusha.com/v2/company
        ```

        >##### Notes:
        - At least one of ``domain``, ``company``, or ``companyId`` is required.
        - Signal sub-filters (``newsEventTypes``, ``hiringByDepartments``, ``hiringByLocations``) are not supported on
            this endpoint. Use ``POST /bulk/company/v2`` with the ``signalsFilters`` parameter for filtered signal
            retrieval.

        Args:
            domain: The domain name associated with the company
            company: The name of the company
            company_id: A unique identifier for a Lusha company.
            signals: Array of signal types to retrieve for the company. - ``allSignals``: All available signal types >
                See the Signal Options endpoint for complete list of available signals and their categories
            signals_start_date: Start date for signal retrieval in YYYY-MM-DD format. Defaults to 6 months ago if not
                specified.
            partial_company: Expand coverage with partial company profiles
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Company information retrieved successfully

        Raises:
            ApiError: Bad request - invalid input data Unauthorized - invalid or missing API key Not found - resource
                not found Too many requests - rate limit exceeded Internal server error ``error`` is ``ErrorResponse |
                RawError``."""
        return unwrap(
            self._with_raw_response.search_single_company_v2(
                domain=domain,
                company=company,
                company_id=company_id,
                signals=signals,
                signals_start_date=signals_start_date,
                partial_company=partial_company,
                request_options=request_options,
            ),
        )

    def search_single_contact(
        self,
        *,
        first_name: str | None = None,
        last_name: str | None = None,
        person_id: str | None = None,
        company_name: str | None = None,
        company_domain: str | None = None,
        email: str | None = None,
        linkedin_url: str | None = None,
        refresh_job_info: bool | None = False,
        filter_by: FilterByOrStr | None = None,
        reveal_emails: bool | None = True,
        reveal_phones: bool | None = True,
        signals: list[SignalOrStr] | None = None,
        signals_start_date: Date | None = None,
        partial_profile: bool | None = False,
        request_options: RequestOptionsOrDict | None = None,
    ) -> SingleContactResponse:
        """Find and enrich a single contact using various search criteria. You can search by name, email, LinkedIn URL,
        or Person Id. >##### Endpoint
        ```
        GET https://api.lusha.com/v2/person
        ```

        >##### Search Requirements You must provide either:
        - ``personId`` OR
        - ``email`` OR
        - ``linkedinUrl`` OR
        - ``firstName`` AND ``lastName`` AND (``companyName`` OR ``companyDomain``)

        >##### Notes:
        - Provide as much information as possible for better results
        - Using ``personId`` provides the most direct way to retrieve contact information, as it uniquely identifies a
            contact in Lusha's database.
        - Use ``refreshJobInfo=true`` to get the latest employment data
        - Use ``filterBy`` parameter to specify what contact details you need
        - Include the ``signals`` parameter to retriever contact signals (If no signals data is found for the specified
            period, the ``signals`` object will be empty but still present in the response.)
        - When requesting signals, you can optionally specify a start date using ``signalsStartDate``.
        - Signals data is optional. If you don't include the ``signals`` parameter, no signals data will be returned.

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
            first_name: The first name of the person
            last_name: The last name of the person
            person_id: The unique person identifier in Lusha
            company_name: The name of the company the person works at
            company_domain: The domain name of the company
            email: The email address of the person
            linkedin_url: The LinkedIn URL of the person
            refresh_job_info: Set to true to refresh and update the job details for the person. This ensures that
                outdated job information is replaced with the most recent data.
            filter_by: Filters results based on specific contact details. Available options: - ``phoneNumbers``: Only
                return contacts with phone numbers - ``emailAddresses``: Only return contacts with email addresses By
                default, results will include contacts with at least one contact detail.
            reveal_emails: Set ``revealEmails=true`` to retrieve only the email address of the contact.
            reveal_phones: Set ``revealPhones=true`` to retrieve only the phone number of the contact.
            signals: Array of signal types to retrieve for the contact. - ``allSignals``: All available signal types -
                ``promotion``: Promotion signals - ``companyChange``: Company change signals
            signals_start_date: Start date for signal retrieval in YYYY-MM-DD format. Defaults to 6 months ago if not
                specified.
            partial_profile: Search for a single contact with the option to receive a partial profile.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully found contact information

        Raises:
            ApiError: Bad request - invalid input data Unauthorized - invalid or missing API key Forbidden - account
                inactive or feature not available Not found - resource not found Too many requests - rate limit exceeded
                GDPR restricted - unable to process due to GDPR regulations Internal server error ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.search_single_contact(
                first_name=first_name,
                last_name=last_name,
                person_id=person_id,
                company_name=company_name,
                company_domain=company_domain,
                email=email,
                linkedin_url=linkedin_url,
                refresh_job_info=refresh_job_info,
                filter_by=filter_by,
                reveal_emails=reveal_emails,
                reveal_phones=reveal_phones,
                signals=signals,
                signals_start_date=signals_start_date,
                partial_profile=partial_profile,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> EnrichmentWithRawResponse:
        return self._with_raw_response


class AsyncEnrichment:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncEnrichmentWithRawResponse(client, server, auth)

    async def search_multiple_companies_v2(
        self,
        body: CompaniesBulkRequest | CompaniesBulkRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> dict[str, CompanyBulkResponse]:
        """Search for multiple companies in a single request. Provide a list of companies with identifiers like domain
        names or company IDs. >##### Endpoint:
        ```
        POST https://api.lusha.com/bulk/company/v2
        ```

        >##### Notes:
        - At least one of ``domain``, ``company``, or ``companyId`` is required.
        - You can process up to 100 companies per request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Bulk company search results

        Raises:
            ApiError: Bad request - invalid input data Unauthorized - invalid or missing API key Too many requests -
                rate limit exceeded Internal server error ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.search_multiple_companies_v2(body, request_options=request_options))

    async def search_multiple_contacts(
        self,
        body: SearchBulkContactsRequest | SearchBulkContactsRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> BulkPersonResponse:
        """Enrich multiple contacts in a single request. This endpoint allows you to submit a list of contacts and
        receive enriched data for each one, including company information.

        >##### Endpoint:
        ```
        POST https://api.lusha.com/v2/person
        ```

        >##### Notes
        - You can process up to 100 contacts per request.
        - Using ``personId`` provides the most direct way to retrieve contact information.
        - At least one of ``email``, ``linkedinUrl``, or ``company``/``domain`` with ``fullName`` is required.

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
            body: The list of contacts to enrich
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The list of enriched contacts with their company details

        Raises:
            ApiError: Bad request - invalid input data Unauthorized - invalid or missing API key Forbidden - account
                inactive or feature not available Too many requests - rate limit exceeded Internal server error
                ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.search_multiple_contacts(body, request_options=request_options))

    async def search_single_company_v2(
        self,
        *,
        domain: str | None = None,
        company: str | None = None,
        company_id: str | None = None,
        signals: list[Signal1OrStr] | None = None,
        signals_start_date: Date | None = None,
        partial_company: bool | None = True,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CompanySingleResponse:
        """Find detailed information about a single company by using different paramaters. >##### Endpoint:
        ```
        GET https://api.lusha.com/v2/company
        ```

        >##### Notes:
        - At least one of ``domain``, ``company``, or ``companyId`` is required.
        - Signal sub-filters (``newsEventTypes``, ``hiringByDepartments``, ``hiringByLocations``) are not supported on
            this endpoint. Use ``POST /bulk/company/v2`` with the ``signalsFilters`` parameter for filtered signal
            retrieval.

        Args:
            domain: The domain name associated with the company
            company: The name of the company
            company_id: A unique identifier for a Lusha company.
            signals: Array of signal types to retrieve for the company. - ``allSignals``: All available signal types >
                See the Signal Options endpoint for complete list of available signals and their categories
            signals_start_date: Start date for signal retrieval in YYYY-MM-DD format. Defaults to 6 months ago if not
                specified.
            partial_company: Expand coverage with partial company profiles
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Company information retrieved successfully

        Raises:
            ApiError: Bad request - invalid input data Unauthorized - invalid or missing API key Not found - resource
                not found Too many requests - rate limit exceeded Internal server error ``error`` is ``ErrorResponse |
                RawError``."""
        return unwrap(
            await self._with_raw_response.search_single_company_v2(
                domain=domain,
                company=company,
                company_id=company_id,
                signals=signals,
                signals_start_date=signals_start_date,
                partial_company=partial_company,
                request_options=request_options,
            ),
        )

    async def search_single_contact(
        self,
        *,
        first_name: str | None = None,
        last_name: str | None = None,
        person_id: str | None = None,
        company_name: str | None = None,
        company_domain: str | None = None,
        email: str | None = None,
        linkedin_url: str | None = None,
        refresh_job_info: bool | None = False,
        filter_by: FilterByOrStr | None = None,
        reveal_emails: bool | None = True,
        reveal_phones: bool | None = True,
        signals: list[SignalOrStr] | None = None,
        signals_start_date: Date | None = None,
        partial_profile: bool | None = False,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> SingleContactResponse:
        """Find and enrich a single contact using various search criteria. You can search by name, email, LinkedIn URL,
        or Person Id. >##### Endpoint
        ```
        GET https://api.lusha.com/v2/person
        ```

        >##### Search Requirements You must provide either:
        - ``personId`` OR
        - ``email`` OR
        - ``linkedinUrl`` OR
        - ``firstName`` AND ``lastName`` AND (``companyName`` OR ``companyDomain``)

        >##### Notes:
        - Provide as much information as possible for better results
        - Using ``personId`` provides the most direct way to retrieve contact information, as it uniquely identifies a
            contact in Lusha's database.
        - Use ``refreshJobInfo=true`` to get the latest employment data
        - Use ``filterBy`` parameter to specify what contact details you need
        - Include the ``signals`` parameter to retriever contact signals (If no signals data is found for the specified
            period, the ``signals`` object will be empty but still present in the response.)
        - When requesting signals, you can optionally specify a start date using ``signalsStartDate``.
        - Signals data is optional. If you don't include the ``signals`` parameter, no signals data will be returned.

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
            first_name: The first name of the person
            last_name: The last name of the person
            person_id: The unique person identifier in Lusha
            company_name: The name of the company the person works at
            company_domain: The domain name of the company
            email: The email address of the person
            linkedin_url: The LinkedIn URL of the person
            refresh_job_info: Set to true to refresh and update the job details for the person. This ensures that
                outdated job information is replaced with the most recent data.
            filter_by: Filters results based on specific contact details. Available options: - ``phoneNumbers``: Only
                return contacts with phone numbers - ``emailAddresses``: Only return contacts with email addresses By
                default, results will include contacts with at least one contact detail.
            reveal_emails: Set ``revealEmails=true`` to retrieve only the email address of the contact.
            reveal_phones: Set ``revealPhones=true`` to retrieve only the phone number of the contact.
            signals: Array of signal types to retrieve for the contact. - ``allSignals``: All available signal types -
                ``promotion``: Promotion signals - ``companyChange``: Company change signals
            signals_start_date: Start date for signal retrieval in YYYY-MM-DD format. Defaults to 6 months ago if not
                specified.
            partial_profile: Search for a single contact with the option to receive a partial profile.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully found contact information

        Raises:
            ApiError: Bad request - invalid input data Unauthorized - invalid or missing API key Forbidden - account
                inactive or feature not available Not found - resource not found Too many requests - rate limit exceeded
                GDPR restricted - unable to process due to GDPR regulations Internal server error ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.search_single_contact(
                first_name=first_name,
                last_name=last_name,
                person_id=person_id,
                company_name=company_name,
                company_domain=company_domain,
                email=email,
                linkedin_url=linkedin_url,
                refresh_job_info=refresh_job_info,
                filter_by=filter_by,
                reveal_emails=reveal_emails,
                reveal_phones=reveal_phones,
                signals=signals,
                signals_start_date=signals_start_date,
                partial_profile=partial_profile,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> AsyncEnrichmentWithRawResponse:
        return self._with_raw_response


class EnrichmentWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def search_multiple_companies_v2(
        self,
        body: CompaniesBulkRequest | CompaniesBulkRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[dict[str, CompanyBulkResponse], SearchMultipleCompaniesV2ErrorBody]:
        """Search for multiple companies in a single request. Provide a list of companies with identifiers like domain
        names or company IDs. >##### Endpoint:
        ```
        POST https://api.lusha.com/bulk/company/v2
        ```

        >##### Notes:
        - At least one of ``domain``, ``company``, or ``companyId`` is required.
        - You can process up to 100 companies per request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v2/company"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CompaniesBulkRequest | CompaniesBulkRequestDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[dict[str, CompanyBulkResponse]],
            error_mapper=search_multiple_companies_v2_error_mapper,
            request_options=request_options,
        )

    def search_multiple_contacts(
        self,
        body: SearchBulkContactsRequest | SearchBulkContactsRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[BulkPersonResponse, SearchMultipleContactsErrorBody]:
        """Enrich multiple contacts in a single request. This endpoint allows you to submit a list of contacts and
        receive enriched data for each one, including company information.

        >##### Endpoint:
        ```
        POST https://api.lusha.com/v2/person
        ```

        >##### Notes
        - You can process up to 100 contacts per request.
        - Using ``personId`` provides the most direct way to retrieve contact information.
        - At least one of ``email``, ``linkedinUrl``, or ``company``/``domain`` with ``fullName`` is required.

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
            body: The list of contacts to enrich
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v2/person"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[SearchBulkContactsRequest | SearchBulkContactsRequestDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[BulkPersonResponse],
            error_mapper=search_multiple_contacts_error_mapper,
            request_options=request_options,
        )

    def search_single_company_v2(
        self,
        *,
        domain: str | None = None,
        company: str | None = None,
        company_id: str | None = None,
        signals: list[Signal1OrStr] | None = None,
        signals_start_date: Date | None = None,
        partial_company: bool | None = True,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[CompanySingleResponse, SearchSingleCompanyV2ErrorBody]:
        """Find detailed information about a single company by using different paramaters. >##### Endpoint:
        ```
        GET https://api.lusha.com/v2/company
        ```

        >##### Notes:
        - At least one of ``domain``, ``company``, or ``companyId`` is required.
        - Signal sub-filters (``newsEventTypes``, ``hiringByDepartments``, ``hiringByLocations``) are not supported on
            this endpoint. Use ``POST /bulk/company/v2`` with the ``signalsFilters`` parameter for filtered signal
            retrieval.

        Args:
            domain: The domain name associated with the company
            company: The name of the company
            company_id: A unique identifier for a Lusha company.
            signals: Array of signal types to retrieve for the company. - ``allSignals``: All available signal types >
                See the Signal Options endpoint for complete list of available signals and their categories
            signals_start_date: Start date for signal retrieval in YYYY-MM-DD format. Defaults to 6 months ago if not
                specified.
            partial_company: Expand coverage with partial company profiles
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/company"),
            query_params=[
                param[str | None]("domain", domain),
                param[str | None]("company", company),
                param[str | None]("companyId", company_id),
                param[list[Signal1OrStr] | None]("signals", signals),
                param[Date | None]("signalsStartDate", signals_start_date),
                param[bool | None]("partialCompany", partial_company),
            ],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[CompanySingleResponse],
            error_mapper=search_single_company_v2_error_mapper,
            request_options=request_options,
        )

    def search_single_contact(
        self,
        *,
        first_name: str | None = None,
        last_name: str | None = None,
        person_id: str | None = None,
        company_name: str | None = None,
        company_domain: str | None = None,
        email: str | None = None,
        linkedin_url: str | None = None,
        refresh_job_info: bool | None = False,
        filter_by: FilterByOrStr | None = None,
        reveal_emails: bool | None = True,
        reveal_phones: bool | None = True,
        signals: list[SignalOrStr] | None = None,
        signals_start_date: Date | None = None,
        partial_profile: bool | None = False,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[SingleContactResponse, SearchSingleContactErrorBody]:
        """Find and enrich a single contact using various search criteria. You can search by name, email, LinkedIn URL,
        or Person Id. >##### Endpoint
        ```
        GET https://api.lusha.com/v2/person
        ```

        >##### Search Requirements You must provide either:
        - ``personId`` OR
        - ``email`` OR
        - ``linkedinUrl`` OR
        - ``firstName`` AND ``lastName`` AND (``companyName`` OR ``companyDomain``)

        >##### Notes:
        - Provide as much information as possible for better results
        - Using ``personId`` provides the most direct way to retrieve contact information, as it uniquely identifies a
            contact in Lusha's database.
        - Use ``refreshJobInfo=true`` to get the latest employment data
        - Use ``filterBy`` parameter to specify what contact details you need
        - Include the ``signals`` parameter to retriever contact signals (If no signals data is found for the specified
            period, the ``signals`` object will be empty but still present in the response.)
        - When requesting signals, you can optionally specify a start date using ``signalsStartDate``.
        - Signals data is optional. If you don't include the ``signals`` parameter, no signals data will be returned.

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
            first_name: The first name of the person
            last_name: The last name of the person
            person_id: The unique person identifier in Lusha
            company_name: The name of the company the person works at
            company_domain: The domain name of the company
            email: The email address of the person
            linkedin_url: The LinkedIn URL of the person
            refresh_job_info: Set to true to refresh and update the job details for the person. This ensures that
                outdated job information is replaced with the most recent data.
            filter_by: Filters results based on specific contact details. Available options: - ``phoneNumbers``: Only
                return contacts with phone numbers - ``emailAddresses``: Only return contacts with email addresses By
                default, results will include contacts with at least one contact detail.
            reveal_emails: Set ``revealEmails=true`` to retrieve only the email address of the contact.
            reveal_phones: Set ``revealPhones=true`` to retrieve only the phone number of the contact.
            signals: Array of signal types to retrieve for the contact. - ``allSignals``: All available signal types -
                ``promotion``: Promotion signals - ``companyChange``: Company change signals
            signals_start_date: Start date for signal retrieval in YYYY-MM-DD format. Defaults to 6 months ago if not
                specified.
            partial_profile: Search for a single contact with the option to receive a partial profile.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/person"),
            query_params=[
                param[str | None]("firstName", first_name),
                param[str | None]("lastName", last_name),
                param[str | None]("personId", person_id),
                param[str | None]("companyName", company_name),
                param[str | None]("companyDomain", company_domain),
                param[str | None]("email", email),
                param[str | None]("linkedinUrl", linkedin_url),
                param[bool | None]("refreshJobInfo", refresh_job_info),
                param[FilterByOrStr | None]("filterBy", filter_by),
                param[bool | None]("revealEmails", reveal_emails),
                param[bool | None]("revealPhones", reveal_phones),
                param[list[SignalOrStr] | None]("signals", signals),
                param[Date | None]("signalsStartDate", signals_start_date),
                param[bool | None]("partialProfile", partial_profile),
            ],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[SingleContactResponse],
            error_mapper=search_single_contact_error_mapper,
            request_options=request_options,
        )


class AsyncEnrichmentWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def search_multiple_companies_v2(
        self,
        body: CompaniesBulkRequest | CompaniesBulkRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[dict[str, CompanyBulkResponse], SearchMultipleCompaniesV2ErrorBody]:
        """Search for multiple companies in a single request. Provide a list of companies with identifiers like domain
        names or company IDs. >##### Endpoint:
        ```
        POST https://api.lusha.com/bulk/company/v2
        ```

        >##### Notes:
        - At least one of ``domain``, ``company``, or ``companyId`` is required.
        - You can process up to 100 companies per request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v2/company"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CompaniesBulkRequest | CompaniesBulkRequestDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[dict[str, CompanyBulkResponse]],
            error_mapper=search_multiple_companies_v2_error_mapper,
            request_options=request_options,
        )

    async def search_multiple_contacts(
        self,
        body: SearchBulkContactsRequest | SearchBulkContactsRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[BulkPersonResponse, SearchMultipleContactsErrorBody]:
        """Enrich multiple contacts in a single request. This endpoint allows you to submit a list of contacts and
        receive enriched data for each one, including company information.

        >##### Endpoint:
        ```
        POST https://api.lusha.com/v2/person
        ```

        >##### Notes
        - You can process up to 100 contacts per request.
        - Using ``personId`` provides the most direct way to retrieve contact information.
        - At least one of ``email``, ``linkedinUrl``, or ``company``/``domain`` with ``fullName`` is required.

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
            body: The list of contacts to enrich
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v2/person"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[SearchBulkContactsRequest | SearchBulkContactsRequestDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[BulkPersonResponse],
            error_mapper=search_multiple_contacts_error_mapper,
            request_options=request_options,
        )

    async def search_single_company_v2(
        self,
        *,
        domain: str | None = None,
        company: str | None = None,
        company_id: str | None = None,
        signals: list[Signal1OrStr] | None = None,
        signals_start_date: Date | None = None,
        partial_company: bool | None = True,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CompanySingleResponse, SearchSingleCompanyV2ErrorBody]:
        """Find detailed information about a single company by using different paramaters. >##### Endpoint:
        ```
        GET https://api.lusha.com/v2/company
        ```

        >##### Notes:
        - At least one of ``domain``, ``company``, or ``companyId`` is required.
        - Signal sub-filters (``newsEventTypes``, ``hiringByDepartments``, ``hiringByLocations``) are not supported on
            this endpoint. Use ``POST /bulk/company/v2`` with the ``signalsFilters`` parameter for filtered signal
            retrieval.

        Args:
            domain: The domain name associated with the company
            company: The name of the company
            company_id: A unique identifier for a Lusha company.
            signals: Array of signal types to retrieve for the company. - ``allSignals``: All available signal types >
                See the Signal Options endpoint for complete list of available signals and their categories
            signals_start_date: Start date for signal retrieval in YYYY-MM-DD format. Defaults to 6 months ago if not
                specified.
            partial_company: Expand coverage with partial company profiles
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/company"),
            query_params=[
                param[str | None]("domain", domain),
                param[str | None]("company", company),
                param[str | None]("companyId", company_id),
                param[list[Signal1OrStr] | None]("signals", signals),
                param[Date | None]("signalsStartDate", signals_start_date),
                param[bool | None]("partialCompany", partial_company),
            ],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[CompanySingleResponse],
            error_mapper=search_single_company_v2_error_mapper,
            request_options=request_options,
        )

    async def search_single_contact(
        self,
        *,
        first_name: str | None = None,
        last_name: str | None = None,
        person_id: str | None = None,
        company_name: str | None = None,
        company_domain: str | None = None,
        email: str | None = None,
        linkedin_url: str | None = None,
        refresh_job_info: bool | None = False,
        filter_by: FilterByOrStr | None = None,
        reveal_emails: bool | None = True,
        reveal_phones: bool | None = True,
        signals: list[SignalOrStr] | None = None,
        signals_start_date: Date | None = None,
        partial_profile: bool | None = False,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[SingleContactResponse, SearchSingleContactErrorBody]:
        """Find and enrich a single contact using various search criteria. You can search by name, email, LinkedIn URL,
        or Person Id. >##### Endpoint
        ```
        GET https://api.lusha.com/v2/person
        ```

        >##### Search Requirements You must provide either:
        - ``personId`` OR
        - ``email`` OR
        - ``linkedinUrl`` OR
        - ``firstName`` AND ``lastName`` AND (``companyName`` OR ``companyDomain``)

        >##### Notes:
        - Provide as much information as possible for better results
        - Using ``personId`` provides the most direct way to retrieve contact information, as it uniquely identifies a
            contact in Lusha's database.
        - Use ``refreshJobInfo=true`` to get the latest employment data
        - Use ``filterBy`` parameter to specify what contact details you need
        - Include the ``signals`` parameter to retriever contact signals (If no signals data is found for the specified
            period, the ``signals`` object will be empty but still present in the response.)
        - When requesting signals, you can optionally specify a start date using ``signalsStartDate``.
        - Signals data is optional. If you don't include the ``signals`` parameter, no signals data will be returned.

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
            first_name: The first name of the person
            last_name: The last name of the person
            person_id: The unique person identifier in Lusha
            company_name: The name of the company the person works at
            company_domain: The domain name of the company
            email: The email address of the person
            linkedin_url: The LinkedIn URL of the person
            refresh_job_info: Set to true to refresh and update the job details for the person. This ensures that
                outdated job information is replaced with the most recent data.
            filter_by: Filters results based on specific contact details. Available options: - ``phoneNumbers``: Only
                return contacts with phone numbers - ``emailAddresses``: Only return contacts with email addresses By
                default, results will include contacts with at least one contact detail.
            reveal_emails: Set ``revealEmails=true`` to retrieve only the email address of the contact.
            reveal_phones: Set ``revealPhones=true`` to retrieve only the phone number of the contact.
            signals: Array of signal types to retrieve for the contact. - ``allSignals``: All available signal types -
                ``promotion``: Promotion signals - ``companyChange``: Company change signals
            signals_start_date: Start date for signal retrieval in YYYY-MM-DD format. Defaults to 6 months ago if not
                specified.
            partial_profile: Search for a single contact with the option to receive a partial profile.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/person"),
            query_params=[
                param[str | None]("firstName", first_name),
                param[str | None]("lastName", last_name),
                param[str | None]("personId", person_id),
                param[str | None]("companyName", company_name),
                param[str | None]("companyDomain", company_domain),
                param[str | None]("email", email),
                param[str | None]("linkedinUrl", linkedin_url),
                param[bool | None]("refreshJobInfo", refresh_job_info),
                param[FilterByOrStr | None]("filterBy", filter_by),
                param[bool | None]("revealEmails", reveal_emails),
                param[bool | None]("revealPhones", reveal_phones),
                param[list[SignalOrStr] | None]("signals", signals),
                param[Date | None]("signalsStartDate", signals_start_date),
                param[bool | None]("partialProfile", partial_profile),
            ],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[SingleContactResponse],
            error_mapper=search_single_contact_error_mapper,
            request_options=request_options,
        )

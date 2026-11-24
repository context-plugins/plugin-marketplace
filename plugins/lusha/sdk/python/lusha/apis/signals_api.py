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
from ..errors.get_company_signal_filter_values_error import (
    GetCompanySignalFilterValuesErrorBody,
    get_company_signal_filter_values_error_mapper,
)
from ..errors.get_company_signal_filters_error import (
    GetCompanySignalFiltersErrorBody,
    get_company_signal_filters_error_mapper,
)
from ..errors.get_company_signal_scores_error import (
    GetCompanySignalScoresErrorBody,
    get_company_signal_scores_error_mapper,
)
from ..errors.get_company_signal_types_error import (
    GetCompanySignalTypesErrorBody,
    get_company_signal_types_error_mapper,
)
from ..errors.get_company_signals_by_id_error import (
    GetCompanySignalsByIdErrorBody,
    get_company_signals_by_id_error_mapper,
)
from ..errors.get_company_signals_error import GetCompanySignalsErrorBody, get_company_signals_error_mapper
from ..errors.get_contact_signal_scores_error import (
    GetContactSignalScoresErrorBody,
    get_contact_signal_scores_error_mapper,
)
from ..errors.get_contact_signal_types_error import (
    GetContactSignalTypesErrorBody,
    get_contact_signal_types_error_mapper,
)
from ..errors.get_contact_signals_by_id_error import (
    GetContactSignalsByIdErrorBody,
    get_contact_signals_by_id_error_mapper,
)
from ..errors.get_contact_signals_error import GetContactSignalsErrorBody, get_contact_signals_error_mapper
from ..errors.get_signal_options_error import GetSignalOptionsErrorBody, get_signal_options_error_mapper
from ..errors.search_company_signals_error import SearchCompanySignalsErrorBody, search_company_signals_error_mapper
from ..errors.search_contact_signals_error import SearchContactSignalsErrorBody, search_contact_signals_error_mapper
from ..models.api_signals_filters_response import ApiSignalsFiltersResponse
from ..models.company_signal_types_response import CompanySignalTypesResponse
from ..models.company_signals_by_id_request import CompanySignalsByIdRequest, CompanySignalsByIdRequestDict
from ..models.company_signals_by_id_response import CompanySignalsByIdResponse
from ..models.company_signals_search_request import CompanySignalsSearchRequest, CompanySignalsSearchRequestDict
from ..models.contact_signal_types_response import ContactSignalTypesResponse
from ..models.contact_signals_by_id_request import ContactSignalsByIdRequest, ContactSignalsByIdRequestDict
from ..models.contact_signals_by_id_response import ContactSignalsByIdResponse
from ..models.contact_signals_search_request import ContactSignalsSearchRequest, ContactSignalsSearchRequestDict
from ..models.contact_signals_search_response import ContactSignalsSearchResponse
from ..models.enums.filter_type_lusha_signals_api import FilterTypeLushaSignalsApiOrStr
from ..models.enums.object_type import ObjectTypeOrStr
from ..models.filter_types_discovery_response import FilterTypesDiscoveryResponse
from ..models.filter_values_response import FilterValuesResponse
from ..models.v3_company_signals_request import V3CompanySignalsRequest, V3CompanySignalsRequestDict
from ..models.v3_company_signals_response import V3CompanySignalsResponse
from ..models.v3_contact_signals_request import V3ContactSignalsRequest, V3ContactSignalsRequestDict
from ..models.v3_contact_signals_response import V3ContactSignalsResponse
from ..models.v3_signal_score_companies_request import V3SignalScoreCompaniesRequest, V3SignalScoreCompaniesRequestDict
from ..models.v3_signal_score_companies_response import V3SignalScoreCompaniesResponse
from ..models.v3_signal_score_contacts_request import V3SignalScoreContactsRequest, V3SignalScoreContactsRequestDict
from ..models.v3_signal_score_contacts_response import V3SignalScoreContactsResponse
from ..server.server import Server


class SignalsApi:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = SignalsApiWithRawResponse(client, server, auth)

    def get_company_signal_filter_values(
        self,
        filter_type: FilterTypeLushaSignalsApiOrStr,
        *,
        query: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> FilterValuesResponse:
        """Returns valid values for a single company signal filter type.

        | Filter type | Query required? |
        |---|---|
        | ``newsEventTypes`` | No |
        | ``hiringByDepartments`` | No |
        | ``hiringByLocations`` | Yes (2-256 chars) |
        | ``intentCategories`` | No — the ``query`` parameter is not supported for this filter type; passing one returns
            ``400`` |

        Args:
            filter_type: Value sent with the request.
            query: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad request - invalid input data Unauthorized - invalid or missing API key Forbidden - account
                inactive, V3 access not enabled, or plan does not include this feature ``error`` is ``ErrorResponse |
                RawError``."""
        return unwrap(
            self._with_raw_response.get_company_signal_filter_values(
                filter_type, query=query, request_options=request_options
            ),
        )

    def get_company_signal_filters(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> FilterTypesDiscoveryResponse:
        """Returns all available filter types for company signals and whether each requires a search query.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Unauthorized - invalid or missing API key Forbidden - account inactive, V3 access not enabled, or
                plan does not include this feature ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.get_company_signal_filters(request_options=request_options))

    def get_company_signal_scores(
        self,
        body: V3SignalScoreCompaniesRequest | V3SignalScoreCompaniesRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V3SignalScoreCompaniesResponse:
        """Score companies by their active buying signals. Returns the aggregate Signal Score - a ``[0, 1]`` value
        reflecting the fraction of the company's active signals - plus the active signal breakdown.

        Accepts up to 100 companies, each identified by exactly one of ``id``, ``domain``, ``name``, or ``email``. All
        identifiers are resolved to Lusha company IDs server-side before scoring.

        Each result is one of:
        - A **scored entry** - ``signalScore``, ``signalTypes``, and ``noActiveSignals``.
        - A **``NOT_FOUND``** entry - the company service could not resolve the supplied identifier.
        - A **``NO_SCORE``** entry - the company resolved, but the scoring engine returned nothing for it.

        > **Billing:** 1 credit is charged per scored row via ``signal_score_company_reveal``. This action is currently
            limited-availability - while it isn't yet seeded on an account's pricebook, the endpoint stays free
            (``billing.creditsCharged`` is ``0``). Error rows (``NOT_FOUND`` / ``NO_SCORE``) are never charged.

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
        return unwrap(self._with_raw_response.get_company_signal_scores(body, request_options=request_options))

    def get_company_signal_types(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> CompanySignalTypesResponse:
        """Returns the full list of supported signal types for companies.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Unauthorized - invalid or missing API key Forbidden - account inactive, V3 access not enabled, or
                plan does not include this feature ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.get_company_signal_types(request_options=request_options))

    def get_company_signals(
        self,
        body: V3CompanySignalsRequest | V3CompanySignalsRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V3CompanySignalsResponse:
        """Retrieve signal events for a list of companies — hiring activity, headcount changes, web traffic, IT spend,
        and news.

        Pass up to 100 company ``ids``. Use ``signalTypes`` to specify which signals to return (or use ``allSignals``).
        Optionally set a ``startDate`` to limit results to recent activity.

        > **Billing:** Charged per matched signal per result via the ``showSignalsCompany`` action.

        > **Persisting to a table:** Pass ``tableId`` to also add these companies to an existing table and populate the
            Signals column. See Companies Tables.

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
        return unwrap(self._with_raw_response.get_company_signals(body, request_options=request_options))

    def get_company_signals_by_id(
        self,
        body: CompanySignalsByIdRequest | CompanySignalsByIdRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> CompanySignalsByIdResponse:
        """Retrieve signals data for a list of company IDs. This endpoint allows you to get recent activities and
        signals for up to 100 companies per request.

        *Endpoint*: **(POST) https://api.lusha.com/api/signals/companies**

        **Default Behavior:**
        - Returns signals from the last 6 months by default
        - Use ``startDate`` to customize the timeframe

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Company signals retrieved successfully

        Raises:
            ApiError: Bad request - invalid input data Unauthorized - invalid or missing API key Forbidden - account
                inactive or feature not available Too many requests - rate limit exceeded ``error`` is ``ErrorResponse |
                RawError``."""
        return unwrap(self._with_raw_response.get_company_signals_by_id(body, request_options=request_options))

    def get_contact_signal_scores(
        self,
        body: V3SignalScoreContactsRequest | V3SignalScoreContactsRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V3SignalScoreContactsResponse:
        """Score contacts by their active buying signals. Returns the aggregate Signal Score - a ``[0, 1]`` value - plus
        the active signal breakdown per contact.

        Accepts up to 100 contacts. Each contact is resolved to a Lusha person ID and company ID server-side (identity
        only - no PII is revealed) before scoring. Provide one of:
        - ``id`` (encrypted Lusha contact ID)
        - ``linkedinUrl``
        - ``email``
        - ``firstName`` + ``lastName`` + (``companyName`` or ``companyDomain``)

        Each result is one of:
        - A **scored entry** - ``signalScore``, ``signalTypes``, and ``noActiveSignals``.
        - A **``NOT_FOUND``** entry - identity resolution failed for the supplied identifier.
        - A **``NO_SCORE``** entry - the contact resolved, but the scoring engine returned nothing for it.

        > **Note:** A full outage of the identity-resolution provider is never masked as ``NOT_FOUND`` - it returns a
            retryable ``502`` instead, so callers can retry rather than treating the batch as authoritatively
            unresolved.

        > **Billing:** 1 credit is charged per scored row via ``signal_score_contact_reveal``. This action is currently
            limited-availability - while it isn't yet seeded on an account's pricebook, the endpoint stays free
            (``billing.creditsCharged`` is ``0``). Error rows (``NOT_FOUND`` / ``NO_SCORE``) are never charged.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad request - invalid input data Unauthorized - invalid or missing API key Payment required -
                insufficient credits Forbidden - account inactive, V3 access not enabled, or plan does not include this
                feature Too many requests - rate limit exceeded Bad gateway - upstream identity resolution provider is
                unavailable. Retryable. ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.get_contact_signal_scores(body, request_options=request_options))

    def get_contact_signal_types(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ContactSignalTypesResponse:
        """Returns the full list of supported signal types for contacts.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Unauthorized - invalid or missing API key Forbidden - account inactive, V3 access not enabled, or
                plan does not include this feature ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.get_contact_signal_types(request_options=request_options))

    def get_contact_signals(
        self,
        body: V3ContactSignalsRequest | V3ContactSignalsRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V3ContactSignalsResponse:
        """Retrieve signal events for a list of contacts — job changes and promotions.

        Pass up to 100 contact ``ids``. Use ``signalTypes`` to specify which events to return (``promotion``,
        ``companyChange``, or ``allSignals``). Optionally set a ``startDate`` to limit results to recent activity.

        > **Billing:** Charged per matched signal per result via the ``showSignalsContact`` action.

        > **Persisting to a table:** Pass ``tableId`` to also add these contacts to an existing table and populate the
            Signals column. See Contacts Tables.

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
        return unwrap(self._with_raw_response.get_contact_signals(body, request_options=request_options))

    def get_contact_signals_by_id(
        self,
        body: ContactSignalsByIdRequest | ContactSignalsByIdRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ContactSignalsByIdResponse:
        """Retrieve signals data for a list of contact IDs. This endpoint allows you to get recent activities and
        signals for up to 100 contacts per request.

        *Endpoint*: **(POST) https://api.lusha.com/api/signals/contacts**

        **Default Behavior:**
        - Returns signals from the last 6 months by default
        - Use ``startDate`` to customize the timeframe
        - Each signal type requested counts towards credit usage

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Contact signals retrieved successfully

        Raises:
            ApiError: Bad request - invalid input data Unauthorized - invalid or missing API key Forbidden - account
                inactive or feature not available Too many requests - rate limit exceeded ``error`` is ``ErrorResponse |
                RawError``."""
        return unwrap(self._with_raw_response.get_contact_signals_by_id(body, request_options=request_options))

    def get_signal_options(
        self, object_type: ObjectTypeOrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiSignalsFiltersResponse:
        """Retrieve available signal options for a specific entity type (contact or company). This endpoint returns the
        list of signal types you can filter by when enriching contacts or companies.

        **Endpoints:**

        * **Contacts:** ``GET /api/signals/filters/contact``
        * **Companies:** ``GET /api/signals/filters/company``

        #### Available Signal Types

        #### For contacts:

        * **``allSignals``** - All available contact signal types
        * **``promotion``** - Job title promotions
        * **``companyChange``** - Company changes

        ---

        #### For companies:

        * **``allSignals``** - All available company signal types

        **Hiring & Workforce:**

        * **``surgeInHiring``** - Overall hiring activity increase
        * **``surgeInHiringByDepartment``** - Department-specific hiring surges
        * **``surgeInHiringByLocation``** - Location-specific hiring surges

        **Headcount Trends:**

        | Signal | Description |
        |--------|-------------|
        | ``headcountIncrease1m`` / ``headcountDecrease1m`` | 1-month employee count changes |
        | ``headcountIncrease3m`` / ``headcountDecrease3m`` | 3-month employee count changes |
        | ``headcountIncrease6m`` / ``headcountDecrease6m`` | 6-month employee count changes |
        | ``headcountIncrease12m`` / ``headcountDecrease12m`` | 12-month employee count changes |

        **Technology & Digital Presence:**

        * **``websiteTrafficIncrease``** - Website traffic growth
        * **``websiteTrafficDecrease``** - Website traffic decline
        * **``itSpendIncrease``** - IT spending increase
        * **``itSpendDecrease``** - IT spending decrease

        **News Events:**

        To retrieve company news, use one or more of the following category values:

        | Signal | Included Events |
        |--------|-----------------|
        | ``commercialActivityNews`` | Partnership, New Customer, New Vendor |
        | ``corporateStrategyNews`` | M&A, Facilities Expansion, New Location, Facility Closure, Asset Sale, Lawsuit
            Filed |
        | ``financialEventsNews`` | Funding Round, Asset Investment, Strategic Investment, IPO |
        | ``marketIntelligenceNews`` | Event Participation, Recognition, Competitor Activity |
        | ``peopleNews`` | Executive Hire, Executive Departure, Executive Promotion, Headcount Increase, Headcount
            Decrease |
        | ``productActivityNews`` | Product Launch, Product Development, Product Integration |
        | ``riskNews`` | Security Issue, Lawsuit Faced |

        > The response also includes available values for signal sub-filters:

        * ``newsEventTypes`` — available event type values for news signal filtering
        * ``hiringByDepartments`` — available department values for hiring surge filtering
        * ``hiringByLocations`` — available location values for hiring surge filtering (array of ``{ country, state }``
            objects)

        Args:
            object_type: The type of object to get signal options for
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            List of available signal types for the specified object type

        Raises:
            ApiError: Unauthorized - invalid or missing API key Signals API not supported on your plan ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.get_signal_options(object_type, request_options=request_options))

    def search_company_signals(
        self,
        body: CompanySignalsSearchRequest | CompanySignalsSearchRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> CompanySignalsByIdResponse:
        """Search for company signals using identifiers like domain, company name, or ID. This endpoint combines search
        and signal enrichment in a single request.

        *Endpoint*: **(POST) https://api.lusha.com/api/signals/companies/search**

        **Search Requirements:** Each company must have at least one identifier:
        - Company ID (as string)
        - Company name
        - Company domain

        **Default Behavior:**
        - Returns signals from the last 6 months by default
        - Companies are matched based on provided identifiers

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Company signals search results

        Raises:
            ApiError: Bad request - invalid input data Unauthorized - invalid or missing API key Forbidden - account
                inactive or feature not available Too many requests - rate limit exceeded ``error`` is ``ErrorResponse |
                RawError``."""
        return unwrap(self._with_raw_response.search_company_signals(body, request_options=request_options))

    def search_contact_signals(
        self,
        body: ContactSignalsSearchRequest | ContactSignalsSearchRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ContactSignalsSearchResponse:
        """Search for contact signals using identifiers like LinkedIn URL, email, or name + company. This endpoint
        combines search and signal enrichment in a single request.

        *Endpoint*: **(POST) https://api.lusha.com/api/signals/contacts/search**

        **Search Requirements:** Each contact can be identified by:
        - Contact ID
        - LinkedIn URL
        - Email address
        - Full name + Company (name or domain)

        **Default Behavior:**
        - Returns signals from the last 6 months by default
        - Contacts are matched based on provided identifiers
        - Returns both contact data and associated signals

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Contact signals search results

        Raises:
            ApiError: Bad request - invalid input data Unauthorized - invalid or missing API key Forbidden - account
                inactive or feature not available Too many requests - rate limit exceeded ``error`` is ``ErrorResponse |
                RawError``."""
        return unwrap(self._with_raw_response.search_contact_signals(body, request_options=request_options))

    @property
    def with_raw_response(self) -> SignalsApiWithRawResponse:
        return self._with_raw_response


class AsyncSignalsApi:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncSignalsApiWithRawResponse(client, server, auth)

    async def get_company_signal_filter_values(
        self,
        filter_type: FilterTypeLushaSignalsApiOrStr,
        *,
        query: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> FilterValuesResponse:
        """Returns valid values for a single company signal filter type.

        | Filter type | Query required? |
        |---|---|
        | ``newsEventTypes`` | No |
        | ``hiringByDepartments`` | No |
        | ``hiringByLocations`` | Yes (2-256 chars) |
        | ``intentCategories`` | No — the ``query`` parameter is not supported for this filter type; passing one returns
            ``400`` |

        Args:
            filter_type: Value sent with the request.
            query: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad request - invalid input data Unauthorized - invalid or missing API key Forbidden - account
                inactive, V3 access not enabled, or plan does not include this feature ``error`` is ``ErrorResponse |
                RawError``."""
        return unwrap(
            await self._with_raw_response.get_company_signal_filter_values(
                filter_type, query=query, request_options=request_options
            ),
        )

    async def get_company_signal_filters(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> FilterTypesDiscoveryResponse:
        """Returns all available filter types for company signals and whether each requires a search query.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Unauthorized - invalid or missing API key Forbidden - account inactive, V3 access not enabled, or
                plan does not include this feature ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.get_company_signal_filters(request_options=request_options))

    async def get_company_signal_scores(
        self,
        body: V3SignalScoreCompaniesRequest | V3SignalScoreCompaniesRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V3SignalScoreCompaniesResponse:
        """Score companies by their active buying signals. Returns the aggregate Signal Score - a ``[0, 1]`` value
        reflecting the fraction of the company's active signals - plus the active signal breakdown.

        Accepts up to 100 companies, each identified by exactly one of ``id``, ``domain``, ``name``, or ``email``. All
        identifiers are resolved to Lusha company IDs server-side before scoring.

        Each result is one of:
        - A **scored entry** - ``signalScore``, ``signalTypes``, and ``noActiveSignals``.
        - A **``NOT_FOUND``** entry - the company service could not resolve the supplied identifier.
        - A **``NO_SCORE``** entry - the company resolved, but the scoring engine returned nothing for it.

        > **Billing:** 1 credit is charged per scored row via ``signal_score_company_reveal``. This action is currently
            limited-availability - while it isn't yet seeded on an account's pricebook, the endpoint stays free
            (``billing.creditsCharged`` is ``0``). Error rows (``NOT_FOUND`` / ``NO_SCORE``) are never charged.

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
        return unwrap(await self._with_raw_response.get_company_signal_scores(body, request_options=request_options))

    async def get_company_signal_types(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> CompanySignalTypesResponse:
        """Returns the full list of supported signal types for companies.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Unauthorized - invalid or missing API key Forbidden - account inactive, V3 access not enabled, or
                plan does not include this feature ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.get_company_signal_types(request_options=request_options))

    async def get_company_signals(
        self,
        body: V3CompanySignalsRequest | V3CompanySignalsRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V3CompanySignalsResponse:
        """Retrieve signal events for a list of companies — hiring activity, headcount changes, web traffic, IT spend,
        and news.

        Pass up to 100 company ``ids``. Use ``signalTypes`` to specify which signals to return (or use ``allSignals``).
        Optionally set a ``startDate`` to limit results to recent activity.

        > **Billing:** Charged per matched signal per result via the ``showSignalsCompany`` action.

        > **Persisting to a table:** Pass ``tableId`` to also add these companies to an existing table and populate the
            Signals column. See Companies Tables.

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
        return unwrap(await self._with_raw_response.get_company_signals(body, request_options=request_options))

    async def get_company_signals_by_id(
        self,
        body: CompanySignalsByIdRequest | CompanySignalsByIdRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CompanySignalsByIdResponse:
        """Retrieve signals data for a list of company IDs. This endpoint allows you to get recent activities and
        signals for up to 100 companies per request.

        *Endpoint*: **(POST) https://api.lusha.com/api/signals/companies**

        **Default Behavior:**
        - Returns signals from the last 6 months by default
        - Use ``startDate`` to customize the timeframe

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Company signals retrieved successfully

        Raises:
            ApiError: Bad request - invalid input data Unauthorized - invalid or missing API key Forbidden - account
                inactive or feature not available Too many requests - rate limit exceeded ``error`` is ``ErrorResponse |
                RawError``."""
        return unwrap(await self._with_raw_response.get_company_signals_by_id(body, request_options=request_options))

    async def get_contact_signal_scores(
        self,
        body: V3SignalScoreContactsRequest | V3SignalScoreContactsRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V3SignalScoreContactsResponse:
        """Score contacts by their active buying signals. Returns the aggregate Signal Score - a ``[0, 1]`` value - plus
        the active signal breakdown per contact.

        Accepts up to 100 contacts. Each contact is resolved to a Lusha person ID and company ID server-side (identity
        only - no PII is revealed) before scoring. Provide one of:
        - ``id`` (encrypted Lusha contact ID)
        - ``linkedinUrl``
        - ``email``
        - ``firstName`` + ``lastName`` + (``companyName`` or ``companyDomain``)

        Each result is one of:
        - A **scored entry** - ``signalScore``, ``signalTypes``, and ``noActiveSignals``.
        - A **``NOT_FOUND``** entry - identity resolution failed for the supplied identifier.
        - A **``NO_SCORE``** entry - the contact resolved, but the scoring engine returned nothing for it.

        > **Note:** A full outage of the identity-resolution provider is never masked as ``NOT_FOUND`` - it returns a
            retryable ``502`` instead, so callers can retry rather than treating the batch as authoritatively
            unresolved.

        > **Billing:** 1 credit is charged per scored row via ``signal_score_contact_reveal``. This action is currently
            limited-availability - while it isn't yet seeded on an account's pricebook, the endpoint stays free
            (``billing.creditsCharged`` is ``0``). Error rows (``NOT_FOUND`` / ``NO_SCORE``) are never charged.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad request - invalid input data Unauthorized - invalid or missing API key Payment required -
                insufficient credits Forbidden - account inactive, V3 access not enabled, or plan does not include this
                feature Too many requests - rate limit exceeded Bad gateway - upstream identity resolution provider is
                unavailable. Retryable. ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.get_contact_signal_scores(body, request_options=request_options))

    async def get_contact_signal_types(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ContactSignalTypesResponse:
        """Returns the full list of supported signal types for contacts.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Unauthorized - invalid or missing API key Forbidden - account inactive, V3 access not enabled, or
                plan does not include this feature ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.get_contact_signal_types(request_options=request_options))

    async def get_contact_signals(
        self,
        body: V3ContactSignalsRequest | V3ContactSignalsRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V3ContactSignalsResponse:
        """Retrieve signal events for a list of contacts — job changes and promotions.

        Pass up to 100 contact ``ids``. Use ``signalTypes`` to specify which events to return (``promotion``,
        ``companyChange``, or ``allSignals``). Optionally set a ``startDate`` to limit results to recent activity.

        > **Billing:** Charged per matched signal per result via the ``showSignalsContact`` action.

        > **Persisting to a table:** Pass ``tableId`` to also add these contacts to an existing table and populate the
            Signals column. See Contacts Tables.

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
        return unwrap(await self._with_raw_response.get_contact_signals(body, request_options=request_options))

    async def get_contact_signals_by_id(
        self,
        body: ContactSignalsByIdRequest | ContactSignalsByIdRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ContactSignalsByIdResponse:
        """Retrieve signals data for a list of contact IDs. This endpoint allows you to get recent activities and
        signals for up to 100 contacts per request.

        *Endpoint*: **(POST) https://api.lusha.com/api/signals/contacts**

        **Default Behavior:**
        - Returns signals from the last 6 months by default
        - Use ``startDate`` to customize the timeframe
        - Each signal type requested counts towards credit usage

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Contact signals retrieved successfully

        Raises:
            ApiError: Bad request - invalid input data Unauthorized - invalid or missing API key Forbidden - account
                inactive or feature not available Too many requests - rate limit exceeded ``error`` is ``ErrorResponse |
                RawError``."""
        return unwrap(await self._with_raw_response.get_contact_signals_by_id(body, request_options=request_options))

    async def get_signal_options(
        self, object_type: ObjectTypeOrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiSignalsFiltersResponse:
        """Retrieve available signal options for a specific entity type (contact or company). This endpoint returns the
        list of signal types you can filter by when enriching contacts or companies.

        **Endpoints:**

        * **Contacts:** ``GET /api/signals/filters/contact``
        * **Companies:** ``GET /api/signals/filters/company``

        #### Available Signal Types

        #### For contacts:

        * **``allSignals``** - All available contact signal types
        * **``promotion``** - Job title promotions
        * **``companyChange``** - Company changes

        ---

        #### For companies:

        * **``allSignals``** - All available company signal types

        **Hiring & Workforce:**

        * **``surgeInHiring``** - Overall hiring activity increase
        * **``surgeInHiringByDepartment``** - Department-specific hiring surges
        * **``surgeInHiringByLocation``** - Location-specific hiring surges

        **Headcount Trends:**

        | Signal | Description |
        |--------|-------------|
        | ``headcountIncrease1m`` / ``headcountDecrease1m`` | 1-month employee count changes |
        | ``headcountIncrease3m`` / ``headcountDecrease3m`` | 3-month employee count changes |
        | ``headcountIncrease6m`` / ``headcountDecrease6m`` | 6-month employee count changes |
        | ``headcountIncrease12m`` / ``headcountDecrease12m`` | 12-month employee count changes |

        **Technology & Digital Presence:**

        * **``websiteTrafficIncrease``** - Website traffic growth
        * **``websiteTrafficDecrease``** - Website traffic decline
        * **``itSpendIncrease``** - IT spending increase
        * **``itSpendDecrease``** - IT spending decrease

        **News Events:**

        To retrieve company news, use one or more of the following category values:

        | Signal | Included Events |
        |--------|-----------------|
        | ``commercialActivityNews`` | Partnership, New Customer, New Vendor |
        | ``corporateStrategyNews`` | M&A, Facilities Expansion, New Location, Facility Closure, Asset Sale, Lawsuit
            Filed |
        | ``financialEventsNews`` | Funding Round, Asset Investment, Strategic Investment, IPO |
        | ``marketIntelligenceNews`` | Event Participation, Recognition, Competitor Activity |
        | ``peopleNews`` | Executive Hire, Executive Departure, Executive Promotion, Headcount Increase, Headcount
            Decrease |
        | ``productActivityNews`` | Product Launch, Product Development, Product Integration |
        | ``riskNews`` | Security Issue, Lawsuit Faced |

        > The response also includes available values for signal sub-filters:

        * ``newsEventTypes`` — available event type values for news signal filtering
        * ``hiringByDepartments`` — available department values for hiring surge filtering
        * ``hiringByLocations`` — available location values for hiring surge filtering (array of ``{ country, state }``
            objects)

        Args:
            object_type: The type of object to get signal options for
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            List of available signal types for the specified object type

        Raises:
            ApiError: Unauthorized - invalid or missing API key Signals API not supported on your plan ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.get_signal_options(object_type, request_options=request_options))

    async def search_company_signals(
        self,
        body: CompanySignalsSearchRequest | CompanySignalsSearchRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CompanySignalsByIdResponse:
        """Search for company signals using identifiers like domain, company name, or ID. This endpoint combines search
        and signal enrichment in a single request.

        *Endpoint*: **(POST) https://api.lusha.com/api/signals/companies/search**

        **Search Requirements:** Each company must have at least one identifier:
        - Company ID (as string)
        - Company name
        - Company domain

        **Default Behavior:**
        - Returns signals from the last 6 months by default
        - Companies are matched based on provided identifiers

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Company signals search results

        Raises:
            ApiError: Bad request - invalid input data Unauthorized - invalid or missing API key Forbidden - account
                inactive or feature not available Too many requests - rate limit exceeded ``error`` is ``ErrorResponse |
                RawError``."""
        return unwrap(await self._with_raw_response.search_company_signals(body, request_options=request_options))

    async def search_contact_signals(
        self,
        body: ContactSignalsSearchRequest | ContactSignalsSearchRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ContactSignalsSearchResponse:
        """Search for contact signals using identifiers like LinkedIn URL, email, or name + company. This endpoint
        combines search and signal enrichment in a single request.

        *Endpoint*: **(POST) https://api.lusha.com/api/signals/contacts/search**

        **Search Requirements:** Each contact can be identified by:
        - Contact ID
        - LinkedIn URL
        - Email address
        - Full name + Company (name or domain)

        **Default Behavior:**
        - Returns signals from the last 6 months by default
        - Contacts are matched based on provided identifiers
        - Returns both contact data and associated signals

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Contact signals search results

        Raises:
            ApiError: Bad request - invalid input data Unauthorized - invalid or missing API key Forbidden - account
                inactive or feature not available Too many requests - rate limit exceeded ``error`` is ``ErrorResponse |
                RawError``."""
        return unwrap(await self._with_raw_response.search_contact_signals(body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncSignalsApiWithRawResponse:
        return self._with_raw_response


class SignalsApiWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_company_signal_filter_values(
        self,
        filter_type: FilterTypeLushaSignalsApiOrStr,
        *,
        query: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[FilterValuesResponse, GetCompanySignalFilterValuesErrorBody]:
        """Returns valid values for a single company signal filter type.

        | Filter type | Query required? |
        |---|---|
        | ``newsEventTypes`` | No |
        | ``hiringByDepartments`` | No |
        | ``hiringByLocations`` | Yes (2-256 chars) |
        | ``intentCategories`` | No — the ``query`` parameter is not supported for this filter type; passing one returns
            ``400`` |

        Args:
            filter_type: Value sent with the request.
            query: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/companies/signals/filters/{filterType}"),
            path_params=[param[FilterTypeLushaSignalsApiOrStr]("filterType", filter_type)],
            query_params=[param[str | None]("query", query)],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[FilterValuesResponse],
            error_mapper=get_company_signal_filter_values_error_mapper,
            request_options=request_options,
        )

    def get_company_signal_filters(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[FilterTypesDiscoveryResponse, GetCompanySignalFiltersErrorBody]:
        """Returns all available filter types for company signals and whether each requires a search query.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/companies/signals/filters"),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[FilterTypesDiscoveryResponse],
            error_mapper=get_company_signal_filters_error_mapper,
            request_options=request_options,
        )

    def get_company_signal_scores(
        self,
        body: V3SignalScoreCompaniesRequest | V3SignalScoreCompaniesRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V3SignalScoreCompaniesResponse, GetCompanySignalScoresErrorBody]:
        """Score companies by their active buying signals. Returns the aggregate Signal Score - a ``[0, 1]`` value
        reflecting the fraction of the company's active signals - plus the active signal breakdown.

        Accepts up to 100 companies, each identified by exactly one of ``id``, ``domain``, ``name``, or ``email``. All
        identifiers are resolved to Lusha company IDs server-side before scoring.

        Each result is one of:
        - A **scored entry** - ``signalScore``, ``signalTypes``, and ``noActiveSignals``.
        - A **``NOT_FOUND``** entry - the company service could not resolve the supplied identifier.
        - A **``NO_SCORE``** entry - the company resolved, but the scoring engine returned nothing for it.

        > **Billing:** 1 credit is charged per scored row via ``signal_score_company_reveal``. This action is currently
            limited-availability - while it isn't yet seeded on an account's pricebook, the endpoint stays free
            (``billing.creditsCharged`` is ``0``). Error rows (``NOT_FOUND`` / ``NO_SCORE``) are never charged.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/companies/signal-score"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V3SignalScoreCompaniesRequest | V3SignalScoreCompaniesRequestDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[V3SignalScoreCompaniesResponse],
            error_mapper=get_company_signal_scores_error_mapper,
            request_options=request_options,
        )

    def get_company_signal_types(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[CompanySignalTypesResponse, GetCompanySignalTypesErrorBody]:
        """Returns the full list of supported signal types for companies.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/companies/signals/types"),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[CompanySignalTypesResponse],
            error_mapper=get_company_signal_types_error_mapper,
            request_options=request_options,
        )

    def get_company_signals(
        self,
        body: V3CompanySignalsRequest | V3CompanySignalsRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V3CompanySignalsResponse, GetCompanySignalsErrorBody]:
        """Retrieve signal events for a list of companies — hiring activity, headcount changes, web traffic, IT spend,
        and news.

        Pass up to 100 company ``ids``. Use ``signalTypes`` to specify which signals to return (or use ``allSignals``).
        Optionally set a ``startDate`` to limit results to recent activity.

        > **Billing:** Charged per matched signal per result via the ``showSignalsCompany`` action.

        > **Persisting to a table:** Pass ``tableId`` to also add these companies to an existing table and populate the
            Signals column. See Companies Tables.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/companies/signals"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V3CompanySignalsRequest | V3CompanySignalsRequestDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[V3CompanySignalsResponse],
            error_mapper=get_company_signals_error_mapper,
            request_options=request_options,
        )

    def get_company_signals_by_id(
        self,
        body: CompanySignalsByIdRequest | CompanySignalsByIdRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[CompanySignalsByIdResponse, GetCompanySignalsByIdErrorBody]:
        """Retrieve signals data for a list of company IDs. This endpoint allows you to get recent activities and
        signals for up to 100 companies per request.

        *Endpoint*: **(POST) https://api.lusha.com/api/signals/companies**

        **Default Behavior:**
        - Returns signals from the last 6 months by default
        - Use ``startDate`` to customize the timeframe

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/signals/companies"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CompanySignalsByIdRequest | CompanySignalsByIdRequestDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[CompanySignalsByIdResponse],
            error_mapper=get_company_signals_by_id_error_mapper,
            request_options=request_options,
        )

    def get_contact_signal_scores(
        self,
        body: V3SignalScoreContactsRequest | V3SignalScoreContactsRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V3SignalScoreContactsResponse, GetContactSignalScoresErrorBody]:
        """Score contacts by their active buying signals. Returns the aggregate Signal Score - a ``[0, 1]`` value - plus
        the active signal breakdown per contact.

        Accepts up to 100 contacts. Each contact is resolved to a Lusha person ID and company ID server-side (identity
        only - no PII is revealed) before scoring. Provide one of:
        - ``id`` (encrypted Lusha contact ID)
        - ``linkedinUrl``
        - ``email``
        - ``firstName`` + ``lastName`` + (``companyName`` or ``companyDomain``)

        Each result is one of:
        - A **scored entry** - ``signalScore``, ``signalTypes``, and ``noActiveSignals``.
        - A **``NOT_FOUND``** entry - identity resolution failed for the supplied identifier.
        - A **``NO_SCORE``** entry - the contact resolved, but the scoring engine returned nothing for it.

        > **Note:** A full outage of the identity-resolution provider is never masked as ``NOT_FOUND`` - it returns a
            retryable ``502`` instead, so callers can retry rather than treating the batch as authoritatively
            unresolved.

        > **Billing:** 1 credit is charged per scored row via ``signal_score_contact_reveal``. This action is currently
            limited-availability - while it isn't yet seeded on an account's pricebook, the endpoint stays free
            (``billing.creditsCharged`` is ``0``). Error rows (``NOT_FOUND`` / ``NO_SCORE``) are never charged.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/contacts/signal-score"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V3SignalScoreContactsRequest | V3SignalScoreContactsRequestDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[V3SignalScoreContactsResponse],
            error_mapper=get_contact_signal_scores_error_mapper,
            request_options=request_options,
        )

    def get_contact_signal_types(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ContactSignalTypesResponse, GetContactSignalTypesErrorBody]:
        """Returns the full list of supported signal types for contacts.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/contacts/signals/types"),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ContactSignalTypesResponse],
            error_mapper=get_contact_signal_types_error_mapper,
            request_options=request_options,
        )

    def get_contact_signals(
        self,
        body: V3ContactSignalsRequest | V3ContactSignalsRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V3ContactSignalsResponse, GetContactSignalsErrorBody]:
        """Retrieve signal events for a list of contacts — job changes and promotions.

        Pass up to 100 contact ``ids``. Use ``signalTypes`` to specify which events to return (``promotion``,
        ``companyChange``, or ``allSignals``). Optionally set a ``startDate`` to limit results to recent activity.

        > **Billing:** Charged per matched signal per result via the ``showSignalsContact`` action.

        > **Persisting to a table:** Pass ``tableId`` to also add these contacts to an existing table and populate the
            Signals column. See Contacts Tables.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/contacts/signals"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V3ContactSignalsRequest | V3ContactSignalsRequestDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[V3ContactSignalsResponse],
            error_mapper=get_contact_signals_error_mapper,
            request_options=request_options,
        )

    def get_contact_signals_by_id(
        self,
        body: ContactSignalsByIdRequest | ContactSignalsByIdRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ContactSignalsByIdResponse, GetContactSignalsByIdErrorBody]:
        """Retrieve signals data for a list of contact IDs. This endpoint allows you to get recent activities and
        signals for up to 100 contacts per request.

        *Endpoint*: **(POST) https://api.lusha.com/api/signals/contacts**

        **Default Behavior:**
        - Returns signals from the last 6 months by default
        - Use ``startDate`` to customize the timeframe
        - Each signal type requested counts towards credit usage

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/signals/contacts"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ContactSignalsByIdRequest | ContactSignalsByIdRequestDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ContactSignalsByIdResponse],
            error_mapper=get_contact_signals_by_id_error_mapper,
            request_options=request_options,
        )

    def get_signal_options(
        self, object_type: ObjectTypeOrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ApiSignalsFiltersResponse, GetSignalOptionsErrorBody]:
        """Retrieve available signal options for a specific entity type (contact or company). This endpoint returns the
        list of signal types you can filter by when enriching contacts or companies.

        **Endpoints:**

        * **Contacts:** ``GET /api/signals/filters/contact``
        * **Companies:** ``GET /api/signals/filters/company``

        #### Available Signal Types

        #### For contacts:

        * **``allSignals``** - All available contact signal types
        * **``promotion``** - Job title promotions
        * **``companyChange``** - Company changes

        ---

        #### For companies:

        * **``allSignals``** - All available company signal types

        **Hiring & Workforce:**

        * **``surgeInHiring``** - Overall hiring activity increase
        * **``surgeInHiringByDepartment``** - Department-specific hiring surges
        * **``surgeInHiringByLocation``** - Location-specific hiring surges

        **Headcount Trends:**

        | Signal | Description |
        |--------|-------------|
        | ``headcountIncrease1m`` / ``headcountDecrease1m`` | 1-month employee count changes |
        | ``headcountIncrease3m`` / ``headcountDecrease3m`` | 3-month employee count changes |
        | ``headcountIncrease6m`` / ``headcountDecrease6m`` | 6-month employee count changes |
        | ``headcountIncrease12m`` / ``headcountDecrease12m`` | 12-month employee count changes |

        **Technology & Digital Presence:**

        * **``websiteTrafficIncrease``** - Website traffic growth
        * **``websiteTrafficDecrease``** - Website traffic decline
        * **``itSpendIncrease``** - IT spending increase
        * **``itSpendDecrease``** - IT spending decrease

        **News Events:**

        To retrieve company news, use one or more of the following category values:

        | Signal | Included Events |
        |--------|-----------------|
        | ``commercialActivityNews`` | Partnership, New Customer, New Vendor |
        | ``corporateStrategyNews`` | M&A, Facilities Expansion, New Location, Facility Closure, Asset Sale, Lawsuit
            Filed |
        | ``financialEventsNews`` | Funding Round, Asset Investment, Strategic Investment, IPO |
        | ``marketIntelligenceNews`` | Event Participation, Recognition, Competitor Activity |
        | ``peopleNews`` | Executive Hire, Executive Departure, Executive Promotion, Headcount Increase, Headcount
            Decrease |
        | ``productActivityNews`` | Product Launch, Product Development, Product Integration |
        | ``riskNews`` | Security Issue, Lawsuit Faced |

        > The response also includes available values for signal sub-filters:

        * ``newsEventTypes`` — available event type values for news signal filtering
        * ``hiringByDepartments`` — available department values for hiring surge filtering
        * ``hiringByLocations`` — available location values for hiring surge filtering (array of ``{ country, state }``
            objects)

        Args:
            object_type: The type of object to get signal options for
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/signals/filters/{objectType}"),
            path_params=[param[ObjectTypeOrStr]("objectType", object_type)],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ApiSignalsFiltersResponse],
            error_mapper=get_signal_options_error_mapper,
            request_options=request_options,
        )

    def search_company_signals(
        self,
        body: CompanySignalsSearchRequest | CompanySignalsSearchRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[CompanySignalsByIdResponse, SearchCompanySignalsErrorBody]:
        """Search for company signals using identifiers like domain, company name, or ID. This endpoint combines search
        and signal enrichment in a single request.

        *Endpoint*: **(POST) https://api.lusha.com/api/signals/companies/search**

        **Search Requirements:** Each company must have at least one identifier:
        - Company ID (as string)
        - Company name
        - Company domain

        **Default Behavior:**
        - Returns signals from the last 6 months by default
        - Companies are matched based on provided identifiers

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/signals/companies/search"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CompanySignalsSearchRequest | CompanySignalsSearchRequestDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[CompanySignalsByIdResponse],
            error_mapper=search_company_signals_error_mapper,
            request_options=request_options,
        )

    def search_contact_signals(
        self,
        body: ContactSignalsSearchRequest | ContactSignalsSearchRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ContactSignalsSearchResponse, SearchContactSignalsErrorBody]:
        """Search for contact signals using identifiers like LinkedIn URL, email, or name + company. This endpoint
        combines search and signal enrichment in a single request.

        *Endpoint*: **(POST) https://api.lusha.com/api/signals/contacts/search**

        **Search Requirements:** Each contact can be identified by:
        - Contact ID
        - LinkedIn URL
        - Email address
        - Full name + Company (name or domain)

        **Default Behavior:**
        - Returns signals from the last 6 months by default
        - Contacts are matched based on provided identifiers
        - Returns both contact data and associated signals

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/signals/contacts/search"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ContactSignalsSearchRequest | ContactSignalsSearchRequestDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ContactSignalsSearchResponse],
            error_mapper=search_contact_signals_error_mapper,
            request_options=request_options,
        )


class AsyncSignalsApiWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_company_signal_filter_values(
        self,
        filter_type: FilterTypeLushaSignalsApiOrStr,
        *,
        query: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[FilterValuesResponse, GetCompanySignalFilterValuesErrorBody]:
        """Returns valid values for a single company signal filter type.

        | Filter type | Query required? |
        |---|---|
        | ``newsEventTypes`` | No |
        | ``hiringByDepartments`` | No |
        | ``hiringByLocations`` | Yes (2-256 chars) |
        | ``intentCategories`` | No — the ``query`` parameter is not supported for this filter type; passing one returns
            ``400`` |

        Args:
            filter_type: Value sent with the request.
            query: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/companies/signals/filters/{filterType}"),
            path_params=[param[FilterTypeLushaSignalsApiOrStr]("filterType", filter_type)],
            query_params=[param[str | None]("query", query)],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[FilterValuesResponse],
            error_mapper=get_company_signal_filter_values_error_mapper,
            request_options=request_options,
        )

    async def get_company_signal_filters(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[FilterTypesDiscoveryResponse, GetCompanySignalFiltersErrorBody]:
        """Returns all available filter types for company signals and whether each requires a search query.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/companies/signals/filters"),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[FilterTypesDiscoveryResponse],
            error_mapper=get_company_signal_filters_error_mapper,
            request_options=request_options,
        )

    async def get_company_signal_scores(
        self,
        body: V3SignalScoreCompaniesRequest | V3SignalScoreCompaniesRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V3SignalScoreCompaniesResponse, GetCompanySignalScoresErrorBody]:
        """Score companies by their active buying signals. Returns the aggregate Signal Score - a ``[0, 1]`` value
        reflecting the fraction of the company's active signals - plus the active signal breakdown.

        Accepts up to 100 companies, each identified by exactly one of ``id``, ``domain``, ``name``, or ``email``. All
        identifiers are resolved to Lusha company IDs server-side before scoring.

        Each result is one of:
        - A **scored entry** - ``signalScore``, ``signalTypes``, and ``noActiveSignals``.
        - A **``NOT_FOUND``** entry - the company service could not resolve the supplied identifier.
        - A **``NO_SCORE``** entry - the company resolved, but the scoring engine returned nothing for it.

        > **Billing:** 1 credit is charged per scored row via ``signal_score_company_reveal``. This action is currently
            limited-availability - while it isn't yet seeded on an account's pricebook, the endpoint stays free
            (``billing.creditsCharged`` is ``0``). Error rows (``NOT_FOUND`` / ``NO_SCORE``) are never charged.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/companies/signal-score"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V3SignalScoreCompaniesRequest | V3SignalScoreCompaniesRequestDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[V3SignalScoreCompaniesResponse],
            error_mapper=get_company_signal_scores_error_mapper,
            request_options=request_options,
        )

    async def get_company_signal_types(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[CompanySignalTypesResponse, GetCompanySignalTypesErrorBody]:
        """Returns the full list of supported signal types for companies.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/companies/signals/types"),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[CompanySignalTypesResponse],
            error_mapper=get_company_signal_types_error_mapper,
            request_options=request_options,
        )

    async def get_company_signals(
        self,
        body: V3CompanySignalsRequest | V3CompanySignalsRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V3CompanySignalsResponse, GetCompanySignalsErrorBody]:
        """Retrieve signal events for a list of companies — hiring activity, headcount changes, web traffic, IT spend,
        and news.

        Pass up to 100 company ``ids``. Use ``signalTypes`` to specify which signals to return (or use ``allSignals``).
        Optionally set a ``startDate`` to limit results to recent activity.

        > **Billing:** Charged per matched signal per result via the ``showSignalsCompany`` action.

        > **Persisting to a table:** Pass ``tableId`` to also add these companies to an existing table and populate the
            Signals column. See Companies Tables.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/companies/signals"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V3CompanySignalsRequest | V3CompanySignalsRequestDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[V3CompanySignalsResponse],
            error_mapper=get_company_signals_error_mapper,
            request_options=request_options,
        )

    async def get_company_signals_by_id(
        self,
        body: CompanySignalsByIdRequest | CompanySignalsByIdRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CompanySignalsByIdResponse, GetCompanySignalsByIdErrorBody]:
        """Retrieve signals data for a list of company IDs. This endpoint allows you to get recent activities and
        signals for up to 100 companies per request.

        *Endpoint*: **(POST) https://api.lusha.com/api/signals/companies**

        **Default Behavior:**
        - Returns signals from the last 6 months by default
        - Use ``startDate`` to customize the timeframe

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/signals/companies"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CompanySignalsByIdRequest | CompanySignalsByIdRequestDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[CompanySignalsByIdResponse],
            error_mapper=get_company_signals_by_id_error_mapper,
            request_options=request_options,
        )

    async def get_contact_signal_scores(
        self,
        body: V3SignalScoreContactsRequest | V3SignalScoreContactsRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V3SignalScoreContactsResponse, GetContactSignalScoresErrorBody]:
        """Score contacts by their active buying signals. Returns the aggregate Signal Score - a ``[0, 1]`` value - plus
        the active signal breakdown per contact.

        Accepts up to 100 contacts. Each contact is resolved to a Lusha person ID and company ID server-side (identity
        only - no PII is revealed) before scoring. Provide one of:
        - ``id`` (encrypted Lusha contact ID)
        - ``linkedinUrl``
        - ``email``
        - ``firstName`` + ``lastName`` + (``companyName`` or ``companyDomain``)

        Each result is one of:
        - A **scored entry** - ``signalScore``, ``signalTypes``, and ``noActiveSignals``.
        - A **``NOT_FOUND``** entry - identity resolution failed for the supplied identifier.
        - A **``NO_SCORE``** entry - the contact resolved, but the scoring engine returned nothing for it.

        > **Note:** A full outage of the identity-resolution provider is never masked as ``NOT_FOUND`` - it returns a
            retryable ``502`` instead, so callers can retry rather than treating the batch as authoritatively
            unresolved.

        > **Billing:** 1 credit is charged per scored row via ``signal_score_contact_reveal``. This action is currently
            limited-availability - while it isn't yet seeded on an account's pricebook, the endpoint stays free
            (``billing.creditsCharged`` is ``0``). Error rows (``NOT_FOUND`` / ``NO_SCORE``) are never charged.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/contacts/signal-score"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V3SignalScoreContactsRequest | V3SignalScoreContactsRequestDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[V3SignalScoreContactsResponse],
            error_mapper=get_contact_signal_scores_error_mapper,
            request_options=request_options,
        )

    async def get_contact_signal_types(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ContactSignalTypesResponse, GetContactSignalTypesErrorBody]:
        """Returns the full list of supported signal types for contacts.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/contacts/signals/types"),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ContactSignalTypesResponse],
            error_mapper=get_contact_signal_types_error_mapper,
            request_options=request_options,
        )

    async def get_contact_signals(
        self,
        body: V3ContactSignalsRequest | V3ContactSignalsRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V3ContactSignalsResponse, GetContactSignalsErrorBody]:
        """Retrieve signal events for a list of contacts — job changes and promotions.

        Pass up to 100 contact ``ids``. Use ``signalTypes`` to specify which events to return (``promotion``,
        ``companyChange``, or ``allSignals``). Optionally set a ``startDate`` to limit results to recent activity.

        > **Billing:** Charged per matched signal per result via the ``showSignalsContact`` action.

        > **Persisting to a table:** Pass ``tableId`` to also add these contacts to an existing table and populate the
            Signals column. See Contacts Tables.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/contacts/signals"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V3ContactSignalsRequest | V3ContactSignalsRequestDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[V3ContactSignalsResponse],
            error_mapper=get_contact_signals_error_mapper,
            request_options=request_options,
        )

    async def get_contact_signals_by_id(
        self,
        body: ContactSignalsByIdRequest | ContactSignalsByIdRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ContactSignalsByIdResponse, GetContactSignalsByIdErrorBody]:
        """Retrieve signals data for a list of contact IDs. This endpoint allows you to get recent activities and
        signals for up to 100 contacts per request.

        *Endpoint*: **(POST) https://api.lusha.com/api/signals/contacts**

        **Default Behavior:**
        - Returns signals from the last 6 months by default
        - Use ``startDate`` to customize the timeframe
        - Each signal type requested counts towards credit usage

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/signals/contacts"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ContactSignalsByIdRequest | ContactSignalsByIdRequestDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ContactSignalsByIdResponse],
            error_mapper=get_contact_signals_by_id_error_mapper,
            request_options=request_options,
        )

    async def get_signal_options(
        self, object_type: ObjectTypeOrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ApiSignalsFiltersResponse, GetSignalOptionsErrorBody]:
        """Retrieve available signal options for a specific entity type (contact or company). This endpoint returns the
        list of signal types you can filter by when enriching contacts or companies.

        **Endpoints:**

        * **Contacts:** ``GET /api/signals/filters/contact``
        * **Companies:** ``GET /api/signals/filters/company``

        #### Available Signal Types

        #### For contacts:

        * **``allSignals``** - All available contact signal types
        * **``promotion``** - Job title promotions
        * **``companyChange``** - Company changes

        ---

        #### For companies:

        * **``allSignals``** - All available company signal types

        **Hiring & Workforce:**

        * **``surgeInHiring``** - Overall hiring activity increase
        * **``surgeInHiringByDepartment``** - Department-specific hiring surges
        * **``surgeInHiringByLocation``** - Location-specific hiring surges

        **Headcount Trends:**

        | Signal | Description |
        |--------|-------------|
        | ``headcountIncrease1m`` / ``headcountDecrease1m`` | 1-month employee count changes |
        | ``headcountIncrease3m`` / ``headcountDecrease3m`` | 3-month employee count changes |
        | ``headcountIncrease6m`` / ``headcountDecrease6m`` | 6-month employee count changes |
        | ``headcountIncrease12m`` / ``headcountDecrease12m`` | 12-month employee count changes |

        **Technology & Digital Presence:**

        * **``websiteTrafficIncrease``** - Website traffic growth
        * **``websiteTrafficDecrease``** - Website traffic decline
        * **``itSpendIncrease``** - IT spending increase
        * **``itSpendDecrease``** - IT spending decrease

        **News Events:**

        To retrieve company news, use one or more of the following category values:

        | Signal | Included Events |
        |--------|-----------------|
        | ``commercialActivityNews`` | Partnership, New Customer, New Vendor |
        | ``corporateStrategyNews`` | M&A, Facilities Expansion, New Location, Facility Closure, Asset Sale, Lawsuit
            Filed |
        | ``financialEventsNews`` | Funding Round, Asset Investment, Strategic Investment, IPO |
        | ``marketIntelligenceNews`` | Event Participation, Recognition, Competitor Activity |
        | ``peopleNews`` | Executive Hire, Executive Departure, Executive Promotion, Headcount Increase, Headcount
            Decrease |
        | ``productActivityNews`` | Product Launch, Product Development, Product Integration |
        | ``riskNews`` | Security Issue, Lawsuit Faced |

        > The response also includes available values for signal sub-filters:

        * ``newsEventTypes`` — available event type values for news signal filtering
        * ``hiringByDepartments`` — available department values for hiring surge filtering
        * ``hiringByLocations`` — available location values for hiring surge filtering (array of ``{ country, state }``
            objects)

        Args:
            object_type: The type of object to get signal options for
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/signals/filters/{objectType}"),
            path_params=[param[ObjectTypeOrStr]("objectType", object_type)],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ApiSignalsFiltersResponse],
            error_mapper=get_signal_options_error_mapper,
            request_options=request_options,
        )

    async def search_company_signals(
        self,
        body: CompanySignalsSearchRequest | CompanySignalsSearchRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CompanySignalsByIdResponse, SearchCompanySignalsErrorBody]:
        """Search for company signals using identifiers like domain, company name, or ID. This endpoint combines search
        and signal enrichment in a single request.

        *Endpoint*: **(POST) https://api.lusha.com/api/signals/companies/search**

        **Search Requirements:** Each company must have at least one identifier:
        - Company ID (as string)
        - Company name
        - Company domain

        **Default Behavior:**
        - Returns signals from the last 6 months by default
        - Companies are matched based on provided identifiers

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/signals/companies/search"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CompanySignalsSearchRequest | CompanySignalsSearchRequestDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[CompanySignalsByIdResponse],
            error_mapper=search_company_signals_error_mapper,
            request_options=request_options,
        )

    async def search_contact_signals(
        self,
        body: ContactSignalsSearchRequest | ContactSignalsSearchRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ContactSignalsSearchResponse, SearchContactSignalsErrorBody]:
        """Search for contact signals using identifiers like LinkedIn URL, email, or name + company. This endpoint
        combines search and signal enrichment in a single request.

        *Endpoint*: **(POST) https://api.lusha.com/api/signals/contacts/search**

        **Search Requirements:** Each contact can be identified by:
        - Contact ID
        - LinkedIn URL
        - Email address
        - Full name + Company (name or domain)

        **Default Behavior:**
        - Returns signals from the last 6 months by default
        - Contacts are matched based on provided identifiers
        - Returns both contact data and associated signals

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/signals/contacts/search"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ContactSignalsSearchRequest | ContactSignalsSearchRequestDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ContactSignalsSearchResponse],
            error_mapper=search_contact_signals_error_mapper,
            request_options=request_options,
        )
